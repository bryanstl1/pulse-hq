import test from 'node:test';
import assert from 'node:assert/strict';
import { createEnterprise } from '../live/src/data/enterprise.js';
import { createDemoClient } from '../live/src/data/demo-client.js';
import { deriveIntents } from '../live/src/data/activity.js';

// Recorre el flujo del CEO con el cliente de SIMULACIÓN (acelerado). No toca Supabase.
test('instrucción → tarea registrada → en ejecución → resultado con revisión → aprobación', async () => {
  const client = createDemoClient({ speed: 40 });
  const ent = createEnterprise(client, { mode: 'demo' });
  await ent.init();
  const dept = 'Ventas y patrocinios';
  const before = ent.snapshot.tasks.filter(t => t.department === dept).length;
  const run = ent.runTask(dept, 'Preparar propuesta para un patrocinador');
  await new Promise(r => setTimeout(r, 80));
  await ent.refresh();
  const live = ent.snapshot.tasks.find(t => t.department === dept && t.instruction.startsWith('Preparar propuesta para un'));
  assert.ok(live, 'la tarea queda registrada antes de terminar');
  assert.equal(deriveIntents(ent.snapshot, [dept], { connected: true })[dept].kind, 'running');
  const res = await run;
  assert.equal(res.ok, true);
  const done = ent.snapshot.tasks.find(t => t.id === live.id);
  assert.equal(done.status, 'completed'); assert.match(done.result, /\[Simulación\]/);
  const ap = ent.snapshot.approvals.find(a => a.task_id === live.id && a.status === 'pending');
  assert.ok(ap, 'la propuesta genera una revisión');
  await ent.decideApproval(ap.id, 'approved');
  assert.equal(ent.snapshot.approvals.find(a => a.id === ap.id).status, 'approved');
  assert.ok(ent.snapshot.deliverables.some(d => d.task_id === live.id), 'el resultado deja un entregable');
  client.dispose();
});

test('el error del motor llega como error y permite reintentar', async () => {
  const client = createDemoClient({ speed: 40 });
  const ent = createEnterprise(client, { mode: 'demo' });
  await ent.init();
  await assert.rejects(ent.runTask('Comunidad', 'Esto falla a propósito'), /error de prueba/);
  await ent.refresh();
  const t = ent.snapshot.tasks.find(x => x.department === 'Comunidad');
  assert.equal(t.status, 'failed');
  assert.equal(deriveIntents(ent.snapshot, ['Comunidad'], { connected: true }).Comunidad.kind, 'failed');
  client.dispose();
});

test('una misión del motor multiagente (simulado) avanza por etapas y termina en propuesta para el CEO', async () => {
  const client = createDemoClient({ speed: 200 });
  const ent = createEnterprise(client, { mode: 'demo' });
  await ent.init();
  const r = await ent.createMission('Festival de invierno', 'Diseñar experiencia, patrocinio y presupuesto para un festival de invierno');
  await ent.refresh();
  assert.equal(ent.snapshot.missions.find(x => x.id === r.missionId).engine, 'core');
  await new Promise(res => setTimeout(res, 1200));
  await ent.refresh();
  const m = ent.snapshot.missions.find(x => x.id === r.missionId);
  const steps = ent.snapshot.steps.filter(s => s.mission_id === r.missionId);
  assert.ok(steps.length >= 4, 'tres agentes + consolidación de Ulises');
  assert.equal(m.status, 'awaiting_ceo');
  assert.ok(steps.every(s => s.status === 'completed'));
  client.dispose();
});

test('el adaptador real exige sesión antes de ejecutar', async () => {
  const fake = { auth: { getUser: async () => ({ data: { user: null }, error: null }), onAuthStateChange: () => ({}) }, from() { throw new Error('no debe consultarse'); }, functions: { invoke() { throw new Error('no debe invocarse'); } } };
  const ent = createEnterprise(fake);
  await ent.init();
  await assert.rejects(ent.runTask('Comunidad', 'Hola equipo'), /Inicia sesión/);
});

test('verifyLink rechaza enlaces de otro origen', async () => {
  const fake = { auth: { getUser: async () => ({ data: { user: null }, error: null }), onAuthStateChange: () => ({}), verifyOtp: async () => ({ error: null }) } };
  const ent = createEnterprise(fake); await ent.init();
  await assert.rejects(ent.verifyLink('https://evil.example.com/auth/v1/verify?token=x&type=magiclink'), /no pertenece/);
  await ent.verifyLink('https://erluuujhgpreuuaskjwo.supabase.co/auth/v1/verify?token=abc&type=magiclink&redirect_to=x');
});
