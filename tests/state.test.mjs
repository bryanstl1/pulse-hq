import {test} from 'node:test';import assert from 'node:assert/strict';
import {normalizeActivity} from '../prototype/src/state.js';
const now=Date.parse('2026-10-21T12:00:00Z');
test('prototipo desconectado no simula actividad',()=>assert.equal(normalizeActivity({record:{status:'running',updated_at:new Date(now).toISOString()}},now).kind,'unconnected'));
test('ejecución antigua no aparece trabajando',()=>assert.equal(normalizeActivity({source:'server',record:{status:'running',updated_at:'2026-10-20T12:00:00Z'}},now).kind,'idle'));
test('revisión requiere registro',()=>assert.equal(normalizeActivity({source:'server',record:{status:'pending'}},now).kind,'review'));
test('ejecución reciente explícita se conserva',()=>assert.equal(normalizeActivity({source:'server',record:{status:'running',updated_at:'2026-10-21T11:59:00Z'}},now).kind,'running'));
