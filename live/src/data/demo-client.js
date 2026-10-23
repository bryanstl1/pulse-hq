// SIMULACIÓN EXCLUSIVA PARA PRUEBAS.
// Cliente en memoria con la misma forma que el subconjunto de supabase-js que usa enterprise.js.
// No contacta con ningún servidor, no consume IA y nada de lo que produce es un registro real.
// Todo texto generado lleva el prefijo «[Simulación]».

const uid = () => (globalThis.crypto?.randomUUID?.() || `id-${Math.random().toString(36).slice(2)}-${Date.now()}`);
const iso = (offsetMs = 0) => new Date(Date.now() + offsetMs).toISOString();

const SAMPLE = {
  'Dirección estratégica': 'Prioricé tres líneas de trabajo y propuse un calendario de revisión semanal.',
  'Marketing y crecimiento': 'Propuesta de campaña en tres fases con mensajes por audiencia y métricas de seguimiento.',
  'Producción de contenido': 'Guion de 45 segundos con gancho, desarrollo y llamada a la acción, más lista de tomas.',
  'Ventas y patrocinios': 'Borrador de propuesta de patrocinio con niveles, beneficios y siguiente paso sugerido.',
  'Relaciones públicas y alianzas': 'Lista de criterios para alianzas y un mensaje de primer contacto para revisión.',
  'Eventos y experiencias': 'Esquema de experiencia con recorrido del asistente, riesgos y checklist logístico.',
  'Comunidad': 'Plan de conversación semanal con temas, formatos y respuesta a preguntas frecuentes.',
  'Inteligencia de mercado': 'Resumen de tendencias con tres oportunidades y la evidencia que habría que verificar.',
  'Finanzas y administración': 'Presupuesto por partidas con supuestos explícitos y escenario conservador.',
  'Tecnología y automatización': 'Diseño de una automatización en cuatro pasos con puntos de control manual.'
};

function seed(user) {
  const t = (dept, status, minsAgo, instruction, extra = {}) => ({ id: uid(), user_id: user.id, department: dept, instruction, status, result: status === 'completed' ? `[Simulación] ${SAMPLE[dept]}` : null, sources: null, error: status === 'failed' ? '[Simulación] Límite del proveedor de IA (429). Reintenta más tarde.' : null, created_at: iso(-minsAgo * 60_000 - 40_000), updated_at: iso(-minsAgo * 60_000), ...extra });
  const tasks = [
    t('Marketing y crecimiento', 'running', 0.3, 'Preparar la campaña de lanzamiento de noviembre'),
    t('Producción de contenido', 'completed', 6, 'Escribir el guion del reel de presentación'),
    t('Ventas y patrocinios', 'completed', 50, 'Preparar propuesta para patrocinador de bebidas'),
    t('Tecnología y automatización', 'failed', 20, 'Automatizar el resumen semanal de métricas'),
    t('Dirección estratégica', 'completed', 180, 'Definir prioridades del trimestre')
  ];
  const approvals = [{ id: uid(), user_id: user.id, task_id: tasks[2].id, department: 'Ventas y patrocinios', title: '[Simulación] Propuesta de patrocinio lista para enviar', description: 'Revisa niveles y precios antes de compartirla.', status: 'pending', created_at: iso(-49 * 60_000) }];
  const missionId = uid();
  const missions = [{ id: missionId, user_id: user.id, title: '[Simulación] Lanzamiento de temporada', objective: 'Coordinar investigación, estrategia y propuesta comercial para el lanzamiento.', status: 'running', created_at: iso(-8 * 60_000), updated_at: iso(-60_000) }];
  const steps = [
    { id: uid(), user_id: user.id, mission_id: missionId, seq: 1, department: 'Inteligencia de mercado', directive: 'Reunir tendencias y competencia relevantes', status: 'running', result: null, task_id: null, error: null, started_at: iso(-90_000), finished_at: null },
    { id: uid(), user_id: user.id, mission_id: missionId, seq: 2, department: 'Marketing y crecimiento', directive: 'Convertir hallazgos en estrategia de campaña', status: 'pending', result: null, task_id: null, error: null, started_at: null, finished_at: null },
    { id: uid(), user_id: user.id, mission_id: missionId, seq: 3, department: 'Ventas y patrocinios', directive: 'Traducir la estrategia en propuesta para patrocinadores', status: 'pending', result: null, task_id: null, error: null, started_at: null, finished_at: null }
  ];
  const deliverables = [{ id: uid(), user_id: user.id, task_id: tasks[1].id, title: '[Simulación] Guion del reel', filename: 'guion-reel-simulacion.md', storage_path: 'demo/guion.md', mime_type: 'text/markdown', created_at: iso(-5 * 60_000) }];
  const roles = Object.keys(SAMPLE).map(department => ({ department, professional_title: `[Simulación] Responsable de ${department.toLowerCase()}`, purpose: 'Contrato profesional simulado para pruebas de interfaz.', output_contract: 'Entregable en texto estructurado.', acceptance_criteria: 'Claro, verificable y listo para revisión del CEO.', handoff_to: null, active: true }));
  return { pulse_tasks: tasks, pulse_approvals: approvals, pulse_missions: missions, pulse_mission_steps: steps, pulse_deliverables: deliverables, pulse_agent_roles: roles, pulse_agent_messages: [], pulse_runs: [] };
}

export function createDemoClient({ speed = 1 } = {}) {
  const user = { id: 'demo-ceo', email: 'ceo@simulacion.local' };
  const db = seed(user);
  const listeners = new Set();
  const timers = new Set();
  const later = (ms, fn) => { const h = setTimeout(() => { timers.delete(h); fn(); }, ms / speed); timers.add(h); return h; };

  // la tarea inicial de Marketing termina sola para que la simulación muestre el ciclo completo
  later(16000, () => complete(db.pulse_tasks[0]));
  // la misión avanza por etapas
  scheduleMission(db.pulse_missions[0].id, 14000);

  function complete(task, { approval = false, file = true } = {}) {
    if (task.status !== 'running') return;
    task.status = 'completed'; task.updated_at = iso(); task.result = `[Simulación] ${SAMPLE[task.department]}\n\nEncargo: «${task.instruction}».`;
    if (file) db.pulse_deliverables.unshift({ id: uid(), user_id: user.id, task_id: task.id, title: `[Simulación] ${task.instruction.slice(0, 60)}`, filename: 'entregable-simulacion.md', storage_path: `demo/${task.id}.md`, mime_type: 'text/markdown', created_at: iso() });
    if (approval) db.pulse_approvals.unshift({ id: uid(), user_id: user.id, task_id: task.id, department: task.department, title: `[Simulación] Revisar: ${task.instruction.slice(0, 50)}`, description: 'Propuesta lista para tu decisión.', status: 'pending', created_at: iso() });
  }

  function scheduleMission(missionId, firstMs) {
    const run = () => {
      const m = db.pulse_missions.find(x => x.id === missionId); if (!m || m.status === 'paused') return;
      const steps = db.pulse_mission_steps.filter(s => s.mission_id === missionId).sort((a, b) => a.seq - b.seq);
      const cur = steps.find(s => s.status === 'running');
      if (cur) {
        const task = { id: uid(), user_id: user.id, department: cur.department, instruction: cur.directive, status: 'completed', result: `[Simulación] Aportación de ${cur.department}: ${SAMPLE[cur.department]}`, error: null, sources: null, created_at: cur.started_at, updated_at: iso() };
        db.pulse_tasks.unshift(task);
        Object.assign(cur, { status: 'completed', finished_at: iso(), task_id: task.id, result: task.result });
      }
      const next = steps.find(s => s.status === 'pending');
      if (next) { Object.assign(next, { status: 'running', started_at: iso() }); m.status = 'running'; m.updated_at = iso(); later(32000, run); }
      else {
        m.status = 'awaiting_ceo'; m.updated_at = iso();
        db.pulse_approvals.unshift({ id: uid(), user_id: user.id, task_id: steps.at(-1)?.task_id || null, department: 'Dirección estratégica', title: `[Simulación] Propuesta consolidada: ${m.title.replace('[Simulación] ', '')}`, description: 'Integra las aportaciones de cada etapa.', status: 'pending', created_at: iso() });
      }
    };
    later(firstMs, run);
  }

  function query(table) {
    const filters = []; let orderBy = null, lim = null, patch = null;
    const chain = {
      select() { return chain; },
      eq(col, val) { filters.push([col, val]); return chain; },
      in(col, vals) { filters.push([col, { in: vals }]); return chain; },
      order(col, { ascending = true } = {}) { orderBy = [col, ascending]; return chain; },
      limit(n) { lim = n; return chain; },
      update(value) { patch = value; return chain; },
      then(resolve, reject) {
        try {
          let rows = (db[table] || []).filter(r => filters.every(([c, v]) => (v && v.in ? v.in.includes(r[c]) : r[c] === v)));
          if (patch) { rows.forEach(r => Object.assign(r, patch, { updated_at: iso() })); return Promise.resolve({ data: rows.map(r => ({ id: r.id })), error: null }).then(resolve, reject); }
          if (orderBy) { const [c, asc] = orderBy; rows = [...rows].sort((a, b) => (a[c] > b[c] ? 1 : a[c] < b[c] ? -1 : 0) * (asc ? 1 : -1)); }
          if (lim) rows = rows.slice(0, lim);
          return Promise.resolve({ data: rows.map(r => ({ ...r })), error: null }).then(resolve, reject);
        } catch (e) { return Promise.resolve({ data: null, error: { message: String(e) } }).then(resolve, reject); }
      }
    };
    return chain;
  }

  async function invoke(slug, { body }) {
    if (slug === 'pulse-run') {
      const task = { id: uid(), user_id: user.id, department: body.department, instruction: body.instruction, status: 'queued', result: null, sources: null, error: null, created_at: iso(), updated_at: iso() };
      db.pulse_tasks.unshift(task);
      await new Promise(r => later(1400, r));
      task.status = 'running'; task.updated_at = iso();
      const fails = /\bfall(a|o)\b|error de prueba/i.test(body.instruction);
      await new Promise(r => later(9000, r));
      if (fails) { task.status = 'failed'; task.updated_at = iso(); task.error = '[Simulación] El motor devolvió un error de prueba.'; return { data: { ok: false, error: task.error }, error: null }; }
      complete(task, { approval: /propuesta|aprob|revis/i.test(body.instruction) || body.department === 'Ventas y patrocinios' });
      return { data: { ok: true, taskId: task.id }, error: null };
    }
    if (slug === 'pulse-core') return simulateCore(body);
    if (slug === 'pulse-mission-control') {
      if (body.action === 'create') {
        const id = uid();
        db.pulse_missions.unshift({ id, user_id: user.id, title: `[Simulación] ${body.title}`, objective: body.objective, status: 'running', created_at: iso(), updated_at: iso() });
        const plan = pickDepartments(body.objective);
        plan.forEach((department, i) => db.pulse_mission_steps.push({ id: uid(), user_id: user.id, mission_id: id, seq: i + 1, department, directive: DIRECTIVE[department] || 'Aportar al objetivo de la misión', status: i === 0 ? 'running' : 'pending', result: null, task_id: null, error: null, started_at: i === 0 ? iso() : null, finished_at: null }));
        scheduleMission(id, 30000);
        return { data: { ok: true, missionId: id }, error: null };
      }
      const m = db.pulse_missions.find(x => x.id === body.missionId);
      if (!m) return { data: { ok: false, error: 'Misión no encontrada' }, error: null };
      if (body.action === 'pause') m.status = 'paused';
      if (body.action === 'resume' || body.action === 'retry') { m.status = 'running'; scheduleMission(m.id, 6000); }
      if (body.action === 'revise') m.status = 'revising';
      m.updated_at = iso();
      return { data: { ok: true }, error: null };
    }
    return { data: null, error: { message: `Función ${slug} no simulada.` } };
  }

  // ——— Motor multiagente SIMULADO (misma forma de registros que pulse-core, sin IA ni servidor) ———
  const SIM_PLAN = [
    { agent: 'iris', dept: 'Inteligencia de mercado', fmt: 'markdown', text: 'Investigar el contexto y reunir evidencia' },
    { agent: 'rocco', dept: 'Ventas y patrocinios', fmt: 'markdown', text: 'Convertir la evidencia en propuesta comercial' },
    { agent: 'tomas', dept: 'Finanzas y administración', fmt: 'xlsx', text: 'Estimar el presupuesto en hoja de cálculo' }
  ];
  const NAMES = { iris: 'Iris', rocco: 'Rocco', tomas: 'Tomás', ulises: 'Ulises', calidad: 'Calidad', ceo: 'CEO' };
  const msg = (m, step, from, to, kind, content, artifact = null) => db.pulse_agent_messages.unshift({ id: uid(), user_id: user.id, mission_id: m.id, step_id: step?.id || null, from_agent: from, to_agent: to, kind, content: `[Simulación] ${content}`, artifact: { ...(artifact || {}), simulated: true }, created_at: iso() });
  const run = (m, step, agent, phase) => db.pulse_runs.unshift({ id: uid(), user_id: user.id, mission_id: m.id, step_id: step?.id || null, agent_id: agent, phase, provider: 'simulación', model: 'sin-ia', input_tokens: 0, output_tokens: 0, latency_ms: 0, status: 'ok', created_at: iso() });

  function coreAdvance(missionId) {
    const m = db.pulse_missions.find(x => x.id === missionId);
    if (!m || !['running'].includes(m.status)) return;
    const steps = db.pulse_mission_steps.filter(x => x.mission_id === m.id).sort((a, b) => a.seq - b.seq);
    const next = steps.find(x => x.status === 'pending' && (x.depends_on || []).every(d => steps.find(y => y.seq === d)?.status === 'completed'));
    if (!next) {
      if (steps.length && steps.every(x => x.status === 'completed')) {
        m.status = 'awaiting_ceo'; m.updated_at = iso();
        db.pulse_approvals.unshift({ id: uid(), user_id: user.id, task_id: steps.at(-1).task_id, department: 'Dirección estratégica', title: `[Simulación] Misión «${m.title.replace('[Simulación] ', '')}»: entregables listos`, description: 'Simulación: no es un entregable real.', status: 'pending', created_at: iso() });
        msg(m, null, 'ulises', 'ceo', 'notice', 'Misión terminada (simulada).');
      }
      return;
    }
    Object.assign(next, { status: 'running', claimed_at: iso(), started_at: next.started_at || iso() });
    later(2500, () => { if (m.status !== 'running') return; run(m, next, next.agent_id, next.attempt ? 'correct' : 'analyze'); });
    later(5000, () => { if (m.status !== 'running') return; run(m, next, next.agent_id, 'act'); });
    later(7500, () => { if (m.status !== 'running') return; run(m, next, 'calidad', 'evaluate'); });
    later(9500, () => {
      if (m.status !== 'running') return;
      const ext = next.output_format === 'xlsx' ? 'xlsx' : next.output_format === 'pdf' ? 'pdf' : 'md';
      const task = { id: uid(), user_id: user.id, department: next.department, instruction: next.directive, status: 'completed', result: `[Simulación] Aportación de ${NAMES[next.agent_id]}.`, sources: null, error: null, created_at: next.started_at, updated_at: iso() };
      db.pulse_tasks.unshift(task);
      const file = { id: uid(), user_id: user.id, task_id: task.id, mission_id: m.id, agent_id: next.agent_id, title: `[Simulación] Etapa ${next.seq} (${NAMES[next.agent_id]})`, filename: `etapa-${next.seq}-simulacion.${ext}`, storage_path: `demo/${task.id}.${ext}`, mime_type: 'text/markdown', version: next.attempt + 1, review_status: 'approved', size_bytes: 1024, source_type: 'simulation', created_at: iso() };
      db.pulse_deliverables.unshift(file);
      Object.assign(next, { status: 'completed', task_id: task.id, result: task.result, finished_at: iso(), claimed_at: null, review: { verdict: 'approve', score: 8 } });
      msg(m, next, 'calidad', next.agent_id, 'review', `Etapa ${next.seq} aprobada (8/10).`, { deliverable_id: file.id });
      msg(m, next, next.agent_id, 'ulises', 'result', `Etapa ${next.seq} terminada.`, { deliverable_id: file.id });
      later(1500, () => coreAdvance(m.id));
    });
  }

  function simulateCore(body) {
    if (body.action === 'mission.create') {
      const m = { id: uid(), user_id: user.id, title: `[Simulación] ${body.title}`, objective: body.objective, status: 'planning', engine: 'core', claimed_at: null, spent_tokens: 0, budget_tokens: 0, last_error: null, created_at: iso(), updated_at: iso() };
      db.pulse_missions.unshift(m);
      msg(m, null, 'ceo', 'ulises', 'request', `${body.title}: ${body.objective}`, { source: body.source || 'api' });
      later(2500, () => { m.claimed_at = iso(); });
      later(5000, () => {
        if (m.status !== 'planning') return;
        run(m, null, 'ulises', 'plan');
        const plan = [...SIM_PLAN, { agent: 'ulises', dept: 'Dirección estratégica', fmt: 'pdf', text: 'Consolidar el documento final' }];
        plan.forEach((p, i) => {
          const step = { id: uid(), user_id: user.id, mission_id: m.id, seq: i + 1, department: p.dept, agent_id: p.agent, directive: `[Simulación] ${p.text}`, status: 'pending', result: null, task_id: null, error: null, attempt: 0, claimed_at: null, review: null, output_format: p.fmt, depends_on: i ? (p.agent === 'ulises' ? [1, 2, 3] : [i]) : [], started_at: null, finished_at: null };
          db.pulse_mission_steps.push(step);
          msg(m, step, 'ulises', p.agent, 'request', `Etapa ${i + 1}: ${p.text}`);
        });
        msg(m, null, 'ulises', 'ceo', 'decision', `Plan registrado con ${plan.length} etapas (simulado).`);
        m.status = 'running'; m.updated_at = iso();
        later(1500, () => coreAdvance(m.id));
      });
      return { data: { ok: true, missionId: m.id }, error: null };
    }
    const m = db.pulse_missions.find(x => x.id === body.missionId);
    if (!m) return { data: { ok: false, error: 'Misión no encontrada' }, error: null };
    if (body.action === 'mission.pause') m.status = 'paused';
    if (body.action === 'mission.cancel') m.status = 'cancelled';
    if (body.action === 'mission.resume') { m.status = 'running'; db.pulse_mission_steps.filter(x => x.mission_id === m.id && x.status === 'running').forEach(x => Object.assign(x, { status: 'pending', claimed_at: null })); later(1000, () => coreAdvance(m.id)); }
    m.updated_at = iso();
    return { data: { ok: true }, error: null };
  }

  const client = {
    simulated: true,
    auth: {
      async getUser() { return { data: { user }, error: null }; },
      onAuthStateChange(fn) { listeners.add(fn); return { data: { subscription: { unsubscribe() { listeners.delete(fn); } } } }; },
      async signInWithOtp() { return { error: null }; },
      async verifyOtp() { return { error: null }; },
      async signOut() { return { error: null }; }
    },
    from: query,
    functions: { invoke },
    storage: { from: () => ({ async createSignedUrl() { return { data: null, error: { message: 'Simulación: usa demoFileUrl' } }; } }) },
    demoFileUrl(record) {
      const task = db.pulse_tasks.find(t => t.id === record.task_id);
      const text = `# ${record.title}\n\nArchivo generado por la SIMULACIÓN de PULSE HQ. No es un entregable real.\n\n${task?.result || ''}\n`;
      return URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
    },
    dispose() { timers.forEach(clearTimeout); timers.clear(); }
  };
  return client;
}

const DIRECTIVE = {
  'Inteligencia de mercado': 'Reunir evidencia y tendencias relevantes',
  'Marketing y crecimiento': 'Diseñar la estrategia y los mensajes',
  'Producción de contenido': 'Proponer piezas y guiones',
  'Ventas y patrocinios': 'Preparar la propuesta comercial',
  'Finanzas y administración': 'Estimar presupuesto y riesgos',
  'Eventos y experiencias': 'Diseñar la experiencia y su logística',
  'Comunidad': 'Plan de participación de la audiencia',
  'Relaciones públicas y alianzas': 'Identificar aliados y mensajes',
  'Tecnología y automatización': 'Definir la automatización necesaria',
  'Dirección estratégica': 'Consolidar y priorizar la propuesta'
};
function pickDepartments(text) {
  const t = text.toLowerCase(); const out = ['Inteligencia de mercado'];
  if (/evento|festival|experiencia/.test(t)) out.push('Eventos y experiencias');
  if (/contenido|video|reel|guion/.test(t)) out.push('Producción de contenido');
  if (/patrocin|venta|cliente/.test(t)) out.push('Ventas y patrocinios');
  if (/presupuesto|costo|finanz/.test(t)) out.push('Finanzas y administración');
  if (out.length < 3) out.push('Marketing y crecimiento');
  out.push('Dirección estratégica');
  return [...new Set(out)].slice(0, 5);
}
