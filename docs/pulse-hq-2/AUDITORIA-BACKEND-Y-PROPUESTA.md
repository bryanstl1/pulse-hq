# Auditoría del backend de PULSE HQ y propuesta del núcleo multiagente

Fecha: 23 de octubre de 2026 · Auditoría de **solo lectura**. No se aplicó ningún cambio.

## 1. Proyecto verificado
- Organización: **FIXO** (`cxzklceermakufmyzuiy`).
- Proyecto: **PULSE HQ** · `erluuujhgpreuuaskjwo` · us-east-2 · Postgres 17 · ACTIVE_HEALTHY.
- En la misma organización existe **SELLA** (`fnhmdjyjprkwmojxvhfa`): no se consulta ni se modifica. STOCK RADAR PRO ya no es visible para el conector.

## 2. Qué existe hoy
**Tablas (26, todas con RLS):** `pulse_tasks` (41 completadas, 4 fallidas), `pulse_missions` (3), `pulse_mission_steps` (26 completadas, 7 pendientes), `pulse_approvals` (4 pendientes), `pulse_deliverables` (41 PDF, 41 Markdown, 27 SVG), `pulse_delivery_jobs`, `pulse_quality_reviews` (32 «needs_review» sin revisor, 9 «needs_revision»), `pulse_agent_roles` (contratos con instrucciones especializadas), CRM (organizaciones, contactos, oportunidades, actividades, documentos, recordatorios), estudio creativo (briefs, assets, jobs, reviews), ventures, programación y radar.

**Funciones Edge (9):** `pulse-run` (v13), `pulse-mission-control`, `pulse-mission-worker`, `pulse-autopilot`, `pulse-scheduled`, `pulse-deliverable-worker`, `pulse-creative-worker`, `pulse-venture-studio`, `pulse-app`.

**Infraestructura disponible:** `pg_cron`, `pg_net`, Vault y `pgcrypto` instalados; `vector` y `pgmq` disponibles sin instalar. Las tareas automáticas autentican con la cabecera `x-pulse-scheduler-token`, validada contra `pulse_scheduler_credentials` (sin políticas: solo accesible con la clave de servicio, lo cual es correcto).

**Tareas programadas activas:** cada hora (`pulse-scheduled`), misiones cada 5 min, entregables cada 10 min, estudio creativo cada 15 min, seguimiento CRM diario. Venture semanal desactivado.

**Motor de IA actual:** una sola llamada a Gemini (`gemini-3.5-flash-lite`, secreto `GEMINI_API_KEY`) por tarea, sin herramientas, sin memoria y sin búsqueda: la búsqueda con Google no está disponible en el plan gratuito, y el sistema ya lo declara con «SIN VERIFICAR». Errores recientes: 503, timeout, 404 y 429 del proveedor. Límite: 20 tareas al día y 2 en paralelo. Solo la cuenta de `PULSE_ALLOWED_EMAIL` puede ejecutar.

**Entregables actuales:** PDF con `pdf-lib`, a partir del texto. Son reales y descargables, pero son texto convertido a PDF, sin diseño editorial ni hojas de cálculo.

**Avisos de seguridad:** protección de contraseñas filtradas desactivada (WARN, ajuste de Auth en el panel). `pulse_scheduler_credentials` sin políticas (INFO, intencional).

## 3. Diagnóstico frente a la misión
| Capacidad | Hoy | Falta |
|---|---|---|
| Inferencia real | Sí (Gemini, una llamada) | Multiproveedor, reintento, validación estructurada, registro de uso |
| Orquestación | Pasos lineales por departamento | Plan con dependencias, delegación por agente, supervisión y replanteo |
| Comunicación | No existe | Mensajes estructurados por misión y tarea |
| Memoria | No existe | Memoria de agente, misión, compartida y organizacional |
| Herramientas | Ninguna en la ejecución | Registro de herramientas con permisos y evidencia |
| Calidad | Tabla sin revisor automático | Revisor con criterios por tipo y ciclo de corrección |
| Entregables | PDF de texto | PDF editorial y XLSX con fórmulas, versionados |
| Autonomía | Cron + workers | Cola con reclamación de tareas e idempotencia |
| Auditoría | Parcial | `pulse_runs` y `pulse_tool_calls` de principio a fin |

## 4. Propuesta (aditiva y reversible)

### 4.1 Migración `pulse_core_v1`: solo crea, no borra ni altera datos
Tablas nuevas, con RLS `user_id = auth.uid()` en lectura y escritura solo desde el backend:
- `pulse_agents`: agentes lógicos (Ulises, Kiki, Mía, Rocco, Lila, Luz, Cata, Iris, Tomás, Bit, más «Calidad» como revisor sin personaje). Incluye departamento, instrucciones, herramientas permitidas, nivel de modelo, límites e indicadores.
- `pulse_core_tasks`: subtareas de una misión del motor nuevo, con agente, estado, intento, reclamación (`claimed_at` y `claim_id`), criterios, formato de salida, resultado y artefacto.
- `pulse_task_deps`: dependencias entre subtareas.
- `pulse_agent_messages`: remitente, destinatario, misión, tarea, tipo (`request`, `result`, `review`, `feedback`, `decision`, `blocker`, `notice`), contenido y artefacto.
- `pulse_memory`: alcance (`agent`, `mission`, `shared`, `org`), tipo (`fact`, `hypothesis`, `decision`, `result`), contenido, fuente, verificado y caducidad.
- `pulse_runs`: cada llamada a modelo, con fase, proveedor, modelo, tokens, latencia, estado y error.
- `pulse_tool_calls`: entrada, salida, éxito, error y duración de cada herramienta.
- `pulse_ai_usage`: consumo diario por proveedor, para cortar al llegar al límite.

Columnas nuevas, opcionales y nulas por defecto: `pulse_missions.engine/plan/budget_tokens/spent_tokens/max_iterations/deadline_at/owner_agent`, y `pulse_deliverables.mission_id/agent_id/version/review_status/size_bytes`. Las misiones del motor nuevo usan los estados `planning`, `running`, `reviewing`, `completed`, `failed`, `cancelled` y `paused`. El trabajador antiguo solo toma `active`, así que **no hay choque**. Se incluye el script de reversión (`drop` de lo nuevo).

### 4.2 Función Edge nueva `pulse-core`: no reemplaza ninguna existente
- **Motor de IA** con adaptadores intercambiables (Gemini; Groq y OpenRouter solo si existen sus secretos). Selección por complejidad, reintento con espera creciente y cambio de proveedor ante 429/5xx, validación de JSON, detección de respuestas incompletas y registro en `pulse_runs`.
- **Ulises orquestador**: plan en JSON validado (subtareas, agente, dependencias, criterios y formato) → delegación → supervisión → replanteo ante bloqueos → consolidación.
- **Ciclo de agente**: analizar → planificar → actuar (herramientas) → observar → evaluar → corregir (máximo 2 vueltas) → finalizar.
- **Herramientas iniciales** (sin claves de pago):
  - `wikipedia_search` y `wikipedia_summary`, con URL verificable.
  - `fetch_url`, lectura de páginas públicas con límite de tamaño y tiempo, y sin acceso a redes internas ni secretos.
  - `calculator`.
  - `read_artifact`, para reutilizar resultados de otros agentes.
  - `memory_read` y `memory_write`.
  - `create_pdf`: PDF editorial con portada, secciones, tablas y fuentes, hecho con `pdf-lib`.
  - `create_xlsx`: hoja con fórmulas reales.
- **Revisor de calidad**: criterios por tipo (estrategia, investigación, hoja de cálculo). Devuelve con observaciones concretas o aprueba. Nada se entrega sin aprobación.
- **Cola y autonomía**: reclamación atómica de tareas (`update … where claimed_at is null returning`), idempotencia y límites por misión (tokens, iteraciones, tiempo) y por agente. Acciones: crear, consultar, pausar, reanudar y cancelar.

### 4.3 Tarea programada nueva
- `pulse_core_tick` cada minuto: llama a `pulse-core` con el mismo token del programador y procesa como máximo N tareas por ejecución. No toca las tareas existentes.

### 4.4 Prueba de extremo a extremo real
Misión de referencia: «Ulises, desarrolla una estrategia comercial profesional para conseguir colaboraciones con marcas de música electrónica».
1. Iris investiga con Wikipedia y lectura de páginas públicas, con fuentes reales.
2. Kiki diseña la estrategia de marketing usando lo que encontró Iris.
3. Rocco arma la propuesta comercial.
4. Tomás prepara un presupuesto en XLSX.
5. Calidad revisa y devuelve lo que no cumpla.
6. Ulises consolida un PDF editorial.

Todo queda en `pulse_runs`, `pulse_tool_calls` y `pulse_agent_messages`, y los archivos se guardan en el bucket privado `pulse-deliverables`.

## 5. Límites reales y decisiones
- **Búsqueda web general**: sin claves de pago, la investigación se limita a Wikipedia y a páginas públicas leídas directamente. Para buscadores generales (por ejemplo Tavily, con plan gratuito) hace falta una clave creada por el CEO.
- **Proveedores**: solo se usarán los que tengan secreto configurado. Hoy existe `GEMINI_API_KEY`. Los límites del plan gratuito de Gemini (los 429 ya registrados) pueden frenar misiones largas; el motor espera y reintenta, sin gastar.
- **Duración de funciones Edge**: cada ejecución procesa un paso corto; la misión avanza por la tarea programada de cada minuto y no depende de Safari.
- **Coste**: no se activan planes ni servicios de pago.
