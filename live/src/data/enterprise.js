import {normalizeActivity} from './state.js';
import {isCore} from './core.js';

// Mismo cliente que la aplicación anterior (jsDelivr, UMD). Se carga solo cuando hace falta.
const SUPABASE_UMD='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.min.js';
export function loadSupabaseClient(){
 if(globalThis.supabase?.createClient)return Promise.resolve(globalThis.supabase.createClient(PROJECT_URL,PUBLISHABLE_KEY));
 return new Promise((resolve,reject)=>{
  const s=document.createElement('script');s.src=SUPABASE_UMD;s.async=true;s.crossOrigin='anonymous';
  s.onload=()=>globalThis.supabase?.createClient?resolve(globalThis.supabase.createClient(PROJECT_URL,PUBLISHABLE_KEY)):reject(new Error('Cliente de Supabase no disponible.'));
  s.onerror=()=>reject(new Error('No se pudo cargar el cliente de Supabase (sin conexión con jsDelivr).'));
  document.head.appendChild(s);
 });
}

// This is the existing browser-safe publishable key. Privileged keys stay in Edge Functions.
export const PROJECT_URL='https://erluuujhgpreuuaskjwo.supabase.co';
export const PUBLISHABLE_KEY='sb_publishable_R3-FWhFftf_aidZUq6U9jA_WOYQJS9q';

export const DEPARTMENTS=[
 'Dirección estratégica','Marketing y crecimiento','Producción de contenido',
 'Ventas y patrocinios','Relaciones públicas y alianzas','Eventos y experiencias',
 'Comunidad','Inteligencia de mercado','Finanzas y administración',
 'Tecnología y automatización'
];

const empty=()=>({roles:[],tasks:[],approvals:[],missions:[],steps:[],deliverables:[],messages:[],runs:[],loadedAt:null,sig:''});
// Errores de red en iOS («Load failed» en Safari, «Failed to fetch» en Chrome): la solicitud no llegó al servidor,
// casi siempre porque la app pasó a segundo plano (p. ej. al abrir Mail) o la conexión se cortó.
export function friendlyError(error){
 const msg=String(error?.message||error||'');
 if(/load failed|failed to fetch|networkerror|network request failed|the network connection was lost|cancelled/i.test(msg))return 'La solicitud no llegó al servidor (conexión interrumpida o la app pasó a segundo plano). Vuelve a intentarlo con la app abierta.';
 if(/rate limit|too many|429|email rate/i.test(msg))return 'Supabase limitó los correos de acceso por exceso de solicitudes. Usa el último correo que te llegó o espera unos minutos antes de pedir otro.';
 if(/expired|invalid.*(token|otp)|otp.*(expired|invalid)/i.test(msg))return 'El enlace o código ya se usó o caducó. Pide uno nuevo.';
 if(/jwt|session/i.test(msg)&&/expired|invalid|missing/i.test(msg))return 'Tu sesión caducó. Vuelve a entrar como CEO.';
 return msg||'Error del servidor';
}
const isNetwork=e=>/load failed|failed to fetch|networkerror|network request failed|connection was lost/i.test(String(e?.message||e||''));
const fail=error=>{throw new Error(friendlyError(error))};
// Firma de cambios: solo lo que cambia la vista. Si no cambia, la oficina no redibuja tableros ni paneles.
export function snapshotSignature(s){
 const pick=(arr,f)=>(arr||[]).map(f).join(',');
 return [pick(s.tasks,t=>t.id+t.status+(t.updated_at||'')),pick(s.approvals,a=>a.id+a.status),pick(s.missions,m=>m.id+m.status+(m.updated_at||'')),
  pick(s.steps,x=>x.id+x.status+(x.attempt||0)+(x.claimed_at||'')+(x.finished_at||'')),pick(s.deliverables,d=>d.id+(d.review_status||'')+(d.version||'')),
  (s.messages||[]).length+':'+(s.messages?.[0]?.id||''),(s.runs||[]).length+':'+(s.runs?.[0]?.id||'')].join('|');
}
const COOLDOWN_KEY='pulse:otp-sent-at',COOLDOWN_MS=60_000;
const store={get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};

export function createEnterprise(client,{mode='live'}={}){
 if(!client)throw new Error('Cliente de datos no disponible.');
 let user=null, snapshot=empty(),loading=null,lastError='',listener=()=>{};
 const notify=()=>listener({user,snapshot,loading:Boolean(loading),lastError});
 const rows=(result)=>{if(result.error)fail(result.error);return result.data||[]};
 async function refresh(){
  if(!user)return snapshot;
  if(loading)return loading;
  const id=user.id;
  loading=(async()=>{
   const [roles,tasks,approvals,missions,steps,deliverables,messages,runs]=await Promise.all([
    client.from('pulse_agent_roles').select('department,professional_title,purpose,output_contract,acceptance_criteria,handoff_to,active').eq('active',true),
    client.from('pulse_tasks').select('id,department,instruction,status,result_preview,error,created_at,updated_at').eq('user_id',id).order('created_at',{ascending:false}).limit(100),
    client.from('pulse_approvals').select('id,task_id,department,title,description,status,created_at').eq('user_id',id).order('created_at',{ascending:false}).limit(80),
    client.from('pulse_missions').select('id,title,objective,status,engine,claimed_at,spent_tokens,budget_tokens,last_error,created_at,updated_at').eq('user_id',id).order('created_at',{ascending:false}).limit(20),
    client.from('pulse_mission_steps').select('id,mission_id,seq,department,agent_id,directive,status,result_preview,task_id,error,attempt,claimed_at,review,output_format,depends_on,started_at,finished_at').eq('user_id',id).order('seq',{ascending:true}).limit(220),
    client.from('pulse_deliverables').select('id,task_id,title,filename,storage_path,mime_type,mission_id,agent_id,version,review_status,size_bytes,source_type,created_at').eq('user_id',id).order('created_at',{ascending:false}).limit(150),
    // registros del motor multiagente: conversación entre agentes y ejecuciones reales del modelo
    client.from('pulse_agent_messages').select('id,mission_id,step_id,from_agent,to_agent,kind,content,artifact,created_at').eq('user_id',id).order('created_at',{ascending:false}).limit(120),
    client.from('pulse_runs').select('id,mission_id,step_id,agent_id,phase,provider,model,input_tokens,output_tokens,status,created_at').eq('user_id',id).order('created_at',{ascending:false}).limit(200)
   ]);
   // Keep the previous coherent snapshot on query failure; never mix old and new records.
   const next={roles:rows(roles),tasks:rows(tasks),approvals:rows(approvals),missions:rows(missions),steps:rows(steps),deliverables:rows(deliverables),messages:rows(messages),runs:rows(runs),loadedAt:new Date().toISOString()};
   next.sig=snapshotSignature(next);
   if(user?.id===id){snapshot=next;lastError=''};
   return snapshot;
  })();notify();
  try{return await loading}catch(error){lastError=friendlyError(error);throw error}finally{loading=null;notify()}
 }
 // Detecta una sesión iniciada en otra pestaña (p. ej. el enlace del correo abrió el centro anterior en el mismo sitio).
 async function checkSession(){
  const {data}=await client.auth.getSession();
  const next=data?.session?.user||null;
  if((next?.id||null)!==(user?.id||null)){user=next;snapshot=empty();notify();if(user)await refresh().catch(()=>{});}
  return Boolean(user);
 }
 // Texto completo de un resultado, solo cuando se abre el detalle.
 async function taskResult(id){
  if(!user)return '';
  const {data,error}=await client.from('pulse_tasks').select('result,sources').eq('id',id).eq('user_id',user.id).maybeSingle();
  if(error)fail(error);
  return data||{result:'',sources:[]};
 }
 async function init(onChange){
  listener=onChange||(()=>{});
  const {data,error}=await client.auth.getUser();
  if(error&&error.name!=='AuthSessionMissingError')user=null;
  else user=data?.user||null;
  notify();
  client.auth.onAuthStateChange((_event,session)=>{
   const previous=user?.id;user=session?.user||null;
   if(previous!==user?.id)snapshot=empty();
   notify();
   if(user)queueMicrotask(()=>refresh().catch(()=>notify()));
  });
  if(user)await refresh().catch(e=>{if(!isNetwork(e))throw e});
 }
 function otpCooldown(){const t=Number(store.get(COOLDOWN_KEY)||0);return Math.max(0,COOLDOWN_MS-(Date.now()-t))}
 async function requestLogin(email){
  const wait=otpCooldown();
  if(wait>0)throw new Error(`Ya pediste un enlace hace poco. Revisa tu correo o espera ${Math.ceil(wait/1000)} s para pedir otro.`);
  // Se marca antes de enviar: si iOS corta la solicitud al cambiar de app, el correo pudo salir igualmente.
  store.set(COOLDOWN_KEY,String(Date.now()));
  const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:false}});
  if(error&&!isNetwork(error))fail(error);
  if(error)throw new Error('No se confirmó el envío porque la conexión se interrumpió. Revisa tu correo antes de pedir otro enlace (puede haber llegado).');
 }
 // Alternativas al enlace mágico cuando la URL de esta vista no está autorizada en Supabase Auth:
 // el código de 6 dígitos (si la plantilla de correo lo incluye) o pegar el enlace recibido.
 async function verifyCode(email,code){
  const token=String(code||'').replace(/\D/g,'');if(token.length<6)throw new Error('Escribe el código de 6 dígitos.');
  const {error}=await client.auth.verifyOtp({email,token,type:'email'});if(error)fail(error);
 }
 async function verifyLink(link){
  let url;try{url=new URL(String(link||'').trim())}catch{throw new Error('Pega el enlace completo del correo.')}
  if(url.origin!==PROJECT_URL)throw new Error('El enlace no pertenece al proyecto PULSE HQ.');
  const token_hash=url.searchParams.get('token')||url.searchParams.get('token_hash');const type=url.searchParams.get('type')||'magiclink';
  if(!token_hash)throw new Error('El enlace no contiene un token de acceso.');
  const {error}=await client.auth.verifyOtp({token_hash,type:type==='signup'?'signup':'magiclink'});if(error)fail(error);
 }
 async function signOut(){const {error}=await client.auth.signOut();if(error)fail(error);user=null;snapshot=empty();notify()}
 async function invoke(slug,body){
  if(!user)throw new Error('Inicia sesión como CEO para ejecutar esta acción.');
  const {data,error}=await client.functions.invoke(slug,{body});
  if(error){let detail;try{detail=(await error.context?.json())?.error}catch{}throw new Error(friendlyError(detail||error.message))}
  if(!data?.ok)throw new Error(data?.error||'La función no confirmó la operación.');
  await refresh();return data;
 }
 async function runTask(department,instruction){
  if(!DEPARTMENTS.includes(department))throw new Error('Departamento no disponible.');
  const value=instruction.trim();if(value.length<5||value.length>2000)throw new Error('Escribe entre 5 y 2000 caracteres.');
  return invoke('pulse-run',{department,instruction:value});
 }
 // Misiones del motor multiagente: Ulises planifica, delega en otros agentes y Calidad revisa cada entrega.
 async function createMission(title,objective,source='missions'){
  const name=title.trim(),goal=objective.trim();
  if(name.length<5||name.length>120||goal.length<20||goal.length>1500)throw new Error('Título de 5 a 120 caracteres y objetivo de 20 a 1500.');
  return invoke('pulse-core',{action:'mission.create',title:name,objective:goal,source});
 }
 // Escribirle a Ulises desde la oficina registra la instrucción en Supabase y abre una misión real.
 async function askUlises(text){
  const goal=String(text||'').replace(/\s+/g,' ').trim();
  if(goal.length<20)throw new Error('Describe el encargo para Ulises con al menos 20 caracteres.');
  if(goal.length>1500)throw new Error('Máximo 1500 caracteres.');
  const words=goal.replace(/^(ulises|hola ulises)[,:]?\s*/i,'');
  let title=words.length<=80?words:words.slice(0,80).replace(/\s+\S*$/,'')+'…';
  title=title.charAt(0).toUpperCase()+title.slice(1);
  if(title.length<5)title='Encargo del CEO';
  return createMission(title,goal,'office');
 }
 async function missionAction(action,missionId){
  const m=snapshot.missions.find(x=>x.id===missionId);
  if(isCore(m)){
   if(!['pause','resume','cancel'].includes(action))throw new Error('Acción no disponible para misiones del motor multiagente.');
   return invoke('pulse-core',{action:'mission.'+action,missionId});
  }
  if(!['pause','resume','retry','revise'].includes(action))throw new Error('Acción de misión inválida.');
  return invoke('pulse-mission-control',{action,missionId});
 }
 async function decideApproval(id,choice){
  if(!user||!['approved','rejected'].includes(choice))throw new Error('Decisión inválida.');
  const {data,error}=await client.from('pulse_approvals').update({status:choice}).eq('id',id).eq('user_id',user.id).eq('status','pending').select('id');
  if(error)fail(error);
  if(!data?.length)throw new Error('La revisión ya cambió o no está disponible.');
  await refresh();return data[0];
 }
 async function fileUrl(id,{download=false}={}){
  if(!user)throw new Error('Inicia sesión para descargar.');
  const record=snapshot.deliverables.find(x=>x.id===id);
  if(!record)throw new Error('Archivo no disponible en la sesión actual.');
  if(mode==='demo'&&client.demoFileUrl)return client.demoFileUrl(record);
  // PDF: visor del navegador; hoja de cálculo y texto: descarga directa (iOS la ofrece en Archivos o Vista rápida).
  const {data,error}=await client.storage.from('pulse-deliverables').createSignedUrl(record.storage_path,120,download?{download:record.filename||true}:undefined);
  if(error)fail(error);
  if(!data?.signedUrl)throw new Error('No se pudo autorizar la descarga.');
  const url=new URL(data.signedUrl,PROJECT_URL);
  if(url.origin!==PROJECT_URL)throw new Error('Destino de archivo inesperado.');
  return url.href;
 }
 function departmentData(name){
  const role=snapshot.roles.find(r=>r.department===name);
  const tasks=snapshot.tasks.filter(t=>t.department===name);
  const approvals=snapshot.approvals.filter(a=>a.department===name&&a.status==='pending');
  const steps=snapshot.steps.filter(s=>s.department===name);
  const recent=tasks.find(t=>t.status==='running'&&normalizeActivity({source:'server',record:t}).kind==='running');
  const activity=recent?normalizeActivity({source:'server',record:recent}):approvals.length?normalizeActivity({source:'server',record:{status:'pending'}}):{kind:'idle',label:'Disponible',actionable:false};
  return {role,tasks,approvals,steps,activity};
 }
 return {mode,init,refresh,checkSession,taskResult,otpCooldown,requestLogin,verifyCode,verifyLink,signOut,runTask,createMission,askUlises,missionAction,decideApproval,fileUrl,departmentData,
  get user(){return user},get snapshot(){return snapshot},get loading(){return Boolean(loading)},get lastError(){return lastError}};
}
