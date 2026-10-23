import * as THREE from 'three';
import { GLTFLoader } from '../../vendor/addons/loaders/GLTFLoader.js';

// Kenney Furniture Kit (CC0). 1 unidad Kenney ≈ 0.5 m, por eso escalamos ×2 para trabajar en metros.
export const KENNEY_SCALE = 2;
export const FURNITURE = [
  'benchCushion', 'bookcaseClosedWide', 'bookcaseOpenLow', 'books', 'chairCushion', 'chairDesk', 'chairModernCushion',
  'computerKeyboard', 'computerMouse', 'computerScreen', 'desk', 'deskCorner', 'kitchenCoffeeMachine', 'lampRoundFloor',
  'lampSquareTable', 'laptop', 'loungeChair', 'loungeDesignChair', 'loungeDesignSofa', 'loungeSofa', 'loungeSofaLong',
  'plantSmall1', 'plantSmall2', 'plantSmall3', 'pottedPlant', 'rugRectangle', 'rugRound', 'sideTable', 'sideTableDrawers',
  'speakerSmall', 'stoolBar', 'tableCoffee', 'tableCoffeeGlassSquare', 'tableGlass', 'tableRound', 'televisionModern'
];

const templates = new Map();
const materialCache = new Map();

// Comparte materiales iguales entre modelos para reducir cambios de estado en la GPU.
// Paleta más cálida y con contraste para que los muebles no se confundan con el suelo.
const PALETTE = { wood: '#c4925f', woodDark: '#8f6342', plant: '#5aa86a', metal: '#d9e0e0', metalDark: '#4b5257', metalMedium: '#8c979a', carpet: '#d98c7a', carpetBlue: '#8fa9d9', carpetDarker: '#c98d7d', lamp: '#fff3c4' };
function shareMaterial(m) {
  const name = m.name || '';
  const key = `${name}|${m.color?.getHexString()}`;
  if (!materialCache.has(key)) {
    const glass = name === 'glass';
    const mat = new THREE.MeshStandardMaterial({ color: PALETTE[name] || m.color, roughness: glass ? 0.15 : name.startsWith('metal') ? 0.45 : 0.85, metalness: name.startsWith('metal') ? 0.25 : 0, transparent: glass, opacity: glass ? 0.55 : 1 });
    if (name === 'lamp') { mat.emissive.set('#ffe9a8'); mat.emissiveIntensity = 0.5; }
    mat.name = name;
    materialCache.set(key, mat);
  }
  return materialCache.get(key);
}

/** Carga los GLB y normaliza cada modelo: pivote en el centro inferior, escala en metros. */
export async function loadFurniture(base, onProgress, { bundle = null } = {}) {
  const loader = new GLTFLoader();
  let done = 0;
  // Paquete opcional (JSON con los GLB en base64) para alojamientos que no sirven .glb
  let packed = null;
  if (bundle) { try { packed = await (await fetch(bundle)).json(); } catch { packed = null; } }
  const b64 = s => { const bin = atob(s); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u.buffer; };
  await Promise.all(FURNITURE.map(name => new Promise((resolve) => {
    const onLoad = gltf => {
      const root = gltf.scene;
      root.scale.setScalar(KENNEY_SCALE);
      root.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(root);
      const center = box.getCenter(new THREE.Vector3());
      const holder = new THREE.Group();
      root.position.set(-center.x, -box.min.y, -center.z);
      holder.add(root);
      holder.traverse(o => {
        if (o.isMesh) {
          o.material = Array.isArray(o.material) ? o.material.map(shareMaterial) : shareMaterial(o.material);
          o.castShadow = true; o.receiveShadow = true;
        }
      });
      const size = box.getSize(new THREE.Vector3());
      templates.set(name, { holder, size });
      done++; onProgress?.(done / FURNITURE.length);
      resolve();
    };
    const onError = () => { done++; onProgress?.(done / FURNITURE.length); resolve(); };
    if (packed?.[name]) loader.parse(b64(packed[name]), '', onLoad, onError);
    else loader.load(`${base}/${name}.glb`, onLoad, undefined, onError);
  })));
  return templates;
}

export function hasModel(name) { return templates.has(name); }
export function modelSize(name) { return templates.get(name)?.size || new THREE.Vector3(0.5, 0.5, 0.5); }

export function cloneModel(name) {
  const t = templates.get(name);
  if (!t) return null;
  return t.holder.clone(true);
}
