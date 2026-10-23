import test from 'node:test';
import assert from 'node:assert/strict';
import { coreIntent, coreEntries, runStats } from '../live/src/data/core.js';
import { deriveIntents } from '../live/src/data/activity.js';
import { createEnterprise } from '../live/src/data/enterprise.js';
import { createDemoClient } from '../live/src/data/demo-client.js';

const NOW = Date.parse('2026-10-23T21:00:00Z');
const at = s => new Date(NOW - s * 1000).toISOString();
const base = () => ({
  missions: [{ id: 'm1', engine: 'core', status: 'running', title: 'Misión', claimed_at: null, created_at: at(600) }],
  steps: [
    { id: 's1', mission_id: 'm1', seq: 1, agent_id: 'iris', department: 'Inteligencia de mercado', status: 'running', claimed_at: at(30), started_at: at(30), attempt: 0, task_id: 't1' },
    { id: 's2', mission_id: 'm1', seq: 2, agent_id: 'rocco', department: 'Ventas y patrocinios', status: 'pending', attempt: 0, depends_on: [1] }
  ],
  runs: [], messages: [], tasks: [{ id: 't1', department: 'Inteligencia de mercado', status: 'running', updated_at: at(30), created_at: at(30) }], approvals: []
});

test('Recibiendo: etapa reclamada por el motor sin llamadas al modelo', () => {
  const i = coreIntent(base(), 'Inteligencia de mercado', NOW);
  assert.equal(i.kind, 'receiving'); assert.equal(i.label, 'Recibiendo');
  assert.deepEqual(i.evidence, { mission: 'm1', step: 's1' });
});

test('Trabajando: hay filas en pulse_runs desde el reclamo; las anteriores no cuentan', () => {
  const s = base();
  s.runs = [{ id: 'old', step_id: 's1', agent_id: 'iris', phase: 'act', model: 'x', created_at: at(400) }];
  assert.equal(coreIntent(s, 'Inteligencia de mercado', NOW).kind, 'receiving', 'una ejecución de un intento anterior no es trabajo actual');
  s.runs.unshift({ id: 'r1', step_id: 's1', agent_id: 'iris', phase: 'act', provider: 'gemini', model: 'gemini-3.5-flash-lite', created_at: at(10) });
  const i = coreIntent(s, 'Inteligencia de mercado', NOW);
  assert.equal(i.kind, 'running'); assert.equal(i.label, 'Trabajando'); assert.equal(i.evidence.run, 'r1');
  s.runs.unshift({ id: 'r2', step_id: 's1', agent_id: 'calidad', phase: 'evaluate', model: 'm', created_at: at(2) });
  assert.match(coreIntent(s, 'Inteligencia de mercado', NOW).detail, /Calidad revisa/);
});

test('un reclamo caducado no se muestra como trabajo', () => {
  const s = base(); s.steps[0].claimed_at = at(60 * 20);
  assert.notEqual(coreIntent(s, 'Inteligencia de mercado', NOW)?.kind, 'running');
});

test('Resultado recibido: etapa completada con mensaje result; sin mensaje no hay estado', () => {
  const s = base(); Object.assign(s.steps[0], { status: 'completed', finished_at: at(60), review: { score: 8 } });
  assert.equal(coreIntent(s, 'Inteligencia de mercado', NOW), null);
  s.messages = [{ id: 'msg1', step_id: 's1', from_agent: 'iris', to_agent: 'ulises', kind: 'result', artifact: { deliverable_id: 'd1' }, created_at: at(60) }];
  const i = coreIntent(s, 'Inteligencia de mercado', NOW);
  assert.equal(i.label, 'Resultado recibido'); assert.equal(i.evidence.deliverable, 'd1');
});

test('Ulises: misión registrada → Recibiendo; con ejecución de plan → Trabajando', () => {
  const s = { missions: [{ id: 'm2', engine: 'core', status: 'planning', claimed_at: null, created_at: at(5) }], steps: [], runs: [], messages: [{ id: 'q', mission_id: 'm2', from_agent: 'ceo', to_agent: 'ulises', kind: 'request', created_at: at(5) }] };
  const i = coreIntent(s, 'Dirección estratégica', NOW);
  assert.equal(i.kind, 'receiving'); assert.equal(i.evidence.message, 'q');
  s.runs = [{ id: 'p', mission_id: 'm2', phase: 'plan', provider: 'gemini', model: 'g', created_at: at(1) }];
  assert.equal(coreIntent(s, 'Dirección estratégica', NOW).kind, 'running');
});

test('las tareas espejo del motor no activan el estado antiguo', () => {
  const s = base(); Object.assign(s.steps[0], { status: 'pending', claimed_at: null, attempt: 1 });
  const i = deriveIntents(s, ['Inteligencia de mercado'], { connected: true, now: NOW })['Inteligencia de mercado'];
  assert.equal(i.kind, 'mission', 'la etapa devuelta por Calidad espera; no aparece como «En ejecución»');
});

test('runStats y coreEntries leen registros reales', () => {
  const s = base(); s.runs = [{ mission_id: 'm1', step_id: 's1', status: 'ok', input_tokens: 10, output_tokens: 5, provider: 'gemini', model: 'g', created_at: at(1) }];
  s.messages = [{ id: 'a', step_id: 's1', mission_id: 'm1', from_agent: 'ulises', to_agent: 'iris', kind: 'request', created_at: at(40) }];
  assert.equal(runStats(s, { missionId: 'm1' }).tokens, 15);
  const e = coreEntries(s, 'Inteligencia de mercado'); assert.equal(e.length, 1); assert.equal(e[0].messages.length, 1);
});

test('escribir a Ulises invoca pulse-core con la instrucción y el origen «office»', async () => {
  const calls = [];
  const user = { id: 'u1', email: 'ceo@x' };
  const empty = () => { const c = { select: () => c, eq: () => c, order: () => c, limit: () => c, then: r => r({ data: [], error: null }) }; return c; };
  const fake = { auth: { getUser: async () => ({ data: { user }, error: null }), onAuthStateChange: () => ({}) }, from: empty, functions: { invoke: async (slug, { body }) => { calls.push([slug, body]); return { data: { ok: true, missionId: 'mX' }, error: null }; } } };
  const ent = createEnterprise(fake); await ent.init();
  await assert.rejects(ent.askUlises('muy corto'), /20 caracteres/);
  const r = await ent.askUlises('Ulises, desarrolla una estrategia comercial para colaboraciones con marcas de música electrónica');
  assert.equal(r.missionId, 'mX');
  assert.equal(calls[0][0], 'pulse-core');
  assert.equal(calls[0][1].action, 'mission.create'); assert.equal(calls[0][1].source, 'office');
  assert.match(calls[0][1].objective, /marcas de música electrónica/);
  assert.ok(calls[0][1].title.length >= 5 && calls[0][1].title.length <= 120);
});

test('simulación: Ulises → Recibiendo → plan → tres agentes con Calidad → Resultado recibido', async () => {
  const client = createDemoClient({ speed: 50 });
  const ent = createEnterprise(client, { mode: 'demo' });
  await ent.init();
  const D = ['Dirección estratégica', 'Inteligencia de mercado'];
  const r = await ent.askUlises('Ulises, prepara una propuesta de patrocinio con investigación y presupuesto');
  await ent.refresh();
  assert.equal(deriveIntents(ent.snapshot, D, { connected: true })['Dirección estratégica'].kind, 'receiving');
  const seen = new Set();
  for (let i = 0; i < 60; i++) {
    await new Promise(res => setTimeout(res, 25)); await ent.refresh();
    const k = deriveIntents(ent.snapshot, D, { connected: true })['Inteligencia de mercado'];
    seen.add(k.label);
    if (ent.snapshot.missions.find(m => m.id === r.missionId).status === 'awaiting_ceo') break;
  }
  assert.ok(seen.has('Trabajando'), [...seen].join(','));
  const m = ent.snapshot.missions.find(x => x.id === r.missionId);
  assert.equal(m.status, 'awaiting_ceo');
  const agents = new Set(ent.snapshot.steps.filter(s => s.mission_id === r.missionId).map(s => s.agent_id));
  assert.ok(agents.size >= 4);
  assert.ok(ent.snapshot.runs.some(x => x.mission_id === r.missionId && x.agent_id === 'calidad'));
  assert.ok(ent.snapshot.messages.every(x => x.mission_id !== r.missionId || x.content.startsWith('[Simulación]')), 'todo lo simulado va rotulado');
  client.dispose();
});
