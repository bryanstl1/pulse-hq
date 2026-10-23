import test from 'node:test';
import assert from 'node:assert/strict';
import { NavGrid } from '../live/src/world/nav.js';

test('A* rodea un mueble en lugar de atravesarlo', () => {
  const g = new NavGrid(0, 10, 0, 10, 0.2);
  g.blockRect(5, 5, 1, 6, 0, 0.2);           // pared vertical en el centro
  const path = g.findPath(2, 5, 8, 5);
  assert.ok(path && path.length >= 2, 'debe existir ruta');
  const pts = [[2, 5], ...path];
  for (let i = 1; i < pts.length; i++) {
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
    for (let k = 0; k <= 20; k++) {
      const x = ax + (bx - ax) * k / 20, z = az + (bz - az) * k / 20;
      assert.ok(g.isFreeAt(x, z), `el tramo cruza un obstáculo en ${x.toFixed(2)},${z.toFixed(2)}`);
    }
  }
});

test('un destino bloqueado se resuelve a la celda libre más cercana', () => {
  const g = new NavGrid(0, 6, 0, 6, 0.2);
  g.blockRect(3, 3, 1, 1, 0, 0);
  const path = g.findPath(1, 1, 3, 3);
  assert.ok(path);
  const [x, z] = path.at(-1);
  assert.ok(g.isFreeAt(x, z));
});

test('sin salida no se inventa una ruta', () => {
  const g = new NavGrid(0, 6, 0, 6, 0.2);
  g.blockRect(3, 3, 0.4, 7, 0, 0);
  assert.equal(g.findPath(1, 3, 5, 3), null);
});

test('rectángulos rotados bloquean su huella real', () => {
  const g = new NavGrid(0, 6, 0, 6, 0.1);
  g.blockRect(3, 3, 2, 0.4, 90, 0);         // girado 90°: ahora ocupa 0.4 × 2
  assert.equal(g.isFreeAt(3, 3.9), false);
  assert.equal(g.isFreeAt(3.9, 3), true);
});
