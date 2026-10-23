# PULSE HQ 2.0 · Oficina viva: auditoría, decisiones y estado (23 de octubre de 2026)

Rama: `design/pulse-hq-2-live-office`, derivada de `design/pulse-hq-2-contextual-agents` en `ccd7d57`. Código nuevo en `live/`. `prototype/`, la aplicación anterior (`index.html` en la raíz) y las funciones de Supabase no se modificaron. Para revertir basta con borrar la rama o la carpeta `live/`.

## 1. Video de referencia (fotogramas y subtítulos analizados)

Video vertical de 1:35 (TikTok, @anastasiajavurek). Lo que se observa:

| Tiempo | Interacción observada |
|---|---|
| 0:00–0:10 | Gancho sostenido en una portátil: oficina isométrica, estilo juguete, con habitaciones amuebladas y muchos personajes pequeños visibles a la vez. |
| 0:10–0:16 | «Mi dashboard, donde los veo trabajando todos los días». Primer plano de la oficina 3D: escritorios, sala de juntas, personajes en sus puestos. La persona arrastra para recorrer. |
| 0:16–0:20 | «Si necesitan algo de mí, van a la sala de juntas y sale una notificación»: el personaje se desplaza y aparece un panel con la lista de pendientes; cada fila tiene una acción. |
| 0:20–0:23 | Chat individual con la coordinadora: saludo, preguntas sugeridas y campo de texto. |
| 0:23–0:32 | Barra lateral por departamentos (Producción, Material, Video, Foto, Redes), contadores y lista de agentes con estado («te necesita», «apagado»). |
| 0:47–1:04 | Cada personaje tiene un rol concreto (coordinación, edición, transcripción, redes). |
| 1:04–1:12 | Agentes «por crear» que se desbloquean: el elenco crece con el sistema. |
| 1:12–1:20 | La autora admite que aún no ejecutan todo como quisiera. |
| Toda la pieza | La sensación de empresa viva viene de **personajes que se mueven entre espacios reales**, **avisos que surgen de su estado** y **un chat por persona**, no de la ilustración en sí. |

## 2. Diferencias que impedían esa sensación en el prototipo anterior

1. **Fondo estático.** Los dos planos WebP eran imágenes; los personajes eran botones superpuestos sin relación física con muebles o puertas.
2. **Sin movimiento con sentido.** Los personajes no caminaban, no se sentaban ni reaccionaban a su trabajo; el «estado» era solo una etiqueta.
3. **Objetos sin función.** Escritorios, tableros y archivadores formaban parte del dibujo y no se podían tocar.
4. **Escala incoherente.** Retratos pixel art sobre un fondo pintado de otra escala.
5. **Colaboración invisible.** Las etapas de misión existían en datos, pero nada en la escena las representaba.

## 3. Arquitectura elegida

- **Three.js r180** (MIT), incluido en el repositorio. Da una escena real en la que los agentes ocupan espacio, proyectan sombra, se ocultan detrás de los muebles y caminan. PixiJS o Phaser obligarían a dibujar hojas de animación para diez especies en ocho direcciones; con mallas procedurales cada animación es código pequeño y editable. La versión r180 coincide con la que ya fijaba `prototype/package.json`.
- **Kenney Furniture Kit (CC0)**, ya presente en el repositorio: 36 modelos de 3 a 40 kB, recoloreados por nombre de material según la sala.
- **Mascotas procedurales** (sin descargas): búho, colibrí, gata, mapache, coneja, polilla, capibara, búho azul, tortuga y robot. Retoman especies y paletas de los atlas existentes; los retratos 2D de esos atlas se usan en las fichas.
- **Cuadrícula y A\*** (`nav.js`, sin dependencias) para que los agentes caminen sin atravesar muros ni muebles.
- **Sin framework ni compilación obligatoria**: módulos ES con import map (`dev.html`) y un paquete de esbuild (`dist/app.js`, 190 kB con gzip) para el iPhone.
- **Supabase** con el mismo UMD de jsDelivr que usa la app anterior, cargado bajo demanda. Clave publicable únicamente; RLS y las comprobaciones de las funciones Edge siguen siendo la frontera de autorización.
- **Una sola fuente de verdad visual**: `activity.js` convierte la instantánea en intenciones. El controlador de agentes solo anima trabajo, revisión, error o misión cuando existe un registro que lo respalda.

## 4. Contratos verificados en el código

- `pulse-run` → `{ department, instruction }`, igual que en `index.html` raíz; espera `{ ok: true }`.
- `pulse-mission-control` → `{ action: 'create', title, objective }` o `{ action, missionId }`, igual que en la app anterior.
- Aprobación → `update({ status })` en `pulse_approvals` condicionado a `status = 'pending'` (y `user_id`), con verificación de filas afectadas.
- Descargas → `storage.from('pulse-deliverables').createSignedUrl(path, 120)`, con verificación de origen.
- Consultas: `pulse_agent_roles`, `pulse_tasks`, `pulse_approvals`, `pulse_missions`, `pulse_mission_steps`, `pulse_deliverables`, con las columnas que ya validó la auditoría anterior.

Estos contratos se revisaron en el código cliente. El código de `pulse-run` y `pulse-mission-control` no está en el repositorio, y desde este entorno no se pudo consultar Supabase (salida de red bloqueada).

## 5. Estado

### Implementado y probado (navegador Chromium con viewport de iPhone 16 Pro, 402 × 874, táctil)
- Planta continua de 16 espacios con mobiliario propio y pasillo; deslizar con inercia, flechas, puntos, directorio, zoom y teclado.
- Diez mascotas animadas que caminan por rutas A*, se sientan en su silla, teclean, leen, piensan, saludan al ser tocadas y celebran resultados.
- Paseos ambientales rotulados como tales, con interruptor. Sin sesión: «Actividad no consultada» y tableros con «No consultado».
- Ficha del agente con conversación, trabajo y perfil; el encuadre se acerca al agente encima del panel.
- Objetos tocables: escritorio, bandeja, tablero, archivero, CEO, mesa de juntas, tablero de misiones, colaboración, puerta al centro anterior y cafetera.
- Flujo completo **en modo simulación**: instrucción → tarea registrada → «Trabajando» (el agente va a su mesa y teclea) → resultado → entregable descargable → revisión → aprobación en dos toques. Misión nueva → etapas → el departamento en curso camina a Colaboración → traspasos → propuesta para el CEO. Error → agente desanimado → reintento.
- 14 pruebas nuevas de lógica (`tests/live-*.test.mjs`): A*, reglas de intención, flujo con el cliente simulado, exigencia de sesión y validación del enlace de acceso. Las 7 pruebas existentes de `scene-ui` y `state` siguen pasando.

### Implementado, pendiente de verificar
- **Conexión real con Supabase y Gemini** desde esta vista: inicio de sesión, lectura de la instantánea, `pulse-run`, `pulse-mission-control`, aprobaciones y URL firmadas. El código usa los mismos contratos que la app anterior, pero desde este entorno no hubo salida de red hacia Supabase ni jsDelivr.
- Entrada pegando el enlace del correo o con código de 6 dígitos (`verifyOtp`), alternativa a añadir la URL de la vista a Supabase Auth.
- **Safari en iPhone físico**: gestos táctiles reales, 60 fps, memoria y calidad adaptativa. Se probó con emulación táctil en Chromium y renderizado por software (unos 5 fps en el entorno de pruebas, sin GPU).
- `tests/enterprise.test.mjs` del prototipo anterior necesita `@supabase/supabase-js` instalado con npm, y el registro npm no estaba disponible en este entorno. Sus casos equivalentes están cubiertos en `live-flow.test.mjs` contra el nuevo adaptador.

### Simulado exclusivamente para pruebas
- `?demo=1`: cliente en memoria, franja amarilla permanente y prefijo «[Simulación]» en todo lo generado. No contacta con ningún servidor.
- El modo de captura (`?capture=1`) solo sirve para grabar el recorrido cuadro a cuadro.

### Todavía no implementado
- CRM, automatizaciones, PULSE STUDIO, estudio creativo y exportación PNG/ZIP dentro de la oficina: siguen en el centro anterior (puerta en la oficina del CEO).
- Memoria conversacional continua: cada instrucción es una tarea independiente de `pulse-run`.
- Colaboración autónoma entre agentes más allá de las etapas que registra `pulse-mission-control`.
- Suscripciones en tiempo real de Supabase: se usa sondeo (10 s, o 2.5 s con trabajo en curso).
- Agentes «por crear» que se desbloquean, como en el video.
- Combinar geometrías por sala para bajar las llamadas de dibujo (unas 270 por encuadre) si el iPhone lo necesitara.

## 6. Seguridad y límites respetados

Sin claves privadas. Sin escrituras en Supabase durante el desarrollo. Sin cambios en GitHub Pages, `main`, el media kit ni otros proyectos. Todo texto del servidor se escapa antes de insertarse en el DOM. Las decisiones del CEO piden confirmación en dos toques y solo se informan como hechas cuando el servidor devuelve la fila actualizada.
