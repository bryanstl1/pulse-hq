// Regla de correspondencia entidad ↔ artículo usada por wikipedia_research (pulse-core).
import test from 'node:test';
import assert from 'node:assert/strict';
import { matchesEntity } from '../supabase/functions/pulse-core/tools.ts';

test('acepta artículos que corresponden a la entidad', () => {
  for (const [e, t] of [['EDC Mexico', 'Electric Daisy Carnival'], ['Corona Capital', 'Festival Corona Capital'], ['Time Warp', 'Time Warp (festival)'], ['Ultra Mexico', 'Ultra Music Festival'], ['Bahidorá', 'Bahidorá'], ['Vive Latino', 'Festival Iberoamericano de Cultura Musical Vive Latino'], ['The BPM Festival', 'BPM Entertainment']]) assert.equal(matchesEntity(e, t), true, `${e} ↔ ${t}`);
});
test('rechaza el primer resultado cuando no corresponde', () => {
  for (const [e, t] of [['Bahidorá', 'Spanish Leather Tour'], ['Zamna Festival', 'Guilherme Peixoto'], ['Day Zero Festival', 'Zero Day (película de 2003)'], ['Mayan Warrior', 'WMAC Masters'], ['Daydream Festival', 'Moonage Daydream (película)']]) assert.equal(matchesEntity(e, t), false, `${e} ↔ ${t}`);
});
