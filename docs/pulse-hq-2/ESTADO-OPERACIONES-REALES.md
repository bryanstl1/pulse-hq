# PULSE HQ · Estado de operaciones reales (23 oct 2026, 15:10 Monterrey)

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
