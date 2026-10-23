import * as THREE from 'three';

// Accesorios procedurales con el mismo lenguaje low-poly que el Kenney Furniture Kit.
const mats = new Map();
export function mat(color, o = {}) {
  const key = `${color}|${o.emissive || ''}|${o.ei || 0}|${o.rough ?? 0.85}|${o.metal || 0}|${o.opacity ?? 1}`;
  if (!mats.has(key)) {
    mats.set(key, new THREE.MeshStandardMaterial({
      color, roughness: o.rough ?? 0.85, metalness: o.metal || 0,
      emissive: o.emissive || '#000000', emissiveIntensity: o.ei || 0,
      transparent: (o.opacity ?? 1) < 1, opacity: o.opacity ?? 1
    }));
  }
  return mats.get(key);
}
const geoCache = new Map();
function box(w, h, d) {
  const k = `b${w}|${h}|${d}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.BoxGeometry(w, h, d));
  return geoCache.get(k);
}
function cyl(rt, rb, h, s = 12) {
  const k = `c${rt}|${rb}|${h}|${s}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.CylinderGeometry(rt, rb, h, s));
  return geoCache.get(k);
}
function sph(r, w = 12, h = 10) {
  const k = `s${r}|${w}|${h}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.SphereGeometry(r, w, h));
  return geoCache.get(k);
}
export function mesh(geo, material, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = shadow; m.receiveShadow = true;
  return m;
}
export const B = (w, h, d, c, x, y, z, o) => mesh(box(w, h, d), typeof c === 'string' ? mat(c, o) : c, x, y, z);
const C = (rt, rb, h, c, x, y, z, o, s) => mesh(cyl(rt, rb, h, s), typeof c === 'string' ? mat(c, o) : c, x, y, z);
const S = (r, c, x, y, z, o) => mesh(sph(r), typeof c === 'string' ? mat(c, o) : c, x, y, z);

// ——— Texturas dinámicas en canvas ———
export class CanvasSurface {
  constructor(w, h, pxPerM = 220) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = Math.min(1024, Math.round(w * pxPerM));
    this.canvas.height = Math.min(512, Math.round(h * pxPerM));
    this.ctx = this.canvas.getContext('2d');
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 4;
  }
  commit() { this.texture.needsUpdate = true; }
}

export function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

export function fitText(ctx, text, maxW) {
  let t = String(text || '');
  if (ctx.measureText(t).width <= maxW) return t;
  while (t.length > 1 && ctx.measureText(t + '…').width > maxW) t = t.slice(0, -1);
  return t + '…';
}

function surfacePlane(surface, w, h, emissive = false) {
  const material = emissive
    ? new THREE.MeshBasicMaterial({ map: surface.texture, toneMapped: false })
    : new THREE.MeshStandardMaterial({ map: surface.texture, roughness: 0.9 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  m.receiveShadow = !emissive;
  return m;
}

// ——— Constructores ———
// Cada uno devuelve { group, fp: [ancho, fondo] | null, dyn?: CanvasSurface, anim?: (t)=>void, glow?: Material }
export const PROPS = {
  window({ w = 1.6, h = 1.1, y = 1.2 }) {
    const g = new THREE.Group();
    const s = new CanvasSurface(w, h, 120);
    const ctx = s.ctx, W = s.canvas.width, H = s.canvas.height;
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, '#9fd0ef'); grad.addColorStop(0.7, '#e7f1ef'); grad.addColorStop(1, '#f6e7cf');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(120,150,170,0.45)';
    for (let i = 0; i < 9; i++) { const bw = W / 10, bh = H * (0.25 + ((i * 37) % 30) / 100); ctx.fillRect(i * bw * 1.1, H - bh, bw * 0.8, bh); }
    s.commit();
    const glass = surfacePlane(s, w, h, true); glass.position.set(0, y, 0.03); g.add(glass);
    const frame = '#f7f3ea';
    g.add(B(w + 0.1, 0.06, 0.08, frame, 0, y + h / 2, 0.04), B(w + 0.1, 0.06, 0.12, frame, 0, y - h / 2, 0.06));
    g.add(B(0.06, h, 0.08, frame, -w / 2, y, 0.04), B(0.06, h, 0.08, frame, w / 2, y, 0.04), B(0.04, h, 0.06, frame, 0, y, 0.04));
    return { group: g, fp: null };
  },

  sign({ w = 1.9, h = 0.5, y = 2, text = '', accent = '#555' }) {
    const g = new THREE.Group();
    const s = new CanvasSurface(w, h, 260);
    const ctx = s.ctx, W = s.canvas.width, H = s.canvas.height;
    ctx.fillStyle = '#fbf8f1'; roundRect(ctx, 0, 0, W, H, 26); ctx.fill();
    ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(H * 0.5, H * 0.5, H * 0.24, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#2b2620'; ctx.font = `700 ${Math.round(H * 0.46)}px -apple-system, "SF Pro Display", "Segoe UI", sans-serif`;
    ctx.textBaseline = 'middle'; ctx.fillText(fitText(ctx, text, W - H * 1.2), H * 0.95, H * 0.53);
    s.commit();
    const plane = surfacePlane(s, w, h); plane.position.set(0, y, 0.03); g.add(plane);
    return { group: g, fp: null };
  },

  board({ w = 1.8, h = 1.05, y = 1.05, accent = '#777' }) {
    const g = new THREE.Group();
    const s = new CanvasSurface(w, h, 240);
    const plane = surfacePlane(s, w, h); plane.position.set(0, y + h / 2, 0.04); g.add(plane);
    g.add(B(w + 0.08, h + 0.08, 0.04, '#d8d2c6', 0, y + h / 2, 0.015));
    g.add(B(w * 0.9, 0.04, 0.1, '#c9c2b4', 0, y - 0.02, 0.07));
    const dot = (c, x) => S(0.025, c, x, y, 0.1);
    g.add(dot(accent, -0.3), dot('#2c5d8a', -0.18), dot('#d9653b', -0.06));
    return { group: g, fp: null, dyn: s, hitBox: [w, h, 0.2, y + h / 2] };
  },

  missionBoard({ w = 4.2, h = 1.6, y = 1.25 }) {
    const g = new THREE.Group();
    const s = new CanvasSurface(w, h, 240);
    const plane = surfacePlane(s, w, h); plane.position.set(0, y + h / 2 - 0.4, 0.062); g.add(plane);
    g.add(B(w + 0.12, h + 0.12, 0.06, '#3a3631', 0, y + h / 2 - 0.4, 0.02));
    return { group: g, fp: null, dyn: s, hitBox: [w, h, 0.25, y + h / 2 - 0.4] };
  },

  wallScreen({ w = 1.6, h = 0.9, y = 1.15 }) {
    const g = new THREE.Group();
    const s = new CanvasSurface(w, h, 240);
    const plane = surfacePlane(s, w, h, true); plane.position.set(0, y + h / 2, 0.062); g.add(plane);
    g.add(B(w + 0.08, h + 0.08, 0.06, '#1d1f24', 0, y + h / 2, 0.02));
    return { group: g, fp: null, dyn: s, hitBox: [w, h, 0.25, y + h / 2] };
  },

  chatScreen({ accent }) { return PROPS.wallScreen({ w: 1.5, h: 0.95, y: 1.0, accent }); },
  dataWall() { return PROPS.wallScreen({ w: 2.0, h: 1.0, y: 1.0 }); },

  cardsWall({ accent }) {
    const g = new THREE.Group();
    g.add(B(1.9, 1.1, 0.04, '#c9a77c', 0, 1.6, 0.02));
    const colors = [accent, '#f2c14e', '#e07a5f', '#81b29a', '#f4f1de', '#3d405b'];
    for (let i = 0; i < 12; i++) {
      const cx = -0.75 + (i % 4) * 0.5 + ((i * 13) % 7) / 100, cy = 1.95 - Math.floor(i / 4) * 0.33;
      const card = B(0.36, 0.24, 0.012, colors[i % colors.length], cx, cy, 0.05);
      card.rotation.z = (((i * 29) % 11) - 5) / 60; g.add(card);
    }
    return { group: g, fp: null };
  },

  pressWall({ accent }) {
    const g = new THREE.Group();
    const s = new CanvasSurface(2.0, 1.2, 160);
    const ctx = s.ctx, W = s.canvas.width, H = s.canvas.height;
    ctx.fillStyle = '#fbf8f3'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = accent; ctx.globalAlpha = 0.9;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) { ctx.font = `700 ${H / 8}px sans-serif`; ctx.fillText('PULSE', c * W / 5 + (r % 2) * W / 10 + 6, (r + 0.75) * H / 4); }
    s.commit();
    const plane = surfacePlane(s, 2.0, 1.2); plane.position.set(0, 1.4, 0.03); g.add(plane);
    return { group: g, fp: null };
  },

  statusLamp() {
    const g = new THREE.Group();
    const glow = new THREE.MeshStandardMaterial({ color: '#b9b4aa', emissive: '#000000', emissiveIntensity: 0, roughness: 0.4 });
    g.add(C(0.05, 0.06, 0.03, '#3a3631', 0, 0.015, 0));
    const bulb = mesh(sph(0.045), glow, 0, 0.07, 0); g.add(bulb);
    return { group: g, fp: null, glow };
  },

  tray({ big }) {
    const g = new THREE.Group();
    const w = big ? 0.36 : 0.3;
    g.add(B(w, 0.035, 0.24, '#7a5536', 0, 0.018, 0));
    const papers = new THREE.Group(); papers.name = 'papers'; g.add(papers);
    return { group: g, fp: null, papers, hitBox: [0.5, 0.35, 0.45, 0.12] };
  },

  globe() {
    const g = new THREE.Group();
    g.add(C(0.18, 0.22, 0.05, '#6b4a2e', 0, 0.025, 0), C(0.02, 0.02, 0.62, '#6b4a2e', 0, 0.33, 0));
    const ball = S(0.24, '#4f8fbf', 0, 0.86, 0); g.add(ball);
    const land = S(0.243, '#7fb069', 0, 0.86, 0, { opacity: 0.85 }); land.scale.set(1, 0.6, 0.7); g.add(land);
    return { group: g, fp: [0.5, 0.5], anim: t => { ball.rotation.y = t * 0.3; land.rotation.y = t * 0.3; } };
  },

  easel({ accent }) {
    const g = new THREE.Group();
    const leg = (x, rz) => { const m = B(0.04, 1.5, 0.04, '#8a6a48', x, 0.75, 0); m.rotation.z = rz; return m; };
    g.add(leg(-0.25, 0.12), leg(0.25, -0.12));
    g.add(B(0.8, 0.6, 0.03, '#fbf8f1', 0, 1.15, 0.05));
    g.add(B(0.5, 0.08, 0.035, accent, 0, 1.28, 0.06), B(0.36, 0.06, 0.035, '#f2c14e', -0.07, 1.14, 0.06), B(0.56, 0.05, 0.035, '#3d405b', 0, 1.02, 0.06));
    return { group: g, fp: [0.7, 0.5] };
  },

  greenScreen({ wide }) {
    const g = new THREE.Group(); const w = wide ? 3.2 : 2.2;
    g.add(B(0.05, 2.3, 0.05, '#2b2b2b', -w / 2, 1.15, 0), B(0.05, 2.3, 0.05, '#2b2b2b', w / 2, 1.15, 0), B(w + 0.05, 0.05, 0.05, '#2b2b2b', 0, 2.3, 0));
    const cloth = B(w - 0.05, 2.1, 0.02, '#3fbf5a', 0, 1.2, 0.02); g.add(cloth);
    const floor = B(w - 0.05, 0.02, 1.1, '#3fbf5a', 0, 0.01, 0.55); floor.castShadow = false; g.add(floor);
    return { group: g, fp: [w, 0.3] };
  },

  tripod() {
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; const l = B(0.03, 1.15, 0.03, '#222', Math.sin(a) * 0.17, 0.55, Math.cos(a) * 0.17); l.rotation.set(Math.cos(a) * 0.3, 0, -Math.sin(a) * 0.3); g.add(l); }
    g.add(B(0.3, 0.2, 0.18, '#1d1d1d', 0, 1.18, 0), C(0.07, 0.07, 0.16, '#111', 0, 1.18, 0.15), B(0.06, 0.06, 0.06, '#e33', 0.1, 1.3, 0));
    const lens = g.children[g.children.length - 2]; lens.rotation.x = Math.PI / 2;
    return { group: g, fp: [0.5, 0.5] };
  },

  softbox() {
    const g = new THREE.Group();
    g.add(C(0.02, 0.02, 1.6, '#333', 0, 0.8, 0), C(0.2, 0.25, 0.04, '#333', 0, 0.02, 0));
    const head = B(0.55, 0.42, 0.18, '#f8f6f0', 0, 1.7, 0, { emissive: '#fff4dc', ei: 0.9 }); g.add(head);
    g.add(B(0.6, 0.47, 0.12, '#1f1f1f', 0, 1.7, -0.12));
    return { group: g, fp: [0.45, 0.45] };
  },

  longTable({ w = 2.2, d = 1.0, map }) {
    const g = new THREE.Group();
    g.add(B(w, 0.06, d, map ? '#f4efe6' : '#8a5a36', 0, 0.74, 0));
    const lx = w / 2 - 0.12, lz = d / 2 - 0.12;
    [[-lx, -lz], [lx, -lz], [-lx, lz], [lx, lz]].forEach(([x, z]) => g.add(B(0.06, 0.72, 0.06, '#3b3530', x, 0.36, z)));
    if (map) { const m = B(w * 0.8, 0.01, d * 0.7, '#7fb3d5', 0, 0.775, 0); m.castShadow = false; g.add(m); g.add(B(w * 0.25, 0.012, d * 0.25, '#e9c46a', -0.2, 0.78, 0.05)); }
    return { group: g, fp: [w, d] };
  },

  execDesk() {
    const g = new THREE.Group();
    g.add(B(2.0, 0.07, 0.95, '#5a3b26', 0, 0.76, 0), B(0.5, 0.72, 0.85, '#4a301f', -0.72, 0.36, 0), B(0.5, 0.72, 0.85, '#4a301f', 0.72, 0.36, 0), B(1.0, 0.5, 0.05, '#4a301f', 0, 0.45, 0.4));
    return { group: g, fp: [2.0, 0.95] };
  },

  door({ accent }) {
    const g = new THREE.Group();
    g.add(B(0.95, 2.1, 0.06, '#8a6040', 0, 1.05, 0.03), C(0.03, 0.03, 0.12, '#d9c27a', 0.33, 1.0, 0.1));
    const s = new CanvasSurface(0.8, 0.22, 240); const ctx = s.ctx;
    ctx.fillStyle = accent; roundRect(ctx, 0, 0, s.canvas.width, s.canvas.height, 12); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = '700 30px sans-serif'; ctx.textBaseline = 'middle'; ctx.fillText('CENTRO ANTERIOR', 12, s.canvas.height / 2 + 2); s.commit();
    const label = surfacePlane(s, 0.8, 0.22); label.position.set(0, 1.75, 0.07); g.add(label);
    return { group: g, fp: [1.0, 0.2], hitBox: [1.0, 2.1, 0.4, 1.05] };
  },

  cabinet() {
    const g = new THREE.Group();
    g.add(B(0.55, 1.25, 0.55, '#9aa3a8', 0, 0.625, 0, { rough: 0.5, metal: 0.2 }));
    for (let i = 0; i < 4; i++) g.add(B(0.45, 0.02, 0.01, '#6f777c', 0, 0.2 + i * 0.3, 0.28), B(0.12, 0.03, 0.03, '#444', 0, 0.28 + i * 0.3, 0.29));
    return { group: g, fp: [0.6, 0.6] };
  },

  safe() {
    const g = new THREE.Group();
    g.add(B(0.6, 0.7, 0.55, '#3f4a52', 0, 0.35, 0, { rough: 0.4, metal: 0.4 }), C(0.09, 0.09, 0.04, '#c9b26a', 0.05, 0.4, 0.29));
    g.children[1].rotation.x = Math.PI / 2;
    return { group: g, fp: [0.65, 0.6] };
  },

  rack() {
    const g = new THREE.Group();
    g.add(B(0.6, 1.9, 0.7, '#22272e', 0, 0.95, 0, { rough: 0.5 }));
    const leds = [];
    for (let i = 0; i < 7; i++) {
      g.add(B(0.52, 0.18, 0.02, '#323a44', 0, 0.35 + i * 0.22, 0.36));
      for (let j = 0; j < 3; j++) {
        const m = new THREE.MeshBasicMaterial({ color: j === 0 ? '#3cff9a' : j === 1 ? '#47b8ff' : '#ffb347', toneMapped: false });
        const led = mesh(box(0.035, 0.035, 0.01), m, -0.18 + j * 0.06, 0.35 + i * 0.22, 0.375, false); g.add(led); leds.push({ m, seed: i * 3 + j });
      }
    }
    return { group: g, fp: [0.65, 0.75], anim: (t, active) => leds.forEach(l => { const on = Math.sin(t * (active ? 9 : 2.2) + l.seed * 1.7) > (active ? -0.2 : 0.4); l.m.color.set(on ? (l.seed % 3 === 0 ? '#3cff9a' : l.seed % 3 === 1 ? '#47b8ff' : '#ffb347') : '#2a3038'); }) };
  },

  stage({ accent }) {
    const g = new THREE.Group();
    g.add(B(2.4, 0.25, 1.4, '#3a3036', 0, 0.125, -0.3));
    g.add(B(0.06, 1.9, 0.06, '#9aa0a6', -1.15, 1.2, -0.95), B(0.06, 1.9, 0.06, '#9aa0a6', 1.15, 1.2, -0.95), B(2.36, 0.06, 0.06, '#9aa0a6', 0, 2.15, -0.95));
    const lights = [];
    [-0.7, 0, 0.7].forEach((x, i) => { const m = new THREE.MeshBasicMaterial({ color: i === 1 ? '#fff2b0' : accent, toneMapped: false }); const l = mesh(cyl(0.07, 0.1, 0.16), m, x, 2.05, -0.9, false); l.rotation.x = 0.5; g.add(l); lights.push(m); });
    g.add(B(0.5, 0.35, 0.3, '#1c1c1c', -0.9, 0.42, 0.15), B(0.5, 0.35, 0.3, '#1c1c1c', 0.9, 0.42, 0.15));
    return { group: g, fp: [2.5, 1.5], fpOffset: [0, -0.3], anim: t => lights.forEach((m, i) => { m.color.setHSL(((t * 0.08 + i * 0.33) % 1), 0.75, 0.62); }) };
  },

  balloons({ accent }) {
    const g = new THREE.Group();
    const cols = [accent, '#f6f1e7', '#f2c14e'];
    const balls = [];
    for (let i = 0; i < 6; i++) { const a = i * 1.1; const b = S(0.16, cols[i % 3], Math.sin(a) * 0.18, 1.2 + (i % 3) * 0.22, Math.cos(a) * 0.18, { rough: 0.35 }); g.add(b); balls.push(b); }
    g.add(C(0.12, 0.14, 0.08, '#9a8a7a', 0, 0.04, 0), C(0.005, 0.005, 1.1, '#ddd', 0, 0.6, 0));
    return { group: g, fp: [0.35, 0.35], anim: t => balls.forEach((b, i) => { b.position.y = 1.2 + (i % 3) * 0.22 + Math.sin(t * 1.4 + i) * 0.025; }) };
  },

  podium({ accent }) {
    const g = new THREE.Group();
    g.add(B(0.55, 1.05, 0.45, '#efe9de', 0, 0.525, 0), B(0.56, 0.1, 0.46, accent, 0, 0.8, 0.005));
    return { group: g, fp: [0.6, 0.5] };
  },

  neon({ y = 1.2, accent }) {
    const g = new THREE.Group();
    const m = new THREE.MeshBasicMaterial({ color: accent, toneMapped: false });
    const t = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.025, 8, 32), m); t.position.set(0.9, y, 0.05); g.add(t);
    const bar = mesh(box(0.5, 0.05, 0.03), m, 0.9, y, 0.05, false); g.add(bar);
    return { group: g, fp: null };
  },

  counter({ w = 3.2 }) {
    const g = new THREE.Group();
    g.add(B(w, 0.88, 0.62, '#e9e2d6', 0, 0.44, 0), B(w + 0.04, 0.05, 0.66, '#5d4a3a', 0, 0.9, 0));
    for (let i = 0; i < 4; i++) g.add(B(0.02, 0.6, 0.01, '#cfc6b8', -w / 2 + (i + 1) * w / 5, 0.42, 0.315));
    g.add(C(0.06, 0.05, 0.1, '#f4f1ea', 1.0, 0.98, 0.05), C(0.06, 0.05, 0.1, '#e07a5f', 1.18, 0.98, -0.05));
    return { group: g, fp: [w, 0.65], hitBox: [w, 0.9, 0.7, 0.6] };
  },

  cooler() {
    const g = new THREE.Group();
    g.add(B(0.38, 1.0, 0.38, '#f2f2ee', 0, 0.5, 0), C(0.15, 0.15, 0.42, '#8fd1f2', 0, 1.22, 0, { opacity: 0.75, rough: 0.2 }));
    return { group: g, fp: [0.45, 0.45] };
  }
};

/** Papeles en la bandeja: su número sigue el recuento real de revisiones pendientes. */
export function setPapers(tray, count) {
  if (!tray?.papers) return;
  const papers = tray.papers;
  while (papers.children.length) papers.remove(papers.children[0]);
  const n = Math.min(count, 6);
  for (let i = 0; i < n; i++) {
    const s = B(0.24, 0.012, 0.18, i === n - 1 ? '#fffdf6' : '#f4efe2', ((i * 7) % 5 - 2) / 200, 0.045 + i * 0.014, ((i * 3) % 5 - 2) / 200);
    s.rotation.y = ((i * 11) % 7 - 3) / 30; s.castShadow = false; papers.add(s);
  }
  if (count > 0) {
    const flag = B(0.04, 0.09, 0.005, '#e5484d', 0.1, 0.07 + n * 0.014, 0.09); flag.castShadow = false; papers.add(flag);
  }
}
