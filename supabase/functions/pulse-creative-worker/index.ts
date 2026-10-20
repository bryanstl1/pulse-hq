import {createClient} from "https://esm.sh/@supabase/supabase-js@2";
import {PDFDocument,StandardFonts,rgb} from "npm:pdf-lib@1.17.1";
const BUCKET="pulse-deliverables";
const env=(key:string)=>String(Deno.env.get(key)||"").trim();
const eq=(a:string,b:string)=>{if(!a||a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0};
const response=(obj:unknown,status=200)=>new Response(JSON.stringify(obj),{status,headers:{"Content-Type":"application/json"}});
const esc=(s:unknown)=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]||c));
const safe=(s:unknown,n:number)=>String(s??"").replace(/[\x00-\x1f]+/g," ").replace(/\s+/g," ").trim().slice(0,n);
const bytes=(s:string)=>new TextEncoder().encode(s);
const LICENSE="https://unsplash.com/license";
const STOCK=[
 {url:"https://images.unsplash.com/photo-1762631203805-88841687ab4d?fm=jpg&fit=crop&w=1080&q=73",page:"https://unsplash.com/photos/modern-bathroom-with-a-small-pool-and-round-window-O_E78mH4J5A",author:"Ela De Pure / Unsplash"},
 {url:"https://images.unsplash.com/photo-1763485956293-873ea83bf095?fm=jpg&fit=crop&w=1080&q=73",page:"https://unsplash.com/photos/modern-bathroom-with-glass-shower-enclosure-zYIUp9jf6nI",author:"Peter Muniz / Unsplash"},
 {url:"https://images.unsplash.com/photo-1774876549389-f12726f45fd0?fm=jpg&fit=crop&w=1080&q=73",page:"https://unsplash.com/photos/interior-of-a-wooden-sauna-with-stones-gKY3r9fI1rw",author:"HUUM / Unsplash"}
] as const;
type Job={brief_id:string,user_id:string,title:string,objective:string,audience:string,core_message:string,visual_direction:string,creative_copy:Record<string,string>,sector:string,brand_name:string};
type Photo={raw:Uint8Array,uri:string,meta:typeof STOCK[number]};
type Asset={variant:string,name:string,title:string,mime:string,w?:number,h?:number,source?:typeof STOCK[number],data:Uint8Array};
function b64(input:Uint8Array):string{
 let binary="";
 for(let i=0;i<input.length;i+=16000)binary+=String.fromCharCode(...input.subarray(i,i+16000));
 return btoa(binary);
}
async function photo(meta:typeof STOCK[number]):Promise<Photo>{
 const url=new URL(meta.url);
 if(url.hostname!=="images.unsplash.com"||url.protocol!=="https:")throw Error("Fuente externa no autorizada");
 const res=await fetch(meta.url,{signal:AbortSignal.timeout(13000),headers:{"Accept":"image/jpeg"}});
 if(!res.ok||!String(res.headers.get("content-type")||"").startsWith("image/jpeg"))throw Error("Foto no disponible: "+res.status);
 const raw=new Uint8Array(await res.arrayBuffer());
 if(raw.length<12000||raw.length>1900000||raw[0]!==0xff||raw[1]!==0xd8)throw Error("Foto inválida o demasiado grande");
 return {raw,uri:"data:image/jpeg;base64,"+b64(raw),meta};
}
const C={ivory:"#F4EFE8",paper:"#EAE1D5",ink:"#262824",muted:"#77796E",sage:"#849184",brown:"#A98770",white:"#FFFFFF"};
function fitLines(v:unknown,max=24,limit=3){
 const words=safe(v,150).split(/\s+/);const result:string[]=[];let line="";
 for(const word of words){if(line && (line+" "+word).length>max){result.push(line);line=word;}else line+=(line?" ":"")+word}
 if(line)result.push(line);
 if(result.length>limit){result[limit-1]=result.slice(limit-1).join(" ").slice(0,max+7);return result.slice(0,limit)}
 return result;
}
function txt(x:number,y:number,value:unknown,size:number,fill:string,weight=400,family="Georgia,Times New Roman,serif",tracking=0,anchor="start"){
 return '<text x="'+x+'" y="'+y+'" font-family="'+esc(family)+'" font-size="'+size+'" font-weight="'+weight+'" letter-spacing="'+tracking+'" fill="'+fill+'" text-anchor="'+anchor+'">'+esc(value)+'</text>';
}
function lines(x:number,y:number,v:unknown,size:number,max:number,gap:number,fill:string,maxLines=3){
 return fitLines(v,max,maxLines).map((line,i)=>txt(x,y+i*gap,line,size,fill)).join("");
}
function image(p:Photo,x:number,y:number,w:number,h:number){
 return '<image x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" href="'+p.uri+'" preserveAspectRatio="xMidYMid slice"/>';
}
function outer(w:number,h:number,inside:string){
 return '<?xml version="1.0" encoding="UTF-8"?>'+
 '<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" role="img" aria-label="Pieza editorial profesional en revisión">'+
 '<rect width="'+w+'" height="'+h+'" fill="'+C.ivory+'"/>'+inside+'</svg>';
}
function brandLabel(brand:string,dark=false,x=84,y=95){
 return txt(x,y,brand.toUpperCase(),22,dark?C.ivory:C.ink,700,"Arial,Helvetica,sans-serif",5);
}
function foot(label:string,w=1080,h=1350,dark=false){
 return '<path d="M84 '+(h-114)+' H'+(w-84)+'" stroke="'+(dark?C.ivory:C.ink)+'" stroke-opacity=".25"/>'+
 txt(84,h-73,label.toUpperCase(),16,dark?C.ivory:C.muted,500,"Arial,Helvetica,sans-serif",2)+
 txt(w-84,h-73,"PULSE STUDIO  /  PORTAFOLIO FICTICIO",15,dark?C.ivory:C.muted,500,"Arial,Helvetica,sans-serif",1.3,"end");
}
function renderLayout(layout:number,job:Job,photos:Photo[],content:Record<string,string>):Asset {
 const isStory=layout>=3, w=1080,h=isStory?1920:1350;
 const name=["01_hero_1080x1350.svg","02_editorial_1080x1350.svg","03_split_1080x1350.svg","04_story_1080x1920.svg","05_story_detail_1080x1920.svg"][layout];
 const titles=["Portada principal","Post editorial","Post compositivo","Historia principal","Historia secundaria"];
 const variant=["hero_portrait","editorial_portrait","split_portrait","story_hero","story_detail"][layout];
 const brand=safe(content.brand||"ATELIER CALMA",33);
 const main=(content.hero||"El lujo de volver a ti.");
 let art="";
 if(layout===0){
  const photo=photos[0];
  art=image(photo,0,0,1080,755)+
  '<rect x="0" y="0" width="1080" height="128" fill="'+C.ink+'" opacity=".26"/>'+
  brandLabel(brand,true)+
  '<rect x="84" y="814" width="95" height="4" fill="'+C.sage+'"/>'+
  txt(84,867,"UNA NUEVA FORMA DE PAUSA",18,C.muted,700,"Arial,Helvetica,sans-serif",3.4)+
  lines(84,964,main,86,22,103,C.ink,2)+
  lines(84,1183,content.hero_sub||"Un espacio para recuperar tu pausa.",29,54,37,C.muted,2)+foot("EDICIÓN 01  ·  BRAND CONCEPT");
 }
 if(layout===1){
  const photo=photos[1];
  art=brandLabel(brand)+
  txt(84,177,"EDITORIAL  /  BIENESTAR",18,C.muted,700,"Arial,Helvetica,sans-serif",3)+
  lines(84,287,content.second||"Lo esencial es sentir.",74,24,90,C.ink,2)+
  image(photo,84,478,912,635)+
  '<rect x="84" y="1152" width="912" height="1.5" fill="'+C.sage+'" opacity=".5"/>'+
  txt(84,1199,safe(content.second_sub||"Una experiencia de calma, concebida con intención.",58),27,C.ink)+
  foot("ATELIER / SERIES 02");
 }
 if(layout===2){
  const photo=photos[2];
  art='<rect x="0" y="0" width="525" height="1350" fill="'+C.paper+'"/>'+
  image(photo,525,0,555,1350)+
  brandLabel(brand,false,63,92)+
  '<rect x="63" y="160" width="126" height="3" fill="'+C.sage+'"/>'+
  txt(63,243,"UN RITUAL / UNA PAUSA",16,C.muted,700,"Arial,Helvetica,sans-serif",2.1)+
  lines(63,394,content.third||"Habitar la pausa.",68,13,84,C.ink,3)+
  lines(63,795,content.third_sub||"Cuidar los pequeños rituales también es un arte.",26,29,38,C.muted,3)+
  txt(63,1246,"EDICIÓN 03",18,C.ink,700,"Arial,Helvetica,sans-serif",3.3)+
  txt(63,1280,"PORTAFOLIO FICTICIO",16,C.muted,400,"Arial,Helvetica,sans-serif",1.7);
 }
 if(layout===3){
  const photo=photos[0];
  art=image(photo,0,0,1080,1320)+
  '<rect x="0" y="0" width="1080" height="140" fill="'+C.ink+'" opacity=".32"/>'+
  brandLabel(brand,true,84,105)+
  '<rect x="0" y="1320" width="1080" height="600" fill="'+C.ivory+'"/>'+
  txt(84,1404,"BIENESTAR / EDICIÓN 01",19,C.muted,700,"Arial,Helvetica,sans-serif",3.2)+
  lines(84,1525,content.story_hero||"Un lugar para la pausa.",94,21,110,C.ink,3)+
  foot("CONCEPTO EDITORIAL",1080,1920);
 }
 if(layout===4){
  const photo=photos[2];
  art='<rect x="0" y="0" width="1080" height="535" fill="'+C.ivory+'"/>'+
  brandLabel(brand,false,84,109)+
  '<path d="M84 149 H996" stroke="'+C.ink+'" stroke-opacity=".3"/>'+
  lines(84,296,content.story_detail||"Tu momento empieza aquí.",86,21,107,C.ink,2)+
  image(photo,0,535,1080,1090)+
  '<rect x="0" y="1625" width="1080" height="295" fill="'+C.paper+'"/>'+
  txt(84,1736,safe(content.cta||"CONOCE EL CONCEPTO",33).toUpperCase(),25,C.ink,700,"Arial,Helvetica,sans-serif",3.1)+
  foot("UNA MARCA FICTICIA",1080,1920);
 }
 const svg=outer(w,h,art);
 const source=photos[[0,1,2,0,2][layout]].meta;
 return {variant,name,title:titles[layout],mime:"image/svg+xml",w,h,source,data:bytes(svg)};
}
function pdfText(v:unknown){return String(v??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\u2013\u2014]/g,"-").replace(/[^\x20-\x7E]/g," ").trim();}
async function dossier(job:Job,content:Record<string,string>,photos:Photo[]):Promise<Asset>{
 const pdf=await PDFDocument.create();pdf.setTitle("PULSE STUDIO | "+pdfText(job.title));pdf.setAuthor("PULSE STUDIO - dossier interno");
 const serif=await pdf.embedFont(StandardFonts.TimesRoman);const serifBold=await pdf.embedFont(StandardFonts.TimesRomanBold);const sans=await pdf.embedFont(StandardFonts.Helvetica);const sansBold=await pdf.embedFont(StandardFonts.HelveticaBold);
 const ink=rgb(.14,.15,.13),light=rgb(.955,.938,.909),sage=rgb(.46,.53,.46),muted=rgb(.46,.48,.45);
 const photo=await pdf.embedJpg(photos[0].raw),P=pdf.addPage([595,842]);
 P.drawRectangle({x:0,y:0,width:595,height:842,color:light});
 const scale=Math.max(595/photo.width,490/photo.height),pw=photo.width*scale,ph=photo.height*scale;
 P.drawImage(photo,{x:(595-pw)/2,y:362,width:pw,height:ph});
 P.drawRectangle({x:0,y:0,width:595,height:362,color:light});
 P.drawText(pdfText(content.brand||"ATELIER CALMA").toUpperCase(),{x:51,y:326,font:sansBold,size:11,color:ink,characterSpacing:1.6});
 P.drawRectangle({x:51,y:300,width:57,height:2,color:sage});
 P.drawText(pdfText(content.hero||"El lujo de volver a ti.").slice(0,49),{x:51,y:237,size:32,font:serifBold,color:ink});
 P.drawText("PULSE STUDIO  |  CONCEPTO EDITORIAL",{x:51,y:166,size:10,font:sansBold,color:muted});
 P.drawText("PORTAFOLIO FICTICIO - VERSION DE REVISION",{x:51,y:107,size:10,font:sans,color:muted});
 const p2=pdf.addPage([595,842]);p2.drawRectangle({x:0,y:0,width:595,height:842,color:light});
 p2.drawText("DOSSIER DE CAMPANA",{x:48,y:776,size:17,font:serifBold,color:ink});
 p2.drawRectangle({x:48,y:759,width:499,height:2,color:sage});
 const sections=[
 ["OBJETIVO",job.objective],
 ["PUBLICO",job.audience],
 ["MENSAJE",job.core_message],
 ["DIRECCION DE ARTE",job.visual_direction],
 ["PIEZAS","1. Portada de feed; 2. Editorial; 3. Composicion; 4. Historia principal; 5. Historia secundaria. SVG editables y PNG exportables."],
 ["CONDICION","Fotografias de archivo con fuente identificada. La marca es ficticia. Ninguna pieza se considera publicable sin revision visual, de claims y autorizacion del CEO."]
 ];
 let y=719;
 for(const [heading,val] of sections){
  p2.drawText(heading,{x:48,y,size:11,font:sansBold,color:sage});y-=20;
  const words=pdfText(val).split(/\s+/);let line="";
  for(const word of words){
   const candidate=line?line+" "+word:word;
   if(sans.widthOfTextAtSize(candidate,10.5)>494&&line){p2.drawText(line,{x:48,y,font:sans,size:10.5,color:ink});y-=15;line=word;}else line=candidate;
  }
  if(line){p2.drawText(line,{x:48,y,font:sans,size:10.5,color:ink});y-=15;}y-=19;
 }
 p2.drawText("REFERENCIAS FOTOGRAFICAS",{x:48,y:170,font:sansBold,size:10,color:sage});
 photos.forEach((photo,i)=>{p2.drawText(pdfText(photo.meta.author+" | "+photo.meta.page).slice(0,88),{x:48,y:150-i*20,font:sans,size:8.2,color:muted})});
 p2.drawText("LICENCIA: unsplash.com/license  |  SUJETO A REVISION COMERCIAL",{x:48,y:56,font:sans,size:8,color:muted});
 return {variant:"editorial_dossier",name:"06_dossier_editorial.pdf",title:"Dossier editorial PDF",mime:"application/pdf",data:new Uint8Array(await pdf.save())};
}
Deno.serve(async(req:Request)=>{
 if(req.method!=="POST")return response({ok:false,error:"Método no permitido"},405);
 const url=env("SUPABASE_URL"),key=env("SUPABASE_SERVICE_ROLE_KEY")||JSON.parse(env("SUPABASE_SECRET_KEYS")||"{}").default||"";
 if(!url||!key)return response({ok:false,error:"Falta configuración"},503);
 const db=createClient(url,key,{auth:{persistSession:false}});
 const {data:credential,error:credentialError}=await db.from("pulse_scheduler_credentials").select("token").eq("id",1).single();
 if(credentialError||!eq(req.headers.get("x-pulse-scheduler-token")||"",String(credential?.token||"")))return response({ok:false,error:"Sin autorización"},401);
 const {data:jobs,error:claimError}=await db.rpc("pulse_claim_creative_job");
 if(claimError)return response({ok:false,error:"No se pudo tomar el brief",hint:String(claimError.message).slice(0,180)},500);
 const job=(Array.isArray(jobs)?jobs[0]:null) as Job|null;
 if(!job)return response({ok:true,processed:0,status:"idle"});
 try{
  if(!/belleza|wellness|spa|est[eé]tica|beauty/i.test(job.sector+" "+job.title))throw Error("Este sector no tiene todavía un banco de imágenes verificado. No se usarán plantillas genéricas.");
  const content=job.creative_copy&&typeof job.creative_copy==="object"?job.creative_copy:{};
  const photos=await Promise.all(STOCK.map(photo));
  const assets:Asset[]=[];
  for(let i=0;i<5;i++)assets.push(renderLayout(i,job,photos,content));
  assets.push(await dossier(job,content,photos));
  const pathRoot=job.user_id+"/studio/"+job.brief_id+"/";
  for(const asset of assets){
   if(asset.data.length<500||asset.data.length>4_800_000)throw Error("Archivo fuera de especificación "+asset.variant);
   const storagePath=pathRoot+asset.name;
   const {error:uploadError}=await db.storage.from(BUCKET).upload(storagePath,asset.data,{contentType:asset.mime,upsert:true});
   if(uploadError)throw Error("No se pudo guardar archivo "+asset.variant+": "+uploadError.message);
   const {error:dbError}=await db.from("pulse_creative_assets").upsert({
    user_id:job.user_id,brief_id:job.brief_id,variant:asset.variant,filename:asset.name,storage_path:storagePath,
    mime_type:asset.mime,width:asset.w||null,height:asset.h||null,
    source_photo:asset.source?.page||null,photo_credit:asset.source?.author||null,
    license_url:asset.source?LICENSE:null,quality_level:"professional_editable"
   },{onConflict:"brief_id,variant"});
   if(dbError)throw Error("No se pudo registrar archivo "+asset.variant+": "+dbError.message);
  }
  const {data:records,error:readError}=await db.from("pulse_creative_assets").select("id,variant").eq("brief_id",job.brief_id);
  if(readError||!records||records.length!==6)throw Error("Paquete incompleto, necesita revisión técnica");
  const validation={files:records.length,verified_photographic_sources:3,formats:["1080x1350 SVG","1080x1920 SVG","PDF"],claim_review_pending:true,commercial_rights_pending:true,visual_review_pending:true,client_delivery_allowed:false};
  const {error:reviewError}=await db.from("pulse_creative_reviews").upsert({brief_id:job.brief_id,user_id:job.user_id,status:"pending_review",validation,reviewer:"technical_QA",updated_at:new Date().toISOString()},{onConflict:"brief_id"});
  if(reviewError)throw Error("No se pudo registrar control de calidad");
  const {data:latest,error:briefError}=await db.from("pulse_creative_briefs").select("approval_id").eq("id",job.brief_id).single();
  if(briefError)throw Error("No se pudo encontrar estado del brief");
  let approvalId=latest.approval_id;
  if(!approvalId){
   const {data:approval,error:approvalError}=await db.from("pulse_approvals").insert({
    user_id:job.user_id,department:"Producción de contenido",
    title:"PULSE STUDIO · Revisar diseño editorial: "+safe(job.title,80),
    description:"Cinco diseños SVG editables (convertibles a PNG) y un PDF preparados con fotografías verificadas. Revisa la calidad visual, tipografía, los derechos y el carácter ficticio de la marca. Aprobar es una revisión interna, no publica, envía ni vende material. Estado previo: BORRADOR.",
    status:"pending"
   }).select("id").single();
   if(approvalError||!approval)throw Error("No se pudo abrir revisión del CEO");
   approvalId=approval.id;
   const {error:linkError}=await db.from("pulse_creative_briefs").update({approval_id:approvalId}).eq("id",job.brief_id);
   if(linkError)throw Error("No se pudo vincular aprobación");
  }
  const {error:stageError}=await db.from("pulse_creative_briefs").update({status:"qa"}).eq("id",job.brief_id);
  if(stageError)throw Error("No se pudo actualizar el brief");
  const {error:doneError}=await db.from("pulse_creative_jobs").update({status:"completed",last_error:null,updated_at:new Date().toISOString()}).eq("brief_id",job.brief_id);
  if(doneError)throw Error("No se pudo cerrar la producción");
  return response({ok:true,processed:1,files:assets.map(a=>({variant:a.variant,bytes:a.data.length})),status:"pending_ceo_qa"});
 }catch(e){
  const message=String(e instanceof Error?e.message:e).slice(0,260);
  await db.from("pulse_creative_jobs").update({status:"failed",last_error:message,updated_at:new Date().toISOString()}).eq("brief_id",job.brief_id);
  return response({ok:false,processed:1,error:message,status:"failed"},200);
 }
});
