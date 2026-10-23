// Cuadrícula de navegación y A* para que los agentes caminen por zonas libres
// sin atravesar muebles ni paredes. Módulo puro (sin Three.js) para poder probarlo en Node.

export class NavGrid {
  constructor(minX, maxX, minZ, maxZ, cell = 0.2) {
    this.minX = minX; this.minZ = minZ; this.cell = cell;
    this.w = Math.ceil((maxX - minX) / cell);
    this.h = Math.ceil((maxZ - minZ) / cell);
    this.blocked = new Uint8Array(this.w * this.h);
  }
  toCell(x, z) { return [Math.floor((x - this.minX) / this.cell), Math.floor((z - this.minZ) / this.cell)]; }
  toWorld(i, j) { return [this.minX + (i + 0.5) * this.cell, this.minZ + (j + 0.5) * this.cell]; }
  inside(i, j) { return i >= 0 && j >= 0 && i < this.w && j < this.h; }
  free(i, j) { return this.inside(i, j) && !this.blocked[j * this.w + i]; }
  isFreeAt(x, z) { const [i, j] = this.toCell(x, z); return this.free(i, j); }

  /** Bloquea un rectángulo rotado (centro, ancho, fondo, rotación en grados) con un margen. */
  blockRect(cx, cz, w, d, rotDeg = 0, margin = 0, value = 1) {
    const r = (rotDeg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
    const hw = w / 2 + margin, hd = d / 2 + margin;
    const ext = Math.abs(hw * c) + Math.abs(hd * s), extZ = Math.abs(hw * s) + Math.abs(hd * c);
    const [i0, j0] = this.toCell(cx - ext, cz - extZ), [i1, j1] = this.toCell(cx + ext, cz + extZ);
    for (let j = Math.max(0, j0); j <= Math.min(this.h - 1, j1); j++) {
      for (let i = Math.max(0, i0); i <= Math.min(this.w - 1, i1); i++) {
        const [x, z] = this.toWorld(i, j);
        const dx = x - cx, dz = z - cz;
        // rotación inversa al espacio local del mueble (rotación en Y de Three.js)
        const lx = dx * c - dz * s, lz = dx * s + dz * c;
        if (Math.abs(lx) <= hw && Math.abs(lz) <= hd) this.blocked[j * this.w + i] = value;
      }
    }
  }

  nearestFree(x, z, maxR = 12) {
    const [ci, cj] = this.toCell(x, z);
    if (this.free(ci, cj)) return [ci, cj];
    for (let r = 1; r <= maxR; r++) {
      let best = null, bd = Infinity;
      for (let j = cj - r; j <= cj + r; j++) for (let i = ci - r; i <= ci + r; i++) {
        if (Math.max(Math.abs(i - ci), Math.abs(j - cj)) !== r || !this.free(i, j)) continue;
        const d = (i - ci) ** 2 + (j - cj) ** 2;
        if (d < bd) { bd = d; best = [i, j]; }
      }
      if (best) return best;
    }
    return null;
  }

  lineFree(i0, j0, i1, j1) {
    const steps = Math.max(Math.abs(i1 - i0), Math.abs(j1 - j0)) * 2;
    for (let k = 0; k <= steps; k++) {
      const t = steps ? k / steps : 0;
      const fi = i0 + (i1 - i0) * t, fj = j0 + (j1 - j0) * t;
      // comprobar las celdas que toca un cuerpo con algo de grosor
      if (!this.free(Math.round(fi), Math.round(fj)) || !this.free(Math.floor(fi + 0.5), Math.floor(fj + 0.5))) return false;
    }
    return true;
  }

  /** A* con 8 vecinos, sin cortar esquinas, y suavizado por línea de visión. */
  findPath(ax, az, bx, bz) {
    const start = this.nearestFree(ax, az), goal = this.nearestFree(bx, bz);
    if (!start || !goal) return null;
    const W = this.w, N = W * this.h;
    const sIdx = start[1] * W + start[0], gIdx = goal[1] * W + goal[0];
    if (sIdx === gIdx) return [[bx, bz]];
    const g = new Float32Array(N).fill(Infinity), came = new Int32Array(N).fill(-1), closed = new Uint8Array(N);
    const heap = new MinHeap();
    const hfn = idx => { const i = idx % W, j = (idx / W) | 0; const dx = Math.abs(i - goal[0]), dz = Math.abs(j - goal[1]); return (dx + dz) + (Math.SQRT2 - 2) * Math.min(dx, dz); };
    g[sIdx] = 0; heap.push(sIdx, hfn(sIdx));
    const dirs = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]];
    let found = false, guard = 0;
    while (heap.size && guard++ < 60000) {
      const cur = heap.pop();
      if (cur === gIdx) { found = true; break; }
      if (closed[cur]) continue; closed[cur] = 1;
      const ci = cur % W, cj = (cur / W) | 0;
      for (const [di, dj, cost] of dirs) {
        const ni = ci + di, nj = cj + dj;
        if (!this.free(ni, nj)) continue;
        if (di && dj && (!this.free(ci + di, cj) || !this.free(ci, cj + dj))) continue;
        const n = nj * W + ni; if (closed[n]) continue;
        const ng = g[cur] + cost;
        if (ng < g[n]) { g[n] = ng; came[n] = cur; heap.push(n, ng + hfn(n)); }
      }
    }
    if (!found) return null;
    const cells = [];
    for (let c = gIdx; c !== -1; c = came[c]) cells.push([c % W, (c / W) | 0]);
    cells.reverse();
    // suavizado
    const pts = [cells[0]];
    let anchor = 0;
    for (let k = 2; k < cells.length; k++) {
      if (!this.lineFree(cells[anchor][0], cells[anchor][1], cells[k][0], cells[k][1])) {
        pts.push(cells[k - 1]); anchor = k - 1;
      }
    }
    pts.push(cells[cells.length - 1]);
    const out = pts.slice(1).map(([i, j]) => this.toWorld(i, j));
    out[out.length - 1] = this.isFreeAt(bx, bz) ? [bx, bz] : out[out.length - 1];
    return out;
  }
}

class MinHeap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  push(key, val) {
    const k = this.k, v = this.v; k.push(key); v.push(val);
    let i = k.length - 1;
    while (i > 0) { const p = (i - 1) >> 1; if (v[p] <= v[i]) break; [k[p], k[i]] = [k[i], k[p]]; [v[p], v[i]] = [v[i], v[p]]; i = p; }
  }
  pop() {
    const k = this.k, v = this.v; const top = k[0];
    const lk = k.pop(), lv = v.pop();
    if (k.length) {
      k[0] = lk; v[0] = lv; let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < k.length && v[l] < v[m]) m = l;
        if (r < k.length && v[r] < v[m]) m = r;
        if (m === i) break;
        [k[m], k[i]] = [k[i], k[m]]; [v[m], v[i]] = [v[i], v[m]]; i = m;
      }
    }
    return top;
  }
}
