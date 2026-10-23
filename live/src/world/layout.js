// Distribución espacial de la oficina (metros). Cada sala ocupa un módulo de una planta continua
// unida por un pasillo frontal. Coordenadas locales de sala: x ∈ [-HALF_W, HALF_W], z ∈ [BACK_Z, FRONT_Z].
// Rotaciones en grados; 0 = el frente del mueble mira hacia el pasillo (+z), hacia la cámara.
import { ROOMS } from '../data/roster.js';

// Las distribuciones se escriben en una retícula de diseño y se compactan con S
// para que el mobiliario llene la sala en el encuadre vertical del iPhone.
const S = 0.84;
const D_BACK = -3.6, D_FRONT = 3.4;
export const PITCH = 6.6 * S;      // distancia entre centros de sala
export const HALF_W = 3.1 * S;     // medio ancho interior
export const BACK_Z = D_BACK * S;  // cara interior del muro del fondo
export const FRONT_Z = D_FRONT * S;// muro frontal bajo
export const CORRIDOR_Z = FRONT_Z + 1.7; // borde exterior del pasillo
export const DOOR_HALF = 0.75;     // media anchura de la puerta hacia el pasillo
export const WALL_H = 2.5;
export const PARTITION_H = 1.35;
export const FRONT_H = 0.42;

export const roomCenterX = i => i * PITCH;

// ——— Bloques reutilizables ———
const f = (m, x, z, r = 0, extra = {}) => ({ m, x, z, r, ...extra });           // mueble GLB
const p = (p, x, z, r = 0, extra = {}) => ({ p, x, z, r, ...extra });           // accesorio procedural

/** Escritorio del agente: él se sienta detrás, mirando a la cámara. */
function agentDesk(x, z, opts = {}) {
  const items = [
    f('desk', x, z, 0, { hot: 'desk' }),
    f('chairDesk', x, z - 0.62, 0, { block: false, seat: true, tint: '#3f3b38' }),
    f('laptop', x - 0.1, z - 0.05, 180, { onTop: 0.76, block: false }),
    p('statusLamp', x + 0.55, z - 0.02, 0, { onTop: 0.76, block: false }),
    p('tray', x - 0.56, z + 0.04, 0, { onTop: 0.76, block: false, hot: 'tray' })
  ];
  if (opts.second) items.push(f('computerScreen', x + 0.2, z - 0.12, 180, { onTop: 0.76, block: false }));
  return items;
}

function decor(room) {
  return [
    p('window', -1.6, D_BACK, 0, { w: 1.6, h: 1.0, y: 1.0 }),
    p('sign', -1.6, D_BACK, 0, { w: 1.7, h: 0.42, y: 2.08, text: room.short, accent: room.accent })
  ];
}

const DESK = { x: -0.9, z: -2.1 };
const deskStation = (d = DESK) => ({ x: d.x, z: d.z - 0.62, face: 0, pose: 'sit' });

// Cada departamento comparte el núcleo (escritorio, archivo, tablero) y añade mobiliario propio.
function department(room, extra, idle) {
  const items = [
    ...agentDesk(DESK.x, DESK.z, { second: room.id === 'technology' || room.id === 'intelligence' }),
    p('board', 1.55, D_BACK, 0, { w: 1.8, h: 1.05, y: 1.05, hot: 'board', accent: room.accent }),
    f('bookcaseClosedWide', -2.75, -0.9, 90, { hot: 'shelf' }),
    f('pottedPlant', -2.75, -2.95, 0),
    f('pottedPlant', 2.8, 2.9, 0),
    f('lampRoundFloor', 2.85, -3.2, 0, { block: true }),
    ...decor(room),
    ...extra
  ];
  const stations = {
    desk: deskStation(),
    board: { x: 1.55, z: -2.75, face: 180, pose: 'stand' },
    shelf: { x: -2.05, z: -0.9, face: -90, pose: 'stand' },
    plant: { x: 2.25, z: 2.35, face: 45, pose: 'stand' },
    window: { x: -1.6, z: -3.05, face: 180, pose: 'stand' },
    door: { x: 0, z: 2.85, face: 0, pose: 'stand' },
    ...idle
  };
  return { items, stations };
}

const LAYOUTS = {
  direction: room => department(room, [
    f('rugRectangle', 0.9, 0.9, 0, { block: false }),
    f('tableGlass', 0.9, 0.9, 0),
    f('chairCushion', 0.45, 1.65, 180, { fabric: true }), f('chairCushion', 1.35, 1.65, 180, { fabric: true }),
    f('chairCushion', 0.45, 0.15, 0, { fabric: true }), f('chairCushion', 1.35, 0.15, 0, { fabric: true }),
    p('globe', -2.6, 1.6, 0),
    f('loungeChair', -2.3, 2.6, 135, { fabric: true })
  ], { meet: { x: 0.9, z: 2.1, face: 180, pose: 'stand' } }),

  marketing: room => department(room, [
    p('cardsWall', 2.95, -0.6, -90, { accent: room.accent }),
    f('rugRound', 0.9, 1.0, 0, { block: false }),
    f('tableRound', 0.9, 1.0, 0),
    f('stoolBar', 0.2, 1.0, 90, { fabric: true }), f('stoolBar', 1.6, 1.0, -90, { fabric: true }),
    f('loungeSofa', -1.9, 2.55, 0, { fabric: true }),
    p('easel', 2.4, 1.6, -60, { accent: room.accent })
  ], { meet: { x: 0.9, z: 1.9, face: 180, pose: 'stand' }, cards: { x: 2.3, z: -0.6, face: 90, pose: 'stand' } }),

  content: room => department(room, [
    p('greenScreen', 1.6, -2.9, 0),
    p('tripod', 1.5, -0.6, 180),
    p('softbox', 2.55, -1.3, 210), p('softbox', 0.6, -1.4, 150),
    f('loungeChair', 1.55, -2.05, 0, { fabric: true }),
    f('rugRectangle', -1.3, 1.5, 0, { block: false }),
    f('sideTableDrawers', -2.55, 2.75, 90),
    f('loungeDesignSofa', -1.2, 2.65, 0, { fabric: true })
  ], { board: { x: 1.5, z: 0.05, face: 180, pose: 'stand' }, set: { x: 1.55, z: -1.5, face: 0, pose: 'stand' } }),

  sales: room => department(room, [
    f('rugRectangle', 0.8, 1.0, 0, { block: false }),
    p('longTable', 0.8, 1.0, 0, { w: 2.2, d: 1.0 }),
    f('chairModernCushion', 0.2, 1.75, 180, { fabric: true }), f('chairModernCushion', 1.4, 1.75, 180, { fabric: true }),
    f('chairModernCushion', 0.2, 0.25, 0, { fabric: true }), f('chairModernCushion', 1.4, 0.25, 0, { fabric: true }),
    p('podium', 2.6, 2.6, -30, { accent: room.accent }),
    f('sideTable', -2.6, 2.6, 90)
  ], { meet: { x: 0.8, z: 2.25, face: 180, pose: 'stand' } }),

  relations: room => department(room, [
    p('pressWall', 2.95, 0.4, -90, { accent: room.accent }),
    f('rugRound', 0.4, 1.2, 0, { block: false }),
    f('loungeSofa', 0.4, 2.1, 180, { fabric: true }),
    f('loungeChair', -0.75, 1.0, 90, { fabric: true }),
    f('tableCoffee', 0.55, 1.15, 0),
    f('loungeChair', 1.55, 1.0, -90, { fabric: true })
  ], { press: { x: 2.3, z: 0.4, face: 90, pose: 'stand' } }),

  events: room => department(room, [
    p('stage', 1.3, 0.6, 0, { accent: room.accent }),
    p('balloons', 2.75, 2.6, 0, { accent: room.accent }),
    p('balloons', -2.6, 2.7, 0, { accent: '#f2c14e' }),
    f('stoolBar', -0.9, 1.4, 0, { fabric: true })
  ], { stage: { x: 1.3, z: 1.35, face: 180, pose: 'stand' } }),

  community: room => department(room, [
    f('rugRound', 0.8, 1.2, 0, { block: false }),
    f('loungeDesignSofa', 0.8, 2.25, 180, { fabric: true }),
    f('loungeDesignChair', 0.85, 0.15, 0, { fabric: true }),
    f('tableCoffeeGlassSquare', 0.85, 1.2, 0),
    p('chatScreen', 2.95, -0.6, -90, { accent: room.accent }),
    f('benchCushion', -2.6, 2.3, 90, { fabric: true })
  ], { meet: { x: 1.9, z: 1.2, face: -90, pose: 'stand' } }),

  intelligence: room => department(room, [
    p('dataWall', 2.95, -0.7, -90, { accent: room.accent }),
    f('rugRectangle', 0.6, 1.2, 0, { block: false }),
    p('longTable', 0.6, 1.2, 0, { w: 1.9, d: 1.0, map: true }),
    f('chairDesk', -0.1, 2.0, 180), f('chairDesk', 1.3, 2.0, 180),
    f('bookcaseOpenLow', -2.8, 2.3, 90)
  ], { meet: { x: 0.6, z: 0.35, face: 0, pose: 'stand' }, wall: { x: 2.3, z: -0.7, face: 90, pose: 'stand' } }),

  finance: room => department(room, [
    p('cabinet', 2.85, -0.4, -90), p('cabinet', 2.85, 0.25, -90), p('cabinet', 2.85, 0.9, -90),
    p('safe', 2.75, 2.4, -60),
    f('rugRectangle', 0.4, 1.4, 0, { block: false }),
    f('deskCorner', 0.0, 1.6, 0),
    f('chairCushion', 0.5, 2.5, 180, { fabric: true })
  ], { files: { x: 2.2, z: 0.25, face: 90, pose: 'stand' } }),

  technology: room => department(room, [
    p('rack', 2.75, -2.9, 0), p('rack', 2.1, -2.9, 0),
    p('rack', 2.85, -1.6, -90),
    f('desk', 0.9, 1.0, 180), f('computerScreen', 0.75, 0.95, 0, { onTop: 0.76, block: false }), f('computerScreen', 1.15, 0.95, -15, { onTop: 0.76, block: false }),
    f('chairDesk', 0.9, 1.7, 180),
    f('speakerSmall', -2.7, 2.6, 45)
  ], { racks: { x: 2.1, z: -2.15, face: 180, pose: 'stand' }, bench: { x: 0.9, z: 1.95, face: 180, pose: 'stand' } }),

  // ——— Espacios especiales ———
  ceo: room => ({
    items: [
      p('window', -1.5, D_BACK, 0, { w: 2.4, h: 1.3, y: 1.1 }),
      p('sign', 1.5, D_BACK, 0, { w: 1.7, h: 0.5, y: 2.05, text: 'CEO', accent: room.accent }),
      f('rugRectangle', -0.6, -1.6, 0, { block: false }),
      p('execDesk', -0.6, -2.0, 0, { hot: 'ceo-desk' }),
      f('chairDesk', -0.6, -2.75, 0, { block: false }),
      p('tray', -1.3, -1.95, 0, { onTop: 0.78, block: false, hot: 'ceo-tray', big: true }),
      f('laptop', -0.45, -2.1, 180, { onTop: 0.78, block: false }),
      f('lampSquareTable', 0.25, -2.05, 0, { onTop: 0.78, block: false }),
      p('wallScreen', 1.6, D_BACK, 0, { w: 1.6, h: 0.9, y: 1.15, hot: 'ceo-tv', screen: 'company' }),
      f('bookcaseClosedWide', -2.75, 0.2, 90, { hot: 'ceo-shelf' }),
      f('loungeSofa', 1.2, 1.9, 180, { fabric: true }),
      f('tableCoffee', 1.35, 1.0, 0),
      f('loungeChair', 2.55, 0.6, -90, { fabric: true }),
      p('door', 2.95, -1.4, -90, { hot: 'legacy-door', accent: room.accent }),
      f('pottedPlant', -2.75, -3.0, 0), f('pottedPlant', -2.75, 2.85, 0), f('pottedPlant', 2.8, 2.85, 0)
    ],
    stations: { visit: { x: -0.6, z: -1.2, face: 180, pose: 'stand' }, sofa: { x: 0.2, z: 1.3, face: 90, pose: 'stand' } }
  }),

  boardroom: room => {
    const items = [
      ...decor(room).map(d => d.p === 'window' ? { ...d, x: -1.7 } : d),
      f('rugRectangle', 0, 0, 0, { block: false, sx: 1.5, sz: 1.6 }),
      p('longTable', 0, 0, 0, { w: 3.6, d: 1.3, hot: 'board-table' }),
      p('wallScreen', 1.6, D_BACK, 0, { w: 1.5, h: 0.85, y: 1.15, screen: 'missions-mini' }),
      f('pottedPlant', -2.8, -3.0, 0), f('pottedPlant', 2.8, 2.9, 0), f('pottedPlant', -2.8, 2.9, 0)
    ];
    const seats = {};
    [-1.35, -0.45, 0.45, 1.35].forEach((x, i) => {
      items.push(f('chairModernCushion', x, -0.95, 0, { fabric: true, block: false }));
      items.push(f('chairModernCushion', x, 0.95, 180, { fabric: true, block: false }));
      seats[`seat${i * 2}`] = { x, z: -1.25, face: 0, pose: 'stand' };
      seats[`seat${i * 2 + 1}`] = { x, z: 1.3, face: 180, pose: 'stand' };
    });
    return { items, stations: seats };
  },

  missions: room => ({
    items: [
      p('sign', -1.6, D_BACK, 0, { w: 1.9, h: 0.5, y: 2.05, text: 'Misiones', accent: room.accent }),
      p('missionBoard', 0.6, D_BACK, 0, { w: 4.2, h: 1.6, y: 1.25, hot: 'mission-board' }),
      f('rugRectangle', 0, 0.8, 0, { block: false, sx: 1.3 }),
      p('longTable', 0, 0.9, 0, { w: 2.4, d: 1.1, hot: 'mission-table' }),
      f('chairDesk', -0.7, 1.75, 180), f('chairDesk', 0.7, 1.75, 180),
      f('chairDesk', -0.7, 0.05, 0), f('chairDesk', 0.7, 0.05, 0),
      f('pottedPlant', -2.8, -3.0, 0), f('pottedPlant', 2.8, 2.9, 0), f('bookcaseOpenLow', -2.8, 2.2, 90)
    ],
    stations: { b0: { x: -1.0, z: -2.6, face: 180, pose: 'stand' }, b1: { x: 0.2, z: -2.6, face: 180, pose: 'stand' }, b2: { x: 1.4, z: -2.6, face: 180, pose: 'stand' }, b3: { x: 2.4, z: -2.6, face: 180, pose: 'stand' } }
  }),

  collab: room => ({
    items: [
      ...decor(room),
      p('board', 1.6, D_BACK, 0, { w: 1.9, h: 1.1, y: 1.05, hot: 'collab-board', accent: room.accent, kind: 'handoffs' }),
      f('rugRound', -1.25, 0.35, 0, { block: false, sx: 1.25, sz: 1.25 }),
      f('tableRound', -1.2, 0.3, 0, { hot: 'collab-table', sx: 0.62, sz: 0.62 }),
      f('rugRound', 1.5, 1.35, 0, { block: false, sx: 1.25, sz: 1.25 }),
      f('tableRound', 1.5, 1.3, 0, { hot: 'collab-table', sx: 0.62, sz: 0.62 }),
      f('loungeSofa', -1.6, 2.7, 0, { fabric: true }),
      f('pottedPlant', -2.8, -3.0, 0), f('pottedPlant', 2.8, -3.1, 0), f('pottedPlant', -2.8, 2.9, 0)
    ],
    stations: {
      c0: { x: -1.95, z: 0.3, face: 90, pose: 'stand' }, c1: { x: -0.45, z: 0.3, face: -90, pose: 'stand' },
      c2: { x: -1.2, z: -0.45, face: 0, pose: 'stand' }, c3: { x: -1.2, z: 1.05, face: 180, pose: 'stand' },
      c4: { x: 0.75, z: 1.3, face: 90, pose: 'stand' }, c5: { x: 2.25, z: 1.3, face: -90, pose: 'stand' },
      c6: { x: 1.5, z: 0.55, face: 0, pose: 'stand' }, c7: { x: 1.5, z: 2.05, face: 180, pose: 'stand' },
      c8: { x: 1.0, z: -2.7, face: 180, pose: 'stand' }, c9: { x: 2.2, z: -2.7, face: 180, pose: 'stand' }
    }
  }),

  creative: room => ({
    items: [
      p('sign', -1.7, D_BACK, 0, { w: 1.9, h: 0.5, y: 2.05, text: 'Estudio', accent: room.accent }),
      p('greenScreen', 0.9, -3.0, 0, { wide: true }),
      p('tripod', 0.9, -0.2, 180, { hot: 'studio-cam' }),
      p('softbox', 2.5, -1.2, 215), p('softbox', -0.7, -1.2, 145),
      f('loungeDesignChair', 0.9, -2.2, 0, { fabric: true }),
      f('desk', -1.9, 1.6, 90), f('computerScreen', -1.95, 1.6, 90, { onTop: 0.76, block: false }), f('chairDesk', -1.25, 1.6, 90),
      p('neon', -1.7, D_BACK, 0, { y: 1.2, accent: room.accent }),
      f('speakerSmall', 2.7, 2.6, -30), f('pottedPlant', 2.8, 1.6, 0)
    ],
    stations: { set: { x: 0.9, z: -1.5, face: 0, pose: 'stand' }, edit: { x: -1.25, z: 1.6, face: -90, pose: 'stand' } }
  }),

  rest: room => ({
    items: [
      ...decor(room),
      p('counter', 1.2, -3.2, 0, { w: 3.2, hot: 'coffee' }),
      f('kitchenCoffeeMachine', 0.6, -3.25, 0, { onTop: 0.92, block: false, hot: 'coffee' }),
      p('cooler', 2.85, -1.6, -90),
      f('stoolBar', 0.4, -2.3, 180, { fabric: true }), f('stoolBar', 1.2, -2.3, 180, { fabric: true }), f('stoolBar', 2.0, -2.3, 180, { fabric: true }),
      f('rugRound', -1.4, 1.4, 0, { block: false, sx: 1.7, sz: 1.7 }),
      f('loungeSofaLong', -2.35, 1.3, 90, { fabric: true }),
      f('tableCoffee', -1.15, 1.45, 90),
      f('loungeChair', -0.4, 2.4, 200, { fabric: true }),
      f('pottedPlant', 2.8, 2.9, 0), f('pottedPlant', -2.8, -3.0, 0), f('plantSmall2', -1.1, 1.3, 0, { onTop: 0.46, block: false })
    ],
    stations: {
      coffee: { x: 0.6, z: -2.55, face: 180, pose: 'stand' }, coffee2: { x: 1.6, z: -1.7, face: 180, pose: 'stand' },
      cooler: { x: 2.25, z: -1.6, face: 90, pose: 'stand' }, sofa: { x: -1.5, z: 0.4, face: 0, pose: 'stand' }, sofa2: { x: -0.3, z: 1.0, face: -90, pose: 'stand' }
    }
  })
};

/** Devuelve la planta completa en coordenadas de mundo. */
export function buildLayout() {
  return ROOMS.map((room, index) => {
    const cx = roomCenterX(index);
    const local = LAYOUTS[room.id](room);
    const items = local.items.map(it => { const x = it.x * S, z = (it.z === D_BACK ? BACK_Z : it.z * S); return { ...it, x, z, room: room.id, wx: cx + x, wz: z }; });
    const stations = Object.fromEntries(Object.entries(local.stations).map(([k, st]) => [k, { ...st, room: room.id, wx: cx + st.x * S, wz: st.z * S, key: k }]));
    return { room, index, cx, items, stations };
  });
}

export const HOTSPOT_INFO = {
  desk: { title: 'Mesa de trabajo', hint: 'Encargos activos y resultados' },
  tray: { title: 'Bandeja de revisiones', hint: 'Propuestas que esperan tu decisión' },
  board: { title: 'Tablero del departamento', hint: 'Misiones y etapas asignadas' },
  shelf: { title: 'Archivo de entregables', hint: 'Archivos generados por el departamento' },
  'ceo-desk': { title: 'Escritorio del CEO', hint: 'Resumen de la empresa' },
  'ceo-tray': { title: 'Bandeja del CEO', hint: 'Todas las aprobaciones pendientes' },
  'ceo-shelf': { title: 'Biblioteca de entregables', hint: 'Todos los archivos registrados' },
  'ceo-tv': { title: 'Pantalla de la empresa', hint: 'Indicadores registrados' },
  'legacy-door': { title: 'Centro anterior', hint: 'CRM, automatizaciones y estudio' },
  'board-table': { title: 'Mesa de juntas', hint: 'Convocar una misión nueva' },
  'mission-board': { title: 'Tablero de misiones', hint: 'Etapas, responsables y estado' },
  'mission-table': { title: 'Mesa de coordinación', hint: 'Crear o retomar misiones' },
  'collab-board': { title: 'Traspasos', hint: 'Aportaciones entre departamentos' },
  'collab-table': { title: 'Mesa de colaboración', hint: 'Departamentos trabajando juntos' },
  'studio-cam': { title: 'Cámara del estudio', hint: 'PULSE STUDIO (centro anterior)' },
  coffee: { title: 'Cafetera', hint: 'Pausa y movimiento ambiental' }
};
