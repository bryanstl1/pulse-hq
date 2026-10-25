var rd=0,Al=1,ad=2;var Rl=1,po=2,si=3,kn=0,an=1,Rn=2,Ei=0,cs=1,Cl=2,Il=3,Pl=4,od=5,Fi=100,cd=101,ld=102,ud=103,hd=104,dd=200,fd=201,pd=202,md=203,Ya=204,Za=205,gd=206,_d=207,xd=208,vd=209,yd=210,bd=211,Md=212,Sd=213,Ed=214,mo=0,go=1,_o=2,ls=3,xo=4,vo=5,yo=6,bo=7,Ll=0,wd=1,Td=2,wi=0,Ad=1,Rd=2,Cd=3,Id=4,Pd=5,Ld=6,Mo=7,ml="attached",Dd="detached",Dl=300,gs=301,_s=302,So=303,Eo=304,oa=306,jn=1e3,Yn=1001,$s=1002,qt=1003,wo=1004;var xs=1005;var rn=1006,ar=1007;var Vn=1008;var Gn=1009,Ul=1010,Nl=1011,or=1012,To=1013,Gi=1014,Cn=1015,cr=1016,Ao=1017,Ro=1018,lr=1020,Fl=35902,Ol=35899,Bl=1021,kl=1022,yn=1023,qs=1026,ur=1027,Co=1028,Io=1029,zl=1030,Po=1031;var Lo=1033,ca=33776,la=33777,ua=33778,ha=33779,Do=35840,Uo=35841,No=35842,Fo=35843,Oo=36196,Bo=37492,ko=37496,zo=37808,Ho=37809,Vo=37810,Go=37811,Wo=37812,Xo=37813,$o=37814,qo=37815,Yo=37816,Zo=37817,jo=37818,Ko=37819,Jo=37820,Qo=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,rc=36285,ac=36286;var us=2300,hs=2301,qa=2302,gl=2400,_l=2401,xl=2402,Ud=2500;var Hl=0,da=1,hr=2,Nd=3200,Fd=3201;var Vl=0,Od=1,Ti="",wt="srgb",Yt="srgb-linear",Ir="linear",ct="srgb";var os=7680;var vl=519,Bd=512,kd=513,zd=514,Gl=515,Hd=516,Vd=517,Gd=518,Wd=519,ja=35044;var Wl="300 es",On=2e3,Pr=2001;var vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=1234567,Rr=Math.PI/180,ds=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Xl(i,e){return(i%e+e)%e}function Vp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Gp(i,e,t){return i!==e?(t-i)/(e-i):0}function Cr(i,e,t){return(1-t)*i+t*e}function Wp(i,e,t,n){return Cr(i,e,1-Math.exp(-t*n))}function Xp(i,e=1){return e-Math.abs(Xl(i,e*2)-e)}function $p(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zp(i,e){return i+Math.random()*(e-i)}function jp(i){return i*(.5-Math.random())}function Kp(i){i!==void 0&&(bh=i);let e=bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jp(i){return i*Rr}function Qp(i){return i*ds}function em(i){return(i&i-1)===0&&i!==0}function tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function im(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var bn={DEG2RAD:Rr,RAD2DEG:ds,generateUUID:Bn,clamp:Ze,euclideanModulo:Xl,mapLinear:Vp,inverseLerp:Gp,lerp:Cr,damp:Wp,pingpong:Xp,smoothstep:$p,smootherstep:qp,randInt:Yp,randFloat:Zp,randFloatSpread:jp,seededRandom:Kp,degToRad:Jp,radToDeg:Qp,isPowerOfTwo:em,ceilPowerOfTwo:tm,floorPowerOfTwo:nm,setQuaternionFromProperEuler:im,normalize:ot,denormalize:Fn},ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-o,p=c*d+l*f+u*g+h*x,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let E=Math.sqrt(_),T=Math.atan2(E,p*b);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}let v=o*b;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+x*v,m===1-o){let E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new D,Mh=new An,We=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],_=s[4],v=s[7],E=s[2],T=s[5],A=s[8];return r[0]=a*x+o*b+c*E,r[3]=a*m+o*_+c*T,r[6]=a*p+o*v+c*A,r[1]=l*x+u*b+h*E,r[4]=l*m+u*_+h*T,r[7]=l*p+u*v+h*A,r[2]=d*x+f*b+g*E,r[5]=d*m+f*_+g*T,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gc=new We;function $l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xd(){let i=Ys("canvas");return i.style.display="block",i}var Sh={};function Zs(i){i in Sh||(Sh[i]=!0,console.warn(i))}function $d(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Eh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){let i={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yt]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Eh,fromXYZ:wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),i}var Je=sm();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Ys("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rm=0,js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wc(s[a].image)):r.push(Wc(s[a]))}else r=Wc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var am=0,Xc=new D,Ut=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=rn,a=Vn,o=yn,c=Gn,l=i.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Bn(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Dl;Ut.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,E=(p+1)/2,T=(u+d)/4,A=(h+x)/4,I=(g+m)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=I/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Ea.subVectors(this.max,yr),Ls.subVectors(e.a,yr),Ds.subVectors(e.b,yr),Us.subVectors(e.c,yr),Ci.subVectors(Ds,Ls),Ii.subVectors(Us,Ds),is.subVectors(Ls,Us);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-is.z,is.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,is.z,0,-is.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-is.y,is.x,0];return!$c(t,Ls,Ds,Us,Ea)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,Ls,Ds,Us,Ea))?!1:(wa.crossVectors(Ci,Ii),t=[wa.x,wa.y,wa.z],$c(t,Ls,Ds,Us,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,Sa=new Nt,Ls=new D,Ds=new D,Us=new D,Ci=new D,Ii=new D,is=new D,yr=new D,Ea=new D,wa=new D,ss=new D;function $c(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),u=n.dot(ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var om=new Nt,br=new D,qc=new D,ln=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(qc)),this.expandByPoint(br.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fi=new D,Yc=new D,Ta=new D,Pi=new D,Zc=new D,Aa=new D,jc=new D,Oi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Yc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Pi.dot(this.direction),c=-Pi.dot(Ta),l=Pi.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Yc).addScaledVector(Ta,d),f}intersectSphere(e,t){fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){Zc.subVectors(t,e),Aa.subVectors(n,e),jc.crossVectors(Zc,Aa);let a=this.direction.dot(jc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);let c=o*this.direction.dot(Aa.crossVectors(Pi,Aa));if(c<0)return null;let l=o*this.direction.dot(Zc.cross(Pi));if(l<0||c+l>a)return null;let u=-o*Pi.dot(jc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,lm)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Li.crossVectors(n,xn),Li.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Li.crossVectors(n,xn)),Li.normalize(),Ra.crossVectors(xn,Li),s[0]=Li.x,s[4]=Ra.x,s[8]=xn.x,s[1]=Li.y,s[5]=Ra.y,s[9]=xn.y,s[2]=Li.z,s[6]=Ra.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],_=n[7],v=n[11],E=n[15],T=s[0],A=s[4],I=s[8],S=s[12],y=s[1],R=s[5],L=s[9],N=s[13],H=s[2],F=s[6],V=s[10],j=s[14],W=s[3],oe=s[7],le=s[11],be=s[15];return r[0]=a*T+o*y+c*H+l*W,r[4]=a*A+o*R+c*F+l*oe,r[8]=a*I+o*L+c*V+l*le,r[12]=a*S+o*N+c*j+l*be,r[1]=u*T+h*y+d*H+f*W,r[5]=u*A+h*R+d*F+f*oe,r[9]=u*I+h*L+d*V+f*le,r[13]=u*S+h*N+d*j+f*be,r[2]=g*T+x*y+m*H+p*W,r[6]=g*A+x*R+m*F+p*oe,r[10]=g*I+x*L+m*V+p*le,r[14]=g*S+x*N+m*j+p*be,r[3]=b*T+_*y+v*H+E*W,r[7]=b*A+_*R+v*F+E*oe,r[11]=b*I+_*L+v*V+E*le,r[15]=b*S+_*N+v*j+E*be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=h*m*l-x*d*l+x*c*f-o*m*f-h*c*p+o*d*p,_=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,v=u*x*l-g*h*l+g*o*f-a*x*f-u*o*p+a*h*p,E=g*h*c-u*x*c-g*o*d+a*x*d+u*o*m-a*h*m,T=t*b+n*_+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*A,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*A,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*A,e[4]=_*A,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*A,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*A,e[8]=v*A,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*A,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*A,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*A,e[12]=E*A,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*A,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,b=c*l,_=c*u,v=c*h,E=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+v)*E,s[2]=(g-_)*E,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(m-b)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),o=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let l=1/r,u=1/a,h=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Pr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===On)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Pr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new D,Un=new Ge,cm=new D(0,0,0),lm=new D(1,1,1),Li=new D,Ra=new D,xn=new D,Th=new Ge,Ah=new An,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Th,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},um=0,Rh=new D,Fs=new An,pi=new Ge,Ca=new D,Mr=new D,hm=new D,dm=new An,Ch=new D(1,0,0),Ih=new D(0,1,0),Ph=new D(0,0,1),Lh={type:"added"},fm={type:"removed"},Os={type:"childadded",child:null},Kc={type:"childremoved",child:null},yt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new zn,n=new An,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new We}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Mr,Ca,this.up):pi.lookAt(Ca,Mr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(pi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new D,mi=new D,Jc=new D,gi=new D,Bs=new D,ks=new D,Dh=new D,Qc=new D,el=new D,tl=new D,nl=new it,il=new it,sl=new it,Ni=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),mi.subVectors(n,t),Jc.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(mi),c=Nn.dot(Jc),l=mi.dot(mi),u=mi.dot(Jc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(a,gi.y),c.addScaledVector(o,gi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(e,t),il.fromBufferAttribute(e,n),sl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nl,r.x),a.addScaledVector(il,r.y),a.addScaledVector(sl,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),mi.subVectors(e,t),Nn.cross(mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Nn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,n),ks.subVectors(r,n),Qc.subVectors(e,n);let c=Bs.dot(Qc),l=ks.dot(Qc);if(c<=0&&l<=0)return t.copy(n);el.subVectors(e,s);let u=Bs.dot(el),h=ks.dot(el);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Bs,a);tl.subVectors(e,r);let f=Bs.dot(tl),g=ks.dot(tl);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ks,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Dh.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Dh,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Bs,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Xl(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=rl(a,r,e+1/3),this.g=rl(a,r,e),this.b=rl(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Je.workingToColorSpace(Qt.copy(this),e),Math.round(Ze(Qt.r*255,0,255))*65536+Math.round(Ze(Qt.g*255,0,255))*256+Math.round(Ze(Qt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=wt){Je.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ia);let n=Cr(Di.h,Ia.h,t),s=Cr(Di.s,Ia.s,t),r=Cr(Di.l,Ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new Pe;Pe.NAMES=qd;var pm=0,un=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=cs,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=Za,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ft=class extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new D,Pa=new ze,mm=0,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}};var Dr=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gm=0,Tn=new Ge,al=new yt,zs=new D,vn=new Nt,Sr=new Nt,Vt=new D,Ot=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($l(e)?Ur:Dr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(vn.min,Sr.min),vn.expandByPoint(Vt),Vt.addVectors(vn.max,Sr.max),vn.expandByPoint(Vt)):(vn.expandByPoint(Sr.min),vn.expandByPoint(Sr.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Vt.fromBufferAttribute(o,l),c&&(zs.fromBufferAttribute(e,l),Vt.add(zs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new D,c[I]=new D;let l=new D,u=new D,h=new D,d=new ze,f=new ze,g=new ze,x=new D,m=new D;function p(I,S,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[I].add(x),o[S].add(x),o[y].add(x),c[I].add(m),c[S].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,S=b.length;I<S;++I){let y=b[I],R=y.start,L=y.count;for(let N=R,H=R+L;N<H;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let _=new D,v=new D,E=new D,T=new D;function A(I){E.fromBufferAttribute(s,I),T.copy(E);let S=o[I];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(T,S);let R=v.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,R)}for(let I=0,S=b.length;I<S;++I){let y=b[I],R=y.start,L=y.count;for(let N=R,H=R+L;N<H;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Dt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new Ge,rs=new Oi,La=new ln,Nh=new D,Da=new D,Ua=new D,Na=new D,ol=new D,Fa=new D,Fh=new D,Oa=new D,ut=class extends yt{constructor(e=new Ot,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(ol.fromBufferAttribute(h,e),a?Fa.addScaledVector(ol,u):Fa.addScaledVector(ol.sub(t),u))}t.add(Fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(La.containsPoint(rs.origin)===!1&&(rs.intersectSphere(La,Nh)===null||rs.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(r).invert(),rs.copy(e.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,E=_;v<E;v+=3){let T=o.getX(v),A=o.getX(v+1),I=o.getX(v+2);s=Ba(this,p,e,n,l,u,h,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Ba(this,a,e,n,l,u,h,b,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,E=_;v<E;v+=3){let T=v,A=v+1,I=v+2;s=Ba(this,p,e,n,l,u,h,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let b=m,_=m+1,v=m+2;s=Ba(this,a,e,n,l,u,h,b,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _m(i,e,t,n,s,r,a,o){let c;if(e.side===an?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===kn,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:i}}function Ba(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Da),i.getVertexPosition(c,Ua),i.getVertexPosition(l,Na);let u=_m(i,e,t,n,Da,Ua,Na,Fh);if(u){let h=new D;Ni.getBarycoord(Fh,Da,Ua,Na,h),s&&(u.uv=Ni.getInterpolatedAttribute(s,o,c,l,h,new ze)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,o,c,l,h,new ze)),a&&(u.normal=Ni.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};Ni.getNormal(Da,Ua,Na,d.normal),u.face=d,u.barycoord=h}return u}var Jn=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(u,3)),this.setAttribute("uv",new rt(h,2));function g(x,m,p,b,_,v,E,T,A,I,S){let y=v/A,R=E/I,L=v/2,N=E/2,H=T/2,F=A+1,V=I+1,j=0,W=0,oe=new D;for(let le=0;le<V;le++){let be=le*R-N;for(let ke=0;ke<F;ke++){let st=ke*y-L;oe[x]=st*b,oe[m]=be*_,oe[p]=H,l.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[p]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(ke/A),h.push(1-le/I),j+=1}}for(let le=0;le<I;le++)for(let be=0;be<A;be++){let ke=d+be+F*le,st=d+be+F*(le+1),pt=d+(be+1)+F*(le+1),tt=d+(be+1)+F*le;c.push(ke,st,tt),c.push(st,pt,tt),W+=6}o.addGroup(f,W,S),f+=W,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function vs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=vs(i[t]);for(let s in n)e[s]=n[s]}return e}function xm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ql(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Yd={clone:vs,merge:en},vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Nr=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new D,Oh=new ze,Bh=new ze,Lt=class extends Nr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,Bh),t.subVectors(Bh,Oh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,Vs=1,eo=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Hs,Vs,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Hs,Vs,e,t);r.layers=this.layers,this.add(r);let a=new Lt(Hs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new Lt(Hs,Vs,e,t);o.layers=this.layers,this.add(o);let c=new Lt(Hs,Vs,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Hs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fr=class extends Ut{constructor(e=[],t=gs,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},to=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Ei});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=rn),new eo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ue=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bm={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Or=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new D,er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var kh=new D,zh=new it,Hh=new it,Mm=new D,Vh=new Ge,ka=new D,cl=new ln,Gh=new Ge,ll=new Oi,Br=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ml,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(s),e.ray.intersectsSphere(cl)!==!1&&(Gh.copy(s).invert(),ll.copy(e.ray).applyMatrix4(Gh),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ml?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;zh.fromBufferAttribute(s.attributes.skinIndex,e),Hh.fromBufferAttribute(s.attributes.skinWeight,e),kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Hh.getComponent(r);if(a!==0){let o=zh.getComponent(r);Vh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mm.copy(kh).applyMatrix4(Vh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},tr=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},kr=class extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,c,l=qt,u=qt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wh=new Ge,Sm=new Ge,zr=class i{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Sm;Wh.multiplyMatrices(o,t[r]),Wh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new kr(t,e,e,yn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new tr),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Bi=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new Ge,Xh=new Ge,za=[],$h=new Nt,Em=new Ge,Er=new ut,wr=new ln,Hr=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Em)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),$h.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union($h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),wr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Xh.multiplyMatrices(n,Gs),Er.matrixWorld=Xh,Er.raycast(e,za);for(let a=0,o=za.length;a<o;a++){let c=za[a];c.instanceId=r,c.object=this,t.push(c)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,Co,Cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ul=new D,wm=new D,Tm=new We,qn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ul.subVectors(n,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ul),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tm.getNormalMatrix(e),s=this.coplanarPoint(ul).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new ln,Am=new ze(.5,.5),Ha=new D,nr=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(l-a,f-u,p-g,E-b).normalize(),s[1].setComponents(l+a,f+u,p+g,E+b).normalize(),s[2].setComponents(l+o,f+h,p+x,E+_).normalize(),s[3].setComponents(l-o,f-h,p-x,E-_).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,E-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-v).normalize(),t===On)s[5].setComponents(l+c,f+d,p+m,E+v).normalize();else if(t===Pr)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=Am.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ir=class extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},no=new D,io=new D,qh=new Ge,Tr=new Oi,Va=new ln,hl=new D,Yh=new D,fs=class extends yt{constructor(e=new Ot,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)no.fromBufferAttribute(t,s-1),io.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=no.distanceTo(io);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=r,e.ray.intersectsSphere(Va)===!1)return;qh.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),b=u.getX(x+1),_=Ga(this,e,Tr,c,p,b,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Ga(this,e,Tr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Ga(this,e,Tr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ga(this,e,Tr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ga(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(no.fromBufferAttribute(o,s),io.fromBufferAttribute(o,r),t.distanceSqToSegment(no,io,hl,Yh)>n)return;hl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(hl);if(!(l<e.near||l>e.far))return{distance:l,point:Yh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zh=new D,jh=new D,Vr=class extends fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Zh.fromBufferAttribute(t,s),jh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zh.distanceTo(jh);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gr=class extends fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sr=class extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kh=new Ge,yl=new Oi,Wa=new ln,Xa=new D,Wr=class extends yt{constructor(e=new Ot,t=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;Kh.copy(s).invert(),yl.copy(e.ray).applyMatrix4(Kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Xa.fromBufferAttribute(h,m),Jh(Xa,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Xa.fromBufferAttribute(h,g),Jh(Xa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jh(i,e,t,n,s,r,a){let o=yl.distanceSqToPoint(i);if(o<t){let c=new D;yl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xr=class extends Ut{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},$r=class extends Ut{constructor(e,t,n=Gi,s,r,a,o=qt,c=qt,l,u=qs,h=1){if(u!==qs&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qr=class extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yr=class i extends Ot{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=s+1,m=new D,p=new D;for(let b=0;b<=g;b++){let _=0,v=0,E=0,T=0;if(b<=n){let S=b/n,y=S*Math.PI/2;v=-u-e*Math.cos(y),E=e*Math.sin(y),T=-e*Math.cos(y),_=S*h}else if(b<=n+r){let S=(b-n)/r;v=-u+S*t,E=e,T=0,_=h+S*d}else{let S=(b-n-r)/n,y=S*Math.PI/2;v=u+e*Math.sin(y),E=e*Math.cos(y),T=e*Math.sin(y),_=h+d+S*h}let A=Math.max(0,Math.min(1,_/f)),I=0;b===0?I=.5/s:b===g&&(I=-.5/s);for(let S=0;S<=s;S++){let y=S/s,R=y*Math.PI*2,L=Math.sin(R),N=Math.cos(R);p.x=-E*N,p.y=v,p.z=E*L,o.push(p.x,p.y,p.z),m.set(-E*N,T,E*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+I,A)}if(b>0){let S=(b-1)*x;for(let y=0;y<s;y++){let R=S+y,L=S+y+1,N=b*x+y,H=b*x+y+1;a.push(R,L,N),a.push(L,H,N)}}}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Zr=class i extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new D,u=new ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(o,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ki=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function b(){let v=new D,E=new D,T=0,A=(t-e)/n;for(let I=0;I<=r;I++){let S=[],y=I/r,R=y*(t-e)+e;for(let L=0;L<=s;L++){let N=L/s,H=N*c+o,F=Math.sin(H),V=Math.cos(H);E.x=R*F,E.y=-y*n+m,E.z=R*V,h.push(E.x,E.y,E.z),v.set(F,A,V).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-y),S.push(g++)}x.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let y=x[S][I],R=x[S+1][I],L=x[S+1][I+1],N=x[S][I+1];(e>0||S!==0)&&(u.push(y,R,N),T+=3),(t>0||S!==r-1)&&(u.push(R,L,N),T+=3)}l.addGroup(p,T,0),p+=T}function _(v){let E=g,T=new ze,A=new D,I=0,S=v===!0?e:t,y=v===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let R=g;for(let L=0;L<=s;L++){let H=L/s*c+o,F=Math.cos(H),V=Math.sin(H);A.x=S*V,A.y=m*y,A.z=S*F,h.push(A.x,A.y,A.z),d.push(0,y,0),T.x=F*.5+.5,T.y=V*.5*y+.5,f.push(T.x,T.y),g++}for(let L=0;L<s;L++){let N=E+L,H=R+L;v===!0?u.push(H,H+1,N):u.push(H+1,H,N),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jr=class i extends ki{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Qn=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let b=p*d-a;for(let _=0;_<l;_++){let v=_*h-r;g.push(v,-b,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let _=b+l*p,v=b+l*(p+1),E=b+1+l*(p+1),T=b+1+l*p;f.push(_,v,T),f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Kr=class i extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/s,f=new D,g=new ze;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let b=p+m,_=b,v=b+n+1,E=b+n+2,T=b+1;o.push(_,v,T),o.push(v,E,T)}}this.setIndex(o),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zi=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],_=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){let T=E/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-_),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let _=u[p][b+1],v=u[p][b],E=u[p+1][b],T=u[p+1][b+1];(p!==0||a>0)&&f.push(_,v,T),(p!==n-1||c<Math.PI)&&f.push(v,E,T)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Bt=class extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var so=class extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $a(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cm(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Zd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ao=class extends yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gl,endingEnd:gl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _l:r=e,o=2*t-n;break;case xl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _l:a=e,c=2*n-t;break;case xl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,b=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+b*a[l+E]+_*a[c+E]+v*a[h+E];return r}},oo=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},co=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ao(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Rm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=hs;var bi=class extends dn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=us;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};Jr.prototype.ValueTypeName="color";var ei=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};ei.prototype.ValueTypeName="number";var lo=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)An.slerpFlat(r,0,a,l-o,a,l,c);return r}},ti=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}};ti.prototype.ValueTypeName="quaternion";ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends dn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=us;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};ni.prototype.ValueTypeName="vector";var Qr=class{constructor(e="",t=-1,n=[],s=Ud){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Pm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Cm(c);c=Qh(c,1,u),l=Qh(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ei(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Zd(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new ei(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[h].name+"]";n(ni,f+".position",d,"pos",s),n(ti,f+".quaternion",d,"rot",s),n(ni,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Im(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ei;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return Jr;case"quaternion":return ti;case"bool":case"boolean":return bi;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Pm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Im(i.type);if(i.times===void 0){let t=[],n=[];Zd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Zn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},uo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},jd=new uo,ii=class{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},bl=class extends Error{constructor(e,t){super(e),this.response=t}},rr=class extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Zn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:s});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=_i[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){b();function b(){h.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,A=u.length;T<A;T++){let I=u[T];I.onProgress&&I.onProgress(E)}p.enqueue(v),b()}},_=>{p.error(_)})}}});return new Response(m)}else throw new bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Zn.add(`file:${e}`,l);let u=_i[e];delete _i[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=_i[e];if(u===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ws=new WeakMap,ho=class extends ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ws.get(a);h===void 0&&(h=[],Ws.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Ys("img");function c(){u(),t&&t(this);let h=Ws.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ws.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Zn.remove(`image:${e}`);let d=Ws.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Ws.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ea=class extends ii{constructor(e){super(e)}load(e,t,n,s){let r=new Ut,a=new ho(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ps=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ta=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dl=new Ge,ed=new D,td=new D,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=class extends na{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ia=class extends ps{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ml}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},nd=new Ge,Ar=new D,fl=new D,Sl=class extends na{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ar),fl.copy(n.position),fl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fl),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,n.coordinateSystem,n.reversedDepth)}},sa=class extends ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ms=class extends Nr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},El=class extends na{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new El}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pl=new WeakMap,ra=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(pl.has(a)===!0)s&&s(pl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),pl.set(c,l),Zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Zn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fo=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yl="\\[\\]\\.:\\/",Lm=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",Dm="[^"+Yl.replace("\\.","")+"]",Um=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Nm=/(WCOD+)?/.source.replace("WCOD",Dm),Fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Bm=new RegExp("^"+Um+Nm+Fm+Om+"$"),km=["material","materials","bones","map"],wl=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(e){let t=Bm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=wl;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uy=new Float32Array(1);var id=new Ge,aa=class{constructor(e,t,n=0,s=1/0){this.ray=new Oi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(id),this}intersectObject(e,t=!0,n=[]){return Tl(e,this,n,t),n.sort(sd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Tl(e[s],this,n,t);return n.sort(sd),n}};function sd(i,e){return i.distance-e.distance}function Tl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Tl(r[a],e,t,!0)}}function jl(i,e,t,n){let s=zm(n);switch(t){case Bl:return i*e;case Co:return i*e/s.components*s.byteLength;case Io:return i*e/s.components*s.byteLength;case zl:return i*e*2/s.components*s.byteLength;case Po:return i*e*2/s.components*s.byteLength;case kl:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Lo:return i*e*4/s.components*s.byteLength;case ca:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ua:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:case Fo:return Math.max(i,16)*Math.max(e,8)/4;case Do:case No:return Math.max(i,8)*Math.max(e,8)/2;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zm(i){switch(i){case Gn:case Ul:return{byteLength:1,components:1};case or:case Nl:case cr:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case Gi:case To:case Cn:return{byteLength:4,components:1};case Fl:case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function bf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vm(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
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
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,H0=`struct PhysicalMaterial {
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
}`,V0=`
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 diffuse;
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
}`,s_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,c_=`#define NORMAL
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
}`,l_=`#define NORMAL
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
}`,u_=`#define PHONG
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
}`,h_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
}`,p_=`#define TOON
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
}`,m_=`#define TOON
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
}`,g_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,b_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:$m,alphatest_fragment:qm,alphatest_pars_fragment:Ym,aomap_fragment:Zm,aomap_pars_fragment:jm,batching_pars_vertex:Km,batching_vertex:Jm,begin_vertex:Qm,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:c0,color_pars_fragment:l0,color_pars_vertex:u0,color_vertex:h0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:x0,colorspace_fragment:v0,colorspace_pars_fragment:y0,envmap_fragment:b0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:N0,envmap_vertex:w0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:U0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:H0,lights_fragment_begin:V0,lights_fragment_maps:G0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:j0,map_particle_fragment:K0,map_particle_pars_fragment:J0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:eg,morphinstance_vertex:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:cg,normal_pars_vertex:lg,normal_vertex:ug,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:_g,premultiplied_alpha_fragment:xg,project_vertex:vg,dithering_fragment:yg,dithering_pars_fragment:bg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:wg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Ig,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Ng,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:kg,uv_vertex:zg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:$g,cube_frag:qg,depth_vert:Yg,depth_frag:Zg,distanceRGBA_vert:jg,distanceRGBA_frag:Kg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:s_,meshlambert_frag:r_,meshmatcap_vert:a_,meshmatcap_frag:o_,meshnormal_vert:c_,meshnormal_frag:l_,meshphong_vert:u_,meshphong_frag:h_,meshphysical_vert:d_,meshphysical_frag:f_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:x_,shadow_frag:v_,sprite_vert:y_,sprite_frag:b_},ue={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ri={basic:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:en([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:en([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:en([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Pe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:en([ue.points,ue.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:en([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:en([ue.common,ue.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:en([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:en([ue.sprite,ue.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:en([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:en([ue.lights,ue.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var oc={r:0,b:0,g:0},ys=new zn,M_=new Ge;function S_(i,e,t,n,s,r,a){let o=new Pe(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1,E=g(_);E===null?p(o,c):E&&E.isColor&&(p(E,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let E=g(v);E&&(E.isCubeTexture||E.mapping===oa)?(u===void 0&&(u=new ut(new Jn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:vs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ys.copy(v.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M_.makeRotationFromEuler(ys)),u.material.toneMapped=Je.getTransfer(E.colorSpace)!==ct,(h!==E||d!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new ut(new Qn(2,2),new Hn({name:"BackgroundMaterial",uniforms:vs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(oc,ql(i)),n.buffers.color.setClear(oc.r,oc.g,oc.b,v,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m,dispose:b}}function E_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,R,L,N,H){let F=!1,V=h(N,L,R);r!==V&&(r=V,l(r.object)),F=f(y,N,L,H),F&&g(y,N,L,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(y,R,L,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,R,L){let N=L.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let F=H[R.id];F===void 0&&(F={},H[R.id]=F);let V=F[N];return V===void 0&&(V=d(c()),F[N]=V),V}function d(y){let R=[],L=[],N=[];for(let H=0;H<t;H++)R[H]=0,L[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,R,L,N){let H=r.attributes,F=R.attributes,V=0,j=L.getAttributes();for(let W in j)if(j[W].location>=0){let le=H[W],be=F[W];if(be===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(be=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(be=y.instanceColor)),le===void 0||le.attribute!==be||be&&le.data!==be.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function g(y,R,L,N){let H={},F=R.attributes,V=0,j=L.getAttributes();for(let W in j)if(j[W].location>=0){let le=F[W];le===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));let be={};be.attribute=le,le&&le.data&&(be.data=le.data),H[W]=be,V++}r.attributes=H,r.attributesNum=V,r.index=N}function x(){let y=r.newAttributes;for(let R=0,L=y.length;R<L;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){let L=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;L[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),H[y]!==R&&(i.vertexAttribDivisor(y,R),H[y]=R)}function b(){let y=r.newAttributes,R=r.enabledAttributes;for(let L=0,N=R.length;L<N;L++)R[L]!==y[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function _(y,R,L,N,H,F,V){V===!0?i.vertexAttribIPointer(y,R,L,H,F):i.vertexAttribPointer(y,R,L,N,H,F)}function v(y,R,L,N){x();let H=N.attributes,F=L.getAttributes(),V=R.defaultAttributeValues;for(let j in F){let W=F[j];if(W.location>=0){let oe=H[j];if(oe===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){let le=oe.normalized,be=oe.itemSize,ke=e.get(oe);if(ke===void 0)continue;let st=ke.buffer,pt=ke.type,tt=ke.bytesPerElement,Y=pt===i.INT||pt===i.UNSIGNED_INT||oe.gpuType===To;if(oe.isInterleavedBufferAttribute){let ee=oe.data,xe=ee.stride,Be=oe.offset;if(ee.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)p(W.location+Re,ee.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Re=0;Re<W.locationSize;Re++)_(W.location+Re,be/W.locationSize,pt,le,xe*tt,(Be+be/W.locationSize*Re)*tt,Y)}else{if(oe.isInstancedBufferAttribute){for(let ee=0;ee<W.locationSize;ee++)p(W.location+ee,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ee=0;ee<W.locationSize;ee++)m(W.location+ee);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ee=0;ee<W.locationSize;ee++)_(W.location+ee,be/W.locationSize,pt,le,be*tt,be/W.locationSize*ee*tt,Y)}}else if(V!==void 0){let le=V[j];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(W.location,le);break;case 3:i.vertexAttrib3fv(W.location,le);break;case 4:i.vertexAttrib4fv(W.location,le);break;default:i.vertexAttrib1fv(W.location,le)}}}}b()}function E(){I();for(let y in n){let R=n[y];for(let L in R){let N=R[L];for(let H in N)u(N[H].object),delete N[H];delete R[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let L in R){let N=R[L];for(let H in N)u(N[H].object),delete N[H];delete R[L]}delete n[y.id]}function A(y){for(let R in n){let L=n[R];if(L[y.id]===void 0)continue;let N=L[y.id];for(let H in N)u(N[H].object),delete N[H];delete L[y.id]}}function I(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function w_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function T_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let I=A===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function A_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new qn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,_=b*4,v=p.clippingState||null;c.value=v,v=u(g,d,_,f);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)a.copy(h[_]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function R_(i){let e=new WeakMap;function t(a,o){return o===So?a.mapping=gs:o===Eo&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===So||o===Eo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new to(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fr=4,Kd=[.125,.215,.35,.446,.526,.582],Ss=20,Kl=new ms,Jd=new Pe,Jl=null,Ql=0,eu=0,tu=!1,Ms=(1+Math.sqrt(5))/2,dr=1/Ms,Qd=[new D(-Ms,dr,0),new D(Ms,dr,0),new D(-dr,0,Ms),new D(dr,0,Ms),new D(0,Ms,-dr),new D(0,Ms,dr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],C_=new D,uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=C_}=r;Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,Ql,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:cr,format:yn,colorSpace:Yt,depthBuffer:!1},s=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=P_(r,e,t)}return s}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Kl)}_sceneToCubeUV(e,t,n,s,r){let c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Jd),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new Ft({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new ut(new Jn,x),p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Jd),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));let E=this._cubeSize;cc(s,v*E,_>2?E:0,E,E),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===gs||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;cc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Kl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qd[(s-r-1)%Qd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ut(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);let p=[],b=0;for(let A=0;A<Ss;++A){let I=A/x,S=Math.exp(-I*I/2);p.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],E=3*v*(s>_-fr?s-_+fr:0),T=4*(this._cubeSize-v);cc(t,E,T,3*v,2*v),c.setRenderTarget(t),c.render(h,Kl)}};function I_(i){let e=[],t=[],n=[],s=i,r=i-fr+1+Kd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-fr?c=Kd[a-i+fr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,I=T>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(S,x*g*T),_.set(d,m*g*T);let y=[T,T,T,T,T,T];v.set(y,p*g*T)}let E=new Ot;E.setAttribute("position",new Dt(b,x)),E.setAttribute("uv",new Dt(_,m)),E.setAttribute("faceIndex",new Dt(v,p)),e.push(E),s>fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ef(i,e,t){let n=new Kn(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function P_(i,e,t){let n=new Float32Array(Ss),s=new D(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function tf(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function nf(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function L_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===So||c===Eo,u=c===gs||c===_s;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new uc(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new uc(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U_(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let _=0,v=b.length;_<v;_+=3){let E=b[_+0],T=b[_+1],A=b[_+2];d.push(E,T,T,A,A,E)}}else if(g!==void 0){let b=g.array;x=g.version;for(let _=0,v=b.length/3-1;_<v;_+=3){let E=_+0,T=_+1,A=_+2;d.push(E,T,T,A,A,E)}}else return;let m=new($l(d)?Ur:Dr)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function N_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*x[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function F_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function O_(i,e,t){let n=new WeakMap,s=new it;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*E*4*h),A=new Lr(T,v,E,h);A.type=Cn,A.needsUpdate=!0;let I=_*4;for(let y=0;y<h;y++){let R=m[y],L=p[y],N=b[y],H=v*E*4*y;for(let F=0;F<R.count;F++){let V=F*I;f===!0&&(s.fromBufferAttribute(R,F),T[H+V+0]=s.x,T[H+V+1]=s.y,T[H+V+2]=s.z,T[H+V+3]=0),g===!0&&(s.fromBufferAttribute(L,F),T[H+V+4]=s.x,T[H+V+5]=s.y,T[H+V+6]=s.z,T[H+V+7]=0),x===!0&&(s.fromBufferAttribute(N,F),T[H+V+8]=s.x,T[H+V+9]=s.y,T[H+V+10]=s.z,T[H+V+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new ze(v,E)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Mf=new Ut,sf=new $r(1,1),Sf=new Lr,Ef=new Qa,wf=new Fr,rf=[],af=[],of=new Float32Array(16),cf=new Float32Array(9),lf=new Float32Array(4);function mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dc(i,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;lf.set(n),i.uniformMatrix2fv(this.addr,!1,lf),zt(t,n)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;cf.set(n),i.uniformMatrix3fv(this.addr,!1,cf),zt(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),zt(t,n)}}function $_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function j_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function ex(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sf.compareFunction=Gl,r=sf):r=Mf,t.setTexture2D(e||r,s)}function tx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ef,s)}function nx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wf,s)}function ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sf,s)}function sx(i){switch(i){case 5126:return k_;case 35664:return z_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return $_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return Z_;case 5125:return j_;case 36294:return K_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,e){i.uniform1fv(this.addr,e)}function ax(i,e){let t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function ox(i,e){let t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function cx(i,e){let t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function lx(i,e){let t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ux(i,e){let t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function hx(i,e){let t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dx(i,e){i.uniform1iv(this.addr,e)}function fx(i,e){i.uniform2iv(this.addr,e)}function px(i,e){i.uniform3iv(this.addr,e)}function mx(i,e){i.uniform4iv(this.addr,e)}function gx(i,e){i.uniform1uiv(this.addr,e)}function _x(i,e){i.uniform2uiv(this.addr,e)}function xx(i,e){i.uniform3uiv(this.addr,e)}function vx(i,e){i.uniform4uiv(this.addr,e)}function yx(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mf,r[a])}function bx(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ef,r[a])}function Mx(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wf,r[a])}function Sx(i,e,t){let n=this.cache,s=e.length,r=dc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sf,r[a])}function Ex(i){switch(i){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return cx;case 35674:return lx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}var iu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}},su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}},ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},nu=/(\w+)(\])?(\[|\.)?/g;function uf(i,e){i.seq.push(e),i.map[e.id]=e}function wx(i,e,t){let n=i.name,s=n.length;for(nu.lastIndex=0;;){let r=nu.exec(n),a=nu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){uf(t,l===void 0?new iu(o,i,e):new su(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new ru(o),uf(t,h)),t=h}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);wx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function hf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Tx=37297,Ax=0;function Rx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var df=new We;function Cx(i){Je._getMatrix(df,Je.workingColorSpace,i);let e=`mat3( ${df.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ir:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ff(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(e),o)}else return r}function Ix(i,e){let t=Cx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Px(i,e){let t;switch(e){case Ad:t="Linear";break;case Rd:t="Reinhard";break;case Cd:t="Cineon";break;case Id:t="ACESFilmic";break;case Ld:t="AgX";break;case Mo:t="Neutral";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new D;function Lx(){Je.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function Ux(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fa(i){return i!==""}function pf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(i){return i.replace(Fx,Bx)}var Ox=new Map;function Bx(i,e){let t=qe[e];if(t===void 0){let n=Ox.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(i){return i.replace(kx,zx)}function zx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Hx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===po?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(e="ENVMAP_MODE_REFRACTION"),e}function Wx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ll:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function Xx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $x(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Hx(t),l=Vx(t),u=Gx(t),h=Wx(t),d=Xx(t),f=Dx(t),g=Ux(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?qe.tonemapping_pars_fragment:"",t.toneMapping!==wi?Px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Ix("linearToOutputTexel",t.outputColorSpace),Lx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=au(a),a=pf(a,t),a=mf(a,t),o=au(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+a,v=b+p+o,E=hf(s,s.VERTEX_SHADER,_),T=hf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(E)||"",H=s.getShaderInfoLog(T)||"",F=L.trim(),V=N.trim(),j=H.trim(),W=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{let le=ff(s,E,"vertex"),be=ff(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+le+`
`+be)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||j==="")&&(oe=!1);oe&&(R.diagnostics={runnable:W,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(E),s.deleteShader(T),I=new pr(s,x),S=Nx(s,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Tx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ax++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var qx=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cu(e),t.set(e,n)),n}},cu=class{constructor(e){this.id=qx++,this.code=e,this.usedTimes=0}};function Yx(i,e,t,n,s,r,a){let o=new Ks,c=new ou,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,L,N){let H=L.fog,F=N.geometry,V=S.isMeshStandardMaterial?L.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=j&&j.mapping===oa?j.image.height:null,oe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,be=le!==void 0?le.length:0,ke=0;F.morphAttributes.position!==void 0&&(ke=1),F.morphAttributes.normal!==void 0&&(ke=2),F.morphAttributes.color!==void 0&&(ke=3);let st,pt,tt,Y;if(oe){let at=ri[oe];st=at.vertexShader,pt=at.fragmentShader}else st=S.vertexShader,pt=S.fragmentShader,c.update(S),tt=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);let ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Qe=!!S.map,Kt=!!S.matcap,P=!!j,xt=!!S.aoMap,Ve=!!S.lightMap,Fe=!!S.bumpMap,Me=!!S.normalMap,vt=!!S.displacementMap,Se=!!S.emissiveMap,$e=!!S.metalnessMap,Ht=!!S.roughnessMap,Rt=S.anisotropy>0,C=S.clearcoat>0,M=S.dispersion>0,z=S.iridescence>0,q=S.sheen>0,Q=S.transmission>0,$=Rt&&!!S.anisotropyMap,Ae=C&&!!S.clearcoatMap,ae=C&&!!S.clearcoatNormalMap,Ee=C&&!!S.clearcoatRoughnessMap,we=z&&!!S.iridescenceMap,se=z&&!!S.iridescenceThicknessMap,pe=q&&!!S.sheenColorMap,De=q&&!!S.sheenRoughnessMap,Te=!!S.specularMap,de=!!S.specularColorMap,Xe=!!S.specularIntensityMap,U=Q&&!!S.transmissionMap,re=Q&&!!S.thicknessMap,ce=!!S.gradientMap,_e=!!S.alphaMap,ne=S.alphaTest>0,Z=!!S.alphaHash,ye=!!S.extensions,He=wi;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(He=i.toneMapping);let mt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:pt,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Yt,alphaToCoverage:!!S.alphaToCoverage,map:Qe,matcap:Kt,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:Ve,bumpMap:Fe,normalMap:Me,displacementMap:d&&vt,emissiveMap:Se,normalMapObjectSpace:Me&&S.normalMapType===Od,normalMapTangentSpace:Me&&S.normalMapType===Vl,metalnessMap:$e,roughnessMap:Ht,anisotropy:Rt,anisotropyMap:$,clearcoat:C,clearcoatMap:Ae,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:M,iridescence:z,iridescenceMap:we,iridescenceThicknessMap:se,sheen:q,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:Te,specularColorMap:de,specularIntensityMap:Xe,transmission:Q,transmissionMap:U,thicknessMap:re,gradientMap:ce,opaque:S.transparent===!1&&S.blending===cs&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Z,combine:S.combine,mapUv:Qe&&x(S.map.channel),aoMapUv:xt&&x(S.aoMap.channel),lightMapUv:Ve&&x(S.lightMap.channel),bumpMapUv:Fe&&x(S.bumpMap.channel),normalMapUv:Me&&x(S.normalMap.channel),displacementMapUv:vt&&x(S.displacementMap.channel),emissiveMapUv:Se&&x(S.emissiveMap.channel),metalnessMapUv:$e&&x(S.metalnessMap.channel),roughnessMapUv:Ht&&x(S.roughnessMap.channel),anisotropyMapUv:$&&x(S.anisotropyMap.channel),clearcoatMapUv:Ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:de&&x(S.specularColorMap.channel),specularIntensityMapUv:Xe&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:re&&x(S.thicknessMap.channel),alphaMapUv:_e&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||Rt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Qe||_e),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rn,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(b(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let y=g[S.type],R;if(y){let L=ri[y];R=Yd.clone(L.uniforms)}else R=S.uniforms;return R}function E(S,y){let R;for(let L=0,N=u.length;L<N;L++){let H=u[L];if(H.cacheKey===y){R=H,++R.usedTimes;break}}return R===void 0&&(R=new $x(i,y,S,r),u.push(R)),R}function T(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:I}}function Zx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||jx),n.length>1&&n.sort(d||xf),s.length>1&&s.sort(d||xf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Kx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new vf,i.set(n,[a])):s>=r.length?(a=new vf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ev=0;function tv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nv(i){let e=new Jx,t=Qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ge,a=new Ge;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,b=0,_=0,v=0,E=0,T=0,A=0;l.sort(tv);for(let S=0,y=l.length;S<y;S++){let R=l[S],L=R.color,N=R.intensity,H=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);A++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=V,f++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(L).multiplyScalar(N),V.distance=H,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[x]=V;let j=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,j.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[x]=j.matrix,R.castShadow){let W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=F,v++}x++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(L).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=V,m++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let j=R.shadow,W=t.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=V,g++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==_||I.numSpotShadows!==v||I.numSpotMaps!==E||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=_,I.numSpotShadows=v,I.numSpotMaps=E,I.numLightProbes=A,n.version=ev++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function yf(i){let e=new nv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function iv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new yf(i),e.set(s,[o])):r>=a.length?(o=new yf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
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
}`;function av(i,e,t){let n=new nr,s=new ze,r=new ze,a=new it,o=new so({depthPacking:Fd}),c=new ro,l={},u=t.maxTextureSize,h={[kn]:an,[an]:kn,[Rn]:Rn},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ot;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ei),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=p!==si&&this.type===si,H=p===si&&this.type!==si;for(let F=0,V=T.length;F<V;F++){let j=T[F],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let oe=W.getFrameExtents();if(s.multiply(oe),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,W.mapSize.y=r.y)),W.map===null||N===!0||H===!0){let be=this.type!==si?{minFilter:qt,magFilter:qt}:{};W.map!==null&&W.map.dispose(),W.map=new Kn(s.x,s.y,be),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let le=W.getViewportCount();for(let be=0;be<le;be++){let ke=W.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),L.viewport(a),W.updateMatrices(j,be),n=W.getFrustum(),v(A,I,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===si&&b(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function b(T,A){let I=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,f,x,null)}function _(T,A,I,S){let y=null,R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=I.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=y.uuid,N=A.uuid,H=l[L];H===void 0&&(H={},l[L]=H);let F=H[N];F===void 0&&(F=y.clone(),H[N]=F,A.addEventListener("dispose",E)),y=F}if(y.visible=A.visible,y.wireframe=A.wireframe,S===si?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=i.properties.get(y);L.light=I}return y}function v(T,A,I,S,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let N=e.update(T),H=T.material;if(Array.isArray(H)){let F=N.groups;for(let V=0,j=F.length;V<j;V++){let W=F[V],oe=H[W.materialIndex];if(oe&&oe.visible){let le=_(T,oe,S,y);T.onBeforeShadow(i,T,A,I,N,le,W),i.renderBufferDirect(I,null,N,le,T,W),T.onAfterShadow(i,T,A,I,N,le,W)}}}else if(H.visible){let F=_(T,H,S,y);T.onBeforeShadow(i,T,A,I,N,F,null),i.renderBufferDirect(I,null,N,F,T,null),T.onAfterShadow(i,T,A,I,N,F,null)}}let L=T.children;for(let N=0,H=L.length;N<H;N++)v(L[N],A,I,S,y)}function E(T){T.target.removeEventListener("dispose",E);for(let I in l){let S=l[I],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var ov={[mo]:go,[_o]:yo,[xo]:bo,[ls]:vo,[go]:mo,[yo]:_o,[bo]:xo,[vo]:ls};function cv(i,e){function t(){let U=!1,re=new it,ce=null,_e=new it(0,0,0,0);return{setMask:function(ne){ce!==ne&&!U&&(i.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){U=ne},setClear:function(ne,Z,ye,He,mt){mt===!0&&(ne*=He,Z*=He,ye*=He),re.set(ne,Z,ye,He),_e.equals(re)===!1&&(i.clearColor(ne,Z,ye,He),_e.copy(re))},reset:function(){U=!1,ce=null,_e.set(-1,0,0,0)}}}function n(){let U=!1,re=!1,ce=null,_e=null,ne=null;return{setReversed:function(Z){if(re!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=Z;let He=ne;ne=null,this.setClear(He)}},getReversed:function(){return re},setTest:function(Z){Z?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Z){ce!==Z&&!U&&(i.depthMask(Z),ce=Z)},setFunc:function(Z){if(re&&(Z=ov[Z]),_e!==Z){switch(Z){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Z}},setLocked:function(Z){U=Z},setClear:function(Z){ne!==Z&&(re&&(Z=1-Z),i.clearDepth(Z),ne=Z)},reset:function(){U=!1,ce=null,_e=null,ne=null,re=!1}}}function s(){let U=!1,re=null,ce=null,_e=null,ne=null,Z=null,ye=null,He=null,mt=null;return{setTest:function(at){U||(at?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(at){re!==at&&!U&&(i.stencilMask(at),re=at)},setFunc:function(at,hi,$n){(ce!==at||_e!==hi||ne!==$n)&&(i.stencilFunc(at,hi,$n),ce=at,_e=hi,ne=$n)},setOp:function(at,hi,$n){(Z!==at||ye!==hi||He!==$n)&&(i.stencilOp(at,hi,$n),Z=at,ye=hi,He=$n)},setLocked:function(at){U=at},setClear:function(at){mt!==at&&(i.clearStencil(at),mt=at)},reset:function(){U=!1,re=null,ce=null,_e=null,ne=null,Z=null,ye=null,He=null,mt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,_=null,v=null,E=null,T=null,A=new Pe(0,0,0),I=0,S=!1,y=null,R=null,L=null,N=null,H=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=j>=2);let oe=null,le={},be=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),st=new it().fromArray(be),pt=new it().fromArray(ke);function tt(U,re,ce,_e){let ne=new Uint8Array(4),Z=i.createTexture();i.bindTexture(U,Z),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<ce;ye++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Z}let Y={};Y[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ls),Fe(!1),Me(Al),ee(i.CULL_FACE),xt(Ei);function ee(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function xe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Be(U,re){return h[U]!==re?(i.bindFramebuffer(U,re),h[U]=re,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=re),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(U,re){let ce=f,_e=!1;if(U){ce=d.get(re),ce===void 0&&(ce=[],d.set(re,ce));let ne=U.textures;if(ce.length!==ne.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ye=ne.length;Z<ye;Z++)ce[Z]=i.COLOR_ATTACHMENT0+Z;ce.length=ne.length,_e=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ce)}function Qe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Kt={[Fi]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};Kt[ud]=i.MIN,Kt[hd]=i.MAX;let P={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[yd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[vd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(U,re,ce,_e,ne,Z,ye,He,mt,at){if(U===Ei){x===!0&&(xe(i.BLEND),x=!1);return}if(x===!1&&(ee(i.BLEND),x=!0),U!==od){if(U!==m||at!==S){if((p!==Fi||v!==Fi)&&(i.blendEquation(i.FUNC_ADD),p=Fi,v=Fi),at)switch(U){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,_=null,E=null,T=null,A.set(0,0,0),I=0,m=U,S=at}return}ne=ne||re,Z=Z||ce,ye=ye||_e,(re!==p||ne!==v)&&(i.blendEquationSeparate(Kt[re],Kt[ne]),p=re,v=ne),(ce!==b||_e!==_||Z!==E||ye!==T)&&(i.blendFuncSeparate(P[ce],P[_e],P[Z],P[ye]),b=ce,_=_e,E=Z,T=ye),(He.equals(A)===!1||mt!==I)&&(i.blendColor(He.r,He.g,He.b,mt),A.copy(He),I=mt),m=U,S=!1}function Ve(U,re){U.side===Rn?xe(i.CULL_FACE):ee(i.CULL_FACE);let ce=U.side===an;re&&(ce=!ce),Fe(ce),U.blending===cs&&U.transparent===!1?xt(Ei):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let _e=U.stencilWrite;o.setTest(_e),_e&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Me(U){U!==rd?(ee(i.CULL_FACE),U!==R&&(U===Al?i.cullFace(i.BACK):U===ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),R=U}function vt(U){U!==L&&(V&&i.lineWidth(U),L=U)}function Se(U,re,ce){U?(ee(i.POLYGON_OFFSET_FILL),(N!==re||H!==ce)&&(i.polygonOffset(re,ce),N=re,H=ce)):xe(i.POLYGON_OFFSET_FILL)}function $e(U){U?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ht(U){U===void 0&&(U=i.TEXTURE0+F-1),oe!==U&&(i.activeTexture(U),oe=U)}function Rt(U,re,ce){ce===void 0&&(oe===null?ce=i.TEXTURE0+F-1:ce=oe);let _e=le[ce];_e===void 0&&(_e={type:void 0,texture:void 0},le[ce]=_e),(_e.type!==U||_e.texture!==re)&&(oe!==ce&&(i.activeTexture(ce),oe=ce),i.bindTexture(U,re||Y[U]),_e.type=U,_e.texture=re)}function C(){let U=le[oe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function De(U){pt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),pt.copy(U))}function Te(U,re){let ce=l.get(re);ce===void 0&&(ce=new WeakMap,l.set(re,ce));let _e=ce.get(U);_e===void 0&&(_e=i.getUniformBlockIndex(re,U.name),ce.set(U,_e))}function de(U,re){let _e=l.get(re).get(U);c.get(re)!==_e&&(i.uniformBlockBinding(re,_e,U.__bindingPointIndex),c.set(re,_e))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,le={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,b=null,_=null,v=null,E=null,T=null,A=new Pe(0,0,0),I=0,S=!1,y=null,R=null,L=null,N=null,H=null,st.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Be,drawBuffers:Re,useProgram:Qe,setBlending:xt,setMaterial:Ve,setFlipSided:Fe,setCullFace:Me,setLineWidth:vt,setPolygonOffset:Se,setScissorTest:$e,activeTexture:Ht,bindTexture:Rt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:we,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:de,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:Ae,scissor:pe,viewport:De,reset:Xe}}function lv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):Ys("canvas")}function x(C,M,z){let q=1,Q=Rt(C);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(q*Q.width),Ae=Math.floor(q*Q.height);h===void 0&&(h=g($,Ae));let ae=M?g($,Ae):h;return ae.width=$,ae.height=Ae,ae.getContext("2d").drawImage(C,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Ae+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,M,z,q,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),M===i.RGBA){let Ae=Q?Ir:Je.getTransfer(q);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Ae===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(C,M){let z;return C?M===null||M===Gi||M===lr?z=i.DEPTH24_STENCIL8:M===Cn?z=i.DEPTH32F_STENCIL8:M===or&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gi||M===lr?z=i.DEPTH_COMPONENT24:M===Cn?z=i.DEPTH_COMPONENT32F:M===or&&(z=i.DEPTH_COMPONENT16),z}function E(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){let M=C.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&u.delete(M)}function A(C){let M=C.target;M.removeEventListener("dispose",A),y(M)}function I(C){let M=n.get(C);if(M.__webglInit===void 0)return;let z=C.source,q=d.get(z);if(q){let Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(q).length===0&&d.delete(z)}n.remove(C)}function S(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let z=C.source,q=d.get(z);delete q[M.__cacheKey],a.memory.textures--}function y(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=C.textures;for(let q=0,Q=z.length;q<Q;q++){let $=n.get(z[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(C)}let R=0;function L(){R=0}function N(){let C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function H(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function F(C,M){let z=n.get(C);if(C.isVideoTexture&&$e(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,M);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function V(C,M){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function j(C,M){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function W(C,M){let z=n.get(C);if(C.version>0&&z.__version!==C.version){ee(z,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let oe={[jn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},le={[qt]:i.NEAREST,[wo]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[ar]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},be={[Bd]:i.NEVER,[Wd]:i.ALWAYS,[kd]:i.LESS,[Gl]:i.LEQUAL,[zd]:i.EQUAL,[Gd]:i.GEQUAL,[Hd]:i.GREATER,[Vd]:i.NOTEQUAL};function ke(C,M){if(M.type===Cn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===ar||M.magFilter===xs||M.magFilter===Vn||M.minFilter===rn||M.minFilter===ar||M.minFilter===xs||M.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==xs&&M.minFilter!==Vn||M.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(C,M){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));let q=M.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let $=H(M);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[$].usedTimes++;let Ae=Q[C.__cacheKey];Ae!==void 0&&(Q[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(M)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return z}function pt(C,M,z){return Math.floor(Math.floor(C/z)/M)}function tt(C,M,z,q){let $=C.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,q,M.data);else{$.sort((se,pe)=>se.start-pe.start);let Ae=0;for(let se=1;se<$.length;se++){let pe=$[Ae],De=$[se],Te=pe.start+pe.count,de=pt(De.start,M.width,4),Xe=pt(pe.start,M.width,4);De.start<=Te+1&&de===Xe&&pt(De.start+De.count-1,M.width,4)===de?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++Ae,$[Ae]=De)}$.length=Ae+1;let ae=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let se=0,pe=$.length;se<pe;se++){let De=$[se],Te=Math.floor(De.start/4),de=Math.ceil(De.count/4),Xe=Te%M.width,U=Math.floor(Te/M.width),re=de,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Xe,U,re,ce,z,q,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Y(C,M,z){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let Q=st(C,M),$=M.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+z);let Ae=n.get($);if($.version!==Ae.__version||Q===!0){t.activeTexture(i.TEXTURE0+z);let ae=Je.getPrimaries(Je.workingColorSpace),Ee=M.colorSpace===Ti?null:Je.getPrimaries(M.colorSpace),we=M.colorSpace===Ti||ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=x(M.image,!1,s.maxTextureSize);se=Ht(M,se);let pe=r.convert(M.format,M.colorSpace),De=r.convert(M.type),Te=_(M.internalFormat,pe,De,M.colorSpace,M.isVideoTexture);ke(q,M);let de,Xe=M.mipmaps,U=M.isVideoTexture!==!0,re=Ae.__version===void 0||Q===!0,ce=$.dataReady,_e=E(M,se);if(M.isDepthTexture)Te=v(M.format===ur,M.type),re&&(U?t.texStorage2D(i.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,pe,De,null));else if(M.isDataTexture)if(Xe.length>0){U&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Te,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)de=Xe[ne],U?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,pe,De,de.data):t.texImage2D(i.TEXTURE_2D,ne,Te,de.width,de.height,0,pe,De,de.data);M.generateMipmaps=!1}else U?(re&&t.texStorage2D(i.TEXTURE_2D,_e,Te,se.width,se.height),ce&&tt(M,se,pe,De)):t.texImage2D(i.TEXTURE_2D,0,Te,se.width,se.height,0,pe,De,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Te,Xe[0].width,Xe[0].height,se.depth);for(let ne=0,Z=Xe.length;ne<Z;ne++)if(de=Xe[ne],M.format!==yn)if(pe!==null)if(U){if(ce)if(M.layerUpdates.size>0){let ye=jl(de.width,de.height,M.format,M.type);for(let He of M.layerUpdates){let mt=de.data.subarray(He*ye/de.data.BYTES_PER_ELEMENT,(He+1)*ye/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,He,de.width,de.height,1,pe,mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,pe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Te,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,se.depth,pe,De,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Te,de.width,de.height,se.depth,0,pe,De,de.data)}else{U&&re&&t.texStorage2D(i.TEXTURE_2D,_e,Te,Xe[0].width,Xe[0].height);for(let ne=0,Z=Xe.length;ne<Z;ne++)de=Xe[ne],M.format!==yn?pe!==null?U?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Te,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,de.width,de.height,pe,De,de.data):t.texImage2D(i.TEXTURE_2D,ne,Te,de.width,de.height,0,pe,De,de.data)}else if(M.isDataArrayTexture)if(U){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Te,se.width,se.height,se.depth),ce)if(M.layerUpdates.size>0){let ne=jl(se.width,se.height,M.format,M.type);for(let Z of M.layerUpdates){let ye=se.data.subarray(Z*ne/se.data.BYTES_PER_ELEMENT,(Z+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,pe,De,ye)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,De,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,pe,De,se.data);else if(M.isData3DTexture)U?(re&&t.texStorage3D(i.TEXTURE_3D,_e,Te,se.width,se.height,se.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,De,se.data)):t.texImage3D(i.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,pe,De,se.data);else if(M.isFramebufferTexture){if(re)if(U)t.texStorage2D(i.TEXTURE_2D,_e,Te,se.width,se.height);else{let ne=se.width,Z=se.height;for(let ye=0;ye<_e;ye++)t.texImage2D(i.TEXTURE_2D,ye,Te,ne,Z,0,pe,De,null),ne>>=1,Z>>=1}}else if(Xe.length>0){if(U&&re){let ne=Rt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,_e,Te,ne.width,ne.height)}for(let ne=0,Z=Xe.length;ne<Z;ne++)de=Xe[ne],U?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe,De,de):t.texImage2D(i.TEXTURE_2D,ne,Te,pe,De,de);M.generateMipmaps=!1}else if(U){if(re){let ne=Rt(se);t.texStorage2D(i.TEXTURE_2D,_e,Te,ne.width,ne.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,De,se)}else t.texImage2D(i.TEXTURE_2D,0,Te,pe,De,se);m(M)&&p(q),Ae.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ee(C,M,z){if(M.image.length!==6)return;let q=st(C,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let $=n.get(Q);if(Q.version!==$.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let Ae=Je.getPrimaries(Je.workingColorSpace),ae=M.colorSpace===Ti?null:Je.getPrimaries(M.colorSpace),Ee=M.colorSpace===Ti||Ae===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let we=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!we&&!se?pe[Z]=x(M.image[Z],!0,s.maxCubemapSize):pe[Z]=se?M.image[Z].image:M.image[Z],pe[Z]=Ht(M,pe[Z]);let De=pe[0],Te=r.convert(M.format,M.colorSpace),de=r.convert(M.type),Xe=_(M.internalFormat,Te,de,M.colorSpace),U=M.isVideoTexture!==!0,re=$.__version===void 0||q===!0,ce=Q.dataReady,_e=E(M,De);ke(i.TEXTURE_CUBE_MAP,M);let ne;if(we){U&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,De.width,De.height);for(let Z=0;Z<6;Z++){ne=pe[Z].mipmaps;for(let ye=0;ye<ne.length;ye++){let He=ne[ye];M.format!==yn?Te!==null?U?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,He.width,He.height,Te,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,He.width,He.height,Te,de,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Xe,He.width,He.height,0,Te,de,He.data)}}}else{if(ne=M.mipmaps,U&&re){ne.length>0&&_e++;let Z=Rt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){U?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Te,de,pe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,pe[Z].width,pe[Z].height,0,Te,de,pe[Z].data);for(let ye=0;ye<ne.length;ye++){let mt=ne[ye].image[Z].image;U?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,mt.width,mt.height,Te,de,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Xe,mt.width,mt.height,0,Te,de,mt.data)}}else{U?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,de,pe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Te,de,pe[Z]);for(let ye=0;ye<ne.length;ye++){let He=ne[ye];U?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Te,de,He.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Xe,Te,de,He.image[Z])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function xe(C,M,z,q,Q,$){let Ae=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),Ee=_(z.internalFormat,Ae,ae,z.colorSpace),we=n.get(M),se=n.get(z);if(se.__renderTarget=M,!we.__hasExternalTextures){let pe=Math.max(1,M.width>>$),De=Math.max(1,M.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,Ee,pe,De,M.depth,0,Ae,ae,null):t.texImage2D(Q,$,Ee,pe,De,0,Ae,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Se(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,se.__webglTexture,0,vt(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,se.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(C,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,$=v(M.stencilBuffer,Q),Ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=vt(M);Se(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{let q=M.textures;for(let Q=0;Q<q.length;Q++){let $=q[Q],Ae=r.convert($.format,$.colorSpace),ae=r.convert($.type),Ee=_($.internalFormat,Ae,ae,$.colorSpace),we=vt(M);z&&Se(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Ee,M.width,M.height):Se(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);let Q=q.__webglTexture,$=vt(M);if(M.depthTexture.format===qs)Se(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(M.depthTexture.format===ur)Se(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Qe(C){let M=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=C.texture.mipmaps;q&&q.length>0?Re(M.__webglFramebuffer[0],C):Re(M.__webglFramebuffer,C)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),Be(M.__webglDepthbuffer[q],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Be(M.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(C,M,z){let q=n.get(C);M!==void 0&&xe(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Qe(C)}function P(C){let M=C.texture,z=n.get(C),q=n.get(M);C.addEventListener("dispose",A);let Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)z.__webglFramebuffer[ae][Ee]=i.createFramebuffer()}else z.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)z.__webglFramebuffer[ae]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ae=0,Ee=Q.length;ae<Ee;ae++){let we=n.get(Q[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Se(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){let Ee=Q[ae];z.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);let we=r.convert(Ee.format,Ee.colorSpace),se=r.convert(Ee.type),pe=_(Ee.internalFormat,we,se,Ee.colorSpace,C.isXRRenderTarget===!0),De=vt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ke(i.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)xe(z.__webglFramebuffer[ae][Ee],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else xe(z.__webglFramebuffer[ae],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,Ee=Q.length;ae<Ee;ae++){let we=Q[ae],se=n.get(we),pe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,se.__webglTexture),ke(pe,we),xe(z.__webglFramebuffer,C,we,i.COLOR_ATTACHMENT0+ae,pe,0),m(we)&&p(pe)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),ke(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)xe(z.__webglFramebuffer[Ee],C,M,i.COLOR_ATTACHMENT0,ae,Ee);else xe(z.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,ae,0);m(M)&&p(ae),t.unbindTexture()}C.depthBuffer&&Qe(C)}function xt(C){let M=C.textures;for(let z=0,q=M.length;z<q;z++){let Q=M[z];if(m(Q)){let $=b(C),Ae=n.get(Q).__webglTexture;t.bindTexture($,Ae),p($),t.unbindTexture()}}}let Ve=[],Fe=[];function Me(C){if(C.samples>0){if(Se(C)===!1){let M=C.textures,z=C.width,q=C.height,Q=i.COLOR_BUFFER_BIT,$=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),ae=M.length>1;if(ae)for(let we=0;we<M.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<M.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let se=n.get(M[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Q,i.NEAREST),c===!0&&(Ve.length=0,Fe.length=0,Ve.push(i.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ve.push($),Fe.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<M.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);let se=n.get(M[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function vt(C){return Math.min(s.maxSamples,C.samples)}function Se(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Ht(C,M){let z=C.colorSpace,q=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Yt&&z!==Ti&&(Je.getTransfer(z)===ct?(q!==yn||Q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Kt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se}function uv(i,e){function t(n,s=Ti){let r,a=Je.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Nl)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===kl)return i.RGB;if(n===yn)return i.RGBA;if(n===qs)return i.DEPTH_COMPONENT;if(n===ur)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===ca||n===la||n===ua||n===ha)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===$o||n===qo||n===Yo||n===Zo||n===jo||n===Ko||n===Jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===tc||n===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ec)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===rc||n===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`,lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hn({vertexShader:hv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new lu,p={},b=t.getContextAttributes(),_=null,v=null,E=[],T=[],A=new ze,I=null,S=new Lt;S.viewport=new it;let y=new Lt;y.viewport=new it;let R=[S,y],L=new fo,N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=E[Y];return ee===void 0&&(ee=new Js,E[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=E[Y];return ee===void 0&&(ee=new Js,E[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=E[Y];return ee===void 0&&(ee=new Js,E[Y]=ee),ee.getHandSpace()};function F(Y){let ee=T.indexOf(Y.inputSource);if(ee===-1)return;let xe=E[ee];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<E.length;Y++){let ee=T[Y];ee!==null&&(T[Y]=null,E[Y].disconnect(ee))}N=null,H=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(_),f=null,d=null,h=null,s=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,Re=null;b.depth&&(Re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=b.stencil?ur:qs,Be=b.stencil?lr:Gi);let Qe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kn(d.textureWidth,d.textureHeight,{format:yn,type:Gn,depthTexture:new $r(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let ee=0;ee<Y.removed.length;ee++){let xe=Y.removed[ee],Be=T.indexOf(xe);Be>=0&&(T[Be]=null,E[Be].disconnect(xe))}for(let ee=0;ee<Y.added.length;ee++){let xe=Y.added[ee],Be=T.indexOf(xe);if(Be===-1){for(let Qe=0;Qe<E.length;Qe++)if(Qe>=T.length){T.push(xe),Be=Qe;break}else if(T[Qe]===null){T[Qe]=xe,Be=Qe;break}if(Be===-1)break}let Re=E[Be];Re&&Re.connect(xe)}}let W=new D,oe=new D;function le(Y,ee,xe){W.setFromMatrixPosition(ee.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);let Be=W.distanceTo(oe),Re=ee.projectionMatrix.elements,Qe=xe.projectionMatrix.elements,Kt=Re[14]/(Re[10]-1),P=Re[14]/(Re[10]+1),xt=(Re[9]+1)/Re[5],Ve=(Re[9]-1)/Re[5],Fe=(Re[8]-1)/Re[0],Me=(Qe[8]+1)/Qe[0],vt=Kt*Fe,Se=Kt*Me,$e=Be/(-Fe+Me),Ht=$e*-Fe;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ht),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Rt=Kt+$e,C=P+$e,M=vt-Ht,z=Se+(Be-Ht),q=xt*P/C*Rt,Q=Ve*P/C*Rt;Y.projectionMatrix.makePerspective(M,z,q,Q,Rt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function be(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,xe=Y.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),L.near=y.near=S.near=ee,L.far=y.far=S.far=xe,(N!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,H=L.far),L.layers.mask=Y.layers.mask|6,S.layers.mask=L.layers.mask&3,y.layers.mask=L.layers.mask&5;let Be=Y.parent,Re=L.cameras;be(L,Be);for(let Qe=0;Qe<Re.length;Qe++)be(Re[Qe],Be);Re.length===2?le(L,S,y):L.projectionMatrix.copy(S.projectionMatrix),ke(Y,L,Be)};function ke(Y,ee,xe){xe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ds*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return p[Y]};let st=null;function pt(Y,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Be=!1;xe.length!==L.cameras.length&&(L.cameras.length=0,Be=!0);for(let P=0;P<xe.length;P++){let xt=xe[P],Ve=null;if(f!==null)Ve=f.getViewport(xt);else{let Me=h.getViewSubImage(d,xt);Ve=Me.viewport,P===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let Fe=R[P];Fe===void 0&&(Fe=new Lt,Fe.layers.enable(P),Fe.viewport=new it,R[P]=Fe),Fe.matrix.fromArray(xt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(xt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),P===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Be===!0&&L.cameras.push(Fe)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let P=h.getDepthInformation(xe[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<xe.length;P++){let xt=xe[P].camera;if(xt){let Ve=p[xt];Ve||(Ve=new qr,p[xt]=Ve);let Fe=h.getCameraImage(xt);Ve.sourceTexture=Fe}}}}for(let xe=0;xe<E.length;xe++){let Be=T[xe],Re=E[xe];Be!==null&&Re!==void 0&&Re.update(Be,ee,l||a)}st&&st(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let tt=new bf;tt.setAnimationLoop(pt),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}},bs=new zn,fv=new Ge;function pv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ql(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,v=b.envMapRotation;_&&(m.envMap.value=_,bs.copy(v),bs.x*=-1,bs.y*=-1,bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(fv.makeRotationFromEuler(bs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let v=_.program;n.uniformBlockBinding(b,v)}function l(b,_){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));let E=_.program;n.updateUBOMapping(b,E);let T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function u(b){let _=h();b.__bindingPointIndex=_;let v=i.createBuffer(),E=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],v=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=v.length;T<A;T++){let I=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,y=I.length;S<y;S++){let R=I[S];if(f(R,T,S,E)===!0){let L=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],H=0;for(let F=0;F<N.length;F++){let V=N[F],j=x(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,L+H,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,_,v,E){let T=b.value,A=_+"_"+v;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{let I=E[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return E[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(b){let _=b.uniforms,v=0,E=16;for(let A=0,I=_.length;A<I;A++){let S=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,R=S.length;y<R;y++){let L=S[y],N=Array.isArray(L.value)?L.value:[L.value];for(let H=0,F=N.length;H<F;H++){let V=N[H],j=x(V),W=v%E,oe=W%j.boundary,le=W+oe;v+=oe,le!==0&&E-le<j.storage&&(v+=E-le),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=j.storage}}}let T=v%E;return T>0&&(v+=E-T),b.__size=v,b.__cache={},this}function x(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var hc=class{constructor(e={}){let{canvas:t=Xd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,b=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,E=!1;this._outputColorSpace=wt;let T=0,A=0,I=null,S=-1,y=null,R=new it,L=new it,N=null,H=new Pe(0),F=0,V=t.width,j=t.height,W=1,oe=null,le=null,be=new it(0,0,V,j),ke=new it(0,0,V,j),st=!1,pt=new nr,tt=!1,Y=!1,ee=new Ge,xe=new D,Be=new it,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Kt(){return I===null?W:1}let P=n;function xt(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),P===null){let O="webgl2";if(P=xt(O,w),P===null)throw xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Fe,Me,vt,Se,$e,Ht,Rt,C,M,z,q,Q,$,Ae,ae,Ee,we,se,pe,De,Te,de,Xe;function U(){Ve=new D_(P),Ve.init(),Te=new uv(P,Ve),Fe=new T_(P,Ve,e,Te),Me=new cv(P,Ve),Fe.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),vt=new F_(P),Se=new Zx,$e=new lv(P,Ve,Me,Se,Fe,Te,vt),Ht=new R_(v),Rt=new L_(v),C=new Vm(P),de=new E_(P,C),M=new U_(P,C,vt,de),z=new B_(P,M,C,vt),se=new O_(P,Fe,$e),ae=new A_(Se),q=new Yx(v,Ht,Rt,Ve,Fe,de,ae),Q=new pv(v,Se),$=new Kx,Ae=new iv(Ve),we=new S_(v,Ht,Rt,Me,z,f,c),Ee=new av(v,z,Fe),Xe=new mv(P,vt,Fe,Me),pe=new w_(P,Ve,vt),De=new N_(P,Ve,vt),vt.programs=q.programs,v.capabilities=Fe,v.extensions=Ve,v.properties=Se,v.renderLists=$,v.shadowMap=Ee,v.state=Me,v.info=vt}U();let re=new uu(v,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(V,j,!1))},this.getSize=function(w){return w.set(V,j)},this.setSize=function(w,O,G=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,j=O,t.width=Math.floor(w*W),t.height=Math.floor(O*W),G===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(V*W,j*W).floor()},this.setDrawingBufferSize=function(w,O,G){V=w,j=O,W=G,t.width=Math.floor(w*G),t.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,O,G,X){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,O,G,X),Me.viewport(R.copy(be).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(ke)},this.setScissor=function(w,O,G,X){w.isVector4?ke.set(w.x,w.y,w.z,w.w):ke.set(w,O,G,X),Me.scissor(L.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){Me.setScissorTest(st=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,G=!0){let X=0;if(w){let k=!1;if(I!==null){let ie=I.texture.format;k=ie===Lo||ie===Po||ie===Io}if(k){let ie=I.texture.type,fe=ie===Gn||ie===Gi||ie===or||ie===lr||ie===Ao||ie===Ro,ve=we.getClearColor(),ge=we.getClearAlpha(),Le=ve.r,Oe=ve.g,Ce=ve.b;fe?(g[0]=Le,g[1]=Oe,g[2]=Ce,g[3]=ge,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Le,x[1]=Oe,x[2]=Ce,x[3]=ge,P.clearBufferiv(P.COLOR,0,x))}else X|=P.COLOR_BUFFER_BIT}O&&(X|=P.DEPTH_BUFFER_BIT),G&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),we.dispose(),$.dispose(),Ae.dispose(),Se.dispose(),Ht.dispose(),Rt.dispose(),z.dispose(),de.dispose(),Xe.dispose(),q.dispose(),re.dispose(),re.removeEventListener("sessionstart",$n),re.removeEventListener("sessionend",mh),ts.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=vt.autoReset,O=Ee.enabled,G=Ee.autoUpdate,X=Ee.needsUpdate,k=Ee.type;U(),vt.autoReset=w,Ee.enabled=O,Ee.autoUpdate=G,Ee.needsUpdate=X,Ee.type=k}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Z(w){let O=w.target;O.removeEventListener("dispose",Z),ye(O)}function ye(w){He(w),Se.remove(w)}function He(w){let O=Se.get(w).programs;O!==void 0&&(O.forEach(function(G){q.releaseProgram(G)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,X,k,ie){O===null&&(O=Re);let fe=k.isMesh&&k.matrixWorld.determinant()<0,ve=Fp(w,O,G,X,k);Me.setMaterial(X,fe);let ge=G.index,Le=1;if(X.wireframe===!0){if(ge=M.getWireframeAttribute(G),ge===void 0)return;Le=2}let Oe=G.drawRange,Ce=G.attributes.position,Ke=Oe.start*Le,lt=(Oe.start+Oe.count)*Le;ie!==null&&(Ke=Math.max(Ke,ie.start*Le),lt=Math.min(lt,(ie.start+ie.count)*Le)),ge!==null?(Ke=Math.max(Ke,0),lt=Math.min(lt,ge.count)):Ce!=null&&(Ke=Math.max(Ke,0),lt=Math.min(lt,Ce.count));let At=lt-Ke;if(At<0||At===1/0)return;de.setup(k,X,ve,G,ge);let _t,ht=pe;if(ge!==null&&(_t=C.get(ge),ht=De,ht.setIndex(_t)),k.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*Kt()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(k.isLine){let Ie=X.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*Kt()),k.isLineSegments?ht.setMode(P.LINES):k.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else k.isPoints?ht.setMode(P.POINTS):k.isSprite&&ht.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ie=k._multiDrawStarts,St=k._multiDrawCounts,nt=k._multiDrawCount,gn=ge?C.get(ge).bytesPerElement:1,Is=Se.get(X).currentProgram.getUniforms();for(let _n=0;_n<nt;_n++)Is.setValue(P,"_gl_DrawID",_n),ht.render(Ie[_n]/gn,St[_n])}else if(k.isInstancedMesh)ht.renderInstances(Ke,At,k.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,St=Math.min(G.instanceCount,Ie);ht.renderInstances(Ke,At,St)}else ht.render(Ke,At)};function mt(w,O,G){w.transparent===!0&&w.side===Rn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Ma(w,O,G),w.side=kn,w.needsUpdate=!0,Ma(w,O,G),w.side=Rn):Ma(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),p=Ae.get(G),p.init(O),_.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==G&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ie=k.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){let ve=ie[fe];mt(ve,G,k),X.add(ve)}else mt(ie,G,k),X.add(ie)}),p=_.pop(),X},this.compileAsync=function(w,O,G=null){let X=this.compile(w,O,G);return new Promise(k=>{function ie(){if(X.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&X.delete(fe)}),X.size===0){k(w);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let at=null;function hi(w){at&&at(w)}function $n(){ts.stop()}function mh(){ts.start()}let ts=new bf;ts.setAnimationLoop(hi),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(w){at=w,re.setAnimationLoop(w),w===null?ts.stop():ts.start()},re.addEventListener("sessionstart",$n),re.addEventListener("sessionend",mh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,I),p=Ae.get(w,_.length),p.init(O),_.push(p),ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),pt.setFromProjectionMatrix(ee,On,O.reversedDepth),Y=this.localClippingEnabled,tt=ae.init(this.clippingPlanes,Y),m=$.get(w,b.length),m.init(),b.push(m),re.enabled===!0&&re.isPresenting===!0){let ie=v.xr.getDepthSensingMesh();ie!==null&&zc(ie,O,-1/0,v.sortObjects)}zc(w,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,le),Qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Qe&&we.addToRenderList(m,w),this.info.render.frame++,tt===!0&&ae.beginShadows();let G=p.state.shadowsArray;Ee.render(G,w,O),tt===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ie=O.cameras;if(k.length>0)for(let fe=0,ve=ie.length;fe<ve;fe++){let ge=ie[fe];_h(X,k,w,ge)}Qe&&we.render(w);for(let fe=0,ve=ie.length;fe<ve;fe++){let ge=ie[fe];gh(m,w,ge,ge.viewport)}}else k.length>0&&_h(X,k,w,O),Qe&&we.render(w),gh(m,w,O);I!==null&&A===0&&($e.updateMultisampleRenderTarget(I),$e.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,O),de.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],tt===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function zc(w,O,G,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||pt.intersectsSprite(w)){X&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);let fe=z.update(w),ve=w.material;ve.visible&&m.push(w,fe,ve,G,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||pt.intersectsObject(w))){let fe=z.update(w),ve=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(ve)){let ge=fe.groups;for(let Le=0,Oe=ge.length;Le<Oe;Le++){let Ce=ge[Le],Ke=ve[Ce.materialIndex];Ke&&Ke.visible&&m.push(w,fe,Ke,G,Be.z,Ce)}}else ve.visible&&m.push(w,fe,ve,G,Be.z,null)}}let ie=w.children;for(let fe=0,ve=ie.length;fe<ve;fe++)zc(ie[fe],O,G,X)}function gh(w,O,G,X){let k=w.opaque,ie=w.transmissive,fe=w.transparent;p.setupLightsView(G),tt===!0&&ae.setGlobalState(v.clippingPlanes,G),X&&Me.viewport(R.copy(X)),k.length>0&&ba(k,O,G),ie.length>0&&ba(ie,O,G),fe.length>0&&ba(fe,O,G),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function _h(w,O,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Kn(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?cr:Gn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ie=p.state.transmissionRenderTarget[X.id],fe=X.viewport||R;ie.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);let ve=v.getRenderTarget(),ge=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(H),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Qe&&we.render(G);let Oe=v.toneMapping;v.toneMapping=wi;let Ce=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),tt===!0&&ae.setGlobalState(v.clippingPlanes,X),ba(w,G,X),$e.updateMultisampleRenderTarget(ie),$e.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let lt=0,At=O.length;lt<At;lt++){let _t=O[lt],ht=_t.object,Ie=_t.geometry,St=_t.material,nt=_t.group;if(St.side===Rn&&ht.layers.test(X.layers)){let gn=St.side;St.side=an,St.needsUpdate=!0,xh(ht,G,X,Ie,St,nt),St.side=gn,St.needsUpdate=!0,Ke=!0}}Ke===!0&&($e.updateMultisampleRenderTarget(ie),$e.updateRenderTargetMipmap(ie))}v.setRenderTarget(ve,ge,Le),v.setClearColor(H,F),Ce!==void 0&&(X.viewport=Ce),v.toneMapping=Oe}function ba(w,O,G){let X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ie=w.length;k<ie;k++){let fe=w[k],ve=fe.object,ge=fe.geometry,Le=fe.group,Oe=fe.material;Oe.allowOverride===!0&&X!==null&&(Oe=X),ve.layers.test(G.layers)&&xh(ve,O,G,ge,Oe,Le)}}function xh(w,O,G,X,k,ie){w.onBeforeRender(v,O,G,X,k,ie),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,O,G,X,w,ie),k.transparent===!0&&k.side===Rn&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,v.renderBufferDirect(G,O,X,k,w,ie),k.side=kn,k.needsUpdate=!0,v.renderBufferDirect(G,O,X,k,w,ie),k.side=Rn):v.renderBufferDirect(G,O,X,k,w,ie),w.onAfterRender(v,O,G,X,k,ie)}function Ma(w,O,G){O.isScene!==!0&&(O=Re);let X=Se.get(w),k=p.state.lights,ie=p.state.shadowsArray,fe=k.state.version,ve=q.getParameters(w,k.state,ie,O,G),ge=q.getProgramCacheKey(ve),Le=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?Rt:Ht).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Z),Le=new Map,X.programs=Le);let Oe=Le.get(ge);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===fe)return yh(w,ve),Oe}else ve.uniforms=q.getUniforms(w),w.onBeforeCompile(ve,v),Oe=q.acquireProgram(ve,ge),Le.set(ge,Oe),X.uniforms=ve.uniforms;let Ce=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),yh(w,ve),X.needsLights=Bp(w),X.lightsStateVersion=fe,X.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function vh(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=pr.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function yh(w,O){let G=Se.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Fp(w,O,G,X,k){O.isScene!==!0&&(O=Re),$e.resetTextureUnits();let ie=O.fog,fe=X.isMeshStandardMaterial?O.environment:null,ve=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Yt,ge=(X.isMeshStandardMaterial?Rt:Ht).get(X.envMap||fe),Le=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color,At=wi;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(At=v.toneMapping);let _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=_t!==void 0?_t.length:0,Ie=Se.get(X),St=p.state.lights;if(tt===!0&&(Y===!0||w!==y)){let nn=w===y&&X.id===S;ae.setState(X,w,nn)}let nt=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==St.state.version||Ie.outputColorSpace!==ve||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==ge||X.fog===!0&&Ie.fog!==ie||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Oe||Ie.morphTargets!==Ce||Ie.morphNormals!==Ke||Ie.morphColors!==lt||Ie.toneMapping!==At||Ie.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,Ie.__version=X.version);let gn=Ie.currentProgram;nt===!0&&(gn=Ma(X,O,k));let Is=!1,_n=!1,vr=!1,Et=gn.getUniforms(),En=Ie.uniforms;if(Me.useProgram(gn.program)&&(Is=!0,_n=!0,vr=!0),X.id!==S&&(S=X.id,_n=!0),Is||y!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Et.setValue(P,"projectionMatrix",w.projectionMatrix),Et.setValue(P,"viewMatrix",w.matrixWorldInverse);let cn=Et.map.cameraPosition;cn!==void 0&&cn.setValue(P,xe.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Et.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,_n=!0,vr=!0)}if(k.isSkinnedMesh){Et.setOptional(P,k,"bindMatrix"),Et.setOptional(P,k,"bindMatrixInverse");let nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Et.setValue(P,"boneTexture",nn.boneTexture,$e))}k.isBatchedMesh&&(Et.setOptional(P,k,"batchingTexture"),Et.setValue(P,"batchingTexture",k._matricesTexture,$e),Et.setOptional(P,k,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",k._indirectTexture,$e),Et.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",k._colorsTexture,$e));let wn=G.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&se.update(k,G,gn),(_n||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,Et.setValue(P,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(En.envMap.value=ge,En.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(En.envMapIntensity.value=O.environmentIntensity),_n&&(Et.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&Op(En,vr),ie&&X.fog===!0&&Q.refreshFogUniforms(En,ie),Q.refreshMaterialUniforms(En,X,W,j,p.state.transmissionRenderTarget[w.id]),pr.upload(P,vh(Ie),En,$e)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(pr.upload(P,vh(Ie),En,$e),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Et.setValue(P,"center",k.center),Et.setValue(P,"modelViewMatrix",k.modelViewMatrix),Et.setValue(P,"normalMatrix",k.normalMatrix),Et.setValue(P,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let nn=X.uniformsGroups;for(let cn=0,Hc=nn.length;cn<Hc;cn++){let ns=nn[cn];Xe.update(ns,gn),Xe.bind(ns,gn)}}return gn}function Op(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Bp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,O,G){let X=Se.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Se.get(w.texture).__webglTexture=O,Se.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let G=Se.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};let kp=P.createFramebuffer();this.setRenderTarget=function(w,O=0,G=0){I=w,T=O,A=G;let X=!0,k=null,ie=!1,fe=!1;if(w){let ge=Se.get(w);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(w);else if(ge.__hasExternalTextures)$e.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ce=w.depthTexture;if(ge.__boundDepthTexture!==Ce){if(Ce!==null&&Se.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(w)}}let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);let Oe=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?k=Oe[O][G]:k=Oe[O],ie=!0):w.samples>0&&$e.useMultisampledRTT(w)===!1?k=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[G]:k=Oe,R.copy(w.viewport),L.copy(w.scissor),N=w.scissorTest}else R.copy(be).multiplyScalar(W).floor(),L.copy(ke).multiplyScalar(W).floor(),N=st;if(G!==0&&(k=kp),Me.bindFramebuffer(P.FRAMEBUFFER,k)&&X&&Me.drawBuffers(w,k),Me.viewport(R),Me.scissor(L),Me.setScissorTest(N),ie){let ge=Se.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,G)}else if(fe){let ge=O;for(let Le=0;Le<w.textures.length;Le++){let Oe=Se.get(w.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,G,ge)}}else if(w!==null&&G!==0){let ge=Se.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(w,O,G,X,k,ie,fe,ve=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Me.bindFramebuffer(P.FRAMEBUFFER,ge);try{let Le=w.textures[ve],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&G>=0&&G<=w.height-k&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(O,G,X,k,Te.convert(Oe),Te.convert(Ce),ie))}finally{let Le=I!==null?Se.get(I).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,X,k,ie,fe,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(O>=0&&O<=w.width-X&&G>=0&&G<=w.height-k){Me.bindFramebuffer(P.FRAMEBUFFER,ge);let Le=w.textures[ve],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(O,G,X,k,Te.convert(Oe),Te.convert(Ce),0);let lt=I!==null?Se.get(I).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,lt);let At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $d(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Ke),P.deleteSync(At),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,G=0){let X=Math.pow(2,-G),k=Math.floor(w.image.width*X),ie=Math.floor(w.image.height*X),fe=O!==null?O.x:0,ve=O!==null?O.y:0;$e.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,fe,ve,k,ie),Me.unbindTexture()};let zp=P.createFramebuffer(),Hp=P.createFramebuffer();this.copyTextureToTexture=function(w,O,G=null,X=null,k=0,ie=null){ie===null&&(k!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=k,k=0):ie=0);let fe,ve,ge,Le,Oe,Ce,Ke,lt,At,_t=w.isCompressedTexture?w.mipmaps[ie]:w.image;if(G!==null)fe=G.max.x-G.min.x,ve=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Le=G.min.x,Oe=G.min.y,Ce=G.isBox3?G.min.z:0;else{let wn=Math.pow(2,-k);fe=Math.floor(_t.width*wn),ve=Math.floor(_t.height*wn),w.isDataArrayTexture?ge=_t.depth:w.isData3DTexture?ge=Math.floor(_t.depth*wn):ge=1,Le=0,Oe=0,Ce=0}X!==null?(Ke=X.x,lt=X.y,At=X.z):(Ke=0,lt=0,At=0);let ht=Te.convert(O.format),Ie=Te.convert(O.type),St;O.isData3DTexture?($e.setTexture3D(O,0),St=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($e.setTexture2DArray(O,0),St=P.TEXTURE_2D_ARRAY):($e.setTexture2D(O,0),St=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let nt=P.getParameter(P.UNPACK_ROW_LENGTH),gn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Is=P.getParameter(P.UNPACK_SKIP_PIXELS),_n=P.getParameter(P.UNPACK_SKIP_ROWS),vr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,_t.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);let Et=w.isDataArrayTexture||w.isData3DTexture,En=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let wn=Se.get(w),nn=Se.get(O),cn=Se.get(wn.__renderTarget),Hc=Se.get(nn.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,cn.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hc.__webglFramebuffer);for(let ns=0;ns<ge;ns++)Et&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,k,Ce+ns),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(O).__webglTexture,ie,At+ns)),P.blitFramebuffer(Le,Oe,fe,ve,Ke,lt,fe,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Se.has(w)){let wn=Se.get(w),nn=Se.get(O);Me.bindFramebuffer(P.READ_FRAMEBUFFER,zp),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hp);for(let cn=0;cn<ge;cn++)Et?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wn.__webglTexture,k,Ce+cn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,wn.__webglTexture,k),En?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nn.__webglTexture,ie,At+cn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nn.__webglTexture,ie),k!==0?P.blitFramebuffer(Le,Oe,fe,ve,Ke,lt,fe,ve,P.COLOR_BUFFER_BIT,P.NEAREST):En?P.copyTexSubImage3D(St,ie,Ke,lt,At+cn,Le,Oe,fe,ve):P.copyTexSubImage2D(St,ie,Ke,lt,Le,Oe,fe,ve);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else En?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(St,ie,Ke,lt,At,fe,ve,ge,ht,Ie,_t.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(St,ie,Ke,lt,At,fe,ve,ge,ht,_t.data):P.texSubImage3D(St,ie,Ke,lt,At,fe,ve,ge,ht,Ie,_t):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ie,Ke,lt,fe,ve,ht,Ie,_t.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ie,Ke,lt,_t.width,_t.height,ht,_t.data):P.texSubImage2D(P.TEXTURE_2D,ie,Ke,lt,fe,ve,ht,Ie,_t);P.pixelStorei(P.UNPACK_ROW_LENGTH,nt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Is),P.pixelStorei(P.UNPACK_SKIP_ROWS,_n),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vr),ie===0&&O.generateMipmaps&&P.generateMipmap(St),Me.unbindTexture()},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&$e.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$e.setTextureCube(w,0):w.isData3DTexture?$e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$e.setTexture2DArray(w,0):$e.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var Gt=[{id:"ceo",kind:"space",short:"Mi oficina",name:"Oficina del CEO",sub:"Direcci\xF3n y aprobaciones",accent:"#c9a25e",floor:"walnut",wall:"#efe4d2"},{id:"direction",kind:"department",dept:"Direcci\xF3n estrat\xE9gica",short:"Direcci\xF3n",name:"Direcci\xF3n Estrat\xE9gica",sub:"Prioridades y coordinaci\xF3n",accent:"#b88746",floor:"oak",wall:"#f1e7d6"},{id:"marketing",kind:"department",dept:"Marketing y crecimiento",short:"Marketing",name:"Marketing y Crecimiento",sub:"Estrategia y campa\xF1as",accent:"#2f9e8f",floor:"oak",wall:"#e8efe9"},{id:"content",kind:"department",dept:"Producci\xF3n de contenido",short:"Contenido",name:"Producci\xF3n de Contenido",sub:"Guion, edici\xF3n y medios",accent:"#e08a3c",floor:"oak",wall:"#f3e6d8"},{id:"creative",kind:"space",short:"Estudio",name:"Estudio Creativo y Multimedia",sub:"Grabaci\xF3n y PULSE STUDIO",accent:"#d9653b",floor:"concrete",wall:"#e6e2dc"},{id:"sales",kind:"department",dept:"Ventas y patrocinios",short:"Ventas",name:"Ventas y Patrocinios",sub:"Propuestas y negociaci\xF3n",accent:"#2d4f8a",floor:"walnut",wall:"#e9e6df"},{id:"relations",kind:"department",dept:"Relaciones p\xFAblicas y alianzas",short:"Alianzas",name:"Relaciones P\xFAblicas y Alianzas",sub:"V\xEDnculos profesionales",accent:"#9a7cc4",floor:"oak",wall:"#eee8f1"},{id:"boardroom",kind:"space",short:"Juntas",name:"Sala de Juntas",sub:"Decisiones del CEO",accent:"#5b6b8c",floor:"walnut",wall:"#e7e5e1"},{id:"missions",kind:"space",short:"Misiones",name:"Gesti\xF3n de Misiones",sub:"Etapas y responsables",accent:"#c46a4a",floor:"concrete",wall:"#ece7e0"},{id:"collab",kind:"space",short:"Colaboraci\xF3n",name:"Colaboraci\xF3n entre Departamentos",sub:"Traspasos de misi\xF3n",accent:"#4d9a6a",floor:"oak",wall:"#e8eee6"},{id:"events",kind:"department",dept:"Eventos y experiencias",short:"Eventos",name:"Eventos y Experiencias",sub:"Producci\xF3n y log\xEDstica",accent:"#c4417a",floor:"concrete",wall:"#f1e4ea"},{id:"community",kind:"department",dept:"Comunidad",short:"Comunidad",name:"Comunidad",sub:"Escucha y participaci\xF3n",accent:"#e07a5f",floor:"oak",wall:"#f4e9e1"},{id:"intelligence",kind:"department",dept:"Inteligencia de mercado",short:"Inteligencia",name:"Inteligencia de Mercado",sub:"Investigaci\xF3n y tendencias",accent:"#3a78c2",floor:"concrete",wall:"#e4eaf1"},{id:"finance",kind:"department",dept:"Finanzas y administraci\xF3n",short:"Finanzas",name:"Finanzas y Administraci\xF3n",sub:"Presupuesto y control",accent:"#5d8a4e",floor:"walnut",wall:"#e9ece2"},{id:"technology",kind:"department",dept:"Tecnolog\xEDa y automatizaci\xF3n",short:"Tecnolog\xEDa",name:"Tecnolog\xEDa y Automatizaci\xF3n",sub:"Sistemas y automatizaciones",accent:"#2a9bb5",floor:"concrete",wall:"#e2eaee"},{id:"rest",kind:"space",short:"Descanso",name:"\xC1rea de Descanso",sub:"Caf\xE9 y pausa",accent:"#8a9a5b",floor:"oak",wall:"#efeadf"}],Es=[{id:"a-direction",room:"direction",name:"Ulises",species:"owl",role:"Director de estrategia",portrait:"direction",palette:{body:"#9a6a3a",belly:"#e9d2a8",accent:"#2f4a3a",eye:"#f2a33a",beak:"#e0a93b"},prop:"clipboard"},{id:"a-marketing",room:"marketing",name:"Kiki",species:"hummingbird",role:"Estratega de crecimiento",portrait:"marketing",palette:{body:"#1f9e86",belly:"#f2efe1",accent:"#1b6b4f",eye:"#3a2a1a",beak:"#2b2b2b"},prop:"clipboard"},{id:"a-content",room:"content",name:"M\xEDa",species:"cat",role:"Productora de contenido",portrait:"content",palette:{body:"#e8953a",belly:"#fbe7c6",accent:"#2b2b2b",eye:"#5aa04a",beak:"#e57f8a"},prop:"camera"},{id:"a-sales",room:"sales",name:"Rocco",species:"raccoon",role:"Ejecutivo de patrocinios",portrait:"sales",palette:{body:"#8a7764",belly:"#e9e0d2",accent:"#22355e",eye:"#2b1d12",beak:"#2b2b2b"},prop:"briefcase"},{id:"a-relations",room:"relations",name:"Lila",species:"bunny",role:"Enlace de alianzas",portrait:"relations",palette:{body:"#c9b8e6",belly:"#f6f1fb",accent:"#7d5aa8",eye:"#6b4aa8",beak:"#e6a3b8"},prop:"book"},{id:"a-events",room:"events",name:"Luz",species:"moth",role:"Productora de experiencias",portrait:"events",palette:{body:"#b8325e",belly:"#fbeaea",accent:"#e86aa0",eye:"#2b1020",beak:"#2b1020"},prop:"glowstick"},{id:"a-community",room:"community",name:"Cata",species:"capybara",role:"Anfitriona de comunidad",portrait:"community",palette:{body:"#a87650",belly:"#c99a72",accent:"#ef7f63",eye:"#2b1d12",beak:"#5a3a26"},prop:"tablet"},{id:"a-intelligence",room:"intelligence",name:"Iris",species:"owl",role:"Analista de mercado",portrait:"intelligence",palette:{body:"#5f8fd0",belly:"#e9f0fb",accent:"#26324a",eye:"#f2a33a",beak:"#e0a93b"},prop:"tablet",glasses:!0},{id:"a-finance",room:"finance",name:"Tom\xE1s",species:"turtle",role:"Controlador financiero",portrait:"finance",palette:{body:"#7fae63",belly:"#d9e6b8",accent:"#2f4a2a",eye:"#2b1d12",beak:"#6b8f4e",shell:"#8a5a2f"},prop:"book",glasses:!0},{id:"a-technology",room:"technology",name:"Bit",species:"robot",role:"Ingeniero de automatizaci\xF3n",portrait:"technology",palette:{body:"#2f7f9a",belly:"#d7e6ea",accent:"#f08a24",eye:"#6ff5ff",beak:"#1a2a33"},prop:"tablet"}],ai=i=>Gt.find(e=>e.id===i),du=i=>Gt.findIndex(e=>e.id===i);var Xi=i=>Es.find(e=>ai(e.room)?.dept===i)||null;var $i=.84,fn=-3.6,gv=3.4,ft=6.6*$i,Tf=3.1*$i,Wt=fn*$i,gt=gv*$i,Zt=gt+1.7,pc=.75,mc=2.5,qi=1.35,gr=.42,_v=i=>i*ft,K=(i,e,t,n=0,s={})=>({m:i,x:e,z:t,r:n,...s}),Ne=(i,e,t,n=0,s={})=>({p:i,x:e,z:t,r:n,...s});function xv(i,e,t={}){let n=[K("desk",i,e,0,{hot:"desk"}),K("chairDesk",i,e-.62,0,{block:!1,seat:!0,tint:"#3f3b38"}),K("laptop",i-.1,e-.05,180,{onTop:.76,block:!1}),Ne("statusLamp",i+.55,e-.02,0,{onTop:.76,block:!1}),Ne("tray",i-.56,e+.04,0,{onTop:.76,block:!1,hot:"tray"})];return t.second&&n.push(K("computerScreen",i+.2,e-.12,180,{onTop:.76,block:!1})),n}function fc(i){return[Ne("window",-1.6,fn,0,{w:1.6,h:1,y:1}),Ne("sign",-1.6,fn,0,{w:1.7,h:.42,y:2.08,text:i.short,accent:i.accent})]}var fu={x:-.9,z:-2.1},vv=(i=fu)=>({x:i.x,z:i.z-.62,face:0,pose:"sit"});function oi(i,e,t){let n=[...xv(fu.x,fu.z,{second:i.id==="technology"||i.id==="intelligence"}),Ne("board",1.55,fn,0,{w:1.8,h:1.05,y:1.05,hot:"board",accent:i.accent}),K("bookcaseClosedWide",-2.75,-.9,90,{hot:"shelf"}),K("pottedPlant",-2.75,-2.95,0),K("pottedPlant",2.8,2.9,0),K("lampRoundFloor",2.85,-3.2,0,{block:!0}),...fc(i),...e],s={desk:vv(),board:{x:1.55,z:-2.75,face:180,pose:"stand"},shelf:{x:-2.05,z:-.9,face:-90,pose:"stand"},plant:{x:2.25,z:2.35,face:45,pose:"stand"},window:{x:-1.6,z:-3.05,face:180,pose:"stand"},door:{x:0,z:2.85,face:0,pose:"stand"},...t};return{items:n,stations:s}}var yv={direction:i=>oi(i,[K("rugRectangle",.9,.9,0,{block:!1}),K("tableGlass",.9,.9,0),K("chairCushion",.45,1.65,180,{fabric:!0}),K("chairCushion",1.35,1.65,180,{fabric:!0}),K("chairCushion",.45,.15,0,{fabric:!0}),K("chairCushion",1.35,.15,0,{fabric:!0}),Ne("globe",-2.6,1.6,0),K("loungeChair",-2.3,2.6,135,{fabric:!0})],{meet:{x:.9,z:2.1,face:180,pose:"stand"}}),marketing:i=>oi(i,[Ne("cardsWall",2.95,-.6,-90,{accent:i.accent}),K("rugRound",.9,1,0,{block:!1}),K("tableRound",.9,1,0),K("stoolBar",.2,1,90,{fabric:!0}),K("stoolBar",1.6,1,-90,{fabric:!0}),K("loungeSofa",-1.9,2.55,0,{fabric:!0}),Ne("easel",2.4,1.6,-60,{accent:i.accent})],{meet:{x:.9,z:1.9,face:180,pose:"stand"},cards:{x:2.3,z:-.6,face:90,pose:"stand"}}),content:i=>oi(i,[Ne("greenScreen",1.6,-2.9,0),Ne("tripod",1.5,-.6,180),Ne("softbox",2.55,-1.3,210),Ne("softbox",.6,-1.4,150),K("loungeChair",1.55,-2.05,0,{fabric:!0}),K("rugRectangle",-1.3,1.5,0,{block:!1}),K("sideTableDrawers",-2.55,2.75,90),K("loungeDesignSofa",-1.2,2.65,0,{fabric:!0})],{board:{x:1.5,z:.05,face:180,pose:"stand"},set:{x:1.55,z:-1.5,face:0,pose:"stand"}}),sales:i=>oi(i,[K("rugRectangle",.8,1,0,{block:!1}),Ne("longTable",.8,1,0,{w:2.2,d:1}),K("chairModernCushion",.2,1.75,180,{fabric:!0}),K("chairModernCushion",1.4,1.75,180,{fabric:!0}),K("chairModernCushion",.2,.25,0,{fabric:!0}),K("chairModernCushion",1.4,.25,0,{fabric:!0}),Ne("podium",2.6,2.6,-30,{accent:i.accent}),K("sideTable",-2.6,2.6,90)],{meet:{x:.8,z:2.25,face:180,pose:"stand"}}),relations:i=>oi(i,[Ne("pressWall",2.95,.4,-90,{accent:i.accent}),K("rugRound",.4,1.2,0,{block:!1}),K("loungeSofa",.4,2.1,180,{fabric:!0}),K("loungeChair",-.75,1,90,{fabric:!0}),K("tableCoffee",.55,1.15,0),K("loungeChair",1.55,1,-90,{fabric:!0})],{press:{x:2.3,z:.4,face:90,pose:"stand"}}),events:i=>oi(i,[Ne("stage",1.3,.6,0,{accent:i.accent}),Ne("balloons",2.75,2.6,0,{accent:i.accent}),Ne("balloons",-2.6,2.7,0,{accent:"#f2c14e"}),K("stoolBar",-.9,1.4,0,{fabric:!0})],{stage:{x:1.3,z:1.35,face:180,pose:"stand"}}),community:i=>oi(i,[K("rugRound",.8,1.2,0,{block:!1}),K("loungeDesignSofa",.8,2.25,180,{fabric:!0}),K("loungeDesignChair",.85,.15,0,{fabric:!0}),K("tableCoffeeGlassSquare",.85,1.2,0),Ne("chatScreen",2.95,-.6,-90,{accent:i.accent}),K("benchCushion",-2.6,2.3,90,{fabric:!0})],{meet:{x:1.9,z:1.2,face:-90,pose:"stand"}}),intelligence:i=>oi(i,[Ne("dataWall",2.95,-.7,-90,{accent:i.accent}),K("rugRectangle",.6,1.2,0,{block:!1}),Ne("longTable",.6,1.2,0,{w:1.9,d:1,map:!0}),K("chairDesk",-.1,2,180),K("chairDesk",1.3,2,180),K("bookcaseOpenLow",-2.8,2.3,90)],{meet:{x:.6,z:.35,face:0,pose:"stand"},wall:{x:2.3,z:-.7,face:90,pose:"stand"}}),finance:i=>oi(i,[Ne("cabinet",2.85,-.4,-90),Ne("cabinet",2.85,.25,-90),Ne("cabinet",2.85,.9,-90),Ne("safe",2.75,2.4,-60),K("rugRectangle",.4,1.4,0,{block:!1}),K("deskCorner",0,1.6,0),K("chairCushion",.5,2.5,180,{fabric:!0})],{files:{x:2.2,z:.25,face:90,pose:"stand"}}),technology:i=>oi(i,[Ne("rack",2.75,-2.9,0),Ne("rack",2.1,-2.9,0),Ne("rack",2.85,-1.6,-90),K("desk",.9,1,180),K("computerScreen",.75,.95,0,{onTop:.76,block:!1}),K("computerScreen",1.15,.95,-15,{onTop:.76,block:!1}),K("chairDesk",.9,1.7,180),K("speakerSmall",-2.7,2.6,45)],{racks:{x:2.1,z:-2.15,face:180,pose:"stand"},bench:{x:.9,z:1.95,face:180,pose:"stand"}}),ceo:i=>({items:[Ne("window",-1.5,fn,0,{w:2.4,h:1.3,y:1.1}),Ne("sign",1.5,fn,0,{w:1.7,h:.5,y:2.05,text:"CEO",accent:i.accent}),K("rugRectangle",-.6,-1.6,0,{block:!1}),Ne("execDesk",-.6,-2,0,{hot:"ceo-desk"}),K("chairDesk",-.6,-2.75,0,{block:!1}),Ne("tray",-1.3,-1.95,0,{onTop:.78,block:!1,hot:"ceo-tray",big:!0}),K("laptop",-.45,-2.1,180,{onTop:.78,block:!1}),K("lampSquareTable",.25,-2.05,0,{onTop:.78,block:!1}),Ne("wallScreen",1.6,fn,0,{w:1.6,h:.9,y:1.15,hot:"ceo-tv",screen:"company"}),K("bookcaseClosedWide",-2.75,.2,90,{hot:"ceo-shelf"}),K("loungeSofa",1.2,1.9,180,{fabric:!0}),K("tableCoffee",1.35,1,0),K("loungeChair",2.55,.6,-90,{fabric:!0}),Ne("door",2.95,-1.4,-90,{hot:"legacy-door",accent:i.accent}),K("pottedPlant",-2.75,-3,0),K("pottedPlant",-2.75,2.85,0),K("pottedPlant",2.8,2.85,0)],stations:{visit:{x:-.6,z:-1.2,face:180,pose:"stand"},sofa:{x:.2,z:1.3,face:90,pose:"stand"}}}),boardroom:i=>{let e=[...fc(i).map(n=>n.p==="window"?{...n,x:-1.7}:n),K("rugRectangle",0,0,0,{block:!1,sx:1.5,sz:1.6}),Ne("longTable",0,0,0,{w:3.6,d:1.3,hot:"board-table"}),Ne("wallScreen",1.6,fn,0,{w:1.5,h:.85,y:1.15,screen:"missions-mini"}),K("pottedPlant",-2.8,-3,0),K("pottedPlant",2.8,2.9,0),K("pottedPlant",-2.8,2.9,0)],t={};return[-1.35,-.45,.45,1.35].forEach((n,s)=>{e.push(K("chairModernCushion",n,-.95,0,{fabric:!0,block:!1})),e.push(K("chairModernCushion",n,.95,180,{fabric:!0,block:!1})),t[`seat${s*2}`]={x:n,z:-1.25,face:0,pose:"stand"},t[`seat${s*2+1}`]={x:n,z:1.3,face:180,pose:"stand"}}),{items:e,stations:t}},missions:i=>({items:[Ne("sign",-1.6,fn,0,{w:1.9,h:.5,y:2.05,text:"Misiones",accent:i.accent}),Ne("missionBoard",.6,fn,0,{w:4.2,h:1.6,y:1.25,hot:"mission-board"}),K("rugRectangle",0,.8,0,{block:!1,sx:1.3}),Ne("longTable",0,.9,0,{w:2.4,d:1.1,hot:"mission-table"}),K("chairDesk",-.7,1.75,180),K("chairDesk",.7,1.75,180),K("chairDesk",-.7,.05,0),K("chairDesk",.7,.05,0),K("pottedPlant",-2.8,-3,0),K("pottedPlant",2.8,2.9,0),K("bookcaseOpenLow",-2.8,2.2,90)],stations:{b0:{x:-1,z:-2.6,face:180,pose:"stand"},b1:{x:.2,z:-2.6,face:180,pose:"stand"},b2:{x:1.4,z:-2.6,face:180,pose:"stand"},b3:{x:2.4,z:-2.6,face:180,pose:"stand"}}}),collab:i=>({items:[...fc(i),Ne("board",1.6,fn,0,{w:1.9,h:1.1,y:1.05,hot:"collab-board",accent:i.accent,kind:"handoffs"}),K("rugRound",-1.25,.35,0,{block:!1,sx:1.25,sz:1.25}),K("tableRound",-1.2,.3,0,{hot:"collab-table",sx:.62,sz:.62}),K("rugRound",1.5,1.35,0,{block:!1,sx:1.25,sz:1.25}),K("tableRound",1.5,1.3,0,{hot:"collab-table",sx:.62,sz:.62}),K("loungeSofa",-1.6,2.7,0,{fabric:!0}),K("pottedPlant",-2.8,-3,0),K("pottedPlant",2.8,-3.1,0),K("pottedPlant",-2.8,2.9,0)],stations:{c0:{x:-1.95,z:.3,face:90,pose:"stand"},c1:{x:-.45,z:.3,face:-90,pose:"stand"},c2:{x:-1.2,z:-.45,face:0,pose:"stand"},c3:{x:-1.2,z:1.05,face:180,pose:"stand"},c4:{x:.75,z:1.3,face:90,pose:"stand"},c5:{x:2.25,z:1.3,face:-90,pose:"stand"},c6:{x:1.5,z:.55,face:0,pose:"stand"},c7:{x:1.5,z:2.05,face:180,pose:"stand"},c8:{x:1,z:-2.7,face:180,pose:"stand"},c9:{x:2.2,z:-2.7,face:180,pose:"stand"}}}),creative:i=>({items:[Ne("sign",-1.7,fn,0,{w:1.9,h:.5,y:2.05,text:"Estudio",accent:i.accent}),Ne("greenScreen",.9,-3,0,{wide:!0}),Ne("tripod",.9,-.2,180,{hot:"studio-cam"}),Ne("softbox",2.5,-1.2,215),Ne("softbox",-.7,-1.2,145),K("loungeDesignChair",.9,-2.2,0,{fabric:!0}),K("desk",-1.9,1.6,90),K("computerScreen",-1.95,1.6,90,{onTop:.76,block:!1}),K("chairDesk",-1.25,1.6,90),Ne("neon",-1.7,fn,0,{y:1.2,accent:i.accent}),K("speakerSmall",2.7,2.6,-30),K("pottedPlant",2.8,1.6,0)],stations:{set:{x:.9,z:-1.5,face:0,pose:"stand"},edit:{x:-1.25,z:1.6,face:-90,pose:"stand"}}}),rest:i=>({items:[...fc(i),Ne("counter",1.2,-3.2,0,{w:3.2,hot:"coffee"}),K("kitchenCoffeeMachine",.6,-3.25,0,{onTop:.92,block:!1,hot:"coffee"}),Ne("cooler",2.85,-1.6,-90),K("stoolBar",.4,-2.3,180,{fabric:!0}),K("stoolBar",1.2,-2.3,180,{fabric:!0}),K("stoolBar",2,-2.3,180,{fabric:!0}),K("rugRound",-1.4,1.4,0,{block:!1,sx:1.7,sz:1.7}),K("loungeSofaLong",-2.35,1.3,90,{fabric:!0}),K("tableCoffee",-1.15,1.45,90),K("loungeChair",-.4,2.4,200,{fabric:!0}),K("pottedPlant",2.8,2.9,0),K("pottedPlant",-2.8,-3,0),K("plantSmall2",-1.1,1.3,0,{onTop:.46,block:!1})],stations:{coffee:{x:.6,z:-2.55,face:180,pose:"stand"},coffee2:{x:1.6,z:-1.7,face:180,pose:"stand"},cooler:{x:2.25,z:-1.6,face:90,pose:"stand"},sofa:{x:-1.5,z:.4,face:0,pose:"stand"},sofa2:{x:-.3,z:1,face:-90,pose:"stand"}}})},bv=new Set(["marketing","sales","events","intelligence","technology"]);function Mv(i){let e=t=>({...t,x:-t.x,r:t.r?-t.r:t.r,face:t.face?-t.face:t.face});return{items:i.items.map(e),stations:Object.fromEntries(Object.entries(i.stations).map(([t,n])=>[t,e(n)]))}}function Af(){return Gt.map((i,e)=>{let t=_v(e),n=yv[i.id](i),s=bv.has(i.id)?Mv(n):n,r=s.items.map(o=>{let c=o.x*$i,l=o.z===fn?Wt:o.z*$i;return{...o,x:c,z:l,room:i.id,wx:t+c,wz:l}}),a=Object.fromEntries(Object.entries(s.stations).map(([o,c])=>[o,{...c,room:i.id,wx:t+c.x*$i,wz:c.z*$i,key:o}]));return{room:i,index:e,cx:t,items:r,stations:a}})}var gc={desk:{title:"Mesa de trabajo",hint:"Encargos activos y resultados"},tray:{title:"Bandeja de revisiones",hint:"Propuestas que esperan tu decisi\xF3n"},board:{title:"Tablero del departamento",hint:"Misiones y etapas asignadas"},shelf:{title:"Archivo de entregables",hint:"Archivos generados por el departamento"},"ceo-desk":{title:"Escritorio del CEO",hint:"Resumen de la empresa"},"ceo-tray":{title:"Bandeja del CEO",hint:"Todas las aprobaciones pendientes"},"ceo-shelf":{title:"Biblioteca de entregables",hint:"Todos los archivos registrados"},"ceo-tv":{title:"Pantalla de la empresa",hint:"Indicadores registrados"},"legacy-door":{title:"Centro anterior",hint:"CRM, automatizaciones y estudio"},"board-table":{title:"Mesa de juntas",hint:"Convocar una misi\xF3n nueva"},"mission-board":{title:"Tablero de misiones",hint:"Etapas, responsables y estado"},"mission-table":{title:"Mesa de coordinaci\xF3n",hint:"Crear o retomar misiones"},"collab-board":{title:"Traspasos",hint:"Aportaciones entre departamentos"},"collab-table":{title:"Mesa de colaboraci\xF3n",hint:"Departamentos trabajando juntos"},"studio-cam":{title:"C\xE1mara del estudio",hint:"PULSE STUDIO (centro anterior)"},coffee:{title:"Cafetera",hint:"Pausa y movimiento ambiental"}};var Sv=58,Ev=-8,pu=26,_c=class{constructor(e,{roomCount:t,onTap:n,onRoomChange:s}){this.container=e,this.roomCount=t,this.onTap=n,this.onRoomChange=s,this.renderer=new hc({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=wt,this.renderer.toneMapping=Mo,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=po,e.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.canvas.setAttribute("aria-hidden","true"),this.scene=new Or,this.camera=new Lt(pu,1,.5,200),this.target=new D(0,0,.7),this.camX=0,this.velX=0,this.goalX=0,this.dragging=!1,this.zoom=1,this.goalZoom=1,this.sheetPx=0,this.sheetGoal=0,this.focusZ=-.45,this.focusGoalZ=-.45,this.focusOffsetX=0,this.focusGoalOffX=0,this.focusY=0,this.focusGoalY=0,this.roomIndex=0;let r=new ta("#fff7ea","#bba58a",1.35);this.scene.add(r);let a=new Vi("#fff0db",2.1);a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.left=-7,a.shadow.camera.right=7,a.shadow.camera.top=7,a.shadow.camera.bottom=-7,a.shadow.camera.near=1,a.shadow.camera.far=40,a.shadow.bias=-6e-4,a.shadow.normalBias=.02,this.scene.add(a,a.target),this.sun=a;let o=new Vi("#dbe8ff",.45);o.position.set(6,5,10),this.scene.add(o),this.raycaster=new aa,this.pointers=new Map,this.bindInput(),this.resize(),window.addEventListener("resize",()=>this.resize()),window.visualViewport?.addEventListener("resize",()=>this.resize())}resize(){let e=this.container.clientWidth,t=this.container.clientHeight;this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.portrait=t>e}distanceFor(){let e=this.portrait?ft*.94:Math.min(ft*2.1,ft*(this.w/this.h)*.85),t=Math.tan(bn.degToRad(pu/2)),n=e/(2*t*this.camera.aspect),s=10.2/(2*t);return Math.max(n,this.portrait?0:s)/this.zoom}worldPerPx(){return 2*this.distanceFor()*Math.tan(bn.degToRad(pu/2))*this.camera.aspect/this.w}goToRoom(e,{instant:t=!1}={}){e=Math.max(0,Math.min(this.roomCount-1,e)),this.goalX=e*ft,t&&(this.camX=this.goalX,this.velX=0),e!==this.roomIndex&&(this.roomIndex=e,this.onRoomChange?.(e))}focus({x:e=null,z:t=null,sheetPx:n=0,zoom:s=null}={}){this.sheetGoal=n,this.focusGoalZ=t??-.45,this.focusGoalOffX=e!=null?Math.max(-2.2,Math.min(2.2,e-this.goalX)):0,this.goalZoom=s||(n?1.15:1),this.focusGoalY=n&&e!=null?.7:0}bindInput(){let e=this.canvas;e.style.touchAction="none",e.addEventListener("pointerdown",n=>{if(e.setPointerCapture?.(n.pointerId),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,t0:performance.now()}),this.pointers.size===1&&(this.dragging=!0,this.dragStartCam=this.camX,this.lastMoveX=n.clientX,this.lastMoveT=performance.now(),this.velX=0,this.moved=!1),this.pointers.size===2){let[s,r]=[...this.pointers.values()];this.pinch0=Math.hypot(s.x-r.x,s.y-r.y),this.zoom0=this.goalZoom,this.moved=!0}}),e.addEventListener("pointermove",n=>{let s=this.pointers.get(n.pointerId);if(!s)return;if(s.x=n.clientX,s.y=n.clientY,this.pointers.size===2){let[a,o]=[...this.pointers.values()],c=Math.hypot(a.x-o.x,a.y-o.y);this.goalZoom=Math.max(.7,Math.min(1.9,this.zoom0*c/this.pinch0));return}let r=n.clientX-s.x0;if((Math.abs(r)>8||Math.abs(n.clientY-s.y0)>8)&&(this.moved=!0),this.dragging&&this.moved){let a=performance.now(),o=this.worldPerPx();this.camX=this.dragStartCam-r*o;let c=Math.max(1,a-this.lastMoveT);this.velX=-(n.clientX-this.lastMoveX)*o/(c/1e3),this.lastMoveX=n.clientX,this.lastMoveT=a,this.goalX=this.camX}});let t=n=>{let s=this.pointers.get(n.pointerId);if(!s||(this.pointers.delete(n.pointerId),this.pointers.size>0))return;this.dragging=!1;let r=performance.now()-s.t0;if(!this.moved&&r<450){this.handleTap(n.clientX,n.clientY);return}let a=this.camX-this.dragStartCam,o=Math.round((this.camX+this.velX*.18)/ft),c=Math.round(this.dragStartCam/ft);o===c&&Math.abs(a)>ft*.12&&(o=c+Math.sign(a)),o=Math.max(c-3,Math.min(c+3,o)),this.goToRoom(o)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{n.preventDefault(),Math.abs(n.deltaX)>Math.abs(n.deltaY)?(this.wheelAcc=(this.wheelAcc||0)+n.deltaX,Math.abs(this.wheelAcc)>60&&(this.goToRoom(this.roomIndex+Math.sign(this.wheelAcc)),this.wheelAcc=0)):this.goalZoom=Math.max(.7,Math.min(1.9,this.goalZoom*(n.deltaY>0?.92:1.08)))},{passive:!1})}handleTap(e,t){let n=this.canvas.getBoundingClientRect();this.onTap?.({x:e-n.left,y:t-n.top,ndc:new ze((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1)})}raycast(e,t){return this.raycaster.setFromCamera(e,this.camera),this.raycaster.intersectObjects(t,!0)}project(e){let t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*this.w,y:(-t.y*.5+.5)*this.h,behind:t.z>1}}update(e){if(!this.dragging){let h=2*Math.sqrt(38),d=38*(this.goalX-this.camX)-h*this.velX;this.velX+=d*e,this.camX+=this.velX*e}let t=1-Math.exp(-6*e);this.zoom+=(this.goalZoom-this.zoom)*t,this.sheetPx+=(this.sheetGoal-this.sheetPx)*t,this.focusZ+=(this.focusGoalZ-this.focusZ)*t,this.focusOffsetX+=(this.focusGoalOffX-this.focusOffsetX)*t,this.focusY+=(this.focusGoalY-this.focusY)*t;let n=Math.max(0,Math.min(this.roomCount-1,Math.round(this.camX/ft)));this.dragging&&n!==this.roomIndex&&(this.roomIndex=n,this.onRoomChange?.(n));let s=this.distanceFor(),r=bn.degToRad(Sv),a=bn.degToRad(Ev);this.target.set(this.camX+this.focusOffsetX,this.focusY,this.focusZ);let o=new D(Math.sin(a)*Math.cos(r),Math.sin(r),Math.cos(a)*Math.cos(r)).multiplyScalar(s);this.camera.position.copy(this.target).add(o),this.camera.lookAt(this.target);let c=this.sheetPx>40?110:0,l=(this.sheetPx-c)*.5+(this.portrait?18:0);l>.5?this.camera.setViewOffset(this.w,this.h,0,l,this.w,this.h):this.camera.clearViewOffset(),this.camera.updateMatrixWorld(),this.sun.position.set(this.target.x-4,12,this.target.z+7),this.sun.target.position.copy(this.target)}render(){this.renderer.render(this.scene,this.camera)}};function mu(i,e){if(e===Hl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===hr||e===da){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===hr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var xc=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Fu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(e);a=Si.resolveURL(l,this.path)}else a=Si.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new rr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Lf){try{a[je.KHR_BINARY_GLTF]=new Ou(e)}catch(h){s&&s(h);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Wu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:a[h]=new yu;break;case je.KHR_DRACO_MESH_COMPRESSION:a[h]=new Bu(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[h]=new ku;break;case je.KHR_MESH_QUANTIZATION:a[h]=new zu;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function wv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vu=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new sa(u),l.distance=h;break;case"spot":l=new ia(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},yu=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){let s=[];e.color=new Pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}},bu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Cu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Du=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Uu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Nu=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Fu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let x=new Ge,m=new D,p=new An,b=new D(1,1,1),_=new Hr(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&b.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,x.compose(m,p,b));for(let v in c)if(v==="_COLOR_0"){let E=c[v];_.instanceColor=new Bi(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);yt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Lf="glTF",pa=12,Rf={JSON:1313821514,BIN:5130562},Ou=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,pa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-pa,r=new DataView(e,pa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Rf.JSON){let l=new Uint8Array(e,pa+a,o);this.content=n.decode(l)}else if(c===Rf.BIN){let l=pa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Vu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Vu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=_r[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},o,l,Yt,d)})})}},ku=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},zu=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},vc=class extends yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,b=1-m,_=p-d+h;for(let v=0;v!==o;v++){let E=a[x+v+o],T=a[x+v+c]*u,A=a[g+v+o],I=a[g+v]*u;r[v]=b*E+_*T+m*A+p*I}return r}},Tv=new An,Hu=class extends vc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Tv.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cf={9728:qt,9729:rn,9984:wo,9985:ar,9986:xs,9987:Vn},If={33071:Yn,33648:$s,10497:jn},gu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Av={CUBICSPLINE:void 0,LINEAR:hs,STEP:us},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),i.DefaultMaterial}function ws(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Iv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Pv(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xu(t.attributes):e=i.indices+":"+xu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xu(i.targets[n]);return e}function xu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Gu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Dv=new Ge,Wu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ea(this.options.manager):this.textureLoader=new ra(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ws(r,o,s),ci(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Si.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=gu[s.type],o=_r[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Dt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=gu[s.type],l=_r[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(b);_||(x=new l(o,p*f,s.count*f/u),_=new Qs(x,f/u),t.cache.add(b,_)),m=new er(_,c,d%f/u,g)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),m=new Dt(x,c,g);if(s.sparse!==void 0){let p=gu.SCALAR,b=_r[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new b(a[1],_,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,I=E.length;A<I;A++){let S=E[A];if(m.setX(S,T[A*c]),c>=2&&m.setY(S,T[A*c+1]),c>=3&&m.setZ(S,T[A*c+2]),c>=4&&m.setW(S,T[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Cf[d.magFilter]||rn,u.minFilter=Cf[d.minFilter]||Vn,u.wrapS=If[d.wrapS]||jn,u.wrapT=If[d.wrapT]||jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Ut(x);m.needsUpdate=!0,d(m)}),t.load(Si.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),ci(h,a),h.userData.mimeType=a.mimeType||Lv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new sr,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ir,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let h=s[je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Yt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rn);let u=r.alphaMode||_u.OPAQUE;if(u===_u.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===_u.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ft&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ft&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ft){let h=r.emissiveFactor;o.emissive=new Pe().setRGB(h[0],h[1],h[2],Yt)}return r.emissiveTexture!==void 0&&a!==Ft&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&ws(s,h,r),h})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Pf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Pv(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Pf(new Ot,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Rv(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=a[f],p,b=l[f];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Br(x,b):new ut(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=mu(p.geometry,da):m.mode===In.TRIANGLE_FAN&&(p.geometry=mu(p.geometry,hr));else if(m.mode===In.LINES)p=new Vr(x,b);else if(m.mode===In.LINE_STRIP)p=new fs(x,b);else if(m.mode===In.LINE_LOOP)p=new Gr(x,b);else if(m.mode===In.POINTS)p=new Wr(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Iv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),m.extensions&&ws(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ws(s,h[0],r),h[0];let d=new Ue;r.extensions&&ws(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(bn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ms(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let _=0,v=d.length;_<v;_++){let E=d[_],T=f[_],A=g[_],I=x[_],S=m[_];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let y=n._createAnimationTracks(E,T,A,I,S);if(y)for(let R=0;R<y.length;R++)p.push(y[R])}let b=new Qr(r,void 0,p);return ci(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Dv)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new tr:l.length>1?u=new Ue:l.length===1?u=l[0]:u=new yt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ci(u,r),r.extensions&&ws(n,u,r),r.matrix!==void 0){let h=new Ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ue;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&ws(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof un||d instanceof Ut)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Yi[r.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Yi[r.path]){case Yi.weights:l=ei;break;case Yi.rotation:l=ti;break;case Yi.translation:case Yi.scale:l=ni;break;default:n.itemSize===1?l=ei:l=ni;break}let u=s.interpolation!==void 0?Av[s.interpolation]:hs,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Yi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Gu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ti?Hu:vc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Uv(i,e,t){let n=e.attributes,s=new Nt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=Gu(_r[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Gu(_r[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new ln;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Pf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Vu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ci(i,e),Uv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Cv(i,e.targets,t):i})}var Nv=2,Xu=["benchCushion","bookcaseClosedWide","bookcaseOpenLow","books","chairCushion","chairDesk","chairModernCushion","computerKeyboard","computerMouse","computerScreen","desk","deskCorner","kitchenCoffeeMachine","lampRoundFloor","lampSquareTable","laptop","loungeChair","loungeDesignChair","loungeDesignSofa","loungeSofa","loungeSofaLong","plantSmall1","plantSmall2","plantSmall3","pottedPlant","rugRectangle","rugRound","sideTable","sideTableDrawers","speakerSmall","stoolBar","tableCoffee","tableCoffeeGlassSquare","tableGlass","tableRound","televisionModern"],ma=new Map,$u=new Map,Fv={wood:"#c4925f",woodDark:"#8f6342",plant:"#5aa86a",metal:"#d9e0e0",metalDark:"#4b5257",metalMedium:"#8c979a",carpet:"#d98c7a",carpetBlue:"#8fa9d9",carpetDarker:"#c98d7d",lamp:"#fff3c4"};function Df(i){let e=i.name||"",t=`${e}|${i.color?.getHexString()}`;if(!$u.has(t)){let n=e==="glass",s=new Bt({color:Fv[e]||i.color,roughness:n?.15:e.startsWith("metal")?.45:.85,metalness:e.startsWith("metal")?.25:0,transparent:n,opacity:n?.55:1});e==="lamp"&&(s.emissive.set("#ffe9a8"),s.emissiveIntensity=.5),s.name=e,$u.set(t,s)}return $u.get(t)}async function Uf(i,e,{bundle:t=null}={}){let n=new xc,s=0,r=null;if(t)try{r=await(await fetch(t)).json()}catch{r=null}let a=o=>{let c=atob(o),l=new Uint8Array(c.length);for(let u=0;u<c.length;u++)l[u]=c.charCodeAt(u);return l.buffer};return await Promise.all(Xu.map(o=>new Promise(c=>{let l=h=>{let d=h.scene;d.scale.setScalar(Nv),d.updateMatrixWorld(!0);let f=new Nt().setFromObject(d),g=f.getCenter(new D),x=new Ue;d.position.set(-g.x,-f.min.y,-g.z),x.add(d),x.traverse(p=>{p.isMesh&&(p.material=Array.isArray(p.material)?p.material.map(Df):Df(p.material),p.castShadow=!0,p.receiveShadow=!0)});let m=f.getSize(new D);ma.set(o,{holder:x,size:m}),s++,e?.(s/Xu.length),c()},u=()=>{s++,e?.(s/Xu.length),c()};r?.[o]?n.parse(a(r[o]),"",l,u):n.load(`${i}/${o}.glb`,l,void 0,u)}))),ma}function Nf(i){return ma.has(i)}function Ff(i){return ma.get(i)?.size||new D(.5,.5,.5)}function Of(i){let e=ma.get(i);return e?e.holder.clone(!0):null}var qu=new Map;function ga(i,e={}){let t=`${i}|${e.emissive||""}|${e.ei||0}|${e.rough??.85}|${e.metal||0}|${e.opacity??1}`;return qu.has(t)||qu.set(t,new Bt({color:i,roughness:e.rough??.85,metalness:e.metal||0,emissive:e.emissive||"#000000",emissiveIntensity:e.ei||0,transparent:(e.opacity??1)<1,opacity:e.opacity??1})),qu.get(t)}var Ai=new Map;function Yu(i,e,t){let n=`b${i}|${e}|${t}`;return Ai.has(n)||Ai.set(n,new Jn(i,e,t)),Ai.get(n)}function Bf(i,e,t,n=12){let s=`c${i}|${e}|${t}|${n}`;return Ai.has(s)||Ai.set(s,new ki(i,e,t,n)),Ai.get(s)}function kf(i,e=12,t=10){let n=`s${i}|${e}|${t}`;return Ai.has(n)||Ai.set(n,new zi(i,e,t)),Ai.get(n)}function As(i,e,t=0,n=0,s=0,r=!0){let a=new ut(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}var me=(i,e,t,n,s,r,a,o)=>As(Yu(i,e,t),typeof n=="string"?ga(n,o):n,s,r,a),Mn=(i,e,t,n,s,r,a,o,c)=>As(Bf(i,e,t,c),typeof n=="string"?ga(n,o):n,s,r,a),yc=(i,e,t,n,s,r)=>As(kf(i),typeof e=="string"?ga(e,r):e,t,n,s),Wn=class{constructor(e,t,n=220){this.canvas=document.createElement("canvas"),this.canvas.width=Math.min(1024,Math.round(e*n)),this.canvas.height=Math.min(512,Math.round(t*n)),this.ctx=this.canvas.getContext("2d"),this.texture=new Xr(this.canvas),this.texture.colorSpace=wt,this.texture.anisotropy=4}commit(){this.texture.needsUpdate=!0}};function Zi(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function li(i,e,t){let n=String(e||"");if(i.measureText(n).width<=t)return n;for(;n.length>1&&i.measureText(n+"\u2026").width>t;)n=n.slice(0,-1);return n+"\u2026"}function Ts(i,e,t,n=!1){let s=n?new Ft({map:i.texture,toneMapped:!1}):new Bt({map:i.texture,roughness:.9}),r=new ut(new Qn(e,t),s);return r.receiveShadow=!n,r}var bc={window({w:i=1.6,h:e=1.1,y:t=1.2}){let n=new Ue,s=new Wn(i,e,120),r=s.ctx,a=s.canvas.width,o=s.canvas.height,c=r.createLinearGradient(0,0,0,o);c.addColorStop(0,"#9fd0ef"),c.addColorStop(.7,"#e7f1ef"),c.addColorStop(1,"#f6e7cf"),r.fillStyle=c,r.fillRect(0,0,a,o),r.fillStyle="rgba(120,150,170,0.45)";for(let h=0;h<9;h++){let d=a/10,f=o*(.25+h*37%30/100);r.fillRect(h*d*1.1,o-f,d*.8,f)}s.commit();let l=Ts(s,i,e,!0);l.position.set(0,t,.03),n.add(l);let u="#f7f3ea";return n.add(me(i+.1,.06,.08,u,0,t+e/2,.04),me(i+.1,.06,.12,u,0,t-e/2,.06)),n.add(me(.06,e,.08,u,-i/2,t,.04),me(.06,e,.08,u,i/2,t,.04),me(.04,e,.06,u,0,t,.04)),{group:n,fp:null}},sign({w:i=1.9,h:e=.5,y:t=2,text:n="",accent:s="#555"}){let r=new Ue,a=new Wn(i,e,260),o=a.ctx,c=a.canvas.width,l=a.canvas.height;o.fillStyle="#fbf8f1",Zi(o,0,0,c,l,26),o.fill(),o.fillStyle=s,o.beginPath(),o.arc(l*.5,l*.5,l*.24,0,Math.PI*2),o.fill(),o.fillStyle="#2b2620",o.font=`700 ${Math.round(l*.46)}px -apple-system, "SF Pro Display", "Segoe UI", sans-serif`,o.textBaseline="middle",o.fillText(li(o,n,c-l*1.2),l*.95,l*.53),a.commit();let u=Ts(a,i,e);return u.position.set(0,t,.03),r.add(u),{group:r,fp:null}},board({w:i=1.8,h:e=1.05,y:t=1.05,accent:n="#777"}){let s=new Ue,r=new Wn(i,e,240),a=Ts(r,i,e);a.position.set(0,t+e/2,.04),s.add(a),s.add(me(i+.08,e+.08,.04,"#d8d2c6",0,t+e/2,.015)),s.add(me(i*.9,.04,.1,"#c9c2b4",0,t-.02,.07));let o=(c,l)=>yc(.025,c,l,t,.1);return s.add(o(n,-.3),o("#2c5d8a",-.18),o("#d9653b",-.06)),{group:s,fp:null,dyn:r,hitBox:[i,e,.2,t+e/2]}},missionBoard({w:i=4.2,h:e=1.6,y:t=1.25}){let n=new Ue,s=new Wn(i,e,240),r=Ts(s,i,e);return r.position.set(0,t+e/2-.4,.062),n.add(r),n.add(me(i+.12,e+.12,.06,"#3a3631",0,t+e/2-.4,.02)),{group:n,fp:null,dyn:s,hitBox:[i,e,.25,t+e/2-.4]}},wallScreen({w:i=1.6,h:e=.9,y:t=1.15}){let n=new Ue,s=new Wn(i,e,240),r=Ts(s,i,e,!0);return r.position.set(0,t+e/2,.062),n.add(r),n.add(me(i+.08,e+.08,.06,"#1d1f24",0,t+e/2,.02)),{group:n,fp:null,dyn:s,hitBox:[i,e,.25,t+e/2]}},chatScreen({accent:i}){return bc.wallScreen({w:1.5,h:.95,y:1,accent:i})},dataWall(){return bc.wallScreen({w:2,h:1,y:1})},cardsWall({accent:i}){let e=new Ue;e.add(me(1.9,1.1,.04,"#c9a77c",0,1.6,.02));let t=[i,"#f2c14e","#e07a5f","#81b29a","#f4f1de","#3d405b"];for(let n=0;n<12;n++){let s=-.75+n%4*.5+n*13%7/100,r=1.95-Math.floor(n/4)*.33,a=me(.36,.24,.012,t[n%t.length],s,r,.05);a.rotation.z=(n*29%11-5)/60,e.add(a)}return{group:e,fp:null}},pressWall({accent:i}){let e=new Ue,t=new Wn(2,1.2,160),n=t.ctx,s=t.canvas.width,r=t.canvas.height;n.fillStyle="#fbf8f3",n.fillRect(0,0,s,r),n.fillStyle=i,n.globalAlpha=.9;for(let o=0;o<4;o++)for(let c=0;c<5;c++)n.font=`700 ${r/8}px sans-serif`,n.fillText("PULSE",c*s/5+o%2*s/10+6,(o+.75)*r/4);t.commit();let a=Ts(t,2,1.2);return a.position.set(0,1.4,.03),e.add(a),{group:e,fp:null}},statusLamp(){let i=new Ue,e=new Bt({color:"#b9b4aa",emissive:"#000000",emissiveIntensity:0,roughness:.4});i.add(Mn(.05,.06,.03,"#3a3631",0,.015,0));let t=As(kf(.045),e,0,.07,0);return i.add(t),{group:i,fp:null,glow:e}},tray({big:i}){let e=new Ue,t=i?.36:.3;e.add(me(t,.035,.24,"#7a5536",0,.018,0));let n=new Ue;return n.name="papers",e.add(n),{group:e,fp:null,papers:n,hitBox:[.5,.35,.45,.12]}},globe(){let i=new Ue;i.add(Mn(.18,.22,.05,"#6b4a2e",0,.025,0),Mn(.02,.02,.62,"#6b4a2e",0,.33,0));let e=yc(.24,"#4f8fbf",0,.86,0);i.add(e);let t=yc(.243,"#7fb069",0,.86,0,{opacity:.85});return t.scale.set(1,.6,.7),i.add(t),{group:i,fp:[.5,.5],anim:n=>{e.rotation.y=n*.3,t.rotation.y=n*.3}}},easel({accent:i}){let e=new Ue,t=(n,s)=>{let r=me(.04,1.5,.04,"#8a6a48",n,.75,0);return r.rotation.z=s,r};return e.add(t(-.25,.12),t(.25,-.12)),e.add(me(.8,.6,.03,"#fbf8f1",0,1.15,.05)),e.add(me(.5,.08,.035,i,0,1.28,.06),me(.36,.06,.035,"#f2c14e",-.07,1.14,.06),me(.56,.05,.035,"#3d405b",0,1.02,.06)),{group:e,fp:[.7,.5]}},greenScreen({wide:i}){let e=new Ue,t=i?3.2:2.2;e.add(me(.05,2.3,.05,"#2b2b2b",-t/2,1.15,0),me(.05,2.3,.05,"#2b2b2b",t/2,1.15,0),me(t+.05,.05,.05,"#2b2b2b",0,2.3,0));let n=me(t-.05,2.1,.02,"#3fbf5a",0,1.2,.02);e.add(n);let s=me(t-.05,.02,1.1,"#3fbf5a",0,.01,.55);return s.castShadow=!1,e.add(s),{group:e,fp:[t,.3]}},tripod(){let i=new Ue;for(let t=0;t<3;t++){let n=t*Math.PI*2/3,s=me(.03,1.15,.03,"#222",Math.sin(n)*.17,.55,Math.cos(n)*.17);s.rotation.set(Math.cos(n)*.3,0,-Math.sin(n)*.3),i.add(s)}i.add(me(.3,.2,.18,"#1d1d1d",0,1.18,0),Mn(.07,.07,.16,"#111",0,1.18,.15),me(.06,.06,.06,"#e33",.1,1.3,0));let e=i.children[i.children.length-2];return e.rotation.x=Math.PI/2,{group:i,fp:[.5,.5]}},softbox(){let i=new Ue;i.add(Mn(.02,.02,1.6,"#333",0,.8,0),Mn(.2,.25,.04,"#333",0,.02,0));let e=me(.55,.42,.18,"#f8f6f0",0,1.7,0,{emissive:"#fff4dc",ei:.9});return i.add(e),i.add(me(.6,.47,.12,"#1f1f1f",0,1.7,-.12)),{group:i,fp:[.45,.45]}},longTable({w:i=2.2,d:e=1,map:t}){let n=new Ue;n.add(me(i,.06,e,t?"#f4efe6":"#8a5a36",0,.74,0));let s=i/2-.12,r=e/2-.12;if([[-s,-r],[s,-r],[-s,r],[s,r]].forEach(([a,o])=>n.add(me(.06,.72,.06,"#3b3530",a,.36,o))),t){let a=me(i*.8,.01,e*.7,"#7fb3d5",0,.775,0);a.castShadow=!1,n.add(a),n.add(me(i*.25,.012,e*.25,"#e9c46a",-.2,.78,.05))}return{group:n,fp:[i,e]}},execDesk(){let i=new Ue;return i.add(me(2,.07,.95,"#5a3b26",0,.76,0),me(.5,.72,.85,"#4a301f",-.72,.36,0),me(.5,.72,.85,"#4a301f",.72,.36,0),me(1,.5,.05,"#4a301f",0,.45,.4)),{group:i,fp:[2,.95]}},door({accent:i}){let e=new Ue;e.add(me(.95,2.1,.06,"#8a6040",0,1.05,.03),Mn(.03,.03,.12,"#d9c27a",.33,1,.1));let t=new Wn(.8,.22,240),n=t.ctx;n.fillStyle=i,Zi(n,0,0,t.canvas.width,t.canvas.height,12),n.fill(),n.fillStyle="#fff",n.font="700 30px sans-serif",n.textBaseline="middle",n.fillText("CENTRO ANTERIOR",12,t.canvas.height/2+2),t.commit();let s=Ts(t,.8,.22);return s.position.set(0,1.75,.07),e.add(s),{group:e,fp:[1,.2],hitBox:[1,2.1,.4,1.05]}},cabinet(){let i=new Ue;i.add(me(.55,1.25,.55,"#9aa3a8",0,.625,0,{rough:.5,metal:.2}));for(let e=0;e<4;e++)i.add(me(.45,.02,.01,"#6f777c",0,.2+e*.3,.28),me(.12,.03,.03,"#444",0,.28+e*.3,.29));return{group:i,fp:[.6,.6]}},safe(){let i=new Ue;return i.add(me(.6,.7,.55,"#3f4a52",0,.35,0,{rough:.4,metal:.4}),Mn(.09,.09,.04,"#c9b26a",.05,.4,.29)),i.children[1].rotation.x=Math.PI/2,{group:i,fp:[.65,.6]}},rack(){let i=new Ue;i.add(me(.6,1.9,.7,"#22272e",0,.95,0,{rough:.5}));let e=[];for(let t=0;t<7;t++){i.add(me(.52,.18,.02,"#323a44",0,.35+t*.22,.36));for(let n=0;n<3;n++){let s=new Ft({color:n===0?"#3cff9a":n===1?"#47b8ff":"#ffb347",toneMapped:!1}),r=As(Yu(.035,.035,.01),s,-.18+n*.06,.35+t*.22,.375,!1);i.add(r),e.push({m:s,seed:t*3+n})}}return{group:i,fp:[.65,.75],anim:(t,n)=>e.forEach(s=>{let r=Math.sin(t*(n?9:2.2)+s.seed*1.7)>(n?-.2:.4);s.m.color.set(r?s.seed%3===0?"#3cff9a":s.seed%3===1?"#47b8ff":"#ffb347":"#2a3038")})}},stage({accent:i}){let e=new Ue;e.add(me(2.4,.25,1.4,"#3a3036",0,.125,-.3)),e.add(me(.06,1.9,.06,"#9aa0a6",-1.15,1.2,-.95),me(.06,1.9,.06,"#9aa0a6",1.15,1.2,-.95),me(2.36,.06,.06,"#9aa0a6",0,2.15,-.95));let t=[];return[-.7,0,.7].forEach((n,s)=>{let r=new Ft({color:s===1?"#fff2b0":i,toneMapped:!1}),a=As(Bf(.07,.1,.16),r,n,2.05,-.9,!1);a.rotation.x=.5,e.add(a),t.push(r)}),e.add(me(.5,.35,.3,"#1c1c1c",-.9,.42,.15),me(.5,.35,.3,"#1c1c1c",.9,.42,.15)),{group:e,fp:[2.5,1.5],fpOffset:[0,-.3],anim:n=>t.forEach((s,r)=>{s.color.setHSL((n*.08+r*.33)%1,.75,.62)})}},balloons({accent:i}){let e=new Ue,t=[i,"#f6f1e7","#f2c14e"],n=[];for(let s=0;s<6;s++){let r=s*1.1,a=yc(.16,t[s%3],Math.sin(r)*.18,1.2+s%3*.22,Math.cos(r)*.18,{rough:.35});e.add(a),n.push(a)}return e.add(Mn(.12,.14,.08,"#9a8a7a",0,.04,0),Mn(.005,.005,1.1,"#ddd",0,.6,0)),{group:e,fp:[.35,.35],anim:s=>n.forEach((r,a)=>{r.position.y=1.2+a%3*.22+Math.sin(s*1.4+a)*.025})}},podium({accent:i}){let e=new Ue;return e.add(me(.55,1.05,.45,"#efe9de",0,.525,0),me(.56,.1,.46,i,0,.8,.005)),{group:e,fp:[.6,.5]}},neon({y:i=1.2,accent:e}){let t=new Ue,n=new Ft({color:e,toneMapped:!1}),s=new ut(new Hi(.28,.025,8,32),n);s.position.set(.9,i,.05),t.add(s);let r=As(Yu(.5,.05,.03),n,.9,i,.05,!1);return t.add(r),{group:t,fp:null}},counter({w:i=3.2}){let e=new Ue;e.add(me(i,.88,.62,"#e9e2d6",0,.44,0),me(i+.04,.05,.66,"#5d4a3a",0,.9,0));for(let t=0;t<4;t++)e.add(me(.02,.6,.01,"#cfc6b8",-i/2+(t+1)*i/5,.42,.315));return e.add(Mn(.06,.05,.1,"#f4f1ea",1,.98,.05),Mn(.06,.05,.1,"#e07a5f",1.18,.98,-.05)),{group:e,fp:[i,.65],hitBox:[i,.9,.7,.6]}},cooler(){let i=new Ue;return i.add(me(.38,1,.38,"#f2f2ee",0,.5,0),Mn(.15,.15,.42,"#8fd1f2",0,1.22,0,{opacity:.75,rough:.2})),{group:i,fp:[.45,.45]}}};function Zu(i,e){if(!i?.papers)return;let t=i.papers;for(;t.children.length;)t.remove(t.children[0]);let n=Math.min(e,6);for(let s=0;s<n;s++){let r=me(.24,.012,.18,s===n-1?"#fffdf6":"#f4efe2",(s*7%5-2)/200,.045+s*.014,(s*3%5-2)/200);r.rotation.y=(s*11%7-3)/30,r.castShadow=!1,t.add(r)}if(e>0){let s=me(.04,.09,.005,"#e5484d",.1,.07+n*.014,.09);s.castShadow=!1,t.add(s)}}var Mc=class{constructor(e,t,n,s,r=.2){this.minX=e,this.minZ=n,this.cell=r,this.w=Math.ceil((t-e)/r),this.h=Math.ceil((s-n)/r),this.blocked=new Uint8Array(this.w*this.h)}toCell(e,t){return[Math.floor((e-this.minX)/this.cell),Math.floor((t-this.minZ)/this.cell)]}toWorld(e,t){return[this.minX+(e+.5)*this.cell,this.minZ+(t+.5)*this.cell]}inside(e,t){return e>=0&&t>=0&&e<this.w&&t<this.h}free(e,t){return this.inside(e,t)&&!this.blocked[t*this.w+e]}isFreeAt(e,t){let[n,s]=this.toCell(e,t);return this.free(n,s)}blockRect(e,t,n,s,r=0,a=0,o=1){let c=r*Math.PI/180,l=Math.cos(c),u=Math.sin(c),h=n/2+a,d=s/2+a,f=Math.abs(h*l)+Math.abs(d*u),g=Math.abs(h*u)+Math.abs(d*l),[x,m]=this.toCell(e-f,t-g),[p,b]=this.toCell(e+f,t+g);for(let _=Math.max(0,m);_<=Math.min(this.h-1,b);_++)for(let v=Math.max(0,x);v<=Math.min(this.w-1,p);v++){let[E,T]=this.toWorld(v,_),A=E-e,I=T-t,S=A*l-I*u,y=A*u+I*l;Math.abs(S)<=h&&Math.abs(y)<=d&&(this.blocked[_*this.w+v]=o)}}nearestFree(e,t,n=12){let[s,r]=this.toCell(e,t);if(this.free(s,r))return[s,r];for(let a=1;a<=n;a++){let o=null,c=1/0;for(let l=r-a;l<=r+a;l++)for(let u=s-a;u<=s+a;u++){if(Math.max(Math.abs(u-s),Math.abs(l-r))!==a||!this.free(u,l))continue;let h=(u-s)**2+(l-r)**2;h<c&&(c=h,o=[u,l])}if(o)return o}return null}lineFree(e,t,n,s){let r=Math.max(Math.abs(n-e),Math.abs(s-t))*2;for(let a=0;a<=r;a++){let o=r?a/r:0,c=e+(n-e)*o,l=t+(s-t)*o;if(!this.free(Math.round(c),Math.round(l))||!this.free(Math.floor(c+.5),Math.floor(l+.5)))return!1}return!0}findPath(e,t,n,s){let r=this.nearestFree(e,t),a=this.nearestFree(n,s);if(!r||!a)return null;let o=this.w,c=o*this.h,l=r[1]*o+r[0],u=a[1]*o+a[0];if(l===u)return[[n,s]];let h=new Float32Array(c).fill(1/0),d=new Int32Array(c).fill(-1),f=new Uint8Array(c),g=new ju,x=A=>{let I=A%o,S=A/o|0,y=Math.abs(I-a[0]),R=Math.abs(S-a[1]);return y+R+(Math.SQRT2-2)*Math.min(y,R)};h[l]=0,g.push(l,x(l));let m=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],p=!1,b=0;for(;g.size&&b++<6e4;){let A=g.pop();if(A===u){p=!0;break}if(f[A])continue;f[A]=1;let I=A%o,S=A/o|0;for(let[y,R,L]of m){let N=I+y,H=S+R;if(!this.free(N,H)||y&&R&&(!this.free(I+y,S)||!this.free(I,S+R)))continue;let F=H*o+N;if(f[F])continue;let V=h[A]+L;V<h[F]&&(h[F]=V,d[F]=A,g.push(F,V+x(F)))}}if(!p)return null;let _=[];for(let A=u;A!==-1;A=d[A])_.push([A%o,A/o|0]);_.reverse();let v=[_[0]],E=0;for(let A=2;A<_.length;A++)this.lineFree(_[E][0],_[E][1],_[A][0],_[A][1])||(v.push(_[A-1]),E=A-1);v.push(_[_.length-1]);let T=v.slice(1).map(([A,I])=>this.toWorld(A,I));return T[T.length-1]=this.isFreeAt(n,s)?[n,s]:T[T.length-1],T}},ju=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(e,t){let n=this.k,s=this.v;n.push(e),s.push(t);let r=n.length-1;for(;r>0;){let a=r-1>>1;if(s[a]<=s[r])break;[n[a],n[r]]=[n[r],n[a]],[s[a],s[r]]=[s[r],s[a]],r=a}}pop(){let e=this.k,t=this.v,n=e[0],s=e.pop(),r=t.pop();if(e.length){e[0]=s,t[0]=r;let a=0;for(;;){let o=2*a+1,c=o+1,l=a;if(o<e.length&&t[o]<t[l]&&(l=o),c<e.length&&t[c]<t[l]&&(l=c),l===a)break;[e[l],e[a]]=[e[a],e[l]],[t[l],t[a]]=[t[a],t[l]],a=l}}return n}};var xr=.2;function Sc(i){let e=new Wn(2,2,128),t=e.ctx,n=e.canvas.width,s=e.canvas.height,r={oak:"#d8b88e",walnut:"#a87d58",concrete:"#d4cec4",tile:"#ece6db"}[i];if(t.fillStyle=r,t.fillRect(0,0,n,s),i==="oak"||i==="walnut")for(let o=0;o<8;o++){let c=o*s/8,l=o*97%n;for(let u=-1;u<3;u++){let h=l+u*n/2,d=((o*31+u*17)%9-4)*(i==="oak"?3:2.5);t.fillStyle=`rgba(${d>0?255:0},${d>0?240:0},${d>0?220:0},${Math.abs(d)/100})`,t.fillRect(h,c,n/2,s/8),t.fillStyle="rgba(70,45,25,0.22)",t.fillRect(h,c,2,s/8)}t.fillStyle="rgba(70,45,25,0.25)",t.fillRect(0,c,n,2)}else if(i==="tile"){t.strokeStyle="rgba(150,135,115,0.35)",t.lineWidth=2;for(let a=0;a<=4;a++)t.beginPath(),t.moveTo(a*n/4,0),t.lineTo(a*n/4,s),t.stroke(),t.beginPath(),t.moveTo(0,a*s/4),t.lineTo(n,a*s/4),t.stroke()}else{for(let a=0;a<400;a++)t.fillStyle=`rgba(0,0,0,${Math.random()*.04})`,t.fillRect(Math.random()*n,Math.random()*s,3,3);t.strokeStyle="rgba(120,110,100,0.25)",t.lineWidth=2,t.strokeRect(1,1,n-2,s-2)}return e.commit(),e.texture.wrapS=e.texture.wrapT=jn,e.texture}var Ku=new Map;function Ec(i,e,t=["carpet","carpetBlue"]){i.traverse(n=>{if(!n.isMesh)return;let s=r=>{if(!t.includes(r.name))return r;let a=`${r.name}|${e}`;if(!Ku.has(a)){let o=new Bt({color:e,roughness:.95});o.name=r.name,Ku.set(a,o)}return Ku.get(a)};n.material=Array.isArray(n.material)?n.material.map(s):s(n.material)})}function zf(i,e=.58,t=.5){let n=new Pe(i.accent),s={};return n.getHSL(s),new Pe().setHSL(s.h,Math.min(t,s.s),e).getStyle()}function Hf(i){let e=Af(),t=new Ue;i.add(t);let n=e.length,s=-ft/2,r=(n-1)*ft+ft/2,a=new Mc(s,r,Wt,Zt-.25,.2),o=[],c=[],l={},u={},h=[],d=[],f=Sc("tile");f.repeat.set((r-s)/2,(Zt-gt)/2);let g=new ut(new Qn(r-s,Zt-gt),new Bt({map:f,roughness:.9}));g.rotation.x=-Math.PI/2,g.position.set((s+r)/2,0,(gt+Zt)/2),g.receiveShadow=!0,t.add(g),t.add(me(r-s+.6,.3,Zt-Wt+.6,"#c9bfb0",(s+r)/2,-.151,(Wt+Zt)/2));let x=me(r-s,.12,.12,"#b5a996",(s+r)/2,.06,Zt-.06);t.add(x);let m={oak:Sc("oak"),walnut:Sc("walnut"),concrete:Sc("concrete")},p=ga("#4b4540");for(let{room:_,index:v,cx:E,items:T,stations:A}of e){let I=new Ue;I.name=_.id,t.add(I);let S=m[_.floor].clone();S.needsUpdate=!0,S.repeat.set(ft/2,(gt-Wt)/2);let y=new ut(new Qn(ft,gt-Wt),new Bt({map:S,roughness:.88}));y.rotation.x=-Math.PI/2,y.position.set(E,.002,(Wt+gt)/2),y.receiveShadow=!0,I.add(y);let R=me(ft,mc,.2,_.wall,E,mc/2,Wt-.1,{rough:.95});R.castShadow=!1,I.add(R),I.add(me(ft,.12,.04,"#d8cfc0",E,.06,Wt+.02));let L=me(ft,.08,.02,_.accent,E,.95,Wt+.01);L.castShadow=!1,I.add(L),I.add(me(ft+.2,.06,.24,p,E,mc+.03,Wt-.1));let N=Tf-pc+.2;[-1,1].forEach(F=>{let V=E+F*(pc+N/2);I.add(me(N,gr,.16,"#e9e2d6",V,gr/2,gt)),I.add(me(N,.05,.2,"#8a6a4a",V,gr+.025,gt)),a.blockRect(V,gt,N,.16,0,xr)}),[-1,1].forEach(F=>I.add(me(.08,gr+.1,.2,_.accent,E+F*pc,(gr+.1)/2,gt)));let H=F=>{I.add(me(.2,qi,gt-Wt,"#ece6dc",F,qi/2,(Wt+gt)/2,{rough:.95})),I.add(me(.24,.05,gt-Wt+.02,p,F,qi+.025,(Wt+gt)/2)),a.blockRect(F,(Wt+gt)/2,.2,gt-Wt+.4,0,xr)};v===0&&H(E-ft/2),H(E+ft/2);for(let F of T){let V=null,j=null,W=null;if(F.m){if(!Nf(F.m))continue;V=Of(F.m),F.fabric&&Ec(V,zf(_)),F.tint?Ec(V,F.tint):F.m==="chairDesk"&&Ec(V,"#46413d"),(F.sx||F.sz)&&V.scale.set(F.sx||1,1,F.sz||1);let le=Ff(F.m);j=[le.x*(F.sx||1),le.z*(F.sz||1)],F.m.startsWith("rug")&&(Ec(V,zf(_,.74,.35),["carpetDarker"]),V.traverse(be=>{be.isMesh&&(be.castShadow=!1)}))}else{let le=bc[F.p]?.(F);if(!le)continue;V=le.group,j=le.fp,W=le,le.fpOffset&&(j=j&&[...j,le.fpOffset])}if(V.position.set(F.wx,F.onTop||0,F.wz),V.rotation.y=bn.degToRad(F.r||0),V.userData.item=F,I.add(V),F.block!==!1&&j&&!(F.m&&F.m.startsWith("rug"))){let[le,be,ke]=j,st=bn.degToRad(F.r||0),pt=ke?ke[0]*Math.cos(st)+ke[1]*Math.sin(st):0,tt=ke?-ke[0]*Math.sin(st)+ke[1]*Math.cos(st):0;a.blockRect(F.wx+pt,F.wz+tt,le,be,F.r||0,xr-.04)}F.seat&&d.push({room:_.id,obj:V,it:F}),W?.dyn&&c.push({room:_.id,kind:F.p,screen:F.screen,boardKind:F.kind,surface:W.dyn,item:F}),W?.glow&&(l[_.id]=W.glow),W?.papers!==void 0&&F.p==="tray"&&(u[_.id]=W),W?.anim&&h.push({room:_.id,fn:W.anim,kind:F.p}),F.hot&&o.push({key:F.hot,room:_.id,obj:V,item:F})}I.userData={room:_,index:v,cx:E,stations:A}}a.blockRect((s+r)/2,Zt-.05,r-s,.3,0,xr),a.blockRect(s+.05,(gt+Zt)/2,.2,Zt-gt,0,xr),a.blockRect(r-.05,(gt+Zt)/2,.2,Zt-gt,0,xr),t.add(me(.2,qi,Zt-gt,"#ece6dc",s,qi/2,(gt+Zt)/2)),t.add(me(.2,qi,Zt-gt,"#ece6dc",r,qi/2,(gt+Zt)/2));let b=Object.fromEntries(e.map(_=>[_.room.id,_.stations]));return{world:t,plan:e,nav:a,hotspots:o,surfaces:c,lamps:l,trays:u,animated:h,seats:d,stationsByRoom:b,bounds:{minX:s,maxX:r}}}var Ov=.2,Bv={sphere:new zi(1,20,16),sphereLo:new zi(1,12,10),cone:new jr(1,1,12),cyl:new ki(1,1,1,12),box:new Jn(1,1,1),capsule:new Yr(1,1,6,12),torus:new Hi(1,.12,8,24),arc:new Hi(1,.07,8,20,Math.PI)};function he(i,e={}){return new Bt({color:i,roughness:e.rough??.72,metalness:e.metal??0,emissive:e.emissive||"#000",emissiveIntensity:e.ei||0})}function te(i,e,t,n,s,r=0,a=0,o=0,c){let l=new ut(Bv[i],e);return l.scale.set(t,n,s),l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!1,c&&c.add(l),l}function Sn(i,e,t,n){let s=new Ue;return s.position.set(e,t,n),i.add(s),s}function ji(i,{r:e=.07,spread:t=.1,y:n=.03,z:s=.2,iris:r="#3a2a1a",rim:a=null,big:o=!1}){let c=he("#ffffff",{rough:.3}),l=he("#1b1410",{rough:.2}),u=he(r,{rough:.3}),h=[];return[-1,1].forEach(d=>{let f=Sn(i,d*t,n,s);a&&te("sphere",he(a),e*1.35,e*1.35,e*.5,0,0,-.01,f),te("sphere",c,e,e,e*.6,0,0,0,f),te("sphere",u,e*.72,e*.72,e*.3,0,-.004,e*.42,f),te("sphere",l,e*.42,e*.42,e*.2,0,-.004,e*.56,f),te("sphere",c,e*.16,e*.16,e*.1,-e*.25,e*.28,e*.64,f),o&&f.scale.setScalar(1.12),f.userData.base=o?1.12:1,h.push(f)}),h}function kv(i,e,t,n,s=.075){let r=Sn(i,0,t,e),a=he("#3b2a1a",{rough:.4,metal:.3});return[-1,1].forEach(o=>{let c=te("torus",a,s,s,s,o*n,0,0,r);c.scale.z=s}),te("box",a,n*.6,.012,.012,0,.01,0,r),r}function zv(i,e){let t=new Ue;if(i==="clipboard")te("box",he("#8a5a36"),.16,.22,.015,0,0,0,t),te("box",he("#fbf8f1"),.13,.17,.018,0,-.01,.002,t),te("box",he("#9aa0a6",{metal:.5}),.06,.025,.02,0,.1,.004,t);else if(i==="camera"){te("box",he("#222"),.16,.1,.08,0,0,.02,t);let n=te("cyl",he("#111"),.04,.07,.04,0,0,.09,t);n.rotation.x=Math.PI/2}else i==="briefcase"?(te("box",he("#7a4a26"),.22,.16,.06,0,-.06,0,t),te("box",he("#c9a25e",{metal:.6}),.06,.02,.065,0,0,0,t)):i==="book"?(te("box",he(e.accent),.15,.2,.04,0,0,0,t),te("box",he("#f6f1e4"),.135,.19,.042,.008,0,0,t)):i==="tablet"?(te("box",he("#2a2d33"),.17,.12,.012,0,0,0,t),te("box",he("#7fd3ff",{emissive:"#3aa0e0",ei:.6}),.15,.1,.014,0,0,.001,t)):i==="glowstick"&&(te("cyl",he("#ff7ad9",{emissive:"#ff3fc8",ei:2.2}),.018,.22,.018,0,.08,0,t),te("cyl",he("#222"),.022,.07,.022,0,-.06,0,t));return t}function Vf(i){let e=i.palette,t=new Ue,n=Sn(t,0,0,0),s=Sn(n,0,Ov,0),r=Sn(s,0,0,0),a=Sn(r,0,.47,0),o=i.species,c=he(e.body),l=he(e.belly),u=he(e.accent),h=o==="hummingbird"||o==="moth",d={root:t,body:n,hips:s,torso:r,head:a,arms:[],legs:[],wings:[],tail:null,lids:[],extras:[],flyer:h,species:o},f={owl:[.25,.27,.23],hummingbird:[.19,.22,.19],cat:[.2,.24,.18],raccoon:[.22,.25,.2],bunny:[.19,.23,.18],moth:[.18,.23,.17],capybara:[.25,.26,.23],turtle:[.22,.24,.21],robot:[.22,.22,.18]}[o]||[.2,.24,.18];if(o==="robot"){let b=he(e.body,{rough:.35,metal:.45});te("box",b,.38,.36,.28,0,.21,0,r),te("box",he(e.belly,{rough:.4}),.24,.2,.02,0,.21,.145,r);let _=te("sphere",he("#6ff5ff",{emissive:"#3de0ff",ei:1.4}),.035,.035,.02,0,.25,.158,r);d.core=_}else{let b=["raccoon","hummingbird","capybara","bunny"].includes(o);if(te("sphere",b?u:c,f[0],f[1],f[2],0,.2,0,r),b?(te("sphere",he(o==="capybara"?"#fbf3e8":"#f7f4ee"),.09,.15,.06,0,.24,f[2]*.82,r),o==="raccoon"&&te("box",he("#8e1f2b"),.035,.13,.02,0,.22,f[2]+.02,r)):te("sphere",l,f[0]*.72,f[1]*.75,f[2]*.6,0,.18,f[2]*.48,r),o==="owl"||o==="turtle"){let _=te("sphere",u,f[0]*1.03,f[1]*.62,f[2]*1.03,0,.13,0,r);_.scale.y*=.9,te("box",he(o==="owl"?"#c9a25e":"#e0c26a"),.03,.1,.02,0,.27,f[2]*.92,r)}o==="moth"&&te("sphere",he("#fbeee8",{rough:1}),.24,.12,.22,0,.38,0,r)}if(o==="turtle"){let b=te("sphere",he(e.shell,{rough:.6}),.27,.3,.2,0,.22,-.13,r);te("torus",he("#6a4322"),.24,.27,.6,0,.22,-.06,r).rotation.y=Math.PI/2;for(let _=0;_<5;_++)te("sphere",he("#a6743f"),.07,.07,.03,(_%3-1)*.12,.12+Math.floor(_/3)*.17+_%2*.03,-.31,r);d.extras.push(b)}if(o==="robot"){let b=he(e.body,{rough:.35,metal:.45});te("box",b,.42,.32,.32,0,.12,0,a),te("box",he("#0f1a22",{rough:.25}),.34,.22,.02,0,.12,.162,a);let _=he(e.eye,{emissive:e.eye,ei:1.6});d.lids=[-1,1].map(v=>te("capsule",_,.028,.045,.01,v*.08,.13,.175,a)),d.lids.forEach(v=>{v.rotation.z=Math.PI/2,v.userData.base=.045}),te("box",_,.07,.012,.01,0,.06,.175,a),te("cyl",he("#9aa0a6",{metal:.6}),.012,.16,.012,0,.36,0,a),d.antenna=te("sphere",he(e.accent,{emissive:e.accent,ei:1.2}),.045,.045,.045,0,.46,0,a),[-1,1].forEach(v=>{let E=te("cyl",he(e.accent,{rough:.4}),.07,.04,.07,v*.225,.12,0,a);E.rotation.z=Math.PI/2})}else{let b={owl:[.27,.25,.25],hummingbird:[.2,.19,.2],cat:[.24,.21,.21],raccoon:[.24,.21,.22],bunny:[.22,.21,.2],moth:[.2,.19,.19],capybara:[.23,.21,.27],turtle:[.2,.19,.2]}[o],_=o==="owl"?.1:.14;te("sphere",c,b[0],b[1],b[2],0,_,0,a);let v=b[2];if(o==="owl"){te("sphere",l,.21,.17,.08,0,_+.01,v*.78,a),d.lids=ji(a,{r:.075,spread:.095,y:_+.03,z:v*.86,iris:e.eye,rim:"#ffffff",big:!0});let E=te("cone",he(e.beak),.035,.08,.035,0,_-.05,v+.02,a);E.rotation.x=Math.PI*.62,[-1,1].forEach(T=>{let A=te("cone",c,.06,.13,.04,T*.17,_+.24,0,a);A.rotation.z=-T*.35})}else if(o==="hummingbird"){te("sphere",l,.12,.1,.08,0,_-.05,v*.7,a),d.lids=ji(a,{r:.055,spread:.09,y:_+.03,z:v*.82,iris:e.eye});let E=te("cyl",he(e.beak),.012,.32,.012,0,_-.02,v+.15,a);E.rotation.x=Math.PI/2+.12;let T=te("cone",he("#2fb89c"),.06,.14,.04,0,_+.2,-.05,a);T.rotation.x=-.6}else if(o==="cat")te("sphere",l,.11,.075,.07,0,_-.06,v*.82,a),te("sphere",he(e.beak),.025,.018,.02,0,_-.025,v+.02,a),d.lids=ji(a,{r:.058,spread:.095,y:_+.03,z:v*.84,iris:e.eye}),[-1,1].forEach(E=>{let T=te("cone",c,.075,.15,.04,E*.14,_+.2,-.01,a);T.rotation.z=-E*.32,te("cone",he("#f2b6a5"),.04,.09,.02,E*.14,_+.19,.015,a).rotation.z=-E*.32}),te("arc",he("#2b2b2b"),.235,.235,.5,0,_-.01,0,a),[-1,1].forEach(E=>te("cyl",he("#3a3a3a"),.065,.05,.065,E*.235,_-.01,0,a).rotation.z=Math.PI/2),[-1,1].forEach(E=>te("cyl",he("#c9a25e",{metal:.6}),.04,.052,.04,E*.236,_-.01,0,a).rotation.z=Math.PI/2);else if(o==="raccoon")te("sphere",he("#2a211b"),.235,.075,.2,0,_+.03,.035,a),te("sphere",l,.1,.07,.09,0,_-.06,v*.82,a),te("sphere",he("#1b1410"),.03,.022,.02,0,_-.03,v+.04,a),d.lids=ji(a,{r:.05,spread:.095,y:_+.035,z:v*.85,iris:e.eye}),[-1,1].forEach(E=>{te("sphere",c,.07,.08,.035,E*.16,_+.18,0,a),te("sphere",l,.04,.05,.02,E*.16,_+.18,.02,a)});else if(o==="bunny"){te("sphere",l,.1,.07,.07,0,_-.06,v*.8,a),te("sphere",he(e.beak),.022,.016,.015,0,_-.03,v+.01,a),d.lids=ji(a,{r:.058,spread:.09,y:_+.03,z:v*.84,iris:e.eye}),d.ears=[-1,1].map(T=>{let A=Sn(a,T*.085,_+.17,-.02);return te("capsule",c,.045,.2,.03,0,.14,0,A),te("capsule",he("#f2c4d6"),.025,.17,.01,0,.14,.022,A),A.rotation.z=-T*.15,A});let E=te("torus",u,.17,.17,.9,0,.42,0,r);E.rotation.x=Math.PI/2}else o==="moth"?(te("sphere",he("#fbeee8",{rough:1}),.13,.1,.07,0,_-.06,v*.75,a),d.lids=ji(a,{r:.065,spread:.088,y:_+.02,z:v*.82,iris:"#7a1d45",big:!0}),d.antennae=[-1,1].map(E=>{let T=Sn(a,E*.07,_+.17,.02),A=te("cyl",he("#4a1a2c"),.008,.22,.008,0,.11,0,T);A.rotation.z=0;for(let I=0;I<4;I++)te("sphere",he(e.accent),.04-I*.006,.012,.02,E*.025,.08+I*.045,0,T);return T.rotation.z=-E*.45,T}),te("arc",he("#222"),.2,.2,.5,0,_-.02,0,a),te("cyl",he("#222"),.008,.12,.008,-.17,_-.06,.08,a).rotation.x=Math.PI/2.5):o==="capybara"?(te("sphere",he(e.belly),.15,.12,.12,0,_-.04,v*.8,a),te("sphere",he("#3a2618"),.06,.025,.03,0,_-0,v+.06,a),d.lids=ji(a,{r:.04,spread:.12,y:_+.07,z:v*.62,iris:"#2b1d12"}),[-1,1].forEach(E=>te("sphere",c,.045,.04,.03,E*.15,_+.17,-.06,a)),te("sphere",he("#f08a7a"),.05,.05,.05,.1,_+.19,.02,a)):o==="turtle"&&(te("sphere",l,.12,.08,.08,0,_-.06,v*.78,a),d.lids=ji(a,{r:.055,spread:.085,y:_+.03,z:v*.82,iris:"#2b1d12"}),te("box",he("#4a3020"),.06,.008,.01,0,_-.06,v+.01,a));i.glasses&&kv(a,(o==="owl"?.25:.2)*.98,_+.03,o==="owl"?.095:.085,o==="owl"?.085:.07)}let g=o==="robot"?.33:.3,x=o==="robot"?.2:f[0]*.92;if([-1,1].forEach(b=>{let _=Sn(r,b*x,g,0);if(o==="owl")te("sphere",c,.06,.2,.13,b*.03,-.14,-.01,_),te("sphere",l,.03,.08,.06,b*.04,-.27,.04,_);else if(o==="robot")te("cyl",he("#9aa0a6",{metal:.6,rough:.35}),.035,.22,.035,0,-.12,0,_),te("sphere",he(e.accent),.055,.055,.055,0,-.25,0,_);else{let v=["raccoon","hummingbird","capybara","bunny"].includes(o)?u:c;te("capsule",v,.05,.14,.05,0,-.11,0,_),te("sphere",o==="raccoon"?he("#3a2a20"):c,.052,.052,.052,0,-.23,.005,_)}d.arms.push(_)}),d.handR=Sn(d.arms[0],0,-.25,.05),i.prop&&(d.prop=zv(i.prop,e),d.handR.add(d.prop),d.prop.rotation.x=-.2),h){let b=he(o==="moth"?e.body:"#7fe0c8",{rough:.6}),_=he(o==="moth"?"#f2a6c4":"#c8f2e6",{rough:.6});[-1,1].forEach(v=>{let E=Sn(r,v*.1,.3,-.12);o==="moth"?(te("sphere",b,.26,.2,.02,v*.24,.06,0,E),te("sphere",_,.08,.08,.025,v*.3,.08,.004,E),te("sphere",he("#4a1a2c"),.035,.035,.03,v*.3,.08,.006,E),te("sphere",b,.17,.14,.02,v*.17,-.16,.01,E)):(te("sphere",b,.3,.08,.02,v*.28,.04,0,E),te("sphere",_,.2,.05,.022,v*.2,.02,.002,E)),d.wings.push({g:E,s:v})})}if([-1,1].forEach(b=>{let _=Sn(s,b*.09,.02,0);if(o==="robot")te("cyl",he("#9aa0a6",{metal:.6,rough:.35}),.04,.17,.04,0,-.09,0,_),te("box",he("#2a2d33"),.11,.05,.16,0,-.18,.03,_);else if(o==="owl"||o==="hummingbird")te("cyl",he(e.beak),.015,.16,.015,0,-.09,0,_),te("sphere",he(e.beak),.05,.02,.07,0,-.18,.03,_);else{let v={raccoon:"#5f5244",bunny:"#8f86a0",cat:"#2f2a28",capybara:"#5a3d2a",turtle:"#3d3328",moth:e.body}[o]||c;te("capsule",he(v),.055,.08,.055,0,-.08,0,_),te("sphere",he(o==="cat"?"#f4f1ea":"#4a3326",{rough:.5}),.06,.035,.085,0,-.18,.03,_)}d.legs.push(_)}),h&&o==="hummingbird"&&d.legs.forEach(b=>b.scale.setScalar(.6)),["cat","raccoon","bunny","hummingbird"].includes(o)){let b=Sn(s,0,.08,-.16);if(d.tail=b,o==="bunny")te("sphere",he("#ffffff"),.07,.07,.07,0,0,-.03,b);else if(o==="hummingbird"){let _=te("cone",he(e.body),.07,.22,.025,0,-.02,-.08,b);_.rotation.x=-2.1}else{let v=he(o==="raccoon"?"#2a211b":"#c06f22");for(let E=0;E<6;E++){let T=(o==="raccoon"?.085:.045)*(1-E*.06);te("sphere",E%2?v:c,T,T,T*1.2,0,.03+E*.065,-.04-Math.sin(E*.45)*.12,b)}}}let m=new ut(new Kr(.34,.42,40),new Ft({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.015,t.add(m),d.ring=m;let p=new ut(new Zr(.26,24),new Ft({color:"#000",transparent:!0,opacity:.18,depthWrite:!1}));return p.rotation.x=-Math.PI/2,p.position.y=.012,t.add(p),d.shadow=p,t.scale.setScalar(1.3),new Ju(d)}var Gf=(i,e,t)=>i+(e-i)*t,Ki=(i,e,t,n)=>Gf(i,e,1-Math.exp(-t*n)),Ju=class{constructor(e){this.rig=e,this.root=e.root,this.pose="idle",this.speed=0,this.phase=Math.random()*10,this.t=Math.random()*10,this.w={walk:0,sit:0,type:0,wave:0,think:0,slump:0,celebrate:0,talk:0,read:0,sleep:0},this.blinkAt=1+Math.random()*3,this.blink=0,this.seatY=0,this.lookYaw=0,this.selected=!1,this.hoverH=e.flyer?e.species==="hummingbird"?.42:.18:0}update(e){let t=this.rig,n=this.w;this.t+=e;let s=this.t;for(let _ of Object.keys(n))n[_]=Ki(n[_],(this.pose===_?1:0)||(_==="walk"?Math.min(1,this.speed/.9):0),_==="walk"?14:7,e);this.pose==="type"&&(n.sit=Ki(n.sit,1,7,e)),["type","sleep"].includes(this.pose)&&(n.sit=Ki(n.sit,1,7,e));let r=n.walk*(1-n.sit);this.phase+=e*(5+this.speed*5.5);let a=this.phase,o=t.flyer?Math.sin(s*3.2)*.04:0,c=n.celebrate*Math.max(0,Math.sin(s*7))*.16+n.wave*Math.max(0,Math.sin(s*6))*.03;t.body.position.y=Gf(this.hoverH+o,this.seatY,n.sit)+Math.abs(Math.sin(a))*.035*r*(t.flyer?0:1)+c-n.slump*.03,t.torso.scale.y=1+Math.sin(s*1.8)*.012,t.torso.rotation.x=r*(t.flyer?.35:.06)+n.type*.12+n.slump*.18-n.celebrate*.05+n.sleep*.15,t.torso.rotation.z=Math.sin(a)*.04*r,t.hips.rotation.y=Math.sin(a)*.06*r;let l=n.type*Math.sin(s*2.3)*.05+n.talk*Math.sin(s*6)*.06;t.head.rotation.x=Ki(t.head.rotation.x,n.type*.18+n.slump*.42+n.read*.25+n.think*-.12+n.sleep*.5+l,10,e),t.head.rotation.y=Ki(t.head.rotation.y,this.lookYaw+n.think*.25+n.wave*.15,5,e),t.head.rotation.z=Ki(t.head.rotation.z,n.wave*.12+n.think*.1+n.sleep*.25,6,e);let[u,h]=t.arms,d=Math.sin(a)*.55*r,f=Math.sin(s*15)*.1,g=Math.sin(s*15+1.7)*.1;u.rotation.x=-d+n.type*(-1.05+f)+n.read*-1.15+n.think*-1.9+n.talk*(-.6+Math.sin(s*4)*.25)-n.celebrate*.2,h.rotation.x=d+n.type*(-1.05+g)+n.read*-1-n.celebrate*.2,u.rotation.z=n.wave*(-2.55+Math.sin(s*11)*.35)+n.celebrate*-2.6+n.think*-.35+.05+n.slump*.08,h.rotation.z=n.celebrate*2.6-.05-n.slump*.08+n.read*.3+n.type*.12,u.rotation.z+=n.type*-.12,t.prop&&(t.prop.visible=n.type<.5&&n.sleep<.5);let[x,m]=t.legs,p=Math.sin(a)*.7*r;x.rotation.x=p-n.sit*1.45,m.rotation.x=-p-n.sit*1.45;for(let{g:_,s:v}of t.wings)if(t.species==="hummingbird")_.rotation.y=v*(.2+Math.sin(s*46)*.6)*(1-n.sit*.8),_.rotation.z=v*.2;else{let E=Math.sin(s*(r>.1?12:3))*.5+.5;_.rotation.y=v*(.15+E*.7)*(1-n.sit*.5)}if(t.species==="owl"&&(u.rotation.z+=-n.wave*.2),t.tail&&(t.tail.rotation.y=Math.sin(s*2.2)*.35+r*Math.sin(a)*.2),t.tail&&(t.tail.rotation.x=n.celebrate*-.4),t.ears&&t.ears.forEach((_,v)=>{_.rotation.x=-.1+Math.sin(s*1.3+v)*.06+n.slump*.9}),t.antennae&&t.antennae.forEach((_,v)=>{_.rotation.x=Math.sin(s*2.6+v)*.15}),t.antenna){let _=Math.sin(s*(n.type>.5?10:2))>.2;t.antenna.material.emissiveIntensity=_?1.6:.2}t.core&&(t.core.material.emissiveIntensity=.8+Math.sin(s*3)*.5+n.type*1.2),this.blinkAt-=e,this.blinkAt<=0&&(this.blink=.14,this.blinkAt=2+Math.random()*4),this.blink>0&&(this.blink-=e);let b=n.sleep>.5||this.blink>0?.12:1;for(let _ of t.lids)_.scale.y=Ki(_.scale.y,b*(_.userData.base||1),30,e);t.ring.material.opacity=Ki(t.ring.material.opacity,this.selected?.85:0,10,e),t.ring.scale.setScalar(1+Math.sin(s*4)*.04),t.shadow.scale.setScalar(1-(t.body.position.y-this.seatY*n.sit)*.6)}};var Hv=1.15,Vv=1.5,Gv=9,Wv=1.3,Xv=.5/Wv-.2,Qu=class{constructor(e,t){this.def=e,this.world=t,this.room=ai(e.room),this.dept=this.room.dept,this.anim=Vf(e),this.root=this.anim.root,this.stations=t.stationsByRoom[e.room];let n=this.stations.desk;this.pos=new ze(n.wx,n.wz+1.2),this.facing=0,this.goalFacing=0,this.path=[],this.arrive=null,this.mode="idle",this.intent={kind:"unconnected",source:"none"},this.ambientEnabled=!0,this.ambientTimer=1+Math.random()*3,this.dwell=0,this.selected=!1,this.local=null,this.waveTimer=0,this.bubble=null,this.awayFromRoom=!1,this.root.position.set(this.pos.x,0,this.pos.y),t.scene.add(this.root)}get headWorld(){let e=new D;return this.anim.rig.head.getWorldPosition(e),e.y+=.42,e}get bodyWorld(){return new D(this.pos.x,(this.anim.rig.body.position.y||0)+.55,this.pos.y)}walkTo(e,t){if(!e)return;let n=this.world.nav.findPath(this.pos.x,this.pos.y,e.wx,e.wz);this.path=n||[[e.wx,e.wz]],this.arrive={station:e,onArrive:t},this.anim.pose="idle",this.mode="walk",this.returning=this.awayFromRoom&&e.room===this.def.room,this.awayFromRoom=e.room!==this.def.room}atStation(e,t=.25){return e&&Math.hypot(this.pos.x-e.wx,this.pos.y-e.wz)<t&&this.path.length===0}setIntent(e){let t=this.intent;this.intent=e,!(t.kind===e.kind&&t.taskId===e.taskId&&t.mission?.id===e.mission?.id)&&((t.kind==="running"||t.kind==="receiving")&&e.kind==="completed"&&(this.celebrate=2.2,this.world.broadcast?.("done",this)),this.plan(!0))}setAmbient(e){this.ambientEnabled=e,!e&&this.intent.source!=="server"&&this.plan(!0)}hasDuty(){return!!this.local||["receiving","running","failed","review","mission"].includes(this.intent.kind)||this.celebrate>0}select(e){this.selected=e,this.anim.selected=e,e&&!this.hasDuty()?(this.path=[],this.arrive=null,this.mode="idle",this.waveTimer=1.6,this.isSitting||(this.anim.seatY=0,this.forceSit=!1,this.anim.pose="wave",this.goalFacing=0)):e||this.plan(!0)}receiveInstruction(){this.local={kind:"sending",until:performance.now()+12e4},this.plan(!0)}clearLocal(){this.local=null,this.plan(!0)}get isSitting(){return this.atStation(this.stations.desk,.3)&&["sit","type","sleep"].includes(this.anim.pose)}plan(e=!1){if(this.emote=null,this.emoteOnArrive=null,this.social&&this.endSocial(),this.selected&&!this.hasDuty())return;let t=this.intent.kind,n=this.stations.desk;if(t==="running"||t==="receiving"||this.local?.kind==="sending")return this.goSit(n,t==="running"?"type":"think");if(t==="failed")return this.goSit(n,"slump");if(t==="review")return this.goStand(this.stations.door?{...this.stations.door,wz:this.stations.door.wz-.3}:n,"read");if(t==="mission"){let s=Gt.filter(a=>a.dept).findIndex(a=>a.dept===this.dept),r=this.world.stationsByRoom.collab;return this.goStand(r[`c${s}`]||r.c0,"talk")}if(t==="completed"&&this.celebrate)return this.goStand(this.stations.door,"celebrate");if(!this.ambientEnabled)return this.goSit(n,"sit");e&&(this.ambientTimer=.2+Math.random()*1.5)}endSocial(){let e=this.social?.with;this.social=null,e?.social?.with===this&&(e.social=null,e.emote=null,e.ambientTimer=Math.min(e.ambientTimer,1.5))}goSit(e,t){if(this.atStation(e,.3)){this.sitDown(t);return}this.walkTo(e,()=>this.sitDown(t))}sitDown(e){this.goalFacing=0,this.anim.seatY=Xv,this.anim.pose=e==="sit"?"sit":e,e==="think"||e==="slump"?(this.anim.pose=e,this.anim.w.sit=1,this.forceSit=!0):this.forceSit=!1,this.mode="station"}goStand(e,t){if(e){if(this.atStation(e)){this.standAt(e,t);return}this.walkTo(e,()=>this.standAt(e,t))}}standAt(e,t){this.anim.seatY=0,this.forceSit=!1,this.goalFacing=bn.degToRad(e.face||0),this.anim.pose=t,this.mode="station"}reserve(e){let t=this.world.reserved;for(let[n,s]of t)s===this.def.id&&t.delete(n);e&&t.set(`${e.room}:${e.key}`,this.def.id)}isFree(e){let t=this.world.reserved.get(`${e.room}:${e.key}`);return!t||t===this.def.id}get idleAmbient(){return!this.selected&&!this.local&&!this.hasDuty()&&this.ambientEnabled&&!this.social&&(this.intent.source!=="server"||["idle","completed"].includes(this.intent.kind))}ambientStep(){let e=Math.random();if(e<.2&&this.tryVisit()||e<.32&&this.tryCoffee())return;let t=Object.keys(this.stations).filter(o=>o!=="door"&&this.isFree(this.stations[o])),n=this.stations[t[Math.floor(Math.random()*t.length)]]||this.stations.desk,r={desk:"sit",board:"think",shelf:"read",plant:"idle",window:"idle"}[n.key]||(Math.random()<.5?"idle":"think"),a={shelf:"\u{1F4D6}",board:"\u{1F4AD}",plant:"\u{1F33F}",window:"\u{1F324}"};if(this.reserve(n),n.key==="desk"){let o=Math.random()<.2;this.goSit(n,o?"sleep":"sit"),this.emoteOnArrive=o?"\u{1F4A4}":null}else this.goStand(n,r),this.emoteOnArrive=a[n.key]||(r==="think"?"\u{1F4AD}":null);this.ambientTimer=7+Math.random()*9}tryVisit(){let e=Math.round(this.pos.x/this.world.pitch),t=this.world.agents.filter(o=>o!==this&&o.idleAmbient&&!o.path.length&&Math.abs(Math.round(o.pos.x/this.world.pitch)-e)<=2&&Math.abs(Math.round(o.pos.x/this.world.pitch)-e)>=1);if(!t.length)return!1;let n=t[Math.floor(Math.random()*t.length)],s=Math.sign(this.pos.x-n.pos.x)||1,r={wx:n.pos.x+s*.85,wz:n.pos.y+.35,room:n.def.room,key:`visit-${n.def.id}`};if(this.world.nav.isFreeAt(r.wx,r.wz)||(r.wx=n.pos.x,r.wz=n.pos.y+.9),!this.world.nav.isFreeAt(r.wx,r.wz))return!1;let a=performance.now()+3e4;return n.social={with:this,until:a,waiting:!0},this.social={with:n,until:a},this.reserve(r),this.walkTo(r,()=>{let o=5+Math.random()*4;this.faceTowards(n),this.anim.seatY=0,this.forceSit=!1,this.anim.pose="talk",this.emote="\u{1F4AC}",this.social={with:n,until:performance.now()+o*1e3},n.social?.with===this&&(n.path=[],n.arrive=null,n.anim.seatY=n.isSitting?n.anim.seatY:0,n.isSitting||n.faceTowards(this),n.anim.pose=n.isSitting?"sit":"talk",n.emote="\u{1F4AC}",n.social={with:this,until:performance.now()+o*1e3}),this.ambientTimer=o}),this.ambientTimer=30,!0}tryCoffee(){let e=this.world.stationsByRoom.rest,t=["coffee","coffee2","cooler","sofa","sofa2"].map(r=>e[r]).filter(r=>this.isFree(r)),n=this.world.agents.filter(r=>r.def.room!=="rest"&&r.awayFromRoom&&!r.hasDuty()).length;if(!t.length||n>=3)return!1;let s=t[Math.floor(Math.random()*t.length)];return this.reserve(s),this.goStand(s,"idle"),this.emoteOnArrive=s.key.startsWith("sofa")?"\u{1F6CB}":s.key==="cooler"?"\u{1F4A7}":"\u2615",this.ambientTimer=10+Math.random()*8,!0}faceTowards(e){this.goalFacing=Math.atan2(e.pos.x-this.pos.x,e.pos.y-this.pos.y)}react(e,t){t===this||!this.idleAmbient||this.path.length||Math.hypot(t.pos.x-this.pos.x,t.pos.y-this.pos.y)>7||e==="done"&&(this.isSitting||(this.faceTowards(t),this.anim.pose="celebrate"),this.emote="\u{1F44F}",this.reactUntil=performance.now()+2200)}update(e){let t=this.anim;this.waveTimer>0&&(this.waveTimer-=e,this.waveTimer<=0&&this.selected&&!this.hasDuty()&&(t.pose=this.isSitting?"sit":"talk")),this.celebrate>0&&(this.celebrate-=e,this.celebrate<=0&&this.plan(!0)),this.local&&performance.now()>this.local.until&&this.clearLocal();let n=performance.now();if(this.social&&n>this.social.until&&(this.endSocial(),this.emote=null,!this.path.length&&!this.isSitting&&(this.anim.pose="idle")),this.reactUntil&&n>this.reactUntil&&(this.reactUntil=0,this.emote=null,!this.isSitting&&!this.path.length&&(this.anim.pose="idle")),this.path.length){let[a,o]=this.path[0],c=a-this.pos.x,l=o-this.pos.y,u=Math.hypot(c,l),h=(this.anim.rig.flyer?Vv:Hv)*(this.def.species==="turtle"?.75:1)*(this.awayFromRoom||this.returning?1.8:1);if(t.seatY=0,t.pose="idle",u<.06)this.path.shift();else{let d=Math.min(u,h*e);this.pos.x+=c/u*d,this.pos.y+=l/u*d,this.goalFacing=Math.atan2(c,l),t.speed=h}if(!this.path.length&&this.arrive){let d=this.arrive.onArrive,f=this.arrive.station;this.arrive=null,this.pos.set(f.wx,f.wz),t.speed=0,d?.(),this.emoteOnArrive&&(this.emote=this.emoteOnArrive,this.emoteOnArrive=null)}for(let d of this.world.agents){if(d===this)continue;let f=this.pos.x-d.pos.x,g=this.pos.y-d.pos.y,x=Math.hypot(f,g);if(x>.001&&x<.5){let m=(.5-x)*2.5*e,p=this.pos.x+f/x*m,b=this.pos.y+g/x*m;this.world.nav.isFreeAt(p,b)&&this.pos.set(p,b)}}}else t.speed=0;!this.selected&&!this.local&&(this.intent.source!=="server"||this.intent.kind==="idle"||this.intent.kind==="completed"&&!this.celebrate)&&this.ambientEnabled&&!this.path.length&&!this.social&&(this.ambientTimer-=e,this.ambientTimer<=0&&this.ambientStep());let r=this.goalFacing-this.facing;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.facing+=r*Math.min(1,Gv*e),this.selected&&!this.hasDuty()&&!this.path.length&&!this.isSitting&&(this.goalFacing=0),this.root.position.set(this.pos.x,0,this.pos.y),this.root.rotation.y=this.facing,this.forceSit&&(t.w.sit=Math.max(t.w.sit,.98)),t.update(e)}};function Wf(i){i.reserved=new Map;let e=Es.map(t=>new Qu(t,i));return i.agents=e,i.broadcast=(t,n)=>e.forEach(s=>s.react(t,n)),e.forEach((t,n)=>{t.ambientTimer=.8+n*.9+Math.random()*2}),e}var bt='-apple-system, "SF Pro Text", "Segoe UI", Roboto, sans-serif',$v={completed:"#3aa76d",running:"#3a8fd9",active:"#3a8fd9",in_progress:"#3a8fd9",processing:"#3a8fd9",pending:"#c9c2b4",failed:"#d9534f",error:"#d9534f",paused:"#e0a93b"},eh=i=>$v[String(i||"").toLowerCase()]||"#b8b0a2";function Xf(i,e,t,n,s){i.fillStyle="#fbf9f4",i.fillRect(0,0,i.canvas.width,i.canvas.height),i.fillStyle=n,i.fillRect(0,0,e,10),i.fillStyle="#2b2620",i.font=`700 34px ${bt}`,i.textBaseline="top",i.fillText(li(i,t,e-40),22,24),s&&(i.fillStyle="#8a8172",i.font=`500 20px ${bt}`,i.fillText(li(i,s,e-40),22,64))}function wc(i,e,t,n){i.fillStyle="#9a9184",i.font=`500 24px ${bt}`,i.textAlign="center",i.fillText(n,e/2,t/2+10),i.textAlign="left"}function qv(i,e,t){let{ctx:n,canvas:s}=i,r=s.width,a=s.height;if(Xf(n,r,`Tablero \xB7 ${e.short}`,e.accent,t.connected?t.mode==="demo"?"Simulaci\xF3n local":"Registros de misiones":"Sin sesi\xF3n"),!t.connected)return wc(n,r,a,"No consultado");let o=t.ent.snapshot,c=(o.steps||[]).filter(l=>l.department===e.dept).slice(-4).reverse();if(!c.length)return wc(n,r,a,"Sin etapas de misi\xF3n");c.forEach((l,u)=>{let h=104+u*54,d=(o.missions||[]).find(f=>f.id===l.mission_id);n.fillStyle=eh(l.status),Zi(n,22,h,14,38,6),n.fill(),n.fillStyle="#2b2620",n.font=`600 22px ${bt}`,n.fillText(li(n,l.directive||"Etapa",r-80),48,h),n.fillStyle="#8a8172",n.font=`500 17px ${bt}`,n.fillText(li(n,`${(d?.title||"Misi\xF3n").replace("[Simulaci\xF3n] ","")} \xB7 etapa ${l.seq}`,r-80),48,h+24)})}function Yv(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;if(t.fillStyle="#2f3a33",t.fillRect(0,0,s,r),t.fillStyle="#f4efe2",t.font=`700 34px ${bt}`,t.textBaseline="top",t.fillText("Misiones",24,20),t.font=`500 18px ${bt}`,t.fillStyle="#b9c4b8",t.fillText(e.connected?e.mode==="demo"?"SIMULACI\xD3N \xB7 datos locales":"pulse_missions \xB7 pulse_mission_steps":"Sin sesi\xF3n \xB7 no consultado",190,32),!e.connected)return;let a=e.ent.snapshot,o=(a.missions||[]).slice(0,3);if(!o.length){t.fillStyle="#b9c4b8",t.font=`500 26px ${bt}`,t.fillText("Sin misiones registradas",24,r/2);return}let c=(s-48)/o.length;o.forEach((l,u)=>{let h=24+u*c;t.fillStyle="#3c4a41",Zi(t,h,70,c-16,r-90,14),t.fill(),t.fillStyle="#f4efe2",t.font=`700 22px ${bt}`,t.fillText(li(t,l.title.replace("[Simulaci\xF3n] ",""),c-44),h+14,84),t.fillStyle="#c9d3c7",t.font=`500 16px ${bt}`,t.fillText(l.status,h+14,112),(a.steps||[]).filter(f=>f.mission_id===l.id).sort((f,g)=>f.seq-g.seq).slice(0,5).forEach((f,g)=>{let x=140+g*42;t.fillStyle=eh(f.status),Zi(t,h+14,x,c-44,34,9),t.fill(),t.fillStyle="#fff",t.font=`600 17px ${bt}`;let m=ai(Xi(f.department)?.room)?.short||f.department;t.fillText(li(t,`${f.seq}. ${m}`,c-64),h+24,x+8)})})}function Zv(i,e,t){let{ctx:n,canvas:s}=i,r=s.width,a=s.height;if(Xf(n,r,"Traspasos",e.accent,t.connected?"Etapas registradas":"Sin sesi\xF3n"),!t.connected)return wc(n,r,a,"No consultado");let c=(t.ent.snapshot.steps||[]).filter(u=>u.status!=="pending").sort((u,h)=>Date.parse(h.finished_at||h.started_at||0)-Date.parse(u.finished_at||u.started_at||0)).slice(0,5).reverse();if(!c.length)return wc(n,r,a,"Sin traspasos");let l=(r-60)/Math.max(1,c.length);c.forEach((u,h)=>{let d=40+h*l+l/2-10,f=a*.62;h&&(n.strokeStyle="#c9c2b4",n.lineWidth=4,n.beginPath(),n.moveTo(d-l+34,f),n.lineTo(d-34,f),n.stroke()),n.fillStyle=eh(u.status),n.beginPath(),n.arc(d,f,30,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font=`700 22px ${bt}`,n.textAlign="center",n.fillText(String(u.seq),d,f-12),n.fillStyle="#2b2620",n.font=`600 16px ${bt}`,n.fillText(li(n,ai(Xi(u.department)?.room)?.short||"",l-6),d,f+40),n.textAlign="left"})}function jv(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;t.fillStyle="#121820",t.fillRect(0,0,s,r),t.fillStyle="#e8eef5",t.font=`700 30px ${bt}`,t.textBaseline="top",t.fillText("PULSE HQ",24,20),t.fillStyle=e.mode==="demo"?"#f2c14e":e.connected?"#5fd38d":"#8a95a3",t.font=`600 18px ${bt}`,t.fillText(e.mode==="demo"?"SIMULACI\xD3N":e.connected?"Conectado":"Sin sesi\xF3n",190,28);let a=e.summary;if(!a){t.fillStyle="#8a95a3",t.font=`500 24px ${bt}`,t.fillText("Datos no consultados",24,r/2);return}[["En ejecuci\xF3n",a.running,"#5fb3ff"],["Revisiones",a.approvals,"#f2c14e"],["Misiones",a.activeMissions,"#9ad08a"],["Entregables",a.deliverables,"#c9a7ff"]].forEach(([c,l,u],h)=>{let d=24+h%2*(s/2-12),f=76+Math.floor(h/2)*((r-90)/2);t.fillStyle="#1d2632",Zi(t,d,f,s/2-36,(r-110)/2,12),t.fill(),t.fillStyle=u,t.font=`700 46px ${bt}`,t.fillText(String(l),d+16,f+10),t.fillStyle="#9fb0c2",t.font=`500 18px ${bt}`,t.fillText(c,d+16,f+64)})}function Kv(i,e){let{ctx:t,canvas:n}=i,s=n.width,r=n.height;if(t.fillStyle="#16202a",t.fillRect(0,0,s,r),t.fillStyle="#e8eef5",t.font=`700 28px ${bt}`,t.textBaseline="top",t.fillText("Junta",22,18),!e.connected){t.fillStyle="#8a95a3",t.font=`500 22px ${bt}`,t.fillText("No consultado",22,r/2);return}let o=(e.ent.snapshot.missions||[]).filter(c=>c.status==="awaiting_ceo");t.fillStyle="#f2c14e",t.font=`700 52px ${bt}`,t.fillText(String(o.length),22,64),t.fillStyle="#9fb0c2",t.font=`500 20px ${bt}`,t.fillText("misiones esperan tu decisi\xF3n",22,124),o[0]&&(t.fillStyle="#e8eef5",t.font=`600 20px ${bt}`,t.fillText(li(t,o[0].title.replace("[Simulaci\xF3n] ",""),s-44),22,160))}function Jv(i,e,t,n=0){let{ctx:s,canvas:r}=i,a=r.width,o=r.height;if(s.fillStyle="#141b22",s.fillRect(0,0,a,o),s.fillStyle="#5f6b78",s.font=`600 16px ${bt}`,s.textBaseline="top",s.fillText("Decorativo",a-110,12),e==="chatScreen")for(let c=0;c<5;c++){let l=c%2===0;s.fillStyle=l?"#2b3642":t.accent,Zi(s,l?20:a*.35,40+c*38,a*.55,28,12),s.fill()}else{s.strokeStyle=t.accent,s.lineWidth=4,s.beginPath();for(let c=0;c<=a;c+=12){let l=o*.6-Math.sin(c/40+n)*30-c/a*60;c?s.lineTo(c,l):s.moveTo(c,l)}s.stroke();for(let c=0;c<8;c++){s.fillStyle=c%2?"#3a78c2":"#5fb3ff";let l=20+c*37%60;s.fillRect(20+c*(a-40)/8,o-20-l,(a-40)/8-8,l)}}}function $f(i,e){for(let t of i){let n=ai(t.room);if(t.kind==="missionBoard")Yv(t.surface,e);else if(t.kind==="board"&&t.boardKind==="handoffs")Zv(t.surface,n,e);else if(t.kind==="board")qv(t.surface,n,e);else if(t.kind==="wallScreen"&&t.screen==="company")jv(t.surface,e);else if(t.kind==="wallScreen"&&t.screen==="missions-mini")Kv(t.surface,e);else if(t.kind==="chatScreen"||t.kind==="dataWall"){t.drawn||(Jv(t.surface,t.kind,n),t.drawn=!0,t.surface.commit());continue}t.surface.commit()}}var Qv={running:{icon:"\u2699\uFE0E",text:"Trabajando",cls:"run"},review:{icon:"!",text:"Te necesita",cls:"review"},failed:{icon:"\u26A0\uFE0E",text:"Fall\xF3",cls:"fail"},mission:{icon:"\u25C6",text:"En misi\xF3n",cls:"mission"},completed:{icon:"\u2713",text:"Resultado",cls:"done"},receiving:{icon:"\u2193",text:"Recibiendo",cls:"recv"},sending:{icon:"\u2026",text:"Enviando\u2026",cls:"local"}},Tc=class{constructor(e,t,{onAgent:n,onHotspot:s}){this.el=e,this.stage=t,this.onAgent=n,this.onHotspot=s,this.tags=new Map,this.pings=new Map,e.addEventListener("click",r=>{let a=r.target.closest("[data-agent]");if(a){r.stopPropagation(),n(a.dataset.agent);return}let o=r.target.closest("[data-hot]");o&&(r.stopPropagation(),s(o.dataset.hot,o.dataset.room))})}ensureTag(e){if(this.tags.has(e.def.id))return this.tags.get(e.def.id);let t=document.createElement("button");return t.className="agent-tag",t.dataset.agent=e.def.id,t.type="button",t.setAttribute("aria-label",`${e.def.name}, ${e.room.name}`),t.innerHTML=`<span class="bubble" hidden></span><span class="name"><i></i>${e.def.name}</span>`,this.el.appendChild(t),this.tags.set(e.def.id,t),t}ensurePing(e){let t=`${e.room}:${e.key}:${e.item.wx.toFixed(1)}`;if(this.pings.has(t))return this.pings.get(t);let n=gc[e.key]||{title:e.key},s=document.createElement("button");s.className="hot-ping",s.type="button",s.dataset.hot=e.key,s.dataset.room=e.room,s.setAttribute("aria-label",n.title),s.innerHTML=`<span class="dot"></span><span class="count" hidden></span><span class="label">${n.title}</span>`,this.el.appendChild(s);let r=new Nt().setFromObject(e.obj),a=r.getCenter(new D),o={el:s,pos:new D(a.x,Math.min(r.max.y+.15,2.6),Math.min(a.z+.05,r.max.z)),h:e};return this.pings.set(t,o),o}setCounts(e){this.counts=e}update(e,t,n,{selectedId:s,labelsFor:r,sheetOpen:a}){let o=this.stage.roomIndex;for(let c of e){let l=this.ensureTag(c),u=this.stage.project(c.headWorld),d=Math.abs(c.pos.x-this.stage.camX)<6.2&&!u.behind&&u.x>-60&&u.x<this.stage.w+60&&u.y>-40&&u.y<this.stage.h+40;if(l.style.display=d?"":"none",!d)continue;l.style.transform=`translate(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px)`;let f=c.local?.kind==="sending"&&!["receiving","running"].includes(c.intent.kind)?"sending":c.intent.kind,g=Qv[f],x=l.firstElementChild;if(g){x.hidden=!1;let m=f==="mission"&&c.intent.mission?`Misi\xF3n \xB7 etapa ${c.intent.mission.seq}`:f==="review"&&c.intent.approvals?.length>1?`${c.intent.approvals.length} revisiones`:f==="completed"&&c.intent.label==="Resultado recibido"?"Resultado recibido":g.text,p=`<b>${g.icon}</b><em>${m}</em>`;x.dataset.html!==p&&(x.innerHTML=p,x.dataset.html=p,x.className=`bubble ${g.cls}`)}else if(c.emote&&c.intent.source!=="server"||c.emote&&c.intent.kind==="idle"){let m=!c.path.length,p=`<b>${c.emote}</b>`;x.hidden=!m,m&&x.dataset.html!==p&&(x.innerHTML=p,x.dataset.html=p,x.className="bubble amb")}else x.hidden=!0;l.classList.toggle("selected",c.def.id===s),l.classList.toggle("dim",a&&c.def.id!==s),l.classList.toggle("far",c.def.room!==n&&c.def.id!==s)}for(let c of t){let l=this.ensurePing(c),u=this.counts?.[`${c.room}:${c.key}`];if(!(c.room===n&&!a&&(c.key!=="tray"||u))){l.el.style.display="none";continue}let d=this.stage.project(l.pos);l.el.style.display="",l.el.style.transform=`translate(${d.x.toFixed(1)}px, ${d.y.toFixed(1)}px)`;let f=this.counts?.[`${c.room}:${c.key}`],g=l.el.querySelector(".count");f?(g.hidden=!1,g.textContent=f,l.el.classList.add("has-count")):(g.hidden=!0,l.el.classList.remove("has-count"))}}};var qf=new Set(["running","processing","in_progress"]),ey=new Set(["pending","awaiting_ceo","waiting_approval"]);function Ri(i,e=Date.now()){if(!i||!i.source||i.source!=="server"||!i.record)return{kind:"unconnected",label:"Muestra sin conexi\xF3n",actionable:!1};let t=i.record,n=String(t.status||"").toLowerCase(),s=Date.parse(t.updated_at||t.started_at||t.created_at||"");return qf.has(n)&&Number.isFinite(s)&&Math.abs(e-s)<=15*6e4?{kind:"running",label:"En ejecuci\xF3n verificada",actionable:!0}:ey.has(n)?{kind:"review",label:"Pendiente de revisi\xF3n",actionable:!0}:n==="completed"?{kind:"completed",label:"Trabajo registrado",actionable:!0}:{kind:"idle",label:qf.has(n)?"Estado sin actualizar":"Disponible",actionable:!1}}var Ji={"Direcci\xF3n estrat\xE9gica":"ulises","Marketing y crecimiento":"kiki","Producci\xF3n de contenido":"mia","Ventas y patrocinios":"rocco","Relaciones p\xFAblicas y alianzas":"lila","Eventos y experiencias":"luz",Comunidad:"cata","Inteligencia de mercado":"iris","Finanzas y administraci\xF3n":"tomas","Tecnolog\xEDa y automatizaci\xF3n":"bit"},jf={ulises:"Ulises",kiki:"Kiki",mia:"M\xEDa",rocco:"Rocco",lila:"Lila",luz:"Luz",cata:"Cata",iris:"Iris",tomas:"Tom\xE1s",bit:"Bit",calidad:"Calidad",ceo:"CEO"},Kf=Object.fromEntries(Object.entries(Ji).map(([i,e])=>[e,i])),Yf=new Set(["planning","running","reviewing"]),ty=7*6e4,Zf=30*6e4,th={plan:"Planificando el trabajo",analyze:"Analizando la tarea",act:"Usando herramientas",correct:"Corrigiendo lo que pidi\xF3 Calidad",evaluate:"Calidad revisa el entregable"},Ct=i=>Date.parse(i||"")||0,Rs=i=>i?.engine==="core",Ac=i=>String(i||"").slice(0,8);function ny(i,e,t=Ct(e.claimed_at||e.started_at)-2e3){return(i.runs||[]).filter(n=>n.step_id===e.id&&Ct(n.created_at)>=t).sort((n,s)=>Ct(n.created_at)-Ct(s.created_at))}function Jf(i,e,t=Date.now()){let n=Ji[e];if(!n)return null;let s=(i.missions||[]).filter(Rs);if(!s.length)return null;let r=Object.fromEntries(s.map(f=>[f.id,f])),a=i.messages||[],o=i.runs||[];if(n==="ulises"){let f=a.filter(m=>m.from_agent==="ulises"&&m.to_agent==="ceo"&&m.kind==="result"&&m.artifact?.mode==="reply"&&t-Ct(m.created_at)<=Zf&&r[m.mission_id]).sort((m,p)=>Ct(p.created_at)-Ct(m.created_at))[0],g=s.some(m=>m.status==="planning");if(f&&!g)return{kind:"completed",label:"Resultado recibido",detail:"Ulises respondi\xF3 directamente (sin abrir misi\xF3n)",mission:{id:f.mission_id,title:r[f.mission_id].title,seq:0},evidence:{mission:f.mission_id,message:f.id}};let x=s.filter(m=>m.status==="planning").sort((m,p)=>Ct(p.created_at)-Ct(m.created_at))[0];if(x){let m=a.find(_=>_.mission_id===x.id&&_.from_agent==="ceo"&&_.kind==="request"),p=o.filter(_=>_.mission_id===x.id&&_.phase==="plan").sort((_,v)=>Ct(v.created_at)-Ct(_.created_at))[0],b={id:x.id,title:x.title,seq:0};return p?{kind:"running",label:"Trabajando",detail:`${th.plan} \xB7 ${p.provider}/${p.model}`,mission:b,evidence:{mission:x.id,run:p.id}}:{kind:"receiving",label:"Recibiendo",detail:x.claimed_at?"El motor tom\xF3 la misi\xF3n; preparando el plan":"Instrucci\xF3n registrada en Supabase; esperando al motor",mission:b,evidence:{mission:x.id,message:m?.id}}}}let c=(i.steps||[]).filter(f=>f.agent_id===n&&r[f.mission_id]),l=c.filter(f=>f.status==="running"&&t-Ct(f.claimed_at||f.started_at)<=ty&&Yf.has(r[f.mission_id].status)).sort((f,g)=>Ct(g.claimed_at)-Ct(f.claimed_at))[0];if(l){let f=r[l.mission_id],g={id:f.id,title:f.title,seq:l.seq,directive:l.directive},x=ny(i,l);if(!x.length)return{kind:"receiving",label:"Recibiendo",detail:`Etapa ${l.seq} reclamada por el motor${l.attempt?` \xB7 intento ${l.attempt+1}`:""}`,mission:g,evidence:{mission:f.id,step:l.id}};let m=x[x.length-1];return{kind:"running",label:"Trabajando",detail:m.agent_id==="calidad"?th.evaluate:`${th[m.phase]||"Trabajando"} \xB7 ${x.filter(b=>b.agent_id!=="calidad").length} llamadas a ${m.model}`,mission:g,evidence:{mission:f.id,step:l.id,run:m.id}}}let u=c.filter(f=>f.status==="completed"&&t-Ct(f.finished_at)<=Zf).sort((f,g)=>Ct(g.finished_at)-Ct(f.finished_at))[0];if(u){let f=a.find(g=>g.step_id===u.id&&g.kind==="result"&&g.from_agent===n);if(f){let g=r[u.mission_id];return{kind:"completed",label:"Resultado recibido",detail:`Etapa ${u.seq} aprobada por Calidad${u.review?.score!=null?` (${u.review.score}/10)`:""}`,mission:{id:g.id,title:g.title,seq:u.seq},evidence:{mission:g.id,step:u.id,message:f.id,deliverable:f.artifact?.deliverable_id}}}}let h=c.find(f=>f.status==="failed"&&r[f.mission_id].status==="needs_attention");if(h)return{kind:"failed",label:"Etapa sin completar",detail:h.error||"Error sin detalle",error:h.error||"Error sin detalle",mission:{id:h.mission_id,title:r[h.mission_id].title,seq:h.seq},evidence:{mission:h.mission_id,step:h.id}};let d=c.filter(f=>f.status==="pending"&&Yf.has(r[f.mission_id].status)).sort((f,g)=>f.seq-g.seq)[0];if(d){let f=r[d.mission_id];return{kind:"mission",label:`Misi\xF3n \xB7 etapa ${d.seq} en espera`,detail:d.attempt?`Calidad pidi\xF3 cambios \xB7 intento ${d.attempt+1}`:"Espera a que terminen las etapas previas",mission:{id:f.id,title:f.title,seq:d.seq,directive:d.directive},evidence:{mission:f.id,step:d.id}}}return null}function Qf(i,e){let t=Ji[e];if(!t)return[];let n=(i.missions||[]).filter(Rs),s=i.messages||[],r=[];if(t==="ulises")for(let a of n){let o=s.filter(c=>c.mission_id===a.id&&(c.to_agent==="ceo"||c.from_agent==="ceo"&&c.to_agent==="ulises"||c.to_agent==="ulises"&&["result","blocker"].includes(c.kind))).sort((c,l)=>Ct(c.created_at)-Ct(l.created_at));r.push({type:"mission",at:a.created_at,mission:a,messages:o})}else for(let a of(i.steps||[]).filter(o=>o.agent_id===t&&n.some(c=>c.id===o.mission_id))){let o=n.find(l=>l.id===a.mission_id),c=s.filter(l=>l.step_id===a.id).sort((l,u)=>Ct(l.created_at)-Ct(u.created_at));r.push({type:"step",at:c[0]?.created_at||a.started_at||o.created_at,mission:o,step:a,messages:c})}return r}function Rc(i,{missionId:e,stepId:t}={}){let n=(i.runs||[]).filter(s=>(!e||s.mission_id===e)&&(!t||s.step_id===t));return{total:n.length,ok:n.filter(s=>s.status==="ok").length,retries:n.filter(s=>s.status!=="ok").length,tokens:n.reduce((s,r)=>s+(r.input_tokens||0)+(r.output_tokens||0),0),models:[...new Set(n.map(s=>`${s.provider}/${s.model}`))]}}var J=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),iy={planning:"Planificando",needs_attention:"Requiere atenci\xF3n",queued:"En cola",running:"En ejecuci\xF3n",processing:"En ejecuci\xF3n",in_progress:"En ejecuci\xF3n",completed:"Completado",failed:"Fall\xF3",error:"Fall\xF3",pending:"Pendiente",paused:"En pausa",approved:"Aprobada",rejected:"Rechazada",awaiting_ceo:"Espera al CEO",reviewed:"Revisada",revising:"En revisi\xF3n",active:"Activa",cancelled:"Cancelada"},Xt=i=>iy[String(i||"").toLowerCase()]||J(i||"Sin estado");function jt(i){let e=Date.parse(i||"");if(!e)return"";let t=Math.max(0,(Date.now()-e)/1e3);return t<50?"hace un momento":t<3600?`hace ${Math.round(t/60)} min`:t<86400?`hace ${Math.round(t/3600)} h`:new Date(e).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}var Pn=(i,e="")=>`<img class="portrait ${e}" src="./assets/portraits/${i.portrait}.webp" alt="" loading="lazy">`,_a=(i,e=360)=>{let t=String(i||"");return t.length>e?J(t.slice(0,e))+"\u2026":J(t)},ui=i=>i==="demo"?'<p class="note sim">Datos de la SIMULACI\xD3N local. Nada de esto existe en Supabase.</p>':"";function ep(i){return i.mode==="demo"?{cls:"sim",text:"Simulaci\xF3n"}:i.connected?{cls:"ok",text:i.ent.loading?"Actualizando\u2026":"CEO conectado"}:{cls:"off",text:"Sin sesi\xF3n"}}var rh=i=>i?.mode==="demo";function sy(i,e){if(!i)return"";let t=[["mission","misi\xF3n"],["step","etapa"],["run","ejecuci\xF3n"],["message","mensaje"],["deliverable","archivo"]].filter(([n])=>i[n]).map(([n,s])=>`${s} ${J(Ac(i[n]))}`);return t.length?`<small class="evidence">${rh(e)?"Registro SIMULADO (no existe en Supabase)":"Evidencia en Supabase"}: ${t.join(" \xB7 ")}</small>`:""}function ry(i,e,t){if(e?.kind==="sending"&&!["receiving","running"].includes(i.kind))return'<span class="pill local">Enviando instrucci\xF3n \xB7 a\xFAn sin confirmar</span>';if(i.evidence)return`<span class="pill ${{receiving:"recv",running:"run",completed:"done",failed:"fail",mission:"mission"}[i.kind]||"idle"}">${J(i.label)} \xB7 ${rh(t)?"simulaci\xF3n":"servidor"}</span>${i.detail?`<small class="detail">${J(i.detail)}</small>`:""}${sy(i.evidence,t)}`;let n={running:["run","Trabajando \xB7 servidor"],review:["review","Revisi\xF3n pendiente \xB7 servidor"],failed:["fail","\xDAltimo encargo fall\xF3 \xB7 servidor"],mission:["mission","En misi\xF3n \xB7 servidor"],completed:["done","Resultado reciente \xB7 servidor"],idle:["idle","Sin encargos en curso"],unconnected:["off","Actividad no consultada"]},[s,r]=n[i.kind]||n.idle;return`<span class="pill ${s}">${r}</span>`}var Cc=i=>Ji[i]==="ulises",nh=i=>jf[i]||J(i),ay=i=>Xi(Kf[i]),tp=i=>new Set((i.steps||[]).filter(e=>e.agent_id&&e.task_id).map(e=>e.task_id));function ih(i,e){let t=ay(i.from_agent),n=i.kind==="blocker"?"error":(i.from_agent==="calidad","relay"),s={request:"encargo",result:"resultado",review:"revisi\xF3n",feedback:"correcciones",decision:"decisi\xF3n",blocker:"bloqueo",notice:"aviso"}[i.kind]||i.kind;return`<div class="msg agent ${n}">${t?Pn(t,"xs"):'<span class="portrait xs qa">\u2713</span>'}<div><p><b class="from">${nh(i.from_agent)} \u2192 ${nh(i.to_agent)}</b> ${_a(i.content,420)}</p><small class="kind">${J(s)} \xB7 ${jt(i.created_at)} \xB7 mensaje ${J(Ac(i.id))}</small></div></div>`}function sh(i,e){let t=i.ent.snapshot,n=(t.deliverables||[]).filter(r=>r.task_id&&r.task_id===e.task_id),s=Rc(t,{stepId:e.id});return`<div class="stepcard ${J(String(e.status))}"><header><b>Etapa ${J(e.seq)} \xB7 ${nh(e.agent_id)}</b><span class="pill ${e.status==="completed"?"done":e.status==="failed"?"fail":e.status==="running"?"run":"idle"}">${Xt(e.status)}</span></header><p>${_a(e.directive,160)}</p><small class="muted">${s.total} ejecuciones de IA \xB7 ${s.tokens.toLocaleString("es-MX")} tokens${e.attempt?` \xB7 intento ${e.attempt+1}`:""}${e.review?.score!=null?` \xB7 Calidad ${e.review.score}/10`:""}</small>${n.length?`<div class="chips">${n.map(r=>`<button class="chip file" data-action="file" data-id="${J(r.id)}">\u2913 ${J(r.filename)}</button>`).join("")}</div>`:""}</div>`}function oy(i,e,t){let n=i.ent.snapshot,s=e.mission;if(e.type==="mission"){let o=e.messages.find(g=>g.from_agent==="ceo"&&g.kind==="request"),c=(n.steps||[]).filter(g=>g.mission_id===s.id).sort((g,x)=>g.seq-x.seq),l=(n.deliverables||[]).filter(g=>g.mission_id===s.id&&g.review_status==="approved"),u=(n.approvals||[]).filter(g=>g.status==="pending"&&c.some(x=>x.task_id&&x.task_id===g.task_id)),h=Rc(n,{missionId:s.id}),d=e.messages.filter(g=>g!==o),f=s.status==="planning"&&!d.length;return`<div class="msg ceo"><div><p>${J(s.objective)}</p><small>T\xFA \xB7 ${jt(s.created_at)} \xB7 ${rh(i)?"registro SIMULADO":"registrado en Supabase"} \xB7 misi\xF3n ${J(Ac(s.id))}${o?.artifact?.source==="office"?" \xB7 desde la oficina":""}</small></div></div>`+d.map(g=>ih(g)).join("")+(f?`<div class="msg agent working">${Pn(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> ${s.claimed_at?"Preparando el plan":"Recibido; esperando al motor"}</p><small>Estado del servidor: ${Xt(s.status)}</small></div></div>`:"")+(c.length?`<div class="msg agent">${Pn(t,"xs")}<div><p><b>Progreso de la misi\xF3n</b> \xB7 ${Xt(s.status)} \xB7 ${h.total} ejecuciones de IA (${h.tokens.toLocaleString("es-MX")} tokens)</p>${c.map(g=>sh(i,g)).join("")}${l.length?`<div class="chips">${l.map(g=>`<button class="chip file" data-action="file" data-id="${J(g.id)}">\u2913 ${J(g.filename)}</button>`).join("")}</div>`:""}${u.map(xa).join("")}<div class="chips"><button class="chip" data-action="mission" data-id="${J(s.id)}">Ver misi\xF3n completa</button></div></div></div>`:"")}let r=e.step,a=r.status==="running";return e.messages.map(o=>ih(o)).join("")+sh(i,r)+(a?`<div class="msg agent working">${Pn(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> Etapa en curso</p><small>Registro del servidor \xB7 reclamada ${jt(r.claimed_at)}</small></div></div>`:"")}function cy(i,e,t){let n=i.ent.snapshot,s=tp(n),a=[...(n.tasks||[]).filter(o=>o.department===e&&!s.has(o.id)).map(o=>({type:"task",at:o.created_at,task:o})),...Qf(n,e)].sort((o,c)=>Date.parse(o.at||0)-Date.parse(c.at||0)).slice(-10);return a.length?a.map(o=>o.type==="task"?ly(i,o.task,t):oy(i,o,t)).join(""):`<div class="empty"><p>Todav\xEDa no hay encargos registrados con ${J(t.name)}.</p><p class="muted">${Cc(e)?"Escr\xEDbele abajo: tu instrucci\xF3n se registra en Supabase y Ulises la convierte en una misi\xF3n con otros agentes y revisi\xF3n de Calidad.":"Escribe una instrucci\xF3n abajo: se registrar\xE1 como tarea y la ejecutar\xE1 el motor existente."}</p></div>`}function ly(i,e,t){let n=i.ent.snapshot;{let s=(n.deliverables||[]).filter(c=>c.task_id===e.id),r=(n.approvals||[]).filter(c=>c.task_id===e.id),a=Ri({source:"server",record:e}).kind==="running",o;return a||["queued","running","processing","in_progress"].includes(e.status)?o=`<div class="msg agent working">${Pn(t,"xs")}<div><p><span class="typing"><i></i><i></i><i></i></span> ${a?"Trabajando en ello":"Estado sin actualizar"}</p><small>Registro del servidor \xB7 ${Xt(e.status)} \xB7 ${jt(e.updated_at||e.created_at)}</small></div></div>`:e.status==="completed"?o=`<div class="msg agent">${Pn(t,"xs")}<div><p>${_a(e.result_preview??e.result)}</p><div class="chips">${s.map(c=>`<button class="chip file" data-action="file" data-id="${J(c.id)}">\u2913 ${J(c.filename||c.title)}</button>`).join("")}<button class="chip" data-action="task" data-id="${J(e.id)}">Ver completo</button></div>${r.filter(c=>c.status==="pending").map(c=>xa(c)).join("")}<small>${jt(e.updated_at||e.created_at)}${r.length&&!r.some(c=>c.status==="pending")?" \xB7 revisi\xF3n "+Xt(r[0].status).toLowerCase():""}</small></div></div>`:o=`<div class="msg agent error">${Pn(t,"xs")}<div><p><b>No se complet\xF3.</b> ${_a(e.error||"Error sin detalle",220)}</p><div class="chips"><button class="chip" data-action="retry" data-id="${J(e.id)}">Reintentar (nuevo encargo)</button><button class="chip" data-action="task" data-id="${J(e.id)}">Detalle</button></div><small>${Xt(e.status)} \xB7 ${jt(e.updated_at||e.created_at)}</small></div></div>`,`<div class="msg ceo"><div><p>${J(e.instruction)}</p><small>T\xFA \xB7 ${jt(e.created_at)}</small></div></div>${o}`}}function xa(i){return`<div class="approval"><div><b>${J(i.title||"Revisi\xF3n del CEO")}</b>${i.description?`<small>${J(i.description)}</small>`:""}</div><div class="row"><button class="btn ghost" data-action="decide" data-choice="rejected" data-id="${J(i.id)}">Rechazar</button><button class="btn ok" data-action="decide" data-choice="approved" data-id="${J(i.id)}">Aprobar</button></div></div>`}function np(i,e){let t=i.ent.snapshot,n=tp(t),s=(t.tasks||[]).filter(d=>d.department===e&&!n.has(d.id)),r=(t.approvals||[]).filter(d=>d.department===e&&d.status==="pending"),a=(t.steps||[]).filter(d=>d.department===e).slice(-6).reverse(),o=Ji[e],c=s.filter(d=>["queued","running","processing","in_progress"].includes(d.status)),l=s.filter(d=>!c.includes(d)).slice(0,6),u=(t.deliverables||[]).filter(d=>s.some(f=>f.id===d.task_id)||o&&d.agent_id===o).slice(0,8),h=(d,f,g)=>`<section class="sec"><h4>${d}</h4>${f||`<p class="muted">${g}</p>`}</section>`;return h("Te necesita",r.map(xa).join(""),"Sin revisiones pendientes.")+h("En curso",c.map(d=>`<button class="row-item" data-action="task" data-id="${J(d.id)}"><span class="ic run">\u2699\uFE0E</span><span><b>${J(d.instruction)}</b><small>${Xt(d.status)} \xB7 ${jt(d.updated_at||d.created_at)}</small></span></button>`).join(""),"Nada en ejecuci\xF3n seg\xFAn el servidor.")+h("Misiones",a.map(d=>`<button class="row-item" data-action="mission" data-id="${J(d.mission_id)}"><span class="ic mission">\u25C6</span><span><b>${J(d.directive||"Etapa de misi\xF3n")}</b><small>${J((t.missions||[]).find(f=>f.id===d.mission_id)?.title||"Misi\xF3n")} \xB7 etapa ${J(d.seq)} \xB7 ${Xt(d.status)}</small></span></button>`).join(""),"Sin etapas de misi\xF3n asignadas.")+h("Recientes",l.map(d=>`<button class="row-item" data-action="task" data-id="${J(d.id)}"><span class="ic ${d.status==="completed"?"done":"fail"}">${d.status==="completed"?"\u2713":"\u26A0\uFE0E"}</span><span><b>${J(d.instruction)}</b><small>${Xt(d.status)} \xB7 ${jt(d.updated_at||d.created_at)}</small></span></button>`).join(""),"Sin trabajos anteriores.")+h("Entregables",u.map(Lc).join(""),"Sin archivos generados.")}var uy={approved:"aprobado por Calidad",rejected:"devuelto por Calidad",pending:"en revisi\xF3n"},Lc=i=>`<button class="row-item" data-action="file" data-id="${J(i.id)}"><span class="ic file">\u2913</span><span><b>${J(i.title||i.filename)}</b><small>${J(i.filename||"")}${i.version?` \xB7 v${J(i.version)}`:""}${i.review_status?` \xB7 ${J(uy[i.review_status]||i.review_status)}`:""}${i.size_bytes?` \xB7 ${Math.max(1,Math.round(i.size_bytes/1024))} KB`:""} \xB7 ${jt(i.created_at)}</small></span></button>`;function Qi(i){return`<div class="empty locked"><p><b>Actividad no consultada.</b></p><p class="muted">Inicia sesi\xF3n como CEO para ver encargos reales${i?` y hablar con ${J(i)}`:""}. Tambi\xE9n puedes abrir la simulaci\xF3n local para probar el recorrido sin tocar datos.</p><div class="row"><button class="btn" data-action="access">Acceso del CEO</button><button class="btn ghost" data-action="demo">Probar simulaci\xF3n</button></div></div>`}function ip(i,e,t="chat"){let n=ai(e.room),s=n.dept,r=i.agentsById[e.id],a=(i.ent?.snapshot.roles||[]).find(h=>h.department===s),o=i.sending[s],c=`<header class="sheet-head agent">${Pn(e,"lg")}<div class="who"><small>${J(n.name)}</small><h3>${J(e.name)}</h3><p>${J(a?.professional_title||e.role)}</p>${ry(r.intent,r.local,i)}</div><button class="close" data-action="close" aria-label="Volver a la oficina">\xD7</button></header>
  <div class="tabs" role="tablist">${[["chat","Conversaci\xF3n"],["work","Trabajo"],["profile","Perfil"]].map(([h,d])=>`<button role="tab" aria-selected="${t===h}" class="${t===h?"on":""}" data-action="tab" data-tab="${h}">${d}</button>`).join("")}</div>`,l,u="";return i.connected?t==="chat"?(l=`<div class="thread">${cy(i,s,e)}</div>${ui(i.mode)}`,u=`<form class="composer" data-action="send"><textarea name="instruction" rows="1" placeholder="${Cc(s)?"Encargo para Ulises: qu\xE9 quieres lograr y qu\xE9 esperas recibir\u2026":`Instrucci\xF3n para ${J(e.name)}\u2026`}" maxlength="${Cc(s)?1500:2e3}" ${o?"disabled":""}></textarea><button class="send" ${o?"disabled":""} aria-label="Enviar instrucci\xF3n">${o?'<span class="spin"></span>':"\u2191"}</button></form><p class="composer-note">${Cc(s)?o?"Registrando la instrucci\xF3n en Supabase\u2026":"Se registra en Supabase y abre una misi\xF3n de <code>pulse-core</code>: Ulises planifica, delega en otros agentes y Calidad revisa cada entrega. M\xEDnimo 20 caracteres.":o?"Esperando al motor <code>pulse-run</code>\u2026 el estado se actualiza desde el servidor.":"Se registra como tarea y la ejecuta <code>pulse-run</code> (una llamada a Gemini). Para trabajo entre varios agentes, escr\xEDbele a Ulises."}</p>`):t==="work"?l=np(i,s)+ui(i.mode):l=`<section class="sec contract">${a?`<h4>Contrato profesional</h4><dl><dt>Puesto</dt><dd>${J(a.professional_title)}</dd><dt>Prop\xF3sito</dt><dd>${J(a.purpose)}</dd><dt>Entregable</dt><dd>${J(a.output_contract)}</dd><dt>Criterios de aceptaci\xF3n</dt><dd>${J(a.acceptance_criteria)}</dd>${a.handoff_to?`<dt>Traspasa a</dt><dd>${J(a.handoff_to)}</dd>`:""}</dl>`:'<p class="muted">No hay contrato registrado para este departamento.</p>'}<p class="note">${J(e.name)} es el personaje visual de ${J(n.name)}. El nombre y la especie son provisionales y no identifican a un agente individual del backend.</p></section>`:l=Qi(e.name),{html:c+`<div class="sheet-body">${l}</div>`+u,size:"agent"}}function sp(i,e){let t=i.ent.snapshot,n=(t.tasks||[]).find(u=>u.id===e),s=i.taskResults?.[e],r=n?{...n,result:s?.result??n.result??n.result_preview,sources:s?.sources??n.sources,loading:!s&&!n.result&&n.status==="completed"}:null;if(!r)return{html:'<header class="sheet-head"><div class="who"><h3>Encargo</h3></div><button class="close" data-action="back">\u2039</button></header><div class="sheet-body"><p class="muted">El registro ya no est\xE1 en la instant\xE1nea actual.</p></div>',size:"mid"};let a=Xi(r.department),o=(t.deliverables||[]).filter(u=>u.task_id===r.id),c=(t.approvals||[]).filter(u=>u.task_id===r.id),l=Array.isArray(r.sources)?r.sources:[];return{html:`<header class="sheet-head">${a?Pn(a,"md"):""}<div class="who"><small>${J(r.department)}</small><h3>Encargo</h3><span class="pill ${r.status==="completed"?"done":r.status==="failed"?"fail":"run"}">${Xt(r.status)}</span></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Instrucci\xF3n</h4><p>${J(r.instruction)}</p><small class="muted">Creado ${jt(r.created_at)} \xB7 actualizado ${jt(r.updated_at)}</small></section>
  ${r.result?`<section class="sec"><h4>Resultado</h4><div class="result">${J(r.result)}</div>${r.loading?'<p class="muted small">Cargando el texto completo\u2026</p>':""}</section>`:""}
  ${r.error?`<section class="sec"><h4>Error</h4><p class="err">${J(r.error)}</p><button class="btn" data-action="retry" data-id="${J(r.id)}">Reintentar como nuevo encargo</button></section>`:""}
  ${l.length?`<section class="sec"><h4>Fuentes</h4>${l.slice(0,8).map(u=>`<p class="src">${J(typeof u=="string"?u:u.title||u.url||JSON.stringify(u))}</p>`).join("")}</section>`:""}
  ${o.length?`<section class="sec"><h4>Entregables</h4>${o.map(Lc).join("")}</section>`:""}
  ${c.length?`<section class="sec"><h4>Revisi\xF3n</h4>${c.map(u=>u.status==="pending"?xa(u):`<p>${J(u.title)} \xB7 <b>${Xt(u.status)}</b></p>`).join("")}</section>`:""}${ui(i.mode)}</div>`,size:"tall"}}function hy(i,e){let t=i.ent.snapshot,n=(t.steps||[]).filter(c=>c.mission_id===e.id).sort((c,l)=>c.seq-l.seq),s=(t.messages||[]).filter(c=>c.mission_id===e.id).sort((c,l)=>Date.parse(c.created_at)-Date.parse(l.created_at)),r=(t.deliverables||[]).filter(c=>c.mission_id===e.id),a=Rc(t,{missionId:e.id}),o=e.status==="paused"||e.status==="needs_attention"?[["resume","Reanudar"]]:["planning","running"].includes(e.status)?[["pause","Pausar"],["cancel","Cancelar"]]:[];return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Misi\xF3n \xB7 motor multiagente</small><h3>${J(e.title)}</h3><span class="pill mission">${Xt(e.status)}</span><small class="evidence">misi\xF3n ${J(e.id)}</small></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Encargo del CEO</h4><p>${J(e.objective||"")}</p>${e.last_error?`<p class="err">${J(e.last_error)}</p>`:""}</section>
  <section class="sec"><h4>Ejecuci\xF3n real</h4><div class="kpis"><div class="kpi"><b>${a.total}</b><small>llamadas de IA</small></div><div class="kpi"><b>${a.tokens.toLocaleString("es-MX")}</b><small>tokens</small></div><div class="kpi"><b>${s.length}</b><small>mensajes</small></div><div class="kpi"><b>${r.length}</b><small>archivos</small></div></div><p class="muted small">${J(a.models.join(", ")||"Sin ejecuciones todav\xEDa")}${a.retries?` \xB7 ${a.retries} reintentos`:""}</p></section>
  <section class="sec"><h4>Etapas</h4>${n.map(c=>sh(i,c)).join("")||'<p class="muted">Ulises a\xFAn no registra el plan.</p>'}</section>
  <section class="sec"><h4>Conversaci\xF3n entre agentes</h4>${s.slice(-24).map(c=>ih(c)).join("")||'<p class="muted">Sin mensajes.</p>'}</section>
  ${r.length?`<section class="sec"><h4>Archivos</h4>${r.map(Lc).join("")}</section>`:""}
  ${o.length?`<section class="sec"><h4>Control del CEO</h4><div class="row wrap">${o.map(([c,l])=>`<button class="btn ghost" data-action="mission-op" data-op="${c}" data-id="${J(e.id)}">${l}</button>`).join("")}</div><p class="muted small">Cada acci\xF3n llama a <code>pulse-core</code>; el estado mostrado es el que devuelve el servidor.</p></section>`:""}${ui(i.mode)}</div>`,size:"tall"}}function rp(i,e){let t=i.ent.snapshot,n=(t.missions||[]).find(a=>a.id===e);if(n&&Rs(n))return hy(i,n);if(!n)return{html:'<header class="sheet-head"><div class="who"><h3>Misi\xF3n</h3></div><button class="close" data-action="back">\u2039</button></header><div class="sheet-body"><p class="muted">Misi\xF3n no disponible.</p></div>',size:"mid"};let s=(t.steps||[]).filter(a=>a.mission_id===e).sort((a,o)=>a.seq-o.seq),r=[["pause","Pausar"],["resume","Reanudar"],["retry","Reintentar"],["revise","Pedir revisi\xF3n"]];return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Misi\xF3n</small><h3>${J(n.title)}</h3><span class="pill mission">${Xt(n.status)}</span></div><button class="close" data-action="back" aria-label="Atr\xE1s">\u2039</button></header>
  <div class="sheet-body"><section class="sec"><h4>Objetivo</h4><p>${J(n.objective||"")}</p></section>
  <section class="sec"><h4>Traspasos entre departamentos</h4><ol class="timeline">${s.map(a=>{let o=Xi(a.department);return`<li class="${J(String(a.status).toLowerCase())}"><button class="tl-dept" data-action="agent" data-id="${o?o.id:""}">${o?Pn(o,"xs"):""}<span>${J(a.department)}</span></button><p><b>Etapa ${J(a.seq)}:</b> ${J(a.directive||"")}</p>${a.result_preview??a.result?`<p class="muted">${_a(a.result_preview??a.result,220)}</p>`:""}${a.error?`<p class="err">${J(a.error)}</p>`:""}<small>${Xt(a.status)}${a.finished_at?" \xB7 "+jt(a.finished_at):a.started_at?" \xB7 iniciada "+jt(a.started_at):""}</small>${a.task_id?`<button class="chip" data-action="task" data-id="${J(a.task_id)}">Ver aportaci\xF3n</button>`:""}</li>`}).join("")||'<li><p class="muted">Sin etapas registradas.</p></li>'}</ol></section>
  <section class="sec"><h4>Control del CEO</h4><div class="row wrap">${r.map(([a,o])=>`<button class="btn ghost" data-action="mission-op" data-op="${a}" data-id="${J(n.id)}">${o}</button>`).join("")}</div><p class="muted small">Cada acci\xF3n llama a <code>pulse-mission-control</code>; el estado mostrado es el que devuelva el servidor.</p></section>${ui(i.mode)}</div>`,size:"tall"}}function ah(i){let e=i.ent.snapshot,t=(e.missions||[]).map(n=>{let s=(e.steps||[]).filter(a=>a.mission_id===n.id),r=s.filter(a=>a.status==="completed").length;return`<button class="row-item" data-action="mission" data-id="${J(n.id)}"><span class="ic mission">\u25C6</span><span><b>${J(n.title)}</b><small>${Rs(n)?"Multiagente \xB7 ":"Motor anterior \xB7 "}${Xt(n.status)} \xB7 ${r}/${s.length} etapas \xB7 ${jt(n.updated_at||n.created_at)}</small></span><span class="dots">${s.sort((a,o)=>a.seq-o.seq).map(a=>`<i class="${J(String(a.status).toLowerCase())}"></i>`).join("")}</span></button>`}).join("");return{html:`<header class="sheet-head"><div class="ic-lg">\u25C6</div><div class="who"><small>Gesti\xF3n de misiones</small><h3>Misiones</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`${dy()}<section class="sec"><h4>Registradas</h4>${t||'<p class="muted">Sin misiones registradas.</p>'}</section>${ui(i.mode)}`:Qi()}</div>`,size:"tall"}}function dy(){return'<form class="sec mission-form" data-action="create-mission"><h4>Convocar misi\xF3n</h4><input name="title" maxlength="120" placeholder="T\xEDtulo (5\u2013120 caracteres)" required><textarea name="objective" rows="3" maxlength="1500" placeholder="Objetivo: qu\xE9 debe lograr y qu\xE9 esperas recibir (20\u20131500 caracteres)" required></textarea><button class="btn">Crear misi\xF3n</button><p class="muted small">La registra <code>pulse-core</code>: Ulises planifica y reparte etapas, Calidad revisa cada entrega y los archivos quedan en Storage. Usa cuota gratuita de Gemini.</p></form>'}function Ic(i,e=null){let t=i.ent.snapshot,n=(t.approvals||[]).filter(r=>r.status==="pending"&&(!e||r.department===e)),s=(t.approvals||[]).filter(r=>r.status!=="pending"&&(!e||r.department===e)).slice(0,6);return{html:`<header class="sheet-head"><div class="ic-lg review">!</div><div class="who"><small>${e?J(e):"Oficina del CEO"}</small><h3>Revisiones</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec"><h4>Esperan tu decisi\xF3n</h4>${n.map(r=>`<div class="appr-wrap"><small class="muted">${J(r.department)} \xB7 ${jt(r.created_at)}</small>${xa(r)}${r.task_id?`<button class="chip" data-action="task" data-id="${J(r.task_id)}">Ver trabajo</button>`:""}</div>`).join("")||'<p class="muted">No hay revisiones pendientes.</p>'}</section><section class="sec"><h4>Decididas</h4>${s.map(r=>`<p class="small">${J(r.title)} \xB7 <b>${Xt(r.status)}</b></p>`).join("")||'<p class="muted">Sin historial.</p>'}</section>${ui(i.mode)}`:Qi()}</div>`,size:"tall"}}function Pc(i,e=null){let t=i.ent.snapshot,n=(t.deliverables||[]).filter(s=>!e||(t.tasks||[]).some(r=>r.id===s.task_id&&r.department===e)||Ji[e]&&s.agent_id===Ji[e]);return{html:`<header class="sheet-head"><div class="ic-lg file">\u2913</div><div class="who"><small>${e?J(e):"Biblioteca"}</small><h3>Entregables</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec">${n.slice(0,40).map(Lc).join("")||'<p class="muted">Sin entregables registrados.</p>'}</section><p class="muted small">Las descargas usan una URL firmada de Storage v\xE1lida 2 minutos.</p>${ui(i.mode)}`:Qi()}</div>`,size:"tall"}}function oh(i,e){let t=(n,s)=>`<div class="kpi"><b>${n}</b><small>${s}</small></div>`;return{html:`<header class="sheet-head"><div class="ic-lg">\u25A6</div><div class="who"><small>Oficina del CEO</small><h3>Estado de la empresa</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${e?`<div class="kpis">${t(e.running,"en ejecuci\xF3n")}${t(e.approvals,"revisiones")}${t(e.activeMissions,"misiones activas")}${t(e.completed,"encargos completados")}${t(e.failed,"fallidos")}${t(e.deliverables,"entregables")}</div><p class="muted small">Recuentos de la \xFAltima instant\xE1nea (${jt(e.loadedAt)}), limitada a los registros m\xE1s recientes.</p><div class="row wrap"><button class="btn ghost" data-action="open-approvals">Revisiones</button><button class="btn ghost" data-action="open-missions">Misiones</button><button class="btn ghost" data-action="open-files">Entregables</button><button class="btn ghost" data-action="refresh">Actualizar</button></div>${ui(i.mode)}`:Qi()}</div>`,size:"mid"}}function ap(i){return{html:`<header class="sheet-head"><div class="ic-lg">\u2302</div><div class="who"><small>PULSE HQ</small><h3>Recorrer la oficina</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><div class="dir-grid">${Gt.map((e,t)=>{let n=Es.find(a=>a.room===e.id),r=(n&&i.agentsById[n.id])?.intent.kind;return`<button class="dir-card ${t===i.roomIndex?"here":""}" data-action="go" data-index="${t}" style="--accent:${e.accent}"><span class="n">${String(t+1).padStart(2,"0")}</span>${n?Pn(n,"sm"):`<span class="space-ic">${e.short.slice(0,1)}</span>`}<b>${J(e.short)}</b>${r&&!["idle","unconnected"].includes(r)?`<i class="st ${r}"></i>`:""}</button>`}).join("")}</div></div>`,size:"mid"}}function op(i,e="email",t=""){return i.mode==="demo"?{html:'<header class="sheet-head"><div class="ic-lg sim">\u25B6</div><div class="who"><small>Modo actual</small><h3>Simulaci\xF3n local</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>Est\xE1s viendo datos inventados <b>solo para probar la interfaz</b>. No hay conexi\xF3n con Supabase ni con Gemini y nada se guarda.</p><p class="muted">Prueba: toca un agente \u2192 Conversaci\xF3n \u2192 escribe una instrucci\xF3n. Incluye la palabra \xABpropuesta\xBB para generar una revisi\xF3n, o \xABfalla\xBB para ver un error.</p><div class="row"><button class="btn" data-action="exit-demo">Salir de la simulaci\xF3n</button></div></div>',size:"mid"}:i.connected?{html:`<header class="sheet-head"><div class="ic-lg ok">\u2713</div><div class="who"><small>Sesi\xF3n</small><h3>CEO conectado</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>${J(i.ent.user?.email||"")}</p><p class="muted">Los estados provienen de Supabase: \xABRecibiendo\xBB = instrucci\xF3n o etapa registrada sin llamadas al modelo todav\xEDa; \xABTrabajando\xBB = filas en <code>pulse_runs</code>; \xABResultado recibido\xBB = etapa aprobada por Calidad con su mensaje de resultado. Tambi\xE9n se leen <code>pulse_tasks</code>, <code>pulse_approvals</code> y <code>pulse_agent_messages</code>. Se consultan cada 10 s, o cada 2.5 s con trabajo en curso.</p>${i.ent.lastError?`<p class="err">\xDAltima consulta fall\xF3: ${J(i.ent.lastError)}</p>`:""}<div class="row"><button class="btn ghost" data-action="refresh">Actualizar ahora</button><button class="btn ghost" data-action="logout">Cerrar sesi\xF3n</button></div></div>`,size:"mid"}:{html:`<header class="sheet-head"><div class="ic-lg">\u25CE</div><div class="who"><small>PULSE HQ</small><h3>Acceso del CEO</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${e==="email"?`<form class="sec" data-action="login"><h4>Enlace de acceso</h4><input type="email" name="email" autocomplete="email" placeholder="Correo del CEO" required value="${J(t)}"><button class="btn">Enviar enlace</button><p class="muted small">Solo funciona con la cuenta autorizada (no crea usuarios). Para evitar el bloqueo por exceso de correos, se permite un enlace por minuto.</p></form>`:`<section class="sec"><p>Revisa tu correo (${J(t)}).</p><ol class="steps-help"><li>Abre el enlace <b>en este mismo navegador</b> (si est\xE1s en Chrome, mant\xE9n pulsado el enlace y elige abrirlo en Chrome).</li><li>Si se abre el centro anterior, no pasa nada: la sesi\xF3n es del mismo sitio. Vuelve a esta pesta\xF1a y toca \xABYa abr\xED el enlace\xBB.</li><li>Si el enlace ya caduc\xF3 o lo abriste en otro navegador, pide uno nuevo pasados 60 s.</li></ol><button class="btn" data-action="check-session">Ya abr\xED el enlace</button><p class="muted small">Tambi\xE9n puedes copiar el enlace (mant\xE9n pulsado \u2192 Copiar) y pegarlo aqu\xED sin abrirlo:</p><form data-action="verify-link"><input name="link" placeholder="Pega el enlace del correo" autocomplete="off"><button class="btn">Entrar con el enlace</button></form><form data-action="verify-code"><input name="code" inputmode="numeric" maxlength="8" placeholder="o el c\xF3digo de 6 d\xEDgitos, si aparece"><button class="btn ghost">Entrar con c\xF3digo</button></form><button class="chip" data-action="access-reset">Usar otro correo</button></section>`}<section class="sec"><h4>Sin conexi\xF3n</h4><p class="muted small">Puedes recorrer la oficina sin sesi\xF3n: los agentes pasean de forma ambiental y no se muestra actividad real.</p><button class="btn ghost" data-action="demo">Probar en modo simulaci\xF3n</button></section></div>`,size:"mid"}}function cp(i,e,t){let n=ai(t),s=gc[e]||{title:e,hint:""},r=n?.dept;if(e==="desk")return{html:`<header class="sheet-head"><div class="ic-lg">\u25AD</div><div class="who"><small>${J(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?np(i,r):Qi()}<div class="row"><button class="btn" data-action="agent-room" data-room="${J(t)}">Hablar con el agente</button></div></div>`,size:"tall"};if(e==="tray")return Ic(i,r);if(e==="shelf")return Pc(i,r);if(e==="board"){let a=i.ent?.snapshot||{},o=(a.steps||[]).filter(l=>l.department===r),c=[...new Set(o.map(l=>l.mission_id))];return{html:`<header class="sheet-head"><div class="ic-lg mission">\u25C6</div><div class="who"><small>${J(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec"><h4>Misiones en las que participa</h4>${c.map(l=>{let u=(a.missions||[]).find(d=>d.id===l),h=o.filter(d=>d.mission_id===l);return`<button class="row-item" data-action="mission" data-id="${J(l)}"><span class="ic mission">\u25C6</span><span><b>${J(u?.title||"Misi\xF3n")}</b><small>${h.map(d=>`etapa ${d.seq}: ${Xt(d.status)}`).join(" \xB7 ")}</small></span></button>`}).join("")||'<p class="muted">Este departamento no participa en misiones registradas.</p>'}</section>`:Qi()}</div>`,size:"mid"}}if(e==="ceo-tray")return Ic(i);if(e==="ceo-shelf")return Pc(i);if(e==="ceo-desk"||e==="ceo-tv")return oh(i,i.summary);if(e==="board-table"||e==="mission-table"||e==="mission-board")return ah(i);if(e==="collab-board"||e==="collab-table"){let a=i.ent?.snapshot||{},o=(a.steps||[]).filter(c=>c.status==="completed"||["running","active","in_progress","processing"].includes(c.status)).sort((c,l)=>Date.parse(l.finished_at||l.started_at||0)-Date.parse(c.finished_at||c.started_at||0)).slice(0,12);return{html:`<header class="sheet-head"><div class="ic-lg">\u21C4</div><div class="who"><small>Colaboraci\xF3n</small><h3>Traspasos recientes</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body">${i.connected?`<section class="sec">${o.map(c=>{let l=Xi(c.department),u=(a.missions||[]).find(h=>h.id===c.mission_id);return`<button class="row-item" data-action="mission" data-id="${J(c.mission_id)}">${l?Pn(l,"xs"):""}<span><b>${J(c.department)} \xB7 etapa ${J(c.seq)}</b><small>${J(u?.title||"Misi\xF3n")} \xB7 ${Xt(c.status)}</small></span></button>`}).join("")||'<p class="muted">Sin traspasos registrados.</p>'}</section><p class="muted small">Los agentes vienen a esta sala solo cuando su etapa de misi\xF3n figura en curso en el servidor.</p>${ui(i.mode)}`:Qi()}</div>`,size:"mid"}}return e==="legacy-door"||e==="studio-cam"?{html:`<header class="sheet-head"><div class="ic-lg">\u2197</div><div class="who"><small>${J(n.name)}</small><h3>${s.title}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>CRM, automatizaciones, PULSE STUDIO, estudio creativo y exportaci\xF3n PNG/ZIP siguen en el centro anterior. Su integraci\xF3n dentro de la oficina est\xE1 pendiente.</p><a class="btn" href="https://bryanstl1.github.io/pulse-hq/" target="_blank" rel="noopener">Abrir centro anterior \u2197</a></div>`,size:"mid"}:e==="coffee"?{html:`<header class="sheet-head"><div class="ic-lg">\u2615\uFE0E</div><div class="who"><small>Descanso</small><h3>Movimiento ambiental</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>Cuando un agente no tiene actividad registrada puede pasear por su sala o venir por caf\xE9. Es decorativo y nunca se muestra como trabajo.</p><label class="toggle"><input type="checkbox" data-action="ambient" ${i.ambient?"checked":""}><span>Paseo ambiental ${i.ambient?"activado":"desactivado"}</span></label></div>`,size:"mid"}:{html:`<header class="sheet-head"><div class="who"><h3>${J(s.title)}</h3></div><button class="close" data-action="close">\xD7</button></header><div class="sheet-body"><p>${J(s.hint)}</p></div>`,size:"mid"}}var py=new Set(["running","processing","in_progress","active"]),lp=new Set(["failed","error"]),my=30*6e4,gy=24*36e5,_y=30*6e4,Dc=i=>Date.parse(i?.updated_at||i?.finished_at||i?.started_at||i?.created_at||"")||0;function up(i,e,{connected:t,now:n=Date.now()}={}){let s={},r=(i.steps||[]).filter(o=>o.agent_id),a=new Set(r.map(o=>o.task_id).filter(Boolean));for(let o of e){if(!t){s[o]={kind:"unconnected",label:"Actividad no consultada",source:"none",approvals:[],mission:null};continue}let c=(i.tasks||[]).filter(b=>b.department===o&&!a.has(b.id)).sort((b,_)=>Dc(_)-Dc(b)),l=(i.approvals||[]).filter(b=>b.department===o&&b.status==="pending"),u=(i.steps||[]).filter(b=>b.department===o&&!b.agent_id),h=c.find(b=>Ri({source:"server",record:b},n).kind==="running"),d=u.find(b=>py.has(String(b.status).toLowerCase())&&!b.finished_at&&n-(Date.parse(b.started_at||"")||0)<=_y),f=d?(i.missions||[]).find(b=>b.id===d.mission_id):null,g=d?{id:d.mission_id,title:f?.title||"Misi\xF3n registrada",seq:d.seq,directive:d.directive}:null,x=c[0],m={source:"server",approvals:l,mission:g},p=Jf(i,o,n);p&&(p.kind==="receiving"||p.kind==="running")?s[o]={...m,...p,source:"server"}:p&&p.kind!=="mission"&&!l.length?s[o]={...m,...p,source:"server"}:h?s[o]={...m,kind:"running",label:"En ejecuci\xF3n (servidor)",taskId:h.id}:p&&!l.length?s[o]={...m,...p,source:"server"}:l.length?s[o]={...m,kind:"review",label:l.length===1?"1 revisi\xF3n te espera":`${l.length} revisiones te esperan`,taskId:l[0].task_id}:g?s[o]={...m,kind:"mission",label:`Misi\xF3n \xB7 etapa ${g.seq}`}:x&&lp.has(String(x.status).toLowerCase())&&n-Dc(x)<=gy?s[o]={...m,kind:"failed",label:"El \xFAltimo encargo fall\xF3",taskId:x.id,error:x.error||"Error sin detalle"}:x&&x.status==="completed"&&n-Dc(x)<=my?s[o]={...m,kind:"completed",label:"Resultado listo",taskId:x.id}:s[o]={...m,kind:"idle",label:c.length?"Sin encargos en curso":"A\xFAn sin encargos",source:"server"}}return s}function hp(i,e){if(!e)return null;let t=i.tasks||[],n=s=>t.filter(r=>r.status===s).length;return{tasks:t.length,completed:n("completed"),failed:t.filter(s=>lp.has(s.status)).length,running:t.filter(s=>Ri({source:"server",record:s}).kind==="running").length,runs:(i.runs||[]).length,approvals:(i.approvals||[]).filter(s=>s.status==="pending").length,missions:(i.missions||[]).length,activeMissions:(i.missions||[]).filter(s=>!["completed","reviewed","cancelled","awaiting_ceo"].includes(s.status)).length,deliverables:(i.deliverables||[]).length,loadedAt:i.loadedAt}}var xy="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.min.js";function gp(){return globalThis.supabase?.createClient?Promise.resolve(globalThis.supabase.createClient(va,dp)):new Promise((i,e)=>{let t=document.createElement("script");t.src=xy,t.async=!0,t.crossOrigin="anonymous",t.onload=()=>globalThis.supabase?.createClient?i(globalThis.supabase.createClient(va,dp)):e(new Error("Cliente de Supabase no disponible.")),t.onerror=()=>e(new Error("No se pudo cargar el cliente de Supabase (sin conexi\xF3n con jsDelivr).")),document.head.appendChild(t)})}var va="https://erluuujhgpreuuaskjwo.supabase.co",dp="sb_publishable_R3-FWhFftf_aidZUq6U9jA_WOYQJS9q",ch=["Direcci\xF3n estrat\xE9gica","Marketing y crecimiento","Producci\xF3n de contenido","Ventas y patrocinios","Relaciones p\xFAblicas y alianzas","Eventos y experiencias","Comunidad","Inteligencia de mercado","Finanzas y administraci\xF3n","Tecnolog\xEDa y automatizaci\xF3n"],Uc=()=>({roles:[],tasks:[],approvals:[],missions:[],steps:[],deliverables:[],messages:[],runs:[],loadedAt:null,sig:""});function Cs(i){let e=String(i?.message||i||"");return/load failed|failed to fetch|networkerror|network request failed|the network connection was lost|cancelled/i.test(e)?"La solicitud no lleg\xF3 al servidor (conexi\xF3n interrumpida o la app pas\xF3 a segundo plano). Vuelve a intentarlo con la app abierta.":/rate limit|too many|429|email rate/i.test(e)?"Supabase limit\xF3 los correos de acceso por exceso de solicitudes. Usa el \xFAltimo correo que te lleg\xF3 o espera unos minutos antes de pedir otro.":/expired|invalid.*(token|otp)|otp.*(expired|invalid)/i.test(e)?"El enlace o c\xF3digo ya se us\xF3 o caduc\xF3. Pide uno nuevo.":/jwt|session/i.test(e)&&/expired|invalid|missing/i.test(e)?"Tu sesi\xF3n caduc\xF3. Vuelve a entrar como CEO.":e||"Error del servidor"}var fp=i=>/load failed|failed to fetch|networkerror|network request failed|connection was lost/i.test(String(i?.message||i||"")),es=i=>{throw new Error(Cs(i))};function vy(i){let e=(t,n)=>(t||[]).map(n).join(",");return[e(i.tasks,t=>t.id+t.status+(t.updated_at||"")),e(i.approvals,t=>t.id+t.status),e(i.missions,t=>t.id+t.status+(t.updated_at||"")),e(i.steps,t=>t.id+t.status+(t.attempt||0)+(t.claimed_at||"")+(t.finished_at||"")),e(i.deliverables,t=>t.id+(t.review_status||"")+(t.version||"")),(i.messages||[]).length+":"+(i.messages?.[0]?.id||""),(i.runs||[]).length+":"+(i.runs?.[0]?.id||"")].join("|")}var pp="pulse:otp-sent-at",yy=6e4,mp={get(i){try{return localStorage.getItem(i)}catch{return null}},set(i,e){try{localStorage.setItem(i,e)}catch{}}};function lh(i,{mode:e="live"}={}){if(!i)throw new Error("Cliente de datos no disponible.");let t=null,n=Uc(),s=null,r="",a=()=>{},o=()=>a({user:t,snapshot:n,loading:!!s,lastError:r}),c=y=>(y.error&&es(y.error),y.data||[]);async function l(){if(!t)return n;if(s)return s;let y=t.id;s=(async()=>{let[R,L,N,H,F,V,j,W]=await Promise.all([i.from("pulse_agent_roles").select("department,professional_title,purpose,output_contract,acceptance_criteria,handoff_to,active").eq("active",!0),i.from("pulse_tasks").select("id,department,instruction,status,result_preview,error,created_at,updated_at").eq("user_id",y).order("created_at",{ascending:!1}).limit(100),i.from("pulse_approvals").select("id,task_id,department,title,description,status,created_at").eq("user_id",y).order("created_at",{ascending:!1}).limit(80),i.from("pulse_missions").select("id,title,objective,status,engine,claimed_at,spent_tokens,budget_tokens,last_error,created_at,updated_at").eq("user_id",y).order("created_at",{ascending:!1}).limit(20),i.from("pulse_mission_steps").select("id,mission_id,seq,department,agent_id,directive,status,result_preview,task_id,error,attempt,claimed_at,review,output_format,depends_on,started_at,finished_at").eq("user_id",y).order("seq",{ascending:!0}).limit(220),i.from("pulse_deliverables").select("id,task_id,title,filename,storage_path,mime_type,mission_id,agent_id,version,review_status,size_bytes,source_type,created_at").eq("user_id",y).order("created_at",{ascending:!1}).limit(150),i.from("pulse_agent_messages").select("id,mission_id,step_id,from_agent,to_agent,kind,content,artifact,created_at").eq("user_id",y).order("created_at",{ascending:!1}).limit(120),i.from("pulse_runs").select("id,mission_id,step_id,agent_id,phase,provider,model,input_tokens,output_tokens,status,created_at").eq("user_id",y).order("created_at",{ascending:!1}).limit(200)]),oe={roles:c(R),tasks:c(L),approvals:c(N),missions:c(H),steps:c(F),deliverables:c(V),messages:c(j),runs:c(W),loadedAt:new Date().toISOString()};return oe.sig=vy(oe),t?.id===y&&(n=oe,r=""),n})(),o();try{return await s}catch(R){throw r=Cs(R),R}finally{s=null,o()}}async function u(){let{data:y}=await i.auth.getSession(),R=y?.session?.user||null;return(R?.id||null)!==(t?.id||null)&&(t=R,n=Uc(),o(),t&&await l().catch(()=>{})),!!t}async function h(y){if(!t)return"";let{data:R,error:L}=await i.from("pulse_tasks").select("result,sources").eq("id",y).eq("user_id",t.id).maybeSingle();return L&&es(L),R||{result:"",sources:[]}}async function d(y){a=y||(()=>{});let{data:R,error:L}=await i.auth.getUser();L&&L.name!=="AuthSessionMissingError"?t=null:t=R?.user||null,o(),i.auth.onAuthStateChange((N,H)=>{let F=t?.id;t=H?.user||null,F!==t?.id&&(n=Uc()),o(),t&&queueMicrotask(()=>l().catch(()=>o()))}),t&&await l().catch(N=>{if(!fp(N))throw N})}function f(){let y=Number(mp.get(pp)||0);return Math.max(0,yy-(Date.now()-y))}async function g(y){let R=f();if(R>0)throw new Error(`Ya pediste un enlace hace poco. Revisa tu correo o espera ${Math.ceil(R/1e3)} s para pedir otro.`);mp.set(pp,String(Date.now()));let{error:L}=await i.auth.signInWithOtp({email:y,options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:!1}});if(L&&!fp(L)&&es(L),L)throw new Error("No se confirm\xF3 el env\xEDo porque la conexi\xF3n se interrumpi\xF3. Revisa tu correo antes de pedir otro enlace (puede haber llegado).")}async function x(y,R){let L=String(R||"").replace(/\D/g,"");if(L.length<6)throw new Error("Escribe el c\xF3digo de 6 d\xEDgitos.");let{error:N}=await i.auth.verifyOtp({email:y,token:L,type:"email"});N&&es(N)}async function m(y){let R;try{R=new URL(String(y||"").trim())}catch{throw new Error("Pega el enlace completo del correo.")}if(R.origin!==va)throw new Error("El enlace no pertenece al proyecto PULSE HQ.");let L=R.searchParams.get("token")||R.searchParams.get("token_hash"),N=R.searchParams.get("type")||"magiclink";if(!L)throw new Error("El enlace no contiene un token de acceso.");let{error:H}=await i.auth.verifyOtp({token_hash:L,type:N==="signup"?"signup":"magiclink"});H&&es(H)}async function p(){let{error:y}=await i.auth.signOut();y&&es(y),t=null,n=Uc(),o()}async function b(y,R){if(!t)throw new Error("Inicia sesi\xF3n como CEO para ejecutar esta acci\xF3n.");let{data:L,error:N}=await i.functions.invoke(y,{body:R});if(N){let H;try{H=(await N.context?.json())?.error}catch{}throw new Error(Cs(H||N.message))}if(!L?.ok)throw new Error(L?.error||"La funci\xF3n no confirm\xF3 la operaci\xF3n.");return await l(),L}async function _(y,R){if(!ch.includes(y))throw new Error("Departamento no disponible.");let L=R.trim();if(L.length<5||L.length>2e3)throw new Error("Escribe entre 5 y 2000 caracteres.");return b("pulse-run",{department:y,instruction:L})}async function v(y,R,L="missions"){let N=y.trim(),H=R.trim();if(N.length<5||N.length>120||H.length<20||H.length>1500)throw new Error("T\xEDtulo de 5 a 120 caracteres y objetivo de 20 a 1500.");return b("pulse-core",{action:"mission.create",title:N,objective:H,source:L})}async function E(y){let R=String(y||"").replace(/\s+/g," ").trim();if(R.length<20)throw new Error("Describe el encargo para Ulises con al menos 20 caracteres.");if(R.length>1500)throw new Error("M\xE1ximo 1500 caracteres.");let L=R.replace(/^(ulises|hola ulises)[,:]?\s*/i,""),N=L.length<=80?L:L.slice(0,80).replace(/\s+\S*$/,"")+"\u2026";return N=N.charAt(0).toUpperCase()+N.slice(1),N.length<5&&(N="Encargo del CEO"),v(N,R,"office")}async function T(y,R){let L=n.missions.find(N=>N.id===R);if(Rs(L)){if(!["pause","resume","cancel"].includes(y))throw new Error("Acci\xF3n no disponible para misiones del motor multiagente.");return b("pulse-core",{action:"mission."+y,missionId:R})}if(!["pause","resume","retry","revise"].includes(y))throw new Error("Acci\xF3n de misi\xF3n inv\xE1lida.");return b("pulse-mission-control",{action:y,missionId:R})}async function A(y,R){if(!t||!["approved","rejected"].includes(R))throw new Error("Decisi\xF3n inv\xE1lida.");let{data:L,error:N}=await i.from("pulse_approvals").update({status:R}).eq("id",y).eq("user_id",t.id).eq("status","pending").select("id");if(N&&es(N),!L?.length)throw new Error("La revisi\xF3n ya cambi\xF3 o no est\xE1 disponible.");return await l(),L[0]}async function I(y,{download:R=!1}={}){if(!t)throw new Error("Inicia sesi\xF3n para descargar.");let L=n.deliverables.find(V=>V.id===y);if(!L)throw new Error("Archivo no disponible en la sesi\xF3n actual.");if(e==="demo"&&i.demoFileUrl)return i.demoFileUrl(L);let{data:N,error:H}=await i.storage.from("pulse-deliverables").createSignedUrl(L.storage_path,120,R?{download:L.filename||!0}:void 0);if(H&&es(H),!N?.signedUrl)throw new Error("No se pudo autorizar la descarga.");let F=new URL(N.signedUrl,va);if(F.origin!==va)throw new Error("Destino de archivo inesperado.");return F.href}function S(y){let R=n.roles.find(j=>j.department===y),L=n.tasks.filter(j=>j.department===y),N=n.approvals.filter(j=>j.department===y&&j.status==="pending"),H=n.steps.filter(j=>j.department===y),F=L.find(j=>j.status==="running"&&Ri({source:"server",record:j}).kind==="running"),V=F?Ri({source:"server",record:F}):N.length?Ri({source:"server",record:{status:"pending"}}):{kind:"idle",label:"Disponible",actionable:!1};return{role:R,tasks:L,approvals:N,steps:H,activity:V}}return{mode:e,init:d,refresh:l,checkSession:u,taskResult:h,otpCooldown:f,requestLogin:g,verifyCode:x,verifyLink:m,signOut:p,runTask:_,createMission:v,askUlises:E,missionAction:T,decideApproval:A,fileUrl:I,departmentData:S,get user(){return t},get snapshot(){return n},get loading(){return!!s},get lastError(){return r}}}var It=()=>globalThis.crypto?.randomUUID?.()||`id-${Math.random().toString(36).slice(2)}-${Date.now()}`,Ye=(i=0)=>new Date(Date.now()+i).toISOString(),Nc={"Direcci\xF3n estrat\xE9gica":"Prioric\xE9 tres l\xEDneas de trabajo y propuse un calendario de revisi\xF3n semanal.","Marketing y crecimiento":"Propuesta de campa\xF1a en tres fases con mensajes por audiencia y m\xE9tricas de seguimiento.","Producci\xF3n de contenido":"Guion de 45 segundos con gancho, desarrollo y llamada a la acci\xF3n, m\xE1s lista de tomas.","Ventas y patrocinios":"Borrador de propuesta de patrocinio con niveles, beneficios y siguiente paso sugerido.","Relaciones p\xFAblicas y alianzas":"Lista de criterios para alianzas y un mensaje de primer contacto para revisi\xF3n.","Eventos y experiencias":"Esquema de experiencia con recorrido del asistente, riesgos y checklist log\xEDstico.",Comunidad:"Plan de conversaci\xF3n semanal con temas, formatos y respuesta a preguntas frecuentes.","Inteligencia de mercado":"Resumen de tendencias con tres oportunidades y la evidencia que habr\xEDa que verificar.","Finanzas y administraci\xF3n":"Presupuesto por partidas con supuestos expl\xEDcitos y escenario conservador.","Tecnolog\xEDa y automatizaci\xF3n":"Dise\xF1o de una automatizaci\xF3n en cuatro pasos con puntos de control manual."};function by(i){let e=(l,u,h,d,f={})=>({id:It(),user_id:i.id,department:l,instruction:d,status:u,result:u==="completed"?`[Simulaci\xF3n] ${Nc[l]}`:null,sources:null,error:u==="failed"?"[Simulaci\xF3n] L\xEDmite del proveedor de IA (429). Reintenta m\xE1s tarde.":null,created_at:Ye(-h*6e4-4e4),updated_at:Ye(-h*6e4),...f}),t=[e("Marketing y crecimiento","running",.3,"Preparar la campa\xF1a de lanzamiento de noviembre"),e("Producci\xF3n de contenido","completed",6,"Escribir el guion del reel de presentaci\xF3n"),e("Ventas y patrocinios","completed",50,"Preparar propuesta para patrocinador de bebidas"),e("Tecnolog\xEDa y automatizaci\xF3n","failed",20,"Automatizar el resumen semanal de m\xE9tricas"),e("Direcci\xF3n estrat\xE9gica","completed",180,"Definir prioridades del trimestre")],n=[{id:It(),user_id:i.id,task_id:t[2].id,department:"Ventas y patrocinios",title:"[Simulaci\xF3n] Propuesta de patrocinio lista para enviar",description:"Revisa niveles y precios antes de compartirla.",status:"pending",created_at:Ye(-49*6e4)}],s=It(),r=[{id:s,user_id:i.id,title:"[Simulaci\xF3n] Lanzamiento de temporada",objective:"Coordinar investigaci\xF3n, estrategia y propuesta comercial para el lanzamiento.",status:"running",created_at:Ye(-8*6e4),updated_at:Ye(-6e4)}],a=[{id:It(),user_id:i.id,mission_id:s,seq:1,department:"Inteligencia de mercado",directive:"Reunir tendencias y competencia relevantes",status:"running",result:null,task_id:null,error:null,started_at:Ye(-9e4),finished_at:null},{id:It(),user_id:i.id,mission_id:s,seq:2,department:"Marketing y crecimiento",directive:"Convertir hallazgos en estrategia de campa\xF1a",status:"pending",result:null,task_id:null,error:null,started_at:null,finished_at:null},{id:It(),user_id:i.id,mission_id:s,seq:3,department:"Ventas y patrocinios",directive:"Traducir la estrategia en propuesta para patrocinadores",status:"pending",result:null,task_id:null,error:null,started_at:null,finished_at:null}],o=[{id:It(),user_id:i.id,task_id:t[1].id,title:"[Simulaci\xF3n] Guion del reel",filename:"guion-reel-simulacion.md",storage_path:"demo/guion.md",mime_type:"text/markdown",created_at:Ye(-5*6e4)}],c=Object.keys(Nc).map(l=>({department:l,professional_title:`[Simulaci\xF3n] Responsable de ${l.toLowerCase()}`,purpose:"Contrato profesional simulado para pruebas de interfaz.",output_contract:"Entregable en texto estructurado.",acceptance_criteria:"Claro, verificable y listo para revisi\xF3n del CEO.",handoff_to:null,active:!0}));return{pulse_tasks:t,pulse_approvals:n,pulse_missions:r,pulse_mission_steps:a,pulse_deliverables:o,pulse_agent_roles:c,pulse_agent_messages:[],pulse_runs:[]}}function _p({speed:i=1}={}){let e={id:"demo-ceo",email:"ceo@simulacion.local"},t=by(e),n=new Set,s=new Set,r=(p,b)=>{let _=setTimeout(()=>{s.delete(_),b()},p/i);return s.add(_),_};r(16e3,()=>a(t.pulse_tasks[0])),o(t.pulse_missions[0].id,14e3);function a(p,{approval:b=!1,file:_=!0}={}){p.status==="running"&&(p.status="completed",p.updated_at=Ye(),p.result=`[Simulaci\xF3n] ${Nc[p.department]}

Encargo: \xAB${p.instruction}\xBB.`,_&&t.pulse_deliverables.unshift({id:It(),user_id:e.id,task_id:p.id,title:`[Simulaci\xF3n] ${p.instruction.slice(0,60)}`,filename:"entregable-simulacion.md",storage_path:`demo/${p.id}.md`,mime_type:"text/markdown",created_at:Ye()}),b&&t.pulse_approvals.unshift({id:It(),user_id:e.id,task_id:p.id,department:p.department,title:`[Simulaci\xF3n] Revisar: ${p.instruction.slice(0,50)}`,description:"Propuesta lista para tu decisi\xF3n.",status:"pending",created_at:Ye()}))}function o(p,b){let _=()=>{let v=t.pulse_missions.find(I=>I.id===p);if(!v||v.status==="paused")return;let E=t.pulse_mission_steps.filter(I=>I.mission_id===p).sort((I,S)=>I.seq-S.seq),T=E.find(I=>I.status==="running");if(T){let I={id:It(),user_id:e.id,department:T.department,instruction:T.directive,status:"completed",result:`[Simulaci\xF3n] Aportaci\xF3n de ${T.department}: ${Nc[T.department]}`,error:null,sources:null,created_at:T.started_at,updated_at:Ye()};t.pulse_tasks.unshift(I),Object.assign(T,{status:"completed",finished_at:Ye(),task_id:I.id,result:I.result})}let A=E.find(I=>I.status==="pending");A?(Object.assign(A,{status:"running",started_at:Ye()}),v.status="running",v.updated_at=Ye(),r(32e3,_)):(v.status="awaiting_ceo",v.updated_at=Ye(),t.pulse_approvals.unshift({id:It(),user_id:e.id,task_id:E.at(-1)?.task_id||null,department:"Direcci\xF3n estrat\xE9gica",title:`[Simulaci\xF3n] Propuesta consolidada: ${v.title.replace("[Simulaci\xF3n] ","")}`,description:"Integra las aportaciones de cada etapa.",status:"pending",created_at:Ye()}))};r(b,_)}function c(p){let b=[],_=null,v=null,E=null,T={select(){return T},eq(A,I){return b.push([A,I]),T},in(A,I){return b.push([A,{in:I}]),T},order(A,{ascending:I=!0}={}){return _=[A,I],T},limit(A){return v=A,T},update(A){return E=A,T},then(A,I){try{let S=(t[p]||[]).filter(y=>b.every(([R,L])=>L&&L.in?L.in.includes(y[R]):y[R]===L));if(E)return S.forEach(y=>Object.assign(y,E,{updated_at:Ye()})),Promise.resolve({data:S.map(y=>({id:y.id})),error:null}).then(A,I);if(_){let[y,R]=_;S=[...S].sort((L,N)=>(L[y]>N[y]?1:L[y]<N[y]?-1:0)*(R?1:-1))}return v&&(S=S.slice(0,v)),Promise.resolve({data:S.map(y=>({...y})),error:null}).then(A,I)}catch(S){return Promise.resolve({data:null,error:{message:String(S)}}).then(A,I)}}};return T}async function l(p,{body:b}){if(p==="pulse-run"){let _={id:It(),user_id:e.id,department:b.department,instruction:b.instruction,status:"queued",result:null,sources:null,error:null,created_at:Ye(),updated_at:Ye()};t.pulse_tasks.unshift(_),await new Promise(E=>r(1400,E)),_.status="running",_.updated_at=Ye();let v=/\bfall(a|o)\b|error de prueba/i.test(b.instruction);return await new Promise(E=>r(9e3,E)),v?(_.status="failed",_.updated_at=Ye(),_.error="[Simulaci\xF3n] El motor devolvi\xF3 un error de prueba.",{data:{ok:!1,error:_.error},error:null}):(a(_,{approval:/propuesta|aprob|revis/i.test(b.instruction)||b.department==="Ventas y patrocinios"}),{data:{ok:!0,taskId:_.id},error:null})}if(p==="pulse-core")return x(b);if(p==="pulse-mission-control"){if(b.action==="create"){let v=It();return t.pulse_missions.unshift({id:v,user_id:e.id,title:`[Simulaci\xF3n] ${b.title}`,objective:b.objective,status:"running",created_at:Ye(),updated_at:Ye()}),Sy(b.objective).forEach((T,A)=>t.pulse_mission_steps.push({id:It(),user_id:e.id,mission_id:v,seq:A+1,department:T,directive:My[T]||"Aportar al objetivo de la misi\xF3n",status:A===0?"running":"pending",result:null,task_id:null,error:null,started_at:A===0?Ye():null,finished_at:null})),o(v,3e4),{data:{ok:!0,missionId:v},error:null}}let _=t.pulse_missions.find(v=>v.id===b.missionId);return _?(b.action==="pause"&&(_.status="paused"),(b.action==="resume"||b.action==="retry")&&(_.status="running",o(_.id,6e3)),b.action==="revise"&&(_.status="revising"),_.updated_at=Ye(),{data:{ok:!0},error:null}):{data:{ok:!1,error:"Misi\xF3n no encontrada"},error:null}}return{data:null,error:{message:`Funci\xF3n ${p} no simulada.`}}}let u=[{agent:"iris",dept:"Inteligencia de mercado",fmt:"markdown",text:"Investigar el contexto y reunir evidencia"},{agent:"rocco",dept:"Ventas y patrocinios",fmt:"markdown",text:"Convertir la evidencia en propuesta comercial"},{agent:"tomas",dept:"Finanzas y administraci\xF3n",fmt:"xlsx",text:"Estimar el presupuesto en hoja de c\xE1lculo"}],h={iris:"Iris",rocco:"Rocco",tomas:"Tom\xE1s",ulises:"Ulises",calidad:"Calidad",ceo:"CEO"},d=(p,b,_,v,E,T,A=null)=>t.pulse_agent_messages.unshift({id:It(),user_id:e.id,mission_id:p.id,step_id:b?.id||null,from_agent:_,to_agent:v,kind:E,content:`[Simulaci\xF3n] ${T}`,artifact:{...A||{},simulated:!0},created_at:Ye()}),f=(p,b,_,v)=>t.pulse_runs.unshift({id:It(),user_id:e.id,mission_id:p.id,step_id:b?.id||null,agent_id:_,phase:v,provider:"simulaci\xF3n",model:"sin-ia",input_tokens:0,output_tokens:0,latency_ms:0,status:"ok",created_at:Ye()});function g(p){let b=t.pulse_missions.find(E=>E.id===p);if(!b||!["running"].includes(b.status))return;let _=t.pulse_mission_steps.filter(E=>E.mission_id===b.id).sort((E,T)=>E.seq-T.seq),v=_.find(E=>E.status==="pending"&&(E.depends_on||[]).every(T=>_.find(A=>A.seq===T)?.status==="completed"));if(!v){_.length&&_.every(E=>E.status==="completed")&&(b.status="awaiting_ceo",b.updated_at=Ye(),t.pulse_approvals.unshift({id:It(),user_id:e.id,task_id:_.at(-1).task_id,department:"Direcci\xF3n estrat\xE9gica",title:`[Simulaci\xF3n] Misi\xF3n \xAB${b.title.replace("[Simulaci\xF3n] ","")}\xBB: entregables listos`,description:"Simulaci\xF3n: no es un entregable real.",status:"pending",created_at:Ye()}),d(b,null,"ulises","ceo","notice","Misi\xF3n terminada (simulada)."));return}Object.assign(v,{status:"running",claimed_at:Ye(),started_at:v.started_at||Ye()}),r(2500,()=>{b.status==="running"&&f(b,v,v.agent_id,v.attempt?"correct":"analyze")}),r(5e3,()=>{b.status==="running"&&f(b,v,v.agent_id,"act")}),r(7500,()=>{b.status==="running"&&f(b,v,"calidad","evaluate")}),r(9500,()=>{if(b.status!=="running")return;let E=v.output_format==="xlsx"?"xlsx":v.output_format==="pdf"?"pdf":"md",T={id:It(),user_id:e.id,department:v.department,instruction:v.directive,status:"completed",result:`[Simulaci\xF3n] Aportaci\xF3n de ${h[v.agent_id]}.`,sources:null,error:null,created_at:v.started_at,updated_at:Ye()};t.pulse_tasks.unshift(T);let A={id:It(),user_id:e.id,task_id:T.id,mission_id:b.id,agent_id:v.agent_id,title:`[Simulaci\xF3n] Etapa ${v.seq} (${h[v.agent_id]})`,filename:`etapa-${v.seq}-simulacion.${E}`,storage_path:`demo/${T.id}.${E}`,mime_type:"text/markdown",version:v.attempt+1,review_status:"approved",size_bytes:1024,source_type:"simulation",created_at:Ye()};t.pulse_deliverables.unshift(A),Object.assign(v,{status:"completed",task_id:T.id,result:T.result,finished_at:Ye(),claimed_at:null,review:{verdict:"approve",score:8}}),d(b,v,"calidad",v.agent_id,"review",`Etapa ${v.seq} aprobada (8/10).`,{deliverable_id:A.id}),d(b,v,v.agent_id,"ulises","result",`Etapa ${v.seq} terminada.`,{deliverable_id:A.id}),r(1500,()=>g(b.id))})}function x(p){if(p.action==="mission.create"){let _={id:It(),user_id:e.id,title:`[Simulaci\xF3n] ${p.title}`,objective:p.objective,status:"planning",engine:"core",claimed_at:null,spent_tokens:0,budget_tokens:0,last_error:null,created_at:Ye(),updated_at:Ye()};return t.pulse_missions.unshift(_),d(_,null,"ceo","ulises","request",`${p.title}: ${p.objective}`,{source:p.source||"api"}),r(2500,()=>{_.claimed_at=Ye()}),p.objective.length<90&&/^(ulises[, ]*)?(hola|buen[oa]s|qu[eé] tal|c[oó]mo est[aá]s|gracias)/i.test(p.objective)?(r(4e3,()=>{f(_,null,"ulises","plan"),d(_,null,"ulises","ceo","result","\xA1Hola! Todo en orden por aqu\xED. Cuando quieras, dime qu\xE9 necesitas y armo el equipo.",{mode:"reply"}),_.status="completed",_.updated_at=Ye()}),{data:{ok:!0,missionId:_.id},error:null}):(r(5e3,()=>{if(_.status!=="planning")return;f(_,null,"ulises","plan");let v=[...u,{agent:"ulises",dept:"Direcci\xF3n estrat\xE9gica",fmt:"pdf",text:"Consolidar el documento final"}];v.forEach((E,T)=>{let A={id:It(),user_id:e.id,mission_id:_.id,seq:T+1,department:E.dept,agent_id:E.agent,directive:`[Simulaci\xF3n] ${E.text}`,status:"pending",result:null,task_id:null,error:null,attempt:0,claimed_at:null,review:null,output_format:E.fmt,depends_on:T?E.agent==="ulises"?[1,2,3]:[T]:[],started_at:null,finished_at:null};t.pulse_mission_steps.push(A),d(_,A,"ulises",E.agent,"request",`Etapa ${T+1}: ${E.text}`)}),d(_,null,"ulises","ceo","decision",`Plan registrado con ${v.length} etapas (simulado).`),_.status="running",_.updated_at=Ye(),r(1500,()=>g(_.id))}),{data:{ok:!0,missionId:_.id},error:null})}let b=t.pulse_missions.find(_=>_.id===p.missionId);return b?(p.action==="mission.pause"&&(b.status="paused"),p.action==="mission.cancel"&&(b.status="cancelled"),p.action==="mission.resume"&&(b.status="running",t.pulse_mission_steps.filter(_=>_.mission_id===b.id&&_.status==="running").forEach(_=>Object.assign(_,{status:"pending",claimed_at:null})),r(1e3,()=>g(b.id))),b.updated_at=Ye(),{data:{ok:!0},error:null}):{data:{ok:!1,error:"Misi\xF3n no encontrada"},error:null}}return{simulated:!0,auth:{async getUser(){return{data:{user:e},error:null}},onAuthStateChange(p){return n.add(p),{data:{subscription:{unsubscribe(){n.delete(p)}}}}},async signInWithOtp(){return{error:null}},async verifyOtp(){return{error:null}},async signOut(){return{error:null}}},from:c,functions:{invoke:l},storage:{from:()=>({async createSignedUrl(){return{data:null,error:{message:"Simulaci\xF3n: usa demoFileUrl"}}}})},demoFileUrl(p){let b=t.pulse_tasks.find(v=>v.id===p.task_id),_=`# ${p.title}

Archivo generado por la SIMULACI\xD3N de PULSE HQ. No es un entregable real.

${b?.result||""}
`;return URL.createObjectURL(new Blob([_],{type:"text/markdown;charset=utf-8"}))},dispose(){s.forEach(clearTimeout),s.clear()}}}var My={"Inteligencia de mercado":"Reunir evidencia y tendencias relevantes","Marketing y crecimiento":"Dise\xF1ar la estrategia y los mensajes","Producci\xF3n de contenido":"Proponer piezas y guiones","Ventas y patrocinios":"Preparar la propuesta comercial","Finanzas y administraci\xF3n":"Estimar presupuesto y riesgos","Eventos y experiencias":"Dise\xF1ar la experiencia y su log\xEDstica",Comunidad:"Plan de participaci\xF3n de la audiencia","Relaciones p\xFAblicas y alianzas":"Identificar aliados y mensajes","Tecnolog\xEDa y automatizaci\xF3n":"Definir la automatizaci\xF3n necesaria","Direcci\xF3n estrat\xE9gica":"Consolidar y priorizar la propuesta"};function Sy(i){let e=i.toLowerCase(),t=["Inteligencia de mercado"];return/evento|festival|experiencia/.test(e)&&t.push("Eventos y experiencias"),/contenido|video|reel|guion/.test(e)&&t.push("Producci\xF3n de contenido"),/patrocin|venta|cliente/.test(e)&&t.push("Ventas y patrocinios"),/presupuesto|costo|finanz/.test(e)&&t.push("Finanzas y administraci\xF3n"),t.length<3&&t.push("Marketing y crecimiento"),t.push("Direcci\xF3n estrat\xE9gica"),[...new Set(t)].slice(0,5)}var Tt=i=>document.querySelector(i),fh=new URLSearchParams(location.search),B={ent:null,mode:"none",connected:!1,ambient:!0,sending:{},summary:null,agents:[],agentsById:{},roomIndex:1,selected:null,sheet:null,history:[],accessEmail:"",accessStep:"email",snapshotKey:""};window.__pulse=B;var ph=Tt("#loader .bar i"),et=new _c(Tt("#stage"),{roomCount:Gt.length,onTap:Cy,onRoomChange:i=>{B.roomIndex=i,ya(),B.sheet&&B.sheet.type!=="agent"&&!B.sheet.pinned&&tn(),history.replaceState(null,"",`#${Gt[i].id}`)}});await Uf("./assets/furniture",i=>{ph.style.width=`${Math.round(i*80)}%`},{bundle:globalThis.PULSE_FURNITURE_BUNDLE||null});var Ln=Hf(et.scene);B.stage=et;B.office=Ln;var Ey={scene:et.scene,nav:Ln.nav,stationsByRoom:Ln.stationsByRoom,pitch:ft};B.agents=Wf(Ey);B.agents.forEach(i=>{B.agentsById[i.def.id]=i});var Ep=new Tc(Tt("#overlay"),et,{onAgent:i=>kc(i),onHotspot:(i,e)=>Ip(i,e)}),xp=location.hash.slice(1),wp=du(xp)>=0?du(xp):1;et.goToRoom(wp,{instant:!0});B.roomIndex=wp;B.agents.forEach(i=>i.plan(!0));Ay();ya();ph.style.width="90%";async function Tp(){try{let i=await gp();B.ent=lh(i,{mode:"live"}),B.mode="live",await B.ent.init(Rp)}catch(i){B.ent=null,B.mode="none",$t(`Sin conexi\xF3n con Supabase: ${i.message}`,"warn")}pn()}async function Ap(){B.ent?.client?.dispose?.();let i=_p({speed:Number(fh.get("demoSpeed"))||1});B.ent=lh(i,{mode:"demo"}),B.ent.client=i,B.mode="demo",await B.ent.init(Rp),pn(),ya()}function Rp(){pn()}var vp=null;function Bc(){if(clearTimeout(vp),!B.connected)return;let i=Object.values(B.sending).some(Boolean)||B.agents.some(e=>["receiving","running","mission"].includes(e.intent.kind));vp=setTimeout(async()=>{if(document.hidden){Bc();return}try{await B.ent.refresh()}catch{}pn(),Bc()},i?4e3:12e3)}function pn(){B.connected=!!B.ent?.user;let i=B.ent?.snapshot||{tasks:[],approvals:[],steps:[],missions:[],deliverables:[],roles:[]},e=up(i,ch,{connected:B.connected});B.summary=hp(i,B.connected);for(let s of B.agents){let r=e[s.dept];s.setIntent(r),Ty(s.def.room,r.kind),Zu(Ln.trays[s.def.room],r.approvals?.length||0)}Zu(Ln.trays.ceo,B.summary?.approvals||0);let t={};for(let s of B.agents){let r=e[s.dept].approvals?.length;r&&(t[`${s.def.room}:tray`]=r)}B.summary?.approvals&&(t["ceo:ceo-tray"]=B.summary.approvals),B.summary?.activeMissions&&(t["missions:mission-board"]=B.summary.activeMissions),Ep.setCounts(t);let n=`${B.mode}|${B.connected}|${i.sig||i.loadedAt}`;n!==B.snapshotKey&&(B.snapshotKey=n,$f(Ln.surfaces,B),B.sheet&&!Cp()?mn(!0):B.sheet&&(B.sheetStale=!0)),ya(),Bc()}function Cp(){let i=document.activeElement;return!!(i&&i.closest&&i.closest("#sheet")&&/^(TEXTAREA|INPUT)$/.test(i.tagName))}document.addEventListener("focusout",()=>setTimeout(()=>{B.sheetStale&&!Cp()&&(B.sheetStale=!1,B.sheet&&mn(!0))},50));var wy={receiving:"#8f7cf0",running:"#3cd17a",review:"#f2b33d",failed:"#e5484d",mission:"#4a90e2",completed:"#7ed6a5"};function Ty(i,e){let t=Ln.lamps[i];if(!t)return;let n=wy[e];t.userData.kind=e,n?(t.emissive.set(n),t.color.set(n),t.emissiveIntensity=1.2):(t.emissive.set("#000"),t.color.set("#b9b4aa"),t.emissiveIntensity=0)}function Ay(){Tt("#dots").innerHTML=Gt.map((i,e)=>`<button data-go="${e}" aria-label="${i.name}" style="--accent:${i.accent}"></button>`).join("")}function ya(){let i=Gt[B.roomIndex];Tt("#room-n").textContent=`${String(B.roomIndex+1).padStart(2,"0")}/${Gt.length}`,Tt("#room-name").textContent=i.name,Tt("#room-sub").textContent=i.sub,Tt("#room-card").style.setProperty("--accent",i.accent),document.querySelectorAll("#dots button").forEach((a,o)=>a.classList.toggle("on",o===B.roomIndex));let e=ep(B),t=Tt("#session");t.className=`session ${e.cls}`,t.querySelector("span").textContent=e.text,Tt("#sim-banner").hidden=B.mode!=="demo";let n=Tt("#legend");n.hidden=B.mode==="demo",B.connected?n.textContent=B.ambient?"Movimiento ambiental activo cuando no hay encargos":"Solo actividad registrada":n.textContent=B.ambient?"Sin sesi\xF3n \xB7 los agentes solo pasean (ambiente)":"Sin sesi\xF3n \xB7 actividad no consultada";let s=B.summary?.approvals||0,r=Tt('#dock [data-dock="approvals"] .badge');r.hidden=!s,r.textContent=s,Tt("#prev").disabled=B.roomIndex===0,Tt("#next").disabled=B.roomIndex===Gt.length-1}function Ry(i){return Math.max(0,Math.min(Gt.length-1,Math.round(i.pos.x/ft)))}function kc(i,e="chat"){let t=B.agentsById[i];if(!t)return;B.selected&&B.selected!==t&&B.selected.select(!1),B.selected=t,t.select(!0);let n=Ry(t);n!==B.roomIndex&&et.goToRoom(n),on({type:"agent",id:i,tab:e})}var Xn={obj:null,t:0};function Ip(i,e){let t=Ln.hotspots.find(n=>n.key===i&&n.room===e);if(t&&(Xn.obj=t.obj,Xn.t=0,Xn.base=t.obj.scale.clone()),i==="coffee"||i==="legacy-door"||i==="studio-cam"){on({type:"hot",key:i,room:e,focus:t});return}on({type:"hot",key:i,room:e,focus:t})}function Cy({x:i,y:e,ndc:t}){let n=null,s=56;for(let a of B.agents)for(let o of[a.bodyWorld,a.headWorld]){let c=et.project(o),l=Math.hypot(c.x-i,c.y-e);l<s&&(s=l,n=a)}if(n){kc(n.def.id);return}let r=et.raycast(t,Ln.hotspots.map(a=>a.obj));if(r.length){let a=r[0].object;for(;a&&!a.userData.item?.hot;)a=a.parent;if(a){Ip(a.userData.item.hot,a.userData.item.room);return}}B.sheet&&tn()}var Mt=Tt("#sheet");function on(i,{push:e=!1}={}){e&&B.sheet?B.history.push(B.sheet):e||(B.history=[]),B.sheet=i,mn()}function tn(){B.sheet=null,B.history=[],Mt.classList.remove("open","mid","tall","agent"),Mt.setAttribute("aria-hidden","true"),document.body.classList.remove("sheet-open"),B.selected&&(B.selected.select(!1),B.selected=null),et.focus({})}function Iy(){let i=B.history.pop();i?(B.sheet=i,mn()):tn()}function mn(i=!1){let e=B.sheet;if(!e)return;let t={},n=null;i&&Mt.querySelectorAll("input[name],textarea[name]").forEach(u=>{u.type!=="checkbox"&&u.value&&(t[u.name]=u.value),u===document.activeElement&&(n=u.name)});let s=Mt.querySelector(".sheet-body"),r=s&&s.scrollTop+s.clientHeight>=s.scrollHeight-40,a=i&&s&&!r?s.scrollTop:null,o=B.ent||{snapshot:{}},c={...B,ent:o},l;e.type==="agent"?l=ip(c,B.agentsById[e.id].def,e.tab):e.type==="task"?l=sp(c,e.id):e.type==="mission"?l=rp(c,e.id):e.type==="missions"?l=ah(c):e.type==="approvals"?l=Ic(c,e.dept):e.type==="files"?l=Pc(c,e.dept):e.type==="company"?l=oh(c,B.summary):e.type==="directory"?l=ap(c):e.type==="access"?l=op(c,B.accessStep,B.accessEmail):e.type==="hot"&&(l=cp(c,e.key,e.room)),Mt.querySelector(".sheet-inner").innerHTML=l.html,Mt.classList.add("open"),Mt.classList.toggle("tall",l.size==="tall"),Mt.classList.toggle("agent",l.size==="agent"),Mt.classList.toggle("mid",l.size==="mid"),document.body.classList.toggle("sheet-open",!0),Mt.setAttribute("aria-hidden","false");for(let[u,h]of Object.entries(t)){let d=Mt.querySelector(`[name="${u}"]`);d&&d.type!=="checkbox"&&(d.value=h)}if(n&&Mt.querySelector(`[name="${n}"]`)?.focus({preventScroll:!0}),dh(),a!=null){let u=Mt.querySelector(".sheet-body");u&&(u.scrollTop=a)}else if(e.type==="agent"&&e.tab==="chat"||r){let u=Mt.querySelector(".sheet-body");u&&(u.scrollTop=u.scrollHeight)}requestAnimationFrame(()=>{if(B.sheet!==e)return;let u=Mt.getBoundingClientRect().height;if(e.type==="agent"){let h=B.agentsById[e.id];et.focus({x:h.pos.x,z:h.pos.y,sheetPx:u,zoom:1.5})}else if(e.focus){let h=new Nt().setFromObject(e.focus.obj).getCenter(new D);et.focus({x:h.x,z:h.z,sheetPx:u,zoom:1.45})}else et.focus({sheetPx:u*.6})})}(()=>{let i=Mt.querySelector(".handle"),e=null;i.addEventListener("pointerdown",n=>{e=n.clientY,i.setPointerCapture(n.pointerId)}),i.addEventListener("pointermove",n=>{if(e==null)return;let s=Math.max(0,n.clientY-e);Mt.style.transform=`translateY(${s}px)`});let t=n=>{if(e==null)return;let s=n.clientY-e;e=null,Mt.style.transform="",s>70?tn():s<4};i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t)})();var Pp=i=>`${i.dataset.action}:${i.dataset.id}:${i.dataset.choice||i.dataset.op||""}`;function yp(i){let e=Pp(i);return B.armed&&B.armed.key===e&&performance.now()<B.armed.until?(B.armed=null,!0):(B.armed={key:e,until:performance.now()+3500},dh(),setTimeout(()=>{B.armed?.key===e&&performance.now()>=B.armed.until&&(B.armed=null,dh())},3600),!1)}function dh(){Mt.querySelectorAll('[data-action="decide"],[data-action="mission-op"]').forEach(i=>{let e=B.armed&&B.armed.key===Pp(i)&&performance.now()<B.armed.until;e&&!i.dataset.label&&(i.dataset.label=i.textContent,i.textContent="\xBFConfirmar?",i.classList.add("armed")),!e&&i.dataset.label&&(i.textContent=i.dataset.label,delete i.dataset.label,i.classList.remove("armed"))})}Mt.addEventListener("click",async i=>{let e=i.target.closest("[data-action]");if(!e||e.tagName==="FORM")return;let t=e.dataset.action,n=e.dataset.id;if(t!=="ambient"){i.preventDefault();try{if(t==="close")tn();else if(t==="back")Iy();else if(t==="tab")B.sheet.tab=e.dataset.tab,mn();else if(t==="task")on({type:"task",id:n},{push:!0}),Py(n);else if(t==="mission")on({type:"mission",id:n},{push:!0});else if(t==="agent")n&&(tn(),kc(n));else if(t==="agent-room"){let s=Es.find(r=>r.room===e.dataset.room);s&&(tn(),kc(s.id))}else if(t==="go")tn(),et.goToRoom(+e.dataset.index);else if(t==="file")await Ly(n);else if(t==="decide"){if(!yp(e))return;e.disabled=!0,await B.ent.decideApproval(n,e.dataset.choice),$t(`${e.dataset.choice==="approved"?"Aprobaci\xF3n":"Rechazo"} registrado${B.mode==="demo"?" en la simulaci\xF3n":" en el servidor"}`,"ok"),pn(),mn(!0)}else if(t==="retry"){let s=B.ent.snapshot.tasks.find(r=>r.id===n);s&&await Lp(s.department,s.instruction)}else if(t==="mission-op"){if(!yp(e))return;e.disabled=!0,await B.ent.missionAction(e.dataset.op,n),$t(B.mode==="demo"?"Acci\xF3n aplicada en la simulaci\xF3n":"El servidor confirm\xF3 la acci\xF3n","ok"),pn(),mn(!0)}else if(t==="access")on({type:"access"});else if(t==="demo")tn(),await Ap(),$t("Simulaci\xF3n local activada \xB7 datos inventados","warn");else if(t==="exit-demo")B.ent?.client?.dispose?.(),B.ent=null,B.mode="none",tn(),history.replaceState(null,"",location.pathname+location.hash),await Tp();else if(t==="access-reset")B.accessStep="email",mn();else if(t==="check-session"){e.disabled=!0;let s=await B.ent.checkSession();pn(),s?(tn(),$t("Sesi\xF3n iniciada","ok")):(e.disabled=!1,$t("Todav\xEDa no hay sesi\xF3n en este navegador. Abre el enlace del correo en este mismo navegador.","warn"))}else t==="logout"?(await B.ent.signOut(),tn(),pn()):t==="refresh"?(await B.ent?.refresh(),pn(),$t("Instant\xE1nea actualizada","ok")):t==="open-approvals"?on({type:"approvals"},{push:!0}):t==="open-missions"?on({type:"missions"},{push:!0}):t==="open-files"&&on({type:"files"},{push:!0})}catch(s){$t(Cs(s),"error"),e.disabled=!1}}});Mt.addEventListener("change",i=>{i.target.dataset.action==="ambient"&&(B.ambient=i.target.checked,B.agents.forEach(e=>e.setAmbient(B.ambient)),mn(!0),ya())});Mt.addEventListener("submit",async i=>{i.preventDefault();let e=i.target,t=e.dataset.action,n=Object.fromEntries(new FormData(e)),s=e.querySelector("button");try{if(t==="send"){let r=B.agentsById[B.sheet.id];await Lp(r.dept,n.instruction||"")}else if(t==="create-mission"){s.disabled=!0;let r=await B.ent.createMission(n.title||"",n.objective||"");$t(B.mode==="demo"?"Misi\xF3n creada en la SIMULACI\xD3N":`Misi\xF3n registrada en Supabase \xB7 ${String(r.missionId||"").slice(0,8)}`,"ok"),pn(),mn()}else t==="login"?(s.disabled=!0,B.accessEmail=n.email,await B.ent.requestLogin(n.email),B.accessStep="sent",mn()):t==="verify-link"?(s.disabled=!0,await B.ent.verifyLink(n.link),$t("Sesi\xF3n iniciada","ok"),tn(),await B.ent.refresh(),pn()):t==="verify-code"&&(s.disabled=!0,await B.ent.verifyCode(B.accessEmail,n.code),$t("Sesi\xF3n iniciada","ok"),tn(),await B.ent.refresh(),pn())}catch(r){$t(Cs(r),"error"),s&&(s.disabled=!1)}});Mt.addEventListener("keydown",i=>{i.key==="Enter"&&!i.shiftKey&&i.target.name==="instruction"&&(i.preventDefault(),i.target.form.requestSubmit())});Mt.addEventListener("input",i=>{i.target.name==="instruction"&&(i.target.style.height="auto",i.target.style.height=Math.min(120,i.target.scrollHeight)+"px")});async function Lp(i,e){let t=String(e).trim(),n=i==="Direcci\xF3n estrat\xE9gica";if(t.length<(n?20:5)){$t(n?"Describe el encargo para Ulises con al menos 20 caracteres.":"Escribe al menos 5 caracteres.","warn");return}if(B.sending[i])return;let s=B.agents.find(r=>r.dept===i);B.sending[i]=!0,s.receiveInstruction(),mn(),Bc();try{if(n){let r=await B.ent.askUlises(t);$t(B.mode==="demo"?"Ulises recibi\xF3 la misi\xF3n en la SIMULACI\xD3N":`Instrucci\xF3n registrada en Supabase \xB7 misi\xF3n ${String(r.missionId||"").slice(0,8)}`,"ok")}else await B.ent.runTask(i,t),$t(B.mode==="demo"?`${s.def.name}: resultado simulado listo`:`${s.def.name}: el servidor registr\xF3 el resultado`,"ok")}catch(r){$t(`No se complet\xF3: ${Cs(r)}`,"error");try{await B.ent.refresh()}catch{}}finally{B.sending[i]=!1,s.clearLocal(),pn(),B.sheet&&mn(!0)}}async function Py(i){if(B.taskResults=B.taskResults||{},!(B.taskResults[i]||!B.ent?.taskResult))try{B.taskResults[i]=await B.ent.taskResult(i),B.sheet?.type==="task"&&B.sheet.id===i&&mn(!0)}catch{}}async function Ly(i){let e=B.ent.snapshot.deliverables.find(s=>s.id===i),t=e&&e.mime_type!=="application/pdf",n=window.open("","_blank");try{let s=await B.ent.fileUrl(i,{download:t});n&&!n.closed?n.location.href=s:location.href=s}catch(s){try{n?.close()}catch{}throw s}}Tt("#dock").addEventListener("click",i=>{let e=i.target.closest("[data-dock]");if(!e)return;let t=e.dataset.dock;t==="office"&&on({type:"directory"}),t==="missions"&&on({type:"missions"}),t==="approvals"&&on({type:"approvals"}),t==="files"&&on({type:"files"})});Tt("#dots").addEventListener("click",i=>{let e=i.target.closest("[data-go]");e&&et.goToRoom(+e.dataset.go)});Tt("#prev").addEventListener("click",()=>et.goToRoom(B.roomIndex-1));Tt("#next").addEventListener("click",()=>et.goToRoom(B.roomIndex+1));Tt("#session").addEventListener("click",()=>on({type:"access"}));Tt("#legend").addEventListener("click",()=>on({type:"hot",key:"coffee",room:"rest"}));window.addEventListener("keydown",i=>{i.target.closest("input,textarea")||(i.key==="ArrowRight"&&et.goToRoom(B.roomIndex+1),i.key==="ArrowLeft"&&et.goToRoom(B.roomIndex-1),i.key==="Escape"&&tn())});document.addEventListener("visibilitychange",async()=>{if(!(document.hidden||!B.ent)){try{B.mode==="live"&&await B.ent.checkSession(),(B.connected||B.ent.user)&&await B.ent.refresh()}catch{}pn(),B.sheet?.type==="access"&&B.ent.user&&(tn(),$t("Sesi\xF3n iniciada","ok"))}});var bp;function $t(i,e="info"){let t=Tt("#toast");t.textContent=i,t.className=`toast show ${e}`,clearTimeout(bp),bp=setTimeout(()=>t.classList.remove("show"),e==="error"?6e3:3200)}var uh=performance.now(),hh=16,Fc=0,Oc=0,Mp=[Math.min(devicePixelRatio||1,2),1.5,1.25,1],Dp=fh.get("capture")==="1",Sp=performance.now();function Up(i){if(requestAnimationFrame(Up),Dp)return;if(document.hidden){uh=i;return}let e=Math.min(.1,(i-uh)/1e3);uh=i,Np(e,i)}window.__advance=(i=1,e=1/30)=>{for(let t=0;t<i;t++)Sp+=e*1e3,Np(e,Sp,t===i-1)};function Np(i,e,t=!0){let n=e/1e3;!B.sheet&&(et.sheetGoal>0||et.goalZoom>1.2||et.focusGoalY!==0)&&et.focus({}),et.update(i);for(let s of B.agents)s.update(i);for(let s of Ln.animated)Math.abs(et.camX-Gt.findIndex(r=>r.id===s.room)*ft)>ft*1.6||s.fn(n,s.room==="technology"&&B.agentsById["a-technology"].intent.kind==="running");for(let s of Object.values(Ln.lamps))(s.userData.kind==="running"||s.userData.kind==="review"||s.userData.kind==="receiving")&&(s.emissiveIntensity=.7+Math.sin(n*5)*.6);if(Xn.obj){Xn.t+=i;let s=Xn.t,r=1+Math.sin(Math.min(1,s/.45)*Math.PI)*.07;Xn.obj.scale.copy(Xn.base).multiplyScalar(r),s>.45&&(Xn.obj.scale.copy(Xn.base),Xn.obj=null)}if(B.sheet?.type==="agent"){let s=B.agentsById[B.sheet.id];et.focusGoalOffX=Math.max(-2.2,Math.min(2.2,s.pos.x-et.goalX)),et.focusGoalZ=s.pos.y}t&&(Ep.update(B.agents,Ln.hotspots,Gt[B.roomIndex].id,{selectedId:B.selected?.def.id,sheetOpen:!!B.sheet}),et.render(),!Dp&&(hh=hh*.95+i*1e3*.05,hh>25?(Fc+=i,Fc>2&&Oc<Mp.length-1&&(Oc++,et.renderer.setPixelRatio(Mp[Oc]),et.resize(),Fc=0,Oc>=2&&et.renderer.shadowMap.enabled&&Dy())):Fc=0))}function Dy(){et.renderer.shadowMap.enabled=!1,et.scene.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>{e.needsUpdate=!0})})}et.renderer.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),$t("El navegador liber\xF3 los gr\xE1ficos por memoria; recargando la oficina\u2026","warn"),setTimeout(()=>location.reload(),1800)},!1);requestAnimationFrame(Up);fh.get("demo")==="1"||globalThis.PULSE_PREVIEW==="demo"?await Ap():Tp();ph.style.width="100%";setTimeout(()=>{Tt("#loader").classList.add("done"),document.title="PULSE HQ",document.body.dataset.ready="1"},250);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
