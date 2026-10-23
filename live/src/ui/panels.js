// Plantillas de los paneles. Todo texto procedente del servidor pasa por esc().
import { ROOMS, AGENTS, agentForDept, roomById } from '../data/roster.js';
import { normalizeActivity } from '../data/state.js';
import { HOTSPOT_INFO } from '../world/layout.js';

export const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const STATUS = { queued: 'En cola', running: 'En ejecución', processing: 'En ejecución', in_progress: 'En ejecución', completed: 'Completado', failed: 'Falló', error: 'Falló', pending: 'Pendiente', paused: 'En pausa', approved: 'Aprobada', rejected: 'Rechazada', awaiting_ceo: 'Espera al CEO', reviewed: 'Revisada', revising: 'En revisión', active: 'Activa', cancelled: 'Cancelada' };
const st = s => STATUS[String(s || '').toLowerCase()] || esc(s || 'Sin estado');

export function ago(iso) {
  const t = Date.parse(iso || ''); if (!t) return '';
  const s = Math.max(0, (Date.now() - t) / 1000);
  if (s < 50) return 'hace un momento';
  if (s < 3600) return `hace ${Math.round(s / 60)} min`;
  if (s < 86400) return `hace ${Math.round(s / 3600)} h`;
  return new Date(t).toLocaleDateString('es-MX', { day: 'numeric', month: 'short' });
}
const portrait = (a, cls = '') => `<img class="portrait ${cls}" src="./assets/portraits/${a.portrait}.webp" alt="" loading="lazy">`;
const excerpt = (t, n = 360) => { const s = String(t || ''); return s.length > n ? esc(s.slice(0, n)) + '…' : esc(s); };
const sourceNote = mode => mode === 'demo' ? '<p class="note sim">Datos de la SIMULACIÓN local. Nada de esto existe en Supabase.</p>' : '';

export function sessionChip(app) {
  if (app.mode === 'demo') return { cls: 'sim', text: 'Simulación' };
  if (app.connected) return { cls: 'ok', text: app.ent.loading ? 'Actualizando…' : 'CEO conectado' };
  return { cls: 'off', text: 'Sin sesión' };
}

function intentPill(intent, local) {
  if (local?.kind === 'sending') return '<span class="pill local">Enviando instrucción · local</span>';
  const map = { running: ['run', 'Trabajando · servidor'], review: ['review', 'Revisión pendiente · servidor'], failed: ['fail', 'Último encargo falló · servidor'], mission: ['mission', 'En misión · servidor'], completed: ['done', 'Resultado reciente · servidor'], idle: ['idle', 'Sin encargos en curso'], unconnected: ['off', 'Actividad no consultada'] };
  const [c, t] = map[intent.kind] || map.idle;
  return `<span class="pill ${c}">${t}</span>`;
}

function taskThread(app, dept, agent) {
  const s = app.ent.snapshot;
  const tasks = (s.tasks || []).filter(t => t.department === dept).sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)).slice(-12);
  if (!tasks.length) return `<div class="empty"><p>Todavía no hay encargos registrados con ${esc(agent.name)}.</p><p class="muted">Escribe una instrucción abajo: se registrará como tarea y la ejecutará el motor existente.</p></div>`;
  return tasks.map(t => {
    const files = (s.deliverables || []).filter(d => d.task_id === t.id);
    const appr = (s.approvals || []).filter(a => a.task_id === t.id);
    const live = normalizeActivity({ source: 'server', record: t }).kind === 'running';
    let reply;
    if (live || ['queued', 'running', 'processing', 'in_progress'].includes(t.status)) reply = `<div class="msg agent working">${portrait(agent, 'xs')}<div><p><span class="typing"><i></i><i></i><i></i></span> ${live ? 'Trabajando en ello' : 'Estado sin actualizar'}</p><small>Registro del servidor · ${st(t.status)} · ${ago(t.updated_at || t.created_at)}</small></div></div>`;
    else if (t.status === 'completed') reply = `<div class="msg agent">${portrait(agent, 'xs')}<div><p>${excerpt(t.result)}</p><div class="chips">${files.map(f => `<button class="chip file" data-action="file" data-id="${esc(f.id)}">⤓ ${esc(f.filename || f.title)}</button>`).join('')}<button class="chip" data-action="task" data-id="${esc(t.id)}">Ver completo</button></div>${appr.filter(a => a.status === 'pending').map(a => approvalRow(a)).join('')}<small>${ago(t.updated_at || t.created_at)}${appr.length && !appr.some(a => a.status === 'pending') ? ' · revisión ' + st(appr[0].status).toLowerCase() : ''}</small></div></div>`;
    else reply = `<div class="msg agent error">${portrait(agent, 'xs')}<div><p><b>No se completó.</b> ${excerpt(t.error || 'Error sin detalle', 220)}</p><div class="chips"><button class="chip" data-action="retry" data-id="${esc(t.id)}">Reintentar (nuevo encargo)</button><button class="chip" data-action="task" data-id="${esc(t.id)}">Detalle</button></div><small>${st(t.status)} · ${ago(t.updated_at || t.created_at)}</small></div></div>`;
    return `<div class="msg ceo"><div><p>${esc(t.instruction)}</p><small>Tú · ${ago(t.created_at)}</small></div></div>${reply}`;
  }).join('');
}

function approvalRow(a) {
  return `<div class="approval"><div><b>${esc(a.title || 'Revisión del CEO')}</b>${a.description ? `<small>${esc(a.description)}</small>` : ''}</div><div class="row"><button class="btn ghost" data-action="decide" data-choice="rejected" data-id="${esc(a.id)}">Rechazar</button><button class="btn ok" data-action="decide" data-choice="approved" data-id="${esc(a.id)}">Aprobar</button></div></div>`;
}

function workList(app, dept) {
  const s = app.ent.snapshot;
  const tasks = (s.tasks || []).filter(t => t.department === dept);
  const approvals = (s.approvals || []).filter(a => a.department === dept && a.status === 'pending');
  const steps = (s.steps || []).filter(x => x.department === dept).slice(-6).reverse();
  const active = tasks.filter(t => ['queued', 'running', 'processing', 'in_progress'].includes(t.status));
  const recent = tasks.filter(t => !active.includes(t)).slice(0, 6);
  const files = (s.deliverables || []).filter(d => tasks.some(t => t.id === d.task_id)).slice(0, 6);
  const sec = (title, body, empty) => `<section class="sec"><h4>${title}</h4>${body || `<p class="muted">${empty}</p>`}</section>`;
  return sec('Te necesita', approvals.map(approvalRow).join(''), 'Sin revisiones pendientes.')
    + sec('En curso', active.map(t => `<button class="row-item" data-action="task" data-id="${esc(t.id)}"><span class="ic run">⚙︎</span><span><b>${esc(t.instruction)}</b><small>${st(t.status)} · ${ago(t.updated_at || t.created_at)}</small></span></button>`).join(''), 'Nada en ejecución según el servidor.')
    + sec('Misiones', steps.map(x => `<button class="row-item" data-action="mission" data-id="${esc(x.mission_id)}"><span class="ic mission">◆</span><span><b>${esc(x.directive || 'Etapa de misión')}</b><small>${esc((s.missions || []).find(m => m.id === x.mission_id)?.title || 'Misión')} · etapa ${esc(x.seq)} · ${st(x.status)}</small></span></button>`).join(''), 'Sin etapas de misión asignadas.')
    + sec('Recientes', recent.map(t => `<button class="row-item" data-action="task" data-id="${esc(t.id)}"><span class="ic ${t.status === 'completed' ? 'done' : 'fail'}">${t.status === 'completed' ? '✓' : '⚠︎'}</span><span><b>${esc(t.instruction)}</b><small>${st(t.status)} · ${ago(t.updated_at || t.created_at)}</small></span></button>`).join(''), 'Sin trabajos anteriores.')
    + sec('Entregables', files.map(fileRow).join(''), 'Sin archivos generados.');
}

const fileRow = f => `<button class="row-item" data-action="file" data-id="${esc(f.id)}"><span class="ic file">⤓</span><span><b>${esc(f.title || f.filename)}</b><small>${esc(f.filename || '')} · ${ago(f.created_at)}</small></span></button>`;

function lockedBody(agentName) {
  return `<div class="empty locked"><p><b>Actividad no consultada.</b></p><p class="muted">Inicia sesión como CEO para ver encargos reales${agentName ? ` y hablar con ${esc(agentName)}` : ''}. También puedes abrir la simulación local para probar el recorrido sin tocar datos.</p><div class="row"><button class="btn" data-action="access">Acceso del CEO</button><button class="btn ghost" data-action="demo">Probar simulación</button></div></div>`;
}

export function agentSheet(app, agent, tab = 'chat') {
  const room = roomById(agent.room), dept = room.dept;
  const ctrl = app.agentsById[agent.id];
  const role = (app.ent?.snapshot.roles || []).find(r => r.department === dept);
  const sending = app.sending[dept];
  const header = `<header class="sheet-head agent">${portrait(agent, 'lg')}<div class="who"><small>${esc(room.name)}</small><h3>${esc(agent.name)}</h3><p>${esc(role?.professional_title || agent.role)}</p>${intentPill(ctrl.intent, ctrl.local)}</div><button class="close" data-action="close" aria-label="Volver a la oficina">×</button></header>
  <div class="tabs" role="tablist">${[['chat', 'Conversación'], ['work', 'Trabajo'], ['profile', 'Perfil']].map(([k, l]) => `<button role="tab" aria-selected="${tab === k}" class="${tab === k ? 'on' : ''}" data-action="tab" data-tab="${k}">${l}</button>`).join('')}</div>`;
  let body, footer = '';
  if (!app.connected) body = lockedBody(agent.name);
  else if (tab === 'chat') {
    body = `<div class="thread">${taskThread(app, dept, agent)}</div>${sourceNote(app.mode)}`;
    footer = `<form class="composer" data-action="send"><textarea name="instruction" rows="1" maxlength="2000" placeholder="Instrucción para ${esc(agent.name)}…" ${sending ? 'disabled' : ''}></textarea><button class="send" ${sending ? 'disabled' : ''} aria-label="Enviar instrucción">${sending ? '<span class="spin"></span>' : '↑'}</button></form><p class="composer-note">${sending ? 'Esperando al motor <code>pulse-run</code>… el estado se actualiza desde el servidor.' : 'Se registra como tarea y la ejecuta <code>pulse-run</code>. Cada instrucción es independiente: no hereda la conversación anterior.'}</p>`;
  } else if (tab === 'work') body = workList(app, dept) + sourceNote(app.mode);
  else body = `<section class="sec contract">${role ? `<h4>Contrato profesional</h4><dl><dt>Puesto</dt><dd>${esc(role.professional_title)}</dd><dt>Propósito</dt><dd>${esc(role.purpose)}</dd><dt>Entregable</dt><dd>${esc(role.output_contract)}</dd><dt>Criterios de aceptación</dt><dd>${esc(role.acceptance_criteria)}</dd>${role.handoff_to ? `<dt>Traspasa a</dt><dd>${esc(role.handoff_to)}</dd>` : ''}</dl>` : '<p class="muted">No hay contrato registrado para este departamento.</p>'}<p class="note">${esc(agent.name)} es el personaje visual de ${esc(room.name)}. El nombre y la especie son provisionales y no identifican a un agente individual del backend.</p></section>`;
  return { html: header + `<div class="sheet-body">${body}</div>` + footer, size: 'agent' };
}

export function taskSheet(app, id) {
  const s = app.ent.snapshot; const t = (s.tasks || []).find(x => x.id === id);
  if (!t) return { html: `<header class="sheet-head"><div class="who"><h3>Encargo</h3></div><button class="close" data-action="back">‹</button></header><div class="sheet-body"><p class="muted">El registro ya no está en la instantánea actual.</p></div>`, size: 'mid' };
  const agent = agentForDept(t.department);
  const files = (s.deliverables || []).filter(d => d.task_id === t.id);
  const appr = (s.approvals || []).filter(a => a.task_id === t.id);
  const sources = Array.isArray(t.sources) ? t.sources : [];
  return { html: `<header class="sheet-head">${agent ? portrait(agent, 'md') : ''}<div class="who"><small>${esc(t.department)}</small><h3>Encargo</h3><span class="pill ${t.status === 'completed' ? 'done' : t.status === 'failed' ? 'fail' : 'run'}">${st(t.status)}</span></div><button class="close" data-action="back" aria-label="Atrás">‹</button></header>
  <div class="sheet-body"><section class="sec"><h4>Instrucción</h4><p>${esc(t.instruction)}</p><small class="muted">Creado ${ago(t.created_at)} · actualizado ${ago(t.updated_at)}</small></section>
  ${t.result ? `<section class="sec"><h4>Resultado</h4><div class="result">${esc(t.result)}</div></section>` : ''}
  ${t.error ? `<section class="sec"><h4>Error</h4><p class="err">${esc(t.error)}</p><button class="btn" data-action="retry" data-id="${esc(t.id)}">Reintentar como nuevo encargo</button></section>` : ''}
  ${sources.length ? `<section class="sec"><h4>Fuentes</h4>${sources.slice(0, 8).map(x => `<p class="src">${esc(typeof x === 'string' ? x : x.title || x.url || JSON.stringify(x))}</p>`).join('')}</section>` : ''}
  ${files.length ? `<section class="sec"><h4>Entregables</h4>${files.map(fileRow).join('')}</section>` : ''}
  ${appr.length ? `<section class="sec"><h4>Revisión</h4>${appr.map(a => a.status === 'pending' ? approvalRow(a) : `<p>${esc(a.title)} · <b>${st(a.status)}</b></p>`).join('')}</section>` : ''}${sourceNote(app.mode)}</div>`, size: 'tall' };
}

export function missionSheet(app, id) {
  const s = app.ent.snapshot; const m = (s.missions || []).find(x => x.id === id);
  if (!m) return { html: `<header class="sheet-head"><div class="who"><h3>Misión</h3></div><button class="close" data-action="back">‹</button></header><div class="sheet-body"><p class="muted">Misión no disponible.</p></div>`, size: 'mid' };
  const steps = (s.steps || []).filter(x => x.mission_id === id).sort((a, b) => a.seq - b.seq);
  const actions = [['pause', 'Pausar'], ['resume', 'Reanudar'], ['retry', 'Reintentar'], ['revise', 'Pedir revisión']];
  return { html: `<header class="sheet-head"><div class="ic-lg">◆</div><div class="who"><small>Misión</small><h3>${esc(m.title)}</h3><span class="pill mission">${st(m.status)}</span></div><button class="close" data-action="back" aria-label="Atrás">‹</button></header>
  <div class="sheet-body"><section class="sec"><h4>Objetivo</h4><p>${esc(m.objective || '')}</p></section>
  <section class="sec"><h4>Traspasos entre departamentos</h4><ol class="timeline">${steps.map(x => { const a = agentForDept(x.department); return `<li class="${esc(String(x.status).toLowerCase())}"><button class="tl-dept" data-action="agent" data-id="${a ? a.id : ''}">${a ? portrait(a, 'xs') : ''}<span>${esc(x.department)}</span></button><p><b>Etapa ${esc(x.seq)}:</b> ${esc(x.directive || '')}</p>${x.result ? `<p class="muted">${excerpt(x.result, 220)}</p>` : ''}${x.error ? `<p class="err">${esc(x.error)}</p>` : ''}<small>${st(x.status)}${x.finished_at ? ' · ' + ago(x.finished_at) : x.started_at ? ' · iniciada ' + ago(x.started_at) : ''}</small>${x.task_id ? `<button class="chip" data-action="task" data-id="${esc(x.task_id)}">Ver aportación</button>` : ''}</li>`; }).join('') || '<li><p class="muted">Sin etapas registradas.</p></li>'}</ol></section>
  <section class="sec"><h4>Control del CEO</h4><div class="row wrap">${actions.map(([a, l]) => `<button class="btn ghost" data-action="mission-op" data-op="${a}" data-id="${esc(m.id)}">${l}</button>`).join('')}</div><p class="muted small">Cada acción llama a <code>pulse-mission-control</code>; el estado mostrado es el que devuelva el servidor.</p></section>${sourceNote(app.mode)}</div>`, size: 'tall' };
}

export function missionsSheet(app) {
  const s = app.ent.snapshot;
  const list = (s.missions || []).map(m => { const steps = (s.steps || []).filter(x => x.mission_id === m.id); const done = steps.filter(x => x.status === 'completed').length; return `<button class="row-item" data-action="mission" data-id="${esc(m.id)}"><span class="ic mission">◆</span><span><b>${esc(m.title)}</b><small>${st(m.status)} · ${done}/${steps.length} etapas · ${ago(m.updated_at || m.created_at)}</small></span><span class="dots">${steps.sort((a, b) => a.seq - b.seq).map(x => `<i class="${esc(String(x.status).toLowerCase())}"></i>`).join('')}</span></button>`; }).join('');
  return { html: `<header class="sheet-head"><div class="ic-lg">◆</div><div class="who"><small>Gestión de misiones</small><h3>Misiones</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${app.connected ? `${createMissionForm()}<section class="sec"><h4>Registradas</h4>${list || '<p class="muted">Sin misiones registradas.</p>'}</section>${sourceNote(app.mode)}` : lockedBody()}</div>`, size: 'tall' };
}

function createMissionForm() {
  return `<form class="sec mission-form" data-action="create-mission"><h4>Convocar misión</h4><input name="title" maxlength="120" placeholder="Título (5–120 caracteres)" required><textarea name="objective" rows="3" maxlength="1500" placeholder="Objetivo: qué debe lograr y qué esperas recibir (20–1500 caracteres)" required></textarea><button class="btn">Crear misión</button><p class="muted small">El servidor asigna etapas y departamentos. Puede consumir cuota de IA.</p></form>`;
}

export function approvalsSheet(app, dept = null) {
  const s = app.ent.snapshot;
  const pend = (s.approvals || []).filter(a => a.status === 'pending' && (!dept || a.department === dept));
  const done = (s.approvals || []).filter(a => a.status !== 'pending' && (!dept || a.department === dept)).slice(0, 6);
  return { html: `<header class="sheet-head"><div class="ic-lg review">!</div><div class="who"><small>${dept ? esc(dept) : 'Oficina del CEO'}</small><h3>Revisiones</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${app.connected ? `<section class="sec"><h4>Esperan tu decisión</h4>${pend.map(a => `<div class="appr-wrap"><small class="muted">${esc(a.department)} · ${ago(a.created_at)}</small>${approvalRow(a)}${a.task_id ? `<button class="chip" data-action="task" data-id="${esc(a.task_id)}">Ver trabajo</button>` : ''}</div>`).join('') || '<p class="muted">No hay revisiones pendientes.</p>'}</section><section class="sec"><h4>Decididas</h4>${done.map(a => `<p class="small">${esc(a.title)} · <b>${st(a.status)}</b></p>`).join('') || '<p class="muted">Sin historial.</p>'}</section>${sourceNote(app.mode)}` : lockedBody()}</div>`, size: 'tall' };
}

export function filesSheet(app, dept = null) {
  const s = app.ent.snapshot;
  const files = (s.deliverables || []).filter(f => !dept || (s.tasks || []).some(t => t.id === f.task_id && t.department === dept));
  return { html: `<header class="sheet-head"><div class="ic-lg file">⤓</div><div class="who"><small>${dept ? esc(dept) : 'Biblioteca'}</small><h3>Entregables</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${app.connected ? `<section class="sec">${files.slice(0, 40).map(fileRow).join('') || '<p class="muted">Sin entregables registrados.</p>'}</section><p class="muted small">Las descargas usan una URL firmada de Storage válida 2 minutos.</p>${sourceNote(app.mode)}` : lockedBody()}</div>`, size: 'tall' };
}

export function companySheet(app, summary) {
  const k = (n, l) => `<div class="kpi"><b>${n}</b><small>${l}</small></div>`;
  return { html: `<header class="sheet-head"><div class="ic-lg">▦</div><div class="who"><small>Oficina del CEO</small><h3>Estado de la empresa</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${summary ? `<div class="kpis">${k(summary.running, 'en ejecución')}${k(summary.approvals, 'revisiones')}${k(summary.activeMissions, 'misiones activas')}${k(summary.completed, 'encargos completados')}${k(summary.failed, 'fallidos')}${k(summary.deliverables, 'entregables')}</div><p class="muted small">Recuentos de la última instantánea (${ago(summary.loadedAt)}), limitada a los registros más recientes.</p><div class="row wrap"><button class="btn ghost" data-action="open-approvals">Revisiones</button><button class="btn ghost" data-action="open-missions">Misiones</button><button class="btn ghost" data-action="open-files">Entregables</button><button class="btn ghost" data-action="refresh">Actualizar</button></div>${sourceNote(app.mode)}` : lockedBody()}</div>`, size: 'mid' };
}

export function directorySheet(app) {
  return { html: `<header class="sheet-head"><div class="ic-lg">⌂</div><div class="who"><small>PULSE HQ</small><h3>Recorrer la oficina</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body"><div class="dir-grid">${ROOMS.map((r, i) => { const a = AGENTS.find(x => x.room === r.id); const ctrl = a && app.agentsById[a.id]; const k = ctrl?.intent.kind; return `<button class="dir-card ${i === app.roomIndex ? 'here' : ''}" data-action="go" data-index="${i}" style="--accent:${r.accent}"><span class="n">${String(i + 1).padStart(2, '0')}</span>${a ? portrait(a, 'sm') : `<span class="space-ic">${r.short.slice(0, 1)}</span>`}<b>${esc(r.short)}</b>${k && !['idle', 'unconnected'].includes(k) ? `<i class="st ${k}"></i>` : ''}</button>`; }).join('')}</div></div>`, size: 'mid' };
}

export function accessSheet(app, step = 'email', email = '') {
  if (app.mode === 'demo') return { html: `<header class="sheet-head"><div class="ic-lg sim">▶</div><div class="who"><small>Modo actual</small><h3>Simulación local</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body"><p>Estás viendo datos inventados <b>solo para probar la interfaz</b>. No hay conexión con Supabase ni con Gemini y nada se guarda.</p><p class="muted">Prueba: toca un agente → Conversación → escribe una instrucción. Incluye la palabra «propuesta» para generar una revisión, o «falla» para ver un error.</p><div class="row"><button class="btn" data-action="exit-demo">Salir de la simulación</button></div></div>`, size: 'mid' };
  if (app.connected) return { html: `<header class="sheet-head"><div class="ic-lg ok">✓</div><div class="who"><small>Sesión</small><h3>CEO conectado</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body"><p>${esc(app.ent.user?.email || '')}</p><p class="muted">Los estados de los agentes provienen de <code>pulse_tasks</code>, <code>pulse_approvals</code> y <code>pulse_mission_steps</code>. Se consultan cada 10 s y cada 2.5 s mientras un encargo está en curso.</p>${app.ent.lastError ? `<p class="err">Última consulta falló: ${esc(app.ent.lastError)}</p>` : ''}<div class="row"><button class="btn ghost" data-action="refresh">Actualizar ahora</button><button class="btn ghost" data-action="logout">Cerrar sesión</button></div></div>`, size: 'mid' };
  const body = step === 'email'
    ? `<form class="sec" data-action="login"><h4>Enlace de acceso</h4><input type="email" name="email" autocomplete="email" placeholder="Correo del CEO" required value="${esc(email)}"><button class="btn">Enviar enlace</button><p class="muted small">Solo funciona con la cuenta autorizada (no crea usuarios).</p></form>`
    : `<section class="sec"><p>Revisa tu correo (${esc(email)}).</p><p class="muted small">Si el enlace abre la app anterior en lugar de esta vista, <b>no lo abras</b>: mantén pulsado el enlace, cópialo y pégalo aquí.</p><form data-action="verify-link"><input name="link" placeholder="Pega el enlace del correo" autocomplete="off"><button class="btn">Entrar con el enlace</button></form><form data-action="verify-code"><input name="code" inputmode="numeric" maxlength="8" placeholder="o el código de 6 dígitos, si aparece"><button class="btn ghost">Entrar con código</button></form><button class="chip" data-action="access-reset">Usar otro correo</button></section>`;
  return { html: `<header class="sheet-head"><div class="ic-lg">◎</div><div class="who"><small>PULSE HQ</small><h3>Acceso del CEO</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${body}<section class="sec"><h4>Sin conexión</h4><p class="muted small">Puedes recorrer la oficina sin sesión: los agentes pasean de forma ambiental y no se muestra actividad real.</p><button class="btn ghost" data-action="demo">Probar en modo simulación</button></section></div>`, size: 'mid' };
}

export function hotspotSheet(app, key, roomId) {
  const room = roomById(roomId); const info = HOTSPOT_INFO[key] || { title: key, hint: '' };
  const dept = room?.dept;
  if (key === 'desk') return { html: `<header class="sheet-head"><div class="ic-lg">▭</div><div class="who"><small>${esc(room.name)}</small><h3>${info.title}</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${app.connected ? workList(app, dept) : lockedBody()}<div class="row"><button class="btn" data-action="agent-room" data-room="${esc(roomId)}">Hablar con el agente</button></div></div>`, size: 'tall' };
  if (key === 'tray') return approvalsSheet(app, dept);
  if (key === 'shelf') return filesSheet(app, dept);
  if (key === 'board') {
    const s = app.ent?.snapshot || {}; const steps = (s.steps || []).filter(x => x.department === dept);
    const ids = [...new Set(steps.map(x => x.mission_id))];
    return { html: `<header class="sheet-head"><div class="ic-lg mission">◆</div><div class="who"><small>${esc(room.name)}</small><h3>${info.title}</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${app.connected ? `<section class="sec"><h4>Misiones en las que participa</h4>${ids.map(id => { const m = (s.missions || []).find(x => x.id === id); const mine = steps.filter(x => x.mission_id === id); return `<button class="row-item" data-action="mission" data-id="${esc(id)}"><span class="ic mission">◆</span><span><b>${esc(m?.title || 'Misión')}</b><small>${mine.map(x => `etapa ${x.seq}: ${st(x.status)}`).join(' · ')}</small></span></button>`; }).join('') || '<p class="muted">Este departamento no participa en misiones registradas.</p>'}</section>` : lockedBody()}</div>`, size: 'mid' };
  }
  if (key === 'ceo-tray') return approvalsSheet(app);
  if (key === 'ceo-shelf') return filesSheet(app);
  if (key === 'ceo-desk' || key === 'ceo-tv') return companySheet(app, app.summary);
  if (key === 'board-table' || key === 'mission-table' || key === 'mission-board') return missionsSheet(app);
  if (key === 'collab-board' || key === 'collab-table') {
    const s = app.ent?.snapshot || {};
    const steps = (s.steps || []).filter(x => x.status === 'completed' || ['running', 'active', 'in_progress', 'processing'].includes(x.status)).sort((a, b) => Date.parse(b.finished_at || b.started_at || 0) - Date.parse(a.finished_at || a.started_at || 0)).slice(0, 12);
    return { html: `<header class="sheet-head"><div class="ic-lg">⇄</div><div class="who"><small>Colaboración</small><h3>Traspasos recientes</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body">${app.connected ? `<section class="sec">${steps.map(x => { const a = agentForDept(x.department); const m = (s.missions || []).find(y => y.id === x.mission_id); return `<button class="row-item" data-action="mission" data-id="${esc(x.mission_id)}">${a ? portrait(a, 'xs') : ''}<span><b>${esc(x.department)} · etapa ${esc(x.seq)}</b><small>${esc(m?.title || 'Misión')} · ${st(x.status)}</small></span></button>`; }).join('') || '<p class="muted">Sin traspasos registrados.</p>'}</section><p class="muted small">Los agentes vienen a esta sala solo cuando su etapa de misión figura en curso en el servidor.</p>${sourceNote(app.mode)}` : lockedBody()}</div>`, size: 'mid' };
  }
  if (key === 'legacy-door' || key === 'studio-cam') return { html: `<header class="sheet-head"><div class="ic-lg">↗</div><div class="who"><small>${esc(room.name)}</small><h3>${info.title}</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body"><p>CRM, automatizaciones, PULSE STUDIO, estudio creativo y exportación PNG/ZIP siguen en el centro anterior. Su integración dentro de la oficina está pendiente.</p><a class="btn" href="https://bryanstl1.github.io/pulse-hq/" target="_blank" rel="noopener">Abrir centro anterior ↗</a></div>`, size: 'mid' };
  if (key === 'coffee') return { html: `<header class="sheet-head"><div class="ic-lg">☕︎</div><div class="who"><small>Descanso</small><h3>Movimiento ambiental</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body"><p>Cuando un agente no tiene actividad registrada puede pasear por su sala o venir por café. Es decorativo y nunca se muestra como trabajo.</p><label class="toggle"><input type="checkbox" data-action="ambient" ${app.ambient ? 'checked' : ''}><span>Paseo ambiental ${app.ambient ? 'activado' : 'desactivado'}</span></label></div>`, size: 'mid' };
  return { html: `<header class="sheet-head"><div class="who"><h3>${esc(info.title)}</h3></div><button class="close" data-action="close">×</button></header><div class="sheet-body"><p>${esc(info.hint)}</p></div>`, size: 'mid' };
}
