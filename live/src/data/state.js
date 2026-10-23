const LIVE = new Set(['running','processing','in_progress']);
const WAIT = new Set(['pending','awaiting_ceo','waiting_approval']);
/** No inferred work: only an explicit server record with a fresh timestamp may become running. */
export function normalizeActivity(input,now=Date.now()) {
  if (!input || !input.source || input.source!=='server' || !input.record) return {kind:'unconnected',label:'Muestra sin conexión',actionable:false};
  const record=input.record;
  const status=String(record.status||'').toLowerCase();
  const timestamp=Date.parse(record.updated_at||record.started_at||record.created_at||'');
  if (LIVE.has(status) && Number.isFinite(timestamp) && Math.abs(now-timestamp)<=15*60_000)
    return {kind:'running',label:'En ejecución verificada',actionable:true};
  if (WAIT.has(status)) return {kind:'review',label:'Pendiente de revisión',actionable:true};
  if (status==='completed') return {kind:'completed',label:'Trabajo registrado',actionable:true};
  return {kind:'idle',label:LIVE.has(status)?'Estado sin actualizar':'Disponible',actionable:false};
}
