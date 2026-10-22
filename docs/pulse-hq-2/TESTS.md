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
