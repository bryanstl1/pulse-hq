# PULSE HQ 2.0 — muestra visual aislada

Esta aplicación permite recorrer los diez departamentos y seis espacios especiales ilustrados en móvil, abrir fichas de habitaciones y personajes, y consultar misiones registradas. La vista móvil actual muestra dos planos de oficinas conectadas: diez departamentos en la planta principal y seis espacios en el ala ejecutiva. Una cámara recorre cada plano al deslizar a izquierda o derecha; también hay flechas, arrastre, pellizco y controles de zoom. Las salas son zonas interactivas del mismo suelo, no tarjetas con una imagen por pantalla. En escritorio aparece la planta completa y al abrir una sala la cámara se acerca; el cambio de ala conserva la navegación. La oficina incorpora un adaptador para los motores existentes de Supabase. Con sesión del CEO, cada personaje muestra Conversación, Trabajo y Perfil: encargos y respuestas guardados, tareas en curso, revisiones, participación en misiones y contrato profesional. Enviar una instrucción llama a `pulse-run`; el hilo no es mensajería en tiempo real y una instrucción nueva no hereda automáticamente el contexto de la anterior. Misiones, aprobaciones y entregables usan los registros y funciones actuales. Sin sesión, los estados se marcan como no consultados y no se simula actividad. Los nombres y apariencias de los personajes son provisionales.

En móvil, la cámara centra un departamento por vez, mientras el plano contiguo permanece alrededor. El nombre, la navegación y el acceso a la ficha flotan sobre la escena; la barra inferior abre las vistas secundarias. Al pasar del departamento diez al ala ejecutiva cambia el plano de forma explícita. La vista previa privada de Sites añade sus propios controles del navegador fuera de la aplicación.

## Ejecutar

```bash
cd prototype
npm ci
npm run dev
```

Abre la dirección local que imprima Vite, normalmente `http://localhost:5173/`. Para revisar desde un iPhone en la misma red, ejecuta el servidor en una computadora con `npm run dev -- --host 0.0.0.0`, identifica la IP local de esa computadora y abre `http://IP_LOCAL:5173/` en Safari. El firewall debe permitir el puerto. Comprueba el deslizamiento horizontal en ambos sentidos, flechas, arrastre, zoom, selección de sala y agente, y el panel inferior. La vista principal usa ilustraciones navegables y no necesita WebGL. En caso de carga fallida, vuelve a la vista anterior de habitaciones individuales en móvil o a un mapa ilustrado en escritorio.

`npm run build` crea los archivos estáticos en `dist/`. `npm test` verifica que los estados visuales no inventen trabajo, el adaptador de tareas, la aprobación condicionada y el escape de contenido del servidor. Si falla la carga de uno de los planos móviles, vuelve a la navegación anterior de habitaciones independientes. La revisión visual automatizada de esta versión quedó bloqueada por la pantalla de inicio de sesión de la vista privada; una prueba física en iPhone sigue pendiente. La compilación y las pruebas de lógica no certifican el aspecto renderizado.

## Recursos

- [Kenney Furniture Kit](https://kenney.nl/assets/furniture-kit): muebles GLB e ilustraciones isométricas usados en la oficina. Licencia CC0; copia en `public/assets/furniture/LICENSE-KENNEY.txt`.
- `pulse-agents-pixel-atlas-v1.webp`: cinco personajes originales de pixel art generados para esta dirección visual, inspirados en la variedad y acabado de la referencia aportada por el CEO. No reproducen personajes ni marcas de la captura. Se usan en la oficina y en las fichas; no representan actividad real.
- `team-a-atlas-v1.webp` y `team-b-atlas-v1.webp`: ocho personajes conceptuales adicionales para la navegación móvil, distribuidos en cuatro celdas por archivo. La estética de los personajes es original; las etiquetas de rol no identifican agentes del backend.
- [Kenney Mini Characters](https://kenney.nl/assets/mini-characters): recursos de exploración anterior conservados en la rama, actualmente no cargados por la interfaz. Licencia CC0; copia en `public/assets/characters/LICENSE-KENNEY.txt`.
- `office-map.webp` se compuso a partir de las vistas de Furniture Kit y recursos dibujados para esta muestra. No contiene datos de producción.
- `public/assets/mobile-rooms/*.webp`: dieciséis habitaciones originales generadas con la herramienta integrada de imágenes para esta muestra y optimizadas a WebP. Cada sala tiene mobiliario propio; los personajes se superponen como elementos interactivos en los diez departamentos. No contienen datos empresariales. La procedencia y los prompts de la expansión se documentan en `../docs/pulse-hq-2/ASSETS-MOBILE.md`.
- `public/assets/world/departments-v2.webp` y `special-v2.webp`: planos de dos alas originales generados con la herramienta integrada de imágenes y comprimidos a WebP. El primero representa diez departamentos conectados por un pasillo; el segundo, seis espacios especiales. No contienen caracteres ni datos empresariales. Los agentes son botones animados independientes superpuestos en coordenadas del plano. La escena todavía es 2.5D, no una simulación 3D con navegación física entre los muebles.

La decisión visual y los criterios figuran en `../docs/pulse-hq-2/DESIGN.md`; la auditoría, integración y resultados están en el mismo directorio. Esta rama no se fusiona ni se publica en GitHub Pages hasta la aprobación del CEO.

## Integración empresarial en desarrollo

- El navegador usa la URL y clave **publicable** ya presentes en el cliente anterior. La autenticación, RLS y las comprobaciones de CEO en Edge siguen siendo la frontera de autorización. No se incluye ninguna clave privilegiada.
- `src/enterprise.js` aísla lecturas y mutaciones: `pulse_agent_roles`, `pulse_tasks`, `pulse_approvals`, `pulse_missions`, `pulse_mission_steps`, `pulse_deliverables`, Edge `pulse-run` y `pulse-mission-control`, y URL firmada de Storage. El panel muestra errores y conserva la última instantánea coherente.
- El flujo de enlace mágico en el dominio de la vista privada exige añadir exactamente esa URL a los destinos permitidos en Supabase Auth. Esta configuración de producción no se modificó. Una prueba autenticada con el CEO sigue pendiente; no hay prueba end-to-end de Gemini o persistencia desde esta vista.
- CRM, estudio creativo, automatizaciones, exportación PNG/ZIP y otras funciones del centro anterior conservan un enlace desde la oficina del CEO. Su operación **dentro** de la nueva oficina aún está pendiente. La aplicación anterior y sus funciones Edge no se modificaron.
- La vista privada de Sites tiene acceso restringido al propietario; no es la publicación pública de GitHub Pages.

## Recorrido contextual del agente

- En móvil, tocar un personaje abre una ficha sobre la habitación y conserva su posición. La ficha ordena revisiones pendientes, tareas activas, etapas de misiones y trabajos recientes a partir de la instantánea autenticada; cada entrada abre su registro. El botón de conversación lleva al encargo real mediante `pulse-run` y al historial registrado. Al cerrar el detalle se regresa a la misma sala y al mismo agente.
- Un indicador sobre el personaje muestra revisiones pendientes o ejecución reciente solo cuando hay registros del servidor. Sin sesión se indica «Actividad no consultada»; los personajes y sus nombres son representaciones visuales de departamentos, no identidades individuales verificadas en la base de datos.
- Esta interacción no demuestra por sí sola una conversación continua con memoria, un traspaso autónomo entre agentes o una ejecución de Gemini en la vista privada. Esas rutas precisan una prueba de extremo a extremo con sesión autorizada del CEO. No se crearon misiones o tareas de prueba en producción.
