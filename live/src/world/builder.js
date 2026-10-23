import * as THREE from 'three';
import { cloneModel, modelSize, hasModel } from './assets.js';
import { PROPS, B, mat, CanvasSurface } from './props.js';
import { NavGrid } from './nav.js';
import { PITCH, HALF_W, BACK_Z, FRONT_Z, CORRIDOR_Z, DOOR_HALF, WALL_H, PARTITION_H, FRONT_H, buildLayout } from './layout.js';

const AGENT_RADIUS = 0.2;

function floorTexture(kind) {
  const s = new CanvasSurface(2, 2, 128); const ctx = s.ctx, W = s.canvas.width, H = s.canvas.height;
  const base = { oak: '#d8b88e', walnut: '#a87d58', concrete: '#d4cec4', tile: '#ece6db' }[kind];
  ctx.fillStyle = base; ctx.fillRect(0, 0, W, H);
  if (kind === 'oak' || kind === 'walnut') {
    const rows = 8;
    for (let r = 0; r < rows; r++) {
      const y = r * H / rows, off = (r * 97) % W;
      for (let k = -1; k < 3; k++) {
        const x = off + k * W / 2;
        const shade = ((r * 31 + k * 17) % 9 - 4) * (kind === 'oak' ? 3 : 2.5);
        ctx.fillStyle = `rgba(${shade > 0 ? 255 : 0},${shade > 0 ? 240 : 0},${shade > 0 ? 220 : 0},${Math.abs(shade) / 100})`;
        ctx.fillRect(x, y, W / 2, H / rows);
        ctx.fillStyle = 'rgba(70,45,25,0.22)'; ctx.fillRect(x, y, 2, H / rows);
      }
      ctx.fillStyle = 'rgba(70,45,25,0.25)'; ctx.fillRect(0, y, W, 2);
    }
  } else if (kind === 'tile') {
    ctx.strokeStyle = 'rgba(150,135,115,0.35)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(i * W / 4, 0); ctx.lineTo(i * W / 4, H); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, i * H / 4); ctx.lineTo(W, i * H / 4); ctx.stroke(); }
  } else {
    for (let i = 0; i < 400; i++) { ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.04})`; ctx.fillRect(Math.random() * W, Math.random() * H, 3, 3); }
    ctx.strokeStyle = 'rgba(120,110,100,0.25)'; ctx.lineWidth = 2; ctx.strokeRect(1, 1, W - 2, H - 2);
  }
  s.commit();
  s.texture.wrapS = s.texture.wrapT = THREE.RepeatWrapping;
  return s.texture;
}

const fabricCache = new Map();
// Retinta por nombre de material Kenney: tapicería (carpet/carpetBlue) o alfombras (carpetDarker).
function retintFabric(obj, color, which = ['carpet', 'carpetBlue']) {
  obj.traverse(o => {
    if (!o.isMesh) return;
    const swap = m => {
      if (!which.includes(m.name)) return m;
      const key = `${m.name}|${color}`;
      if (!fabricCache.has(key)) { const n = new THREE.MeshStandardMaterial({ color, roughness: 0.95 }); n.name = m.name; fabricCache.set(key, n); }
      return fabricCache.get(key);
    };
    o.material = Array.isArray(o.material) ? o.material.map(swap) : swap(o.material);
  });
}
function fabricFor(room, l = 0.58, smax = 0.5) {
  const c = new THREE.Color(room.accent); const hsl = {}; c.getHSL(hsl);
  return new THREE.Color().setHSL(hsl.h, Math.min(smax, hsl.s), l).getStyle();
}

/** Construye toda la planta, la navegación y los registros de objetos interactivos. */
export function buildOffice(scene) {
  const plan = buildLayout();
  const world = new THREE.Group(); scene.add(world);
  const n = plan.length;
  const minX = -PITCH / 2, maxX = (n - 1) * PITCH + PITCH / 2;
  const nav = new NavGrid(minX, maxX, BACK_Z, CORRIDOR_Z - 0.25, 0.2);
  const hotspots = [], surfaces = [], lamps = {}, trays = {}, animated = [], seats = [];

  // Pasillo continuo
  const tileTex = floorTexture('tile'); tileTex.repeat.set((maxX - minX) / 2, (CORRIDOR_Z - FRONT_Z) / 2);
  const corridor = new THREE.Mesh(new THREE.PlaneGeometry(maxX - minX, CORRIDOR_Z - FRONT_Z), new THREE.MeshStandardMaterial({ map: tileTex, roughness: 0.9 }));
  corridor.rotation.x = -Math.PI / 2; corridor.position.set((minX + maxX) / 2, 0, (FRONT_Z + CORRIDOR_Z) / 2); corridor.receiveShadow = true; world.add(corridor);
  // Losa y borde exterior
  world.add(B(maxX - minX + 0.6, 0.3, CORRIDOR_Z - BACK_Z + 0.6, '#c9bfb0', (minX + maxX) / 2, -0.151, (BACK_Z + CORRIDOR_Z) / 2));
  const edge = B(maxX - minX, 0.12, 0.12, '#b5a996', (minX + maxX) / 2, 0.06, CORRIDOR_Z - 0.06); world.add(edge);

  const floorTex = { oak: floorTexture('oak'), walnut: floorTexture('walnut'), concrete: floorTexture('concrete') };
  const capMat = mat('#4b4540');

  for (const { room, index, cx, items, stations } of plan) {
    const g = new THREE.Group(); g.name = room.id; world.add(g);
    // suelo
    const tex = floorTex[room.floor].clone(); tex.needsUpdate = true; tex.repeat.set(PITCH / 2, (FRONT_Z - BACK_Z) / 2);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(PITCH, FRONT_Z - BACK_Z), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.88 }));
    floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0.002, (BACK_Z + FRONT_Z) / 2); floor.receiveShadow = true; g.add(floor);
    // muro del fondo
    const wall = B(PITCH, WALL_H, 0.2, room.wall, cx, WALL_H / 2, BACK_Z - 0.1, { rough: 0.95 }); wall.castShadow = false; g.add(wall);
    g.add(B(PITCH, 0.12, 0.04, '#d8cfc0', cx, 0.06, BACK_Z + 0.02));
    const stripe = B(PITCH, 0.08, 0.02, room.accent, cx, 0.95, BACK_Z + 0.01); stripe.castShadow = false; g.add(stripe);
    g.add(B(PITCH + 0.2, 0.06, 0.24, capMat, cx, WALL_H + 0.03, BACK_Z - 0.1));
    // muro frontal bajo con puerta
    const segW = HALF_W - DOOR_HALF + 0.2;
    [-1, 1].forEach(s => {
      const x = cx + s * (DOOR_HALF + segW / 2);
      g.add(B(segW, FRONT_H, 0.16, '#e9e2d6', x, FRONT_H / 2, FRONT_Z));
      g.add(B(segW, 0.05, 0.2, '#8a6a4a', x, FRONT_H + 0.025, FRONT_Z));
      nav.blockRect(x, FRONT_Z, segW, 0.16, 0, AGENT_RADIUS);
    });
    // marco de la puerta
    [-1, 1].forEach(s => g.add(B(0.08, FRONT_H + 0.1, 0.2, room.accent, cx + s * DOOR_HALF, (FRONT_H + 0.1) / 2, FRONT_Z)));
    // mampara a la derecha (y a la izquierda para la primera sala)
    const partition = (x) => {
      g.add(B(0.2, PARTITION_H, FRONT_Z - BACK_Z, '#ece6dc', x, PARTITION_H / 2, (BACK_Z + FRONT_Z) / 2, { rough: 0.95 }));
      g.add(B(0.24, 0.05, FRONT_Z - BACK_Z + 0.02, capMat, x, PARTITION_H + 0.025, (BACK_Z + FRONT_Z) / 2));
      nav.blockRect(x, (BACK_Z + FRONT_Z) / 2, 0.2, FRONT_Z - BACK_Z + 0.4, 0, AGENT_RADIUS);
    };
    if (index === 0) partition(cx - PITCH / 2);
    partition(cx + PITCH / 2);

    // mobiliario
    for (const it of items) {
      let obj = null, fp = null, extra = null;
      if (it.m) {
        if (!hasModel(it.m)) continue;
        obj = cloneModel(it.m);
        if (it.fabric) retintFabric(obj, fabricFor(room));
        if (it.tint) retintFabric(obj, it.tint);
        else if (it.m === 'chairDesk') retintFabric(obj, '#46413d');
        if (it.sx || it.sz) obj.scale.set(it.sx || 1, 1, it.sz || 1);
        const size = modelSize(it.m);
        fp = [size.x * (it.sx || 1), size.z * (it.sz || 1)];
        if (it.m.startsWith('rug')) { retintFabric(obj, fabricFor(room, 0.74, 0.35), ['carpetDarker']); obj.traverse(o => { if (o.isMesh) o.castShadow = false; }); }
      } else {
        const built = PROPS[it.p]?.(it);
        if (!built) continue;
        obj = built.group; fp = built.fp; extra = built;
        if (built.fpOffset) fp = fp && [...fp, built.fpOffset];
      }
      obj.position.set(it.wx, it.onTop || 0, it.wz);
      obj.rotation.y = THREE.MathUtils.degToRad(it.r || 0);
      obj.userData.item = it;
      g.add(obj);
      const blocks = it.block !== false && fp && !(it.m && it.m.startsWith('rug'));
      if (blocks) {
        const [w, d, off] = fp;
        const r = THREE.MathUtils.degToRad(it.r || 0);
        const ox = off ? off[0] * Math.cos(r) + off[1] * Math.sin(r) : 0, oz = off ? -off[0] * Math.sin(r) + off[1] * Math.cos(r) : 0;
        nav.blockRect(it.wx + ox, it.wz + oz, w, d, it.r || 0, AGENT_RADIUS - 0.04);
      }
      if (it.seat) seats.push({ room: room.id, obj, it });
      if (extra?.dyn) surfaces.push({ room: room.id, kind: it.p, screen: it.screen, boardKind: it.kind, surface: extra.dyn, item: it });
      if (extra?.glow) lamps[room.id] = extra.glow;
      if (extra?.papers !== undefined && it.p === 'tray') trays[room.id] = extra;
      if (extra?.anim) animated.push({ room: room.id, fn: extra.anim, kind: it.p });
      if (it.hot) hotspots.push({ key: it.hot, room: room.id, obj, item: it });
    }
    g.userData = { room, index, cx, stations };
  }
  // cierre del extremo derecho y bloqueo del borde del pasillo
  nav.blockRect((minX + maxX) / 2, CORRIDOR_Z - 0.05, maxX - minX, 0.3, 0, AGENT_RADIUS);
  nav.blockRect(minX + 0.05, (FRONT_Z + CORRIDOR_Z) / 2, 0.2, CORRIDOR_Z - FRONT_Z, 0, AGENT_RADIUS);
  nav.blockRect(maxX - 0.05, (FRONT_Z + CORRIDOR_Z) / 2, 0.2, CORRIDOR_Z - FRONT_Z, 0, AGENT_RADIUS);
  world.add(B(0.2, PARTITION_H, CORRIDOR_Z - FRONT_Z, '#ece6dc', minX, PARTITION_H / 2, (FRONT_Z + CORRIDOR_Z) / 2));
  world.add(B(0.2, PARTITION_H, CORRIDOR_Z - FRONT_Z, '#ece6dc', maxX, PARTITION_H / 2, (FRONT_Z + CORRIDOR_Z) / 2));

  // las estaciones deben caer en celdas libres para que los agentes las alcancen
  const stationsByRoom = Object.fromEntries(plan.map(p => [p.room.id, p.stations]));
  return { world, plan, nav, hotspots, surfaces, lamps, trays, animated, seats, stationsByRoom, bounds: { minX, maxX } };
}
