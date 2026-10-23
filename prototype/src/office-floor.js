import {mobileRooms as rooms} from './mobile-data.js';

// Coordinates are measured against the two 1774 × 887 illustrations. They
// describe places in one connected floor, rather than separate room cards.
const points=[
 ['direction',0,245,235],['marketing',0,565,235],['content',0,895,240],
 ['sales',0,1240,250],['relations',0,1570,245],['events',0,190,645],
 ['community',0,540,650],['intelligence',0,895,655],['finance',0,1245,650],
 ['technology',0,1570,660],['ceo',1,290,230],['boardroom',1,875,235],
 ['creative',1,1480,245],['missions',1,290,650],['lounge',1,860,650],
 ['rest',1,1490,650]
];
const byId=new Map(points.map(p=>[p[0],p]));
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function mountOfficeFloor(container,{onRoom,onAgent,onNavigate,onError,desktop=false}={}){
 const deck=document.createElement('div');deck.className='office-floor';
 deck.innerHTML=`<div class="floor-world" aria-label="Oficina virtual de PULSE HQ">${[0,1].map((wing)=>`<div class="floor-wing" data-wing="${wing}" aria-hidden="${wing?'true':'false'}"><img src="./assets/world/${wing?'special':'departments'}-v2.webp" alt="" draggable="false">${rooms.map((room,i)=>{
  const p=byId.get(room.id);if(!p||p[1]!==wing)return '';
  const [,,x,y]=p;
  return `<button class="floor-room-hit" data-room="${room.id}" style="left:${x-145}px;top:${y-125}px" aria-label="Abrir ${escapeText(room.name)}"></button>${room.kind==='department'?`<button class="floor-agent" data-agent="${room.id}" data-state="unconnected" style="left:${x+37}px;top:${y+25}px;--sprite-pos:${room.sprite*(room.atlas==='original'?25:100/3)}%;--sprite-size:${room.atlas==='original'?500:400}%;--sprite-atlas:url('/assets/characters/${room.atlas==='original'?'pulse-agents-pixel-atlas-v1':`${room.atlas}-atlas-v1`}.webp')" aria-label="Conocer a ${escapeText(room.agent)}"><span class="agent-activity"></span><span class="sprite-cell" aria-hidden="true"></span><b>${escapeText(room.agent)}</b></button>`:''}`;
 }).join('')}</div>`).join('')}</div>
 <div class="floor-heading"><span>PULSE HQ <i>•</i> ${'OFICINA VIRTUAL'}</span><b id="floor-count"></b><h1 id="floor-title"></h1><p id="floor-subtitle"></p></div>
 <div class="floor-foot"><span id="floor-wing-label">EDIFICIO PRINCIPAL</span><div class="floor-foot-row"><div><small id="floor-kind"></small><strong id="floor-short"></strong></div><button data-open="room" aria-label="Abrir espacio seleccionado">↗</button></div></div>
 <div class="floor-controls"><button data-step="-1" aria-label="Espacio anterior">←</button><div class="floor-progress"><span id="floor-progress"></span></div><button data-step="1" aria-label="Espacio siguiente">→</button><button data-zoom="1" aria-label="Acercar oficina">＋</button><button data-zoom="-1" aria-label="Alejar oficina">－</button></div>`;
 container.append(deck);
 const world=deck.querySelector('.floor-world'),wings=[...deck.querySelectorAll('.floor-wing')];
 let index=0,scale=desktop?.6:1.28,overview=desktop,offsetX=0,offsetY=0,gesture=null,dragged=false,timer=0,destroyed=false,pinch=0;
 const pointers=new Map();
 const reduceMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 const current=()=>rooms[index];
 function camera(animated=true){
  const point=byId.get(current().id),rect=world.getBoundingClientRect();
  const targetX=overview?887:point[2],targetY=overview?443:point[3];
  const x=rect.width*.5-targetX*scale+offsetX,y=rect.height*(overview?.51:.47)-targetY*scale+offsetY;
  const wing=wings[point[1]];
  wing.style.transition=animated&&!reduceMotion()?'transform 680ms cubic-bezier(.22,1,.36,1),opacity 300ms ease':'none';
  wing.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;
  wings.forEach((el,i)=>{el.classList.toggle('visible',i===point[1]);el.setAttribute('aria-hidden',i===point[1]?'false':'true');el.querySelectorAll('button').forEach(button=>button.tabIndex=i===point[1]?0:-1)});
 }
 function select(next,animated=true){
  const previous=index;index=Math.max(0,Math.min(rooms.length-1,next));if(previous!==index)overview=false;offsetX=offsetY=0;
  const room=current();if(previous!==index)onNavigate?.(room.id);
  deck.querySelector('#floor-count').textContent=`${String(index+1).padStart(2,'0')} / ${rooms.length}`;
  deck.querySelector('#floor-title').textContent=room.name;
  deck.querySelector('#floor-subtitle').textContent=room.sub;
  deck.querySelector('#floor-kind').textContent=room.kind==='department'?'DEPARTAMENTO':'ESPACIO ESPECIAL';
  deck.querySelector('#floor-short').textContent=room.short;
  deck.querySelector('#floor-wing-label').textContent=index<10?'EDIFICIO PRINCIPAL':'ALA EJECUTIVA';
  deck.querySelector('#floor-progress').style.width=`${(index+1)/rooms.length*100}%`;
  deck.querySelector('[data-step="-1"]').disabled=index===0;
  deck.querySelector('[data-step="1"]').disabled=index===rooms.length-1;
  camera(animated);
 }
 const distance=()=>{const [a,b]=[...pointers.values()];return Math.hypot(a.x-b.x,a.y-b.y)};
 const down=e=>{if(e.pointerType==='mouse'&&e.button!==0)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){pinch=distance();gesture=null}else if(pointers.size===1)gesture={id:e.pointerId,x:e.clientX,y:e.clientY,dx:0,dy:0};};
 const move=e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===2){const next=distance();if(pinch>0){scale=Math.max(.85,Math.min(2.2,scale*next/pinch));camera(false);dragged=true}pinch=next;return}if(!gesture||gesture.id!==e.pointerId)return;gesture.dx=e.clientX-gesture.x;gesture.dy=e.clientY-gesture.y;if(Math.hypot(gesture.dx,gesture.dy)>8){dragged=true;offsetX=gesture.dx*.75;offsetY=gesture.dy*.75;camera(false)}};
 const up=e=>{if(!pointers.has(e.pointerId))return;const wasPinching=pinch>0;pointers.delete(e.pointerId);pinch=0;if(wasPinching){gesture=null;offsetX=offsetY=0;camera(false)}else if(gesture&&gesture.id===e.pointerId){const {dx,dy}=gesture;gesture=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.15){select(index+(dx<0?1:-1))}else{offsetX=offsetY=0;camera(true)}}if(dragged){clearTimeout(timer);timer=setTimeout(()=>dragged=false,350)}};
 const click=e=>{if(dragged){e.preventDefault();e.stopPropagation();return}const step=e.target.closest('[data-step]');if(step){select(index+Number(step.dataset.step));return}const zoom=e.target.closest('[data-zoom]');if(zoom){api.zoom(Number(zoom.dataset.zoom));return}if(e.target.closest('[data-open]')){onRoom?.(current().id);return}const agent=e.target.closest('[data-agent]');if(agent){onAgent?.(agent.dataset.agent);return}const room=e.target.closest('[data-room]');if(room){onRoom?.(room.dataset.room)}};
 const key=e=>{if(e.key==='ArrowLeft'){e.preventDefault();select(index-1)}if(e.key==='ArrowRight'){e.preventDefault();select(index+1)}};
 const observer=new ResizeObserver(()=>{if(!destroyed)camera(false)});observer.observe(world);
 wings.forEach(wing=>wing.querySelector('img').addEventListener('error',()=>{if(!destroyed)onError?.(new Error('No se pudo cargar el plano de la oficina'))},{once:true}));
 world.addEventListener('pointerdown',down);world.addEventListener('pointermove',move);world.addEventListener('pointerup',up);world.addEventListener('pointercancel',up);
 deck.addEventListener('click',click);deck.addEventListener('keydown',key);
 const api={ok:true,focus(id){const i=rooms.findIndex(room=>room.id===id);if(i>=0){overview=false;if(desktop)scale=Math.max(scale,.88);select(i);camera(true)}},reset(){scale=desktop?.6:1.28;overview=desktop;select(0)},zoom(amount){scale=Math.max(desktop?.42:.85,Math.min(2.2,scale*(amount>0?1.18:1/1.18)));camera(true)},selectAgent(id){deck.querySelectorAll('.floor-agent').forEach(button=>button.classList.toggle('scene-selected',button.dataset.agent===id))},updateActivity(getActivity){deck.querySelectorAll('.floor-agent').forEach(button=>{const room=rooms.find(r=>r.id===button.dataset.agent),activity=getActivity?.(room.name);button.dataset.state=activity?.kind||'unconnected';button.title=activity?.label||'Actividad no consultada';button.setAttribute('aria-label',`Conocer a ${room.agent}; ${button.title}`);button.querySelector('.agent-activity').textContent=activity?.attention?`${activity.attention} POR REVISAR`:activity?.kind==='running'?'EN EJECUCIÓN':activity?.kind==='review'?'REVISIÓN PENDIENTE':'';button.classList.toggle('needs-ceo',Boolean(activity?.attention))})},destroy(){destroyed=true;clearTimeout(timer);observer.disconnect();world.removeEventListener('pointerdown',down);world.removeEventListener('pointermove',move);world.removeEventListener('pointerup',up);world.removeEventListener('pointercancel',up);deck.removeEventListener('click',click);deck.removeEventListener('keydown',key);deck.remove()}};
 select(0,false);return api;
}
