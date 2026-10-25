// Estados de los agentes a partir de los registros del motor multiagente (pulse-core).
// Cada estado se apoya en filas concretas de Supabase y devuelve sus identificadores como evidencia:
//   Recibiendo         → la instrucción o la etapa está registrada/reclamada y aún no hay llamadas al modelo
//   Trabajando         → existen filas en pulse_runs para esa misión/etapa desde que se reclamó
//   Resultado recibido → etapa completada, aprobada por Calidad y con mensaje «result» del agente
// Sin registros que lo respalden no se devuelve ningún estado.

export const CORE_AGENT_BY_DEPT = {
  'Dirección estratégica': 'ulises', 'Marketing y crecimiento': 'kiki', 'Producción de contenido': 'mia',
  'Ventas y patrocinios': 'rocco', 'Relaciones públicas y alianzas': 'lila', 'Eventos y experiencias': 'luz',
  'Comunidad': 'cata', 'Inteligencia de mercado': 'iris', 'Finanzas y administración': 'tomas', 'Tecnología y automatización': 'bit'
};
export const CORE_NAMES = { ulises: 'Ulises', kiki: 'Kiki', mia: 'Mía', rocco: 'Rocco', lila: 'Lila', luz: 'Luz', cata: 'Cata', iris: 'Iris', tomas: 'Tomás', bit: 'Bit', calidad: 'Calidad', ceo: 'CEO' };
export const DEPT_BY_CORE_AGENT = Object.fromEntries(Object.entries(CORE_AGENT_BY_DEPT).map(([d, a]) => [a, d]));

const ACTIVE = new Set(['planning', 'running', 'reviewing']);
export const CLAIM_FRESH_MS = 7 * 60_000;   // el motor reclama de nuevo una etapa a los 6 min
export const RESULT_FRESH_MS = 30 * 60_000;
const PHASE = { plan: 'Planificando el trabajo', analyze: 'Analizando la tarea', act: 'Usando herramientas', correct: 'Corrigiendo lo que pidió Calidad', evaluate: 'Calidad revisa el entregable' };

const t = iso => Date.parse(iso || '') || 0;
export const isCore = m => m?.engine === 'core';
export const shortId = id => String(id || '').slice(0, 8);

/** Ejecuciones de modelo de una etapa desde su último reclamo, en orden cronológico. */
export function stepRuns(snapshot, step, since = t(step.claimed_at || step.started_at) - 2000) {
  return (snapshot.runs || []).filter(r => r.step_id === step.id && t(r.created_at) >= since).sort((a, b) => t(a.created_at) - t(b.created_at));
}

export function coreIntent(snapshot, dept, now = Date.now()) {
  const agentId = CORE_AGENT_BY_DEPT[dept]; if (!agentId) return null;
  const missions = (snapshot.missions || []).filter(isCore);
  if (!missions.length) return null;
  const byId = Object.fromEntries(missions.map(m => [m.id, m]));
  const msgs = snapshot.messages || [];
  const runs = snapshot.runs || [];

  // Ulises recibe y planifica la misión
  if (agentId === 'ulises') {
    // respuesta directa (sin misión): saludo o pregunta breve contestada por Ulises
    const reply = msgs.filter(x => x.from_agent === 'ulises' && x.to_agent === 'ceo' && x.kind === 'result' && x.artifact?.mode === 'reply' && now - t(x.created_at) <= RESULT_FRESH_MS && byId[x.mission_id])
      .sort((a, b) => t(b.created_at) - t(a.created_at))[0];
    const planningNow = missions.some(x => x.status === 'planning');
    if (reply && !planningNow) return { kind: 'completed', label: 'Resultado recibido', detail: 'Ulises respondió directamente (sin abrir misión)', mission: { id: reply.mission_id, title: byId[reply.mission_id].title, seq: 0 }, evidence: { mission: reply.mission_id, message: reply.id } };
    const m = missions.filter(x => x.status === 'planning').sort((a, b) => t(b.created_at) - t(a.created_at))[0];
    if (m) {
      const req = msgs.find(x => x.mission_id === m.id && x.from_agent === 'ceo' && x.kind === 'request');
      const plan = runs.filter(r => r.mission_id === m.id && r.phase === 'plan').sort((a, b) => t(b.created_at) - t(a.created_at))[0];
      const mission = { id: m.id, title: m.title, seq: 0 };
      if (!plan) return { kind: 'receiving', label: 'Recibiendo', detail: m.claimed_at ? 'El motor tomó la misión; preparando el plan' : 'Instrucción registrada en Supabase; esperando al motor', mission, evidence: { mission: m.id, message: req?.id } };
      return { kind: 'running', label: 'Trabajando', detail: `${PHASE.plan} · ${plan.provider}/${plan.model}`, mission, evidence: { mission: m.id, run: plan.id } };
    }
  }

  const steps = (snapshot.steps || []).filter(s => s.agent_id === agentId && byId[s.mission_id]);
  const live = steps.filter(s => s.status === 'running' && now - t(s.claimed_at || s.started_at) <= CLAIM_FRESH_MS && ACTIVE.has(byId[s.mission_id].status))
    .sort((a, b) => t(b.claimed_at) - t(a.claimed_at))[0];
  if (live) {
    const m = byId[live.mission_id];
    const mission = { id: m.id, title: m.title, seq: live.seq, directive: live.directive };
    const rs = stepRuns(snapshot, live);
    if (!rs.length) return { kind: 'receiving', label: 'Recibiendo', detail: `Etapa ${live.seq} reclamada por el motor${live.attempt ? ` · intento ${live.attempt + 1}` : ''}`, mission, evidence: { mission: m.id, step: live.id } };
    const last = rs[rs.length - 1];
    const detail = last.agent_id === 'calidad' ? PHASE.evaluate : `${PHASE[last.phase] || 'Trabajando'} · ${rs.filter(r => r.agent_id !== 'calidad').length} llamadas a ${last.model}`;
    return { kind: 'running', label: 'Trabajando', detail, mission, evidence: { mission: m.id, step: live.id, run: last.id } };
  }

  const done = steps.filter(s => s.status === 'completed' && now - t(s.finished_at) <= RESULT_FRESH_MS).sort((a, b) => t(b.finished_at) - t(a.finished_at))[0];
  if (done) {
    const res = msgs.find(x => x.step_id === done.id && x.kind === 'result' && x.from_agent === agentId);
    if (res) {
      const m = byId[done.mission_id];
      return { kind: 'completed', label: 'Resultado recibido', detail: `Etapa ${done.seq} aprobada por Calidad${done.review?.score != null ? ` (${done.review.score}/10)` : ''}`, mission: { id: m.id, title: m.title, seq: done.seq }, evidence: { mission: m.id, step: done.id, message: res.id, deliverable: res.artifact?.deliverable_id } };
    }
  }

  const failed = steps.find(s => s.status === 'failed' && byId[s.mission_id].status === 'needs_attention');
  if (failed) return { kind: 'failed', label: 'Etapa sin completar', detail: failed.error || 'Error sin detalle', error: failed.error || 'Error sin detalle', mission: { id: failed.mission_id, title: byId[failed.mission_id].title, seq: failed.seq }, evidence: { mission: failed.mission_id, step: failed.id } };

  const waiting = steps.filter(s => s.status === 'pending' && ACTIVE.has(byId[s.mission_id].status)).sort((a, b) => a.seq - b.seq)[0];
  if (waiting) {
    const m = byId[waiting.mission_id];
    return { kind: 'mission', label: `Misión · etapa ${waiting.seq} en espera`, detail: waiting.attempt ? `Calidad pidió cambios · intento ${waiting.attempt + 1}` : 'Espera a que terminen las etapas previas', mission: { id: m.id, title: m.title, seq: waiting.seq, directive: waiting.directive }, evidence: { mission: m.id, step: waiting.id } };
  }
  return null;
}

/** Hilo de conversación de un agente con el motor multiagente (mensajes reales entre agentes). */
export function coreEntries(snapshot, dept) {
  const agentId = CORE_AGENT_BY_DEPT[dept]; if (!agentId) return [];
  const missions = (snapshot.missions || []).filter(isCore);
  const msgs = snapshot.messages || [];
  const out = [];
  if (agentId === 'ulises') {
    for (const m of missions) {
      const mine = msgs.filter(x => x.mission_id === m.id && (x.to_agent === 'ceo' || (x.from_agent === 'ceo' && x.to_agent === 'ulises') || (x.to_agent === 'ulises' && ['result', 'blocker'].includes(x.kind)))).sort((a, b) => t(a.created_at) - t(b.created_at));
      out.push({ type: 'mission', at: m.created_at, mission: m, messages: mine });
    }
  } else {
    for (const s of (snapshot.steps || []).filter(x => x.agent_id === agentId && missions.some(m => m.id === x.mission_id))) {
      const m = missions.find(x => x.id === s.mission_id);
      const mine = msgs.filter(x => x.step_id === s.id).sort((a, b) => t(a.created_at) - t(b.created_at));
      out.push({ type: 'step', at: mine[0]?.created_at || s.started_at || m.created_at, mission: m, step: s, messages: mine });
    }
  }
  return out;
}

/** Recuento de ejecuciones y tokens por misión o etapa. */
export function runStats(snapshot, { missionId, stepId } = {}) {
  const rs = (snapshot.runs || []).filter(r => (!missionId || r.mission_id === missionId) && (!stepId || r.step_id === stepId));
  return { total: rs.length, ok: rs.filter(r => r.status === 'ok').length, retries: rs.filter(r => r.status !== 'ok').length, tokens: rs.reduce((n, r) => n + (r.input_tokens || 0) + (r.output_tokens || 0), 0), models: [...new Set(rs.map(r => `${r.provider}/${r.model}`))] };
}
