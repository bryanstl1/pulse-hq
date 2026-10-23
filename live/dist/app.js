var Yu=0,gl=1,Zu=2;var _l=1,oo=2,ni=3,Fn=0,Qt=1,wn=2,bi=0,ss=1,xl=2,yl=3,vl=4,Ku=5,Ni=100,Ju=101,ju=102,Qu=103,ed=104,td=200,nd=201,id=202,sd=203,Va=204,Ga=205,rd=206,ad=207,od=208,cd=209,ld=210,hd=211,ud=212,dd=213,fd=214,co=0,lo=1,ho=2,rs=3,uo=4,fo=5,po=6,mo=7,bl=0,pd=1,md=2,Mi=0,gd=1,_d=2,xd=3,yd=4,vd=5,bd=6,go=7,sl="attached",Md="detached",Ml=300,ds=301,fs=302,_o=303,xo=304,ia=306,Yn=1e3,$n=1001,Vs=1002,Gt=1003,yo=1004;var ps=1005;var jt=1006,nr=1007;var kn=1008;var zn=1009,Sl=1010,El=1011,ir=1012,vo=1013,Hi=1014,An=1015,sr=1016,bo=1017,Mo=1018,rr=1020,Tl=35902,wl=35899,Al=1021,Rl=1022,gn=1023,Gs=1026,ar=1027,So=1028,Eo=1029,Cl=1030,To=1031;var wo=1033,sa=33776,ra=33777,aa=33778,oa=33779,Ao=35840,Ro=35841,Co=35842,Io=35843,Po=36196,Lo=37492,Do=37496,No=37808,Uo=37809,Fo=37810,Oo=37811,Bo=37812,ko=37813,zo=37814,Ho=37815,Vo=37816,Go=37817,Wo=37818,Xo=37819,$o=37820,qo=37821,Yo=36492,Zo=36494,Ko=36495,Jo=36283,jo=36284,Qo=36285,ec=36286;var as=2300,os=2301,Ha=2302,rl=2400,al=2401,ol=2402,Sd=2500;var Il=0,ca=1,or=2,Ed=3200,Td=3201;var Pl=0,wd=1,Si="",Tt="srgb",Wt="srgb-linear",wr="linear",at="srgb";var is=7680;var cl=519,Ad=512,Rd=513,Cd=514,Ll=515,Id=516,Pd=517,Ld=518,Dd=519,Wa=35044;var Dl="300 es",Nn=2e3,Ar=2001;var gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=1234567,Er=Math.PI/180,cs=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Nl(i,e){return(i%e+e)%e}function yp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vp(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function bp(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function Mp(i,e=1){return e-Math.abs(Nl(i,e*2)-e)}function Sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wp(i,e){return i+Math.random()*(e-i)}function Ap(i){return i*(.5-Math.random())}function Rp(i){i!==void 0&&(hu=i);let e=hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cp(i){return i*Er}function Ip(i){return i*cs}function Pp(i){return(i&i-1)===0&&i!==0}function Lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Np(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _n={DEG2RAD:Er,RAD2DEG:cs,generateUUID:Un,clamp:Ye,euclideanModulo:Nl,mapLinear:yp,inverseLerp:vp,lerp:Tr,damp:bp,pingpong:Mp,smoothstep:Sp,smootherstep:Ep,randInt:Tp,randFloat:wp,randFloatSpread:Ap,seededRandom:Rp,degToRad:Cp,radToDeg:Ip,isPowerOfTwo:Pp,ceilPowerOfTwo:Lp,floorPowerOfTwo:Dp,setQuaternionFromProperEuler:Np,normalize:rt,denormalize:Dn},ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let w=Math.sqrt(x),T=Math.atan2(w,p*S);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let y=o*S;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pc=new L,uu=new Tn,We=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],x=s[4],y=s[7],w=s[2],T=s[5],A=s[8];return r[0]=a*_+o*S+c*w,r[3]=a*m+o*x+c*T,r[6]=a*p+o*y+c*A,r[1]=l*_+h*S+u*w,r[4]=l*m+h*x+u*T,r[7]=l*p+h*y+u*A,r[2]=d*_+f*S+g*w,r[5]=d*m+f*x+g*T,r[8]=d*p+f*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lc.makeScale(e,t)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lc=new We;function Ul(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nd(){let i=Ws("canvas");return i.style.display="block",i}var du={};function Xs(i){i in du||(du[i]=!0,console.warn(i))}function Ud(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var fu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Up(){let i={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wt]:{primaries:e,whitePoint:n,transfer:wr,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var Je=Up();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ws("canvas")),As.width=e.width,As.height=e.height;let s=As.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=As}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,$s=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dc(s[a].image)):r.push(Dc(s[a]))}else r=Dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Op=0,Nc=new L,Lt=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,s=$n,r=jt,a=kn,o=gn,c=zn,l=i.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Un(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ml;Lt.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,y=(f+1)/2,w=(p+1)/2,T=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return x>y&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=C/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=C/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$a=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends $a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rr=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),xa.subVectors(this.max,gr),Rs.subVectors(e.a,gr),Cs.subVectors(e.b,gr),Is.subVectors(e.c,gr),Ai.subVectors(Cs,Rs),Ri.subVectors(Is,Cs),Qi.subVectors(Rs,Is);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Qi.z,Qi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Qi.z,0,-Qi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Qi.y,Qi.x,0];return!Uc(t,Rs,Cs,Is,xa)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Rs,Cs,Is,xa))?!1:(ya.crossVectors(Ai,Ri),t=[ya.x,ya.y,ya.z],Uc(t,Rs,Cs,Is,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},li=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,_a=new Dt,Rs=new L,Cs=new L,Is=new L,Ai=new L,Ri=new L,Qi=new L,gr=new L,xa=new L,ya=new L,es=new L;function Uc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){es.fromArray(i,r);let o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Bp=new Dt,_r=new L,Fc=new L,tn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(Fc)),this.expandByPoint(_r.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hi=new L,Oc=new L,va=new L,Ci=new L,Bc=new L,ba=new L,kc=new L,Ui=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oc.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Oc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(va),o=Ci.dot(this.direction),c=-Ci.dot(va),l=Ci.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oc).addScaledVector(va,d),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){Bc.subVectors(t,e),ba.subVectors(n,e),kc.crossVectors(Bc,ba);let a=this.direction.dot(kc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);let c=o*this.direction.dot(ba.crossVectors(Ci,ba));if(c<0)return null;let l=o*this.direction.dot(Bc.cross(Ci));if(l<0||c+l>a)return null;let h=-o*Ci.dot(kc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kp,e,zp)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ii.crossVectors(n,pn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ii.crossVectors(n,pn)),Ii.normalize(),Ma.crossVectors(pn,Ii),s[0]=Ii.x,s[4]=Ma.x,s[8]=pn.x,s[1]=Ii.y,s[5]=Ma.y,s[9]=pn.y,s[2]=Ii.z,s[6]=Ma.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],y=n[11],w=n[15],T=s[0],A=s[4],C=s[8],b=s[12],M=s[1],P=s[5],O=s[9],B=s[13],X=s[2],F=s[6],H=s[10],ee=s[14],W=s[3],le=s[7],oe=s[11],be=s[15];return r[0]=a*T+o*M+c*X+l*W,r[4]=a*A+o*P+c*F+l*le,r[8]=a*C+o*O+c*H+l*oe,r[12]=a*b+o*B+c*ee+l*be,r[1]=h*T+u*M+d*X+f*W,r[5]=h*A+u*P+d*F+f*le,r[9]=h*C+u*O+d*H+f*oe,r[13]=h*b+u*B+d*ee+f*be,r[2]=g*T+_*M+m*X+p*W,r[6]=g*A+_*P+m*F+p*le,r[10]=g*C+_*O+m*H+p*oe,r[14]=g*b+_*B+m*ee+p*be,r[3]=S*T+x*M+y*X+w*W,r[7]=S*A+x*P+y*F+w*le,r[11]=S*C+x*O+y*H+w*oe,r[15]=S*b+x*B+y*ee+w*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,x=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,y=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,w=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,T=t*S+n*x+s*y+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=S*A,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*A,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*A,e[4]=x*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*A,e[8]=y*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*A,e[12]=w*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=c*l,x=c*h,y=c*u,w=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+y)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),a=Ps.set(s[4],s[5],s[6]).length(),o=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);let l=1/r,h=1/a,u=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Nn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ar)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Nn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ar)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ps=new L,Pn=new Ge,kp=new L(0,0,0),zp=new L(1,1,1),Ii=new L,Ma=new L,pn=new L,mu=new Ge,gu=new Tn,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hp=0,_u=new L,Ls=new Tn,ui=new Ge,Sa=new L,xr=new L,Vp=new L,Gp=new Tn,xu=new L(1,0,0),yu=new L(0,1,0),vu=new L(0,0,1),bu={type:"added"},Wp={type:"removed"},Ds={type:"childadded",child:null},zc={type:"childremoved",child:null},vt=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new On,n=new Tn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new We}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(xr,Sa,this.up):ui.lookAt(Sa,xr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ui),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wp),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new L,di=new L,Hc=new L,fi=new L,Ns=new L,Us=new L,Mu=new L,Vc=new L,Gc=new L,Wc=new L,Xc=new tt,$c=new tt,qc=new tt,Di=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),di.subVectors(n,t),Hc.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(di),c=Ln.dot(Hc),l=di.dot(di),h=di.dot(Hc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xc.setScalar(0),$c.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xc,r.x),a.addScaledVector($c,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),di.subVectors(e,t),Ln.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Ln.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,n),Us.subVectors(r,n),Vc.subVectors(e,n);let c=Ns.dot(Vc),l=Us.dot(Vc);if(c<=0&&l<=0)return t.copy(n);Gc.subVectors(e,s);let h=Ns.dot(Gc),u=Us.dot(Gc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ns,a);Wc.subVectors(e,r);let f=Ns.dot(Wc),g=Us.dot(Wc);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Us,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Mu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Mu,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Nl(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yc(a,r,e+1/3),this.g=Yc(a,r,e),this.b=Yc(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Je.workingToColorSpace(Yt.copy(this),e),Math.round(Ye(Yt.r*255,0,255))*65536+Math.round(Ye(Yt.g*255,0,255))*256+Math.round(Ye(Yt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Tt){Je.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Ea);let n=Tr(Pi.h,Ea.h,t),s=Tr(Pi.s,Ea.s,t),r=Tr(Pi.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Pe;Pe.NAMES=Fd;var Xp=0,nn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=ss,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nt=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new L,Ta=new ze,$p=0,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$p++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}};var Cr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ir=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},qp=0,En=new Ge,Zc=new vt,Fs=new L,mn=new Dt,yr=new Dt,zt=new L,Ut=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ul(e)?Ir:Cr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(mn.min,yr.min),mn.expandByPoint(zt),zt.addVectors(mn.max,yr.max),mn.expandByPoint(zt)):(mn.expandByPoint(yr.min),mn.expandByPoint(yr.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)zt.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),zt.add(Fs)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;let l=new L,h=new L,u=new L,d=new ze,f=new ze,g=new ze,_=new L,m=new L;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[b].add(_),o[M].add(_),c[C].add(m),c[b].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,b=S.length;C<b;++C){let M=S[C],P=M.start,O=M.count;for(let B=P,X=P+O;B<X;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new L,y=new L,w=new L,T=new L;function A(C){w.fromBufferAttribute(s,C),T.copy(w);let b=o[C];x.copy(b),x.sub(w.multiplyScalar(w.dot(b))).normalize(),y.crossVectors(T,b);let P=y.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,b=S.length;C<b;++C){let M=S[C],P=M.start,O=M.count;for(let B=P,X=P+O;B<X;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new Ge,ts=new Ui,wa=new tn,Eu=new L,Aa=new L,Ra=new L,Ca=new L,Kc=new L,Ia=new L,Tu=new L,Pa=new L,ct=class extends vt{constructor(e=new Ut,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Kc.fromBufferAttribute(u,e),a?Ia.addScaledVector(Kc,h):Ia.addScaledVector(Kc.sub(t),h))}t.add(Ia)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(wa.containsPoint(ts.origin)===!1&&(ts.intersectSphere(wa,Eu)===null||ts.origin.distanceToSquared(Eu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=x;y<w;y+=3){let T=o.getX(y),A=o.getX(y+1),C=o.getX(y+2);s=La(this,p,e,n,l,h,u,T,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=La(this,a,e,n,l,h,u,S,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=x;y<w;y+=3){let T=y,A=y+1,C=y+2;s=La(this,p,e,n,l,h,u,T,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,x=m+1,y=m+2;s=La(this,a,e,n,l,h,u,S,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Yp(i,e,t,n,s,r,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Fn,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Pa);return l<t.near||l>t.far?null:{distance:l,point:Pa.clone(),object:i}}function La(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Aa),i.getVertexPosition(c,Ra),i.getVertexPosition(l,Ca);let h=Yp(i,e,t,n,Aa,Ra,Ca,Tu);if(h){let u=new L;Di.getBarycoord(Tu,Aa,Ra,Ca,u),s&&(h.uv=Di.getInterpolatedAttribute(s,o,c,l,u,new ze)),r&&(h.uv1=Di.getInterpolatedAttribute(r,o,c,l,u,new ze)),a&&(h.normal=Di.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Di.getNormal(Aa,Ra,Ca,d.normal),h.face=d,h.barycoord=u}return h}var Kn=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(_,m,p,S,x,y,w,T,A,C,b){let M=y/A,P=w/C,O=y/2,B=w/2,X=T/2,F=A+1,H=C+1,ee=0,W=0,le=new L;for(let oe=0;oe<H;oe++){let be=oe*P-B;for(let ke=0;ke<F;ke++){let nt=ke*M-O;le[_]=nt*S,le[m]=be*x,le[p]=X,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=T>0?1:-1,h.push(le.x,le.y,le.z),u.push(ke/A),u.push(1-oe/C),ee+=1}}for(let oe=0;oe<C;oe++)for(let be=0;be<A;be++){let ke=d+be+F*oe,nt=d+be+F*(oe+1),dt=d+(be+1)+F*(oe+1),Qe=d+(be+1)+F*oe;c.push(ke,nt,Qe),c.push(nt,dt,Qe),W+=6}o.addGroup(f,W,b),f+=W,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=ms(i[t]);for(let s in n)e[s]=n[s]}return e}function Zp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Od={clone:ms,merge:Zt},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=Zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pr=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new L,wu=new ze,Au=new ze,It=class extends Pr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Au),t.subVectors(Au,wu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,Bs=1,Ya=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(Os,Bs,e,t);s.layers=this.layers,this.add(s);let r=new It(Os,Bs,e,t);r.layers=this.layers,this.add(r);let a=new It(Os,Bs,e,t);a.layers=this.layers,this.add(a);let o=new It(Os,Bs,e,t);o.layers=this.layers,this.add(o);let c=new It(Os,Bs,e,t);c.layers=this.layers,this.add(c);let l=new It(Os,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lr=class extends Lt{constructor(e=[],t=ds,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Za=class extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kn(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:bi});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=jt),new Ya(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ne=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jp={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Dr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jt=new L,Ks=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ru=new L,Cu=new tt,Iu=new tt,Qp=new L,Pu=new Ge,Da=new L,Jc=new tn,Lu=new Ge,jc=new Ui,Nr=class extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingBox.expandByPoint(Da)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Da),this.boundingSphere.expandByPoint(Da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(s),e.ray.intersectsSphere(Jc)!==!1&&(Lu.copy(s).invert(),jc.copy(e.ray).applyMatrix4(Lu),!(this.boundingBox!==null&&jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Md?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Cu.fromBufferAttribute(s.attributes.skinIndex,e),Iu.fromBufferAttribute(s.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Iu.getComponent(r);if(a!==0){let o=Cu.getComponent(r);Pu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qp.copy(Ru).applyMatrix4(Pu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Js=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ur=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Gt,h=Gt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Du=new Ge,em=new Ge,Fr=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:em;Du.multiplyMatrices(o,t[r]),Du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ur(t,e,e,gn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Js),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Fi=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new Ge,Nu=new Ge,Na=[],Uu=new Dt,tm=new Ge,vr=new ct,br=new tn,Or=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Uu.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Uu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),br.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),Nu.multiplyMatrices(n,ks),vr.matrixWorld=Nu,vr.raycast(e,Na);for(let a=0,o=Na.length;a<o;a++){let c=Na[a];c.instanceId=r,c.object=this,t.push(c)}Na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,So,An));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qc=new L,nm=new L,im=new We,Xn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qc.subVectors(n,t).cross(nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||im.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ns=new tn,sm=new ze(.5,.5),Ua=new L,js=class{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],x=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-g,w-S).normalize(),s[1].setComponents(l+a,f+h,p+g,w+S).normalize(),s[2].setComponents(l+o,f+u,p+_,w+x).normalize(),s[3].setComponents(l-o,f-u,p-_,w-x).normalize(),n)s[4].setComponents(c,d,m,y).normalize(),s[5].setComponents(l-c,f-d,p-m,w-y).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-y).normalize(),t===Nn)s[5].setComponents(l+c,f+d,p+m,w+y).normalize();else if(t===Ar)s[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=sm.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qs=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ka=new L,Ja=new L,Fu=new Ge,Mr=new Ui,Fa=new tn,el=new L,Ou=new L,ls=class extends vt{constructor(e=new Ut,t=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ka.fromBufferAttribute(t,s-1),Ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ka.distanceTo(Ja);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;Fu.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),S=h.getX(_+1),x=Oa(this,e,Mr,c,p,S,_);x&&t.push(x)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Oa(this,e,Mr,c,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){let p=Oa(this,e,Mr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Oa(this,e,Mr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Oa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ka.fromBufferAttribute(o,s),Ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Ka,Ja,el,Ou)>n)return;el.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(el);if(!(l<e.near||l>e.far))return{distance:l,point:Ou.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Bu=new L,ku=new L,Br=class extends ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Bu.fromBufferAttribute(t,s),ku.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bu.distanceTo(ku);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},kr=class extends ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},er=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zu=new Ge,ll=new Ui,Ba=new tn,ka=new L,zr=class extends vt{constructor(e=new Ut,t=new er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;zu.copy(s).invert(),ll.copy(e.ray).applyMatrix4(zu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);ka.fromBufferAttribute(u,m),Hu(ka,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)ka.fromBufferAttribute(u,g),Hu(ka,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Hu(i,e,t,n,s,r,a){let o=ll.distanceSqToPoint(i);if(o<t){let c=new L;ll.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Hr=class extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vr=class extends Lt{constructor(e,t,n=Hi,s,r,a,o=Gt,c=Gt,l,h=Gs,u=1){if(h!==Gs&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gr=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wr=class i extends Ut{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,_=s+1,m=new L,p=new L;for(let S=0;S<=g;S++){let x=0,y=0,w=0,T=0;if(S<=n){let b=S/n,M=b*Math.PI/2;y=-h-e*Math.cos(M),w=e*Math.sin(M),T=-e*Math.cos(M),x=b*u}else if(S<=n+r){let b=(S-n)/r;y=-h+b*t,w=e,T=0,x=u+b*d}else{let b=(S-n-r)/n,M=b*Math.PI/2;y=h+e*Math.sin(M),w=e*Math.cos(M),T=e*Math.sin(M),x=u+d+b*u}let A=Math.max(0,Math.min(1,x/f)),C=0;S===0?C=.5/s:S===g&&(C=-.5/s);for(let b=0;b<=s;b++){let M=b/s,P=M*Math.PI*2,O=Math.sin(P),B=Math.cos(P);p.x=-w*B,p.y=y,p.z=w*O,o.push(p.x,p.y,p.z),m.set(-w*B,T,w*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+C,A)}if(S>0){let b=(S-1)*_;for(let M=0;M<s;M++){let P=b+M,O=b+M+1,B=S*_+M,X=S*_+M+1;a.push(P,O,B),a.push(O,X,B)}}}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Xr=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,h=new ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Oi=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function S(){let y=new L,w=new L,T=0,A=(t-e)/n;for(let C=0;C<=r;C++){let b=[],M=C/r,P=M*(t-e)+e;for(let O=0;O<=s;O++){let B=O/s,X=B*c+o,F=Math.sin(X),H=Math.cos(X);w.x=P*F,w.y=-M*n+m,w.z=P*H,u.push(w.x,w.y,w.z),y.set(F,A,H).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let M=_[b][C],P=_[b+1][C],O=_[b+1][C+1],B=_[b][C+1];(e>0||b!==0)&&(h.push(M,P,B),T+=3),(t>0||b!==r-1)&&(h.push(P,O,B),T+=3)}l.addGroup(p,T,0),p+=T}function x(y){let w=g,T=new ze,A=new L,C=0,b=y===!0?e:t,M=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let X=O/s*c+o,F=Math.cos(X),H=Math.sin(X);A.x=b*H,A.y=m*M,A.z=b*F,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=F*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let B=w+O,X=P+O;y===!0?h.push(X,X+1,B):h.push(X+1,X,B),C+=3}l.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class i extends Oi{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Jn=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let x=0;x<l;x++){let y=x*u-r;g.push(y,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let x=S+l*p,y=S+l*(p+1),w=S+1+l*(p+1),T=S+1+l*p;f.push(x,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qr=class i extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new L,g=new ze;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let S=p+m,x=S,y=S+n+1,w=S+n+2,T=S+1;o.push(x,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Bi=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],x=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){let T=w/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let x=h[p][S+1],y=h[p][S],w=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(x,y,T),(p!==n-1||c<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ki=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ft=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ja=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function za(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function am(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Bd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var _i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eo=class extends _i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=e,o=2*t-n;break;case ol:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case al:a=e,c=2*n-t;break;case ol:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[l+w]+x*a[c+w]+y*a[u+w];return r}},to=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},no=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=za(t,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:za(e.times,Array),values:za(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case as:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&rm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ha,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=os;var xi=class extends rn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=as;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="color";var jn=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};jn.prototype.ValueTypeName="number";var io=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Qn=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}};Qn.prototype.ValueTypeName="quaternion";Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends rn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=as;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends rn{constructor(e,t,n,s){super(e,t,n,s)}};ei.prototype.ValueTypeName="vector";var Zr=class{constructor(e="",t=-1,n=[],s=Sd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=am(c);c=Vu(c,1,h),l=Vu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new jn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];Bd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){let x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new jn(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(ei,f+".position",d,"pos",s),n(Qn,f+".quaternion",d,"rot",s),n(ei,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function om(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jn;case"vector":case"vector2":case"vector3":case"vector4":return ei;case"color":return Yr;case"quaternion":return Qn;case"bool":case"boolean":return xi;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=om(i.type);if(i.times===void 0){let t=[],n=[];Bd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var qn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},so=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},kd=new so,ti=class{constructor(e){this.manager=e!==void 0?e:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},hl=class extends Error{constructor(e,t){super(e),this.response=t}},tr=class extends ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){S();function S(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){let C=h[T];C.onProgress&&C.onProgress(w)}p.enqueue(y),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new hl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{qn.add(`file:${e}`,l);let h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zs=new WeakMap,ro=class extends ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=zs.get(a);u===void 0&&(u=[],zs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Ws("img");function c(){h(),t&&t(this);let u=zs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}zs.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),qn.remove(`image:${e}`);let d=zs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Kr=class extends ti{constructor(e){super(e)}load(e,t,n,s){let r=new Lt,a=new ro(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},hs=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jr=class extends hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},tl=new Ge,Gu=new L,Wu=new L,jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gu),Wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wu),t.updateMatrixWorld(),tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ul=class extends jr{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qr=class extends hs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ul}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Xu=new Ge,Sr=new L,nl=new L,dl=class extends jr{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),nl.copy(n.position),nl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nl),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,n.coordinateSystem,n.reversedDepth)}},ea=class extends hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},us=class extends Pr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fl=class extends jr{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new fl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var vi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var il=new WeakMap,ta=class extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(il.has(a)===!0)s&&s(il.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return qn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),il.set(c,l),qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});qn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ao=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ol="\\[\\]\\.:\\/",lm=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",hm="[^"+Ol.replace("\\.","")+"]",um=/((?:WC+[\/:])*)/.source.replace("WC",Bl),dm=/(WCOD+)?/.source.replace("WCOD",hm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),mm=new RegExp("^"+um+dm+fm+pm+"$"),gm=["material","materials","bones","map"],pl=class{constructor(e,t,n){let s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(e){let t=mm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=pl;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ky=new Float32Array(1);var $u=new Ge,na=class{constructor(e,t,n=0,s=1/0){this.ray=new Ui(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,n=[]){return ml(e,this,n,t),n.sort(qu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,n,t);return n.sort(qu),n}};function qu(i,e){return i.distance-e.distance}function ml(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ml(r[a],e,t,!0)}}function kl(i,e,t,n){let s=_m(n);switch(t){case Al:return i*e;case So:return i*e/s.components*s.byteLength;case Eo:return i*e/s.components*s.byteLength;case Cl:return i*e*2/s.components*s.byteLength;case To:return i*e*2/s.components*s.byteLength;case Rl:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case wo:return i*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Io:return Math.max(i,16)*Math.max(e,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Zo:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jo:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _m(i){switch(i){case zn:case Sl:return{byteLength:1,components:1};case ir:case El:case sr:return{byteLength:2,components:1};case bo:case Mo:return{byteLength:2,components:4};case Hi:case vo:case An:return{byteLength:4,components:1};case Tl:case wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ym(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,x0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:vm,alphahash_pars_fragment:bm,alphamap_fragment:Mm,alphamap_pars_fragment:Sm,alphatest_fragment:Em,alphatest_pars_fragment:Tm,aomap_fragment:wm,aomap_pars_fragment:Am,batching_pars_vertex:Rm,batching_vertex:Cm,begin_vertex:Im,beginnormal_vertex:Pm,bsdfs:Lm,iridescence_fragment:Dm,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Om,clipping_planes_vertex:Bm,color_fragment:km,color_pars_fragment:zm,color_pars_vertex:Hm,color_vertex:Vm,common:Gm,cube_uv_reflection_fragment:Wm,defaultnormal_vertex:Xm,displacementmap_pars_vertex:$m,displacementmap_vertex:qm,emissivemap_fragment:Ym,emissivemap_pars_fragment:Zm,colorspace_fragment:Km,colorspace_pars_fragment:Jm,envmap_fragment:jm,envmap_common_pars_fragment:Qm,envmap_pars_fragment:e0,envmap_pars_vertex:t0,envmap_physical_pars_fragment:d0,envmap_vertex:n0,fog_vertex:i0,fog_pars_vertex:s0,fog_fragment:r0,fog_pars_fragment:a0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:c0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:h0,lights_pars_begin:u0,lights_toon_fragment:f0,lights_toon_pars_fragment:p0,lights_phong_fragment:m0,lights_phong_pars_fragment:g0,lights_physical_fragment:_0,lights_physical_pars_fragment:x0,lights_fragment_begin:y0,lights_fragment_maps:v0,lights_fragment_end:b0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:E0,logdepthbuf_vertex:T0,map_fragment:w0,map_pars_fragment:A0,map_particle_fragment:R0,map_particle_pars_fragment:C0,metalnessmap_fragment:I0,metalnessmap_pars_fragment:P0,morphinstance_vertex:L0,morphcolor_vertex:D0,morphnormal_vertex:N0,morphtarget_pars_vertex:U0,morphtarget_vertex:F0,normal_fragment_begin:O0,normal_fragment_maps:B0,normal_pars_fragment:k0,normal_pars_vertex:z0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,iridescence_pars_fragment:$0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:K0,dithering_fragment:J0,dithering_pars_fragment:j0,roughnessmap_fragment:Q0,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:ag,skinning_vertex:og,skinnormal_vertex:cg,specularmap_fragment:lg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:dg,transmission_fragment:fg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:_g,worldpos_vertex:xg,background_vert:yg,background_frag:vg,backgroundCube_vert:bg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:Eg,depth_vert:Tg,depth_frag:wg,distanceRGBA_vert:Ag,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Ig,linedashed_vert:Pg,linedashed_frag:Lg,meshbasic_vert:Dg,meshbasic_frag:Ng,meshlambert_vert:Ug,meshlambert_frag:Fg,meshmatcap_vert:Og,meshmatcap_frag:Bg,meshnormal_vert:kg,meshnormal_frag:zg,meshphong_vert:Hg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:$g,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:Kg,sprite_vert:Jg,sprite_frag:jg},he={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ii={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ii.physical={uniforms:Zt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var tc={r:0,b:0,g:0},gs=new On,Qg=new Ge;function e_(i,e,t,n,s,r,a){let o=new Pe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1,w=g(x);w===null?p(o,c):w&&w.isColor&&(p(w,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===ia)?(h===void 0&&(h=new ct(new Kn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ms(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(y.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(gs)),h.material.toneMapped=Je.getTransfer(w.colorSpace)!==at,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ct(new Jn(2,2),new Bn({name:"BackgroundMaterial",uniforms:ms(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(w.colorSpace)!==at,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(tc,Fl(i)),n.buffers.color.setClear(tc.r,tc.g,tc.b,y,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m,dispose:S}}function t_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,P,O,B,X){let F=!1,H=u(B,O,P);r!==H&&(r=H,l(r.object)),F=f(M,B,O,X),F&&g(M,B,O,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(M,P,O,B),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,P,O){let B=O.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let F=X[P.id];F===void 0&&(F={},X[P.id]=F);let H=F[B];return H===void 0&&(H=d(c()),F[B]=H),H}function d(M){let P=[],O=[],B=[];for(let X=0;X<t;X++)P[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,O,B){let X=r.attributes,F=P.attributes,H=0,ee=O.getAttributes();for(let W in ee)if(ee[W].location>=0){let oe=X[W],be=F[W];if(be===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),oe===void 0||oe.attribute!==be||be&&oe.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function g(M,P,O,B){let X={},F=P.attributes,H=0,ee=O.getAttributes();for(let W in ee)if(ee[W].location>=0){let oe=F[W];oe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));let be={};be.attribute=oe,oe&&oe.data&&(be.data=oe.data),X[W]=be,H++}r.attributes=X,r.attributesNum=H,r.index=B}function _(){let M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let O=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;O[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),X[M]!==P&&(i.vertexAttribDivisor(M,P),X[M]=P)}function S(){let M=r.newAttributes,P=r.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==M[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function x(M,P,O,B,X,F,H){H===!0?i.vertexAttribIPointer(M,P,O,X,F):i.vertexAttribPointer(M,P,O,B,X,F)}function y(M,P,O,B){_();let X=B.attributes,F=O.getAttributes(),H=P.defaultAttributeValues;for(let ee in F){let W=F[ee];if(W.location>=0){let le=X[ee];if(le===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){let oe=le.normalized,be=le.itemSize,ke=e.get(le);if(ke===void 0)continue;let nt=ke.buffer,dt=ke.type,Qe=ke.bytesPerElement,Y=dt===i.INT||dt===i.UNSIGNED_INT||le.gpuType===vo;if(le.isInterleavedBufferAttribute){let j=le.data,xe=j.stride,Be=le.offset;if(j.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)p(W.location+Re,j.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Re=0;Re<W.locationSize;Re++)x(W.location+Re,be/W.locationSize,dt,oe,xe*Qe,(Be+be/W.locationSize*Re)*Qe,Y)}else{if(le.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)p(W.location+j,le.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let j=0;j<W.locationSize;j++)x(W.location+j,be/W.locationSize,dt,oe,be*Qe,be/W.locationSize*j*Qe,Y)}}else if(H!==void 0){let oe=H[ee];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(W.location,oe);break;case 3:i.vertexAttrib3fv(W.location,oe);break;case 4:i.vertexAttrib4fv(W.location,oe);break;default:i.vertexAttrib1fv(W.location,oe)}}}}S()}function w(){C();for(let M in n){let P=n[M];for(let O in P){let B=P[O];for(let X in B)h(B[X].object),delete B[X];delete P[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let O in P){let B=P[O];for(let X in B)h(B[X].object),delete B[X];delete P[O]}delete n[M.id]}function A(M){for(let P in n){let O=n[P];if(O[M.id]===void 0)continue;let B=O[M.id];for(let X in B)h(B[X].object),delete B[X];delete O[M.id]}}function C(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function n_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function i_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!C)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:w,maxSamples:T}}function s_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Xn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,x=S*4,y=p.clippingState||null;c.value=y,y=h(g,d,x,f);for(let w=0;w!==x;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function r_(i){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=ds:o===xo&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===_o||o===xo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Za(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var lr=4,zd=[.125,.215,.35,.446,.526,.582],ys=20,zl=new us,Hd=new Pe,Hl=null,Vl=0,Gl=0,Wl=!1,xs=(1+Math.sqrt(5))/2,cr=1/xs,Vd=[new L(-xs,cr,0),new L(xs,cr,0),new L(-cr,0,xs),new L(cr,0,xs),new L(0,xs,-cr),new L(0,xs,cr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],a_=new L,sc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=a_}=r;Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Vl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:sr,format:gn,colorSpace:Wt,depthBuffer:!1},s=Gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o_(r)),this._blurMaterial=c_(r,e,t)}return s}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,n,s,r){let c=new It(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Hd),u.toneMapping=Mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Nt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new ct(new Kn,_),p=!1,S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(Hd),p=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):y===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));let w=this._cubeSize;nc(s,y*w,x>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ds||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;nc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vd[(s-r-1)%Vd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ct(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],S=0;for(let A=0;A<ys;++A){let C=A/_,b=Math.exp(-C*C/2);p.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[s],w=3*y*(s>x-lr?s-x+lr:0),T=4*(this._cubeSize-y);nc(t,w,T,3*y,2*y),c.setRenderTarget(t),c.render(u,zl)}};function o_(i){let e=[],t=[],n=[],s=i,r=i-lr+1+zd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-lr?c=zd[a-i+lr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,C=T>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];S.set(b,_*g*T),x.set(d,m*g*T);let M=[T,T,T,T,T,T];y.set(M,p*g*T)}let w=new Ut;w.setAttribute("position",new Pt(S,_)),w.setAttribute("uv",new Pt(x,m)),w.setAttribute("faceIndex",new Pt(y,p)),e.push(w),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gd(i,e,t){let n=new Zn(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c_(i,e,t){let n=new Float32Array(ys),s=new L(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Wd(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xd(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===_o||c===xo,h=c===ds||c===fs;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new sc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new sc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function h_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function u_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let S=f.array;_=f.version;for(let x=0,y=S.length;x<y;x+=3){let w=S[x+0],T=S[x+1],A=S[x+2];d.push(w,T,T,A,A,w)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){let w=x+0,T=x+1,A=x+2;d.push(w,T,T,A,A,w)}}else return;let m=new(Ul(d)?Ir:Cr)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function d_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function f_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function p_(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*u),A=new Rr(T,y,w,u);A.type=An,A.needsUpdate=!0;let C=x*4;for(let M=0;M<u;M++){let P=m[M],O=p[M],B=S[M],X=y*w*4*M;for(let F=0;F<P.count;F++){let H=F*C;f===!0&&(s.fromBufferAttribute(P,F),T[X+H+0]=s.x,T[X+H+1]=s.y,T[X+H+2]=s.z,T[X+H+3]=0),g===!0&&(s.fromBufferAttribute(O,F),T[X+H+4]=s.x,T[X+H+5]=s.y,T[X+H+6]=s.z,T[X+H+7]=0),_===!0&&(s.fromBufferAttribute(B,F),T[X+H+8]=s.x,T[X+H+9]=s.y,T[X+H+10]=s.z,T[X+H+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ze(y,w)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function m_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var uf=new Lt,$d=new Vr(1,1),df=new Rr,ff=new qa,pf=new Lr,qd=[],Yd=[],Zd=new Float32Array(16),Kd=new Float32Array(9),Jd=new Float32Array(4);function ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qd[s];if(r===void 0&&(r=new Float32Array(s),qd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ac(i,e){let t=Yd[e];t===void 0&&(t=new Int32Array(e),Yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function g_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function v_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Jd.set(n),i.uniformMatrix2fv(this.addr,!1,Jd),Bt(t,n)}}function b_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Kd.set(n),i.uniformMatrix3fv(this.addr,!1,Kd),Bt(t,n)}}function M_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,n))return;Zd.set(n),i.uniformMatrix4fv(this.addr,!1,Zd),Bt(t,n)}}function S_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function T_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function A_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function P_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($d.compareFunction=Ll,r=$d):r=uf,t.setTexture2D(e||r,s)}function L_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ff,s)}function D_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pf,s)}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||df,s)}function U_(i){switch(i){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return y_;case 35674:return v_;case 35675:return b_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return w_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}function F_(i,e){i.uniform1fv(this.addr,e)}function O_(i,e){let t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function B_(i,e){let t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function k_(i,e){let t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function z_(i,e){let t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function H_(i,e){let t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function V_(i,e){let t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function G_(i,e){i.uniform1iv(this.addr,e)}function W_(i,e){i.uniform2iv(this.addr,e)}function X_(i,e){i.uniform3iv(this.addr,e)}function $_(i,e){i.uniform4iv(this.addr,e)}function q_(i,e){i.uniform1uiv(this.addr,e)}function Y_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function K_(i,e){i.uniform4uiv(this.addr,e)}function J_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||uf,r[a])}function j_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ff,r[a])}function Q_(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pf,r[a])}function ex(i,e,t){let n=this.cache,s=e.length,r=ac(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||df,r[a])}function tx(i){switch(i){case 5126:return F_;case 35664:return O_;case 35665:return B_;case 35666:return k_;case 35674:return z_;case 35675:return H_;case 35676:return V_;case 5124:case 35670:return G_;case 35667:case 35671:return W_;case 35668:case 35672:return X_;case 35669:case 35673:return $_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return ex}}var $l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tx(t.type)}},Yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function jd(i,e){i.seq.push(e),i.map[e.id]=e}function nx(i,e,t){let n=i.name,s=n.length;for(Xl.lastIndex=0;;){let r=Xl.exec(n),a=Xl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){jd(t,l===void 0?new $l(o,i,e):new ql(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Yl(o),jd(t,u)),t=u}}}var hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);nx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Qd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ix=37297,sx=0;function rx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ef=new We;function ax(i){Je._getMatrix(ef,Je.workingColorSpace,i);let e=`mat3( ${ef.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case wr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rx(i.getShaderSource(e),o)}else return r}function ox(i,e){let t=ax(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cx(i,e){let t;switch(e){case gd:t="Linear";break;case _d:t="Reinhard";break;case xd:t="Cineon";break;case yd:t="ACESFilmic";break;case bd:t="AgX";break;case go:t="Neutral";break;case vd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ic=new L;function lx(){Je.getLuminanceCoefficients(ic);let i=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function ux(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function la(i){return i!==""}function nf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(fx,mx)}var px=new Map;function mx(i,e){let t=qe[e];if(t===void 0){let n=px.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}var gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rf(i){return i.replace(gx,_x)}function _x(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fs&&(e="ENVMAP_MODE_REFRACTION"),e}function bx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bl:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case md:e="ENVMAP_BLENDING_ADD";break}return e}function Mx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=xx(t),l=yx(t),h=vx(t),u=bx(t),d=Mx(t),f=hx(t),g=ux(r),_=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`)):(m=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[af(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?cx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,ox("linearToOutputTexel",t.outputColorSpace),lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),a=Zl(a),a=nf(a,t),a=sf(a,t),o=Zl(o),o=nf(o,t),o=sf(o,t),a=rf(a),o=rf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=S+m+a,y=S+p+o,w=Qd(s,s.VERTEX_SHADER,x),T=Qd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(T)||"",F=O.trim(),H=B.trim(),ee=X.trim(),W=!0,le=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{let oe=tf(s,w,"vertex"),be=tf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+oe+`
`+be)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||ee==="")&&(le=!1);le&&(P.diagnostics={runnable:W,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(w),s.deleteShader(T),C=new hr(s,_),b=dx(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,ix)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var Ex=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jl(e),t.set(e,n)),n}},Jl=class{constructor(e){this.id=Ex++,this.code=e,this.usedTimes=0}};function Tx(i,e,t,n,s,r,a){let o=new qs,c=new Kl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,O,B){let X=O.fog,F=B.geometry,H=b.isMeshStandardMaterial?O.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),W=ee&&ee.mapping===ia?ee.image.height:null,le=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let oe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,be=oe!==void 0?oe.length:0,ke=0;F.morphAttributes.position!==void 0&&(ke=1),F.morphAttributes.normal!==void 0&&(ke=2),F.morphAttributes.color!==void 0&&(ke=3);let nt,dt,Qe,Y;if(le){let st=ii[le];nt=st.vertexShader,dt=st.fragmentShader}else nt=b.vertexShader,dt=b.fragmentShader,c.update(b),Qe=c.getVertexShaderID(b),Y=c.getFragmentShaderID(b);let j=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Re=B.isBatchedMesh===!0,je=!!b.map,$t=!!b.matcap,I=!!ee,xt=!!b.aoMap,Ve=!!b.lightMap,Fe=!!b.bumpMap,Me=!!b.normalMap,yt=!!b.displacementMap,Se=!!b.emissiveMap,$e=!!b.metalnessMap,kt=!!b.roughnessMap,Rt=b.anisotropy>0,R=b.clearcoat>0,v=b.dispersion>0,k=b.iridescence>0,q=b.sheen>0,J=b.transmission>0,$=Rt&&!!b.anisotropyMap,Ae=R&&!!b.clearcoatMap,re=R&&!!b.clearcoatNormalMap,Ee=R&&!!b.clearcoatRoughnessMap,Te=k&&!!b.iridescenceMap,ie=k&&!!b.iridescenceThicknessMap,pe=q&&!!b.sheenColorMap,De=q&&!!b.sheenRoughnessMap,we=!!b.specularMap,de=!!b.specularColorMap,Xe=!!b.specularIntensityMap,D=J&&!!b.transmissionMap,se=J&&!!b.thicknessMap,ae=!!b.gradientMap,_e=!!b.alphaMap,te=b.alphaTest>0,Z=!!b.alphaHash,ve=!!b.extensions,He=Mi;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=i.toneMapping);let ft={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:dt,defines:b.defines,customVertexShaderID:Qe,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Re,batchingColor:Re&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Wt,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:$t,envMap:I,envMapMode:I&&ee.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:Ve,bumpMap:Fe,normalMap:Me,displacementMap:d&&yt,emissiveMap:Se,normalMapObjectSpace:Me&&b.normalMapType===wd,normalMapTangentSpace:Me&&b.normalMapType===Pl,metalnessMap:$e,roughnessMap:kt,anisotropy:Rt,anisotropyMap:$,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:re,clearcoatRoughnessMap:Ee,dispersion:v,iridescence:k,iridescenceMap:Te,iridescenceThicknessMap:ie,sheen:q,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:we,specularColorMap:de,specularIntensityMap:Xe,transmission:J,transmissionMap:D,thicknessMap:se,gradientMap:ae,opaque:b.transparent===!1&&b.blending===ss&&b.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:Z,combine:b.combine,mapUv:je&&_(b.map.channel),aoMapUv:xt&&_(b.aoMap.channel),lightMapUv:Ve&&_(b.lightMap.channel),bumpMapUv:Fe&&_(b.bumpMap.channel),normalMapUv:Me&&_(b.normalMap.channel),displacementMapUv:yt&&_(b.displacementMap.channel),emissiveMapUv:Se&&_(b.emissiveMap.channel),metalnessMapUv:$e&&_(b.metalnessMap.channel),roughnessMapUv:kt&&_(b.roughnessMap.channel),anisotropyMapUv:$&&_(b.anisotropyMap.channel),clearcoatMapUv:Ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(b.sheenRoughnessMap.channel),specularMapUv:we&&_(b.specularMap.channel),specularColorMapUv:de&&_(b.specularColorMap.channel),specularIntensityMapUv:Xe&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:se&&_(b.thicknessMap.channel),alphaMapUv:_e&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||Rt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(je||_e),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:Se&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wn,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&b.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(S(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let M=g[b.type],P;if(M){let O=ii[M];P=Od.clone(O.uniforms)}else P=b.uniforms;return P}function w(b,M){let P;for(let O=0,B=h.length;O<B;O++){let X=h[O];if(X.cacheKey===M){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Sx(i,M,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function wx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function of(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Ax),n.length>1&&n.sort(d||of),s.length>1&&s.sort(d||of)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Rx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new cf,i.set(n,[a])):s>=r.length?(a=new cf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Px=0;function Lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Dx(i){let e=new Cx,t=Ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ge,a=new Ge;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,x=0,y=0,w=0,T=0,A=0;l.sort(Lx);for(let b=0,M=l.length;b<M;b++){let P=l[b],O=P.color,B=P.intensity,X=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);A++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=H,f++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(O).multiplyScalar(B),H.distance=X,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;let ee=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,ee.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=ee.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=F,y++}_++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let ee=P.shadow,W=t.get(P);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=A,n.version=Px++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let x=l[p];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function lf(i){let e=new Dx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Nx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new lf(i),e.set(s,[o])):r>=a.length?(o=new lf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ox(i,e,t){let n=new js,s=new ze,r=new ze,a=new tt,o=new ja({depthPacking:Td}),c=new Qa,l={},h=t.maxTextureSize,u={[Fn]:Qt,[Qt]:Fn,[wn]:wn},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let p=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=p!==ni&&this.type===ni,X=p===ni&&this.type!==ni;for(let F=0,H=T.length;F<H;F++){let ee=T[F],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let le=W.getFrameExtents();if(s.multiply(le),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,W.mapSize.y=r.y)),W.map===null||B===!0||X===!0){let be=this.type!==ni?{minFilter:Gt,magFilter:Gt}:{};W.map!==null&&W.map.dispose(),W.map=new Zn(s.x,s.y,be),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let oe=W.getViewportCount();for(let be=0;be<oe;be++){let ke=W.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),O.viewport(a),W.updateMatrices(ee,be),n=W.getFrustum(),y(A,C,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===ni&&S(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,P)};function S(T,A){let C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,f,_,null)}function x(T,A,C,b){let M=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=M.uuid,B=A.uuid,X=l[O];X===void 0&&(X={},l[O]=X);let F=X[B];F===void 0&&(F=M.clone(),X[B]=F,A.addEventListener("dispose",w)),M=F}if(M.visible=A.visible,M.wireframe=A.wireframe,b===ni?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let O=i.properties.get(M);O.light=C}return M}function y(T,A,C,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ni)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let B=e.update(T),X=T.material;if(Array.isArray(X)){let F=B.groups;for(let H=0,ee=F.length;H<ee;H++){let W=F[H],le=X[W.materialIndex];if(le&&le.visible){let oe=x(T,le,b,M);T.onBeforeShadow(i,T,A,C,B,oe,W),i.renderBufferDirect(C,null,B,oe,T,W),T.onAfterShadow(i,T,A,C,B,oe,W)}}}else if(X.visible){let F=x(T,X,b,M);T.onBeforeShadow(i,T,A,C,B,F,null),i.renderBufferDirect(C,null,B,F,T,null),T.onAfterShadow(i,T,A,C,B,F,null)}}let O=T.children;for(let B=0,X=O.length;B<X;B++)y(O[B],A,C,b,M)}function w(T){T.target.removeEventListener("dispose",w);for(let C in l){let b=l[C],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Bx={[co]:lo,[ho]:po,[uo]:mo,[rs]:fo,[lo]:co,[po]:ho,[mo]:uo,[fo]:rs};function kx(i,e){function t(){let D=!1,se=new tt,ae=null,_e=new tt(0,0,0,0);return{setMask:function(te){ae!==te&&!D&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){D=te},setClear:function(te,Z,ve,He,ft){ft===!0&&(te*=He,Z*=He,ve*=He),se.set(te,Z,ve,He),_e.equals(se)===!1&&(i.clearColor(te,Z,ve,He),_e.copy(se))},reset:function(){D=!1,ae=null,_e.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,ae=null,_e=null,te=null;return{setReversed:function(Z){if(se!==Z){let ve=e.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=Z;let He=te;te=null,this.setClear(He)}},getReversed:function(){return se},setTest:function(Z){Z?j(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!D&&(i.depthMask(Z),ae=Z)},setFunc:function(Z){if(se&&(Z=Bx[Z]),_e!==Z){switch(Z){case co:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Z}},setLocked:function(Z){D=Z},setClear:function(Z){te!==Z&&(se&&(Z=1-Z),i.clearDepth(Z),te=Z)},reset:function(){D=!1,ae=null,_e=null,te=null,se=!1}}}function s(){let D=!1,se=null,ae=null,_e=null,te=null,Z=null,ve=null,He=null,ft=null;return{setTest:function(st){D||(st?j(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(st){se!==st&&!D&&(i.stencilMask(st),se=st)},setFunc:function(st,ci,Wn){(ae!==st||_e!==ci||te!==Wn)&&(i.stencilFunc(st,ci,Wn),ae=st,_e=ci,te=Wn)},setOp:function(st,ci,Wn){(Z!==st||ve!==ci||He!==Wn)&&(i.stencilOp(st,ci,Wn),Z=st,ve=ci,He=Wn)},setLocked:function(st){D=st},setClear:function(st){ft!==st&&(i.clearStencil(st),ft=st)},reset:function(){D=!1,se=null,ae=null,_e=null,te=null,Z=null,ve=null,He=null,ft=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,y=null,w=null,T=null,A=new Pe(0,0,0),C=0,b=!1,M=null,P=null,O=null,B=null,X=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=ee>=2);let le=null,oe={},be=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),nt=new tt().fromArray(be),dt=new tt().fromArray(ke);function Qe(D,se,ae,_e){let te=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<ae;ve++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(se+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Z}let Y={};Y[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(rs),Fe(!1),Me(gl),j(i.CULL_FACE),xt(bi);function j(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function xe(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Be(D,se){return u[D]!==se?(i.bindFramebuffer(D,se),u[D]=se,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(D,se){let ae=f,_e=!1;if(D){ae=d.get(se),ae===void 0&&(ae=[],d.set(se,ae));let te=D.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ve=te.length;Z<ve;Z++)ae[Z]=i.COLOR_ATTACHMENT0+Z;ae.length=te.length,_e=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ae)}function je(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let $t={[Ni]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[ju]:i.FUNC_REVERSE_SUBTRACT};$t[Qu]=i.MIN,$t[ed]=i.MAX;let I={[td]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[ld]:i.SRC_ALPHA_SATURATE,[od]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(D,se,ae,_e,te,Z,ve,He,ft,st){if(D===bi){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),D!==Ku){if(D!==m||st!==b){if((p!==Ni||y!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,y=Ni),st)switch(D){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,x=null,w=null,T=null,A.set(0,0,0),C=0,m=D,b=st}return}te=te||se,Z=Z||ae,ve=ve||_e,(se!==p||te!==y)&&(i.blendEquationSeparate($t[se],$t[te]),p=se,y=te),(ae!==S||_e!==x||Z!==w||ve!==T)&&(i.blendFuncSeparate(I[ae],I[_e],I[Z],I[ve]),S=ae,x=_e,w=Z,T=ve),(He.equals(A)===!1||ft!==C)&&(i.blendColor(He.r,He.g,He.b,ft),A.copy(He),C=ft),m=D,b=!1}function Ve(D,se){D.side===wn?xe(i.CULL_FACE):j(i.CULL_FACE);let ae=D.side===Qt;se&&(ae=!ae),Fe(ae),D.blending===ss&&D.transparent===!1?xt(bi):xt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let _e=D.stencilWrite;o.setTest(_e),_e&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Me(D){D!==Yu?(j(i.CULL_FACE),D!==P&&(D===gl?i.cullFace(i.BACK):D===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),P=D}function yt(D){D!==O&&(H&&i.lineWidth(D),O=D)}function Se(D,se,ae){D?(j(i.POLYGON_OFFSET_FILL),(B!==se||X!==ae)&&(i.polygonOffset(se,ae),B=se,X=ae)):xe(i.POLYGON_OFFSET_FILL)}function $e(D){D?j(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function kt(D){D===void 0&&(D=i.TEXTURE0+F-1),le!==D&&(i.activeTexture(D),le=D)}function Rt(D,se,ae){ae===void 0&&(le===null?ae=i.TEXTURE0+F-1:ae=le);let _e=oe[ae];_e===void 0&&(_e={type:void 0,texture:void 0},oe[ae]=_e),(_e.type!==D||_e.texture!==se)&&(le!==ae&&(i.activeTexture(ae),le=ae),i.bindTexture(D,se||Y[D]),_e.type=D,_e.texture=se)}function R(){let D=oe[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){nt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function De(D){dt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),dt.copy(D))}function we(D,se){let ae=l.get(se);ae===void 0&&(ae=new WeakMap,l.set(se,ae));let _e=ae.get(D);_e===void 0&&(_e=i.getUniformBlockIndex(se,D.name),ae.set(D,_e))}function de(D,se){let _e=l.get(se).get(D);c.get(se)!==_e&&(i.uniformBlockBinding(se,_e,D.__bindingPointIndex),c.set(se,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,oe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,x=null,y=null,w=null,T=null,A=new Pe(0,0,0),C=0,b=!1,M=null,P=null,O=null,B=null,X=null,nt.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:xe,bindFramebuffer:Be,drawBuffers:Re,useProgram:je,setBlending:xt,setMaterial:Ve,setFlipSided:Fe,setCullFace:Me,setLineWidth:yt,setPolygonOffset:Se,setScissorTest:$e,activeTexture:kt,bindTexture:Rt,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Te,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:re,texStorage3D:Ee,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Ae,scissor:pe,viewport:De,reset:Xe}}function zx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return f?new OffscreenCanvas(R,v):Ws("canvas")}function _(R,v,k){let q=1,J=Rt(R);if((J.width>k||J.height>k)&&(q=k/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(q*J.width),Ae=Math.floor(q*J.height);u===void 0&&(u=g($,Ae));let re=v?g($,Ae):u;return re.width=$,re.height=Ae,re.getContext("2d").drawImage(R,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Ae+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,v,k,q,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=v;if(v===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),v===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){let Ae=J?wr:Je.getTransfer(q);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=Ae===at?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(R,v){let k;return R?v===null||v===Hi||v===rr?k=i.DEPTH24_STENCIL8:v===An?k=i.DEPTH32F_STENCIL8:v===ir&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hi||v===rr?k=i.DEPTH_COMPONENT24:v===An?k=i.DEPTH_COMPONENT32F:v===ir&&(k=i.DEPTH_COMPONENT16),k}function w(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function T(R){let v=R.target;v.removeEventListener("dispose",T),C(v),v.isVideoTexture&&h.delete(v)}function A(R){let v=R.target;v.removeEventListener("dispose",A),M(v)}function C(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,q=d.get(k);if(q){let J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(R),Object.keys(q).length===0&&d.delete(k)}n.remove(R)}function b(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let k=R.source,q=d.get(k);delete q[v.__cacheKey],a.memory.textures--}function M(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[q][J]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=R.textures;for(let q=0,J=k.length;q<J;q++){let $=n.get(k[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[q])}n.remove(R)}let P=0;function O(){P=0}function B(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function X(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function F(R,v){let k=n.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function H(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Y(k,R,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function ee(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Y(k,R,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function W(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let le={[Yn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Vs]:i.MIRRORED_REPEAT},oe={[Gt]:i.NEAREST,[yo]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[nr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},be={[Ad]:i.NEVER,[Dd]:i.ALWAYS,[Rd]:i.LESS,[Ll]:i.LEQUAL,[Cd]:i.EQUAL,[Ld]:i.GEQUAL,[Id]:i.GREATER,[Pd]:i.NOTEQUAL};function ke(R,v){if(v.type===An&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===nr||v.magFilter===ps||v.magFilter===kn||v.minFilter===jt||v.minFilter===nr||v.minFilter===ps||v.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,oe[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==ps&&v.minFilter!==kn||v.type===An&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function nt(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",T));let q=v.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let $=X(v);if($!==R.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[$].usedTimes++;let Ae=J[R.__cacheKey];Ae!==void 0&&(J[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(v)),R.__cacheKey=$,R.__webglTexture=J[$].texture}return k}function dt(R,v,k){return Math.floor(Math.floor(R/k)/v)}function Qe(R,v,k,q){let $=R.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,q,v.data);else{$.sort((ie,pe)=>ie.start-pe.start);let Ae=0;for(let ie=1;ie<$.length;ie++){let pe=$[Ae],De=$[ie],we=pe.start+pe.count,de=dt(De.start,v.width,4),Xe=dt(pe.start,v.width,4);De.start<=we+1&&de===Xe&&dt(De.start+De.count-1,v.width,4)===de?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++Ae,$[Ae]=De)}$.length=Ae+1;let re=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ie=0,pe=$.length;ie<pe;ie++){let De=$[ie],we=Math.floor(De.start/4),de=Math.ceil(De.count/4),Xe=we%v.width,D=Math.floor(we/v.width),se=de,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Xe,D,se,ae,k,q,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Y(R,v,k){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);let J=nt(R,v),$=v.source;t.bindTexture(q,R.__webglTexture,i.TEXTURE0+k);let Ae=n.get($);if($.version!==Ae.__version||J===!0){t.activeTexture(i.TEXTURE0+k);let re=Je.getPrimaries(Je.workingColorSpace),Ee=v.colorSpace===Si?null:Je.getPrimaries(v.colorSpace),Te=v.colorSpace===Si||re===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ie=_(v.image,!1,s.maxTextureSize);ie=kt(v,ie);let pe=r.convert(v.format,v.colorSpace),De=r.convert(v.type),we=x(v.internalFormat,pe,De,v.colorSpace,v.isVideoTexture);ke(q,v);let de,Xe=v.mipmaps,D=v.isVideoTexture!==!0,se=Ae.__version===void 0||J===!0,ae=$.dataReady,_e=w(v,ie);if(v.isDepthTexture)we=y(v.format===ar,v.type),se&&(D?t.texStorage2D(i.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,pe,De,null));else if(v.isDataTexture)if(Xe.length>0){D&&se&&t.texStorage2D(i.TEXTURE_2D,_e,we,Xe[0].width,Xe[0].height);for(let te=0,Z=Xe.length;te<Z;te++)de=Xe[te],D?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,pe,De,de.data):t.texImage2D(i.TEXTURE_2D,te,we,de.width,de.height,0,pe,De,de.data);v.generateMipmaps=!1}else D?(se&&t.texStorage2D(i.TEXTURE_2D,_e,we,ie.width,ie.height),ae&&Qe(v,ie,pe,De)):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,pe,De,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,we,Xe[0].width,Xe[0].height,ie.depth);for(let te=0,Z=Xe.length;te<Z;te++)if(de=Xe[te],v.format!==gn)if(pe!==null)if(D){if(ae)if(v.layerUpdates.size>0){let ve=kl(de.width,de.height,v.format,v.type);for(let He of v.layerUpdates){let ft=de.data.subarray(He*ve/de.data.BYTES_PER_ELEMENT,(He+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,He,de.width,de.height,1,pe,ft)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,pe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,we,de.width,de.height,ie.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ie.depth,pe,De,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,we,de.width,de.height,ie.depth,0,pe,De,de.data)}else{D&&se&&t.texStorage2D(i.TEXTURE_2D,_e,we,Xe[0].width,Xe[0].height);for(let te=0,Z=Xe.length;te<Z;te++)de=Xe[te],v.format!==gn?pe!==null?D?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,te,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,de.width,de.height,pe,De,de.data):t.texImage2D(i.TEXTURE_2D,te,we,de.width,de.height,0,pe,De,de.data)}else if(v.isDataArrayTexture)if(D){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,we,ie.width,ie.height,ie.depth),ae)if(v.layerUpdates.size>0){let te=kl(ie.width,ie.height,v.format,v.type);for(let Z of v.layerUpdates){let ve=ie.data.subarray(Z*te/ie.data.BYTES_PER_ELEMENT,(Z+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,pe,De,ve)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,De,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,pe,De,ie.data);else if(v.isData3DTexture)D?(se&&t.texStorage3D(i.TEXTURE_3D,_e,we,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,De,ie.data)):t.texImage3D(i.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,pe,De,ie.data);else if(v.isFramebufferTexture){if(se)if(D)t.texStorage2D(i.TEXTURE_2D,_e,we,ie.width,ie.height);else{let te=ie.width,Z=ie.height;for(let ve=0;ve<_e;ve++)t.texImage2D(i.TEXTURE_2D,ve,we,te,Z,0,pe,De,null),te>>=1,Z>>=1}}else if(Xe.length>0){if(D&&se){let te=Rt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,we,te.width,te.height)}for(let te=0,Z=Xe.length;te<Z;te++)de=Xe[te],D?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe,De,de):t.texImage2D(i.TEXTURE_2D,te,we,pe,De,de);v.generateMipmaps=!1}else if(D){if(se){let te=Rt(ie);t.texStorage2D(i.TEXTURE_2D,_e,we,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,De,ie)}else t.texImage2D(i.TEXTURE_2D,0,we,pe,De,ie);m(v)&&p(q),Ae.__version=$.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function j(R,v,k){if(v.image.length!==6)return;let q=nt(R,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let $=n.get(J);if(J.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+k);let Ae=Je.getPrimaries(Je.workingColorSpace),re=v.colorSpace===Si?null:Je.getPrimaries(v.colorSpace),Ee=v.colorSpace===Si||Ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!Te&&!ie?pe[Z]=_(v.image[Z],!0,s.maxCubemapSize):pe[Z]=ie?v.image[Z].image:v.image[Z],pe[Z]=kt(v,pe[Z]);let De=pe[0],we=r.convert(v.format,v.colorSpace),de=r.convert(v.type),Xe=x(v.internalFormat,we,de,v.colorSpace),D=v.isVideoTexture!==!0,se=$.__version===void 0||q===!0,ae=J.dataReady,_e=w(v,De);ke(i.TEXTURE_CUBE_MAP,v);let te;if(Te){D&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,De.width,De.height);for(let Z=0;Z<6;Z++){te=pe[Z].mipmaps;for(let ve=0;ve<te.length;ve++){let He=te[ve];v.format!==gn?we!==null?D?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,He.width,He.height,we,de,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Xe,He.width,He.height,0,we,de,He.data)}}}else{if(te=v.mipmaps,D&&se){te.length>0&&_e++;let Z=Rt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,we,de,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,pe[Z].width,pe[Z].height,0,we,de,pe[Z].data);for(let ve=0;ve<te.length;ve++){let ft=te[ve].image[Z].image;D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,ft.width,ft.height,we,de,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Xe,ft.width,ft.height,0,we,de,ft.data)}}else{D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,de,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,we,de,pe[Z]);for(let ve=0;ve<te.length;ve++){let He=te[ve];D?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,we,de,He.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Xe,we,de,He.image[Z])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),$.__version=J.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function xe(R,v,k,q,J,$){let Ae=r.convert(k.format,k.colorSpace),re=r.convert(k.type),Ee=x(k.internalFormat,Ae,re,k.colorSpace),Te=n.get(v),ie=n.get(k);if(ie.__renderTarget=v,!Te.__hasExternalTextures){let pe=Math.max(1,v.width>>$),De=Math.max(1,v.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Ee,pe,De,v.depth,0,Ae,re,null):t.texImage2D(J,$,Ee,pe,De,0,Ae,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,ie.__webglTexture,0,yt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,ie.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,$=y(v.stencilBuffer,J),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=yt(v);Se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,$,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,R)}else{let q=v.textures;for(let J=0;J<q.length;J++){let $=q[J],Ae=r.convert($.format,$.colorSpace),re=r.convert($.type),Ee=x($.internalFormat,Ae,re,$.colorSpace),Te=yt(v);k&&Se(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ee,v.width,v.height):Se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);let J=q.__webglTexture,$=yt(v);if(v.depthTexture.format===Gs)Se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===ar)Se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function je(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let q=R.texture.mipmaps;q&&q.length>0?Re(v.__webglFramebuffer[0],R):Re(v.__webglFramebuffer,R)}else if(k){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Be(v.__webglDepthbuffer[q],R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else{let q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Be(v.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(R,v,k){let q=n.get(R);v!==void 0&&xe(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&je(R)}function I(R){let v=R.texture,k=n.get(R),q=n.get(v);R.addEventListener("dispose",A);let J=R.textures,$=R.isWebGLCubeRenderTarget===!0,Ae=J.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[re]=[];for(let Ee=0;Ee<v.mipmaps.length;Ee++)k.__webglFramebuffer[re][Ee]=i.createFramebuffer()}else k.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)k.__webglFramebuffer[re]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let re=0,Ee=J.length;re<Ee;re++){let Te=n.get(J[re]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Se(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){let Ee=J[re];k.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[re]);let Te=r.convert(Ee.format,Ee.colorSpace),ie=r.convert(Ee.type),pe=x(Ee.internalFormat,Te,ie,Ee.colorSpace,R.isXRRenderTarget===!0),De=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,k.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)xe(k.__webglFramebuffer[re][Ee],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee);else xe(k.__webglFramebuffer[re],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,Ee=J.length;re<Ee;re++){let Te=J[re],ie=n.get(Te),pe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),ke(pe,Te),xe(k.__webglFramebuffer,R,Te,i.COLOR_ATTACHMENT0+re,pe,0),m(Te)&&p(pe)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),ke(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Ee=0;Ee<v.mipmaps.length;Ee++)xe(k.__webglFramebuffer[Ee],R,v,i.COLOR_ATTACHMENT0,re,Ee);else xe(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,re,0);m(v)&&p(re),t.unbindTexture()}R.depthBuffer&&je(R)}function xt(R){let v=R.textures;for(let k=0,q=v.length;k<q;k++){let J=v[k];if(m(J)){let $=S(R),Ae=n.get(J).__webglTexture;t.bindTexture($,Ae),p($),t.unbindTexture()}}}let Ve=[],Fe=[];function Me(R){if(R.samples>0){if(Se(R)===!1){let v=R.textures,k=R.width,q=R.height,J=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),re=v.length>1;if(re)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let ie=n.get(v[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,k,q,0,0,k,q,J,i.NEAREST),c===!0&&(Ve.length=0,Fe.length=0,Ve.push(i.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push($),Fe.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let ie=n.get(v[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function yt(R){return Math.min(s.maxSamples,R.samples)}function Se(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function $e(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function kt(R,v){let k=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Wt&&k!==Si&&(Je.getTransfer(k)===at?(q!==gn||J!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=$t,this.setupRenderTarget=I,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function Hx(i,e){function t(n,s=Si){let r,a=Je.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===El)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Rl)return i.RGB;if(n===gn)return i.RGBA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===To)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Ro||n===Co||n===Io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Lo)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===No)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ko)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Zo||n===Ko)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===jo||n===Qo||n===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bn({vertexShader:Vx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new jl,p={},S=t.getContextAttributes(),x=null,y=null,w=[],T=[],A=new ze,C=null,b=new It;b.viewport=new tt;let M=new It;M.viewport=new tt;let P=[b,M],O=new ao,B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=w[Y];return j===void 0&&(j=new Ys,w[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=w[Y];return j===void 0&&(j=new Ys,w[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=w[Y];return j===void 0&&(j=new Ys,w[Y]=j),j.getHandSpace()};function F(Y){let j=T.indexOf(Y.inputSource);if(j===-1)return;let xe=w[j];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<w.length;Y++){let j=T[Y];j!==null&&(T[Y]=null,w[Y].disconnect(j))}B=null,X=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(x),f=null,d=null,u=null,s=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?ar:Gs,Be=S.stencil?rr:Hi);let je={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Zn(d.textureWidth,d.textureHeight,{format:gn,type:zn,depthTexture:new Vr(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Y){for(let j=0;j<Y.removed.length;j++){let xe=Y.removed[j],Be=T.indexOf(xe);Be>=0&&(T[Be]=null,w[Be].disconnect(xe))}for(let j=0;j<Y.added.length;j++){let xe=Y.added[j],Be=T.indexOf(xe);if(Be===-1){for(let je=0;je<w.length;je++)if(je>=T.length){T.push(xe),Be=je;break}else if(T[je]===null){T[je]=xe,Be=je;break}if(Be===-1)break}let Re=w[Be];Re&&Re.connect(xe)}}let W=new L,le=new L;function oe(Y,j,xe){W.setFromMatrixPosition(j.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);let Be=W.distanceTo(le),Re=j.projectionMatrix.elements,je=xe.projectionMatrix.elements,$t=Re[14]/(Re[10]-1),I=Re[14]/(Re[10]+1),xt=(Re[9]+1)/Re[5],Ve=(Re[9]-1)/Re[5],Fe=(Re[8]-1)/Re[0],Me=(je[8]+1)/je[0],yt=$t*Fe,Se=$t*Me,$e=Be/(-Fe+Me),kt=$e*-Fe;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(kt),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Rt=$t+$e,R=I+$e,v=yt-kt,k=Se+(Be-kt),q=xt*I/R*Rt,J=Ve*I/R*Rt;Y.projectionMatrix.makePerspective(v,k,q,J,Rt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function be(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,xe=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),O.near=M.near=b.near=j,O.far=M.far=b.far=xe,(B!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,X=O.far),O.layers.mask=Y.layers.mask|6,b.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;let Be=Y.parent,Re=O.cameras;be(O,Be);for(let je=0;je<Re.length;je++)be(Re[je],Be);Re.length===2?oe(O,b,M):O.projectionMatrix.copy(b.projectionMatrix),ke(Y,O,Be)};function ke(Y,j,xe){xe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let nt=null;function dt(Y,j){if(h=j.getViewerPose(l||a),g=j,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Be=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let I=0;I<xe.length;I++){let xt=xe[I],Ve=null;if(f!==null)Ve=f.getViewport(xt);else{let Me=u.getViewSubImage(d,xt);Ve=Me.viewport,I===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let Fe=P[I];Fe===void 0&&(Fe=new It,Fe.layers.enable(I),Fe.viewport=new tt,P[I]=Fe),Fe.matrix.fromArray(xt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(xt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),I===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(Fe)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let I=u.getDepthInformation(xe[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<xe.length;I++){let xt=xe[I].camera;if(xt){let Ve=p[xt];Ve||(Ve=new Gr,p[xt]=Ve);let Fe=u.getCameraImage(xt);Ve.sourceTexture=Fe}}}}for(let xe=0;xe<w.length;xe++){let Be=T[xe],Re=w[xe];Be!==null&&Re!==void 0&&Re.update(Be,j,l||a)}nt&&nt(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Qe=new hf;Qe.setAnimationLoop(dt),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}},_s=new On,Wx=new Ge;function Xx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,_s.copy(y),_s.x*=-1,_s.y*=-1,_s.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(_s)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $x(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){let y=x.program;n.uniformBlockBinding(S,y)}function l(S,x){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));let w=x.program;n.updateUBOMapping(S,w);let T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){let x=u();S.__bindingPointIndex=x;let y=i.createBuffer(),w=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let x=s[S.id],y=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){let C=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,M=C.length;b<M;b++){let P=C[b];if(f(P,T,b,w)===!0){let O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],X=0;for(let F=0;F<B.length;F++){let H=B[F],ee=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+X,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,x,y,w){let T=S.value,A=x+"_"+y;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{let C=w[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return w[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(S){let x=S.uniforms,y=0,w=16;for(let A=0,C=x.length;A<C;A++){let b=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,P=b.length;M<P;M++){let O=b[M],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,F=B.length;X<F;X++){let H=B[X],ee=_(H),W=y%w,le=W%ee.boundary,oe=W+le;y+=le,oe!==0&&w-oe<ee.storage&&(y+=w-oe),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=ee.storage}}}let T=y%w;return T>0&&(y+=w-T),S.__size=y,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var rc=class{constructor(e={}){let{canvas:t=Nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,w=!1;this._outputColorSpace=Tt;let T=0,A=0,C=null,b=-1,M=null,P=new tt,O=new tt,B=null,X=new Pe(0),F=0,H=t.width,ee=t.height,W=1,le=null,oe=null,be=new tt(0,0,H,ee),ke=new tt(0,0,H,ee),nt=!1,dt=new js,Qe=!1,Y=!1,j=new Ge,xe=new L,Be=new tt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function $t(){return C===null?W:1}let I=n;function xt(E,N){return t.getContext(E,N)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),I===null){let N="webgl2";if(I=xt(N,E),I===null)throw xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Fe,Me,yt,Se,$e,kt,Rt,R,v,k,q,J,$,Ae,re,Ee,Te,ie,pe,De,we,de,Xe;function D(){Ve=new h_(I),Ve.init(),we=new Hx(I,Ve),Fe=new i_(I,Ve,e,we),Me=new kx(I,Ve),Fe.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),yt=new f_(I),Se=new wx,$e=new zx(I,Ve,Me,Se,Fe,we,yt),kt=new r_(y),Rt=new l_(y),R=new ym(I),de=new t_(I,R),v=new u_(I,R,yt,de),k=new m_(I,v,R,yt),ie=new p_(I,Fe,$e),re=new s_(Se),q=new Tx(y,kt,Rt,Ve,Fe,de,re),J=new Xx(y,Se),$=new Rx,Ae=new Nx(Ve),Te=new e_(y,kt,Rt,Me,k,f,c),Ee=new Ox(y,k,Fe),Xe=new $x(I,yt,Fe,Me),pe=new n_(I,Ve,yt),De=new d_(I,Ve,yt),yt.programs=q.programs,y.capabilities=Fe,y.extensions=Ve,y.properties=Se,y.renderLists=$,y.shadowMap=Ee,y.state=Me,y.info=yt}D();let se=new Ql(y,I);this.xr=se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(H,ee,!1))},this.getSize=function(E){return E.set(H,ee)},this.setSize=function(E,N,V=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,ee=N,t.width=Math.floor(E*W),t.height=Math.floor(N*W),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(H*W,ee*W).floor()},this.setDrawingBufferSize=function(E,N,V){H=E,ee=N,W=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,N,V,G){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,N,V,G),Me.viewport(P.copy(be).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(ke)},this.setScissor=function(E,N,V,G){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,N,V,G),Me.scissor(O.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(E){Me.setScissorTest(nt=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let U=!1;if(C!==null){let ne=C.texture.format;U=ne===wo||ne===To||ne===Eo}if(U){let ne=C.texture.type,fe=ne===zn||ne===Hi||ne===ir||ne===rr||ne===bo||ne===Mo,ye=Te.getClearColor(),ge=Te.getClearAlpha(),Le=ye.r,Oe=ye.g,Ce=ye.b;fe?(g[0]=Le,g[1]=Oe,g[2]=Ce,g[3]=ge,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Le,_[1]=Oe,_[2]=Ce,_[3]=ge,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Te.dispose(),$.dispose(),Ae.dispose(),Se.dispose(),kt.dispose(),Rt.dispose(),k.dispose(),de.dispose(),Xe.dispose(),q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Wn),se.removeEventListener("sessionend",su),Ji.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=yt.autoReset,N=Ee.enabled,V=Ee.autoUpdate,G=Ee.needsUpdate,U=Ee.type;D(),yt.autoReset=E,Ee.enabled=N,Ee.autoUpdate=V,Ee.needsUpdate=G,Ee.type=U}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){let N=E.target;N.removeEventListener("dispose",Z),ve(N)}function ve(E){He(E),Se.remove(E)}function He(E){let N=Se.get(E).programs;N!==void 0&&(N.forEach(function(V){q.releaseProgram(V)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,U,ne){N===null&&(N=Re);let fe=U.isMesh&&U.matrixWorld.determinant()<0,ye=fp(E,N,V,G,U);Me.setMaterial(G,fe);let ge=V.index,Le=1;if(G.wireframe===!0){if(ge=v.getWireframeAttribute(V),ge===void 0)return;Le=2}let Oe=V.drawRange,Ce=V.attributes.position,Ke=Oe.start*Le,ot=(Oe.start+Oe.count)*Le;ne!==null&&(Ke=Math.max(Ke,ne.start*Le),ot=Math.min(ot,(ne.start+ne.count)*Le)),ge!==null?(Ke=Math.max(Ke,0),ot=Math.min(ot,ge.count)):Ce!=null&&(Ke=Math.max(Ke,0),ot=Math.min(ot,Ce.count));let At=ot-Ke;if(At<0||At===1/0)return;de.setup(U,G,ye,V,ge);let gt,lt=pe;if(ge!==null&&(gt=R.get(ge),lt=De,lt.setIndex(gt)),U.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*$t()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(U.isLine){let Ie=G.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*$t()),U.isLineSegments?lt.setMode(I.LINES):U.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else U.isPoints?lt.setMode(I.POINTS):U.isSprite&&lt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ie=U._multiDrawStarts,St=U._multiDrawCounts,et=U._multiDrawCount,dn=ge?R.get(ge).bytesPerElement:1,ws=Se.get(G).currentProgram.getUniforms();for(let fn=0;fn<et;fn++)ws.setValue(I,"_gl_DrawID",fn),lt.render(Ie[fn]/dn,St[fn])}else if(U.isInstancedMesh)lt.renderInstances(Ke,At,U.count);else if(V.isInstancedBufferGeometry){let Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,St=Math.min(V.instanceCount,Ie);lt.renderInstances(Ke,At,St)}else lt.render(Ke,At)};function ft(E,N,V){E.transparent===!0&&E.side===wn&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,ga(E,N,V),E.side=Fn,E.needsUpdate=!0,ga(E,N,V),E.side=wn):ga(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),p=Ae.get(V),p.init(N),x.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==V&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let G=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ne=U.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){let ye=ne[fe];ft(ye,V,U),G.add(ye)}else ft(ne,V,U),G.add(ne)}),p=x.pop(),G},this.compileAsync=function(E,N,V=null){let G=this.compile(E,N,V);return new Promise(U=>{function ne(){if(G.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){U(E);return}setTimeout(ne,10)}Ve.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let st=null;function ci(E){st&&st(E)}function Wn(){Ji.stop()}function su(){Ji.start()}let Ji=new hf;Ji.setAnimationLoop(ci),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(E){st=E,se.setAnimationLoop(E),E===null?Ji.stop():Ji.start()},se.addEventListener("sessionstart",Wn),se.addEventListener("sessionend",su),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,N,C),p=Ae.get(E,x.length),p.init(N),x.push(p),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),dt.setFromProjectionMatrix(j,Nn,N.reversedDepth),Y=this.localClippingEnabled,Qe=re.init(this.clippingPlanes,Y),m=$.get(E,S.length),m.init(),S.push(m),se.enabled===!0&&se.isPresenting===!0){let ne=y.xr.getDepthSensingMesh();ne!==null&&Cc(ne,N,-1/0,y.sortObjects)}Cc(E,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,oe),je=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,je&&Te.addToRenderList(m,E),this.info.render.frame++,Qe===!0&&re.beginShadows();let V=p.state.shadowsArray;Ee.render(V,E,N),Qe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ne=N.cameras;if(U.length>0)for(let fe=0,ye=ne.length;fe<ye;fe++){let ge=ne[fe];au(G,U,E,ge)}je&&Te.render(E);for(let fe=0,ye=ne.length;fe<ye;fe++){let ge=ne[fe];ru(m,E,ge,ge.viewport)}}else U.length>0&&au(G,U,E,N),je&&Te.render(E),ru(m,E,N);C!==null&&A===0&&($e.updateMultisampleRenderTarget(C),$e.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(y,E,N),de.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Qe===!0&&re.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Cc(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||dt.intersectsSprite(E)){G&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);let fe=k.update(E),ye=E.material;ye.visible&&m.push(E,fe,ye,V,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||dt.intersectsObject(E))){let fe=k.update(E),ye=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(ye)){let ge=fe.groups;for(let Le=0,Oe=ge.length;Le<Oe;Le++){let Ce=ge[Le],Ke=ye[Ce.materialIndex];Ke&&Ke.visible&&m.push(E,fe,Ke,V,Be.z,Ce)}}else ye.visible&&m.push(E,fe,ye,V,Be.z,null)}}let ne=E.children;for(let fe=0,ye=ne.length;fe<ye;fe++)Cc(ne[fe],N,V,G)}function ru(E,N,V,G){let U=E.opaque,ne=E.transmissive,fe=E.transparent;p.setupLightsView(V),Qe===!0&&re.setGlobalState(y.clippingPlanes,V),G&&Me.viewport(P.copy(G)),U.length>0&&ma(U,N,V),ne.length>0&&ma(ne,N,V),fe.length>0&&ma(fe,N,V),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function au(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?sr:zn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ne=p.state.transmissionRenderTarget[G.id],fe=G.viewport||P;ne.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);let ye=y.getRenderTarget(),ge=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(X),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),je&&Te.render(V);let Oe=y.toneMapping;y.toneMapping=Mi;let Ce=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Qe===!0&&re.setGlobalState(y.clippingPlanes,G),ma(E,V,G),$e.updateMultisampleRenderTarget(ne),$e.updateRenderTargetMipmap(ne),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ot=0,At=N.length;ot<At;ot++){let gt=N[ot],lt=gt.object,Ie=gt.geometry,St=gt.material,et=gt.group;if(St.side===wn&&lt.layers.test(G.layers)){let dn=St.side;St.side=Qt,St.needsUpdate=!0,ou(lt,V,G,Ie,St,et),St.side=dn,St.needsUpdate=!0,Ke=!0}}Ke===!0&&($e.updateMultisampleRenderTarget(ne),$e.updateRenderTargetMipmap(ne))}y.setRenderTarget(ye,ge,Le),y.setClearColor(X,F),Ce!==void 0&&(G.viewport=Ce),y.toneMapping=Oe}function ma(E,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=E.length;U<ne;U++){let fe=E[U],ye=fe.object,ge=fe.geometry,Le=fe.group,Oe=fe.material;Oe.allowOverride===!0&&G!==null&&(Oe=G),ye.layers.test(V.layers)&&ou(ye,N,V,ge,Oe,Le)}}function ou(E,N,V,G,U,ne){E.onBeforeRender(y,N,V,G,U,ne),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,N,V,G,E,ne),U.transparent===!0&&U.side===wn&&U.forceSinglePass===!1?(U.side=Qt,U.needsUpdate=!0,y.renderBufferDirect(V,N,G,U,E,ne),U.side=Fn,U.needsUpdate=!0,y.renderBufferDirect(V,N,G,U,E,ne),U.side=wn):y.renderBufferDirect(V,N,G,U,E,ne),E.onAfterRender(y,N,V,G,U,ne)}function ga(E,N,V){N.isScene!==!0&&(N=Re);let G=Se.get(E),U=p.state.lights,ne=p.state.shadowsArray,fe=U.state.version,ye=q.getParameters(E,U.state,ne,N,V),ge=q.getProgramCacheKey(ye),Le=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?Rt:kt).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Z),Le=new Map,G.programs=Le);let Oe=Le.get(ge);if(Oe!==void 0){if(G.currentProgram===Oe&&G.lightsStateVersion===fe)return lu(E,ye),Oe}else ye.uniforms=q.getUniforms(E),E.onBeforeCompile(ye,y),Oe=q.acquireProgram(ye,ge),Le.set(ge,Oe),G.uniforms=ye.uniforms;let Ce=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=re.uniform),lu(E,ye),G.needsLights=mp(E),G.lightsStateVersion=fe,G.needsLights&&(Ce.ambientLightColor.value=U.state.ambient,Ce.lightProbe.value=U.state.probe,Ce.directionalLights.value=U.state.directional,Ce.directionalLightShadows.value=U.state.directionalShadow,Ce.spotLights.value=U.state.spot,Ce.spotLightShadows.value=U.state.spotShadow,Ce.rectAreaLights.value=U.state.rectArea,Ce.ltc_1.value=U.state.rectAreaLTC1,Ce.ltc_2.value=U.state.rectAreaLTC2,Ce.pointLights.value=U.state.point,Ce.pointLightShadows.value=U.state.pointShadow,Ce.hemisphereLights.value=U.state.hemi,Ce.directionalShadowMap.value=U.state.directionalShadowMap,Ce.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ce.spotShadowMap.value=U.state.spotShadowMap,Ce.spotLightMatrix.value=U.state.spotLightMatrix,Ce.spotLightMap.value=U.state.spotLightMap,Ce.pointShadowMap.value=U.state.pointShadowMap,Ce.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Oe,G.uniformsList=null,Oe}function cu(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=hr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function lu(E,N){let V=Se.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function fp(E,N,V,G,U){N.isScene!==!0&&(N=Re),$e.resetTextureUnits();let ne=N.fog,fe=G.isMeshStandardMaterial?N.environment:null,ye=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Wt,ge=(G.isMeshStandardMaterial?Rt:kt).get(G.envMap||fe),Le=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!V.morphAttributes.position,Ke=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color,At=Mi;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=y.toneMapping);let gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=gt!==void 0?gt.length:0,Ie=Se.get(G),St=p.state.lights;if(Qe===!0&&(Y===!0||E!==M)){let Kt=E===M&&G.id===b;re.setState(G,E,Kt)}let et=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==St.state.version||Ie.outputColorSpace!==ye||U.isBatchedMesh&&Ie.batching===!1||!U.isBatchedMesh&&Ie.batching===!0||U.isBatchedMesh&&Ie.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ie.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ie.instancing===!1||!U.isInstancedMesh&&Ie.instancing===!0||U.isSkinnedMesh&&Ie.skinning===!1||!U.isSkinnedMesh&&Ie.skinning===!0||U.isInstancedMesh&&Ie.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ie.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ie.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ie.instancingMorph===!1&&U.morphTexture!==null||Ie.envMap!==ge||G.fog===!0&&Ie.fog!==ne||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Oe||Ie.morphTargets!==Ce||Ie.morphNormals!==Ke||Ie.morphColors!==ot||Ie.toneMapping!==At||Ie.morphTargetsCount!==lt)&&(et=!0):(et=!0,Ie.__version=G.version);let dn=Ie.currentProgram;et===!0&&(dn=ga(G,N,U));let ws=!1,fn=!1,mr=!1,Et=dn.getUniforms(),Mn=Ie.uniforms;if(Me.useProgram(dn.program)&&(ws=!0,fn=!0,mr=!0),G.id!==b&&(b=G.id,fn=!0),ws||M!==E){Me.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",E.projectionMatrix),Et.setValue(I,"viewMatrix",E.matrixWorldInverse);let en=Et.map.cameraPosition;en!==void 0&&en.setValue(I,xe.setFromMatrixPosition(E.matrixWorld)),Fe.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,fn=!0,mr=!0)}if(U.isSkinnedMesh){Et.setOptional(I,U,"bindMatrix"),Et.setOptional(I,U,"bindMatrixInverse");let Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(I,"boneTexture",Kt.boneTexture,$e))}U.isBatchedMesh&&(Et.setOptional(I,U,"batchingTexture"),Et.setValue(I,"batchingTexture",U._matricesTexture,$e),Et.setOptional(I,U,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",U._indirectTexture,$e),Et.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",U._colorsTexture,$e));let Sn=V.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ie.update(U,V,dn),(fn||Ie.receiveShadow!==U.receiveShadow)&&(Ie.receiveShadow=U.receiveShadow,Et.setValue(I,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Mn.envMap.value=ge,Mn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Mn.envMapIntensity.value=N.environmentIntensity),fn&&(Et.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&pp(Mn,mr),ne&&G.fog===!0&&J.refreshFogUniforms(Mn,ne),J.refreshMaterialUniforms(Mn,G,W,ee,p.state.transmissionRenderTarget[E.id]),hr.upload(I,cu(Ie),Mn,$e)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hr.upload(I,cu(Ie),Mn,$e),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(I,"center",U.center),Et.setValue(I,"modelViewMatrix",U.modelViewMatrix),Et.setValue(I,"normalMatrix",U.normalMatrix),Et.setValue(I,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Kt=G.uniformsGroups;for(let en=0,Ic=Kt.length;en<Ic;en++){let ji=Kt[en];Xe.update(ji,dn),Xe.bind(ji,dn)}}return dn}function pp(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function mp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,V){let G=Se.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Se.get(E.texture).__webglTexture=N,Se.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let V=Se.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let gp=I.createFramebuffer();this.setRenderTarget=function(E,N=0,V=0){C=E,T=N,A=V;let G=!0,U=null,ne=!1,fe=!1;if(E){let ge=Se.get(E);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(E);else if(ge.__hasExternalTextures)$e.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ce=E.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&Se.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(E)}}let Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);let Oe=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?U=Oe[N][V]:U=Oe[N],ne=!0):E.samples>0&&$e.useMultisampledRTT(E)===!1?U=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?U=Oe[V]:U=Oe,P.copy(E.viewport),O.copy(E.scissor),B=E.scissorTest}else P.copy(be).multiplyScalar(W).floor(),O.copy(ke).multiplyScalar(W).floor(),B=nt;if(V!==0&&(U=gp),Me.bindFramebuffer(I.FRAMEBUFFER,U)&&G&&Me.drawBuffers(E,U),Me.viewport(P),Me.scissor(O),Me.setScissorTest(B),ne){let ge=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,V)}else if(fe){let ge=N;for(let Le=0;Le<E.textures.length;Le++){let Oe=Se.get(E.textures[Le]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,V,ge)}}else if(E!==null&&V!==0){let ge=Se.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(E,N,V,G,U,ne,fe,ye=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Me.bindFramebuffer(I.FRAMEBUFFER,ge);try{let Le=E.textures[ye],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-U&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(N,V,G,U,we.convert(Oe),we.convert(Ce),ne))}finally{let Le=C!==null?Se.get(C).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,G,U,ne,fe,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(N>=0&&N<=E.width-G&&V>=0&&V<=E.height-U){Me.bindFramebuffer(I.FRAMEBUFFER,ge);let Le=E.textures[ye],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.bufferData(I.PIXEL_PACK_BUFFER,ne.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),I.readPixels(N,V,G,U,we.convert(Oe),we.convert(Ce),0);let ot=C!==null?Se.get(C).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,ot);let At=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ud(I,At,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ne),I.deleteBuffer(Ke),I.deleteSync(At),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,V=0){let G=Math.pow(2,-V),U=Math.floor(E.image.width*G),ne=Math.floor(E.image.height*G),fe=N!==null?N.x:0,ye=N!==null?N.y:0;$e.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,fe,ye,U,ne),Me.unbindTexture()};let _p=I.createFramebuffer(),xp=I.createFramebuffer();this.copyTextureToTexture=function(E,N,V=null,G=null,U=0,ne=null){ne===null&&(U!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let fe,ye,ge,Le,Oe,Ce,Ke,ot,At,gt=E.isCompressedTexture?E.mipmaps[ne]:E.image;if(V!==null)fe=V.max.x-V.min.x,ye=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,Oe=V.min.y,Ce=V.isBox3?V.min.z:0;else{let Sn=Math.pow(2,-U);fe=Math.floor(gt.width*Sn),ye=Math.floor(gt.height*Sn),E.isDataArrayTexture?ge=gt.depth:E.isData3DTexture?ge=Math.floor(gt.depth*Sn):ge=1,Le=0,Oe=0,Ce=0}G!==null?(Ke=G.x,ot=G.y,At=G.z):(Ke=0,ot=0,At=0);let lt=we.convert(N.format),Ie=we.convert(N.type),St;N.isData3DTexture?($e.setTexture3D(N,0),St=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($e.setTexture2DArray(N,0),St=I.TEXTURE_2D_ARRAY):($e.setTexture2D(N,0),St=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let et=I.getParameter(I.UNPACK_ROW_LENGTH),dn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ws=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),mr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce);let Et=E.isDataArrayTexture||E.isData3DTexture,Mn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let Sn=Se.get(E),Kt=Se.get(N),en=Se.get(Sn.__renderTarget),Ic=Se.get(Kt.__renderTarget);Me.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ic.__webglFramebuffer);for(let ji=0;ji<ge;ji++)Et&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,U,Ce+ji),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,ne,At+ji)),I.blitFramebuffer(Le,Oe,fe,ye,Ke,ot,fe,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||Se.has(E)){let Sn=Se.get(E),Kt=Se.get(N);Me.bindFramebuffer(I.READ_FRAMEBUFFER,_p),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,xp);for(let en=0;en<ge;en++)Et?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,U,Ce+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,U),Mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,ne,At+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,ne),U!==0?I.blitFramebuffer(Le,Oe,fe,ye,Ke,ot,fe,ye,I.COLOR_BUFFER_BIT,I.NEAREST):Mn?I.copyTexSubImage3D(St,ne,Ke,ot,At+en,Le,Oe,fe,ye):I.copyTexSubImage2D(St,ne,Ke,ot,Le,Oe,fe,ye);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(St,ne,Ke,ot,At,fe,ye,ge,lt,Ie,gt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(St,ne,Ke,ot,At,fe,ye,ge,lt,gt.data):I.texSubImage3D(St,ne,Ke,ot,At,fe,ye,ge,lt,Ie,gt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ne,Ke,ot,fe,ye,lt,Ie,gt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ne,Ke,ot,gt.width,gt.height,lt,gt.data):I.texSubImage2D(I.TEXTURE_2D,ne,Ke,ot,fe,ye,lt,Ie,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,et),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ws),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mr),ne===0&&N.generateMipmaps&&I.generateMipmap(St),Me.unbindTexture()},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&$e.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$e.setTextureCube(E,0):E.isData3DTexture?$e.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$e.setTexture2DArray(E,0):$e.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Ht=[{id:"ceo",kind:"space",short:"Mi oficina",name:"Oficina del CEO",sub:"Direcci\xF3n y aprobaciones",accent:"#c9a25e",floor:"walnut",wall:"#efe4d2"},{id:"direction",kind:"department",dept:"Direcci\xF3n estrat\xE9gica",short:"Direcci\xF3n",name:"Direcci\xF3n Estrat\xE9gica",sub:"Prioridades y coordinaci\xF3n",accent:"#b88746",floor:"oak",wall:"#f1e7d6"},{id:"marketing",kind:"department",dept:"Marketing y crecimiento",short:"Marketing",name:"Marketing y Crecimiento",sub:"Estrategia y campa\xF1as",accent:"#2f9e8f",floor:"oak",wall:"#e8efe9"},{id:"content",kind:"department",dept:"Producci\xF3n de contenido",short:"Contenido",name:"Producci\xF3n de Contenido",sub:"Guion, edici\xF3n y medios",accent:"#e08a3c",floor:"oak",wall:"#f3e6d8"},{id:"creative",kind:"space",short:"Estudio",name:"Estudio Creativo y Multimedia",sub:"Grabaci\xF3n y PULSE STUDIO",accent:"#d9653b",floor:"concrete",wall:"#e6e2dc"},{id:"sales",kind:"department",dept:"Ventas y patrocinios",short:"Ventas",name:"Ventas y Patrocinios",sub:"Propuestas y negociaci\xF3n",accent:"#2d4f8a",floor:"walnut",wall:"#e9e6df"},{id:"relations",kind:"department",dept:"Relaciones p\xFAblicas y alianzas",short:"Alianzas",name:"Relaciones P\xFAblicas y Alianzas",sub:"V\xEDnculos profesionales",accent:"#9a7cc4",floor:"oak",wall:"#eee8f1"},{id:"boardroom",kind:"space",short:"Juntas",name:"Sala de Juntas",sub:"Decisiones del CEO",accent:"#5b6b8c",floor:"walnut",wall:"#e7e5e1"},{id:"missions",kind:"space",short:"Misiones",name:"Gesti\xF3n de Misiones",sub:"Etapas y responsables",accent:"#c46a4a",floor:"concrete",wall:"#ece7e0"},{id:"collab",kind:"space",short:"Colaboraci\xF3n",name:"Colaboraci\xF3n entre Departamentos",sub:"Traspasos de misi\xF3n",accent:"#4d9a6a",floor:"oak",wall:"#e8eee6"},{id:"events",kind:"department",dept:"Eventos y experiencias",short:"Eventos",name:"Eventos y Experiencias",sub:"Producci\xF3n y log\xEDstica",accent:"#c4417a",floor:"concrete",wall:"#f1e4ea"},{id:"community",kind:"department",dept:"Comunidad",short:"Comunidad",name:"Comunidad",sub:"Escucha y participaci\xF3n",accent:"#e07a5f",floor:"oak",wall:"#f4e9e1"},{id:"intelligence",kind:"department",dept:"Inteligencia de mercado",short:"Inteligencia",name:"Inteligencia de Mercado",sub:"Investigaci\xF3n y tendencias",accent:"#3a78c2",floor:"concrete",wall:"#e4eaf1"},{id:"finance",kind:"department",dept:"Finanzas y administraci\xF3n",short:"Finanzas",name:"Finanzas y Administraci\xF3n",sub:"Presupuesto y control",accent:"#5d8a4e",floor:"walnut",wall:"#e9ece2"},{id:"technology",kind:"department",dept:"Tecnolog\xEDa y automatizaci\xF3n",short:"Tecnolog\xEDa",name:"Tecnolog\xEDa y Automatizaci\xF3n",sub:"Sistemas y automatizaciones",accent:"#2a9bb5",floor:"concrete",wall:"#e2eaee"},{id:"rest",kind:"space",short:"Descanso",name:"\xC1rea de Descanso",sub:"Caf\xE9 y pausa",accent:"#8a9a5b",floor:"oak",wall:"#efeadf"}],vs=[{id:"a-direction",room:"direction",name:"Ulises",species:"owl",role:"Director de estrategia",portrait:"direction",palette:{body:"#9a6a3a",belly:"#e9d2a8",accent:"#2f4a3a",eye:"#f2a33a",beak:"#e0a93b"},prop:"clipboard"},{id:"a-marketing",room:"marketing",name:"Kiki",species:"hummingbird",role:"Estratega de crecimiento",portrait:"marketing",palette:{body:"#1f9e86",belly:"#f2efe1",accent:"#1b6b4f",eye:"#3a2a1a",beak:"#2b2b2b"},prop:"clipboard"},{id:"a-content",room:"content",name:"M\xEDa",species:"cat",role:"Productora de contenido",portrait:"content",palette:{body:"#e8953a",belly:"#fbe7c6",accent:"#2b2b2b",eye:"#5aa04a",beak:"#e57f8a"},prop:"camera"},{id:"a-sales",room:"sales",name:"Rocco",species:"raccoon",role:"Ejecutivo de patrocinios",portrait:"sales",palette:{body:"#8a7764",belly:"#e9e0d2",accent:"#22355e",eye:"#2b1d12",beak:"#2b2b2b"},prop:"briefcase"},{id:"a-relations",room:"relations",name:"Lila",species:"bunny",role:"Enlace de alianzas",portrait:"relations",palette:{body:"#c9b8e6",belly:"#f6f1fb",accent:"#7d5aa8",eye:"#6b4aa8",beak:"#e6a3b8"},prop:"book"},{id:"a-events",room:"events",name:"Luz",species:"moth",role:"Productora de experiencias",portrait:"events",palette:{body:"#b8325e",belly:"#fbeaea",accent:"#e86aa0",eye:"#2b1020",beak:"#2b1020"},prop:"glowstick"},{id:"a-community",room:"community",name:"Cata",species:"capybara",role:"Anfitriona de comunidad",portrait:"community",palette:{body:"#a87650",belly:"#c99a72",accent:"#ef7f63",eye:"#2b1d12",beak:"#5a3a26"},prop:"tablet"},{id:"a-intelligence",room:"intelligence",name:"Iris",species:"owl",role:"Analista de mercado",portrait:"intelligence",palette:{body:"#5f8fd0",belly:"#e9f0fb",accent:"#26324a",eye:"#f2a33a",beak:"#e0a93b"},prop:"tablet",glasses:!0},{id:"a-finance",room:"finance",name:"Tom\xE1s",species:"turtle",role:"Controlador financiero",portrait:"finance",palette:{body:"#7fae63",belly:"#d9e6b8",accent:"#2f4a2a",eye:"#2b1d12",beak:"#6b8f4e",shell:"#8a5a2f"},prop:"book",glasses:!0},{id:"a-technology",room:"technology",name:"Bit",species:"robot",role:"Ingeniero de automatizaci\xF3n",portrait:"technology",palette:{body:"#2f7f9a",belly:"#d7e6ea",accent:"#f08a24",eye:"#6ff5ff",beak:"#1a2a33"},prop:"tablet"}],si=i=>Ht.find(e=>e.id===i),th=i=>Ht.findIndex(e=>e.id===i);var bs=i=>vs.find(e=>si(e.room)?.dept===i)||null;var Gi=.84,an=-3.6,qx=3.4,pt=6.6*Gi,mf=3.1*Gi,Vt=an*Gi,mt=qx*Gi,Xt=mt+1.7,cc=.75,lc=2.5,Wi=1.35,dr=.42,Yx=i=>i*pt,K=(i,e,t,n=0,s={})=>({m:i,x:e,z:t,r:n,...s}),Ue=(i,e,t,n=0,s={})=>({p:i,x:e,z:t,r:n,...s});function Zx(i,e,t={}){let n=[K("desk",i,e,0,{hot:"desk"}),K("chairDesk",i,e-.62,0,{block:!1,seat:!0,tint:"#3f3b38"}),K("laptop",i-.1,e-.05,180,{onTop:.76,block:!1}),Ue("statusLamp",i+.55,e-.02,0,{onTop:.76,block:!1}),Ue("tray",i-.56,e+.04,0,{onTop:.76,block:!1,hot:"tray"})];return t.second&&n.push(K("computerScreen",i+.2,e-.12,180,{onTop:.76,block:!1})),n}function oc(i){return[Ue("window",-1.6,an,0,{w:1.6,h:1,y:1}),Ue("sign",-1.6,an,0,{w:1.7,h:.42,y:2.08,text:i.short,accent:i.accent})]}var nh={x:-.9,z:-2.1},Kx=(i=nh)=>({x:i.x,z:i.z-.62,face:0,pose:"sit"});function ri(i,e,t){let n=[...Zx(nh.x,nh.z,{second:i.id==="technology"||i.id==="intelligence"}),Ue("board",1.55,an,0,{w:1.8,h:1.05,y:1.05,hot:"board",accent:i.accent}),K("bookcaseClosedWide",-2.75,-.9,90,{hot:"shelf"}),K("pottedPlant",-2.75,-2.95,0),K("pottedPlant",2.8,2.9,0),K("lampRoundFloor",2.85,-3.2,0,{block:!0}),...oc(i),...e],s={desk:Kx(),board:{x:1.55,z:-2.75,face:180,pose:"stand"},shelf:{x:-2.05,z:-.9,face:-90,pose:"stand"},plant:{x:2.25,z:2.35,face:45,pose:"stand"},window:{x:-1.6,z:-3.05,face:180,pose:"stand"},door:{x:0,z:2.85,face:0,pose:"stand"},...t};return{items:n,stations:s}}var Jx={direction:i=>ri(i,[K("rugRectangle",.9,.9,0,{block:!1}),K("tableGlass",.9,.9,0),K("chairCushion",.45,1.65,180,{fabric:!0}),K("chairCushion",1.35,1.65,180,{fabric:!0}),K("chairCushion",.45,.15,0,{fabric:!0}),K("chairCushion",1.35,.15,0,{fabric:!0}),Ue("globe",-2.6,1.6,0),K("loungeChair",-2.3,2.6,135,{fabric:!0})],{meet:{x:.9,z:2.1,face:180,pose:"stand"}}),marketing:i=>ri(i,[Ue("cardsWall",2.95,-.6,-90,{accent:i.accent}),K("rugRound",.9,1,0,{block:!1}),K("tableRound",.9,1,0),K("stoolBar",.2,1,90,{fabric:!0}),K("stoolBar",1.6,1,-90,{fabric:!0}),K("loungeSofa",-1.9,2.55,0,{fabric:!0}),Ue("easel",2.4,1.6,-60,{accent:i.accent})],{meet:{x:.9,z:1.9,face:180,pose:"stand"},cards:{x:2.3,z:-.6,face:90,pose:"stand"}}),content:i=>ri(i,[Ue("greenScreen",1.6,-2.9,0),Ue("tripod",1.5,-.6,180),Ue("softbox",2.55,-1.3,210),Ue("softbox",.6,-1.4,150),K("loungeChair",1.55,-2.05,0,{fabric:!0}),K("rugRectangle",-1.3,1.5,0,{block:!1}),K("sideTableDrawers",-2.55,2.75,90),K("loungeDesignSofa",-1.2,2.65,0,{fabric:!0})],{board:{x:1.5,z:.05,face:180,pose:"stand"},set:{x:1.55,z:-1.5,face:0,pose:"stand"}}),sales:i=>ri(i,[K("rugRectangle",.8,1,0,{block:!1}),Ue("longTable",.8,1,0,{w:2.2,d:1}),K("chairModernCushion",.2,1.75,180,{fabric:!0}),K("chairModernCushion",1.4,1.75,180,{fabric:!0}),K("chairModernCushion",.2,.25,0,{fabric:!0}),K("chairModernCushion",1.4,.25,0,{fabric:!0}),Ue("podium",2.6,2.6,-30,{accent:i.accent}),K("sideTable",-2.6,2.6,90)],{meet:{x:.8,z:2.25,face:180,pose:"stand"}}),relations:i=>ri(i,[Ue("pressWall",2.95,.4,-90,{accent:i.accent}),K("rugRound",.4,1.2,0,{block:!1}),K("loungeSofa",.4,2.1,180,{fabric:!0}),K("loungeChair",-.75,1,90,{fabric:!0}),K("tableCoffee",.55,1.15,0),K("loungeChair",1.55,1,-90,{fabric:!0})],{press:{x:2.3,z:.4,face:90,pose:"stand"}}),events:i=>ri(i,[Ue("stage",1.3,.6,0,{accent:i.accent}),Ue("balloons",2.75,2.6,0,{accent:i.accent}),Ue("balloons",-2.6,2.7,0,{accent:"#f2c14e"}),K("stoolBar",-.9,1.4,0,{fabric:!0})],{stage:{x:1.3,z:1.35,face:180,pose:"stand"}}),community:i=>ri(i,[K("rugRound",.8,1.2,0,{block:!1}),K("loungeDesignSofa",.8,2.25,180,{fabric:!0}),K("loungeDesignChair",.85,.15,0,{fabric:!0}),K("tableCoffeeGlassSquare",.85,1.2,0),Ue("chatScreen",2.95,-.6,-90,{accent:i.accent}),K("benchCushion",-2.6,2.3,90,{fabric:!0})],{meet:{x:1.9,z:1.2,face:-90,pose:"stand"}}),intelligence:i=>ri(i,[Ue("dataWall",2.95,-.7,-90,{accent:i.accent}),K("rugRectangle",.6,1.2,0,{block:!1}),Ue("longTable",.6,1.2,0,{w:1.9,d:1,map:!0}),K("chairDesk",-.1,2,180),K("chairDesk",1.3,2,180),K("bookcaseOpenLow",-2.8,2.3,90)],{meet:{x:.6,z:.35,face:0,pose:"stand"},wall:{x:2.3,z:-.7,face:90,pose:"stand"}}),finance:i=>ri(i,[Ue("cabinet",2.85,-.4,-90),Ue("cabinet",2.85,.25,-90),Ue("cabinet",2.85,.9,-90),Ue("safe",2.75,2.4,-60),K("rugRectangle",.4,1.4,0,{block:!1}),K("deskCorner",0,1.6,0),K("chairCushion",.5,2.5,180,{fabric:!0})],{files:{x:2.2,z:.25,face:90,pose:"stand"}}),technology:i=>ri(i,[Ue("rack",2.75,-2.9,0),Ue("rack",2.1,-2.9,0),Ue("rack",2.85,-1.6,-90),K("desk",.9,1,180),K("computerScreen",.75,.95,0,{onTop:.76,block:!1}),K("computerScreen",1.15,.95,-15,{onTop:.76,block:!1}),K("chairDesk",.9,1.7,180),K("speakerSmall",-2.7,2.6,45)],{racks:{x:2.1,z:-2.15,face:180,pose:"stand"},bench:{x:.9,z:1.95,face:180,pose:"stand"}}),ceo:i=>({items:[Ue("window",-1.5,an,0,{w:2.4,h:1.3,y:1.1}),Ue("sign",1.5,an,0,{w:1.7,h:.5,y:2.05,text:"CEO",accent:i.accent}),K("rugRectangle",-.6,-1.6,0,{block:!1}),Ue("execDesk",-.6,-2,0,{hot:"ceo-desk"}),K("chairDesk",-.6,-2.75,0,{block:!1}),Ue("tray",-1.3,-1.95,0,{onTop:.78,block:!1,hot:"ceo-tray",big:!0}),K("laptop",-.45,-2.1,180,{onTop:.78,block:!1}),K("lampSquareTable",.25,-2.05,0,{onTop:.78,block:!1}),Ue("wallScreen",1.6,an,0,{w:1.6,h:.9,y:1.15,hot:"ceo-tv",screen:"company"}),K("bookcaseClosedWide",-2.75,.2,90,{hot:"ceo-shelf"}),K("loungeSofa",1.2,1.9,180,{fabric:!0}),K("tableCoffee",1.35,1,0),K("loungeChair",2.55,.6,-90,{fabric:!0}),Ue("door",2.95,-1.4,-90,{hot:"legacy-door",accent:i.accent}),K("pottedPlant",-2.75,-3,0),K("pottedPlant",-2.75,2.85,0),K("pottedPlant",2.8,2.85,0)],stations:{visit:{x:-.6,z:-1.2,face:180,pose:"stand"},sofa:{x:.2,z:1.3,face:90,pose:"stand"}}}),boardroom:i=>{let e=[...oc(i).map(n=>n.p==="window"?{...n,x:-1.7}:n),K("rugRectangle",0,0,0,{block:!1,sx:1.5,sz:1.6}),Ue("longTable",0,0,0,{w:3.6,d:1.3,hot:"board-table"}),Ue("wallScreen",1.6,an,0,{w:1.5,h:.85,y:1.15,screen:"missions-mini"}),K("pottedPlant",-2.8,-3,0),K("pottedPlant",2.8,2.9,0),K("pottedPlant",-2.8,2.9,0)],t={};return[-1.35,-.45,.45,1.35].forEach((n,s)=>{e.push(K("chairModernCushion",n,-.95,0,{fabric:!0,block:!1})),e.push(K("chairModernCushion",n,.95,180,{fabric:!0,block:!1})),t[`seat${s*2}`]={x:n,z:-1.25,face:0,pose:"stand"},t[`seat${s*2+1}`]={x:n,z:1.3,face:180,pose:"stand"}}),{items:e,stations:t}},missions:i=>({items:[Ue("sign",-1.6,an,0,{w:1.9,h:.5,y:2.05,text:"Misiones",accent:i.accent}),Ue("missionBoard",.6,an,0,{w:4.2,h:1.6,y:1.25,hot:"mission-board"}),K("rugRectangle",0,.8,0,{block:!1,sx:1.3}),Ue("longTable",0,.9,0,{w:2.4,d:1.1,hot:"mission-table"}),K("chairDesk",-.7,1.75,180),K("chairDesk",.7,1.75,180),K("chairDesk",-.7,.05,0),K("chairDesk",.7,.05,0),K("pottedPlant",-2.8,-3,0),K("pottedPlant",2.8,2.9,0),K("bookcaseOpenLow",-2.8,2.2,90)],stations:{b0:{x:-1,z:-2.6,face:180,pose:"stand"},b1:{x:.2,z:-2.6,face:180,pose:"stand"},b2:{x:1.4,z:-2.6,face:180,pose:"stand"},b3:{x:2.4,z:-2.6,face:180,pose:"stand"}}}),collab:i=>({items:[...oc(i),Ue("board",1.6,an,0,{w:1.9,h:1.1,y:1.05,hot:"collab-board",accent:i.accent,kind:"handoffs"}),K("rugRound",-1.25,.35,0,{block:!1,sx:1.25,sz:1.25}),K("tableRound",-1.2,.3,0,{hot:"collab-table",sx:.62,sz:.62}),K("rugRound",1.5,1.35,0,{block:!1,sx:1.25,sz:1.25}),K("tableRound",1.5,1.3,0,{hot:"collab-table",sx:.62,sz:.62}),K("loungeSofa",-1.6,2.7,0,{fabric:!0}),K("pottedPlant",-2.8,-3,0),K("pottedPlant",2.8,-3.1,0),K("pottedPlant",-2.8,2.9,0)],stations:{c0:{x:-1.95,z:.3,face:90,pose:"stand"},c1:{x:-.45,z:.3,face:-90,pose:"stand"},c2:{x:-1.2,z:-.45,face:0,pose:"stand"},c3:{x:-1.2,z:1.05,face:180,pose:"stand"},c4:{x:.75,z:1.3,face:90,pose:"stand"},c5:{x:2.25,z:1.3,face:-90,pose:"stand"},c6:{x:1.5,z:.55,face:0,pose:"stand"},c7:{x:1.5,z:2.05,face:180,pose:"stand"},c8:{x:1,z:-2.7,face:180,pose:"stand"},c9:{x:2.2,z:-2.7,face:180,pose:"stand"}}}),creative:i=>({items:[Ue("sign",-1.7,an,0,{w:1.9,h:.5,y:2.05,text:"Estudio",accent:i.accent}),Ue("greenScreen",.9,-3,0,{wide:!0}),Ue("tripod",.9,-.2,180,{hot:"studio-cam"}),Ue("softbox",2.5,-1.2,215),Ue("softbox",-.7,-1.2,145),K("loungeDesignChair",.9,-2.2,0,{fabric:!0}),K("desk",-1.9,1.6,90),K("computerScreen",-1.95,1.6,90,{onTop:.76,block:!1}),K("chairDesk",-1.25,1.6,90),Ue("neon",-1.7,an,0,{y:1.2,accent:i.accent}),K("speakerSmall",2.7,2.6,-30),K("pottedPlant",2.8,1.6,0)],stations:{set:{x:.9,z:-1.5,face:0,pose:"stand"},edit:{x:-1.25,z:1.6,face:-90,pose:"stand"}}}),rest:i=>({items:[...oc(i),Ue("counter",1.2,-3.2,0,{w:3.2,hot:"coffee"}),K("kitchenCoffeeMachine",.6,-3.25,0,{onTop:.92,block:!1,hot:"coffee"}),Ue("cooler",2.85,-1.6,-90),K("stoolBar",.4,-2.3,180,{fabric:!0}),K("stoolBar",1.2,-2.3,180,{fabric:!0}),K("stoolBar",2,-2.3,180,{fabric:!0}),K("rugRound",-1.4,1.4,0,{block:!1,sx:1.7,sz:1.7}),K("loungeSofaLong",-2.35,1.3,90,{fabric:!0}),K("tableCoffee",-1.15,1.45,90),K("loungeChair",-.4,2.4,200,{fabric:!0}),K("pottedPlant",2.8,2.9,0),K("pottedPlant",-2.8,-3,0),K("plantSmall2",-1.1,1.3,0,{onTop:.46,block:!1})],stations:{coffee:{x:.6,z:-2.55,face:180,pose:"stand"},coffee2:{x:1.6,z:-1.7,face:180,pose:"stand"},cooler:{x:2.25,z:-1.6,face:90,pose:"stand"},sofa:{x:-1.5,z:.4,face:0,pose:"stand"},sofa2:{x:-.3,z:1,face:-90,pose:"stand"}}})};function gf(){return Ht.map((i,e)=>{let t=Yx(e),n=Jx[i.id](i),s=n.items.map(a=>{let o=a.x*Gi,c=a.z===an?Vt:a.z*Gi;return{...a,x:o,z:c,room:i.id,wx:t+o,wz:c}}),r=Object.fromEntries(Object.entries(n.stations).map(([a,o])=>[a,{...o,room:i.id,wx:t+o.x*Gi,wz:o.z*Gi,key:a}]));return{room:i,index:e,cx:t,items:s,stations:r}})}var hc={desk:{title:"Mesa de trabajo",hint:"Encargos activos y resultados"},tray:{title:"Bandeja de revisiones",hint:"Propuestas que esperan tu decisi\xF3n"},board:{title:"Tablero del departamento",hint:"Misiones y etapas asignadas"},shelf:{title:"Archivo de entregables",hint:"Archivos generados por el departamento"},"ceo-desk":{title:"Escritorio del CEO",hint:"Resumen de la empresa"},"ceo-tray":{title:"Bandeja del CEO",hint:"Todas las aprobaciones pendientes"},"ceo-shelf":{title:"Biblioteca de entregables",hint:"Todos los archivos registrados"},"ceo-tv":{title:"Pantalla de la empresa",hint:"Indicadores registrados"},"legacy-door":{title:"Centro anterior",hint:"CRM, automatizaciones y estudio"},"board-table":{title:"Mesa de juntas",hint:"Convocar una misi\xF3n nueva"},"mission-board":{title:"Tablero de misiones",hint:"Etapas, responsables y estado"},"mission-table":{title:"Mesa de coordinaci\xF3n",hint:"Crear o retomar misiones"},"collab-board":{title:"Traspasos",hint:"Aportaciones entre departamentos"},"collab-table":{title:"Mesa de colaboraci\xF3n",hint:"Departamentos trabajando juntos"},"studio-cam":{title:"C\xE1mara del estudio",hint:"PULSE STUDIO (centro anterior)"},coffee:{title:"Cafetera",hint:"Pausa y movimiento ambiental"}};var jx=58,Qx=-8,ih=26,uc=class{constructor(e,{roomCount:t,onTap:n,onRoomChange:s}){this.container=e,this.roomCount=t,this.onTap=n,this.onRoomChange=s,this.renderer=new rc({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=go,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oo,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.setAttribute("aria-hidden","true"),this.scene=new Dr,this.camera=new It(ih,1,.5,200),this.target=new L(0,0,.7),this.camX=0,this.velX=0,this.goalX=0,this.dragging=!1,this.zoom=1,this.goalZoom=1,this.sheetPx=0,this.sheetGoal=0,this.focusZ=-.45,this.focusGoalZ=-.45,this.focusOffsetX=0,this.focusGoalOffX=0,this.focusY=0,this.focusGoalY=0,this.roomIndex=0;let r=new Jr("#fff7ea","#bba58a",1.35);this.scene.add(r);let a=new zi("#fff0db",2.1);a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.left=-7,a.shadow.camera.right=7,a.shadow.camera.top=7,a.shadow.camera.bottom=-7,a.shadow.camera.near=1,a.shadow.camera.far=40,a.shadow.bias=-6e-4,a.shadow.normalBias=.02,this.scene.add(a,a.target),this.sun=a;let o=new zi("#dbe8ff",.45);o.position.set(6,5,10),this.scene.add(o),this.raycaster=new na,this.pointers=new Map,this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize()),window.visualViewport?.addEventListener("resize",()=>this.resize())}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.portrait=t>e}distanceFor(){let e=this.portrait?pt*.94:Math.min(pt*2.1,pt*(this.w/this.h)*.85),t=Math.tan(_n.degToRad(ih/2)),n=e/(2*t*this.camera.aspect),s=10.2/(2*t);return Math.max(n,this.portrait?0:s)/this.zoom}worldPerPx(){return 2*this.distanceFor()*Math.tan(_n.degToRad(ih/2))*this.camera.aspect/this.w}goToRoom(e,{instant:t=!1}={}){e=Math.max(0,Math.min(this.roomCount-1,e)),this.goalX=e*pt,t&&(this.camX=this.goalX,this.velX=0),e!==this.roomIndex&&(this.roomIndex=e,this.onRoomChange?.(e))}focus({x:e=null,z:t=null,sheetPx:n=0,zoom:s=null}={}){this.sheetGoal=n,this.focusGoalZ=t??-.45,this.focusGoalOffX=e!=null?Math.max(-2.2,Math.min(2.2,e-this.goalX)):0,this.goalZoom=s||(n?1.15:1),this.focusGoalY=n&&e!=null?.7:0}bindInput(){let e=this.canvas;e.style.touchAction="none",e.addEventListener("pointerdown",n=>{if(e.setPointerCapture?.(n.pointerId),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,t0:performance.now()}),this.pointers.size===1&&(this.dragging=!0,this.dragStartCam=this.camX,this.lastMoveX=n.clientX,this.lastMoveT=performance.now(),this.velX=0,this.moved=!1),this.pointers.size===2){let[s,r]=[...this.pointers.values()];this.pinch0=Math.hypot(s.x-r.x,s.y-r.y),this.zoom0=this.goalZoom,this.moved=!0}}),e.addEventListener("pointermove",n=>{let s=this.pointers.get(n.pointerId);if(!s)return;if(s.x=n.clientX,s.y=n.clientY,this.pointers.size===2){let[a,o]=[...this.pointers.values()],c=Math.hypot(a.x-o.x,a.y-o.y);this.goalZoom=Math.max(.7,Math.min(1.9,this.zoom0*c/this.pinch0));return}let r=n.clientX-s.x0;if((Math.abs(r)>8||Math.abs(n.clientY-s.y0)>8)&&(this.moved=!0),this.dragging&&this.moved){let a=performance.now(),o=this.worldPerPx();this.camX=this.dragStartCam-r*o;let c=Math.max(1,a-this.lastMoveT);this.velX=-(n.clientX-this.lastMoveX)*o/(c/1e3),this.lastMoveX=n.clientX,this.lastMoveT=a,this.goalX=this.camX}});let t=n=>{let s=this.pointers.get(n.pointerId);if(!s||(this.pointers.delete(n.pointerId),this.pointers.size>0))return;this.dragging=!1;let r=performance.now()-s.t0;if(!this.moved&&r<450){this.handleTap(n.clientX,n.clientY);return}let a=this.camX-this.dragStartCam,o=Math.round((this.camX+this.velX*.18)/pt),c=Math.round(this.dragStartCam/pt);o===c&&Math.abs(a)>pt*.12&&(o=c+Math.sign(a)),o=Math.max(c-3,Math.min(c+3,o)),this.goToRoom(o)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{n.preventDefault(),Math.abs(n.deltaX)>Math.abs(n.deltaY)?(this.wheelAcc=(this.wheelAcc||0)+n.deltaX,Math.abs(this.wheelAcc)>60&&(this.goToRoom(this.roomIndex+Math.sign(this.wheelAcc)),this.wheelAcc=0)):this.goalZoom=Math.max(.7,Math.min(1.9,this.goalZoom*(n.deltaY>0?.92:1.08)))},{passive:!1})}handleTap(e,t){let n=this.canvas.getBoundingClientRect();this.onTap?.({x:e-n.left,y:t-n.top,ndc:new ze((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)})}raycast(e,t){return this.raycaster.setFromCamera(e,this.camera),this.raycaster.intersectObjects(t,!0)}project(e){let t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*this.w,y:(-t.y*.5+.5)*this.h,behind:t.z>1}}update(e){if(!this.dragging){let u=2*Math.sqrt(38),d=38*(this.goalX-this.camX)-u*this.velX;this.velX+=d*e,this.camX+=this.velX*e}let t=1-Math.exp(-6*e);this.zoom+=(this.goalZoom-this.zoom)*t,this.sheetPx+=(this.sheetGoal-this.sheetPx)*t,this.focusZ+=(this.focusGoalZ-this.focusZ)*t,this.focusOffsetX+=(this.focusGoalOffX-this.focusOffsetX)*t,this.focusY+=(this.focusGoalY-this.focusY)*t;let n=Math.max(0,Math.min(this.roomCount-1,Math.round(this.camX/pt)));this.dragging&&n!==this.roomIndex&&(this.roomIndex=n,this.onRoomChange?.(n));let s=this.distanceFor(),r=_n.degToRad(jx),a=_n.degToRad(Qx);this.target.set(this.camX+this.focusOffsetX,this.focusY,this.focusZ);let o=new L(Math.sin(a)*Math.cos(r),Math.sin(r),Math.cos(a)*Math.cos(r)).multiplyScalar(s);this.camera.position.copy(this.target).add(o),this.camera.lookAt(this.target);let c=this.sheetPx>40?110:0,l=(this.sheetPx-c)*.5+(this.portrait?18:0);l>.5?this.camera.setViewOffset(this.w,this.h,0,l,this.w,this.h):this.camera.clearViewOffset(),this.camera.updateMatrixWorld(),this.sun.position.set(this.target.x-4,12,this.target.z+7),this.sun.target.position.copy(this.target)}render(){this.renderer.render(this.scene,this.camera)}};function sh(i,e){if(e===Il)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===or||e===ca){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===or)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var dc=class extends ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new uh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=vi.extractUrlBase(e);a=vi.resolveURL(l,this.path)}else a=vi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new tr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===bf){try{a[Ze.KHR_BINARY_GLTF]=new wh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Dh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new lh;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ah(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new Rh;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new Ch;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ey(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ch=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new zi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ea(h),l.distance=u;break;case"spot":l=new Qr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},lh=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},hh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},uh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},fh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},gh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],Wt),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],Wt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},vh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Mh=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Sh=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Eh=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Th=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new Ge,m=new L,p=new Tn,S=new L(1,1,1),x=new Or(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&S.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(m,p,S));for(let y in c)if(y==="_COLOR_0"){let w=c[y];x.instanceColor=new Fi(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);vt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},bf="glTF",ha=12,_f={JSON:1313821514,BIN:5130562},wh=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ha,r=new DataView(e,ha),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===_f.JSON){let l=new Uint8Array(e,ha+a,o);this.content=n.decode(l)}else if(c===_f.BIN){let l=ha+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ah=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Ph[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Ph[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=fr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,Wt,d)})})}},Rh=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ch=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},fc=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,x=p-d+u;for(let y=0;y!==o;y++){let w=a[_+y+o],T=a[_+y+c]*h,A=a[g+y+o],C=a[g+y]*h;r[y]=S*w+x*T+m*A+p*C}return r}},ty=new Tn,Ih=class extends fc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ty.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xf={9728:Gt,9729:jt,9984:yo,9985:nr,9986:ps,9987:kn},yf={33071:$n,33648:Vs,10497:Yn},rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ny={CUBICSPLINE:void 0,LINEAR:os,STEP:as},ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),i.DefaultMaterial}function Ms(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ry(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ay(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=i.indices+":"+oh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+oh(i.targets[n]);return e}function oh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Lh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cy=new Ge,Dh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ey,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Kr(this.options.manager):this.textureLoader=new ta(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ms(r,o,s),ai(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(vi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=rh[s.type],o=fr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=rh[s.type],l=fr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,x=t.cache.get(S);x||(_=new l(o,p*f,s.count*f/h),x=new Zs(_,f/h),t.cache.add(S,x)),m=new Ks(x,c,d%f/h,g)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),m=new Pt(_,c,g);if(s.sparse!==void 0){let p=rh.SCALAR,S=fr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new S(a[1],x,s.sparse.count*p),T=new l(a[2],y,s.sparse.count*c);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=w.length;A<C;A++){let b=w[A];if(m.setX(b,T[A*c]),c>=2&&m.setY(b,T[A*c+1]),c>=3&&m.setZ(b,T[A*c+2]),c>=4&&m.setW(b,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=xf[d.magFilter]||jt,h.minFilter=xf[d.minFilter]||kn,h.wrapS=yf[d.wrapS]||Yn,h.wrapT=yf[d.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Lt(_);m.needsUpdate=!0,d(m)}),t.load(vi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ai(u,a),u.userData.mimeType=a.mimeType||oy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new er,nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Qs,nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ft}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){let u=s[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Wt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=wn);let h=r.alphaMode||ah.OPAQUE;if(h===ah.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ah.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Nt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nt){let u=r.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&a!==Nt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ai(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ms(s,u,r),u})}createUniqueName(e){let t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return vf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=ay(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vf(new Ut,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?iy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=a[f],p,S=l[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Nr(_,S):new ct(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=sh(p.geometry,ca):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=sh(p.geometry,or));else if(m.mode===Rn.LINES)p=new Br(_,S);else if(m.mode===Rn.LINE_STRIP)p=new ls(_,S);else if(m.mode===Rn.LINE_LOOP)p=new kr(_,S);else if(m.mode===Rn.POINTS)p=new zr(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ry(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ai(p,r),m.extensions&&Ms(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ms(s,u[0],r),u[0];let d=new Ne;r.extensions&&Ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(_n.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new us(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let x=0,y=d.length;x<y;x++){let w=d[x],T=f[x],A=g[x],C=_[x],b=m[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let M=n._createAnimationTracks(w,T,A,C,b);if(M)for(let P=0;P<M.length;P++)p.push(M[P])}let S=new Zr(r,void 0,p);return ai(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Js:l.length>1?h=new Ne:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ai(h,r),r.extensions&&Ms(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ne;n.name&&(r.name=s.createUniqueName(n.name)),ai(r,n),n.extensions&&Ms(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof nn||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Xi[r.path]){case Xi.weights:l=jn;break;case Xi.rotation:l=Qn;break;case Xi.translation:case Xi.scale:l=ei;break;default:n.itemSize===1?l=jn:l=ei;break}let h=s.interpolation!==void 0?ny[s.interpolation]:os,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Xi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Lh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Qn?Ih:fc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ly(i,e,t){let n=e.attributes,s=new Dt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=Lh(fr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Lh(fr[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new tn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function vf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Ph[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ai(i,e),ly(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sy(i,e.targets,t):i})}var hy=2,Nh=["benchCushion","bookcaseClosedWide","bookcaseOpenLow","books","chairCushion","chairDesk","chairModernCushion","computerKeyboard","computerMouse","computerScreen","desk","deskCorner","kitchenCoffeeMachine","lampRoundFloor","lampSquareTable","laptop","loungeChair","loungeDesignChair","loungeDesignSofa","loungeSofa","loungeSofaLong","plantSmall1","plantSmall2","plantSmall3","pottedPlant","rugRectangle","rugRound","sideTable","sideTableDrawers","speakerSmall","stoolBar","tableCoffee","tableCoffeeGlassSquare","tableGlass","tableRound","televisionModern"],ua=new Map,Uh=new Map,uy={wood:"#c4925f",woodDark:"#8f6342",plant:"#5aa86a",metal:"#d9e0e0",metalDark:"#4b5257",metalMedium:"#8c979a",carpet:"#d98c7a",carpetBlue:"#8fa9d9",carpetDarker:"#c98d7d",lamp:"#fff3c4"};function Mf(i){let e=i.name||"",t=`${e}|${i.color?.getHexString()}`;if(!Uh.has(t)){let n=e==="glass",s=new Ft({color:uy[e]||i.color,roughness:n?.15:e.startsWith("metal")?.45:.85,metalness:e.startsWith("metal")?.25:0,transparent:n,opacity:n?.55:1});e==="lamp"&&(s.emissive.set("#ffe9a8"),s.emissiveIntensity=.5),s.name=e,Uh.set(t,s)}return Uh.get(t)}async function Sf(i,e,{bundle:t=null}={}){let n=new dc,s=0,r=null;if(t)try{r=await(await fetch(t)).json()}catch{r=null}let a=o=>{let c=atob(o),l=new Uint8Array(c.length);for(let h=0;h<c.length;h++)l[h]=c.charCodeAt(h);return l.buffer};return await Promise.all(Nh.map(o=>new Promise(c=>{let l=u=>{let d=u.scene;d.scale.setScalar(hy),d.updateMatrixWorld(!0);let f=new Dt().setFromObject(d),g=f.getCenter(new L),_=new Ne;d.position.set(-g.x,-f.min.y,-g.z),_.add(d),_.traverse(p=>{p.isMesh&&(p.material=Array.isArray(p.material)?p.material.map(Mf):Mf(p.material),p.castShadow=!0,p.receiveShadow=!0)});let m=f.getSize(new L);ua.set(o,{holder:_,size:m}),s++,e?.(s/Nh.length),c()},h=()=>{s++,e?.(s/Nh.length),c()};r?.[o]?n.parse(a(r[o]),"",l,h):n.load(`${i}/${o}.glb`,l,void 0,h)}))),ua}function Ef(i){return ua.has(i)}function Tf(i){return ua.get(i)?.size||new L(.5,.5,.5)}function wf(i){let e=ua.get(i);return e?e.holder.clone(!0):null}var Fh=new Map;function da(i,e={}){let t=`${i}|${e.emissive||""}|${e.ei||0}|${e.rough??.85}|${e.metal||0}|${e.opacity??1}`;return Fh.has(t)||Fh.set(t,new Ft({color:i,roughness:e.rough??.85,metalness:e.metal||0,emissive:e.emissive||"#000000",emissiveIntensity:e.ei||0,transparent:(e.opacity??1)<1,opacity:e.opacity??1})),Fh.get(t)}var Ei=new Map;function Oh(i,e,t){let n=`b${i}|${e}|${t}`;return Ei.has(n)||Ei.set(n,new Kn(i,e,t)),Ei.get(n)}function Af(i,e,t,n=12){let s=`c${i}|${e}|${t}|${n}`;return Ei.has(s)||Ei.set(s,new Oi(i,e,t,n)),Ei.get(s)}function Rf(i,e=12,t=10){let n=`s${i}|${e}|${t}`;return Ei.has(n)||Ei.set(n,new Bi(i,e,t)),Ei.get(n)}function Es(i,e,t=0,n=0,s=0,r=!0){let a=new ct(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}var me=(i,e,t,n,s,r,a,o)=>Es(Oh(i,e,t),typeof n=="string"?da(n,o):n,s,r,a),xn=(i,e,t,n,s,r,a,o,c)=>Es(Af(i,e,t,c),typeof n=="string"?da(n,o):n,s,r,a),pc=(i,e,t,n,s,r)=>Es(Rf(i),typeof e=="string"?da(e,r):e,t,n,s),Hn=class{constructor(e,t,n=220){this.canvas=document.createElement("canvas"),this.canvas.width=Math.min(1024,Math.round(e*n)),this.canvas.height=Math.min(512,Math.round(t*n)),this.ctx=this.canvas.getContext("2d"),this.texture=new Hr(this.canvas),this.texture.colorSpace=Tt,this.texture.anisotropy=4}commit(){this.texture.needsUpdate=!0}};function $i(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function oi(i,e,t){let n=String(e||"");if(i.measureText(n).width<=t)return n;for(;n.length>1&&i.measureText(n+"\u2026").width>t;)n=n.slice(0,-1);return n+"\u2026"}function Ss(i,e,t,n=!1){let s=n?new Nt({map:i.texture,toneMapped:!1}):new Ft({map:i.texture,roughness:.9}),r=new ct(new Jn(e,t),s);return r.receiveShadow=!n,r}var mc={window({w:i=1.6,h:e=1.1,y:t=1.2}){let n=new Ne,s=new Hn(i,e,120),r=s.ctx,a=s.canvas.width,o=s.canvas.height,c=r.createLinearGradient(0,0,0,o);c.addColorStop(0,"#9fd0ef"),c.addColorStop(.7,"#e7f1ef"),c.addColorStop(1,"#f6e7cf"),r.fillStyle=c,r.fillRect(0,0,a,o),r.fillStyle="rgba(120,150,170,0.45)";for(let u=0;u<9;u++){let d=a/10,f=o*(.25+u*37%30/100);r.fillRect(u*d*1.1,o-f,d*.8,f)}s.commit();let l=Ss(s,i,e,!0);l.position.set(0,t,.03),n.add(l);let h="#f7f3ea";return n.add(me(i+.1,.06,.08,h,0,t+e/2,.04),me(i+.1,.06,.12,h,0,t-e/2,.06)),n.add(me(.06,e,.08,h,-i/2,t,.04),me(.06,e,.08,h,i/2,t,.04),me(.04,e,.06,h,0,t,.04)),{group:n,fp:null}},sign({w:i=1.9,h:e=.5,y:t=2,text:n="",accent:s="#555"}){let r=new Ne,a=new Hn(i,e,260),o=a.ctx,c=a.canvas.width,l=a.canvas.height;o.fillStyle="#fbf8f1",$i(o,0,0,c,l,26),o.fill(),o.fillStyle=s,o.beginPath(),o.arc(l*.5,l*.5,l*.24,0,Math.PI*2),o.fill(),o.fillStyle="#2b2620",o.font=`700 ${Math.round(l*.46)}px -apple-system, "SF Pro Display", "Segoe UI", sans-serif`,o.textBaseline="middle",o.fillText(oi(o,n,c-l*1.2),l*.95,l*.53),a.commit();let h=Ss(a,i,e);return h.position.set(0,t,.03),r.add(h),{group:r,fp:null}},board({w:i=1.8,h:e=1.05,y:t=1.05,accent:n="#777"}){let s=new Ne,r=new Hn(i,e,240),a=Ss(r,i,e);a.position.set(0,t+e/2,.04),s.add(a),s.add(me(i+.08,e+.08,.04,"#d8d2c6",0,t+e/2,.015)),s.add(me(i*.9,.04,.1,"#c9c2b4",0,t-.02,.07));let o=(c,l)=>pc(.025,c,l,t,.1);return s.add(o(n,-.3),o("#2c5d8a",-.18),o("#d9653b",-.06)),{group:s,fp:null,dyn:r,hitBox:[i,e,.2,t+e/2]}},missionBoard({w:i=4.2,h:e=1.6,y:t=1.25}){let n=new Ne,s=new Hn(i,e,240),r=Ss(s,i,e);return r.position.set(0,t+e/2-.4,.062),n.add(r),n.add(me(i+.12,e+.12,.06,"#3a3631",0,t+e/2-.4,.02)),{group:n,fp:null,dyn:s,hitBox:[i,e,.25,t+e/2-.4]}},wallScreen({w:i=1.6,h:e=.9,y:t=1.15}){let n=new Ne,s=new Hn(i,e,240),r=Ss(s,i,e,!0);return r.position.set(0,t+e/2,.062),n.add(r),n.add(me(i+.08,e+.08,.06,"#1d1f24",0,t+e/2,.02)),{group:n,fp:null,dyn:s,hitBox:[i,e,.25,t+e/2]}},chatScreen({accent:i}){return mc.wallScreen({w:1.5,h:.95,y:1,accent:i})},dataWall(){return mc.wallScreen({w:2,h:1,y:1})},cardsWall({accent:i}){let e=new Ne;e.add(me(1.9,1.1,.04,"#c9a77c",0,1.6,.02));let t=[i,"#f2c14e","#e07a5f","#81b29a","#f4f1de","#3d405b"];for(let n=0;n<12;n++){let s=-.75+n%4*.5+n*13%7/100,r=1.95-Math.floor(n/4)*.33,a=me(.36,.24,.012,t[n%t.length],s,r,.05);a.rotation.z=(n*29%11-5)/60,e.add(a)}return{group:e,fp:null}},pressWall({accent:i}){let e=new Ne,t=new Hn(2,1.2,160),n=t.ctx,s=t.canvas.width,r=t.canvas.height;n.fillStyle="#fbf8f3",n.fillRect(0,0,s,r),n.fillStyle=i,n.globalAlpha=.9;for(let o=0;o<4;o++)for(let c=0;c<5;c++)n.font=`700 ${r/8}px sans-serif`,n.fillText("PULSE",c*s/5+o%2*s/10+6,(o+.75)*r/4);t.commit();let a=Ss(t,2,1.2);return a.position.set(0,1.4,.03),e.add(a),{group:e,fp:null}},statusLamp(){let i=new Ne,e=new Ft({color:"#b9b4aa",emissive:"#000000",emissiveIntensity:0,roughness:.4});i.add(xn(.05,.06,.03,"#3a3631",0,.015,0));let t=Es(Rf(.045),e,0,.07,0);return i.add(t),{group:i,fp:null,glow:e}},tray({big:i}){let e=new Ne,t=i?.36:.3;e.add(me(t,.035,.24,"#7a5536",0,.018,0));let n=new Ne;return n.name="papers",e.add(n),{group:e,fp:null,papers:n,hitBox:[.5,.35,.45,.12]}},globe(){let i=new Ne;i.add(xn(.18,.22,.05,"#6b4a2e",0,.025,0),xn(.02,.02,.62,"#6b4a2e",0,.33,0));let e=pc(.24,"#4f8fbf",0,.86,0);i.add(e);let t=pc(.243,"#7fb069",0,.86,0,{opacity:.85});return t.scale.set(1,.6,.7),i.add(t),{group:i,fp:[.5,.5],anim:n=>{e.rotation.y=n*.3,t.rotation.y=n*.3}}},easel({accent:i}){let e=new Ne,t=(n,s)=>{let r=me(.04,1.5,.04,"#8a6a48",n,.75,0);return r.rotation.z=s,r};return e.add(t(-.25,.12),t(.25,-.12)),e.add(me(.8,.6,.03,"#fbf8f1",0,1.15,.05)),e.add(me(.5,.08,.035,i,0,1.28,.06),me(.36,.06,.035,"#f2c14e",-.07,1.14,.06),me(.56,.05,.035,"#3d405b",0,1.02,.06)),{group:e,fp:[.7,.5]}},greenScreen({wide:i}){let e=new Ne,t=i?3.2:2.2;e.add(me(.05,2.3,.05,"#2b2b2b",-t/2,1.15,0),me(.05,2.3,.05,"#2b2b2b",t/2,1.15,0),me(t+.05,.05,.05,"#2b2b2b",0,2.3,0));let n=me(t-.05,2.1,.02,"#3fbf5a",0,1.2,.02);e.add(n);let s=me(t-.05,.02,1.1,"#3fbf5a",0,.01,.55);return s.castShadow=!1,e.add(s),{group:e,fp:[t,.3]}},tripod(){let i=new Ne;for(let t=0;t<3;t++){let n=t*Math.PI*2/3,s=me(.03,1.15,.03,"#222",Math.sin(n)*.17,.55,Math.cos(n)*.17);s.rotation.set(Math.cos(n)*.3,0,-Math.sin(n)*.3),i.add(s)}i.add(me(.3,.2,.18,"#1d1d1d",0,1.18,0),xn(.07,.07,.16,"#111",0,1.18,.15),me(.06,.06,.06,"#e33",.1,1.3,0));let e=i.children[i.children.length-2];return e.rotation.x=Math.PI/2,{group:i,fp:[.5,.5]}},softbox(){let i=new Ne;i.add(xn(.02,.02,1.6,"#333",0,.8,0),xn(.2,.25,.04,"#333",0,.02,0));let e=me(.55,.42,.18,"#f8f6f0",0,1.7,0,{emissive:"#fff4dc",ei:.9});return i.add(e),i.add(me(.6,.47,.12,"#1f1f1f",0,1.7,-.12)),{group:i,fp:[.45,.45]}},longTable({w:i=2.2,d:e=1,map:t}){let n=new Ne;n.add(me(i,.06,e,t?"#f4efe6":"#8a5a36",0,.74,0));let s=i/2-.12,r=e/2-.12;if([[-s,-r],[s,-r],[-s,r],[s,r]].forEach(([a,o])=>n.add(me(.06,.72,.06,"#3b3530",a,.36,o))),t){let a=me(i*.8,.01,e*.7,"#7fb3d5",0,.775,0);a.castShadow=!1,n.add(a),n.add(me(i*.25,.012,e*.25,"#e9c46a",-.2,.78,.05))}return{group:n,fp:[i,e]}},execDesk(){let i=new Ne;return i.add(me(2,.07,.95,"#5a3b26",0,.76,0),me(.5,.72,.85,"#4a301f",-.72,.36,0),me(.5,.72,.85,"#4a301f",.72,.36,0),me(1,.5,.05,"#4a301f",0,.45,.4)),{group:i,fp:[2,.95]}},door({accent:i}){let e=new Ne;e.add(me(.95,2.1,.06,"#8a6040",0,1.05,.03),xn(.03,.03,.12,"#d9c27a",.33,1,.1));let t=new Hn(.8,.22,240),n=t.ctx;n.fillStyle=i,$i(n,0,0,t.canvas.width,t.canvas.height,12),n.fill(),n.fillStyle="#fff",n.font="700 30px sans-serif",n.textBaseline="middle",n.fillText("CENTRO ANTERIOR",12,t.canvas.height/2+2),t.commit();let s=Ss(t,.8,.22);return s.position.set(0,1.75,.07),e.add(s),{group:e,fp:[1,.2],hitBox:[1,2.1,.4,1.05]}},cabinet(){let i=new Ne;i.add(me(.55,1.25,.55,"#9aa3a8",0,.625,0,{rough:.5,metal:.2}));for(let e=0;e<4;e++)i.add(me(.45,.02,.01,"#6f777c",0,.2+e*.3,.28),me(.12,.03,.03,"#444",0,.28+e*.3,.29));return{group:i,fp:[.6,.6]}},safe(){let i=new Ne;return i.add(me(.6,.7,.55,"#3f4a52",0,.35,0,{rough:.4,metal:.4}),xn(.09,.09,.04,"#c9b26a",.05,.4,.29)),i.children[1].rotation.x=Math.PI/2,{group:i,fp:[.65,.6]}},rack(){let i=new Ne;i.add(me(.6,1.9,.7,"#22272e",0,.95,0,{rough:.5}));let e=[];for(let t=0;t<7;t++){i.add(me(.52,.18,.02,"#323a44",0,.35+t*.22,.36));for(let n=0;n<3;n++){let s=new Nt({color:n===0?"#3cff9a":n===1?"#47b8ff":"#ffb347",toneMapped:!1}),r=Es(Oh(.035,.035,.01),s,-.18+n*.06,.35+t*.22,.375,!1);i.add(r),e.push({m:s,seed:t*3+n})}}return{group:i,fp:[.65,.75],anim:(t,n)=>e.forEach(s=>{let r=Math.sin(t*(n?9:2.2)+s.seed*1.7)>(n?-.2:.4);s.m.color.set(r?s.seed%3===0?"#3cff9a":s.seed%3===1?"#47b8ff":"#ffb347":"#2a3038")})}},stage({accent:i}){let e=new Ne;e.add(me(2.4,.25,1.4,"#3a3036",0,.125,-.3)),e.add(me(.06,1.9,.06,"#9aa0a6",-1.15,1.2,-.95),me(.06,1.9,.06,"#9aa0a6",1.15,1.2,-.95),me(2.36,.06,.06,"#9aa0a6",0,2.15,-.95));let t=[];return[-.7,0,.7].forEach((n,s)=>{let r=new Nt({color:s===1?"#fff2b0":i,toneMapped:!1}),a=Es(Af(.07,.1,.16),r,n,2.05,-.9,!1);a.rotation.x=.5,e.add(a),t.push(r)}),e.add(me(.5,.35,.3,"#1c1c1c",-.9,.42,.15),me(.5,.35,.3,"#1c1c1c",.9,.42,.15)),{group:e,fp:[2.5,1.5],fpOffset:[0,-.3],anim:n=>t.forEach((s,r)=>{s.color.setHSL((n*.08+r*.33)%1,.75,.62)})}},balloons({accent:i}){let e=new Ne,t=[i,"#f6f1e7","#f2c14e"],n=[];for(let s=0;s<6;s++){let r=s*1.1,a=pc(.16,t[s%3],Math.sin(r)*.18,1.2+s%3*.22,Math.cos(r)*.18,{rough:.35});e.add(a),n.push(a)}return e.add(xn(.12,.14,.08,"#9a8a7a",0,.04,0),xn(.005,.005,1.1,"#ddd",0,.6,0)),{group:e,fp:[.35,.35],anim:s=>n.forEach((r,a)=>{r.position.y=1.2+a%3*.22+Math.sin(s*1.4+a)*.025})}},podium({accent:i}){let e=new Ne;return e.add(me(.55,1.05,.45,"#efe9de",0,.525,0),me(.56,.1,.46,i,0,.8,.005)),{group:e,fp:[.6,.5]}},neon({y:i=1.2,accent:e}){let t=new Ne,n=new Nt({color:e,toneMapped:!1}),s=new ct(new ki(.28,.025,8,32),n);s.position.set(.9,i,.05),t.add(s);let r=Es(Oh(.5,.05,.03),n,.9,i,.05,!1);return t.add(r),{group:t,fp:null}},counter({w:i=3.2}){let e=new Ne;e.add(me(i,.88,.62,"#e9e2d6",0,.44,0),me(i+.04,.05,.66,"#5d4a3a",0,.9,0));for(let t=0;t<4;t++)e.add(me(.02,.6,.01,"#cfc6b8",-i/2+(t+1)*i/5,.42,.315));return e.add(xn(.06,.05,.1,"#f4f1ea",1,.98,.05),xn(.06,.05,.1,"#e07a5f",1.18,.98,-.05)),{group:e,fp:[i,.65],hitBox:[i,.9,.7,.6]}},cooler(){let i=new Ne;return i.add(me(.38,1,.38,"#f2f2ee",0,.5,0),xn(.15,.15,.42,"#8fd1f2",0,1.22,0,{opacity:.75,rough:.2})),{group:i,fp:[.45,.45]}}};function Bh(i,e){if(!i?.papers)return;let t=i.papers;for(;t.children.length;)t.remove(t.children[0]);let n=Math.min(e,6);for(let s=0;s<n;s++){let r=me(.24,.012,.18,s===n-1?"#fffdf6":"#f4efe2",(s*7%5-2)/200,.045+s*.014,(s*3%5-2)/200);r.rotation.y=(s*11%7-3)/30,r.castShadow=!1,t.add(r)}if(e>0){let s=me(.04,.09,.005,"#e5484d",.1,.07+n*.014,.09);s.castShadow=!1,t.add(s)}}var gc=class{constructor(e,t,n,s,r=.2){this.minX=e,this.minZ=n,this.cell=r,this.w=Math.ceil((t-e)/r),this.h=Math.ceil((s-n)/r),this.blocked=new Uint8Array(this.w*this.h)}toCell(e,t){return[Math.floor((e-this.minX)/this.cell),Math.floor((t-this.minZ)/this.cell)]}toWorld(e,t){return[this.minX+(e+.5)*this.cell,this.minZ+(t+.5)*this.cell]}inside(e,t){return e>=0&&t>=0&&e<this.w&&t<this.h}free(e,t){return this.inside(e,t)&&!this.blocked[t*this.w+e]}isFreeAt(e,t){let[n,s]=this.toCell(e,t);return this.free(n,s)}blockRect(e,t,n,s,r=0,a=0,o=1){let c=r*Math.PI/180,l=Math.cos(c),h=Math.sin(c),u=n/2+a,d=s/2+a,f=Math.abs(u*l)+Math.abs(d*h),g=Math.abs(u*h)+Math.abs(d*l),[_,m]=this.toCell(e-f,t-g),[p,S]=this.toCell(e+f,t+g);for(let x=Math.max(0,m);x<=Math.min(this.h-1,S);x++)for(let y=Math.max(0,_);y<=Math.min(this.w-1,p);y++){let[w,T]=this.toWorld(y,x),A=w-e,C=T-t,b=A*l-C*h,M=A*h+C*l;Math.abs(b)<=u&&Math.abs(M)<=d&&(this.blocked[x*this.w+y]=o)}}nearestFree(e,t,n=12){let[s,r]=this.toCell(e,t);if(this.free(s,r))return[s,r];for(let a=1;a<=n;a++){let o=null,c=1/0;for(let l=r-a;l<=r+a;l++)for(let h=s-a;h<=s+a;h++){if(Math.max(Math.abs(h-s),Math.abs(l-r))!==a||!this.free(h,l))continue;let u=(h-s)**2+(l-r)**2;u<c&&(c=u,o=[h,l])}if(o)return o}return null}lineFree(e,t,n,s){let r=Math.max(Math.abs(n-e),Math.abs(s-t))*2;for(let a=0;a<=r;a++){let o=r?a/r:0,c=e+(n-e)*o,l=t+(s-t)*o;if(!this.free(Math.round(c),Math.round(l))||!this.free(Math.floor(c+.5),Math.floor(l+.5)))return!1}return!0}findPath(e,t,n,s){let r=this.nearestFree(e,t),a=this.nearestFree(n,s);if(!r||!a)return null;let o=this.w,c=o*this.h,l=r[1]*o+r[0],h=a[1]*o+a[0];if(l===h)return[[n,s]];let u=new Float32Array(c).fill(1/0),d=new Int32Array(c).fill(-1),f=new Uint8Array(c),g=new kh,_=A=>{let C=A%o,b=A/o|0,M=Math.abs(C-a[0]),P=Math.abs(b-a[1]);return M+P+(Math.SQRT2-2)*Math.min(M,P)};u[l]=0,g.push(l,_(l));let m=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],p=!1,S=0;for(;g.size&&S++<6e4;){let A=g.pop();if(A===h){p=!0;break}if(f[A])continue;f[A]=1;let C=A%o,b=A/o|0;for(let[M,P,O]of m){let B=C+M,X=b+P;if(!this.free(B,X)||M&&P&&(!this.free(C+M,b)||!this.free(C,b+P)))continue;let F=X*o+B;if(f[F])continue;let H=u[A]+O;H<u[F]&&(u[F]=H,d[F]=A,g.push(F,H+_(F)))}}if(!p)return null;let x=[];for(let A=h;A!==-1;A=d[A])x.push([A%o,A/o|0]);x.reverse();let y=[x[0]],w=0;for(let A=2;A<x.length;A++)this.lineFree(x[w][0],x[w][1],x[A][0],x[A][1])||(y.push(x[A-1]),w=A-1);y.push(x[x.length-1]);let T=y.slice(1).map(([A,C])=>this.toWorld(A,C));return T[T.length-1]=this.isFreeAt(n,s)?[n,s]:T[T.length-1],T}},kh=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(e,t){let n=this.k,s=this.v;n.push(e),s.push(t);let r=n.length-1;for(;r>0;){let a=r-1>>1;if(s[a]<=s[r])break;[n[a],n[r]]=[n[r],n[a]],[s[a],s[r]]=[s[r],s[a]],r=a}}pop(){let e=this.k,t=this.v,n=e[0],s=e.pop(),r=t.pop();if(e.length){e[0]=s,t[0]=r;let a=0;for(;;){let o=2*a+1,c=o+1,l=a;if(o<e.length&&t[o]<t[l]&&(l=o),c<e.length&&t[c]<t[l]&&(l=c),l===a)break;[e[l],e[a]]=[e[a],e[l]],[t[l],t[a]]=[t[a],t[l]],a=l}}return n}};var pr=.2;function _c(i){let e=new Hn(2,2,128),t=e.ctx,n=e.canvas.width,s=e.canvas.height,r={oak:"#d8b88e",walnut:"#a87d58",concrete:"#d4cec4",tile:"#ece6db"}[i];if(t.fillStyle=r,t.fillRect(0,0,n,s),i==="oak"||i==="walnut")for(let o=0;o<8;o++){let c=o*s/8,l=o*97%n;for(let h=-1;h<3;h++){let u=l+h*n/2,d=((o*31+h*17)%9-4)*(i==="oak"?3:2.5);t.fillStyle=`rgba(${d>0?255:0},${d>0?240:0},${d>0?220:0},${Math.abs(d)/100})`,t.fillRect(u,c,n/2,s/8),t.fillStyle="rgba(70,45,25,0.22)",t.fillRect(u,c,2,s/8)}t.fillStyle="rgba(70,45,25,0.25)",t.fillRect(0,c,n,2)}else if(i==="tile"){t.strokeStyle="rgba(150,135,115,0.35)",t.lineWidth=2;for(let a=0;a<=4;a++)t.beginPath(),t.moveTo(a*n/4,0),t.lineTo(a*n/4,s),t.stroke(),t.beginPath(),t.moveTo(0,a*s/4),t.lineTo(n,a*s/4),t.stroke()}else{for(let a=0;a<400;a++)t.fillStyle=`rgba(0,0,0,${Math.random()*.04})`,t.fillRect(Math.random()*n,Math.random()*s,3,3);t.strokeStyle="rgba(120,110,100,0.25)",t.lineWidth=2,t.strokeRect(1,1,n-2,s-2)}return e.commit(),e.texture.wrapS=e.texture.wrapT=Yn,e.texture}var zh=new Map;function xc(i,e,t=["carpet","carpetBlue"]){i.traverse(n=>{if(!n.isMesh)return;let s=r=>{if(!t.includes(r.name))return r;let a=`${r.name}|${e}`;if(!zh.has(a)){let o=new Ft({color:e,roughness:.95});o.name=r.name,zh.set(a,o)}return zh.get(a)};n.material=Array.isArray(n.material)?n.material.map(s):s(n.material)})}function Cf(i,e=.58,t=.5){let n=new Pe(i.accent),s={};return n.getHSL(s),new Pe().setHSL(s.h,Math.min(t,s.s),e).getStyle()}function If(i){let e=gf(),t=new Ne;i.add(t);let n=e.length,s=-pt/2,r=(n-1)*pt+pt/2,a=new gc(s,r,Vt,Xt-.25,.2),o=[],c=[],l={},h={},u=[],d=[],f=_c("tile");f.repeat.set((r-s)/2,(Xt-mt)/2);let g=new ct(new Jn(r-s,Xt-mt),new Ft({map:f,roughness:.9}));g.rotation.x=-Math.PI/2,g.position.set((s+r)/2,0,(mt+Xt)/2),g.receiveShadow=!0,t.add(g),t.add(me(r-s+.6,.3,Xt-Vt+.6,"#c9bfb0",(s+r)/2,-.151,(Vt+Xt)/2));let _=me(r-s,.12,.12,"#b5a996",(s+r)/2,.06,Xt-.06);t.add(_);let m={oak:_c("oak"),walnut:_c("walnut"),concrete:_c("concrete")},p=da("#4b4540");for(let{room:x,index:y,cx:w,items:T,stations:A}of e){let C=new Ne;C.name=x.id,t.add(C);let b=m[x.floor].clone();b.needsUpdate=!0,b.repeat.set(pt/2,(mt-Vt)/2);let M=new ct(new Jn(pt,mt-Vt),new Ft({map:b,roughness:.88}));M.rotation.x=-Math.PI/2,M.position.set(w,.002,(Vt+mt)/2),M.receiveShadow=!0,C.add(M);let P=me(pt,lc,.2,x.wall,w,lc/2,Vt-.1,{rough:.95});P.castShadow=!1,C.add(P),C.add(me(pt,.12,.04,"#d8cfc0",w,.06,Vt+.02));let O=me(pt,.08,.02,x.accent,w,.95,Vt+.01);O.castShadow=!1,C.add(O),C.add(me(pt+.2,.06,.24,p,w,lc+.03,Vt-.1));let B=mf-cc+.2;[-1,1].forEach(F=>{let H=w+F*(cc+B/2);C.add(me(B,dr,.16,"#e9e2d6",H,dr/2,mt)),C.add(me(B,.05,.2,"#8a6a4a",H,dr+.025,mt)),a.blockRect(H,mt,B,.16,0,pr)}),[-1,1].forEach(F=>C.add(me(.08,dr+.1,.2,x.accent,w+F*cc,(dr+.1)/2,mt)));let X=F=>{C.add(me(.2,Wi,mt-Vt,"#ece6dc",F,Wi/2,(Vt+mt)/2,{rough:.95})),C.add(me(.24,.05,mt-Vt+.02,p,F,Wi+.025,(Vt+mt)/2)),a.blockRect(F,(Vt+mt)/2,.2,mt-Vt+.4,0,pr)};y===0&&X(w-pt/2),X(w+pt/2);for(let F of T){let H=null,ee=null,W=null;if(F.m){if(!Ef(F.m))continue;H=wf(F.m),F.fabric&&xc(H,Cf(x)),F.tint?xc(H,F.tint):F.m==="chairDesk"&&xc(H,"#46413d"),(F.sx||F.sz)&&H.scale.set(F.sx||1,1,F.sz||1);let oe=Tf(F.m);ee=[oe.x*(F.sx||1),oe.z*(F.sz||1)],F.m.startsWith("rug")&&(xc(H,Cf(x,.74,.35),["carpetDarker"]),H.traverse(be=>{be.isMesh&&(be.castShadow=!1)}))}else{let oe=mc[F.p]?.(F);if(!oe)continue;H=oe.group,ee=oe.fp,W=oe,oe.fpOffset&&(ee=ee&&[...ee,oe.fpOffset])}if(H.position.set(F.wx,F.onTop||0,F.wz),H.rotation.y=_n.degToRad(F.r||0),H.userData.item=F,C.add(H),F.block!==!1&&ee&&!(F.m&&F.m.startsWith("rug"))){let[oe,be,ke]=ee,nt=_n.degToRad(F.r||0),dt=ke?ke[0]*Math.cos(nt)+ke[1]*Math.sin(nt):0,Qe=ke?-ke[0]*Math.sin(nt)+ke[1]*Math.cos(nt):0;a.blockRect(F.wx+dt,F.wz+Qe,oe,be,F.r||0,pr-.04)}F.seat&&d.push({room:x.id,obj:H,it:F}),W?.dyn&&c.push({room:x.id,kind:F.p,screen:F.screen,boardKind:F.kind,surface:W.dyn,item:F}),W?.glow&&(l[x.id]=W.glow),W?.papers!==void 0&&F.p==="tray"&&(h[x.id]=W),W?.anim&&u.push({room:x.id,fn:W.anim,kind:F.p}),F.hot&&o.push({key:F.hot,room:x.id,obj:H,item:F})}C.userData={room:x,index:y,cx:w,stations:A}}a.blockRect((s+r)/2,Xt-.05,r-s,.3,0,pr),a.blockRect(s+.05,(mt+Xt)/2,.2,Xt-mt,0,pr),a.blockRect(r-.05,(mt+Xt)/2,.2,Xt-mt,0,pr),t.add(me(.2,Wi,Xt-mt,"#ece6dc",s,Wi/2,(mt+Xt)/2)),t.add(me(.2,Wi,Xt-mt,"#ece6dc",r,Wi/2,(mt+Xt)/2));let S=Object.fromEntries(e.map(x=>[x.room.id,x.stations]));return{world:t,plan:e,nav:a,hotspots:o,surfaces:c,lamps:l,trays:h,animated:u,seats:d,stationsByRoom:S,bounds:{minX:s,maxX:r}}}var dy=.2,fy={sphere:new Bi(1,20,16),sphereLo:new Bi(1,12,10),cone:new $r(1,1,12),cyl:new Oi(1,1,1,12),box:new Kn(1,1,1),capsule:new Wr(1,1,6,12),torus:new ki(1,.12,8,24),arc:new ki(1,.07,8,20,Math.PI)};function ue(i,e={}){return new Ft({color:i,roughness:e.rough??.72,metalness:e.metal??0,emissive:e.emissive||"#000",emissiveIntensity:e.ei||0})}function Q(i,e,t,n,s,r=0,a=0,o=0,c){let l=new ct(fy[i],e);return l.scale.set(t,n,s),l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!1,c&&c.add(l),l}function yn(i,e,t,n){let s=new Ne;return s.position.set(e,t,n),i.add(s),s}function qi(i,{r:e=.07,spread:t=.1,y:n=.03,z:s=.2,iris:r="#3a2a1a",rim:a=null,big:o=!1}){let c=ue("#ffffff",{rough:.3}),l=ue("#1b1410",{rough:.2}),h=ue(r,{rough:.3}),u=[];return[-1,1].forEach(d=>{let f=yn(i,d*t,n,s);a&&Q("sphere",ue(a),e*1.35,e*1.35,e*.5,0,0,-.01,f),Q("sphere",c,e,e,e*.6,0,0,0,f),Q("sphere",h,e*.72,e*.72,e*.3,0,-.004,e*.42,f),Q("sphere",l,e*.42,e*.42,e*.2,0,-.004,e*.56,f),Q("sphere",c,e*.16,e*.16,e*.1,-e*.25,e*.28,e*.64,f),o&&f.scale.setScalar(1.12),f.userData.base=o?1.12:1,u.push(f)}),u}function py(i,e,t,n,s=.075){let r=yn(i,0,t,e),a=ue("#3b2a1a",{rough:.4,metal:.3});return[-1,1].forEach(o=>{let c=Q("torus",a,s,s,s,o*n,0,0,r);c.scale.z=s}),Q("box",a,n*.6,.012,.012,0,.01,0,r),r}function my(i,e){let t=new Ne;if(i==="clipboard")Q("box",ue("#8a5a36"),.16,.22,.015,0,0,0,t),Q("box",ue("#fbf8f1"),.13,.17,.018,0,-.01,.002,t),Q("box",ue("#9aa0a6",{metal:.5}),.06,.025,.02,0,.1,.004,t);else if(i==="camera"){Q("box",ue("#222"),.16,.1,.08,0,0,.02,t);let n=Q("cyl",ue("#111"),.04,.07,.04,0,0,.09,t);n.rotation.x=Math.PI/2}else i==="briefcase"?(Q("box",ue("#7a4a26"),.22,.16,.06,0,-.06,0,t),Q("box",ue("#c9a25e",{metal:.6}),.06,.02,.065,0,0,0,t)):i==="book"?(Q("box",ue(e.accent),.15,.2,.04,0,0,0,t),Q("box",ue("#f6f1e4"),.135,.19,.042,.008,0,0,t)):i==="tablet"?(Q("box",ue("#2a2d33"),.17,.12,.012,0,0,0,t),Q("box",ue("#7fd3ff",{emissive:"#3aa0e0",ei:.6}),.15,.1,.014,0,0,.001,t)):i==="glowstick"&&(Q("cyl",ue("#ff7ad9",{emissive:"#ff3fc8",ei:2.2}),.018,.22,.018,0,.08,0,t),Q("cyl",ue("#222"),.022,.07,.022,0,-.06,0,t));return t}function Pf(i){let e=i.palette,t=new Ne,n=yn(t,0,0,0),s=yn(n,0,dy,0),r=yn(s,0,0,0),a=yn(r,0,.47,0),o=i.species,c=ue(e.body),l=ue(e.belly),h=ue(e.accent),u=o==="hummingbird"||o==="moth",d={root:t,body:n,hips:s,torso:r,head:a,arms:[],legs:[],wings:[],tail:null,lids:[],extras:[],flyer:u,species:o},f={owl:[.25,.27,.23],hummingbird:[.19,.22,.19],cat:[.2,.24,.18],raccoon:[.22,.25,.2],bunny:[.19,.23,.18],moth:[.18,.23,.17],capybara:[.25,.26,.23],turtle:[.22,.24,.21],robot:[.22,.22,.18]}[o]||[.2,.24,.18];if(o==="robot"){let S=ue(e.body,{rough:.35,metal:.45});Q("box",S,.38,.36,.28,0,.21,0,r),Q("box",ue(e.belly,{rough:.4}),.24,.2,.02,0,.21,.145,r);let x=Q("sphere",ue("#6ff5ff",{emissive:"#3de0ff",ei:1.4}),.035,.035,.02,0,.25,.158,r);d.core=x}else{let S=["raccoon","hummingbird","capybara","bunny"].includes(o);if(Q("sphere",S?h:c,f[0],f[1],f[2],0,.2,0,r),S?(Q("sphere",ue(o==="capybara"?"#fbf3e8":"#f7f4ee"),.09,.15,.06,0,.24,f[2]*.82,r),o==="raccoon"&&Q("box",ue("#8e1f2b"),.035,.13,.02,0,.22,f[2]+.02,r)):Q("sphere",l,f[0]*.72,f[1]*.75,f[2]*.6,0,.18,f[2]*.48,r),o==="owl"||o==="turtle"){let x=Q("sphere",h,f[0]*1.03,f[1]*.62,f[2]*1.03,0,.13,0,r);x.scale.y*=.9,Q("box",ue(o==="owl"?"#c9a25e":"#e0c26a"),.03,.1,.02,0,.27,f[2]*.92,r)}o==="moth"&&Q("sphere",ue("#fbeee8",{rough:1}),.24,.12,.22,0,.38,0,r)}if(o==="turtle"){let S=Q("sphere",ue(e.shell,{rough:.6}),.27,.3,.2,0,.22,-.13,r);Q("torus",ue("#6a4322"),.24,.27,.6,0,.22,-.06,r).rotation.y=Math.PI/2;for(let x=0;x<5;x++)Q("sphere",ue("#a6743f"),.07,.07,.03,(x%3-1)*.12,.12+Math.floor(x/3)*.17+x%2*.03,-.31,r);d.extras.push(S)}if(o==="robot"){let S=ue(e.body,{rough:.35,metal:.45});Q("box",S,.42,.32,.32,0,.12,0,a),Q("box",ue("#0f1a22",{rough:.25}),.34,.22,.02,0,.12,.162,a);let x=ue(e.eye,{emissive:e.eye,ei:1.6});d.lids=[-1,1].map(y=>Q("capsule",x,.028,.045,.01,y*.08,.13,.175,a)),d.lids.forEach(y=>{y.rotation.z=Math.PI/2,y.userData.base=.045}),Q("box",x,.07,.012,.01,0,.06,.175,a),Q("cyl",ue("#9aa0a6",{metal:.6}),.012,.16,.012,0,.36,0,a),d.antenna=Q("sphere",ue(e.accent,{emissive:e.accent,ei:1.2}),.045,.045,.045,0,.46,0,a),[-1,1].forEach(y=>{let w=Q("cyl",ue(e.accent,{rough:.4}),.07,.04,.07,y*.225,.12,0,a);w.rotation.z=Math.PI/2})}else{let S={owl:[.27,.25,.25],hummingbird:[.2,.19,.2],cat:[.24,.21,.21],raccoon:[.24,.21,.22],bunny:[.22,.21,.2],moth:[.2,.19,.19],capybara:[.23,.21,.27],turtle:[.2,.19,.2]}[o],x=o==="owl"?.1:.14;Q("sphere",c,S[0],S[1],S[2],0,x,0,a);let y=S[2];if(o==="owl"){Q("sphere",l,.21,.17,.08,0,x+.01,y*.78,a),d.lids=qi(a,{r:.075,spread:.095,y:x+.03,z:y*.86,iris:e.eye,rim:"#ffffff",big:!0});let w=Q("cone",ue(e.beak),.035,.08,.035,0,x-.05,y+.02,a);w.rotation.x=Math.PI*.62,[-1,1].forEach(T=>{let A=Q("cone",c,.06,.13,.04,T*.17,x+.24,0,a);A.rotation.z=-T*.35})}else if(o==="hummingbird"){Q("sphere",l,.12,.1,.08,0,x-.05,y*.7,a),d.lids=qi(a,{r:.055,spread:.09,y:x+.03,z:y*.82,iris:e.eye});let w=Q("cyl",ue(e.beak),.012,.32,.012,0,x-.02,y+.15,a);w.rotation.x=Math.PI/2+.12;let T=Q("cone",ue("#2fb89c"),.06,.14,.04,0,x+.2,-.05,a);T.rotation.x=-.6}else if(o==="cat")Q("sphere",l,.11,.075,.07,0,x-.06,y*.82,a),Q("sphere",ue(e.beak),.025,.018,.02,0,x-.025,y+.02,a),d.lids=qi(a,{r:.058,spread:.095,y:x+.03,z:y*.84,iris:e.eye}),[-1,1].forEach(w=>{let T=Q("cone",c,.075,.15,.04,w*.14,x+.2,-.01,a);T.rotation.z=-w*.32,Q("cone",ue("#f2b6a5"),.04,.09,.02,w*.14,x+.19,.015,a).rotation.z=-w*.32}),Q("arc",ue("#2b2b2b"),.235,.235,.5,0,x-.01,0,a),[-1,1].forEach(w=>Q("cyl",ue("#3a3a3a"),.065,.05,.065,w*.235,x-.01,0,a).rotation.z=Math.PI/2),[-1,1].forEach(w=>Q("cyl",ue("#c9a25e",{metal:.6}),.04,.052,.04,w*.236,x-.01,0,a).rotation.z=Math.PI/2);else if(o==="raccoon")Q("sphere",ue("#2a211b"),.235,.075,.2,0,x+.03,.035,a),Q("sphere",l,.1,.07,.09,0,x-.06,y*.82,a),Q("sphere",ue("#1b1410"),.03,.022,.02,0,x-.03,y+.04,a),d.lids=qi(a,{r:.05,spread:.095,y:x+.035,z:y*.85,iris:e.eye}),[-1,1].forEach(w=>{Q("sphere",c,.07,.08,.035,w*.16,x+.18,0,a),Q("sphere",l,.04,.05,.02,w*.16,x+.18,.02,a)});else if(o==="bunny"){Q("sphere",l,.1,.07,.07,0,x-.06,y*.8,a),Q("sphere",ue(e.beak),.022,.016,.015,0,x-.03,y+.01,a),d.lids=qi(a,{r:.058,spread:.09,y:x+.03,z:y*.84,iris:e.eye}),d.ears=[-1,1].map(T=>{let A=yn(a,T*.085,x+.17,-.02);return Q("capsule",c,.045,.2,.03,0,.14,0,A),Q("capsule",ue("#f2c4d6"),.025,.17,.01,0,.14,.022,A),A.rotation.z=-T*.15,A});let w=Q("torus",h,.17,.17,.9,0,.42,0,r);w.rotation.x=Math.PI/2}else o==="moth"?(Q("sphere",ue("#fbeee8",{rough:1}),.13,.1,.07,0,x-.06,y*.75,a),d.lids=qi(a,{r:.065,spread:.088,y:x+.02,z:y*.82,iris:"#7a1d45",big:!0}),d.antennae=[-1,1].map(w=>{let T=yn(a,w*.07,x+.17,.02),A=Q("cyl",ue("#4a1a2c"),.008,.22,.008,0,.11,0,T);A.rotation.z=0;for(let C=0;C<4;C++)Q("sphere",ue(e.accent),.04-C*.006,.012,.02,w*.025,.08+C*.045,0,T);return T.rotation.z=-w*.45,T}),Q("arc",ue("#222"),.2,.2,.5,0,x-.02,0,a),Q("cyl",ue("#222"),.008,.12,.008,-.17,x-.06,.08,a).rotation.x=Math.PI/2.5):o==="capybara"?(Q("sphere",ue(e.belly),.15,.12,.12,0,x-.04,y*.8,a),Q("sphere",ue("#3a2618"),.06,.025,.03,0,x-0,y+.06,a),d.lids=qi(a,{r:.04,spread:.12,y:x+.07,z:y*.62,iris:"#2b1d12"}),[-1,1].forEach(w=>Q("sphere",c,.045,.04,.03,w*.15,x+.17,-.06,a)),Q("sphere",ue("#f08a7a"),.05,.05,.05,.1,x+.19,.02,a)):o==="turtle"&&(Q("sphere",l,.12,.08,.08,0,x-.06,y*.78,a),d.lids=qi(a,{r:.055,spread:.085,y:x+.03,z:y*.82,iris:"#2b1d12"}),Q("box",ue("#4a3020"),.06,.008,.01,0,x-.06,y+.01,a));i.glasses&&py(a,(o==="owl"?.25:.2)*.98,x+.03,o==="owl"?.095:.085,o==="owl"?.085:.07)}let g=o==="robot"?.33:.3,_=o==="robot"?.2:f[0]*.92;if([-1,1].forEach(S=>{let x=yn(r,S*_,g,0);if(o==="owl")Q("sphere",c,.06,.2,.13,S*.03,-.14,-.01,x),Q("sphere",l,.03,.08,.06,S*.04,-.27,.04,x);else if(o==="robot")Q("cyl",ue("#9aa0a6",{metal:.6,rough:.35}),.035,.22,.035,0,-.12,0,x),Q("sphere",ue(e.accent),.055,.055,.055,0,-.25,0,x);else{let y=["raccoon","hummingbird","capybara","bunny"].includes(o)?h:c;Q("capsule",y,.05,.14,.05,0,-.11,0,x),Q("sphere",o==="raccoon"?ue("#3a2a20"):c,.052,.052,.052,0,-.23,.005,x)}d.arms.push(x)}),d.handR=yn(d.arms[0],0,-.25,.05),i.prop&&(d.prop=my(i.prop,e),d.handR.add(d.prop),d.prop.rotation.x=-.2),u){let S=ue(o==="moth"?e.body:"#7fe0c8",{rough:.6}),x=ue(o==="moth"?"#f2a6c4":"#c8f2e6",{rough:.6});[-1,1].forEach(y=>{let w=yn(r,y*.1,.3,-.12);o==="moth"?(Q("sphere",S,.26,.2,.02,y*.24,.06,0,w),Q("sphere",x,.08,.08,.025,y*.3,.08,.004,w),Q("sphere",ue("#4a1a2c"),.035,.035,.03,y*.3,.08,.006,w),Q("sphere",S,.17,.14,.02,y*.17,-.16,.01,w)):(Q("sphere",S,.3,.08,.02,y*.28,.04,0,w),Q("sphere",x,.2,.05,.022,y*.2,.02,.002,w)),d.wings.push({g:w,s:y})})}if([-1,1].forEach(S=>{let x=yn(s,S*.09,.02,0);if(o==="robot")Q("cyl",ue("#9aa0a6",{metal:.6,rough:.35}),.04,.17,.04,0,-.09,0,x),Q("box",ue("#2a2d33"),.11,.05,.16,0,-.18,.03,x);else if(o==="owl"||o==="hummingbird")Q("cyl",ue(e.beak),.015,.16,.015,0,-.09,0,x),Q("sphere",ue(e.beak),.05,.02,.07,0,-.18,.03,x);else{let y={raccoon:"#5f5244",bunny:"#8f86a0",cat:"#2f2a28",capybara:"#5a3d2a",turtle:"#3d3328",moth:e.body}[o]||c;Q("capsule",ue(y),.055,.08,.055,0,-.08,0,x),Q("sphere",ue(o==="cat"?"#f4f1ea":"#4a3326",{rough:.5}),.06,.035,.085,0,-.18,.03,x)}d.legs.push(x)}),u&&o==="hummingbird"&&d.legs.forEach(S=>S.scale.setScalar(.6)),["cat","raccoon","bunny","hummingbird"].includes(o)){let S=yn(s,0,.08,-.16);if(d.tail=S,o==="bunny")Q("sphere",ue("#ffffff"),.07,.07,.07,0,0,-.03,S);else if(o==="hummingbird"){let x=Q("cone",ue(e.body),.07,.22,.025,0,-.02,-.08,S);x.rotation.x=-2.1}else{let y=ue(o==="raccoon"?"#2a211b":"#c06f22");for(let w=0;w<6;w++){let T=(o==="raccoon"?.085:.045)*(1-w*.06);Q("sphere",w%2?y:c,T,T,T*1.2,0,.03+w*.065,-.04-Math.sin(w*.45)*.12,S)}}}let m=new ct(new qr(.34,.42,40),new Nt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.015,t.add(m),d.ring=m;let p=new ct(new Xr(.26,24),new Nt({color:"#000",transparent:!0,opacity:.18,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.y=.012,t.add(p),d.shadow=p,t.scale.setScalar(1.12),new Hh(d)}var Lf=(i,e,t)=>i+(e-i)*t,Yi=(i,e,t,n)=>Lf(i,e,1-Math.exp(-t*n)),Hh=class{constructor(e){this.rig=e,this.root=e.root,this.pose="idle",this.speed=0,this.phase=Math.random()*10,this.t=Math.random()*10,this.w={walk:0,sit:0,type:0,wave:0,think:0,slump:0,celebrate:0,talk:0,read:0,sleep:0},this.blinkAt=1+Math.random()*3,this.blink=0,this.seatY=0,this.lookYaw=0,this.selected=!1,this.hoverH=e.flyer?e.species==="hummingbird"?.42:.18:0}update(e){let t=this.rig,n=this.w;this.t+=e;let s=this.t;for(let x of Object.keys(n))n[x]=Yi(n[x],(this.pose===x?1:0)||(x==="walk"?Math.min(1,this.speed/.9):0),x==="walk"?14:7,e);this.pose==="type"&&(n.sit=Yi(n.sit,1,7,e)),["type","sleep"].includes(this.pose)&&(n.sit=Yi(n.sit,1,7,e));let r=n.walk*(1-n.sit);this.phase+=e*(5+this.speed*5.5);let a=this.phase,o=t.flyer?Math.sin(s*3.2)*.04:0,c=n.celebrate*Math.max(0,Math.sin(s*7))*.16+n.wave*Math.max(0,Math.sin(s*6))*.03;t.body.position.y=Lf(this.hoverH+o,this.seatY,n.sit)+Math.abs(Math.sin(a))*.035*r*(t.flyer?0:1)+c-n.slump*.03,t.torso.scale.y=1+Math.sin(s*1.8)*.012,t.torso.rotation.x=r*(t.flyer?.35:.06)+n.type*.12+n.slump*.18-n.celebrate*.05+n.sleep*.15,t.torso.rotation.z=Math.sin(a)*.04*r,t.hips.rotation.y=Math.sin(a)*.06*r;let l=n.type*Math.sin(s*2.3)*.05+n.talk*Math.sin(s*6)*.06;t.head.rotation.x=Yi(t.head.rotation.x,n.type*.18+n.slump*.42+n.read*.25+n.think*-.12+n.sleep*.5+l,10,e),t.head.rotation.y=Yi(t.head.rotation.y,this.lookYaw+n.think*.25+n.wave*.15,5,e),t.head.rotation.z=Yi(t.head.rotation.z,n.wave*.12+n.think*.1+n.sleep*.25,6,e);let[h,u]=t.arms,d=Math.sin(a)*.55*r,f=Math.sin(s*15)*.1,g=Math.sin(s*15+1.7)*.1;h.rotation.x=-d+n.type*(-1.05+f)+n.read*-1.15+n.think*-1.9+n.talk*(-.6+Math.sin(s*4)*.25)-n.celebrate*.2,u.rotation.x=d+n.type*(-1.05+g)+n.read*-1-n.celebrate*.2,h.rotation.z=n.wave*(-2.55+Math.sin(s*11)*.35)+n.celebrate*-2.6+n.think*-.35+.05+n.slump*.08,u.rotation.z=n.celebrate*2.6-.05-n.slump*.08+n.read*.3+n.type*.12,h.rotation.z+=n.type*-.12,t.prop&&(t.prop.visible=n.type<.5&&n.sleep<.5);let[_,m]=t.legs,p=Math.sin(a)*.7*r;_.rotation.x=p-n.sit*1.45,m.rotation.x=-p-n.sit*1.45;for(let{g:x,s:y}of t.wings)if(t.species==="hummingbird")x.rotation.y=y*(.2+Math.sin(s*46)*.6)*(1-n.sit*.8),x.rotation.z=y*.2;else{let w=Math.sin(s*(r>.1?12:3))*.5+.5;x.rotation.y=y*(.15+w*.7)*(1-n.sit*.5)}if(t.species==="owl"&&(h.rotation.z+=-n.wave*.2),t.tail&&(t.tail.rotation.y=Math.sin(s*2.2)*.35+r*Math.sin(a)*.2),t.tail&&(t.tail.rotation.x=n.celebrate*-.4),t.ears&&t.ears.forEach((x,y)=>{x.rotation.x=-.1+Math.sin(s*1.3+y)*.06+n.slump*.9}),t.antennae&&t.antennae.forEach((x,y)=>{x.rotation.x=Math.sin(s*2.6+y)*.15}),t.antenna){let x=Math.sin(s*(n.type>.5?10:2))>.2;t.antenna.material.emissiveIntensity=x?1.6:.2}t.core&&(t.core.material.emissiveIntensity=.8+Math.sin(s*3)*.5+n.type*1.2),this.blinkAt-=e,this.blinkAt<=0&&(this.blink=.14,this.blinkAt=2+Math.random()*4),this.blink>0&&(this.blink-=e);let S=n.sleep>.5||this.blink>0?.12:1;for(let x of t.lids)x.scale.y=Yi(x.scale.y,S*(x.userData.base||1),30,e);t.ring.material.opacity=Yi(t.ring.material.opacity,this.selected?.85:0,10,e),t.ring.scale.setScalar(1+Math.sin(s*4)*.04),t.shadow.scale.setScalar(1-(t.body.position.y-this.seatY*n.sit)*.6)}};var gy=1.15,_y=1.5,xy=9,yy=.27,Vh=class{constructor(e,t){this.def=e,this.world=t,this.room=si(e.room),this.dept=this.room.dept,this.anim=Pf(e),this.root=this.anim.root,this.stations=t.stationsByRoom[e.room];let n=this.stations.desk;this.pos=new ze(n.wx,n.wz+1.2),this.facing=0,this.goalFacing=0,this.path=[],this.arrive=null,this.mode="idle",this.intent={kind:"unconnected",source:"none"},this.ambientEnabled=!0,this.ambientTimer=1+Math.random()*3,this.dwell=0,this.selected=!1,this.local=null,this.waveTimer=0,this.bubble=null,this.awayFromRoom=!1,this.root.position.set(this.pos.x,0,this.pos.y),t.scene.add(this.root)}get headWorld(){let e=new L;return this.anim.rig.head.getWorldPosition(e),e.y+=.42,e}get bodyWorld(){return new L(this.pos.x,(this.anim.rig.body.position.y||0)+.55,this.pos.y)}walkTo(e,t){if(!e)return;let n=this.world.nav.findPath(this.pos.x,this.pos.y,e.wx,e.wz);this.path=n||[[e.wx,e.wz]],this.arrive={station:e,onArrive:t},this.anim.pose="idle",this.mode="walk",this.returning=this.awayFromRoom&&e.room===this.def.room,this.awayFromRoom=e.room!==this.def.room}atStation(e,t=.25){return e&&Math.hypot(this.pos.x-e.wx,this.pos.y-e.wz)<t&&this.path.length===0}setIntent(e){let t=this.intent;this.intent=e,!(t.kind===e.kind&&t.taskId===e.taskId&&t.mission?.id===e.mission?.id)&&(t.kind==="running"&&e.kind==="completed"&&(this.celebrate=2.2),this.plan(!0))}setAmbient(e){this.ambientEnabled=e,!e&&this.intent.source!=="server"&&this.plan(!0)}hasDuty(){return!!this.local||["running","failed","review","mission"].includes(this.intent.kind)||this.celebrate>0}select(e){this.selected=e,this.anim.selected=e,e&&!this.hasDuty()?(this.path=[],this.arrive=null,this.mode="idle",this.waveTimer=1.6,this.isSitting||(this.anim.seatY=0,this.forceSit=!1,this.anim.pose="wave",this.goalFacing=0)):e||this.plan(!0)}receiveInstruction(){this.local={kind:"sending",until:performance.now()+12e4},this.plan(!0)}clearLocal(){this.local=null,this.plan(!0)}get isSitting(){return this.atStation(this.stations.desk,.3)&&["sit","type","sleep"].includes(this.anim.pose)}plan(e=!1){if(this.selected&&!this.hasDuty())return;let t=this.intent.kind,n=this.stations.desk;if(t==="running"||this.local?.kind==="sending")return this.goSit(n,t==="running"?"type":"think");if(t==="failed")return this.goSit(n,"slump");if(t==="review")return this.goStand(this.stations.door?{...this.stations.door,wz:this.stations.door.wz-.3}:n,"read");if(t==="mission"){let s=Ht.filter(a=>a.dept).findIndex(a=>a.dept===this.dept),r=this.world.stationsByRoom.collab;return this.goStand(r[`c${s}`]||r.c0,"talk")}if(t==="completed"&&this.celebrate)return this.goStand(this.stations.door,"celebrate");if(!this.ambientEnabled)return this.goSit(n,"sit");e&&(this.ambientTimer=.2+Math.random()*1.5)}goSit(e,t){if(this.atStation(e,.3)){this.sitDown(t);return}this.walkTo(e,()=>this.sitDown(t))}sitDown(e){this.goalFacing=0,this.anim.seatY=yy,this.anim.pose=e==="sit"?"sit":e,e==="think"||e==="slump"?(this.anim.pose=e,this.anim.w.sit=1,this.forceSit=!0):this.forceSit=!1,this.mode="station"}goStand(e,t){if(e){if(this.atStation(e)){this.standAt(e,t);return}this.walkTo(e,()=>this.standAt(e,t))}}standAt(e,t){this.anim.seatY=0,this.forceSit=!1,this.goalFacing=_n.degToRad(e.face||0),this.anim.pose=t,this.mode="station"}ambientStep(){let e=Object.keys(this.stations).filter(r=>r!=="door"),t;if(Math.random()<.07&&!this.world.someoneOnBreak){let r=this.world.stationsByRoom.rest,a=[r.coffee,r.coffee2,r.cooler,r.sofa,r.sofa2];t=a[Math.floor(Math.random()*a.length)],this.world.someoneOnBreak=this.def.id}else this.world.someoneOnBreak===this.def.id&&(this.world.someoneOnBreak=null),t=this.stations[e[Math.floor(Math.random()*e.length)]];let s={desk:"sit",board:"think",shelf:"read",plant:"idle",window:"idle",coffee:"idle",cooler:"idle",sofa:"idle"}[t.key]||(Math.random()<.5?"idle":"think");t.key==="desk"?this.goSit(t,Math.random()<.25?"sleep":"sit"):this.goStand(t,s),this.ambientTimer=6+Math.random()*8}update(e){let t=this.anim;if(this.waveTimer>0&&(this.waveTimer-=e,this.waveTimer<=0&&this.selected&&!this.hasDuty()&&(t.pose=this.isSitting?"sit":"talk")),this.celebrate>0&&(this.celebrate-=e,this.celebrate<=0&&this.plan(!0)),this.local&&performance.now()>this.local.until&&this.clearLocal(),this.path.length){let[r,a]=this.path[0],o=r-this.pos.x,c=a-this.pos.y,l=Math.hypot(o,c),h=(this.anim.rig.flyer?_y:gy)*(this.def.species==="turtle"?.75:1)*(this.awayFromRoom||this.returning?1.8:1);if(t.seatY=0,t.pose="idle",l<.06)this.path.shift();else{let u=Math.min(l,h*e);this.pos.x+=o/l*u,this.pos.y+=c/l*u,this.goalFacing=Math.atan2(o,c),t.speed=h}if(!this.path.length&&this.arrive){let u=this.arrive.onArrive,d=this.arrive.station;this.arrive=null,this.pos.set(d.wx,d.wz),t.speed=0,u?.()}}else t.speed=0;!this.selected&&!this.local&&(this.intent.source!=="server"||this.intent.kind==="idle"||this.intent.kind==="completed"&&!this.celebrate)&&this.ambientEnabled&&!this.path.length&&(this.ambientTimer-=e,this.ambientTimer<=0&&this.ambientStep());let s=this.goalFacing-this.facing;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;this.facing+=s*Math.min(1,xy*e),this.selected&&!this.hasDuty()&&!this.path.length&&!this.isSitting&&(this.goalFacing=0),this.root.position.set(this.pos.x,0,this.pos.y),this.root.rotation.y=this.facing,this.forceSit&&(t.w.sit=Math.max(t.w.sit,.98)),t.update(e)}};function Df(i){return vs.map(e=>new Vh(e,i))}var bt='-apple-system, "SF Pro Text", "Segoe UI", Roboto, sans-serif',vy={completed:"#3aa76d",running:"#3a8fd9",active:"#3a8fd9",in_progress:"#3a8fd9",processing:"#3a8fd9",pending:"#c9c2b4",failed:"#d9534f",error:"#d9534f",paused:"#e0a93b"},Gh=i=>vy[String(i||"").toLowerCase()]||"#b8b0a2";function Nf(i,e,t,n,s){i.fillStyle="#fbf9f4",i.fillRect(0,0,i.canvas.width,i.canvas.height),i.fillStyle=n,i.fillRect(0,0,e,10),i.fillStyle="#2b2620",i.font=`700 34px ${bt}`,i.textBaseline="top",i.fillText(oi(i,t,e-40),22,24),s&&(i.fillStyle="#8a8172",i.font=`500 20px ${bt}`,i.fillText(oi(i,s,e-40),22,64))}function yc(i,e,t,n){i.fillStyle="#9a9184",i.font=`500 24px ${bt}`,i.textAlign="center",i.fillText(n,e/2,t/2+10),i.textAlign="left"}function by(i,e,t){let{ctx:n,canvas:s}=i,r=s.width,a=s.height;if(Nf(n,r,`Tablero \xB7 ${e.short}`,e.accent,t.connected?t.mode==="demo"?"Simulaci\xF3n local":"Registros de misiones":"Sin sesi\xF3n"),!t.connected)return yc(n,r,a,"No consultado");let o=t.ent.snapshot,c=(o.steps||[]).filter(l=>l.department===e.dept).slice(-4).reverse();if(!c.length)return yc(n,r,a,"Sin etapas de misi\xF3n");c.forEach((l,h)=>{let u=104+h*54,d=(o.missions||[]).find(f=>f.id===l.mission_id);n.fillStyle=Gh(l.status),$i(n,22,u,14,38,6),n.fill(),n.fillStyle="#2b2620",n.font=`600 22px ${bt}`,n.fillText(oi(n,l.directive||"Etapa",r-80),48,u),n.fillStyle="#8a8172",n.font=`500 17px ${bt}`,n.fillText(oi(n,`${(d?.title||"Misi\xF3n").replace("[Simulaci\xF3n] ","")} \xB7 etapa ${l.seq}`,r-80),48,u+24)})}function My(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;if(t.fillStyle="#2f3a33",t.fillRect(0,0,s,r),t.fillStyle="#f4efe2",t.font=`700 34px ${bt}`,t.textBaseline="top",t.fillText("Misiones",24,20),t.font=`500 18px ${bt}`,t.fillStyle="#b9c4b8",t.fillText(e.connected?e.mode==="demo"?"SIMULACI\xD3N \xB7 datos locales":"pulse_missions \xB7 pulse_mission_steps":"Sin sesi\xF3n \xB7 no consultado",190,32),!e.connected)return;let a=e.ent.snapshot,o=(a.missions||[]).slice(0,3);if(!o.length){t.fillStyle="#b9c4b8",t.font=`500 26px ${bt}`,t.fillText("Sin misiones registradas",24,r/2);return}let c=(s-48)/o.length;o.forEach((l,h)=>{let u=24+h*c;t.fillStyle="#3c4a41",$i(t,u,70,c-16,r-90,14),t.fill(),t.fillStyle="#f4efe2",t.font=`700 22px ${bt}`,t.fillText(oi(t,l.title.replace("[Simulaci\xF3n] ",""),c-44),u+14,84),t.fillStyle="#c9d3c7",t.font=`500 16px ${bt}`,t.fillText(l.status,u+14,112),(a.steps||[]).filter(f=>f.mission_id===l.id).sort((f,g)=>f.seq-g.seq).slice(0,5).forEach((f,g)=>{let _=140+g*42;t.fillStyle=Gh(f.status),$i(t,u+14,_,c-44,34,9),t.fill(),t.fillStyle="#fff",t.font=`600 17px ${bt}`;let m=si(bs(f.department)?.room)?.short||f.department;t.fillText(oi(t,`${f.seq}. ${m}`,c-64),u+24,_+8)})})}function Sy(i,e,t){let{ctx:n,canvas:s}=i,r=s.width,a=s.height;if(Nf(n,r,"Traspasos",e.accent,t.connected?"Etapas registradas":"Sin sesi\xF3n"),!t.connected)return yc(n,r,a,"No consultado");let c=(t.ent.snapshot.steps||[]).filter(h=>h.status!=="pending").sort((h,u)=>Date.parse(u.finished_at||u.started_at||0)-Date.parse(h.finished_at||h.started_at||0)).slice(0,5).reverse();if(!c.length)return yc(n,r,a,"Sin traspasos");let l=(r-60)/Math.max(1,c.length);c.forEach((h,u)=>{let d=40+u*l+l/2-10,f=a*.62;u&&(n.strokeStyle="#c9c2b4",n.lineWidth=4,n.beginPath(),n.moveTo(d-l+34,f),n.lineTo(d-34,f),n.stroke()),n.fillStyle=Gh(h.status),n.beginPath(),n.arc(d,f,30,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font=`700 22px ${bt}`,n.textAlign="center",n.fillText(String(h.seq),d,f-12),n.fillStyle="#2b2620",n.font=`600 16px ${bt}`,n.fillText(oi(n,si(bs(h.department)?.room)?.short||"",l-6),d,f+40),n.textAlign="left"})}function Ey(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;t.fillStyle="#121820",t.fillRect(0,0,s,r),t.fillStyle="#e8eef5",t.font=`700 30px ${bt}`,t.textBaseline="top",t.fillText("PULSE HQ",24,20),t.fillStyle=e.mode==="demo"?"#f2c14e":e.connected?"#5fd38d":"#8a95a3",t.font=`600 18px ${bt}`,t.fillText(e.mode==="demo"?"SIMULACI\xD3N":e.connected?"Conectado":"Sin sesi\xF3n",190,28);let a=e.summary;if(!a){t.fillStyle="#8a95a3",t.font=`500 24px ${bt}`,t.fillText("Datos no consultados",24,r/2);return}[["En ejecuci\xF3n",a.running,"#5fb3ff"],["Revisiones",a.approvals,"#f2c14e"],["Misiones",a.activeMissions,"#9ad08a"],["Entregables",a.deliverables,"#c9a7ff"]].forEach(([c,l,h],u)=>{let d=24+u%2*(s/2-12),f=76+Math.floor(u/2)*((r-90)/2);t.fillStyle="#1d2632",$i(t,d,f,s/2-36,(r-110)/2,12),t.fill(),t.fillStyle=h,t.font=`700 46px ${bt}`,t.fillText(String(l),d+16,f+10),t.fillStyle="#9fb0c2",t.font=`500 18px ${bt}`,t.fillText(c,d+16,f+64)})}function Ty(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;if(t.fillStyle="#16202a",t.fillRect(0,0,s,r),t.fillStyle="#e8eef5",t.font=`700 28px ${bt}`,t.textBaseline="top",t.fillText("Junta",22,18),!e.connected){t.fillStyle="#8a95a3",t.font=`500 22px ${bt}`,t.fillText("No consultado",22,r/2);return}let o=(e.ent.snapshot.missions||[]).filter(c=>c.status==="awaiting_ceo");t.fillStyle="#f2c14e",t.font=`700 52px ${bt}`,t.fillText(String(o.length),22,64),t.fillStyle="#9fb0c2",t.font=`500 20px ${bt}`,t.fillText("misiones esperan tu decisi\xF3n",22,124),o[0]&&(t.fillStyle="#e8eef5",t.font=`600 20px ${bt}`,t.fillText(oi(t,o[0].title.replace("[Simulaci\xF3n] ",""),s-44),22,160))}function wy(i,e,t,n=0){let{ctx:s,canvas:r}=i,a=r.width,o=r.height;if(s.fillStyle="#141b22",s.fillRect(0,0,a,o),s.fillStyle="#5f6b78",s.font=`600 16px ${bt}`,s.textBaseline="top",s.fillText("Decorativo",a-110,12),e==="chatScreen")for(let c=0;c<5;c++){let l=c%2===0;s.fillStyle=l?"#2b3642":t.accent,$i(s,l?20:a*.35,40+c*38,a*.55,28,12),s.fill()}else{s.strokeStyle=t.accent,s.lineWidth=4,s.beginPath();for(let c=0;c<=a;c+=12){let l=o*.6-Math.sin(c/40+n)*30-c/a*60;c?s.lineTo(c,l):s.moveTo(c,l)}s.stroke();for(let c=0;c<8;c++){s.fillStyle=c%2?"#3a78c2":"#5fb3ff";let l=20+c*37%60;s.fillRect(20+c*(a-40)/8,o-20-l,(a-40)/8-8,l)}}}function Uf(i,e){for(let t of i){let n=si(t.room);t.kind==="missionBoard"?My(t.surface,e):t.kind==="board"&&t.boardKind==="handoffs"?Sy(t.surface,n,e):t.kind==="board"?by(t.surface,n,e):t.kind==="wallScreen"&&t.screen==="company"?Ey(t.surface,e):t.kind==="wallScreen"&&t.screen==="missions-mini"?Ty(t.surface,e):(t.kind==="chatScreen"||t.kind==="dataWall")&&(t.drawn||wy(t.surface,t.kind,n),t.drawn=!0),t.surface.commit()}}var Ay={running:{icon:"\u2699\uFE0E",text:"Trabajando",cls:"run"},review:{icon:"!",text:"Te necesita",cls:"review"},failed:{icon:"\u26A0\uFE0E",text:"Fall\xF3",cls:"fail"},mission:{icon:"\u25C6",text:"En misi\xF3n",cls:"mission"},completed:{icon:"\u2713",text:"Resultado",cls:"done"},sending:{icon:"\u2026",text:"Recibiendo encargo",cls:"local"}},vc=class{constructor(e,t,{onAgent:n,onHotspot:s}){this.el=e,this.stage=t,this.onAgent=n,this.onHotspot=s,this.tags=new Map,this.pings=new Map,e.addEventListener("click",r=>{let a=r.target.closest("[data-agent]");if(a){r.stopPropagation(),n(a.dataset.agent);return}let o=r.target.closest("[data-hot]");o&&(r.stopPropagation(),s(o.dataset.hot,o.dataset.room))})}ensureTag(e){if(this.tags.has(e.def.id))return this.tags.get(e.def.id);let t=document.createElement("button");return t.className="agent-tag",t.dataset.agent=e.def.id,t.type="button",t.setAttribute("aria-label",`${e.def.name}, ${e.room.name}`),t.innerHTML=`<span class="bubble" hidden></span><span class="name"><i></i>${e.def.name}</span>`,this.el.appendChild(t),this.tags.set(e.def.id,t),t}ensurePing(e){let t=`${e.room}:${e.key}:${e.item.wx.toFixed(1)}`;if(this.pings.has(t))return this.pings.get(t);let n=hc[e.key]||{title:e.key},s=document.createElement("button");s.className="hot-ping",s.type="button",s.dataset.hot=e.key,s.dataset.room=e.room,s.setAttribute("aria-label",n.title),s.innerHTML=`<span class="dot"></span><span class="count" hidden></span><span class="label">${n.title}</span>`,this.el.appendChild(s);let r=new Dt().setFromObject(e.obj),a=r.getCenter(new L),o={el:s,pos:new L(a.x,Math.min(r.max.y+.15,2.6),Math.min(a.z+.05,r.max.z)),h:e};return this.pings.set(t,o),o}setCounts(e){this.counts=e}update(e,t,n,{selectedId:s,labelsFor:r,sheetOpen:a}){let o=this.stage.roomIndex;for(let c of e){let l=this.ensureTag(c),h=this.stage.project(c.headWorld),d=Math.abs(c.pos.x-this.stage.camX)<6.2&&!h.behind&&h.x>-60&&h.x<this.stage.w+60&&h.y>-40&&h.y<this.stage.h+40;if(l.style.display=d?"":"none",!d)continue;l.style.transform=`translate(${h.x.toFixed(1)}px, ${h.y.toFixed(1)}px)`;let f=c.local?.kind==="sending"?"sending":c.intent.kind,g=Ay[f],_=l.firstElementChild;if(g){_.hidden=!1;let m=f==="mission"&&c.intent.mission?`Misi\xF3n \xB7 etapa ${c.intent.mission.seq}`:f==="review"&&c.intent.approvals?.length>1?`${c.intent.approvals.length} revisiones`:g.text,p=`<b>${g.icon}</b><em>${m}</em>`;_.dataset.html!==p&&(_.innerHTML=p,_.dataset.html=p,_.className=`bubble ${g.cls}`)}else _.hidden=!0;l.classList.toggle("selected",c.def.id===s),l.classList.toggle("dim",a&&c.def.id!==s),l.classList.toggle("far",c.def.room!==n&&c.def.id!==s)}for(let c of t){let l=this.ensurePing(c),h=this.counts?.[`${c.room}:${c.key}`];if(!(c.room===n&&!a&&(c.key!=="tray"||h))){l.el.style.display="none";continue}let d=this.stage.project(l.pos);l.el.style.display="",l.el.style.transform=`translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px)`;let f=this.counts?.[`${c.room}:${c.key}`],g=l.el.querySelector(".count");f?(g.hidden=!1,g.textContent=f,l.el.classList.add("has-count")):(g.hidden=!0,l.el.classList.remove("has-count"))}}};var Ff=new Set(["running","processing","in_progress"]),Ry=new Set(["pending","awaiting_ceo","waiting_approval"]);function Ti(i,e=Date.now()){if(!i||!i.source||i.source!=="server"||!i.record)return{kind:"unconnected",label:"Muestra sin conexi\xF3n",actionable:!1};let t=i.record,n=String(t.status||"").toLowerCase(),s=Date.parse(t.updated_at||t.started_at||t.created_at||"");return Ff.has(n)&&Number.isFinite(s)&&Math.abs(e-s)<=15*6e4?{kind:"running",label:"En ejecuci\xF3n verificada",actionable:!0}:Ry.has(n)?{kind:"review",label:"Pendiente de revisi\xF3n",actionable:!0}:n==="completed"?{kind:"completed",label:"Trabajo registrado",actionable:!0}:{kind:"idle",label:Ff.has(n)?"Estado sin actualizar":"Disponible",actionable:!1}}var ce=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Cy={queued:"En cola",running:"En ejecuci\xF3n",processing:"En ejecuci\xF3n",in_progress:"En ejecuci\xF3n",completed:"Completado",failed:"Fall\xF3",error:"Fall\xF3",pending:"Pendiente",paused:"En pausa",approved:"Aprobada",rejected:"Rechazada",awaiting_ceo:"Espera al CEO",reviewed:"Revisada",revising:"En revisi\xF3n",active:"Activa",cancelled:"Cancelada"},cn=i=>Cy[String(i||"").toLowerCase()]||ce(i||"Sin estado");function on(i){let e=Date.parse(i||"");if(!e)return"";let t=Math.max(0,(Date.now()-e)/1e3);return t<50?"hace un momento":t<3600?`hace ${Math.round(t/60)} min`:t<86400?`hace ${Math.round(t/3600)} h`:new Date(e).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}var Zi=(i,e="")=>`<img class="portrait ${e}" src="./assets/portraits/${i.portrait}.webp" alt="" loading="lazy">`,Wh=(i,e=360)=>{let t=String(i||"");return t.length>e?ce(t.slice(0,e))+"\u2026":ce(t)},wi=i=>i==="demo"?'<p class="note sim">Datos de la SIMULACI\xD3N local. Nada de esto existe en Supabase.</p>':"";function Of(i){return i.mode==="demo"?{cls:"sim",text:"Simulaci\xF3n"}:i.connected?{cls:"ok",text:i.ent.loading?"Actualizando\u2026":"CEO conectado"}:{cls:"off",text:"Sin sesi\xF3n"}}function Iy(i,e){if(e?.kind==="sending")return'<span class="pill local">Enviando instrucci\xF3n \xB7 local</span>';let t={running:["run","Trabajando \xB7 servidor"],review:["review","Revisi\xF3n pendiente \xB7 servidor"],failed:["fail","\xDAltimo encargo fall\xF3 \xB7 servidor"],mission:["mission","En misi\xF3n \xB7 servidor"],completed:["done","Resultado reciente \xB7 servidor"],idle:["idle","Sin encargos en curso"],unconnected:["off","Actividad no consultada"]},[n,s]=t[i.kind]||t.idle;return`<span class="pill ${n}">${s}</span>`}function Py(i,e,t){let n=i.ent.snapshot,s=(n.tasks||[]).filter(r=>r.department===e).sort((r,a)=>Date.parse(r.created_at)-Date.parse(a.created_at)).slice(-12);return s.length?s.map(r=>{let a=(n.deliverables||[]).filter(h=>h.task_id===r.id),o=(n.approvals||[]).filter(h=>h.task_id===r.id),c=Ti({source:"server",record:r}).kind==="running",l;return c||["queued","running","processing","in_progress"].includes(r.status)?l=`<div class="msg agent working">${Zi(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> ${c?"Trabajando en ello":"Estado sin actualizar"}</p><small>Registro del servidor \xB7 ${cn(r.status)} \xB7 ${on(r.updated_at||r.created_at)}</small></div></div>`:r.status==="completed"?l=`<div class="msg agent">${Zi(t,"xs")}<div><p>${Wh(r.result)}</p><div class="chips">${a.map(h=>`<button class="chip file" data-action="file" data-id="${ce(h.id)}">\u2913 ${ce(h.filename||h.title)}</button>`).join("")}<button class="chip" data-action="task" data-id="${ce(r.id)}">Ver completo</button></div>${o.filter(h=>h.status==="pending").map(h=>Sc(h)).join("")}<small>${on(r.updated_at||r.created_at)}${o.length&&!o.some(h=>h.status==="pending")?" \xB7 revisi\xF3n "+cn(o[0].status).toLowerCase():""}</small></div></div>`:l=`<div class="msg agent error">${Zi(t,"xs")}<div><p><b>No se complet\xF3.</b> ${Wh(r.error||"Error sin detalle",220)}</p><div class="chips"><button class="chip" data-action="retry" data-id="${ce(r.id)}">Reintentar (nuevo encargo)</button><button class="chip" data-action="task" data-id="${ce(r.id)}">Detalle</button></div><small>${cn(r.status)} \xB7 ${on(r.updated_at||r.created_at)}</small></div></div>`,`<div class="msg ceo"><div><p>${ce(r.instruction)}</p><small>T\xFA \xB7 ${on(r.created_at)}</small></div></div>${l}`}).join(""):`<div class="empty"><p>Todav\xEDa no hay encargos registrados con ${ce(t.name)}.</p><p class="muted">Escribe una instrucci\xF3n abajo: se registrar\xE1 como tarea y la ejecutar\xE1 el motor existente.</p></div>`}function Sc(i){return`<div class="approval"><div><b>${ce(i.title||"Revisi\xF3n del CEO")}</b>${i.description?`<small>${ce(i.description)}</small>`:""}</div><div class="row"><button class="btn ghost" data-action="decide" data-choice="rejected" data-id="${ce(i.id)}">Rechazar</button><button class="btn ok" data-action="decide" data-choice="approved" data-id="${ce(i.id)}">Aprobar</button></div></div>`}function Bf(i,e){let t=i.ent.snapshot,n=(t.tasks||[]).filter(h=>h.department===e),s=(t.approvals||[]).filter(h=>h.department===e&&h.status==="pending"),r=(t.steps||[]).filter(h=>h.department===e).slice(-6).reverse(),a=n.filter(h=>["queued","running","processing","in_progress"].includes(h.status)),o=n.filter(h=>!a.includes(h)).slice(0,6),c=(t.deliverables||[]).filter(h=>n.some(u=>u.id===h.task_id)).slice(0,6),l=(h,u,d)=>`<section class="sec"><h4>${h}</h4>${u||`<p class="muted">${d}</p>`}</section>`;return l("Te necesita",s.map(Sc).join(""),"Sin revisiones pendientes.")+l("En curso",a.map(h=>`<button class="row-item" data-action="task" data-id="${ce(h.id)}"><span class="ic run">\u2699\uFE0E</span><span><b>${ce(h.instruction)}</b><small>${cn(h.status)} \xB7 ${on(h.updated_at||h.created_at)}</small></span></button>`).join(""),"Nada en ejecuci\xF3n seg\xFAn el servidor.")+l("Misiones",r.map(h=>`<button class="row-item" data-action="mission" data-id="${ce(h.mission_id)}"><span class="ic mission">\u25C6</span><span><b>${ce(h.directive||"Etapa de misi\xF3n")}</b><small>${ce((t.missions||[]).find(u=>u.id===h.mission_id)?.title||"Misi\xF3n")} \xB7 etapa ${ce(h.seq)} \xB7 ${cn(h.status)}</small></span></button>`).join(""),"Sin etapas de misi\xF3n asignadas.")+l("Recientes",o.map(h=>`<button class="row-item" data-action="task" data-id="${ce(h.id)}"><span class="ic ${h.status==="completed"?"done":"fail"}">${h.status==="completed"?"\u2713":"\u26A0\uFE0E"}</span><span><b>${ce(h.instruction)}</b><small>${cn(h.status)} \xB7 ${on(h.updated_at||h.created_at)}</small></span></button>`).join(""),"Sin trabajos anteriores.")+l("Entregables",c.map(Xh).join(""),"Sin archivos generados.")}var Xh=i=>`<button class="row-item" data-action="file" data-id="${ce(i.id)}"><span class="ic file">\u2913</span><span><b>${ce(i.title||i.filename)}</b><small>${ce(i.filename||"")} \xB7 ${on(i.created_at)}</small></span></button>`;function Ki(i){return`<div class="empty locked"><p><b>Actividad no consultada.</b></p><p class="muted">Inicia sesi\xF3n como CEO para ver encargos reales${i?` y hablar con ${ce(i)}`:""}. Tambi\xE9n puedes abrir la simulaci\xF3n local para probar el recorrido sin tocar datos.</p><div class="row"><button class="btn" data-action="access">Acceso del CEO</button><button class="btn ghost" data-action="demo">Probar simulaci\xF3n</button></div></div>`}function kf(i,e,t="chat"){let n=si(e.room),s=n.dept,r=i.agentsById[e.id],a=(i.ent?.snapshot.roles||[]).find(u=>u.department===s),o=i.sending[s],c=`<header class="sheet-head agent">${Zi(e,"lg")}<div class="who"><small>${ce(n.name)}</small><h3>${ce(e.name)}</h3><p>${ce(a?.professional_title||e.role)}</p>${Iy(r.intent,r.local)}</div><button class="close" data-action="close" aria-label="Volver a la oficina">\xD7</button></header>
  <div class="tabs" role="tablist">${[["chat","Conversaci\xF3n"],["work","Trabajo"],["profile","Perfil"]].map(([u,d])=>`<button role="tab" aria-selected="${t===u}" class="${t===u?"on":""}" data-action="tab" data-tab="${u}">${d}</button>`).join("")}</div>`,l,h="";return i.connected?t==="chat"?(l=`<div class="thread">${Py(i,s,e)}</div>${wi(i.mode)}`,h=`<form class="composer" data-action="send"><textarea name="instruction" rows="1" maxlength="2000" placeholder="Instrucci\xF3n para ${ce(e.name)}\u2026" ${o?"disabled":""}></textarea><button class="send" ${o?"disabled":""} aria-label="Enviar instrucci\xF3n">${o?'<span class="spin"></span>':"\u2191"}</button></form><p class="composer-note">${o?"Esperando al motor <code>pulse-run</code>\u2026 el estado se actualiza desde el servidor.":"Se registra como tarea y la ejecuta <code>pulse-run</code>. Cada instrucci\xF3n es independiente: no hereda la conversaci\xF3n anterior."}</p>`):t==="work"?l=Bf(i,s)+wi(i.mode):l=`<section class="sec contract">${a?`<h4>Contrato profesional</h4><dl><dt>Puesto</dt><dd>${ce(a.professional_title)}</dd><dt>Prop\xF3sito</dt><dd>${ce(a.purpose)}</dd><dt>Entregable</dt><dd>${ce(a.output_contract)}</dd><dt>Criterios de aceptaci\xF3n</dt><dd>${ce(a.acceptance_criteria)}</dd>${a.handoff_to?`<dt>Traspasa a</dt><dd>${ce(a.handoff_to)}</dd>`:""}</dl>`:'<p class="muted">No hay contrato registrado para este departamento.</p>'}<p class="note">${ce(e.name)} es el personaje visual de ${ce(n.name)}. El nombre y la especie son provisionales y no identifican a un agente individual del backend.</p></section>`:l=Ki(e.name),{html:c+`<div class="sheet-body">${l}</div>`+h,size:"agent"}}function zf(i,e){let t=i.ent.snapshot,n=(t.tasks||[]).find(c=>c.id===e);if(!n)return{html:'<header class="sheet-head"><div class="who"><h3>Encargo</h3></div><button class="close" data-action="back">\u2039</button></header><div class="sheet-body"><p class="muted">El registro ya no est\xE1 en la instant\xE1nea actual.</p></div>',size:"mid"};let s=bs(n.department),r=(t.deliverables||[]).filter(c=>c.task_id===n.id),a=(t.approvals||[]).filter(c=>c.task_id===n.id),o=Array.isArray(n.sources)?n.sources:[];return{html:`<header class="sheet-head">${s?Zi(s,"md"):""}<div class="who"><small>${ce(n.department)}</small><h3>Encargo</h3><span class="pill ${n.status==="completed"?"done":n.status==="failed"?"fail":"run"}">${cn(n.status)}</span></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Instrucci\xF3n</h4><p>${ce(n.instruction)}</p><small class="muted">Creado ${on(n.created_at)} \xB7 actualizado ${on(n.updated_at)}</small></section>
  ${n.result?`<section class="sec"><h4>Resultado</h4><div class="result">${ce(n.result)}</div></section>`:""}
  ${n.error?`<section class="sec"><h4>Error</h4><p class="err">${ce(n.error)}</p><button class="btn" data-action="retry" data-id="${ce(n.id)}">Reintentar como nuevo encargo</button></section>`:""}
  ${o.length?`<section class="sec"><h4>Fuentes</h4>${o.slice(0,8).map(c=>`<p class="src">${ce(typeof c=="string"?c:c.title||c.url||JSON.stringify(c))}</p>`).join("")}</section>`:""}
  ${r.length?`<section class="sec"><h4>Entregables</h4>${r.map(Xh).join("")}</section>`:""}
  ${a.length?`<section class="sec"><h4>Revisi\xF3n</h4>${a.map(c=>c.status==="pending"?Sc(c):`<p>${ce(c.title)} \xB7 <b>${cn(c.status)}</b></p>`).join("")}</section>`:""}${wi(i.mode)}</div>`,size:"tall"}}function Hf(i,e){let t=i.ent.snapshot,n=(t.missions||[]).find(a=>a.id===e);if(!n)return{html:'<header class="sheet-head"><div class="who"><h3>Misi\xF3n</h3></div><button class="close" data-action="back">\u2039</button></header><div class="sheet-body"><p class="muted">Misi\xF3n no disponible.</p></div>',size:"mid"};let s=(t.steps||[]).filter(a=>a.mission_id===e).sort((a,o)=>a.seq-o.seq),r=[["pause","Pausar"],["resume","Reanudar"],["retry","Reintentar"],["revise","Pedir revisi\xF3n"]];return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Misi\xF3n</small><h3>${ce(n.title)}</h3><span class="pill mission">${cn(n.status)}</span></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Objetivo</h4><p>${ce(n.objective||"")}</p></section>
  <section class="sec"><h4>Traspasos entre departamentos</h4><ol class="timeline">${s.map(a=>{let o=bs(a.department);return`<li class="${ce(String(a.status).toLowerCase())}"><button class="tl-dept" data-action="agent" data-id="${o?o.id:""}">${o?Zi(o,"xs"):""}<span>${ce(a.department)}</span></button><p><b>Etapa ${ce(a.seq)}:</b> ${ce(a.directive||"")}</p>${a.result?`<p class="muted">${Wh(a.result,220)}</p>`:""}${a.error?`<p class="err">${ce(a.error)}</p>`:""}<small>${cn(a.status)}${a.finished_at?" \xB7 "+on(a.finished_at):a.started_at?" \xB7 iniciada "+on(a.started_at):""}</small>${a.task_id?`<button class="chip" data-action="task" data-id="${ce(a.task_id)}">Ver aportaci\xF3n</button>`:""}</li>`}).join("")||'<li><p class="muted">Sin etapas registradas.</p></li>'}</ol></section>
  <section class="sec"><h4>Control del CEO</h4><div class="row wrap">${r.map(([a,o])=>`<button class="btn ghost" data-action="mission-op" data-op="${a}" data-id="${ce(n.id)}">${o}</button>`).join("")}</div><p class="muted small">Cada acci\xF3n llama a <code>pulse-mission-control</code>; el estado mostrado es el que devuelva el servidor.</p></section>${wi(i.mode)}</div>`,size:"tall"}}function $h(i){let e=i.ent.snapshot,t=(e.missions||[]).map(n=>{let s=(e.steps||[]).filter(a=>a.mission_id===n.id),r=s.filter(a=>a.status==="completed").length;return`<button class="row-item" data-action="mission" data-id="${ce(n.id)}"><span class="ic mission">\u25C6</span><span><b>${ce(n.title)}</b><small>${cn(n.status)} \xB7 ${r}/${s.length} etapas \xB7 ${on(n.updated_at||n.created_at)}</small></span><span class="dots">${s.sort((a,o)=>a.seq-o.seq).map(a=>`<i class="${ce(String(a.status).toLowerCase())}"></i>`).join("")}</span></button>`}).join("");return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Gesti\xF3n de misiones</small><h3>Misiones</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`${Ly()}<section class="sec"><h4>Registradas</h4>${t||'<p class="muted">Sin misiones registradas.</p>'}</section>${wi(i.mode)}`:Ki()}</div>`,size:"tall"}}function Ly(){return'<form class="sec mission-form" data-action="create-mission"><h4>Convocar misi\xF3n</h4><input name="title" maxlength="120" placeholder="T\xEDtulo (5\u2013120 caracteres)" required><textarea name="objective" rows="3" maxlength="1500" placeholder="Objetivo: qu\xE9 debe lograr y qu\xE9 esperas recibir (20\u20131500 caracteres)" required></textarea><button class="btn">Crear misi\xF3n</button><p class="muted small">El servidor asigna etapas y departamentos. Puede consumir cuota de IA.</p></form>'}function bc(i,e=null){let t=i.ent.snapshot,n=(t.approvals||[]).filter(r=>r.status==="pending"&&(!e||r.department===e)),s=(t.approvals||[]).filter(r=>r.status!=="pending"&&(!e||r.department===e)).slice(0,6);return{html:`<header class="sheet-head"><div class="ic-lg review">!</div><div class="who"><small>${e?ce(e):"Oficina del CEO"}</small><h3>Revisiones</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec"><h4>Esperan tu decisi\xF3n</h4>${n.map(r=>`<div class="appr-wrap"><small class="muted">${ce(r.department)} \xB7 ${on(r.created_at)}</small>${Sc(r)}${r.task_id?`<button class="chip" data-action="task" data-id="${ce(r.task_id)}">Ver trabajo</button>`:""}</div>`).join("")||'<p class="muted">No hay revisiones pendientes.</p>'}</section><section class="sec"><h4>Decididas</h4>${s.map(r=>`<p class="small">${ce(r.title)} \xB7 <b>${cn(r.status)}</b></p>`).join("")||'<p class="muted">Sin historial.</p>'}</section>${wi(i.mode)}`:Ki()}</div>`,size:"tall"}}function Mc(i,e=null){let t=i.ent.snapshot,n=(t.deliverables||[]).filter(s=>!e||(t.tasks||[]).some(r=>r.id===s.task_id&&r.department===e));return{html:`<header class="sheet-head"><div class="ic-lg file">\u2913</div><div class="who"><small>${e?ce(e):"Biblioteca"}</small><h3>Entregables</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec">${n.slice(0,40).map(Xh).join("")||'<p class="muted">Sin entregables registrados.</p>'}</section><p class="muted small">Las descargas usan una URL firmada de Storage v\xE1lida 2 minutos.</p>${wi(i.mode)}`:Ki()}</div>`,size:"tall"}}function qh(i,e){let t=(n,s)=>`<div class="kpi"><b>${n}</b><small>${s}</small></div>`;return{html:`<header class="sheet-head"><div class="ic-lg">\u25A6</div><div class="who"><small>Oficina del CEO</small><h3>Estado de la empresa</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${e?`<div class="kpis">${t(e.running,"en ejecuci\xF3n")}${t(e.approvals,"revisiones")}${t(e.activeMissions,"misiones activas")}${t(e.completed,"encargos completados")}${t(e.failed,"fallidos")}${t(e.deliverables,"entregables")}</div><p class="muted small">Recuentos de la \xFAltima instant\xE1nea (${on(e.loadedAt)}), limitada a los registros m\xE1s recientes.</p><div class="row wrap"><button class="btn ghost" data-action="open-approvals">Revisiones</button><button class="btn ghost" data-action="open-missions">Misiones</button><button class="btn ghost" data-action="open-files">Entregables</button><button class="btn ghost" data-action="refresh">Actualizar</button></div>${wi(i.mode)}`:Ki()}</div>`,size:"mid"}}function Vf(i){return{html:`<header class="sheet-head"><div class="ic-lg">\u2302</div><div class="who"><small>PULSE HQ</small><h3>Recorrer la oficina</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><div class="dir-grid">${Ht.map((e,t)=>{let n=vs.find(a=>a.room===e.id),r=(n&&i.agentsById[n.id])?.intent.kind;return`<button class="dir-card ${t===i.roomIndex?"here":""}" data-action="go" data-index="${t}" style="--accent:${e.accent}"><span class="n">${String(t+1).padStart(2,"0")}</span>${n?Zi(n,"sm"):`<span class="space-ic">${e.short.slice(0,1)}</span>`}<b>${ce(e.short)}</b>${r&&!["idle","unconnected"].includes(r)?`<i class="st ${r}"></i>`:""}</button>`}).join("")}</div></div>`,size:"mid"}}function Gf(i,e="email",t=""){return i.mode==="demo"?{html:'<header class="sheet-head"><div class="ic-lg sim">\u25B6</div><div class="who"><small>Modo actual</small><h3>Simulaci\xF3n local</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>Est\xE1s viendo datos inventados <b>solo para probar la interfaz</b>. No hay conexi\xF3n con Supabase ni con Gemini y nada se guarda.</p><p class="muted">Prueba: toca un agente \u2192 Conversaci\xF3n \u2192 escribe una instrucci\xF3n. Incluye la palabra \xABpropuesta\xBB para generar una revisi\xF3n, o \xABfalla\xBB para ver un error.</p><div class="row"><button class="btn" data-action="exit-demo">Salir de la simulaci\xF3n</button></div></div>',size:"mid"}:i.connected?{html:`<header class="sheet-head"><div class="ic-lg ok">\u2713</div><div class="who"><small>Sesi\xF3n</small><h3>CEO conectado</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>${ce(i.ent.user?.email||"")}</p><p class="muted">Los estados de los agentes provienen de <code>pulse_tasks</code>, <code>pulse_approvals</code> y <code>pulse_mission_steps</code>. Se consultan cada 10 s y cada 2.5 s mientras un encargo est\xE1 en curso.</p>${i.ent.lastError?`<p class="err">\xDAltima consulta fall\xF3: ${ce(i.ent.lastError)}</p>`:""}<div class="row"><button class="btn ghost" data-action="refresh">Actualizar ahora</button><button class="btn ghost" data-action="logout">Cerrar sesi\xF3n</button></div></div>`,size:"mid"}:{html:`<header class="sheet-head"><div class="ic-lg">\u25CE</div><div class="who"><small>PULSE HQ</small><h3>Acceso del CEO</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${e==="email"?`<form class="sec" data-action="login"><h4>Enlace de acceso</h4><input type="email" name="email" autocomplete="email" placeholder="Correo del CEO" required value="${ce(t)}"><button class="btn">Enviar enlace</button><p class="muted small">Solo funciona con la cuenta autorizada (no crea usuarios).</p></form>`:`<section class="sec"><p>Revisa tu correo (${ce(t)}).</p><p class="muted small">Si el enlace abre la app anterior en lugar de esta vista, <b>no lo abras</b>: mant\xE9n pulsado el enlace, c\xF3pialo y p\xE9galo aqu\xED.</p><form data-action="verify-link"><input name="link" placeholder="Pega el enlace del correo" autocomplete="off"><button class="btn">Entrar con el enlace</button></form><form data-action="verify-code"><input name="code" inputmode="numeric" maxlength="8" placeholder="o el c\xF3digo de 6 d\xEDgitos, si aparece"><button class="btn ghost">Entrar con c\xF3digo</button></form><button class="chip" data-action="access-reset">Usar otro correo</button></section>`}<section class="sec"><h4>Sin conexi\xF3n</h4><p class="muted small">Puedes recorrer la oficina sin sesi\xF3n: los agentes pasean de forma ambiental y no se muestra actividad real.</p><button class="btn ghost" data-action="demo">Probar en modo simulaci\xF3n</button></section></div>`,size:"mid"}}function Wf(i,e,t){let n=si(t),s=hc[e]||{title:e,hint:""},r=n?.dept;if(e==="desk")return{html:`<header class="sheet-head"><div class="ic-lg">\u25AD</div><div class="who"><small>${ce(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?Bf(i,r):Ki()}<div class="row"><button class="btn" data-action="agent-room" data-room="${ce(t)}">Hablar con el agente</button></div></div>`,size:"tall"};if(e==="tray")return bc(i,r);if(e==="shelf")return Mc(i,r);if(e==="board"){let a=i.ent?.snapshot||{},o=(a.steps||[]).filter(l=>l.department===r),c=[...new Set(o.map(l=>l.mission_id))];return{html:`<header class="sheet-head"><div class="ic-lg mission">\u25C6</div><div class="who"><small>${ce(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec"><h4>Misiones en las que participa</h4>${c.map(l=>{let h=(a.missions||[]).find(d=>d.id===l),u=o.filter(d=>d.mission_id===l);return`<button class="row-item" data-action="mission" data-id="${ce(l)}"><span class="ic mission">\u25C6</span><span><b>${ce(h?.title||"Misi\xF3n")}</b><small>${u.map(d=>`etapa ${d.seq}: ${cn(d.status)}`).join(" \xB7 ")}</small></span></button>`}).join("")||'<p class="muted">Este departamento no participa en misiones registradas.</p>'}</section>`:Ki()}</div>`,size:"mid"}}if(e==="ceo-tray")return bc(i);if(e==="ceo-shelf")return Mc(i);if(e==="ceo-desk"||e==="ceo-tv")return qh(i,i.summary);if(e==="board-table"||e==="mission-table"||e==="mission-board")return $h(i);if(e==="collab-board"||e==="collab-table"){let a=i.ent?.snapshot||{},o=(a.steps||[]).filter(c=>c.status==="completed"||["running","active","in_progress","processing"].includes(c.status)).sort((c,l)=>Date.parse(l.finished_at||l.started_at||0)-Date.parse(c.finished_at||c.started_at||0)).slice(0,12);return{html:`<header class="sheet-head"><div class="ic-lg">\u21C4</div><div class="who"><small>Colaboraci\xF3n</small><h3>Traspasos recientes</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec">${o.map(c=>{let l=bs(c.department),h=(a.missions||[]).find(u=>u.id===c.mission_id);return`<button class="row-item" data-action="mission" data-id="${ce(c.mission_id)}">${l?Zi(l,"xs"):""}<span><b>${ce(c.department)} \xB7 etapa ${ce(c.seq)}</b><small>${ce(h?.title||"Misi\xF3n")} \xB7 ${cn(c.status)}</small></span></button>`}).join("")||'<p class="muted">Sin traspasos registrados.</p>'}</section><p class="muted small">Los agentes vienen a esta sala solo cuando su etapa de misi\xF3n figura en curso en el servidor.</p>${wi(i.mode)}`:Ki()}</div>`,size:"mid"}}return e==="legacy-door"||e==="studio-cam"?{html:`<header class="sheet-head"><div class="ic-lg">\u2197</div><div class="who"><small>${ce(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>CRM, automatizaciones, PULSE STUDIO, estudio creativo y exportaci\xF3n PNG/ZIP siguen en el centro anterior. Su integraci\xF3n dentro de la oficina est\xE1 pendiente.</p><a class="btn" href="https://bryanstl1.github.io/pulse-hq/" target="_blank" rel="noopener">Abrir centro anterior \u2197</a></div>`,size:"mid"}:e==="coffee"?{html:`<header class="sheet-head"><div class="ic-lg">\u2615\uFE0E</div><div class="who"><small>Descanso</small><h3>Movimiento ambiental</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>Cuando un agente no tiene actividad registrada puede pasear por su sala o venir por caf\xE9. Es decorativo y nunca se muestra como trabajo.</p><label class="toggle"><input type="checkbox" data-action="ambient" ${i.ambient?"checked":""}><span>Paseo ambiental ${i.ambient?"activado":"desactivado"}</span></label></div>`,size:"mid"}:{html:`<header class="sheet-head"><div class="who"><h3>${ce(s.title)}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>${ce(s.hint)}</p></div>`,size:"mid"}}var Ny=new Set(["running","processing","in_progress","active"]),Xf=new Set(["failed","error"]),Uy=30*6e4,Fy=24*36e5,Oy=30*6e4,Ec=i=>Date.parse(i?.updated_at||i?.finished_at||i?.started_at||i?.created_at||"")||0;function $f(i,e,{connected:t,now:n=Date.now()}={}){let s={};for(let r of e){if(!t){s[r]={kind:"unconnected",label:"Actividad no consultada",source:"none",approvals:[],mission:null};continue}let a=(i.tasks||[]).filter(_=>_.department===r).sort((_,m)=>Ec(m)-Ec(_)),o=(i.approvals||[]).filter(_=>_.department===r&&_.status==="pending"),c=(i.steps||[]).filter(_=>_.department===r),l=a.find(_=>Ti({source:"server",record:_},n).kind==="running"),h=c.find(_=>Ny.has(String(_.status).toLowerCase())&&!_.finished_at&&n-(Date.parse(_.started_at||"")||0)<=Oy),u=h?(i.missions||[]).find(_=>_.id===h.mission_id):null,d=h?{id:h.mission_id,title:u?.title||"Misi\xF3n registrada",seq:h.seq,directive:h.directive}:null,f=a[0],g={source:"server",approvals:o,mission:d};l?s[r]={...g,kind:"running",label:"En ejecuci\xF3n (servidor)",taskId:l.id}:o.length?s[r]={...g,kind:"review",label:o.length===1?"1 revisi\xF3n te espera":`${o.length} revisiones te esperan`,taskId:o[0].task_id}:d?s[r]={...g,kind:"mission",label:`Misi\xF3n \xB7 etapa ${d.seq}`}:f&&Xf.has(String(f.status).toLowerCase())&&n-Ec(f)<=Fy?s[r]={...g,kind:"failed",label:"El \xFAltimo encargo fall\xF3",taskId:f.id,error:f.error||"Error sin detalle"}:f&&f.status==="completed"&&n-Ec(f)<=Uy?s[r]={...g,kind:"completed",label:"Resultado listo",taskId:f.id}:s[r]={...g,kind:"idle",label:a.length?"Sin encargos en curso":"A\xFAn sin encargos",source:"server"}}return s}function qf(i,e){if(!e)return null;let t=i.tasks||[],n=s=>t.filter(r=>r.status===s).length;return{tasks:t.length,completed:n("completed"),failed:t.filter(s=>Xf.has(s.status)).length,running:t.filter(s=>Ti({source:"server",record:s}).kind==="running").length,approvals:(i.approvals||[]).filter(s=>s.status==="pending").length,missions:(i.missions||[]).length,activeMissions:(i.missions||[]).filter(s=>!["completed","reviewed","cancelled"].includes(s.status)).length,deliverables:(i.deliverables||[]).length,loadedAt:i.loadedAt}}var By="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.min.js";function Zf(){return globalThis.supabase?.createClient?Promise.resolve(globalThis.supabase.createClient(fa,Yf)):new Promise((i,e)=>{let t=document.createElement("script");t.src=By,t.async=!0,t.crossOrigin="anonymous",t.onload=()=>globalThis.supabase?.createClient?i(globalThis.supabase.createClient(fa,Yf)):e(new Error("Cliente de Supabase no disponible.")),t.onerror=()=>e(new Error("No se pudo cargar el cliente de Supabase (sin conexi\xF3n con jsDelivr).")),document.head.appendChild(t)})}var fa="https://erluuujhgpreuuaskjwo.supabase.co",Yf="sb_publishable_R3-FWhFftf_aidZUq6U9jA_WOYQJS9q",Zh=["Direcci\xF3n estrat\xE9gica","Marketing y crecimiento","Producci\xF3n de contenido","Ventas y patrocinios","Relaciones p\xFAblicas y alianzas","Eventos y experiencias","Comunidad","Inteligencia de mercado","Finanzas y administraci\xF3n","Tecnolog\xEDa y automatizaci\xF3n"],Yh=()=>({roles:[],tasks:[],approvals:[],missions:[],steps:[],deliverables:[],loadedAt:null}),Ts=i=>{throw new Error(i?.message||String(i||"Error del servidor"))};function Kh(i,{mode:e="live"}={}){if(!i)throw new Error("Cliente de datos no disponible.");let t=null,n=Yh(),s=null,r="",a=()=>{},o=()=>a({user:t,snapshot:n,loading:!!s,lastError:r}),c=T=>(T.error&&Ts(T.error),T.data||[]);async function l(){if(!t)return n;if(s)return s;let T=t.id;s=(async()=>{let[A,C,b,M,P,O]=await Promise.all([i.from("pulse_agent_roles").select("department,professional_title,purpose,output_contract,acceptance_criteria,handoff_to,active").eq("active",!0),i.from("pulse_tasks").select("id,department,instruction,status,result,sources,error,created_at,updated_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(100),i.from("pulse_approvals").select("id,task_id,department,title,description,status,created_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(80),i.from("pulse_missions").select("id,title,objective,status,created_at,updated_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(20),i.from("pulse_mission_steps").select("id,mission_id,seq,department,directive,status,result,task_id,error,started_at,finished_at").eq("user_id",T).order("seq",{ascending:!0}).limit(220),i.from("pulse_deliverables").select("id,task_id,title,filename,storage_path,mime_type,created_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(150)]),B={roles:c(A),tasks:c(C),approvals:c(b),missions:c(M),steps:c(P),deliverables:c(O),loadedAt:new Date().toISOString()};return t?.id===T&&(n=B,r=""),n})(),o();try{return await s}catch(A){throw r=String(A.message||A),A}finally{s=null,o()}}async function h(T){a=T||(()=>{});let{data:A,error:C}=await i.auth.getUser();C&&C.name!=="AuthSessionMissingError"?t=null:t=A?.user||null,o(),i.auth.onAuthStateChange((b,M)=>{let P=t?.id;t=M?.user||null,P!==t?.id&&(n=Yh()),o(),t&&queueMicrotask(()=>l().catch(()=>o()))}),t&&await l()}async function u(T){let{error:A}=await i.auth.signInWithOtp({email:T,options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:!1}});A&&Ts(A)}async function d(T,A){let C=String(A||"").replace(/\D/g,"");if(C.length<6)throw new Error("Escribe el c\xF3digo de 6 d\xEDgitos.");let{error:b}=await i.auth.verifyOtp({email:T,token:C,type:"email"});b&&Ts(b)}async function f(T){let A;try{A=new URL(String(T||"").trim())}catch{throw new Error("Pega el enlace completo del correo.")}if(A.origin!==fa)throw new Error("El enlace no pertenece al proyecto PULSE HQ.");let C=A.searchParams.get("token")||A.searchParams.get("token_hash"),b=A.searchParams.get("type")||"magiclink";if(!C)throw new Error("El enlace no contiene un token de acceso.");let{error:M}=await i.auth.verifyOtp({token_hash:C,type:b==="signup"?"signup":"magiclink"});M&&Ts(M)}async function g(){let{error:T}=await i.auth.signOut();T&&Ts(T),t=null,n=Yh(),o()}async function _(T,A){if(!t)throw new Error("Inicia sesi\xF3n como CEO para ejecutar esta acci\xF3n.");let{data:C,error:b}=await i.functions.invoke(T,{body:A});if(b){let M;try{M=(await b.context?.json())?.error}catch{}throw new Error(M||b.message)}if(!C?.ok)throw new Error(C?.error||"La funci\xF3n no confirm\xF3 la operaci\xF3n.");return await l(),C}async function m(T,A){if(!Zh.includes(T))throw new Error("Departamento no disponible.");let C=A.trim();if(C.length<5||C.length>2e3)throw new Error("Escribe entre 5 y 2000 caracteres.");return _("pulse-run",{department:T,instruction:C})}async function p(T,A){let C=T.trim(),b=A.trim();if(C.length<5||C.length>120||b.length<20||b.length>1500)throw new Error("T\xEDtulo de 5 a 120 caracteres y objetivo de 20 a 1500.");return _("pulse-mission-control",{action:"create",title:C,objective:b})}async function S(T,A){if(!["pause","resume","retry","revise"].includes(T))throw new Error("Acci\xF3n de misi\xF3n inv\xE1lida.");return _("pulse-mission-control",{action:T,missionId:A})}async function x(T,A){if(!t||!["approved","rejected"].includes(A))throw new Error("Decisi\xF3n inv\xE1lida.");let{data:C,error:b}=await i.from("pulse_approvals").update({status:A}).eq("id",T).eq("user_id",t.id).eq("status","pending").select("id");if(b&&Ts(b),!C?.length)throw new Error("La revisi\xF3n ya cambi\xF3 o no est\xE1 disponible.");return await l(),C[0]}async function y(T){if(!t)throw new Error("Inicia sesi\xF3n para descargar.");let A=n.deliverables.find(P=>P.id===T);if(!A)throw new Error("Archivo no disponible en la sesi\xF3n actual.");if(e==="demo"&&i.demoFileUrl)return i.demoFileUrl(A);let{data:C,error:b}=await i.storage.from("pulse-deliverables").createSignedUrl(A.storage_path,120);if(b&&Ts(b),!C?.signedUrl)throw new Error("No se pudo autorizar la descarga.");let M=new URL(C.signedUrl,fa);if(M.origin!==fa)throw new Error("Destino de archivo inesperado.");return M.href}function w(T){let A=n.roles.find(B=>B.department===T),C=n.tasks.filter(B=>B.department===T),b=n.approvals.filter(B=>B.department===T&&B.status==="pending"),M=n.steps.filter(B=>B.department===T),P=C.find(B=>B.status==="running"&&Ti({source:"server",record:B}).kind==="running"),O=P?Ti({source:"server",record:P}):b.length?Ti({source:"server",record:{status:"pending"}}):{kind:"idle",label:"Disponible",actionable:!1};return{role:A,tasks:C,approvals:b,steps:M,activity:O}}return{mode:e,init:h,refresh:l,requestLogin:u,verifyCode:d,verifyLink:f,signOut:g,runTask:m,createMission:p,missionAction:S,decideApproval:x,fileUrl:y,departmentData:w,get user(){return t},get snapshot(){return n},get loading(){return!!s},get lastError(){return r}}}var ln=()=>globalThis.crypto?.randomUUID?.()||`id-${Math.random().toString(36).slice(2)}-${Date.now()}`,_t=(i=0)=>new Date(Date.now()+i).toISOString(),Tc={"Direcci\xF3n estrat\xE9gica":"Prioric\xE9 tres l\xEDneas de trabajo y propuse un calendario de revisi\xF3n semanal.","Marketing y crecimiento":"Propuesta de campa\xF1a en tres fases con mensajes por audiencia y m\xE9tricas de seguimiento.","Producci\xF3n de contenido":"Guion de 45 segundos con gancho, desarrollo y llamada a la acci\xF3n, m\xE1s lista de tomas.","Ventas y patrocinios":"Borrador de propuesta de patrocinio con niveles, beneficios y siguiente paso sugerido.","Relaciones p\xFAblicas y alianzas":"Lista de criterios para alianzas y un mensaje de primer contacto para revisi\xF3n.","Eventos y experiencias":"Esquema de experiencia con recorrido del asistente, riesgos y checklist log\xEDstico.",Comunidad:"Plan de conversaci\xF3n semanal con temas, formatos y respuesta a preguntas frecuentes.","Inteligencia de mercado":"Resumen de tendencias con tres oportunidades y la evidencia que habr\xEDa que verificar.","Finanzas y administraci\xF3n":"Presupuesto por partidas con supuestos expl\xEDcitos y escenario conservador.","Tecnolog\xEDa y automatizaci\xF3n":"Dise\xF1o de una automatizaci\xF3n en cuatro pasos con puntos de control manual."};function ky(i){let e=(l,h,u,d,f={})=>({id:ln(),user_id:i.id,department:l,instruction:d,status:h,result:h==="completed"?`[Simulaci\xF3n] ${Tc[l]}`:null,sources:null,error:h==="failed"?"[Simulaci\xF3n] L\xEDmite del proveedor de IA (429). Reintenta m\xE1s tarde.":null,created_at:_t(-u*6e4-4e4),updated_at:_t(-u*6e4),...f}),t=[e("Marketing y crecimiento","running",.3,"Preparar la campa\xF1a de lanzamiento de noviembre"),e("Producci\xF3n de contenido","completed",6,"Escribir el guion del reel de presentaci\xF3n"),e("Ventas y patrocinios","completed",50,"Preparar propuesta para patrocinador de bebidas"),e("Tecnolog\xEDa y automatizaci\xF3n","failed",20,"Automatizar el resumen semanal de m\xE9tricas"),e("Direcci\xF3n estrat\xE9gica","completed",180,"Definir prioridades del trimestre")],n=[{id:ln(),user_id:i.id,task_id:t[2].id,department:"Ventas y patrocinios",title:"[Simulaci\xF3n] Propuesta de patrocinio lista para enviar",description:"Revisa niveles y precios antes de compartirla.",status:"pending",created_at:_t(-49*6e4)}],s=ln(),r=[{id:s,user_id:i.id,title:"[Simulaci\xF3n] Lanzamiento de temporada",objective:"Coordinar investigaci\xF3n, estrategia y propuesta comercial para el lanzamiento.",status:"running",created_at:_t(-8*6e4),updated_at:_t(-6e4)}],a=[{id:ln(),user_id:i.id,mission_id:s,seq:1,department:"Inteligencia de mercado",directive:"Reunir tendencias y competencia relevantes",status:"running",result:null,task_id:null,error:null,started_at:_t(-9e4),finished_at:null},{id:ln(),user_id:i.id,mission_id:s,seq:2,department:"Marketing y crecimiento",directive:"Convertir hallazgos en estrategia de campa\xF1a",status:"pending",result:null,task_id:null,error:null,started_at:null,finished_at:null},{id:ln(),user_id:i.id,mission_id:s,seq:3,department:"Ventas y patrocinios",directive:"Traducir la estrategia en propuesta para patrocinadores",status:"pending",result:null,task_id:null,error:null,started_at:null,finished_at:null}],o=[{id:ln(),user_id:i.id,task_id:t[1].id,title:"[Simulaci\xF3n] Guion del reel",filename:"guion-reel-simulacion.md",storage_path:"demo/guion.md",mime_type:"text/markdown",created_at:_t(-5*6e4)}],c=Object.keys(Tc).map(l=>({department:l,professional_title:`[Simulaci\xF3n] Responsable de ${l.toLowerCase()}`,purpose:"Contrato profesional simulado para pruebas de interfaz.",output_contract:"Entregable en texto estructurado.",acceptance_criteria:"Claro, verificable y listo para revisi\xF3n del CEO.",handoff_to:null,active:!0}));return{pulse_tasks:t,pulse_approvals:n,pulse_missions:r,pulse_mission_steps:a,pulse_deliverables:o,pulse_agent_roles:c}}function Kf({speed:i=1}={}){let e={id:"demo-ceo",email:"ceo@simulacion.local"},t=ky(e),n=new Set,s=new Set,r=(u,d)=>{let f=setTimeout(()=>{s.delete(f),d()},u/i);return s.add(f),f};r(16e3,()=>a(t.pulse_tasks[0])),o(t.pulse_missions[0].id,14e3);function a(u,{approval:d=!1,file:f=!0}={}){u.status==="running"&&(u.status="completed",u.updated_at=_t(),u.result=`[Simulaci\xF3n] ${Tc[u.department]}

Encargo: \xAB${u.instruction}\xBB.`,f&&t.pulse_deliverables.unshift({id:ln(),user_id:e.id,task_id:u.id,title:`[Simulaci\xF3n] ${u.instruction.slice(0,60)}`,filename:"entregable-simulacion.md",storage_path:`demo/${u.id}.md`,mime_type:"text/markdown",created_at:_t()}),d&&t.pulse_approvals.unshift({id:ln(),user_id:e.id,task_id:u.id,department:u.department,title:`[Simulaci\xF3n] Revisar: ${u.instruction.slice(0,50)}`,description:"Propuesta lista para tu decisi\xF3n.",status:"pending",created_at:_t()}))}function o(u,d){let f=()=>{let g=t.pulse_missions.find(S=>S.id===u);if(!g||g.status==="paused")return;let _=t.pulse_mission_steps.filter(S=>S.mission_id===u).sort((S,x)=>S.seq-x.seq),m=_.find(S=>S.status==="running");if(m){let S={id:ln(),user_id:e.id,department:m.department,instruction:m.directive,status:"completed",result:`[Simulaci\xF3n] Aportaci\xF3n de ${m.department}: ${Tc[m.department]}`,error:null,sources:null,created_at:m.started_at,updated_at:_t()};t.pulse_tasks.unshift(S),Object.assign(m,{status:"completed",finished_at:_t(),task_id:S.id,result:S.result})}let p=_.find(S=>S.status==="pending");p?(Object.assign(p,{status:"running",started_at:_t()}),g.status="running",g.updated_at=_t(),r(32e3,f)):(g.status="awaiting_ceo",g.updated_at=_t(),t.pulse_approvals.unshift({id:ln(),user_id:e.id,task_id:_.at(-1)?.task_id||null,department:"Direcci\xF3n estrat\xE9gica",title:`[Simulaci\xF3n] Propuesta consolidada: ${g.title.replace("[Simulaci\xF3n] ","")}`,description:"Integra las aportaciones de cada etapa.",status:"pending",created_at:_t()}))};r(d,f)}function c(u){let d=[],f=null,g=null,_=null,m={select(){return m},eq(p,S){return d.push([p,S]),m},order(p,{ascending:S=!0}={}){return f=[p,S],m},limit(p){return g=p,m},update(p){return _=p,m},then(p,S){try{let x=(t[u]||[]).filter(y=>d.every(([w,T])=>y[w]===T));if(_)return x.forEach(y=>Object.assign(y,_,{updated_at:_t()})),Promise.resolve({data:x.map(y=>({id:y.id})),error:null}).then(p,S);if(f){let[y,w]=f;x=[...x].sort((T,A)=>(T[y]>A[y]?1:T[y]<A[y]?-1:0)*(w?1:-1))}return g&&(x=x.slice(0,g)),Promise.resolve({data:x.map(y=>({...y})),error:null}).then(p,S)}catch(x){return Promise.resolve({data:null,error:{message:String(x)}}).then(p,S)}}};return m}async function l(u,{body:d}){if(u==="pulse-run"){let f={id:ln(),user_id:e.id,department:d.department,instruction:d.instruction,status:"queued",result:null,sources:null,error:null,created_at:_t(),updated_at:_t()};t.pulse_tasks.unshift(f),await new Promise(_=>r(1400,_)),f.status="running",f.updated_at=_t();let g=/\bfall(a|o)\b|error de prueba/i.test(d.instruction);return await new Promise(_=>r(9e3,_)),g?(f.status="failed",f.updated_at=_t(),f.error="[Simulaci\xF3n] El motor devolvi\xF3 un error de prueba.",{data:{ok:!1,error:f.error},error:null}):(a(f,{approval:/propuesta|aprob|revis/i.test(d.instruction)||d.department==="Ventas y patrocinios"}),{data:{ok:!0,taskId:f.id},error:null})}if(u==="pulse-mission-control"){if(d.action==="create"){let g=ln();return t.pulse_missions.unshift({id:g,user_id:e.id,title:`[Simulaci\xF3n] ${d.title}`,objective:d.objective,status:"running",created_at:_t(),updated_at:_t()}),Hy(d.objective).forEach((m,p)=>t.pulse_mission_steps.push({id:ln(),user_id:e.id,mission_id:g,seq:p+1,department:m,directive:zy[m]||"Aportar al objetivo de la misi\xF3n",status:p===0?"running":"pending",result:null,task_id:null,error:null,started_at:p===0?_t():null,finished_at:null})),o(g,3e4),{data:{ok:!0,missionId:g},error:null}}let f=t.pulse_missions.find(g=>g.id===d.missionId);return f?(d.action==="pause"&&(f.status="paused"),(d.action==="resume"||d.action==="retry")&&(f.status="running",o(f.id,6e3)),d.action==="revise"&&(f.status="revising"),f.updated_at=_t(),{data:{ok:!0},error:null}):{data:{ok:!1,error:"Misi\xF3n no encontrada"},error:null}}return{data:null,error:{message:`Funci\xF3n ${u} no simulada.`}}}return{simulated:!0,auth:{async getUser(){return{data:{user:e},error:null}},onAuthStateChange(u){return n.add(u),{data:{subscription:{unsubscribe(){n.delete(u)}}}}},async signInWithOtp(){return{error:null}},async verifyOtp(){return{error:null}},async signOut(){return{error:null}}},from:c,functions:{invoke:l},storage:{from:()=>({async createSignedUrl(){return{data:null,error:{message:"Simulaci\xF3n: usa demoFileUrl"}}}})},demoFileUrl(u){let d=t.pulse_tasks.find(g=>g.id===u.task_id),f=`# ${u.title}

Archivo generado por la SIMULACI\xD3N de PULSE HQ. No es un entregable real.

${d?.result||""}
`;return URL.createObjectURL(new Blob([f],{type:"text/markdown;charset=utf-8"}))},dispose(){s.forEach(clearTimeout),s.clear()}}}var zy={"Inteligencia de mercado":"Reunir evidencia y tendencias relevantes","Marketing y crecimiento":"Dise\xF1ar la estrategia y los mensajes","Producci\xF3n de contenido":"Proponer piezas y guiones","Ventas y patrocinios":"Preparar la propuesta comercial","Finanzas y administraci\xF3n":"Estimar presupuesto y riesgos","Eventos y experiencias":"Dise\xF1ar la experiencia y su log\xEDstica",Comunidad:"Plan de participaci\xF3n de la audiencia","Relaciones p\xFAblicas y alianzas":"Identificar aliados y mensajes","Tecnolog\xEDa y automatizaci\xF3n":"Definir la automatizaci\xF3n necesaria","Direcci\xF3n estrat\xE9gica":"Consolidar y priorizar la propuesta"};function Hy(i){let e=i.toLowerCase(),t=["Inteligencia de mercado"];return/evento|festival|experiencia/.test(e)&&t.push("Eventos y experiencias"),/contenido|video|reel|guion/.test(e)&&t.push("Producci\xF3n de contenido"),/patrocin|venta|cliente/.test(e)&&t.push("Ventas y patrocinios"),/presupuesto|costo|finanz/.test(e)&&t.push("Finanzas y administraci\xF3n"),t.length<3&&t.push("Marketing y crecimiento"),t.push("Direcci\xF3n estrat\xE9gica"),[...new Set(t)].slice(0,5)}var wt=i=>document.querySelector(i),eu=new URLSearchParams(location.search),z={ent:null,mode:"none",connected:!1,ambient:!0,sending:{},summary:null,agents:[],agentsById:{},roomIndex:1,selected:null,sheet:null,history:[],accessEmail:"",accessStep:"email",snapshotKey:""};window.__pulse=z;var tu=wt("#loader .bar i"),ut=new uc(wt("#stage"),{roomCount:Ht.length,onTap:qy,onRoomChange:i=>{z.roomIndex=i,pa(),z.sheet&&z.sheet.type!=="agent"&&!z.sheet.pinned&&hn(),history.replaceState(null,"",`#${Ht[i].id}`)}});await Sf("./assets/furniture",i=>{tu.style.width=`${Math.round(i*80)}%`},{bundle:globalThis.PULSE_FURNITURE_BUNDLE||null});var Cn=If(ut.scene);z.stage=ut;z.office=Cn;var Vy={scene:ut.scene,nav:Cn.nav,stationsByRoom:Cn.stationsByRoom,someoneOnBreak:null};z.agents=Df(Vy);z.agents.forEach(i=>{z.agentsById[i.def.id]=i});var ip=new vc(wt("#overlay"),ut,{onAgent:i=>Rc(i),onHotspot:(i,e)=>iu(i,e)}),Jf=location.hash.slice(1),sp=th(Jf)>=0?th(Jf):1;ut.goToRoom(sp,{instant:!0});z.roomIndex=sp;z.agents.forEach(i=>i.plan(!0));Xy();pa();tu.style.width="90%";async function rp(){try{let i=await Zf();z.ent=Kh(i,{mode:"live"}),z.mode="live",await z.ent.init(op)}catch(i){z.ent=null,z.mode="none",vn(`Sin conexi\xF3n con Supabase: ${i.message}`,"warn")}bn()}async function ap(){z.ent?.client?.dispose?.();let i=Kf({speed:Number(eu.get("demoSpeed"))||1});z.ent=Kh(i,{mode:"demo"}),z.ent.client=i,z.mode="demo",await z.ent.init(op),bn(),pa()}function op(){bn()}var jf=null;function nu(){if(clearTimeout(jf),!z.connected)return;let i=Object.values(z.sending).some(Boolean)||z.agents.some(e=>e.intent.kind==="running"||e.intent.kind==="mission");jf=setTimeout(async()=>{try{await z.ent.refresh()}catch{}bn(),nu()},i?2500:1e4)}function bn(){z.connected=!!z.ent?.user;let i=z.ent?.snapshot||{tasks:[],approvals:[],steps:[],missions:[],deliverables:[],roles:[]},e=$f(i,Zh,{connected:z.connected});z.summary=qf(i,z.connected);for(let s of z.agents){let r=e[s.dept];s.setIntent(r),Wy(s.def.room,r.kind),Bh(Cn.trays[s.def.room],r.approvals?.length||0)}Bh(Cn.trays.ceo,z.summary?.approvals||0);let t={};for(let s of z.agents){let r=e[s.dept].approvals?.length;r&&(t[`${s.def.room}:tray`]=r)}z.summary?.approvals&&(t["ceo:ceo-tray"]=z.summary.approvals),z.summary?.activeMissions&&(t["missions:mission-board"]=z.summary.activeMissions),ip.setCounts(t);let n=`${z.mode}|${z.connected}|${i.loadedAt}`;n!==z.snapshotKey&&(z.snapshotKey=n,Uf(Cn.surfaces,z),z.sheet&&Gn(!0)),pa(),nu()}var Gy={running:"#3cd17a",review:"#f2b33d",failed:"#e5484d",mission:"#4a90e2",completed:"#7ed6a5"};function Wy(i,e){let t=Cn.lamps[i];if(!t)return;let n=Gy[e];t.userData.kind=e,n?(t.emissive.set(n),t.color.set(n),t.emissiveIntensity=1.2):(t.emissive.set("#000"),t.color.set("#b9b4aa"),t.emissiveIntensity=0)}function Xy(){wt("#dots").innerHTML=Ht.map((i,e)=>`<button data-go="${e}" aria-label="${i.name}" style="--accent:${i.accent}"></button>`).join("")}function pa(){let i=Ht[z.roomIndex];wt("#room-n").textContent=`${String(z.roomIndex+1).padStart(2,"0")}/${Ht.length}`,wt("#room-name").textContent=i.name,wt("#room-sub").textContent=i.sub,wt("#room-card").style.setProperty("--accent",i.accent),document.querySelectorAll("#dots button").forEach((a,o)=>a.classList.toggle("on",o===z.roomIndex));let e=Of(z),t=wt("#session");t.className=`session ${e.cls}`,t.querySelector("span").textContent=e.text,wt("#sim-banner").hidden=z.mode!=="demo";let n=wt("#legend");z.mode==="demo"?n.textContent="Simulaci\xF3n: datos inventados solo para probar la interfaz":z.connected?n.textContent=z.ambient?"Movimiento ambiental activo cuando no hay encargos":"Solo actividad registrada":n.textContent=z.ambient?"Sin sesi\xF3n \xB7 los agentes solo pasean (ambiente)":"Sin sesi\xF3n \xB7 actividad no consultada";let s=z.summary?.approvals||0,r=wt('#dock [data-dock="approvals"] .badge');r.hidden=!s,r.textContent=s,wt("#prev").disabled=z.roomIndex===0,wt("#next").disabled=z.roomIndex===Ht.length-1}function $y(i){return Math.max(0,Math.min(Ht.length-1,Math.round(i.pos.x/pt)))}function Rc(i,e="chat"){let t=z.agentsById[i];if(!t)return;z.selected&&z.selected!==t&&z.selected.select(!1),z.selected=t,t.select(!0);let n=$y(t);n!==z.roomIndex&&ut.goToRoom(n),un({type:"agent",id:i,tab:e})}var Vn={obj:null,t:0};function iu(i,e){let t=Cn.hotspots.find(n=>n.key===i&&n.room===e);if(t&&(Vn.obj=t.obj,Vn.t=0,Vn.base=t.obj.scale.clone()),i==="coffee"||i==="legacy-door"||i==="studio-cam"){un({type:"hot",key:i,room:e,focus:t});return}un({type:"hot",key:i,room:e,focus:t})}function qy({x:i,y:e,ndc:t}){let n=null,s=56;for(let a of z.agents)for(let o of[a.bodyWorld,a.headWorld]){let c=ut.project(o),l=Math.hypot(c.x-i,c.y-e);l<s&&(s=l,n=a)}if(n){Rc(n.def.id);return}let r=ut.raycast(t,Cn.hotspots.map(a=>a.obj));if(r.length){let a=r[0].object;for(;a&&!a.userData.item?.hot;)a=a.parent;if(a){iu(a.userData.item.hot,a.userData.item.room);return}}z.sheet&&hn()}var Mt=wt("#sheet");function un(i,{push:e=!1}={}){e&&z.sheet?z.history.push(z.sheet):e||(z.history=[]),z.sheet=i,Gn()}function hn(){z.sheet=null,z.history=[],Mt.classList.remove("open","mid","tall","agent"),Mt.setAttribute("aria-hidden","true"),document.body.classList.remove("sheet-open"),z.selected&&(z.selected.select(!1),z.selected=null),ut.focus({})}function Yy(){let i=z.history.pop();i?(z.sheet=i,Gn()):hn()}function Gn(i=!1){let e=z.sheet;if(!e)return;let t={},n=null;i&&Mt.querySelectorAll("input[name],textarea[name]").forEach(h=>{h.type!=="checkbox"&&h.value&&(t[h.name]=h.value),h===document.activeElement&&(n=h.name)});let s=Mt.querySelector(".sheet-body"),r=s&&s.scrollTop+s.clientHeight>=s.scrollHeight-40,a=i&&s&&!r?s.scrollTop:null,o=z.ent||{snapshot:{}},c={...z,ent:o},l;e.type==="agent"?l=kf(c,z.agentsById[e.id].def,e.tab):e.type==="task"?l=zf(c,e.id):e.type==="mission"?l=Hf(c,e.id):e.type==="missions"?l=$h(c):e.type==="approvals"?l=bc(c,e.dept):e.type==="files"?l=Mc(c,e.dept):e.type==="company"?l=qh(c,z.summary):e.type==="directory"?l=Vf(c):e.type==="access"?l=Gf(c,z.accessStep,z.accessEmail):e.type==="hot"&&(l=Wf(c,e.key,e.room)),Mt.querySelector(".sheet-inner").innerHTML=l.html,Mt.classList.add("open"),Mt.classList.toggle("tall",l.size==="tall"),Mt.classList.toggle("agent",l.size==="agent"),Mt.classList.toggle("mid",l.size==="mid"),document.body.classList.toggle("sheet-open",!0),Mt.setAttribute("aria-hidden","false");for(let[h,u]of Object.entries(t)){let d=Mt.querySelector(`[name="${h}"]`);d&&d.type!=="checkbox"&&(d.value=u)}if(n&&Mt.querySelector(`[name="${n}"]`)?.focus({preventScroll:!0}),Qh(),a!=null){let h=Mt.querySelector(".sheet-body");h&&(h.scrollTop=a)}else if(e.type==="agent"&&e.tab==="chat"||r){let h=Mt.querySelector(".sheet-body");h&&(h.scrollTop=h.scrollHeight)}requestAnimationFrame(()=>{let h=Mt.getBoundingClientRect().height;if(e.type==="agent"){let u=z.agentsById[e.id];ut.focus({x:u.pos.x,z:u.pos.y,sheetPx:h,zoom:1.5})}else if(e.focus){let u=new Dt().setFromObject(e.focus.obj).getCenter(new L);ut.focus({x:u.x,z:u.z,sheetPx:h,zoom:1.45})}else ut.focus({sheetPx:h*.6})})}(()=>{let i=Mt.querySelector(".handle"),e=null;i.addEventListener("pointerdown",n=>{e=n.clientY,i.setPointerCapture(n.pointerId)}),i.addEventListener("pointermove",n=>{if(e==null)return;let s=Math.max(0,n.clientY-e);Mt.style.transform=`translateY(${s}px)`});let t=n=>{if(e==null)return;let s=n.clientY-e;e=null,Mt.style.transform="",s>70?hn():s<4};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t)})();var cp=i=>`${i.dataset.action}:${i.dataset.id}:${i.dataset.choice||i.dataset.op||""}`;function Qf(i){let e=cp(i);return z.armed&&z.armed.key===e&&performance.now()<z.armed.until?(z.armed=null,!0):(z.armed={key:e,until:performance.now()+3500},Qh(),setTimeout(()=>{z.armed?.key===e&&performance.now()>=z.armed.until&&(z.armed=null,Qh())},3600),!1)}function Qh(){Mt.querySelectorAll('[data-action="decide"],[data-action="mission-op"]').forEach(i=>{let e=z.armed&&z.armed.key===cp(i)&&performance.now()<z.armed.until;e&&!i.dataset.label&&(i.dataset.label=i.textContent,i.textContent="\xBFConfirmar?",i.classList.add("armed")),!e&&i.dataset.label&&(i.textContent=i.dataset.label,delete i.dataset.label,i.classList.remove("armed"))})}Mt.addEventListener("click",async i=>{let e=i.target.closest("[data-action]");if(!e||e.tagName==="FORM")return;let t=e.dataset.action,n=e.dataset.id;if(t!=="ambient"){i.preventDefault();try{if(t==="close")hn();else if(t==="back")Yy();else if(t==="tab")z.sheet.tab=e.dataset.tab,Gn();else if(t==="task")un({type:"task",id:n},{push:!0});else if(t==="mission")un({type:"mission",id:n},{push:!0});else if(t==="agent")n&&(hn(),Rc(n));else if(t==="agent-room"){let s=vs.find(r=>r.room===e.dataset.room);s&&(hn(),Rc(s.id))}else if(t==="go")hn(),ut.goToRoom(+e.dataset.index);else if(t==="file")await Zy(n);else if(t==="decide"){if(!Qf(e))return;e.disabled=!0,await z.ent.decideApproval(n,e.dataset.choice),vn(`${e.dataset.choice==="approved"?"Aprobaci\xF3n":"Rechazo"} registrado${z.mode==="demo"?" en la simulaci\xF3n":" en el servidor"}`,"ok"),bn(),Gn(!0)}else if(t==="retry"){let s=z.ent.snapshot.tasks.find(r=>r.id===n);s&&await lp(s.department,s.instruction)}else if(t==="mission-op"){if(!Qf(e))return;e.disabled=!0,await z.ent.missionAction(e.dataset.op,n),vn("Acci\xF3n enviada a pulse-mission-control","ok"),bn()}else t==="access"?un({type:"access"}):t==="demo"?(hn(),await ap(),vn("Simulaci\xF3n local activada \xB7 datos inventados","warn")):t==="exit-demo"?(z.ent?.client?.dispose?.(),z.ent=null,z.mode="none",hn(),history.replaceState(null,"",location.pathname+location.hash),await rp()):t==="access-reset"?(z.accessStep="email",Gn()):t==="logout"?(await z.ent.signOut(),hn(),bn()):t==="refresh"?(await z.ent?.refresh(),bn(),vn("Instant\xE1nea actualizada","ok")):t==="open-approvals"?un({type:"approvals"},{push:!0}):t==="open-missions"?un({type:"missions"},{push:!0}):t==="open-files"&&un({type:"files"},{push:!0})}catch(s){vn(s.message||String(s),"error"),e.disabled=!1}}});Mt.addEventListener("change",i=>{i.target.dataset.action==="ambient"&&(z.ambient=i.target.checked,z.agents.forEach(e=>e.setAmbient(z.ambient)),Gn(!0),pa())});Mt.addEventListener("submit",async i=>{i.preventDefault();let e=i.target,t=e.dataset.action,n=Object.fromEntries(new FormData(e)),s=e.querySelector("button");try{if(t==="send"){let r=z.agentsById[z.sheet.id];await lp(r.dept,n.instruction||"")}else t==="create-mission"?(s.disabled=!0,await z.ent.createMission(n.title||"",n.objective||""),vn(z.mode==="demo"?"Misi\xF3n creada en la simulaci\xF3n":"Misi\xF3n registrada por pulse-mission-control","ok"),bn(),Gn()):t==="login"?(s.disabled=!0,z.accessEmail=n.email,await z.ent.requestLogin(n.email),z.accessStep="sent",Gn()):t==="verify-link"?(s.disabled=!0,await z.ent.verifyLink(n.link),vn("Sesi\xF3n iniciada","ok"),hn(),await z.ent.refresh(),bn()):t==="verify-code"&&(s.disabled=!0,await z.ent.verifyCode(z.accessEmail,n.code),vn("Sesi\xF3n iniciada","ok"),hn(),await z.ent.refresh(),bn())}catch(r){vn(r.message||String(r),"error"),s&&(s.disabled=!1)}});Mt.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&i.target.name==="instruction"&&(i.preventDefault(),i.target.form.requestSubmit())});Mt.addEventListener("input",i=>{i.target.name==="instruction"&&(i.target.style.height="auto",i.target.style.height=Math.min(120,i.target.scrollHeight)+"px")});async function lp(i,e){let t=String(e).trim();if(t.length<5){vn("Escribe al menos 5 caracteres.","warn");return}if(z.sending[i])return;let n=z.agents.find(s=>s.dept===i);z.sending[i]=!0,n.receiveInstruction(),Gn(),nu();try{await z.ent.runTask(i,t),vn(z.mode==="demo"?`${n.def.name}: resultado simulado listo`:`${n.def.name}: el servidor registr\xF3 el resultado`,"ok")}catch(s){vn(`No se complet\xF3: ${s.message}`,"error");try{await z.ent.refresh()}catch{}}finally{z.sending[i]=!1,n.clearLocal(),bn(),z.sheet&&Gn(!0)}}async function Zy(i){let e=window.open("","_blank");try{let t=await z.ent.fileUrl(i);e?e.location.href=t:location.href=t}catch(t){throw e?.close(),t}}wt("#dock").addEventListener("click",i=>{let e=i.target.closest("[data-dock]");if(!e)return;let t=e.dataset.dock;t==="office"&&un({type:"directory"}),t==="missions"&&un({type:"missions"}),t==="approvals"&&un({type:"approvals"}),t==="files"&&un({type:"files"})});wt("#dots").addEventListener("click",i=>{let e=i.target.closest("[data-go]");e&&ut.goToRoom(+e.dataset.go)});wt("#prev").addEventListener("click",()=>ut.goToRoom(z.roomIndex-1));wt("#next").addEventListener("click",()=>ut.goToRoom(z.roomIndex+1));wt("#session").addEventListener("click",()=>un({type:"access"}));wt("#legend").addEventListener("click",()=>iu("coffee","rest"));window.addEventListener("keydown",i=>{i.target.closest("input,textarea")||(i.key==="ArrowRight"&&ut.goToRoom(z.roomIndex+1),i.key==="ArrowLeft"&&ut.goToRoom(z.roomIndex-1),i.key==="Escape"&&hn())});document.addEventListener("visibilitychange",()=>{!document.hidden&&z.connected&&z.ent.refresh().then(bn).catch(()=>{})});var ep;function vn(i,e="info"){let t=wt("#toast");t.textContent=i,t.className=`toast show ${e}`,clearTimeout(ep),ep=setTimeout(()=>t.classList.remove("show"),e==="error"?6e3:3200)}var Jh=performance.now(),jh=16,wc=0,Ac=0,tp=[Math.min(devicePixelRatio||1,2),1.5,1.25,1],hp=eu.get("capture")==="1",np=performance.now();function up(i){if(requestAnimationFrame(up),hp)return;if(document.hidden){Jh=i;return}let e=Math.min(.1,(i-Jh)/1e3);Jh=i,dp(e,i)}window.__advance=(i=1,e=1/30)=>{for(let t=0;t<i;t++)np+=e*1e3,dp(e,np,t===i-1)};function dp(i,e,t=!0){let n=e/1e3;ut.update(i);for(let s of z.agents)s.update(i);for(let s of Cn.animated)Math.abs(ut.camX-Ht.findIndex(r=>r.id===s.room)*pt)>pt*1.6||s.fn(n,s.room==="technology"&&z.agentsById["a-technology"].intent.kind==="running");for(let s of Object.values(Cn.lamps))(s.userData.kind==="running"||s.userData.kind==="review")&&(s.emissiveIntensity=.7+Math.sin(n*5)*.6);if(Vn.obj){Vn.t+=i;let s=Vn.t,r=1+Math.sin(Math.min(1,s/.45)*Math.PI)*.07;Vn.obj.scale.copy(Vn.base).multiplyScalar(r),s>.45&&(Vn.obj.scale.copy(Vn.base),Vn.obj=null)}if(z.sheet?.type==="agent"){let s=z.agentsById[z.sheet.id];ut.focusGoalOffX=Math.max(-2.2,Math.min(2.2,s.pos.x-ut.goalX)),ut.focusGoalZ=s.pos.y}t&&(ip.update(z.agents,Cn.hotspots,Ht[z.roomIndex].id,{selectedId:z.selected?.def.id,sheetOpen:!!z.sheet}),ut.render(),!hp&&(jh=jh*.95+i*1e3*.05,jh>25?(wc+=i,wc>2&&Ac<tp.length-1&&(Ac++,ut.renderer.setPixelRatio(tp[Ac]),ut.resize(),wc=0,Ac>=2&&(ut.renderer.shadowMap.enabled=!0))):wc=0))}requestAnimationFrame(up);eu.get("demo")==="1"||globalThis.PULSE_PREVIEW==="demo"?await ap():rp();tu.style.width="100%";setTimeout(()=>{wt("#loader").classList.add("done"),document.title="PULSE HQ",document.body.dataset.ready="1"},250);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
