-- El bucket privado de entregables acepta también hojas de cálculo XLSX generadas por pulse-core.
-- Reversión: quitar el tipo de la lista (ver .down.sql de pulse_core_v1).
update storage.buckets
set allowed_mime_types = array(select distinct unnest(allowed_mime_types || array['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']))
where id = 'pulse-deliverables';
