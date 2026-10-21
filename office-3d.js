(function(){
"use strict";
let running=null;
const E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const NAMES=["DIRECCIÓN","MARKETING","CREATIVOS","VENTAS","RELACIONES","EXPERIENCIAS","COMUNIDAD","INTELIGENCIA","FINANZAS","TECNOLOGÍA"];
const COLORS=["#e8b17e","#eb8fcc","#69c8ff","#f7ba7e","#a79aff","#b78aff","#ff92b1","#7dafff","#65e3ae","#79adff"];
const SPECIAL=[{name:"Sala de juntas del CEO",kind:"ceo",shortName:"SALA CEO",color:"#ffd6a0",role:"Misiones y decisiones del CEO"},{name:"Estudio creativo",kind:"creative",shortName:"ESTUDIO",color:"#72e4d7",role:"Diseño y entregables multimedia"}];
const status=m=>m==="running"?"Ejecutando tarea":m==="waiting"?"Revisión pendiente":m==="completed"?"Última tarea terminada":"En espera";
function roomsData(raw){
 const main=(Array.isArray(raw)?raw:[]).slice(0,10).map((v,i)=>({
  ...v,name:String(v.name||NAMES[i]),shortName:NAMES[i],color:COLORS[i],kind:"department",
  mode:["running","waiting","completed","idle"].includes(v.mode)?v.mode:"idle",
  tasks:Number(v.tasks||0),completed:Number(v.completed||0),active:Number(v.active||0),
  wait:Number(v.wait||0),missionCompleted:Number(v.missionCompleted||0),
  missionAssigned:Number(v.missionAssigned||0),role:String(v.role||"Departamento profesional")
 }));
 return main.concat(SPECIAL.map(x=>({...x,mode:"idle",tasks:0,completed:0,wait:0,missionCompleted:0,missionAssigned:0})));
}
const led=m=>'<span class="p3d-led '+(m==="running"?"":m==="waiting"?"wait":"idle")+'"></span>';
function inspector(rooms,i,live){
 const r=rooms[i]||rooms[0];if(!r)return "";
 const dept=r.kind==="department";
 const tag=dept?"DEPARTAMENTO "+String(i+1).padStart(2,"0"):r.kind==="ceo"?"DIRECCIÓN GENERAL":"PRODUCCIÓN EDITORIAL";
 const action=dept?'data-open="'+i+'"':'data-nav="'+(r.kind==="ceo"?"ceo":"creative")+'"';
 const sub=dept?(r.lastTitle?'<p>Última tarea: '+E(String(r.lastTitle).slice(0,160))+'</p>':'<p>Sin tareas recientes registradas.</p>'):'<p>Un espacio de trabajo de PULSE HQ. Pulsa para consultar su tablero real.</p>';
 const meta=dept?'<div class="p3d-meta"><div><strong>'+r.tasks+'</strong>Tareas</div><div><strong>'+r.completed+'</strong>Terminadas</div><div><strong>'+r.missionCompleted+' / '+r.missionAssigned+'</strong>Etapas de misión</div><div><strong>'+r.wait+'</strong>Por revisar</div></div>':'';
 return '<div class="p3d-inspector-header"><div><div class="p3d-overline">'+E(tag)+'</div><h3>'+E(r.name)+'</h3></div>'+
 '<span class="p3d-status">'+led(r.mode)+E(live?(dept?status(r.mode):"Espacio disponible"):"Modo demo")+'</span></div>'+
 '<p>'+E(r.role)+'</p>'+meta+sub+
 (r.lastActivity?'<p>Última actividad: '+E(r.lastActivity)+'</p>':'')+
 '<button class="p3d-open" '+action+'>'+(dept?"Entrar al departamento ↗":r.kind==="ceo"?"Abrir sala del CEO ↗":"Abrir estudio creativo ↗")+'</button>';
}
function panel(raw,selected,live){
 const rooms=roomsData(raw),sel=Math.max(0,Math.min(11,Number(selected)||0));
 const run=rooms.filter(x=>x.kind==="department"&&x.mode==="running").length;
 const wait=rooms.filter(x=>x.kind==="department"&&x.mode==="waiting").length;
 const finished=rooms.reduce((n,x)=>n+(x.kind==="department"?x.completed:0),0);
 const fallback=rooms.map((r,i)=>'<button class="p3d-fallback-room" style="--room-tint:'+r.color+'" data-office-select="'+i+'">'+E(r.shortName)+'<span>'+E(i>=10?"Abrir espacio":status(r.mode))+(i<10?' · '+r.tasks+' tareas':'')+'</span></button>').join('');
 return '<section class="p3d-shell" aria-label="Oficina virtual interactiva de PULSE HQ">'+
 '<div class="p3d-head"><div><div class="p3d-eyebrow">PULSE HQ / DIGITAL HEADQUARTERS</div><h2 class="p3d-title">Oficina virtual 3D ✦</h2>'+
 '<p class="p3d-sub">Toca una sala para conocer al equipo. Desliza para explorar el edificio.</p></div>'+
 '<span class="p3d-tag">'+(live?"● DATOS REALES":"○ MODO DEMO")+'</span></div>'+
 '<div class="p3d-summary"><div class="p3d-metric"><strong>'+run+'</strong><span>Ejecutando ahora</span></div>'+
 '<div class="p3d-metric"><strong>'+wait+'</strong><span>Por revisar</span></div>'+
 '<div class="p3d-metric"><strong>'+finished+'</strong><span>Tareas terminadas</span></div></div>'+
 '<div class="p3d-controls"><small>EDIFICIO / PLANTA GENERAL</small><button class="p3d-control" type="button" data-action="office-camera-reset">↺ Restablecer vista</button></div>'+
 '<div id="p3d-stage" class="p3d-stage" aria-label="Edificio 3D con diez departamentos y dos salas">'+
 '<div class="p3d-fallback" id="p3d-fallback">'+fallback+'</div><span class="p3d-floor-label">PULSE // WORKSPACE 01</span></div>'+
 '<div class="p3d-legend"><span>'+led("running")+'En ejecución real</span><span>'+led("waiting")+'Revisión</span><span>'+led("idle")+'En espera</span></div>'+
 '<div class="p3d-inspector" id="p3d-inspector" aria-live="polite">'+inspector(rooms,sel,live)+'</div>'+
 '<div style="padding:0 16px 15px"><p class="p3d-below">Los avatares representan agentes digitales. Solo se animan como trabajadores cuando existe una tarea en ejecución. La actividad visual no implica una entrega concluida.</p></div></section>';
}
function destroy(){
 const a=running;running=null;
 if(!a)return;
 if(a.frame)cancelAnimationFrame(a.frame);
 for(const [el,type,fn,opt] of a.events)try{el.removeEventListener(type,fn,opt)}catch{}
 a.observer?.disconnect();a.resizeObserver?.disconnect();
 a.group?.traverse(o=>{
  o.geometry?.dispose?.();
  for(const m of (Array.isArray(o.material)?o.material:[o.material])){m?.map?.dispose?.();m?.dispose?.()}
 });
 if(a.renderer){try{a.renderer.dispose();a.renderer.forceContextLoss?.()}catch{}}
 a.canvas?.remove?.();
 const fallback=document.getElementById("p3d-fallback");if(fallback)fallback.hidden=false;
}
function mount(input){
 destroy();
 const stage=document.getElementById("p3d-stage"),fallback=document.getElementById("p3d-fallback");
 if(!stage||!fallback)return {ok:false,reason:"not_visible"};
 const rooms=roomsData(input.rooms),live=Boolean(input.live),T=window.THREE;
 let selected=Math.max(0,Math.min(11,Number(input.selected)||0));
 const label=document.getElementById("p3d-inspector");
 const showInspector=()=>{if(label)label.innerHTML=inspector(rooms,selected,live)};
 const note=msg=>{const n=document.createElement("span");n.className="p3d-fallback-note";n.textContent=msg;stage.appendChild(n);return {ok:false,reason:msg}};
 if(!T)return note("Vista 2D disponible");
 let renderer;
 try{
  const probe=document.createElement("canvas");
  const gl=probe.getContext("webgl2",{failIfMajorPerformanceCaveat:true})||probe.getContext("webgl",{failIfMajorPerformanceCaveat:true});
  if(!gl)throw Error("No WebGL");
  renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:"low-power",precision:"mediump"});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
  renderer.outputEncoding=T.sRGBEncoding;
  renderer.toneMapping=T.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.28;
 }catch(e){renderer?.dispose?.();return note("Vista simplificada")}
 const scene=new T.Scene();
 scene.fog=new T.FogExp2(0x13253a,.018);
 const group=new T.Group();scene.add(group);
 scene.add(new T.AmbientLight(0xc6efff,1.5));
 const sun=new T.DirectionalLight(0xf0faff,2.2);sun.position.set(-8,20,14);scene.add(sun);
 const rim=new T.PointLight(0x39d5c9,1.2,39);rim.position.set(10,8,-7);scene.add(rim);
 const camera=new T.OrthographicCamera(-10,10,10,-10,.01,130);
 const picks=[],indicators=[],agents=[],floors=[],extraMaterials=[];
 const mat=(color,opacity=1,glow=0)=>new T.MeshStandardMaterial({color,roughness:.59,metalness:.21,opacity,transparent:opacity<1,side:T.DoubleSide,emissive:glow||0x000000,emissiveIntensity:glow?.36:0});
 const floorMat=mat(0x20394b),deskMat=mat(0x4b6971),iron=mat(0x112839),glass=mat(0x397287,.24),headMat=mat(0xc5e4e4);
 const screenOn=new T.MeshStandardMaterial({color:0x50ddd0,emissive:0x2adcc8,emissiveIntensity:.8,roughness:.32});
 const deskScreenOff=mat(0x2c5360);
 function box(parent,w,h,d,m,x,y,z){const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),m);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
 function orb(parent,r,m,x,y,z){const mesh=new T.Mesh(new T.SphereGeometry(r,10,8),m);mesh.position.set(x,y,z);parent.add(mesh);return mesh}
 box(group,15.5,.38,21.3,mat(0x14283d),0,-.37,0);
 box(group,15.75,.08,21.5,mat(0x3d7381,.66),0,-.56,0);
 for(let c=0;c<4;c++)box(group,.02,.025,20.8,mat(0x316476,.45),-6.98+c*4.66,-.13,0);
 for(let r=0;r<5;r++)box(group,15,.025,.02,mat(0x316476,.45),0,-.13,-9.61+r*4.8);
 function plaque(label,color){
  const canvas=document.createElement("canvas");canvas.width=512;canvas.height=128;
  const ctx=canvas.getContext("2d");ctx.fillStyle="#102b3a";ctx.fillRect(0,0,512,128);
  ctx.fillStyle=color;ctx.fillRect(0,0,9,128);
  ctx.fillStyle="#e9ffff";ctx.font="700 39px sans-serif";ctx.textBaseline="middle";ctx.fillText(String(label).slice(0,17),26,64,470);
  const tex=new T.CanvasTexture(canvas);tex.encoding=T.sRGBEncoding;
  const spr=new T.Sprite(new T.SpriteMaterial({map:tex,transparent:true,depthWrite:false}));
  spr.scale.set(3.35,.84,1);return spr;
 }
 rooms.forEach((r,i)=>{
  const col=i%3,row=Math.floor(i/3),g=new T.Group();
  g.position.set((col-1)*4.66,0,(row-1.5)*4.8);group.add(g);
  const tint=new T.Color(r.color),working=r.mode==="running",need=r.mode==="waiting",special=i>=10;
  const floor=box(g,4.28,.14,4.41,floorMat,0,.01,0);floors.push(floor);
  const accent=mat(tint,.93,tint);
  box(g,.07,.03,4.2,accent,-1.95,.10,0);
  box(g,4.0,.03,.07,accent,0,.10,-2.06);
  box(g,4.30,1.56,.07,mat(0x385971,.83),0,.84,-2.21);
  box(g,.07,1.55,4.38,glass,-2.17,.84,0);
  box(g,.07,1.55,4.38,glass,2.17,.84,0);
  box(g,1.05,.64,.065,glass,-1.61,.41,2.19);
  box(g,1.05,.64,.065,glass,1.61,.41,2.19);
  box(g,3.44,.09,.09,iron,0,1.71,-2.17);
  box(g,3.30,.025,.06,accent,0,1.78,-2.16);
  const sign=plaque(r.shortName,r.color);sign.position.set(0,2.19,-2.04);g.add(sign);
  if(special){
   box(g,2.5,.15,1.27,deskMat,0,.57,.21);
   for(const dx of [-1,1])for(const dz of [-.48,.48])box(g,.095,.45,.095,iron,dx,.29,dz+.21);
   box(g,1.47,.59,.075,iron,0,1.13,-1.91);
   box(g,1.21,.41,.013,screenOn,0,1.12,-1.85);
  }else{
   for(const dx of [-1.11,1.11]){
    box(g,1.58,.12,.96,deskMat,dx,.60,-.39);
    for(const sx of [-.53,.53])for(const sz of [-.29,.33])box(g,.09,.55,.09,iron,dx+sx,.31,-.39+sz);
    box(g,.83,.57,.065,iron,dx,1.03,-.76);
    box(g,.70,.43,.012,working?screenOn:deskScreenOff,dx,1.04,-.72);
    box(g,.08,.27,.07,iron,dx,.73,-.73);
    box(g,1.00,.13,.41,mat(0x253d51),dx,.39,1.10);
    const agent=new T.Group();agent.position.set(dx,.41,.86);g.add(agent);
    box(agent,.40,.45,.34,mat(tint),0,.25,0);
    orb(agent,.21,headMat,0,.69,0);
    agents.push({obj:agent,working,offset:i+dx});
   }
   box(g,.34,.29,.34,mat(0x887c71),1.75,.25,-1.72);
   orb(g,.27,mat(0x3d8f88),1.75,.57,-1.72);
  }
  const ledMaterial=new T.MeshStandardMaterial({color:working?0x65edcb:need?0xffc18a:0x829cac,
   emissive:working?0x39ebc9:need?0xe8a565:0x305568,emissiveIntensity:working?1.4:need?.65:.15});
  orb(g,.17,ledMaterial,1.76,2.17,-1.67);
  indicators.push({material:ledMaterial,working,index:i});
  const picker=new T.Mesh(new T.BoxGeometry(4.27,2.9,4.39),new T.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
  picker.position.set(0,1.28,0);picker.userData.officeRoom=i;g.add(picker);picks.push(picker);
 });
 const raycaster=new T.Raycaster(),pointer=new T.Vector2();
 let yaw=.51,zoom=1,inViewport=true,down=null,previous=0;
 const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches||false;
 const state={renderer,group,canvas:renderer.domElement,events:[],observer:null,resizeObserver:null,frame:null};
 const add=(el,type,fn,opt)=>{el.addEventListener(type,fn,opt);state.events.push([el,type,fn,opt])};
 function framing(){
  const ratio=Math.max(.55,stage.clientWidth/Math.max(240,stage.clientHeight));
  const span=Math.max(24.4,19.7/ratio)/zoom,half=span/2;
  camera.left=-half*ratio;camera.right=half*ratio;camera.top=half;camera.bottom=-half;
  camera.position.set(Math.sin(yaw)*34,30,Math.cos(yaw)*34);
  camera.lookAt(0,.2,0);camera.updateProjectionMatrix();
 }
 const selectedMaterial=rooms.map(r=>{const c=new T.Color(r.color);const m=mat(c.clone().multiplyScalar(.47),1,c);extraMaterials.push(m);return m});
 function selectRoom(i){
  selected=i;
  for(let j=0;j<floors.length;j++)floors[j].material=j===i?selectedMaterial[i]:floorMat;
  if(typeof input.onSelect==="function")input.onSelect(i);
  showInspector();
  draw(performance.now());
 }
 function draw(t){
  if(!running||running!==state||!inViewport||document.hidden)return;
  if(!reduced){
   indicators.forEach(x=>{if(x.working)x.material.emissiveIntensity=1+.55*(.5+.5*Math.sin(t*.004+x.index))});
   agents.forEach(x=>{x.obj.rotation.y=x.working?.065*Math.sin(t*.002+x.offset):0});
  }
  renderer.render(scene,camera);
 }
 function resize(){
  if(!stage.isConnected)return;
  renderer.setSize(Math.max(100,stage.clientWidth),Math.max(250,stage.clientHeight),false);
  framing();draw(performance.now());
 }
 function hitAt(x,y){
  const b=renderer.domElement.getBoundingClientRect();
  if(!b.width||!b.height)return null;
  pointer.set((x-b.left)/b.width*2-1,-(y-b.top)/b.height*2+1);
  raycaster.setFromCamera(pointer,camera);
  const hit=raycaster.intersectObjects(picks,false);
  return hit.length?hit[0].object.userData.officeRoom:null;
 }
 add(state.canvas,"pointerdown",ev=>{down={x:ev.clientX,y:ev.clientY,yaw};try{state.canvas.setPointerCapture(ev.pointerId)}catch{}});
 add(state.canvas,"pointermove",ev=>{if(!down)return;const delta=ev.clientX-down.x;if(Math.abs(delta)>3){yaw=Math.max(.20,Math.min(.83,down.yaw-delta*.0032));framing();draw(performance.now())}});
 add(state.canvas,"pointerup",ev=>{if(!down)return;const moved=Math.hypot(ev.clientX-down.x,ev.clientY-down.y);down=null;if(moved<12){const id=hitAt(ev.clientX,ev.clientY);if(Number.isInteger(id))selectRoom(id)}});
 add(state.canvas,"pointercancel",()=>{down=null});
 add(state.canvas,"wheel",ev=>{ev.preventDefault();zoom=Math.max(.76,Math.min(1.35,zoom*(ev.deltaY>0?.93:1.075)));framing();draw(performance.now())},{passive:false});
 add(state.canvas,"contextmenu",ev=>ev.preventDefault());
 const anim=t=>{if(!running||running!==state)return;state.frame=requestAnimationFrame(anim);if(!reduced&&t-previous>40){previous=t;draw(t)}};
 if(window.ResizeObserver){state.resizeObserver=new ResizeObserver(resize);state.resizeObserver.observe(stage)}
 else add(window,"resize",resize);
 if(window.IntersectionObserver){state.observer=new IntersectionObserver(entries=>{inViewport=entries[0]?.isIntersecting??true;if(inViewport)draw(performance.now())},{threshold:.01});state.observer.observe(stage)}
 add(document,"visibilitychange",()=>{if(!document.hidden)draw(performance.now())});
 state.reset=()=>{yaw=.51;zoom=1;framing();draw(performance.now())};
 state.select=selectRoom;
 running=state;
 stage.insertBefore(state.canvas,stage.firstChild);fallback.hidden=true;
 resize();selectRoom(selected);
 if(!reduced)state.frame=requestAnimationFrame(anim);
 return {ok:true,renderer:"WebGL"};
}
function reset(){running?.reset?.()}
function select(i){if(Number.isInteger(Number(i))&&Number(i)>=0&&Number(i)<12){running?.select?.(Number(i))}}
window.PulseOffice3D={panel,mount,destroy,reset,select,version:"1.0"};
})();