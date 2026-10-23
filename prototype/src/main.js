import {rooms,byId} from './data.js';
import {mobileRooms} from './mobile-data.js';
import {mountIllustrated} from './fallback.js';
import {mountMobileDepartments} from './mobile.js';
import {createEnterprise} from './enterprise.js';
import {renderPanel} from './enterprise-ui.js';
import {agentSceneModel,renderAgentSpotlight} from './scene-ui.js';
import './style.css';

const mobilePreview=new URLSearchParams(location.search).has('mobile-preview');
if(mobilePreview)document.documentElement.classList.add('mobile-preview');
const isMobile=()=>mobilePreview||matchMedia('(max-width:600px)').matches;
document.documentElement.classList.toggle('mobile-experience',isMobile());
const catalog=()=>isMobile()?mobileRooms:rooms;
const findRoom=id=>catalog().find(r=>r.id===id)||byId(id);
const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const app=document.getElementById('app');
const enterprise=createEnterprise();
let world=null,selected=null,view='ceo',busy=false,error='',taskId='',missionId='',agentTab='chat',sceneAgent=null;
const drafts=new Map();
app.innerHTML=`<header class="mast"><div class="brand"><div class="brand-symbol"><i></i><i></i><i></i><i></i></div><span><b>PULSE HQ</b><small>LA COMPAÑÍA DIGITAL</small></span></div><div class="top-center">EDIFICIO PRINCIPAL / PLANTA 01</div><div class="top-right"><span class="demo-pill" id="connection-pill">✦ Muestra visual</span><button id="directory" class="icon-button" aria-label="Abrir directorio">☷</button></div></header>
<div class="workspace"><nav class="rail" aria-label="Secciones"><div class="rail-group"><button data-tab="spaces" class="rail-button selected" aria-label="Oficina">⌗</button><button data-tab="agents" class="rail-button" aria-label="Agentes">♧</button><button data-tab="missions" class="rail-button" aria-label="Misiones">◇</button><button data-tab="ceo" class="rail-button" aria-label="CEO">♛</button></div><small>PULSE<br>HQ</small></nav>
<main class="main"><div class="viewport" id="viewport"><div class="loading" id="loading"><div class="loading-mark">✳</div><div class="loading-heading">Preparando tu oficina</div><p>Colocando habitaciones y personajes…</p><div class="loading-track"><span id="loadBar"></span></div><small id="loadText">Cargando espacios</small></div><div class="viewer-heading"><div class="eyebrow">PULSE HQ / EL MUNDO</div><h1>Una oficina con vida.</h1><p>Explora los espacios y conoce al equipo.</p></div><div class="scene-note" id="scene-note">MUNDO INTERACTIVO</div><div class="view-tools"><button data-control="plus" aria-label="Acercar">+</button><button data-control="minus" aria-label="Alejar">−</button><button data-control="reset" aria-label="Ver edificio completo">⌖</button></div><div class="rooms-strip"><div class="rooms-title">RECORRER EDIFICIO</div><div class="room-buttons">${rooms.map((r,i)=>`<button data-room="${r.id}" style="--accent:${r.accent}"><span class="room-num">0${i+1}</span><span class="room-button-name">${safe(r.short)}</span></button>`).join('')}</div></div><div class="instructions">DESLIZA PARA EXPLORAR · PELLIZCA PARA ACERCAR · TOCA UNA SALA</div></div><div id="fallback" class="fallback" hidden><div class="fallback-box"><h2>Vista accesible</h2><p>Selecciona un espacio si la escena gráfica no está disponible.</p><div class="fallback-rooms">${rooms.map(r=>`<button data-room="${r.id}">${safe(r.name)} ↗</button>`).join('')}</div><button data-action="retry">Intentar de nuevo</button></div></div></main>
<aside class="inspector" id="inspector" hidden aria-live="polite"><button class="inspector-close" data-action="close" aria-label="Cerrar panel">×</button><div class="inspector-body" id="inspector-body"></div></aside></div>
<nav class="mobile-nav" aria-label="Secciones"><button data-tab="spaces" class="selected">⌂ <small>Oficina</small></button><button data-tab="agents">♧ <small>Agentes</small></button><button data-tab="missions">◇ <small>Misiones</small></button><button data-tab="ceo">♛ <small>CEO</small></button></nav>`;
const viewport=document.getElementById('viewport'),loading=document.getElementById('loading'),fallback=document.getElementById('fallback');
const inspector=document.getElementById('inspector'),panel=document.getElementById('inspector-body');
const sceneSpotlight=document.createElement('div');sceneSpotlight.className='scene-spotlight-layer';sceneSpotlight.hidden=true;viewport.append(sceneSpotlight);
function closeSpotlight(){sceneAgent=null;sceneSpotlight.hidden=true;sceneSpotlight.innerHTML='';world?.selectAgent?.(null)}
function renderSpotlight(){
 if(!sceneAgent||!isMobile()||!inspector.hidden){sceneSpotlight.hidden=true;return}
 const room=findRoom(sceneAgent);
 if(!room)return closeSpotlight();
 sceneSpotlight.innerHTML=renderAgentSpotlight(room,agentSceneModel(room,enterprise.snapshot,Boolean(enterprise.user)));
 sceneSpotlight.hidden=false;world?.selectAgent?.(sceneAgent);
}
function renderInspector(){
 world?.updateActivity?.(name=>enterprise.user?{...enterprise.departmentData(name).activity,attention:enterprise.departmentData(name).approvals.length}:null);
 renderSpotlight();
 if(inspector.hidden)return;
 inspector.dataset.view=view;
 const previousScroll=inspector.scrollTop,focused=document.activeElement?.id;
 const selection=focused==='agent-command'?document.activeElement.selectionStart:null;
 const room=findRoom(selected);
 if(view==='directory'){
  panel.innerHTML=`<div class="inspector-kicker">DIRECTORIO</div><h2>Explora tu compañía.</h2><p class="inspector-lead">${catalog().length} espacios ilustrados</p><div class="overview-list">${catalog().map(r=>`<button data-room-name="${safe(r.name)}"><i style="background:${r.accent}"></i><span><b>${safe(r.name)}</b><small>${safe(r.sub)}</small></span><em>↗</em></button>`).join('')}</div>`;
 }else panel.innerHTML=renderPanel(view,room,enterprise,{draft:drafts.get(selected)||'',busy,error,selectedTask:taskId,selectedMission:missionId,agentTab});
 inspector.scrollTop=previousScroll;
 if(focused==='agent-command'&&!busy){const input=document.getElementById('agent-command');input?.focus({preventScroll:true});if(input&&selection!==null)input.setSelectionRange(selection,selection)}
 document.getElementById('connection-pill').textContent=enterprise.user?'● Conectado':'✦ Muestra visual';
}
function show(kind,id=null){if(view!==kind||selected!==id){inspector.scrollTop=0;if(kind==='agent')agentTab='chat'}view=kind;selected=id;error='';inspector.hidden=false;sceneSpotlight.hidden=true;
 document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('selected',b.dataset.tab===kind));
 renderInspector();if(id)world?.focus?.(id);
}
function inspectRoom(id,agent=false){const r=findRoom(id);if(!r)return;if(agent&&r.kind!=='space'&&isMobile()){sceneAgent=id;closePanel();renderSpotlight();return}show(agent&&r.kind!=='space'?'agent':'room',id)}
function closePanel(){inspector.hidden=true;document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('selected',b.dataset.tab==='spaces'));renderSpotlight()}
async function run(action){
 if(busy)return;
 const missionTitle=document.getElementById('mission-title')?.value||'';
 const missionGoal=document.getElementById('mission-goal')?.value||'';
 const loginEmail=document.getElementById('ceo-email')?.value?.trim()||'';
 busy=true;error='';renderInspector();
 try{
  if(action==='run'){
   const room=findRoom(selected),instruction=drafts.get(selected)||'';
   const result=await enterprise.runTask(room.name,instruction);
   drafts.delete(selected);taskId=result.taskId||'';
  }else if(action==='mission-create'){
   const result=await enterprise.createMission(missionTitle,missionGoal);missionId=result.missionId||'';
  }else if(action==='login'){
   if(!/^\S+@\S+\.\S+$/.test(loginEmail))throw new Error('Escribe un correo válido.');
   await enterprise.requestLogin(loginEmail);error='Enlace solicitado. Revisa el correo autorizado.';
  }else if(action==='refresh')await enterprise.refresh();
  else if(action==='logout')await enterprise.signOut();
 }catch(e){error=String(e.message||e).slice(0,220)}finally{busy=false;renderInspector();if(action==='run'&&!error){const log=panel.querySelector('.agent-conversation');if(log)log.scrollTop=log.scrollHeight}}
}
async function initWorld(){
 loading.hidden=false;fallback.hidden=true;closeSpotlight();world?.destroy();world=null;
 if(isMobile()){world=mountMobileDepartments(viewport,{onRoom:id=>inspectRoom(id),onAgent:id=>inspectRoom(id,true),onNavigate:closeSpotlight});loading.hidden=true;renderInspector();return}
 const illustrated=()=>{world?.destroy();world=mountIllustrated(viewport,{onRoom:id=>inspectRoom(id),onAgent:id=>inspectRoom(id,true)});loading.hidden=true};
 try{const {mountWorld}=await import('./world.js');world=await mountWorld(viewport,{onRoom:id=>inspectRoom(id),onAgent:id=>inspectRoom(id,true),onProgress:(done,total)=>{document.getElementById('loadBar').style.width=`${Math.round(done/total*100)}%`;document.getElementById('loadText').textContent=`${done} / ${total} recursos`},onReady:()=>loading.hidden=true,onError:()=>queueMicrotask(illustrated)});if(!world?.ok)illustrated()}
 catch(e){console.warn('Vista gráfica no disponible',e);illustrated()}
}
app.addEventListener('input',e=>{if(e.target.id==='agent-command')drafts.set(selected,e.target.value)});
app.addEventListener('click',async e=>{
 if(e.target.dataset.sceneClose){closeSpotlight();return}
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.sceneClose){closeSpotlight();return}
 if(b.dataset.sceneWork){selected=b.dataset.sceneWork;agentTab='work';show('agent',selected);agentTab='work';renderInspector();return}
 if(b.dataset.tab){if(b.dataset.tab==='spaces'){closePanel();closeSpotlight()}else{closeSpotlight();show(b.dataset.tab)}return}
 if(b.dataset.roomName){const room=catalog().find(r=>r.name===b.dataset.roomName);if(room)inspectRoom(room.id,true);return}
 if(b.dataset.conversation){agentTab='chat';show('agent',b.dataset.conversation);return}
 if(b.dataset.profile){show('room',b.dataset.profile);return}
 if(b.dataset.agentTab){agentTab=b.dataset.agentTab;inspector.scrollTop=0;renderInspector();return}
 if(b.dataset.agentMission){missionId=b.dataset.agentMission;show('missions');return}
 if(b.dataset.room){inspectRoom(b.dataset.room);return}
 if(b.dataset.liveView){show(b.dataset.liveView);return}
 if(b.dataset.taskId){taskId=b.dataset.taskId;show('task');return}
 if(b.dataset.missionId){missionId=missionId===b.dataset.missionId?'':b.dataset.missionId;renderInspector();return}
 if(b.dataset.liveAction){await run(b.dataset.liveAction);return}
 if(b.dataset.missionAction){if(busy)return;busy=true;renderInspector();try{await enterprise.missionAction(b.dataset.missionAction,b.dataset.missionRef)}catch(err){error=String(err.message||err)}finally{busy=false;renderInspector()}return}
 if(b.dataset.approvalId){if(busy)return;busy=true;renderInspector();try{await enterprise.decideApproval(b.dataset.approvalId,b.dataset.decision)}catch(err){error=String(err.message||err)}finally{busy=false;renderInspector()}return}
 if(b.dataset.fileId){try{const url=await enterprise.fileUrl(b.dataset.fileId);const link=document.createElement('a');link.href=url;link.textContent='Abrir descarga segura ↗';link.target='_blank';link.rel='noopener noreferrer';link.className='live-download';b.after(link)}catch(err){error=String(err.message||err);renderInspector()}return}
 if(b.dataset.control){b.dataset.control==='reset'?world?.reset?.():world?.zoom?.(b.dataset.control==='plus'?1:-1);return}
 if(b.dataset.action==='close'){closePanel();return}
 if(b.dataset.action==='retry'){initWorld();return}
});
document.getElementById('directory').addEventListener('click',()=>show('directory'));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!inspector.hidden)closePanel();else closeSpotlight()}});
matchMedia('(max-width:600px)').addEventListener('change',()=>{document.documentElement.classList.toggle('mobile-experience',isMobile());closePanel();initWorld()});
initWorld();
enterprise.init(()=>{document.getElementById('connection-pill').textContent=enterprise.user?'● Conectado':'✦ Muestra visual';renderInspector()}).catch(err=>{error='No se pudo consultar Supabase: '+String(err.message||err);renderInspector()});
setInterval(()=>{if(document.visibilityState==='visible'&&enterprise.user)enterprise.refresh().catch(err=>{error=String(err.message||err);renderInspector()})},20000);
