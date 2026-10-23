var sd=0,El=1,rd=2;var Tl=1,fo=2,si=3,kn=0,sn=1,An=2,Ei=0,os=1,wl=2,Al=3,Rl=4,ad=5,Fi=100,od=101,cd=102,ld=103,hd=104,ud=200,dd=201,fd=202,pd=203,qa=204,Ya=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=211,bd=212,Md=213,Sd=214,po=0,mo=1,go=2,cs=3,_o=4,xo=5,vo=6,yo=7,Cl=0,Ed=1,Td=2,Ti=0,wd=1,Ad=2,Rd=3,Cd=4,Id=5,Pd=6,bo=7,dl="attached",Ld="detached",Il=300,ms=301,gs=302,Mo=303,So=304,aa=306,jn=1e3,Yn=1001,Xs=1002,$t=1003,Eo=1004;var _s=1005;var nn=1006,rr=1007;var Vn=1008;var Gn=1009,Pl=1010,Ll=1011,ar=1012,To=1013,Gi=1014,Rn=1015,or=1016,wo=1017,Ao=1018,cr=1020,Dl=35902,Ul=35899,Nl=1021,Fl=1022,xn=1023,$s=1026,lr=1027,Ro=1028,Co=1029,Ol=1030,Io=1031;var Po=1033,oa=33776,ca=33777,la=33778,ha=33779,Lo=35840,Do=35841,Uo=35842,No=35843,Fo=36196,Oo=37492,Bo=37496,ko=37808,zo=37809,Ho=37810,Vo=37811,Go=37812,Wo=37813,Xo=37814,$o=37815,qo=37816,Yo=37817,Zo=37818,jo=37819,Ko=37820,Jo=37821,Qo=36492,ec=36494,tc=36495,nc=36283,ic=36284,sc=36285,rc=36286;var ls=2300,hs=2301,$a=2302,fl=2400,pl=2401,ml=2402,Dd=2500;var Bl=0,ua=1,hr=2,Ud=3200,Nd=3201;var kl=0,Fd=1,wi="",Tt="srgb",qt="srgb-linear",Cr="linear",ct="srgb";var as=7680;var gl=519,Od=512,Bd=513,kd=514,zl=515,zd=516,Hd=517,Vd=518,Gd=519,Za=35044;var Hl="300 es",On=2e3,Ir=2001;var vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,Ar=Math.PI/180,us=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Vl(i,e){return(i%e+e)%e}function Fp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Op(i,e,t){return i!==e?(t-i)/(e-i):0}function Rr(i,e,t){return(1-t)*i+t*e}function Bp(i,e,t,n){return Rr(i,e,1-Math.exp(-t*n))}function kp(i,e=1){return e-Math.abs(Vl(i,e*2)-e)}function zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gp(i,e){return i+Math.random()*(e-i)}function Wp(i){return i*(.5-Math.random())}function Xp(i){i!==void 0&&(yu=i);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $p(i){return i*Ar}function qp(i){return i*us}function Yp(i){return(i&i-1)===0&&i!==0}function Zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vn={DEG2RAD:Ar,RAD2DEG:us,generateUUID:Bn,clamp:Ze,euclideanModulo:Vl,mapLinear:Fp,inverseLerp:Op,lerp:Rr,damp:Bp,pingpong:kp,smoothstep:zp,smootherstep:Hp,randInt:Vp,randFloat:Gp,randFloatSpread:Wp,seededRandom:Xp,degToRad:$p,radToDeg:qp,isPowerOfTwo:Yp,ceilPowerOfTwo:Zp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:Kp,normalize:ot,denormalize:Fn},ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let E=Math.sqrt(_),A=Math.atan2(E,p*y);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}let v=o*y;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new L,bu=new wn,We=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],E=s[2],A=s[5],T=s[8];return r[0]=a*x+o*y+c*E,r[3]=a*m+o*_+c*A,r[6]=a*p+o*v+c*T,r[1]=l*x+h*y+u*E,r[4]=l*m+h*_+u*A,r[7]=l*p+h*v+u*T,r[2]=d*x+f*y+g*E,r[5]=d*m+f*_+g*A,r[8]=d*p+f*v+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zc.makeScale(e,t)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zc=new We;function Gl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){let i=qs("canvas");return i.style.display="block",i}var Mu={};function Ys(i){i in Mu||(Mu[i]=!0,console.warn(i))}function Xd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Su=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let i={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wi?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qt]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Su,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Su,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var Je=Jp();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,ja=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=qs("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qp=0,Zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hc(s[a].image)):r.push(Hc(s[a]))}else r=Hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var em=0,Vc=new L,Dt=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=nn,a=Vn,o=xn,c=Gn,l=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Bn(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Il;Dt.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,E=(p+1)/2,A=(h+d)/4,T=(u+x)/4,R=(g+m)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=T/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ka=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pr=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ut=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),Sa.subVectors(this.max,vr),Ps.subVectors(e.a,vr),Ls.subVectors(e.b,vr),Ds.subVectors(e.c,vr),Ci.subVectors(Ls,Ps),Ii.subVectors(Ds,Ls),ns.subVectors(Ps,Ds);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-ns.z,ns.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,ns.z,0,-ns.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-ns.y,ns.x,0];return!Gc(t,Ps,Ls,Ds,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Gc(t,Ps,Ls,Ds,Sa))?!1:(Ea.crossVectors(Ci,Ii),t=[Ea.x,Ea.y,Ea.z],Gc(t,Ps,Ls,Ds,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,Ma=new Ut,Ps=new L,Ls=new L,Ds=new L,Ci=new L,Ii=new L,ns=new L,vr=new L,Sa=new L,Ea=new L,is=new L;function Gc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var tm=new Ut,yr=new L,Wc=new L,on=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Wc)),this.expandByPoint(yr.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fi=new L,Xc=new L,Ta=new L,Pi=new L,$c=new L,wa=new L,qc=new L,Oi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Pi.dot(this.direction),c=-Pi.dot(Ta),l=Pi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xc).addScaledVector(Ta,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){$c.subVectors(t,e),wa.subVectors(n,e),qc.crossVectors($c,wa);let a=this.direction.dot(qc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let c=o*this.direction.dot(wa.crossVectors(Pi,wa));if(c<0)return null;let l=o*this.direction.dot($c.cross(Pi));if(l<0||c+l>a)return null;let h=-o*Pi.dot(qc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nm,e,im)}lookAt(e,t,n){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(n,gn),Li.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(n,gn)),Li.normalize(),Aa.crossVectors(gn,Li),s[0]=Li.x,s[4]=Aa.x,s[8]=gn.x,s[1]=Li.y,s[5]=Aa.y,s[9]=gn.y,s[2]=Li.z,s[6]=Aa.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],E=n[15],A=s[0],T=s[4],R=s[8],M=s[12],b=s[1],I=s[5],U=s[9],k=s[13],V=s[2],F=s[6],H=s[10],te=s[14],X=s[3],le=s[7],ce=s[11],be=s[15];return r[0]=a*A+o*b+c*V+l*X,r[4]=a*T+o*I+c*F+l*le,r[8]=a*R+o*U+c*H+l*ce,r[12]=a*M+o*k+c*te+l*be,r[1]=h*A+u*b+d*V+f*X,r[5]=h*T+u*I+d*F+f*le,r[9]=h*R+u*U+d*H+f*ce,r[13]=h*M+u*k+d*te+f*be,r[2]=g*A+x*b+m*V+p*X,r[6]=g*T+x*I+m*F+p*le,r[10]=g*R+x*U+m*H+p*ce,r[14]=g*M+x*k+m*te+p*be,r[3]=y*A+_*b+v*V+E*X,r[7]=y*T+_*I+v*F+E*le,r[11]=y*R+_*U+v*H+E*ce,r[15]=y*M+_*k+v*te+E*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,_=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,E=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,A=t*y+n*_+s*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=y*T,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*T,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*T,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*T,e[4]=_*T,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*T,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*T,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*T,e[8]=v*T,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*T,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*T,e[12]=E*T,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*T,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=c*l,_=c*h,v=c*u,E=n.x,A=n.y,T=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*T,s[9]=(m-y)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let l=1/r,h=1/a,u=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ir)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===On)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ir)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new L,Un=new Ge,nm=new L(0,0,0),im=new L(1,1,1),Li=new L,Aa=new L,gn=new L,Tu=new Ge,wu=new wn,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sm=0,Au=new L,Ns=new wn,pi=new Ge,Ra=new L,br=new L,rm=new L,am=new wn,Ru=new L(1,0,0),Cu=new L(0,1,0),Iu=new L(0,0,1),Pu={type:"added"},om={type:"removed"},Fs={type:"childadded",child:null},Yc={type:"childremoved",child:null},yt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new zn,n=new wn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new We}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Ru,e)}rotateY(e){return this.rotateOnAxis(Cu,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ru,e)}translateY(e){return this.translateOnAxis(Cu,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(br,Ra,this.up):pi.lookAt(Ra,br,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(pi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(om),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new L,mi=new L,Zc=new L,gi=new L,Os=new L,Bs=new L,Lu=new L,jc=new L,Kc=new L,Jc=new L,Qc=new nt,el=new nt,tl=new nt,Ni=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),mi.subVectors(n,t),Zc.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(mi),c=Nn.dot(Zc),l=mi.dot(mi),h=mi.dot(Zc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Qc.setScalar(0),el.setScalar(0),tl.setScalar(0),Qc.fromBufferAttribute(e,t),el.fromBufferAttribute(e,n),tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qc,r.x),a.addScaledVector(el,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),mi.subVectors(e,t),Nn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Nn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),Bs.subVectors(r,n),jc.subVectors(e,n);let c=Os.dot(jc),l=Bs.dot(jc);if(c<=0&&l<=0)return t.copy(n);Kc.subVectors(e,s);let h=Os.dot(Kc),u=Bs.dot(Kc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Os,a);Jc.subVectors(e,r);let f=Os.dot(Jc),g=Bs.dot(Jc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Bs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Lu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Lu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Os,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function nl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Vl(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=nl(a,r,e+1/3),this.g=nl(a,r,e),this.b=nl(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Je.workingToColorSpace(Jt.copy(this),e),Math.round(Ze(Jt.r*255,0,255))*65536+Math.round(Ze(Jt.g*255,0,255))*256+Math.round(Ze(Jt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Tt){Je.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ca);let n=Rr(Di.h,Ca.h,t),s=Rr(Di.s,Ca.s,t),r=Rr(Di.l,Ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Pe;Pe.NAMES=$d;var cm=0,cn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=os,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nt=class extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new L,Ia=new ze,lm=0,Lt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var Lr=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},hm=0,Tn=new Ge,il=new yt,ks=new L,_n=new Ut,Mr=new Ut,Ht=new L,Ft=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?Dr:Lr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(_n.min,Mr.min),_n.expandByPoint(Ht),Ht.addVectors(_n.max,Mr.max),_n.expandByPoint(Ht)):(_n.expandByPoint(Mr.min),_n.expandByPoint(Mr.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ht.fromBufferAttribute(o,l),c&&(ks.fromBufferAttribute(e,l),Ht.add(ks)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new L,c[R]=new L;let l=new L,h=new L,u=new L,d=new ze,f=new ze,g=new ze,x=new L,m=new L;function p(R,M,b){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[R].add(x),o[M].add(x),o[b].add(x),c[R].add(m),c[M].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,M=y.length;R<M;++R){let b=y[R],I=b.start,U=b.count;for(let k=I,V=I+U;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new L,v=new L,E=new L,A=new L;function T(R){E.fromBufferAttribute(s,R),A.copy(E);let M=o[R];_.copy(M),_.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(A,M);let I=v.dot(c[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,I)}for(let R=0,M=y.length;R<M;++R){let b=y[R],I=b.start,U=b.count;for(let k=I,V=I+U;k<V;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Du=new Ge,ss=new Oi,Pa=new on,Uu=new L,La=new L,Da=new L,Ua=new L,sl=new L,Na=new L,Nu=new L,Fa=new L,ht=class extends yt{constructor(e=new Ft,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(sl.fromBufferAttribute(u,e),a?Na.addScaledVector(sl,h):Na.addScaledVector(sl.sub(t),h))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Pa.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Pa,Uu)===null||ss.origin.distanceToSquared(Uu)>(e.far-e.near)**2))&&(Du.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Du),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=_;v<E;v+=3){let A=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);s=Oa(this,p,e,n,l,h,u,A,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Oa(this,a,e,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,E=_;v<E;v+=3){let A=v,T=v+1,R=v+2;s=Oa(this,p,e,n,l,h,u,A,T,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=Oa(this,a,e,n,l,h,u,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function um(i,e,t,n,s,r,a,o){let c;if(e.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===kn,o),c===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Fa);return l<t.near||l>t.far?null:{distance:l,point:Fa.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,La),i.getVertexPosition(c,Da),i.getVertexPosition(l,Ua);let h=um(i,e,t,n,La,Da,Ua,Nu);if(h){let u=new L;Ni.getBarycoord(Nu,La,Da,Ua,u),s&&(h.uv=Ni.getInterpolatedAttribute(s,o,c,l,u,new ze)),r&&(h.uv1=Ni.getInterpolatedAttribute(r,o,c,l,u,new ze)),a&&(h.normal=Ni.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};Ni.getNormal(La,Da,Ua,d.normal),h.face=d,h.barycoord=u}return h}var Jn=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(x,m,p,y,_,v,E,A,T,R,M){let b=v/T,I=E/R,U=v/2,k=E/2,V=A/2,F=T+1,H=R+1,te=0,X=0,le=new L;for(let ce=0;ce<H;ce++){let be=ce*I-k;for(let ke=0;ke<F;ke++){let it=ke*b-U;le[x]=it*y,le[m]=be*_,le[p]=V,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(ke/T),u.push(1-ce/R),te+=1}}for(let ce=0;ce<R;ce++)for(let be=0;be<T;be++){let ke=d+be+F*ce,it=d+be+F*(ce+1),pt=d+(be+1)+F*(ce+1),et=d+(be+1)+F*ce;c.push(ke,it,et),c.push(it,pt,et),X+=6}o.addGroup(f,X,M),f+=X,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function xs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){let e={};for(let t=0;t<i.length;t++){let n=xs(i[t]);for(let s in n)e[s]=n[s]}return e}function dm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var qd={clone:xs,merge:Qt},fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ur=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new L,Fu=new ze,Ou=new ze,Pt=class extends Ur{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Fu,Ou),t.subVectors(Ou,Fu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Hs=1,Qa=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(zs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Pt(zs,Hs,e,t);r.layers=this.layers,this.add(r);let a=new Pt(zs,Hs,e,t);a.layers=this.layers,this.add(a);let o=new Pt(zs,Hs,e,t);o.layers=this.layers,this.add(o);let c=new Pt(zs,Hs,e,t);c.layers=this.layers,this.add(c);let l=new Pt(zs,Hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nr=class extends Dt{constructor(e=[],t=ms,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eo=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ei});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=nn),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ue=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Fr=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new L,Qs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Bu=new L,ku=new nt,zu=new nt,gm=new L,Hu=new Ge,Ba=new L,rl=new on,Vu=new Ge,al=new Oi,Or=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(s),e.ray.intersectsSphere(rl)!==!1&&(Vu.copy(s).invert(),al.copy(e.ray).applyMatrix4(Vu),!(this.boundingBox!==null&&al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ku.fromBufferAttribute(s.attributes.skinIndex,e),zu.fromBufferAttribute(s.attributes.skinWeight,e),Bu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=zu.getComponent(r);if(a!==0){let o=ku.getComponent(r);Hu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(gm.copy(Bu).applyMatrix4(Hu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},er=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Br=class extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=$t,h=$t,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gu=new Ge,_m=new Ge,kr=class i{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:_m;Gu.multiplyMatrices(o,t[r]),Gu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Br(t,e,e,xn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new er),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Bi=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new Ge,Wu=new Ge,ka=[],Xu=new Ut,xm=new Ge,Sr=new ht,Er=new on,zr=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Xu.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Er.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Er)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),e.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),Wu.multiplyMatrices(n,Vs),Sr.matrixWorld=Wu,Sr.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){let c=ka[a];c.instanceId=r,c.object=this,t.push(c)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,Ro,Rn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ol=new L,vm=new L,ym=new We,qn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ol.subVectors(n,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ym.getNormalMatrix(e),s=this.coplanarPoint(ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},rs=new on,bm=new ze(.5,.5),za=new L,tr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,p-g,E-y).normalize(),s[1].setComponents(l+a,f+h,p+g,E+y).normalize(),s[2].setComponents(l+o,f+u,p+x,E+_).normalize(),s[3].setComponents(l-o,f-u,p-x,E-_).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-v).normalize(),t===On)s[5].setComponents(l+c,f+d,p+m,E+v).normalize();else if(t===Ir)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=bm.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nr=class extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},to=new L,no=new L,$u=new Ge,Tr=new Oi,Ha=new on,cl=new L,qu=new L,ds=class extends yt{constructor(e=new Ft,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)to.fromBufferAttribute(t,s-1),no.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=to.distanceTo(no);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;$u.copy(s).invert(),Tr.copy(e.ray).applyMatrix4($u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),_=Va(this,e,Tr,c,p,y,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Va(this,e,Tr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Va(this,e,Tr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Va(this,e,Tr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Va(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(to.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),t.distanceSqToSegment(to,no,cl,qu)>n)return;cl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(cl);if(!(l<e.near||l>e.far))return{distance:l,point:qu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Yu=new L,Zu=new L,Hr=class extends ds{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Yu.fromBufferAttribute(t,s),Zu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yu.distanceTo(Zu);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vr=class extends ds{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ju=new Ge,_l=new Oi,Ga=new on,Wa=new L,Gr=class extends yt{constructor(e=new Ft,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;ju.copy(s).invert(),_l.copy(e.ray).applyMatrix4(ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Wa.fromBufferAttribute(u,m),Ku(Wa,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Wa.fromBufferAttribute(u,g),Ku(Wa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ku(i,e,t,n,s,r,a){let o=_l.distanceSqToPoint(i);if(o<t){let c=new L;_l.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Wr=class extends Dt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xr=class extends Dt{constructor(e,t,n=Gi,s,r,a,o=$t,c=$t,l,h=$s,u=1){if(h!==$s&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$r=class extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qr=class i extends Ft{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,x=s+1,m=new L,p=new L;for(let y=0;y<=g;y++){let _=0,v=0,E=0,A=0;if(y<=n){let M=y/n,b=M*Math.PI/2;v=-h-e*Math.cos(b),E=e*Math.sin(b),A=-e*Math.cos(b),_=M*u}else if(y<=n+r){let M=(y-n)/r;v=-h+M*t,E=e,A=0,_=u+M*d}else{let M=(y-n-r)/n,b=M*Math.PI/2;v=h+e*Math.sin(b),E=e*Math.cos(b),A=e*Math.sin(b),_=u+d+M*u}let T=Math.max(0,Math.min(1,_/f)),R=0;y===0?R=.5/s:y===g&&(R=-.5/s);for(let M=0;M<=s;M++){let b=M/s,I=b*Math.PI*2,U=Math.sin(I),k=Math.cos(I);p.x=-E*k,p.y=v,p.z=E*U,o.push(p.x,p.y,p.z),m.set(-E*k,A,E*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(b+R,T)}if(y>0){let M=(y-1)*x;for(let b=0;b<s;b++){let I=M+b,U=M+b+1,k=y*x+b,V=y*x+b+1;a.push(I,U,k),a.push(U,V,k)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Yr=class i extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new L,h=new ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ki=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function y(){let v=new L,E=new L,A=0,T=(t-e)/n;for(let R=0;R<=r;R++){let M=[],b=R/r,I=b*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,V=k*c+o,F=Math.sin(V),H=Math.cos(V);E.x=I*F,E.y=-b*n+m,E.z=I*H,u.push(E.x,E.y,E.z),v.set(F,T,H).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-b),M.push(g++)}x.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){let b=x[M][R],I=x[M+1][R],U=x[M+1][R+1],k=x[M][R+1];(e>0||M!==0)&&(h.push(b,I,k),A+=3),(t>0||M!==r-1)&&(h.push(I,U,k),A+=3)}l.addGroup(p,A,0),p+=A}function _(v){let E=g,A=new ze,T=new L,R=0,M=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let V=U/s*c+o,F=Math.cos(V),H=Math.sin(V);T.x=M*H,T.y=m*b,T.z=M*F,u.push(T.x,T.y,T.z),d.push(0,b,0),A.x=F*.5+.5,A.y=H*.5*b+.5,f.push(A.x,A.y),g++}for(let U=0;U<s;U++){let k=E+U,V=I+U;v===!0?h.push(V,V+1,k):h.push(V+1,V,k),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zr=class i extends ki{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qn=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let _=0;_<l;_++){let v=_*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let _=y+l*p,v=y+l*(p+1),E=y+1+l*(p+1),A=y+1+l*p;f.push(_,v,A),f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jr=class i extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new L,g=new ze;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,E=y+n+2,A=y+1;o.push(_,v,A),o.push(v,E,A)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zi=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+v,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=h[p][y+1],v=h[p][y],E=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(_,v,A),(p!==n-1||c<Math.PI)&&f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ot=class extends cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ln=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var io=class extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},so=class extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sm(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ju(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Yd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ro=class extends yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fl,endingEnd:fl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pl:r=e,o=2*t-n;break;case ml:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pl:a=e,c=2*n-t;break;case ml:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+y*a[l+E]+_*a[c+E]+v*a[u+E];return r}},ao=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},oo=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ro(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Mm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=hs;var bi=class extends hn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=ls;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="color";var ei=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};ei.prototype.ValueTypeName="number";var co=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)wn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ti=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}};ti.prototype.ValueTypeName="quaternion";ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends hn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=ls;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};ni.prototype.ValueTypeName="vector";var Jr=class{constructor(e="",t=-1,n=[],s=Dd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Tm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Sm(c);c=Ju(c,1,h),l=Ju(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ei(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Yd(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new ei(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(ni,f+".position",d,"pos",s),n(ti,f+".quaternion",d,"rot",s),n(ni,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Em(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ei;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return Kr;case"quaternion":return ti;case"bool":case"boolean":return bi;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Tm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Em(i.type);if(i.times===void 0){let t=[],n=[];Yd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Zn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},lo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Zd=new lo,ii=class{constructor(e){this.manager=e!==void 0?e:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},xl=class extends Error{constructor(e,t){super(e),this.response=t}},sr=class extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=_i[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,T=h.length;A<T;A++){let R=h[A];R.onProgress&&R.onProgress(E)}p.enqueue(v),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new xl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Zn.add(`file:${e}`,l);let h=_i[e];delete _i[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=_i[e];if(h===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gs=new WeakMap,ho=class extends ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Gs.get(a);u===void 0&&(u=[],Gs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=qs("img");function c(){h(),t&&t(this);let u=Gs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Gs.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Zn.remove(`image:${e}`);let d=Gs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Qr=class extends ii{constructor(e){super(e)}load(e,t,n,s){let r=new Dt,a=new ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},fs=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ea=class extends fs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ll=new Ge,Qu=new L,ed=new L,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vl=class extends ta{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},na=class extends fs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},td=new Ge,wr=new L,hl=new L,yl=class extends ta{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),hl.copy(n.position),hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hl),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,n.coordinateSystem,n.reversedDepth)}},ia=class extends fs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ps=class extends Ur{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bl=class extends ta{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new bl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ul=new WeakMap,sa=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(ul.has(a)===!0)s&&s(ul.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ul.set(c,l),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var uo=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Xl="\\[\\]\\.:\\/",wm=new RegExp("["+Xl+"]","g"),$l="[^"+Xl+"]",Am="[^"+Xl.replace("\\.","")+"]",Rm=/((?:WC+[\/:])*)/.source.replace("WC",$l),Cm=/(WCOD+)?/.source.replace("WCOD",Am),Im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),Lm=new RegExp("^"+Rm+Cm+Im+Pm+"$"),Dm=["material","materials","bones","map"],Ml=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(e){let t=Lm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Ml;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ty=new Float32Array(1);var nd=new Ge,ra=class{constructor(e,t,n=0,s=1/0){this.ray=new Oi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(e,t=!0,n=[]){return Sl(e,this,n,t),n.sort(id),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sl(e[s],this,n,t);return n.sort(id),n}};function id(i,e){return i.distance-e.distance}function Sl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sl(r[a],e,t,!0)}}function ql(i,e,t,n){let s=Um(n);switch(t){case Nl:return i*e;case Ro:return i*e/s.components*s.byteLength;case Co:return i*e/s.components*s.byteLength;case Ol:return i*e*2/s.components*s.byteLength;case Io:return i*e*2/s.components*s.byteLength;case Fl:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Po:return i*e*4/s.components*s.byteLength;case oa:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Do:case No:return Math.max(i,16)*Math.max(e,8)/4;case Lo:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qo:case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(i){switch(i){case Gn:case Pl:return{byteLength:1,components:1};case ar:case Ll:case or:return{byteLength:2,components:1};case wo:case Ao:return{byteLength:2,components:4};case Gi:case To:case Rn:return{byteLength:4,components:1};case Dl:case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function yf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fm(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,o0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,Mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Kg=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,e_=`#define MATCAP
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
}`,t_=`#define MATCAP
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
}`,n_=`#define NORMAL
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
}`,i_=`#define NORMAL
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
}`,s_=`#define PHONG
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
}`,r_=`#define PHONG
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
}`,a_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
}`,c_=`#define TOON
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
}`,l_=`#define TOON
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
}`,h_=`uniform float size;
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
}`,u_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 color;
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
}`,p_=`uniform float rotation;
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
}`,m_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Om,alphahash_pars_fragment:Bm,alphamap_fragment:km,alphamap_pars_fragment:zm,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:$m,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Zm,iridescence_fragment:jm,bumpmap_pars_fragment:Km,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:a0,cube_uv_reflection_fragment:o0,defaultnormal_vertex:c0,displacementmap_pars_vertex:l0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:C0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:b0,fog_fragment:M0,fog_pars_fragment:S0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:T0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:I0,lights_toon_pars_fragment:P0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:B0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:$0,metalnessmap_fragment:q0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:Z0,morphcolor_vertex:j0,morphnormal_vertex:K0,morphtarget_pars_vertex:J0,morphtarget_vertex:Q0,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:og,clearcoat_pars_fragment:cg,iridescence_pars_fragment:lg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:vg,shadowmap_vertex:yg,shadowmask_pars_fragment:bg,skinbase_vertex:Mg,skinning_pars_vertex:Sg,skinning_vertex:Eg,skinnormal_vertex:Tg,specularmap_fragment:wg,specularmap_pars_fragment:Ag,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Ig,transmission_pars_fragment:Pg,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Ug,worldpos_vertex:Ng,background_vert:Fg,background_frag:Og,backgroundCube_vert:Bg,backgroundCube_frag:kg,cube_vert:zg,cube_frag:Hg,depth_vert:Vg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:Xg,equirect_vert:$g,equirect_frag:qg,linedashed_vert:Yg,linedashed_frag:Zg,meshbasic_vert:jg,meshbasic_frag:Kg,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:e_,meshmatcap_frag:t_,meshnormal_vert:n_,meshnormal_frag:i_,meshphong_vert:s_,meshphong_frag:r_,meshphysical_vert:a_,meshphysical_frag:o_,meshtoon_vert:c_,meshtoon_frag:l_,points_vert:h_,points_frag:u_,shadow_vert:d_,shadow_frag:f_,sprite_vert:p_,sprite_frag:m_},he={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ri={basic:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Pe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Qt([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Qt([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Qt([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Qt([he.common,he.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Qt([he.lights,he.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ri.physical={uniforms:Qt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var ac={r:0,b:0,g:0},vs=new zn,g_=new Ge;function __(i,e,t,n,s,r,a){let o=new Pe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1,E=g(_);E===null?p(o,c):E&&E.isColor&&(p(E,1),v=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let E=g(v);E&&(E.isCubeTexture||E.mapping===aa)?(h===void 0&&(h=new ht(new Jn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:xs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g_.makeRotationFromEuler(vs)),h.material.toneMapped=Je.getTransfer(E.colorSpace)!==ct,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ht(new Qn(2,2),new Hn({name:"BackgroundMaterial",uniforms:xs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(ac,Wl(i)),n.buffers.color.setClear(ac.r,ac.g,ac.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m,dispose:y}}function x_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(b,I,U,k,V){let F=!1,H=u(k,U,I);r!==H&&(r=H,l(r.object)),F=f(b,k,U,V),F&&g(b,k,U,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(b,I,U,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,I,U){let k=U.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let F=V[I.id];F===void 0&&(F={},V[I.id]=F);let H=F[k];return H===void 0&&(H=d(c()),F[k]=H),H}function d(b){let I=[],U=[],k=[];for(let V=0;V<t;V++)I[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:k,object:b,attributes:{},index:null}}function f(b,I,U,k){let V=r.attributes,F=I.attributes,H=0,te=U.getAttributes();for(let X in te)if(te[X].location>=0){let ce=V[X],be=F[X];if(be===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(be=b.instanceColor)),ce===void 0||ce.attribute!==be||be&&ce.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(b,I,U,k){let V={},F=I.attributes,H=0,te=U.getAttributes();for(let X in te)if(te[X].location>=0){let ce=F[X];ce===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));let be={};be.attribute=ce,ce&&ce.data&&(be.data=ce.data),V[X]=be,H++}r.attributes=V,r.attributesNum=H,r.index=k}function x(){let b=r.newAttributes;for(let I=0,U=b.length;I<U;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let U=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;U[b]=1,k[b]===0&&(i.enableVertexAttribArray(b),k[b]=1),V[b]!==I&&(i.vertexAttribDivisor(b,I),V[b]=I)}function y(){let b=r.newAttributes,I=r.enabledAttributes;for(let U=0,k=I.length;U<k;U++)I[U]!==b[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function _(b,I,U,k,V,F,H){H===!0?i.vertexAttribIPointer(b,I,U,V,F):i.vertexAttribPointer(b,I,U,k,V,F)}function v(b,I,U,k){x();let V=k.attributes,F=U.getAttributes(),H=I.defaultAttributeValues;for(let te in F){let X=F[te];if(X.location>=0){let le=V[te];if(le===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){let ce=le.normalized,be=le.itemSize,ke=e.get(le);if(ke===void 0)continue;let it=ke.buffer,pt=ke.type,et=ke.bytesPerElement,Y=pt===i.INT||pt===i.UNSIGNED_INT||le.gpuType===To;if(le.isInterleavedBufferAttribute){let Q=le.data,xe=Q.stride,Be=le.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,Q.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Re=0;Re<X.locationSize;Re++)_(X.location+Re,be/X.locationSize,pt,ce,xe*et,(Be+be/X.locationSize*Re)*et,Y)}else{if(le.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,le.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Q=0;Q<X.locationSize;Q++)_(X.location+Q,be/X.locationSize,pt,ce,be*et,be/X.locationSize*Q*et,Y)}}else if(H!==void 0){let ce=H[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(X.location,ce);break;case 3:i.vertexAttrib3fv(X.location,ce);break;case 4:i.vertexAttrib4fv(X.location,ce);break;default:i.vertexAttrib1fv(X.location,ce)}}}}y()}function E(){R();for(let b in n){let I=n[b];for(let U in I){let k=I[U];for(let V in k)h(k[V].object),delete k[V];delete I[U]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let U in I){let k=I[U];for(let V in k)h(k[V].object),delete k[V];delete I[U]}delete n[b.id]}function T(b){for(let I in n){let U=n[I];if(U[b.id]===void 0)continue;let k=U[b.id];for(let V in k)h(k[V].object),delete k[V];delete U[b.id]}}function R(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function v_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function y_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Rn&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function b_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new qn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,_=y*4,v=p.clippingState||null;c.value=v,v=h(g,d,_,f);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function M_(i){let e=new WeakMap;function t(a,o){return o===Mo?a.mapping=ms:o===So&&(a.mapping=gs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mo||o===So)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new eo(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var dr=4,jd=[.125,.215,.35,.446,.526,.582],Ms=20,Yl=new ps,Kd=new Pe,Zl=null,jl=0,Kl=0,Jl=!1,bs=(1+Math.sqrt(5))/2,ur=1/bs,Jd=[new L(-bs,ur,0),new L(bs,ur,0),new L(-ur,0,bs),new L(ur,0,bs),new L(0,bs,-ur),new L(0,bs,ur),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],S_=new L,lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=S_}=r;Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,jl,Kl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:or,format:xn,colorSpace:qt,depthBuffer:!1},s=Qd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E_(r)),this._blurMaterial=T_(r,e,t)}return s}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Yl)}_sceneToCubeUV(e,t,n,s,r){let c=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Kd),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Nt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new ht(new Jn,x),p=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(Kd),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let E=this._cubeSize;oc(s,v*E,_>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ms||e.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;oc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Yl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jd[(s-r-1)%Jd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let p=[],y=0;for(let T=0;T<Ms;++T){let R=T/x,M=Math.exp(-R*R/2);p.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],E=3*v*(s>_-dr?s-_+dr:0),A=4*(this._cubeSize-v);oc(t,E,A,3*v,2*v),c.setRenderTarget(t),c.render(u,Yl)}};function E_(i){let e=[],t=[],n=[],s=i,r=i-dr+1+jd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-dr?c=jd[a-i+dr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){let T=A%3*2/3-1,R=A>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(M,x*g*A),_.set(d,m*g*A);let b=[A,A,A,A,A,A];v.set(b,p*g*A)}let E=new Ft;E.setAttribute("position",new Lt(y,x)),E.setAttribute("uv",new Lt(_,m)),E.setAttribute("faceIndex",new Lt(v,p)),e.push(E),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qd(i,e,t){let n=new Kn(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function T_(i,e,t){let n=new Float32Array(Ms),s=new L(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ef(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function tf(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function w_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Mo||c===So,h=c===ms||c===gs;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new lc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new lc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function A_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function R_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let E=y[_+0],A=y[_+1],T=y[_+2];d.push(E,A,A,T,T,E)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let E=_+0,A=_+1,T=_+2;d.push(E,A,A,T,T,E)}}else return;let m=new(Gl(d)?Dr:Lr)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function C_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function P_(i,e,t){let n=new WeakMap,s=new nt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*E*4*u),T=new Pr(A,v,E,u);T.type=Rn,T.needsUpdate=!0;let R=_*4;for(let b=0;b<u;b++){let I=m[b],U=p[b],k=y[b],V=v*E*4*b;for(let F=0;F<I.count;F++){let H=F*R;f===!0&&(s.fromBufferAttribute(I,F),A[V+H+0]=s.x,A[V+H+1]=s.y,A[V+H+2]=s.z,A[V+H+3]=0),g===!0&&(s.fromBufferAttribute(U,F),A[V+H+4]=s.x,A[V+H+5]=s.y,A[V+H+6]=s.z,A[V+H+7]=0),x===!0&&(s.fromBufferAttribute(k,F),A[V+H+8]=s.x,A[V+H+9]=s.y,A[V+H+10]=s.z,A[V+H+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new ze(v,E)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function L_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var bf=new Dt,nf=new Xr(1,1),Mf=new Pr,Sf=new Ja,Ef=new Nr,sf=[],rf=[],af=new Float32Array(16),of=new Float32Array(9),cf=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sf[s];if(r===void 0&&(r=new Float32Array(s),sf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uc(i,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function D_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function O_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;cf.set(n),i.uniformMatrix2fv(this.addr,!1,cf),kt(t,n)}}function B_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;of.set(n),i.uniformMatrix3fv(this.addr,!1,of),kt(t,n)}}function k_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;af.set(n),i.uniformMatrix4fv(this.addr,!1,af),kt(t,n)}}function z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function W_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nf.compareFunction=zl,r=nf):r=bf,t.setTexture2D(e||r,s)}function Z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sf,s)}function j_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ef,s)}function K_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mf,s)}function J_(i){switch(i){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return k_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return X_;case 36295:return $_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return K_}}function Q_(i,e){i.uniform1fv(this.addr,e)}function ex(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function tx(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function nx(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function ix(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sx(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rx(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ax(i,e){i.uniform1iv(this.addr,e)}function ox(i,e){i.uniform2iv(this.addr,e)}function cx(i,e){i.uniform3iv(this.addr,e)}function lx(i,e){i.uniform4iv(this.addr,e)}function hx(i,e){i.uniform1uiv(this.addr,e)}function ux(i,e){i.uniform2uiv(this.addr,e)}function dx(i,e){i.uniform3uiv(this.addr,e)}function fx(i,e){i.uniform4uiv(this.addr,e)}function px(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||bf,r[a])}function mx(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sf,r[a])}function gx(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ef,r[a])}function _x(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mf,r[a])}function xx(i){switch(i){case 5126:return Q_;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}var eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J_(t.type)}},th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}},nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function lf(i,e){i.seq.push(e),i.map[e.id]=e}function vx(i,e,t){let n=i.name,s=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){lf(t,l===void 0?new eh(o,i,e):new th(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new nh(o),lf(t,u)),t=u}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);vx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function hf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yx=37297,bx=0;function Mx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var uf=new We;function Sx(i){Je._getMatrix(uf,Je.workingColorSpace,i);let e=`mat3( ${uf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function df(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(e),o)}else return r}function Ex(i,e){let t=Sx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Tx(i,e){let t;switch(e){case wd:t="Linear";break;case Ad:t="Reinhard";break;case Rd:t="Cineon";break;case Cd:t="ACESFilmic";break;case Pd:t="AgX";break;case bo:t="Neutral";break;case Id:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new L;function wx(){Je.getLuminanceCoefficients(cc);let i=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function Rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function da(i){return i!==""}function ff(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(Ix,Lx)}var Px=new Map;function Lx(i,e){let t=qe[e];if(t===void 0){let n=Px.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ih(t)}var Dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(i){return i.replace(Dx,Ux)}function Ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Nx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Fx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===gs&&(e="ENVMAP_MODE_REFRACTION"),e}function Bx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ed:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function kx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Nx(t),l=Fx(t),h=Ox(t),u=Bx(t),d=kx(t),f=Ax(t),g=Rx(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),p.length>0&&(p+=`
`)):(m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ex("linearToOutputTexel",t.outputColorSpace),wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=ih(a),a=ff(a,t),a=pf(a,t),o=ih(o),o=ff(o,t),o=pf(o,t),a=mf(a),o=mf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+a,v=y+p+o,E=hf(s,s.VERTEX_SHADER,_),A=hf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(A)||"",F=U.trim(),H=k.trim(),te=V.trim(),X=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{let ce=df(s,E,"vertex"),be=df(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+ce+`
`+be)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||te==="")&&(le=!1);le&&(I.diagnostics={runnable:X,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(E),s.deleteShader(A),R=new fr(s,x),M=Cx(s,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,yx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var Hx=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rh(e),t.set(e,n)),n}},rh=class{constructor(e){this.id=Hx++,this.code=e,this.usedTimes=0}};function Vx(i,e,t,n,s,r,a){let o=new js,c=new sh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,I,U,k){let V=U.fog,F=k.geometry,H=M.isMeshStandardMaterial?U.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),X=te&&te.mapping===aa?te.image.height:null,le=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,be=ce!==void 0?ce.length:0,ke=0;F.morphAttributes.position!==void 0&&(ke=1),F.morphAttributes.normal!==void 0&&(ke=2),F.morphAttributes.color!==void 0&&(ke=3);let it,pt,et,Y;if(le){let at=ri[le];it=at.vertexShader,pt=at.fragmentShader}else it=M.vertexShader,pt=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let Q=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,Qe=!!M.map,jt=!!M.matcap,P=!!te,xt=!!M.aoMap,Ve=!!M.lightMap,Fe=!!M.bumpMap,Me=!!M.normalMap,vt=!!M.displacementMap,Se=!!M.emissiveMap,$e=!!M.metalnessMap,zt=!!M.roughnessMap,Rt=M.anisotropy>0,C=M.clearcoat>0,S=M.dispersion>0,B=M.iridescence>0,q=M.sheen>0,J=M.transmission>0,$=Rt&&!!M.anisotropyMap,Ae=C&&!!M.clearcoatMap,ae=C&&!!M.clearcoatNormalMap,Ee=C&&!!M.clearcoatRoughnessMap,Te=B&&!!M.iridescenceMap,se=B&&!!M.iridescenceThicknessMap,pe=q&&!!M.sheenColorMap,De=q&&!!M.sheenRoughnessMap,we=!!M.specularMap,de=!!M.specularColorMap,Xe=!!M.specularIntensityMap,D=J&&!!M.transmissionMap,re=J&&!!M.thicknessMap,oe=!!M.gradientMap,_e=!!M.alphaMap,ne=M.alphaTest>0,Z=!!M.alphaHash,ye=!!M.extensions,He=Ti;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(He=i.toneMapping);let mt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:pt,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:qt,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:jt,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:X,aoMap:xt,lightMap:Ve,bumpMap:Fe,normalMap:Me,displacementMap:d&&vt,emissiveMap:Se,normalMapObjectSpace:Me&&M.normalMapType===Fd,normalMapTangentSpace:Me&&M.normalMapType===kl,metalnessMap:$e,roughnessMap:zt,anisotropy:Rt,anisotropyMap:$,clearcoat:C,clearcoatMap:Ae,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:B,iridescenceMap:Te,iridescenceThicknessMap:se,sheen:q,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:we,specularColorMap:de,specularIntensityMap:Xe,transmission:J,transmissionMap:D,thicknessMap:re,gradientMap:oe,opaque:M.transparent===!1&&M.blending===os&&M.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Z,combine:M.combine,mapUv:Qe&&x(M.map.channel),aoMapUv:xt&&x(M.aoMap.channel),lightMapUv:Ve&&x(M.lightMap.channel),bumpMapUv:Fe&&x(M.bumpMap.channel),normalMapUv:Me&&x(M.normalMap.channel),displacementMapUv:vt&&x(M.displacementMap.channel),emissiveMapUv:Se&&x(M.emissiveMap.channel),metalnessMapUv:$e&&x(M.metalnessMap.channel),roughnessMapUv:zt&&x(M.roughnessMap.channel),anisotropyMapUv:$&&x(M.anisotropyMap.channel),clearcoatMapUv:Ae&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:de&&x(M.specularColorMap.channel),specularIntensityMapUv:Xe&&x(M.specularIntensityMap.channel),transmissionMapUv:D&&x(M.transmissionMap.channel),thicknessMapUv:re&&x(M.thicknessMap.channel),alphaMapUv:_e&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||Rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(Qe||_e),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===An,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ye&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&M.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(b,M),_(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let b=g[M.type],I;if(b){let U=ri[b];I=qd.clone(U.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let U=0,k=h.length;U<k;U++){let V=h[U];if(V.cacheKey===b){I=V,++I.usedTimes;break}}return I===void 0&&(I=new zx(i,b,M,r),h.push(I)),I}function A(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function Gx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _f(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Wx),n.length>1&&n.sort(d||_f),s.length>1&&s.sort(d||_f)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Xx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new xf,i.set(n,[a])):s>=r.length?(a=new xf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Yx=0;function Zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jx(i){let e=new $x,t=qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ge,a=new Ge;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,_=0,v=0,E=0,A=0,T=0;l.sort(Zx);for(let M=0,b=l.length;M<b;M++){let I=l[M],U=I.color,k=I.intensity,V=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],k);T++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,X=t.get(I);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=H,f++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(U).multiplyScalar(k),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[x]=H;let te=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,te.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=te.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=F,v++}x++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(U).multiplyScalar(k),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let te=I.shadow,X=t.get(I);X.shadowIntensity=te.intensity,X.shadowBias=te.bias,X.shadowNormalBias=te.normalBias,X.shadowRadius=te.radius,X.shadowMapSize=te.mapSize,X.shadowCameraNear=te.camera.near,X.shadowCameraFar=te.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=I.shadow.matrix,_++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(k),H.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=T,n.version=Yx++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function vf(i){let e=new jx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Kx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vf(i),e.set(s,[o])):r>=a.length?(o=new vf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qx=`uniform sampler2D shadow_pass;
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
}`;function ev(i,e,t){let n=new tr,s=new ze,r=new ze,a=new nt,o=new io({depthPacking:Nd}),c=new so,l={},h=t.maxTextureSize,u={[kn]:sn,[sn]:kn,[An]:An},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Jx,fragmentShader:Qx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ft;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ei),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==si&&this.type===si,V=p===si&&this.type!==si;for(let F=0,H=A.length;F<H;F++){let te=A[F],X=te.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let le=X.getFrameExtents();if(s.multiply(le),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,X.mapSize.y=r.y)),X.map===null||k===!0||V===!0){let be=this.type!==si?{minFilter:$t,magFilter:$t}:{};X.map!==null&&X.map.dispose(),X.map=new Kn(s.x,s.y,be),X.map.texture.name=te.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let ce=X.getViewportCount();for(let be=0;be<ce;be++){let ke=X.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),U.viewport(a),X.updateMatrices(te,be),n=X.getFrustum(),v(T,R,X.camera,te,this.type)}X.isPointLightShadow!==!0&&this.type===si&&y(X,R),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,I)};function y(A,T){let R=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,R,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,R,f,x,null)}function _(A,T,R,M){let b=null,I=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)b=I;else if(b=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let U=b.uuid,k=T.uuid,V=l[U];V===void 0&&(V={},l[U]=V);let F=V[k];F===void 0&&(F=b.clone(),V[k]=F,T.addEventListener("dispose",E)),b=F}if(b.visible=T.visible,b.wireframe=T.wireframe,M===si?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=i.properties.get(b);U.light=R}return b}function v(A,T,R,M,b){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===si)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let k=e.update(A),V=A.material;if(Array.isArray(V)){let F=k.groups;for(let H=0,te=F.length;H<te;H++){let X=F[H],le=V[X.materialIndex];if(le&&le.visible){let ce=_(A,le,M,b);A.onBeforeShadow(i,A,T,R,k,ce,X),i.renderBufferDirect(R,null,k,ce,A,X),A.onAfterShadow(i,A,T,R,k,ce,X)}}}else if(V.visible){let F=_(A,V,M,b);A.onBeforeShadow(i,A,T,R,k,F,null),i.renderBufferDirect(R,null,k,F,A,null),A.onAfterShadow(i,A,T,R,k,F,null)}}let U=A.children;for(let k=0,V=U.length;k<V;k++)v(U[k],T,R,M,b)}function E(A){A.target.removeEventListener("dispose",E);for(let R in l){let M=l[R],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var tv={[po]:mo,[go]:vo,[_o]:yo,[cs]:xo,[mo]:po,[vo]:go,[yo]:_o,[xo]:cs};function nv(i,e){function t(){let D=!1,re=new nt,oe=null,_e=new nt(0,0,0,0);return{setMask:function(ne){oe!==ne&&!D&&(i.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){D=ne},setClear:function(ne,Z,ye,He,mt){mt===!0&&(ne*=He,Z*=He,ye*=He),re.set(ne,Z,ye,He),_e.equals(re)===!1&&(i.clearColor(ne,Z,ye,He),_e.copy(re))},reset:function(){D=!1,oe=null,_e.set(-1,0,0,0)}}}function n(){let D=!1,re=!1,oe=null,_e=null,ne=null;return{setReversed:function(Z){if(re!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=Z;let He=ne;ne=null,this.setClear(He)}},getReversed:function(){return re},setTest:function(Z){Z?Q(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!D&&(i.depthMask(Z),oe=Z)},setFunc:function(Z){if(re&&(Z=tv[Z]),_e!==Z){switch(Z){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case vo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Z}},setLocked:function(Z){D=Z},setClear:function(Z){ne!==Z&&(re&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){D=!1,oe=null,_e=null,ne=null,re=!1}}}function s(){let D=!1,re=null,oe=null,_e=null,ne=null,Z=null,ye=null,He=null,mt=null;return{setTest:function(at){D||(at?Q(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(at){re!==at&&!D&&(i.stencilMask(at),re=at)},setFunc:function(at,ui,$n){(oe!==at||_e!==ui||ne!==$n)&&(i.stencilFunc(at,ui,$n),oe=at,_e=ui,ne=$n)},setOp:function(at,ui,$n){(Z!==at||ye!==ui||He!==$n)&&(i.stencilOp(at,ui,$n),Z=at,ye=ui,He=$n)},setLocked:function(at){D=at},setClear:function(at){mt!==at&&(i.clearStencil(at),mt=at)},reset:function(){D=!1,re=null,oe=null,_e=null,ne=null,Z=null,ye=null,He=null,mt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,E=null,A=null,T=new Pe(0,0,0),R=0,M=!1,b=null,I=null,U=null,k=null,V=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=te>=2);let le=null,ce={},be=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),it=new nt().fromArray(be),pt=new nt().fromArray(ke);function et(D,re,oe,_e){let ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(D,Z),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<oe;ye++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}let Y={};Y[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(cs),Fe(!1),Me(El),Q(i.CULL_FACE),xt(Ei);function Q(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function xe(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Be(D,re){return u[D]!==re?(i.bindFramebuffer(D,re),u[D]=re,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(D,re){let oe=f,_e=!1;if(D){oe=d.get(re),oe===void 0&&(oe=[],d.set(re,oe));let ne=D.textures;if(oe.length!==ne.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ye=ne.length;Z<ye;Z++)oe[Z]=i.COLOR_ATTACHMENT0+Z;oe.length=ne.length,_e=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,_e=!0);_e&&i.drawBuffers(oe)}function Qe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let jt={[Fi]:i.FUNC_ADD,[od]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};jt[ld]=i.MIN,jt[hd]=i.MAX;let P={[ud]:i.ZERO,[dd]:i.ONE,[fd]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[bd]:i.ONE_MINUS_CONSTANT_COLOR,[Md]:i.CONSTANT_ALPHA,[Sd]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(D,re,oe,_e,ne,Z,ye,He,mt,at){if(D===Ei){x===!0&&(xe(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),D!==ad){if(D!==m||at!==M){if((p!==Fi||v!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,v=Fi),at)switch(D){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,_=null,E=null,A=null,T.set(0,0,0),R=0,m=D,M=at}return}ne=ne||re,Z=Z||oe,ye=ye||_e,(re!==p||ne!==v)&&(i.blendEquationSeparate(jt[re],jt[ne]),p=re,v=ne),(oe!==y||_e!==_||Z!==E||ye!==A)&&(i.blendFuncSeparate(P[oe],P[_e],P[Z],P[ye]),y=oe,_=_e,E=Z,A=ye),(He.equals(T)===!1||mt!==R)&&(i.blendColor(He.r,He.g,He.b,mt),T.copy(He),R=mt),m=D,M=!1}function Ve(D,re){D.side===An?xe(i.CULL_FACE):Q(i.CULL_FACE);let oe=D.side===sn;re&&(oe=!oe),Fe(oe),D.blending===os&&D.transparent===!1?xt(Ei):xt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let _e=D.stencilWrite;o.setTest(_e),_e&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function Me(D){D!==sd?(Q(i.CULL_FACE),D!==I&&(D===El?i.cullFace(i.BACK):D===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),I=D}function vt(D){D!==U&&(H&&i.lineWidth(D),U=D)}function Se(D,re,oe){D?(Q(i.POLYGON_OFFSET_FILL),(k!==re||V!==oe)&&(i.polygonOffset(re,oe),k=re,V=oe)):xe(i.POLYGON_OFFSET_FILL)}function $e(D){D?Q(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function zt(D){D===void 0&&(D=i.TEXTURE0+F-1),le!==D&&(i.activeTexture(D),le=D)}function Rt(D,re,oe){oe===void 0&&(le===null?oe=i.TEXTURE0+F-1:oe=le);let _e=ce[oe];_e===void 0&&(_e={type:void 0,texture:void 0},ce[oe]=_e),(_e.type!==D||_e.texture!==re)&&(le!==oe&&(i.activeTexture(oe),le=oe),i.bindTexture(D,re||Y[D]),_e.type=D,_e.texture=re)}function C(){let D=ce[le];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function De(D){pt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),pt.copy(D))}function we(D,re){let oe=l.get(re);oe===void 0&&(oe=new WeakMap,l.set(re,oe));let _e=oe.get(D);_e===void 0&&(_e=i.getUniformBlockIndex(re,D.name),oe.set(D,_e))}function de(D,re){let _e=l.get(re).get(D);c.get(re)!==_e&&(i.uniformBlockBinding(re,_e,D.__bindingPointIndex),c.set(re,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,ce={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,E=null,A=null,T=new Pe(0,0,0),R=0,M=!1,b=null,I=null,U=null,k=null,V=null,it.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:Be,drawBuffers:Re,useProgram:Qe,setBlending:xt,setMaterial:Ve,setFlipSided:Fe,setCullFace:Me,setLineWidth:vt,setPolygonOffset:Se,setScissorTest:$e,activeTexture:zt,bindTexture:Rt,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Te,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:Ae,scissor:pe,viewport:De,reset:Xe}}function iv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):qs("canvas")}function x(C,S,B){let q=1,J=Rt(C);if((J.width>B||J.height>B)&&(q=B/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(q*J.width),Ae=Math.floor(q*J.height);u===void 0&&(u=g($,Ae));let ae=S?g($,Ae):u;return ae.width=$,ae.height=Ae,ae.getContext("2d").drawImage(C,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+Ae+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,B,q,J=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),S===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let Ae=J?Cr:Je.getTransfer(q);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Ae===ct?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(C,S){let B;return C?S===null||S===Gi||S===cr?B=i.DEPTH24_STENCIL8:S===Rn?B=i.DEPTH32F_STENCIL8:S===ar&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===cr?B=i.DEPTH_COMPONENT24:S===Rn?B=i.DEPTH_COMPONENT32F:S===ar&&(B=i.DEPTH_COMPONENT16),B}function E(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&h.delete(S)}function T(C){let S=C.target;S.removeEventListener("dispose",T),b(S)}function R(C){let S=n.get(C);if(S.__webglInit===void 0)return;let B=C.source,q=d.get(B);if(q){let J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(q).length===0&&d.delete(B)}n.remove(C)}function M(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let B=C.source,q=d.get(B);delete q[S.__cacheKey],a.memory.textures--}function b(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[q][J]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=C.textures;for(let q=0,J=B.length;q<J;q++){let $=n.get(B[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(C)}let I=0;function U(){I=0}function k(){let C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function V(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function F(C,S){let B=n.get(C);if(C.isVideoTexture&&$e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,C,S);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function H(C,S){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Y(B,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function te(C,S){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Y(B,C,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function X(C,S){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Q(B,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}let le={[jn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Xs]:i.MIRRORED_REPEAT},ce={[$t]:i.NEAREST,[Eo]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[rr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},be={[Od]:i.NEVER,[Gd]:i.ALWAYS,[Bd]:i.LESS,[zl]:i.LEQUAL,[kd]:i.EQUAL,[Vd]:i.GEQUAL,[zd]:i.GREATER,[Hd]:i.NOTEQUAL};function ke(C,S){if(S.type===Rn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===rr||S.magFilter===_s||S.magFilter===Vn||S.minFilter===nn||S.minFilter===rr||S.minFilter===_s||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,le[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$t||S.minFilter!==_s&&S.minFilter!==Vn||S.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function it(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let q=S.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let $=V(S);if($!==C.__cacheKey){J[$]===void 0&&(J[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[$].usedTimes++;let Ae=J[C.__cacheKey];Ae!==void 0&&(J[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(S)),C.__cacheKey=$,C.__webglTexture=J[$].texture}return B}function pt(C,S,B){return Math.floor(Math.floor(C/B)/S)}function et(C,S,B,q){let $=C.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,q,S.data);else{$.sort((se,pe)=>se.start-pe.start);let Ae=0;for(let se=1;se<$.length;se++){let pe=$[Ae],De=$[se],we=pe.start+pe.count,de=pt(De.start,S.width,4),Xe=pt(pe.start,S.width,4);De.start<=we+1&&de===Xe&&pt(De.start+De.count-1,S.width,4)===de?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++Ae,$[Ae]=De)}$.length=Ae+1;let ae=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let se=0,pe=$.length;se<pe;se++){let De=$[se],we=Math.floor(De.start/4),de=Math.ceil(De.count/4),Xe=we%S.width,D=Math.floor(we/S.width),re=de,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Xe,D,re,oe,B,q,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Y(C,S,B){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);let J=it(C,S),$=S.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+B);let Ae=n.get($);if($.version!==Ae.__version||J===!0){t.activeTexture(i.TEXTURE0+B);let ae=Je.getPrimaries(Je.workingColorSpace),Ee=S.colorSpace===wi?null:Je.getPrimaries(S.colorSpace),Te=S.colorSpace===wi||ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let se=x(S.image,!1,s.maxTextureSize);se=zt(S,se);let pe=r.convert(S.format,S.colorSpace),De=r.convert(S.type),we=_(S.internalFormat,pe,De,S.colorSpace,S.isVideoTexture);ke(q,S);let de,Xe=S.mipmaps,D=S.isVideoTexture!==!0,re=Ae.__version===void 0||J===!0,oe=$.dataReady,_e=E(S,se);if(S.isDepthTexture)we=v(S.format===lr,S.type),re&&(D?t.texStorage2D(i.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,pe,De,null));else if(S.isDataTexture)if(Xe.length>0){D&&re&&t.texStorage2D(i.TEXTURE_2D,_e,we,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)de=Xe[ne],D?oe&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,pe,De,de.data):t.texImage2D(i.TEXTURE_2D,ne,we,de.width,de.height,0,pe,De,de.data);S.generateMipmaps=!1}else D?(re&&t.texStorage2D(i.TEXTURE_2D,_e,we,se.width,se.height),oe&&et(S,se,pe,De)):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,pe,De,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,we,Xe[0].width,Xe[0].height,se.depth);for(let ne=0,Z=Xe.length;ne<Z;ne++)if(de=Xe[ne],S.format!==xn)if(pe!==null)if(D){if(oe)if(S.layerUpdates.size>0){let ye=ql(de.width,de.height,S.format,S.type);for(let He of S.layerUpdates){let mt=de.data.subarray(He*ye/de.data.BYTES_PER_ELEMENT,(He+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,He,de.width,de.height,1,pe,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,pe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,we,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,pe,De,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,we,de.width,de.height,se.depth,0,pe,De,de.data)}else{D&&re&&t.texStorage2D(i.TEXTURE_2D,_e,we,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)de=Xe[ne],S.format!==xn?pe!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,pe,De,de.data):t.texImage2D(i.TEXTURE_2D,ne,we,de.width,de.height,0,pe,De,de.data)}else if(S.isDataArrayTexture)if(D){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,we,se.width,se.height,se.depth),oe)if(S.layerUpdates.size>0){let ne=ql(se.width,se.height,S.format,S.type);for(let Z of S.layerUpdates){let ye=se.data.subarray(Z*ne/se.data.BYTES_PER_ELEMENT,(Z+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,pe,De,ye)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,De,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,pe,De,se.data);else if(S.isData3DTexture)D?(re&&t.texStorage3D(i.TEXTURE_3D,_e,we,se.width,se.height,se.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,De,se.data)):t.texImage3D(i.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,pe,De,se.data);else if(S.isFramebufferTexture){if(re)if(D)t.texStorage2D(i.TEXTURE_2D,_e,we,se.width,se.height);else{let ne=se.width,Z=se.height;for(let ye=0;ye<_e;ye++)t.texImage2D(i.TEXTURE_2D,ye,we,ne,Z,0,pe,De,null),ne>>=1,Z>>=1}}else if(Xe.length>0){if(D&&re){let ne=Rt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,we,ne.width,ne.height)}for(let ne=0,Z=Xe.length;ne<Z;ne++)de=Xe[ne],D?oe&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe,De,de):t.texImage2D(i.TEXTURE_2D,ne,we,pe,De,de);S.generateMipmaps=!1}else if(D){if(re){let ne=Rt(se);t.texStorage2D(i.TEXTURE_2D,_e,we,ne.width,ne.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,De,se)}else t.texImage2D(i.TEXTURE_2D,0,we,pe,De,se);m(S)&&p(q),Ae.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,B){if(S.image.length!==6)return;let q=it(C,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let $=n.get(J);if(J.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+B);let Ae=Je.getPrimaries(Je.workingColorSpace),ae=S.colorSpace===wi?null:Je.getPrimaries(S.colorSpace),Ee=S.colorSpace===wi||Ae===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Te=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!Te&&!se?pe[Z]=x(S.image[Z],!0,s.maxCubemapSize):pe[Z]=se?S.image[Z].image:S.image[Z],pe[Z]=zt(S,pe[Z]);let De=pe[0],we=r.convert(S.format,S.colorSpace),de=r.convert(S.type),Xe=_(S.internalFormat,we,de,S.colorSpace),D=S.isVideoTexture!==!0,re=$.__version===void 0||q===!0,oe=J.dataReady,_e=E(S,De);ke(i.TEXTURE_CUBE_MAP,S);let ne;if(Te){D&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,De.width,De.height);for(let Z=0;Z<6;Z++){ne=pe[Z].mipmaps;for(let ye=0;ye<ne.length;ye++){let He=ne[ye];S.format!==xn?we!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,He.width,He.height,we,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,He.width,He.height,we,de,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Xe,He.width,He.height,0,we,de,He.data)}}}else{if(ne=S.mipmaps,D&&re){ne.length>0&&_e++;let Z=Rt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,we,de,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,pe[Z].width,pe[Z].height,0,we,de,pe[Z].data);for(let ye=0;ye<ne.length;ye++){let mt=ne[ye].image[Z].image;D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,mt.width,mt.height,we,de,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Xe,mt.width,mt.height,0,we,de,mt.data)}}else{D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,de,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,we,de,pe[Z]);for(let ye=0;ye<ne.length;ye++){let He=ne[ye];D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,we,de,He.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Xe,we,de,He.image[Z])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),$.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function xe(C,S,B,q,J,$){let Ae=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),Ee=_(B.internalFormat,Ae,ae,B.colorSpace),Te=n.get(S),se=n.get(B);if(se.__renderTarget=S,!Te.__hasExternalTextures){let pe=Math.max(1,S.width>>$),De=Math.max(1,S.height>>$);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Ee,pe,De,S.depth,0,Ae,ae,null):t.texImage2D(J,$,Ee,pe,De,0,Ae,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,se.__webglTexture,0,vt(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,se.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(C,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,$=v(S.stencilBuffer,J),Ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=vt(S);Se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,$,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{let q=S.textures;for(let J=0;J<q.length;J++){let $=q[J],Ae=r.convert($.format,$.colorSpace),ae=r.convert($.type),Ee=_($.internalFormat,Ae,ae,$.colorSpace),Te=vt(S);B&&Se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Ee,S.width,S.height):Se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),F(S.depthTexture,0);let J=q.__webglTexture,$=vt(S);if(S.depthTexture.format===$s)Se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===lr)Se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Qe(C){let S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let q=C.texture.mipmaps;q&&q.length>0?Re(S.__webglFramebuffer[0],C):Re(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Be(S.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Be(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(C,S,B){let q=n.get(C);S!==void 0&&xe(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Qe(C)}function P(C){let S=C.texture,B=n.get(C),q=n.get(S);C.addEventListener("dispose",T);let J=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ae=J.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)B.__webglFramebuffer[ae][Ee]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ae=0,Ee=J.length;ae<Ee;ae++){let Te=n.get(J[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Se(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){let Ee=J[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);let Te=r.convert(Ee.format,Ee.colorSpace),se=r.convert(Ee.type),pe=_(Ee.internalFormat,Te,se,Ee.colorSpace,C.isXRRenderTarget===!0),De=vt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)xe(B.__webglFramebuffer[ae][Ee],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else xe(B.__webglFramebuffer[ae],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,Ee=J.length;ae<Ee;ae++){let Te=J[ae],se=n.get(Te),pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,se.__webglTexture),ke(pe,Te),xe(B.__webglFramebuffer,C,Te,i.COLOR_ATTACHMENT0+ae,pe,0),m(Te)&&p(pe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),ke(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)xe(B.__webglFramebuffer[Ee],C,S,i.COLOR_ATTACHMENT0,ae,Ee);else xe(B.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}C.depthBuffer&&Qe(C)}function xt(C){let S=C.textures;for(let B=0,q=S.length;B<q;B++){let J=S[B];if(m(J)){let $=y(C),Ae=n.get(J).__webglTexture;t.bindTexture($,Ae),p($),t.unbindTexture()}}}let Ve=[],Fe=[];function Me(C){if(C.samples>0){if(Se(C)===!1){let S=C.textures,B=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,$=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),ae=S.length>1;if(ae)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let se=n.get(S[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,J,i.NEAREST),c===!0&&(Ve.length=0,Fe.length=0,Ve.push(i.COLOR_ATTACHMENT0+Te),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ve.push($),Fe.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);let se=n.get(S[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function vt(C){return Math.min(s.maxSamples,C.samples)}function Se(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function $e(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function zt(C,S){let B=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==qt&&B!==wi&&(Je.getTransfer(B)===ct?(q!==xn||J!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=jt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function sv(i,e){function t(n,s=wi){let r,a=Je.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ul)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===or)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Fl)return i.RGB;if(n===xn)return i.RGBA;if(n===$s)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Ro)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===Ol)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===oa||n===ca||n===la||n===ha)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Uo||n===No)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Oo||n===Bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===Oo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===qo||n===Yo||n===Zo||n===jo||n===Ko||n===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===ec||n===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qo)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hn({vertexShader:rv,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new ah,p={},y=t.getContextAttributes(),_=null,v=null,E=[],A=[],T=new ze,R=null,M=new Pt;M.viewport=new nt;let b=new Pt;b.viewport=new nt;let I=[M,b],U=new uo,k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=E[Y];return Q===void 0&&(Q=new Ks,E[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=E[Y];return Q===void 0&&(Q=new Ks,E[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=E[Y];return Q===void 0&&(Q=new Ks,E[Y]=Q),Q.getHandSpace()};function F(Y){let Q=A.indexOf(Y.inputSource);if(Q===-1)return;let xe=E[Q];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let Y=0;Y<E.length;Y++){let Q=A[Y];Q!==null&&(A[Y]=null,E[Y].disconnect(Q))}k=null,V=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(_),f=null,d=null,u=null,s=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,Re=null;y.depth&&(Re=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?lr:$s,Be=y.stencil?cr:Gi);let Qe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kn(d.textureWidth,d.textureHeight,{format:xn,type:Gn,depthTexture:new Xr(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(Y){for(let Q=0;Q<Y.removed.length;Q++){let xe=Y.removed[Q],Be=A.indexOf(xe);Be>=0&&(A[Be]=null,E[Be].disconnect(xe))}for(let Q=0;Q<Y.added.length;Q++){let xe=Y.added[Q],Be=A.indexOf(xe);if(Be===-1){for(let Qe=0;Qe<E.length;Qe++)if(Qe>=A.length){A.push(xe),Be=Qe;break}else if(A[Qe]===null){A[Qe]=xe,Be=Qe;break}if(Be===-1)break}let Re=E[Be];Re&&Re.connect(xe)}}let X=new L,le=new L;function ce(Y,Q,xe){X.setFromMatrixPosition(Q.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);let Be=X.distanceTo(le),Re=Q.projectionMatrix.elements,Qe=xe.projectionMatrix.elements,jt=Re[14]/(Re[10]-1),P=Re[14]/(Re[10]+1),xt=(Re[9]+1)/Re[5],Ve=(Re[9]-1)/Re[5],Fe=(Re[8]-1)/Re[0],Me=(Qe[8]+1)/Qe[0],vt=jt*Fe,Se=jt*Me,$e=Be/(-Fe+Me),zt=$e*-Fe;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Rt=jt+$e,C=P+$e,S=vt-zt,B=Se+(Be-zt),q=xt*P/C*Rt,J=Ve*P/C*Rt;Y.projectionMatrix.makePerspective(S,B,q,J,Rt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function be(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,xe=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),U.near=b.near=M.near=Q,U.far=b.far=M.far=xe,(k!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,V=U.far),U.layers.mask=Y.layers.mask|6,M.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;let Be=Y.parent,Re=U.cameras;be(U,Be);for(let Qe=0;Qe<Re.length;Qe++)be(Re[Qe],Be);Re.length===2?ce(U,M,b):U.projectionMatrix.copy(M.projectionMatrix),ke(Y,U,Be)};function ke(Y,Q,xe){xe===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let it=null;function pt(Y,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Be=!1;xe.length!==U.cameras.length&&(U.cameras.length=0,Be=!0);for(let P=0;P<xe.length;P++){let xt=xe[P],Ve=null;if(f!==null)Ve=f.getViewport(xt);else{let Me=u.getViewSubImage(d,xt);Ve=Me.viewport,P===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let Fe=I[P];Fe===void 0&&(Fe=new Pt,Fe.layers.enable(P),Fe.viewport=new nt,I[P]=Fe),Fe.matrix.fromArray(xt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(xt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),P===0&&(U.matrix.copy(Fe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Be===!0&&U.cameras.push(Fe)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let P=u.getDepthInformation(xe[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<xe.length;P++){let xt=xe[P].camera;if(xt){let Ve=p[xt];Ve||(Ve=new $r,p[xt]=Ve);let Fe=u.getCameraImage(xt);Ve.sourceTexture=Fe}}}}for(let xe=0;xe<E.length;xe++){let Be=A[xe],Re=E[xe];Be!==null&&Re!==void 0&&Re.update(Be,Q,l||a)}it&&it(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let et=new yf;et.setAnimationLoop(pt),this.setAnimationLoop=function(Y){it=Y},this.dispose=function(){}}},ys=new zn,ov=new Ge;function cv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,ys.copy(v),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(ys)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));let E=_.program;n.updateUBOMapping(y,E);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let _=u();y.__bindingPointIndex=_;let v=i.createBuffer(),E=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,T=v.length;A<T;A++){let R=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,b=R.length;M<b;M++){let I=R[M];if(f(I,A,M,E)===!0){let U=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],V=0;for(let F=0;F<k.length;F++){let H=k[F],te=x(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+V,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,E){let A=y.value,T=_+"_"+v;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{let R=E[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(y){let _=y.uniforms,v=0,E=16;for(let T=0,R=_.length;T<R;T++){let M=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,I=M.length;b<I;b++){let U=M[b],k=Array.isArray(U.value)?U.value:[U.value];for(let V=0,F=k.length;V<F;V++){let H=k[V],te=x(H),X=v%E,le=X%te.boundary,ce=X+le;v+=le,ce!==0&&E-ce<te.storage&&(v+=E-ce),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=te.storage}}}let A=v%E;return A>0&&(v+=E-A),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var hc=class{constructor(e={}){let{canvas:t=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=Tt;let A=0,T=0,R=null,M=-1,b=null,I=new nt,U=new nt,k=null,V=new Pe(0),F=0,H=t.width,te=t.height,X=1,le=null,ce=null,be=new nt(0,0,H,te),ke=new nt(0,0,H,te),it=!1,pt=new tr,et=!1,Y=!1,Q=new Ge,xe=new L,Be=new nt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function jt(){return R===null?X:1}let P=n;function xt(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),P===null){let N="webgl2";if(P=xt(N,w),P===null)throw xt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Fe,Me,vt,Se,$e,zt,Rt,C,S,B,q,J,$,Ae,ae,Ee,Te,se,pe,De,we,de,Xe;function D(){Ve=new A_(P),Ve.init(),we=new sv(P,Ve),Fe=new y_(P,Ve,e,we),Me=new nv(P,Ve),Fe.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),vt=new I_(P),Se=new Gx,$e=new iv(P,Ve,Me,Se,Fe,we,vt),zt=new M_(v),Rt=new w_(v),C=new Fm(P),de=new x_(P,C),S=new R_(P,C,vt,de),B=new L_(P,S,C,vt),se=new P_(P,Fe,$e),ae=new b_(Se),q=new Vx(v,zt,Rt,Ve,Fe,de,ae),J=new cv(v,Se),$=new Xx,Ae=new Kx(Ve),Te=new __(v,zt,Rt,Me,B,f,c),Ee=new ev(v,B,Fe),Xe=new lv(P,vt,Fe,Me),pe=new v_(P,Ve,vt),De=new C_(P,Ve,vt),vt.programs=q.programs,v.capabilities=Fe,v.extensions=Ve,v.properties=Se,v.renderLists=$,v.shadowMap=Ee,v.state=Me,v.info=vt}D();let re=new oh(v,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,te,!1))},this.getSize=function(w){return w.set(H,te)},this.setSize=function(w,N,G=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,te=N,t.width=Math.floor(w*X),t.height=Math.floor(N*X),G===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(H*X,te*X).floor()},this.setDrawingBufferSize=function(w,N,G){H=w,te=N,X=G,t.width=Math.floor(w*G),t.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,N,G,W){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,N,G,W),Me.viewport(I.copy(be).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ke)},this.setScissor=function(w,N,G,W){w.isVector4?ke.set(w.x,w.y,w.z,w.w):ke.set(w,N,G,W),Me.scissor(U.copy(ke).multiplyScalar(X).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(w){Me.setScissorTest(it=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,G=!0){let W=0;if(w){let O=!1;if(R!==null){let ie=R.texture.format;O=ie===Po||ie===Io||ie===Co}if(O){let ie=R.texture.type,fe=ie===Gn||ie===Gi||ie===ar||ie===cr||ie===wo||ie===Ao,ve=Te.getClearColor(),ge=Te.getClearAlpha(),Le=ve.r,Oe=ve.g,Ce=ve.b;fe?(g[0]=Le,g[1]=Oe,g[2]=Ce,g[3]=ge,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Le,x[1]=Oe,x[2]=Ce,x[3]=ge,P.clearBufferiv(P.COLOR,0,x))}else W|=P.COLOR_BUFFER_BIT}N&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Te.dispose(),$.dispose(),Ae.dispose(),Se.dispose(),zt.dispose(),Rt.dispose(),B.dispose(),de.dispose(),Xe.dispose(),q.dispose(),re.dispose(),re.removeEventListener("sessionstart",$n),re.removeEventListener("sessionend",pu),es.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=vt.autoReset,N=Ee.enabled,G=Ee.autoUpdate,W=Ee.needsUpdate,O=Ee.type;D(),vt.autoReset=w,Ee.enabled=N,Ee.autoUpdate=G,Ee.needsUpdate=W,Ee.type=O}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Z(w){let N=w.target;N.removeEventListener("dispose",Z),ye(N)}function ye(w){He(w),Se.remove(w)}function He(w){let N=Se.get(w).programs;N!==void 0&&(N.forEach(function(G){q.releaseProgram(G)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,W,O,ie){N===null&&(N=Re);let fe=O.isMesh&&O.matrixWorld.determinant()<0,ve=Ip(w,N,G,W,O);Me.setMaterial(W,fe);let ge=G.index,Le=1;if(W.wireframe===!0){if(ge=S.getWireframeAttribute(G),ge===void 0)return;Le=2}let Oe=G.drawRange,Ce=G.attributes.position,Ke=Oe.start*Le,lt=(Oe.start+Oe.count)*Le;ie!==null&&(Ke=Math.max(Ke,ie.start*Le),lt=Math.min(lt,(ie.start+ie.count)*Le)),ge!==null?(Ke=Math.max(Ke,0),lt=Math.min(lt,ge.count)):Ce!=null&&(Ke=Math.max(Ke,0),lt=Math.min(lt,Ce.count));let At=lt-Ke;if(At<0||At===1/0)return;de.setup(O,W,ve,G,ge);let _t,ut=pe;if(ge!==null&&(_t=C.get(ge),ut=De,ut.setIndex(_t)),O.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*jt()),ut.setMode(P.LINES)):ut.setMode(P.TRIANGLES);else if(O.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*jt()),O.isLineSegments?ut.setMode(P.LINES):O.isLineLoop?ut.setMode(P.LINE_LOOP):ut.setMode(P.LINE_STRIP)}else O.isPoints?ut.setMode(P.POINTS):O.isSprite&&ut.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ie=O._multiDrawStarts,St=O._multiDrawCounts,tt=O._multiDrawCount,pn=ge?C.get(ge).bytesPerElement:1,Cs=Se.get(W).currentProgram.getUniforms();for(let mn=0;mn<tt;mn++)Cs.setValue(P,"_gl_DrawID",mn),ut.render(Ie[mn]/pn,St[mn])}else if(O.isInstancedMesh)ut.renderInstances(Ke,At,O.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,St=Math.min(G.instanceCount,Ie);ut.renderInstances(Ke,At,St)}else ut.render(Ke,At)};function mt(w,N,G){w.transparent===!0&&w.side===An&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,ba(w,N,G),w.side=kn,w.needsUpdate=!0,ba(w,N,G),w.side=An):ba(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),p=Ae.get(G),p.init(N),_.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==G&&w.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ie=O.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){let ve=ie[fe];mt(ve,G,O),W.add(ve)}else mt(ie,G,O),W.add(ie)}),p=_.pop(),W},this.compileAsync=function(w,N,G=null){let W=this.compile(w,N,G);return new Promise(O=>{function ie(){if(W.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){O(w);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let at=null;function ui(w){at&&at(w)}function $n(){es.stop()}function pu(){es.start()}let es=new yf;es.setAnimationLoop(ui),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(w){at=w,re.setAnimationLoop(w),w===null?es.stop():es.start()},re.addEventListener("sessionstart",$n),re.addEventListener("sessionend",pu),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,R),p=Ae.get(w,_.length),p.init(N),_.push(p),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),pt.setFromProjectionMatrix(Q,On,N.reversedDepth),Y=this.localClippingEnabled,et=ae.init(this.clippingPlanes,Y),m=$.get(w,y.length),m.init(),y.push(m),re.enabled===!0&&re.isPresenting===!0){let ie=v.xr.getDepthSensingMesh();ie!==null&&Oc(ie,N,-1/0,v.sortObjects)}Oc(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,ce),Qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Qe&&Te.addToRenderList(m,w),this.info.render.frame++,et===!0&&ae.beginShadows();let G=p.state.shadowsArray;Ee.render(G,w,N),et===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ie=N.cameras;if(O.length>0)for(let fe=0,ve=ie.length;fe<ve;fe++){let ge=ie[fe];gu(W,O,w,ge)}Qe&&Te.render(w);for(let fe=0,ve=ie.length;fe<ve;fe++){let ge=ie[fe];mu(m,w,ge,ge.viewport)}}else O.length>0&&gu(W,O,w,N),Qe&&Te.render(w),mu(m,w,N);R!==null&&T===0&&($e.updateMultisampleRenderTarget(R),$e.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,N),de.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],et===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Oc(w,N,G,W){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pt.intersectsSprite(w)){W&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let fe=B.update(w),ve=w.material;ve.visible&&m.push(w,fe,ve,G,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pt.intersectsObject(w))){let fe=B.update(w),ve=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(ve)){let ge=fe.groups;for(let Le=0,Oe=ge.length;Le<Oe;Le++){let Ce=ge[Le],Ke=ve[Ce.materialIndex];Ke&&Ke.visible&&m.push(w,fe,Ke,G,Be.z,Ce)}}else ve.visible&&m.push(w,fe,ve,G,Be.z,null)}}let ie=w.children;for(let fe=0,ve=ie.length;fe<ve;fe++)Oc(ie[fe],N,G,W)}function mu(w,N,G,W){let O=w.opaque,ie=w.transmissive,fe=w.transparent;p.setupLightsView(G),et===!0&&ae.setGlobalState(v.clippingPlanes,G),W&&Me.viewport(I.copy(W)),O.length>0&&ya(O,N,G),ie.length>0&&ya(ie,N,G),fe.length>0&&ya(fe,N,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function gu(w,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Kn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?or:Gn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ie=p.state.transmissionRenderTarget[W.id],fe=W.viewport||I;ie.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);let ve=v.getRenderTarget(),ge=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(V),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&Te.render(G);let Oe=v.toneMapping;v.toneMapping=Ti;let Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),et===!0&&ae.setGlobalState(v.clippingPlanes,W),ya(w,G,W),$e.updateMultisampleRenderTarget(ie),$e.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let lt=0,At=N.length;lt<At;lt++){let _t=N[lt],ut=_t.object,Ie=_t.geometry,St=_t.material,tt=_t.group;if(St.side===An&&ut.layers.test(W.layers)){let pn=St.side;St.side=sn,St.needsUpdate=!0,_u(ut,G,W,Ie,St,tt),St.side=pn,St.needsUpdate=!0,Ke=!0}}Ke===!0&&($e.updateMultisampleRenderTarget(ie),$e.updateRenderTargetMipmap(ie))}v.setRenderTarget(ve,ge,Le),v.setClearColor(V,F),Ce!==void 0&&(W.viewport=Ce),v.toneMapping=Oe}function ya(w,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ie=w.length;O<ie;O++){let fe=w[O],ve=fe.object,ge=fe.geometry,Le=fe.group,Oe=fe.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),ve.layers.test(G.layers)&&_u(ve,N,G,ge,Oe,Le)}}function _u(w,N,G,W,O,ie){w.onBeforeRender(v,N,G,W,O,ie),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,N,G,W,w,ie),O.transparent===!0&&O.side===An&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,v.renderBufferDirect(G,N,W,O,w,ie),O.side=kn,O.needsUpdate=!0,v.renderBufferDirect(G,N,W,O,w,ie),O.side=An):v.renderBufferDirect(G,N,W,O,w,ie),w.onAfterRender(v,N,G,W,O,ie)}function ba(w,N,G){N.isScene!==!0&&(N=Re);let W=Se.get(w),O=p.state.lights,ie=p.state.shadowsArray,fe=O.state.version,ve=q.getParameters(w,O.state,ie,N,G),ge=q.getProgramCacheKey(ve),Le=W.programs;W.environment=w.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(w.isMeshStandardMaterial?Rt:zt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Z),Le=new Map,W.programs=Le);let Oe=Le.get(ge);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===fe)return vu(w,ve),Oe}else ve.uniforms=q.getUniforms(w),w.onBeforeCompile(ve,v),Oe=q.acquireProgram(ve,ge),Le.set(ge,Oe),W.uniforms=ve.uniforms;let Ce=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),vu(w,ve),W.needsLights=Lp(w),W.lightsStateVersion=fe,W.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function xu(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=fr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function vu(w,N){let G=Se.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Ip(w,N,G,W,O){N.isScene!==!0&&(N=Re),$e.resetTextureUnits();let ie=N.fog,fe=W.isMeshStandardMaterial?N.environment:null,ve=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qt,ge=(W.isMeshStandardMaterial?Rt:zt).get(W.envMap||fe),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color,At=Ti;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=v.toneMapping);let _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=_t!==void 0?_t.length:0,Ie=Se.get(W),St=p.state.lights;if(et===!0&&(Y===!0||w!==b)){let en=w===b&&W.id===M;ae.setState(W,w,en)}let tt=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==St.state.version||Ie.outputColorSpace!==ve||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==ge||W.fog===!0&&Ie.fog!==ie||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Oe||Ie.morphTargets!==Ce||Ie.morphNormals!==Ke||Ie.morphColors!==lt||Ie.toneMapping!==At||Ie.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Ie.__version=W.version);let pn=Ie.currentProgram;tt===!0&&(pn=ba(W,N,O));let Cs=!1,mn=!1,xr=!1,Et=pn.getUniforms(),Sn=Ie.uniforms;if(Me.useProgram(pn.program)&&(Cs=!0,mn=!0,xr=!0),W.id!==M&&(M=W.id,mn=!0),Cs||b!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Et.setValue(P,"projectionMatrix",w.projectionMatrix),Et.setValue(P,"viewMatrix",w.matrixWorldInverse);let an=Et.map.cameraPosition;an!==void 0&&an.setValue(P,xe.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,mn=!0,xr=!0)}if(O.isSkinnedMesh){Et.setOptional(P,O,"bindMatrix"),Et.setOptional(P,O,"bindMatrixInverse");let en=O.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Et.setValue(P,"boneTexture",en.boneTexture,$e))}O.isBatchedMesh&&(Et.setOptional(P,O,"batchingTexture"),Et.setValue(P,"batchingTexture",O._matricesTexture,$e),Et.setOptional(P,O,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",O._indirectTexture,$e),Et.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",O._colorsTexture,$e));let En=G.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&se.update(O,G,pn),(mn||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,Et.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Sn.envMap.value=ge,Sn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),mn&&(Et.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&Pp(Sn,xr),ie&&W.fog===!0&&J.refreshFogUniforms(Sn,ie),J.refreshMaterialUniforms(Sn,W,X,te,p.state.transmissionRenderTarget[w.id]),fr.upload(P,xu(Ie),Sn,$e)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fr.upload(P,xu(Ie),Sn,$e),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(P,"center",O.center),Et.setValue(P,"modelViewMatrix",O.modelViewMatrix),Et.setValue(P,"normalMatrix",O.normalMatrix),Et.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let en=W.uniformsGroups;for(let an=0,Bc=en.length;an<Bc;an++){let ts=en[an];Xe.update(ts,pn),Xe.bind(ts,pn)}}return pn}function Pp(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Lp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,G){let W=Se.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Se.get(w.texture).__webglTexture=N,Se.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){let G=Se.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};let Dp=P.createFramebuffer();this.setRenderTarget=function(w,N=0,G=0){R=w,A=N,T=G;let W=!0,O=null,ie=!1,fe=!1;if(w){let ge=Se.get(w);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(w);else if(ge.__hasExternalTextures)$e.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ce=w.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&Se.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(w)}}let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);let Oe=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?O=Oe[N][G]:O=Oe[N],ie=!0):w.samples>0&&$e.useMultisampledRTT(w)===!1?O=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?O=Oe[G]:O=Oe,I.copy(w.viewport),U.copy(w.scissor),k=w.scissorTest}else I.copy(be).multiplyScalar(X).floor(),U.copy(ke).multiplyScalar(X).floor(),k=it;if(G!==0&&(O=Dp),Me.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&Me.drawBuffers(w,O),Me.viewport(I),Me.scissor(U),Me.setScissorTest(k),ie){let ge=Se.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,G)}else if(fe){let ge=N;for(let Le=0;Le<w.textures.length;Le++){let Oe=Se.get(w.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,G,ge)}}else if(w!==null&&G!==0){let ge=Se.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(w,N,G,W,O,ie,fe,ve=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Me.bindFramebuffer(P.FRAMEBUFFER,ge);try{let Le=w.textures[ve],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-W&&G>=0&&G<=w.height-O&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(N,G,W,O,we.convert(Oe),we.convert(Ce),ie))}finally{let Le=R!==null?Se.get(R).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,W,O,ie,fe,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(N>=0&&N<=w.width-W&&G>=0&&G<=w.height-O){Me.bindFramebuffer(P.FRAMEBUFFER,ge);let Le=w.textures[ve],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(N,G,W,O,we.convert(Oe),we.convert(Ce),0);let lt=R!==null?Se.get(R).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,lt);let At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Xd(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Ke),P.deleteSync(At),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,G=0){let W=Math.pow(2,-G),O=Math.floor(w.image.width*W),ie=Math.floor(w.image.height*W),fe=N!==null?N.x:0,ve=N!==null?N.y:0;$e.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,fe,ve,O,ie),Me.unbindTexture()};let Up=P.createFramebuffer(),Np=P.createFramebuffer();this.copyTextureToTexture=function(w,N,G=null,W=null,O=0,ie=null){ie===null&&(O!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let fe,ve,ge,Le,Oe,Ce,Ke,lt,At,_t=w.isCompressedTexture?w.mipmaps[ie]:w.image;if(G!==null)fe=G.max.x-G.min.x,ve=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Oe=G.min.y,Ce=G.isBox3?G.min.z:0;else{let En=Math.pow(2,-O);fe=Math.floor(_t.width*En),ve=Math.floor(_t.height*En),w.isDataArrayTexture?ge=_t.depth:w.isData3DTexture?ge=Math.floor(_t.depth*En):ge=1,Le=0,Oe=0,Ce=0}W!==null?(Ke=W.x,lt=W.y,At=W.z):(Ke=0,lt=0,At=0);let ut=we.convert(N.format),Ie=we.convert(N.type),St;N.isData3DTexture?($e.setTexture3D(N,0),St=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($e.setTexture2DArray(N,0),St=P.TEXTURE_2D_ARRAY):($e.setTexture2D(N,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let tt=P.getParameter(P.UNPACK_ROW_LENGTH),pn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Cs=P.getParameter(P.UNPACK_SKIP_PIXELS),mn=P.getParameter(P.UNPACK_SKIP_ROWS),xr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);let Et=w.isDataArrayTexture||w.isData3DTexture,Sn=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){let En=Se.get(w),en=Se.get(N),an=Se.get(En.__renderTarget),Bc=Se.get(en.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,an.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bc.__webglFramebuffer);for(let ts=0;ts<ge;ts++)Et&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,O,Ce+ts),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,ie,At+ts)),P.blitFramebuffer(Le,Oe,fe,ve,Ke,lt,fe,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||Se.has(w)){let En=Se.get(w),en=Se.get(N);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Up),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Np);for(let an=0;an<ge;an++)Et?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,En.__webglTexture,O,Ce+an):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,En.__webglTexture,O),Sn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,ie,At+an):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,ie),O!==0?P.blitFramebuffer(Le,Oe,fe,ve,Ke,lt,fe,ve,P.COLOR_BUFFER_BIT,P.NEAREST):Sn?P.copyTexSubImage3D(St,ie,Ke,lt,At+an,Le,Oe,fe,ve):P.copyTexSubImage2D(St,ie,Ke,lt,Le,Oe,fe,ve);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Sn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(St,ie,Ke,lt,At,fe,ve,ge,ut,Ie,_t.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(St,ie,Ke,lt,At,fe,ve,ge,ut,_t.data):P.texSubImage3D(St,ie,Ke,lt,At,fe,ve,ge,ut,Ie,_t):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ie,Ke,lt,fe,ve,ut,Ie,_t.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ie,Ke,lt,_t.width,_t.height,ut,_t.data):P.texSubImage2D(P.TEXTURE_2D,ie,Ke,lt,fe,ve,ut,Ie,_t);P.pixelStorei(P.UNPACK_ROW_LENGTH,tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Cs),P.pixelStorei(P.UNPACK_SKIP_ROWS,mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,xr),ie===0&&N.generateMipmaps&&P.generateMipmap(St),Me.unbindTexture()},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&$e.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$e.setTextureCube(w,0):w.isData3DTexture?$e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$e.setTexture2DArray(w,0):$e.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Vt=[{id:"ceo",kind:"space",short:"Mi oficina",name:"Oficina del CEO",sub:"Direcci\xF3n y aprobaciones",accent:"#c9a25e",floor:"walnut",wall:"#efe4d2"},{id:"direction",kind:"department",dept:"Direcci\xF3n estrat\xE9gica",short:"Direcci\xF3n",name:"Direcci\xF3n Estrat\xE9gica",sub:"Prioridades y coordinaci\xF3n",accent:"#b88746",floor:"oak",wall:"#f1e7d6"},{id:"marketing",kind:"department",dept:"Marketing y crecimiento",short:"Marketing",name:"Marketing y Crecimiento",sub:"Estrategia y campa\xF1as",accent:"#2f9e8f",floor:"oak",wall:"#e8efe9"},{id:"content",kind:"department",dept:"Producci\xF3n de contenido",short:"Contenido",name:"Producci\xF3n de Contenido",sub:"Guion, edici\xF3n y medios",accent:"#e08a3c",floor:"oak",wall:"#f3e6d8"},{id:"creative",kind:"space",short:"Estudio",name:"Estudio Creativo y Multimedia",sub:"Grabaci\xF3n y PULSE STUDIO",accent:"#d9653b",floor:"concrete",wall:"#e6e2dc"},{id:"sales",kind:"department",dept:"Ventas y patrocinios",short:"Ventas",name:"Ventas y Patrocinios",sub:"Propuestas y negociaci\xF3n",accent:"#2d4f8a",floor:"walnut",wall:"#e9e6df"},{id:"relations",kind:"department",dept:"Relaciones p\xFAblicas y alianzas",short:"Alianzas",name:"Relaciones P\xFAblicas y Alianzas",sub:"V\xEDnculos profesionales",accent:"#9a7cc4",floor:"oak",wall:"#eee8f1"},{id:"boardroom",kind:"space",short:"Juntas",name:"Sala de Juntas",sub:"Decisiones del CEO",accent:"#5b6b8c",floor:"walnut",wall:"#e7e5e1"},{id:"missions",kind:"space",short:"Misiones",name:"Gesti\xF3n de Misiones",sub:"Etapas y responsables",accent:"#c46a4a",floor:"concrete",wall:"#ece7e0"},{id:"collab",kind:"space",short:"Colaboraci\xF3n",name:"Colaboraci\xF3n entre Departamentos",sub:"Traspasos de misi\xF3n",accent:"#4d9a6a",floor:"oak",wall:"#e8eee6"},{id:"events",kind:"department",dept:"Eventos y experiencias",short:"Eventos",name:"Eventos y Experiencias",sub:"Producci\xF3n y log\xEDstica",accent:"#c4417a",floor:"concrete",wall:"#f1e4ea"},{id:"community",kind:"department",dept:"Comunidad",short:"Comunidad",name:"Comunidad",sub:"Escucha y participaci\xF3n",accent:"#e07a5f",floor:"oak",wall:"#f4e9e1"},{id:"intelligence",kind:"department",dept:"Inteligencia de mercado",short:"Inteligencia",name:"Inteligencia de Mercado",sub:"Investigaci\xF3n y tendencias",accent:"#3a78c2",floor:"concrete",wall:"#e4eaf1"},{id:"finance",kind:"department",dept:"Finanzas y administraci\xF3n",short:"Finanzas",name:"Finanzas y Administraci\xF3n",sub:"Presupuesto y control",accent:"#5d8a4e",floor:"walnut",wall:"#e9ece2"},{id:"technology",kind:"department",dept:"Tecnolog\xEDa y automatizaci\xF3n",short:"Tecnolog\xEDa",name:"Tecnolog\xEDa y Automatizaci\xF3n",sub:"Sistemas y automatizaciones",accent:"#2a9bb5",floor:"concrete",wall:"#e2eaee"},{id:"rest",kind:"space",short:"Descanso",name:"\xC1rea de Descanso",sub:"Caf\xE9 y pausa",accent:"#8a9a5b",floor:"oak",wall:"#efeadf"}],Ss=[{id:"a-direction",room:"direction",name:"Ulises",species:"owl",role:"Director de estrategia",portrait:"direction",palette:{body:"#9a6a3a",belly:"#e9d2a8",accent:"#2f4a3a",eye:"#f2a33a",beak:"#e0a93b"},prop:"clipboard"},{id:"a-marketing",room:"marketing",name:"Kiki",species:"hummingbird",role:"Estratega de crecimiento",portrait:"marketing",palette:{body:"#1f9e86",belly:"#f2efe1",accent:"#1b6b4f",eye:"#3a2a1a",beak:"#2b2b2b"},prop:"clipboard"},{id:"a-content",room:"content",name:"M\xEDa",species:"cat",role:"Productora de contenido",portrait:"content",palette:{body:"#e8953a",belly:"#fbe7c6",accent:"#2b2b2b",eye:"#5aa04a",beak:"#e57f8a"},prop:"camera"},{id:"a-sales",room:"sales",name:"Rocco",species:"raccoon",role:"Ejecutivo de patrocinios",portrait:"sales",palette:{body:"#8a7764",belly:"#e9e0d2",accent:"#22355e",eye:"#2b1d12",beak:"#2b2b2b"},prop:"briefcase"},{id:"a-relations",room:"relations",name:"Lila",species:"bunny",role:"Enlace de alianzas",portrait:"relations",palette:{body:"#c9b8e6",belly:"#f6f1fb",accent:"#7d5aa8",eye:"#6b4aa8",beak:"#e6a3b8"},prop:"book"},{id:"a-events",room:"events",name:"Luz",species:"moth",role:"Productora de experiencias",portrait:"events",palette:{body:"#b8325e",belly:"#fbeaea",accent:"#e86aa0",eye:"#2b1020",beak:"#2b1020"},prop:"glowstick"},{id:"a-community",room:"community",name:"Cata",species:"capybara",role:"Anfitriona de comunidad",portrait:"community",palette:{body:"#a87650",belly:"#c99a72",accent:"#ef7f63",eye:"#2b1d12",beak:"#5a3a26"},prop:"tablet"},{id:"a-intelligence",room:"intelligence",name:"Iris",species:"owl",role:"Analista de mercado",portrait:"intelligence",palette:{body:"#5f8fd0",belly:"#e9f0fb",accent:"#26324a",eye:"#f2a33a",beak:"#e0a93b"},prop:"tablet",glasses:!0},{id:"a-finance",room:"finance",name:"Tom\xE1s",species:"turtle",role:"Controlador financiero",portrait:"finance",palette:{body:"#7fae63",belly:"#d9e6b8",accent:"#2f4a2a",eye:"#2b1d12",beak:"#6b8f4e",shell:"#8a5a2f"},prop:"book",glasses:!0},{id:"a-technology",room:"technology",name:"Bit",species:"robot",role:"Ingeniero de automatizaci\xF3n",portrait:"technology",palette:{body:"#2f7f9a",belly:"#d7e6ea",accent:"#f08a24",eye:"#6ff5ff",beak:"#1a2a33"},prop:"tablet"}],ai=i=>Vt.find(e=>e.id===i),lh=i=>Vt.findIndex(e=>e.id===i);var Xi=i=>Ss.find(e=>ai(e.room)?.dept===i)||null;var $i=.84,un=-3.6,hv=3.4,ft=6.6*$i,Tf=3.1*$i,Gt=un*$i,gt=hv*$i,Yt=gt+1.7,fc=.75,pc=2.5,qi=1.35,mr=.42,uv=i=>i*ft,j=(i,e,t,n=0,s={})=>({m:i,x:e,z:t,r:n,...s}),Ne=(i,e,t,n=0,s={})=>({p:i,x:e,z:t,r:n,...s});function dv(i,e,t={}){let n=[j("desk",i,e,0,{hot:"desk"}),j("chairDesk",i,e-.62,0,{block:!1,seat:!0,tint:"#3f3b38"}),j("laptop",i-.1,e-.05,180,{onTop:.76,block:!1}),Ne("statusLamp",i+.55,e-.02,0,{onTop:.76,block:!1}),Ne("tray",i-.56,e+.04,0,{onTop:.76,block:!1,hot:"tray"})];return t.second&&n.push(j("computerScreen",i+.2,e-.12,180,{onTop:.76,block:!1})),n}function dc(i){return[Ne("window",-1.6,un,0,{w:1.6,h:1,y:1}),Ne("sign",-1.6,un,0,{w:1.7,h:.42,y:2.08,text:i.short,accent:i.accent})]}var hh={x:-.9,z:-2.1},fv=(i=hh)=>({x:i.x,z:i.z-.62,face:0,pose:"sit"});function oi(i,e,t){let n=[...dv(hh.x,hh.z,{second:i.id==="technology"||i.id==="intelligence"}),Ne("board",1.55,un,0,{w:1.8,h:1.05,y:1.05,hot:"board",accent:i.accent}),j("bookcaseClosedWide",-2.75,-.9,90,{hot:"shelf"}),j("pottedPlant",-2.75,-2.95,0),j("pottedPlant",2.8,2.9,0),j("lampRoundFloor",2.85,-3.2,0,{block:!0}),...dc(i),...e],s={desk:fv(),board:{x:1.55,z:-2.75,face:180,pose:"stand"},shelf:{x:-2.05,z:-.9,face:-90,pose:"stand"},plant:{x:2.25,z:2.35,face:45,pose:"stand"},window:{x:-1.6,z:-3.05,face:180,pose:"stand"},door:{x:0,z:2.85,face:0,pose:"stand"},...t};return{items:n,stations:s}}var pv={direction:i=>oi(i,[j("rugRectangle",.9,.9,0,{block:!1}),j("tableGlass",.9,.9,0),j("chairCushion",.45,1.65,180,{fabric:!0}),j("chairCushion",1.35,1.65,180,{fabric:!0}),j("chairCushion",.45,.15,0,{fabric:!0}),j("chairCushion",1.35,.15,0,{fabric:!0}),Ne("globe",-2.6,1.6,0),j("loungeChair",-2.3,2.6,135,{fabric:!0})],{meet:{x:.9,z:2.1,face:180,pose:"stand"}}),marketing:i=>oi(i,[Ne("cardsWall",2.95,-.6,-90,{accent:i.accent}),j("rugRound",.9,1,0,{block:!1}),j("tableRound",.9,1,0),j("stoolBar",.2,1,90,{fabric:!0}),j("stoolBar",1.6,1,-90,{fabric:!0}),j("loungeSofa",-1.9,2.55,0,{fabric:!0}),Ne("easel",2.4,1.6,-60,{accent:i.accent})],{meet:{x:.9,z:1.9,face:180,pose:"stand"},cards:{x:2.3,z:-.6,face:90,pose:"stand"}}),content:i=>oi(i,[Ne("greenScreen",1.6,-2.9,0),Ne("tripod",1.5,-.6,180),Ne("softbox",2.55,-1.3,210),Ne("softbox",.6,-1.4,150),j("loungeChair",1.55,-2.05,0,{fabric:!0}),j("rugRectangle",-1.3,1.5,0,{block:!1}),j("sideTableDrawers",-2.55,2.75,90),j("loungeDesignSofa",-1.2,2.65,0,{fabric:!0})],{board:{x:1.5,z:.05,face:180,pose:"stand"},set:{x:1.55,z:-1.5,face:0,pose:"stand"}}),sales:i=>oi(i,[j("rugRectangle",.8,1,0,{block:!1}),Ne("longTable",.8,1,0,{w:2.2,d:1}),j("chairModernCushion",.2,1.75,180,{fabric:!0}),j("chairModernCushion",1.4,1.75,180,{fabric:!0}),j("chairModernCushion",.2,.25,0,{fabric:!0}),j("chairModernCushion",1.4,.25,0,{fabric:!0}),Ne("podium",2.6,2.6,-30,{accent:i.accent}),j("sideTable",-2.6,2.6,90)],{meet:{x:.8,z:2.25,face:180,pose:"stand"}}),relations:i=>oi(i,[Ne("pressWall",2.95,.4,-90,{accent:i.accent}),j("rugRound",.4,1.2,0,{block:!1}),j("loungeSofa",.4,2.1,180,{fabric:!0}),j("loungeChair",-.75,1,90,{fabric:!0}),j("tableCoffee",.55,1.15,0),j("loungeChair",1.55,1,-90,{fabric:!0})],{press:{x:2.3,z:.4,face:90,pose:"stand"}}),events:i=>oi(i,[Ne("stage",1.3,.6,0,{accent:i.accent}),Ne("balloons",2.75,2.6,0,{accent:i.accent}),Ne("balloons",-2.6,2.7,0,{accent:"#f2c14e"}),j("stoolBar",-.9,1.4,0,{fabric:!0})],{stage:{x:1.3,z:1.35,face:180,pose:"stand"}}),community:i=>oi(i,[j("rugRound",.8,1.2,0,{block:!1}),j("loungeDesignSofa",.8,2.25,180,{fabric:!0}),j("loungeDesignChair",.85,.15,0,{fabric:!0}),j("tableCoffeeGlassSquare",.85,1.2,0),Ne("chatScreen",2.95,-.6,-90,{accent:i.accent}),j("benchCushion",-2.6,2.3,90,{fabric:!0})],{meet:{x:1.9,z:1.2,face:-90,pose:"stand"}}),intelligence:i=>oi(i,[Ne("dataWall",2.95,-.7,-90,{accent:i.accent}),j("rugRectangle",.6,1.2,0,{block:!1}),Ne("longTable",.6,1.2,0,{w:1.9,d:1,map:!0}),j("chairDesk",-.1,2,180),j("chairDesk",1.3,2,180),j("bookcaseOpenLow",-2.8,2.3,90)],{meet:{x:.6,z:.35,face:0,pose:"stand"},wall:{x:2.3,z:-.7,face:90,pose:"stand"}}),finance:i=>oi(i,[Ne("cabinet",2.85,-.4,-90),Ne("cabinet",2.85,.25,-90),Ne("cabinet",2.85,.9,-90),Ne("safe",2.75,2.4,-60),j("rugRectangle",.4,1.4,0,{block:!1}),j("deskCorner",0,1.6,0),j("chairCushion",.5,2.5,180,{fabric:!0})],{files:{x:2.2,z:.25,face:90,pose:"stand"}}),technology:i=>oi(i,[Ne("rack",2.75,-2.9,0),Ne("rack",2.1,-2.9,0),Ne("rack",2.85,-1.6,-90),j("desk",.9,1,180),j("computerScreen",.75,.95,0,{onTop:.76,block:!1}),j("computerScreen",1.15,.95,-15,{onTop:.76,block:!1}),j("chairDesk",.9,1.7,180),j("speakerSmall",-2.7,2.6,45)],{racks:{x:2.1,z:-2.15,face:180,pose:"stand"},bench:{x:.9,z:1.95,face:180,pose:"stand"}}),ceo:i=>({items:[Ne("window",-1.5,un,0,{w:2.4,h:1.3,y:1.1}),Ne("sign",1.5,un,0,{w:1.7,h:.5,y:2.05,text:"CEO",accent:i.accent}),j("rugRectangle",-.6,-1.6,0,{block:!1}),Ne("execDesk",-.6,-2,0,{hot:"ceo-desk"}),j("chairDesk",-.6,-2.75,0,{block:!1}),Ne("tray",-1.3,-1.95,0,{onTop:.78,block:!1,hot:"ceo-tray",big:!0}),j("laptop",-.45,-2.1,180,{onTop:.78,block:!1}),j("lampSquareTable",.25,-2.05,0,{onTop:.78,block:!1}),Ne("wallScreen",1.6,un,0,{w:1.6,h:.9,y:1.15,hot:"ceo-tv",screen:"company"}),j("bookcaseClosedWide",-2.75,.2,90,{hot:"ceo-shelf"}),j("loungeSofa",1.2,1.9,180,{fabric:!0}),j("tableCoffee",1.35,1,0),j("loungeChair",2.55,.6,-90,{fabric:!0}),Ne("door",2.95,-1.4,-90,{hot:"legacy-door",accent:i.accent}),j("pottedPlant",-2.75,-3,0),j("pottedPlant",-2.75,2.85,0),j("pottedPlant",2.8,2.85,0)],stations:{visit:{x:-.6,z:-1.2,face:180,pose:"stand"},sofa:{x:.2,z:1.3,face:90,pose:"stand"}}}),boardroom:i=>{let e=[...dc(i).map(n=>n.p==="window"?{...n,x:-1.7}:n),j("rugRectangle",0,0,0,{block:!1,sx:1.5,sz:1.6}),Ne("longTable",0,0,0,{w:3.6,d:1.3,hot:"board-table"}),Ne("wallScreen",1.6,un,0,{w:1.5,h:.85,y:1.15,screen:"missions-mini"}),j("pottedPlant",-2.8,-3,0),j("pottedPlant",2.8,2.9,0),j("pottedPlant",-2.8,2.9,0)],t={};return[-1.35,-.45,.45,1.35].forEach((n,s)=>{e.push(j("chairModernCushion",n,-.95,0,{fabric:!0,block:!1})),e.push(j("chairModernCushion",n,.95,180,{fabric:!0,block:!1})),t[`seat${s*2}`]={x:n,z:-1.25,face:0,pose:"stand"},t[`seat${s*2+1}`]={x:n,z:1.3,face:180,pose:"stand"}}),{items:e,stations:t}},missions:i=>({items:[Ne("sign",-1.6,un,0,{w:1.9,h:.5,y:2.05,text:"Misiones",accent:i.accent}),Ne("missionBoard",.6,un,0,{w:4.2,h:1.6,y:1.25,hot:"mission-board"}),j("rugRectangle",0,.8,0,{block:!1,sx:1.3}),Ne("longTable",0,.9,0,{w:2.4,d:1.1,hot:"mission-table"}),j("chairDesk",-.7,1.75,180),j("chairDesk",.7,1.75,180),j("chairDesk",-.7,.05,0),j("chairDesk",.7,.05,0),j("pottedPlant",-2.8,-3,0),j("pottedPlant",2.8,2.9,0),j("bookcaseOpenLow",-2.8,2.2,90)],stations:{b0:{x:-1,z:-2.6,face:180,pose:"stand"},b1:{x:.2,z:-2.6,face:180,pose:"stand"},b2:{x:1.4,z:-2.6,face:180,pose:"stand"},b3:{x:2.4,z:-2.6,face:180,pose:"stand"}}}),collab:i=>({items:[...dc(i),Ne("board",1.6,un,0,{w:1.9,h:1.1,y:1.05,hot:"collab-board",accent:i.accent,kind:"handoffs"}),j("rugRound",-1.25,.35,0,{block:!1,sx:1.25,sz:1.25}),j("tableRound",-1.2,.3,0,{hot:"collab-table",sx:.62,sz:.62}),j("rugRound",1.5,1.35,0,{block:!1,sx:1.25,sz:1.25}),j("tableRound",1.5,1.3,0,{hot:"collab-table",sx:.62,sz:.62}),j("loungeSofa",-1.6,2.7,0,{fabric:!0}),j("pottedPlant",-2.8,-3,0),j("pottedPlant",2.8,-3.1,0),j("pottedPlant",-2.8,2.9,0)],stations:{c0:{x:-1.95,z:.3,face:90,pose:"stand"},c1:{x:-.45,z:.3,face:-90,pose:"stand"},c2:{x:-1.2,z:-.45,face:0,pose:"stand"},c3:{x:-1.2,z:1.05,face:180,pose:"stand"},c4:{x:.75,z:1.3,face:90,pose:"stand"},c5:{x:2.25,z:1.3,face:-90,pose:"stand"},c6:{x:1.5,z:.55,face:0,pose:"stand"},c7:{x:1.5,z:2.05,face:180,pose:"stand"},c8:{x:1,z:-2.7,face:180,pose:"stand"},c9:{x:2.2,z:-2.7,face:180,pose:"stand"}}}),creative:i=>({items:[Ne("sign",-1.7,un,0,{w:1.9,h:.5,y:2.05,text:"Estudio",accent:i.accent}),Ne("greenScreen",.9,-3,0,{wide:!0}),Ne("tripod",.9,-.2,180,{hot:"studio-cam"}),Ne("softbox",2.5,-1.2,215),Ne("softbox",-.7,-1.2,145),j("loungeDesignChair",.9,-2.2,0,{fabric:!0}),j("desk",-1.9,1.6,90),j("computerScreen",-1.95,1.6,90,{onTop:.76,block:!1}),j("chairDesk",-1.25,1.6,90),Ne("neon",-1.7,un,0,{y:1.2,accent:i.accent}),j("speakerSmall",2.7,2.6,-30),j("pottedPlant",2.8,1.6,0)],stations:{set:{x:.9,z:-1.5,face:0,pose:"stand"},edit:{x:-1.25,z:1.6,face:-90,pose:"stand"}}}),rest:i=>({items:[...dc(i),Ne("counter",1.2,-3.2,0,{w:3.2,hot:"coffee"}),j("kitchenCoffeeMachine",.6,-3.25,0,{onTop:.92,block:!1,hot:"coffee"}),Ne("cooler",2.85,-1.6,-90),j("stoolBar",.4,-2.3,180,{fabric:!0}),j("stoolBar",1.2,-2.3,180,{fabric:!0}),j("stoolBar",2,-2.3,180,{fabric:!0}),j("rugRound",-1.4,1.4,0,{block:!1,sx:1.7,sz:1.7}),j("loungeSofaLong",-2.35,1.3,90,{fabric:!0}),j("tableCoffee",-1.15,1.45,90),j("loungeChair",-.4,2.4,200,{fabric:!0}),j("pottedPlant",2.8,2.9,0),j("pottedPlant",-2.8,-3,0),j("plantSmall2",-1.1,1.3,0,{onTop:.46,block:!1})],stations:{coffee:{x:.6,z:-2.55,face:180,pose:"stand"},coffee2:{x:1.6,z:-1.7,face:180,pose:"stand"},cooler:{x:2.25,z:-1.6,face:90,pose:"stand"},sofa:{x:-1.5,z:.4,face:0,pose:"stand"},sofa2:{x:-.3,z:1,face:-90,pose:"stand"}}})},mv=new Set(["marketing","sales","events","intelligence","technology"]);function gv(i){let e=t=>({...t,x:-t.x,r:t.r?-t.r:t.r,face:t.face?-t.face:t.face});return{items:i.items.map(e),stations:Object.fromEntries(Object.entries(i.stations).map(([t,n])=>[t,e(n)]))}}function wf(){return Vt.map((i,e)=>{let t=uv(e),n=pv[i.id](i),s=mv.has(i.id)?gv(n):n,r=s.items.map(o=>{let c=o.x*$i,l=o.z===un?Gt:o.z*$i;return{...o,x:c,z:l,room:i.id,wx:t+c,wz:l}}),a=Object.fromEntries(Object.entries(s.stations).map(([o,c])=>[o,{...c,room:i.id,wx:t+c.x*$i,wz:c.z*$i,key:o}]));return{room:i,index:e,cx:t,items:r,stations:a}})}var mc={desk:{title:"Mesa de trabajo",hint:"Encargos activos y resultados"},tray:{title:"Bandeja de revisiones",hint:"Propuestas que esperan tu decisi\xF3n"},board:{title:"Tablero del departamento",hint:"Misiones y etapas asignadas"},shelf:{title:"Archivo de entregables",hint:"Archivos generados por el departamento"},"ceo-desk":{title:"Escritorio del CEO",hint:"Resumen de la empresa"},"ceo-tray":{title:"Bandeja del CEO",hint:"Todas las aprobaciones pendientes"},"ceo-shelf":{title:"Biblioteca de entregables",hint:"Todos los archivos registrados"},"ceo-tv":{title:"Pantalla de la empresa",hint:"Indicadores registrados"},"legacy-door":{title:"Centro anterior",hint:"CRM, automatizaciones y estudio"},"board-table":{title:"Mesa de juntas",hint:"Convocar una misi\xF3n nueva"},"mission-board":{title:"Tablero de misiones",hint:"Etapas, responsables y estado"},"mission-table":{title:"Mesa de coordinaci\xF3n",hint:"Crear o retomar misiones"},"collab-board":{title:"Traspasos",hint:"Aportaciones entre departamentos"},"collab-table":{title:"Mesa de colaboraci\xF3n",hint:"Departamentos trabajando juntos"},"studio-cam":{title:"C\xE1mara del estudio",hint:"PULSE STUDIO (centro anterior)"},coffee:{title:"Cafetera",hint:"Pausa y movimiento ambiental"}};var _v=58,xv=-8,uh=26,gc=class{constructor(e,{roomCount:t,onTap:n,onRoomChange:s}){this.container=e,this.roomCount=t,this.onTap=n,this.onRoomChange=s,this.renderer=new hc({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=bo,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=fo,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.setAttribute("aria-hidden","true"),this.scene=new Fr,this.camera=new Pt(uh,1,.5,200),this.target=new L(0,0,.7),this.camX=0,this.velX=0,this.goalX=0,this.dragging=!1,this.zoom=1,this.goalZoom=1,this.sheetPx=0,this.sheetGoal=0,this.focusZ=-.45,this.focusGoalZ=-.45,this.focusOffsetX=0,this.focusGoalOffX=0,this.focusY=0,this.focusGoalY=0,this.roomIndex=0;let r=new ea("#fff7ea","#bba58a",1.35);this.scene.add(r);let a=new Vi("#fff0db",2.1);a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.left=-7,a.shadow.camera.right=7,a.shadow.camera.top=7,a.shadow.camera.bottom=-7,a.shadow.camera.near=1,a.shadow.camera.far=40,a.shadow.bias=-6e-4,a.shadow.normalBias=.02,this.scene.add(a,a.target),this.sun=a;let o=new Vi("#dbe8ff",.45);o.position.set(6,5,10),this.scene.add(o),this.raycaster=new ra,this.pointers=new Map,this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize()),window.visualViewport?.addEventListener("resize",()=>this.resize())}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.portrait=t>e}distanceFor(){let e=this.portrait?ft*.94:Math.min(ft*2.1,ft*(this.w/this.h)*.85),t=Math.tan(vn.degToRad(uh/2)),n=e/(2*t*this.camera.aspect),s=10.2/(2*t);return Math.max(n,this.portrait?0:s)/this.zoom}worldPerPx(){return 2*this.distanceFor()*Math.tan(vn.degToRad(uh/2))*this.camera.aspect/this.w}goToRoom(e,{instant:t=!1}={}){e=Math.max(0,Math.min(this.roomCount-1,e)),this.goalX=e*ft,t&&(this.camX=this.goalX,this.velX=0),e!==this.roomIndex&&(this.roomIndex=e,this.onRoomChange?.(e))}focus({x:e=null,z:t=null,sheetPx:n=0,zoom:s=null}={}){this.sheetGoal=n,this.focusGoalZ=t??-.45,this.focusGoalOffX=e!=null?Math.max(-2.2,Math.min(2.2,e-this.goalX)):0,this.goalZoom=s||(n?1.15:1),this.focusGoalY=n&&e!=null?.7:0}bindInput(){let e=this.canvas;e.style.touchAction="none",e.addEventListener("pointerdown",n=>{if(e.setPointerCapture?.(n.pointerId),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,t0:performance.now()}),this.pointers.size===1&&(this.dragging=!0,this.dragStartCam=this.camX,this.lastMoveX=n.clientX,this.lastMoveT=performance.now(),this.velX=0,this.moved=!1),this.pointers.size===2){let[s,r]=[...this.pointers.values()];this.pinch0=Math.hypot(s.x-r.x,s.y-r.y),this.zoom0=this.goalZoom,this.moved=!0}}),e.addEventListener("pointermove",n=>{let s=this.pointers.get(n.pointerId);if(!s)return;if(s.x=n.clientX,s.y=n.clientY,this.pointers.size===2){let[a,o]=[...this.pointers.values()],c=Math.hypot(a.x-o.x,a.y-o.y);this.goalZoom=Math.max(.7,Math.min(1.9,this.zoom0*c/this.pinch0));return}let r=n.clientX-s.x0;if((Math.abs(r)>8||Math.abs(n.clientY-s.y0)>8)&&(this.moved=!0),this.dragging&&this.moved){let a=performance.now(),o=this.worldPerPx();this.camX=this.dragStartCam-r*o;let c=Math.max(1,a-this.lastMoveT);this.velX=-(n.clientX-this.lastMoveX)*o/(c/1e3),this.lastMoveX=n.clientX,this.lastMoveT=a,this.goalX=this.camX}});let t=n=>{let s=this.pointers.get(n.pointerId);if(!s||(this.pointers.delete(n.pointerId),this.pointers.size>0))return;this.dragging=!1;let r=performance.now()-s.t0;if(!this.moved&&r<450){this.handleTap(n.clientX,n.clientY);return}let a=this.camX-this.dragStartCam,o=Math.round((this.camX+this.velX*.18)/ft),c=Math.round(this.dragStartCam/ft);o===c&&Math.abs(a)>ft*.12&&(o=c+Math.sign(a)),o=Math.max(c-3,Math.min(c+3,o)),this.goToRoom(o)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{n.preventDefault(),Math.abs(n.deltaX)>Math.abs(n.deltaY)?(this.wheelAcc=(this.wheelAcc||0)+n.deltaX,Math.abs(this.wheelAcc)>60&&(this.goToRoom(this.roomIndex+Math.sign(this.wheelAcc)),this.wheelAcc=0)):this.goalZoom=Math.max(.7,Math.min(1.9,this.goalZoom*(n.deltaY>0?.92:1.08)))},{passive:!1})}handleTap(e,t){let n=this.canvas.getBoundingClientRect();this.onTap?.({x:e-n.left,y:t-n.top,ndc:new ze((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)})}raycast(e,t){return this.raycaster.setFromCamera(e,this.camera),this.raycaster.intersectObjects(t,!0)}project(e){let t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*this.w,y:(-t.y*.5+.5)*this.h,behind:t.z>1}}update(e){if(!this.dragging){let u=2*Math.sqrt(38),d=38*(this.goalX-this.camX)-u*this.velX;this.velX+=d*e,this.camX+=this.velX*e}let t=1-Math.exp(-6*e);this.zoom+=(this.goalZoom-this.zoom)*t,this.sheetPx+=(this.sheetGoal-this.sheetPx)*t,this.focusZ+=(this.focusGoalZ-this.focusZ)*t,this.focusOffsetX+=(this.focusGoalOffX-this.focusOffsetX)*t,this.focusY+=(this.focusGoalY-this.focusY)*t;let n=Math.max(0,Math.min(this.roomCount-1,Math.round(this.camX/ft)));this.dragging&&n!==this.roomIndex&&(this.roomIndex=n,this.onRoomChange?.(n));let s=this.distanceFor(),r=vn.degToRad(_v),a=vn.degToRad(xv);this.target.set(this.camX+this.focusOffsetX,this.focusY,this.focusZ);let o=new L(Math.sin(a)*Math.cos(r),Math.sin(r),Math.cos(a)*Math.cos(r)).multiplyScalar(s);this.camera.position.copy(this.target).add(o),this.camera.lookAt(this.target);let c=this.sheetPx>40?110:0,l=(this.sheetPx-c)*.5+(this.portrait?18:0);l>.5?this.camera.setViewOffset(this.w,this.h,0,l,this.w,this.h):this.camera.clearViewOffset(),this.camera.updateMatrixWorld(),this.sun.position.set(this.target.x-4,12,this.target.z+7),this.sun.target.position.copy(this.target)}render(){this.renderer.render(this.scene,this.camera)}};function dh(i,e){if(e===Bl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===hr||e===ua){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===hr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var _c=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Dh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(e);a=Si.resolveURL(l,this.path)}else a=Si.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pf){try{a[je.KHR_BINARY_GLTF]=new Uh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new _h;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nh(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new Fh;break;case je.KHR_MESH_QUANTIZATION:a[u]=new Oh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function vv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gh=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ia(h),l.distance=u;break;case"spot":l=new na(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},_h=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},xh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},bh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},wh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ih=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Ph=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Lh=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Dh=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ge,m=new L,p=new wn,y=new L(1,1,1),_=new zr(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,x.compose(m,p,y));for(let v in c)if(v==="_COLOR_0"){let E=c[v];_.instanceColor=new Bi(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);yt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Pf="glTF",fa=12,Af={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-fa,r=new DataView(e,fa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Af.JSON){let l=new Uint8Array(e,fa+a,o);this.content=n.decode(l)}else if(c===Af.BIN){let l=fa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=kh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=kh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=gr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,qt,d)})})}},Fh=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Oh=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},xc=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,_=p-d+u;for(let v=0;v!==o;v++){let E=a[x+v+o],A=a[x+v+c]*h,T=a[g+v+o],R=a[g+v]*h;r[v]=y*E+_*A+m*T+p*R}return r}},yv=new wn,Bh=class extends xc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return yv.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rf={9728:$t,9729:nn,9984:Eo,9985:rr,9986:_s,9987:Vn},Cf={33071:Yn,33648:Xs,10497:jn},fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bv={CUBICSPLINE:void 0,LINEAR:hs,STEP:ls},ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function Es(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ev(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Tv(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mh(t.attributes):e=i.indices+":"+mh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+mh(i.targets[n]);return e}function mh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Av=new Ge,Hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Qr(this.options.manager):this.textureLoader=new sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Es(r,o,s),ci(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Si.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=fh[s.type],o=gr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Lt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=fh[s.type],l=gr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(y);_||(x=new l(o,p*f,s.count*f/h),_=new Js(x,f/h),t.cache.add(y,_)),m=new Qs(_,c,d%f/h,g)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),m=new Lt(x,c,g);if(s.sparse!==void 0){let p=fh.SCALAR,y=gr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new y(a[1],_,s.sparse.count*p),A=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=E.length;T<R;T++){let M=E[T];if(m.setX(M,A[T*c]),c>=2&&m.setY(M,A[T*c+1]),c>=3&&m.setZ(M,A[T*c+2]),c>=4&&m.setW(M,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Rf[d.magFilter]||nn,h.minFilter=Rf[d.minFilter]||Vn,h.wrapS=Cf[d.wrapS]||jn,h.wrapT=Cf[d.wrapT]||jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==nn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Dt(x);m.needsUpdate=!0,d(m)}),t.load(Si.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ci(u,a),u.userData.mimeType=a.mimeType||wv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ir,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new nr,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ot}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let u=s[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=An);let h=r.alphaMode||ph.OPAQUE;if(h===ph.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ph.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Nt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nt){let u=r.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&a!==Nt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Es(s,u,r),u})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return If(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Tv(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=If(new Ft,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Mv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,y=l[f];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Or(x,y):new ht(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?p.geometry=dh(p.geometry,ua):m.mode===Cn.TRIANGLE_FAN&&(p.geometry=dh(p.geometry,hr));else if(m.mode===Cn.LINES)p=new Hr(x,y);else if(m.mode===Cn.LINE_STRIP)p=new ds(x,y);else if(m.mode===Cn.LINE_LOOP)p=new Vr(x,y);else if(m.mode===Cn.POINTS)p=new Gr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ev(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),m.extensions&&Es(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Es(s,u[0],r),u[0];let d=new Ue;r.extensions&&Es(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(vn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ps(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new kr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,v=d.length;_<v;_++){let E=d[_],A=f[_],T=g[_],R=x[_],M=m[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let b=n._createAnimationTracks(E,A,T,R,M);if(b)for(let I=0;I<b.length;I++)p.push(b[I])}let y=new Jr(r,void 0,p);return ci(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Av)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new er:l.length>1?h=new Ue:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ci(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ue;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&Es(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof cn||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Yi[r.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Yi[r.path]){case Yi.weights:l=ei;break;case Yi.rotation:l=ti;break;case Yi.translation:case Yi.scale:l=ni;break;default:n.itemSize===1?l=ei:l=ni;break}let h=s.interpolation!==void 0?bv[s.interpolation]:hs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Yi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ti?Bh:xc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Rv(i,e,t){let n=e.attributes,s=new Ut;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=zh(gr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=zh(gr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new on;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function If(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=kh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ci(i,e),Rv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sv(i,e.targets,t):i})}var Cv=2,Vh=["benchCushion","bookcaseClosedWide","bookcaseOpenLow","books","chairCushion","chairDesk","chairModernCushion","computerKeyboard","computerMouse","computerScreen","desk","deskCorner","kitchenCoffeeMachine","lampRoundFloor","lampSquareTable","laptop","loungeChair","loungeDesignChair","loungeDesignSofa","loungeSofa","loungeSofaLong","plantSmall1","plantSmall2","plantSmall3","pottedPlant","rugRectangle","rugRound","sideTable","sideTableDrawers","speakerSmall","stoolBar","tableCoffee","tableCoffeeGlassSquare","tableGlass","tableRound","televisionModern"],pa=new Map,Gh=new Map,Iv={wood:"#c4925f",woodDark:"#8f6342",plant:"#5aa86a",metal:"#d9e0e0",metalDark:"#4b5257",metalMedium:"#8c979a",carpet:"#d98c7a",carpetBlue:"#8fa9d9",carpetDarker:"#c98d7d",lamp:"#fff3c4"};function Lf(i){let e=i.name||"",t=`${e}|${i.color?.getHexString()}`;if(!Gh.has(t)){let n=e==="glass",s=new Ot({color:Iv[e]||i.color,roughness:n?.15:e.startsWith("metal")?.45:.85,metalness:e.startsWith("metal")?.25:0,transparent:n,opacity:n?.55:1});e==="lamp"&&(s.emissive.set("#ffe9a8"),s.emissiveIntensity=.5),s.name=e,Gh.set(t,s)}return Gh.get(t)}async function Df(i,e,{bundle:t=null}={}){let n=new _c,s=0,r=null;if(t)try{r=await(await fetch(t)).json()}catch{r=null}let a=o=>{let c=atob(o),l=new Uint8Array(c.length);for(let h=0;h<c.length;h++)l[h]=c.charCodeAt(h);return l.buffer};return await Promise.all(Vh.map(o=>new Promise(c=>{let l=u=>{let d=u.scene;d.scale.setScalar(Cv),d.updateMatrixWorld(!0);let f=new Ut().setFromObject(d),g=f.getCenter(new L),x=new Ue;d.position.set(-g.x,-f.min.y,-g.z),x.add(d),x.traverse(p=>{p.isMesh&&(p.material=Array.isArray(p.material)?p.material.map(Lf):Lf(p.material),p.castShadow=!0,p.receiveShadow=!0)});let m=f.getSize(new L);pa.set(o,{holder:x,size:m}),s++,e?.(s/Vh.length),c()},h=()=>{s++,e?.(s/Vh.length),c()};r?.[o]?n.parse(a(r[o]),"",l,h):n.load(`${i}/${o}.glb`,l,void 0,h)}))),pa}function Uf(i){return pa.has(i)}function Nf(i){return pa.get(i)?.size||new L(.5,.5,.5)}function Ff(i){let e=pa.get(i);return e?e.holder.clone(!0):null}var Wh=new Map;function ma(i,e={}){let t=`${i}|${e.emissive||""}|${e.ei||0}|${e.rough??.85}|${e.metal||0}|${e.opacity??1}`;return Wh.has(t)||Wh.set(t,new Ot({color:i,roughness:e.rough??.85,metalness:e.metal||0,emissive:e.emissive||"#000000",emissiveIntensity:e.ei||0,transparent:(e.opacity??1)<1,opacity:e.opacity??1})),Wh.get(t)}var Ai=new Map;function Xh(i,e,t){let n=`b${i}|${e}|${t}`;return Ai.has(n)||Ai.set(n,new Jn(i,e,t)),Ai.get(n)}function Of(i,e,t,n=12){let s=`c${i}|${e}|${t}|${n}`;return Ai.has(s)||Ai.set(s,new ki(i,e,t,n)),Ai.get(s)}function Bf(i,e=12,t=10){let n=`s${i}|${e}|${t}`;return Ai.has(n)||Ai.set(n,new zi(i,e,t)),Ai.get(n)}function ws(i,e,t=0,n=0,s=0,r=!0){let a=new ht(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}var me=(i,e,t,n,s,r,a,o)=>ws(Xh(i,e,t),typeof n=="string"?ma(n,o):n,s,r,a),yn=(i,e,t,n,s,r,a,o,c)=>ws(Of(i,e,t,c),typeof n=="string"?ma(n,o):n,s,r,a),vc=(i,e,t,n,s,r)=>ws(Bf(i),typeof e=="string"?ma(e,r):e,t,n,s),Wn=class{constructor(e,t,n=220){this.canvas=document.createElement("canvas"),this.canvas.width=Math.min(1024,Math.round(e*n)),this.canvas.height=Math.min(512,Math.round(t*n)),this.ctx=this.canvas.getContext("2d"),this.texture=new Wr(this.canvas),this.texture.colorSpace=Tt,this.texture.anisotropy=4}commit(){this.texture.needsUpdate=!0}};function Zi(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function li(i,e,t){let n=String(e||"");if(i.measureText(n).width<=t)return n;for(;n.length>1&&i.measureText(n+"\u2026").width>t;)n=n.slice(0,-1);return n+"\u2026"}function Ts(i,e,t,n=!1){let s=n?new Nt({map:i.texture,toneMapped:!1}):new Ot({map:i.texture,roughness:.9}),r=new ht(new Qn(e,t),s);return r.receiveShadow=!n,r}var yc={window({w:i=1.6,h:e=1.1,y:t=1.2}){let n=new Ue,s=new Wn(i,e,120),r=s.ctx,a=s.canvas.width,o=s.canvas.height,c=r.createLinearGradient(0,0,0,o);c.addColorStop(0,"#9fd0ef"),c.addColorStop(.7,"#e7f1ef"),c.addColorStop(1,"#f6e7cf"),r.fillStyle=c,r.fillRect(0,0,a,o),r.fillStyle="rgba(120,150,170,0.45)";for(let u=0;u<9;u++){let d=a/10,f=o*(.25+u*37%30/100);r.fillRect(u*d*1.1,o-f,d*.8,f)}s.commit();let l=Ts(s,i,e,!0);l.position.set(0,t,.03),n.add(l);let h="#f7f3ea";return n.add(me(i+.1,.06,.08,h,0,t+e/2,.04),me(i+.1,.06,.12,h,0,t-e/2,.06)),n.add(me(.06,e,.08,h,-i/2,t,.04),me(.06,e,.08,h,i/2,t,.04),me(.04,e,.06,h,0,t,.04)),{group:n,fp:null}},sign({w:i=1.9,h:e=.5,y:t=2,text:n="",accent:s="#555"}){let r=new Ue,a=new Wn(i,e,260),o=a.ctx,c=a.canvas.width,l=a.canvas.height;o.fillStyle="#fbf8f1",Zi(o,0,0,c,l,26),o.fill(),o.fillStyle=s,o.beginPath(),o.arc(l*.5,l*.5,l*.24,0,Math.PI*2),o.fill(),o.fillStyle="#2b2620",o.font=`700 ${Math.round(l*.46)}px -apple-system, "SF Pro Display", "Segoe UI", sans-serif`,o.textBaseline="middle",o.fillText(li(o,n,c-l*1.2),l*.95,l*.53),a.commit();let h=Ts(a,i,e);return h.position.set(0,t,.03),r.add(h),{group:r,fp:null}},board({w:i=1.8,h:e=1.05,y:t=1.05,accent:n="#777"}){let s=new Ue,r=new Wn(i,e,240),a=Ts(r,i,e);a.position.set(0,t+e/2,.04),s.add(a),s.add(me(i+.08,e+.08,.04,"#d8d2c6",0,t+e/2,.015)),s.add(me(i*.9,.04,.1,"#c9c2b4",0,t-.02,.07));let o=(c,l)=>vc(.025,c,l,t,.1);return s.add(o(n,-.3),o("#2c5d8a",-.18),o("#d9653b",-.06)),{group:s,fp:null,dyn:r,hitBox:[i,e,.2,t+e/2]}},missionBoard({w:i=4.2,h:e=1.6,y:t=1.25}){let n=new Ue,s=new Wn(i,e,240),r=Ts(s,i,e);return r.position.set(0,t+e/2-.4,.062),n.add(r),n.add(me(i+.12,e+.12,.06,"#3a3631",0,t+e/2-.4,.02)),{group:n,fp:null,dyn:s,hitBox:[i,e,.25,t+e/2-.4]}},wallScreen({w:i=1.6,h:e=.9,y:t=1.15}){let n=new Ue,s=new Wn(i,e,240),r=Ts(s,i,e,!0);return r.position.set(0,t+e/2,.062),n.add(r),n.add(me(i+.08,e+.08,.06,"#1d1f24",0,t+e/2,.02)),{group:n,fp:null,dyn:s,hitBox:[i,e,.25,t+e/2]}},chatScreen({accent:i}){return yc.wallScreen({w:1.5,h:.95,y:1,accent:i})},dataWall(){return yc.wallScreen({w:2,h:1,y:1})},cardsWall({accent:i}){let e=new Ue;e.add(me(1.9,1.1,.04,"#c9a77c",0,1.6,.02));let t=[i,"#f2c14e","#e07a5f","#81b29a","#f4f1de","#3d405b"];for(let n=0;n<12;n++){let s=-.75+n%4*.5+n*13%7/100,r=1.95-Math.floor(n/4)*.33,a=me(.36,.24,.012,t[n%t.length],s,r,.05);a.rotation.z=(n*29%11-5)/60,e.add(a)}return{group:e,fp:null}},pressWall({accent:i}){let e=new Ue,t=new Wn(2,1.2,160),n=t.ctx,s=t.canvas.width,r=t.canvas.height;n.fillStyle="#fbf8f3",n.fillRect(0,0,s,r),n.fillStyle=i,n.globalAlpha=.9;for(let o=0;o<4;o++)for(let c=0;c<5;c++)n.font=`700 ${r/8}px sans-serif`,n.fillText("PULSE",c*s/5+o%2*s/10+6,(o+.75)*r/4);t.commit();let a=Ts(t,2,1.2);return a.position.set(0,1.4,.03),e.add(a),{group:e,fp:null}},statusLamp(){let i=new Ue,e=new Ot({color:"#b9b4aa",emissive:"#000000",emissiveIntensity:0,roughness:.4});i.add(yn(.05,.06,.03,"#3a3631",0,.015,0));let t=ws(Bf(.045),e,0,.07,0);return i.add(t),{group:i,fp:null,glow:e}},tray({big:i}){let e=new Ue,t=i?.36:.3;e.add(me(t,.035,.24,"#7a5536",0,.018,0));let n=new Ue;return n.name="papers",e.add(n),{group:e,fp:null,papers:n,hitBox:[.5,.35,.45,.12]}},globe(){let i=new Ue;i.add(yn(.18,.22,.05,"#6b4a2e",0,.025,0),yn(.02,.02,.62,"#6b4a2e",0,.33,0));let e=vc(.24,"#4f8fbf",0,.86,0);i.add(e);let t=vc(.243,"#7fb069",0,.86,0,{opacity:.85});return t.scale.set(1,.6,.7),i.add(t),{group:i,fp:[.5,.5],anim:n=>{e.rotation.y=n*.3,t.rotation.y=n*.3}}},easel({accent:i}){let e=new Ue,t=(n,s)=>{let r=me(.04,1.5,.04,"#8a6a48",n,.75,0);return r.rotation.z=s,r};return e.add(t(-.25,.12),t(.25,-.12)),e.add(me(.8,.6,.03,"#fbf8f1",0,1.15,.05)),e.add(me(.5,.08,.035,i,0,1.28,.06),me(.36,.06,.035,"#f2c14e",-.07,1.14,.06),me(.56,.05,.035,"#3d405b",0,1.02,.06)),{group:e,fp:[.7,.5]}},greenScreen({wide:i}){let e=new Ue,t=i?3.2:2.2;e.add(me(.05,2.3,.05,"#2b2b2b",-t/2,1.15,0),me(.05,2.3,.05,"#2b2b2b",t/2,1.15,0),me(t+.05,.05,.05,"#2b2b2b",0,2.3,0));let n=me(t-.05,2.1,.02,"#3fbf5a",0,1.2,.02);e.add(n);let s=me(t-.05,.02,1.1,"#3fbf5a",0,.01,.55);return s.castShadow=!1,e.add(s),{group:e,fp:[t,.3]}},tripod(){let i=new Ue;for(let t=0;t<3;t++){let n=t*Math.PI*2/3,s=me(.03,1.15,.03,"#222",Math.sin(n)*.17,.55,Math.cos(n)*.17);s.rotation.set(Math.cos(n)*.3,0,-Math.sin(n)*.3),i.add(s)}i.add(me(.3,.2,.18,"#1d1d1d",0,1.18,0),yn(.07,.07,.16,"#111",0,1.18,.15),me(.06,.06,.06,"#e33",.1,1.3,0));let e=i.children[i.children.length-2];return e.rotation.x=Math.PI/2,{group:i,fp:[.5,.5]}},softbox(){let i=new Ue;i.add(yn(.02,.02,1.6,"#333",0,.8,0),yn(.2,.25,.04,"#333",0,.02,0));let e=me(.55,.42,.18,"#f8f6f0",0,1.7,0,{emissive:"#fff4dc",ei:.9});return i.add(e),i.add(me(.6,.47,.12,"#1f1f1f",0,1.7,-.12)),{group:i,fp:[.45,.45]}},longTable({w:i=2.2,d:e=1,map:t}){let n=new Ue;n.add(me(i,.06,e,t?"#f4efe6":"#8a5a36",0,.74,0));let s=i/2-.12,r=e/2-.12;if([[-s,-r],[s,-r],[-s,r],[s,r]].forEach(([a,o])=>n.add(me(.06,.72,.06,"#3b3530",a,.36,o))),t){let a=me(i*.8,.01,e*.7,"#7fb3d5",0,.775,0);a.castShadow=!1,n.add(a),n.add(me(i*.25,.012,e*.25,"#e9c46a",-.2,.78,.05))}return{group:n,fp:[i,e]}},execDesk(){let i=new Ue;return i.add(me(2,.07,.95,"#5a3b26",0,.76,0),me(.5,.72,.85,"#4a301f",-.72,.36,0),me(.5,.72,.85,"#4a301f",.72,.36,0),me(1,.5,.05,"#4a301f",0,.45,.4)),{group:i,fp:[2,.95]}},door({accent:i}){let e=new Ue;e.add(me(.95,2.1,.06,"#8a6040",0,1.05,.03),yn(.03,.03,.12,"#d9c27a",.33,1,.1));let t=new Wn(.8,.22,240),n=t.ctx;n.fillStyle=i,Zi(n,0,0,t.canvas.width,t.canvas.height,12),n.fill(),n.fillStyle="#fff",n.font="700 30px sans-serif",n.textBaseline="middle",n.fillText("CENTRO ANTERIOR",12,t.canvas.height/2+2),t.commit();let s=Ts(t,.8,.22);return s.position.set(0,1.75,.07),e.add(s),{group:e,fp:[1,.2],hitBox:[1,2.1,.4,1.05]}},cabinet(){let i=new Ue;i.add(me(.55,1.25,.55,"#9aa3a8",0,.625,0,{rough:.5,metal:.2}));for(let e=0;e<4;e++)i.add(me(.45,.02,.01,"#6f777c",0,.2+e*.3,.28),me(.12,.03,.03,"#444",0,.28+e*.3,.29));return{group:i,fp:[.6,.6]}},safe(){let i=new Ue;return i.add(me(.6,.7,.55,"#3f4a52",0,.35,0,{rough:.4,metal:.4}),yn(.09,.09,.04,"#c9b26a",.05,.4,.29)),i.children[1].rotation.x=Math.PI/2,{group:i,fp:[.65,.6]}},rack(){let i=new Ue;i.add(me(.6,1.9,.7,"#22272e",0,.95,0,{rough:.5}));let e=[];for(let t=0;t<7;t++){i.add(me(.52,.18,.02,"#323a44",0,.35+t*.22,.36));for(let n=0;n<3;n++){let s=new Nt({color:n===0?"#3cff9a":n===1?"#47b8ff":"#ffb347",toneMapped:!1}),r=ws(Xh(.035,.035,.01),s,-.18+n*.06,.35+t*.22,.375,!1);i.add(r),e.push({m:s,seed:t*3+n})}}return{group:i,fp:[.65,.75],anim:(t,n)=>e.forEach(s=>{let r=Math.sin(t*(n?9:2.2)+s.seed*1.7)>(n?-.2:.4);s.m.color.set(r?s.seed%3===0?"#3cff9a":s.seed%3===1?"#47b8ff":"#ffb347":"#2a3038")})}},stage({accent:i}){let e=new Ue;e.add(me(2.4,.25,1.4,"#3a3036",0,.125,-.3)),e.add(me(.06,1.9,.06,"#9aa0a6",-1.15,1.2,-.95),me(.06,1.9,.06,"#9aa0a6",1.15,1.2,-.95),me(2.36,.06,.06,"#9aa0a6",0,2.15,-.95));let t=[];return[-.7,0,.7].forEach((n,s)=>{let r=new Nt({color:s===1?"#fff2b0":i,toneMapped:!1}),a=ws(Of(.07,.1,.16),r,n,2.05,-.9,!1);a.rotation.x=.5,e.add(a),t.push(r)}),e.add(me(.5,.35,.3,"#1c1c1c",-.9,.42,.15),me(.5,.35,.3,"#1c1c1c",.9,.42,.15)),{group:e,fp:[2.5,1.5],fpOffset:[0,-.3],anim:n=>t.forEach((s,r)=>{s.color.setHSL((n*.08+r*.33)%1,.75,.62)})}},balloons({accent:i}){let e=new Ue,t=[i,"#f6f1e7","#f2c14e"],n=[];for(let s=0;s<6;s++){let r=s*1.1,a=vc(.16,t[s%3],Math.sin(r)*.18,1.2+s%3*.22,Math.cos(r)*.18,{rough:.35});e.add(a),n.push(a)}return e.add(yn(.12,.14,.08,"#9a8a7a",0,.04,0),yn(.005,.005,1.1,"#ddd",0,.6,0)),{group:e,fp:[.35,.35],anim:s=>n.forEach((r,a)=>{r.position.y=1.2+a%3*.22+Math.sin(s*1.4+a)*.025})}},podium({accent:i}){let e=new Ue;return e.add(me(.55,1.05,.45,"#efe9de",0,.525,0),me(.56,.1,.46,i,0,.8,.005)),{group:e,fp:[.6,.5]}},neon({y:i=1.2,accent:e}){let t=new Ue,n=new Nt({color:e,toneMapped:!1}),s=new ht(new Hi(.28,.025,8,32),n);s.position.set(.9,i,.05),t.add(s);let r=ws(Xh(.5,.05,.03),n,.9,i,.05,!1);return t.add(r),{group:t,fp:null}},counter({w:i=3.2}){let e=new Ue;e.add(me(i,.88,.62,"#e9e2d6",0,.44,0),me(i+.04,.05,.66,"#5d4a3a",0,.9,0));for(let t=0;t<4;t++)e.add(me(.02,.6,.01,"#cfc6b8",-i/2+(t+1)*i/5,.42,.315));return e.add(yn(.06,.05,.1,"#f4f1ea",1,.98,.05),yn(.06,.05,.1,"#e07a5f",1.18,.98,-.05)),{group:e,fp:[i,.65],hitBox:[i,.9,.7,.6]}},cooler(){let i=new Ue;return i.add(me(.38,1,.38,"#f2f2ee",0,.5,0),yn(.15,.15,.42,"#8fd1f2",0,1.22,0,{opacity:.75,rough:.2})),{group:i,fp:[.45,.45]}}};function $h(i,e){if(!i?.papers)return;let t=i.papers;for(;t.children.length;)t.remove(t.children[0]);let n=Math.min(e,6);for(let s=0;s<n;s++){let r=me(.24,.012,.18,s===n-1?"#fffdf6":"#f4efe2",(s*7%5-2)/200,.045+s*.014,(s*3%5-2)/200);r.rotation.y=(s*11%7-3)/30,r.castShadow=!1,t.add(r)}if(e>0){let s=me(.04,.09,.005,"#e5484d",.1,.07+n*.014,.09);s.castShadow=!1,t.add(s)}}var bc=class{constructor(e,t,n,s,r=.2){this.minX=e,this.minZ=n,this.cell=r,this.w=Math.ceil((t-e)/r),this.h=Math.ceil((s-n)/r),this.blocked=new Uint8Array(this.w*this.h)}toCell(e,t){return[Math.floor((e-this.minX)/this.cell),Math.floor((t-this.minZ)/this.cell)]}toWorld(e,t){return[this.minX+(e+.5)*this.cell,this.minZ+(t+.5)*this.cell]}inside(e,t){return e>=0&&t>=0&&e<this.w&&t<this.h}free(e,t){return this.inside(e,t)&&!this.blocked[t*this.w+e]}isFreeAt(e,t){let[n,s]=this.toCell(e,t);return this.free(n,s)}blockRect(e,t,n,s,r=0,a=0,o=1){let c=r*Math.PI/180,l=Math.cos(c),h=Math.sin(c),u=n/2+a,d=s/2+a,f=Math.abs(u*l)+Math.abs(d*h),g=Math.abs(u*h)+Math.abs(d*l),[x,m]=this.toCell(e-f,t-g),[p,y]=this.toCell(e+f,t+g);for(let _=Math.max(0,m);_<=Math.min(this.h-1,y);_++)for(let v=Math.max(0,x);v<=Math.min(this.w-1,p);v++){let[E,A]=this.toWorld(v,_),T=E-e,R=A-t,M=T*l-R*h,b=T*h+R*l;Math.abs(M)<=u&&Math.abs(b)<=d&&(this.blocked[_*this.w+v]=o)}}nearestFree(e,t,n=12){let[s,r]=this.toCell(e,t);if(this.free(s,r))return[s,r];for(let a=1;a<=n;a++){let o=null,c=1/0;for(let l=r-a;l<=r+a;l++)for(let h=s-a;h<=s+a;h++){if(Math.max(Math.abs(h-s),Math.abs(l-r))!==a||!this.free(h,l))continue;let u=(h-s)**2+(l-r)**2;u<c&&(c=u,o=[h,l])}if(o)return o}return null}lineFree(e,t,n,s){let r=Math.max(Math.abs(n-e),Math.abs(s-t))*2;for(let a=0;a<=r;a++){let o=r?a/r:0,c=e+(n-e)*o,l=t+(s-t)*o;if(!this.free(Math.round(c),Math.round(l))||!this.free(Math.floor(c+.5),Math.floor(l+.5)))return!1}return!0}findPath(e,t,n,s){let r=this.nearestFree(e,t),a=this.nearestFree(n,s);if(!r||!a)return null;let o=this.w,c=o*this.h,l=r[1]*o+r[0],h=a[1]*o+a[0];if(l===h)return[[n,s]];let u=new Float32Array(c).fill(1/0),d=new Int32Array(c).fill(-1),f=new Uint8Array(c),g=new qh,x=T=>{let R=T%o,M=T/o|0,b=Math.abs(R-a[0]),I=Math.abs(M-a[1]);return b+I+(Math.SQRT2-2)*Math.min(b,I)};u[l]=0,g.push(l,x(l));let m=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],p=!1,y=0;for(;g.size&&y++<6e4;){let T=g.pop();if(T===h){p=!0;break}if(f[T])continue;f[T]=1;let R=T%o,M=T/o|0;for(let[b,I,U]of m){let k=R+b,V=M+I;if(!this.free(k,V)||b&&I&&(!this.free(R+b,M)||!this.free(R,M+I)))continue;let F=V*o+k;if(f[F])continue;let H=u[T]+U;H<u[F]&&(u[F]=H,d[F]=T,g.push(F,H+x(F)))}}if(!p)return null;let _=[];for(let T=h;T!==-1;T=d[T])_.push([T%o,T/o|0]);_.reverse();let v=[_[0]],E=0;for(let T=2;T<_.length;T++)this.lineFree(_[E][0],_[E][1],_[T][0],_[T][1])||(v.push(_[T-1]),E=T-1);v.push(_[_.length-1]);let A=v.slice(1).map(([T,R])=>this.toWorld(T,R));return A[A.length-1]=this.isFreeAt(n,s)?[n,s]:A[A.length-1],A}},qh=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(e,t){let n=this.k,s=this.v;n.push(e),s.push(t);let r=n.length-1;for(;r>0;){let a=r-1>>1;if(s[a]<=s[r])break;[n[a],n[r]]=[n[r],n[a]],[s[a],s[r]]=[s[r],s[a]],r=a}}pop(){let e=this.k,t=this.v,n=e[0],s=e.pop(),r=t.pop();if(e.length){e[0]=s,t[0]=r;let a=0;for(;;){let o=2*a+1,c=o+1,l=a;if(o<e.length&&t[o]<t[l]&&(l=o),c<e.length&&t[c]<t[l]&&(l=c),l===a)break;[e[l],e[a]]=[e[a],e[l]],[t[l],t[a]]=[t[a],t[l]],a=l}}return n}};var _r=.2;function Mc(i){let e=new Wn(2,2,128),t=e.ctx,n=e.canvas.width,s=e.canvas.height,r={oak:"#d8b88e",walnut:"#a87d58",concrete:"#d4cec4",tile:"#ece6db"}[i];if(t.fillStyle=r,t.fillRect(0,0,n,s),i==="oak"||i==="walnut")for(let o=0;o<8;o++){let c=o*s/8,l=o*97%n;for(let h=-1;h<3;h++){let u=l+h*n/2,d=((o*31+h*17)%9-4)*(i==="oak"?3:2.5);t.fillStyle=`rgba(${d>0?255:0},${d>0?240:0},${d>0?220:0},${Math.abs(d)/100})`,t.fillRect(u,c,n/2,s/8),t.fillStyle="rgba(70,45,25,0.22)",t.fillRect(u,c,2,s/8)}t.fillStyle="rgba(70,45,25,0.25)",t.fillRect(0,c,n,2)}else if(i==="tile"){t.strokeStyle="rgba(150,135,115,0.35)",t.lineWidth=2;for(let a=0;a<=4;a++)t.beginPath(),t.moveTo(a*n/4,0),t.lineTo(a*n/4,s),t.stroke(),t.beginPath(),t.moveTo(0,a*s/4),t.lineTo(n,a*s/4),t.stroke()}else{for(let a=0;a<400;a++)t.fillStyle=`rgba(0,0,0,${Math.random()*.04})`,t.fillRect(Math.random()*n,Math.random()*s,3,3);t.strokeStyle="rgba(120,110,100,0.25)",t.lineWidth=2,t.strokeRect(1,1,n-2,s-2)}return e.commit(),e.texture.wrapS=e.texture.wrapT=jn,e.texture}var Yh=new Map;function Sc(i,e,t=["carpet","carpetBlue"]){i.traverse(n=>{if(!n.isMesh)return;let s=r=>{if(!t.includes(r.name))return r;let a=`${r.name}|${e}`;if(!Yh.has(a)){let o=new Ot({color:e,roughness:.95});o.name=r.name,Yh.set(a,o)}return Yh.get(a)};n.material=Array.isArray(n.material)?n.material.map(s):s(n.material)})}function kf(i,e=.58,t=.5){let n=new Pe(i.accent),s={};return n.getHSL(s),new Pe().setHSL(s.h,Math.min(t,s.s),e).getStyle()}function zf(i){let e=wf(),t=new Ue;i.add(t);let n=e.length,s=-ft/2,r=(n-1)*ft+ft/2,a=new bc(s,r,Gt,Yt-.25,.2),o=[],c=[],l={},h={},u=[],d=[],f=Mc("tile");f.repeat.set((r-s)/2,(Yt-gt)/2);let g=new ht(new Qn(r-s,Yt-gt),new Ot({map:f,roughness:.9}));g.rotation.x=-Math.PI/2,g.position.set((s+r)/2,0,(gt+Yt)/2),g.receiveShadow=!0,t.add(g),t.add(me(r-s+.6,.3,Yt-Gt+.6,"#c9bfb0",(s+r)/2,-.151,(Gt+Yt)/2));let x=me(r-s,.12,.12,"#b5a996",(s+r)/2,.06,Yt-.06);t.add(x);let m={oak:Mc("oak"),walnut:Mc("walnut"),concrete:Mc("concrete")},p=ma("#4b4540");for(let{room:_,index:v,cx:E,items:A,stations:T}of e){let R=new Ue;R.name=_.id,t.add(R);let M=m[_.floor].clone();M.needsUpdate=!0,M.repeat.set(ft/2,(gt-Gt)/2);let b=new ht(new Qn(ft,gt-Gt),new Ot({map:M,roughness:.88}));b.rotation.x=-Math.PI/2,b.position.set(E,.002,(Gt+gt)/2),b.receiveShadow=!0,R.add(b);let I=me(ft,pc,.2,_.wall,E,pc/2,Gt-.1,{rough:.95});I.castShadow=!1,R.add(I),R.add(me(ft,.12,.04,"#d8cfc0",E,.06,Gt+.02));let U=me(ft,.08,.02,_.accent,E,.95,Gt+.01);U.castShadow=!1,R.add(U),R.add(me(ft+.2,.06,.24,p,E,pc+.03,Gt-.1));let k=Tf-fc+.2;[-1,1].forEach(F=>{let H=E+F*(fc+k/2);R.add(me(k,mr,.16,"#e9e2d6",H,mr/2,gt)),R.add(me(k,.05,.2,"#8a6a4a",H,mr+.025,gt)),a.blockRect(H,gt,k,.16,0,_r)}),[-1,1].forEach(F=>R.add(me(.08,mr+.1,.2,_.accent,E+F*fc,(mr+.1)/2,gt)));let V=F=>{R.add(me(.2,qi,gt-Gt,"#ece6dc",F,qi/2,(Gt+gt)/2,{rough:.95})),R.add(me(.24,.05,gt-Gt+.02,p,F,qi+.025,(Gt+gt)/2)),a.blockRect(F,(Gt+gt)/2,.2,gt-Gt+.4,0,_r)};v===0&&V(E-ft/2),V(E+ft/2);for(let F of A){let H=null,te=null,X=null;if(F.m){if(!Uf(F.m))continue;H=Ff(F.m),F.fabric&&Sc(H,kf(_)),F.tint?Sc(H,F.tint):F.m==="chairDesk"&&Sc(H,"#46413d"),(F.sx||F.sz)&&H.scale.set(F.sx||1,1,F.sz||1);let ce=Nf(F.m);te=[ce.x*(F.sx||1),ce.z*(F.sz||1)],F.m.startsWith("rug")&&(Sc(H,kf(_,.74,.35),["carpetDarker"]),H.traverse(be=>{be.isMesh&&(be.castShadow=!1)}))}else{let ce=yc[F.p]?.(F);if(!ce)continue;H=ce.group,te=ce.fp,X=ce,ce.fpOffset&&(te=te&&[...te,ce.fpOffset])}if(H.position.set(F.wx,F.onTop||0,F.wz),H.rotation.y=vn.degToRad(F.r||0),H.userData.item=F,R.add(H),F.block!==!1&&te&&!(F.m&&F.m.startsWith("rug"))){let[ce,be,ke]=te,it=vn.degToRad(F.r||0),pt=ke?ke[0]*Math.cos(it)+ke[1]*Math.sin(it):0,et=ke?-ke[0]*Math.sin(it)+ke[1]*Math.cos(it):0;a.blockRect(F.wx+pt,F.wz+et,ce,be,F.r||0,_r-.04)}F.seat&&d.push({room:_.id,obj:H,it:F}),X?.dyn&&c.push({room:_.id,kind:F.p,screen:F.screen,boardKind:F.kind,surface:X.dyn,item:F}),X?.glow&&(l[_.id]=X.glow),X?.papers!==void 0&&F.p==="tray"&&(h[_.id]=X),X?.anim&&u.push({room:_.id,fn:X.anim,kind:F.p}),F.hot&&o.push({key:F.hot,room:_.id,obj:H,item:F})}R.userData={room:_,index:v,cx:E,stations:T}}a.blockRect((s+r)/2,Yt-.05,r-s,.3,0,_r),a.blockRect(s+.05,(gt+Yt)/2,.2,Yt-gt,0,_r),a.blockRect(r-.05,(gt+Yt)/2,.2,Yt-gt,0,_r),t.add(me(.2,qi,Yt-gt,"#ece6dc",s,qi/2,(gt+Yt)/2)),t.add(me(.2,qi,Yt-gt,"#ece6dc",r,qi/2,(gt+Yt)/2));let y=Object.fromEntries(e.map(_=>[_.room.id,_.stations]));return{world:t,plan:e,nav:a,hotspots:o,surfaces:c,lamps:l,trays:h,animated:u,seats:d,stationsByRoom:y,bounds:{minX:s,maxX:r}}}var Pv=.2,Lv={sphere:new zi(1,20,16),sphereLo:new zi(1,12,10),cone:new Zr(1,1,12),cyl:new ki(1,1,1,12),box:new Jn(1,1,1),capsule:new qr(1,1,6,12),torus:new Hi(1,.12,8,24),arc:new Hi(1,.07,8,20,Math.PI)};function ue(i,e={}){return new Ot({color:i,roughness:e.rough??.72,metalness:e.metal??0,emissive:e.emissive||"#000",emissiveIntensity:e.ei||0})}function ee(i,e,t,n,s,r=0,a=0,o=0,c){let l=new ht(Lv[i],e);return l.scale.set(t,n,s),l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!1,c&&c.add(l),l}function bn(i,e,t,n){let s=new Ue;return s.position.set(e,t,n),i.add(s),s}function ji(i,{r:e=.07,spread:t=.1,y:n=.03,z:s=.2,iris:r="#3a2a1a",rim:a=null,big:o=!1}){let c=ue("#ffffff",{rough:.3}),l=ue("#1b1410",{rough:.2}),h=ue(r,{rough:.3}),u=[];return[-1,1].forEach(d=>{let f=bn(i,d*t,n,s);a&&ee("sphere",ue(a),e*1.35,e*1.35,e*.5,0,0,-.01,f),ee("sphere",c,e,e,e*.6,0,0,0,f),ee("sphere",h,e*.72,e*.72,e*.3,0,-.004,e*.42,f),ee("sphere",l,e*.42,e*.42,e*.2,0,-.004,e*.56,f),ee("sphere",c,e*.16,e*.16,e*.1,-e*.25,e*.28,e*.64,f),o&&f.scale.setScalar(1.12),f.userData.base=o?1.12:1,u.push(f)}),u}function Dv(i,e,t,n,s=.075){let r=bn(i,0,t,e),a=ue("#3b2a1a",{rough:.4,metal:.3});return[-1,1].forEach(o=>{let c=ee("torus",a,s,s,s,o*n,0,0,r);c.scale.z=s}),ee("box",a,n*.6,.012,.012,0,.01,0,r),r}function Uv(i,e){let t=new Ue;if(i==="clipboard")ee("box",ue("#8a5a36"),.16,.22,.015,0,0,0,t),ee("box",ue("#fbf8f1"),.13,.17,.018,0,-.01,.002,t),ee("box",ue("#9aa0a6",{metal:.5}),.06,.025,.02,0,.1,.004,t);else if(i==="camera"){ee("box",ue("#222"),.16,.1,.08,0,0,.02,t);let n=ee("cyl",ue("#111"),.04,.07,.04,0,0,.09,t);n.rotation.x=Math.PI/2}else i==="briefcase"?(ee("box",ue("#7a4a26"),.22,.16,.06,0,-.06,0,t),ee("box",ue("#c9a25e",{metal:.6}),.06,.02,.065,0,0,0,t)):i==="book"?(ee("box",ue(e.accent),.15,.2,.04,0,0,0,t),ee("box",ue("#f6f1e4"),.135,.19,.042,.008,0,0,t)):i==="tablet"?(ee("box",ue("#2a2d33"),.17,.12,.012,0,0,0,t),ee("box",ue("#7fd3ff",{emissive:"#3aa0e0",ei:.6}),.15,.1,.014,0,0,.001,t)):i==="glowstick"&&(ee("cyl",ue("#ff7ad9",{emissive:"#ff3fc8",ei:2.2}),.018,.22,.018,0,.08,0,t),ee("cyl",ue("#222"),.022,.07,.022,0,-.06,0,t));return t}function Hf(i){let e=i.palette,t=new Ue,n=bn(t,0,0,0),s=bn(n,0,Pv,0),r=bn(s,0,0,0),a=bn(r,0,.47,0),o=i.species,c=ue(e.body),l=ue(e.belly),h=ue(e.accent),u=o==="hummingbird"||o==="moth",d={root:t,body:n,hips:s,torso:r,head:a,arms:[],legs:[],wings:[],tail:null,lids:[],extras:[],flyer:u,species:o},f={owl:[.25,.27,.23],hummingbird:[.19,.22,.19],cat:[.2,.24,.18],raccoon:[.22,.25,.2],bunny:[.19,.23,.18],moth:[.18,.23,.17],capybara:[.25,.26,.23],turtle:[.22,.24,.21],robot:[.22,.22,.18]}[o]||[.2,.24,.18];if(o==="robot"){let y=ue(e.body,{rough:.35,metal:.45});ee("box",y,.38,.36,.28,0,.21,0,r),ee("box",ue(e.belly,{rough:.4}),.24,.2,.02,0,.21,.145,r);let _=ee("sphere",ue("#6ff5ff",{emissive:"#3de0ff",ei:1.4}),.035,.035,.02,0,.25,.158,r);d.core=_}else{let y=["raccoon","hummingbird","capybara","bunny"].includes(o);if(ee("sphere",y?h:c,f[0],f[1],f[2],0,.2,0,r),y?(ee("sphere",ue(o==="capybara"?"#fbf3e8":"#f7f4ee"),.09,.15,.06,0,.24,f[2]*.82,r),o==="raccoon"&&ee("box",ue("#8e1f2b"),.035,.13,.02,0,.22,f[2]+.02,r)):ee("sphere",l,f[0]*.72,f[1]*.75,f[2]*.6,0,.18,f[2]*.48,r),o==="owl"||o==="turtle"){let _=ee("sphere",h,f[0]*1.03,f[1]*.62,f[2]*1.03,0,.13,0,r);_.scale.y*=.9,ee("box",ue(o==="owl"?"#c9a25e":"#e0c26a"),.03,.1,.02,0,.27,f[2]*.92,r)}o==="moth"&&ee("sphere",ue("#fbeee8",{rough:1}),.24,.12,.22,0,.38,0,r)}if(o==="turtle"){let y=ee("sphere",ue(e.shell,{rough:.6}),.27,.3,.2,0,.22,-.13,r);ee("torus",ue("#6a4322"),.24,.27,.6,0,.22,-.06,r).rotation.y=Math.PI/2;for(let _=0;_<5;_++)ee("sphere",ue("#a6743f"),.07,.07,.03,(_%3-1)*.12,.12+Math.floor(_/3)*.17+_%2*.03,-.31,r);d.extras.push(y)}if(o==="robot"){let y=ue(e.body,{rough:.35,metal:.45});ee("box",y,.42,.32,.32,0,.12,0,a),ee("box",ue("#0f1a22",{rough:.25}),.34,.22,.02,0,.12,.162,a);let _=ue(e.eye,{emissive:e.eye,ei:1.6});d.lids=[-1,1].map(v=>ee("capsule",_,.028,.045,.01,v*.08,.13,.175,a)),d.lids.forEach(v=>{v.rotation.z=Math.PI/2,v.userData.base=.045}),ee("box",_,.07,.012,.01,0,.06,.175,a),ee("cyl",ue("#9aa0a6",{metal:.6}),.012,.16,.012,0,.36,0,a),d.antenna=ee("sphere",ue(e.accent,{emissive:e.accent,ei:1.2}),.045,.045,.045,0,.46,0,a),[-1,1].forEach(v=>{let E=ee("cyl",ue(e.accent,{rough:.4}),.07,.04,.07,v*.225,.12,0,a);E.rotation.z=Math.PI/2})}else{let y={owl:[.27,.25,.25],hummingbird:[.2,.19,.2],cat:[.24,.21,.21],raccoon:[.24,.21,.22],bunny:[.22,.21,.2],moth:[.2,.19,.19],capybara:[.23,.21,.27],turtle:[.2,.19,.2]}[o],_=o==="owl"?.1:.14;ee("sphere",c,y[0],y[1],y[2],0,_,0,a);let v=y[2];if(o==="owl"){ee("sphere",l,.21,.17,.08,0,_+.01,v*.78,a),d.lids=ji(a,{r:.075,spread:.095,y:_+.03,z:v*.86,iris:e.eye,rim:"#ffffff",big:!0});let E=ee("cone",ue(e.beak),.035,.08,.035,0,_-.05,v+.02,a);E.rotation.x=Math.PI*.62,[-1,1].forEach(A=>{let T=ee("cone",c,.06,.13,.04,A*.17,_+.24,0,a);T.rotation.z=-A*.35})}else if(o==="hummingbird"){ee("sphere",l,.12,.1,.08,0,_-.05,v*.7,a),d.lids=ji(a,{r:.055,spread:.09,y:_+.03,z:v*.82,iris:e.eye});let E=ee("cyl",ue(e.beak),.012,.32,.012,0,_-.02,v+.15,a);E.rotation.x=Math.PI/2+.12;let A=ee("cone",ue("#2fb89c"),.06,.14,.04,0,_+.2,-.05,a);A.rotation.x=-.6}else if(o==="cat")ee("sphere",l,.11,.075,.07,0,_-.06,v*.82,a),ee("sphere",ue(e.beak),.025,.018,.02,0,_-.025,v+.02,a),d.lids=ji(a,{r:.058,spread:.095,y:_+.03,z:v*.84,iris:e.eye}),[-1,1].forEach(E=>{let A=ee("cone",c,.075,.15,.04,E*.14,_+.2,-.01,a);A.rotation.z=-E*.32,ee("cone",ue("#f2b6a5"),.04,.09,.02,E*.14,_+.19,.015,a).rotation.z=-E*.32}),ee("arc",ue("#2b2b2b"),.235,.235,.5,0,_-.01,0,a),[-1,1].forEach(E=>ee("cyl",ue("#3a3a3a"),.065,.05,.065,E*.235,_-.01,0,a).rotation.z=Math.PI/2),[-1,1].forEach(E=>ee("cyl",ue("#c9a25e",{metal:.6}),.04,.052,.04,E*.236,_-.01,0,a).rotation.z=Math.PI/2);else if(o==="raccoon")ee("sphere",ue("#2a211b"),.235,.075,.2,0,_+.03,.035,a),ee("sphere",l,.1,.07,.09,0,_-.06,v*.82,a),ee("sphere",ue("#1b1410"),.03,.022,.02,0,_-.03,v+.04,a),d.lids=ji(a,{r:.05,spread:.095,y:_+.035,z:v*.85,iris:e.eye}),[-1,1].forEach(E=>{ee("sphere",c,.07,.08,.035,E*.16,_+.18,0,a),ee("sphere",l,.04,.05,.02,E*.16,_+.18,.02,a)});else if(o==="bunny"){ee("sphere",l,.1,.07,.07,0,_-.06,v*.8,a),ee("sphere",ue(e.beak),.022,.016,.015,0,_-.03,v+.01,a),d.lids=ji(a,{r:.058,spread:.09,y:_+.03,z:v*.84,iris:e.eye}),d.ears=[-1,1].map(A=>{let T=bn(a,A*.085,_+.17,-.02);return ee("capsule",c,.045,.2,.03,0,.14,0,T),ee("capsule",ue("#f2c4d6"),.025,.17,.01,0,.14,.022,T),T.rotation.z=-A*.15,T});let E=ee("torus",h,.17,.17,.9,0,.42,0,r);E.rotation.x=Math.PI/2}else o==="moth"?(ee("sphere",ue("#fbeee8",{rough:1}),.13,.1,.07,0,_-.06,v*.75,a),d.lids=ji(a,{r:.065,spread:.088,y:_+.02,z:v*.82,iris:"#7a1d45",big:!0}),d.antennae=[-1,1].map(E=>{let A=bn(a,E*.07,_+.17,.02),T=ee("cyl",ue("#4a1a2c"),.008,.22,.008,0,.11,0,A);T.rotation.z=0;for(let R=0;R<4;R++)ee("sphere",ue(e.accent),.04-R*.006,.012,.02,E*.025,.08+R*.045,0,A);return A.rotation.z=-E*.45,A}),ee("arc",ue("#222"),.2,.2,.5,0,_-.02,0,a),ee("cyl",ue("#222"),.008,.12,.008,-.17,_-.06,.08,a).rotation.x=Math.PI/2.5):o==="capybara"?(ee("sphere",ue(e.belly),.15,.12,.12,0,_-.04,v*.8,a),ee("sphere",ue("#3a2618"),.06,.025,.03,0,_-0,v+.06,a),d.lids=ji(a,{r:.04,spread:.12,y:_+.07,z:v*.62,iris:"#2b1d12"}),[-1,1].forEach(E=>ee("sphere",c,.045,.04,.03,E*.15,_+.17,-.06,a)),ee("sphere",ue("#f08a7a"),.05,.05,.05,.1,_+.19,.02,a)):o==="turtle"&&(ee("sphere",l,.12,.08,.08,0,_-.06,v*.78,a),d.lids=ji(a,{r:.055,spread:.085,y:_+.03,z:v*.82,iris:"#2b1d12"}),ee("box",ue("#4a3020"),.06,.008,.01,0,_-.06,v+.01,a));i.glasses&&Dv(a,(o==="owl"?.25:.2)*.98,_+.03,o==="owl"?.095:.085,o==="owl"?.085:.07)}let g=o==="robot"?.33:.3,x=o==="robot"?.2:f[0]*.92;if([-1,1].forEach(y=>{let _=bn(r,y*x,g,0);if(o==="owl")ee("sphere",c,.06,.2,.13,y*.03,-.14,-.01,_),ee("sphere",l,.03,.08,.06,y*.04,-.27,.04,_);else if(o==="robot")ee("cyl",ue("#9aa0a6",{metal:.6,rough:.35}),.035,.22,.035,0,-.12,0,_),ee("sphere",ue(e.accent),.055,.055,.055,0,-.25,0,_);else{let v=["raccoon","hummingbird","capybara","bunny"].includes(o)?h:c;ee("capsule",v,.05,.14,.05,0,-.11,0,_),ee("sphere",o==="raccoon"?ue("#3a2a20"):c,.052,.052,.052,0,-.23,.005,_)}d.arms.push(_)}),d.handR=bn(d.arms[0],0,-.25,.05),i.prop&&(d.prop=Uv(i.prop,e),d.handR.add(d.prop),d.prop.rotation.x=-.2),u){let y=ue(o==="moth"?e.body:"#7fe0c8",{rough:.6}),_=ue(o==="moth"?"#f2a6c4":"#c8f2e6",{rough:.6});[-1,1].forEach(v=>{let E=bn(r,v*.1,.3,-.12);o==="moth"?(ee("sphere",y,.26,.2,.02,v*.24,.06,0,E),ee("sphere",_,.08,.08,.025,v*.3,.08,.004,E),ee("sphere",ue("#4a1a2c"),.035,.035,.03,v*.3,.08,.006,E),ee("sphere",y,.17,.14,.02,v*.17,-.16,.01,E)):(ee("sphere",y,.3,.08,.02,v*.28,.04,0,E),ee("sphere",_,.2,.05,.022,v*.2,.02,.002,E)),d.wings.push({g:E,s:v})})}if([-1,1].forEach(y=>{let _=bn(s,y*.09,.02,0);if(o==="robot")ee("cyl",ue("#9aa0a6",{metal:.6,rough:.35}),.04,.17,.04,0,-.09,0,_),ee("box",ue("#2a2d33"),.11,.05,.16,0,-.18,.03,_);else if(o==="owl"||o==="hummingbird")ee("cyl",ue(e.beak),.015,.16,.015,0,-.09,0,_),ee("sphere",ue(e.beak),.05,.02,.07,0,-.18,.03,_);else{let v={raccoon:"#5f5244",bunny:"#8f86a0",cat:"#2f2a28",capybara:"#5a3d2a",turtle:"#3d3328",moth:e.body}[o]||c;ee("capsule",ue(v),.055,.08,.055,0,-.08,0,_),ee("sphere",ue(o==="cat"?"#f4f1ea":"#4a3326",{rough:.5}),.06,.035,.085,0,-.18,.03,_)}d.legs.push(_)}),u&&o==="hummingbird"&&d.legs.forEach(y=>y.scale.setScalar(.6)),["cat","raccoon","bunny","hummingbird"].includes(o)){let y=bn(s,0,.08,-.16);if(d.tail=y,o==="bunny")ee("sphere",ue("#ffffff"),.07,.07,.07,0,0,-.03,y);else if(o==="hummingbird"){let _=ee("cone",ue(e.body),.07,.22,.025,0,-.02,-.08,y);_.rotation.x=-2.1}else{let v=ue(o==="raccoon"?"#2a211b":"#c06f22");for(let E=0;E<6;E++){let A=(o==="raccoon"?.085:.045)*(1-E*.06);ee("sphere",E%2?v:c,A,A,A*1.2,0,.03+E*.065,-.04-Math.sin(E*.45)*.12,y)}}}let m=new ht(new jr(.34,.42,40),new Nt({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.015,t.add(m),d.ring=m;let p=new ht(new Yr(.26,24),new Nt({color:"#000",transparent:!0,opacity:.18,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.y=.012,t.add(p),d.shadow=p,t.scale.setScalar(1.3),new Zh(d)}var Vf=(i,e,t)=>i+(e-i)*t,Ki=(i,e,t,n)=>Vf(i,e,1-Math.exp(-t*n)),Zh=class{constructor(e){this.rig=e,this.root=e.root,this.pose="idle",this.speed=0,this.phase=Math.random()*10,this.t=Math.random()*10,this.w={walk:0,sit:0,type:0,wave:0,think:0,slump:0,celebrate:0,talk:0,read:0,sleep:0},this.blinkAt=1+Math.random()*3,this.blink=0,this.seatY=0,this.lookYaw=0,this.selected=!1,this.hoverH=e.flyer?e.species==="hummingbird"?.42:.18:0}update(e){let t=this.rig,n=this.w;this.t+=e;let s=this.t;for(let _ of Object.keys(n))n[_]=Ki(n[_],(this.pose===_?1:0)||(_==="walk"?Math.min(1,this.speed/.9):0),_==="walk"?14:7,e);this.pose==="type"&&(n.sit=Ki(n.sit,1,7,e)),["type","sleep"].includes(this.pose)&&(n.sit=Ki(n.sit,1,7,e));let r=n.walk*(1-n.sit);this.phase+=e*(5+this.speed*5.5);let a=this.phase,o=t.flyer?Math.sin(s*3.2)*.04:0,c=n.celebrate*Math.max(0,Math.sin(s*7))*.16+n.wave*Math.max(0,Math.sin(s*6))*.03;t.body.position.y=Vf(this.hoverH+o,this.seatY,n.sit)+Math.abs(Math.sin(a))*.035*r*(t.flyer?0:1)+c-n.slump*.03,t.torso.scale.y=1+Math.sin(s*1.8)*.012,t.torso.rotation.x=r*(t.flyer?.35:.06)+n.type*.12+n.slump*.18-n.celebrate*.05+n.sleep*.15,t.torso.rotation.z=Math.sin(a)*.04*r,t.hips.rotation.y=Math.sin(a)*.06*r;let l=n.type*Math.sin(s*2.3)*.05+n.talk*Math.sin(s*6)*.06;t.head.rotation.x=Ki(t.head.rotation.x,n.type*.18+n.slump*.42+n.read*.25+n.think*-.12+n.sleep*.5+l,10,e),t.head.rotation.y=Ki(t.head.rotation.y,this.lookYaw+n.think*.25+n.wave*.15,5,e),t.head.rotation.z=Ki(t.head.rotation.z,n.wave*.12+n.think*.1+n.sleep*.25,6,e);let[h,u]=t.arms,d=Math.sin(a)*.55*r,f=Math.sin(s*15)*.1,g=Math.sin(s*15+1.7)*.1;h.rotation.x=-d+n.type*(-1.05+f)+n.read*-1.15+n.think*-1.9+n.talk*(-.6+Math.sin(s*4)*.25)-n.celebrate*.2,u.rotation.x=d+n.type*(-1.05+g)+n.read*-1-n.celebrate*.2,h.rotation.z=n.wave*(-2.55+Math.sin(s*11)*.35)+n.celebrate*-2.6+n.think*-.35+.05+n.slump*.08,u.rotation.z=n.celebrate*2.6-.05-n.slump*.08+n.read*.3+n.type*.12,h.rotation.z+=n.type*-.12,t.prop&&(t.prop.visible=n.type<.5&&n.sleep<.5);let[x,m]=t.legs,p=Math.sin(a)*.7*r;x.rotation.x=p-n.sit*1.45,m.rotation.x=-p-n.sit*1.45;for(let{g:_,s:v}of t.wings)if(t.species==="hummingbird")_.rotation.y=v*(.2+Math.sin(s*46)*.6)*(1-n.sit*.8),_.rotation.z=v*.2;else{let E=Math.sin(s*(r>.1?12:3))*.5+.5;_.rotation.y=v*(.15+E*.7)*(1-n.sit*.5)}if(t.species==="owl"&&(h.rotation.z+=-n.wave*.2),t.tail&&(t.tail.rotation.y=Math.sin(s*2.2)*.35+r*Math.sin(a)*.2),t.tail&&(t.tail.rotation.x=n.celebrate*-.4),t.ears&&t.ears.forEach((_,v)=>{_.rotation.x=-.1+Math.sin(s*1.3+v)*.06+n.slump*.9}),t.antennae&&t.antennae.forEach((_,v)=>{_.rotation.x=Math.sin(s*2.6+v)*.15}),t.antenna){let _=Math.sin(s*(n.type>.5?10:2))>.2;t.antenna.material.emissiveIntensity=_?1.6:.2}t.core&&(t.core.material.emissiveIntensity=.8+Math.sin(s*3)*.5+n.type*1.2),this.blinkAt-=e,this.blinkAt<=0&&(this.blink=.14,this.blinkAt=2+Math.random()*4),this.blink>0&&(this.blink-=e);let y=n.sleep>.5||this.blink>0?.12:1;for(let _ of t.lids)_.scale.y=Ki(_.scale.y,y*(_.userData.base||1),30,e);t.ring.material.opacity=Ki(t.ring.material.opacity,this.selected?.85:0,10,e),t.ring.scale.setScalar(1+Math.sin(s*4)*.04),t.shadow.scale.setScalar(1-(t.body.position.y-this.seatY*n.sit)*.6)}};var Nv=1.15,Fv=1.5,Ov=9,Bv=1.3,kv=.5/Bv-.2,jh=class{constructor(e,t){this.def=e,this.world=t,this.room=ai(e.room),this.dept=this.room.dept,this.anim=Hf(e),this.root=this.anim.root,this.stations=t.stationsByRoom[e.room];let n=this.stations.desk;this.pos=new ze(n.wx,n.wz+1.2),this.facing=0,this.goalFacing=0,this.path=[],this.arrive=null,this.mode="idle",this.intent={kind:"unconnected",source:"none"},this.ambientEnabled=!0,this.ambientTimer=1+Math.random()*3,this.dwell=0,this.selected=!1,this.local=null,this.waveTimer=0,this.bubble=null,this.awayFromRoom=!1,this.root.position.set(this.pos.x,0,this.pos.y),t.scene.add(this.root)}get headWorld(){let e=new L;return this.anim.rig.head.getWorldPosition(e),e.y+=.42,e}get bodyWorld(){return new L(this.pos.x,(this.anim.rig.body.position.y||0)+.55,this.pos.y)}walkTo(e,t){if(!e)return;let n=this.world.nav.findPath(this.pos.x,this.pos.y,e.wx,e.wz);this.path=n||[[e.wx,e.wz]],this.arrive={station:e,onArrive:t},this.anim.pose="idle",this.mode="walk",this.returning=this.awayFromRoom&&e.room===this.def.room,this.awayFromRoom=e.room!==this.def.room}atStation(e,t=.25){return e&&Math.hypot(this.pos.x-e.wx,this.pos.y-e.wz)<t&&this.path.length===0}setIntent(e){let t=this.intent;this.intent=e,!(t.kind===e.kind&&t.taskId===e.taskId&&t.mission?.id===e.mission?.id)&&((t.kind==="running"||t.kind==="receiving")&&e.kind==="completed"&&(this.celebrate=2.2,this.world.broadcast?.("done",this)),this.plan(!0))}setAmbient(e){this.ambientEnabled=e,!e&&this.intent.source!=="server"&&this.plan(!0)}hasDuty(){return!!this.local||["receiving","running","failed","review","mission"].includes(this.intent.kind)||this.celebrate>0}select(e){this.selected=e,this.anim.selected=e,e&&!this.hasDuty()?(this.path=[],this.arrive=null,this.mode="idle",this.waveTimer=1.6,this.isSitting||(this.anim.seatY=0,this.forceSit=!1,this.anim.pose="wave",this.goalFacing=0)):e||this.plan(!0)}receiveInstruction(){this.local={kind:"sending",until:performance.now()+12e4},this.plan(!0)}clearLocal(){this.local=null,this.plan(!0)}get isSitting(){return this.atStation(this.stations.desk,.3)&&["sit","type","sleep"].includes(this.anim.pose)}plan(e=!1){if(this.emote=null,this.emoteOnArrive=null,this.social&&this.endSocial(),this.selected&&!this.hasDuty())return;let t=this.intent.kind,n=this.stations.desk;if(t==="running"||t==="receiving"||this.local?.kind==="sending")return this.goSit(n,t==="running"?"type":"think");if(t==="failed")return this.goSit(n,"slump");if(t==="review")return this.goStand(this.stations.door?{...this.stations.door,wz:this.stations.door.wz-.3}:n,"read");if(t==="mission"){let s=Vt.filter(a=>a.dept).findIndex(a=>a.dept===this.dept),r=this.world.stationsByRoom.collab;return this.goStand(r[`c${s}`]||r.c0,"talk")}if(t==="completed"&&this.celebrate)return this.goStand(this.stations.door,"celebrate");if(!this.ambientEnabled)return this.goSit(n,"sit");e&&(this.ambientTimer=.2+Math.random()*1.5)}endSocial(){let e=this.social?.with;this.social=null,e?.social?.with===this&&(e.social=null,e.emote=null,e.ambientTimer=Math.min(e.ambientTimer,1.5))}goSit(e,t){if(this.atStation(e,.3)){this.sitDown(t);return}this.walkTo(e,()=>this.sitDown(t))}sitDown(e){this.goalFacing=0,this.anim.seatY=kv,this.anim.pose=e==="sit"?"sit":e,e==="think"||e==="slump"?(this.anim.pose=e,this.anim.w.sit=1,this.forceSit=!0):this.forceSit=!1,this.mode="station"}goStand(e,t){if(e){if(this.atStation(e)){this.standAt(e,t);return}this.walkTo(e,()=>this.standAt(e,t))}}standAt(e,t){this.anim.seatY=0,this.forceSit=!1,this.goalFacing=vn.degToRad(e.face||0),this.anim.pose=t,this.mode="station"}reserve(e){let t=this.world.reserved;for(let[n,s]of t)s===this.def.id&&t.delete(n);e&&t.set(`${e.room}:${e.key}`,this.def.id)}isFree(e){let t=this.world.reserved.get(`${e.room}:${e.key}`);return!t||t===this.def.id}get idleAmbient(){return!this.selected&&!this.local&&!this.hasDuty()&&this.ambientEnabled&&!this.social&&(this.intent.source!=="server"||["idle","completed"].includes(this.intent.kind))}ambientStep(){let e=Math.random();if(e<.2&&this.tryVisit()||e<.32&&this.tryCoffee())return;let t=Object.keys(this.stations).filter(o=>o!=="door"&&this.isFree(this.stations[o])),n=this.stations[t[Math.floor(Math.random()*t.length)]]||this.stations.desk,r={desk:"sit",board:"think",shelf:"read",plant:"idle",window:"idle"}[n.key]||(Math.random()<.5?"idle":"think"),a={shelf:"\u{1F4D6}",board:"\u{1F4AD}",plant:"\u{1F33F}",window:"\u{1F324}"};if(this.reserve(n),n.key==="desk"){let o=Math.random()<.2;this.goSit(n,o?"sleep":"sit"),this.emoteOnArrive=o?"\u{1F4A4}":null}else this.goStand(n,r),this.emoteOnArrive=a[n.key]||(r==="think"?"\u{1F4AD}":null);this.ambientTimer=7+Math.random()*9}tryVisit(){let e=Math.round(this.pos.x/this.world.pitch),t=this.world.agents.filter(o=>o!==this&&o.idleAmbient&&!o.path.length&&Math.abs(Math.round(o.pos.x/this.world.pitch)-e)<=2&&Math.abs(Math.round(o.pos.x/this.world.pitch)-e)>=1);if(!t.length)return!1;let n=t[Math.floor(Math.random()*t.length)],s=Math.sign(this.pos.x-n.pos.x)||1,r={wx:n.pos.x+s*.85,wz:n.pos.y+.35,room:n.def.room,key:`visit-${n.def.id}`};if(this.world.nav.isFreeAt(r.wx,r.wz)||(r.wx=n.pos.x,r.wz=n.pos.y+.9),!this.world.nav.isFreeAt(r.wx,r.wz))return!1;let a=performance.now()+3e4;return n.social={with:this,until:a,waiting:!0},this.social={with:n,until:a},this.reserve(r),this.walkTo(r,()=>{let o=5+Math.random()*4;this.faceTowards(n),this.anim.seatY=0,this.forceSit=!1,this.anim.pose="talk",this.emote="\u{1F4AC}",this.social={with:n,until:performance.now()+o*1e3},n.social?.with===this&&(n.path=[],n.arrive=null,n.anim.seatY=n.isSitting?n.anim.seatY:0,n.isSitting||n.faceTowards(this),n.anim.pose=n.isSitting?"sit":"talk",n.emote="\u{1F4AC}",n.social={with:this,until:performance.now()+o*1e3}),this.ambientTimer=o}),this.ambientTimer=30,!0}tryCoffee(){let e=this.world.stationsByRoom.rest,t=["coffee","coffee2","cooler","sofa","sofa2"].map(r=>e[r]).filter(r=>this.isFree(r)),n=this.world.agents.filter(r=>r.def.room!=="rest"&&r.awayFromRoom&&!r.hasDuty()).length;if(!t.length||n>=3)return!1;let s=t[Math.floor(Math.random()*t.length)];return this.reserve(s),this.goStand(s,"idle"),this.emoteOnArrive=s.key.startsWith("sofa")?"\u{1F6CB}":s.key==="cooler"?"\u{1F4A7}":"\u2615",this.ambientTimer=10+Math.random()*8,!0}faceTowards(e){this.goalFacing=Math.atan2(e.pos.x-this.pos.x,e.pos.y-this.pos.y)}react(e,t){t===this||!this.idleAmbient||this.path.length||Math.hypot(t.pos.x-this.pos.x,t.pos.y-this.pos.y)>7||e==="done"&&(this.isSitting||(this.faceTowards(t),this.anim.pose="celebrate"),this.emote="\u{1F44F}",this.reactUntil=performance.now()+2200)}update(e){let t=this.anim;this.waveTimer>0&&(this.waveTimer-=e,this.waveTimer<=0&&this.selected&&!this.hasDuty()&&(t.pose=this.isSitting?"sit":"talk")),this.celebrate>0&&(this.celebrate-=e,this.celebrate<=0&&this.plan(!0)),this.local&&performance.now()>this.local.until&&this.clearLocal();let n=performance.now();if(this.social&&n>this.social.until&&(this.endSocial(),this.emote=null,!this.path.length&&!this.isSitting&&(this.anim.pose="idle")),this.reactUntil&&n>this.reactUntil&&(this.reactUntil=0,this.emote=null,!this.isSitting&&!this.path.length&&(this.anim.pose="idle")),this.path.length){let[a,o]=this.path[0],c=a-this.pos.x,l=o-this.pos.y,h=Math.hypot(c,l),u=(this.anim.rig.flyer?Fv:Nv)*(this.def.species==="turtle"?.75:1)*(this.awayFromRoom||this.returning?1.8:1);if(t.seatY=0,t.pose="idle",h<.06)this.path.shift();else{let d=Math.min(h,u*e);this.pos.x+=c/h*d,this.pos.y+=l/h*d,this.goalFacing=Math.atan2(c,l),t.speed=u}if(!this.path.length&&this.arrive){let d=this.arrive.onArrive,f=this.arrive.station;this.arrive=null,this.pos.set(f.wx,f.wz),t.speed=0,d?.(),this.emoteOnArrive&&(this.emote=this.emoteOnArrive,this.emoteOnArrive=null)}for(let d of this.world.agents){if(d===this)continue;let f=this.pos.x-d.pos.x,g=this.pos.y-d.pos.y,x=Math.hypot(f,g);if(x>.001&&x<.5){let m=(.5-x)*2.5*e,p=this.pos.x+f/x*m,y=this.pos.y+g/x*m;this.world.nav.isFreeAt(p,y)&&this.pos.set(p,y)}}}else t.speed=0;!this.selected&&!this.local&&(this.intent.source!=="server"||this.intent.kind==="idle"||this.intent.kind==="completed"&&!this.celebrate)&&this.ambientEnabled&&!this.path.length&&!this.social&&(this.ambientTimer-=e,this.ambientTimer<=0&&this.ambientStep());let r=this.goalFacing-this.facing;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.facing+=r*Math.min(1,Ov*e),this.selected&&!this.hasDuty()&&!this.path.length&&!this.isSitting&&(this.goalFacing=0),this.root.position.set(this.pos.x,0,this.pos.y),this.root.rotation.y=this.facing,this.forceSit&&(t.w.sit=Math.max(t.w.sit,.98)),t.update(e)}};function Gf(i){i.reserved=new Map;let e=Ss.map(t=>new jh(t,i));return i.agents=e,i.broadcast=(t,n)=>e.forEach(s=>s.react(t,n)),e.forEach((t,n)=>{t.ambientTimer=.8+n*.9+Math.random()*2}),e}var bt='-apple-system, "SF Pro Text", "Segoe UI", Roboto, sans-serif',zv={completed:"#3aa76d",running:"#3a8fd9",active:"#3a8fd9",in_progress:"#3a8fd9",processing:"#3a8fd9",pending:"#c9c2b4",failed:"#d9534f",error:"#d9534f",paused:"#e0a93b"},Kh=i=>zv[String(i||"").toLowerCase()]||"#b8b0a2";function Wf(i,e,t,n,s){i.fillStyle="#fbf9f4",i.fillRect(0,0,i.canvas.width,i.canvas.height),i.fillStyle=n,i.fillRect(0,0,e,10),i.fillStyle="#2b2620",i.font=`700 34px ${bt}`,i.textBaseline="top",i.fillText(li(i,t,e-40),22,24),s&&(i.fillStyle="#8a8172",i.font=`500 20px ${bt}`,i.fillText(li(i,s,e-40),22,64))}function Ec(i,e,t,n){i.fillStyle="#9a9184",i.font=`500 24px ${bt}`,i.textAlign="center",i.fillText(n,e/2,t/2+10),i.textAlign="left"}function Hv(i,e,t){let{ctx:n,canvas:s}=i,r=s.width,a=s.height;if(Wf(n,r,`Tablero \xB7 ${e.short}`,e.accent,t.connected?t.mode==="demo"?"Simulaci\xF3n local":"Registros de misiones":"Sin sesi\xF3n"),!t.connected)return Ec(n,r,a,"No consultado");let o=t.ent.snapshot,c=(o.steps||[]).filter(l=>l.department===e.dept).slice(-4).reverse();if(!c.length)return Ec(n,r,a,"Sin etapas de misi\xF3n");c.forEach((l,h)=>{let u=104+h*54,d=(o.missions||[]).find(f=>f.id===l.mission_id);n.fillStyle=Kh(l.status),Zi(n,22,u,14,38,6),n.fill(),n.fillStyle="#2b2620",n.font=`600 22px ${bt}`,n.fillText(li(n,l.directive||"Etapa",r-80),48,u),n.fillStyle="#8a8172",n.font=`500 17px ${bt}`,n.fillText(li(n,`${(d?.title||"Misi\xF3n").replace("[Simulaci\xF3n] ","")} \xB7 etapa ${l.seq}`,r-80),48,u+24)})}function Vv(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;if(t.fillStyle="#2f3a33",t.fillRect(0,0,s,r),t.fillStyle="#f4efe2",t.font=`700 34px ${bt}`,t.textBaseline="top",t.fillText("Misiones",24,20),t.font=`500 18px ${bt}`,t.fillStyle="#b9c4b8",t.fillText(e.connected?e.mode==="demo"?"SIMULACI\xD3N \xB7 datos locales":"pulse_missions \xB7 pulse_mission_steps":"Sin sesi\xF3n \xB7 no consultado",190,32),!e.connected)return;let a=e.ent.snapshot,o=(a.missions||[]).slice(0,3);if(!o.length){t.fillStyle="#b9c4b8",t.font=`500 26px ${bt}`,t.fillText("Sin misiones registradas",24,r/2);return}let c=(s-48)/o.length;o.forEach((l,h)=>{let u=24+h*c;t.fillStyle="#3c4a41",Zi(t,u,70,c-16,r-90,14),t.fill(),t.fillStyle="#f4efe2",t.font=`700 22px ${bt}`,t.fillText(li(t,l.title.replace("[Simulaci\xF3n] ",""),c-44),u+14,84),t.fillStyle="#c9d3c7",t.font=`500 16px ${bt}`,t.fillText(l.status,u+14,112),(a.steps||[]).filter(f=>f.mission_id===l.id).sort((f,g)=>f.seq-g.seq).slice(0,5).forEach((f,g)=>{let x=140+g*42;t.fillStyle=Kh(f.status),Zi(t,u+14,x,c-44,34,9),t.fill(),t.fillStyle="#fff",t.font=`600 17px ${bt}`;let m=ai(Xi(f.department)?.room)?.short||f.department;t.fillText(li(t,`${f.seq}. ${m}`,c-64),u+24,x+8)})})}function Gv(i,e,t){let{ctx:n,canvas:s}=i,r=s.width,a=s.height;if(Wf(n,r,"Traspasos",e.accent,t.connected?"Etapas registradas":"Sin sesi\xF3n"),!t.connected)return Ec(n,r,a,"No consultado");let c=(t.ent.snapshot.steps||[]).filter(h=>h.status!=="pending").sort((h,u)=>Date.parse(u.finished_at||u.started_at||0)-Date.parse(h.finished_at||h.started_at||0)).slice(0,5).reverse();if(!c.length)return Ec(n,r,a,"Sin traspasos");let l=(r-60)/Math.max(1,c.length);c.forEach((h,u)=>{let d=40+u*l+l/2-10,f=a*.62;u&&(n.strokeStyle="#c9c2b4",n.lineWidth=4,n.beginPath(),n.moveTo(d-l+34,f),n.lineTo(d-34,f),n.stroke()),n.fillStyle=Kh(h.status),n.beginPath(),n.arc(d,f,30,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font=`700 22px ${bt}`,n.textAlign="center",n.fillText(String(h.seq),d,f-12),n.fillStyle="#2b2620",n.font=`600 16px ${bt}`,n.fillText(li(n,ai(Xi(h.department)?.room)?.short||"",l-6),d,f+40),n.textAlign="left"})}function Wv(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;t.fillStyle="#121820",t.fillRect(0,0,s,r),t.fillStyle="#e8eef5",t.font=`700 30px ${bt}`,t.textBaseline="top",t.fillText("PULSE HQ",24,20),t.fillStyle=e.mode==="demo"?"#f2c14e":e.connected?"#5fd38d":"#8a95a3",t.font=`600 18px ${bt}`,t.fillText(e.mode==="demo"?"SIMULACI\xD3N":e.connected?"Conectado":"Sin sesi\xF3n",190,28);let a=e.summary;if(!a){t.fillStyle="#8a95a3",t.font=`500 24px ${bt}`,t.fillText("Datos no consultados",24,r/2);return}[["En ejecuci\xF3n",a.running,"#5fb3ff"],["Revisiones",a.approvals,"#f2c14e"],["Misiones",a.activeMissions,"#9ad08a"],["Entregables",a.deliverables,"#c9a7ff"]].forEach(([c,l,h],u)=>{let d=24+u%2*(s/2-12),f=76+Math.floor(u/2)*((r-90)/2);t.fillStyle="#1d2632",Zi(t,d,f,s/2-36,(r-110)/2,12),t.fill(),t.fillStyle=h,t.font=`700 46px ${bt}`,t.fillText(String(l),d+16,f+10),t.fillStyle="#9fb0c2",t.font=`500 18px ${bt}`,t.fillText(c,d+16,f+64)})}function Xv(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;if(t.fillStyle="#16202a",t.fillRect(0,0,s,r),t.fillStyle="#e8eef5",t.font=`700 28px ${bt}`,t.textBaseline="top",t.fillText("Junta",22,18),!e.connected){t.fillStyle="#8a95a3",t.font=`500 22px ${bt}`,t.fillText("No consultado",22,r/2);return}let o=(e.ent.snapshot.missions||[]).filter(c=>c.status==="awaiting_ceo");t.fillStyle="#f2c14e",t.font=`700 52px ${bt}`,t.fillText(String(o.length),22,64),t.fillStyle="#9fb0c2",t.font=`500 20px ${bt}`,t.fillText("misiones esperan tu decisi\xF3n",22,124),o[0]&&(t.fillStyle="#e8eef5",t.font=`600 20px ${bt}`,t.fillText(li(t,o[0].title.replace("[Simulaci\xF3n] ",""),s-44),22,160))}function $v(i,e,t,n=0){let{ctx:s,canvas:r}=i,a=r.width,o=r.height;if(s.fillStyle="#141b22",s.fillRect(0,0,a,o),s.fillStyle="#5f6b78",s.font=`600 16px ${bt}`,s.textBaseline="top",s.fillText("Decorativo",a-110,12),e==="chatScreen")for(let c=0;c<5;c++){let l=c%2===0;s.fillStyle=l?"#2b3642":t.accent,Zi(s,l?20:a*.35,40+c*38,a*.55,28,12),s.fill()}else{s.strokeStyle=t.accent,s.lineWidth=4,s.beginPath();for(let c=0;c<=a;c+=12){let l=o*.6-Math.sin(c/40+n)*30-c/a*60;c?s.lineTo(c,l):s.moveTo(c,l)}s.stroke();for(let c=0;c<8;c++){s.fillStyle=c%2?"#3a78c2":"#5fb3ff";let l=20+c*37%60;s.fillRect(20+c*(a-40)/8,o-20-l,(a-40)/8-8,l)}}}function Xf(i,e){for(let t of i){let n=ai(t.room);t.kind==="missionBoard"?Vv(t.surface,e):t.kind==="board"&&t.boardKind==="handoffs"?Gv(t.surface,n,e):t.kind==="board"?Hv(t.surface,n,e):t.kind==="wallScreen"&&t.screen==="company"?Wv(t.surface,e):t.kind==="wallScreen"&&t.screen==="missions-mini"?Xv(t.surface,e):(t.kind==="chatScreen"||t.kind==="dataWall")&&(t.drawn||$v(t.surface,t.kind,n),t.drawn=!0),t.surface.commit()}}var qv={running:{icon:"\u2699\uFE0E",text:"Trabajando",cls:"run"},review:{icon:"!",text:"Te necesita",cls:"review"},failed:{icon:"\u26A0\uFE0E",text:"Fall\xF3",cls:"fail"},mission:{icon:"\u25C6",text:"En misi\xF3n",cls:"mission"},completed:{icon:"\u2713",text:"Resultado",cls:"done"},receiving:{icon:"\u2193",text:"Recibiendo",cls:"recv"},sending:{icon:"\u2026",text:"Enviando\u2026",cls:"local"}},Tc=class{constructor(e,t,{onAgent:n,onHotspot:s}){this.el=e,this.stage=t,this.onAgent=n,this.onHotspot=s,this.tags=new Map,this.pings=new Map,e.addEventListener("click",r=>{let a=r.target.closest("[data-agent]");if(a){r.stopPropagation(),n(a.dataset.agent);return}let o=r.target.closest("[data-hot]");o&&(r.stopPropagation(),s(o.dataset.hot,o.dataset.room))})}ensureTag(e){if(this.tags.has(e.def.id))return this.tags.get(e.def.id);let t=document.createElement("button");return t.className="agent-tag",t.dataset.agent=e.def.id,t.type="button",t.setAttribute("aria-label",`${e.def.name}, ${e.room.name}`),t.innerHTML=`<span class="bubble" hidden></span><span class="name"><i></i>${e.def.name}</span>`,this.el.appendChild(t),this.tags.set(e.def.id,t),t}ensurePing(e){let t=`${e.room}:${e.key}:${e.item.wx.toFixed(1)}`;if(this.pings.has(t))return this.pings.get(t);let n=mc[e.key]||{title:e.key},s=document.createElement("button");s.className="hot-ping",s.type="button",s.dataset.hot=e.key,s.dataset.room=e.room,s.setAttribute("aria-label",n.title),s.innerHTML=`<span class="dot"></span><span class="count" hidden></span><span class="label">${n.title}</span>`,this.el.appendChild(s);let r=new Ut().setFromObject(e.obj),a=r.getCenter(new L),o={el:s,pos:new L(a.x,Math.min(r.max.y+.15,2.6),Math.min(a.z+.05,r.max.z)),h:e};return this.pings.set(t,o),o}setCounts(e){this.counts=e}update(e,t,n,{selectedId:s,labelsFor:r,sheetOpen:a}){let o=this.stage.roomIndex;for(let c of e){let l=this.ensureTag(c),h=this.stage.project(c.headWorld),d=Math.abs(c.pos.x-this.stage.camX)<6.2&&!h.behind&&h.x>-60&&h.x<this.stage.w+60&&h.y>-40&&h.y<this.stage.h+40;if(l.style.display=d?"":"none",!d)continue;l.style.transform=`translate(${h.x.toFixed(1)}px, ${h.y.toFixed(1)}px)`;let f=c.local?.kind==="sending"&&!["receiving","running"].includes(c.intent.kind)?"sending":c.intent.kind,g=qv[f],x=l.firstElementChild;if(g){x.hidden=!1;let m=f==="mission"&&c.intent.mission?`Misi\xF3n \xB7 etapa ${c.intent.mission.seq}`:f==="review"&&c.intent.approvals?.length>1?`${c.intent.approvals.length} revisiones`:f==="completed"&&c.intent.label==="Resultado recibido"?"Resultado recibido":g.text,p=`<b>${g.icon}</b><em>${m}</em>`;x.dataset.html!==p&&(x.innerHTML=p,x.dataset.html=p,x.className=`bubble ${g.cls}`)}else if(c.emote&&c.intent.source!=="server"||c.emote&&c.intent.kind==="idle"){let m=!c.path.length,p=`<b>${c.emote}</b>`;x.hidden=!m,m&&x.dataset.html!==p&&(x.innerHTML=p,x.dataset.html=p,x.className="bubble amb")}else x.hidden=!0;l.classList.toggle("selected",c.def.id===s),l.classList.toggle("dim",a&&c.def.id!==s),l.classList.toggle("far",c.def.room!==n&&c.def.id!==s)}for(let c of t){let l=this.ensurePing(c),h=this.counts?.[`${c.room}:${c.key}`];if(!(c.room===n&&!a&&(c.key!=="tray"||h))){l.el.style.display="none";continue}let d=this.stage.project(l.pos);l.el.style.display="",l.el.style.transform=`translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px)`;let f=this.counts?.[`${c.room}:${c.key}`],g=l.el.querySelector(".count");f?(g.hidden=!1,g.textContent=f,l.el.classList.add("has-count")):(g.hidden=!0,l.el.classList.remove("has-count"))}}};var $f=new Set(["running","processing","in_progress"]),Yv=new Set(["pending","awaiting_ceo","waiting_approval"]);function Ri(i,e=Date.now()){if(!i||!i.source||i.source!=="server"||!i.record)return{kind:"unconnected",label:"Muestra sin conexi\xF3n",actionable:!1};let t=i.record,n=String(t.status||"").toLowerCase(),s=Date.parse(t.updated_at||t.started_at||t.created_at||"");return $f.has(n)&&Number.isFinite(s)&&Math.abs(e-s)<=15*6e4?{kind:"running",label:"En ejecuci\xF3n verificada",actionable:!0}:Yv.has(n)?{kind:"review",label:"Pendiente de revisi\xF3n",actionable:!0}:n==="completed"?{kind:"completed",label:"Trabajo registrado",actionable:!0}:{kind:"idle",label:$f.has(n)?"Estado sin actualizar":"Disponible",actionable:!1}}var Ji={"Direcci\xF3n estrat\xE9gica":"ulises","Marketing y crecimiento":"kiki","Producci\xF3n de contenido":"mia","Ventas y patrocinios":"rocco","Relaciones p\xFAblicas y alianzas":"lila","Eventos y experiencias":"luz",Comunidad:"cata","Inteligencia de mercado":"iris","Finanzas y administraci\xF3n":"tomas","Tecnolog\xEDa y automatizaci\xF3n":"bit"},Yf={ulises:"Ulises",kiki:"Kiki",mia:"M\xEDa",rocco:"Rocco",lila:"Lila",luz:"Luz",cata:"Cata",iris:"Iris",tomas:"Tom\xE1s",bit:"Bit",calidad:"Calidad",ceo:"CEO"},Zf=Object.fromEntries(Object.entries(Ji).map(([i,e])=>[e,i])),qf=new Set(["planning","running","reviewing"]),Zv=7*6e4,jv=30*6e4,Jh={plan:"Planificando el trabajo",analyze:"Analizando la tarea",act:"Usando herramientas",correct:"Corrigiendo lo que pidi\xF3 Calidad",evaluate:"Calidad revisa el entregable"},Wt=i=>Date.parse(i||"")||0,As=i=>i?.engine==="core",wc=i=>String(i||"").slice(0,8);function Kv(i,e,t=Wt(e.claimed_at||e.started_at)-2e3){return(i.runs||[]).filter(n=>n.step_id===e.id&&Wt(n.created_at)>=t).sort((n,s)=>Wt(n.created_at)-Wt(s.created_at))}function jf(i,e,t=Date.now()){let n=Ji[e];if(!n)return null;let s=(i.missions||[]).filter(As);if(!s.length)return null;let r=Object.fromEntries(s.map(f=>[f.id,f])),a=i.messages||[],o=i.runs||[];if(n==="ulises"){let f=s.filter(g=>g.status==="planning").sort((g,x)=>Wt(x.created_at)-Wt(g.created_at))[0];if(f){let g=a.find(p=>p.mission_id===f.id&&p.from_agent==="ceo"&&p.kind==="request"),x=o.filter(p=>p.mission_id===f.id&&p.phase==="plan").sort((p,y)=>Wt(y.created_at)-Wt(p.created_at))[0],m={id:f.id,title:f.title,seq:0};return x?{kind:"running",label:"Trabajando",detail:`${Jh.plan} \xB7 ${x.provider}/${x.model}`,mission:m,evidence:{mission:f.id,run:x.id}}:{kind:"receiving",label:"Recibiendo",detail:f.claimed_at?"El motor tom\xF3 la misi\xF3n; preparando el plan":"Instrucci\xF3n registrada en Supabase; esperando al motor",mission:m,evidence:{mission:f.id,message:g?.id}}}}let c=(i.steps||[]).filter(f=>f.agent_id===n&&r[f.mission_id]),l=c.filter(f=>f.status==="running"&&t-Wt(f.claimed_at||f.started_at)<=Zv&&qf.has(r[f.mission_id].status)).sort((f,g)=>Wt(g.claimed_at)-Wt(f.claimed_at))[0];if(l){let f=r[l.mission_id],g={id:f.id,title:f.title,seq:l.seq,directive:l.directive},x=Kv(i,l);if(!x.length)return{kind:"receiving",label:"Recibiendo",detail:`Etapa ${l.seq} reclamada por el motor${l.attempt?` \xB7 intento ${l.attempt+1}`:""}`,mission:g,evidence:{mission:f.id,step:l.id}};let m=x[x.length-1];return{kind:"running",label:"Trabajando",detail:m.agent_id==="calidad"?Jh.evaluate:`${Jh[m.phase]||"Trabajando"} \xB7 ${x.filter(y=>y.agent_id!=="calidad").length} llamadas a ${m.model}`,mission:g,evidence:{mission:f.id,step:l.id,run:m.id}}}let h=c.filter(f=>f.status==="completed"&&t-Wt(f.finished_at)<=jv).sort((f,g)=>Wt(g.finished_at)-Wt(f.finished_at))[0];if(h){let f=a.find(g=>g.step_id===h.id&&g.kind==="result"&&g.from_agent===n);if(f){let g=r[h.mission_id];return{kind:"completed",label:"Resultado recibido",detail:`Etapa ${h.seq} aprobada por Calidad${h.review?.score!=null?` (${h.review.score}/10)`:""}`,mission:{id:g.id,title:g.title,seq:h.seq},evidence:{mission:g.id,step:h.id,message:f.id,deliverable:f.artifact?.deliverable_id}}}}let u=c.find(f=>f.status==="failed"&&r[f.mission_id].status==="needs_attention");if(u)return{kind:"failed",label:"Etapa sin completar",detail:u.error||"Error sin detalle",error:u.error||"Error sin detalle",mission:{id:u.mission_id,title:r[u.mission_id].title,seq:u.seq},evidence:{mission:u.mission_id,step:u.id}};let d=c.filter(f=>f.status==="pending"&&qf.has(r[f.mission_id].status)).sort((f,g)=>f.seq-g.seq)[0];if(d){let f=r[d.mission_id];return{kind:"mission",label:`Misi\xF3n \xB7 etapa ${d.seq} en espera`,detail:d.attempt?`Calidad pidi\xF3 cambios \xB7 intento ${d.attempt+1}`:"Espera a que terminen las etapas previas",mission:{id:f.id,title:f.title,seq:d.seq,directive:d.directive},evidence:{mission:f.id,step:d.id}}}return null}function Kf(i,e){let t=Ji[e];if(!t)return[];let n=(i.missions||[]).filter(As),s=i.messages||[],r=[];if(t==="ulises")for(let a of n){let o=s.filter(c=>c.mission_id===a.id&&(c.to_agent==="ceo"||c.from_agent==="ceo"&&c.to_agent==="ulises"||c.to_agent==="ulises"&&["result","blocker"].includes(c.kind))).sort((c,l)=>Wt(c.created_at)-Wt(l.created_at));r.push({type:"mission",at:a.created_at,mission:a,messages:o})}else for(let a of(i.steps||[]).filter(o=>o.agent_id===t&&n.some(c=>c.id===o.mission_id))){let o=n.find(l=>l.id===a.mission_id),c=s.filter(l=>l.step_id===a.id).sort((l,h)=>Wt(l.created_at)-Wt(h.created_at));r.push({type:"step",at:c[0]?.created_at||a.started_at||o.created_at,mission:o,step:a,messages:c})}return r}function Ac(i,{missionId:e,stepId:t}={}){let n=(i.runs||[]).filter(s=>(!e||s.mission_id===e)&&(!t||s.step_id===t));return{total:n.length,ok:n.filter(s=>s.status==="ok").length,retries:n.filter(s=>s.status!=="ok").length,tokens:n.reduce((s,r)=>s+(r.input_tokens||0)+(r.output_tokens||0),0),models:[...new Set(n.map(s=>`${s.provider}/${s.model}`))]}}var K=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Jv={planning:"Planificando",needs_attention:"Requiere atenci\xF3n",queued:"En cola",running:"En ejecuci\xF3n",processing:"En ejecuci\xF3n",in_progress:"En ejecuci\xF3n",completed:"Completado",failed:"Fall\xF3",error:"Fall\xF3",pending:"Pendiente",paused:"En pausa",approved:"Aprobada",rejected:"Rechazada",awaiting_ceo:"Espera al CEO",reviewed:"Revisada",revising:"En revisi\xF3n",active:"Activa",cancelled:"Cancelada"},Xt=i=>Jv[String(i||"").toLowerCase()]||K(i||"Sin estado");function Zt(i){let e=Date.parse(i||"");if(!e)return"";let t=Math.max(0,(Date.now()-e)/1e3);return t<50?"hace un momento":t<3600?`hace ${Math.round(t/60)} min`:t<86400?`hace ${Math.round(t/3600)} h`:new Date(e).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}var In=(i,e="")=>`<img class="portrait ${e}" src="./assets/portraits/${i.portrait}.webp" alt="" loading="lazy">`,ga=(i,e=360)=>{let t=String(i||"");return t.length>e?K(t.slice(0,e))+"\u2026":K(t)},hi=i=>i==="demo"?'<p class="note sim">Datos de la SIMULACI\xD3N local. Nada de esto existe en Supabase.</p>':"";function Jf(i){return i.mode==="demo"?{cls:"sim",text:"Simulaci\xF3n"}:i.connected?{cls:"ok",text:i.ent.loading?"Actualizando\u2026":"CEO conectado"}:{cls:"off",text:"Sin sesi\xF3n"}}var nu=i=>i?.mode==="demo";function Qv(i,e){if(!i)return"";let t=[["mission","misi\xF3n"],["step","etapa"],["run","ejecuci\xF3n"],["message","mensaje"],["deliverable","archivo"]].filter(([n])=>i[n]).map(([n,s])=>`${s} ${K(wc(i[n]))}`);return t.length?`<small class="evidence">${nu(e)?"Registro SIMULADO (no existe en Supabase)":"Evidencia en Supabase"}: ${t.join(" \xB7 ")}</small>`:""}function ey(i,e,t){if(e?.kind==="sending"&&!["receiving","running"].includes(i.kind))return'<span class="pill local">Enviando instrucci\xF3n \xB7 a\xFAn sin confirmar</span>';if(i.evidence)return`<span class="pill ${{receiving:"recv",running:"run",completed:"done",failed:"fail",mission:"mission"}[i.kind]||"idle"}">${K(i.label)} \xB7 ${nu(t)?"simulaci\xF3n":"servidor"}</span>${i.detail?`<small class="detail">${K(i.detail)}</small>`:""}${Qv(i.evidence,t)}`;let n={running:["run","Trabajando \xB7 servidor"],review:["review","Revisi\xF3n pendiente \xB7 servidor"],failed:["fail","\xDAltimo encargo fall\xF3 \xB7 servidor"],mission:["mission","En misi\xF3n \xB7 servidor"],completed:["done","Resultado reciente \xB7 servidor"],idle:["idle","Sin encargos en curso"],unconnected:["off","Actividad no consultada"]},[s,r]=n[i.kind]||n.idle;return`<span class="pill ${s}">${r}</span>`}var Rc=i=>Ji[i]==="ulises",Qh=i=>Yf[i]||K(i),ty=i=>Xi(Zf[i]),Qf=i=>new Set((i.steps||[]).filter(e=>e.agent_id&&e.task_id).map(e=>e.task_id));function eu(i,e){let t=ty(i.from_agent),n=i.kind==="blocker"?"error":(i.from_agent==="calidad","relay"),s={request:"encargo",result:"resultado",review:"revisi\xF3n",feedback:"correcciones",decision:"decisi\xF3n",blocker:"bloqueo",notice:"aviso"}[i.kind]||i.kind;return`<div class="msg agent ${n}">${t?In(t,"xs"):'<span class="portrait xs qa">\u2713</span>'}<div><p><b class="from">${Qh(i.from_agent)} \u2192 ${Qh(i.to_agent)}</b> ${ga(i.content,420)}</p><small class="kind">${K(s)} \xB7 ${Zt(i.created_at)} \xB7 mensaje ${K(wc(i.id))}</small></div></div>`}function tu(i,e){let t=i.ent.snapshot,n=(t.deliverables||[]).filter(r=>r.task_id&&r.task_id===e.task_id),s=Ac(t,{stepId:e.id});return`<div class="stepcard ${K(String(e.status))}"><header><b>Etapa ${K(e.seq)} \xB7 ${Qh(e.agent_id)}</b><span class="pill ${e.status==="completed"?"done":e.status==="failed"?"fail":e.status==="running"?"run":"idle"}">${Xt(e.status)}</span></header><p>${ga(e.directive,160)}</p><small class="muted">${s.total} ejecuciones de IA \xB7 ${s.tokens.toLocaleString("es-MX")} tokens${e.attempt?` \xB7 intento ${e.attempt+1}`:""}${e.review?.score!=null?` \xB7 Calidad ${e.review.score}/10`:""}</small>${n.length?`<div class="chips">${n.map(r=>`<button class="chip file" data-action="file" data-id="${K(r.id)}">\u2913 ${K(r.filename)}</button>`).join("")}</div>`:""}</div>`}function ny(i,e,t){let n=i.ent.snapshot,s=e.mission;if(e.type==="mission"){let o=e.messages.find(g=>g.from_agent==="ceo"&&g.kind==="request"),c=(n.steps||[]).filter(g=>g.mission_id===s.id).sort((g,x)=>g.seq-x.seq),l=(n.deliverables||[]).filter(g=>g.mission_id===s.id&&g.review_status==="approved"),h=(n.approvals||[]).filter(g=>g.status==="pending"&&c.some(x=>x.task_id&&x.task_id===g.task_id)),u=Ac(n,{missionId:s.id}),d=e.messages.filter(g=>g!==o),f=s.status==="planning"&&!d.length;return`<div class="msg ceo"><div><p>${K(s.objective)}</p><small>T\xFA \xB7 ${Zt(s.created_at)} \xB7 ${nu(i)?"registro SIMULADO":"registrado en Supabase"} \xB7 misi\xF3n ${K(wc(s.id))}${o?.artifact?.source==="office"?" \xB7 desde la oficina":""}</small></div></div>`+d.map(g=>eu(g)).join("")+(f?`<div class="msg agent working">${In(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> ${s.claimed_at?"Preparando el plan":"Recibido; esperando al motor"}</p><small>Estado del servidor: ${Xt(s.status)}</small></div></div>`:"")+(c.length?`<div class="msg agent">${In(t,"xs")}<div><p><b>Progreso de la misi\xF3n</b> \xB7 ${Xt(s.status)} \xB7 ${u.total} ejecuciones de IA (${u.tokens.toLocaleString("es-MX")} tokens)</p>${c.map(g=>tu(i,g)).join("")}${l.length?`<div class="chips">${l.map(g=>`<button class="chip file" data-action="file" data-id="${K(g.id)}">\u2913 ${K(g.filename)}</button>`).join("")}</div>`:""}${h.map(_a).join("")}<div class="chips"><button class="chip" data-action="mission" data-id="${K(s.id)}">Ver misi\xF3n completa</button></div></div></div>`:"")}let r=e.step,a=r.status==="running";return e.messages.map(o=>eu(o)).join("")+tu(i,r)+(a?`<div class="msg agent working">${In(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> Etapa en curso</p><small>Registro del servidor \xB7 reclamada ${Zt(r.claimed_at)}</small></div></div>`:"")}function iy(i,e,t){let n=i.ent.snapshot,s=Qf(n),a=[...(n.tasks||[]).filter(o=>o.department===e&&!s.has(o.id)).map(o=>({type:"task",at:o.created_at,task:o})),...Kf(n,e)].sort((o,c)=>Date.parse(o.at||0)-Date.parse(c.at||0)).slice(-10);return a.length?a.map(o=>o.type==="task"?sy(i,o.task,t):ny(i,o,t)).join(""):`<div class="empty"><p>Todav\xEDa no hay encargos registrados con ${K(t.name)}.</p><p class="muted">${Rc(e)?"Escr\xEDbele abajo: tu instrucci\xF3n se registra en Supabase y Ulises la convierte en una misi\xF3n con otros agentes y revisi\xF3n de Calidad.":"Escribe una instrucci\xF3n abajo: se registrar\xE1 como tarea y la ejecutar\xE1 el motor existente."}</p></div>`}function sy(i,e,t){let n=i.ent.snapshot;{let s=(n.deliverables||[]).filter(c=>c.task_id===e.id),r=(n.approvals||[]).filter(c=>c.task_id===e.id),a=Ri({source:"server",record:e}).kind==="running",o;return a||["queued","running","processing","in_progress"].includes(e.status)?o=`<div class="msg agent working">${In(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> ${a?"Trabajando en ello":"Estado sin actualizar"}</p><small>Registro del servidor \xB7 ${Xt(e.status)} \xB7 ${Zt(e.updated_at||e.created_at)}</small></div></div>`:e.status==="completed"?o=`<div class="msg agent">${In(t,"xs")}<div><p>${ga(e.result)}</p><div class="chips">${s.map(c=>`<button class="chip file" data-action="file" data-id="${K(c.id)}">\u2913 ${K(c.filename||c.title)}</button>`).join("")}<button class="chip" data-action="task" data-id="${K(e.id)}">Ver completo</button></div>${r.filter(c=>c.status==="pending").map(c=>_a(c)).join("")}<small>${Zt(e.updated_at||e.created_at)}${r.length&&!r.some(c=>c.status==="pending")?" \xB7 revisi\xF3n "+Xt(r[0].status).toLowerCase():""}</small></div></div>`:o=`<div class="msg agent error">${In(t,"xs")}<div><p><b>No se complet\xF3.</b> ${ga(e.error||"Error sin detalle",220)}</p><div class="chips"><button class="chip" data-action="retry" data-id="${K(e.id)}">Reintentar (nuevo encargo)</button><button class="chip" data-action="task" data-id="${K(e.id)}">Detalle</button></div><small>${Xt(e.status)} \xB7 ${Zt(e.updated_at||e.created_at)}</small></div></div>`,`<div class="msg ceo"><div><p>${K(e.instruction)}</p><small>T\xFA \xB7 ${Zt(e.created_at)}</small></div></div>${o}`}}function _a(i){return`<div class="approval"><div><b>${K(i.title||"Revisi\xF3n del CEO")}</b>${i.description?`<small>${K(i.description)}</small>`:""}</div><div class="row"><button class="btn ghost" data-action="decide" data-choice="rejected" data-id="${K(i.id)}">Rechazar</button><button class="btn ok" data-action="decide" data-choice="approved" data-id="${K(i.id)}">Aprobar</button></div></div>`}function ep(i,e){let t=i.ent.snapshot,n=Qf(t),s=(t.tasks||[]).filter(d=>d.department===e&&!n.has(d.id)),r=(t.approvals||[]).filter(d=>d.department===e&&d.status==="pending"),a=(t.steps||[]).filter(d=>d.department===e).slice(-6).reverse(),o=Ji[e],c=s.filter(d=>["queued","running","processing","in_progress"].includes(d.status)),l=s.filter(d=>!c.includes(d)).slice(0,6),h=(t.deliverables||[]).filter(d=>s.some(f=>f.id===d.task_id)||o&&d.agent_id===o).slice(0,8),u=(d,f,g)=>`<section class="sec"><h4>${d}</h4>${f||`<p class="muted">${g}</p>`}</section>`;return u("Te necesita",r.map(_a).join(""),"Sin revisiones pendientes.")+u("En curso",c.map(d=>`<button class="row-item" data-action="task" data-id="${K(d.id)}"><span class="ic run">\u2699\uFE0E</span><span><b>${K(d.instruction)}</b><small>${Xt(d.status)} \xB7 ${Zt(d.updated_at||d.created_at)}</small></span></button>`).join(""),"Nada en ejecuci\xF3n seg\xFAn el servidor.")+u("Misiones",a.map(d=>`<button class="row-item" data-action="mission" data-id="${K(d.mission_id)}"><span class="ic mission">\u25C6</span><span><b>${K(d.directive||"Etapa de misi\xF3n")}</b><small>${K((t.missions||[]).find(f=>f.id===d.mission_id)?.title||"Misi\xF3n")} \xB7 etapa ${K(d.seq)} \xB7 ${Xt(d.status)}</small></span></button>`).join(""),"Sin etapas de misi\xF3n asignadas.")+u("Recientes",l.map(d=>`<button class="row-item" data-action="task" data-id="${K(d.id)}"><span class="ic ${d.status==="completed"?"done":"fail"}">${d.status==="completed"?"\u2713":"\u26A0\uFE0E"}</span><span><b>${K(d.instruction)}</b><small>${Xt(d.status)} \xB7 ${Zt(d.updated_at||d.created_at)}</small></span></button>`).join(""),"Sin trabajos anteriores.")+u("Entregables",h.map(Pc).join(""),"Sin archivos generados.")}var ry={approved:"aprobado por Calidad",rejected:"devuelto por Calidad",pending:"en revisi\xF3n"},Pc=i=>`<button class="row-item" data-action="file" data-id="${K(i.id)}"><span class="ic file">\u2913</span><span><b>${K(i.title||i.filename)}</b><small>${K(i.filename||"")}${i.version?` \xB7 v${K(i.version)}`:""}${i.review_status?` \xB7 ${K(ry[i.review_status]||i.review_status)}`:""}${i.size_bytes?` \xB7 ${Math.max(1,Math.round(i.size_bytes/1024))} KB`:""} \xB7 ${Zt(i.created_at)}</small></span></button>`;function Qi(i){return`<div class="empty locked"><p><b>Actividad no consultada.</b></p><p class="muted">Inicia sesi\xF3n como CEO para ver encargos reales${i?` y hablar con ${K(i)}`:""}. Tambi\xE9n puedes abrir la simulaci\xF3n local para probar el recorrido sin tocar datos.</p><div class="row"><button class="btn" data-action="access">Acceso del CEO</button><button class="btn ghost" data-action="demo">Probar simulaci\xF3n</button></div></div>`}function tp(i,e,t="chat"){let n=ai(e.room),s=n.dept,r=i.agentsById[e.id],a=(i.ent?.snapshot.roles||[]).find(u=>u.department===s),o=i.sending[s],c=`<header class="sheet-head agent">${In(e,"lg")}<div class="who"><small>${K(n.name)}</small><h3>${K(e.name)}</h3><p>${K(a?.professional_title||e.role)}</p>${ey(r.intent,r.local,i)}</div><button class="close" data-action="close" aria-label="Volver a la oficina">\xD7</button></header>
  <div class="tabs" role="tablist">${[["chat","Conversaci\xF3n"],["work","Trabajo"],["profile","Perfil"]].map(([u,d])=>`<button role="tab" aria-selected="${t===u}" class="${t===u?"on":""}" data-action="tab" data-tab="${u}">${d}</button>`).join("")}</div>`,l,h="";return i.connected?t==="chat"?(l=`<div class="thread">${iy(i,s,e)}</div>${hi(i.mode)}`,h=`<form class="composer" data-action="send"><textarea name="instruction" rows="1" placeholder="${Rc(s)?"Encargo para Ulises: qu\xE9 quieres lograr y qu\xE9 esperas recibir\u2026":`Instrucci\xF3n para ${K(e.name)}\u2026`}" maxlength="${Rc(s)?1500:2e3}" ${o?"disabled":""}></textarea><button class="send" ${o?"disabled":""} aria-label="Enviar instrucci\xF3n">${o?'<span class="spin"></span>':"\u2191"}</button></form><p class="composer-note">${Rc(s)?o?"Registrando la instrucci\xF3n en Supabase\u2026":"Se registra en Supabase y abre una misi\xF3n de <code>pulse-core</code>: Ulises planifica, delega en otros agentes y Calidad revisa cada entrega. M\xEDnimo 20 caracteres.":o?"Esperando al motor <code>pulse-run</code>\u2026 el estado se actualiza desde el servidor.":"Se registra como tarea y la ejecuta <code>pulse-run</code> (una llamada a Gemini). Para trabajo entre varios agentes, escr\xEDbele a Ulises."}</p>`):t==="work"?l=ep(i,s)+hi(i.mode):l=`<section class="sec contract">${a?`<h4>Contrato profesional</h4><dl><dt>Puesto</dt><dd>${K(a.professional_title)}</dd><dt>Prop\xF3sito</dt><dd>${K(a.purpose)}</dd><dt>Entregable</dt><dd>${K(a.output_contract)}</dd><dt>Criterios de aceptaci\xF3n</dt><dd>${K(a.acceptance_criteria)}</dd>${a.handoff_to?`<dt>Traspasa a</dt><dd>${K(a.handoff_to)}</dd>`:""}</dl>`:'<p class="muted">No hay contrato registrado para este departamento.</p>'}<p class="note">${K(e.name)} es el personaje visual de ${K(n.name)}. El nombre y la especie son provisionales y no identifican a un agente individual del backend.</p></section>`:l=Qi(e.name),{html:c+`<div class="sheet-body">${l}</div>`+h,size:"agent"}}function np(i,e){let t=i.ent.snapshot,n=(t.tasks||[]).find(c=>c.id===e);if(!n)return{html:'<header class="sheet-head"><div class="who"><h3>Encargo</h3></div><button class="close" data-action="back">\u2039</button></header><div class="sheet-body"><p class="muted">El registro ya no est\xE1 en la instant\xE1nea actual.</p></div>',size:"mid"};let s=Xi(n.department),r=(t.deliverables||[]).filter(c=>c.task_id===n.id),a=(t.approvals||[]).filter(c=>c.task_id===n.id),o=Array.isArray(n.sources)?n.sources:[];return{html:`<header class="sheet-head">${s?In(s,"md"):""}<div class="who"><small>${K(n.department)}</small><h3>Encargo</h3><span class="pill ${n.status==="completed"?"done":n.status==="failed"?"fail":"run"}">${Xt(n.status)}</span></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Instrucci\xF3n</h4><p>${K(n.instruction)}</p><small class="muted">Creado ${Zt(n.created_at)} \xB7 actualizado ${Zt(n.updated_at)}</small></section>
  ${n.result?`<section class="sec"><h4>Resultado</h4><div class="result">${K(n.result)}</div></section>`:""}
  ${n.error?`<section class="sec"><h4>Error</h4><p class="err">${K(n.error)}</p><button class="btn" data-action="retry" data-id="${K(n.id)}">Reintentar como nuevo encargo</button></section>`:""}
  ${o.length?`<section class="sec"><h4>Fuentes</h4>${o.slice(0,8).map(c=>`<p class="src">${K(typeof c=="string"?c:c.title||c.url||JSON.stringify(c))}</p>`).join("")}</section>`:""}
  ${r.length?`<section class="sec"><h4>Entregables</h4>${r.map(Pc).join("")}</section>`:""}
  ${a.length?`<section class="sec"><h4>Revisi\xF3n</h4>${a.map(c=>c.status==="pending"?_a(c):`<p>${K(c.title)} \xB7 <b>${Xt(c.status)}</b></p>`).join("")}</section>`:""}${hi(i.mode)}</div>`,size:"tall"}}function ay(i,e){let t=i.ent.snapshot,n=(t.steps||[]).filter(c=>c.mission_id===e.id).sort((c,l)=>c.seq-l.seq),s=(t.messages||[]).filter(c=>c.mission_id===e.id).sort((c,l)=>Date.parse(c.created_at)-Date.parse(l.created_at)),r=(t.deliverables||[]).filter(c=>c.mission_id===e.id),a=Ac(t,{missionId:e.id}),o=e.status==="paused"||e.status==="needs_attention"?[["resume","Reanudar"]]:["planning","running"].includes(e.status)?[["pause","Pausar"],["cancel","Cancelar"]]:[];return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Misi\xF3n \xB7 motor multiagente</small><h3>${K(e.title)}</h3><span class="pill mission">${Xt(e.status)}</span><small class="evidence">misi\xF3n ${K(e.id)}</small></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Encargo del CEO</h4><p>${K(e.objective||"")}</p>${e.last_error?`<p class="err">${K(e.last_error)}</p>`:""}</section>
  <section class="sec"><h4>Ejecuci\xF3n real</h4><div class="kpis"><div class="kpi"><b>${a.total}</b><small>llamadas de IA</small></div><div class="kpi"><b>${a.tokens.toLocaleString("es-MX")}</b><small>tokens</small></div><div class="kpi"><b>${s.length}</b><small>mensajes</small></div><div class="kpi"><b>${r.length}</b><small>archivos</small></div></div><p class="muted small">${K(a.models.join(", ")||"Sin ejecuciones todav\xEDa")}${a.retries?` \xB7 ${a.retries} reintentos`:""}</p></section>
  <section class="sec"><h4>Etapas</h4>${n.map(c=>tu(i,c)).join("")||'<p class="muted">Ulises a\xFAn no registra el plan.</p>'}</section>
  <section class="sec"><h4>Conversaci\xF3n entre agentes</h4>${s.slice(-24).map(c=>eu(c)).join("")||'<p class="muted">Sin mensajes.</p>'}</section>
  ${r.length?`<section class="sec"><h4>Archivos</h4>${r.map(Pc).join("")}</section>`:""}
  ${o.length?`<section class="sec"><h4>Control del CEO</h4><div class="row wrap">${o.map(([c,l])=>`<button class="btn ghost" data-action="mission-op" data-op="${c}" data-id="${K(e.id)}">${l}</button>`).join("")}</div><p class="muted small">Cada acci\xF3n llama a <code>pulse-core</code>; el estado mostrado es el que devuelve el servidor.</p></section>`:""}${hi(i.mode)}</div>`,size:"tall"}}function ip(i,e){let t=i.ent.snapshot,n=(t.missions||[]).find(a=>a.id===e);if(n&&As(n))return ay(i,n);if(!n)return{html:'<header class="sheet-head"><div class="who"><h3>Misi\xF3n</h3></div><button class="close" data-action="back">\u2039</button></header><div class="sheet-body"><p class="muted">Misi\xF3n no disponible.</p></div>',size:"mid"};let s=(t.steps||[]).filter(a=>a.mission_id===e).sort((a,o)=>a.seq-o.seq),r=[["pause","Pausar"],["resume","Reanudar"],["retry","Reintentar"],["revise","Pedir revisi\xF3n"]];return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Misi\xF3n</small><h3>${K(n.title)}</h3><span class="pill mission">${Xt(n.status)}</span></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Objetivo</h4><p>${K(n.objective||"")}</p></section>
  <section class="sec"><h4>Traspasos entre departamentos</h4><ol class="timeline">${s.map(a=>{let o=Xi(a.department);return`<li class="${K(String(a.status).toLowerCase())}"><button class="tl-dept" data-action="agent" data-id="${o?o.id:""}">${o?In(o,"xs"):""}<span>${K(a.department)}</span></button><p><b>Etapa ${K(a.seq)}:</b> ${K(a.directive||"")}</p>${a.result?`<p class="muted">${ga(a.result,220)}</p>`:""}${a.error?`<p class="err">${K(a.error)}</p>`:""}<small>${Xt(a.status)}${a.finished_at?" \xB7 "+Zt(a.finished_at):a.started_at?" \xB7 iniciada "+Zt(a.started_at):""}</small>${a.task_id?`<button class="chip" data-action="task" data-id="${K(a.task_id)}">Ver aportaci\xF3n</button>`:""}</li>`}).join("")||'<li><p class="muted">Sin etapas registradas.</p></li>'}</ol></section>
  <section class="sec"><h4>Control del CEO</h4><div class="row wrap">${r.map(([a,o])=>`<button class="btn ghost" data-action="mission-op" data-op="${a}" data-id="${K(n.id)}">${o}</button>`).join("")}</div><p class="muted small">Cada acci\xF3n llama a <code>pulse-mission-control</code>; el estado mostrado es el que devuelva el servidor.</p></section>${hi(i.mode)}</div>`,size:"tall"}}function iu(i){let e=i.ent.snapshot,t=(e.missions||[]).map(n=>{let s=(e.steps||[]).filter(a=>a.mission_id===n.id),r=s.filter(a=>a.status==="completed").length;return`<button class="row-item" data-action="mission" data-id="${K(n.id)}"><span class="ic mission">\u25C6</span><span><b>${K(n.title)}</b><small>${As(n)?"Multiagente \xB7 ":"Motor anterior \xB7 "}${Xt(n.status)} \xB7 ${r}/${s.length} etapas \xB7 ${Zt(n.updated_at||n.created_at)}</small></span><span class="dots">${s.sort((a,o)=>a.seq-o.seq).map(a=>`<i class="${K(String(a.status).toLowerCase())}"></i>`).join("")}</span></button>`}).join("");return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Gesti\xF3n de misiones</small><h3>Misiones</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`${oy()}<section class="sec"><h4>Registradas</h4>${t||'<p class="muted">Sin misiones registradas.</p>'}</section>${hi(i.mode)}`:Qi()}</div>`,size:"tall"}}function oy(){return'<form class="sec mission-form" data-action="create-mission"><h4>Convocar misi\xF3n</h4><input name="title" maxlength="120" placeholder="T\xEDtulo (5\u2013120 caracteres)" required><textarea name="objective" rows="3" maxlength="1500" placeholder="Objetivo: qu\xE9 debe lograr y qu\xE9 esperas recibir (20\u20131500 caracteres)" required></textarea><button class="btn">Crear misi\xF3n</button><p class="muted small">La registra <code>pulse-core</code>: Ulises planifica y reparte etapas, Calidad revisa cada entrega y los archivos quedan en Storage. Usa cuota gratuita de Gemini.</p></form>'}function Cc(i,e=null){let t=i.ent.snapshot,n=(t.approvals||[]).filter(r=>r.status==="pending"&&(!e||r.department===e)),s=(t.approvals||[]).filter(r=>r.status!=="pending"&&(!e||r.department===e)).slice(0,6);return{html:`<header class="sheet-head"><div class="ic-lg review">!</div><div class="who"><small>${e?K(e):"Oficina del CEO"}</small><h3>Revisiones</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec"><h4>Esperan tu decisi\xF3n</h4>${n.map(r=>`<div class="appr-wrap"><small class="muted">${K(r.department)} \xB7 ${Zt(r.created_at)}</small>${_a(r)}${r.task_id?`<button class="chip" data-action="task" data-id="${K(r.task_id)}">Ver trabajo</button>`:""}</div>`).join("")||'<p class="muted">No hay revisiones pendientes.</p>'}</section><section class="sec"><h4>Decididas</h4>${s.map(r=>`<p class="small">${K(r.title)} \xB7 <b>${Xt(r.status)}</b></p>`).join("")||'<p class="muted">Sin historial.</p>'}</section>${hi(i.mode)}`:Qi()}</div>`,size:"tall"}}function Ic(i,e=null){let t=i.ent.snapshot,n=(t.deliverables||[]).filter(s=>!e||(t.tasks||[]).some(r=>r.id===s.task_id&&r.department===e)||Ji[e]&&s.agent_id===Ji[e]);return{html:`<header class="sheet-head"><div class="ic-lg file">\u2913</div><div class="who"><small>${e?K(e):"Biblioteca"}</small><h3>Entregables</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec">${n.slice(0,40).map(Pc).join("")||'<p class="muted">Sin entregables registrados.</p>'}</section><p class="muted small">Las descargas usan una URL firmada de Storage v\xE1lida 2 minutos.</p>${hi(i.mode)}`:Qi()}</div>`,size:"tall"}}function su(i,e){let t=(n,s)=>`<div class="kpi"><b>${n}</b><small>${s}</small></div>`;return{html:`<header class="sheet-head"><div class="ic-lg">\u25A6</div><div class="who"><small>Oficina del CEO</small><h3>Estado de la empresa</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${e?`<div class="kpis">${t(e.running,"en ejecuci\xF3n")}${t(e.approvals,"revisiones")}${t(e.activeMissions,"misiones activas")}${t(e.completed,"encargos completados")}${t(e.failed,"fallidos")}${t(e.deliverables,"entregables")}</div><p class="muted small">Recuentos de la \xFAltima instant\xE1nea (${Zt(e.loadedAt)}), limitada a los registros m\xE1s recientes.</p><div class="row wrap"><button class="btn ghost" data-action="open-approvals">Revisiones</button><button class="btn ghost" data-action="open-missions">Misiones</button><button class="btn ghost" data-action="open-files">Entregables</button><button class="btn ghost" data-action="refresh">Actualizar</button></div>${hi(i.mode)}`:Qi()}</div>`,size:"mid"}}function sp(i){return{html:`<header class="sheet-head"><div class="ic-lg">\u2302</div><div class="who"><small>PULSE HQ</small><h3>Recorrer la oficina</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><div class="dir-grid">${Vt.map((e,t)=>{let n=Ss.find(a=>a.room===e.id),r=(n&&i.agentsById[n.id])?.intent.kind;return`<button class="dir-card ${t===i.roomIndex?"here":""}" data-action="go" data-index="${t}" style="--accent:${e.accent}"><span class="n">${String(t+1).padStart(2,"0")}</span>${n?In(n,"sm"):`<span class="space-ic">${e.short.slice(0,1)}</span>`}<b>${K(e.short)}</b>${r&&!["idle","unconnected"].includes(r)?`<i class="st ${r}"></i>`:""}</button>`}).join("")}</div></div>`,size:"mid"}}function rp(i,e="email",t=""){return i.mode==="demo"?{html:'<header class="sheet-head"><div class="ic-lg sim">\u25B6</div><div class="who"><small>Modo actual</small><h3>Simulaci\xF3n local</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>Est\xE1s viendo datos inventados <b>solo para probar la interfaz</b>. No hay conexi\xF3n con Supabase ni con Gemini y nada se guarda.</p><p class="muted">Prueba: toca un agente \u2192 Conversaci\xF3n \u2192 escribe una instrucci\xF3n. Incluye la palabra \xABpropuesta\xBB para generar una revisi\xF3n, o \xABfalla\xBB para ver un error.</p><div class="row"><button class="btn" data-action="exit-demo">Salir de la simulaci\xF3n</button></div></div>',size:"mid"}:i.connected?{html:`<header class="sheet-head"><div class="ic-lg ok">\u2713</div><div class="who"><small>Sesi\xF3n</small><h3>CEO conectado</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>${K(i.ent.user?.email||"")}</p><p class="muted">Los estados provienen de Supabase: \xABRecibiendo\xBB = instrucci\xF3n o etapa registrada sin llamadas al modelo todav\xEDa; \xABTrabajando\xBB = filas en <code>pulse_runs</code>; \xABResultado recibido\xBB = etapa aprobada por Calidad con su mensaje de resultado. Tambi\xE9n se leen <code>pulse_tasks</code>, <code>pulse_approvals</code> y <code>pulse_agent_messages</code>. Se consultan cada 10 s, o cada 2.5 s con trabajo en curso.</p>${i.ent.lastError?`<p class="err">\xDAltima consulta fall\xF3: ${K(i.ent.lastError)}</p>`:""}<div class="row"><button class="btn ghost" data-action="refresh">Actualizar ahora</button><button class="btn ghost" data-action="logout">Cerrar sesi\xF3n</button></div></div>`,size:"mid"}:{html:`<header class="sheet-head"><div class="ic-lg">\u25CE</div><div class="who"><small>PULSE HQ</small><h3>Acceso del CEO</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${e==="email"?`<form class="sec" data-action="login"><h4>Enlace de acceso</h4><input type="email" name="email" autocomplete="email" placeholder="Correo del CEO" required value="${K(t)}"><button class="btn">Enviar enlace</button><p class="muted small">Solo funciona con la cuenta autorizada (no crea usuarios).</p></form>`:`<section class="sec"><p>Revisa tu correo (${K(t)}).</p><p class="muted small">Si el enlace abre la app anterior en lugar de esta vista, <b>no lo abras</b>: mant\xE9n pulsado el enlace, c\xF3pialo y p\xE9galo aqu\xED.</p><form data-action="verify-link"><input name="link" placeholder="Pega el enlace del correo" autocomplete="off"><button class="btn">Entrar con el enlace</button></form><form data-action="verify-code"><input name="code" inputmode="numeric" maxlength="8" placeholder="o el c\xF3digo de 6 d\xEDgitos, si aparece"><button class="btn ghost">Entrar con c\xF3digo</button></form><button class="chip" data-action="access-reset">Usar otro correo</button></section>`}<section class="sec"><h4>Sin conexi\xF3n</h4><p class="muted small">Puedes recorrer la oficina sin sesi\xF3n: los agentes pasean de forma ambiental y no se muestra actividad real.</p><button class="btn ghost" data-action="demo">Probar en modo simulaci\xF3n</button></section></div>`,size:"mid"}}function ap(i,e,t){let n=ai(t),s=mc[e]||{title:e,hint:""},r=n?.dept;if(e==="desk")return{html:`<header class="sheet-head"><div class="ic-lg">\u25AD</div><div class="who"><small>${K(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?ep(i,r):Qi()}<div class="row"><button class="btn" data-action="agent-room" data-room="${K(t)}">Hablar con el agente</button></div></div>`,size:"tall"};if(e==="tray")return Cc(i,r);if(e==="shelf")return Ic(i,r);if(e==="board"){let a=i.ent?.snapshot||{},o=(a.steps||[]).filter(l=>l.department===r),c=[...new Set(o.map(l=>l.mission_id))];return{html:`<header class="sheet-head"><div class="ic-lg mission">\u25C6</div><div class="who"><small>${K(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec"><h4>Misiones en las que participa</h4>${c.map(l=>{let h=(a.missions||[]).find(d=>d.id===l),u=o.filter(d=>d.mission_id===l);return`<button class="row-item" data-action="mission" data-id="${K(l)}"><span class="ic mission">\u25C6</span><span><b>${K(h?.title||"Misi\xF3n")}</b><small>${u.map(d=>`etapa ${d.seq}: ${Xt(d.status)}`).join(" \xB7 ")}</small></span></button>`}).join("")||'<p class="muted">Este departamento no participa en misiones registradas.</p>'}</section>`:Qi()}</div>`,size:"mid"}}if(e==="ceo-tray")return Cc(i);if(e==="ceo-shelf")return Ic(i);if(e==="ceo-desk"||e==="ceo-tv")return su(i,i.summary);if(e==="board-table"||e==="mission-table"||e==="mission-board")return iu(i);if(e==="collab-board"||e==="collab-table"){let a=i.ent?.snapshot||{},o=(a.steps||[]).filter(c=>c.status==="completed"||["running","active","in_progress","processing"].includes(c.status)).sort((c,l)=>Date.parse(l.finished_at||l.started_at||0)-Date.parse(c.finished_at||c.started_at||0)).slice(0,12);return{html:`<header class="sheet-head"><div class="ic-lg">\u21C4</div><div class="who"><small>Colaboraci\xF3n</small><h3>Traspasos recientes</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec">${o.map(c=>{let l=Xi(c.department),h=(a.missions||[]).find(u=>u.id===c.mission_id);return`<button class="row-item" data-action="mission" data-id="${K(c.mission_id)}">${l?In(l,"xs"):""}<span><b>${K(c.department)} \xB7 etapa ${K(c.seq)}</b><small>${K(h?.title||"Misi\xF3n")} \xB7 ${Xt(c.status)}</small></span></button>`}).join("")||'<p class="muted">Sin traspasos registrados.</p>'}</section><p class="muted small">Los agentes vienen a esta sala solo cuando su etapa de misi\xF3n figura en curso en el servidor.</p>${hi(i.mode)}`:Qi()}</div>`,size:"mid"}}return e==="legacy-door"||e==="studio-cam"?{html:`<header class="sheet-head"><div class="ic-lg">\u2197</div><div class="who"><small>${K(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>CRM, automatizaciones, PULSE STUDIO, estudio creativo y exportaci\xF3n PNG/ZIP siguen en el centro anterior. Su integraci\xF3n dentro de la oficina est\xE1 pendiente.</p><a class="btn" href="https://bryanstl1.github.io/pulse-hq/" target="_blank" rel="noopener">Abrir centro anterior \u2197</a></div>`,size:"mid"}:e==="coffee"?{html:`<header class="sheet-head"><div class="ic-lg">\u2615\uFE0E</div><div class="who"><small>Descanso</small><h3>Movimiento ambiental</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>Cuando un agente no tiene actividad registrada puede pasear por su sala o venir por caf\xE9. Es decorativo y nunca se muestra como trabajo.</p><label class="toggle"><input type="checkbox" data-action="ambient" ${i.ambient?"checked":""}><span>Paseo ambiental ${i.ambient?"activado":"desactivado"}</span></label></div>`,size:"mid"}:{html:`<header class="sheet-head"><div class="who"><h3>${K(s.title)}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>${K(s.hint)}</p></div>`,size:"mid"}}var ly=new Set(["running","processing","in_progress","active"]),op=new Set(["failed","error"]),hy=30*6e4,uy=24*36e5,dy=30*6e4,Lc=i=>Date.parse(i?.updated_at||i?.finished_at||i?.started_at||i?.created_at||"")||0;function cp(i,e,{connected:t,now:n=Date.now()}={}){let s={},r=(i.steps||[]).filter(o=>o.agent_id),a=new Set(r.map(o=>o.task_id).filter(Boolean));for(let o of e){if(!t){s[o]={kind:"unconnected",label:"Actividad no consultada",source:"none",approvals:[],mission:null};continue}let c=(i.tasks||[]).filter(y=>y.department===o&&!a.has(y.id)).sort((y,_)=>Lc(_)-Lc(y)),l=(i.approvals||[]).filter(y=>y.department===o&&y.status==="pending"),h=(i.steps||[]).filter(y=>y.department===o&&!y.agent_id),u=c.find(y=>Ri({source:"server",record:y},n).kind==="running"),d=h.find(y=>ly.has(String(y.status).toLowerCase())&&!y.finished_at&&n-(Date.parse(y.started_at||"")||0)<=dy),f=d?(i.missions||[]).find(y=>y.id===d.mission_id):null,g=d?{id:d.mission_id,title:f?.title||"Misi\xF3n registrada",seq:d.seq,directive:d.directive}:null,x=c[0],m={source:"server",approvals:l,mission:g},p=jf(i,o,n);p&&(p.kind==="receiving"||p.kind==="running")?s[o]={...m,...p,source:"server"}:p&&p.kind!=="mission"&&!l.length?s[o]={...m,...p,source:"server"}:u?s[o]={...m,kind:"running",label:"En ejecuci\xF3n (servidor)",taskId:u.id}:p&&!l.length?s[o]={...m,...p,source:"server"}:l.length?s[o]={...m,kind:"review",label:l.length===1?"1 revisi\xF3n te espera":`${l.length} revisiones te esperan`,taskId:l[0].task_id}:g?s[o]={...m,kind:"mission",label:`Misi\xF3n \xB7 etapa ${g.seq}`}:x&&op.has(String(x.status).toLowerCase())&&n-Lc(x)<=uy?s[o]={...m,kind:"failed",label:"El \xFAltimo encargo fall\xF3",taskId:x.id,error:x.error||"Error sin detalle"}:x&&x.status==="completed"&&n-Lc(x)<=hy?s[o]={...m,kind:"completed",label:"Resultado listo",taskId:x.id}:s[o]={...m,kind:"idle",label:c.length?"Sin encargos en curso":"A\xFAn sin encargos",source:"server"}}return s}function lp(i,e){if(!e)return null;let t=i.tasks||[],n=s=>t.filter(r=>r.status===s).length;return{tasks:t.length,completed:n("completed"),failed:t.filter(s=>op.has(s.status)).length,running:t.filter(s=>Ri({source:"server",record:s}).kind==="running").length,runs:(i.runs||[]).length,approvals:(i.approvals||[]).filter(s=>s.status==="pending").length,missions:(i.missions||[]).length,activeMissions:(i.missions||[]).filter(s=>!["completed","reviewed","cancelled","awaiting_ceo"].includes(s.status)).length,deliverables:(i.deliverables||[]).length,loadedAt:i.loadedAt}}var fy="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.min.js";function up(){return globalThis.supabase?.createClient?Promise.resolve(globalThis.supabase.createClient(xa,hp)):new Promise((i,e)=>{let t=document.createElement("script");t.src=fy,t.async=!0,t.crossOrigin="anonymous",t.onload=()=>globalThis.supabase?.createClient?i(globalThis.supabase.createClient(xa,hp)):e(new Error("Cliente de Supabase no disponible.")),t.onerror=()=>e(new Error("No se pudo cargar el cliente de Supabase (sin conexi\xF3n con jsDelivr).")),document.head.appendChild(t)})}var xa="https://erluuujhgpreuuaskjwo.supabase.co",hp="sb_publishable_R3-FWhFftf_aidZUq6U9jA_WOYQJS9q",au=["Direcci\xF3n estrat\xE9gica","Marketing y crecimiento","Producci\xF3n de contenido","Ventas y patrocinios","Relaciones p\xFAblicas y alianzas","Eventos y experiencias","Comunidad","Inteligencia de mercado","Finanzas y administraci\xF3n","Tecnolog\xEDa y automatizaci\xF3n"],ru=()=>({roles:[],tasks:[],approvals:[],missions:[],steps:[],deliverables:[],messages:[],runs:[],loadedAt:null}),Rs=i=>{throw new Error(i?.message||String(i||"Error del servidor"))};function ou(i,{mode:e="live"}={}){if(!i)throw new Error("Cliente de datos no disponible.");let t=null,n=ru(),s=null,r="",a=()=>{},o=()=>a({user:t,snapshot:n,loading:!!s,lastError:r}),c=T=>(T.error&&Rs(T.error),T.data||[]);async function l(){if(!t)return n;if(s)return s;let T=t.id;s=(async()=>{let[R,M,b,I,U,k,V,F]=await Promise.all([i.from("pulse_agent_roles").select("department,professional_title,purpose,output_contract,acceptance_criteria,handoff_to,active").eq("active",!0),i.from("pulse_tasks").select("id,department,instruction,status,result,sources,error,created_at,updated_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(100),i.from("pulse_approvals").select("id,task_id,department,title,description,status,created_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(80),i.from("pulse_missions").select("id,title,objective,status,engine,claimed_at,spent_tokens,budget_tokens,last_error,created_at,updated_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(20),i.from("pulse_mission_steps").select("id,mission_id,seq,department,agent_id,directive,status,result,task_id,error,attempt,claimed_at,review,output_format,depends_on,started_at,finished_at").eq("user_id",T).order("seq",{ascending:!0}).limit(220),i.from("pulse_deliverables").select("id,task_id,title,filename,storage_path,mime_type,mission_id,agent_id,version,review_status,size_bytes,source_type,created_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(150),i.from("pulse_agent_messages").select("id,mission_id,step_id,from_agent,to_agent,kind,content,artifact,created_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(200),i.from("pulse_runs").select("id,mission_id,step_id,agent_id,phase,provider,model,input_tokens,output_tokens,latency_ms,status,created_at").eq("user_id",T).order("created_at",{ascending:!1}).limit(250)]),H={roles:c(R),tasks:c(M),approvals:c(b),missions:c(I),steps:c(U),deliverables:c(k),messages:c(V),runs:c(F),loadedAt:new Date().toISOString()};return t?.id===T&&(n=H,r=""),n})(),o();try{return await s}catch(R){throw r=String(R.message||R),R}finally{s=null,o()}}async function h(T){a=T||(()=>{});let{data:R,error:M}=await i.auth.getUser();M&&M.name!=="AuthSessionMissingError"?t=null:t=R?.user||null,o(),i.auth.onAuthStateChange((b,I)=>{let U=t?.id;t=I?.user||null,U!==t?.id&&(n=ru()),o(),t&&queueMicrotask(()=>l().catch(()=>o()))}),t&&await l()}async function u(T){let{error:R}=await i.auth.signInWithOtp({email:T,options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:!1}});R&&Rs(R)}async function d(T,R){let M=String(R||"").replace(/\D/g,"");if(M.length<6)throw new Error("Escribe el c\xF3digo de 6 d\xEDgitos.");let{error:b}=await i.auth.verifyOtp({email:T,token:M,type:"email"});b&&Rs(b)}async function f(T){let R;try{R=new URL(String(T||"").trim())}catch{throw new Error("Pega el enlace completo del correo.")}if(R.origin!==xa)throw new Error("El enlace no pertenece al proyecto PULSE HQ.");let M=R.searchParams.get("token")||R.searchParams.get("token_hash"),b=R.searchParams.get("type")||"magiclink";if(!M)throw new Error("El enlace no contiene un token de acceso.");let{error:I}=await i.auth.verifyOtp({token_hash:M,type:b==="signup"?"signup":"magiclink"});I&&Rs(I)}async function g(){let{error:T}=await i.auth.signOut();T&&Rs(T),t=null,n=ru(),o()}async function x(T,R){if(!t)throw new Error("Inicia sesi\xF3n como CEO para ejecutar esta acci\xF3n.");let{data:M,error:b}=await i.functions.invoke(T,{body:R});if(b){let I;try{I=(await b.context?.json())?.error}catch{}throw new Error(I||b.message)}if(!M?.ok)throw new Error(M?.error||"La funci\xF3n no confirm\xF3 la operaci\xF3n.");return await l(),M}async function m(T,R){if(!au.includes(T))throw new Error("Departamento no disponible.");let M=R.trim();if(M.length<5||M.length>2e3)throw new Error("Escribe entre 5 y 2000 caracteres.");return x("pulse-run",{department:T,instruction:M})}async function p(T,R,M="missions"){let b=T.trim(),I=R.trim();if(b.length<5||b.length>120||I.length<20||I.length>1500)throw new Error("T\xEDtulo de 5 a 120 caracteres y objetivo de 20 a 1500.");return x("pulse-core",{action:"mission.create",title:b,objective:I,source:M})}async function y(T){let R=String(T||"").replace(/\s+/g," ").trim();if(R.length<20)throw new Error("Describe el encargo para Ulises con al menos 20 caracteres.");if(R.length>1500)throw new Error("M\xE1ximo 1500 caracteres.");let M=R.replace(/^(ulises|hola ulises)[,:]?\s*/i,""),b=M.length<=80?M:M.slice(0,80).replace(/\s+\S*$/,"")+"\u2026";return b=b.charAt(0).toUpperCase()+b.slice(1),b.length<5&&(b="Encargo del CEO"),p(b,R,"office")}async function _(T,R){let M=n.missions.find(b=>b.id===R);if(As(M)){if(!["pause","resume","cancel"].includes(T))throw new Error("Acci\xF3n no disponible para misiones del motor multiagente.");return x("pulse-core",{action:"mission."+T,missionId:R})}if(!["pause","resume","retry","revise"].includes(T))throw new Error("Acci\xF3n de misi\xF3n inv\xE1lida.");return x("pulse-mission-control",{action:T,missionId:R})}async function v(T,R){if(!t||!["approved","rejected"].includes(R))throw new Error("Decisi\xF3n inv\xE1lida.");let{data:M,error:b}=await i.from("pulse_approvals").update({status:R}).eq("id",T).eq("user_id",t.id).eq("status","pending").select("id");if(b&&Rs(b),!M?.length)throw new Error("La revisi\xF3n ya cambi\xF3 o no est\xE1 disponible.");return await l(),M[0]}async function E(T){if(!t)throw new Error("Inicia sesi\xF3n para descargar.");let R=n.deliverables.find(U=>U.id===T);if(!R)throw new Error("Archivo no disponible en la sesi\xF3n actual.");if(e==="demo"&&i.demoFileUrl)return i.demoFileUrl(R);let{data:M,error:b}=await i.storage.from("pulse-deliverables").createSignedUrl(R.storage_path,120);if(b&&Rs(b),!M?.signedUrl)throw new Error("No se pudo autorizar la descarga.");let I=new URL(M.signedUrl,xa);if(I.origin!==xa)throw new Error("Destino de archivo inesperado.");return I.href}function A(T){let R=n.roles.find(V=>V.department===T),M=n.tasks.filter(V=>V.department===T),b=n.approvals.filter(V=>V.department===T&&V.status==="pending"),I=n.steps.filter(V=>V.department===T),U=M.find(V=>V.status==="running"&&Ri({source:"server",record:V}).kind==="running"),k=U?Ri({source:"server",record:U}):b.length?Ri({source:"server",record:{status:"pending"}}):{kind:"idle",label:"Disponible",actionable:!1};return{role:R,tasks:M,approvals:b,steps:I,activity:k}}return{mode:e,init:h,refresh:l,requestLogin:u,verifyCode:d,verifyLink:f,signOut:g,runTask:m,createMission:p,askUlises:y,missionAction:_,decideApproval:v,fileUrl:E,departmentData:A,get user(){return t},get snapshot(){return n},get loading(){return!!s},get lastError(){return r}}}var Ct=()=>globalThis.crypto?.randomUUID?.()||`id-${Math.random().toString(36).slice(2)}-${Date.now()}`,Ye=(i=0)=>new Date(Date.now()+i).toISOString(),Dc={"Direcci\xF3n estrat\xE9gica":"Prioric\xE9 tres l\xEDneas de trabajo y propuse un calendario de revisi\xF3n semanal.","Marketing y crecimiento":"Propuesta de campa\xF1a en tres fases con mensajes por audiencia y m\xE9tricas de seguimiento.","Producci\xF3n de contenido":"Guion de 45 segundos con gancho, desarrollo y llamada a la acci\xF3n, m\xE1s lista de tomas.","Ventas y patrocinios":"Borrador de propuesta de patrocinio con niveles, beneficios y siguiente paso sugerido.","Relaciones p\xFAblicas y alianzas":"Lista de criterios para alianzas y un mensaje de primer contacto para revisi\xF3n.","Eventos y experiencias":"Esquema de experiencia con recorrido del asistente, riesgos y checklist log\xEDstico.",Comunidad:"Plan de conversaci\xF3n semanal con temas, formatos y respuesta a preguntas frecuentes.","Inteligencia de mercado":"Resumen de tendencias con tres oportunidades y la evidencia que habr\xEDa que verificar.","Finanzas y administraci\xF3n":"Presupuesto por partidas con supuestos expl\xEDcitos y escenario conservador.","Tecnolog\xEDa y automatizaci\xF3n":"Dise\xF1o de una automatizaci\xF3n en cuatro pasos con puntos de control manual."};function py(i){let e=(l,h,u,d,f={})=>({id:Ct(),user_id:i.id,department:l,instruction:d,status:h,result:h==="completed"?`[Simulaci\xF3n] ${Dc[l]}`:null,sources:null,error:h==="failed"?"[Simulaci\xF3n] L\xEDmite del proveedor de IA (429). Reintenta m\xE1s tarde.":null,created_at:Ye(-u*6e4-4e4),updated_at:Ye(-u*6e4),...f}),t=[e("Marketing y crecimiento","running",.3,"Preparar la campa\xF1a de lanzamiento de noviembre"),e("Producci\xF3n de contenido","completed",6,"Escribir el guion del reel de presentaci\xF3n"),e("Ventas y patrocinios","completed",50,"Preparar propuesta para patrocinador de bebidas"),e("Tecnolog\xEDa y automatizaci\xF3n","failed",20,"Automatizar el resumen semanal de m\xE9tricas"),e("Direcci\xF3n estrat\xE9gica","completed",180,"Definir prioridades del trimestre")],n=[{id:Ct(),user_id:i.id,task_id:t[2].id,department:"Ventas y patrocinios",title:"[Simulaci\xF3n] Propuesta de patrocinio lista para enviar",description:"Revisa niveles y precios antes de compartirla.",status:"pending",created_at:Ye(-49*6e4)}],s=Ct(),r=[{id:s,user_id:i.id,title:"[Simulaci\xF3n] Lanzamiento de temporada",objective:"Coordinar investigaci\xF3n, estrategia y propuesta comercial para el lanzamiento.",status:"running",created_at:Ye(-8*6e4),updated_at:Ye(-6e4)}],a=[{id:Ct(),user_id:i.id,mission_id:s,seq:1,department:"Inteligencia de mercado",directive:"Reunir tendencias y competencia relevantes",status:"running",result:null,task_id:null,error:null,started_at:Ye(-9e4),finished_at:null},{id:Ct(),user_id:i.id,mission_id:s,seq:2,department:"Marketing y crecimiento",directive:"Convertir hallazgos en estrategia de campa\xF1a",status:"pending",result:null,task_id:null,error:null,started_at:null,finished_at:null},{id:Ct(),user_id:i.id,mission_id:s,seq:3,department:"Ventas y patrocinios",directive:"Traducir la estrategia en propuesta para patrocinadores",status:"pending",result:null,task_id:null,error:null,started_at:null,finished_at:null}],o=[{id:Ct(),user_id:i.id,task_id:t[1].id,title:"[Simulaci\xF3n] Guion del reel",filename:"guion-reel-simulacion.md",storage_path:"demo/guion.md",mime_type:"text/markdown",created_at:Ye(-5*6e4)}],c=Object.keys(Dc).map(l=>({department:l,professional_title:`[Simulaci\xF3n] Responsable de ${l.toLowerCase()}`,purpose:"Contrato profesional simulado para pruebas de interfaz.",output_contract:"Entregable en texto estructurado.",acceptance_criteria:"Claro, verificable y listo para revisi\xF3n del CEO.",handoff_to:null,active:!0}));return{pulse_tasks:t,pulse_approvals:n,pulse_missions:r,pulse_mission_steps:a,pulse_deliverables:o,pulse_agent_roles:c,pulse_agent_messages:[],pulse_runs:[]}}function dp({speed:i=1}={}){let e={id:"demo-ceo",email:"ceo@simulacion.local"},t=py(e),n=new Set,s=new Set,r=(p,y)=>{let _=setTimeout(()=>{s.delete(_),y()},p/i);return s.add(_),_};r(16e3,()=>a(t.pulse_tasks[0])),o(t.pulse_missions[0].id,14e3);function a(p,{approval:y=!1,file:_=!0}={}){p.status==="running"&&(p.status="completed",p.updated_at=Ye(),p.result=`[Simulaci\xF3n] ${Dc[p.department]}

Encargo: \xAB${p.instruction}\xBB.`,_&&t.pulse_deliverables.unshift({id:Ct(),user_id:e.id,task_id:p.id,title:`[Simulaci\xF3n] ${p.instruction.slice(0,60)}`,filename:"entregable-simulacion.md",storage_path:`demo/${p.id}.md`,mime_type:"text/markdown",created_at:Ye()}),y&&t.pulse_approvals.unshift({id:Ct(),user_id:e.id,task_id:p.id,department:p.department,title:`[Simulaci\xF3n] Revisar: ${p.instruction.slice(0,50)}`,description:"Propuesta lista para tu decisi\xF3n.",status:"pending",created_at:Ye()}))}function o(p,y){let _=()=>{let v=t.pulse_missions.find(R=>R.id===p);if(!v||v.status==="paused")return;let E=t.pulse_mission_steps.filter(R=>R.mission_id===p).sort((R,M)=>R.seq-M.seq),A=E.find(R=>R.status==="running");if(A){let R={id:Ct(),user_id:e.id,department:A.department,instruction:A.directive,status:"completed",result:`[Simulaci\xF3n] Aportaci\xF3n de ${A.department}: ${Dc[A.department]}`,error:null,sources:null,created_at:A.started_at,updated_at:Ye()};t.pulse_tasks.unshift(R),Object.assign(A,{status:"completed",finished_at:Ye(),task_id:R.id,result:R.result})}let T=E.find(R=>R.status==="pending");T?(Object.assign(T,{status:"running",started_at:Ye()}),v.status="running",v.updated_at=Ye(),r(32e3,_)):(v.status="awaiting_ceo",v.updated_at=Ye(),t.pulse_approvals.unshift({id:Ct(),user_id:e.id,task_id:E.at(-1)?.task_id||null,department:"Direcci\xF3n estrat\xE9gica",title:`[Simulaci\xF3n] Propuesta consolidada: ${v.title.replace("[Simulaci\xF3n] ","")}`,description:"Integra las aportaciones de cada etapa.",status:"pending",created_at:Ye()}))};r(y,_)}function c(p){let y=[],_=null,v=null,E=null,A={select(){return A},eq(T,R){return y.push([T,R]),A},in(T,R){return y.push([T,{in:R}]),A},order(T,{ascending:R=!0}={}){return _=[T,R],A},limit(T){return v=T,A},update(T){return E=T,A},then(T,R){try{let M=(t[p]||[]).filter(b=>y.every(([I,U])=>U&&U.in?U.in.includes(b[I]):b[I]===U));if(E)return M.forEach(b=>Object.assign(b,E,{updated_at:Ye()})),Promise.resolve({data:M.map(b=>({id:b.id})),error:null}).then(T,R);if(_){let[b,I]=_;M=[...M].sort((U,k)=>(U[b]>k[b]?1:U[b]<k[b]?-1:0)*(I?1:-1))}return v&&(M=M.slice(0,v)),Promise.resolve({data:M.map(b=>({...b})),error:null}).then(T,R)}catch(M){return Promise.resolve({data:null,error:{message:String(M)}}).then(T,R)}}};return A}async function l(p,{body:y}){if(p==="pulse-run"){let _={id:Ct(),user_id:e.id,department:y.department,instruction:y.instruction,status:"queued",result:null,sources:null,error:null,created_at:Ye(),updated_at:Ye()};t.pulse_tasks.unshift(_),await new Promise(E=>r(1400,E)),_.status="running",_.updated_at=Ye();let v=/\bfall(a|o)\b|error de prueba/i.test(y.instruction);return await new Promise(E=>r(9e3,E)),v?(_.status="failed",_.updated_at=Ye(),_.error="[Simulaci\xF3n] El motor devolvi\xF3 un error de prueba.",{data:{ok:!1,error:_.error},error:null}):(a(_,{approval:/propuesta|aprob|revis/i.test(y.instruction)||y.department==="Ventas y patrocinios"}),{data:{ok:!0,taskId:_.id},error:null})}if(p==="pulse-core")return x(y);if(p==="pulse-mission-control"){if(y.action==="create"){let v=Ct();return t.pulse_missions.unshift({id:v,user_id:e.id,title:`[Simulaci\xF3n] ${y.title}`,objective:y.objective,status:"running",created_at:Ye(),updated_at:Ye()}),gy(y.objective).forEach((A,T)=>t.pulse_mission_steps.push({id:Ct(),user_id:e.id,mission_id:v,seq:T+1,department:A,directive:my[A]||"Aportar al objetivo de la misi\xF3n",status:T===0?"running":"pending",result:null,task_id:null,error:null,started_at:T===0?Ye():null,finished_at:null})),o(v,3e4),{data:{ok:!0,missionId:v},error:null}}let _=t.pulse_missions.find(v=>v.id===y.missionId);return _?(y.action==="pause"&&(_.status="paused"),(y.action==="resume"||y.action==="retry")&&(_.status="running",o(_.id,6e3)),y.action==="revise"&&(_.status="revising"),_.updated_at=Ye(),{data:{ok:!0},error:null}):{data:{ok:!1,error:"Misi\xF3n no encontrada"},error:null}}return{data:null,error:{message:`Funci\xF3n ${p} no simulada.`}}}let h=[{agent:"iris",dept:"Inteligencia de mercado",fmt:"markdown",text:"Investigar el contexto y reunir evidencia"},{agent:"rocco",dept:"Ventas y patrocinios",fmt:"markdown",text:"Convertir la evidencia en propuesta comercial"},{agent:"tomas",dept:"Finanzas y administraci\xF3n",fmt:"xlsx",text:"Estimar el presupuesto en hoja de c\xE1lculo"}],u={iris:"Iris",rocco:"Rocco",tomas:"Tom\xE1s",ulises:"Ulises",calidad:"Calidad",ceo:"CEO"},d=(p,y,_,v,E,A,T=null)=>t.pulse_agent_messages.unshift({id:Ct(),user_id:e.id,mission_id:p.id,step_id:y?.id||null,from_agent:_,to_agent:v,kind:E,content:`[Simulaci\xF3n] ${A}`,artifact:{...T||{},simulated:!0},created_at:Ye()}),f=(p,y,_,v)=>t.pulse_runs.unshift({id:Ct(),user_id:e.id,mission_id:p.id,step_id:y?.id||null,agent_id:_,phase:v,provider:"simulaci\xF3n",model:"sin-ia",input_tokens:0,output_tokens:0,latency_ms:0,status:"ok",created_at:Ye()});function g(p){let y=t.pulse_missions.find(E=>E.id===p);if(!y||!["running"].includes(y.status))return;let _=t.pulse_mission_steps.filter(E=>E.mission_id===y.id).sort((E,A)=>E.seq-A.seq),v=_.find(E=>E.status==="pending"&&(E.depends_on||[]).every(A=>_.find(T=>T.seq===A)?.status==="completed"));if(!v){_.length&&_.every(E=>E.status==="completed")&&(y.status="awaiting_ceo",y.updated_at=Ye(),t.pulse_approvals.unshift({id:Ct(),user_id:e.id,task_id:_.at(-1).task_id,department:"Direcci\xF3n estrat\xE9gica",title:`[Simulaci\xF3n] Misi\xF3n \xAB${y.title.replace("[Simulaci\xF3n] ","")}\xBB: entregables listos`,description:"Simulaci\xF3n: no es un entregable real.",status:"pending",created_at:Ye()}),d(y,null,"ulises","ceo","notice","Misi\xF3n terminada (simulada)."));return}Object.assign(v,{status:"running",claimed_at:Ye(),started_at:v.started_at||Ye()}),r(2500,()=>{y.status==="running"&&f(y,v,v.agent_id,v.attempt?"correct":"analyze")}),r(5e3,()=>{y.status==="running"&&f(y,v,v.agent_id,"act")}),r(7500,()=>{y.status==="running"&&f(y,v,"calidad","evaluate")}),r(9500,()=>{if(y.status!=="running")return;let E=v.output_format==="xlsx"?"xlsx":v.output_format==="pdf"?"pdf":"md",A={id:Ct(),user_id:e.id,department:v.department,instruction:v.directive,status:"completed",result:`[Simulaci\xF3n] Aportaci\xF3n de ${u[v.agent_id]}.`,sources:null,error:null,created_at:v.started_at,updated_at:Ye()};t.pulse_tasks.unshift(A);let T={id:Ct(),user_id:e.id,task_id:A.id,mission_id:y.id,agent_id:v.agent_id,title:`[Simulaci\xF3n] Etapa ${v.seq} (${u[v.agent_id]})`,filename:`etapa-${v.seq}-simulacion.${E}`,storage_path:`demo/${A.id}.${E}`,mime_type:"text/markdown",version:v.attempt+1,review_status:"approved",size_bytes:1024,source_type:"simulation",created_at:Ye()};t.pulse_deliverables.unshift(T),Object.assign(v,{status:"completed",task_id:A.id,result:A.result,finished_at:Ye(),claimed_at:null,review:{verdict:"approve",score:8}}),d(y,v,"calidad",v.agent_id,"review",`Etapa ${v.seq} aprobada (8/10).`,{deliverable_id:T.id}),d(y,v,v.agent_id,"ulises","result",`Etapa ${v.seq} terminada.`,{deliverable_id:T.id}),r(1500,()=>g(y.id))})}function x(p){if(p.action==="mission.create"){let _={id:Ct(),user_id:e.id,title:`[Simulaci\xF3n] ${p.title}`,objective:p.objective,status:"planning",engine:"core",claimed_at:null,spent_tokens:0,budget_tokens:0,last_error:null,created_at:Ye(),updated_at:Ye()};return t.pulse_missions.unshift(_),d(_,null,"ceo","ulises","request",`${p.title}: ${p.objective}`,{source:p.source||"api"}),r(2500,()=>{_.claimed_at=Ye()}),r(5e3,()=>{if(_.status!=="planning")return;f(_,null,"ulises","plan");let v=[...h,{agent:"ulises",dept:"Direcci\xF3n estrat\xE9gica",fmt:"pdf",text:"Consolidar el documento final"}];v.forEach((E,A)=>{let T={id:Ct(),user_id:e.id,mission_id:_.id,seq:A+1,department:E.dept,agent_id:E.agent,directive:`[Simulaci\xF3n] ${E.text}`,status:"pending",result:null,task_id:null,error:null,attempt:0,claimed_at:null,review:null,output_format:E.fmt,depends_on:A?E.agent==="ulises"?[1,2,3]:[A]:[],started_at:null,finished_at:null};t.pulse_mission_steps.push(T),d(_,T,"ulises",E.agent,"request",`Etapa ${A+1}: ${E.text}`)}),d(_,null,"ulises","ceo","decision",`Plan registrado con ${v.length} etapas (simulado).`),_.status="running",_.updated_at=Ye(),r(1500,()=>g(_.id))}),{data:{ok:!0,missionId:_.id},error:null}}let y=t.pulse_missions.find(_=>_.id===p.missionId);return y?(p.action==="mission.pause"&&(y.status="paused"),p.action==="mission.cancel"&&(y.status="cancelled"),p.action==="mission.resume"&&(y.status="running",t.pulse_mission_steps.filter(_=>_.mission_id===y.id&&_.status==="running").forEach(_=>Object.assign(_,{status:"pending",claimed_at:null})),r(1e3,()=>g(y.id))),y.updated_at=Ye(),{data:{ok:!0},error:null}):{data:{ok:!1,error:"Misi\xF3n no encontrada"},error:null}}return{simulated:!0,auth:{async getUser(){return{data:{user:e},error:null}},onAuthStateChange(p){return n.add(p),{data:{subscription:{unsubscribe(){n.delete(p)}}}}},async signInWithOtp(){return{error:null}},async verifyOtp(){return{error:null}},async signOut(){return{error:null}}},from:c,functions:{invoke:l},storage:{from:()=>({async createSignedUrl(){return{data:null,error:{message:"Simulaci\xF3n: usa demoFileUrl"}}}})},demoFileUrl(p){let y=t.pulse_tasks.find(v=>v.id===p.task_id),_=`# ${p.title}

Archivo generado por la SIMULACI\xD3N de PULSE HQ. No es un entregable real.

${y?.result||""}
`;return URL.createObjectURL(new Blob([_],{type:"text/markdown;charset=utf-8"}))},dispose(){s.forEach(clearTimeout),s.clear()}}}var my={"Inteligencia de mercado":"Reunir evidencia y tendencias relevantes","Marketing y crecimiento":"Dise\xF1ar la estrategia y los mensajes","Producci\xF3n de contenido":"Proponer piezas y guiones","Ventas y patrocinios":"Preparar la propuesta comercial","Finanzas y administraci\xF3n":"Estimar presupuesto y riesgos","Eventos y experiencias":"Dise\xF1ar la experiencia y su log\xEDstica",Comunidad:"Plan de participaci\xF3n de la audiencia","Relaciones p\xFAblicas y alianzas":"Identificar aliados y mensajes","Tecnolog\xEDa y automatizaci\xF3n":"Definir la automatizaci\xF3n necesaria","Direcci\xF3n estrat\xE9gica":"Consolidar y priorizar la propuesta"};function gy(i){let e=i.toLowerCase(),t=["Inteligencia de mercado"];return/evento|festival|experiencia/.test(e)&&t.push("Eventos y experiencias"),/contenido|video|reel|guion/.test(e)&&t.push("Producci\xF3n de contenido"),/patrocin|venta|cliente/.test(e)&&t.push("Ventas y patrocinios"),/presupuesto|costo|finanz/.test(e)&&t.push("Finanzas y administraci\xF3n"),t.length<3&&t.push("Marketing y crecimiento"),t.push("Direcci\xF3n estrat\xE9gica"),[...new Set(t)].slice(0,5)}var wt=i=>document.querySelector(i),uu=new URLSearchParams(location.search),z={ent:null,mode:"none",connected:!1,ambient:!0,sending:{},summary:null,agents:[],agentsById:{},roomIndex:1,selected:null,sheet:null,history:[],accessEmail:"",accessStep:"email",snapshotKey:""};window.__pulse=z;var du=wt("#loader .bar i"),rt=new gc(wt("#stage"),{roomCount:Vt.length,onTap:My,onRoomChange:i=>{z.roomIndex=i,va(),z.sheet&&z.sheet.type!=="agent"&&!z.sheet.pinned&&dn(),history.replaceState(null,"",`#${Vt[i].id}`)}});await Df("./assets/furniture",i=>{du.style.width=`${Math.round(i*80)}%`},{bundle:globalThis.PULSE_FURNITURE_BUNDLE||null});var Ln=zf(rt.scene);z.stage=rt;z.office=Ln;var _y={scene:rt.scene,nav:Ln.nav,stationsByRoom:Ln.stationsByRoom,pitch:ft};z.agents=Gf(_y);z.agents.forEach(i=>{z.agentsById[i.def.id]=i});var vp=new Tc(wt("#overlay"),rt,{onAgent:i=>Fc(i),onHotspot:(i,e)=>Ep(i,e)}),fp=location.hash.slice(1),yp=lh(fp)>=0?lh(fp):1;rt.goToRoom(yp,{instant:!0});z.roomIndex=yp;z.agents.forEach(i=>i.plan(!0));yy();va();du.style.width="90%";async function bp(){try{let i=await up();z.ent=ou(i,{mode:"live"}),z.mode="live",await z.ent.init(Sp)}catch(i){z.ent=null,z.mode="none",fn(`Sin conexi\xF3n con Supabase: ${i.message}`,"warn")}Mn()}async function Mp(){z.ent?.client?.dispose?.();let i=dp({speed:Number(uu.get("demoSpeed"))||1});z.ent=ou(i,{mode:"demo"}),z.ent.client=i,z.mode="demo",await z.ent.init(Sp),Mn(),va()}function Sp(){Mn()}var pp=null;function fu(){if(clearTimeout(pp),!z.connected)return;let i=Object.values(z.sending).some(Boolean)||z.agents.some(e=>["receiving","running","mission"].includes(e.intent.kind));pp=setTimeout(async()=>{try{await z.ent.refresh()}catch{}Mn(),fu()},i?2500:1e4)}function Mn(){z.connected=!!z.ent?.user;let i=z.ent?.snapshot||{tasks:[],approvals:[],steps:[],missions:[],deliverables:[],roles:[]},e=cp(i,au,{connected:z.connected});z.summary=lp(i,z.connected);for(let s of z.agents){let r=e[s.dept];s.setIntent(r),vy(s.def.room,r.kind),$h(Ln.trays[s.def.room],r.approvals?.length||0)}$h(Ln.trays.ceo,z.summary?.approvals||0);let t={};for(let s of z.agents){let r=e[s.dept].approvals?.length;r&&(t[`${s.def.room}:tray`]=r)}z.summary?.approvals&&(t["ceo:ceo-tray"]=z.summary.approvals),z.summary?.activeMissions&&(t["missions:mission-board"]=z.summary.activeMissions),vp.setCounts(t);let n=`${z.mode}|${z.connected}|${i.loadedAt}`;n!==z.snapshotKey&&(z.snapshotKey=n,Xf(Ln.surfaces,z),z.sheet&&Pn(!0)),va(),fu()}var xy={receiving:"#8f7cf0",running:"#3cd17a",review:"#f2b33d",failed:"#e5484d",mission:"#4a90e2",completed:"#7ed6a5"};function vy(i,e){let t=Ln.lamps[i];if(!t)return;let n=xy[e];t.userData.kind=e,n?(t.emissive.set(n),t.color.set(n),t.emissiveIntensity=1.2):(t.emissive.set("#000"),t.color.set("#b9b4aa"),t.emissiveIntensity=0)}function yy(){wt("#dots").innerHTML=Vt.map((i,e)=>`<button data-go="${e}" aria-label="${i.name}" style="--accent:${i.accent}"></button>`).join("")}function va(){let i=Vt[z.roomIndex];wt("#room-n").textContent=`${String(z.roomIndex+1).padStart(2,"0")}/${Vt.length}`,wt("#room-name").textContent=i.name,wt("#room-sub").textContent=i.sub,wt("#room-card").style.setProperty("--accent",i.accent),document.querySelectorAll("#dots button").forEach((a,o)=>a.classList.toggle("on",o===z.roomIndex));let e=Jf(z),t=wt("#session");t.className=`session ${e.cls}`,t.querySelector("span").textContent=e.text,wt("#sim-banner").hidden=z.mode!=="demo";let n=wt("#legend");n.hidden=z.mode==="demo",z.connected?n.textContent=z.ambient?"Movimiento ambiental activo cuando no hay encargos":"Solo actividad registrada":n.textContent=z.ambient?"Sin sesi\xF3n \xB7 los agentes solo pasean (ambiente)":"Sin sesi\xF3n \xB7 actividad no consultada";let s=z.summary?.approvals||0,r=wt('#dock [data-dock="approvals"] .badge');r.hidden=!s,r.textContent=s,wt("#prev").disabled=z.roomIndex===0,wt("#next").disabled=z.roomIndex===Vt.length-1}function by(i){return Math.max(0,Math.min(Vt.length-1,Math.round(i.pos.x/ft)))}function Fc(i,e="chat"){let t=z.agentsById[i];if(!t)return;z.selected&&z.selected!==t&&z.selected.select(!1),z.selected=t,t.select(!0);let n=by(t);n!==z.roomIndex&&rt.goToRoom(n),rn({type:"agent",id:i,tab:e})}var Xn={obj:null,t:0};function Ep(i,e){let t=Ln.hotspots.find(n=>n.key===i&&n.room===e);if(t&&(Xn.obj=t.obj,Xn.t=0,Xn.base=t.obj.scale.clone()),i==="coffee"||i==="legacy-door"||i==="studio-cam"){rn({type:"hot",key:i,room:e,focus:t});return}rn({type:"hot",key:i,room:e,focus:t})}function My({x:i,y:e,ndc:t}){let n=null,s=56;for(let a of z.agents)for(let o of[a.bodyWorld,a.headWorld]){let c=rt.project(o),l=Math.hypot(c.x-i,c.y-e);l<s&&(s=l,n=a)}if(n){Fc(n.def.id);return}let r=rt.raycast(t,Ln.hotspots.map(a=>a.obj));if(r.length){let a=r[0].object;for(;a&&!a.userData.item?.hot;)a=a.parent;if(a){Ep(a.userData.item.hot,a.userData.item.room);return}}z.sheet&&dn()}var Mt=wt("#sheet");function rn(i,{push:e=!1}={}){e&&z.sheet?z.history.push(z.sheet):e||(z.history=[]),z.sheet=i,Pn()}function dn(){z.sheet=null,z.history=[],Mt.classList.remove("open","mid","tall","agent"),Mt.setAttribute("aria-hidden","true"),document.body.classList.remove("sheet-open"),z.selected&&(z.selected.select(!1),z.selected=null),rt.focus({})}function Sy(){let i=z.history.pop();i?(z.sheet=i,Pn()):dn()}function Pn(i=!1){let e=z.sheet;if(!e)return;let t={},n=null;i&&Mt.querySelectorAll("input[name],textarea[name]").forEach(h=>{h.type!=="checkbox"&&h.value&&(t[h.name]=h.value),h===document.activeElement&&(n=h.name)});let s=Mt.querySelector(".sheet-body"),r=s&&s.scrollTop+s.clientHeight>=s.scrollHeight-40,a=i&&s&&!r?s.scrollTop:null,o=z.ent||{snapshot:{}},c={...z,ent:o},l;e.type==="agent"?l=tp(c,z.agentsById[e.id].def,e.tab):e.type==="task"?l=np(c,e.id):e.type==="mission"?l=ip(c,e.id):e.type==="missions"?l=iu(c):e.type==="approvals"?l=Cc(c,e.dept):e.type==="files"?l=Ic(c,e.dept):e.type==="company"?l=su(c,z.summary):e.type==="directory"?l=sp(c):e.type==="access"?l=rp(c,z.accessStep,z.accessEmail):e.type==="hot"&&(l=ap(c,e.key,e.room)),Mt.querySelector(".sheet-inner").innerHTML=l.html,Mt.classList.add("open"),Mt.classList.toggle("tall",l.size==="tall"),Mt.classList.toggle("agent",l.size==="agent"),Mt.classList.toggle("mid",l.size==="mid"),document.body.classList.toggle("sheet-open",!0),Mt.setAttribute("aria-hidden","false");for(let[h,u]of Object.entries(t)){let d=Mt.querySelector(`[name="${h}"]`);d&&d.type!=="checkbox"&&(d.value=u)}if(n&&Mt.querySelector(`[name="${n}"]`)?.focus({preventScroll:!0}),hu(),a!=null){let h=Mt.querySelector(".sheet-body");h&&(h.scrollTop=a)}else if(e.type==="agent"&&e.tab==="chat"||r){let h=Mt.querySelector(".sheet-body");h&&(h.scrollTop=h.scrollHeight)}requestAnimationFrame(()=>{if(z.sheet!==e)return;let h=Mt.getBoundingClientRect().height;if(e.type==="agent"){let u=z.agentsById[e.id];rt.focus({x:u.pos.x,z:u.pos.y,sheetPx:h,zoom:1.5})}else if(e.focus){let u=new Ut().setFromObject(e.focus.obj).getCenter(new L);rt.focus({x:u.x,z:u.z,sheetPx:h,zoom:1.45})}else rt.focus({sheetPx:h*.6})})}(()=>{let i=Mt.querySelector(".handle"),e=null;i.addEventListener("pointerdown",n=>{e=n.clientY,i.setPointerCapture(n.pointerId)}),i.addEventListener("pointermove",n=>{if(e==null)return;let s=Math.max(0,n.clientY-e);Mt.style.transform=`translateY(${s}px)`});let t=n=>{if(e==null)return;let s=n.clientY-e;e=null,Mt.style.transform="",s>70?dn():s<4};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t)})();var Tp=i=>`${i.dataset.action}:${i.dataset.id}:${i.dataset.choice||i.dataset.op||""}`;function mp(i){let e=Tp(i);return z.armed&&z.armed.key===e&&performance.now()<z.armed.until?(z.armed=null,!0):(z.armed={key:e,until:performance.now()+3500},hu(),setTimeout(()=>{z.armed?.key===e&&performance.now()>=z.armed.until&&(z.armed=null,hu())},3600),!1)}function hu(){Mt.querySelectorAll('[data-action="decide"],[data-action="mission-op"]').forEach(i=>{let e=z.armed&&z.armed.key===Tp(i)&&performance.now()<z.armed.until;e&&!i.dataset.label&&(i.dataset.label=i.textContent,i.textContent="\xBFConfirmar?",i.classList.add("armed")),!e&&i.dataset.label&&(i.textContent=i.dataset.label,delete i.dataset.label,i.classList.remove("armed"))})}Mt.addEventListener("click",async i=>{let e=i.target.closest("[data-action]");if(!e||e.tagName==="FORM")return;let t=e.dataset.action,n=e.dataset.id;if(t!=="ambient"){i.preventDefault();try{if(t==="close")dn();else if(t==="back")Sy();else if(t==="tab")z.sheet.tab=e.dataset.tab,Pn();else if(t==="task")rn({type:"task",id:n},{push:!0});else if(t==="mission")rn({type:"mission",id:n},{push:!0});else if(t==="agent")n&&(dn(),Fc(n));else if(t==="agent-room"){let s=Ss.find(r=>r.room===e.dataset.room);s&&(dn(),Fc(s.id))}else if(t==="go")dn(),rt.goToRoom(+e.dataset.index);else if(t==="file")await Ey(n);else if(t==="decide"){if(!mp(e))return;e.disabled=!0,await z.ent.decideApproval(n,e.dataset.choice),fn(`${e.dataset.choice==="approved"?"Aprobaci\xF3n":"Rechazo"} registrado${z.mode==="demo"?" en la simulaci\xF3n":" en el servidor"}`,"ok"),Mn(),Pn(!0)}else if(t==="retry"){let s=z.ent.snapshot.tasks.find(r=>r.id===n);s&&await wp(s.department,s.instruction)}else if(t==="mission-op"){if(!mp(e))return;e.disabled=!0,await z.ent.missionAction(e.dataset.op,n),fn(z.mode==="demo"?"Acci\xF3n aplicada en la simulaci\xF3n":"El servidor confirm\xF3 la acci\xF3n","ok"),Mn(),Pn(!0)}else t==="access"?rn({type:"access"}):t==="demo"?(dn(),await Mp(),fn("Simulaci\xF3n local activada \xB7 datos inventados","warn")):t==="exit-demo"?(z.ent?.client?.dispose?.(),z.ent=null,z.mode="none",dn(),history.replaceState(null,"",location.pathname+location.hash),await bp()):t==="access-reset"?(z.accessStep="email",Pn()):t==="logout"?(await z.ent.signOut(),dn(),Mn()):t==="refresh"?(await z.ent?.refresh(),Mn(),fn("Instant\xE1nea actualizada","ok")):t==="open-approvals"?rn({type:"approvals"},{push:!0}):t==="open-missions"?rn({type:"missions"},{push:!0}):t==="open-files"&&rn({type:"files"},{push:!0})}catch(s){fn(s.message||String(s),"error"),e.disabled=!1}}});Mt.addEventListener("change",i=>{i.target.dataset.action==="ambient"&&(z.ambient=i.target.checked,z.agents.forEach(e=>e.setAmbient(z.ambient)),Pn(!0),va())});Mt.addEventListener("submit",async i=>{i.preventDefault();let e=i.target,t=e.dataset.action,n=Object.fromEntries(new FormData(e)),s=e.querySelector("button");try{if(t==="send"){let r=z.agentsById[z.sheet.id];await wp(r.dept,n.instruction||"")}else if(t==="create-mission"){s.disabled=!0;let r=await z.ent.createMission(n.title||"",n.objective||"");fn(z.mode==="demo"?"Misi\xF3n creada en la SIMULACI\xD3N":`Misi\xF3n registrada en Supabase \xB7 ${String(r.missionId||"").slice(0,8)}`,"ok"),Mn(),Pn()}else t==="login"?(s.disabled=!0,z.accessEmail=n.email,await z.ent.requestLogin(n.email),z.accessStep="sent",Pn()):t==="verify-link"?(s.disabled=!0,await z.ent.verifyLink(n.link),fn("Sesi\xF3n iniciada","ok"),dn(),await z.ent.refresh(),Mn()):t==="verify-code"&&(s.disabled=!0,await z.ent.verifyCode(z.accessEmail,n.code),fn("Sesi\xF3n iniciada","ok"),dn(),await z.ent.refresh(),Mn())}catch(r){fn(r.message||String(r),"error"),s&&(s.disabled=!1)}});Mt.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&i.target.name==="instruction"&&(i.preventDefault(),i.target.form.requestSubmit())});Mt.addEventListener("input",i=>{i.target.name==="instruction"&&(i.target.style.height="auto",i.target.style.height=Math.min(120,i.target.scrollHeight)+"px")});async function wp(i,e){let t=String(e).trim(),n=i==="Direcci\xF3n estrat\xE9gica";if(t.length<(n?20:5)){fn(n?"Describe el encargo para Ulises con al menos 20 caracteres.":"Escribe al menos 5 caracteres.","warn");return}if(z.sending[i])return;let s=z.agents.find(r=>r.dept===i);z.sending[i]=!0,s.receiveInstruction(),Pn(),fu();try{if(n){let r=await z.ent.askUlises(t);fn(z.mode==="demo"?"Ulises recibi\xF3 la misi\xF3n en la SIMULACI\xD3N":`Instrucci\xF3n registrada en Supabase \xB7 misi\xF3n ${String(r.missionId||"").slice(0,8)}`,"ok")}else await z.ent.runTask(i,t),fn(z.mode==="demo"?`${s.def.name}: resultado simulado listo`:`${s.def.name}: el servidor registr\xF3 el resultado`,"ok")}catch(r){fn(`No se complet\xF3: ${r.message}`,"error");try{await z.ent.refresh()}catch{}}finally{z.sending[i]=!1,s.clearLocal(),Mn(),z.sheet&&Pn(!0)}}async function Ey(i){let e=window.open("","_blank");try{let t=await z.ent.fileUrl(i);e?e.location.href=t:location.href=t}catch(t){throw e?.close(),t}}wt("#dock").addEventListener("click",i=>{let e=i.target.closest("[data-dock]");if(!e)return;let t=e.dataset.dock;t==="office"&&rn({type:"directory"}),t==="missions"&&rn({type:"missions"}),t==="approvals"&&rn({type:"approvals"}),t==="files"&&rn({type:"files"})});wt("#dots").addEventListener("click",i=>{let e=i.target.closest("[data-go]");e&&rt.goToRoom(+e.dataset.go)});wt("#prev").addEventListener("click",()=>rt.goToRoom(z.roomIndex-1));wt("#next").addEventListener("click",()=>rt.goToRoom(z.roomIndex+1));wt("#session").addEventListener("click",()=>rn({type:"access"}));wt("#legend").addEventListener("click",()=>rn({type:"hot",key:"coffee",room:"rest"}));window.addEventListener("keydown",i=>{i.target.closest("input,textarea")||(i.key==="ArrowRight"&&rt.goToRoom(z.roomIndex+1),i.key==="ArrowLeft"&&rt.goToRoom(z.roomIndex-1),i.key==="Escape"&&dn())});document.addEventListener("visibilitychange",()=>{!document.hidden&&z.connected&&z.ent.refresh().then(Mn).catch(()=>{})});var gp;function fn(i,e="info"){let t=wt("#toast");t.textContent=i,t.className=`toast show ${e}`,clearTimeout(gp),gp=setTimeout(()=>t.classList.remove("show"),e==="error"?6e3:3200)}var cu=performance.now(),lu=16,Uc=0,Nc=0,_p=[Math.min(devicePixelRatio||1,2),1.5,1.25,1],Ap=uu.get("capture")==="1",xp=performance.now();function Rp(i){if(requestAnimationFrame(Rp),Ap)return;if(document.hidden){cu=i;return}let e=Math.min(.1,(i-cu)/1e3);cu=i,Cp(e,i)}window.__advance=(i=1,e=1/30)=>{for(let t=0;t<i;t++)xp+=e*1e3,Cp(e,xp,t===i-1)};function Cp(i,e,t=!0){let n=e/1e3;!z.sheet&&(rt.sheetGoal>0||rt.goalZoom>1.2||rt.focusGoalY!==0)&&rt.focus({}),rt.update(i);for(let s of z.agents)s.update(i);for(let s of Ln.animated)Math.abs(rt.camX-Vt.findIndex(r=>r.id===s.room)*ft)>ft*1.6||s.fn(n,s.room==="technology"&&z.agentsById["a-technology"].intent.kind==="running");for(let s of Object.values(Ln.lamps))(s.userData.kind==="running"||s.userData.kind==="review"||s.userData.kind==="receiving")&&(s.emissiveIntensity=.7+Math.sin(n*5)*.6);if(Xn.obj){Xn.t+=i;let s=Xn.t,r=1+Math.sin(Math.min(1,s/.45)*Math.PI)*.07;Xn.obj.scale.copy(Xn.base).multiplyScalar(r),s>.45&&(Xn.obj.scale.copy(Xn.base),Xn.obj=null)}if(z.sheet?.type==="agent"){let s=z.agentsById[z.sheet.id];rt.focusGoalOffX=Math.max(-2.2,Math.min(2.2,s.pos.x-rt.goalX)),rt.focusGoalZ=s.pos.y}t&&(vp.update(z.agents,Ln.hotspots,Vt[z.roomIndex].id,{selectedId:z.selected?.def.id,sheetOpen:!!z.sheet}),rt.render(),!Ap&&(lu=lu*.95+i*1e3*.05,lu>25?(Uc+=i,Uc>2&&Nc<_p.length-1&&(Nc++,rt.renderer.setPixelRatio(_p[Nc]),rt.resize(),Uc=0,Nc>=2&&(rt.renderer.shadowMap.enabled=!0))):Uc=0))}requestAnimationFrame(Rp);uu.get("demo")==="1"||globalThis.PULSE_PREVIEW==="demo"?await Mp():bp();du.style.width="100%";setTimeout(()=>{wt("#loader").classList.add("done"),document.title="PULSE HQ",document.body.dataset.ready="1"},250);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
