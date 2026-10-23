// Motor de IA multiproveedor con adaptadores intercambiables.
// Solo se activan los proveedores que tienen su secreto configurado. Nada de esto genera gastos por sí mismo:
// usa los planes gratuitos de cada proveedor y respeta sus límites con reintentos y cambio de proveedor.

export type Tier = 'fast' | 'smart';
export interface LLMRequest { tier: Tier; system: string; user: string; json?: boolean; maxTokens?: number; temperature?: number }
export interface LLMResult { text: string; provider: string; model: string; inTok: number; outTok: number; ms: number; incomplete: boolean }
export interface Attempt { provider: string; model: string; ok: boolean; status?: number; error?: string; ms: number; inTok?: number; outTok?: number }

interface Provider { id: string; model: (t: Tier) => string; call: (m: string, r: LLMRequest) => Promise<LLMResult> }

const env = (k: string) => Deno.env.get(k) || '';

class ProviderError extends Error { constructor(msg: string, public status: number, public retryable: boolean) { super(msg); } }

async function httpJson(url: string, init: RequestInit, timeoutMs = 60000) {
  const res = await fetch(url, { ...init, signal: AbortSignal.timeout(timeoutMs) });
  const body = await res.json().catch(() => ({}));
  return { res, body };
}

function gemini(): Provider | null {
  const key = env('GEMINI_API_KEY'); if (!key) return null;
  const fast = env('PULSE_GEMINI_MODEL') || 'gemini-3.5-flash-lite';
  const smart = env('PULSE_GEMINI_SMART_MODEL') || fast;
  return {
    id: 'gemini', model: t => (t === 'smart' ? smart : fast),
    async call(model, r) {
      const t0 = Date.now();
      const { res, body } = await httpJson(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
        method: 'POST', headers: { 'x-goog-api-key': key, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: r.system }] },
          contents: [{ role: 'user', parts: [{ text: r.user }] }],
          generationConfig: { temperature: r.temperature ?? 0.35, maxOutputTokens: r.maxTokens ?? 3000, ...(r.json ? { responseMimeType: 'application/json' } : {}) }
        })
      });
      if (!res.ok) throw new ProviderError(`gemini ${res.status} ${String(body?.error?.status || '').slice(0, 40)}`, res.status, res.status === 429 || res.status >= 500);
      const cand = body?.candidates?.[0];
      const text = (cand?.content?.parts || []).filter((p: { text?: string }) => typeof p.text === 'string').map((p: { text: string }) => p.text).join('').trim();
      if (!text) throw new ProviderError(`gemini sin texto (${cand?.finishReason || 'sin candidato'})`, 502, true);
      return { text, provider: 'gemini', model, inTok: body?.usageMetadata?.promptTokenCount || 0, outTok: body?.usageMetadata?.candidatesTokenCount || 0, ms: Date.now() - t0, incomplete: cand?.finishReason === 'MAX_TOKENS' };
    }
  };
}

function openaiCompatible(id: string, base: string, keyName: string, fastDefault: string, smartDefault: string, extraHeaders: Record<string, string> = {}): Provider | null {
  const key = env(keyName); if (!key) return null;
  const up = id.toUpperCase();
  const fast = env(`PULSE_${up}_MODEL`) || fastDefault;
  const smart = env(`PULSE_${up}_SMART_MODEL`) || smartDefault;
  return {
    id, model: t => (t === 'smart' ? smart : fast),
    async call(model, r) {
      const t0 = Date.now();
      const { res, body } = await httpJson(`${base}/chat/completions`, {
        method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', ...extraHeaders },
        body: JSON.stringify({
          model, temperature: r.temperature ?? 0.35, max_tokens: r.maxTokens ?? 3000,
          messages: [{ role: 'system', content: r.system }, { role: 'user', content: r.user }],
          ...(r.json ? { response_format: { type: 'json_object' } } : {})
        })
      });
      if (!res.ok) throw new ProviderError(`${id} ${res.status} ${String(body?.error?.message || '').slice(0, 60)}`, res.status, res.status === 429 || res.status >= 500);
      const ch = body?.choices?.[0];
      const text = String(ch?.message?.content || '').trim();
      if (!text) throw new ProviderError(`${id} sin texto`, 502, true);
      return { text, provider: id, model, inTok: body?.usage?.prompt_tokens || 0, outTok: body?.usage?.completion_tokens || 0, ms: Date.now() - t0, incomplete: ch?.finish_reason === 'length' };
    }
  };
}

export function providers(): Provider[] {
  return [
    gemini(),
    openaiCompatible('groq', 'https://api.groq.com/openai/v1', 'GROQ_API_KEY', 'llama-3.1-8b-instant', 'llama-3.3-70b-versatile'),
    openaiCompatible('openrouter', 'https://openrouter.ai/api/v1', 'OPENROUTER_API_KEY', 'meta-llama/llama-3.3-70b-instruct:free', 'meta-llama/llama-3.3-70b-instruct:free', { 'X-Title': 'PULSE HQ' })
  ].filter(Boolean) as Provider[];
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

/** Enruta por complejidad: rápido → proveedor más barato disponible; razonamiento → Gemini primero. */
export async function complete(r: LLMRequest, onAttempt: (a: Attempt) => Promise<void> | void): Promise<LLMResult> {
  const list = providers();
  if (!list.length) throw new Error('No hay proveedores de IA configurados (falta GEMINI_API_KEY).');
  const ordered = r.tier === 'fast' ? [...list.filter(p => p.id === 'groq'), ...list.filter(p => p.id !== 'groq')] : list;
  let last = '';
  for (const p of ordered) {
    const model = p.model(r.tier);
    for (let attempt = 0; attempt < 3; attempt++) {
      const t0 = Date.now();
      try {
        const out = await p.call(model, r);
        await onAttempt({ provider: p.id, model, ok: true, ms: out.ms, inTok: out.inTok, outTok: out.outTok });
        return out;
      } catch (e) {
        const err = e as ProviderError;
        last = String(err?.message || e).slice(0, 200);
        const retryable = err instanceof ProviderError ? err.retryable : true; // timeouts y red
        await onAttempt({ provider: p.id, model, ok: false, status: err?.status, error: last, ms: Date.now() - t0 });
        if (!retryable) break;
        await sleep([2000, 6000, 12000][attempt]);
      }
    }
  }
  throw new Error(`Todos los proveedores fallaron: ${last}`);
}

/** Extrae y valida JSON de una respuesta (tolera texto alrededor). */
export function parseJson<T = Record<string, unknown>>(text: string): T {
  const t = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  try { return JSON.parse(t); } catch { /* sigue */ }
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a >= 0 && b > a) return JSON.parse(t.slice(a, b + 1));
  throw new Error('La respuesta del modelo no es JSON válido');
}
