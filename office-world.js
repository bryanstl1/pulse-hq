
(function(){
"use strict";
let current=null;
const ENAMES=["Dirección estratégica","Marketing y crecimiento","Producción de contenido","Ventas y patrocinios","Relaciones públicas y alianzas","Eventos y experiencias","Comunidad","Inteligencia de mercado","Finanzas y administración","Tecnología y automatización"];
const SHORT=["Dirección","Marketing","Creativos","Ventas","Relaciones","Experiencias","Comunidad","Inteligencia","Finanzas","Tecnología"];
const COLORS=["#dfb576","#f2a6ba","#8fc3e7","#e7ac7d","#baa7dc","#d7a9bd","#e8a9ba","#87bfd0","#99c9b3","#aaa9e2"];
const SYMBOLS=["♛","✦","▣","◇","♡","◈","☼","⌕","＄","⌘"];
const EXTRA=[{name:"Sala del CEO",kind:"ceo",role:"Reuniones y aprobaciones ejecutivas",color:"#d7b46c",mode:"idle",tasks:0,completed:0,wait:0,missionCompleted:0,missionAssigned:0},{name:"Estudio Creativo",kind:"creative",role:"Campañas, fotografía editorial y archivos",color:"#8bceb4",mode:"idle",tasks:0,completed:0,wait:0,missionCompleted:0,missionAssigned:0}];
const html=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const status=m=>m==="running"?"En ejecución":m==="waiting"?"Por revisar":m==="completed"?"Terminado":"En espera";
function normalize(input){
 const list=Array.isArray(input)?input:[];
 return Array.from({length:10},(_,i)=>{
  const a=list[i]||{};
  return {
   name:ENAMES[i],short:SHORT[i],color:COLORS[i],icon:SYMBOLS[i],kind:"department",
   role:String(a.role||SHORT[i]),mode:["running","waiting","completed","idle"].includes(a.mode)?a.mode:"idle",
   tasks:Number(a.tasks||0),completed:Number(a.completed||0),wait:Number(a.wait||0),
   missionCompleted:Number(a.missionCompleted||0),missionAssigned:Number(a.missionAssigned||0),
   lastTitle:String(a.lastTitle||""),lastActivity:String(a.lastActivity||"")
  };
 }).concat(EXTRA.map((x,i)=>({...x,short:i?"Estudio":"CEO",icon:i?"✿":"♛"})));
}
function avatarHtml(i){return '<span class="pw-avatar" style="--person-color:'+COLORS[i]+'"><span>'+SYMBOLS[i]+'</span></span>'}
function roster(rooms,chosen){
 return rooms.slice(0,10).map((r,i)=>
  '<button type="button" class="pw-member" aria-pressed="'+(chosen===i)+'" data-world-select="'+i+'" title="'+html(r.name)+'">'+avatarHtml(i)+
  '<span class="pw-member-main"><strong>'+html(r.short)+'</strong><small>'+html(r.role)+'</small></span>'+
  '<span class="pw-member-indicator '+(r.mode==="running"?"running":r.mode==="waiting"?"waiting":"")+'"></span></button>'
 ).join('');
}
function info(rooms,idx,live){
 const r=rooms[idx]||rooms[0],isDep=r.kind==="department";
 const open=isDep?'data-open="'+idx+'"':'data-nav="'+(r.kind==="ceo"?"ceo":"creative")+'"';
 const roleInfo='<p class="pw-info-role">'+html(r.role)+'</p>';
 const metrics=isDep?
  '<div class="pw-meta"><div><strong>'+r.tasks+'</strong>Tareas</div><div><strong>'+r.completed+'</strong>Terminadas</div><div><strong>'+r.missionCompleted+'/'+r.missionAssigned+'</strong>Etapas de misión</div></div>':'';
 return '<div class="pw-info-top"><div class="pw-info-icon" style="--room-tint:'+r.color+'">'+html(r.icon)+'</div>'+
 '<div><div class="pw-overline">'+(isDep?"DEPARTAMENTO "+(idx+1).toString().padStart(2,"0"):r.kind==="ceo"?"CONSEJO DIRECTIVO":"PRODUCCIÓN VISUAL")+'</div>'+
 '<h3 class="pw-info-title">'+html(r.name)+'</h3></div>'+
 '<span class="pw-member-indicator '+(r.mode==="running"?"running":r.mode==="waiting"?"waiting":"")+'" style="margin-left:auto"></span></div>'+
 roleInfo+metrics+
 (r.lastTitle?'<p class="pw-task-summary"><strong>Última actividad:</strong> '+html(r.lastTitle.slice(0,135))+'</p>':"")+
 '<button type="button" class="pw-next" '+open+'>'+(isDep?"Entrar al departamento":r.kind==="ceo"?"Ir a la sala del CEO":"Abrir estudio creativo")+' ↗</button>';
}
function panel(raw,selected,live){
 const rooms=normalize(raw),sel=Math.max(0,Math.min(11,Number(selected)||0));
 const total=rooms.slice(0,10).reduce((n,r)=>n+r.completed,0),run=rooms.filter(r=>r.kind==="department"&&r.mode==="running").length;
 const fallback=rooms.map((r,i)=>'<button type="button" class="pw-fallback-tile" data-world-select="'+i+'">'+html(r.short)+'<small>'+html(status(r.mode))+'</small></button>').join('');
 return '<section class="pw-shell" aria-label="Oficina virtual interactiva estilo videojuego">'+
 '<div class="pw-top"><div class="pw-head-brand"><div class="pw-logomark">✳</div><div><div class="pw-name">PULSE HQ · MI MUNDO</div><div class="pw-sub">Oficina virtual · PULSE STUDIO</div></div></div>'+
 '<div class="pw-live"><span class="pw-live-dot"></span>'+(live?"AGENTES CONECTADOS":"VISTA DEMO")+'</div></div>'+
 '<div class="pw-toolbar"><div><div class="pw-welcome">Bienvenido al equipo ✨</div>'+
 '<div class="pw-welcome-note">Explora los espacios y consulta lo que están haciendo los agentes.</div></div>'+
 '<div class="pw-stats"><div class="pw-chip"><strong>10</strong> equipos</div><div class="pw-chip"><strong>'+run+'</strong> activos</div><div class="pw-chip"><strong>'+total+'</strong> tareas</div></div></div>'+
 '<div class="pw-body"><aside class="pw-sidebar" aria-label="Departamentos">'+
 '<div class="pw-side-top">TUS DEPARTAMENTOS</div><div class="pw-roster" id="pw-roster">'+roster(rooms,sel)+'</div></aside>'+
 '<div class="pw-scene-col"><div class="pw-map-head"><div class="pw-map-title">🏡 El mundo <span>12 espacios • toca un área para seleccionarla</span></div>'+
 '<div class="pw-controls"><button class="pw-ctrl" type="button" data-world-action="zoom-out" title="Alejar" aria-label="Alejar mapa">−</button>'+
 '<button class="pw-ctrl" type="button" data-world-action="zoom-in" title="Acercar" aria-label="Acercar mapa">+</button>'+
 '<button class="pw-ctrl" type="button" data-world-action="fit" title="Ver todo" aria-label="Ver todo el edificio">⌗</button></div></div>'+
 '<div class="pw-canvas-wrap" id="pw-stage"><div class="pw-fallback" id="pw-fallback" hidden>'+fallback+'</div>'+
 '<div class="pw-map-hint" id="pw-map-hint">Arrastra para recorrer · toca una habitación · pellizca para acercar</div>'+
 '<div class="pw-minimap" id="pw-minimap" aria-label="Mapa del edificio">'+
 '<div class="pw-minimap-grid">'+rooms.map((r,i)=>'<button type="button" class="pw-minimap-tile" style="--mini-color:'+r.color+'" aria-label="'+html(r.name)+'" aria-pressed="'+(i===sel)+'" data-world-select="'+i+'"></button>').join('')+'</div></div></div>'+
 '<div class="pw-scene-footer"><span class="pw-key"><span class="pw-dot running"></span> Trabajando</span><span class="pw-key"><span class="pw-dot waiting"></span> Revisar</span><span class="pw-key"><span class="pw-dot idle"></span> En espera</span></div></div></div>'+
 '<div class="pw-room-info" id="pw-inspector">'+info(rooms,sel,live)+'</div>'+
 '<div class="pw-notes">Cada personaje representa un puesto virtual, no una persona contratada. Las tareas, etapas y autorizaciones proceden del sistema de PULSE HQ; los movimientos decorativos no representan acciones externas.</div></section>';
}
function cleanup(){
 const a=current;current=null;if(!a)return;
 if(a.frame)cancelAnimationFrame(a.frame);
 a.handlers.forEach(([el,event,handler,options])=>{try{el.removeEventListener(event,handler,options)}catch{}});
 a.resizeObserver?.disconnect?.();a.intersection?.disconnect?.();
 a.canvas?.remove?.();
}
const WW=8,HH=7,DX=9.65,DY=8.52,TS=26,TD=13,Z=24;
const ROOM=[...Array(12)].map((_,i)=>({x:1.0+(i%3)*DX,y:1.1+Math.floor(i/3)*DY,w:WW,h:HH,index:i}));
function iso(x,y,z=0){return {x:(x-y)*TS,y:(x+y)*TD-z*Z}}
const color={
 gridA:"#e7e4dc",gridB:"#e1e0d8",edge:"#c8c9c1",cream:"#fff2d8",wall:"#f1e5cf",wallSide:"#d5c5a7",
 outline:"#b0b6a6",rug:"#d9e6dc",paper:"#fffbf1",wood:"#a88469",darkWood:"#846d60",
 metal:"#8199a1",screen:"#8ed9d8",screenDark:"#3a5b65",blue:"#a9c9d6",leaf:"#55ad78"
};
function rgba(hex,alpha){
 const c=hex.replace("#","");const R=parseInt(c.slice(0,2),16),G=parseInt(c.slice(2,4),16),B=parseInt(c.slice(4,6),16);
 return 'rgba('+R+','+G+','+B+','+alpha+')';
}
function shade(hex,factor){
 const s=hex.replace("#",""),parts=[0,2,4].map(i=>parseInt(s.slice(i,i+2),16));
 return "#"+parts.map(x=>Math.round(Math.max(0,Math.min(255,x*factor))).toString(16).padStart(2,"0")).join("");
}
function poly(ctx,pts,fill,stroke=null,width=1){
 ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i].x,pts[i].y);
 ctx.closePath();ctx.fillStyle=fill;ctx.fill();
 if(stroke){ctx.lineWidth=width;ctx.strokeStyle=stroke;ctx.stroke()}
}
function prism(ctx,x,y,w,d,h,fill,z=0){
 const a=iso(x,y,z),b=iso(x+w,y,z),c=iso(x+w,y+d,z),e=iso(x,y+d,z);
 const A=iso(x,y,z+h),B=iso(x+w,y,z+h),C=iso(x+w,y+d,z+h),E=iso(x,y+d,z+h);
 poly(ctx,[E,C,c,e],shade(fill,.78),shade(fill,.71),.7);
 poly(ctx,[B,C,c,b],shade(fill,.87),shade(fill,.77),.7);
 poly(ctx,[A,B,C,E],fill,rgba("#6c7170",.13),.55);
 return {top:[A,B,C,E],center:iso(x+w/2,y+d/2,z+h)};
}
function rug(ctx,x,y,w,d,tint){
 poly(ctx,[iso(x,y,.025),iso(x+w,y,.025),iso(x+w,y+d,.025),iso(x,y+d,.025)],rgba(tint,.30),rgba(tint,.30),1);
}
function line(ctx,points,stroke,width=1){ctx.beginPath();ctx.moveTo(points[0].x,points[0].y);for(let i=1;i<points.length;i++)ctx.lineTo(points[i].x,points[i].y);ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke()}
function floor(ctx,r,i){
 prism(ctx,r.x-.10,r.y-.10,r.w+.20,r.h+.20,.23,i%2?"#edece7":"#eae9e3",-.2);
 for(let a=0;a<r.w;a++)for(let b=0;b<r.h;b++){
  const fill=(a+b)%2===0?color.gridA:color.gridB;
  poly(ctx,[iso(r.x+a,r.y+b,.08),iso(r.x+a+1,r.y+b,.08),iso(r.x+a+1,r.y+b+1,.08),iso(r.x+a,r.y+b+1,.08)],fill,rgba("#b7beb9",.29),.55);
 }
 // Dark trim along outward cut edge.
 line(ctx,[iso(r.x,r.y+r.h,.08),iso(r.x+r.w,r.y+r.h,.08)],"#c8bbb1",1.2);
 line(ctx,[iso(r.x+r.w,r.y,.08),iso(r.x+r.w,r.y+r.h,.08)],"#c8bbb1",1.2);
}
function windowDecor(ctx,r){
 // Wall along far north: cream base, a generous window, frames and posters.
 const x=r.x,y=r.y,w=r.w,h=r.h;
 prism(ctx,x,y,w,.20,2.22,color.wall,.12);
 prism(ctx,x,y,.20,h,2.22,color.wall,.12);
 const win=(xa,len)=>{
  const p= [iso(x+xa,y+.224,.62),iso(x+xa+len,y+.224,.62),
           iso(x+xa+len,y+.224,1.86),iso(x+xa,y+.224,1.86)];
  poly(ctx,p,"#cee4df","#dbcdb0",2.4);
  line(ctx,[iso(x+xa+len/2,y+.227,.65),iso(x+xa+len/2,y+.227,1.82)],"#effaf4",2.4);
  line(ctx,[iso(x+xa,y+.228,1.28),iso(x+xa+len,y+.228,1.28)],"#effaf4",2);
 };
 win(.65,1.75);win(w-2.30,1.75);
 // Wall art and decorative frame.
 poly(ctx,[iso(x+3.28,y+.229,1.07),iso(x+4.65,y+.229,1.07),iso(x+4.65,y+.229,1.76),iso(x+3.28,y+.229,1.76)],
 "#fbf7eb","#c6a98d",2);
 line(ctx,[iso(x+3.47,y+.23,1.27),iso(x+4.03,y+.23,1.52),iso(x+4.45,y+.23,1.33)],"#88bcb1",3);
 // Low side partition along room entry edge.
 prism(ctx,x+w-.13,y+.5,.14,1.60,.65,"#f0e6d6",.08);
 prism(ctx,x+.5,y+h-.13,1.65,.14,.60,"#f0e6d6",.08);
}
function desk(ctx,x,y,colorTop="#c9a486"){
 prism(ctx,x,y,1.50,.76,.62,colorTop,.08);
 prism(ctx,x+.10,y+.14,.10,.13,.47,"#7c8f91",.08);
 prism(ctx,x+1.26,y+.14,.10,.13,.47,"#7c8f91",.08);
 prism(ctx,x+.45,y+.20,.65,.10,.54,color.screenDark,.74);
 prism(ctx,x+.52,y+.23,.50,.035,.39,color.screen,.77);
 prism(ctx,x+.70,y+.34,.13,.17,.09,"#6c7f88",.70);
 prism(ctx,x+.46,y+.65,.70,.20,.045,"#eeeae2",.71);
}
function chair(ctx,x,y,top="#a1bfba"){
 prism(ctx,x,y,.70,.68,.36,top,.07);
 prism(ctx,x,y+.47,.70,.14,.77,shade(top,.87),.08);
 prism(ctx,x+.28,y+.16,.13,.10,.22,"#81969c",.05);
}
function plant(ctx,x,y,scale=1){
 prism(ctx,x,y,.47*scale,.47*scale,.42,"#b89c80",.04);
 const c=iso(x+.24*scale,y+.23*scale,1.06*scale);
 ctx.strokeStyle="#4b9872";ctx.lineWidth=2;
 for(let k=0;k<7;k++){
  const theta=(k/7)*Math.PI*2;const xx=c.x+Math.sin(theta)*12*scale,yy=c.y+Math.cos(theta)*8*scale;
  line(ctx,[{x:c.x,y:c.y+10*scale},{x:xx,y:yy}],"#4f8e68",1.6);
  ctx.fillStyle=k%2?"#5fae77":"#82bd75";ctx.beginPath();ctx.ellipse(xx,yy,6.5*scale,3.4*scale,theta,0,Math.PI*2);ctx.fill();
 }
}
function sofa(ctx,x,y,paint="#b8c7bb"){
 prism(ctx,x,y,2.35,.9,.40,paint,.05);
 prism(ctx,x,y,2.35,.26,.95,shade(paint,.89),.05);
 prism(ctx,x,y,.29,.9,.64,shade(paint,.94),.05);
 prism(ctx,x+2.07,y,.29,.9,.64,shade(paint,.94),.05);
 prism(ctx,x+.65,y+.30,.52,.42,.05,"#e5cda8",.48);
}
function bookshelf(ctx,x,y){
 prism(ctx,x,y,1.22,.35,1.60,"#bf9772",.13);
 for(let k=0;k<3;k++)prism(ctx,x+.1,y+.36,.98,.09,.075,"#f3e0bd",.50+k*.44);
 for(let k=0;k<7;k++){
  const c=["#ad927a","#7eb4c4","#e7b17e","#9dba9e","#e6cfb2"][k%5];
  prism(ctx,x+.15+k*.14,y+.11,.10,.20,.24+(k%3)*.11,c,.70);
 }
}
function server(ctx,x,y){
 prism(ctx,x,y,.72,.85,1.85,"#526679",.06);
 for(let z=.3;z<1.68;z+=.32){
  prism(ctx,x+.15,y+.86,.43,.035,.19,"#26394d",z);
  const c=iso(x+.23,y+.90,z+.12);
  ctx.fillStyle="#9be5b4";ctx.fillRect(c.x-2,c.y-2,4,3);
 }
}
function whiteboard(ctx,x,y,w=1.8){
 // vertical board mounted on the north wall.
 poly(ctx,[iso(x,y,1.0),iso(x+w,y,1.0),iso(x+w,y,1.83),iso(x,y,1.83)],"#fffefa","#c8bca9",2);
 line(ctx,[iso(x+.25,y-.02,1.29),iso(x+.7,y-.02,1.55),iso(x+1.21,y-.02,1.36)],"#e1a57f",2.7);
}
function talkBubble(ctx,x,y,text,background="#fffdf5"){
 const pos=iso(x,y,2.2),w=Math.min(115,text.length*7+16);
 ctx.save();ctx.fillStyle=background;ctx.strokeStyle="#dce2d7";ctx.lineWidth=.8;
 ctx.beginPath();ctx.roundRect(pos.x-w/2,pos.y-28,w,24,7);ctx.fill();ctx.stroke();
 ctx.fillStyle="#516874";ctx.font="700 10px system-ui,sans-serif";ctx.textAlign="center";
 ctx.fillText(text,pos.x,pos.y-12,w-12);ctx.restore();
}
function avatar(ctx,x,y,idx=0,busy=false){
 const pt=iso(x,y,.18);
 ctx.save();ctx.translate(pt.x,pt.y);
 ctx.fillStyle="rgba(63,88,82,.18)";ctx.beginPath();ctx.ellipse(0,2,12,5,-.1,0,Math.PI*2);ctx.fill();
 const suit=["#9a728e","#6688a3","#ce986b","#a0a77e","#d59c99","#8e89bc"][idx%6];
 const skin=["#d9a482","#e6bb92","#b78367","#ecc4a1"][idx%4];
 const hair=["#564c46","#443e43","#8d5f41","#464d5a","#ad7853"][idx%5];
 // tiny shoes and jacket, retro small-character proportions.
 ctx.fillStyle="#5b5760";ctx.fillRect(-8,-5,7,7);ctx.fillRect(2,-5,7,7);
 ctx.fillStyle=suit;ctx.beginPath();ctx.roundRect(-10,-21,20,18,5);ctx.fill();
 ctx.fillStyle="#f3eee5";ctx.fillRect(-3,-20,6,7);
 ctx.fillStyle=skin;ctx.beginPath();ctx.arc(0,-29,11,0,Math.PI*2);ctx.fill();
 ctx.fillStyle=hair;ctx.beginPath();ctx.arc(0,-32,11.8,Math.PI*1.02,Math.PI*2.07);ctx.lineTo(10,-28);ctx.lineTo(-10,-28);ctx.closePath();ctx.fill();
 ctx.fillStyle="#574843";ctx.fillRect(-4,-29,1.5,1.6);ctx.fillRect(3,-29,1.5,1.6);
 ctx.fillStyle=skin;ctx.fillRect(-12,-16,5,10);ctx.fillRect(7,-16,5,10);
 if(busy){ctx.fillStyle="#79ce87";ctx.beginPath();ctx.arc(12,-41,5,0,Math.PI*2);ctx.fill();ctx.fillStyle="white";ctx.fillRect(10,-43,4,4)}
 ctx.restore();
}
function drawFurniture(ctx,r,idx,busy,paint){
 const x=r.x,y=r.y;
 if(idx===0){
  rug(ctx,x+1.2,y+1.65,5.5,3.7,"#c1d7b3");
  bookshelf(ctx,x+5.85,y+.60);
  desk(ctx,x+2.20,y+2.03,"#bba078");chair(ctx,x+3.75,y+3.08);
  desk(ctx,x+.60,y+3.80,"#c2a486");chair(ctx,x+2.23,y+4.55,"#d2baaa");
  plant(ctx,x+6.75,y+5.60);avatar(ctx,x+3.35,y+3.18,0,busy);avatar(ctx,x+1.74,y+4.90,1,false);
 }else if(idx===1){
  rug(ctx,x+.85,y+1.8,6.1,4.5,"#eadbc1");
  desk(ctx,x+1.0,y+2.0,"#d2a6a5");desk(ctx,x+4.4,y+2.55,"#c6b099");
  chair(ctx,x+2.42,y+2.97,"#cd9aa5");chair(ctx,x+5.88,y+3.43,"#a0b5bf");
  bookshelf(ctx,x+5.75,y+.58);plant(ctx,x+.48,y+5.80);
  avatar(ctx,x+1.66,y+3.64,2,busy);avatar(ctx,x+5.4,y+4.5,3,false);
 }else if(idx===2){
  rug(ctx,x+.7,y+1.9,6.1,4.2,"#c5dfe1");
  prism(ctx,x+1.05,y+2.1,2.0,1.1,.59,"#a9b4ae",.1);
  prism(ctx,x+1.40,y+2.25,.8,.6,.11,"#f6e4d9",.78);
  prism(ctx,x+4.45,y+1.9,.85,.8,1.1,"#687d8e",.05);
  prism(ctx,x+4.55,y+2.0,.63,.7,.10,"#d7dae0",1.15);
  whiteboard(ctx,x+3.0,y+.29,1.8);
  chair(ctx,x+2.64,y+3.60);plant(ctx,x+6.72,y+5.84);
  avatar(ctx,x+3.5,y+4.12,3,busy);avatar(ctx,x+5.53,y+3.38,4,false);
 }else if(idx===3){
  rug(ctx,x+1.10,y+1.40,5.4,4.2,"#e7d7c8");
  desk(ctx,x+.77,y+2.1,"#b79e84");desk(ctx,x+4.5,y+2.65,"#c4a983");
  chair(ctx,x+2.38,y+3.1,"#a8bfc3");chair(ctx,x+5.98,y+3.48,"#aab1a1");
  prism(ctx,x+3.28,y+4.76,1.35,.65,.62,"#d7c2aa",.06);
  plant(ctx,x+6.82,y+.60);avatar(ctx,x+3.1,y+3.54,4,busy);avatar(ctx,x+5.30,y+4.4,5,false);
 }else if(idx===4){
  rug(ctx,x+1.2,y+1.90,5.6,3.85,"#e6c7d8");
  sofa(ctx,x+1.0,y+2.2,"#c4aebd");sofa(ctx,x+4.52,y+2.2,"#b1bdb3");
  prism(ctx,x+3.45,y+3.66,1.3,.88,.49,"#d4ad8f",.08);
  bookshelf(ctx,x+5.7,y+.53);plant(ctx,x+1.07,y+5.70);
  avatar(ctx,x+3.17,y+4.84,1,busy);avatar(ctx,x+5.20,y+4.68,2,false);
 }else if(idx===5){
  rug(ctx,x+.88,y+1.7,6.1,4.7,"#f1d4c7");
  prism(ctx,x+1.1,y+2.55,2.3,.95,.75,"#bea48a",.08);
  prism(ctx,x+1.52,y+2.67,.7,.4,.12,"#e0d7c7",.90);
  sofa(ctx,x+4.12,y+2.74,"#d6b6a4");
  prism(ctx,x+3.0,y+1.6,1.1,.65,.52,"#d7c6a0",.06);
  bookshelf(ctx,x+5.65,y+.55);plant(ctx,x+6.75,y+5.65);
  avatar(ctx,x+3.7,y+4.74,4,busy);avatar(ctx,x+1.64,y+4.49,0,false);
 }else if(idx===6){
  rug(ctx,x+.82,y+1.73,6.05,4.6,"#e1cadb");
  desk(ctx,x+.75,y+2.1,"#c2a5a3");desk(ctx,x+4.45,y+2.55,"#bba4a0");
  chair(ctx,x+2.3,y+3.0,"#bfc9c3");chair(ctx,x+5.95,y+3.55,"#b2c1c9");
  sofa(ctx,x+2.45,y+5.0,"#dab4ba");
  avatar(ctx,x+3.35,y+3.7,1,busy);avatar(ctx,x+5.35,y+4.45,3,false);
 }else if(idx===7){
  rug(ctx,x+.9,y+1.82,6.0,4.6,"#b9d6df");
  desk(ctx,x+1.02,y+2.02,"#bec3bb");desk(ctx,x+4.5,y+2.53,"#b2bbae");
  whiteboard(ctx,x+2.8,y+.26,2.15);bookshelf(ctx,x+5.85,y+.51);
  chair(ctx,x+2.65,y+3.25);chair(ctx,x+5.95,y+3.75);
  avatar(ctx,x+3.22,y+4.5,5,busy);avatar(ctx,x+5.28,y+4.73,0,false);
 }else if(idx===8){
  rug(ctx,x+.9,y+1.82,6.0,4.6,"#d0e4ca");
  desk(ctx,x+1.01,y+2.10,"#ceb398");chair(ctx,x+2.60,y+3.24,"#98b1a0");
  desk(ctx,x+4.31,y+2.25,"#c6b29a");chair(ctx,x+5.90,y+3.39,"#b3c3ae");
  prism(ctx,x+5.96,y+.8,.76,.65,1.35,"#9eacaa",.1);
  plant(ctx,x+6.72,y+5.80);avatar(ctx,x+3.03,y+4.3,2,busy);avatar(ctx,x+5.24,y+4.62,1,false);
 }else if(idx===9){
  rug(ctx,x+.83,y+1.72,6.15,4.8,"#cdcee9");
  server(ctx,x+.48,y+2.0);server(ctx,x+1.44,y+2.12);
  desk(ctx,x+3.32,y+2.30,"#a5b6c9");desk(ctx,x+4.62,y+4.41,"#b5a9c7");
  chair(ctx,x+4.9,y+3.52,"#9da3c5");
  avatar(ctx,x+5.61,y+3.56,3,busy);avatar(ctx,x+2.77,y+4.55,4,false);
  plant(ctx,x+6.84,y+5.67);
 }else if(idx===10){
  rug(ctx,x+.95,y+1.82,6.03,4.45,"#eddcb5");
  prism(ctx,x+1.60,y+2.35,4.5,1.35,.63,"#bca17f",.10);
  for(let k=0;k<4;k++)chair(ctx,x+1.65+k*1.13,y+4.2,k%2?"#bcbaa3":"#a9c8ba");
  whiteboard(ctx,x+2.90,y+.28,2.10);
  avatar(ctx,x+1.27,y+4.68,0,false);avatar(ctx,x+5.63,y+4.55,2,false);
  plant(ctx,x+6.75,y+5.63);
 }else{
  rug(ctx,x+.85,y+1.75,6.05,4.54,"#bad9ca");
  prism(ctx,x+1.0,y+2.1,2.1,1.35,.60,"#b6bbaa",.1);
  prism(ctx,x+1.31,y+2.31,1.25,.85,.09,"#eee6d7",.78);
  prism(ctx,x+4.65,y+1.95,1.0,.80,1.08,"#9eafb2",.08);
  prism(ctx,x+4.75,y+2.10,.76,.48,.10,"#d6d1c7",1.18);
  sofa(ctx,x+3.75,y+4.57,"#b2c7ad");
  avatar(ctx,x+3.2,y+4.25,1,false);avatar(ctx,x+5.78,y+3.84,3,false);
  plant(ctx,x+6.87,y+5.65);
 }
}
function roomLabel(ctx,r,label,tint,isSelected,busy){
 const pt=iso(r.x+r.w/2,r.y-.37,2.52);
 ctx.save();ctx.font="800 11px -apple-system,system-ui,sans-serif";const width=Math.min(150,ctx.measureText(label).width+24);
 ctx.fillStyle=isSelected?"#3e745d":"#fffaf0";
 ctx.strokeStyle=isSelected?"#3e745d":"#cdbfae";ctx.lineWidth=1;
 ctx.beginPath();ctx.roundRect(pt.x-width/2,pt.y-12,width,25,7);ctx.fill();ctx.stroke();
 ctx.fillStyle=isSelected?"#fff":"#4a6265";ctx.textAlign="center";
 ctx.fillText(label,pt.x,pt.y+4,width-12);
 if(busy){ctx.fillStyle="#62c983";ctx.beginPath();ctx.arc(pt.x+width/2-4,pt.y-12,5,0,Math.PI*2);ctx.fill()}
 ctx.restore();
}
function drawRoom(ctx,r,idx,rooms,selected){
 const state=rooms[idx]?.mode||"idle",busy=state==="running";
 floor(ctx,r,idx);
 const tint=COLORS[idx];
 rug(ctx,r.x+.42,r.y+.38,r.w-.84,r.h-.85,tint);
 windowDecor(ctx,r);
 drawFurniture(ctx,r,idx,busy,tint);
 if(selected===idx){
  const outline=[iso(r.x,r.y,.24),iso(r.x+WW,r.y,.24),iso(r.x+WW,r.y+HH,.24),iso(r.x,r.y+HH,.24)];
  ctx.save();ctx.shadowBlur=15;ctx.shadowColor="rgba(88,155,93,.48)";
  line(ctx,[...outline,outline[0]],"#61a873",3);ctx.restore();
 }
 roomLabel(ctx,r,SHORT[idx].toUpperCase(),tint,idx===selected,busy);
}
function paint(state,now=0){
 const {ctx,canvas,stage}=state;if(!stage.isConnected)return;
 const w=stage.clientWidth,h=stage.clientHeight,dpr=Math.min(2,window.devicePixelRatio||1);
 const bw=Math.max(1,Math.floor(w*dpr)),bh=Math.max(1,Math.floor(h*dpr));
 if(canvas.width!==bw||canvas.height!==bh){canvas.width=bw;canvas.height=bh}
 ctx.setTransform(dpr,0,0,dpr,0,0);
 const grad=ctx.createLinearGradient(0,0,w,h);grad.addColorStop(0,"#f0f5eb");grad.addColorStop(.55,"#dcece5");grad.addColorStop(1,"#d4e1d8");
 ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
 const b=iso(state.focusX,state.focusY);
 const scale=state.zoom;
 ctx.setTransform(dpr*scale,0,0,dpr*scale,dpr*(w*.50+state.offsetX-b.x*scale),dpr*(h*.44+state.offsetY-b.y*scale));
 // Soft shadow beneath building (not a large dark floating model).
 const ground=[iso(-.65,-.55,-.6),iso(29.8,-.55,-.6),iso(29.8,36.6,-.6),iso(-.65,36.6,-.6)];
 poly(ctx,ground,"#cddbcf","#b9cebb",2);
 // Walkways and atrium connectors.
 for(let i=0;i<ROOM.length;i++){
  const r=ROOM[i];
  const rugColor=i%2?"#e8e7db":"#e3e7d9";
  prism(ctx,r.x-.25,r.y-.24,r.w+.5,r.h+.5,.05,rugColor,-.27);
 }
 ROOM.map((r,i)=>({r,i,depth:r.x+r.y})).sort((a,b)=>a.depth-b.depth).forEach(x=>drawRoom(ctx,x.r,x.i,state.rooms,state.selected));
 ctx.setTransform(dpr,0,0,dpr,0,0);
}
function mount(opts){
 destroy();
 const stage=document.getElementById("pw-stage");
 const fallback=document.getElementById("pw-fallback");
 if(!stage||!fallback)return {ok:false,reason:"not_visible"};
 const canvas=document.createElement("canvas");
 let ctx=null;try{ctx=canvas.getContext("2d",{alpha:false})}catch{}
 if(!ctx){fallback.hidden=false;return {ok:false,reason:"canvas_unavailable"}}
 canvas.className="pw-canvas";canvas.tabIndex=0;
 canvas.setAttribute("role","img");
 canvas.setAttribute("aria-label","Mapa ilustrado interactivo de PULSE HQ. Usa el listado de departamentos como alternativa accesible.");
 stage.insertBefore(canvas,stage.firstChild);fallback.hidden=true;
 const selected=Math.min(11,Math.max(0,Number(opts.selected)||0));
 const r=ROOM[selected];
 const state={stage,canvas,ctx,rooms:normalize(opts.rooms),selected,live:Boolean(opts.live),
  focusX:r.x+r.w/2,focusY:r.y+r.h/2,offsetX:0,offsetY:0,zoom:.88,
  handlers:[],frame:0,resizeObserver:null,intersection:null,inView:true,pointers:new Map(),isDragging:false,
  onSelect:opts.onSelect};
 current=state;
 const add=(el,event,handler,options)=>{el.addEventListener(event,handler,options);state.handlers.push([el,event,handler,options])};
 const redraw=()=>paint(state,performance.now());
 function selection(index,center=true){
  index=Number(index);if(!Number.isInteger(index)||index<0||index>=12)return;
  state.selected=index;
  const room=ROOM[index];
  if(center){state.focusX=room.x+room.w/2;state.focusY=room.y+room.h/2;state.offsetX=0;state.offsetY=0}
  const infoEl=document.getElementById("pw-inspector");
  if(infoEl)infoEl.innerHTML=info(state.rooms,index,state.live);
  stage.closest(".pw-shell")?.querySelectorAll("[data-world-select]").forEach(el=>{
   const enabled=Number(el.dataset.worldSelect)===index;
   el.setAttribute("aria-pressed",String(enabled));
  });
  state.onSelect?.(index);redraw();
 }
 const shell=stage.closest(".pw-shell");
 add(shell,"click",event=>{
  const button=event.target.closest("[data-world-select],[data-world-action]");
  if(!button||!shell.contains(button))return;
  if(button.dataset.worldSelect!==undefined)selection(button.dataset.worldSelect,true);
  const action=button.dataset.worldAction;
  if(action==="zoom-in"){state.zoom=Math.min(2.2,state.zoom*1.2);redraw()}
  if(action==="zoom-out"){state.zoom=Math.max(.25,state.zoom/1.2);redraw()}
  if(action==="fit"){
   const rect=ROOM[5];state.focusX=rect.x+WW/2;state.focusY=rect.y+HH/2;
   state.zoom=Math.min(.75,Math.max(.18,stage.clientWidth/1450));state.offsetX=0;state.offsetY=0;redraw()
  }
 });
 let drag=null;
 const pointOnWorld=(clientX,clientY)=>{
  const bb=canvas.getBoundingClientRect(),x=(clientX-bb.left),y=(clientY-bb.top);
  const px=(x-bb.width*.50-state.offsetX)/state.zoom+iso(state.focusX,state.focusY).x;
  const py=(y-bb.height*.44-state.offsetY)/state.zoom+iso(state.focusX,state.focusY).y;
  return {x:(px/TS+py/TD)/2,y:(py/TD-px/TS)/2};
 };
 const hit=(clientX,clientY)=>{
  const pt=pointOnWorld(clientX,clientY);
  for(let i=0;i<ROOM.length;i++){
   const r=ROOM[i];
   if(pt.x>=r.x-.2&&pt.x<=r.x+r.w+.2&&pt.y>=r.y-.2&&pt.y<=r.y+r.h+.2)return i;
  }
  return null;
 };
 add(canvas,"pointerdown",ev=>{
  state.pointers.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
  if(state.pointers.size===1)drag={x:ev.clientX,y:ev.clientY,offsetX:state.offsetX,offsetY:state.offsetY,moved:false};
  if(state.pointers.size===2){
   const points=[...state.pointers.values()];
   drag={pinch:true,distance:Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y),zoom:state.zoom};
  }
  try{canvas.setPointerCapture(ev.pointerId)}catch{}
 });
 add(canvas,"pointermove",ev=>{
  if(!state.pointers.has(ev.pointerId))return;
  state.pointers.set(ev.pointerId,{x:ev.clientX,y:ev.clientY});
  if(state.pointers.size>=2&&drag?.pinch){
   const p=[...state.pointers.values()];
   const distance=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);
   state.zoom=Math.max(.25,Math.min(2.1,drag.zoom*distance/Math.max(1,drag.distance)));
   redraw();return;
  }
  if(!drag||drag.pinch)return;
  const dx=ev.clientX-drag.x,dy=ev.clientY-drag.y;
  if(Math.hypot(dx,dy)>7)drag.moved=true;
  if(drag.moved){state.offsetX=drag.offsetX+dx;state.offsetY=drag.offsetY+dy;redraw()}
 });
 add(canvas,"pointerup",ev=>{
  if(!state.pointers.has(ev.pointerId))return;
  state.pointers.delete(ev.pointerId);
  if(state.pointers.size===0){
   if(drag&&!drag.moved&&!drag.pinch){const idx=hit(ev.clientX,ev.clientY);if(idx!==null)selection(idx,false)}
   drag=null;
  }
 });
 add(canvas,"pointercancel",ev=>{state.pointers.delete(ev.pointerId);if(!state.pointers.size)drag=null});
 add(canvas,"wheel",ev=>{ev.preventDefault();state.zoom=Math.max(.25,Math.min(2.1,state.zoom*(ev.deltaY>0?.87:1.13)));redraw()},{passive:false});
 add(canvas,"keydown",ev=>{
  if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(ev.key)){ev.preventDefault();
   state.offsetX+=ev.key==="ArrowRight"?-30:ev.key==="ArrowLeft"?30:0;
   state.offsetY+=ev.key==="ArrowUp"?30:ev.key==="ArrowDown"?-30:0;redraw();
  }
  if(ev.key==="+"||ev.key==="="){state.zoom=Math.min(2.1,state.zoom*1.17);redraw()}
  if(ev.key==="-"){state.zoom=Math.max(.25,state.zoom/1.17);redraw()}
 });
 if(window.ResizeObserver){state.resizeObserver=new ResizeObserver(redraw);state.resizeObserver.observe(stage)}
 else add(window,"resize",redraw);
 if(window.IntersectionObserver){state.intersection=new IntersectionObserver(entries=>{state.inView=Boolean(entries[0]?.isIntersecting)},{threshold:.05});state.intersection.observe(stage)}
 state.select=selection;
 state.reset=()=>{const r=ROOM[state.selected];state.focusX=r.x+r.w/2;state.focusY=r.y+r.h/2;state.offsetX=0;state.offsetY=0;state.zoom=.88;redraw()};
 state.updateData=raw=>{
  state.rooms=normalize(raw);
  const rosterEl=document.getElementById("pw-roster");
  if(rosterEl)rosterEl.innerHTML=roster(state.rooms,state.selected);
  const root=stage.closest(".pw-shell");
  const chips=root?.querySelectorAll(".pw-chip strong");
  if(chips?.length>=3){
   chips[1].textContent=String(state.rooms.slice(0,10).filter(r=>r.mode==="running").length);
   chips[2].textContent=String(state.rooms.slice(0,10).reduce((n,r)=>n+r.completed,0));
  }
  const infoEl=document.getElementById("pw-inspector");
  if(infoEl)infoEl.innerHTML=info(state.rooms,state.selected,state.live);
  redraw();return true;
 };
 redraw();
 const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches||false;
 if(!reduced){
  let last=0;
  const animate=t=>{
   if(current!==state)return;
   state.frame=requestAnimationFrame(animate);
   if(!state.inView||document.hidden||t-last<900)return;
   last=t;
   if(state.rooms.some(r=>r.mode==="running"))redraw();
  };
  state.frame=requestAnimationFrame(animate);
 }
 return {ok:true,renderer:"illustrated-canvas-world"};
}
function reset(){current?.reset?.()}
function select(id){current?.select?.(id)}
function update(rooms){return current?.updateData?.(rooms)===true}
window.PulseOffice3D={panel,mount,destroy:cleanup,reset,select,update,version:"2.0-world"};
})();
