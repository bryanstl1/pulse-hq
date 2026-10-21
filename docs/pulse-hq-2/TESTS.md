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

El prototipo no implementa las diez áreas, el historial de tareas, descargas, aprobación real ni conexión con Supabase. Esos componentes pertenecen a las etapas C y D, condicionadas por validación visual. No se declaró completado el control de calidad de la aplicación final.
