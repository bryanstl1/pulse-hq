# Comprobaciones de la etapa B

| Comprobación | Resultado y alcance |
|---|---|
| `npm run build` | Superado; Vite 7.1.12 empaquetó 12 módulos. JS 616,22 kB bruto / 161,80 kB gzip. Carpeta `dist` ~2,8 MB. |
| `npm test` | 4/4: desconectado, ejecución antigua, revisión registrada y ejecución reciente explícita. |
| Navegador de escritorio | Se abrió la vista previa local gestionada. Se vio la oficina ilustrada de cinco habitaciones y se guardaron capturas auténticas. Selección de sala y de agente, inspector, navegación y controles de zoom comprobados. |
| Falla de WebGL | El navegador de revisión denegó `WebGLRenderer`; apareció la alternativa ilustrada sin pantalla vacía. No equivale a validar la escena 3D. |
| Datos empresariales | Consultas de auditoría de solo lectura; ninguna ejecución mutante. Persistencia y flujo end-to-end pendientes. |
| Safari iPhone, FPS y memoria | Pendientes de dispositivo real. El CSS es adaptable y el código contiene gestos y límite de DPR, pero esas propiedades aún no certifican su experiencia. |
| Calidad visual | Las capturas muestran salas, mobiliario y personajes distinguibles; la alternativa ilustrada es más plana y menos detallada que el objetivo final. La aprobación artística del CEO y la prueba 3D real son condiciones para ampliar las diez áreas. |

Revisión de personajes del 21 de octubre: se sustituyeron las apariencias visibles en la alternativa ilustrada y los retratos por cinco personajes pixel art originales. Se comprobó en navegador la escena con los cinco, se abrió la ficha de Sofía y se guardó una captura nueva. `npm run build` y `npm test` volvieron a pasar (4/4). La ruta WebGL emplea planos orientados a cámara con el mismo atlas, pero su renderizado aún no se pudo observar en este navegador.

Revisión de navegación móvil: en una vista compacta de 390 × 844 px del navegador se observó una sala central con su personaje, se pulsó la flecha hacia Estudio, se arrastró horizontalmente hacia Tecnología y se abrió la ficha inferior de Nicolás. Se corrigió la posición del panel en la vista de revisión. `npm run build` y `npm test` pasaron (4/4). La captura es del navegador ejecutando la aplicación. La interacción táctil y el rendimiento en Safari físico siguen pendientes de prueba; el arrastre comprobado aquí fue con puntero de navegador.

Pulido de salas: se sustituyó el recorte del mapa compartido en móvil por cinco escenas ilustradas individuales y se comprobaron visualmente Dirección, Estudio, Tecnología, Encuentro y Juntas en el navegador. La revisión detectó que la transformación de escala de una sala inactiva alteraba el cálculo de anchura y desplazaba las salas posteriores; ahora se usa el ancho de diseño para centrar cada una. El módulo 3D se carga solo en escritorio. La diferencia estética entre los agentes pixel art y la ilustración pintada queda abierta a la valoración del CEO.

El prototipo no implementa las diez áreas, el historial de tareas, descargas, aprobación real ni conexión con Supabase. Esos componentes pertenecen a las etapas C y D, condicionadas por validación visual. No se declaró completado el control de calidad de la aplicación final.

## Expansión móvil posterior a la aprobación visual

El catálogo móvil ahora muestra diez departamentos y seis espacios especiales; el edificio de escritorio mantiene cinco ambientes. `npm run build` terminó con Vite 7.1.12: módulo principal 24,83 kB bruto / 9,43 kB gzip y módulo 3D separado 586,79 kB bruto / 152,03 kB gzip. `npm test` pasó 4/4, centrado en no atribuir ejecuciones ficticias. La carpeta `dist` mide aproximadamente 5,5 MB, con dieciséis imágenes de sala y los atlas de personajes.

Se abrió el navegador en una vista móvil de 390 × 844 px. Se inspeccionaron Dirección, Marketing, Finanzas, oficina del CEO, colaboración y descanso. Las imágenes completas se renderizaron, el selector saltó a las salas 02/16, 09/16, 11/16 y 16/16, y la ficha de Marketing mostró el retrato y la indicación «Sin conexión / No consultada». Se guardaron capturas reales de Marketing, oficina del CEO y descanso. La transición horizontal funciona mediante indicadores y flechas; la verificación de gesto táctil en Safari físico, FPS y memoria permanece pendiente.

El catálogo es visual: las diez apariencias no están vinculadas aún a contratos ni registros de agentes existentes. La conectividad de Supabase, las aprobaciones, los entregables y la persistencia no se han probado en esta expansión. El texto anterior sobre ausencia de diez áreas corresponde a la etapa B inicial y queda supersedido solo para el catálogo visual móvil.

## Revisión de pantalla completa

Tras la observación del CEO de que la sala se veía como tarjeta, se eliminó el marco móvil: cada imagen ocupa el viewport de la aplicación y los controles se superponen. Se revisaron Dirección y Marketing en el navegador con una vista de 390 × 844 px, incluida la transición 01/16 → 02/16 y la lectura del título sobre la imagen. `npm run build` y `npm test` pasaron (4/4). La interfaz propia del visor de ChatGPT que aparece fuera de la página en el iPhone no forma parte de PULSE HQ.

## Integración del avatar y motor empresarial (22 de octubre de 2026)

`npm run build` terminó correctamente: Vite empaquetó 60 módulos; JS principal 262,44 kB / 73,13 kB gzip, módulo 3D separado 586,79 kB / 152,02 kB gzip. `npm test` pasó 8/8: cuatro pruebas de estados previas y cuatro nuevas sobre ausencia de ejecución sin sesión, llamada exacta a `pulse-run`, rechazo de aprobación concurrente y escape de datos del servidor.

Se inspeccionó el esquema real de seis tablas de Supabase mediante consulta de solo lectura y se compararon columnas con las consultas nuevas. Se abrió la vista móvil local en navegador; tocar a Valeria abrió el panel de agente con estado «Actividad no consultada» y acceso del CEO; la pestaña Misiones mostró el acceso sin registros ficticios. Las capturas son del navegador. No se envió correo mágico, no se ejecutó Gemini ni se mutó dato empresarial; el flujo autenticado necesita URL de retorno permitida en Supabase Auth. Safari físico, medición de memoria y comportamiento real de Edge quedan pendientes.

El estado `running` solo mueve visualmente al personaje si hay un registro reciente del servidor. El centro empresarial anterior sigue disponible para las capacidades que faltan en el nuevo panel. No se tocó GitHub Pages ni el código de las funciones desplegadas.

## Reconstrucción espacial (23 de octubre de 2026)

La escena principal de móvil y escritorio ahora utiliza dos planos ilustrados conectados, con diez departamentos en el primero y seis espacios especiales en el segundo. Los agentes quedan colocados en coordenadas del suelo; el movimiento de cámara recorre el plano. Esta versión sustituyó la navegación de imágenes independientes después de comparar el prototipo con el video: la captura del video mostraba habitaciones contiguas, corredores, paredes bajas, mobiliario específico y varios personajes pequeños visibles simultáneamente.

`npm run build` y `npm test` pasaron (14/14). En la previsualización interna del paquete publicado se observó el edificio principal completo en escritorio y una sala por encuadre compacto de 390 px. Se comprobó la transición Dirección → Marketing mediante flecha y arrastre horizontal, la selección del personaje Estratega y su ficha contextual sobre el mundo. El directorio mostró 16 espacios; abrir la oficina del CEO cambió al ala ejecutiva y centró su sala. La primera revisión encontró que la ficha contextual no se dibujaba en el modo compacto de revisión, aunque aparecía en el árbol accesible. Se corrigió su CSS y se comprobó con una captura nueva. La segunda revisión mejoró el contraste del subtítulo sobre el arte.

Se guardaron capturas reales de la aplicación funcionando: edificio completo, Marketing en vista compacta y ficha de Estratega. La vista compacta emula anchura de iPhone en navegador de escritorio; no equivale a Safari físico. El enlace privado de Sites exige inicio de sesión de ChatGPT en el navegador del agente, por lo que la inspección interactiva se hizo con el servidor interno de previsualización sobre los mismos archivos compilados. La implementación no prueba Gemini, persistencia, RLS, autenticación con la otra cuenta ni rendimiento y memoria en iPhone. Los retratos pixel art aún contrastan con el fondo ilustrado y quedan sujetos a aprobación visual del CEO.
