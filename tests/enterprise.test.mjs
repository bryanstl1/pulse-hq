import test from 'node:test';
import assert from 'node:assert/strict';
import {createEnterprise} from '../prototype/src/enterprise.js';
import {renderPanel} from '../prototype/src/enterprise-ui.js';

function fakeClient(user=null,records={}){
 const calls=[];
 const query=(table)=>{
  let operation='read';
  const chain={
   select(){return chain},eq(){return chain},order(){return chain},limit(){return chain},
   update(value){operation='update';calls.push({table,operation,value});return chain},
   then(resolve,reject){return Promise.resolve({data:operation==='update'?[]:(records[table]||[]),error:null}).then(resolve,reject)}
  };return chain;
 };
 return {calls,client:{
  auth:{getUser:async()=>({data:{user},error:null}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signInWithOtp:async value=>{calls.push({auth:value});return {error:null}},signOut:async()=>({error:null})},
  from:query,functions:{invoke:async(slug,value)=>{calls.push({slug,value});return {data:{ok:true,taskId:'t1'},error:null}}},
  storage:{from:()=>({createSignedUrl:async()=>({data:{signedUrl:'/storage/v1/object/sign/example'},error:null})})}
 }};
}

test('sin sesión, un avatar no inventa trabajo ni ejecuta funciones',async()=>{
 const {client,calls}=fakeClient();const app=createEnterprise(client);await app.init();
 assert.match(renderPanel('agent',{name:'Marketing y crecimiento',agent:'Ava',title:'Estratega',sub:'Marketing',description:'Prueba'},app),/Actividad no consultada/);
 await assert.rejects(app.runTask('Marketing y crecimiento','Estrategia real'),/Inicia sesión/);
 assert.equal(calls.length,0);
});

test('la tarea se envía al motor existente y solo datos recientes animan el estado',async()=>{
 const user={id:'ceo'},records={pulse_tasks:[{id:'t1',department:'Marketing y crecimiento',instruction:'Preparar plan',status:'completed',created_at:new Date().toISOString(),updated_at:new Date().toISOString()}]};
 const {client,calls}=fakeClient(user,records);const app=createEnterprise(client);await app.init();
 assert.equal(app.departmentData('Marketing y crecimiento').activity.kind,'idle');
 await app.runTask('Marketing y crecimiento','  Preparar un plan profesional  ');
 assert.deepEqual(calls.at(-1),{slug:'pulse-run',value:{body:{department:'Marketing y crecimiento',instruction:'Preparar un plan profesional'}}});
 assert.match(renderPanel('agent',{name:'Marketing y crecimiento',agent:'Ava',title:'Estratega',sub:'Marketing',description:'Prueba'},app),/Preparar plan/);
});

test('una aprobación modificada o ausente nunca se informa como aprobada',async()=>{
 const {client}=fakeClient({id:'ceo'});const app=createEnterprise(client);await app.init();
 await assert.rejects(app.decideApproval('ap1','approved'),/ya cambió/);
});

test('el resultado del servidor se escapa antes de aparecer en una ficha',async()=>{
 const {client}=fakeClient({id:'ceo'},{pulse_tasks:[{id:'t1',department:'Dirección estratégica',instruction:'<script>alert(1)</script>',status:'completed',result:'<img src=x onerror=alert(1)>',created_at:new Date().toISOString()}]});
 const app=createEnterprise(client);await app.init();const html=renderPanel('task',null,app,{selectedTask:'t1'});
 assert.doesNotMatch(html,/<script>|<img/);assert.match(html,/&lt;img/);
});

test('la conversación muestra encargos, respuestas y archivos registrados sin inventar mensajes',async()=>{
 const records={
  pulse_tasks:[{id:'t1',department:'Dirección estratégica',instruction:'Preparar <plan> para el CEO',status:'completed',result:'Resultado aprobado <b>interno</b>',created_at:new Date().toISOString()}],
  pulse_deliverables:[{id:'f1',task_id:'t1',title:'Informe del CEO',filename:'informe.pdf',created_at:new Date().toISOString()}]
 };
 const {client}=fakeClient({id:'ceo'},records);const app=createEnterprise(client);await app.init();
 const html=renderPanel('agent',{id:'direction',name:'Dirección estratégica',agent:'Valeria',title:'Operaciones',sub:'Oficina',description:'Coordina'},app);
 assert.match(html,/Preparar &lt;plan&gt;/);assert.match(html,/Resultado aprobado &lt;b&gt;interno&lt;\/b&gt;/);
 assert.match(html,/Informe del CEO/);assert.match(html,/data-live-action="run"/);
 assert.doesNotMatch(html,/<plan>|<b>interno<\/b>/);
});

test('la colaboración visible procede de etapas guardadas por la misión',async()=>{
 const {client}=fakeClient({id:'ceo'},{
  pulse_missions:[{id:'m1',title:'Lanzamiento',objective:'Preparar una propuesta',status:'active'}],
  pulse_mission_steps:[{id:'s1',mission_id:'m1',seq:1,department:'Inteligencia de mercado',directive:'Investiga datos',status:'completed',result:'Hallazgo registrado',task_id:'t1'}]
 });const app=createEnterprise(client);await app.init();
 const html=renderPanel('missions',null,app,{selectedMission:'m1'});
 assert.match(html,/Traspasos entre departamentos/);assert.match(html,/Investiga datos/);assert.match(html,/Hallazgo registrado/);
 assert.match(html,/data-task-id="t1"/);
});

test('el espacio de trabajo del avatar reúne tareas, revisiones y misión registradas',async()=>{
 const {client}=fakeClient({id:'ceo'}, {
  pulse_tasks:[{id:'t1',department:'Dirección estratégica',instruction:'Preparar propuesta ejecutiva',status:'running',created_at:new Date().toISOString(),updated_at:new Date().toISOString()}],
  pulse_approvals:[{id:'a1',department:'Dirección estratégica',title:'Revisar propuesta',description:'Validar antes de entregar',status:'pending'}],
  pulse_missions:[{id:'m1',title:'Lanzamiento',status:'active'}],
  pulse_mission_steps:[{id:'s1',mission_id:'m1',seq:2,department:'Dirección estratégica',directive:'Coordinar áreas',status:'active',task_id:'t1'}]
 });const app=createEnterprise(client);await app.init();
 const room={id:'direction',name:'Dirección estratégica',agent:'Valeria',title:'Directora',sub:'Oficina',description:'Coordina'};
 const html=renderPanel('agent',room,app,{agentTab:'work'});
 assert.match(html,/Preparar propuesta ejecutiva/);assert.match(html,/Revisar propuesta/);
 assert.match(html,/data-agent-mission="m1"/);assert.match(html,/Lanzamiento/);
 assert.doesNotMatch(html,/id="agent-command"/);
});
