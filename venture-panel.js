(function(){
"use strict";
const escValue=(fn,x)=>fn(String(x??""));
const list=(arr)=>Array.isArray(arr)?arr:[];
function render(state,esc,card,section){
 if(state.mode==="demo")return '<h1 class="heading">PULSE STUDIO</h1>'+card("<p>Inicia sesión para consultar la empresa y sus entregables reales.</p>");
 if(!state.ventureReady)return '<h1 class="heading">PULSE STUDIO</h1>'+card("<p>Consultando la operación empresarial...</p>");
 const v=state.ventureRows.find(x=>String(x.internal_name).startsWith("PULSE STUDIO"));
 const brand=state.ventureBrandProfile;
 const offers=list(state.ventureOffers).filter(o=>o.venture_id===v?.id);
 const briefs=list(state.ventureBriefs).filter(x=>x.venture_id===v?.id);
 const legacy=state.ventureRows.filter(x=>x.id!==v?.id);
 if(!v)return '<div class="eyebrow">EMPRESA INDEPENDIENTE</div><h1 class="heading">PULSE STUDIO</h1>'+card('<p>La unidad comercial está pendiente de configurar.</p>');
 const out=[];
 out.push('<div class="eyebrow">PULSE HQ / EMPRESA INDEPENDIENTE</div><h1 class="heading">PULSE STUDIO</h1>');
 out.push('<p class="desc">Estudio de diseño editorial, crecimiento comercial y automatización para negocios. Primer sector de validación: Belleza &amp; Wellness.</p>');
 out.push('<div class="stats"><div class="stat"><b>10</b><span>Directores IA</span></div><div class="stat tint"><b>'+offers.length+'</b><span>Ofertas piloto</span></div><div class="stat warn"><b>0</b><span>Clientes confirmados</span></div></div>');
 out.push(card('<div class="row between"><strong>'+escValue(esc,v.internal_name)+'</strong><span class="pill off">Validación</span></div><p><strong>Cliente ideal:</strong> '+escValue(esc,v.buyer)+'</p><p><strong>Modelo:</strong> '+escValue(esc,v.business_model)+'</p><div class="notice">Negocio en validación. No hay ventas, contratos, cobros ni clientes confirmados.</div>'));
 out.push('<button class="btn main full" data-nav="professionals">♛ Conocer a los 10 directores profesionales</button>');

 const mission=state.missions.find(m=>m.id===v.mission_id);
 const steps=state.missionSteps.filter(s=>s.mission_id===v.mission_id);
 const done=steps.filter(s=>s.status==='completed').length;
 if(mission)out.push(card('<h3>Operación profesional de los diez departamentos</h3><div class="row between"><strong>'+done+' / '+(steps.length||11)+' etapas</strong><span class="pill '+(mission.status==='awaiting_ceo'?'warning':'off')+'">'+escValue(esc,mission.status==='active'?'En marcha':mission.status==='awaiting_ceo'?'Revisión CEO':mission.status)+'</span></div><p>Dirección, Mercado, Experiencias, Relaciones, Ventas, Marketing, Contenido, Comunidad, Finanzas y Tecnología trabajan en una misión compartida, con traspasos y control de calidad.</p><button class="btn slim full" data-venture-mission="'+escValue(esc,v.mission_id)+'">Ver avances de la misión ↗</button>'));

 out.push(section("DIRECCIÓN DE MARCA","ESTÁNDAR"));
 if(brand){
  out.push(card('<h3>'+escValue(esc,brand.visual_style)+'</h3><p><strong>Posicionamiento:</strong> '+escValue(esc,brand.positioning)+'</p><p><strong>Tono:</strong> '+escValue(esc,brand.tone)+'</p><div class="notice">PROHIBIDO: clipart genérico, caricaturas infantiles, piezas sin brief, cifras inventadas y entregables etiquetados como finales sin revisión de calidad.</div>'));
 }
 out.push(section("PRODUCTOS Y SERVICIOS","HIPÓTESIS COMERCIALES"));
 for(const offer of offers){
  const pieces=list(offer.deliverables).slice(0,6);
  out.push(card('<div class="row between"><strong>'+escValue(esc,offer.title)+'</strong><span class="pill off">POR VALIDAR</span></div><p>'+escValue(esc,offer.scope)+'</p><div style="font-size:13px;color:#bdd0dc">'+pieces.map(x=>'✓ '+escValue(esc,x)).join('<p style="margin:6px 0">')+'</div><p><strong>Precio de prueba:</strong> $'+Number(offer.price_estimate_mxn||0).toLocaleString('es-MX')+' MXN, estimación sin ventas ni mercado validado.</p>'));
 }
 out.push('<button class="btn main full" data-nav="creative">✦ Abrir Estudio Creativo: campaña visual premium</button>');
 out.push(section("PRIMER PROYECTO DE PORTAFOLIO","BRIEF PROFESIONAL"));
 for(const b of briefs){
  out.push(card('<div class="row between"><strong>'+escValue(esc,b.title)+'</strong><span class="pill off">BRIEF · SIN ASSETS FINALES</span></div><p>'+escValue(esc,b.objective)+'</p><p><strong>Audiencia:</strong> '+escValue(esc,b.audience)+'</p><p><strong>Dirección de arte:</strong> '+escValue(esc,b.visual_direction)+'</p><details><summary>Ver contrato de entregables</summary><div class="task-text">'+list(b.required_assets).map(x=>'<p>• '+escValue(esc,x)+'</p>').join('')+'</div></details><details><summary>Revisión de calidad requerida</summary><div class="task-text">'+list(b.quality_requirements).map(x=>'<p>• '+escValue(esc,x)+'</p>').join('')+'</div></details><div class="notice">Atelier Calma es una marca ficticia de muestra. No hay autorización para afirmar colaboraciones reales.</div>'));
 }
 out.push('<button class="btn main full" data-nav="deliverables">✦ Ver informes y diseños guardados</button>');
 out.push('<div class="notice">Los archivos heredados de plantilla están marcados como borradores técnicos. No se venden ni presentan como nivel agencia. Las imágenes premium requieren producción, inspección visual y aprobación antes de considerarse finales.</div>');
 if(legacy.length){
  out.push('<details class="card"><summary style="cursor:pointer">Archivo histórico · Pilotos anteriores ('+legacy.length+')</summary><p>Los experimentos antiguos se conservan para consulta, sin mezclarse con PULSE STUDIO.</p>'+legacy.map(x=>'<p>'+escValue(esc,x.internal_name)+' · '+escValue(esc,x.status)+'</p>').join('')+'</details>');
 }
 if(state.ventureNotice)out.push('<div class="notice">'+escValue(esc,state.ventureNotice)+'</div>');
 return out.join('');
}
window.PulseVenturePanel={render};
})();