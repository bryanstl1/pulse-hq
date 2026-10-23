import * as THREE from 'three';
import { Stage } from './world/scene.js';
import { loadFurniture } from './world/assets.js';
import { buildOffice } from './world/builder.js';
import { createAgents } from './world/agents.js';
import { setPapers } from './world/props.js';
import { drawSurfaces } from './world/surfaces.js';
import { PITCH, HOTSPOT_INFO } from './world/layout.js';
import { Overlay } from './ui/overlay.js';
import * as P from './ui/panels.js';
import { ROOMS, AGENTS, roomById, roomIndex } from './data/roster.js';
import { deriveIntents, companySummary } from './data/activity.js';
import { createEnterprise, loadSupabaseClient, DEPARTMENTS } from './data/enterprise.js';
import { createDemoClient } from './data/demo-client.js';

const $ = s => document.querySelector(s);
const params = new URLSearchParams(location.search);

const app = {
  ent: null, mode: 'none', connected: false, ambient: true, sending: {}, summary: null,
  agents: [], agentsById: {}, roomIndex: 1, selected: null, sheet: null, history: [], accessEmail: '', accessStep: 'email',
  snapshotKey: ''
};
window.__pulse = app; // inspección en pruebas

// ——— Arranque ———
const loaderBar = $('#loader .bar i');
const stage = new Stage($('#stage'), { roomCount: ROOMS.length, onTap: handleTap, onRoomChange: i => { app.roomIndex = i; updateHud(); if (app.sheet && app.sheet.type !== 'agent' && !app.sheet.pinned) closeSheet(); history.replaceState(null, '', `#${ROOMS[i].id}`); } });

await loadFurniture('./assets/furniture', p => { loaderBar.style.width = `${Math.round(p * 80)}%`; }, { bundle: globalThis.PULSE_FURNITURE_BUNDLE || null });
const office = buildOffice(stage.scene);
app.stage = stage; app.office = office;
const worldCtx = { scene: stage.scene, nav: office.nav, stationsByRoom: office.stationsByRoom, pitch: PITCH };
app.agents = createAgents(worldCtx);
app.agents.forEach(a => { app.agentsById[a.def.id] = a; });
const overlay = new Overlay($('#overlay'), stage, { onAgent: id => selectAgent(id), onHotspot: (key, room) => openHotspot(key, room) });

const startId = location.hash.slice(1);
const startIdx = roomIndex(startId) >= 0 ? roomIndex(startId) : 1;
stage.goToRoom(startIdx, { instant: true }); app.roomIndex = startIdx;
// coloca a cada agente en su sala con una pose inicial
app.agents.forEach(a => a.plan(true));
buildDots(); updateHud();
loaderBar.style.width = '90%';

// ——— Datos ———
async function startLive() {
  try {
    const client = await loadSupabaseClient();
    app.ent = createEnterprise(client, { mode: 'live' });
    app.mode = 'live';
    await app.ent.init(onData);
  } catch (e) {
    app.ent = null; app.mode = 'none';
    toast(`Sin conexión con Supabase: ${e.message}`, 'warn');
  }
  recompute();
}
async function startDemo() {
  app.ent?.client?.dispose?.();
  const client = createDemoClient({ speed: Number(params.get('demoSpeed')) || 1 });
  app.ent = createEnterprise(client, { mode: 'demo' }); app.ent.client = client;
  app.mode = 'demo';
  await app.ent.init(onData);
  recompute(); updateHud();
}
function onData() { recompute(); }

let pollTimer = null;
function schedulePoll() {
  clearTimeout(pollTimer);
  if (!app.connected) return;
  const fast = Object.values(app.sending).some(Boolean) || app.agents.some(a => ['receiving', 'running', 'mission'].includes(a.intent.kind));
  pollTimer = setTimeout(async () => { try { await app.ent.refresh(); } catch { } recompute(); schedulePoll(); }, fast ? 2500 : 10000);
}

function recompute() {
  app.connected = Boolean(app.ent?.user);
  const snap = app.ent?.snapshot || { tasks: [], approvals: [], steps: [], missions: [], deliverables: [], roles: [] };
  const intents = deriveIntents(snap, DEPARTMENTS, { connected: app.connected });
  app.summary = companySummary(snap, app.connected);
  for (const a of app.agents) {
    const intent = intents[a.dept];
    a.setIntent(intent);
    setLamp(a.def.room, intent.kind);
    setPapers(office.trays[a.def.room], intent.approvals?.length || 0);
  }
  setPapers(office.trays.ceo, app.summary?.approvals || 0);
  const counts = {};
  for (const a of app.agents) { const n = intents[a.dept].approvals?.length; if (n) counts[`${a.def.room}:tray`] = n; }
  if (app.summary?.approvals) counts['ceo:ceo-tray'] = app.summary.approvals;
  if (app.summary?.activeMissions) counts['missions:mission-board'] = app.summary.activeMissions;
  overlay.setCounts(counts);
  const key = `${app.mode}|${app.connected}|${snap.loadedAt}`;
  if (key !== app.snapshotKey) { app.snapshotKey = key; drawSurfaces(office.surfaces, app); if (app.sheet) renderSheet(true); }
  updateHud();
  schedulePoll();
}

const LAMP = { receiving: '#8f7cf0', running: '#3cd17a', review: '#f2b33d', failed: '#e5484d', mission: '#4a90e2', completed: '#7ed6a5' };
function setLamp(roomId, kind) {
  const m = office.lamps[roomId]; if (!m) return;
  const c = LAMP[kind]; m.userData.kind = kind;
  if (c) { m.emissive.set(c); m.color.set(c); m.emissiveIntensity = 1.2; } else { m.emissive.set('#000'); m.color.set('#b9b4aa'); m.emissiveIntensity = 0; }
}

// ——— HUD ———
function buildDots() {
  $('#dots').innerHTML = ROOMS.map((r, i) => `<button data-go="${i}" aria-label="${r.name}" style="--accent:${r.accent}"></button>`).join('');
}
function updateHud() {
  const r = ROOMS[app.roomIndex];
  $('#room-n').textContent = `${String(app.roomIndex + 1).padStart(2, '0')}/${ROOMS.length}`;
  $('#room-name').textContent = r.name;
  $('#room-sub').textContent = r.sub;
  $('#room-card').style.setProperty('--accent', r.accent);
  document.querySelectorAll('#dots button').forEach((b, i) => b.classList.toggle('on', i === app.roomIndex));
  const chip = P.sessionChip(app);
  const sc = $('#session'); sc.className = `session ${chip.cls}`; sc.querySelector('span').textContent = chip.text;
  $('#sim-banner').hidden = app.mode !== 'demo';
  const legend = $('#legend');
  legend.hidden = app.mode === 'demo'; // la franja amarilla ya lo dice
  if (!app.connected) legend.textContent = app.ambient ? 'Sin sesión · los agentes solo pasean (ambiente)' : 'Sin sesión · actividad no consultada';
  else legend.textContent = app.ambient ? 'Movimiento ambiental activo cuando no hay encargos' : 'Solo actividad registrada';
  const n = app.summary?.approvals || 0;
  const badge = $('#dock [data-dock="approvals"] .badge'); badge.hidden = !n; badge.textContent = n;
  $('#prev').disabled = app.roomIndex === 0; $('#next').disabled = app.roomIndex === ROOMS.length - 1;
}

// ——— Selección ———
function agentRoomIndex(a) { return Math.max(0, Math.min(ROOMS.length - 1, Math.round(a.pos.x / PITCH))); }

function selectAgent(id, tab = 'chat') {
  const a = app.agentsById[id]; if (!a) return;
  if (app.selected && app.selected !== a) app.selected.select(false);
  app.selected = a; a.select(true);
  const idx = agentRoomIndex(a);
  if (idx !== app.roomIndex) stage.goToRoom(idx);
  openSheet({ type: 'agent', id, tab });
}

const highlight = { obj: null, t: 0 };
function openHotspot(key, roomId) {
  const h = office.hotspots.find(x => x.key === key && x.room === roomId);
  if (h) { highlight.obj = h.obj; highlight.t = 0; highlight.base = h.obj.scale.clone(); }
  if (key === 'coffee' || key === 'legacy-door' || key === 'studio-cam') { openSheet({ type: 'hot', key, room: roomId, focus: h }); return; }
  openSheet({ type: 'hot', key, room: roomId, focus: h });
}

function handleTap({ x, y, ndc }) {
  // agentes primero: distancia en pantalla al cuerpo o a la cabeza (objetivo táctil amplio)
  let best = null, bd = 56;
  for (const a of app.agents) {
    for (const v of [a.bodyWorld, a.headWorld]) {
      const p = stage.project(v); const d = Math.hypot(p.x - x, p.y - y);
      if (d < bd) { bd = d; best = a; }
    }
  }
  if (best) { selectAgent(best.def.id); return; }
  const hits = stage.raycast(ndc, office.hotspots.map(h => h.obj));
  if (hits.length) {
    let o = hits[0].object; while (o && !o.userData.item?.hot) o = o.parent;
    if (o) { openHotspot(o.userData.item.hot, o.userData.item.room); return; }
  }
  if (app.sheet) closeSheet();
}

// ——— Panel inferior ———
const sheetEl = $('#sheet');
function openSheet(spec, { push = false } = {}) {
  if (push && app.sheet) app.history.push(app.sheet); else if (!push) app.history = [];
  app.sheet = spec; renderSheet();
}
function closeSheet() {
  app.sheet = null; app.history = [];
  sheetEl.classList.remove('open', 'mid', 'tall', 'agent'); sheetEl.setAttribute('aria-hidden', 'true'); document.body.classList.remove('sheet-open');
  if (app.selected) { app.selected.select(false); app.selected = null; }
  stage.focus({});
}
function back() { const prev = app.history.pop(); if (prev) { app.sheet = prev; renderSheet(); } else closeSheet(); }

function renderSheet(preserve = false) {
  const s = app.sheet; if (!s) return;
  // conservar lo escrito (cualquier campo) y el foco al redibujar por el sondeo
  const drafts = {}; let focused = null;
  if (preserve) sheetEl.querySelectorAll('input[name],textarea[name]').forEach(el => { if (el.type !== 'checkbox' && el.value) drafts[el.name] = el.value; if (el === document.activeElement) focused = el.name; });
  const body = sheetEl.querySelector('.sheet-body'); const atBottom = body && body.scrollTop + body.clientHeight >= body.scrollHeight - 40; const scroll = preserve && body && !atBottom ? body.scrollTop : null;
  const live = app.ent || { snapshot: {} };
  const ctx = { ...app, ent: live };
  let out;
  if (s.type === 'agent') out = P.agentSheet(ctx, app.agentsById[s.id].def, s.tab);
  else if (s.type === 'task') out = P.taskSheet(ctx, s.id);
  else if (s.type === 'mission') out = P.missionSheet(ctx, s.id);
  else if (s.type === 'missions') out = P.missionsSheet(ctx);
  else if (s.type === 'approvals') out = P.approvalsSheet(ctx, s.dept);
  else if (s.type === 'files') out = P.filesSheet(ctx, s.dept);
  else if (s.type === 'company') out = P.companySheet(ctx, app.summary);
  else if (s.type === 'directory') out = P.directorySheet(ctx);
  else if (s.type === 'access') out = P.accessSheet(ctx, app.accessStep, app.accessEmail);
  else if (s.type === 'hot') out = P.hotspotSheet(ctx, s.key, s.room);
  sheetEl.querySelector('.sheet-inner').innerHTML = out.html;
  sheetEl.classList.add('open'); sheetEl.classList.toggle('tall', out.size === 'tall'); sheetEl.classList.toggle('agent', out.size === 'agent'); sheetEl.classList.toggle('mid', out.size === 'mid');
  document.body.classList.toggle('sheet-open', true);
  sheetEl.setAttribute('aria-hidden', 'false');
  for (const [name, value] of Object.entries(drafts)) { const el = sheetEl.querySelector(`[name="${name}"]`); if (el && el.type !== 'checkbox') el.value = value; }
  if (focused) { const el = sheetEl.querySelector(`[name="${focused}"]`); el?.focus({ preventScroll: true }); }
  applyArmed();
  if (scroll != null) { const b = sheetEl.querySelector('.sheet-body'); if (b) b.scrollTop = scroll; }
  else if (s.type === 'agent' && s.tab === 'chat' || atBottom) { const b = sheetEl.querySelector('.sheet-body'); if (b) b.scrollTop = b.scrollHeight; }
  // encuadre: el elemento seleccionado queda visible encima del panel
  requestAnimationFrame(() => {
    if (app.sheet !== s) return; // el panel ya se cerró o cambió: no reencuadrar con datos viejos
    const px = sheetEl.getBoundingClientRect().height;
    if (s.type === 'agent') { const a = app.agentsById[s.id]; stage.focus({ x: a.pos.x, z: a.pos.y, sheetPx: px, zoom: 1.5 }); }
    else if (s.focus) { const c = new THREE.Box3().setFromObject(s.focus.obj).getCenter(new THREE.Vector3()); stage.focus({ x: c.x, z: c.z, sheetPx: px, zoom: 1.45 }); }
    else stage.focus({ sheetPx: px * 0.6 });
  });
}

// Arrastrar el asa hacia abajo cierra el panel
(() => {
  const handle = sheetEl.querySelector('.handle'); let y0 = null;
  handle.addEventListener('pointerdown', e => { y0 = e.clientY; handle.setPointerCapture(e.pointerId); });
  handle.addEventListener('pointermove', e => { if (y0 == null) return; const dy = Math.max(0, e.clientY - y0); sheetEl.style.transform = `translateY(${dy}px)`; });
  const up = e => { if (y0 == null) return; const dy = e.clientY - y0; y0 = null; sheetEl.style.transform = ''; if (dy > 70) closeSheet(); else if (dy < 4) { /* toque */ } };
  handle.addEventListener('pointerup', up); handle.addEventListener('pointercancel', up);
})();

// Confirmación en dos toques para decisiones (sin diálogos del navegador).
// El estado vive fuera del DOM para sobrevivir a los redibujados del sondeo.
const armedKey = el => `${el.dataset.action}:${el.dataset.id}:${el.dataset.choice || el.dataset.op || ''}`;
function confirmTwice(btn) {
  const key = armedKey(btn);
  if (app.armed && app.armed.key === key && performance.now() < app.armed.until) { app.armed = null; return true; }
  app.armed = { key, until: performance.now() + 3500 };
  applyArmed();
  setTimeout(() => { if (app.armed?.key === key && performance.now() >= app.armed.until) { app.armed = null; applyArmed(); } }, 3600);
  return false;
}
function applyArmed() {
  sheetEl.querySelectorAll('[data-action="decide"],[data-action="mission-op"]').forEach(b => {
    const on = app.armed && app.armed.key === armedKey(b) && performance.now() < app.armed.until;
    if (on && !b.dataset.label) { b.dataset.label = b.textContent; b.textContent = '¿Confirmar?'; b.classList.add('armed'); }
    if (!on && b.dataset.label) { b.textContent = b.dataset.label; delete b.dataset.label; b.classList.remove('armed'); }
  });
}

sheetEl.addEventListener('click', async e => {
  const el = e.target.closest('[data-action]'); if (!el || el.tagName === 'FORM') return;
  const act = el.dataset.action, id = el.dataset.id;
  if (act === 'ambient') return;
  e.preventDefault();
  try {
    if (act === 'close') closeSheet();
    else if (act === 'back') back();
    else if (act === 'tab') { app.sheet.tab = el.dataset.tab; renderSheet(); }
    else if (act === 'task') openSheet({ type: 'task', id }, { push: true });
    else if (act === 'mission') openSheet({ type: 'mission', id }, { push: true });
    else if (act === 'agent') { if (id) { closeSheet(); selectAgent(id); } }
    else if (act === 'agent-room') { const a = AGENTS.find(x => x.room === el.dataset.room); if (a) { closeSheet(); selectAgent(a.id); } }
    else if (act === 'go') { closeSheet(); stage.goToRoom(+el.dataset.index); }
    else if (act === 'file') await openFile(id);
    else if (act === 'decide') { if (!confirmTwice(el)) return; el.disabled = true; await app.ent.decideApproval(id, el.dataset.choice); toast(`${el.dataset.choice === 'approved' ? 'Aprobación' : 'Rechazo'} registrado${app.mode === 'demo' ? ' en la simulación' : ' en el servidor'}`, 'ok'); recompute(); renderSheet(true); }
    else if (act === 'retry') { const t = app.ent.snapshot.tasks.find(x => x.id === id); if (t) await sendInstruction(t.department, t.instruction); }
    else if (act === 'mission-op') { if (!confirmTwice(el)) return; el.disabled = true; await app.ent.missionAction(el.dataset.op, id); toast(app.mode === 'demo' ? 'Acción aplicada en la simulación' : 'El servidor confirmó la acción', 'ok'); recompute(); renderSheet(true); }
    else if (act === 'access') openSheet({ type: 'access' });
    else if (act === 'demo') { closeSheet(); await startDemo(); toast('Simulación local activada · datos inventados', 'warn'); }
    else if (act === 'exit-demo') { app.ent?.client?.dispose?.(); app.ent = null; app.mode = 'none'; closeSheet(); history.replaceState(null, '', location.pathname + location.hash); await startLive(); }
    else if (act === 'access-reset') { app.accessStep = 'email'; renderSheet(); }
    else if (act === 'logout') { await app.ent.signOut(); closeSheet(); recompute(); }
    else if (act === 'refresh') { await app.ent?.refresh(); recompute(); toast('Instantánea actualizada', 'ok'); }
    else if (act === 'open-approvals') openSheet({ type: 'approvals' }, { push: true });
    else if (act === 'open-missions') openSheet({ type: 'missions' }, { push: true });
    else if (act === 'open-files') openSheet({ type: 'files' }, { push: true });
  } catch (err) { toast(err.message || String(err), 'error'); el.disabled = false; }
});
sheetEl.addEventListener('change', e => {
  if (e.target.dataset.action === 'ambient') { app.ambient = e.target.checked; app.agents.forEach(a => a.setAmbient(app.ambient)); renderSheet(true); updateHud(); }
});
sheetEl.addEventListener('submit', async e => {
  e.preventDefault();
  const f = e.target, act = f.dataset.action, data = Object.fromEntries(new FormData(f));
  const btn = f.querySelector('button');
  try {
    if (act === 'send') { const a = app.agentsById[app.sheet.id]; await sendInstruction(a.dept, data.instruction || ''); }
    else if (act === 'create-mission') { btn.disabled = true; const r = await app.ent.createMission(data.title || '', data.objective || ''); toast(app.mode === 'demo' ? 'Misión creada en la SIMULACIÓN' : `Misión registrada en Supabase · ${String(r.missionId || '').slice(0, 8)}`, 'ok'); recompute(); renderSheet(); }
    else if (act === 'login') { btn.disabled = true; app.accessEmail = data.email; await app.ent.requestLogin(data.email); app.accessStep = 'sent'; renderSheet(); }
    else if (act === 'verify-link') { btn.disabled = true; await app.ent.verifyLink(data.link); toast('Sesión iniciada', 'ok'); closeSheet(); await app.ent.refresh(); recompute(); }
    else if (act === 'verify-code') { btn.disabled = true; await app.ent.verifyCode(app.accessEmail, data.code); toast('Sesión iniciada', 'ok'); closeSheet(); await app.ent.refresh(); recompute(); }
  } catch (err) { toast(err.message || String(err), 'error'); if (btn) btn.disabled = false; }
});
sheetEl.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey && e.target.name === 'instruction') { e.preventDefault(); e.target.form.requestSubmit(); }
});
sheetEl.addEventListener('input', e => { if (e.target.name === 'instruction') { e.target.style.height = 'auto'; e.target.style.height = Math.min(120, e.target.scrollHeight) + 'px'; } });

async function sendInstruction(dept, text) {
  const value = String(text).trim();
  const toUlises = dept === 'Dirección estratégica';
  if (value.length < (toUlises ? 20 : 5)) { toast(toUlises ? 'Describe el encargo para Ulises con al menos 20 caracteres.' : 'Escribe al menos 5 caracteres.', 'warn'); return; }
  if (app.sending[dept]) return;
  const agent = app.agents.find(a => a.dept === dept);
  // indicador local «Enviando…» hasta que el servidor confirme; después mandan los registros de Supabase
  app.sending[dept] = true; agent.receiveInstruction();
  renderSheet(); schedulePoll();
  try {
    if (toUlises) {
      const r = await app.ent.askUlises(value);
      toast(app.mode === 'demo' ? 'Ulises recibió la misión en la SIMULACIÓN' : `Instrucción registrada en Supabase · misión ${String(r.missionId || '').slice(0, 8)}`, 'ok');
    } else {
      await app.ent.runTask(dept, value);
      toast(app.mode === 'demo' ? `${agent.def.name}: resultado simulado listo` : `${agent.def.name}: el servidor registró el resultado`, 'ok');
    }
  } catch (err) {
    toast(`No se completó: ${err.message}`, 'error');
    try { await app.ent.refresh(); } catch { }
  } finally {
    app.sending[dept] = false; agent.clearLocal(); recompute(); if (app.sheet) renderSheet(true);
  }
}

async function openFile(id) {
  // abrir la ventana dentro del gesto evita el bloqueo de ventanas emergentes en Safari
  const win = window.open('', '_blank');
  try { const url = await app.ent.fileUrl(id); if (win) win.location.href = url; else location.href = url; }
  catch (err) { win?.close(); throw err; }
}

// ——— Dock y navegación ———
$('#dock').addEventListener('click', e => {
  const b = e.target.closest('[data-dock]'); if (!b) return;
  const k = b.dataset.dock;
  if (k === 'office') openSheet({ type: 'directory' });
  if (k === 'missions') openSheet({ type: 'missions' });
  if (k === 'approvals') openSheet({ type: 'approvals' });
  if (k === 'files') openSheet({ type: 'files' });
});
$('#dots').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) stage.goToRoom(+b.dataset.go); });
$('#prev').addEventListener('click', () => stage.goToRoom(app.roomIndex - 1));
$('#next').addEventListener('click', () => stage.goToRoom(app.roomIndex + 1));
$('#session').addEventListener('click', () => openSheet({ type: 'access' }));
$('#legend').addEventListener('click', () => openSheet({ type: 'hot', key: 'coffee', room: 'rest' }));
window.addEventListener('keydown', e => {
  if (e.target.closest('input,textarea')) return;
  if (e.key === 'ArrowRight') stage.goToRoom(app.roomIndex + 1);
  if (e.key === 'ArrowLeft') stage.goToRoom(app.roomIndex - 1);
  if (e.key === 'Escape') closeSheet();
});
document.addEventListener('visibilitychange', () => { if (!document.hidden && app.connected) app.ent.refresh().then(recompute).catch(() => { }); });

let toastTimer;
function toast(msg, kind = 'info') {
  const t = $('#toast'); t.textContent = msg; t.className = `toast show ${kind}`;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), kind === 'error' ? 6000 : 3200);
}

// ——— Bucle ———
let last = performance.now(), frameAvg = 16, slowFor = 0, dprLevel = 0;
const DPRS = [Math.min(devicePixelRatio || 1, 2), 1.5, 1.25, 1];
const CAPTURE = params.get('capture') === '1';
let simTime = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  if (CAPTURE) return; // en modo captura el reloj lo marca la grabación
  if (document.hidden) { last = now; return; }
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  tick(dt, now);
}
// Modo captura (solo para grabar el recorrido): avanza la misma lógica con paso fijo.
window.__advance = (n = 1, dt = 1 / 30) => { for (let i = 0; i < n; i++) { simTime += dt * 1000; tick(dt, simTime, i === n - 1); } };
function tick(dt, now, draw = true) {
  const t = now / 1000;
  // autocorrección: sin panel abierto la cámara siempre vuelve al encuadre normal
  if (!app.sheet && (stage.sheetGoal > 0 || stage.goalZoom > 1.2 || stage.focusGoalY !== 0)) stage.focus({});
  stage.update(dt);
  for (const a of app.agents) a.update(dt);
  for (const an of office.animated) {
    if (Math.abs(stage.camX - ROOMS.findIndex(r => r.id === an.room) * PITCH) > PITCH * 1.6) continue;
    an.fn(t, an.room === 'technology' && app.agentsById['a-technology'].intent.kind === 'running');
  }
  for (const m of Object.values(office.lamps)) if (m.userData.kind === 'running' || m.userData.kind === 'review' || m.userData.kind === 'receiving') m.emissiveIntensity = 0.7 + Math.sin(t * 5) * 0.6;
  if (highlight.obj) {
    highlight.t += dt; const k = highlight.t;
    const s = 1 + Math.sin(Math.min(1, k / 0.45) * Math.PI) * 0.07;
    highlight.obj.scale.copy(highlight.base).multiplyScalar(s);
    if (k > 0.45) { highlight.obj.scale.copy(highlight.base); highlight.obj = null; }
  }
  if (app.sheet?.type === 'agent') { const a = app.agentsById[app.sheet.id]; stage.focusGoalOffX = Math.max(-2.2, Math.min(2.2, a.pos.x - stage.goalX)); stage.focusGoalZ = a.pos.y; }
  if (!draw) return;
  overlay.update(app.agents, office.hotspots, ROOMS[app.roomIndex].id, { selectedId: app.selected?.def.id, sheetOpen: Boolean(app.sheet) });
  stage.render();
  if (CAPTURE) return;
  // calidad adaptativa: baja la resolución si el teléfono no sostiene ~40 fps
  frameAvg = frameAvg * 0.95 + (dt * 1000) * 0.05;
  if (frameAvg > 25) { slowFor += dt; if (slowFor > 2 && dprLevel < DPRS.length - 1) { dprLevel++; stage.renderer.setPixelRatio(DPRS[dprLevel]); stage.resize(); slowFor = 0; if (dprLevel >= 2) stage.renderer.shadowMap.enabled = true; } } else slowFor = 0;
}
requestAnimationFrame(frame);
// La vista previa alojada en Claude no puede conectarse a Supabase: arranca en simulación.
if (params.get('demo') === '1' || globalThis.PULSE_PREVIEW === 'demo') await startDemo(); else startLive();
loaderBar.style.width = '100%';
setTimeout(() => { $('#loader').classList.add('done'); document.title = 'PULSE HQ'; document.body.dataset.ready = '1'; }, 250);
