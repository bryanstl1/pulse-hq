import * as THREE from 'three';
import { createMascot } from './mascots.js';
import { AGENTS, roomById, ROOMS } from '../data/roster.js';

const WALK_SPEED = 1.15, FLY_SPEED = 1.5, TURN = 9;
const SEAT_Y = 0.27;

// Cada agente decide qué hacer a partir de una "intención":
//  · server: viene de un registro de Supabase (trabajando, revisión, error, misión, resultado)
//  · ambient: paseo decorativo, claramente separado de la actividad real
//  · local: reacción inmediata a un gesto del CEO (tocar, enviar instrucción)
export class AgentController {
  constructor(def, world) {
    this.def = def; this.world = world;
    this.room = roomById(def.room);
    this.dept = this.room.dept;
    this.anim = createMascot(def);
    this.root = this.anim.root;
    this.stations = world.stationsByRoom[def.room];
    const s = this.stations.desk;
    this.pos = new THREE.Vector2(s.wx, s.wz + 1.2);
    this.facing = 0; this.goalFacing = 0;
    this.path = []; this.arrive = null; this.mode = 'idle';
    this.intent = { kind: 'unconnected', source: 'none' };
    this.ambientEnabled = true; this.ambientTimer = 1 + Math.random() * 3; this.dwell = 0;
    this.selected = false; this.local = null; this.waveTimer = 0;
    this.bubble = null; this.awayFromRoom = false;
    this.root.position.set(this.pos.x, 0, this.pos.y);
    world.scene.add(this.root);
  }

  get headWorld() { const v = new THREE.Vector3(); this.anim.rig.head.getWorldPosition(v); v.y += 0.42; return v; }
  get bodyWorld() { return new THREE.Vector3(this.pos.x, (this.anim.rig.body.position.y || 0) + 0.55, this.pos.y); }

  walkTo(station, onArrive) {
    if (!station) return;
    const path = this.world.nav.findPath(this.pos.x, this.pos.y, station.wx, station.wz);
    this.path = path || [[station.wx, station.wz]];
    this.arrive = { station, onArrive };
    this.anim.pose = 'idle'; this.mode = 'walk';
    this.returning = this.awayFromRoom && station.room === this.def.room;
    this.awayFromRoom = station.room !== this.def.room;
  }

  atStation(station, eps = 0.25) { return station && Math.hypot(this.pos.x - station.wx, this.pos.y - station.wz) < eps && this.path.length === 0; }

  /** Aplica la intención derivada de los registros. Cambiar de intención reorienta al agente. */
  setIntent(intent) {
    const prev = this.intent; this.intent = intent;
    if (prev.kind === intent.kind && prev.taskId === intent.taskId && prev.mission?.id === intent.mission?.id) return;
    if (prev.kind === 'running' && intent.kind === 'completed') this.celebrate = 2.2;
    this.plan(true);
  }

  setAmbient(on) { this.ambientEnabled = on; if (!on && this.intent.source !== 'server') this.plan(true); }

  /** Tiene algo que hacer por un registro del servidor o por una instrucción local. */
  hasDuty() { return Boolean(this.local) || ['running', 'failed', 'review', 'mission'].includes(this.intent.kind) || this.celebrate > 0; }

  select(on) {
    this.selected = on; this.anim.selected = on;
    if (on && !this.hasDuty()) {
      // se detiene, se gira hacia el CEO y saluda
      this.path = []; this.arrive = null; this.mode = 'idle'; this.waveTimer = 1.6;
      if (!this.isSitting) { this.anim.seatY = 0; this.forceSit = false; this.anim.pose = 'wave'; this.goalFacing = 0; }
    } else if (!on) this.plan(true);
  }

  /** Reacción local inmediata: el CEO envió una instrucción y el agente va a su mesa. No es estado del servidor. */
  receiveInstruction() { this.local = { kind: 'sending', until: performance.now() + 120000 }; this.plan(true); }
  clearLocal() { this.local = null; this.plan(true); }

  get isSitting() { return this.atStation(this.stations.desk, 0.3) && ['sit', 'type', 'sleep'].includes(this.anim.pose); }

  plan(force = false) {
    if (this.selected && !this.hasDuty()) return;
    const k = this.intent.kind;
    const desk = this.stations.desk;
    if (k === 'running' || this.local?.kind === 'sending') return this.goSit(desk, k === 'running' ? 'type' : 'think');
    if (k === 'failed') return this.goSit(desk, 'slump');
    if (k === 'review') return this.goStand(this.stations.door ? { ...this.stations.door, wz: this.stations.door.wz - 0.3 } : desk, 'read');
    if (k === 'mission') {
      const i = ROOMS.filter(r => r.dept).findIndex(r => r.dept === this.dept);
      const collab = this.world.stationsByRoom.collab;
      return this.goStand(collab[`c${i}`] || collab.c0, 'talk');
    }
    if (k === 'completed' && this.celebrate) return this.goStand(this.stations.door, 'celebrate');
    // sin actividad del servidor: paseo ambiental (si está activado) o descanso en la mesa
    if (!this.ambientEnabled) return this.goSit(desk, 'sit');
    if (force) this.ambientTimer = 0.2 + Math.random() * 1.5;
  }

  goSit(desk, pose) {
    if (this.atStation(desk, 0.3)) { this.sitDown(pose); return; }
    this.walkTo(desk, () => this.sitDown(pose));
  }
  sitDown(pose) { this.goalFacing = 0; this.anim.seatY = SEAT_Y; this.anim.pose = pose === 'sit' ? 'sit' : pose; if (pose === 'think' || pose === 'slump') { this.anim.pose = pose; this.anim.w.sit = 1; this.forceSit = true; } else this.forceSit = false; this.mode = 'station'; }
  goStand(st, pose) {
    if (!st) return;
    if (this.atStation(st)) { this.standAt(st, pose); return; }
    this.walkTo(st, () => this.standAt(st, pose));
  }
  standAt(st, pose) { this.anim.seatY = 0; this.forceSit = false; this.goalFacing = THREE.MathUtils.degToRad(st.face || 0); this.anim.pose = pose; this.mode = 'station'; }

  ambientStep() {
    // estaciones del propio cuarto; de vez en cuando, una pausa de café
    const keys = Object.keys(this.stations).filter(k => k !== 'door');
    let st;
    if (Math.random() < 0.07 && !this.world.someoneOnBreak) {
      const rest = this.world.stationsByRoom.rest; const spots = [rest.coffee, rest.coffee2, rest.cooler, rest.sofa, rest.sofa2];
      st = spots[Math.floor(Math.random() * spots.length)]; this.world.someoneOnBreak = this.def.id;
    } else {
      if (this.world.someoneOnBreak === this.def.id) this.world.someoneOnBreak = null;
      st = this.stations[keys[Math.floor(Math.random() * keys.length)]];
    }
    const poses = { desk: 'sit', board: 'think', shelf: 'read', plant: 'idle', window: 'idle', coffee: 'idle', cooler: 'idle', sofa: 'idle' };
    const pose = poses[st.key] || (Math.random() < 0.5 ? 'idle' : 'think');
    if (st.key === 'desk') this.goSit(st, Math.random() < 0.25 ? 'sleep' : 'sit'); else this.goStand(st, pose);
    this.ambientTimer = 6 + Math.random() * 8;
  }

  update(dt) {
    const a = this.anim;
    if (this.waveTimer > 0) { this.waveTimer -= dt; if (this.waveTimer <= 0 && this.selected && !this.hasDuty()) a.pose = this.isSitting ? 'sit' : 'talk'; }
    if (this.celebrate > 0) { this.celebrate -= dt; if (this.celebrate <= 0) this.plan(true); }
    if (this.local && performance.now() > this.local.until) this.clearLocal();

    // seguir la ruta
    if (this.path.length) {
      const [tx, tz] = this.path[0];
      const dx = tx - this.pos.x, dz = tz - this.pos.y, dist = Math.hypot(dx, dz);
      const speed = (this.anim.rig.flyer ? FLY_SPEED : WALK_SPEED) * (this.def.species === 'turtle' ? 0.75 : 1) * (this.awayFromRoom || this.returning ? 1.8 : 1);
      a.seatY = 0; a.pose = 'idle';
      if (dist < 0.06) { this.path.shift(); }
      else {
        const step = Math.min(dist, speed * dt);
        this.pos.x += dx / dist * step; this.pos.y += dz / dist * step;
        this.goalFacing = Math.atan2(dx, dz);
        a.speed = speed;
      }
      if (!this.path.length && this.arrive) { const cb = this.arrive.onArrive; const st = this.arrive.station; this.arrive = null; this.pos.set(st.wx, st.wz); a.speed = 0; cb?.(); }
    } else { a.speed = 0; }

    // paseo ambiental solo sin intención del servidor ni acción local
    const ambientAllowed = !this.selected && !this.local && (this.intent.source !== 'server' || this.intent.kind === 'idle' || (this.intent.kind === 'completed' && !this.celebrate));
    if (ambientAllowed && this.ambientEnabled && !this.path.length) {
      this.ambientTimer -= dt;
      if (this.ambientTimer <= 0) this.ambientStep();
    }

    // orientación
    let df = this.goalFacing - this.facing;
    while (df > Math.PI) df -= Math.PI * 2; while (df < -Math.PI) df += Math.PI * 2;
    this.facing += df * Math.min(1, TURN * dt);
    if (this.selected && !this.hasDuty() && !this.path.length && !this.isSitting) this.goalFacing = 0;
    this.root.position.set(this.pos.x, 0, this.pos.y);
    this.root.rotation.y = this.facing;
    if (this.forceSit) a.w.sit = Math.max(a.w.sit, 0.98);
    a.update(dt);
  }
}

export function createAgents(world) {
  return AGENTS.map(def => new AgentController(def, world));
}
