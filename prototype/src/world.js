import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {rooms} from './data.js';

const C={base:0xebe9df,tile:0xf4f0e6,terracotta:0xe3cdbb,wood:0xbaa88e,cream:0xf5f1e9,wall:0xe8dfd1,edge:0x6d776d,glass:0xd4edf0,navy:0x405268,leaf:0x5c8a68,stone:0xd8d6ca,shadow:0xc9c5b8};
const MAT={};const material=(hex,roughness=.9)=>MAT[hex]|| (MAT[hex]=new THREE.MeshStandardMaterial({color:hex,roughness}));
const floorGeom=new THREE.BoxGeometry(1,1,1);
const soft=new THREE.MeshStandardMaterial({color:0xffffff,transparent:true,opacity:0.24,depthWrite:false});
const roomG=[];const agentPicks=[];
function box(parent,x,y,z,w,h,d,color){let mesh=new THREE.Mesh(floorGeom,material(color));mesh.position.set(x,y,z);mesh.scale.set(w,h,d);mesh.receiveShadow=true;mesh.castShadow=h>.25;parent.add(mesh);return mesh;}
function carpet(parent,x,z,w,d,col){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshStandardMaterial({color:col,roughness:1,side:THREE.DoubleSide}));m.rotation.x=-Math.PI/2;m.position.set(x,.065,z);parent.add(m);return m;}
function plaque(text,color){let cv=document.createElement('canvas');cv.width=512;cv.height=128;let ctx=cv.getContext('2d');ctx.clearRect(0,0,512,128);ctx.fillStyle='#fffaf3';ctx.beginPath();ctx.roundRect(6,8,500,112,26);ctx.fill();ctx.lineWidth=3;ctx.strokeStyle='#ded9ce';ctx.stroke();ctx.fillStyle=color;ctx.beginPath();ctx.arc(52,64,12,0,7);ctx.fill();ctx.fillStyle='#273733';ctx.font='bold 40px system-ui';ctx.fillText(text,80,78,420);const t=new THREE.CanvasTexture(cv);t.colorSpace=THREE.SRGBColorSpace;const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false}));s.scale.set(3.65,.91,1);s.renderOrder=20;return s;}
function screenBoard(parent,x,z,width=2.3){box(parent,x,1.44,z,width,1.16,.09,C.navy);box(parent,x,1.44,z-.057,width-.17,.98,.025,0x263945);for(let i=0;i<4;i++)box(parent,x-width*.33+i*width*.21,1.47+(i%2)*.14,z-.074,.25,.10,.01,[0x7fae9f,0xe4b08d,0xd7c095,0x89aeb7][i]);}
function wallShell(parent,r){const {x,z,w,d}=r;const back=z-d/2, left=x-w/2, right=x+w/2, front=z+d/2;
  box(parent,x,-.24,z,w,.48,d,C.stone);
  const surface=new THREE.Mesh(new THREE.PlaneGeometry(w-.18,d-.18),material(r.id==='lounge'?0xd9d4c1:r.id==='creative'?0xe7d5c7:r.id==='technology'?0xcbd5d6:r.id==='boardroom'?0xd8d2c7:0xe0d6c9));surface.rotation.x=-Math.PI/2;surface.position.set(x,.011,z);parent.add(surface);
  for(let ix=-Math.floor(w/1.2)/2;ix<=Math.floor(w/1.2)/2;ix++)for(let iz=-Math.floor(d/1.2)/2;iz<=Math.floor(d/1.2)/2;iz++){
    const px=x+ix*1.2,pz=z+iz*1.2;if(Math.abs(px-x)>w/2-.3||Math.abs(pz-z)>d/2-.3)continue;
    box(parent,px,.025,pz,1.16,.02,1.16,r.id==='technology'?0xd8e0df:r.id==='creative'?0xe9d9cc:r.id==='lounge'?0xe3dfcd:0xe8e1d5);
  }
  box(parent,x,1.17,back,w,2.32,.18,C.wall);box(parent,x,2.31,back,w,.11,.25,C.wood);
  box(parent,left,.75,z,.18,1.48,d,C.wall);box(parent,left,1.50,z,.22,.12,d,C.wood);
  box(parent,right,.45,z,.16,.9,d*.7,C.wall);
  box(parent,left+1.2,1.52,back-.11,1.78,1.1,.05,C.navy);
  box(parent,left+1.2,1.52,back-.15,1.58,.88,.02,C.glass);
  box(parent,left+1.2,1.52,back-.18,.035,.88,.02,C.cream);
  box(parent,left+1.2,.96,back-.18,1.6,.035,.02,C.cream);
  box(parent,left+1.2,2.10,back-.18,1.65,.055,.05,C.cream);
  box(parent,left+1.45,2.57,back,.72,.025,.04,0xc5b995);
  box(parent,right,.42,z+d*.33,.16,.8,d*.23,0xb4a999);
  const p=plaque(r.short,r.accent);p.position.set(right-.6,2.5,back+.45);parent.add(p);
  const hit=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({visible:false,side:THREE.DoubleSide}));hit.rotation.x=-Math.PI/2;hit.position.set(x,.08,z);hit.userData={room:r.id};parent.add(hit);roomG.push(hit);
  return {x,z,w,d,front};
}
const furnitureNames=['desk','deskCorner','chairDesk','chairModernCushion','chairCushion','computerScreen','computerKeyboard','computerMouse','laptop','bookcaseClosedWide','bookcaseOpenLow','books','loungeSofa','loungeSofaLong','loungeChair','loungeDesignChair','loungeDesignSofa','tableRound','tableCoffeeGlassSquare','tableGlass','tableCoffee','pottedPlant','plantSmall1','plantSmall2','plantSmall3','rugRectangle','rugRound','lampRoundFloor','lampSquareTable','kitchenCoffeeMachine','sideTableDrawers','sideTable','speakerSmall','televisionModern','benchCushion','stoolBar'];

export async function mountWorld(container,{onRoom,onAgent,onReady,onProgress,onError}){
 let renderer,scene,camera,stage=new THREE.Group(),destroyed=false,frame=0;
 roomG.length=0;agentPicks.length=0;
 const eventHandlers=[],loaded=new Map();let atlas;
 const add=(el,type,fn,opt)=>{el.addEventListener(type,fn,opt);eventHandlers.push([el,type,fn,opt])};
 const pointer={x:0,y:0},ray=new THREE.Raycaster();const cameraTarget=new THREE.Vector3(0,0,0);
 try{renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance',alpha:false});renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.55;renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.setClearColor(0xe9e5dd);container.append(renderer.domElement);}catch(e){onError?.(e);return {ok:false,destroy(){}}}
 scene=new THREE.Scene();scene.background=new THREE.Color(0xeeeae2);scene.add(stage);
 scene.add(new THREE.HemisphereLight(0xffffff,0xaca897,2.3));const sun=new THREE.DirectionalLight(0xfff4df,3.0);sun.position.set(-10,25,18);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-26;sun.shadow.camera.right=26;sun.shadow.camera.top=26;sun.shadow.camera.bottom=-26;sun.shadow.camera.near=.5;sun.shadow.camera.far=65;sun.shadow.bias=-.00022;sun.shadow.normalBias=.035;scene.add(sun);
 camera=new THREE.OrthographicCamera(-15,15,9,-9,.1,100);let span=34,minSpan=18,maxSpan=48;
 const cameraPosition=new THREE.Vector3(24,28,33).normalize();
 function resize(){if(!renderer||destroyed)return;const w=Math.max(300,container.clientWidth),h=Math.max(250,container.clientHeight);renderer.setSize(w,h,false);camera.left=-span*w/h/2;camera.right=span*w/h/2;camera.top=span/2;camera.bottom=-span/2;camera.position.copy(cameraTarget).addScaledVector(cameraPosition,50);camera.lookAt(cameraTarget);camera.updateProjectionMatrix();invalidate()}
 function invalidate(){if(!frame&&!destroyed)frame=requestAnimationFrame(()=>{frame=0;renderer.render(scene,camera)})}
 const ground=box(stage,0,-.62,0,31,.7,23,0xd2d0c4);ground.receiveShadow=true;
 carpet(stage,0,2.1,4.3,10,0xd0c9b5);carpet(stage,-.75,-.16,27,1.48,0xd0c9b5);
 for(let i=-8;i<9;i++)box(stage,i*1.65,-.235,2.1,.018,.01,9.8,0xc0bdae);
 for(const r of rooms)wallShell(stage,r);
 function loader(url){return new Promise((resolve,reject)=>new GLTFLoader().load(url,resolve,undefined,reject))}
 const names=furnitureNames;let done=0,total=names.length+1;
 await Promise.all([...names.map(async name=>{
   try{loaded.set(name,await loader(`./assets/furniture/${name}.glb`))}catch(e){console.warn('Asset no cargado:',name,e)}
   done++;onProgress?.(done,total);
 }),new Promise(resolve=>{
   new THREE.TextureLoader().load('./assets/characters/pulse-agents-pixel-atlas-v1.webp',texture=>{atlas=texture;atlas.colorSpace=THREE.SRGBColorSpace;atlas.magFilter=THREE.NearestFilter;done++;onProgress?.(done,total);resolve()},undefined,e=>{console.warn('Atlas de agentes no cargado',e);done++;onProgress?.(done,total);resolve()});
 })]);
 if(destroyed)return {ok:false,destroy(){}};
 function prop(name,x,z,width,rotation=0,opts={}){const gltf=loaded.get(name);if(!gltf)return;
   let root=gltf.scene.clone(true);const bounds=new THREE.Box3().setFromObject(root),size=bounds.getSize(new THREE.Vector3()),center=bounds.getCenter(new THREE.Vector3());let scale=width/Math.max(.1,size.x);root.scale.setScalar(scale);root.position.set(x-center.x*scale,(opts.y||0)-bounds.min.y*scale,z-center.z*scale);root.rotation.y=rotation;
   root.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});stage.add(root);return root;
 }
 function workstation(x,z,rotation=0){prop('desk',x,z,2.55,rotation);prop('chairDesk',x,z+.95,.82,rotation+Math.PI);prop('computerScreen',x,z-.12,.8,rotation);prop('computerKeyboard',x,z+.35,.68,rotation);prop('computerMouse',x+.44,z+.35,.25,rotation)}
 // Dirección — furniture set shares the same aesthetic but uses a distinct executive arrangement.
 carpet(stage,-8.7,-4.9,4.2,3.1,0xe5d2be);workstation(-8.7,-4.6);prop('bookcaseClosedWide',-11.3,-7.35,2.25);prop('loungeChair',-6.8,-2.4,1.3,-.7);prop('sideTableDrawers',-10.8,-2.2,1.0);prop('lampSquareTable',-10.8,-2.2,.48,0,{y:.48});prop('pottedPlant',-5.8,-7.2,1.05);prop('books',-11.5,-7.0,.55,0,{y:1.3});
 // Estudio — distributed workbenches, editorial pinboard and green accents.
 carpet(stage,-.6,-5.2,6.2,3.8,0xeee0d0);workstation(-2.85,-5.25);workstation(.2,-5.9);prop('deskCorner',2.18,-6.9,1.9,.45);prop('chairModernCushion',2.55,-5.45,.85,-.6);prop('bookcaseOpenLow',2.65,-2.88,1.5,Math.PI/2);prop('lampRoundFloor',-4,-7.55,.8);prop('plantSmall3',3.2,-7.45,.85);prop('books',2.5,-2.97,.7,0,{y:.75});screenBoard(stage,-.8,-8.54,2.45);
 // Tecnología — practical linear workstations, dark board, rack-like shelves.
 carpet(stage,8.4,-4.5,5.6,5.4,0xc6d5d5);workstation(6.45,-4.8);workstation(9.35,-4.8);prop('laptop',9.35,-4.2,.7);prop('bookcaseClosedWide',11.0,-7.5,1.55,Math.PI/2);prop('bookcaseOpenLow',5.8,-7.45,1.45);prop('pottedPlant',5.7,-1.0,.85);prop('lampRoundFloor',11,-1.1,.8);screenBoard(stage,8.1,-8.55,2.9);
 // Relax and collaboration — furniture arranged around a coffee table.
 carpet(stage,-7.7,5.5,6.5,3.9,0xbec5ab);prop('loungeSofaLong',-9.3,4.05,2.95,0);prop('loungeChair',-5.4,5.7,1.25,-Math.PI/2);prop('tableCoffeeGlassSquare',-7.5,6.1,1.5);prop('sideTable',-10.6,6.2,.85);prop('kitchenCoffeeMachine',-10.6,6.2,.5,0,{y:.65});prop('bookcaseOpenLow',-10.5,3.0,1.1);prop('pottedPlant',-4.4,3.2,1.05);prop('plantSmall2',-10.8,7.9,.72);prop('rugRound',-7.5,6,2.1,0,{y:.03});
 // Sala de juntas — seats, meeting surface and presentation monitor.
 carpet(stage,6.2,5.3,7.8,4.65,0xd2c9bf);prop('tableGlass',6.25,5.55,3.65);for(const x of [4.25,6.25,8.25])for(const z of [3.93,7.1])prop('chairModernCushion',x,z,.79,z<5.5?0:Math.PI);prop('televisionModern',6.1,2.66,1.45,0,{y:.5});prop('bookcaseClosedWide',10.2,2.75,1.7);prop('plantSmall1',1.55,2.95,.72);prop('pottedPlant',10.55,7.45,.85);
 // Thresholds and circulation spaces read as one connected building.
 for(const x of [-12.55,12.55])for(const z of [-.4,1.55])prop('pottedPlant',x,z,.78);
 for(const r of rooms){
  const [x,z]=r.position;
  if(atlas){const tile=atlas.clone();tile.repeat.set(.2,1);tile.offset.set(r.sprite*.2,0);tile.needsUpdate=true;const body=new THREE.Sprite(new THREE.SpriteMaterial({map:tile,transparent:true,alphaTest:.035,depthWrite:false}));body.scale.set(1.58,2.62,1);body.position.set(x,1.31,z);stage.add(body);}
  const hit=new THREE.Mesh(new THREE.CylinderGeometry(.75,.75,2.5,10),new THREE.MeshBasicMaterial({visible:false}));hit.position.set(x,1.25,z);hit.userData={agent:r.id};stage.add(hit);agentPicks.push(hit);
  const halo=new THREE.Mesh(new THREE.RingGeometry(.62,.69,24),new THREE.MeshBasicMaterial({color:0x87a996,side:THREE.DoubleSide,transparent:true,opacity:.7}));halo.rotation.x=-Math.PI/2;halo.position.set(x,.085,z);stage.add(halo);
 }
 let down=null,pinchDist=0,pointers=new Map();
 add(renderer.domElement,'webglcontextlost',e=>{e.preventDefault();if(!destroyed)onError?.(new Error('WebGL context lost'))});
 function screenPos(e){const rect=container.getBoundingClientRect();pointer.x=(e.clientX-rect.left)/rect.width*2-1;pointer.y=-(e.clientY-rect.top)/rect.height*2+1;ray.setFromCamera(new THREE.Vector2(pointer.x,pointer.y),camera)}
 function pick(e){screenPos(e);const agentHit=ray.intersectObjects(agentPicks,false)[0];if(agentHit){onAgent?.(agentHit.object.userData.agent);return}const roomHit=ray.intersectObjects(roomG,false)[0];if(roomHit)onRoom?.(roomHit.object.userData.room)}
 const touchZoom=(distance)=>{if(pinchDist){span=Math.max(minSpan,Math.min(maxSpan,span*pinchDist/distance));resize()}pinchDist=distance};
 add(renderer.domElement,'pointerdown',e=>{pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});down={x:e.clientX,y:e.clientY,tx:cameraTarget.x,tz:cameraTarget.z};renderer.domElement.setPointerCapture(e.pointerId)});
 add(renderer.domElement,'pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size>=2){const [a,b]=[...pointers.values()];touchZoom(Math.max(10,Math.hypot(a.x-b.x,a.y-b.y)));return}if(!down)return;const deltaX=e.clientX-down.x,deltaY=e.clientY-down.y;
 const factor=span/Math.max(240,container.clientHeight);cameraTarget.x=Math.max(-11,Math.min(11,down.tx+(-deltaX+deltaY*.5)*factor*.7));cameraTarget.z=Math.max(-8,Math.min(8,down.tz+(-deltaX-deltaY)*factor*.52));resize()});
 add(renderer.domElement,'pointerup',e=>{if(down&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<8&&pointers.size===1)pick(e);pointers.delete(e.pointerId);down=null;if(pointers.size<2)pinchDist=0});
 add(renderer.domElement,'pointercancel',e=>{pointers.delete(e.pointerId);down=null;pinchDist=0});
 add(renderer.domElement,'wheel',e=>{e.preventDefault();span=Math.max(minSpan,Math.min(maxSpan,span*(e.deltaY>0?1.11:.9)));resize()},{passive:false});
 add(document,'visibilitychange',invalidate);const observer=new ResizeObserver(resize);observer.observe(container);resize();onReady?.();
 return {ok:true,focus(id){const r=rooms.find(x=>x.id===id);if(r){cameraTarget.set(r.x,0,r.z);span=Math.min(span,24);resize()}},zoom(dir){span=Math.max(minSpan,Math.min(maxSpan,span*(dir>0?.82:1.22)));resize()},reset(){span=34;cameraTarget.set(0,0,0);resize()},destroy(){destroyed=true;observer.disconnect();if(frame)cancelAnimationFrame(frame);for(const [el,type,fn,opt] of eventHandlers)el.removeEventListener(type,fn,opt);renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();stage.traverse(o=>{if(o.geometry!==floorGeom)o.geometry?.dispose?.();if(o.material){for(const m of [].concat(o.material)){if(!Object.values(MAT).includes(m)){m.map?.dispose?.();m.dispose?.()}}}})}};
}
