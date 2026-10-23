import test from 'node:test';
import assert from 'node:assert/strict';
import { deriveIntents, companySummary } from '../live/src/data/activity.js';

const D = ['Marketing y crecimiento', 'Ventas y patrocinios', 'Inteligencia de mercado', 'Tecnología y automatización', 'Comunidad'];
const now = Date.parse('2026-10-23T18:00:00Z');
const iso = m => new Date(now - m * 60_000).toISOString();

test('sin sesión ningún agente aparece trabajando ni con pendientes', () => {
  const out = deriveIntents({ tasks: [{ department: D[0], status: 'running', updated_at: iso(1) }] }, D, { connected: false, now });
  for (const d of D) { assert.equal(out[d].kind, 'unconnected'); assert.equal(out[d].source, 'none'); }
});

test('solo una ejecución reciente del servidor activa la animación de trabajo', () => {
  const snap = { tasks: [
    { id: 'a', department: D[0], status: 'running', updated_at: iso(2) },
    { id: 'b', department: D[1], status: 'running', updated_at: iso(90) }
  ] };
  const out = deriveIntents(snap, D, { connected: true, now });
  assert.equal(out[D[0]].kind, 'running'); assert.equal(out[D[0]].taskId, 'a');
  assert.notEqual(out[D[1]].kind, 'running', 'una ejecución caducada no se anima');
});

test('revisión pendiente, error y misión salen de registros concretos', () => {
  const snap = {
    tasks: [{ id: 't', department: D[3], status: 'failed', error: '429', updated_at: iso(10) }],
    approvals: [{ id: 'ap', department: D[1], status: 'pending', task_id: 'x' }],
    steps: [{ id: 's', mission_id: 'm', department: D[2], seq: 1, status: 'running', started_at: iso(3), finished_at: null }],
    missions: [{ id: 'm', title: 'Lanzamiento' }]
  };
  const out = deriveIntents(snap, D, { connected: true, now });
  assert.equal(out[D[1]].kind, 'review'); assert.equal(out[D[1]].approvals.length, 1);
  assert.equal(out[D[3]].kind, 'failed'); assert.equal(out[D[3]].error, '429');
  assert.equal(out[D[2]].kind, 'mission'); assert.equal(out[D[2]].mission.title, 'Lanzamiento');
  assert.equal(out[D[4]].kind, 'idle');
});

test('una etapa antigua sin cerrar no lleva al agente a colaboración', () => {
  const snap = { steps: [{ id: 's', mission_id: 'm', department: D[2], seq: 1, status: 'running', started_at: iso(300), finished_at: null }], missions: [] };
  assert.equal(deriveIntents(snap, D, { connected: true, now })[D[2]].kind, 'idle');
});

test('el resumen de la empresa no existe sin sesión', () => {
  assert.equal(companySummary({}, false), null);
  assert.equal(companySummary({ tasks: [{ status: 'completed' }], approvals: [{ status: 'pending' }] }, true).approvals, 1);
});
