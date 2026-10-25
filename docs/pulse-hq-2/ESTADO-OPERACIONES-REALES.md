# PULSE HQ · Estado de operaciones reales

## Actualización 25 oct 2026 (motor v5)

### Diagnóstico con registros reales (Supabase, 23 oct)
- **Chrome iOS** tenía sesión y usó la oficina: la misión `f621ee6e…` («Hola Ulises cómo estás», origen `office`) se creó de verdad, pero el motor convirtió un saludo en 4 etapas y Calidad exigió fuentes externas a una tarea interna de Iris → `needs_attention` tras 3 intentos (sin bucle infinito). Hubo un 429 de Gemini.
- **Safari iOS**: 10 solicitudes de enlace (`/auth/v1/otp`), 7 con **429** (límite de correos). El enlace llevó al centro anterior (Site URL), no a `/live/`. Ninguna solicitud de Safari llegó a las tablas de la oficina nueva → «Load failed» = solicitud cortada antes de llegar (típico al cambiar a Mail en iOS).
- **Congelamientos**: cada sondeo descargaba ~530 KB (textos completos de 57 tareas y todas las etapas) cada 10 s o 2.5 s, y redibujaba ~20 tableros y el panel aunque nada cambiara. Además, la calidad adaptativa *activaba* sombras cuando el teléfono iba lento.

### Cambios
- Motor v4/v5: respuesta directa de Ulises a saludos/preguntas breves (sin misión); evidencia externa solo en tareas marcadas `external`; 429 con `retryDelay`, ritmo de 2.5 s entre llamadas; cada etapa termina antes del límite de 150 s; corrección o reintento en la siguiente pasada con tiempo completo; planificación limitada a 3 fallos; Calidad no exige fuentes imposibles; acción `diag.files` (solo con token del programador).
- Migración `pulse_core_v2_result_preview` (columna generada de 600 caracteres en `pulse_tasks` y `pulse_mission_steps`).
- Oficina: sondeo ligero (`result_preview`), firma de cambios (0 redibujos en reposo, medido), sin sondeo en segundo plano, sombras desactivadas cuando va lento, recuperación de pérdida de WebGL, errores de red traducidos, enfriamiento de 60 s en el enlace de acceso, botón «Ya abrí el enlace» y detección de sesión al volver a la pestaña; PDF en visor, XLSX/MD como descarga.

### Verificado
- 35 pruebas locales pasan. Diagnóstico de archivos por URL firmada: PDF válido (5 páginas), XLSX válido (1 hoja, 16 filas, 12 fórmulas), cabeceras correctas y `Content-Disposition: attachment` en descarga.
- Respuesta directa real: misión `76ac6a53-39ba-413d-b159-1fda1d4275af`, 1 ejecución, 735 tokens, sin etapas.


## Desplegado
- Supabase `erluuujhgpreuuaskjwo`: función `pulse-core` **versión 3** (verify_jwt=false; el CEO se valida con JWT + PULSE_ALLOWED_EMAIL; la tarea programada usa token).
- Migraciones: `pulse_core_v1`, `pulse_core_v1_grants`, `pulse_core_v1_xlsx_bucket` (el bucket privado acepta XLSX).
- Tarea programada `pulse_core_tick` cada minuto (solo actúa si hay misiones core en planning/running).
- Rama `design/pulse-hq-2-live-office` al día. `main` (GitHub Pages) solo recibió la carpeta `live/` (commit 2548e08): vista previa en https://bryanstl1.github.io/pulse-hq/live/ — la página principal no cambió.

## Probado
- 30 pruebas locales (`node --test tests/live-*.test.mjs tests/scene-ui.test.mjs tests/state.test.mjs`): estados Recibiendo / Trabajando / Resultado recibido derivados de pulse_runs y pulse_agent_messages, invocación de pulse-core con origen «office», simulación separada y rotulada.
- RLS: el CEO lee sus 29 ejecuciones y 29 mensajes; otro usuario lee 0.
- Misión real lanzada **desde el backend** (no desde la oficina): `57501867-c8d9-4c57-96df-119e59eb3fc2`. 5 etapas (Iris, Rocco, Tomás, Kiki, Ulises), 29 ejecuciones de Gemini, ~50 400 tokens, Calidad devolvió una etapa (5/10) y aprobó las demás; 5 archivos en Storage: PDF 11 KB, XLSX 4 KB (fórmulas), 3 MD. Aprobación del CEO pendiente: `4edc4d84-a3a2-4ed1-89a9-2bbd8d5d85d8`.

## Pendiente (no declarado como éxito)
1. **Prueba desde la oficina**: aún no se ha enviado ninguna instrucción desde la oficina publicada. Es el criterio de éxito.
2. Verificar que Pages sirve `/live/` y que el inicio de sesión funciona ahí (si el enlace del correo abre la app anterior, copiarlo y pegarlo en «Acceso del CEO» o usar el código).
3. Calidad v3 es más exigente (≥3 fuentes y ≥3 consultas de evidencia para Iris). No se ha probado todavía en una misión: puede devolver más etapas.
4. La primera misión con motor v1/v2 aprobó todo con 10/10 (revisión demasiado indulgente); Iris usó solo 1 resumen de Wikipedia.
5. Las instrucciones de Iris no se pudieron actualizar en la tabla (la escritura se cancelaba); el método de investigación está en el código del motor.
6. Investigación limitada a Wikipedia y páginas públicas (sin clave de búsqueda web).
7. Protección de contraseñas filtradas de Supabase Auth desactivada (lo activa el dueño).

## Siguiente paso exacto
Abrir https://bryanstl1.github.io/pulse-hq/live/ en Safari → «Sin sesión» → Acceso del CEO → entrar → Dirección (Ulises) → Conversación → escribir el encargo (≥20 caracteres) → enviar. Después, en Supabase:
`select id,status from pulse_missions m where engine='core' and exists(select 1 from pulse_agent_messages a where a.mission_id=m.id and a.artifact->>'source'='office') order by created_at desc;`
y seguir pulse_runs / pulse_agent_messages / pulse_deliverables de esa misión hasta `awaiting_ceo`; descargar PDF y XLSX desde la biblioteca de la oficina.
