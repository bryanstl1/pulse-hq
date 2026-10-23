// Traduce registros del servidor en intenciones visuales para cada agente.
// Regla: ninguna animación de trabajo, revisión, error o misión sin un registro que la respalde.
import { normalizeActivity } from './state.js';

const STEP_LIVE = new Set(['running', 'processing', 'in_progress', 'active']);
const FAIL = new Set(['failed', 'error']);
const RECENT_DONE_MS = 30 * 60_000;
const RECENT_FAIL_MS = 24 * 3600_000;
const STEP_FRESH_MS = 30 * 60_000;

const ts = r => Date.parse(r?.updated_at || r?.finished_at || r?.started_at || r?.created_at || '') || 0;

/**
 * @returns {Record<string, {kind:string,label:string,source:'server'|'none',taskId?:string,approvals:any[],mission?:{id:string,title:string,seq:number}|null,error?:string}>}
 */
export function deriveIntents(snapshot, departments, { connected, now = Date.now() } = {}) {
  const out = {};
  for (const dept of departments) {
    if (!connected) { out[dept] = { kind: 'unconnected', label: 'Actividad no consultada', source: 'none', approvals: [], mission: null }; continue; }
    const tasks = (snapshot.tasks || []).filter(t => t.department === dept).sort((a, b) => ts(b) - ts(a));
    const approvals = (snapshot.approvals || []).filter(a => a.department === dept && a.status === 'pending');
    const steps = (snapshot.steps || []).filter(s => s.department === dept);
    const running = tasks.find(t => normalizeActivity({ source: 'server', record: t }, now).kind === 'running');
    const liveStep = steps.find(s => STEP_LIVE.has(String(s.status).toLowerCase()) && !s.finished_at && (now - (Date.parse(s.started_at || '') || 0)) <= STEP_FRESH_MS);
    const missionRec = liveStep ? (snapshot.missions || []).find(m => m.id === liveStep.mission_id) : null;
    const mission = liveStep ? { id: liveStep.mission_id, title: missionRec?.title || 'Misión registrada', seq: liveStep.seq, directive: liveStep.directive } : null;
    const latest = tasks[0];
    const base = { source: 'server', approvals, mission };
    if (running) out[dept] = { ...base, kind: 'running', label: 'En ejecución (servidor)', taskId: running.id };
    else if (approvals.length) out[dept] = { ...base, kind: 'review', label: approvals.length === 1 ? '1 revisión te espera' : `${approvals.length} revisiones te esperan`, taskId: approvals[0].task_id };
    else if (mission) out[dept] = { ...base, kind: 'mission', label: `Misión · etapa ${mission.seq}` };
    else if (latest && FAIL.has(String(latest.status).toLowerCase()) && now - ts(latest) <= RECENT_FAIL_MS) out[dept] = { ...base, kind: 'failed', label: 'El último encargo falló', taskId: latest.id, error: latest.error || 'Error sin detalle' };
    else if (latest && latest.status === 'completed' && now - ts(latest) <= RECENT_DONE_MS) out[dept] = { ...base, kind: 'completed', label: 'Resultado listo', taskId: latest.id };
    else out[dept] = { ...base, kind: 'idle', label: tasks.length ? 'Sin encargos en curso' : 'Aún sin encargos', source: 'server' };
  }
  return out;
}

/** Recuentos para la oficina del CEO. */
export function companySummary(snapshot, connected) {
  if (!connected) return null;
  const tasks = snapshot.tasks || [];
  const count = s => tasks.filter(t => t.status === s).length;
  return {
    tasks: tasks.length, completed: count('completed'), failed: tasks.filter(t => FAIL.has(t.status)).length,
    running: tasks.filter(t => normalizeActivity({ source: 'server', record: t }).kind === 'running').length,
    approvals: (snapshot.approvals || []).filter(a => a.status === 'pending').length,
    missions: (snapshot.missions || []).length,
    activeMissions: (snapshot.missions || []).filter(m => !['completed', 'reviewed', 'cancelled'].includes(m.status)).length,
    deliverables: (snapshot.deliverables || []).length,
    loadedAt: snapshot.loadedAt
  };
}
