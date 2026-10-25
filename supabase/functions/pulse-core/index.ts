// PULSE HQ · pulse-core — núcleo multiagente.
// Ulises planifica y delega; cada agente ejecuta su ciclo con herramientas reales; Calidad revisa;
// los archivos se generan, validan y guardan. Todo queda registrado (pulse_runs, pulse_tool_calls,
// pulse_agent_messages, pulse_memory). La misión avanza con la tarea programada de cada minuto.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { complete, parseJson, type Tier } from './llm.ts';
import { TOOLS, toolCatalog } from './tools.ts';
import { createPdf, createXlsx, validateSheets, inspectFile } from './files.ts';

const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' };
const json = (o: unknown, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' } });

const SUPA_URL = Deno.env.get('SUPABASE_URL') || '';
const ANON = Deno.env.get('SUPABASE_ANON_KEY') || JSON.parse(Deno.env.get('SUPABASE_PUBLISHABLE_KEYS') || '{}').default || '';
const SERVICE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') || '{}').default || '';
const ALLOWED = (Deno.env.get('PULSE_ALLOWED_EMAIL') || '').trim().toLowerCase();
const db = createClient(SUPA_URL, SERVICE, { auth: { persistSession: false } });

const LIMITS = { budgetTokens: 180000, maxPlanTasks: 6, maxAttempts: 2, tickMs: 115000, stepsPerTick: 3, missionsPerDay: 6 };
const BUCKET = 'pulse-deliverables';
const XLSX_MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

type Agent = { id: string; name: string; department: string | null; role: string; responsibilities: string; instructions: string; tools: string[]; model_tier: Tier; max_steps: number };
type Ctx = { user_id: string; mission_id: string; step_id: string | null; agent_id: string };
class BudgetError extends Error {}
class OutOfTime extends Error {}
// Límite de la ejecución actual (la función tiene ~150 s de reloj): los agentes cierran antes de llegar a él.
let deadline = 0;
const timeLeft = () => (deadline ? deadline - Date.now() : Infinity);

let agentCache: Record<string, Agent> | null = null;
async function agents() {
  if (agentCache) return agentCache;
  const { data, error } = await db.from('pulse_agents').select('*').eq('active', true);
  if (error) throw error;
  agentCache = Object.fromEntries((data || []).map((a: Agent) => [a.id, a]));
  return agentCache;
}

// ——— Registro ———
async function message(ctx: Ctx, from: string, to: string, kind: string, content: string, artifact: unknown = null) {
  await db.from('pulse_agent_messages').insert({ user_id: ctx.user_id, mission_id: ctx.mission_id, step_id: ctx.step_id, from_agent: from, to_agent: to, kind, content: content.slice(0, 4000), artifact });
}
async function remember(ctx: Ctx, scope: string, kind: string, content: string, source_url: string | null = null, verified = false) {
  await db.from('pulse_memory').insert({ user_id: ctx.user_id, scope, mission_id: scope === 'org' ? null : ctx.mission_id, agent_id: ctx.agent_id, kind, content: content.slice(0, 2000), source_url, verified, created_by: ctx.agent_id });
}
async function llm(ctx: Ctx, phase: string, tier: Tier, system: string, user: string, maxTokens = 3500) {
  const { data: m } = await db.from('pulse_missions').select('spent_tokens,budget_tokens,status').eq('id', ctx.mission_id).single();
  if (m && (m.spent_tokens || 0) >= (m.budget_tokens || LIMITS.budgetTokens)) throw new BudgetError('Presupuesto de tokens de la misión agotado');
  if (m && ['paused', 'cancelled'].includes(m.status)) throw new Error(`Misión ${m.status}`);
  let used = 0;
  if (timeLeft() < 15000) throw new OutOfTime('Sin tiempo en esta ejecución; la etapa continúa en la siguiente');
  const out = await complete({ tier, system, user, json: true, maxTokens }, async a => {
    await db.from('pulse_runs').insert({ ...ctx, phase, provider: a.provider, model: a.model, input_tokens: a.inTok ?? null, output_tokens: a.outTok ?? null, latency_ms: a.ms, status: a.ok ? 'ok' : 'retry', error: a.error || null });
    if (a.ok) { used = (a.inTok || 0) + (a.outTok || 0); await db.rpc('pulse_core_add_usage', { p_provider: a.provider, p_in: a.inTok || 0, p_out: a.outTok || 0 }); }
  }, deadline);
  await db.from('pulse_missions').update({ spent_tokens: (m?.spent_tokens || 0) + used, updated_at: new Date().toISOString() }).eq('id', ctx.mission_id);
  return out;
}

// ——— Ulises planifica ———
async function planMission(m: any) {
  const A = await agents();
  const ulises = A.ulises;
  const roster = Object.values(A).filter(a => !['ulises', 'calidad'].includes(a.id)).map(a => `- ${a.id}: ${a.name}, ${a.role}. ${a.responsibilities}`).join('\n');
  const ctx: Ctx = { user_id: m.user_id, mission_id: m.id, step_id: null, agent_id: 'ulises' };
  const system = `${ulises.instructions}\nResponde ÚNICAMENTE con un objeto JSON válido.`;
  const user = `MISIÓN: ${m.title}\nOBJETIVO DEL CEO: ${m.objective}\n\nAGENTES DISPONIBLES:\n${roster}\n\nPRIMERO decide el modo: "reply" si el mensaje es un saludo, una conversación, una pregunta breve o algo que puedes responder tú mismo sin investigación ni archivos; "mission" solo si pide trabajo con entregables (estrategias, investigaciones, propuestas, presupuestos, planes, documentos).\nSi es "reply" devuelve: {"mode":"reply","reply":"tu respuesta al CEO en español, cordial, concreta y honesta (no inventes métricas ni estados internos)"}\nSi es "mission" devuelve: {"mode":"mission","understanding":"qué se pide y para qué","constraints":["restricciones"],"deliverables":["entregables finales"],"tasks":[{"seq":1,"agent":"id","title":"título corto","directive":"instrucción concreta y autocontenida, con el resultado esperado","depends_on":[],"acceptance":["criterio verificable"],"output_format":"markdown","evidence":"external|none"}]}\nREGLAS: "evidence":"external" solo para tareas que deban apoyarse en fuentes públicas verificables (iris investigando entidades, mercados o tendencias); "none" para redacción, estrategia, cálculos o planes; ningún agente tiene acceso a métricas internas de PULSE HQ, así que no encargues revisarlas; entre 3 y ${LIMITS.maxPlanTasks} tareas; usa solo los ids listados; depends_on solo puede citar tareas anteriores; si se necesita evidencia externa, la primera tarea es de iris; las cifras y presupuestos van con tomas en "output_format":"xlsx"; el resto en "markdown"; no incluyas la consolidación final, la hará Ulises; no atribuyas al solicitante un perfil, audiencia o cifras que no estén en el objetivo: si faltan, ordena que se declaren como supuestos; para investigar varias marcas o empresas pide a iris como máximo 5 y evidencia por cada una.`;
  const out = await llm(ctx, 'plan', 'smart', system, user, 2500);
  const plan = parseJson<any>(out.text);
  if (plan.mode === 'reply' || (!Array.isArray(plan.tasks) && typeof plan.reply === 'string')) {
    const reply = String(plan.reply || '').trim().slice(0, 3000);
    if (reply.length < 2) throw new Error('Ulises no devolvió una respuesta');
    await message(ctx, 'ulises', 'ceo', 'result', reply, { mode: 'reply' });
    await db.from('pulse_missions').update({ plan: { mode: 'reply' }, status: 'completed', claimed_at: null, owner_agent: 'ulises', updated_at: new Date().toISOString() }).eq('id', m.id);
    return;
  }
  const valid = new Set(Object.keys(A).filter(id => !['ulises', 'calidad'].includes(id)));
  const raw = (Array.isArray(plan.tasks) ? plan.tasks : []).filter((t: any) => valid.has(t?.agent) && String(t?.directive || '').length >= 10).slice(0, LIMITS.maxPlanTasks);
  if (raw.length < 1) throw new Error('El plan de Ulises no contiene tareas válidas');
  const seqMap = new Map<number, number>();
  raw.forEach((t: any, i: number) => seqMap.set(Number(t.seq) || i + 1, i + 1));
  const steps = raw.map((t: any, i: number) => {
    const seq = i + 1;
    const deps = [...new Set((Array.isArray(t.depends_on) ? t.depends_on : []).map((d: unknown) => seqMap.get(Number(d))).filter((d: number | undefined) => d && d < seq))] as number[];
    const agent = A[t.agent];
    return {
      mission_id: m.id, user_id: m.user_id, seq, department: agent.department, agent_id: agent.id, status: 'pending',
      directive: `${String(t.title || '').slice(0, 120)}: ${String(t.directive).slice(0, 1600)}`.replace(/^: /, ''),
      depends_on: deps, acceptance: (Array.isArray(t.acceptance) ? t.acceptance : []).slice(0, 6).map((x: unknown) => String(x).slice(0, 300)),
      output_format: t.output_format === 'xlsx' ? 'xlsx' : 'markdown',
      evidence: t.evidence === 'external' ? 'external' : 'none'
    };
  });
  const finalSeq = steps.length + 1;
  steps.push({
    mission_id: m.id, user_id: m.user_id, seq: finalSeq, department: 'Dirección estratégica', agent_id: 'ulises', status: 'pending',
    directive: 'Consolidar los resultados aprobados de todas las etapas en el documento final de la misión, con resumen ejecutivo, hallazgos con fuentes, estrategia, propuesta, presupuesto, plan de acción, riesgos y próximos pasos.',
    depends_on: steps.map((s: any) => s.seq), acceptance: ['Integra todas las etapas sin contradicciones', 'Cita solo fuentes verificadas', 'Incluye plan de acción y riesgos'], output_format: 'pdf'
  });
  const evidenceBySeq = Object.fromEntries(steps.map((s: any) => [s.seq, s.evidence || 'none']));
  steps.forEach((s: any) => delete s.evidence);
  const { data: inserted, error } = await db.from('pulse_mission_steps').insert(steps).select('id,seq,agent_id,directive');
  if (error) throw error;
  await db.from('pulse_missions').update({ plan: { ...plan, mode: 'mission', evidence_by_seq: evidenceBySeq }, status: 'running', claimed_at: null, owner_agent: 'ulises', updated_at: new Date().toISOString() }).eq('id', m.id);
  await remember(ctx, 'mission', 'decision', `Plan de Ulises: ${String(plan.understanding || '').slice(0, 800)} · Restricciones: ${(plan.constraints || []).join('; ').slice(0, 600)}`);
  for (const s of inserted || []) await message({ ...ctx, step_id: s.id }, 'ulises', s.agent_id, 'request', `Etapa ${s.seq}: ${s.directive}`);
  await message(ctx, 'ulises', 'ceo', 'decision', `Plan registrado con ${inserted?.length} etapas: ${(inserted || []).map(s => `${s.seq}. ${A[s.agent_id]?.name}`).join(' · ')}`);
}

// ——— Ciclo de un agente ———
const norm = (u: string) => String(u || '').trim().replace(/\/$/, '').replace(/^http:/, 'https:');

async function agentLoop(agent: Agent, step: any, m: any, deps: any[], ctx: Ctx) {
  const xlsx = step.output_format === 'xlsx', final = step.output_format === 'pdf';
  const allowedUrls = new Map<string, string>();
  for (const d of deps) for (const s of (Array.isArray(d.sources) ? d.sources : [])) if (s?.url) allowedUrls.set(norm(s.url), s.title || s.url);
  const transcript: string[] = []; const toolsUsed: string[] = [];
  const research = agent.tools.includes('wikipedia_summary') ? ' Método de investigación: localiza cada entidad con wikipedia_search y después obtén evidencia concreta de CADA una con wikipedia_summary o con fetch_url de su sitio oficial; guarda los hechos clave con memory_write y su URL. Reparte tus pasos para cubrir todas las entidades antes de finalizar.' : '';
  const system = `Eres ${agent.name}, ${agent.role} de PULSE HQ${agent.department ? ` (${agent.department})` : ''}. ${agent.instructions}${research}\nResponsabilidades: ${agent.responsibilities}\nCiclo: analizar → planificar → actuar con herramientas → observar → evaluar → finalizar.\nHerramientas permitidas:\n${toolCatalog(agent.tools) || '(ninguna)'}\nResponde SIEMPRE con un único objeto JSON.\nUsar herramienta: {"thought":"breve","action":"tool","tool":"nombre","input":{}}\nTerminar: {"thought":"breve","action":"final","summary":"2-3 frases","content_markdown":"entregable completo en Markdown con # y ##","facts":[{"text":"hecho","source_url":"https://..."}],"sources":[{"title":"...","url":"https://..."}]${xlsx ? ',"table":{"sheets":[{"name":"Presupuesto","columns":["Concepto","Cantidad","Costo unitario MXN","Total MXN"],"rows":[["Concepto",1,1000,"=B2*C2"]],"notes":["Supuestos"]}]}' : ''}}\nREGLAS: no inventes datos, marcas, contactos, cifras ni URLs; solo cita URLs devueltas por herramientas en esta tarea o por etapas anteriores; marca lo no verificado como hipótesis; no afirmes haber contactado, publicado ni pagado nada.${xlsx ? ' La tabla debe usar fórmulas reales de Excel (por ejemplo =B2*C2 y =SUM(D2:D9)) y una fila de totales; las cifras son estimaciones explícitas.' : ''}${final ? ' Este es el documento final para el CEO: profesional, completo, en español, con secciones claras.' : ''}`;
  const depText = deps.length ? 'RESULTADOS APROBADOS DE ETAPAS ANTERIORES (reutilízalos, no los regeneres):\n' + deps.map(d => `--- Etapa ${d.seq} (${d.agent_id}) ---\n${String(d.result || '').slice(0, final ? 2600 : 3200)}\nFuentes: ${(d.sources || []).map((s: any) => s.url).join(' ')}`).join('\n') : '';
  const feedback = step.attempt > 0 && step.review ? `CORRECCIÓN SOLICITADA POR CALIDAD (intento ${step.attempt + 1}):\n- ${(step.review.required_changes || step.review.findings || []).join('\n- ')}` : '';
  const maxIter = Math.max(2, agent.max_steps);
  for (let i = 0; i < maxIter; i++) {
    const last = i === maxIter - 1 || timeLeft() < 45000;
    const user = [`MISIÓN: ${m.title}\nOBJETIVO: ${m.objective}`, `TU TAREA (etapa ${step.seq}): ${step.directive}`, `CRITERIOS DE ACEPTACIÓN:\n- ${(step.acceptance || []).join('\n- ')}`, depText, feedback, transcript.join('\n'), last ? 'DEBES FINALIZAR AHORA con "action":"final".' : ''].filter(Boolean).join('\n\n');
    const out = await llm(ctx, i === 0 ? (step.attempt > 0 ? 'correct' : 'analyze') : 'act', agent.model_tier, system, user, final ? 6000 : 4500);
    let j: any;
    try { j = parseJson(out.text); } catch { transcript.push('SISTEMA: tu respuesta anterior no era JSON válido; responde solo JSON.'); continue; }
    if (j.action === 'tool' && !last) {
      const name = String(j.tool || '');
      if (!agent.tools.includes(name) || !TOOLS[name]) { transcript.push(`SISTEMA: herramienta no permitida: ${name}`); continue; }
      const t0 = Date.now(); let r;
      try { r = await TOOLS[name].run(j.input || {}, { db, userId: ctx.user_id, missionId: ctx.mission_id, agentId: agent.id }); }
      catch (e) { r = { ok: false, output: null, error: String((e as Error)?.message || e).slice(0, 200) }; }
      await db.from('pulse_tool_calls').insert({ ...ctx, tool: name, input: j.input || {}, output: r.ok ? (() => { const sj = JSON.stringify(r.output ?? null); return sj.length <= 20000 ? r.output : { truncated: sj.slice(0, 20000) }; })() : null, ok: r.ok, error: r.error || null, duration_ms: Date.now() - t0 }).then(() => {}, () => {});
      for (const u of r.urls || []) allowedUrls.set(norm(u), u);
      toolsUsed.push(name);
      transcript.push(`OBSERVACIÓN de ${name}: ${JSON.stringify(r.ok ? r.output : { error: r.error }).slice(0, 3500)}`);
      continue;
    }
    if (j.action === 'final' || last) {
      const content = String(j.content_markdown || '').trim();
      if (out.incomplete && !last) { transcript.push('SISTEMA: la respuesta se truncó; entrega una versión más concisa.'); continue; }
      if (content.length < (final ? 1200 : 300)) { if (last) throw new Error('El agente no produjo un entregable suficiente'); transcript.push('SISTEMA: el entregable es demasiado corto o incompleto; desarróllalo.'); continue; }
      const cited = (Array.isArray(j.sources) ? j.sources : []).filter((s: any) => s?.url);
      const sources = [...new Map(cited.filter((s: any) => allowedUrls.has(norm(s.url))).map((s: any) => [norm(s.url), { title: String(s.title || s.url).slice(0, 200), url: String(s.url) }])).values()];
      const dropped = cited.length - sources.length;
      const facts = (Array.isArray(j.facts) ? j.facts : []).slice(0, 12).map((f: any) => ({ text: String(f?.text || '').slice(0, 500), source_url: f?.source_url ? String(f.source_url) : null, verified: !!(f?.source_url && allowedUrls.has(norm(f.source_url))) }));
      return { content: content + (dropped > 0 ? `\n\n> Nota del motor: se retiraron ${dropped} fuente(s) que no provenían de herramientas.` : ''), summary: String(j.summary || '').slice(0, 600), sources, facts, table: j.table, toolsUsed, dropped };
    }
    transcript.push('SISTEMA: acción no reconocida; usa "tool" o "final".');
  }
  throw new Error('El agente no finalizó dentro del límite de iteraciones');
}

// ——— Calidad ———
async function review(m: any, step: any, agent: Agent, res: any, file: any, ctx: Ctx) {
  const A = await agents(); const qa = A.calidad;
  const hard: string[] = [];
  const evidence = (res.toolsUsed || []).filter((t: string) => t === 'wikipedia_summary' || t === 'fetch_url').length;
  const external = (m.plan?.evidence_by_seq?.[step.seq] ?? (agent.id === 'iris' ? 'external' : 'none')) === 'external';
  if (external && res.sources.length < 3) hard.push('La investigación tiene menos de 3 fuentes verificadas por herramientas.');
  if (external && evidence < 3) hard.push(`Solo se consultó evidencia detallada (wikipedia_summary/fetch_url) ${evidence} vez/veces; se necesita al menos una por cada entidad principal (mínimo 3).`);
  if (step.output_format === 'xlsx' && (!file || file.formulas < 1)) hard.push('La hoja de cálculo no contiene fórmulas reales.');
  if (res.dropped > 2) hard.push(`Se citaron ${res.dropped} fuentes no verificadas.`);
  const kind = external ? 'investigación con fuentes públicas' : step.output_format === 'xlsx' ? 'hoja de cálculo financiera' : step.output_format === 'pdf' ? 'documento final consolidado' : 'entregable profesional';
  const system = `${qa.instructions}\nSé exigente y calibrado: 10 solo para trabajo excepcional sin reparos; 7-8 para trabajo correcto listo para cliente; menos de 7 si hay afirmaciones sin fuente presentadas como hechos, supuestos no declarados, cifras sin explicar o incumplimiento de algún criterio. Señala siempre al menos una debilidad concreta en findings.\nResponde SOLO JSON: {"verdict":"approve|revise","score":0,"findings":["observación concreta"],"required_changes":["cambio concreto"]}`;
  const user = `TIPO: ${kind}\nTAREA: ${step.directive}\nCRITERIOS:\n- ${(step.acceptance || []).join('\n- ')}\nFUENTES VERIFICADAS: ${res.sources.map((s: any) => s.url).join(' ') || '(ninguna)'}\n${file ? `ARCHIVO: ${file.name} (${file.bytes} bytes${file.formulas != null ? `, ${file.formulas} fórmulas` : ''})\n` : ''}${res.table ? `TABLA: ${JSON.stringify(res.table).slice(0, 2500)}\n` : ''}\nENTREGABLE:\n${res.content.slice(0, 9000)}\n\nAprueba solo si cumple los criterios, es coherente, no inventa datos y está listo para un cliente. Puntúa de 0 a 10.`;
  const out = await llm({ ...ctx, agent_id: 'calidad' }, 'evaluate', qa.model_tier, system, user, 1200);
  let r: any; try { r = parseJson(out.text); } catch { r = { verdict: 'revise', score: 0, findings: ['El revisor no devolvió un dictamen válido'], required_changes: [] }; }
  const score = Number(r.score) || 0;
  const verdict = hard.length || r.verdict !== 'approve' || score < 7 ? 'revise' : 'approve';
  return { verdict, score, findings: [...hard, ...(r.findings || [])].slice(0, 10).map(String), required_changes: [...hard, ...(r.required_changes || [])].slice(0, 10).map(String), reviewer: 'calidad', at: new Date().toISOString() };
}

// ——— Archivos ———
const slug = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) || 'entregable';
async function saveFile(m: any, step: any, taskId: string, bytes: Uint8Array, name: string, mime: string, variant: string, title: string, agentId: string) {
  const path = `${m.user_id}/core/${m.id}/${step.seq}-v${step.attempt + 1}-${name}`;
  const up = await db.storage.from(BUCKET).upload(path, bytes, { contentType: mime, upsert: true });
  if (up.error) throw new Error(`No se pudo guardar el archivo: ${up.error.message}`);
  const row = { user_id: m.user_id, task_id: taskId, variant, title: title.slice(0, 200), filename: name, storage_path: path, mime_type: mime, source_type: 'agent_generated', quality_level: 'professional_editable', mission_id: m.id, agent_id: agentId, version: step.attempt + 1, review_status: 'pending', size_bytes: bytes.length };
  // Una fila por (tarea, variante): una corrección crea una versión nueva del archivo en Storage y actualiza la fila;
  // las versiones anteriores siguen guardadas en su propia ruta y quedan registradas en pulse_tool_calls.
  const { data: prev } = await db.from('pulse_deliverables').select('id,storage_path,version,review_status').eq('task_id', taskId).eq('variant', variant).maybeSingle();
  if (prev) {
    const { error } = await db.from('pulse_deliverables').update(row).eq('id', prev.id);
    if (error) throw error;
    if (prev.storage_path !== path) await db.from('pulse_tool_calls').insert({ user_id: m.user_id, mission_id: m.id, step_id: step.id, agent_id: agentId, tool: 'version_file', input: { previous: prev.storage_path, previous_version: prev.version, previous_review: prev.review_status }, output: { current: path, version: row.version }, ok: true, duration_ms: 0 }).then(() => {}, () => {});
    return { id: prev.id, name, bytes: bytes.length, path };
  }
  const { data, error } = await db.from('pulse_deliverables').insert(row).select('id').single();
  if (error) throw error;
  return { id: data.id, name, bytes: bytes.length, path };
}

// ——— Ejecutar una etapa ———
async function runStep(m: any, step: any) {
  const A = await agents(); const agent = A[step.agent_id];
  if (!agent) throw new Error(`Agente desconocido: ${step.agent_id}`);
  const ctx: Ctx = { user_id: m.user_id, mission_id: m.id, step_id: step.id, agent_id: agent.id };
  let taskId = step.task_id;
  if (!taskId) {
    const { data: t, error } = await db.from('pulse_tasks').insert({ user_id: m.user_id, department: agent.department, instruction: step.directive.slice(0, 2000), status: 'running' }).select('id').single();
    if (error) throw error; taskId = t.id;
    // el motor produce sus propios archivos: marcamos el trabajo genérico como resuelto para no duplicarlo
    await db.from('pulse_delivery_jobs').insert({ task_id: taskId, user_id: m.user_id, status: 'completed', error: 'Entregables producidos por pulse-core' }).then(() => {}, () => {});
    await db.from('pulse_mission_steps').update({ task_id: taskId }).eq('id', step.id);
  } else await db.from('pulse_tasks').update({ status: 'running', error: null }).eq('id', taskId);

  try {
    const { data: depRows } = step.depends_on?.length ? await db.from('pulse_mission_steps').select('seq,agent_id,result,sources').eq('mission_id', m.id).in('seq', step.depends_on).eq('status', 'completed').order('seq') : { data: [] };
    const res = await agentLoop(agent, step, m, depRows || [], ctx);
    let file: any = null;
    const allSources = step.output_format === 'pdf' ? [...new Map([...(depRows || []).flatMap((d: any) => d.sources || []), ...res.sources].map((s: any) => [norm(s.url), s])).values()] : res.sources;
    if (step.output_format === 'xlsx') {
      const sheets = validateSheets(res.table);
      const x = await createXlsx(sheets, `${m.title} · ${agent.name}`);
      file = { ...(await saveFile(m, step, taskId, x.bytes, `${slug(m.title)}-presupuesto.xlsx`, XLSX_MIME, 'spreadsheet_xlsx', `${m.title}: hoja de cálculo (${agent.name})`, agent.id)), formulas: x.formulas };
      await db.from('pulse_tool_calls').insert({ ...ctx, tool: 'create_xlsx', input: { sheets: sheets.length }, output: { file: file.name, bytes: file.bytes, formulas: x.formulas }, ok: true, duration_ms: 0 });
    } else if (step.output_format === 'pdf') {
      const { data: parts } = await db.from('pulse_mission_steps').select('agent_id').eq('mission_id', m.id);
      const names = [...new Set((parts || []).map((p: any) => A[p.agent_id]?.name).filter(Boolean)), 'Calidad'];
      const bytes = await createPdf(res.content, { title: m.title, subtitle: m.objective, missionId: m.id, owner: 'Ulises · Director de operaciones', agents: names, review: 'Revisado por el agente de Calidad antes de la entrega', date: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }), sources: allSources });
      file = await saveFile(m, step, taskId, bytes, `${slug(m.title)}.pdf`, 'application/pdf', 'report_pdf', `${m.title}: documento final`, agent.id);
      await db.from('pulse_tool_calls').insert({ ...ctx, tool: 'create_pdf', input: { chars: res.content.length }, output: { file: file.name, bytes: file.bytes }, ok: true, duration_ms: 0 });
    } else {
      const md = new TextEncoder().encode(`# ${m.title}\n\n## Etapa ${step.seq} · ${agent.name} (${agent.role})\n\n${res.content}\n\n## Fuentes verificadas\n${res.sources.map((s: any, i: number) => `${i + 1}. ${s.title} — ${s.url}`).join('\n') || 'Sin fuentes externas.'}\n`);
      file = await saveFile(m, step, taskId, md, `etapa-${step.seq}-${slug(agent.name)}.md`, 'text/markdown', 'report_markdown', `${m.title}: etapa ${step.seq} (${agent.name})`, agent.id);
    }
    const rv = await review(m, step, agent, res, file, ctx);
    await db.from('pulse_deliverables').update({ review_status: rv.verdict === 'approve' ? 'approved' : 'rejected' }).eq('id', file.id);
    if (rv.verdict !== 'approve') {
      await message(ctx, 'calidad', agent.id, 'feedback', `Etapa ${step.seq} devuelta (puntuación ${rv.score}/10): ${rv.required_changes.join(' · ')}`, { deliverable_id: file.id });
      if (step.attempt + 1 <= LIMITS.maxAttempts) {
        await db.from('pulse_mission_steps').update({ status: 'pending', attempt: step.attempt + 1, claimed_at: null, review: rv, result: res.content }).eq('id', step.id);
        return { seq: step.seq, outcome: 'revise' };
      }
      await db.from('pulse_mission_steps').update({ status: 'failed', claimed_at: null, review: rv, error: 'No superó la revisión de calidad tras las correcciones permitidas', finished_at: new Date().toISOString() }).eq('id', step.id);
      await db.from('pulse_tasks').update({ status: 'failed', error: 'No superó la revisión de calidad', result: res.content }).eq('id', taskId);
      await message(ctx, 'calidad', 'ulises', 'blocker', `La etapa ${step.seq} de ${agent.name} no superó la revisión. Requiere decisión.`);
      return { seq: step.seq, outcome: 'failed_review' };
    }
    // aprobado: la revisión se registra antes de completar, así el disparador antiguo no crea una revisión vacía
    await db.from('pulse_quality_reviews').upsert({ task_id: taskId, user_id: m.user_id, status: 'passed', quality_level: 'professional_editable', reviewer: 'pulse-core:calidad', findings: rv.findings, reviewed_at: rv.at, updated_at: rv.at }, { onConflict: 'task_id' });
    await db.from('pulse_tasks').update({ status: 'completed', result: res.content.slice(0, 60000), sources: res.sources, error: null }).eq('id', taskId);
    await db.from('pulse_mission_steps').update({ status: 'completed', result: res.content.slice(0, 60000), sources: step.output_format === 'pdf' ? allSources : res.sources, review: rv, claimed_at: null, error: null, finished_at: new Date().toISOString() }).eq('id', step.id);
    await message(ctx, 'calidad', agent.id, 'review', `Etapa ${step.seq} aprobada (${rv.score}/10).`, { deliverable_id: file.id });
    await message(ctx, agent.id, 'ulises', 'result', `${res.summary || 'Etapa terminada.'} Herramientas: ${[...new Set(res.toolsUsed)].join(', ') || 'ninguna'}. Fuentes verificadas: ${res.sources.length}.`, { deliverable_id: file.id, file: file.name });
    for (const f of res.facts.filter((f: any) => f.verified).slice(0, 8)) await remember(ctx, 'shared', 'fact', f.text, f.source_url, true);
    await remember(ctx, 'mission', 'result', `Etapa ${step.seq} (${agent.name}): ${res.summary}`);
    return { seq: step.seq, outcome: 'approved', file: file.name };
  } catch (e) {
    const msg = String((e as Error)?.message || e).slice(0, 300);
    if (e instanceof OutOfTime) {
      // no es un fallo: la etapa vuelve a la cola sin gastar intentos
      await db.from('pulse_mission_steps').update({ status: 'pending', claimed_at: null }).eq('id', step.id);
      return { seq: step.seq, outcome: 'requeued_time' };
    }
    const budget = e instanceof BudgetError;
    // error temporal: la etapa vuelve a la cola sin gastar un intento de calidad; tras 3 fallos queda marcada
    const failures = Number(step.review?.engine_failures || 0) + 1;
    const giveUp = budget || failures >= 3;
    await db.from('pulse_mission_steps').update({ status: giveUp ? 'failed' : 'pending', claimed_at: null, error: msg, review: { ...(step.review || {}), engine_failures: failures } }).eq('id', step.id);
    if (giveUp) await db.from('pulse_tasks').update({ status: 'failed', error: msg }).eq('id', taskId);
    await message(ctx, agent.id, 'ulises', 'blocker', `Error en la etapa ${step.seq}: ${msg}${giveUp ? '' : ' (se reintentará)'}`);
    if (budget) throw e;
    return { seq: step.seq, outcome: giveUp ? 'failed' : 'retry', error: msg };
  }
}

// ——— Cierre de misión ———
async function settle(m: any) {
  const { data: steps } = await db.from('pulse_mission_steps').select('seq,status,task_id,agent_id').eq('mission_id', m.id);
  if (!steps?.length) return 'empty';
  const ctx: Ctx = { user_id: m.user_id, mission_id: m.id, step_id: null, agent_id: 'ulises' };
  if (steps.some((s: any) => s.status === 'failed')) {
    await db.from('pulse_missions').update({ status: 'needs_attention', last_error: 'Una etapa falló o no superó la revisión de calidad', updated_at: new Date().toISOString() }).eq('id', m.id);
    await message(ctx, 'ulises', 'ceo', 'blocker', 'La misión necesita tu atención: una etapa no se pudo completar. Puedes reanudarla para reintentar.');
    return 'needs_attention';
  }
  if (steps.every((s: any) => s.status === 'completed')) {
    const finalStep = steps.reduce((a: any, b: any) => (b.seq > a.seq ? b : a));
    await db.from('pulse_missions').update({ status: 'awaiting_ceo', updated_at: new Date().toISOString() }).eq('id', m.id);
    await db.from('pulse_approvals').insert({ user_id: m.user_id, task_id: finalStep.task_id, department: 'Dirección estratégica', title: `Misión «${m.title}»: entregables listos`.slice(0, 170), description: 'Ulises consolidó el documento final; todas las etapas pasaron la revisión de Calidad. Aprobar no publica ni contacta a nadie.' });
    await message(ctx, 'ulises', 'ceo', 'notice', 'Misión terminada. El documento final y los archivos de cada etapa están en la biblioteca de entregables.');
    return 'completed';
  }
  return 'waiting';
}

// ——— Tick: avanza misiones con la tarea programada ———
async function tick(onlyMission?: string) {
  const t0 = Date.now(); const log: unknown[] = [];
  deadline = deadline > t0 ? Math.min(deadline, t0 + 140000) : t0 + 140000;
  let q = db.from('pulse_missions').select('*').eq('engine', 'core').in('status', ['planning', 'running']).order('created_at').limit(4);
  if (onlyMission) q = q.eq('id', onlyMission);
  const { data: missions } = await q;
  for (const m of missions || []) {
    if (Date.now() - t0 > LIMITS.tickMs) break;
    try {
      if (m.status === 'planning') {
        const stale = new Date(Date.now() - 5 * 60000).toISOString();
        const { data: claimed } = await db.from('pulse_missions').update({ claimed_at: new Date().toISOString() }).eq('id', m.id).eq('status', 'planning').or(`claimed_at.is.null,claimed_at.lt.${stale}`).select('id');
        if (!claimed?.length) continue;
        try { await planMission(m); log.push({ mission: m.id, planned: true }); }
        catch (e) {
          // un plan que falla repetidamente no debe reintentarse para siempre
          const fails = Number(m.plan?.planning_failures || 0) + 1;
          const msg = String((e as Error)?.message || e).slice(0, 300);
          await db.from('pulse_missions').update({ plan: { ...(m.plan || {}), planning_failures: fails }, last_error: msg, claimed_at: null, ...(fails >= 3 ? { status: 'needs_attention' } : {}), updated_at: new Date().toISOString() }).eq('id', m.id);
          if (fails >= 3) await message({ user_id: m.user_id, mission_id: m.id, step_id: null, agent_id: 'ulises' }, 'ulises', 'ceo', 'blocker', `No pude preparar el plan tras 3 intentos: ${msg}`);
          log.push({ mission: m.id, planning_error: msg, fails });
        }
        continue;
      }
      let n = 0;
      while (n < LIMITS.stepsPerTick && timeLeft() > 75000) {
        const { data: claimed, error } = await db.rpc('pulse_core_claim_step', { p_mission: m.id });
        if (error) throw error;
        const step = claimed?.[0];
        if (!step) { log.push({ mission: m.id, settle: await settle(m) }); break; }
        const { data: fresh } = await db.from('pulse_missions').select('status').eq('id', m.id).single();
        if (fresh?.status !== 'running') { await db.from('pulse_mission_steps').update({ status: 'pending', claimed_at: null }).eq('id', step.id); break; }
        log.push(await runStep(m, step)); n++;
      }
    } catch (e) {
      const msg = String((e as Error)?.message || e).slice(0, 300);
      await db.from('pulse_missions').update({ last_error: msg, claimed_at: null, ...(e instanceof BudgetError ? { status: 'needs_attention' } : {}), updated_at: new Date().toISOString() }).eq('id', m.id);
      log.push({ mission: m.id, error: msg });
    }
  }
  return log;
}

// ——— HTTP ———
Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (req.method !== 'POST') return json({ ok: false, error: 'Método no permitido' }, 405);
  if (!SUPA_URL || !SERVICE) return json({ ok: false, error: 'Configuración incompleta' }, 503);
  let body: any = {}; try { body = await req.json(); } catch { /* vacío */ }
  const action = String(body.action || '');

  if (action === 'tick') {
    const token = req.headers.get('x-pulse-scheduler-token') || '';
    const { data } = await db.from('pulse_scheduler_credentials').select('token').eq('id', 1).single();
    if (!token || !data?.token || token !== data.token) return json({ ok: false, error: 'No autorizado' }, 401);
    return json({ ok: true, log: await tick(body.missionId ? String(body.missionId) : undefined) });
  }

  // Diagnóstico de archivos (solo con el token del programador): descarga cada entregable por URL firmada,
  // como lo haría el navegador, y comprueba cabeceras y estructura. No modifica nada.
  if (action === 'diag.files') {
    const token = req.headers.get('x-pulse-scheduler-token') || '';
    const { data: cred } = await db.from('pulse_scheduler_credentials').select('token').eq('id', 1).single();
    if (!token || !cred?.token || token !== cred.token) return json({ ok: false, error: 'No autorizado' }, 401);
    const { data: files } = await db.from('pulse_deliverables').select('id,filename,storage_path,mime_type,size_bytes,review_status').eq('mission_id', String(body.missionId || '')).limit(20);
    const out = [];
    for (const f of files || []) {
      const r: any = { id: f.id, filename: f.filename, mime: f.mime_type, size_db: f.size_bytes };
      try {
        const { data: signed, error } = await db.storage.from(BUCKET).createSignedUrl(f.storage_path, 120);
        if (error || !signed?.signedUrl) throw new Error(error?.message || 'sin URL firmada');
        const res = await fetch(signed.signedUrl);
        const bytes = new Uint8Array(await res.arrayBuffer());
        Object.assign(r, { http: res.status, content_type: res.headers.get('content-type'), content_length: Number(res.headers.get('content-length')) || bytes.length, disposition: res.headers.get('content-disposition'), bytes: bytes.length, check: await inspectFile(bytes, f.mime_type) });
        const dl = await db.storage.from(BUCKET).createSignedUrl(f.storage_path, 120, { download: f.filename });
        if (dl.data?.signedUrl) { const h = await fetch(dl.data.signedUrl, { method: 'HEAD' }); r.download_disposition = h.headers.get('content-disposition'); r.download_http = h.status; }
      } catch (e) { r.error = String((e as Error)?.message || e).slice(0, 200); }
      out.push(r);
    }
    return json({ ok: true, files: out });
  }

  // acciones del CEO
  const authz = req.headers.get('Authorization') || '';
  if (!authz.startsWith('Bearer ') || !ALLOWED) return json({ ok: false, error: 'Acceso no autorizado' }, 401);
  const auth = createClient(SUPA_URL, ANON, { global: { headers: { Authorization: authz } }, auth: { persistSession: false } });
  const { data: u, error: ue } = await auth.auth.getUser(authz.slice(7));
  if (ue || !u.user) return json({ ok: false, error: 'Sesión inválida' }, 401);
  if ((u.user.email || '').toLowerCase() !== ALLOWED) return json({ ok: false, error: 'Cuenta no autorizada' }, 403);
  const userId = u.user.id;

  try {
    if (action === 'mission.create') {
      const title = String(body.title || '').trim(), objective = String(body.objective || '').trim();
      if (title.length < 5 || title.length > 120 || objective.length < 20 || objective.length > 1500) return json({ ok: false, error: 'Título de 5 a 120 caracteres y objetivo de 20 a 1500.' }, 400);
      const day = new Date(); day.setUTCHours(0, 0, 0, 0);
      const { count } = await db.from('pulse_missions').select('id', { count: 'exact', head: true }).eq('user_id', userId).eq('engine', 'core').gte('created_at', day.toISOString());
      if ((count || 0) >= LIMITS.missionsPerDay) return json({ ok: false, error: 'Límite diario de misiones alcanzado' }, 429);
      const { data: m, error } = await db.from('pulse_missions').insert({ user_id: userId, title, objective, status: 'planning', engine: 'core', owner_agent: 'ulises', budget_tokens: LIMITS.budgetTokens, max_iterations: LIMITS.maxAttempts }).select('id').single();
      if (error) throw error;
      await message({ user_id: userId, mission_id: m.id, step_id: null, agent_id: 'ceo' }, 'ceo', 'ulises', 'request', `${title}: ${objective}`, { source: ['office', 'missions'].includes(String(body.source)) ? String(body.source) : 'api', client_ts: new Date().toISOString() });
      // @ts-ignore EdgeRuntime existe en Supabase
      EdgeRuntime.waitUntil(tick(m.id).catch(() => {}));
      return json({ ok: true, missionId: m.id });
    }
    const missionId = String(body.missionId || '');
    const { data: m } = await db.from('pulse_missions').select('*').eq('id', missionId).eq('user_id', userId).single();
    if (!m) return json({ ok: false, error: 'Misión no encontrada' }, 404);
    const ctx: Ctx = { user_id: userId, mission_id: m.id, step_id: null, agent_id: 'ceo' };
    if (action === 'mission.pause') { await db.from('pulse_missions').update({ status: 'paused' }).eq('id', m.id).in('status', ['planning', 'running']); await message(ctx, 'ceo', 'ulises', 'decision', 'El CEO pausó la misión.'); return json({ ok: true }); }
    if (action === 'mission.cancel') { await db.from('pulse_missions').update({ status: 'cancelled' }).eq('id', m.id); await message(ctx, 'ceo', 'ulises', 'decision', 'El CEO canceló la misión.'); return json({ ok: true }); }
    if (action === 'mission.resume') {
      // reintento limpio: se reinician intentos y el contador de fallos del motor (el historial queda en mensajes y ejecuciones)
      await db.from('pulse_mission_steps').update({ status: 'pending', attempt: 0, claimed_at: null, error: null, review: null }).eq('mission_id', m.id).eq('status', 'failed');
      const { count } = await db.from('pulse_mission_steps').select('id', { count: 'exact', head: true }).eq('mission_id', m.id);
      await db.from('pulse_missions').update({ status: count ? 'running' : 'planning', last_error: null, claimed_at: null }).eq('id', m.id);
      await message(ctx, 'ceo', 'ulises', 'decision', 'El CEO reanudó la misión.');
      return json({ ok: true });
    }
    if (action === 'mission.status') {
      const [{ data: steps }, { data: msgs }, { data: runs }] = await Promise.all([
        db.from('pulse_mission_steps').select('seq,agent_id,status,attempt,directive,finished_at,error').eq('mission_id', m.id).order('seq'),
        db.from('pulse_agent_messages').select('from_agent,to_agent,kind,content,created_at').eq('mission_id', m.id).order('created_at', { ascending: false }).limit(15),
        db.from('pulse_runs').select('status,input_tokens,output_tokens').eq('mission_id', m.id)
      ]);
      return json({ ok: true, mission: { id: m.id, title: m.title, status: m.status, spent_tokens: m.spent_tokens, last_error: m.last_error }, steps, messages: msgs, runs: { total: runs?.length || 0, ok: (runs || []).filter((r: any) => r.status === 'ok').length } });
    }
    return json({ ok: false, error: 'Acción no reconocida' }, 400);
  } catch (e) {
    return json({ ok: false, error: String((e as Error)?.message || e).slice(0, 300) }, 500);
  }
});
