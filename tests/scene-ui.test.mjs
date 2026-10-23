import test from 'node:test';
import assert from 'node:assert/strict';
import {agentSceneModel,renderAgentSpotlight} from '../prototype/src/scene-ui.js';

const room={id:'marketing',name:'Marketing y crecimiento',agent:'Estratega',title:'Estratega de crecimiento'};
const role={professional_title:'Estrategia de crecimiento'};

test('la ficha prioriza la revisión real y permite abrir el trabajo vinculado',()=>{
 const snapshot={roles:[{...role,department:room.name}],tasks:[{id:'task-1',department:room.name,instruction:'Campaña octubre',status:'completed',created_at:'2026-10-20T12:00:00Z'}],approvals:[{id:'approval-1',task_id:'task-1',department:room.name,title:'Revisar campaña',status:'pending'}],steps:[],missions:[]};
 const model=agentSceneModel(room,snapshot,true);
 assert.equal(model.attention,1);
 assert.equal(model.items[0].type,'approval');
 assert.equal(model.items[0].taskId,'task-1');
 const html=renderAgentSpotlight(room,model);
 assert.match(html,/Revisar campaña/);
 assert.match(html,/data-task-id="task-1"/);
 assert.match(html,/data-live-view="approvals"/);
 assert.match(html,/data-conversation="marketing"/);
});

test('sin sesión no presenta tareas ni un estado de ejecución inventado',()=>{
 const model=agentSceneModel(room,{roles:[],tasks:[],approvals:[],steps:[],missions:[]},false);
 assert.equal(model.attention,0);
 assert.equal(model.items.length,0);
 const html=renderAgentSpotlight(room,model);
 assert.match(html,/Actividad no consultada/);
 assert.doesNotMatch(html,/En ejecución|Disponible/);
 assert.match(html,/data-live-view="ceo"/);
});

test('la colaboración enlaza la misión registrada sin inventar movimiento del agente',()=>{
 const snapshot={roles:[],tasks:[],approvals:[],steps:[{id:'step-1',mission_id:'mission-1',department:room.name,seq:2,directive:'Diseñar estrategia',status:'completed'}],missions:[{id:'mission-1',title:'Lanzamiento',status:'active'}]};
 const model=agentSceneModel(room,snapshot,true);
 assert.equal(model.items[0].type,'mission');
 assert.match(renderAgentSpotlight(room,model),/data-agent-mission="mission-1"/);
});
