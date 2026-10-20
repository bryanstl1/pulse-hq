(function(){
"use strict";
const BUCKET="pulse-deliverables";
function render(state,esc,card,section){
 if(state.mode==='demo')return '<div class="eyebrow">ESTUDIO DE PRODUCCIÓN</div><h1 class="heading">Archivos de la empresa</h1>'+card('<p>Inicia sesión para acceder a los archivos reales de los departamentos.</p>');
 if(!state.deliveryReady)return '<div class="eyebrow">ESTUDIO DE PRODUCCIÓN</div><h1 class="heading">Archivos de la empresa</h1>'+card('<p>Consultando informes e imágenes producidos por los agentes...</p>');
 const files=state.deliveryFiles||[],jobs=state.deliveryJobs||[],urlById=state.deliveryUrls||{};
 const groups=[];
 for(const file of files){
  let group=groups.find(g=>g.taskId===file.task_id);
  if(!group){const task=state.tasks.find(t=>t.id===file.task_id);group={taskId:file.task_id,title:task?.instruction||"Entregables empresariales",dept:task?.department||"Departamento de PULSE HQ",date:file.created_at,files:[]};groups.push(group)}
  group.files.push(file);
 }
 const previews=files.filter(x=>x.mime_type==='image/svg+xml').length;
 const pdfs=files.filter(x=>x.mime_type==='application/pdf').length;
 let out='<div class="eyebrow">PULSE HQ / ESTUDIO MULTIMEDIA</div><h1 class="heading">Archivos de la empresa ✦</h1>'+
 '<p class="desc">Entregables reales guardados en privado por cada tarea. Descarga informes PDF, documentos editables y diseños vectoriales. Los SVG se pueden editar en Figma o Canva; también puedes obtener su PNG.</p>'+
 '<div class="stats"><div class="stat"><b>'+files.length+'</b><span>Archivos</span></div><div class="stat tint"><b>'+previews+'</b><span>Diseños SVG</span></div><div class="stat warn"><b>'+pdfs+'</b><span>Informes PDF</span></div></div>'+
 '<button class="btn slim full" data-action="delivery-refresh">↻ Actualizar producción</button>';
 if(state.deliveryNotice)out+='<div class="notice">'+esc(state.deliveryNotice)+'</div>';
 out+='<div class="notice">Cada SVG es una ilustración vectorial editable, no una fotografía generada por IA. Los informes son documentos de trabajo: verificar fuentes, permisos y datos antes de publicarlos. No se envía nada a clientes automáticamente.</div>';
 if(!groups.length){
  out+=card('<h3>Preparando archivos</h3><p>'+(
   jobs.some(j=>['queued','processing'].includes(j.status))?'El estudio está preparando las primeras entregas.':'Las tareas completadas todavía no tienen archivos disponibles.'
  )+'</p>');
 }
 const jobCounts=jobs.reduce((acc,j)=>{acc[j.status]=(acc[j.status]||0)+1;return acc},{});
 if(jobCounts.queued||jobCounts.processing)out+='<p class="muted">En producción: '+(jobCounts.queued||0)+' en cola, '+(jobCounts.processing||0)+' procesando.</p>';
 if(jobCounts.failed)out+='<div class="notice">'+jobCounts.failed+' producción(es) con error. Puedes consultar el resultado de la tarea mientras se revisa el generador.</div>';
 out+=section('ENTREGABLES TERMINADOS',groups.length+' TAREAS');
 for(const [i,g] of groups.entries()){
  out+='<details class="card" '+(i===0?'open':'')+' style="margin-bottom:12px"><summary style="cursor:pointer"><strong>'+esc(g.dept)+'</strong><div class="muted" style="margin-top:6px;font-size:12px">'+esc(String(g.title).slice(0,155))+'</div><small>'+g.files.length+' archivos · Abrir paquete</small></summary>';
  const sorted=g.files.slice().sort((a,b)=>['report_pdf','post_portrait','story_vertical','post_square','report_markdown'].indexOf(a.variant)-['report_pdf','post_portrait','story_vertical','post_square','report_markdown'].indexOf(b.variant));
  for(const f of sorted){
   const link=urlById[f.id];
   out+='<div style="border-top:1px solid #304357;margin-top:14px;padding-top:14px">';
   out+='<div class="row between"><strong style="font-size:14px">'+esc(f.title)+'</strong><span class="pill off">'+esc(f.mime_type==='image/svg+xml'?'SVG EDITABLE':f.mime_type==='application/pdf'?'PDF':'MD')+'</span></div>';
   if(f.mime_type==='image/svg+xml'&&link)out+='<img loading="lazy" src="'+esc(link)+'" alt="'+esc(f.title)+'" style="display:block;margin:12px auto;max-width:100%;max-height:345px;border-radius:12px;border:1px solid #39546a">';
   const label=f.mime_type==='image/svg+xml'?'Descargar SVG (Figma)':f.mime_type==='application/pdf'?'Descargar informe PDF':'Descargar texto editable';
   if(link)out+='<a class="btn slim" style="display:block;text-align:center;text-decoration:none;margin-top:9px" href="'+esc(link)+'" target="_blank" rel="noopener noreferrer" download="'+esc(f.filename)+'">⬇ '+label+'</a>';
   else out+='<p class="muted">Preparando enlace privado...</p>';
   if(f.mime_type==='image/svg+xml')out+='<button class="btn main full" data-delivery-png="'+esc(f.id)+'"'+(!link||state.deliveryBusy?' disabled':'')+'>⬇ Convertir a PNG ('+f.width+' × '+f.height+')</button>';
   out+='</div>';
  }
  out+='</details>';
 }
 out+=section('EDICIÓN EN FIGMA / CANVA');
 out+=card('<p><strong>Archivos editables, sin cuenta de pago adicional:</strong> descarga un SVG y ábrelo en Figma, Canva o un editor vectorial compatible. Algunos elementos de texto o degradados pueden requerir ajustes tras la importación.</p><p>La cuenta Figma vinculada a ChatGPT tiene actualmente asiento de visualización, por lo que no hemos activado escritura automática desde PULSE HQ.</p><p><a href="https://www.figma.com/files/" target="_blank" rel="noopener noreferrer">Abrir mis archivos de Figma ↗</a></p>');
 return out;
}
async function exportPng(file,uri){
 if(file?.mime_type!=='image/svg+xml'||!uri)throw Error('Archivo no disponible.');
 const response=await fetch(uri,{cache:'no-store'});
 if(!response.ok)throw Error('No se pudo descargar el diseño SVG');
 const svg=await response.blob(),blobUrl=URL.createObjectURL(svg);
 try{
  const img=new Image();
  await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(Error('No se pudo abrir el diseño vectorial'));img.src=blobUrl});
  const canvas=document.createElement('canvas');canvas.width=file.width||1080;canvas.height=file.height||1350;
  const ctx=canvas.getContext('2d');
  if(!ctx)throw Error('Tu navegador no admite esta exportación');
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
  const png=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('No se pudo generar PNG')),'image/png'));
  const pngUrl=URL.createObjectURL(png);const a=document.createElement('a');a.href=pngUrl;a.download=(file.filename||'diseno').replace(/\.svg$/i,'.png');document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(pngUrl),120000);
 }finally{URL.revokeObjectURL(blobUrl)}
}
window.PulseDeliverableStudio={render,exportPng,BUCKET};
})();