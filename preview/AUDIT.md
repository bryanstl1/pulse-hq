# PULSE HQ 2.0 · Technical audit / stage A-B

Date: 2026-10-21. Baseline main commit: `962b88162e8ad3911e2a869713e4ddfab0f7f1ed`.

## Verified current architecture

- GitHub Pages static site: `index.html` plus UI modules; current office renderer is `office-world.js` with a 2D Canvas and geometric scene. Legacy `office-3d.js` remains in the repository.
- Supabase `erluuujhgpreuuaskjwo` reported `ACTIVE_HEALTHY` at inspection; 26 public tables enumerate with RLS enabled; 9 functions in ACTIVE deployment state.
- Main business tables include `pulse_tasks`, `pulse_missions`, `pulse_mission_steps`, `pulse_agent_roles`, `pulse_approvals`, `pulse_deliverables`, CRM and creative production tables.
- Existence, records and deployment status are **not proof** that the end-to-end production flows currently work. Authenticated operation, Gemini, actual RLS enforcement and real Safari remain untested.

## Direction

1. Keep existing backend untouched. Review art style before a visual integration.
2. The `preview/pulse-hq-2-preview.html` file is a self-contained offline visual artifact: furnished isometric panorama, touch/drag/zoom, 10 departments + 4 spaces, inspector and conceptual character references.
3. It is **not** a complete layered videogame engine. All illustrated character identities and statuses in this preview are explicitly non-production examples.
4. Proposed product stack after approval: PixiJS + TypeScript + lightweight React UI, scene atlas/sprites independent of business services, existing Supabase auth/RLS/Edge functions through a verified adapter.
5. Visual activity must map to authoritative persisted task/missions; no animation may impersonate real work.

## Safety and release gate

No production writes or application replacement. Feature branch only. Main retains baseline SHA; do not merge/deploy without explicit CEO approval. Next work: art validation, asset decomposition, full browser/device QA, security tests and authenticated integration.

## Testing

Chromium headless was used to render the offline source at 1440x900 and mobile-equivalent 393x852; full image load, 14 selectable hit regions, zoom, room directory, inspector, simulated draft preview, and no JavaScript exceptions were checked. Safari physical-device QA, native multitouch, realtime state and cross-system task execution were not checked.
