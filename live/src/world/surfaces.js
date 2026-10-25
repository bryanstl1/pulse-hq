// Pantallas y tableros dentro de la oficina. Los que muestran datos se dibujan con registros
// reales de la instantánea; sin sesión dicen «No consultado». Los decorativos lo son siempre.
import { roundRect, fitText } from './props.js';
import { roomById, agentForDept } from '../data/roster.js';

const FONT = '-apple-system, "SF Pro Text", "Segoe UI", Roboto, sans-serif';
const COLORS = { completed: '#3aa76d', running: '#3a8fd9', active: '#3a8fd9', in_progress: '#3a8fd9', processing: '#3a8fd9', pending: '#c9c2b4', failed: '#d9534f', error: '#d9534f', paused: '#e0a93b' };
const stColor = s => COLORS[String(s || '').toLowerCase()] || '#b8b0a2';

function header(ctx, W, title, accent, sub) {
  ctx.fillStyle = '#fbf9f4'; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = accent; ctx.fillRect(0, 0, W, 10);
  ctx.fillStyle = '#2b2620'; ctx.font = `700 34px ${FONT}`; ctx.textBaseline = 'top';
  ctx.fillText(fitText(ctx, title, W - 40), 22, 24);
  if (sub) { ctx.fillStyle = '#8a8172'; ctx.font = `500 20px ${FONT}`; ctx.fillText(fitText(ctx, sub, W - 40), 22, 64); }
}
function emptyNote(ctx, W, H, text) {
  ctx.fillStyle = '#9a9184'; ctx.font = `500 24px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText(text, W / 2, H / 2 + 10); ctx.textAlign = 'left';
}

function drawDeptBoard(surface, room, app) {
  const { ctx, canvas } = surface; const W = canvas.width, H = canvas.height;
  header(ctx, W, `Tablero · ${room.short}`, room.accent, app.connected ? (app.mode === 'demo' ? 'Simulación local' : 'Registros de misiones') : 'Sin sesión');
  if (!app.connected) return emptyNote(ctx, W, H, 'No consultado');
  const s = app.ent.snapshot; const steps = (s.steps || []).filter(x => x.department === room.dept).slice(-4).reverse();
  if (!steps.length) return emptyNote(ctx, W, H, 'Sin etapas de misión');
  steps.forEach((x, i) => {
    const y = 104 + i * 54; const m = (s.missions || []).find(mm => mm.id === x.mission_id);
    ctx.fillStyle = stColor(x.status); roundRect(ctx, 22, y, 14, 38, 6); ctx.fill();
    ctx.fillStyle = '#2b2620'; ctx.font = `600 22px ${FONT}`; ctx.fillText(fitText(ctx, x.directive || 'Etapa', W - 80), 48, y);
    ctx.fillStyle = '#8a8172'; ctx.font = `500 17px ${FONT}`; ctx.fillText(fitText(ctx, `${(m?.title || 'Misión').replace('[Simulación] ', '')} · etapa ${x.seq}`, W - 80), 48, y + 24);
  });
}

function drawMissionBoard(surface, app) {
  const { ctx, canvas } = surface; const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#2f3a33'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#f4efe2'; ctx.font = `700 34px ${FONT}`; ctx.textBaseline = 'top'; ctx.fillText('Misiones', 24, 20);
  ctx.font = `500 18px ${FONT}`; ctx.fillStyle = '#b9c4b8'; ctx.fillText(app.connected ? (app.mode === 'demo' ? 'SIMULACIÓN · datos locales' : 'pulse_missions · pulse_mission_steps') : 'Sin sesión · no consultado', 190, 32);
  if (!app.connected) return;
  const s = app.ent.snapshot; const missions = (s.missions || []).slice(0, 3);
  if (!missions.length) { ctx.fillStyle = '#b9c4b8'; ctx.font = `500 26px ${FONT}`; ctx.fillText('Sin misiones registradas', 24, H / 2); return; }
  const colW = (W - 48) / missions.length;
  missions.forEach((m, i) => {
    const x = 24 + i * colW;
    ctx.fillStyle = '#3c4a41'; roundRect(ctx, x, 70, colW - 16, H - 90, 14); ctx.fill();
    ctx.fillStyle = '#f4efe2'; ctx.font = `700 22px ${FONT}`; ctx.fillText(fitText(ctx, m.title.replace('[Simulación] ', ''), colW - 44), x + 14, 84);
    ctx.fillStyle = '#c9d3c7'; ctx.font = `500 16px ${FONT}`; ctx.fillText(m.status, x + 14, 112);
    const steps = (s.steps || []).filter(y => y.mission_id === m.id).sort((a, b) => a.seq - b.seq).slice(0, 5);
    steps.forEach((y, j) => {
      const yy = 140 + j * 42;
      ctx.fillStyle = stColor(y.status); roundRect(ctx, x + 14, yy, colW - 44, 34, 9); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = `600 17px ${FONT}`;
      const short = roomById(agentForDept(y.department)?.room)?.short || y.department;
      ctx.fillText(fitText(ctx, `${y.seq}. ${short}`, colW - 64), x + 24, yy + 8);
    });
  });
}

function drawHandoffs(surface, room, app) {
  const { ctx, canvas } = surface; const W = canvas.width, H = canvas.height;
  header(ctx, W, 'Traspasos', room.accent, app.connected ? 'Etapas registradas' : 'Sin sesión');
  if (!app.connected) return emptyNote(ctx, W, H, 'No consultado');
  const s = app.ent.snapshot;
  const steps = (s.steps || []).filter(x => x.status !== 'pending').sort((a, b) => Date.parse(b.finished_at || b.started_at || 0) - Date.parse(a.finished_at || a.started_at || 0)).slice(0, 5).reverse();
  if (!steps.length) return emptyNote(ctx, W, H, 'Sin traspasos');
  const step = (W - 60) / Math.max(1, steps.length);
  steps.forEach((x, i) => {
    const cx = 40 + i * step + step / 2 - 10, cy = H * 0.62;
    if (i) { ctx.strokeStyle = '#c9c2b4'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(cx - step + 34, cy); ctx.lineTo(cx - 34, cy); ctx.stroke(); }
    ctx.fillStyle = stColor(x.status); ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = `700 22px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText(String(x.seq), cx, cy - 12);
    ctx.fillStyle = '#2b2620'; ctx.font = `600 16px ${FONT}`;
    ctx.fillText(fitText(ctx, roomById(agentForDept(x.department)?.room)?.short || '', step - 6), cx, cy + 40); ctx.textAlign = 'left';
  });
}

function drawCompany(surface, app) {
  const { ctx, canvas } = surface; const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#121820'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#e8eef5'; ctx.font = `700 30px ${FONT}`; ctx.textBaseline = 'top'; ctx.fillText('PULSE HQ', 24, 20);
  ctx.fillStyle = app.mode === 'demo' ? '#f2c14e' : app.connected ? '#5fd38d' : '#8a95a3'; ctx.font = `600 18px ${FONT}`;
  ctx.fillText(app.mode === 'demo' ? 'SIMULACIÓN' : app.connected ? 'Conectado' : 'Sin sesión', 190, 28);
  const sm = app.summary;
  if (!sm) { ctx.fillStyle = '#8a95a3'; ctx.font = `500 24px ${FONT}`; ctx.fillText('Datos no consultados', 24, H / 2); return; }
  const k = [['En ejecución', sm.running, '#5fb3ff'], ['Revisiones', sm.approvals, '#f2c14e'], ['Misiones', sm.activeMissions, '#9ad08a'], ['Entregables', sm.deliverables, '#c9a7ff']];
  k.forEach(([l, v, c], i) => {
    const x = 24 + (i % 2) * (W / 2 - 12), y = 76 + Math.floor(i / 2) * ((H - 90) / 2);
    ctx.fillStyle = '#1d2632'; roundRect(ctx, x, y, W / 2 - 36, (H - 110) / 2, 12); ctx.fill();
    ctx.fillStyle = c; ctx.font = `700 46px ${FONT}`; ctx.fillText(String(v), x + 16, y + 10);
    ctx.fillStyle = '#9fb0c2'; ctx.font = `500 18px ${FONT}`; ctx.fillText(l, x + 16, y + 64);
  });
}

function drawMissionsMini(surface, app) {
  const { ctx, canvas } = surface; const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#16202a'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#e8eef5'; ctx.font = `700 28px ${FONT}`; ctx.textBaseline = 'top'; ctx.fillText('Junta', 22, 18);
  if (!app.connected) { ctx.fillStyle = '#8a95a3'; ctx.font = `500 22px ${FONT}`; ctx.fillText('No consultado', 22, H / 2); return; }
  const s = app.ent.snapshot; const waiting = (s.missions || []).filter(m => m.status === 'awaiting_ceo');
  ctx.fillStyle = '#f2c14e'; ctx.font = `700 52px ${FONT}`; ctx.fillText(String(waiting.length), 22, 64);
  ctx.fillStyle = '#9fb0c2'; ctx.font = `500 20px ${FONT}`; ctx.fillText('misiones esperan tu decisión', 22, 124);
  if (waiting[0]) { ctx.fillStyle = '#e8eef5'; ctx.font = `600 20px ${FONT}`; ctx.fillText(fitText(ctx, waiting[0].title.replace('[Simulación] ', ''), W - 44), 22, 160); }
}

function drawDecor(surface, kind, room, t = 0) {
  const { ctx, canvas } = surface; const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#141b22'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#5f6b78'; ctx.font = `600 16px ${FONT}`; ctx.textBaseline = 'top'; ctx.fillText('Decorativo', W - 110, 12);
  if (kind === 'chatScreen') {
    for (let i = 0; i < 5; i++) { const left = i % 2 === 0; ctx.fillStyle = left ? '#2b3642' : room.accent; roundRect(ctx, left ? 20 : W * 0.35, 40 + i * 38, W * 0.55, 28, 12); ctx.fill(); }
  } else {
    ctx.strokeStyle = room.accent; ctx.lineWidth = 4; ctx.beginPath();
    for (let x = 0; x <= W; x += 12) { const y = H * 0.6 - Math.sin(x / 40 + t) * 30 - x / W * 60; x ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.stroke();
    for (let i = 0; i < 8; i++) { ctx.fillStyle = i % 2 ? '#3a78c2' : '#5fb3ff'; const h = 20 + ((i * 37) % 60); ctx.fillRect(20 + i * (W - 40) / 8, H - 20 - h, (W - 40) / 8 - 8, h); }
  }
}

export function drawSurfaces(surfaces, app) {
  for (const s of surfaces) {
    const room = roomById(s.room);
    if (s.kind === 'missionBoard') drawMissionBoard(s.surface, app);
    else if (s.kind === 'board' && s.boardKind === 'handoffs') drawHandoffs(s.surface, room, app);
    else if (s.kind === 'board') drawDeptBoard(s.surface, room, app);
    else if (s.kind === 'wallScreen' && s.screen === 'company') drawCompany(s.surface, app);
    else if (s.kind === 'wallScreen' && s.screen === 'missions-mini') drawMissionsMini(s.surface, app);
    else if (s.kind === 'chatScreen' || s.kind === 'dataWall') { if (!s.drawn) { drawDecor(s.surface, s.kind, room); s.drawn = true; s.surface.commit(); } continue; }
    s.surface.commit(); // los decorativos se suben a la GPU una sola vez
  }
}
