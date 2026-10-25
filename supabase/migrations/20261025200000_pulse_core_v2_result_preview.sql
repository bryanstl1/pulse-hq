-- Vista previa ligera de resultados para la oficina: el sondeo ya no descarga los textos completos.
-- Reversión: alter table ... drop column result_preview;
alter table public.pulse_tasks add column if not exists result_preview text generated always as (left(result, 600)) stored;
alter table public.pulse_mission_steps add column if not exists result_preview text generated always as (left(result, 600)) stored;
