import {DEPARTMENTS} from './enterprise.js';

const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const date=value=>{const n=Date.parse(value||'');return Number.isFinite(n)?new Intl.DateTimeFormat('es-MX',{dateStyle:'medium',timeStyle:'short'}).format(n):'Sin fecha'};
const status={running:'En ejecución',queued:'En cola',completed:'Terminada',failed:'Falló',pending:'Pendiente',approved:'Aprobada',rejected:'Rechazada',active:'Activa',paused:'Pausada',awaiting_ceo:'Revisión del CEO',reviewed:'Revisada',needs_attention:'Requiere atención',revision_requested:'Correcciones'};
const label=value=>status[value]||value||'Sin estado';
const card=(body)=>`<section class="live-card">${body}</section>`;
const title=(k,h,sub='')=>`<div class="inspector-kicker">${esc(k)}</div><h2>${esc(h)}</h2>${sub?`<p class="inspector-lead">${esc(sub)}</p>`:''}`;
const taskRow=t=>`<button class="live-row" data-task-id="${esc(t.id)}"><span><b>${esc(t.instruction)}</b><small>${esc(label(t.status))} · ${esc(date(t.created_at))}</small></span><em>↗</em></button>`;
const login=()=>card('<h3>Acceso del CEO</h3><p>Inicia sesión con el correo autorizado de PULSE HQ para consultar registros y ejecutar agentes.</p><label for="ceo-email">Correo de PULSE HQ</label><input id="ceo-email" type="email" autocomplete="email" placeholder="tu@correo.com"><button class="primary" data-live-action="login">Enviar enlace de acceso ↗</button><p class="live-note">La vista privada necesita estar autorizada como destino del enlace por Supabase Auth.</p>');
const conversation=(room,data,draft,busy,files)=>{
 const history=data.tasks.slice(0,20).sort((a,b)=>Date.parse(a.created_at)-Date.parse(b.created_at));
 const messages=history.map(t=>{
  const attachments=files.filter(f=>f.task_id===t.id);
  const response=t.result||t.error||(['running','processing','in_progress','queued'].includes(t.status)?'El servidor todavía no registra una respuesta.':'No hay respuesta registrada.');
  return `<div class="agent-exchange"><div class="agent-message ceo-message"><small>CEO · ${esc(date(t.created_at))}</small><p>${esc(t.instruction)}</p></div><div class="agent-message agent-response ${t.status==='failed'?'message-error':''}"><small>${esc(room.agent)} · ${esc(label(t.status))}</small><p>${esc(response)}</p>${t.result?`<button class="live-link" data-task-id="${esc(t.id)}">Leer resultado completo ↗</button>`:''}${attachments.map(fileRow).join('')}</div></div>`;
 }).join('');
 return `<div class="agent-conversation" role="log" aria-label="Encargos y respuestas registrados">${messages||'<p class="chat-empty">Aún no hay encargos registrados para este departamento.</p>'}</div>`+
  `<section class="live-card agent-composer"><h3>Hablar con ${esc(room.agent)}</h3><p>Tu mensaje crea una tarea real para ${esc(room.name)}. La respuesta aparecerá cuando el servidor la registre.</p><label for="agent-command">Tu instrucción</label><textarea id="agent-command" maxlength="2000" placeholder="Describe el objetivo, entregables y criterios de revisión…">${esc(draft)}</textarea><button class="primary" data-live-action="run" ${busy?'disabled':''}>${busy?'Enviando al servidor…':'Enviar instrucción ↗'}</button><p class="live-note">Usa pulse-run, Gemini y el contrato profesional existente. Puede consumir la cuota diaria.</p></section>`;
};

export function renderPanel(view,room,enterprise,{draft='',error='',busy=false,selectedTask='',selectedMission='' }={}){
 const user=enterprise.user,s=enterprise.snapshot;
 const banner=error?`<div class="live-error" role="alert">${esc(error)}</div>`:enterprise.lastError?`<div class="live-error" role="alert">No se pudieron actualizar los registros: ${esc(enterprise.lastError)}. La actividad mostrada corresponde a la última consulta correcta. <button data-live-action="refresh">Reintentar</button></div>`:'';
 const loading=enterprise.loading?'<p class="live-note">Actualizando registros…</p>':'';
 const top=user?`<div class="live-connected">● Sesión del CEO · ${s.loadedAt?'Actualizado '+esc(date(s.loadedAt)):'Consultando datos'}</div>`:'<div class="live-disconnected">Muestra visual · Sin sesión de Supabase</div>';
 const auth=user?'':login();
 let body='';
 if(view==='agent'||view==='room'){
  const name=room.name,dept=DEPARTMENTS.includes(name),data=dept?enterprise.departmentData(name):null;
  const role=data?.role;
  const heading=view==='agent'&&dept?`${room.agent} · ${role?.professional_title||room.title}`:name;
  body=title(view==='agent'?'AGENTE · PULSE HQ':'ESPACIO · PULSE HQ',heading,room.sub)+`<p>${esc(role?.purpose||room.description)}</p>`;
  if(dept){
   body+=card(`<div class="live-state ${esc(user?data.activity.kind:'unconnected')}"><i></i><span>${esc(user?data.activity.label:'Actividad no consultada')}</span></div><p>${user?`${data.tasks.length} tareas registradas · ${data.approvals.length} revisiones pendientes`:'Inicia sesión para consultar el trabajo real de este departamento.'}</p>`);
   if(view==='agent'){
    if(user)body+=conversation(room,data,draft,busy,s.deliverables);
    body+=`<button class="live-link" data-profile="${esc(room.id)}">Ver perfil y colaboración ↗</button>`;
   }else if(user){
    body+=`<button class="primary" data-conversation="${esc(room.id)}">Hablar con ${esc(room.agent)} ↗</button>`;
    if(role)body+=card(`<h3>Contrato profesional</h3><p>${esc(role.professional_title)}</p><small>Traspaso: ${esc(role.handoff_to||'Sin definir')}</small>`);
    body+=`<h3 class="live-section">Trabajos recientes</h3>${data.tasks.length?data.tasks.slice(0,12).map(taskRow).join(''):card('<p>Todavía no hay tareas registradas en esta área.</p>')}`;
    const missionSteps=data.steps.slice(0,8);
    if(missionSteps.length)body+=`<h3 class="live-section">Participación en misiones</h3>${missionSteps.map(step=>card(`<b>Etapa ${step.seq} · ${esc(label(step.status))}</b><p>${esc(step.directive||'Sin instrucción')}</p>${step.task_id?`<button class="live-link" data-task-id="${esc(step.task_id)}">Ver trabajo ↗</button>`:''}`)).join('')}`;
   }
  }else if(room.id==='ceo'&&user)body+=`<div class="live-actions"><button data-live-view="missions">Misiones ↗</button><button data-live-view="approvals">Aprobaciones ↗</button><button data-live-view="files">Entregables ↗</button><button data-live-view="crm">CRM ↗</button></div>`;
  else if(room.id==='missions'&&user)body+='<button class="primary" data-live-view="missions">Abrir misiones reales ↗</button>';
  else if(room.id==='creative'&&user)body+='<button class="primary" data-live-view="files">Ver entregables ↗</button>';
  else if(room.id==='boardroom'&&user)body+='<button class="primary" data-live-view="approvals">Ver revisiones del CEO ↗</button>';
 }else if(view==='agents'){
  body=title('DIRECTORIO PROFESIONAL','Agentes de la compañía','Cada personaje corresponde a un departamento real.');
  body+=DEPARTMENTS.map(name=>{const d=enterprise.departmentData(name);return `<button class="live-row" data-room-name="${esc(name)}"><span><b>${esc(d.role?.professional_title||name)}</b><small>${esc(name)} · ${esc(user?d.activity.label:'Sin conexión')}</small></span><em>↗</em></button>`}).join('');
 }else if(view==='task'){
  const task=s.tasks.find(t=>t.id===selectedTask);
  const files=task?s.deliverables.filter(f=>f.task_id===task.id):[];
  body=task
   ?title('RESULTADO REGISTRADO',task.department,label(task.status))+
    card(`<h3>Instrucción</h3><p>${esc(task.instruction)}</p><small>${esc(date(task.created_at))}</small>`)+
    card(`<h3>Resultado</h3><div class="live-result">${esc(task.result||task.error||'Aún no hay resultado. Actualiza para consultar el registro.')}</div>`)+
    `<button class="live-link" data-room-name="${esc(task.department)}">Volver al agente ↗</button>`+
    `<h3 class="live-section">Entregables</h3>${files.length?files.map(fileRow).join(''):card('<p>No hay archivos asociados a esta tarea.</p>')}`
   :title('TAREA','No disponible','Actualiza o vuelve al departamento.');
 }else if(view==='missions'){
  body=title('GESTIÓN EMPRESARIAL','Misiones reales',user?`${s.missions.length} misiones registradas`:'Inicia sesión para consultar misiones.');
  if(user){
   body+=s.missions.map(m=>{const steps=s.steps.filter(x=>x.mission_id===m.id),done=steps.filter(x=>x.status==='completed').length;
    const expanded=selectedMission===m.id;
    const actions=m.status==='active'?['pause']:m.status==='paused'?['resume']:m.status==='needs_attention'?['retry']:m.status==='revision_requested'?['revise']:[];
    return card(`<button class="live-row" data-mission-id="${esc(m.id)}"><span><b>${esc(m.title)}</b><small>${esc(label(m.status))} · ${done}/${steps.length} etapas terminadas</small></span><em>${expanded?'−':'+'}</em></button>${expanded?`<p>${esc(m.objective)}</p><h3>Traspasos entre departamentos</h3><p class="live-note">Cada etapa muestra instrucciones y resultados guardados por el motor de misiones.</p>${steps.map(st=>`<div class="live-step"><b>${st.seq}. ${esc(st.department)}</b><small>${esc(label(st.status))}</small><p><strong>Encargo:</strong> ${esc(st.directive||'Sin instrucción registrada')}</p>${st.result?`<p><strong>Entrega registrada:</strong> ${esc(st.result.slice(0,500))}${st.result.length>500?'…':''}</p>`:st.error?`<p class="live-step-error">${esc(st.error)}</p>`:''}${st.task_id?`<button class="live-link" data-task-id="${esc(st.task_id)}">Ver trabajo completo ↗</button>`:''}</div>`).join('')}<div class="live-actions">${actions.map(action=>`<button data-mission-action="${action}" data-mission-ref="${esc(m.id)}" ${busy?'disabled':''}>${esc({pause:'Pausar',resume:'Reanudar',retry:'Reintentar',revise:'Solicitar revisión'}[action])}</button>`).join('')}</div>`:''}`)
   }).join('')||card('<p>No hay misiones registradas.</p>');
   body+=card('<h3>Nueva misión del CEO</h3><label for="mission-title">Nombre</label><input id="mission-title" maxlength="120" placeholder="Nombre de la misión"><label for="mission-goal">Objetivo</label><textarea id="mission-goal" maxlength="1500" placeholder="Describe el resultado empresarial esperado…"></textarea><button class="primary" data-live-action="mission-create" '+(busy?'disabled':'')+'>Crear misión real ↗</button><p class="live-note">El motor existente coordina once etapas y aplica sus límites de uso.</p>');
  }
 }else if(view==='approvals'){
  const pending=s.approvals.filter(x=>x.status==='pending');
  body=title('CONTROL DEL CEO','Aprobaciones',`${pending.length} pendientes`);
  body+=pending.map(a=>card(`<h3>${esc(a.title)}</h3><p>${esc(a.description)}</p>${a.task_id?`<button class="live-link" data-task-id="${esc(a.task_id)}">Ver resultado ↗</button>`:''}<div class="live-actions"><button data-approval-id="${esc(a.id)}" data-decision="approved" ${busy?'disabled':''}>Aprobar</button><button data-approval-id="${esc(a.id)}" data-decision="rejected" ${busy?'disabled':''}>Rechazar</button></div>`)).join('')||card('<p>No hay propuestas pendientes.</p>');
  body+='<p class="live-note">Una aprobación registra la revisión. No envía mensajes, no publica y no autoriza gastos.</p>';
 }else if(view==='files'){
  body=title('PRODUCCIÓN','Entregables',`${s.deliverables.length} archivos registrados`);
  body+=s.deliverables.slice(0,60).map(fileRow).join('')||card('<p>Sin archivos registrados.</p>');
 }else if(view==='crm'){
  body=title('GESTIÓN COMERCIAL','CRM de PULSE HQ','El módulo completo se conserva en la aplicación empresarial actual.');
  body+=card('<p>Esta vista está en integración. Para editar oportunidades y contactos usa el centro empresarial anterior con tu sesión original.</p><a class="primary live-external" href="https://bryanstl1.github.io/pulse-hq/" target="_blank" rel="noopener noreferrer">Abrir PULSE HQ empresarial ↗</a>');
 }else{
  body=title('CENTRO DEL CEO','Tu compañía',user?'Registros verificados en Supabase':'Explora la oficina e inicia sesión para operar.');
  if(user)body+=`<div class="live-actions"><button data-live-view="missions">Misiones · ${s.missions.length}</button><button data-live-view="approvals">Revisiones · ${s.approvals.filter(x=>x.status==='pending').length}</button><button data-live-view="files">Archivos · ${s.deliverables.length}</button><button data-live-view="crm">CRM ↗</button></div><button class="live-link" data-live-action="refresh">Actualizar registros ↻</button><button class="live-link" data-live-action="logout">Cerrar sesión</button>`;
  body+=card('<h3>Centro empresarial anterior</h3><p>CRM, estudio creativo, automatizaciones y exportaciones siguen disponibles en la aplicación actual mientras llegan a esta oficina.</p><a class="primary live-external" href="https://bryanstl1.github.io/pulse-hq/" target="_blank" rel="noopener noreferrer">Abrir centro empresarial ↗</a>');
 }
 return top+banner+loading+body+auth;
}

function fileRow(f){return `<button class="live-row" data-file-id="${esc(f.id)}"><span><b>${esc(f.title||f.filename)}</b><small>${esc(f.filename)} · ${esc(date(f.created_at))}</small></span><em>↓</em></button>`}
