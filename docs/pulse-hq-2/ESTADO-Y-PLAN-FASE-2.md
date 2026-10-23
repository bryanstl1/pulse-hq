# PULSE HQ 2.0 · Estado actual y plan técnico de la Fase 2

Fecha: 23 de octubre de 2026.

## 1. Estado guardado

| Dato | Valor |
|---|---|
| Repositorio | `bryanstl1/pulse-hq` |
| Rama de trabajo | `design/pulse-hq-2-live-office` (nace de `design/pulse-hq-2-contextual-agents` @ `ccd7d57`) |
| Último commit (local = remoto) | `4e301ec` · Fase 1: visitas, café, reacciones, sitios reservados, salas espejadas |
| Ramas intactas | `main`, GitHub Pages, `design/pulse-hq-2-contextual-agents`, `prototype/` |
| Vista previa | Artefacto de Claude «PULSE HQ», versión 4, en modo simulación |
| Pruebas | 21/21 de lógica (`tests/live-*.test.mjs`, `scene-ui`, `state`). `enterprise.test.mjs` del prototipo antiguo requiere npm, no disponible en el entorno |

### Commits de la rama
1. `87bbc97` Oficina 3D con agentes animados (Three.js r180, A*, mascotas, paneles, modo simulación).
2. `6cb926c` Conservación de campos y foco al redibujar; paquete JSON de muebles para la vista previa.
3. `dd28637` Capturas reales del recorrido.
4. `91a470c` Cámara: sin reencuadres tardíos y autocorrección; mascotas ×1.3; gestos ambientales.
5. `4e301ec` Fase 1: máquina de estados ambiental, visitas, café, reacciones, reservas, separación y salas espejadas.

### Fase 1: hecha
- Comportamiento por agente: puesto propio, visita a un compañero (ambos conversan), café en Descanso (máx. 3 fuera), siesta y regreso.
- Reserva de sitios, separación al caminar y arranque escalonado.
- Reacción 👏 de compañeros cercanos cuando un encargo **registrado** pasa a completado.
- Cinco departamentos con distribución espejada, además del mobiliario propio de cada sala.
- Cámara: el reencuadre diferido ignora paneles cerrados y se autocorrige cuando no hay panel. Corrige las salas en blanco que se vieron en el iPhone.
- Distinción ambiente/real: gestos grises para el ambiente; colores y textos «servidor» para los registros.

### Problemas conocidos y pendientes
- **Supabase**: el conector está con la cuenta que solo ve **STOCK RADAR PRO** (`lbmcwrbaetnlcpbhbamf`). El proyecto de PULSE HQ (`erluuujhgpreuuaskjwo`) devuelve «sin permiso». No se hizo ninguna operación en STOCK RADAR PRO.
- Integración real (sesión del CEO, `pulse-run`, misiones, aprobaciones, descargas) implementada en el cliente, pero **no verificada de extremo a extremo**.
- Safari físico: sin medir fps ni memoria de forma instrumentada; solo la grabación del CEO.
- Pruebas automáticas de cámara: verificadas con scripts de navegador en el entorno, todavía no integradas al repositorio.
- Cada instrucción a `pulse-run` es independiente; no hay memoria conversacional.
- CRM, automatizaciones y PULSE STUDIO siguen en el centro anterior.

## 2. Condiciones antes de tocar el backend

1. Reconectar el conector de Supabase con la cuenta propietaria de PULSE HQ, o invitar a la otra cuenta a esa organización.
2. Verificar con `list_projects` que el proyecto sea `erluuujhgpreuuaskjwo` («PULSE HQ»). Toda llamada usará ese identificador de forma explícita.
3. Auditoría de solo lectura: tablas, columnas, RLS, funciones Edge (código y versión), extensiones (`pg_cron`, `pg_net`), registros de errores y avisos de seguridad.
4. Reporte con las migraciones propuestas y el código de las funciones. **Nada se aplica sin aprobación.**
5. Claves de proveedores gratuitos (Groq, OpenRouter): las guarda el CEO en Edge Functions → Secrets, nunca en el chat ni en el navegador.

## 3. Arquitectura de la Fase 2

### 3.1 Principios
- Toda la inteligencia corre en **funciones Edge de Supabase**. El navegador solo lee estado (con RLS) y envía órdenes autenticadas.
- Cada paso de un agente deja un **registro verificable** (`pulse_runs`). La oficina anima solo a partir de esos registros.
- Las tablas existentes se conservan (`pulse_tasks`, `pulse_missions`, `pulse_mission_steps`, `pulse_approvals`, `pulse_deliverables`, `pulse_agent_roles`, CRM). Se **amplían** con columnas o tablas nuevas; no se reemplazan ni se borran datos.
- Límites estrictos de iteraciones, tiempo, tokens y presupuesto por misión.

### 3.2 Modelo de datos (tablas nuevas, todas con RLS `user_id = auth.uid()`)
| Tabla | Para qué |
|---|---|
| `pulse_agents` | Identidad visual y profesional (Ulises, Kiki…), departamento, instrucciones, herramientas permitidas, modelo preferido. Enlaza con `pulse_agent_roles`. |
| `pulse_threads` / `pulse_messages` | Conversación CEO↔agente y agente↔agente; `kind` (ceo, agent, tool, system), `task_id`/`mission_id`, adjuntos y estado del streaming. |
| `pulse_runs` | Cada ejecución: agente, fase del ciclo (comprender, planificar, ejecutar, evaluar, corregir, entregar), modelo, tokens, coste estimado, duración, error. |
| `pulse_task_deps` | Dependencias entre tareas de una misión (DAG). |
| `pulse_memory` | Memoria por agente y por misión: hechos, decisiones, resúmenes; con `embedding` si `pgvector` está disponible. |
| `pulse_reviews` | Revisión de calidad: criterios, puntuación, observaciones, veredicto (aprobar o devolver). |
| `pulse_deliverable_versions` | Versiones de cada entregable con ruta en Storage, formato, tamaño, hash y revisión asociada. |
| `pulse_automations` | Misiones programadas o recurrentes, disparadores y límites. |
| `pulse_events` / `pulse_audit` | Eventos para notificaciones y auditoría de acciones sensibles. |
| `pulse_budget` | Consumo por día y proveedor; corta la ejecución al superar el límite. |

### 3.3 Funciones Edge
| Función | Responsabilidad |
|---|---|
| `pulse-orchestrator` (Ulises) | Recibe la misión. Interpreta objetivo y restricciones, crea el plan (tareas y dependencias), elige departamentos, delega, supervisa, pide correcciones, consolida y notifica. |
| `pulse-agent-step` | Ejecuta **un paso** de un agente: arma el contexto (rol, memoria, mensajes, artefactos previos), llama al modelo, ejecuta herramientas y registra `pulse_runs`. Idempotente y reanudable. |
| `pulse-quality` | Revisa cada entregable contra criterios explícitos: exactitud, integridad, coherencia, fuentes, formato y cumplimiento del encargo. Devuelve al agente o aprueba. |
| `pulse-deliver` | Genera archivos reales: PDF editorial, XLSX con fórmulas, PPTX, DOCX, ZIP y código. Los sube a Storage con su versión. Amplía `pulse-deliverable-worker`. |
| `pulse-scheduler` | La invoca `pg_cron` cada minuto: avanza misiones pendientes, automatizaciones y reintentos con espera creciente. Funciona sin el navegador abierto. |
| `pulse-chat` | Conversación con streaming (SSE). Responde «¿qué estás haciendo?» leyendo el estado real de tareas y runs. |
| Se conservan | `pulse-run`, `pulse-mission-control` y `pulse-autopilot`, adaptados como fachada del nuevo motor para no romper la app anterior. |

### 3.4 Ciclo de trabajo de cada agente
Recibir → Comprender (resumen y criterios) → Planificar (pasos y herramientas) → Ejecutar → Evaluar (autoevaluación) → Corregir (máx. 2 vueltas) → Entregar → Calidad.
Cada flecha es un registro en `pulse_runs`. Nada pasa a «entregado» sin una revisión aprobada en `pulse_reviews`.

### 3.5 Ulises como director de operaciones
1. Pide al modelo un plan **estructurado en JSON** validado con un esquema: tareas, departamento, dependencias, criterios de aceptación y formato del entregable.
2. Inserta tareas y dependencias. `pulse-scheduler` ejecuta las que no tienen dependencias pendientes, con concurrencia limitada.
3. Los resultados viajan como mensajes con referencia al artefacto, que el siguiente agente recibe como contexto.
4. Bloqueos: si un agente falla dos veces o la revisión lo rechaza tres veces, Ulises replantea la tarea o pide ayuda al CEO.
5. Pide aprobación del CEO solo para acciones sensibles: gastos, publicaciones externas, eliminaciones e irreversibles (lista cerrada en código).

### 3.6 Herramientas por departamento (acceso controlado)
- **Inteligencia de mercado**: búsqueda web (proveedor con nivel gratuito o fuentes RSS y APIs públicas), lectura de URL y extracción de citas con URL verificable.
- **Dirección**: planificación, matrices y priorización.
- **Marketing, Contenido y Comunidad**: calendario editorial (XLSX) y guiones (DOCX/PDF).
- **Ventas y Alianzas**: propuesta comercial (PDF/PPTX) y lectura del CRM existente.
- **Finanzas**: presupuesto y proyección (XLSX con fórmulas reales).
- **Tecnología**: generación de código con pruebas en sandbox (Deno) y ZIP descargable.
- **Calidad**: el rol lo asume `pulse-quality`, con criterios por tipo de entregable.

### 3.7 Modelos y costos
- Enrutador por complejidad: tareas simples con modelos rápidos y gratuitos (Groq, OpenRouter `:free`); planificación y revisión con Gemini.
- Proveedores intercambiables detrás de una interfaz única; reintento con otro proveedor ante 429/5xx.
- Caché por hash del prompt, recorte de contexto con resúmenes y presupuesto diario por usuario en `pulse_budget`.
- Sin planes de pago ni gastos sin autorización explícita.

### 3.8 Oficina conectada a la IA real
- La oficina lee `pulse_runs` y `pulse_messages` (Realtime de Supabase o sondeo). Teclear, investigar (con libro), reunirse en Colaboración y entregar al CEO se animan solo con registros vigentes.
- Notificación al terminar una misión y biblioteca de proyectos con versiones, revisión y descarga.

## 4. Seguridad
- RLS en todas las tablas nuevas. Se corrigen los avisos previos (`pulse_scheduler_credentials` sin RLS y la protección de contraseñas filtradas), con aprobación.
- Claves de IA solo en secretos de Edge Functions. El navegador usa únicamente la clave publicable.
- Auditoría de acciones sensibles y lista cerrada de acciones que requieren al CEO.

## 5. Pruebas y criterios de aceptación
- Pruebas unitarias del enrutador, el planificador (validación de JSON), el DAG, presupuesto y límites.
- Prueba de extremo a extremo **real** con un objetivo pequeño: Ulises planifica, al menos dos agentes colaboran, calidad devuelve y luego aprueba, se generan PDF y XLSX descargables y queda evidencia en `pulse_runs`.
- Automatización probada con el navegador cerrado (`pg_cron`).
- Se reportará expresamente cualquier integración que no pueda probarse por falta de credenciales.

## 6. Orden de implementación (por sesiones)
1. Reconexión, verificación del proyecto, auditoría de solo lectura y reporte.
2. Migraciones aprobadas (tablas, RLS e índices) y enrutador de modelos con presupuesto.
3. `pulse-agent-step` y `pulse-quality`, con una tarea individual real de extremo a extremo.
4. `pulse-orchestrator` y `pulse-scheduler` (`pg_cron`), con una misión multiagente real.
5. `pulse-deliver` (PDF, XLSX, PPTX) y biblioteca con versiones.
6. `pulse-chat` con streaming y oficina conectada a runs y mensajes.
7. Automatizaciones recurrentes, notificaciones y pruebas finales en iPhone.
