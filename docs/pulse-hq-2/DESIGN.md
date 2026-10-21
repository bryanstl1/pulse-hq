# PULSE HQ 2.0 — dirección de arte y arquitectura

## Alcance de esta entrega
Etapas A y B. Validación visual antes de construir los diez departamentos y conectar escrituras reales. Prototipo independiente dentro de este repositorio. No despliegue en GitHub Pages, no migraciones, no modificación de funciones Edge ni datos empresariales.

## Referencias observadas
Los tres vídeos se inspeccionaron visualmente mediante fotogramas distribuidos durante su duración. La referencia prioritaria es la oficina de simulación mostrada en el portátil: edificio amueblado, personajes pequeños, particiones bajas, espacios conectados y gestión secundaria. La oficina blanca aporta claridad de cámara y selección de agentes. La oficina oscura aporta conceptos de roles y memoria, no su dirección de arte. No se verificó el backend de los productos mostrados en esos vídeos.

## Diagnóstico reproducido
La grabación de 39.91 s de la aplicación actual muestra un espacio verde vacío, paneles extensos y salas de departamento muy básicas. El navegador reproduce el vacío. El `render()` comprueba `p3d-stage` antes de montar, pero `office-world.js` crea `pw-stage`: no se ejecuta el montaje. El DOM contiene cero canvas. Además, la envolvente limita toda la experiencia a 530 px incluso en escritorio; la oficina es un panel subordinado a navegación y métricas. El código 3D anterior repite salas y emplea cajas/esferas para personas.

## Propuesta artística
Diorama empresarial cálido, vista ortográfica a 35–45 grados. Suelo de baldosas y madera, muros marfil bajos, ventanas en las paredes del fondo, acentos verde salvia, arcilla y azul tinta. Muebles GLB Kenney CC0, iluminación suave y sombras. Personajes de asset profesional, con vestuario y siluetas diferenciadas. Sin neón dominante. El espacio ocupa la pantalla y los inspectores aparecen bajo demanda.

## Edificio completo propuesto
Ala ejecutiva: CEO, Dirección, Finanzas, juntas. Ala comercial: Marketing, Ventas, Relaciones Públicas. Ala de producción: Contenido, estudio multimedia, Eventos. Ala de operaciones: Comunidad, Inteligencia, Tecnología. Un eje central une misiones, colaboración y descanso. No se duplican habitaciones para aparentar diez áreas en esta muestra.

## Arquitectura elegida
Three.js con cámara ortográfica y assets GLB; JS modular y CSS sin framework adicional. Vite solo desarrolla y empaqueta. Alternativas: PixiJS sería eficiente para arte 2D fijo pero requiere un atlas coherente completo; Phaser incorpora sistemas de juego innecesarios; React no aporta valor suficiente al prototipo frente a la aplicación existente sin framework. La cámara ortográfica mantiene escala constante. Instanciación/compartición de geometrías y materiales, límites de pixel ratio y renderizado bajo demanda reducen coste.

Módulos: `world.js` construye escena/cámara/assets, `data.js` define catálogo de muestra, `state.js` normaliza estados verificables, `main.js` controla paneles, `style.css` adapta presentación. La futura capa de datos aceptará el cliente Supabase ya autenticado; nunca recibirá service_role. El prototipo no consulta ni escribe en producción y debe decirlo de forma visible. Una animación ambiental nunca equivale a estado running.

## Criterios de aceptación
1. Cuatro espacios de muestra amueblados con identidad propia y pasillos transitables.
2. Mobiliario y personajes de paquetes de assets con licencia y procedencia documentadas.
3. Zoom, desplazamiento, enfoque de habitación y selección de agente funcionales.
4. Objetivos táctiles de al menos 44 px, panel móvil desplazable, controles por teclado.
5. Ningún estado operativo inventado ni ejecución de IA desde la muestra.
6. Fallo de WebGL con directorio accesible, recuperación explícita y sin pantalla vacía.
7. Capturas del navegador real, ausencia de errores de aplicación y pruebas de normalización.
8. Presupuesto inicial: descarga comprimida menor de 8 MB, límite DPR 1.5–1.75, objetivo 30 fps. Medir lo disponible y distinguir escritorio de dispositivo físico.

## Reversibilidad
Base: `962b88162e8ad3911e2a869713e4ddfab0f7f1ed`. Rama: `design/pulse-hq-2-visual-prototype`. Todos los motores originales permanecen. La única corrección de legado propuesta será el selector de montaje, sin publicación. Eliminar/revertir el commit de propuesta restaura la base; no es necesario restaurar datos.
