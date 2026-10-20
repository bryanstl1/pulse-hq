(function(){
"use strict";
const safe=(s,v)=>s(String(v??""));
function render(state,esc,card,section){
 if(state.mode==="demo")return '<h1 class="heading">Empresa V01</h1>'+card("<p>Inicia sesión para consultar entregables reales.</p>");
 if(!state.ventureReady)return '<h1 class="heading">Empresa V01</h1>'+card("<p>Consultando operación...</p>");
 const v=state.ventureRows[0],p=state.venturePacks.find(x=>x.id===state.ventureSelected)||state.venturePacks[0];
 if(!v)return '<h1 class="heading">Empresa V01</h1>'+card("<p>Unidad comercial no configurada.</p>");
 const out=[];
 out.push('<div class="eyebrow">PULSE HQ / EMPRESA INDEPENDIENTE</div><h1 class="heading">PET BRAND OPS 🐾</h1>');
 out.push('<p class="desc">Primera unidad comercial: suscripción de kits de marketing para estéticas caninas de México.</p>');
 out.push('<div class="stats"><div class="stat"><b>'+state.venturePacks.length+'</b><span>Kits producidos</span></div><div class="stat tint"><b>3</b><span>Artes por kit</span></div><div class="stat warn"><b>0</b><span>Clientes confirmados</span></div></div>');
 out.push(card('<div class="row between"><strong>'+safe(esc,v.internal_name)+'</strong><span class="pill off">'+safe(esc,v.status==="validation"?"Validación":v.status)+'</span></div><p><strong>Comprador:</strong> '+safe(esc,v.buyer)+'</p><p><strong>Producto:</strong> '+safe(esc,v.business_model)+'</p><p><strong>Precio de prueba:</strong> $'+safe(esc,v.price_test_mxn)+' MXN/mes (hipótesis, no cobro activo).</p><div class="notice">Sin clientes ni ventas confirmadas. Los artes son ilustraciones vectoriales originales y no fotografías de IA. No se publica ni contacta automáticamente.</div>'));
 out.push(section("CENTRO DE PRODUCCIÓN","ENTREGABLES"));
 out.push('<button class="btn main full" data-nav="deliverables">✦ Abrir archivos automáticos de todos los departamentos ↗</button>');
 if(!p){out.push(card('<p>Aún no existe una campaña guardada.</p>'));return out.join("")}
 const options=state.venturePacks.map(x=>'<option value="'+safe(esc,x.id)+'"'+(p.id===x.id?' selected':'')+'>'+safe(esc,x.week_start)+' · '+safe(esc,x.campaign_name)+'</option>').join("");
 const label={pending_review:"Pendiente de revisión",approved:"Aprobado internamente",rejected:"Requiere correcciones"}[p.status]||p.status;
 const packBox=[];
 packBox.push('<h3>'+safe(esc,p.campaign_name)+'</h3><div class="row between"><span class="pill '+(p.status==="approved"?"success":"off")+'">'+safe(esc,label)+'</span><span class="muted">Semana '+safe(esc,p.week_start)+'</span></div>');
 packBox.push('<label for="ventureSelect">Campañas anteriores</label><select id="ventureSelect" class="venture-form">'+options+'</select>');
 packBox.push('<label for="ventureBrand">Marca que aparecerá en las imágenes</label><input id="ventureBrand" class="venture-form" maxlength="31" value="'+safe(esc,state.ventureBrand)+'">');
 packBox.push('<button class="btn slim full" data-action="venture-preview">Actualizar vista previa</button>');
 packBox.push('<button class="btn main full" data-action="venture-zip"'+(state.ventureExporting?" disabled":"")+'>⬇ Descargar kit ZIP: 3 PNG + PDF + copies</button>');
 packBox.push('<button class="btn slim full" data-action="venture-pdf"'+(state.ventureExporting?" disabled":"")+'>⬇ Descargar dossier PDF</button>');
 packBox.push('<div class="notice">Tres artes a 1080 píxeles de ancho y PDF con imágenes, copies, estrategia, plan comercial y finanzas.</div>');
 if(p.error)packBox.push('<p class="muted">Incidencia de generación: '+safe(esc,p.error)+'</p>');
 out.push(card(packBox.join("")));
 const art=[];
 if(Array.isArray(p.posts)&&window.PulseVentureStudio){
  p.posts.forEach((post,i)=>{
    const uri=window.PulseVentureStudio.preview(post,i,state.ventureBrand);
    art.push('<div class="venture-art"><img loading="lazy" src="'+uri+'" alt="Arte visual '+(i+1)+' de estética canina">');
    art.push('<strong>Imagen '+(i+1)+' · '+safe(esc,post.format||"post")+'</strong>');
    art.push('<button class="btn slim" data-venture-image="'+i+'">⬇ Descargar PNG</button>');
    art.push('<details><summary>Ver texto de la publicación</summary><p>'+safe(esc,post.caption||"")+'</p></details></div>');
  });
 }
 out.push('<div class="venture-grid">'+art.join("")+'</div>');
 out.push(section("TRABAJO DE LOS DEPARTAMENTOS","DOSSIER"));
 out.push(card('<h3>Dirección · Marketing · Contenido</h3><div class="venture-memo">'+safe(esc,p.strategic_brief)+'</div>'));
 out.push(card('<h3>Ventas · Atención</h3><div class="venture-memo">'+safe(esc,p.sales_playbook)+'</div>'));
 out.push(card('<h3>Finanzas · Control</h3><div class="venture-memo">'+safe(esc,p.finance_review)+'</div>'));
 out.push('<div class="notice">Una campaña nueva cada lunes a las 9:00 a. m. (CDMX), sujeto a cuota de Gemini. Los entregables esperan tu aprobación. No se envían campañas ni ofertas sin autorización.</div>');
 if(state.ventureNotice)out.push('<div class="notice">'+safe(esc,state.ventureNotice)+'</div>');
 return out.join("");
}
window.PulseVenturePanel={render};
})();