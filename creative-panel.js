(function(){
"use strict";
const validFile=(v)=>v&&typeof v==="object"&&["image/svg+xml","application/pdf"].includes(v.mime_type);
function render(state,esc,card,section){
 if(state.mode!=="live")return card("<h3>PULSE STUDIO · Producción creativa</h3><p>Inicia sesión para ver las campañas y sus archivos privados.</p>");
 if(!state.creativeReady)return card("<h3>Estudio Creativo</h3><p>Consultando producción, recursos visuales y revisión de calidad...</p>");
 const briefs=state.creativeBriefs||[],selected=briefs.find(x=>x.id===state.creativeSelected)||briefs[0];
 const files=(state.creativeAssets||[]).filter(x=>x.brief_id===selected?.id&&validFile(x));
 const links=state.creativeUrls||{};
 const review=(state.creativeReviews||[]).find(x=>x.brief_id===selected?.id);
 const job=(state.creativeJobs||[]).find(x=>x.brief_id===selected?.id);
 const approval=(state.approvals||[]).find(x=>x.id===selected?.approval_id);
 let out='<div class="eyebrow">DIRECCIÓN CREATIVA / PULSE STUDIO</div><h1 class="heading">Estudio Editorial ✦</h1>'+
 '<p class="desc">De brief a archivos reales: fotografía con licencia identificada, dirección de arte editorial, cinco piezas SVG con texto editable y dossier PDF. La aprobación visual del CEO es obligatoria.</p>';
 if(state.creativeNotice)out+='<div class="notice">'+esc(state.creativeNotice)+'</div>';
 out+='<button class="btn slim full" data-action="creative-refresh">↻ Actualizar campaña y archivos</button>';
 if(!selected)return out+card('<p>Sin briefs de campaña. Primero crea una misión empresarial para definir la oferta y dirección de arte.</p>');
 if(briefs.length>1){
  out+='<label for="creativeSelect">Campaña</label><select id="creativeSelect" class="venture-form">'+briefs.map(x=>'<option value="'+esc(x.id)+'"'+(selected.id===x.id?' selected':'')+'>'+esc(x.title)+'</option>').join('')+'</select>';
 }
 const status={brief:"En cola de producción",in_production:"En producción",qa:"Revisión visual del CEO",approved:"Aprobado por el CEO",revision:"Requiere correcciones"}[selected.status]||"Borrador";
 const color=selected.status==="approved"?"success":selected.status==="revision"?"warning":"off";
 out+=card('<div class="row between"><strong>'+esc(selected.title)+'</strong><span class="pill '+color+'">'+esc(status)+'</span></div>'+
 '<p><strong>Objetivo:</strong> '+esc(selected.objective)+'</p>'+
 '<p><strong>Dirección visual:</strong> '+esc(selected.visual_direction)+'</p>'+
 '<details><summary>Requisitos de calidad</summary>'+((Array.isArray(selected.quality_requirements)?selected.quality_requirements:[]).map(x=>'<p>• '+esc(x)+'</p>').join(''))+'</details>');
 out+='<div class="stats"><div class="stat"><b>'+files.length+'</b><span>Archivos verificados</span></div>'+
 '<div class="stat tint"><b>'+files.filter(x=>x.mime_type==="image/svg+xml").length+'</b><span>Diseños editables</span></div>'+
 '<div class="stat warn"><b>'+files.filter(x=>x.mime_type==="application/pdf").length+'</b><span>Dossiers PDF</span></div></div>';
 if(job?.status==="failed")out+='<div class="notice"><strong>Producción detenida:</strong> '+esc(job.last_error||"Hubo un error técnico")+'. El sistema no creará diseños genéricos como sustitutos.</div>';
 if(job?.status==="queued"||job?.status==="processing")out+='<div class="notice">El estudio está '+(job.status==="queued"?"en espera de su próxima ejecución programada.":"produciendo el paquete.")+' Se revisarán los formatos y la integridad antes de guardarlos.</div>';
 if(review?.validation)out+='<div class="notice">Control técnico: '+Number(review.validation.files||0)+' archivos completos; '+Number(review.validation.verified_photographic_sources||0)+' fuentes fotográficas identificadas. Sigue pendiente la inspección estética y de derechos por el CEO.</div>';
 if(files.length){
  out+=section("CAMPAÑA EDITORIAL","PIEZAS REALES");
  const ordered=["hero_portrait","editorial_portrait","split_portrait","story_hero","story_detail","editorial_dossier"];
  const sorted=files.slice().sort((a,b)=>ordered.indexOf(a.variant)-ordered.indexOf(b.variant));
  const ready=sorted.every(x=>Boolean(links[x.id]));
  out+='<button class="btn main full" data-creative-zip="'+esc(selected.id)+'"'+(!ready||state.creativeExporting?' disabled':'')+'>⬇ Descargar paquete completo · PNG + SVG + PDF</button>';
  out+='<div class="notice">Las fotografías aparecen integradas en el SVG, mientras que los titulares y textos permanecen editables. Los PNG se generan al descargar. No se ha publicado ni enviado nada.</div>';
  for(const f of sorted){
   const link=links[f.id];
   out+='<div class="card" style="margin:14px 0"><div class="row between"><strong>'+esc(f.variant==="editorial_dossier"?"Dossier estratégico":"Pieza editorial · "+f.title?.replace(/"/g,""))+'</strong><span class="pill off">'+(f.mime_type==="application/pdf"?"PDF":"SVG EDITABLE")+'</span></div>';
   if(f.mime_type==="image/svg+xml"&&link){
    out+='<img loading="lazy" src="'+esc(link)+'" alt="'+esc(f.title||"Diseño editorial")+'" style="width:100%;height:auto;max-height:570px;object-fit:contain;border-radius:10px;background:#eae1d5;margin:12px 0">';
   }
   if(link)out+='<a class="btn slim full" style="text-decoration:none;text-align:center;display:block" href="'+esc(link)+'" target="_blank" rel="noopener noreferrer" download="'+esc(f.filename)+'">⬇ Descargar '+(f.mime_type==="image/svg+xml"?"SVG editable":"PDF")+'</a>';
   if(f.mime_type==="image/svg+xml")out+='<button class="btn slim full" data-creative-png="'+esc(f.id)+'"'+(!link||state.creativeExporting?' disabled':'')+'>⬇ Descargar PNG '+f.width+' × '+f.height+'</button>';
   if(f.source_photo)out+='<details><summary>Origen de la fotografía</summary><p>'+esc(f.photo_credit||"")+'</p><p><a target="_blank" rel="noopener noreferrer" href="'+esc(f.source_photo)+'">Ver fotografía original</a></p><p><a target="_blank" rel="noopener noreferrer" href="'+esc(f.license_url||"https://unsplash.com/license")+'">Ver licencia</a></p></details>';
   out+='</div>';
  }
 }
 if(selected.status==="qa"&&approval?.status==="pending"&&files.length===6){
  out+=card('<h3>Decisión del CEO</h3><p>Revisa todas las imágenes, el texto, las fuentes y los derechos antes de decidir. Aprobar no publica, envía ni vende contenido.</p>'+
  '<div class="actions"><button class="btn danger" data-approval="'+esc(approval.id)+'" data-choice="rejected">Solicitar correcciones</button><button class="btn main" data-approval="'+esc(approval.id)+'" data-choice="approved">Aprobar el dossier interno</button></div>');
 }
 if(selected.status==="approved")out+='<div class="notice">Aprobado por el CEO para uso interno. No hay cliente real ni autorización de publicación o venta.</div>';
 if(selected.status==="revision")out+='<div class="notice">El CEO solicitó correcciones. Los archivos permanecen disponibles como borradores históricos hasta recibir una versión revisada.</div>';
 out+=card('<strong>Referencia creativa inicial:</strong><p><a href="https://www.canva.com/d/Jgrue8HZLb5rrM7" target="_blank" rel="noopener noreferrer">Abrir Atelier Calma en Canva ↗</a></p><p>Canva es una referencia editable creada desde la conversación. El paquete de arriba se genera desde PULSE HQ usando un motor propio, no copiando automáticamente el archivo Canva.</p>');
 return out;
}
window.PulseCreativeStudio={render};
})();