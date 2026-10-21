import {rooms} from './data.js';
const W=2200,H=1250;
const xy=(x,z)=>[1100+(x-z)*42,616+(x+z)*21];
const rect=(r)=>[[r.x-r.w/2,r.z-r.d/2],[r.x+r.w/2,r.z-r.d/2],[r.x+r.w/2,r.z+r.d/2],[r.x-r.w/2,r.z+r.d/2]].map(([x,z])=>xy(x,z).join(',')).join(' ');
export function mountIllustrated(container,{onRoom,onAgent}){
 const map=document.createElement('div');map.className='illustrated-map';map.innerHTML=`<img class="map-art" alt="Oficina amueblada con cinco salas conectadas, vista isométrica" src="./assets/office-map.webp"><svg class="floor-hits" viewBox="0 0 ${W} ${H}" aria-hidden="true">${rooms.map(r=>`<polygon data-floor="${r.id}" points="${rect(r)}"/>`).join('')}</svg>${rooms.map(r=>{const [x,y]=xy(r.x,r.z);const [ax,ay]=xy(...r.position);return `<button class="map-label" data-room="${r.id}" style="left:${x}px;top:${y-95}px;--accent:${r.accent}"><i></i>${r.short}<span>↗</span></button><button class="map-agent" data-agent="${r.id}" aria-label="Conocer a ${r.agent}" title="${r.agent} · personaje de muestra" style="left:${ax}px;top:${ay-5}px"><img src="./assets/characters/previews/${r.character}.png" alt=""><b>${r.agent}</b></button>`}).join('')}`;
 container.append(map);let scale,dx=0,dy=0,active=new Map(),start=null,pinch=0,initial=0;
 const fit=()=>Math.min(container.clientWidth/W,container.clientHeight/H);
 function apply(){map.style.transform=`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(${scale})`}
 function reset(){scale=fit()*(container.clientWidth<650?1.8:1.07);dx=0;dy=container.clientWidth<650?36:20;apply()}
 const wheel=e=>{e.preventDefault();scale=Math.max(fit()*.85,Math.min(fit()*3.2,scale*(e.deltaY>0?.89:1.12)));apply()};
 const down=e=>{if(e.target.closest('button'))return;active.set(e.pointerId,[e.clientX,e.clientY]);start={x:e.clientX,y:e.clientY,dx,dy};try{container.setPointerCapture(e.pointerId)}catch{}};
 const move=e=>{if(!active.has(e.pointerId))return;active.set(e.pointerId,[e.clientX,e.clientY]);if(active.size>1){const [a,b]=[...active.values()],d=Math.max(10,Math.hypot(a[0]-b[0],a[1]-b[1]));if(pinch)scale=Math.max(fit()*.85,Math.min(fit()*3.2,scale*d/pinch));pinch=d;apply();return}if(!start)return;dx=Math.max(-620,Math.min(620,start.dx+e.clientX-start.x));dy=Math.max(-390,Math.min(390,start.dy+e.clientY-start.y));apply()};
 const up=e=>{active.delete(e.pointerId);start=null;if(active.size<2)pinch=0};
 const click=e=>{const floor=e.target.closest('[data-floor]');if(floor)onRoom?.(floor.dataset.floor);const agent=e.target.closest('[data-agent]');if(agent)onAgent?.(agent.dataset.agent)};
 const resize=()=>{const old=scale/fit();scale=fit()*old;apply()};
 container.addEventListener('wheel',wheel,{passive:false});container.addEventListener('pointerdown',down);container.addEventListener('pointermove',move);container.addEventListener('pointerup',up);container.addEventListener('pointercancel',up);map.addEventListener('click',click);const observer=new ResizeObserver(resize);observer.observe(container);reset();
 return {focus(id){let r=rooms.find(x=>x.id===id);if(!r)return;const [x,y]=xy(r.x,r.z);scale=Math.max(scale,fit()*1.35);dx=(W/2-x)*scale;dy=(H/2-y)*scale;apply()},zoom(dir){scale=Math.max(fit()*.85,Math.min(fit()*3.2,scale*(dir>0?1.2:.83)));apply()},reset,destroy(){observer.disconnect();container.removeEventListener('wheel',wheel);container.removeEventListener('pointerdown',down);container.removeEventListener('pointermove',move);container.removeEventListener('pointerup',up);container.removeEventListener('pointercancel',up);map.remove()}};
}
