# Auditoría de PULSE HQ · 21 de octubre de 2026

## Evidencia visual

Se inspeccionaron fotogramas de los tres vídeos de referencia y de la grabación actual. La referencia principal muestra un edificio isométrico claro con habitaciones amuebladas y personajes de escala pequeña. La aplicación actual muestra un área verde casi vacía; la navegación y paneles largos dominan. El sitio público se abrió en navegador, se observó el acceso privado y se reprodujo el modo demo vacío. No se inició sesión como CEO.

La causa inmediata del vacío está en `index.html`: `render()` buscaba `p3d-stage`, mientras la oficina anterior crea `pw-stage` en `office-world.js`. La rama corrige el selector; el sitio público no cambia. El antiguo `office-3d.js` repite arquitectura y representa personas mediante geometrías simples, por lo que la corrección del selector no resuelve por sí sola la meta artística.

## Evidencia de infraestructura

Se leyó el código y se consultó el proyecto Supabase `erluuujhgpreuuaskjwo` sin escribir. Postgres estaba activo; las tablas consultadas mostraron RLS. Existían diez contratos de roles y nueve funciones Edge desplegadas. Los recuentos observados fueron 37 tareas (35 completadas, 2 fallidas), 3 misiones (1 revisada, 1 pausada, 1 esperando al CEO), 33 pasos (26 completados, 7 pendientes), 11 aprobaciones (7 aprobadas, 2 rechazadas, 2 pendientes), 35 trabajos de entrega completados, 97 entregables, 2 trabajos creativos completados y dos ejecuciones programadas (1 completada, 1 omitida). Estos recuentos son una fotografía de datos, no prueba end-to-end de cada motor.

Dos tareas fallidas registran errores de límite 429 del proveedor de IA y Gemini 404. El asesor de seguridad informó protección de contraseñas filtradas desactivada y tabla `pulse_scheduler_credentials` sin política RLS; requieren evaluación específica antes de cualquier cambio. No se consultó ni expuso contenido secreto. No se ejecutó una misión nueva, generación Gemini, descarga autenticada ni aprobación porque no había sesión del CEO y podrían consumir cuota o alterar datos.

## Riesgos de integración

| Riesgo | Mitigación propuesta |
|---|---|
| Mostrar actividad antigua como actual | Estado `running` solo con registro del servidor y marca reciente; reconocer estados caducados. |
| Saltar autorización del CEO | Reutilizar sesión existente, RLS y función Edge; el cliente no lleva `service_role`. |
| Duplicar ejecuciones al navegar | UI consulta trabajos por identificador; operaciones mutantes siguen rutas actuales y requieren respuesta del servidor. |
| Romper CRM, aprobaciones o entregables | Sustituir la capa visual por etapas, con ruta previa disponible y pruebas autenticadas antes de fusionar. |
| WebGL ausente o perdido | Alternativa ilustrada navegable y directorio accesible. |
| Incompatibilidad móvil | Límite de DPR, carga de assets comprimidos, prueba física de Safari y memoria antes de la etapa C. |

## Plan de conexión, tras aprobación visual

1. Inventariar de forma autenticada las respuestas y permisos de `agents`, `agent_role_contracts`, `tasks`, `missions`, `mission_steps`, `approvals`, `deliverables` y CRM; confirmar esquema real y rutas Edge en la sesión del CEO.
2. Construir un adaptador de lectura que entregue datos normalizados a las fichas y mundo; suscripciones o actualización explícita con marcas temporales. Mantener etiquetas de actividad decorativa separadas de ejecución del servidor.
3. Enlazar comandos a los mismos flujos existentes de tareas, misiones y aprobaciones, con confirmación y control de errores del servidor; no escribir directamente en tablas privilegiadas.
4. Verificar permisos RLS y aislamiento de CEO, archivos descargables, límites, reintentos, modos sin conexión y regresiones en la aplicación original antes de considerar una fusión.

La rama nace de `962b88162e8ad3911e2a869713e4ddfab0f7f1ed`. Revertir el commit de la rama restaura exactamente los archivos previos; no hay migración ni cambio de datos.
