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
 '<p class="desc">Archivos de trabajo privados generados por los departamentos. Descarga los informes y vectores editables para revisarlos, corregirlos o usarlos como base. Un archivo generado no es automáticamente un diseño profesional aprobado.</p>'+
 '<div class="stats"><div class="stat"><b>'+files.length+'</b><span>Archivos</span></div><div class="stat tint"><b>'+previews+'</b><span>Diseños SVG</span></div><div class="stat warn"><b>'+pdfs+'</b><span>Informes PDF</span></div></div>'+
 '<button class="btn slim full" data-action="delivery-refresh">↻ Actualizar producción</button>';
 if(state.deliveryNotice)out+='<div class="notice">'+esc(state.deliveryNotice)+'</div>';
 out+='<div class="notice">CONTROL DE CALIDAD: las plantillas antiguas son demostraciones técnicas, NO materiales finales para clientes. Los nuevos trabajos deben cumplir el contrato del departamento y recibir revisión visual y editorial antes de usarse. Ningún archivo se envía a clientes automáticamente.</div>';
 if(!groups.length){
  out+=card('<h3>Preparando archivos</h3><p>'+(
   jobs.some(j=>['queued','processing'].includes(j.status))?'El estudio está preparando las primeras entregas.':'Las tareas completadas todavía no tienen archivos disponibles.'
  )+'</p>');
 }
 const jobCounts=jobs.reduce((acc,j)=>{acc[j.status]=(acc[j.status]||0)+1;return acc},{});
 if(jobCounts.queued||jobCounts.processing)out+='<p class="muted">En producción: '+(jobCounts.queued||0)+' en cola, '+(jobCounts.processing||0)+' procesando.</p>';
 if(jobCounts.failed)out+='<div class="notice">'+jobCounts.failed+' producción(es) con error. Puedes consultar el resultado de la tarea mientras se revisa el generador.</div>';
 out+=section('ARCHIVOS GENERADOS',groups.length+' TAREAS');
 for(const [i,g] of groups.entries()){
  out+='<details class="card" '+(i===0?'open':'')+' style="margin-bottom:12px"><summary style="cursor:pointer"><strong>'+esc(g.dept)+'</strong><div class="muted" style="margin-top:6px;font-size:12px">'+esc(String(g.title).slice(0,155))+'</div><small>'+g.files.length+' archivos · Abrir paquete</small></summary>';
  const review=(state.qualityReviews||[]).find(q=>q.task_id===g.taskId);
  const reviewLabel=review?.status==='needs_revision'?'REQUIERE REDISEÑO':review?.status==='passed'?'REVISADO':review?.status==='needs_review'?'POR REVISAR':'SIN REVISIÓN';
  out+='<p style="margin:10px 0;padding:10px 12px;border:1px solid #685d48;border-radius:10px;font-size:12px;color:#e6c895"><strong>Calidad:</strong> '+esc(reviewLabel)+' · '+esc(review?.quality_level==='client_ready'?'Aprobado para cliente':'BORRADOR INTERNO')+'</p>';
  const sorted=g.files.slice().sort((a,b)=>['report_pdf','post_portrait','story_vertical','post_square','report_markdown'].indexOf(a.variant)-['report_pdf','post_portrait','story_vertical','post_square','report_markdown'].indexOf(b.variant));
  out+='<button class="btn main full" data-delivery-zip="'+esc(g.taskId)+'"'+(!sorted.every(x=>Boolean(urlById[x.id]))||state.deliveryBusy?' disabled':'')+'>⬇ Descargar paquete completo ZIP (PDF + SVG + PNG)</button>';
  for(const f of sorted){
   const link=urlById[f.id];
   out+='<div style="border-top:1px solid #304357;margin-top:14px;padding-top:14px">';
   out+='<div class="row between"><strong style="font-size:14px">'+esc(f.title)+'</strong><span class="pill off">'+esc(f.mime_type==='image/svg+xml'?'SVG · BORRADOR':f.mime_type==='application/pdf'?'PDF · INTERNO':'MD · INTERNO')+'</span></div>';
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
 out+=card('<p><strong>Archivos editables, sin cuenta de pago adicional:</strong> descarga un SVG y ábrelo en Figma, Canva o un editor vectorial compatible. Algunos elementos de texto o degradados pueden requerir ajustes tras la importación.</p><p>La cuenta Figma vinculada a ChatGPT está configurada con asiento de visualización. Crear piezas en Figma desde el servidor de PULSE HQ requerirá autorización e integración adicional; todavía no está operativo.</p><p><a href="https://www.figma.com/files/" target="_blank" rel="noopener noreferrer">Abrir mis archivos de Figma ↗</a></p>');
 return out;
}

async function svgToPng(svg,width,height){
 const blobUrl=URL.createObjectURL(svg);
 try{
  const image=new Image();
  await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(Error("No se pudo abrir el vector SVG"));image.src=blobUrl});
  const canvas=document.createElement("canvas");canvas.width=width||1080;canvas.height=height||1350;
  const ctx=canvas.getContext("2d");if(!ctx)throw Error("Canvas no disponible en este navegador");
  ctx.drawImage(image,0,0,canvas.width,canvas.height);
  return await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error("No se pudo convertir el vector a PNG")),"image/png"));
 }finally{URL.revokeObjectURL(blobUrl)}
}
function download(blob,name){
 const url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),120000);
}
async function exportPng(file,uri){
 if(file?.mime_type!=="image/svg+xml"||!uri)throw Error("Diseño no disponible");
 const response=await fetch(uri,{cache:"no-store"});
 if(!response.ok)throw Error("No se pudo abrir el diseño privado");
 const png=await svgToPng(await response.blob(),file.width,file.height);
 download(png,(file.filename||"diseno.svg").replace(/\.svg$/i,".png"));
}
async function exportZip(files,links,taskLabel){
 if(!window.JSZip)throw Error("El motor ZIP no está cargado. Actualiza Safari.");
 if(!files?.length)throw Error("No hay archivos disponibles");
 const zip=new window.JSZip();
 const dir=zip.folder("PULSE-HQ-ENTREGABLES");
 for(const f of files){
  const uri=links[f.id];
  if(!uri)throw Error("Falta el enlace de "+f.title+". Actualiza archivos.");
  const res=await fetch(uri,{cache:"no-store"});
  if(!res.ok)throw Error("No se pudo obtener "+f.filename);
  const blob=await res.blob();
  dir.file(f.filename,blob);
  if(f.mime_type==="image/svg+xml"){
   const png=await svgToPng(blob,f.width,f.height);
   dir.file(f.filename.replace(/\.svg$/i,".png"),png);
  }
 }
 dir.file("LEEME.txt","PULSE HQ - Entregables generados de tareas internas.\nLas piezas SVG son vectores originales editables en herramientas compatibles.\nLos PNG son exportaciones de esas piezas.\nLos informes deben revisarse antes de uso comercial.\nLos archivos no representan publicaciones, contactos o ventas ejecutadas.\n");
 const result=await zip.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:4}});
 const safe=String(taskLabel||"campana").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").slice(0,44).toLowerCase()||"entregables";
 download(result,"PULSE-HQ-"+safe+".zip");
}
window.PulseDeliverableStudio={render,exportPng,exportZip,BUCKET};
})();