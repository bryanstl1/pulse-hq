// Catálogo visual de PULSE HQ.
// `dept` coincide EXACTAMENTE con pulse_agent_roles.department / pulse_tasks.department.
// Nombres y especies son personajes provisionales que representan al departamento;
// no son identidades individuales registradas en el backend.

export const ROOMS = [
  { id: 'ceo', kind: 'space', short: 'Mi oficina', name: 'Oficina del CEO', sub: 'Dirección y aprobaciones', accent: '#c9a25e', floor: 'walnut', wall: '#efe4d2' },
  { id: 'direction', kind: 'department', dept: 'Dirección estratégica', short: 'Dirección', name: 'Dirección Estratégica', sub: 'Prioridades y coordinación', accent: '#b88746', floor: 'oak', wall: '#f1e7d6' },
  { id: 'marketing', kind: 'department', dept: 'Marketing y crecimiento', short: 'Marketing', name: 'Marketing y Crecimiento', sub: 'Estrategia y campañas', accent: '#2f9e8f', floor: 'oak', wall: '#e8efe9' },
  { id: 'content', kind: 'department', dept: 'Producción de contenido', short: 'Contenido', name: 'Producción de Contenido', sub: 'Guion, edición y medios', accent: '#e08a3c', floor: 'oak', wall: '#f3e6d8' },
  { id: 'creative', kind: 'space', short: 'Estudio', name: 'Estudio Creativo y Multimedia', sub: 'Grabación y PULSE STUDIO', accent: '#d9653b', floor: 'concrete', wall: '#e6e2dc' },
  { id: 'sales', kind: 'department', dept: 'Ventas y patrocinios', short: 'Ventas', name: 'Ventas y Patrocinios', sub: 'Propuestas y negociación', accent: '#2d4f8a', floor: 'walnut', wall: '#e9e6df' },
  { id: 'relations', kind: 'department', dept: 'Relaciones públicas y alianzas', short: 'Alianzas', name: 'Relaciones Públicas y Alianzas', sub: 'Vínculos profesionales', accent: '#9a7cc4', floor: 'oak', wall: '#eee8f1' },
  { id: 'boardroom', kind: 'space', short: 'Juntas', name: 'Sala de Juntas', sub: 'Decisiones del CEO', accent: '#5b6b8c', floor: 'walnut', wall: '#e7e5e1' },
  { id: 'missions', kind: 'space', short: 'Misiones', name: 'Gestión de Misiones', sub: 'Etapas y responsables', accent: '#c46a4a', floor: 'concrete', wall: '#ece7e0' },
  { id: 'collab', kind: 'space', short: 'Colaboración', name: 'Colaboración entre Departamentos', sub: 'Traspasos de misión', accent: '#4d9a6a', floor: 'oak', wall: '#e8eee6' },
  { id: 'events', kind: 'department', dept: 'Eventos y experiencias', short: 'Eventos', name: 'Eventos y Experiencias', sub: 'Producción y logística', accent: '#c4417a', floor: 'concrete', wall: '#f1e4ea' },
  { id: 'community', kind: 'department', dept: 'Comunidad', short: 'Comunidad', name: 'Comunidad', sub: 'Escucha y participación', accent: '#e07a5f', floor: 'oak', wall: '#f4e9e1' },
  { id: 'intelligence', kind: 'department', dept: 'Inteligencia de mercado', short: 'Inteligencia', name: 'Inteligencia de Mercado', sub: 'Investigación y tendencias', accent: '#3a78c2', floor: 'concrete', wall: '#e4eaf1' },
  { id: 'finance', kind: 'department', dept: 'Finanzas y administración', short: 'Finanzas', name: 'Finanzas y Administración', sub: 'Presupuesto y control', accent: '#5d8a4e', floor: 'walnut', wall: '#e9ece2' },
  { id: 'technology', kind: 'department', dept: 'Tecnología y automatización', short: 'Tecnología', name: 'Tecnología y Automatización', sub: 'Sistemas y automatizaciones', accent: '#2a9bb5', floor: 'concrete', wall: '#e2eaee' },
  { id: 'rest', kind: 'space', short: 'Descanso', name: 'Área de Descanso', sub: 'Café y pausa', accent: '#8a9a5b', floor: 'oak', wall: '#efeadf' }
];

// Una mascota por departamento. `species` selecciona el modelo 3D procedural;
// `portrait` reutiliza el arte 2D existente del proyecto para las fichas.
export const AGENTS = [
  { id: 'a-direction', room: 'direction', name: 'Ulises', species: 'owl', role: 'Director de estrategia', portrait: 'direction',
    palette: { body: '#9a6a3a', belly: '#e9d2a8', accent: '#2f4a3a', eye: '#f2a33a', beak: '#e0a93b' }, prop: 'clipboard' },
  { id: 'a-marketing', room: 'marketing', name: 'Kiki', species: 'hummingbird', role: 'Estratega de crecimiento', portrait: 'marketing',
    palette: { body: '#1f9e86', belly: '#f2efe1', accent: '#1b6b4f', eye: '#3a2a1a', beak: '#2b2b2b' }, prop: 'clipboard' },
  { id: 'a-content', room: 'content', name: 'Mía', species: 'cat', role: 'Productora de contenido', portrait: 'content',
    palette: { body: '#e8953a', belly: '#fbe7c6', accent: '#2b2b2b', eye: '#5aa04a', beak: '#e57f8a' }, prop: 'camera' },
  { id: 'a-sales', room: 'sales', name: 'Rocco', species: 'raccoon', role: 'Ejecutivo de patrocinios', portrait: 'sales',
    palette: { body: '#8a7764', belly: '#e9e0d2', accent: '#22355e', eye: '#2b1d12', beak: '#2b2b2b' }, prop: 'briefcase' },
  { id: 'a-relations', room: 'relations', name: 'Lila', species: 'bunny', role: 'Enlace de alianzas', portrait: 'relations',
    palette: { body: '#c9b8e6', belly: '#f6f1fb', accent: '#7d5aa8', eye: '#6b4aa8', beak: '#e6a3b8' }, prop: 'book' },
  { id: 'a-events', room: 'events', name: 'Luz', species: 'moth', role: 'Productora de experiencias', portrait: 'events',
    palette: { body: '#b8325e', belly: '#fbeaea', accent: '#e86aa0', eye: '#2b1020', beak: '#2b1020' }, prop: 'glowstick' },
  { id: 'a-community', room: 'community', name: 'Cata', species: 'capybara', role: 'Anfitriona de comunidad', portrait: 'community',
    palette: { body: '#a87650', belly: '#c99a72', accent: '#ef7f63', eye: '#2b1d12', beak: '#5a3a26' }, prop: 'tablet' },
  { id: 'a-intelligence', room: 'intelligence', name: 'Iris', species: 'owl', role: 'Analista de mercado', portrait: 'intelligence',
    palette: { body: '#5f8fd0', belly: '#e9f0fb', accent: '#26324a', eye: '#f2a33a', beak: '#e0a93b' }, prop: 'tablet', glasses: true },
  { id: 'a-finance', room: 'finance', name: 'Tomás', species: 'turtle', role: 'Controlador financiero', portrait: 'finance',
    palette: { body: '#7fae63', belly: '#d9e6b8', accent: '#2f4a2a', eye: '#2b1d12', beak: '#6b8f4e', shell: '#8a5a2f' }, prop: 'book', glasses: true },
  { id: 'a-technology', room: 'technology', name: 'Bit', species: 'robot', role: 'Ingeniero de automatización', portrait: 'technology',
    palette: { body: '#2f7f9a', belly: '#d7e6ea', accent: '#f08a24', eye: '#6ff5ff', beak: '#1a2a33' }, prop: 'tablet' }
];

export const roomById = id => ROOMS.find(r => r.id === id);
export const roomIndex = id => ROOMS.findIndex(r => r.id === id);
export const agentForRoom = id => AGENTS.find(a => a.room === id) || null;
export const agentForDept = dept => AGENTS.find(a => roomById(a.room)?.dept === dept) || null;
export const deptOfAgent = agent => roomById(agent.room)?.dept;
