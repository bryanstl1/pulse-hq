import * as THREE from 'three';

// Mascotas procedurales (sin descargas): cada una tiene un esqueleto simple
// (cadera, torso, cabeza, brazos/alas, piernas, cola) que se anima por código.
// Altura aproximada 1.05 m, en escala con el mobiliario Kenney ×2.

const LEG = 0.2;
const geo = {
  sphere: new THREE.SphereGeometry(1, 20, 16),
  sphereLo: new THREE.SphereGeometry(1, 12, 10),
  cone: new THREE.ConeGeometry(1, 1, 12),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 12),
  box: new THREE.BoxGeometry(1, 1, 1),
  capsule: new THREE.CapsuleGeometry(1, 1, 6, 12),
  torus: new THREE.TorusGeometry(1, 0.12, 8, 24),
  arc: new THREE.TorusGeometry(1, 0.07, 8, 20, Math.PI)
};

function M(color, o = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: o.rough ?? 0.72, metalness: o.metal ?? 0, emissive: o.emissive || '#000', emissiveIntensity: o.ei || 0 });
}
function part(g, material, sx, sy, sz, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(geo[g], material);
  m.scale.set(sx, sy, sz); m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = false;
  if (parent) parent.add(m);
  return m;
}
function pivot(parent, x, y, z) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }

function eyes(head, { r = 0.07, spread = 0.1, y = 0.03, z = 0.2, iris = '#3a2a1a', rim = null, big = false }) {
  const white = M('#ffffff', { rough: 0.3 }), pupil = M('#1b1410', { rough: 0.2 }), irisM = M(iris, { rough: 0.3 });
  const lids = [];
  [-1, 1].forEach(side => {
    const e = pivot(head, side * spread, y, z);
    if (rim) part('sphere', M(rim), r * 1.35, r * 1.35, r * 0.5, 0, 0, -0.01, e);
    part('sphere', white, r, r, r * 0.6, 0, 0, 0, e);
    part('sphere', irisM, r * 0.72, r * 0.72, r * 0.3, 0, -0.004, r * 0.42, e);
    part('sphere', pupil, r * 0.42, r * 0.42, r * 0.2, 0, -0.004, r * 0.56, e);
    part('sphere', white, r * 0.16, r * 0.16, r * 0.1, -r * 0.25, r * 0.28, r * 0.64, e);
    if (big) e.scale.setScalar(1.12);
    e.userData.base = big ? 1.12 : 1;
    lids.push(e);
  });
  return lids;
}

function glasses(head, z, y, spread, r = 0.075) {
  const g = pivot(head, 0, y, z);
  const frame = M('#3b2a1a', { rough: 0.4, metal: 0.3 });
  [-1, 1].forEach(s => { const t = part('torus', frame, r, r, r, s * spread, 0, 0, g); t.scale.z = r; });
  part('box', frame, spread * 0.6, 0.012, 0.012, 0, 0.01, 0, g);
  return g;
}

function propMesh(kind, pal) {
  const g = new THREE.Group();
  if (kind === 'clipboard') { part('box', M('#8a5a36'), 0.16, 0.22, 0.015, 0, 0, 0, g); part('box', M('#fbf8f1'), 0.13, 0.17, 0.018, 0, -0.01, 0.002, g); part('box', M('#9aa0a6', { metal: 0.5 }), 0.06, 0.025, 0.02, 0, 0.1, 0.004, g); }
  else if (kind === 'camera') { part('box', M('#222'), 0.16, 0.1, 0.08, 0, 0, 0.02, g); const l = part('cyl', M('#111'), 0.04, 0.07, 0.04, 0, 0, 0.09, g); l.rotation.x = Math.PI / 2; }
  else if (kind === 'briefcase') { part('box', M('#7a4a26'), 0.22, 0.16, 0.06, 0, -0.06, 0, g); part('box', M('#c9a25e', { metal: 0.6 }), 0.06, 0.02, 0.065, 0, 0.0, 0, g); }
  else if (kind === 'book') { part('box', M(pal.accent), 0.15, 0.2, 0.04, 0, 0, 0, g); part('box', M('#f6f1e4'), 0.135, 0.19, 0.042, 0.008, 0, 0, g); }
  else if (kind === 'tablet') { part('box', M('#2a2d33'), 0.17, 0.12, 0.012, 0, 0, 0, g); part('box', M('#7fd3ff', { emissive: '#3aa0e0', ei: 0.6 }), 0.15, 0.1, 0.014, 0, 0, 0.001, g); }
  else if (kind === 'glowstick') { part('cyl', M('#ff7ad9', { emissive: '#ff3fc8', ei: 2.2 }), 0.018, 0.22, 0.018, 0, 0.08, 0, g); part('cyl', M('#222'), 0.022, 0.07, 0.022, 0, -0.06, 0, g); }
  return g;
}

/** Construye la mascota y devuelve su controlador de animación. */
export function createMascot(agent) {
  const pal = agent.palette;
  const root = new THREE.Group();
  const body = pivot(root, 0, 0, 0);          // se eleva al sentarse o volar
  const hips = pivot(body, 0, LEG, 0);
  const torso = pivot(hips, 0, 0, 0);
  const head = pivot(torso, 0, 0.47, 0);
  const sp = agent.species;
  const fur = M(pal.body), belly = M(pal.belly), accent = M(pal.accent);
  const flyer = sp === 'hummingbird' || sp === 'moth';
  const rig = { root, body, hips, torso, head, arms: [], legs: [], wings: [], tail: null, lids: [], extras: [], flyer, species: sp };

  // ——— Torso ———
  const torsoScale = { owl: [0.25, 0.27, 0.23], hummingbird: [0.19, 0.22, 0.19], cat: [0.2, 0.24, 0.18], raccoon: [0.22, 0.25, 0.2], bunny: [0.19, 0.23, 0.18], moth: [0.18, 0.23, 0.17], capybara: [0.25, 0.26, 0.23], turtle: [0.22, 0.24, 0.21], robot: [0.22, 0.22, 0.18] }[sp] || [0.2, 0.24, 0.18];
  if (sp === 'robot') {
    const metal = M(pal.body, { rough: 0.35, metal: 0.45 });
    part('box', metal, 0.38, 0.36, 0.28, 0, 0.21, 0, torso);
    part('box', M(pal.belly, { rough: 0.4 }), 0.24, 0.2, 0.02, 0, 0.21, 0.145, torso);
    const core = part('sphere', M('#6ff5ff', { emissive: '#3de0ff', ei: 1.4 }), 0.035, 0.035, 0.02, 0, 0.25, 0.158, torso); rig.core = core;
  } else {
    const jacketed = ['raccoon', 'hummingbird', 'capybara', 'bunny'].includes(sp);
    part('sphere', jacketed ? accent : fur, torsoScale[0], torsoScale[1], torsoScale[2], 0, 0.2, 0, torso);
    if (jacketed) {
      part('sphere', M(sp === 'capybara' ? '#fbf3e8' : '#f7f4ee'), 0.09, 0.15, 0.06, 0, 0.24, torsoScale[2] * 0.82, torso);
      if (sp === 'raccoon') part('box', M('#8e1f2b'), 0.035, 0.13, 0.02, 0, 0.22, torsoScale[2] + 0.02, torso);
    } else {
      part('sphere', belly, torsoScale[0] * 0.72, torsoScale[1] * 0.75, torsoScale[2] * 0.6, 0, 0.18, torsoScale[2] * 0.48, torso);
    }
    if (sp === 'owl' || sp === 'turtle') { // chaleco
      const vest = part('sphere', accent, torsoScale[0] * 1.03, torsoScale[1] * 0.62, torsoScale[2] * 1.03, 0, 0.13, 0, torso);
      vest.scale.y *= 0.9;
      part('box', M(sp === 'owl' ? '#c9a25e' : '#e0c26a'), 0.03, 0.1, 0.02, 0, 0.27, torsoScale[2] * 0.92, torso);
    }
    if (sp === 'moth') { part('sphere', M('#fbeee8', { rough: 1 }), 0.24, 0.12, 0.22, 0, 0.38, 0, torso); }
  }
  if (sp === 'turtle') {
    const shell = part('sphere', M(pal.shell, { rough: 0.6 }), 0.27, 0.3, 0.2, 0, 0.22, -0.13, torso);
    part('torus', M('#6a4322'), 0.24, 0.27, 0.6, 0, 0.22, -0.06, torso).rotation.y = Math.PI / 2;
    for (let i = 0; i < 5; i++) part('sphere', M('#a6743f'), 0.07, 0.07, 0.03, ((i % 3) - 1) * 0.12, 0.12 + Math.floor(i / 3) * 0.17 + (i % 2) * 0.03, -0.31, torso);
    rig.extras.push(shell);
  }

  // ——— Cabeza ———
  if (sp === 'robot') {
    const metal = M(pal.body, { rough: 0.35, metal: 0.45 });
    part('box', metal, 0.42, 0.32, 0.32, 0, 0.12, 0, head);
    part('box', M('#0f1a22', { rough: 0.25 }), 0.34, 0.22, 0.02, 0, 0.12, 0.162, head);
    const eyeM = M(pal.eye, { emissive: pal.eye, ei: 1.6 });
    rig.lids = [-1, 1].map(s => part('capsule', eyeM, 0.028, 0.045, 0.01, s * 0.08, 0.13, 0.175, head));
    rig.lids.forEach(l => { l.rotation.z = Math.PI / 2; l.userData.base = 0.045; });
    part('box', eyeM, 0.07, 0.012, 0.01, 0, 0.06, 0.175, head);
    part('cyl', M('#9aa0a6', { metal: 0.6 }), 0.012, 0.16, 0.012, 0, 0.36, 0, head);
    rig.antenna = part('sphere', M(pal.accent, { emissive: pal.accent, ei: 1.2 }), 0.045, 0.045, 0.045, 0, 0.46, 0, head);
    [-1, 1].forEach(s => { const e = part('cyl', M(pal.accent, { rough: 0.4 }), 0.07, 0.04, 0.07, s * 0.225, 0.12, 0, head); e.rotation.z = Math.PI / 2; });
  } else {
    const hs = { owl: [0.27, 0.25, 0.25], hummingbird: [0.2, 0.19, 0.2], cat: [0.24, 0.21, 0.21], raccoon: [0.24, 0.21, 0.22], bunny: [0.22, 0.21, 0.2], moth: [0.2, 0.19, 0.19], capybara: [0.23, 0.21, 0.27], turtle: [0.2, 0.19, 0.2] }[sp];
    const headY = sp === 'owl' ? 0.1 : 0.14;
    part('sphere', fur, hs[0], hs[1], hs[2], 0, headY, 0, head);
    const fz = hs[2];
    if (sp === 'owl') {
      part('sphere', belly, 0.21, 0.17, 0.08, 0, headY + 0.01, fz * 0.78, head);
      rig.lids = eyes(head, { r: 0.075, spread: 0.095, y: headY + 0.03, z: fz * 0.86, iris: pal.eye, rim: '#ffffff', big: true });
      const beak = part('cone', M(pal.beak), 0.035, 0.08, 0.035, 0, headY - 0.05, fz + 0.02, head); beak.rotation.x = Math.PI * 0.62;
      [-1, 1].forEach(s => { const t = part('cone', fur, 0.06, 0.13, 0.04, s * 0.17, headY + 0.24, 0, head); t.rotation.z = -s * 0.35; });
    } else if (sp === 'hummingbird') {
      part('sphere', belly, 0.12, 0.1, 0.08, 0, headY - 0.05, fz * 0.7, head);
      rig.lids = eyes(head, { r: 0.055, spread: 0.09, y: headY + 0.03, z: fz * 0.82, iris: pal.eye });
      const beak = part('cyl', M(pal.beak), 0.012, 0.32, 0.012, 0, headY - 0.02, fz + 0.15, head); beak.rotation.x = Math.PI / 2 + 0.12;
      const crest = part('cone', M('#2fb89c'), 0.06, 0.14, 0.04, 0, headY + 0.2, -0.05, head); crest.rotation.x = -0.6;
    } else if (sp === 'cat') {
      part('sphere', belly, 0.11, 0.075, 0.07, 0, headY - 0.06, fz * 0.82, head);
      part('sphere', M(pal.beak), 0.025, 0.018, 0.02, 0, headY - 0.025, fz + 0.02, head);
      rig.lids = eyes(head, { r: 0.058, spread: 0.095, y: headY + 0.03, z: fz * 0.84, iris: pal.eye });
      [-1, 1].forEach(s => { const e = part('cone', fur, 0.075, 0.15, 0.04, s * 0.14, headY + 0.2, -0.01, head); e.rotation.z = -s * 0.32; part('cone', M('#f2b6a5'), 0.04, 0.09, 0.02, s * 0.14, headY + 0.19, 0.015, head).rotation.z = -s * 0.32; });
      part('arc', M('#2b2b2b'), 0.235, 0.235, 0.5, 0, headY - 0.01, 0, head);
      [-1, 1].forEach(s => part('cyl', M('#3a3a3a'), 0.065, 0.05, 0.065, s * 0.235, headY - 0.01, 0, head).rotation.z = Math.PI / 2);
      [-1, 1].forEach(s => part('cyl', M('#c9a25e', { metal: 0.6 }), 0.04, 0.052, 0.04, s * 0.236, headY - 0.01, 0, head).rotation.z = Math.PI / 2);
    } else if (sp === 'raccoon') {
      part('sphere', M('#2a211b'), 0.235, 0.075, 0.2, 0, headY + 0.03, 0.035, head);
      part('sphere', belly, 0.1, 0.07, 0.09, 0, headY - 0.06, fz * 0.82, head);
      part('sphere', M('#1b1410'), 0.03, 0.022, 0.02, 0, headY - 0.03, fz + 0.04, head);
      rig.lids = eyes(head, { r: 0.05, spread: 0.095, y: headY + 0.035, z: fz * 0.85, iris: pal.eye });
      [-1, 1].forEach(s => { part('sphere', fur, 0.07, 0.08, 0.035, s * 0.16, headY + 0.18, 0, head); part('sphere', belly, 0.04, 0.05, 0.02, s * 0.16, headY + 0.18, 0.02, head); });
    } else if (sp === 'bunny') {
      part('sphere', belly, 0.1, 0.07, 0.07, 0, headY - 0.06, fz * 0.8, head);
      part('sphere', M(pal.beak), 0.022, 0.016, 0.015, 0, headY - 0.03, fz + 0.01, head);
      rig.lids = eyes(head, { r: 0.058, spread: 0.09, y: headY + 0.03, z: fz * 0.84, iris: pal.eye });
      rig.ears = [-1, 1].map(s => { const e = pivot(head, s * 0.085, headY + 0.17, -0.02); part('capsule', fur, 0.045, 0.2, 0.03, 0, 0.14, 0, e); part('capsule', M('#f2c4d6'), 0.025, 0.17, 0.01, 0, 0.14, 0.022, e); e.rotation.z = -s * 0.15; return e; });
      const scarf = part('torus', accent, 0.17, 0.17, 0.9, 0, 0.42, 0, torso); scarf.rotation.x = Math.PI / 2;
    } else if (sp === 'moth') {
      part('sphere', M('#fbeee8', { rough: 1 }), 0.13, 0.1, 0.07, 0, headY - 0.06, fz * 0.75, head);
      rig.lids = eyes(head, { r: 0.065, spread: 0.088, y: headY + 0.02, z: fz * 0.82, iris: '#7a1d45', big: true });
      rig.antennae = [-1, 1].map(s => { const a = pivot(head, s * 0.07, headY + 0.17, 0.02); const stem = part('cyl', M('#4a1a2c'), 0.008, 0.22, 0.008, 0, 0.11, 0, a); stem.rotation.z = 0; for (let i = 0; i < 4; i++) part('sphere', M(pal.accent), 0.04 - i * 0.006, 0.012, 0.02, s * 0.025, 0.08 + i * 0.045, 0, a); a.rotation.z = -s * 0.45; return a; });
      part('arc', M('#222'), 0.2, 0.2, 0.5, 0, headY - 0.02, 0, head);
      part('cyl', M('#222'), 0.008, 0.12, 0.008, -0.17, headY - 0.06, 0.08, head).rotation.x = Math.PI / 2.5;
    } else if (sp === 'capybara') {
      part('sphere', M(pal.belly), 0.15, 0.12, 0.12, 0, headY - 0.04, fz * 0.8, head);
      part('sphere', M('#3a2618'), 0.06, 0.025, 0.03, 0, headY - 0.0, fz + 0.06, head);
      rig.lids = eyes(head, { r: 0.04, spread: 0.12, y: headY + 0.07, z: fz * 0.62, iris: '#2b1d12' });
      [-1, 1].forEach(s => part('sphere', fur, 0.045, 0.04, 0.03, s * 0.15, headY + 0.17, -0.06, head));
      part('sphere', M('#f08a7a'), 0.05, 0.05, 0.05, 0.1, headY + 0.19, 0.02, head);
    } else if (sp === 'turtle') {
      part('sphere', belly, 0.12, 0.08, 0.08, 0, headY - 0.06, fz * 0.78, head);
      rig.lids = eyes(head, { r: 0.055, spread: 0.085, y: headY + 0.03, z: fz * 0.82, iris: '#2b1d12' });
      part('box', M('#4a3020'), 0.06, 0.008, 0.01, 0, headY - 0.06, fz + 0.01, head);
    }
    if (agent.glasses) glasses(head, (sp === 'owl' ? 0.25 : 0.2) * 0.98, headY + 0.03, sp === 'owl' ? 0.095 : 0.085, sp === 'owl' ? 0.085 : 0.07);
  }

  // ——— Brazos / alas ———
  const shoulderY = sp === 'robot' ? 0.33 : 0.3;
  const shoulderX = (sp === 'robot' ? 0.2 : torsoScale[0] * 0.92);
  [-1, 1].forEach(s => {
    const arm = pivot(torso, s * shoulderX, shoulderY, 0);
    if (sp === 'owl') { part('sphere', fur, 0.06, 0.2, 0.13, s * 0.03, -0.14, -0.01, arm); part('sphere', belly, 0.03, 0.08, 0.06, s * 0.04, -0.27, 0.04, arm); }
    else if (sp === 'robot') { part('cyl', M('#9aa0a6', { metal: 0.6, rough: 0.35 }), 0.035, 0.22, 0.035, 0, -0.12, 0, arm); part('sphere', M(pal.accent), 0.055, 0.055, 0.055, 0, -0.25, 0, arm); }
    else {
      const sleeve = ['raccoon', 'hummingbird', 'capybara', 'bunny'].includes(sp) ? accent : fur;
      part('capsule', sleeve, 0.05, 0.14, 0.05, 0, -0.11, 0, arm);
      part('sphere', sp === 'raccoon' ? M('#3a2a20') : fur, 0.052, 0.052, 0.052, 0, -0.23, 0.005, arm);
    }
    rig.arms.push(arm);
  });
  // la mano derecha es la del lado -x (el personaje mira hacia +z)
  rig.handR = pivot(rig.arms[0], 0, -0.25, 0.05);
  if (agent.prop) { rig.prop = propMesh(agent.prop, pal); rig.handR.add(rig.prop); rig.prop.rotation.x = -0.2; }

  if (flyer) {
    const wingM = M(sp === 'moth' ? pal.body : '#7fe0c8', { rough: 0.6 });
    const wingM2 = M(sp === 'moth' ? '#f2a6c4' : '#c8f2e6', { rough: 0.6 });
    [-1, 1].forEach(s => {
      const w = pivot(torso, s * 0.1, 0.3, -0.12);
      if (sp === 'moth') {
        part('sphere', wingM, 0.26, 0.2, 0.02, s * 0.24, 0.06, 0, w);
        part('sphere', wingM2, 0.08, 0.08, 0.025, s * 0.3, 0.08, 0.004, w);
        part('sphere', M('#4a1a2c'), 0.035, 0.035, 0.03, s * 0.3, 0.08, 0.006, w);
        part('sphere', wingM, 0.17, 0.14, 0.02, s * 0.17, -0.16, 0.01, w);
      } else {
        part('sphere', wingM, 0.3, 0.08, 0.02, s * 0.28, 0.04, 0, w);
        part('sphere', wingM2, 0.2, 0.05, 0.022, s * 0.2, 0.02, 0.002, w);
      }
      rig.wings.push({ g: w, s });
    });
  }

  // ——— Piernas ———
  [-1, 1].forEach(s => {
    const leg = pivot(hips, s * 0.09, 0.02, 0);
    if (sp === 'robot') { part('cyl', M('#9aa0a6', { metal: 0.6, rough: 0.35 }), 0.04, 0.17, 0.04, 0, -0.09, 0, leg); part('box', M('#2a2d33'), 0.11, 0.05, 0.16, 0, -0.18, 0.03, leg); }
    else if (sp === 'owl' || sp === 'hummingbird') { part('cyl', M(pal.beak), 0.015, 0.16, 0.015, 0, -0.09, 0, leg); part('sphere', M(pal.beak), 0.05, 0.02, 0.07, 0, -0.18, 0.03, leg); }
    else {
      const pants = { raccoon: '#5f5244', bunny: '#8f86a0', cat: '#2f2a28', capybara: '#5a3d2a', turtle: '#3d3328', moth: pal.body }[sp] || fur;
      part('capsule', M(pants), 0.055, 0.08, 0.055, 0, -0.08, 0, leg);
      part('sphere', M(sp === 'cat' ? '#f4f1ea' : '#4a3326', { rough: 0.5 }), 0.06, 0.035, 0.085, 0, -0.18, 0.03, leg);
    }
    rig.legs.push(leg);
  });
  if (flyer && sp === 'hummingbird') rig.legs.forEach(l => l.scale.setScalar(0.6));

  // ——— Cola ———
  if (['cat', 'raccoon', 'bunny', 'hummingbird'].includes(sp)) {
    const tail = pivot(hips, 0, 0.08, -0.16); rig.tail = tail;
    if (sp === 'bunny') part('sphere', M('#ffffff'), 0.07, 0.07, 0.07, 0, 0, -0.03, tail);
    else if (sp === 'hummingbird') { const t = part('cone', M(pal.body), 0.07, 0.22, 0.025, 0, -0.02, -0.08, tail); t.rotation.x = -2.1; }
    else {
      const n = sp === 'raccoon' ? 6 : 6; const stripe = sp === 'raccoon' ? M('#2a211b') : M('#c06f22');
      for (let i = 0; i < n; i++) { const r = (sp === 'raccoon' ? 0.085 : 0.045) * (1 - i * 0.06); part('sphere', i % 2 ? stripe : fur, r, r, r * 1.2, 0, 0.03 + i * 0.065, -0.04 - Math.sin(i * 0.45) * 0.12, tail); }
    }
  }

  // anillo de selección y sombra de contacto
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.34, 0.42, 40), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.0, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.015; root.add(ring); rig.ring = ring;
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.26, 24), new THREE.MeshBasicMaterial({ color: '#000', transparent: true, opacity: 0.18, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.012; root.add(shadow); rig.shadow = shadow;

  root.scale.setScalar(1.3);
  return new MascotAnimator(rig);
}

const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => lerp(a, b, 1 - Math.exp(-k * dt));

/** Mezcla poses por código. `pose` lo fija el controlador del agente. */
export class MascotAnimator {
  constructor(rig) {
    this.rig = rig; this.root = rig.root;
    this.pose = 'idle'; this.speed = 0; this.phase = Math.random() * 10; this.t = Math.random() * 10;
    this.w = { walk: 0, sit: 0, type: 0, wave: 0, think: 0, slump: 0, celebrate: 0, talk: 0, read: 0, sleep: 0 };
    this.blinkAt = 1 + Math.random() * 3; this.blink = 0; this.seatY = 0; this.lookYaw = 0; this.selected = false;
    this.hoverH = rig.flyer ? (rig.species === 'hummingbird' ? 0.42 : 0.18) : 0;
  }
  update(dt) {
    const r = this.rig, w = this.w; this.t += dt; const t = this.t;
    for (const k of Object.keys(w)) w[k] = damp(w[k], (this.pose === k ? 1 : 0) || (k === 'walk' ? Math.min(1, this.speed / 0.9) : 0), k === 'walk' ? 14 : 7, dt);
    if (this.pose === 'type') w.sit = damp(w.sit, 1, 7, dt);
    if (['type', 'sleep'].includes(this.pose)) w.sit = damp(w.sit, 1, 7, dt);
    const walk = w.walk * (1 - w.sit);
    this.phase += dt * (5 + this.speed * 5.5);
    const ph = this.phase;

    // cuerpo: respiración, rebote al caminar, altura del asiento o del vuelo
    const flyBob = r.flyer ? Math.sin(t * 3.2) * 0.04 : 0;
    const hop = w.celebrate * Math.max(0, Math.sin(t * 7)) * 0.16 + w.wave * Math.max(0, Math.sin(t * 6)) * 0.03;
    r.body.position.y = lerp(this.hoverH + flyBob, this.seatY, w.sit) + Math.abs(Math.sin(ph)) * 0.035 * walk * (r.flyer ? 0 : 1) + hop - w.slump * 0.03;
    r.torso.scale.y = 1 + Math.sin(t * 1.8) * 0.012;
    r.torso.rotation.x = walk * (r.flyer ? 0.35 : 0.06) + w.type * 0.12 + w.slump * 0.18 - w.celebrate * 0.05 + w.sleep * 0.15;
    r.torso.rotation.z = Math.sin(ph) * 0.04 * walk;
    r.hips.rotation.y = Math.sin(ph) * 0.06 * walk;

    // cabeza
    const nod = w.type * Math.sin(t * 2.3) * 0.05 + w.talk * Math.sin(t * 6) * 0.06;
    r.head.rotation.x = damp(r.head.rotation.x, w.type * 0.18 + w.slump * 0.42 + w.read * 0.25 + w.think * -0.12 + w.sleep * 0.5 + nod, 10, dt);
    r.head.rotation.y = damp(r.head.rotation.y, this.lookYaw + w.think * 0.25 + w.wave * 0.15, 5, dt);
    r.head.rotation.z = damp(r.head.rotation.z, w.wave * 0.12 + w.think * 0.1 + w.sleep * 0.25, 6, dt);

    // brazos (la derecha es arms[0])
    const [aR, aL] = r.arms;
    const swing = Math.sin(ph) * 0.55 * walk;
    const typeR = Math.sin(t * 15) * 0.1, typeL = Math.sin(t * 15 + 1.7) * 0.1;
    aR.rotation.x = -swing + w.type * (-1.05 + typeR) + w.read * -1.15 + w.think * -1.9 + w.talk * (-0.6 + Math.sin(t * 4) * 0.25) - w.celebrate * 0.2;
    aL.rotation.x = swing + w.type * (-1.05 + typeL) + w.read * -1.0 - w.celebrate * 0.2;
    aR.rotation.z = w.wave * (-2.55 + Math.sin(t * 11) * 0.35) + w.celebrate * -2.6 + w.think * -0.35 + 0.05 + w.slump * 0.08;
    aL.rotation.z = w.celebrate * 2.6 - 0.05 - w.slump * 0.08 + w.read * 0.3 + w.type * 0.12;
    aR.rotation.z += w.type * -0.12;
    if (r.prop) r.prop.visible = w.type < 0.5 && w.sleep < 0.5;

    // piernas
    const [lR, lL] = r.legs;
    const step = Math.sin(ph) * 0.7 * walk;
    lR.rotation.x = step - w.sit * 1.45;
    lL.rotation.x = -step - w.sit * 1.45;

    // alas, cola, orejas, antenas
    for (const { g, s } of r.wings) {
      if (r.species === 'hummingbird') { g.rotation.y = s * (0.2 + Math.sin(t * 46) * 0.6) * (1 - w.sit * 0.8); g.rotation.z = s * 0.2; }
      else { const f = (Math.sin(t * (walk > 0.1 ? 12 : 3)) * 0.5 + 0.5); g.rotation.y = s * (0.15 + f * 0.7) * (1 - w.sit * 0.5); }
    }
    if (r.species === 'owl') { aR.rotation.z += -w.wave * 0.2; }
    if (r.tail) r.tail.rotation.y = Math.sin(t * 2.2) * 0.35 + walk * Math.sin(ph) * 0.2;
    if (r.tail) r.tail.rotation.x = w.celebrate * -0.4;
    if (r.ears) r.ears.forEach((e, i) => { e.rotation.x = -0.1 + Math.sin(t * 1.3 + i) * 0.06 + w.slump * 0.9; });
    if (r.antennae) r.antennae.forEach((a, i) => { a.rotation.x = Math.sin(t * 2.6 + i) * 0.15; });
    if (r.antenna) { const blinkOn = Math.sin(t * (w.type > 0.5 ? 10 : 2)) > 0.2; r.antenna.material.emissiveIntensity = blinkOn ? 1.6 : 0.2; }
    if (r.core) r.core.material.emissiveIntensity = 0.8 + Math.sin(t * 3) * 0.5 + w.type * 1.2;

    // parpadeo
    this.blinkAt -= dt;
    if (this.blinkAt <= 0) { this.blink = 0.14; this.blinkAt = 2 + Math.random() * 4; }
    if (this.blink > 0) this.blink -= dt;
    const lid = w.sleep > 0.5 ? 0.12 : (this.blink > 0 ? 0.12 : 1);
    for (const e of r.lids) e.scale.y = damp(e.scale.y, lid * (e.userData.base || 1), 30, dt);

    // anillo de selección y sombra
    r.ring.material.opacity = damp(r.ring.material.opacity, this.selected ? 0.85 : 0, 10, dt);
    r.ring.scale.setScalar(1 + Math.sin(t * 4) * 0.04);
    r.shadow.scale.setScalar(1 - (r.body.position.y - this.seatY * w.sit) * 0.6);
  }
}
