# PULSE HQ 2.0 · Oficina viva (`live/`)

Oficina 3D en tiempo real para Safari en iPhone. Sustituye en esta rama a los planos ilustrados con personajes superpuestos de `prototype/`; esa carpeta se conserva sin cambios como vía de reversión.

## Qué es

- **Escena 3D real** con Three.js r180 (incluido en `vendor/`, licencia MIT). Cámara en perspectiva estrecha que recorre una sola planta continua: 16 espacios unidos por un pasillo.
- **Deslizar** a izquierda o derecha mueve la cámara con el dedo por el pasillo; al soltar, se asienta en la sala más cercana con inercia. También hay flechas, puntos de navegación, teclado (← →), rueda o pellizco para el zoom y un directorio.
- **Mobiliario** Kenney Furniture Kit (CC0, `assets/furniture/`) más accesorios hechos por código (`src/world/props.js`): tableros, pantallas, racks, croma, escenario, etc.
- **Diez mascotas 3D procedurales** (búho, colibrí, gata, mapache, coneja, polilla, capibara, búho azul, tortuga y robot), con esqueleto animado por código: caminar, volar, sentarse, teclear, leer, pensar, saludar, desanimarse, celebrar y parpadear. En las fichas se reutilizan los retratos 2D que ya existían en el proyecto (`assets/portraits/`).
- **Navegación física**: cuadrícula de 20 cm con A* (`src/world/nav.js`). Muros, mamparas y muebles bloquean el paso; los agentes salen por la puerta de su sala, cruzan el pasillo y se sientan en la silla de su escritorio.

## Actividad: qué es real y qué no

| Lo que ves | De dónde sale |
|---|---|
| Agente sentado **tecleando**, lámpara verde, burbuja «Trabajando» | Tarea en `pulse_tasks` con estado `running`/`processing`/`in_progress` actualizada hace ≤ 15 min |
| Burbuja «!» y papeles con bandera en la bandeja del escritorio | Registros `pending` en `pulse_approvals` (el número de papeles sigue el recuento) |
| Agente desanimado en su mesa, burbuja «Falló» | Último encargo `failed` en las últimas 24 h; el panel ofrece reintentar |
| Agente que camina a **Colaboración** y conversa | Etapa de `pulse_mission_steps` en curso, sin cerrar, iniciada hace ≤ 30 min |
| Tableros de departamento, tablero de misiones, «Traspasos», pantalla del CEO | Dibujados con la última instantánea; sin sesión dicen «No consultado» |
| Agente que camina a su mesa justo después de enviar | Reacción **local** inmediata, etiquetada «Enviando instrucción · local» |
| Paseos a la planta, la ventana o la cafetera | **Ambiente** decorativo; se puede desactivar en la cafetera. Nunca teclea ni muestra estados |
| Pantallas de Comunidad e Inteligencia | Decorativas y rotuladas así |

`src/data/activity.js` concentra estas reglas y tiene pruebas (`tests/live-activity.test.mjs`).

## Flujos

- **Agente:** tocarlo → ficha con *Conversación*, *Trabajo* y *Perfil* → escribir instrucción → `pulse-run` registra y ejecuta la tarea → el agente se sienta y teclea mientras el servidor la marca en curso (sondeo cada 2.5 s) → resultado, entregable descargable (URL firmada de 120 s) y revisión con Aprobar/Rechazar (confirmación en dos toques).
- **Misión:** dock «Misiones» o mesa de juntas → título y objetivo → `pulse-mission-control` (`create`) → tablero de misiones y línea de traspasos por departamento → pausar, reanudar, reintentar o pedir revisión.
- **Objetos tocables:** escritorio (trabajo), bandeja (revisiones), tablero (misiones del departamento), archivero (entregables), escritorio y pantalla del CEO (estado de la empresa), puerta al centro anterior (CRM, estudio y automatizaciones) y cafetera (movimiento ambiental).

## Acceso del CEO

Enlace mágico de Supabase (`shouldCreateUser: false`), igual que la app anterior. Si la URL de esta vista no está entre los destinos permitidos de Supabase Auth, el correo abrirá la app anterior. En ese caso, en lugar de abrir el enlace, se copia y se pega en el panel de acceso: se valida con `verifyOtp({ token_hash })`. Si la plantilla del correo incluye un código de 6 dígitos, también sirve. No se modificó la configuración de Auth.

## Modo simulación (`?demo=1` o botón «Probar simulación»)

Cliente en memoria (`src/data/demo-client.js`) con la misma forma que supabase-js. No contacta con ningún servidor ni consume IA. Una franja amarilla permanente y el prefijo «[Simulación]» marcan todo lo que produce. Sirve para recorrer los flujos y grabarlos sin tocar producción. Para provocar una revisión, incluye «propuesta» en la instrucción; para ver un error, incluye «falla».

## Ejecutar

No necesita compilación. Cualquier servidor estático sirve:

```bash
cd live
python3 -m http.server 8080        # http://localhost:8080/  (usa dist/app.js)
#                                   http://localhost:8080/dev.html  (módulos fuente con import map)
```

`index.html` carga `dist/app.js` (687 kB minificado, unos 190 kB con gzip). Para regenerarlo después de editar `src/`, ejecuta `./tools/build.sh` (esbuild).

Pruebas de lógica (desde la raíz del repo): `node --test tests/live-*.test.mjs`.

## Rendimiento móvil

- Cerca de 270 llamadas de dibujo por encuadre. Three.js descarta las salas fuera de cámara y los muebles comparten materiales.
- Píxeles limitados a 2×. Calidad adaptativa: si la media pasa de ~25 ms por cuadro durante 2 s, baja la resolución por pasos (2 → 1.5 → 1.25 → 1).
- Una sola luz con sombra, que sigue a la cámara. Las animaciones de racks y escenario solo corren cerca de la cámara. El bucle se pausa con la pestaña oculta.
- Sin descargas pesadas: 36 GLB de 3 a 40 kB y 13 retratos WebP.

## Archivos

```
live/
  index.html, dev.html, styles.css
  src/main.js                 coordinación, paneles, sondeo, bucle
  src/world/scene.js          renderizador, cámara, gestos
  src/world/layout.js         planta y distribución de las 16 salas
  src/world/builder.js        construcción de la oficina y de la cuadrícula
  src/world/props.js          accesorios procedurales y superficies dinámicas
  src/world/surfaces.js       tableros y pantallas con datos
  src/world/mascots.js        mascotas y animación
  src/world/agents.js         comportamiento y rutas
  src/world/nav.js            A* (puro, probado)
  src/ui/overlay.js           etiquetas, burbujas y marcas tocables
  src/ui/panels.js            plantillas de paneles (todo texto del servidor escapado)
  src/data/enterprise.js      adaptador de Supabase (derivado de prototype/)
  src/data/activity.js        registros → intenciones visuales (puro, probado)
  src/data/demo-client.js     simulación en memoria
  vendor/                     three.js r180 + GLTFLoader (MIT)
  assets/                     muebles Kenney (CC0) y retratos del proyecto
```
