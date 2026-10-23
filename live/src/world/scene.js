import * as THREE from 'three';
import { PITCH } from './layout.js';

// Cámara en perspectiva estrecha (casi isométrica) que recorre la planta continua.
// Deslizar mueve la cámara a lo largo del pasillo con el dedo; al soltar, se asienta en la sala más cercana.
const PITCH_DEG = 58, YAW_DEG = -8, FOV = 26;

export class Stage {
  constructor(container, { roomCount, onTap, onRoomChange }) {
    this.container = container; this.roomCount = roomCount; this.onTap = onTap; this.onRoomChange = onRoomChange;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);
    this.canvas = this.renderer.domElement;
    this.canvas.setAttribute('aria-hidden', 'true');

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(FOV, 1, 0.5, 200);
    this.target = new THREE.Vector3(0, 0, 0.7);
    this.camX = 0; this.velX = 0; this.goalX = 0; this.dragging = false;
    this.zoom = 1; this.goalZoom = 1; this.sheetPx = 0; this.sheetGoal = 0; this.focusZ = -0.45; this.focusGoalZ = -0.45; this.focusOffsetX = 0; this.focusGoalOffX = 0; this.focusY = 0; this.focusGoalY = 0;
    this.roomIndex = 0;

    const hemi = new THREE.HemisphereLight('#fff7ea', '#bba58a', 1.35); this.scene.add(hemi);
    const sun = new THREE.DirectionalLight('#fff0db', 2.1);
    sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -7; sun.shadow.camera.right = 7; sun.shadow.camera.top = 7; sun.shadow.camera.bottom = -7;
    sun.shadow.camera.near = 1; sun.shadow.camera.far = 40; sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.02;
    this.scene.add(sun, sun.target); this.sun = sun;
    const fill = new THREE.DirectionalLight('#dbe8ff', 0.45); fill.position.set(6, 5, 10); this.scene.add(fill);

    this.raycaster = new THREE.Raycaster();
    this.pointers = new Map();
    this.bindInput();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.visualViewport?.addEventListener('resize', () => this.resize());
  }

  resize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    this.w = w; this.h = h;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.portrait = h > w;
  }

  /** Ancho de mundo visible a la distancia del objetivo. */
  distanceFor() {
    const want = this.portrait ? PITCH * 0.94 : Math.min(PITCH * 2.1, PITCH * (this.w / this.h) * 0.85);
    const tan = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    const d = want / (2 * tan * this.camera.aspect);
    const dv = 10.2 / (2 * tan); // asegura que quepa la profundidad de la sala
    return Math.max(d, this.portrait ? 0 : dv) / this.zoom;
  }

  worldPerPx() {
    const d = this.distanceFor();
    return (2 * d * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * this.camera.aspect) / this.w;
  }

  goToRoom(i, { instant = false } = {}) {
    i = Math.max(0, Math.min(this.roomCount - 1, i));
    this.goalX = i * PITCH;
    if (instant) { this.camX = this.goalX; this.velX = 0; }
    if (i !== this.roomIndex) { this.roomIndex = i; this.onRoomChange?.(i); }
  }

  /** Encuadra un punto (agente u objeto) dejando sitio para el panel inferior. */
  focus({ x = null, z = null, sheetPx = 0, zoom = null } = {}) {
    this.sheetGoal = sheetPx;
    this.focusGoalZ = z ?? -0.45;
    this.focusGoalOffX = x != null ? Math.max(-2.2, Math.min(2.2, x - this.goalX)) : 0;
    this.goalZoom = zoom || (sheetPx ? 1.15 : 1);
    this.focusGoalY = sheetPx && x != null ? 0.7 : 0;
  }

  bindInput() {
    const el = this.canvas;
    el.style.touchAction = 'none';
    el.addEventListener('pointerdown', e => {
      el.setPointerCapture?.(e.pointerId);
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t0: performance.now() });
      if (this.pointers.size === 1) { this.dragging = true; this.dragStartCam = this.camX; this.lastMoveX = e.clientX; this.lastMoveT = performance.now(); this.velX = 0; this.moved = false; }
      if (this.pointers.size === 2) { const [a, b] = [...this.pointers.values()]; this.pinch0 = Math.hypot(a.x - b.x, a.y - b.y); this.zoom0 = this.goalZoom; this.moved = true; }
    });
    el.addEventListener('pointermove', e => {
      const p = this.pointers.get(e.pointerId); if (!p) return;
      p.x = e.clientX; p.y = e.clientY;
      if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        this.goalZoom = Math.max(0.7, Math.min(1.9, this.zoom0 * dist / this.pinch0));
        return;
      }
      const dx = e.clientX - p.x0;
      if (Math.abs(dx) > 8 || Math.abs(e.clientY - p.y0) > 8) this.moved = true;
      if (this.dragging && this.moved) {
        const now = performance.now();
        const wpp = this.worldPerPx();
        this.camX = this.dragStartCam - dx * wpp;
        const dt = Math.max(1, now - this.lastMoveT);
        this.velX = -(e.clientX - this.lastMoveX) * wpp / (dt / 1000);
        this.lastMoveX = e.clientX; this.lastMoveT = now;
        this.goalX = this.camX;
      }
    });
    const end = e => {
      const p = this.pointers.get(e.pointerId); if (!p) return;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size > 0) return;
      this.dragging = false;
      const elapsed = performance.now() - p.t0;
      if (!this.moved && elapsed < 450) { this.handleTap(e.clientX, e.clientY); return; }
      // asentar en la sala más cercana con inercia; un gesto corto basta para avanzar una sala
      const travel = this.camX - this.dragStartCam;
      let idx = Math.round((this.camX + this.velX * 0.18) / PITCH);
      const start = Math.round(this.dragStartCam / PITCH);
      if (idx === start && Math.abs(travel) > PITCH * 0.12) idx = start + Math.sign(travel);
      idx = Math.max(start - 3, Math.min(start + 3, idx));
      this.goToRoom(idx);
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('wheel', e => { e.preventDefault(); if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) { this.wheelAcc = (this.wheelAcc || 0) + e.deltaX; if (Math.abs(this.wheelAcc) > 60) { this.goToRoom(this.roomIndex + Math.sign(this.wheelAcc)); this.wheelAcc = 0; } } else { this.goalZoom = Math.max(0.7, Math.min(1.9, this.goalZoom * (e.deltaY > 0 ? 0.92 : 1.08))); } }, { passive: false });
  }

  handleTap(cx, cy) {
    const rect = this.canvas.getBoundingClientRect();
    this.onTap?.({ x: cx - rect.left, y: cy - rect.top, ndc: new THREE.Vector2(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1) });
  }

  raycast(ndc, objects) {
    this.raycaster.setFromCamera(ndc, this.camera);
    return this.raycaster.intersectObjects(objects, true);
  }

  project(v) {
    const p = v.clone().project(this.camera);
    return { x: (p.x * 0.5 + 0.5) * this.w, y: (-p.y * 0.5 + 0.5) * this.h, behind: p.z > 1 };
  }

  update(dt) {
    if (!this.dragging) {
      // resorte críticamente amortiguado hacia la sala objetivo
      const k = 38, c = 2 * Math.sqrt(k);
      const a = k * (this.goalX - this.camX) - c * this.velX;
      this.velX += a * dt; this.camX += this.velX * dt;
    }
    const e = 1 - Math.exp(-6 * dt);
    this.zoom += (this.goalZoom - this.zoom) * e;
    this.sheetPx += (this.sheetGoal - this.sheetPx) * e;
    this.focusZ += (this.focusGoalZ - this.focusZ) * e;
    this.focusOffsetX += (this.focusGoalOffX - this.focusOffsetX) * e;
    this.focusY += (this.focusGoalY - this.focusY) * e;

    const nearest = Math.max(0, Math.min(this.roomCount - 1, Math.round(this.camX / PITCH)));
    if (this.dragging && nearest !== this.roomIndex) { this.roomIndex = nearest; this.onRoomChange?.(nearest); }

    const d = this.distanceFor();
    const pitch = THREE.MathUtils.degToRad(PITCH_DEG), yaw = THREE.MathUtils.degToRad(YAW_DEG);
    this.target.set(this.camX + this.focusOffsetX, this.focusY, this.focusZ);
    const off = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)).multiplyScalar(d);
    this.camera.position.copy(this.target).add(off);
    this.camera.lookAt(this.target);
    // desplazar el centro óptico hacia arriba cuando hay un panel inferior abierto
    // el centro útil queda entre el encabezado (≈110 px) y el panel
    const hud = this.sheetPx > 40 ? 110 : 0;
    const shift = (this.sheetPx - hud) * 0.5 + (this.portrait ? 18 : 0);
    if (shift > 0.5) this.camera.setViewOffset(this.w, this.h, 0, shift, this.w, this.h); else this.camera.clearViewOffset();
    this.camera.updateMatrixWorld();

    this.sun.position.set(this.target.x - 4, 12, this.target.z + 7);
    this.sun.target.position.copy(this.target);
  }

  render() { this.renderer.render(this.scene, this.camera); }
}
