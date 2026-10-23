-- pulse_core_v1_grants: el motor (service_role) debe poder ejecutar las funciones del núcleo.
grant execute on function public.pulse_core_claim_step(uuid, interval) to service_role;
grant execute on function public.pulse_core_add_usage(text, integer, integer) to service_role;
