import * as THREE from 'three';
import { HOTSPOT_INFO } from '../world/layout.js';

const BUBBLES = {
  running: { icon: '⚙︎', text: 'Trabajando', cls: 'run' },
  review: { icon: '!', text: 'Te necesita', cls: 'review' },
  failed: { icon: '⚠︎', text: 'Falló', cls: 'fail' },
  mission: { icon: '◆', text: 'En misión', cls: 'mission' },
  completed: { icon: '✓', text: 'Resultado', cls: 'done' },
  sending: { icon: '…', text: 'Recibiendo encargo', cls: 'local' }
};

// Etiquetas que siguen a los agentes y marcas tocables sobre objetos interactivos.
export class Overlay {
  constructor(el, stage, { onAgent, onHotspot }) {
    this.el = el; this.stage = stage; this.onAgent = onAgent; this.onHotspot = onHotspot;
    this.tags = new Map(); this.pings = new Map();
    el.addEventListener('click', e => {
      const a = e.target.closest('[data-agent]'); if (a) { e.stopPropagation(); onAgent(a.dataset.agent); return; }
      const h = e.target.closest('[data-hot]'); if (h) { e.stopPropagation(); onHotspot(h.dataset.hot, h.dataset.room); }
    });
  }

  ensureTag(agent) {
    if (this.tags.has(agent.def.id)) return this.tags.get(agent.def.id);
    const b = document.createElement('button');
    b.className = 'agent-tag'; b.dataset.agent = agent.def.id; b.type = 'button';
    b.setAttribute('aria-label', `${agent.def.name}, ${agent.room.name}`);
    b.innerHTML = `<span class="bubble" hidden></span><span class="name"><i></i>${agent.def.name}</span>`;
    this.el.appendChild(b); this.tags.set(agent.def.id, b);
    return b;
  }

  ensurePing(h) {
    const key = `${h.room}:${h.key}:${h.item.wx.toFixed(1)}`;
    if (this.pings.has(key)) return this.pings.get(key);
    const info = HOTSPOT_INFO[h.key] || { title: h.key };
    const b = document.createElement('button');
    b.className = 'hot-ping'; b.type = 'button'; b.dataset.hot = h.key; b.dataset.room = h.room;
    b.setAttribute('aria-label', info.title);
    b.innerHTML = `<span class="dot"></span><span class="count" hidden></span><span class="label">${info.title}</span>`;
    this.el.appendChild(b);
    const box = new THREE.Box3().setFromObject(h.obj); const c = box.getCenter(new THREE.Vector3());
    const rec = { el: b, pos: new THREE.Vector3(c.x, Math.min(box.max.y + 0.15, 2.6), Math.min(c.z + 0.05, box.max.z)), h };
    this.pings.set(key, rec);
    return rec;
  }

  setCounts(counts) { this.counts = counts; }

  update(agents, hotspots, currentRoomId, { selectedId, labelsFor, sheetOpen }) {
    const roomIdx = this.stage.roomIndex;
    for (const ag of agents) {
      const tag = this.ensureTag(ag);
      const p = this.stage.project(ag.headWorld);
      const near = Math.abs(ag.pos.x - this.stage.camX) < 6.2;
      const visible = near && !p.behind && p.x > -60 && p.x < this.stage.w + 60 && p.y > -40 && p.y < this.stage.h + 40;
      tag.style.display = visible ? '' : 'none';
      if (!visible) continue;
      tag.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`;
      const kind = ag.local?.kind === 'sending' ? 'sending' : ag.intent.kind;
      const bub = BUBBLES[kind];
      const bubble = tag.firstElementChild;
      if (bub) {
        bubble.hidden = false;
        const label = kind === 'mission' && ag.intent.mission ? `Misión · etapa ${ag.intent.mission.seq}` : kind === 'review' && ag.intent.approvals?.length > 1 ? `${ag.intent.approvals.length} revisiones` : bub.text;
        const html = `<b>${bub.icon}</b><em>${label}</em>`;
        if (bubble.dataset.html !== html) { bubble.innerHTML = html; bubble.dataset.html = html; bubble.className = `bubble ${bub.cls}`; }
      } else if (ag.emote && ag.intent.source !== 'server' || (ag.emote && ag.intent.kind === 'idle')) {
        // gesto ambiental: solo cuando el agente ya llegó a su sitio
        const arrived = !ag.path.length;
        const html = `<b>${ag.emote}</b>`;
        bubble.hidden = !arrived;
        if (arrived && bubble.dataset.html !== html) { bubble.innerHTML = html; bubble.dataset.html = html; bubble.className = 'bubble amb'; }
      } else bubble.hidden = true;
      tag.classList.toggle('selected', ag.def.id === selectedId);
      tag.classList.toggle('dim', sheetOpen && ag.def.id !== selectedId);
      tag.classList.toggle('far', ag.def.room !== currentRoomId && ag.def.id !== selectedId);
    }
    for (const h of hotspots) {
      const rec = this.ensurePing(h);
      const c0 = this.counts?.[`${h.room}:${h.key}`];
      const show = h.room === currentRoomId && !sheetOpen && (h.key !== 'tray' || c0);
      if (!show) { rec.el.style.display = 'none'; continue; }
      const p = this.stage.project(rec.pos);
      rec.el.style.display = '';
      rec.el.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`;
      const c = this.counts?.[`${h.room}:${h.key}`];
      const countEl = rec.el.querySelector('.count');
      if (c) { countEl.hidden = false; countEl.textContent = c; rec.el.classList.add('has-count'); } else { countEl.hidden = true; rec.el.classList.remove('has-count'); }
    }
  }
}
