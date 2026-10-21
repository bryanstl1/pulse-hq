# PULSE HQ 2.0 Implementation Plan

Goal: entregar una muestra navegable y visualmente revisada sin afectar producción.
Architecture: escena Three.js aislada, UI DOM accesible, contratos de datos explícitos.
Tech stack: Three.js 0.180.0, Vite 7.1.12, módulos ES, assets GLB CC0.
Spec: DESIGN.md. Ejecución autónoma autorizada por el CEO; aprobación visual al finalizar B.

- [x] Auditar repo, datos agregados, funciones desplegadas, RLS y grabaciones.
- [x] Crear rama aislada desde la base identificada.
- [x] Preparar catálogo de assets con licencia y escenas diferenciadas.
- [x] Implementar mundo y navegación: cámara, selección, zoom, carga y fallback.
- [x] Implementar inspectores de agentes y espacios con estado de muestra explícito.
- [x] Probar estados desconocidos, sesiones ausentes y marcas temporales antiguas; nunca convertirlos en trabajo en curso.
- [x] Revisar visualmente escritorio y corregir hallazgos de la alternativa ilustrada.
- [x] Documentar auditoría, integración, pruebas ejecutadas y pendientes.
- [ ] Validar visualmente WebGL e iPhone Safari físico; pendiente por limitaciones del navegador de revisión.
- [ ] Guardar rama remota y capturas para revisión del CEO.

Riesgos: fallo de GPU, assets faltantes, etiquetas superpuestas, gestos involuntarios al seleccionar, estados operativos obsoletos. Cada riesgo tendrá un control explícito. Ni pruebas con Gemini que gasten cuota ni cambios de RLS o scheduler en esta fase.
