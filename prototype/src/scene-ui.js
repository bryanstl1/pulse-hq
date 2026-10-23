const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const active=new Set(['queued','running','processing','in_progress']);
const status={queued:'En cola',running:'En ejecución',processing:'En ejecución',in_progress:'En ejecución',completed:'Completado',failed:'Falló',pending:'Pendiente',paused:'En pausa'};

export function agentSceneModel(room,snapshot,connected){
 if(!connected)return {connected:false,attention:0,activity:'Actividad no consultada',items:[],role:null,taskCount:0};
 const tasks=(snapshot.tasks||[]).filter(t=>t.department===room.name);
 const approvals=(snapshot.approvals||[]).filter(a=>a.department===room.name&&a.status==='pending');
 const steps=(snapshot.steps||[]).filter(st=>st.department===room.name);
 const role=(snapshot.roles||[]).find(r=>r.department===room.name);
 const running=tasks.filter(t=>active.has(t.status));
 const items=[
  ...approvals.map(a=>({type:'approval',id:a.id,taskId:a.task_id,title:a.title||'Revisión del CEO',status:'Te necesita'})),
  ...running.map(t=>({type:'task',id:t.id,title:t.instruction,status:status[t.status]||t.status})),
  ...steps.slice(0,2).map(st=>({type:'mission',id:st.mission_id,title:(snapshot.missions||[]).find(m=>m.id===st.mission_id)?.title||'Misión registrada',status:`Etapa ${st.seq} · ${status[st.status]||st.status}`})),
  ...tasks.filter(t=>!active.has(t.status)).slice(0,2).map(t=>({type:'task',id:t.id,title:t.instruction,status:status[t.status]||t.status}))
 ].slice(0,4);
 return {connected:true,attention:approvals.length,activity:running.length?'En ejecución':approvals.length?'Revisión pendiente':'Sin tareas en ejecución',items,role,taskCount:tasks.length};
}

export function renderAgentSpotlight(room,model){
 const rows=model.items.map(item=>`<div class="scene-work-row"><span class="scene-work-symbol" aria-hidden="true">${item.type==='approval'?'!':item.type==='mission'?'◇':'↗'}</span><span class="scene-work-text"><b>${esc(item.title)}</b><small>${esc(item.status)}</small></span>${item.type==='approval'?`<button data-live-view="approvals" aria-label="Revisar ${esc(item.title)}">Revisar</button>${item.taskId?`<button data-task-id="${esc(item.taskId)}" aria-label="Ver trabajo de ${esc(item.title)}">Ver</button>`:''}`:item.type==='mission'?`<button data-agent-mission="${esc(item.id)}">Ver</button>`:`<button data-task-id="${esc(item.id)}">Ver</button>`}</div>`).join('');
 return `<div class="scene-spotlight-backdrop" data-scene-close="true"></div><section class="scene-spotlight" role="dialog" aria-modal="false" aria-label="${esc(room.agent)} en ${esc(room.name)}"><div class="scene-spotlight-top"><div><small>EN ${esc(room.name.toUpperCase())}</small><h2>${esc(room.agent)}</h2><p>${esc(model.role?.professional_title||room.title||room.name)}</p></div><button class="scene-spotlight-close" data-scene-close="true" aria-label="Volver a la sala">×</button></div><div class="scene-spotlight-state"><i></i><span>${esc(model.activity)}</span>${model.attention?`<strong>${model.attention} ${model.attention===1?'asunto pendiente':'asuntos pendientes'}</strong>`:''}</div>${model.connected?`<div class="scene-spotlight-jobs"><div class="scene-spotlight-section"><b>En su mesa de trabajo</b><small>${model.taskCount} ${model.taskCount===1?'encargo':'encargos'} registrados</small></div>${rows||'<p class="scene-empty">Aún no hay trabajos registrados para este departamento.</p>'}</div><div class="scene-spotlight-actions"><button data-conversation="${esc(room.id)}">Hablar y asignar ↗</button><button data-scene-work="${esc(room.id)}">Ver actividad</button></div>`:`<p class="scene-empty">Inicia sesión como CEO para consultar encargos y hablar con este departamento.</p><div class="scene-spotlight-actions"><button data-live-view="ceo">Acceso del CEO ↗</button></div>`}<p class="scene-spotlight-foot">Personaje visual del departamento · Los estados proceden de registros de PULSE HQ.</p></section>`;
}
