import {createClient} from "https://esm.sh/@supabase/supabase-js@2";
import {PDFDocument,StandardFonts,rgb} from "npm:pdf-lib@1.17.1";

const BUCKET="pulse-deliverables";
const bytes=(s:string)=>new TextEncoder().encode(s);
const send=(body:unknown,status=200)=>new Response(JSON.stringify(body),{status,headers:{"content-type":"application/json; charset=utf-8"}});
const secret=(key:string)=>String(Deno.env.get(key)||"").trim();
const equal=(a:string,b:string)=>{if(!a||!b||a.length!==b.length)return false;let diff=0;for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);return diff===0};
const xml=(v:string)=>String(v||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
const latin=(v:string)=>String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u2013\u2014]/g,"-").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[^\x20-\x7E]/g," ").replace(/  +/g," ").trim();
const trim=(v:string,n:number)=>v.length>n?v.slice(0,n-1)+"…":v;
const short=(v:string,n:number)=>trim(String(v||"").replace(/\s+/g," ").trim(),n);
type Job={task_id:string,user_id:string,department:string,instruction:string,result:string};
type Variant="report_pdf"|"report_markdown"|"post_portrait"|"story_vertical"|"post_square";
type Output={variant:Variant,title:string,name:string,mime:string,body:Uint8Array,w?:number,h?:number,source:"generated_template"|"authored_report"};
function fitWords(text:string,max=17,lines=3){
 const words=String(text).replace(/\s+/g," ").trim().split(" ");
 const out:string[]=[];let current="";
 for(const word of words){if((current+" "+word).trim().length>max&&current){out.push(current);current=word}else current=(current+" "+word).trim()}
 if(current)out.push(current);
 if(out.length>lines){out[lines-1]=trim(out.slice(lines-1).join(" "),max+8);return out.slice(0,lines)}
 return out;
}
function poster(task:Job,variant:"post_portrait"|"story_vertical"|"post_square",order:number):Output{
 const dog=/canin|peluquer[ií]a\s+de\s+mascotas|grooming|mascotas/i.test(task.instruction+" "+task.result);
 const branded=/OCESA/i.test(task.instruction);
 const H=variant==="story_vertical"?1920:variant==="post_square"?1080:1350;
 const W=1080, centerY=variant==="story_vertical"?1060:variant==="post_square"?570:740;
 const dogTitles=["CUIDADOS QUE SE NOTAN","SU BIENESTAR IMPORTA","HORA DE CONSENTIRLOS"];
 const dogBodies=[
  "Ideas para acercar tu estética canina a su comunidad.",
  "Cepillado, higiene y paciencia. Cada mascota es única.",
  "Una invitación a consultar la próxima cita."
 ];
 const basics=["UNA IDEA. TRES FORMATOS.","TU PRÓXIMA CAMPAÑA EMPIEZA AQUÍ","DISEÑO CON INTENCIÓN"];
 const headline=dog?dogTitles[order]:branded?"CONCEPTO VISUAL / NO OFICIAL":order===0?short(task.instruction.replace(/^Operación empresarial V\d+\s*·\s*/i,""),49).toUpperCase():basics[order];
 const subtitle=dog?dogBodies[order]:branded?"Material interno de exploración. Sin vinculación comercial.":"Propuesta editorial editable · Ajustar a cada cliente.";
 const lines=fitWords(headline,variant==="post_square"?18:20,3);
 const header='PULSE HQ   /   ESTUDIO CREATIVO';
 const label=dog?"ESTÉTICAS CANINAS / KIT DEMO":branded?"CONCEPTO INDEPENDIENTE · NO OFICIAL":short(task.department.toUpperCase(),38);
 const fontSize=variant==="post_square"?70:variant==="story_vertical"?92:84;
 const yy=variant==="story_vertical"?440:variant==="post_square"?250:335;
 const labelY=H-162;
 const headlineSvg=lines.map((t,i)=>'<text x="86" y="'+(yy+i*(fontSize*1.12))+'" font-family="Arial,Helvetica,sans-serif" font-size="'+fontSize+'" font-weight="900" letter-spacing="-2" fill="#153540">'+xml(t)+'</text>').join("");
 const artY=centerY,artX=710;
 const dogFigure='<g transform="translate('+artX+' '+artY+')">'+
  '<circle r="228" fill="#153540"/><circle r="196" fill="#F7EEDF"/>'+
  '<ellipse cx="-111" cy="-65" rx="57" ry="115" fill="#153540" transform="rotate(-23 -111 -65)"/>'+
  '<ellipse cx="111" cy="-65" rx="57" ry="115" fill="#153540" transform="rotate(23 111 -65)"/>'+
  '<path d="M-133 20 Q-150 -112 0 -136 Q150 -112 133 20 Q101 154 0 162 Q-101 154 -133 20Z" fill="#CFA97F"/>'+
  '<ellipse cx="-57" cy="2" rx="12" ry="16" fill="#153540"/><ellipse cx="57" cy="2" rx="12" ry="16" fill="#153540"/>'+
  '<path d="M-29 67 Q0 43 29 67 L0 91Z" fill="#153540"/>'+
  '<path d="M0 91 Q-15 122 -39 109 M0 91 Q15 122 39 109" fill="none" stroke="#153540" stroke-width="11" stroke-linecap="round"/>'+
  '<circle cx="135" cy="-150" r="39" fill="#FF936C"/><path d="M120 -151h30M135 -166v30" stroke="#153540" stroke-width="7" stroke-linecap="round"/>'+
  '</g>';
 const abstract='<g transform="translate('+artX+' '+artY+')">'+
  '<circle r="245" fill="#153540"/><circle r="205" fill="#80CEB5"/>'+
  '<circle r="152" fill="#F8EFE1"/><circle r="98" fill="#F18F6C"/>'+
  '<path d="M-230 40 Q0 -260 240 10" stroke="#153540" fill="none" stroke-width="35"/>'+
  '<circle cx="-187" cy="-177" r="56" fill="#FF936C"/>'+
  '<path d="M-224 200 L90 -170" stroke="#153540" stroke-width="18" stroke-linecap="round"/>'+
  '</g>';
 const color="#153540";
 const svg='<?xml version="1.0" encoding="UTF-8"?>'+
 '<svg xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="'+H+'" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+xml(headline)+'">'+
 '<defs><linearGradient id="paper" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#FAF3E7"/><stop offset="1" stop-color="#E4ECDE"/></linearGradient><pattern id="grain" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1" fill="#153540" opacity=".1"/></pattern></defs>'+
 '<rect width="'+W+'" height="'+H+'" fill="url(#paper)"/><rect width="'+W+'" height="'+H+'" fill="url(#grain)"/>'+
 '<rect x="38" y="38" width="1004" height="'+(H-76)+'" rx="30" fill="none" stroke="'+color+'" stroke-opacity=".26" stroke-width="2"/>'+
 '<rect x="85" y="73" rx="13" width="54" height="54" fill="'+color+'"/><path d="M100 101h25M112 88v26" stroke="#FAF3E7" stroke-width="5" stroke-linecap="round"/>'+
 '<text x="154" y="110" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="700" letter-spacing="3" fill="'+color+'">'+xml(header)+'</text>'+
 '<text x="928" y="110" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="700" text-anchor="end" fill="'+color+'">0'+(order+1)+' / 03</text>'+
 '<rect x="84" y="163" width="910" height="2" fill="'+color+'" opacity=".20"/>'+
 '<text x="86" y="'+(yy-70)+'" font-family="Arial,Helvetica,sans-serif" font-size="27" font-weight="700" letter-spacing="5" fill="#426C67">EDICIÓN VISUAL · BORRADOR</text>'+
 headlineSvg+
 '<rect x="86" y="'+(centerY-130)+'" rx="22" width="285" height="75" fill="#153540"/>'+
 '<text x="228" y="'+(centerY-81)+'" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="25" font-weight="700" letter-spacing="2" fill="#F9F3E8">'+xml(dog?"CUIDADO CANINO":"IDEA EN PROCESO")+'</text>'+
 (dog?dogFigure:abstract)+
 '<rect x="86" y="'+(H-306)+'" width="755" height="3" fill="'+color+'" opacity=".28"/>'+
 '<text x="86" y="'+(H-248)+'" font-family="Arial,Helvetica,sans-serif" font-size="31" fill="'+color+'">'+xml(short(subtitle,58))+'</text>'+
 '<text x="86" y="'+labelY+'" font-family="Arial,Helvetica,sans-serif" font-size="23" font-weight="700" letter-spacing="3" fill="'+color+'">'+xml(label)+'</text>'+
 '<text x="86" y="'+(H-93)+'" font-family="Arial,Helvetica,sans-serif" font-size="20" fill="#56776F">Plantilla original editable · Personalizar antes de publicar</text>'+
 '</svg>';
 const name=variant==="post_portrait"?"01_post_1080x1350.svg":variant==="story_vertical"?"02_story_1080x1920.svg":"03_cuadrado_1080x1080.svg";
 return {variant,title:variant==="post_portrait"?"Post vertical 4:5":variant==="story_vertical"?"Historia vertical 9:16":"Post cuadrado 1:1",name,mime:"image/svg+xml",body:bytes(svg),w:W,h:H,source:"generated_template"};
}
async function reportPdf(task:Job):Promise<Uint8Array>{
 const pdf=await PDFDocument.create();
 pdf.setTitle("PULSE HQ | "+latin(task.department));
 pdf.setSubject(latin(task.instruction));
 pdf.setAuthor("PULSE HQ - Produccion documental interna");
 const bold=await pdf.embedFont(StandardFonts.HelveticaBold);
 const regular=await pdf.embedFont(StandardFonts.Helvetica);
 const bg=rgb(0.047,0.075,0.11),ink=rgb(0.12,0.2,0.27),teal=rgb(.17,.67,.59),muted=rgb(.43,.52,.57);
 const pageW=595,pageH=842,margin=57;
 let page=pdf.addPage([pageW,pageH]);page.drawRectangle({x:0,y:0,width:pageW,height:pageH,color:bg});
 page.drawRectangle({x:margin,y:pageH-118,width:72,height:6,color:teal});
 page.drawText("PULSE HQ  /  ARCHIVO DE ENTREGABLES",{x:margin,y:pageH-160,size:10,font:bold,color:rgb(.72,.83,.85)});
 const dept=latin(task.department).toUpperCase();
 page.drawText(latin(task.department).slice(0,60),{x:margin,y:pageH-235,size:22,font:bold,color:rgb(.97,.97,.96)});
 page.drawText("INFORME DEL DEPARTAMENTO",{x:margin,y:pageH-272,size:12,font:regular,color:rgb(.65,.81,.78)});
 let y=pageH-340;
 const title=latin(task.instruction).slice(0,145);
 function coverWrap(text:string,font:any,size:number,width:number){
  const arr:string[]=[];let line="";
  for(const word of text.split(/\s+/)){const next=(line?line+" ":"")+word;if(font.widthOfTextAtSize(next,size)>width&&line){arr.push(line);line=word}else line=next}
  if(line)arr.push(line);return arr;
 }
 for(const line of coverWrap(title,bold,17,pageW-2*margin).slice(0,7)){page.drawText(line,{x:margin,y,size:17,font:bold,color:rgb(.99,.99,.95)});y-=28}
 page.drawText("Documento generado a partir de resultados internos de IA.",{x:margin,y:116,size:10,font:regular,color:rgb(.69,.81,.83)});
 page.drawText("Revisar datos, fuentes y permisos antes de uso comercial.",{x:margin,y:98,size:10,font:regular,color:rgb(.69,.81,.83)});
 const stamp="GENERADO: "+new Date().toISOString().slice(0,10);
 page.drawText(stamp,{x:margin,y:64,size:9,font:bold,color:rgb(.50,.79,.72)});
 let count=0;
 function nextPage(){page=pdf.addPage([pageW,pageH]);count++;page.drawRectangle({x:0,y:pageH-42,width:pageW,height:42,color:bg});page.drawText("PULSE HQ  /  "+dept.slice(0,55),{x:margin,y:pageH-26,size:9,font:bold,color:rgb(.75,.86,.86)});page.drawText(String(count).padStart(2,"0"),{x:pageW-margin-12,y:22,size:9,font:regular,color:muted});y=pageH-80}
 nextPage();
 const paragraphs=task.result.split(/\r?\n/);
 let printed=0;
 for(const original of paragraphs){
  if(printed>680)break;
  const line=latin(original.replace(/^\s*(#{1,6}\s*|\*\*|[-*]\s+|\d+\.\s+)/,"")).slice(0,1600);
  if(!line){y-=8;continue}
  const heading=/^\s*(?:#{1,6}\s+|(?:\d+\.)+\s+|\*\*[^*]+?\*\*)/.test(original) || (original.length<110&&/^[A-ZÁÉÍÓÚÑ\s\d:()/-]{12,}$/.test(original.trim()));
  const font=heading?bold:regular,size=heading?11:9.4,gap=heading?18:14.1;
  const wrapped=coverWrap(line,font,size,pageW-2*margin);
  for(const segment of wrapped){
   if(y<64)nextPage();
   page.drawText(segment,{x:margin,y,size,font,color:ink});
   y-=gap;printed++;
  }
  y-=heading?7:3;
 }
 if(printed===0){page.drawText("Sin resultados de texto para exportar.",{x:margin,y,size:12,font:regular,color:ink})}
 return await pdf.save();
}
function markdown(task:Job):string{
 return "# "+task.department+"\n\n"+
 "**PULSE HQ - Entregable generado automaticamente (para revision)**\n\n"+
 "## Instruccion\n\n"+task.instruction+"\n\n"+
 "## Resultado del departamento\n\n"+task.result+"\n\n"+
 "## Estado\n\nDocumento interno: verificar hechos, derechos y fuentes antes de publicar o contactar a terceros.\n";
}
Deno.serve(async(req:Request)=>{
 if(req.method!=="POST")return send({ok:false,error:"Método no admitido"},405);
 const adminUrl=secret("SUPABASE_URL"),adminKey=secret("SUPABASE_SERVICE_ROLE_KEY");
 if(!adminUrl||!adminKey)return send({ok:false,error:"No configurado"},503);
 const db=createClient(adminUrl,adminKey,{auth:{persistSession:false,autoRefreshToken:false}});
 const token=String(req.headers.get("x-pulse-scheduler-token")||"");
 const {data:credentials,error:credentialError}=await db.from("pulse_scheduler_credentials").select("token").eq("id",1).maybeSingle();
 if(credentialError||!credentials||!equal(token,String(credentials.token)))return send({ok:false,error:"Sin autorización"},401);
 const {data:jobs,error:claimError}=await db.rpc("pulse_claim_delivery_jobs",{max_jobs:3});
 if(claimError)return send({ok:false,error:"No se pudo tomar trabajos"},500);
 const results:{task:string,ok:boolean,files?:number,error?:string}[]=[];
 for(const task of (jobs||[]) as Job[]){
  try{
   const base=task.user_id+"/"+task.task_id+"/";
   const work:Output[]=[
    {variant:"report_pdf",title:"Informe profesional PDF",name:"informe_departamento.pdf",mime:"application/pdf",body:await reportPdf(task),source:"authored_report"},
    {variant:"report_markdown",title:"Informe editable Markdown",name:"informe_editable.md",mime:"text/markdown",body:bytes(markdown(task)),source:"authored_report"}
   ];
   const proCreativeBrief=/PULSE STUDIO|ATELIER CALMA|BELLEZA Y WELLNESS|EDITORIAL LUXURY|AGENCIA PREMIUM/i.test(task.instruction);
   if(["Marketing y crecimiento","Producción de contenido","Comunidad"].includes(task.department)&&!proCreativeBrief){
    // Legacy vector samples are preserved strictly as technical draft templates.
    work.push(poster(task,"post_portrait",0),poster(task,"story_vertical",1),poster(task,"post_square",2));
   }
   // Professional briefs require visually inspected assets created by a real design/image engine.
   // The worker must never hallucinate client-ready imagery from placeholder SVG shapes.
   for(const o of work){
    const path=base+o.name;
    const {error:uploadError}=await db.storage.from(BUCKET).upload(path,o.body,{contentType:o.mime,upsert:true,cacheControl:"3600"});
    if(uploadError)throw Error("Almacenamiento "+o.variant+": "+uploadError.message);
    const {error:saveError}=await db.from("pulse_deliverables").upsert({
      user_id:task.user_id,task_id:task.task_id,variant:o.variant,title:o.title,filename:o.name,
      storage_path:path,mime_type:o.mime,width:o.w||null,height:o.h||null,source_type:o.source
    },{onConflict:"task_id,variant"});
    if(saveError)throw Error("Registro "+o.variant+": "+saveError.message);
   }
   const {error:doneError}=await db.from("pulse_delivery_jobs").update({status:"completed",error:null,updated_at:new Date().toISOString()}).eq("task_id",task.task_id);
   if(doneError)throw Error("Estado: "+doneError.message);
   results.push({task:task.task_id,ok:true,files:work.length});
  }catch(err){
   const message=String(err instanceof Error?err.message:err).slice(0,350);
   await db.from("pulse_delivery_jobs").update({status:"failed",error:message,updated_at:new Date().toISOString()}).eq("task_id",task.task_id);
   results.push({task:task.task_id,ok:false,error:message});
  }
 }
 return send({ok:true,processed:results.length,reports:results});
});