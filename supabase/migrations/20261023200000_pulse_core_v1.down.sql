-- Reversión del núcleo multiagente v1 (elimina solo lo creado por pulse_core_v1)
select cron.unschedule('pulse_core_tick');
drop function if exists public.pulse_core_add_usage(text, int, int);
drop function if exists public.pulse_core_claim_step(uuid, interval);
drop table if exists public.pulse_tool_calls;
drop table if exists public.pulse_runs;
drop table if exists public.pulse_memory;
drop table if exists public.pulse_agent_messages;
drop table if exists public.pulse_ai_usage;
drop table if exists public.pulse_agents;
alter table public.pulse_deliverables drop column if exists mission_id, drop column if exists agent_id, drop column if exists version, drop column if exists review_status, drop column if exists size_bytes;
alter table public.pulse_mission_steps drop column if exists agent_id, drop column if exists depends_on, drop column if exists acceptance, drop column if exists output_format, drop column if exists attempt, drop column if exists claimed_at, drop column if exists review;
alter table public.pulse_missions drop column if exists engine, drop column if exists owner_agent, drop column if exists plan, drop column if exists budget_tokens, drop column if exists spent_tokens, drop column if exists max_iterations, drop column if exists deadline_at, drop column if exists claimed_at, drop column if exists last_error;
-- Restricciones originales (fallará si ya existen filas con los valores nuevos; revisar antes)
alter table public.pulse_missions drop constraint pulse_missions_status_check;
alter table public.pulse_missions add constraint pulse_missions_status_check check (status = any (array['active','paused','needs_attention','awaiting_ceo','reviewed','revision_requested','completed']));
alter table public.pulse_deliverables drop constraint pulse_deliverables_mime_type_check;
alter table public.pulse_deliverables add constraint pulse_deliverables_mime_type_check check (mime_type = any (array['image/svg+xml','application/pdf','text/markdown']));
alter table public.pulse_deliverables drop constraint pulse_deliverables_variant_check;
alter table public.pulse_deliverables add constraint pulse_deliverables_variant_check check (variant = any (array['report_pdf','report_markdown','post_portrait','story_vertical','post_square']));
alter table public.pulse_deliverables drop constraint pulse_deliverables_source_type_check;
alter table public.pulse_deliverables add constraint pulse_deliverables_source_type_check check (source_type = any (array['generated_template','authored_report']));
