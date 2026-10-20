(function(){
"use strict";
const THEMES={night:["#0A1028","#56427C","#FFD08A","#FCF7EE"],peach:["#481A32","#CB667A","#FFCFAD","#FFF5EB"],mint:["#123C42","#3C8B88","#C2EFCE","#F6FFEE"]};
const xml=v=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
function wrap(input,max){
 const words=String(input||"").replace(/[\r\n]+/g," ").trim().split(/\s+/),lines=[];let line="";
 for(const w of words){if(line&&(line+" "+w).length>max){lines.push(line);line=w;}else line+=(line?" ":"")+w;}if(line)lines.push(line);
 return lines.slice(0,4);
}
function artSVG(post,i,brand){
 const shape=post?.format==="story"?"story":post?.format==="square"?"square":"portrait",height=shape==="story"?1920:shape==="square"?1080:1350;
 const p=THEMES[post?.tone]||THEMES.night;
 const headline=wrap(post?.headline||"PET BRAND OPS",16);
 const title=headline.map((line,j)=>'<text x="540" y="'+(205+j*90)+'" text-anchor="middle" fill="'+p[3]+'" font-family="Arial,sans-serif" font-size="'+(headline.length>2?62:78)+'" font-weight="900" letter-spacing="-2">'+xml(line.toUpperCase())+'</text>').join("");
 const sub=wrap(post?.subline||"Una experiencia para tu mascota",33).map((line,j)=>'<text x="540" y="'+(Math.max(390,205+headline.length*90)+j*42)+'" text-anchor="middle" fill="'+p[3]+'" font-family="Arial,sans-serif" font-size="29">'+xml(line)+'</text>').join("");
 const dog='<g><ellipse cx="0" cy="154" rx="180" ry="56" fill="#000" opacity=".14"/><ellipse cx="0" cy="70" rx="130" ry="154" fill="'+p[3]+'"/><path d="M -130 -85 Q -244 -170 -184 30 Q -138 78 -113 0Z" fill="'+p[1]+'"/><path d="M 130 -85 Q 244 -170 184 30 Q 138 78 113 0Z" fill="'+p[1]+'"/><ellipse cx="0" cy="-35" rx="150" ry="140" fill="'+p[2]+'"/><ellipse cx="0" cy="22" rx="95" ry="74" fill="'+p[3]+'"/><circle cx="-62" cy="-64" r="12" fill="#17243C"/><circle cx="62" cy="-64" r="12" fill="#17243C"/><circle cx="-65" cy="-69" r="3.5" fill="#fff"/><circle cx="58" cy="-69" r="3.5" fill="#fff"/><path d="M-28 3 Q0 -14 28 3 Q23 34 0 34 Q-23 34 -28 3Z" fill="#17243C"/><path d="M0 34 Q -14 67 -44 47 M0 34 Q 14 67 44 47" stroke="#17243C" stroke-width="6" stroke-linecap="round" fill="none"/><ellipse cx="-80" cy="195" rx="48" ry="28" fill="'+p[2]+'"/><ellipse cx="80" cy="195" rx="48" ry="28" fill="'+p[2]+'"/></g>';
 const paw='<g fill="'+p[2]+'"><ellipse cx="0" cy="74" rx="90" ry="71"/><ellipse cx="-112" cy="-35" rx="31" ry="43" transform="rotate(-20 -112 -35)"/><ellipse cx="-42" cy="-106" rx="31" ry="42"/><ellipse cx="43" cy="-106" rx="31" ry="42"/><ellipse cx="112" cy="-35" rx="31" ry="43" transform="rotate(20 112 -35)"/></g>';
 const mascot=post?.art==="paw"?paw:dog;
 const cy=Math.round(height*.63),size=shape==="story"?2.3:shape==="square"?1.8:2.05;
 const btnY=height-177;
 return '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="'+height+'" viewBox="0 0 1080 '+height+'">'+
 '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+p[0]+'"/><stop offset="1" stop-color="'+p[1]+'"/></linearGradient><radialGradient id="h"><stop offset="0" stop-color="'+p[2]+'" stop-opacity=".24"/><stop offset="1" stop-color="'+p[2]+'" stop-opacity="0"/></radialGradient><pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r="2" fill="'+p[3]+'" opacity=".15"/></pattern></defs>'+
 '<rect width="1080" height="'+height+'" fill="url(#g)"/><rect width="1080" height="'+height+'" fill="url(#grid)"/><circle cx="540" cy="'+cy+'" r="440" fill="url(#h)"/><circle cx="540" cy="'+cy+'" r="338" stroke="'+p[3]+'" stroke-width="2" fill="none" opacity=".20"/>'+
 '<rect x="62" y="49" width="956" height="'+(height-98)+'" rx="36" stroke="'+p[3]+'" stroke-width="2" fill="none" opacity=".25"/>'+
 '<text x="94" y="112" fill="'+p[2]+'" font-family="Arial,sans-serif" font-weight="700" font-size="25" letter-spacing="7">PET BRAND OPS / CAMPAÑA '+String(i+1).padStart(2,"0")+'</text>'+
 title+sub+
 '<g transform="translate(540 '+cy+') scale('+size+')">'+mascot+'</g>'+
 '<circle cx="175" cy="'+(cy-210)+'" r="8" fill="'+p[2]+'"/><circle cx="900" cy="'+(cy+182)+'" r="10" fill="'+p[2]+'"/>'+
 '<rect x="120" y="'+btnY+'" width="840" height="94" rx="47" fill="'+p[2]+'"/>'+
 '<text x="540" y="'+(btnY+59)+'" text-anchor="middle" fill="'+p[0]+'" font-family="Arial,sans-serif" font-weight="800" font-size="31">'+xml(String(post?.cta||"CONSULTA DISPONIBILIDAD").toUpperCase().slice(0,42))+'</text>'+
 '<text x="540" y="'+(height-45)+'" text-anchor="middle" font-size="24" letter-spacing="5" fill="'+p[3]+'" font-family="Arial,sans-serif">'+xml(String(brand||"ESTÉTICA DEMO").toUpperCase().slice(0,31))+'</text></svg>';
}
function preview(post,i,brand){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(artSVG(post,i,brand))}
async function canvas(post,i,brand){
 const code=artSVG(post,i,brand);
 const blob=new Blob([code],{type:"image/svg+xml;charset=utf-8"}),url=URL.createObjectURL(blob);
 return await new Promise((resolve,reject)=>{
 const img=new Image();
 img.onload=()=>{try{const c=document.createElement("canvas");c.width=1080;c.height=post.format==="story"?1920:post.format==="square"?1080:1350;const ctx=c.getContext("2d");if(!ctx)throw Error("Canvas no disponible");ctx.drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);resolve(c)}catch(e){URL.revokeObjectURL(url);reject(e)}};
 img.onerror=()=>{URL.revokeObjectURL(url);reject(Error("No se pudo preparar la ilustración"))};img.src=url;});
}
const png=c=>new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error("No se pudo generar PNG")),"image/png"));
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),120000)}
const titleOf=p=>"PET-BRAND-OPS-"+String(p.week_start||"kit");
async function exportPNG(pack,i,brand){const c=await canvas(pack.posts[i],i,brand);download(await png(c),titleOf(pack)+"-arte-"+(i+1)+".png")}
function textClean(s){return String(s||"").replace(/[\u{10000}-\u{10ffff}]/gu,"").replace(/[•]/g,"-")}
async function makePDF(pack,canvases){
 if(!window.jspdf?.jsPDF)throw Error("Falta el generador de PDF. Revisa tu conexión.");
 const doc=new window.jspdf.jsPDF({unit:"mm",format:"a4"});
 const cover=()=>{doc.setFillColor(10,20,38);doc.rect(0,0,210,297,"F");doc.setTextColor(123,241,221);doc.setFontSize(13);doc.text("PET BRAND OPS / PULSE HQ",18,30);doc.setTextColor(251,250,245);doc.setFontSize(27);doc.text(doc.splitTextToSize(textClean(pack.campaign_name),172),18,65);doc.setFontSize(13);doc.setTextColor(214,228,240);doc.text("DOSSIER DE CAMPAÑA / "+pack.week_start,18,123);doc.text("3 artes originales • 3 copies • 3 áreas de operación",18,142);doc.setFontSize(11);doc.text("Material de demostración interna. No publicado.",18,261)};
 cover();
 for(let i=0;i<canvases.length;i++){doc.addPage();doc.setFillColor(10,20,38);doc.rect(0,0,210,297,"F");const c=canvases[i],ratio=Math.min(170/c.width,215/c.height),w=c.width*ratio,h=c.height*ratio;doc.addImage(c.toDataURL("image/png"),"PNG",(210-w)/2,15,w,h);doc.setTextColor(244,248,249);doc.setFontSize(10);doc.text("ARTE "+(i+1)+" · "+String(pack.posts[i].format).toUpperCase(),17,258);doc.setFontSize(9);doc.text(doc.splitTextToSize(textClean(pack.posts[i].caption),170).slice(0,6),17,269);}
 const chapters=[["DIRECCIÓN Y MARKETING",pack.strategic_brief],["VENTAS / ADQUISICIÓN",pack.sales_playbook],["FINANZAS / CONTROL",pack.finance_review]];
 for(const [head,body] of chapters){doc.addPage();doc.setFillColor(250,250,251);doc.rect(0,0,210,297,"F");doc.setFontSize(17);doc.setTextColor(18,42,62);doc.text(head,17,29);doc.setDrawColor(107,199,183);doc.line(17,36,193,36);doc.setFontSize(10);doc.setTextColor(52,67,77);let y=50;for(const line of doc.splitTextToSize(textClean(body),173)){if(y>280){doc.addPage();y=22;doc.setFontSize(10)}doc.text(line,17,y);y+=5.5}}
 return doc.output("blob");
}
async function exportPDF(pack,brand){const cc=[];for(let i=0;i<pack.posts.length;i++)cc.push(await canvas(pack.posts[i],i,brand));download(await makePDF(pack,cc),titleOf(pack)+"-dossier.pdf")}
async function exportZIP(pack,brand){
 if(!window.JSZip)throw Error("Falta el generador ZIP. Revisa tu conexión.");
 const cc=[];for(let i=0;i<pack.posts.length;i++)cc.push(await canvas(pack.posts[i],i,brand));
 const zip=new window.JSZip();
 for(let i=0;i<cc.length;i++)zip.file("01-artes/arte-"+(i+1)+".png",await png(cc[i]));
 zip.file("02-dossier/dossier-campana.pdf",await makePDF(pack,cc));
 zip.file("03-copies/copys.txt",pack.posts.map((p,i)=>"PIEZA "+(i+1)+"\n"+p.caption+"\n\n").join(""));
 zip.file("LEEME.txt","PET BRAND OPS - Kit de demostración\nLas imágenes son ilustraciones vectoriales originales exportadas a PNG.\nToda comunicación, oferta, precio y marca debe verificarse antes de su publicación.\nNo hay clientes, ventas ni publicaciones realizadas automáticamente.\n");
 download(await zip.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:4}}),titleOf(pack)+"-entregables.zip");
}
window.PulseVentureStudio={artSVG,preview,exportPNG,exportPDF,exportZIP};
})();