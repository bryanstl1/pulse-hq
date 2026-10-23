-- PULSE HQ · núcleo multiagente v1 (aditivo: no borra ni altera datos existentes)
-- Reversión: ver 20261023200000_pulse_core_v1.down.sql

-- 0) Ampliar (sin quitar valores) las restricciones que el motor nuevo necesita
alter table public.pulse_missions drop constraint pulse_missions_status_check;
alter table public.pulse_missions add constraint pulse_missions_status_check check (status = any (array[
  'active','paused','needs_attention','awaiting_ceo','reviewed','revision_requested','completed',
  'planning','running','reviewing','cancelled','failed']));
alter table public.pulse_deliverables drop constraint pulse_deliverables_mime_type_check;
alter table public.pulse_deliverables add constraint pulse_deliverables_mime_type_check check (mime_type = any (array[
  'image/svg+xml','application/pdf','text/markdown',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']));
alter table public.pulse_deliverables drop constraint pulse_deliverables_variant_check;
alter table public.pulse_deliverables add constraint pulse_deliverables_variant_check check (variant = any (array[
  'report_pdf','report_markdown','post_portrait','story_vertical','post_square','spreadsheet_xlsx']));
alter table public.pulse_deliverables drop constraint pulse_deliverables_source_type_check;
alter table public.pulse_deliverables add constraint pulse_deliverables_source_type_check check (source_type = any (array[
  'generated_template','authored_report','agent_generated']));

-- 1) Agentes lógicos (configuración global, lectura para usuarios autenticados)
create table if not exists public.pulse_agents (
  id text primary key,
  name text not null,
  department text,
  species text,
  role text not null,
  responsibilities text not null,
  instructions text not null,
  tools text[] not null default '{}',
  model_tier text not null default 'fast' check (model_tier in ('fast','smart')),
  max_steps int not null default 4,
  active boolean not null default true,
  updated_at timestamptz not null default now()
);
alter table public.pulse_agents enable row level security;
create policy pulse_agents_read on public.pulse_agents for select to authenticated using (true);

-- 2) Mensajes estructurados entre agentes
create table if not exists public.pulse_agent_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  mission_id uuid references public.pulse_missions(id) on delete cascade,
  step_id uuid references public.pulse_mission_steps(id) on delete set null,
  from_agent text not null,
  to_agent text not null,
  kind text not null check (kind in ('request','result','review','feedback','decision','blocker','notice','info_request')),
  content text not null,
  artifact jsonb,
  created_at timestamptz not null default now()
);
create index if not exists pulse_agent_messages_mission_idx on public.pulse_agent_messages(mission_id, created_at);
alter table public.pulse_agent_messages enable row level security;
create policy pulse_agent_messages_owner on public.pulse_agent_messages for select to authenticated using (user_id = auth.uid());

-- 3) Memoria empresarial
create table if not exists public.pulse_memory (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  scope text not null check (scope in ('agent','mission','shared','org')),
  agent_id text references public.pulse_agents(id),
  mission_id uuid references public.pulse_missions(id) on delete cascade,
  kind text not null check (kind in ('fact','hypothesis','decision','result','preference')),
  content text not null,
  source_url text,
  verified boolean not null default false,
  created_by text not null,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists pulse_memory_lookup_idx on public.pulse_memory(user_id, scope, mission_id);
alter table public.pulse_memory enable row level security;
create policy pulse_memory_owner on public.pulse_memory for select to authenticated using (user_id = auth.uid());

-- 4) Ejecuciones de modelos y herramientas (auditoría)
create table if not exists public.pulse_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  mission_id uuid references public.pulse_missions(id) on delete cascade,
  step_id uuid references public.pulse_mission_steps(id) on delete set null,
  agent_id text,
  phase text not null,
  provider text,
  model text,
  input_tokens int,
  output_tokens int,
  latency_ms int,
  status text not null check (status in ('ok','error','retry')),
  error text,
  created_at timestamptz not null default now()
);
create index if not exists pulse_runs_mission_idx on public.pulse_runs(mission_id, created_at);
alter table public.pulse_runs enable row level security;
create policy pulse_runs_owner on public.pulse_runs for select to authenticated using (user_id = auth.uid());

create table if not exists public.pulse_tool_calls (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  mission_id uuid references public.pulse_missions(id) on delete cascade,
  step_id uuid references public.pulse_mission_steps(id) on delete set null,
  agent_id text not null,
  tool text not null,
  input jsonb,
  output jsonb,
  ok boolean not null,
  error text,
  duration_ms int,
  created_at timestamptz not null default now()
);
create index if not exists pulse_tool_calls_mission_idx on public.pulse_tool_calls(mission_id, created_at);
alter table public.pulse_tool_calls enable row level security;
create policy pulse_tool_calls_owner on public.pulse_tool_calls for select to authenticated using (user_id = auth.uid());

-- 5) Consumo diario por proveedor (control de costos)
create table if not exists public.pulse_ai_usage (
  day date not null default current_date,
  provider text not null,
  requests int not null default 0,
  input_tokens bigint not null default 0,
  output_tokens bigint not null default 0,
  primary key (day, provider)
);
alter table public.pulse_ai_usage enable row level security;
create policy pulse_ai_usage_read on public.pulse_ai_usage for select to authenticated using (true);

-- 6) Columnas opcionales en tablas existentes (nulas por defecto: el código anterior no cambia)
alter table public.pulse_missions
  add column if not exists engine text not null default 'legacy',
  add column if not exists owner_agent text,
  add column if not exists plan jsonb,
  add column if not exists budget_tokens int,
  add column if not exists spent_tokens int not null default 0,
  add column if not exists max_iterations int,
  add column if not exists deadline_at timestamptz,
  add column if not exists claimed_at timestamptz,
  add column if not exists last_error text;

alter table public.pulse_mission_steps
  add column if not exists agent_id text,
  add column if not exists depends_on int[] not null default '{}',
  add column if not exists acceptance jsonb,
  add column if not exists output_format text,
  add column if not exists attempt int not null default 0,
  add column if not exists claimed_at timestamptz,
  add column if not exists review jsonb;

alter table public.pulse_deliverables
  add column if not exists mission_id uuid,
  add column if not exists agent_id text,
  add column if not exists version int,
  add column if not exists review_status text,
  add column if not exists size_bytes int;

-- 7) Reclamación atómica de etapas (evita ejecuciones duplicadas entre ticks concurrentes)
create or replace function public.pulse_core_claim_step(p_mission uuid, p_stale interval default interval '6 minutes')
returns setof public.pulse_mission_steps
language sql security definer set search_path = public, pg_temp as $$
  update public.pulse_mission_steps s set claimed_at = now(), status = 'running', started_at = coalesce(s.started_at, now())
  where s.id = (
    select c.id from public.pulse_mission_steps c
    where c.mission_id = p_mission
      and (c.status = 'pending' or (c.status = 'running' and c.claimed_at < now() - p_stale))
      and not exists (
        select 1 from public.pulse_mission_steps d
        where d.mission_id = c.mission_id and d.seq = any(c.depends_on) and d.status <> 'completed')
    order by c.seq
    limit 1
    for update skip locked)
  returning s.*;
$$;
revoke all on function public.pulse_core_claim_step(uuid, interval) from public, anon, authenticated;

create or replace function public.pulse_core_add_usage(p_provider text, p_in int, p_out int)
returns void language sql security definer set search_path = public, pg_temp as $$
  insert into public.pulse_ai_usage(day, provider, requests, input_tokens, output_tokens)
  values (current_date, p_provider, 1, coalesce(p_in,0), coalesce(p_out,0))
  on conflict (day, provider) do update set requests = pulse_ai_usage.requests + 1,
    input_tokens = pulse_ai_usage.input_tokens + excluded.input_tokens,
    output_tokens = pulse_ai_usage.output_tokens + excluded.output_tokens;
$$;
revoke all on function public.pulse_core_add_usage(text, int, int) from public, anon, authenticated;

-- 8) Agentes iniciales (personajes existentes + revisor lógico de calidad)
insert into public.pulse_agents (id, name, department, species, role, responsibilities, instructions, tools, model_tier, max_steps) values
('ulises','Ulises','Dirección estratégica','owl','Director de operaciones','Interpretar misiones, planificar, delegar, supervisar y consolidar.','Eres el director de operaciones de PULSE HQ. Divides objetivos en subtareas con dependencias claras, asignas al agente especialista correcto, exiges evidencia y consolidas entregables profesionales. Nunca inventas resultados.','{read_artifact,memory_search,calculator}','smart',3),
('iris','Iris','Inteligencia de mercado','owl','Analista de mercado','Investigar, contrastar fuentes y elaborar informes con evidencia.','Investigas con herramientas reales. Cada dato relevante debe tener una URL de fuente obtenida con una herramienta. Separas hechos verificados de hipótesis.','{wikipedia_search,wikipedia_summary,fetch_url,memory_search,memory_write,read_artifact}','fast',5),
('kiki','Kiki','Marketing y crecimiento','hummingbird','Estratega de crecimiento','Campañas, posicionamiento, calendarios y métricas.','Diseñas estrategias de marketing accionables basadas en la evidencia disponible. Usas los artefactos de otros agentes en lugar de regenerarlos.','{read_artifact,memory_search,calculator}','fast',4),
('mia','Mía','Producción de contenido','cat','Productora de contenido','Guiones, piezas y calendarios editoriales.','Produces contenido concreto y listo para producir, con formatos y tiempos.','{read_artifact,memory_search}','fast',4),
('rocco','Rocco','Ventas y patrocinios','raccoon','Ejecutivo de patrocinios','Propuestas comerciales, niveles de patrocinio y argumentarios.','Construyes propuestas comerciales con beneficios medibles, niveles y siguientes pasos. No inventas marcas, contactos ni acuerdos.','{read_artifact,memory_search,calculator}','fast',4),
('lila','Lila','Relaciones públicas y alianzas','bunny','Enlace de alianzas','Criterios de alianzas y mensajes de contacto.','Defines criterios de alianzas y redactas mensajes sin enviarlos.','{read_artifact,memory_search,wikipedia_search}','fast',4),
('luz','Luz','Eventos y experiencias','moth','Productora de experiencias','Diseño de experiencias y logística.','Diseñas experiencias con recorrido, riesgos y logística.','{read_artifact,memory_search}','fast',4),
('cata','Cata','Comunidad','capybara','Anfitriona de comunidad','Planes de comunidad y conversación.','Planificas la participación de la comunidad con métricas.','{read_artifact,memory_search}','fast',4),
('tomas','Tomás','Finanzas y administración','turtle','Controlador financiero','Presupuestos, proyecciones y análisis económicos.','Construyes presupuestos con supuestos explícitos y fórmulas. Indicas qué cifras son estimaciones.','{read_artifact,memory_search,calculator}','fast',4),
('bit','Bit','Tecnología y automatización','robot','Ingeniero de automatización','Automatizaciones, código y documentación técnica.','Diseñas automatizaciones y código con pasos verificables.','{read_artifact,memory_search,calculator}','fast',4),
('calidad','Calidad',null,null,'Revisor de calidad','Revisar entregables con criterios por tipo y devolver o aprobar.','Eres un revisor exigente. Compruebas cumplimiento del encargo, evidencia, coherencia, integridad y presentación. Devuelves con observaciones concretas cuando no cumple. No apruebas resultados incompletos.','{read_artifact}','smart',1)
on conflict (id) do nothing;

-- 9) Tarea programada del motor: cada minuto, solo si hay misiones del núcleo pendientes
select cron.schedule('pulse_core_tick', '* * * * *', $cron$
 select net.http_post(
  url:='https://erluuujhgpreuuaskjwo.supabase.co/functions/v1/pulse-core',
  headers:=jsonb_build_object('Content-Type','application/json','x-pulse-scheduler-token',(select token from public.pulse_scheduler_credentials where id=1)),
  body:='{"action":"tick"}'::jsonb,
  timeout_milliseconds:=150000
 ) from public.pulse_scheduler_credentials where id=1
 and exists(select 1 from public.pulse_missions where engine='core' and status in ('planning','running','reviewing'));
$cron$);
