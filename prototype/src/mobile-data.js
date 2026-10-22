import {rooms} from './data.js';

// Visual roster only. Names and avatars do not identify live Supabase agents.
const original=(id,kind='department')=>({...rooms.find(r=>r.id===id),kind,art:id,atlas:'original'});
const dept=(id,short,name,sub,accent,agent,title,atlas,sprite,description,furniture)=>({id,short,name,sub,accent,agent,title,atlas,sprite,art:id,kind:'department',description,furniture});
const space=(id,short,name,sub,accent,description,furniture)=>({id,short,name,sub,accent,art:id,kind:'space',description,furniture});

export const mobileRooms=[
 original('direction'),
 dept('marketing','Marketing','Marketing y crecimiento','Estrategia y campañas','#d98c76','Estratega','Estratega de crecimiento','team-a',0,'Diseña y evalúa estrategias de adquisición y crecimiento.','Estaciones de campañas, mesa de pruebas y tablero de estrategia.'),
 dept('content','Contenido','Producción de contenido','Guion, edición y medios','#7e9db0','Productora','Dirección de contenido','team-a',1,'Convierte planes en guiones, piezas y materiales editables.','Estaciones editoriales, cabina de grabación y equipos multimedia.'),
 dept('sales','Ventas','Ventas y patrocinios','Propuestas y negociación','#c18d68','Prospector','Prospección comercial','team-a',2,'Prepara ofertas y oportunidades comerciales para revisión.','Mesa de clientes, escritorio de propuestas y muestras de presentación.'),
 dept('relations','Alianzas','Relaciones públicas y alianzas','Vínculos profesionales','#ac94b0','Enlace','Relaciones y alianzas','team-a',3,'Investiga y estructura relaciones profesionales y colaboraciones.','Salón de reuniones, kits de prensa y escritorio de correspondencia.'),
 dept('events','Eventos','Eventos y experiencias','Producción y logística','#ad86a2','Productora','Coordinación de experiencias','team-b',0,'Diseña experiencias y evalúa logística, oportunidades y riesgos.','Maqueta escénica, muestras de iluminación y tablero de producción.'),
 dept('community','Comunidad','Comunidad','Escucha y participación','#c9878b','Anfitrión','Gestión de comunidad','team-b',1,'Escucha a la audiencia y organiza la interacción de la comunidad.','Estaciones de moderación, mesa de conversación y panel de retroalimentación.'),
 dept('intelligence','Inteligencia','Inteligencia de mercado','Investigación y tendencias','#7797ad','Analista','Análisis de mercado','team-b',2,'Reúne evidencia y analiza tendencias, competencia y demanda.','Biblioteca de investigación, pantallas y mesa de análisis.'),
 dept('finance','Finanzas','Finanzas y administración','Presupuesto y control','#88997e','Controlador','Control financiero','team-b',3,'Evalúa recursos, presupuestos y controles administrativos.','Archivo, estaciones contables y mesa de planificación.'),
 original('technology'),
 space('ceo','Mi oficina','Oficina del CEO','Dirección y aprobaciones','#bb9b6a','Espacio ejecutivo para revisar propuestas y tomar decisiones.','Escritorio privado, mesa de visitas y libreros.'),
 original('boardroom','space'),
 original('creative','space'),
 space('missions','Misiones','Gestión de misiones','Coordinación empresarial','#ad9278','Área donde se visualizará la secuencia verificable de una misión.','Mesa central, tablero de etapas y estaciones de coordinación.'),
 original('lounge','space'),
 space('rest','Descanso','Área de descanso','Pausa y bienestar','#90a481','Un ambiente para hacer una pausa dentro de la compañía.','Cafetería, comedor, sofá y rincón de lectura.')
];
