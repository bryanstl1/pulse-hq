# PULSE HQ 2.0 · Conceptual office preview

## Status and scope

Independent browser-executable **visual prototype only**. No calls to Gemini, Supabase, production URLs, or third-party APIs. No authentication inputs, no production writes, no fabricated live activity. Do not confuse illustrative agent names and visuals with the enterprise records.

## Open

Run `python3 -m http.server 8765` in this folder and open `http://127.0.0.1:8765` in a local browser. A local network hostname can be used from another device on the same network if the host network permits connections. Opening `index.html` from disk may work in some browsers, but local serving is preferred.

## Navigation

- Drag in the building to pan, scroll or pinch to zoom, tap rooms to inspect.
- Keyboard: arrow keys for pan, `+` and `-` for zoom, Escape to close overlays.
- Inspector has department profiles, illustrative agents, responsibilities and transparent integration status.
- Drafting a sample instruction only previews text and makes **no requests**.

## Art and attribution

All scene and portrait WebP assets are derived from artwork newly generated for this PULSE HQ prototype via OpenAI image generation, October 2026. They are not downloaded from a third-party game or asset store. Generated artwork is for design review and is not a guarantee that final game sprites, fonts, or likenesses have completed branding/art-direction approval. No external runtime fonts, sprite services, or scripts.

## Technical choices

A scene bitmap and independent semantic HTML hotspot hit regions provide a visual proof of concept with low resource weight, touch support, keyboard controls and browser fallback. It **is not a complete sprite engine**. For production, replace the baked scene with separate licensed environment layers, independently animated character atlases and asset maps (PixiJS or Phaser), keeping the business services separate. The proof-of-concept must be art-approved before this work.

## Security

No secrets, Supabase URLs or publishable keys embedded. A future authenticated adapter will preserve existing RLS, CEO approvals, and Edge function permission checks. Do not serve this preview as the new authenticated production app.