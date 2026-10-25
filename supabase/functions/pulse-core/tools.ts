// Registro central de herramientas. Cada herramienta valida su entrada, tiene límites de tiempo y tamaño,
// y devuelve evidencia (URLs reales) que el motor usa para verificar las fuentes declaradas por los agentes.

export interface ToolCtx { db: any; userId: string; missionId: string; agentId: string }
export interface ToolResult { ok: boolean; output: unknown; urls?: string[]; error?: string }
type Tool = { description: string; input: string; run: (input: any, ctx: ToolCtx) => Promise<ToolResult> };

const UA = 'PULSE-HQ/1.0 (agentes de investigacion; contacto via proyecto privado)';
const str = (v: unknown, max = 300) => String(v ?? '').trim().slice(0, max);

function blockedHost(host: string) {
  return /^(localhost|127\.|10\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.|0\.|\[)/.test(host) || host.endsWith('.internal') || host.endsWith('.local') || host.endsWith('supabase.co') || host.endsWith('supabase.in');
}

function htmlToText(html: string) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/(p|div|h\d|li|tr|br)>/gi, '\n').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
}

export const TOOLS: Record<string, Tool> = {
  wikipedia_search: {
    description: 'Busca artículos en Wikipedia. Devuelve títulos, extractos y URLs verificables.',
    input: '{"query":"texto","lang":"es|en"}',
    async run(i) {
      const q = str(i?.query, 200); if (q.length < 2) return { ok: false, output: null, error: 'query vacía' };
      const lang = i?.lang === 'en' ? 'en' : 'es';
      const u = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=6&srsearch=${encodeURIComponent(q)}`;
      const r = await fetch(u, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(12000) });
      if (!r.ok) return { ok: false, output: null, error: `wikipedia ${r.status}` };
      const j = await r.json();
      const items = (j?.query?.search || []).map((s: any) => ({ title: s.title, snippet: htmlToText(String(s.snippet || '')).slice(0, 240), url: `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(String(s.title).replace(/ /g, '_'))}` }));
      return { ok: true, output: items, urls: items.map((x: any) => x.url) };
    }
  },
  wikipedia_summary: {
    description: 'Obtiene el resumen de un artículo de Wikipedia por título exacto.',
    input: '{"title":"Título","lang":"es|en"}',
    async run(i) {
      const t = str(i?.title, 200); if (!t) return { ok: false, output: null, error: 'title vacío' };
      const lang = i?.lang === 'en' ? 'en' : 'es';
      const r = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.replace(/ /g, '_'))}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(12000) });
      if (!r.ok) return { ok: false, output: null, error: `wikipedia ${r.status}` };
      const j = await r.json();
      const url = j?.content_urls?.desktop?.page;
      return { ok: true, output: { title: j?.title, extract: str(j?.extract, 2500), url }, urls: url ? [url] : [] };
    }
  },
  wikipedia_research: {
    description: 'Evidencia de varias entidades en una sola llamada: para cada nombre busca el artículo más relevante y devuelve su resumen y URL. Úsala para investigar 3 a 5 entidades a la vez.',
    input: '{"entities":["Nombre 1","Nombre 2","Nombre 3"],"lang":"es|en"}',
    async run(i) {
      const lang = i?.lang === 'en' ? 'en' : 'es';
      const names = (Array.isArray(i?.entities) ? i.entities : []).map((x: unknown) => str(x, 120)).filter((x: string) => x.length >= 2).slice(0, 5);
      if (!names.length) return { ok: false, output: null, error: 'entities vacío' };
      const items: any[] = [];
      for (const name of names) {
        try {
          const sr = await fetch(`https://${lang}.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=1&srsearch=${encodeURIComponent(name)}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(10000) });
          const title = sr.ok ? (await sr.json())?.query?.search?.[0]?.title : null;
          if (!title) { items.push({ entity: name, found: false }); continue; }
          const r = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(String(title).replace(/ /g, '_'))}`, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(10000) });
          if (!r.ok) { items.push({ entity: name, found: false, title }); continue; }
          const j = await r.json();
          items.push({ entity: name, found: true, title: j?.title, extract: str(j?.extract, 1200), url: j?.content_urls?.desktop?.page });
        } catch { items.push({ entity: name, found: false }); }
      }
      const urls = items.filter(x => x.found && x.url).map(x => x.url);
      return { ok: urls.length > 0, output: items, urls, error: urls.length ? undefined : 'Sin artículos encontrados' };
    }
  },
  fetch_url: {
    description: 'Lee el texto de una página pública https (máx. 6000 caracteres). No accede a redes internas.',
    input: '{"url":"https://..."}',
    async run(i) {
      let u: URL; try { u = new URL(str(i?.url, 500)); } catch { return { ok: false, output: null, error: 'URL inválida' }; }
      if (u.protocol !== 'https:' || blockedHost(u.hostname)) return { ok: false, output: null, error: 'Destino no permitido' };
      const r = await fetch(u.href, { headers: { 'User-Agent': UA, Accept: 'text/html,text/plain' }, redirect: 'follow', signal: AbortSignal.timeout(12000) });
      if (!r.ok) return { ok: false, output: null, error: `HTTP ${r.status}` };
      const type = r.headers.get('content-type') || '';
      if (!/text\/|html|json/.test(type)) return { ok: false, output: null, error: `Tipo no soportado: ${type.slice(0, 40)}` };
      const raw = (await r.text()).slice(0, 400000);
      const title = (raw.match(/<title[^>]*>([^<]{1,200})/i)?.[1] || '').trim();
      return { ok: true, output: { url: r.url, title, text: htmlToText(raw).slice(0, 6000) }, urls: [r.url] };
    }
  },
  calculator: {
    description: 'Evalúa una expresión aritmética (+ - * / % paréntesis y decimales).',
    input: '{"expression":"(1200*12)*1.16"}',
    async run(i) {
      const e = str(i?.expression, 200);
      if (!/^[\d\s+\-*/().%]+$/.test(e)) return { ok: false, output: null, error: 'Expresión no permitida' };
      // deno-lint-ignore no-new-func
      const v = Function(`"use strict";return (${e})`)();
      if (typeof v !== 'number' || !isFinite(v)) return { ok: false, output: null, error: 'Resultado no numérico' };
      return { ok: true, output: { expression: e, result: Math.round(v * 10000) / 10000 } };
    }
  },
  read_artifact: {
    description: 'Lee el resultado aprobado de una etapa anterior de la misma misión (por número de etapa), sin regenerarlo.',
    input: '{"seq":1}',
    async run(i, ctx) {
      const seq = Number(i?.seq); if (!Number.isInteger(seq)) return { ok: false, output: null, error: 'seq inválido' };
      const { data } = await ctx.db.from('pulse_mission_steps').select('seq,agent_id,directive,result,sources,status').eq('mission_id', ctx.missionId).eq('seq', seq).maybeSingle();
      if (!data || data.status !== 'completed') return { ok: false, output: null, error: 'Etapa no disponible o sin terminar' };
      const urls = Array.isArray(data.sources) ? data.sources.map((s: any) => s?.url).filter(Boolean) : [];
      return { ok: true, output: { seq: data.seq, agent: data.agent_id, directive: data.directive, result: String(data.result || '').slice(0, 7000), sources: data.sources }, urls };
    }
  },
  memory_search: {
    description: 'Busca en la memoria de la misión, compartida y organizacional.',
    input: '{"query":"palabra clave"}',
    async run(i, ctx) {
      const q = str(i?.query, 80);
      let req = ctx.db.from('pulse_memory').select('scope,kind,content,source_url,verified,created_by').eq('user_id', ctx.userId)
        .or(`mission_id.eq.${ctx.missionId},scope.eq.org,scope.eq.shared`).order('created_at', { ascending: false }).limit(12);
      if (q) req = req.ilike('content', `%${q.replace(/[%_,()]/g, ' ')}%`);
      const { data, error } = await req;
      if (error) return { ok: false, output: null, error: error.message };
      return { ok: true, output: data || [] };
    }
  },
  memory_write: {
    description: 'Guarda un hecho verificado (con URL) o una hipótesis en la memoria de la misión.',
    input: '{"kind":"fact|hypothesis","content":"...","source_url":"https://..."}',
    async run(i, ctx) {
      const kind = i?.kind === 'fact' ? 'fact' : 'hypothesis';
      const content = str(i?.content, 800); if (content.length < 10) return { ok: false, output: null, error: 'contenido corto' };
      const source = str(i?.source_url, 500) || null;
      const { error } = await ctx.db.from('pulse_memory').insert({ user_id: ctx.userId, scope: 'mission', mission_id: ctx.missionId, agent_id: ctx.agentId, kind, content, source_url: source, verified: false, created_by: ctx.agentId });
      if (error) return { ok: false, output: null, error: error.message };
      return { ok: true, output: { saved: true } };
    }
  }
};

export function toolCatalog(allowed: string[]) {
  return allowed.filter(t => TOOLS[t]).map(t => `- ${t}: ${TOOLS[t].description} Entrada: ${TOOLS[t].input}`).join('\n');
}
