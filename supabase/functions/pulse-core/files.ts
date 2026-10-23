// Generadores de archivos reales: PDF editorial (pdf-lib) y XLSX con fórmulas (OOXML + JSZip).
// Cada generador valida su resultado antes de devolverlo.
import { PDFDocument, StandardFonts, rgb, PDFFont } from 'npm:pdf-lib@1.17.1';
import JSZip from 'npm:jszip@3.10.1';

// pdf-lib con fuentes estándar solo admite WinAnsi: normalizamos caracteres tipográficos y quitamos el resto.
export function winAnsi(s: string) {
  return String(s ?? '')
    .replace(/[‘’‚]/g, "'").replace(/[“”„]/g, '"')
    .replace(/[–—−]/g, '-').replace(/…/g, '...').replace(/[•●▪‣]/g, '-')
    .replace(/ /g, ' ').replace(/\t/g, '  ')
    .replace(/[^\n\x20-\x7E¡-ÿ€]/g, '');
}

interface Meta { title: string; subtitle: string; missionId: string; owner: string; agents: string[]; review: string; date: string; sources: { title?: string; url: string }[] }

export async function createPdf(markdown: string, meta: Meta): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.setTitle(winAnsi(meta.title)); pdf.setAuthor('PULSE HQ'); pdf.setCreator('PULSE HQ · pulse-core'); pdf.setSubject(winAnsi(meta.subtitle).slice(0, 200));
  const reg = await pdf.embedFont(StandardFonts.Helvetica), bold = await pdf.embedFont(StandardFonts.HelveticaBold), ital = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const W = 595.28, H = 841.89, M = 56, ink = rgb(0.13, 0.12, 0.11), muted = rgb(0.45, 0.42, 0.38), accent = rgb(0.72, 0.53, 0.27);

  // Portada
  const cover = pdf.addPage([W, H]);
  cover.drawRectangle({ x: 0, y: H - 260, width: W, height: 260, color: rgb(0.16, 0.15, 0.14) });
  cover.drawRectangle({ x: M, y: H - 120, width: 46, height: 5, color: accent });
  cover.drawText('PULSE HQ', { x: M, y: H - 100, size: 12, font: bold, color: rgb(0.95, 0.9, 0.82) });
  let y = H - 160;
  for (const line of wrap(winAnsi(meta.title), bold, 26, W - 2 * M).slice(0, 3)) { cover.drawText(line, { x: M, y, size: 26, font: bold, color: rgb(1, 1, 1) }); y -= 32; }
  y = H - 300;
  for (const line of wrap(winAnsi(meta.subtitle), reg, 12, W - 2 * M).slice(0, 6)) { cover.drawText(line, { x: M, y, size: 12, font: reg, color: ink }); y -= 17; }
  y -= 24;
  const rows: [string, string][] = [['Responsable', meta.owner], ['Agentes participantes', meta.agents.join(', ')], ['Revisión de calidad', meta.review], ['Fecha', meta.date], ['Misión', meta.missionId]];
  for (const [k, v] of rows) {
    cover.drawText(winAnsi(k).toUpperCase(), { x: M, y, size: 8, font: bold, color: muted }); y -= 13;
    for (const line of wrap(winAnsi(v), reg, 11, W - 2 * M).slice(0, 3)) { cover.drawText(line, { x: M, y, size: 11, font: reg, color: ink }); y -= 15; }
    y -= 8;
  }
  cover.drawText('Documento generado por agentes de IA de PULSE HQ y revisado por el agente de Calidad. Verifique las fuentes antes de actuar.', { x: M, y: 50, size: 8, font: ital, color: muted });

  // Cuerpo
  let page = pdf.addPage([W, H]); y = H - M;
  const newPage = () => { page = pdf.addPage([W, H]); y = H - M; };
  const ensure = (h: number) => { if (y - h < M + 20) newPage(); };
  const para = (text: string, font: PDFFont, size: number, color = ink, indent = 0, gap = 4) => {
    for (const line of wrap(text, font, size, W - 2 * M - indent)) { ensure(size + 4); page.drawText(line, { x: M + indent, y: y - size, size, font, color }); y -= size + 4; }
    y -= gap;
  };
  for (const raw of winAnsi(markdown).split('\n')) {
    const line = raw.replace(/\*\*(.+?)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1').trimEnd();
    if (!line.trim()) { y -= 4; continue; }
    if (/^#\s/.test(line)) { ensure(40); y -= 10; para(line.replace(/^#\s+/, ''), bold, 18, ink, 0, 2); page.drawRectangle({ x: M, y: y + 2, width: 36, height: 3, color: accent }); y -= 8; continue; }
    if (/^##\s/.test(line)) { ensure(30); y -= 6; para(line.replace(/^##\s+/, ''), bold, 13.5); continue; }
    if (/^###\s/.test(line)) { para(line.replace(/^###\s+/, ''), bold, 11.5); continue; }
    if (/^\s*[-*]\s/.test(line)) { const t = line.replace(/^\s*[-*]\s+/, ''); ensure(14); page.drawCircle({ x: M + 4, y: y - 7, size: 1.8, color: accent }); para(t, reg, 10.5, ink, 14, 1); continue; }
    if (/^\s*\d+[.)]\s/.test(line)) { para(line.trim(), reg, 10.5, ink, 6, 1); continue; }
    if (/^\|/.test(line)) { if (/^\|[\s:-]+\|/.test(line)) continue; const cells = line.split('|').slice(1, -1).map(c => c.trim()); para(cells.join('   ·   '), reg, 9.5, ink, 6, 1); continue; }
    if (/^>\s/.test(line)) { para(line.replace(/^>\s+/, ''), ital, 10.5, muted, 10); continue; }
    para(line, reg, 10.5);
  }
  // Fuentes
  if (meta.sources.length) {
    newPage(); para('Fuentes consultadas por los agentes', bold, 16); y -= 6;
    meta.sources.forEach((s, i) => { para(`${i + 1}. ${winAnsi(s.title || s.url)}`, bold, 9.5, ink, 0, 0); para(winAnsi(s.url), reg, 8.5, muted, 12, 4); });
  }
  // Pie de página
  const pages = pdf.getPages();
  pages.forEach((p, i) => { if (i === 0) return; p.drawText(`PULSE HQ · ${winAnsi(meta.title).slice(0, 60)}`, { x: M, y: 28, size: 7.5, font: reg, color: muted }); p.drawText(`${i + 1} / ${pages.length}`, { x: W - M - 30, y: 28, size: 7.5, font: reg, color: muted }); });
  const bytes = await pdf.save();
  // validación: el archivo se puede volver a abrir y tiene páginas
  const check = await PDFDocument.load(bytes);
  if (check.getPageCount() < 2) throw new Error('PDF inválido');
  return bytes;
}

function wrap(text: string, font: PDFFont, size: number, max: number): string[] {
  const words = text.split(/\s+/).filter(Boolean); const out: string[] = []; let cur = '';
  for (const w of words) {
    const next = cur ? cur + ' ' + w : w;
    if (font.widthOfTextAtSize(next, size) <= max) cur = next;
    else { if (cur) out.push(cur); cur = font.widthOfTextAtSize(w, size) > max ? w.slice(0, Math.floor(max / (size * 0.5))) : w; }
  }
  if (cur) out.push(cur);
  return out.length ? out : [''];
}

// ——— XLSX ———
export interface SheetSpec { name: string; columns: string[]; rows: (string | number | null)[][]; notes?: string[] }
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const colName = (i: number) => { let s = ''; i++; while (i) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; };
const FORMULA_OK = /^=[A-Z0-9:+\-*/().,;\s$]*(SUM|AVERAGE|MIN|MAX|ROUND|IF|COUNT)?[A-Z0-9:+\-*/().,;\s$<>=]*$/i;

export function validateSheets(spec: unknown): SheetSpec[] {
  const sheets = (spec as any)?.sheets;
  if (!Array.isArray(sheets) || !sheets.length) throw new Error('La hoja no tiene pestañas');
  return sheets.slice(0, 4).map((s: any, si: number) => {
    const columns = (Array.isArray(s.columns) ? s.columns : []).slice(0, 12).map((c: unknown) => String(c).slice(0, 60));
    if (!columns.length) throw new Error(`Pestaña ${si + 1} sin columnas`);
    const rows = (Array.isArray(s.rows) ? s.rows : []).slice(0, 200).map((r: unknown[]) => (Array.isArray(r) ? r : []).slice(0, columns.length).map(v => {
      if (typeof v === 'number' && isFinite(v)) return v;
      const t = String(v ?? '').slice(0, 300);
      if (t.startsWith('=') && !FORMULA_OK.test(t)) throw new Error(`Fórmula no permitida: ${t.slice(0, 40)}`);
      return t;
    }));
    if (!rows.length) throw new Error(`Pestaña ${si + 1} sin filas`);
    return { name: String(s.name || `Hoja${si + 1}`).replace(/[\\/?*[\]:]/g, ' ').slice(0, 30), columns, rows, notes: (s.notes || []).slice(0, 10).map((n: unknown) => String(n).slice(0, 300)) };
  });
}

export async function createXlsx(sheets: SheetSpec[], title: string): Promise<{ bytes: Uint8Array; formulas: number }> {
  const zip = new JSZip(); let formulas = 0;
  const sheetXml = (s: SheetSpec) => {
    const all: (string | number | null)[][] = [s.columns, ...s.rows, ...(s.notes?.length ? [[], ...s.notes.map(n => [n])] : [])];
    const rowsXml = all.map((r, ri) => `<row r="${ri + 1}">${r.map((v, ci) => {
      const ref = `${colName(ci)}${ri + 1}`, st = ri === 0 ? ' s="1"' : '';
      if (v === null || v === '') return '';
      if (typeof v === 'number') return `<c r="${ref}"${st}><v>${v}</v></c>`;
      if (v.startsWith('=')) { formulas++; return `<c r="${ref}"${st}><f>${esc(v.slice(1))}</f></c>`; }
      return `<c r="${ref}" t="inlineStr"${st}><is><t xml:space="preserve">${esc(v)}</t></is></c>`;
    }).join('')}</row>`).join('');
    const cols = s.columns.map((c, i) => `<col min="${i + 1}" max="${i + 1}" width="${Math.min(48, Math.max(12, c.length + 6))}" customWidth="1"/>`).join('');
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>${cols}</cols><sheetData>${rowsXml}</sheetData></worksheet>`;
  };
  zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`);
  zip.file('_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`);
  zip.file('docProps/core.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${esc(title)}</dc:title><dc:creator>PULSE HQ</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created></cp:coreProperties>`);
  zip.file('xl/workbook.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheets.map((s, i) => `<sheet name="${esc(s.name)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join('')}</sheets><calcPr calcId="191029" fullCalcOnLoad="1"/></workbook>`);
  zip.file('xl/_rels/workbook.xml.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join('')}<Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
  zip.file('xl/styles.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF2A2520"/></patternFill></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="2"><xf/><xf fontId="1" fillId="2" applyFont="1" applyFill="1"/></cellXfs></styleSheet>`);
  sheets.forEach((s, i) => zip.file(`xl/worksheets/sheet${i + 1}.xml`, sheetXml(s)));
  const bytes = await zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' });
  // validación: reabrir el paquete y comprobar sus partes
  const back = await JSZip.loadAsync(bytes);
  if (!back.file('xl/workbook.xml') || !back.file('xl/worksheets/sheet1.xml')) throw new Error('XLSX inválido');
  return { bytes, formulas };
}
