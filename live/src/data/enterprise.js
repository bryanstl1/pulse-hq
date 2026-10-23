import {normalizeActivity} from './state.js';

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

const empty=()=>({roles:[],tasks:[],approvals:[],missions:[],steps:[],deliverables:[],loadedAt:null});
const fail=error=>{throw new Error(error?.message||String(error||'Error del servidor'))};

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
   const [roles,tasks,approvals,missions,steps,deliverables]=await Promise.all([
    client.from('pulse_agent_roles').select('department,professional_title,purpose,output_contract,acceptance_criteria,handoff_to,active').eq('active',true),
    client.from('pulse_tasks').select('id,department,instruction,status,result,sources,error,created_at,updated_at').eq('user_id',id).order('created_at',{ascending:false}).limit(100),
    client.from('pulse_approvals').select('id,task_id,department,title,description,status,created_at').eq('user_id',id).order('created_at',{ascending:false}).limit(80),
    client.from('pulse_missions').select('id,title,objective,status,created_at,updated_at').eq('user_id',id).order('created_at',{ascending:false}).limit(20),
    client.from('pulse_mission_steps').select('id,mission_id,seq,department,directive,status,result,task_id,error,started_at,finished_at').eq('user_id',id).order('seq',{ascending:true}).limit(220),
    client.from('pulse_deliverables').select('id,task_id,title,filename,storage_path,mime_type,created_at').eq('user_id',id).order('created_at',{ascending:false}).limit(150)
   ]);
   // Keep the previous coherent snapshot on query failure; never mix old and new records.
   const next={roles:rows(roles),tasks:rows(tasks),approvals:rows(approvals),missions:rows(missions),steps:rows(steps),deliverables:rows(deliverables),loadedAt:new Date().toISOString()};
   if(user?.id===id){snapshot=next;lastError=''};
   return snapshot;
  })();notify();
  try{return await loading}catch(error){lastError=String(error.message||error);throw error}finally{loading=null;notify()}
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
  if(user)await refresh();
 }
 async function requestLogin(email){
  const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:false}});
  if(error)fail(error);
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
  if(error){let detail;try{detail=(await error.context?.json())?.error}catch{}throw new Error(detail||error.message)}
  if(!data?.ok)throw new Error(data?.error||'La función no confirmó la operación.');
  await refresh();return data;
 }
 async function runTask(department,instruction){
  if(!DEPARTMENTS.includes(department))throw new Error('Departamento no disponible.');
  const value=instruction.trim();if(value.length<5||value.length>2000)throw new Error('Escribe entre 5 y 2000 caracteres.');
  return invoke('pulse-run',{department,instruction:value});
 }
 async function createMission(title,objective){
  const name=title.trim(),goal=objective.trim();
  if(name.length<5||name.length>120||goal.length<20||goal.length>1500)throw new Error('Título de 5 a 120 caracteres y objetivo de 20 a 1500.');
  return invoke('pulse-mission-control',{action:'create',title:name,objective:goal});
 }
 async function missionAction(action,missionId){
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
 async function fileUrl(id){
  if(!user)throw new Error('Inicia sesión para descargar.');
  const record=snapshot.deliverables.find(x=>x.id===id);
  if(!record)throw new Error('Archivo no disponible en la sesión actual.');
  if(mode==='demo'&&client.demoFileUrl)return client.demoFileUrl(record);
  const {data,error}=await client.storage.from('pulse-deliverables').createSignedUrl(record.storage_path,120);
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
 return {mode,init,refresh,requestLogin,verifyCode,verifyLink,signOut,runTask,createMission,missionAction,decideApproval,fileUrl,departmentData,
  get user(){return user},get snapshot(){return snapshot},get loading(){return Boolean(loading)},get lastError(){return lastError}};
}
