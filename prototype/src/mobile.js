import {rooms} from './data.js';

const W=2200,H=1250,GAP=12;
const xy=(x,z)=>[1100+(x-z)*42,616+(x+z)*21];
const escapeText=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/** A mobile-first room navigator. It uses the same illustrated building as desktop,
 * but gives each department a full scene and keeps all movement local to the preview. */
export function mountMobileDepartments(container,{onRoom,onAgent}){
 const deck=document.createElement('div');deck.className='mobile-deck';
 deck.innerHTML=`<div class="mobile-deck-heading"><div class="mobile-deck-eyebrow">PULSE HQ <span> / </span> RECORRE TU COMPAÑÍA</div><div class="mobile-deck-count" id="mobile-room-count"></div><h1 id="mobile-room-heading"></h1><p id="mobile-room-subtitle"></p></div>
 <div class="mobile-stage-viewport" aria-label="Departamentos de la oficina"><div class="mobile-stage-track">${rooms.map((r,i)=>`<article class="mobile-room-stage" data-slide="${i}" style="--accent:${r.accent}" aria-label="${escapeText(r.name)}"><div class="mobile-room-art"><img src="./assets/office-map.webp" alt="" draggable="false"></div><button class="mobile-room-agent" data-agent="${r.id}" aria-label="Conocer a ${escapeText(r.agent)}" style="--sprite-pos:${r.sprite*25}%"><span class="sprite-cell" aria-hidden="true"></span><b>${escapeText(r.agent)}</b></button><div class="mobile-room-footer"><div><small>${String(i+1).padStart(2,'0')} / ${String(rooms.length).padStart(2,'0')} · ${escapeText(r.sub)}</small><strong>${escapeText(r.short)}</strong></div><button data-room="${r.id}" aria-label="Abrir ${escapeText(r.name)}">↗</button></div></article>`).join('')}</div></div>
 <div class="mobile-deck-controls"><button data-move="-1" aria-label="Departamento anterior">←</button><div class="mobile-deck-dots" aria-label="Seleccionar departamento">${rooms.map((r,i)=>`<button data-index="${i}" aria-label="Ir a ${escapeText(r.name)}"></button>`).join('')}</div><button data-move="1" aria-label="Departamento siguiente">→</button></div><div class="mobile-deck-hint">DESLIZA A LOS LADOS PARA CAMBIAR DE ESPACIO</div>`;
 container.append(deck);
 const windowEl=deck.querySelector('.mobile-stage-viewport'),track=deck.querySelector('.mobile-stage-track');
 const slides=[...deck.querySelectorAll('.mobile-room-stage')];let index=0,drag=null,destroyed=false,swiped=false,swipeTimer;
 function layout(){
  const w=windowEl.clientWidth,h=windowEl.clientHeight,cardW=Math.min(460,Math.max(260,w-46)),scale=Math.min(.69,(cardW-28)/610);
  slides.forEach((slide,i)=>{const r=rooms[i],art=slide.querySelector('img'),agent=slide.querySelector('.mobile-room-agent');const [cx,cy]=xy(r.x,r.z),[ax,ay]=xy(...r.position);
   slide.style.width=`${cardW}px`;art.style.width=`${W*scale}px`;art.style.height=`${H*scale}px`;art.style.left=`${cardW/2-cx*scale}px`;art.style.top=`${h*.43-cy*scale}px`;
   agent.style.left=`${cardW/2+(ax-cx)*scale}px`;agent.style.top=`${h*.43+(ay-cy)*scale}px`;
  });
  track.style.gap=`${GAP}px`;position(false);
 }
 function position(animated=true,dragX=0){
  const cardW=slides[0].getBoundingClientRect().width,w=windowEl.clientWidth;
  track.style.transition=animated&&!matchMedia('(prefers-reduced-motion: reduce)').matches?'transform 520ms cubic-bezier(.22,1,.36,1)':'none';
  track.style.transform=`translate3d(${(w-cardW)/2-index*(cardW+GAP)+dragX}px,0,0)`;
 }
 function select(next,animated=true){index=Math.max(0,Math.min(rooms.length-1,next));
  const r=rooms[index];deck.querySelector('#mobile-room-count').textContent=`${String(index+1).padStart(2,'0')} / ${String(rooms.length).padStart(2,'0')}`;
  deck.querySelector('#mobile-room-heading').textContent=r.name;deck.querySelector('#mobile-room-subtitle').textContent=r.sub;
  deck.querySelector('[data-move="-1"]').disabled=index===0;deck.querySelector('[data-move="1"]').disabled=index===rooms.length-1;
  deck.querySelectorAll('[data-index]').forEach((el,i)=>{el.classList.toggle('active',i===index);el.setAttribute('aria-current',i===index?'true':'false')});
  slides.forEach((el,i)=>{el.classList.toggle('active',i===index);el.setAttribute('aria-hidden',i===index?'false':'true');el.querySelectorAll('button').forEach(b=>b.tabIndex=i===index?0:-1)});
  position(animated);
 }
 const pointerDown=e=>{if(e.pointerType==='mouse'&&e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,delta:0}};
 const pointerMove=e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)<8&&Math.abs(dy)<8)return;if(Math.abs(dx)>Math.abs(dy)*1.15){drag.delta=dx;position(false,dx*.82)}};
 const pointerEnd=e=>{if(!drag||e.pointerId!==drag.id)return;const dx=drag.delta;drag=null;if(Math.abs(dx)>45){swiped=true;select(index+(dx<0?1:-1));clearTimeout(swipeTimer);swipeTimer=setTimeout(()=>swiped=false,350)}else position(true)};
 const click=e=>{if(swiped){e.preventDefault();e.stopPropagation();return}const move=e.target.closest('[data-move]');if(move){e.stopPropagation();select(index+Number(move.dataset.move));return}const dot=e.target.closest('[data-index]');if(dot){e.stopPropagation();select(Number(dot.dataset.index));return}const agent=e.target.closest('[data-agent]');if(agent){e.stopPropagation();onAgent?.(agent.dataset.agent);return}const room=e.target.closest('[data-room]');if(room){e.stopPropagation();onRoom?.(room.dataset.room)}};
 const key=e=>{if(e.key==='ArrowLeft'){e.preventDefault();select(index-1)}if(e.key==='ArrowRight'){e.preventDefault();select(index+1)}};
 const observer=new ResizeObserver(()=>{if(!destroyed)layout()});observer.observe(windowEl);
 windowEl.addEventListener('pointerdown',pointerDown);windowEl.addEventListener('pointermove',pointerMove);windowEl.addEventListener('pointerup',pointerEnd);windowEl.addEventListener('pointercancel',pointerEnd);deck.addEventListener('click',click);deck.addEventListener('keydown',key);
 layout();select(0,false);
 return {ok:true,focus(id){const i=rooms.findIndex(r=>r.id===id);if(i>=0)select(i)},reset(){select(0)},zoom(){},destroy(){destroyed=true;clearTimeout(swipeTimer);observer.disconnect();windowEl.removeEventListener('pointerdown',pointerDown);windowEl.removeEventListener('pointermove',pointerMove);windowEl.removeEventListener('pointerup',pointerEnd);windowEl.removeEventListener('pointercancel',pointerEnd);deck.removeEventListener('click',click);deck.removeEventListener('keydown',key);deck.remove()}};
}
