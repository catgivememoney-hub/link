(()=>{var Qa="186";var Lu=0,kl=1,Du=2;var yo=1,ec=2,_r=3,Wi=0,Vn=1,wn=2,Xi=0,vr=1,fi=2,Gl=3,Vl=4,Nu=5;var Us=100,Uu=101,Fu=102,Ou=103,Bu=104,zu=200,Hu=201,ku=202,Gu=203,Wl=204,Xl=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,Zu=211,Ju=212,$u=213,Ku=214,pa=0,ma=1,ga=2,rr=3,xa=4,ya=5,_a=6,va=7,tc=0,ju=1,Qu=2,Ii=0,ql=1,Yl=2,Zl=3,_o=4,Jl=5,$l=6,Kl=7;var jl=300,vs=301,Fs=302,nc=303,ic=304,vo=306,or=1e3,Ui=1001,Ma=1002,kn=1003,ed=1004;var Mo=1005;var Xn=1006,sc=1007;var Ms=1008;var ri=1009,Ql=1010,eh=1011,Mr=1012,rc=1013,Li=1014,vi=1015,pi=1016,oc=1017,ac=1018,Er=1020,th=35902,nh=35899,ih=1021,sh=1022,Mi=1023,Fi=1026,Es=1027,cc=1028,lc=1029,Ss=1030,hc=1031;var uc=1033,Eo=33776,So=33777,wo=33778,bo=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,xc=37492,yc=37496,_c=37488,vc=37489,To=37490,Mc=37491,Ec=37808,Sc=37809,wc=37810,bc=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Lc=37818,Dc=37819,Nc=37820,Uc=37821,Fc=36492,Oc=36494,Bc=36495,zc=36283,Hc=36284,Ao=36285,kc=36286;var qr=2300,Ea=2301,da=2302,Pl=2303,Il=2400,Ll=2401,Dl=2402;var td=3200;var Ro=0,nd=1,is="",zn="srgb",Yr="srgb-linear",Zr="linear",sn="srgb";var fa=7680;var id=519,sd=512,rd=513,od=514,Gc=515,ad=516,cd=517,Vc=518,ld=519,hd=35044,rh=35048;var oh="300 es",Ri=2e3,ar=2001;function xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=Jr("canvas");return i.style.display="block",i}var Kh={},cr=null;function ah(...i){let e="THREE."+i.shift();cr?cr("log",e,...i):console.log(e,...i)}function dd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Tt(...i){i=dd(i);let e="THREE."+i.shift();if(cr)cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function It(...i){i=dd(i);let e="THREE."+i.shift();if(cr)cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cs(...i){let e=i.join(" ");e in Kh||(Kh[e]=!0,Tt(...i))}function fd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pd={[pa]:ma,[ga]:_a,[xa]:va,[rr]:ya,[ma]:pa,[_a]:ga,[va]:xa,[ya]:rr},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,Gr=Math.PI/180,Ps=180/Math.PI;function Sr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jn[i&255]+Jn[i>>8&255]+Jn[i>>16&255]+Jn[i>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function ch(i,e){return(i%e+e)%e}function _f(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vf(i,e,t){return i!==e?(t-i)/(e-i):0}function Vr(i,e,t){return(1-t)*i+t*e}function Mf(i,e,t,n){return Vr(i,e,1-Math.exp(-t*n))}function Ef(i,e=1){return e-Math.abs(ch(i,e*2)-e)}function Sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tf(i,e){return i+Math.random()*(e-i)}function Af(i){return i*(.5-Math.random())}function Rf(i){i!==void 0&&(jh=i);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cf(i){return i*Gr}function Pf(i){return i*Ps}function If(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Df(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),d=o((e+n)/2),m=r((e-n)/2),h=o((e-n)/2),u=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*d,c*m,c*h,a*l);break;case"YZY":i.set(c*h,a*d,c*m,a*l);break;case"ZXZ":i.set(c*m,c*h,a*d,a*l);break;case"XZX":i.set(a*d,c*_,c*u,a*l);break;case"YXY":i.set(c*u,a*d,c*_,a*l);break;case"ZYZ":i.set(c*_,c*u,a*d,a*l);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lh={DEG2RAD:Gr,RAD2DEG:Ps,generateUUID:Sr,clamp:Gt,euclideanModulo:ch,mapLinear:_f,inverseLerp:vf,lerp:Vr,damp:Mf,pingpong:Ef,smoothstep:Sf,smootherstep:wf,randInt:bf,randFloat:Tf,randFloatSpread:Af,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:If,ceilPowerOfTwo:Lf,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Nf,normalize:ni,denormalize:ir},mh=class mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mh.prototype.isVector2=!0;var ht=mh,Ut=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],m=n[s+3],h=r[o+0],u=r[o+1],_=r[o+2],T=r[o+3];if(m!==T||c!==h||l!==u||d!==_){let y=c*h+l*u+d*_+m*T;y<0&&(h=-h,u=-u,_=-_,T=-T,y=-y);let g=1-a;if(y<.9995){let M=Math.acos(y),I=Math.sin(M);g=Math.sin(g*M)/I,a=Math.sin(a*M)/I,c=c*g+h*a,l=l*g+u*a,d=d*g+_*a,m=m*g+T*a}else{c=c*g+h*a,l=l*g+u*a,d=d*g+_*a,m=m*g+T*a;let M=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=M,l*=M,d*=M,m*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],m=r[o],h=r[o+1],u=r[o+2],_=r[o+3];return e[t]=a*_+d*m+c*u-l*h,e[t+1]=c*_+d*h+l*m-a*u,e[t+2]=l*_+d*u+a*h-c*m,e[t+3]=d*_-a*m-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),m=a(r/2),h=c(n/2),u=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*d*m+l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m-h*u*_;break;case"YXZ":this._x=h*d*m+l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m+h*u*_;break;case"ZXY":this._x=h*d*m-l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m-h*u*_;break;case"ZYX":this._x=h*d*m-l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m+h*u*_;break;case"YZX":this._x=h*d*m+l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m-h*u*_;break;case"XZY":this._x=h*d*m-l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m+h*u*_;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],m=t[10],h=n+a+m;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>m){let u=2*Math.sqrt(1+n-a-m);this._w=(d-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>m){let u=2*Math.sqrt(1+a-n-m);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+d)/u}else{let u=2*Math.sqrt(1+m-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gh=class gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),d=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+c*l+o*m-a*d,this.y=n+c*d+a*l-r*m,this.z=s+c*m+r*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gh.prototype.isVector3=!0;var N=gh,rl=new N,Qh=new Ut,xh=class xh{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],m=n[7],h=n[2],u=n[5],_=n[8],T=s[0],y=s[3],g=s[6],M=s[1],I=s[4],w=s[7],b=s[2],R=s[5],F=s[8];return r[0]=o*T+a*M+c*b,r[3]=o*y+a*I+c*R,r[6]=o*g+a*w+c*F,r[1]=l*T+d*M+m*b,r[4]=l*y+d*I+m*R,r[7]=l*g+d*w+m*F,r[2]=h*T+u*M+_*b,r[5]=h*y+u*I+_*R,r[8]=h*g+u*w+_*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],m=d*o-a*l,h=a*c-d*r,u=l*r-o*c,_=t*m+n*h+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return e[0]=m*T,e[1]=(s*l-d*n)*T,e[2]=(a*n-s*o)*T,e[3]=h*T,e[4]=(d*t-s*c)*T,e[5]=(s*r-a*t)*T,e[6]=u*T,e[7]=(n*c-l*t)*T,e[8]=(o*t-n*r)*T,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;var Lt=xh,ol=new Lt,eu=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uf(){let i={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===sn&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===sn&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yr]:{primaries:e,whitePoint:n,transfer:Zr,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:n,transfer:sn,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),i}var Yt=Uf();function ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Jr("canvas")),Vs.width=e.width,Vs.height=e.height;let s=Vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ns(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ns(t[n]/255)*255):t[n]=ns(t[n]);return{data:t,width:e.width,height:e.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ff=0,lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}var Of=0,cl=new N,ii=class i extends Oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=Xn,o=Ms,a=Mi,c=ri,l=i.DEFAULT_ANISOTROPY,d=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Sr(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=jl;ii.DEFAULT_ANISOTROPY=1;var yh=class yh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],m=c[8],h=c[1],u=c[5],_=c[9],T=c[2],y=c[6],g=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-T)<.01&&Math.abs(_-y)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+T)<.1&&Math.abs(_+y)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(l+1)/2,w=(u+1)/2,b=(g+1)/2,R=(d+h)/4,F=(m+T)/4,E=(_+y)/4;return I>w&&I>b?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=R/n,r=F/n):w>b?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=E/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=F/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((y-_)*(y-_)+(m-T)*(m-T)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(y-_)/M,this.y=(m-T)/M,this.z=(h-d)/M,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Gt(this.x,e.x,t.x),this.y=Gt(this.y,e.y,t.y),this.z=Gt(this.z,e.z,t.z),this.w=Gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Gt(this.x,e,t),this.y=Gt(this.y,e,t),this.z=Gt(this.z,e,t),this.w=Gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;var cn=yh,wa=class extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new ii(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends wa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends ii{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kn,this.minFilter=kn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ja=class ja{constructor(e,t,n,s,r,o,a,c,l,d,m,h,u,_,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,d,m,h,u,_,T,y)}set(e,t,n,s,r,o,a,c,l,d,m,h,u,_,T,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=d,g[10]=m,g[14]=h,g[3]=u,g[7]=_,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ja().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let h=o*d,u=o*m,_=a*d,T=a*m;t[0]=c*d,t[4]=-c*m,t[8]=l,t[1]=u+_*l,t[5]=h-T*l,t[9]=-a*c,t[2]=T-h*l,t[6]=_+u*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*d,u=c*m,_=l*d,T=l*m;t[0]=h+T*a,t[4]=_*a-u,t[8]=o*l,t[1]=o*m,t[5]=o*d,t[9]=-a,t[2]=u*a-_,t[6]=T+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*d,u=c*m,_=l*d,T=l*m;t[0]=h-T*a,t[4]=-o*m,t[8]=_+u*a,t[1]=u+_*a,t[5]=o*d,t[9]=T-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*d,u=o*m,_=a*d,T=a*m;t[0]=c*d,t[4]=_*l-u,t[8]=h*l+T,t[1]=c*m,t[5]=T*l+h,t[9]=u*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,u=o*l,_=a*c,T=a*l;t[0]=c*d,t[4]=T-h*m,t[8]=_*m+u,t[1]=m,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=u*m+_,t[10]=h-T*m}else if(e.order==="XZY"){let h=o*c,u=o*l,_=a*c,T=a*l;t[0]=c*d,t[4]=-m,t[8]=l*d,t[1]=h*m+T,t[5]=o*d,t[9]=u*m-_,t[2]=_*m-u,t[6]=a*d,t[10]=T*m+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,zf)}lookAt(e,t,n){let s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),hs.crossVectors(n,li),hs.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),hs.crossVectors(n,li)),hs.normalize(),Go.crossVectors(li,hs),s[0]=hs.x,s[4]=Go.x,s[8]=li.x,s[1]=hs.y,s[5]=Go.y,s[9]=li.y,s[2]=hs.z,s[6]=Go.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],m=n[5],h=n[9],u=n[13],_=n[2],T=n[6],y=n[10],g=n[14],M=n[3],I=n[7],w=n[11],b=n[15],R=s[0],F=s[4],E=s[8],O=s[12],W=s[1],J=s[5],$=s[9],ee=s[13],z=s[2],Q=s[6],re=s[10],ie=s[14],me=s[3],he=s[7],de=s[11],_e=s[15];return r[0]=o*R+a*W+c*z+l*me,r[4]=o*F+a*J+c*Q+l*he,r[8]=o*E+a*$+c*re+l*de,r[12]=o*O+a*ee+c*ie+l*_e,r[1]=d*R+m*W+h*z+u*me,r[5]=d*F+m*J+h*Q+u*he,r[9]=d*E+m*$+h*re+u*de,r[13]=d*O+m*ee+h*ie+u*_e,r[2]=_*R+T*W+y*z+g*me,r[6]=_*F+T*J+y*Q+g*he,r[10]=_*E+T*$+y*re+g*de,r[14]=_*O+T*ee+y*ie+g*_e,r[3]=M*R+I*W+w*z+b*me,r[7]=M*F+I*J+w*Q+b*he,r[11]=M*E+I*$+w*re+b*de,r[15]=M*O+I*ee+w*ie+b*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],m=e[6],h=e[10],u=e[14],_=e[3],T=e[7],y=e[11],g=e[15],M=c*u-l*h,I=a*u-l*m,w=a*h-c*m,b=o*u-l*d,R=o*h-c*d,F=o*m-a*d;return t*(T*M-y*I+g*w)-n*(_*M-y*b+g*R)+s*(_*I-T*b+g*F)-r*(_*w-T*R+y*F)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],m=e[9],h=e[10],u=e[11],_=e[12],T=e[13],y=e[14],g=e[15],M=t*a-n*o,I=t*c-s*o,w=t*l-r*o,b=n*c-s*a,R=n*l-r*a,F=s*l-r*c,E=d*T-m*_,O=d*y-h*_,W=d*g-u*_,J=m*y-h*T,$=m*g-u*T,ee=h*g-u*y,z=M*ee-I*$+w*J+b*W-R*O+F*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/z;return e[0]=(a*ee-c*$+l*J)*Q,e[1]=(s*$-n*ee-r*J)*Q,e[2]=(T*F-y*R+g*b)*Q,e[3]=(h*R-m*F-u*b)*Q,e[4]=(c*W-o*ee-l*O)*Q,e[5]=(t*ee-s*W+r*O)*Q,e[6]=(y*w-_*F-g*I)*Q,e[7]=(d*F-h*w+u*I)*Q,e[8]=(o*$-a*W+l*E)*Q,e[9]=(n*W-t*$-r*E)*Q,e[10]=(_*R-T*w+g*M)*Q,e[11]=(m*w-d*R-u*M)*Q,e[12]=(a*O-o*J-c*E)*Q,e[13]=(t*J-n*O+s*E)*Q,e[14]=(T*I-_*b-y*M)*Q,e[15]=(d*b-m*I+h*M)*Q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,d=o+o,m=a+a,h=r*l,u=r*d,_=r*m,T=o*d,y=o*m,g=a*m,M=c*l,I=c*d,w=c*m,b=n.x,R=n.y,F=n.z;return s[0]=(1-(T+g))*b,s[1]=(u+w)*b,s[2]=(_-I)*b,s[3]=0,s[4]=(u-w)*R,s[5]=(1-(h+g))*R,s[6]=(y+M)*R,s[7]=0,s[8]=(_+I)*F,s[9]=(y-M)*F,s[10]=(1-(h+T))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),c=Ws.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bi.copy(this);let l=1/o,d=1/a,m=1/c;return bi.elements[0]*=l,bi.elements[1]*=l,bi.elements[2]*=l,bi.elements[4]*=d,bi.elements[5]*=d,bi.elements[6]*=d,bi.elements[8]*=m,bi.elements[9]*=m,bi.elements[10]*=m,t.setFromRotationMatrix(bi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ri,c=!1){let l=this.elements,d=2*r/(t-e),m=2*r/(n-s),h=(t+e)/(t-e),u=(n+s)/(n-s),_,T;if(c)_=r/(o-r),T=o*r/(o-r);else if(a===Ri)_=-(o+r)/(o-r),T=-2*o*r/(o-r);else if(a===ar)_=-o/(o-r),T=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ri,c=!1){let l=this.elements,d=2/(t-e),m=2/(n-s),h=-(t+e)/(t-e),u=-(n+s)/(n-s),_,T;if(c)_=1/(o-r),T=o/(o-r);else if(a===Ri)_=-2/(o-r),T=-(o+r)/(o-r);else if(a===ar)_=-1/(o-r),T=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ja.prototype.isMatrix4=!0;var vt=ja,Ws=new N,bi=new vt,Bf=new N(0,0,0),zf=new N(1,1,1),hs=new N,Go=new N,li=new N,nu=new vt,iu=new Ut,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],m=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hf=0,su=new N,Xs=new Ut,Ki=new vt,Vo=new N,Ur=new N,kf=new N,Gf=new Ut,ru=new N(1,0,0),ou=new N(0,1,0),au=new N(0,0,1),cu={type:"added"},Vf={type:"removed"},qs={type:"childadded",child:null},ll={type:"childremoved",child:null},In=class i extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Sn,n=new Ut,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Lt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(au,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vo.copy(e):Vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ur,Vo,this.up):Ki.lookAt(Vo,Ur,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),qs.child=e,this.dispatchEvent(qs),qs.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let m=c[l];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),m=o(e.shapes),h=o(e.skeletons),u=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};In.DEFAULT_UP=new N(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wf={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let T of e.hand.values()){let y=t.getJointPose(T,n),g=this._getHandJoint(l,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}let d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=d.position.distanceTo(m.position),u=.02,_=.005;l.inputState.pinching&&h>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Yt.workingColorSpace){if(e=ch(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(e,t=zn){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){let n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Yt.workingToColorSpace($n.copy(this),e),Math.round(Gt($n.r*255,0,255))*65536+Math.round(Gt($n.g*255,0,255))*256+Math.round(Gt($n.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace($n.copy(this),t);let n=$n.r,s=$n.g,r=$n.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let m=o-a;switch(l=d<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=zn){Yt.workingToColorSpace($n.copy(this),e);let t=$n.r,n=$n.g,s=$n.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(Wo);let n=Vr(us.h,Wo.h,t),s=Vr(us.s,Wo.s,t),r=Vr(us.l,Wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new ct;ct.NAMES=md;var Kr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dr=class extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new N,ji=new N,ul=new N,Qi=new N,Ys=new N,Zs=new N,lu=new N,dl=new N,fl=new N,pl=new N,ml=new cn,gl=new cn,xl=new cn,ms=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ti.subVectors(e,t),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ti.subVectors(s,t),ji.subVectors(n,t),ul.subVectors(e,t);let o=Ti.dot(Ti),a=Ti.dot(ji),c=Ti.dot(ul),l=ji.dot(ji),d=ji.dot(ul),m=o*l-a*a;if(m===0)return r.set(0,0,0),null;let h=1/m,u=(l*c-a*d)*h,_=(o*d-a*c)*h;return r.set(1-u-_,_,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qi.x),c.addScaledVector(o,Qi.y),c.addScaledVector(a,Qi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ml.setScalar(0),gl.setScalar(0),xl.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),xl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(e,t,n,s){return Ti.subVectors(n,t),ji.subVectors(e,t),Ti.cross(ji).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ti.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ys.subVectors(s,n),Zs.subVectors(r,n),dl.subVectors(e,n);let c=Ys.dot(dl),l=Zs.dot(dl);if(c<=0&&l<=0)return t.copy(n);fl.subVectors(e,s);let d=Ys.dot(fl),m=Zs.dot(fl);if(d>=0&&m<=d)return t.copy(s);let h=c*m-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Ys,o);pl.subVectors(e,r);let u=Ys.dot(pl),_=Zs.dot(pl);if(_>=0&&u<=_)return t.copy(r);let T=u*l-c*_;if(T<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Zs,a);let y=d*_-u*m;if(y<=0&&m-d>=0&&u-_>=0)return lu.subVectors(r,s),a=(m-d)/(m-d+(u-_)),t.copy(s).addScaledVector(lu,a);let g=1/(y+T+h);return o=T*g,a=h*g,t.copy(n).addScaledVector(Ys,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),qo.subVectors(this.max,Fr),Js.subVectors(e.a,Fr),$s.subVectors(e.b,Fr),Ks.subVectors(e.c,Fr),ds.subVectors($s,Js),fs.subVectors(Ks,$s),bs.subVectors(Js,Ks);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-bs.z,bs.y,ds.z,0,-ds.x,fs.z,0,-fs.x,bs.z,0,-bs.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-bs.y,bs.x,0];return!yl(t,Js,$s,Ks,qo)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Js,$s,Ks,qo))?!1:(Yo.crossVectors(ds,fs),t=[Yo.x,Yo.y,Yo.z],yl(t,Js,$s,Ks,qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new N,new N,new N,new N,new N,new N,new N,new N],Ai=new N,Xo=new Bi,Js=new N,$s=new N,Ks=new N,ds=new N,fs=new N,bs=new N,Fr=new N,qo=new N,Yo=new N,Ts=new N;function yl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),c=e.dot(Ts),l=t.dot(Ts),d=n.dot(Ts);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Cn=new N,Zo=new ht,Xf=0,en=class extends Oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hd,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ni(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),n=ni(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),n=ni(n,this.array),s=ni(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),n=ni(n,this.array),s=ni(s,this.array),r=ni(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var jr=class extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qr=class extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}},qf=new Bi,Or=new N,_l=new N,zi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(_l)),this.expandByPoint(Or.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yf=0,xi=new vt,vl=new In,js=new N,hi=new Bi,Br=new Bi,Bn=new N,qt=class i extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?Qr:jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(hi.min,Br.min),hi.expandByPoint(Bn),Bn.addVectors(hi.max,Br.max),hi.expandByPoint(Bn)):(hi.expandByPoint(Br.min),hi.expandByPoint(Br.max))}hi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Bn.fromBufferAttribute(a,l),c&&(js.fromBufferAttribute(e,l),Bn.add(js)),s=Math.max(s,n.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new en(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new N,c[E]=new N;let l=new N,d=new N,m=new N,h=new ht,u=new ht,_=new ht,T=new N,y=new N;function g(E,O,W){l.fromBufferAttribute(n,E),d.fromBufferAttribute(n,O),m.fromBufferAttribute(n,W),h.fromBufferAttribute(r,E),u.fromBufferAttribute(r,O),_.fromBufferAttribute(r,W),d.sub(l),m.sub(l),u.sub(h),_.sub(h);let J=1/(u.x*_.y-_.x*u.y);isFinite(J)&&(T.copy(d).multiplyScalar(_.y).addScaledVector(m,-u.y).multiplyScalar(J),y.copy(m).multiplyScalar(u.x).addScaledVector(d,-_.x).multiplyScalar(J),a[E].add(T),a[O].add(T),a[W].add(T),c[E].add(y),c[O].add(y),c[W].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,O=M.length;E<O;++E){let W=M[E],J=W.start,$=W.count;for(let ee=J,z=J+$;ee<z;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let I=new N,w=new N,b=new N,R=new N;function F(E){b.fromBufferAttribute(s,E),R.copy(b);let O=a[E];I.copy(O),I.sub(b.multiplyScalar(b.dot(O))).normalize(),w.crossVectors(R,O);let J=w.dot(c[E])<0?-1:1;o.setXYZW(E,I.x,I.y,I.z,J)}for(let E=0,O=M.length;E<O;++E){let W=M[E],J=W.start,$=W.count;for(let ee=J,z=J+$;ee<z;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,d=new N,m=new N;if(e)for(let h=0,u=e.count;h<u;h+=3){let _=e.getX(h+0),T=e.getX(h+1),y=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,T),o.fromBufferAttribute(t,y),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,y),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,m=a.normalized,h=new l.constructor(c.length*d),u=0,_=0;for(let T=0,y=c.length;T<y;T++){a.isInterleavedBufferAttribute?u=c[T]*a.data.stride+a.offset:u=c[T]*d;for(let g=0;g<d;g++)h[_++]=l[u++]}return new en(h,d,m)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,m=l.length;d<m;d++){let h=l[d],u=e(h,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let m=0,h=l.length;m<h;m++){let u=l[m];d.push(u.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],m=r[l];for(let h=0,u=m.length;h<u;h++)d.push(m[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new N,Zf=new N,Jf=new Lt,ui=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ml.subVectors(n,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jf.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$f=0,Ci=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=vr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Tt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ts=new N,El=new N,Jo=new N,$o=new N,Is=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){El.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),$o.copy(this.origin).sub(El);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jo),a=$o.dot(this.direction),c=-$o.dot(Jo),l=$o.lengthSq(),d=Math.abs(1-o*o),m,h,u,_;if(d>0)if(m=o*c-a,h=o*a-c,_=r*d,m>=0)if(h>=-_)if(h<=_){let T=1/d;m*=T,h*=T,u=m*(m+o*h+2*a)+h*(o*m+h+2*c)+l}else h=r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*c)+l;else h=-r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*c)+l;else h<=-_?(m=Math.max(0,-(-o*r+a)),h=m>0?-r:Math.min(Math.max(-r,-c),r),u=-m*m+h*(h+2*c)+l):h<=_?(m=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+l):(m=Math.max(0,-(o*r+a)),h=m>0?r:Math.min(Math.max(-r,-c),r),u=-m*m+h*(h+2*c)+l);else h=o>0?-r:r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(El).addScaledVector(Jo,h),u}intersectSphere(e,t){if(e.radius<0)return null;ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),s=ts.dot(ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(a=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,m=e.x-o.x,h=e.y-o.y,u=e.z-o.z,_=t.x-o.x,T=t.y-o.y,y=t.z-o.z,g=n.x-o.x,M=n.y-o.y,I=n.z-o.z,w=Math.abs(c),b=Math.abs(l),R=Math.abs(d),F,E,O,W,J,$,ee,z,Q,re,ie,me;if(w>=b&&w>=R?(O=c,$=m,Q=_,me=g,c>=0?(F=l,E=d,W=h,J=u,ee=T,z=y,re=M,ie=I):(F=d,E=l,W=u,J=h,ee=y,z=T,re=I,ie=M)):b>=R?(O=l,$=h,Q=T,me=M,l>=0?(F=d,E=c,W=u,J=m,ee=y,z=_,re=I,ie=g):(F=c,E=d,W=m,J=u,ee=_,z=y,re=g,ie=I)):(O=d,$=u,Q=y,me=I,d>=0?(F=c,E=l,W=m,J=h,ee=_,z=T,re=g,ie=M):(F=l,E=c,W=h,J=m,ee=T,z=_,re=M,ie=g)),O===0)return null;let he=F/O,de=E/O,_e=1/O,nt=W-he*$,Je=J-de*$,Ht=ee-he*Q,Ze=z-de*Q,xt=re-he*me,ge=ie-de*me,xe=xt*Ze-ge*Ht,Ce=nt*ge-Je*xt,je=Ht*Je-Ze*nt;if(s){if(xe<0||Ce<0||je<0)return null}else if((xe<0||Ce<0||je<0)&&(xe>0||Ce>0||je>0))return null;let Ke=xe+Ce+je;if(Ke===0)return null;let Mt=_e*(xe*$+Ce*Q+je*me);return(Ke>0?Mt<0:Mt>0)?null:this.at(Mt/Ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nn=class extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hu=new vt,As=new Is,Ko=new zi,uu=new N,jo=new N,Qo=new N,ea=new N,Sl=new N,ta=new N,du=new N,na=new N,gt=class extends In{constructor(e=new qt,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],m=r[c];d!==0&&(Sl.fromBufferAttribute(m,e),o?ta.addScaledVector(Sl,d):ta.addScaledVector(Sl.sub(t),d))}t.add(ta)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Ko.containsPoint(As.origin)===!1&&(As.intersectSphere(Ko,uu)===null||As.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(hu.copy(r).invert(),As.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,T=h.length;_<T;_++){let y=h[_],g=o[y.materialIndex],M=Math.max(y.start,u.start),I=Math.min(a.count,Math.min(y.start+y.count,u.start+u.count));for(let w=M,b=I;w<b;w+=3){let R=a.getX(w),F=a.getX(w+1),E=a.getX(w+2);s=ia(this,g,e,n,l,d,m,R,F,E),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),T=Math.min(a.count,u.start+u.count);for(let y=_,g=T;y<g;y+=3){let M=a.getX(y),I=a.getX(y+1),w=a.getX(y+2);s=ia(this,o,e,n,l,d,m,M,I,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,T=h.length;_<T;_++){let y=h[_],g=o[y.materialIndex],M=Math.max(y.start,u.start),I=Math.min(c.count,Math.min(y.start+y.count,u.start+u.count));for(let w=M,b=I;w<b;w+=3){let R=w,F=w+1,E=w+2;s=ia(this,g,e,n,l,d,m,R,F,E),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{let _=Math.max(0,u.start),T=Math.min(c.count,u.start+u.count);for(let y=_,g=T;y<g;y+=3){let M=y,I=y+1,w=y+2;s=ia(this,o,e,n,l,d,m,M,I,w),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}};function Kf(i,e,t,n,s,r,o,a){let c;if(e.side===Vn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Wi,a),c===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:i}}function ia(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,jo),i.getVertexPosition(c,Qo),i.getVertexPosition(l,ea);let d=Kf(i,e,t,n,jo,Qo,ea,du);if(d){let m=new N;ms.getBarycoord(du,jo,Qo,ea,m),s&&(d.uv=ms.getInterpolatedAttribute(s,a,c,l,m,new ht)),r&&(d.uv1=ms.getInterpolatedAttribute(r,a,c,l,m,new ht)),o&&(d.normal=ms.getInterpolatedAttribute(o,a,c,l,m,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new N,materialIndex:0};ms.getNormal(jo,Qo,ea,h.normal),d.face=h,d.barycoord=m}return d}var eo=class extends ii{constructor(e=null,t=1,n=1,s,r,o,a,c,l=kn,d=kn,m,h){super(null,o,a,c,l,d,s,r,m,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new vt,fu=new vt,sa=[],pu=new Bi,jf=new vt,zr=new gt,Hr=new zi,yi=class extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),pu.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Hr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),fu.multiplyMatrices(n,Qs),zr.matrixWorld=fu,zr.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){let c=sa[o];c.instanceId=r,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,cc,vi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new zi,Qf=new ht(.5,.5),ra=new N,fr=class{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],m=r[5],h=r[6],u=r[7],_=r[8],T=r[9],y=r[10],g=r[11],M=r[12],I=r[13],w=r[14],b=r[15];if(s[0].setComponents(l-o,u-d,g-_,b-M).normalize(),s[1].setComponents(l+o,u+d,g+_,b+M).normalize(),s[2].setComponents(l+a,u+m,g+T,b+I).normalize(),s[3].setComponents(l-a,u-m,g-T,b-I).normalize(),n)s[4].setComponents(c,h,y,w).normalize(),s[5].setComponents(l-c,u-h,g-y,b-w).normalize();else if(s[4].setComponents(l-c,u-h,g-y,b-w).normalize(),t===Ri)s[5].setComponents(l+c,u+h,g+y,b+w).normalize();else if(t===ar)s[5].setComponents(c,h,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=Qf.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pr=class extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new N,Aa=new N,mu=new vt,kr=new Is,oa=new zi,wl=new N,gu=new N,mr=class extends In{constructor(e=new qt,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),Aa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(Aa);e.setAttribute("lineDistance",new Ct(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;mu.copy(s).invert(),kr.copy(e.ray).applyMatrix4(mu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let T=u,y=_-1;T<y;T+=l){let g=d.getX(T),M=d.getX(T+1),I=aa(this,e,kr,c,g,M,T);I&&t.push(I)}if(this.isLineLoop){let T=d.getX(_-1),y=d.getX(u),g=aa(this,e,kr,c,T,y,_-1);g&&t.push(g)}}else{let u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let T=u,y=_-1;T<y;T+=l){let g=aa(this,e,kr,c,T,T+1,T);g&&t.push(g)}if(this.isLineLoop){let T=aa(this,e,kr,c,_-1,u,_-1);T&&t.push(T)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function aa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),Aa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ta,Aa,wl,gu)>n)return;wl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(wl);if(!(l<e.near||l>e.far))return{distance:l,point:gu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var xu=new N,yu=new N,to=class extends mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xu.fromBufferAttribute(t,s),yu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xu.distanceTo(yu);e.setAttribute("lineDistance",new Ct(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ra=class extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_u=new vt,Nl=new Is,ca=new zi,la=new N,_i=class extends In{constructor(e=new qt,t=new Ra){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;_u.copy(s).invert(),Nl.copy(e.ray).applyMatrix4(_u);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,m=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let _=h,T=u;_<T;_++){let y=l.getX(_);la.fromBufferAttribute(m,y),vu(la,y,c,s,e,t,this)}}else{let h=Math.max(0,o.start),u=Math.min(m.count,o.start+o.count);for(let _=h,T=u;_<T;_++)la.fromBufferAttribute(m,_),vu(la,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vu(i,e,t,n,s,r,o){let a=Nl.distanceSqToPoint(i);if(a<t){let c=new N;Nl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var no=class extends ii{constructor(e=[],t=vs,n,s,r,o,a,c,l,d){super(e,t,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pi=class extends ii{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends ii{constructor(e,t,n=Li,s,r,o,a=kn,c=kn,l,d=Fi,m=1){if(d!==Fi&&d!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:m};super(h,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ca=class extends ki{constructor(e,t=Li,n=vs,s,r,o=kn,a=kn,c,l=Fi){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},io=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},De=class i extends qt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],m=[],h=0,u=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(m,2));function _(T,y,g,M,I,w,b,R,F,E,O){let W=w/F,J=b/E,$=w/2,ee=b/2,z=R/2,Q=F+1,re=E+1,ie=0,me=0,he=new N;for(let de=0;de<re;de++){let _e=de*J-ee;for(let nt=0;nt<Q;nt++){let Je=nt*W-$;he[T]=Je*M,he[y]=_e*I,he[g]=z,l.push(he.x,he.y,he.z),he[T]=0,he[y]=0,he[g]=R>0?1:-1,d.push(he.x,he.y,he.z),m.push(nt/F),m.push(1-de/E),ie+=1}}for(let de=0;de<E;de++)for(let _e=0;_e<F;_e++){let nt=h+_e+Q*de,Je=h+_e+Q*(de+1),Ht=h+(_e+1)+Q*(de+1),Ze=h+(_e+1)+Q*de;c.push(nt,Je,Ze),c.push(Je,Ht,Ze),me+=6}a.addGroup(u,me,O),u+=me,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ls=class i extends qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new N,d=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let m=0,h=3;m<=t;m++,h+=3){let u=n+m/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,c.push(d.x,d.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},We=class i extends qt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],m=[],h=[],u=[],_=0,T=[],y=n/2,g=0;M(),o===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(d),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function M(){let w=new N,b=new N,R=0,F=(t-e)/n;for(let E=0;E<=r;E++){let O=[],W=E/r,J=W*(t-e)+e;for(let $=0;$<=s;$++){let ee=$/s,z=ee*c+a,Q=Math.sin(z),re=Math.cos(z);b.x=J*Q,b.y=-W*n+y,b.z=J*re,m.push(b.x,b.y,b.z),w.set(Q,F,re).normalize(),h.push(w.x,w.y,w.z),u.push(ee,1-W),O.push(_++)}T.push(O)}for(let E=0;E<s;E++)for(let O=0;O<r;O++){let W=T[O][E],J=T[O+1][E],$=T[O+1][E+1],ee=T[O][E+1];(e>0||O!==0)&&(d.push(W,J,ee),R+=3),(t>0||O!==r-1)&&(d.push(J,$,ee),R+=3)}l.addGroup(g,R,0),g+=R}function I(w){let b=_,R=new ht,F=new N,E=0,O=w===!0?e:t,W=w===!0?1:-1;for(let $=1;$<=s;$++)m.push(0,y*W,0),h.push(0,W,0),u.push(.5,.5),_++;let J=_;for(let $=0;$<=s;$++){let z=$/s*c+a,Q=Math.cos(z),re=Math.sin(z);F.x=O*re,F.y=y*W,F.z=O*Q,m.push(F.x,F.y,F.z),h.push(0,W,0),R.x=Q*.5+.5,R.y=re*.5*W+.5,u.push(R.x,R.y),_++}for(let $=0;$<s;$++){let ee=b+$,z=J+$;w===!0?d.push(z,z+1,ee):d.push(z+1,z,ee),E+=3}l.addGroup(g,E,w===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mn=class i extends We{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pa=class i extends qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),d(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let I=new N,w=new N,b=new N;for(let R=0;R<t.length;R+=3)u(t[R+0],I),u(t[R+1],w),u(t[R+2],b),c(I,w,b,M)}function c(M,I,w,b){let R=b+1,F=[];for(let E=0;E<=R;E++){F[E]=[];let O=M.clone().lerp(w,E/R),W=I.clone().lerp(w,E/R),J=R-E;for(let $=0;$<=J;$++)$===0&&E===R?F[E][$]=O:F[E][$]=O.clone().lerp(W,$/J)}for(let E=0;E<R;E++)for(let O=0;O<2*(R-E)-1;O++){let W=Math.floor(O/2);O%2===0?(h(F[E][W+1]),h(F[E+1][W]),h(F[E][W])):(h(F[E][W+1]),h(F[E+1][W+1]),h(F[E+1][W]))}}function l(M){let I=new N;for(let w=0;w<r.length;w+=3)I.x=r[w+0],I.y=r[w+1],I.z=r[w+2],I.normalize().multiplyScalar(M),r[w+0]=I.x,r[w+1]=I.y,r[w+2]=I.z}function d(){let M=new N;for(let I=0;I<r.length;I+=3){M.x=r[I+0],M.y=r[I+1],M.z=r[I+2];let w=y(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;o.push(w,1-b)}_(),m()}function m(){for(let M=0;M<o.length;M+=6){let I=o[M+0],w=o[M+2],b=o[M+4],R=Math.max(I,w,b),F=Math.min(I,w,b);R>.9&&F<.1&&(I<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function u(M,I){let w=M*3;I.x=e[w+0],I.y=e[w+1],I.z=e[w+2]}function _(){let M=new N,I=new N,w=new N,b=new N,R=new ht,F=new ht,E=new ht;for(let O=0,W=0;O<r.length;O+=9,W+=6){M.set(r[O+0],r[O+1],r[O+2]),I.set(r[O+3],r[O+4],r[O+5]),w.set(r[O+6],r[O+7],r[O+8]),R.set(o[W+0],o[W+1]),F.set(o[W+2],o[W+3]),E.set(o[W+4],o[W+5]),b.copy(M).add(I).add(w).divideScalar(3);let J=y(b);T(R,W+0,M,J),T(F,W+2,I,J),T(E,W+4,w,J)}}function T(M,I,w,b){b<0&&M.x===1&&(o[I]=M.x-1),w.x===0&&w.z===0&&(o[I]=b/2/Math.PI+.5)}function y(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],h=n[s+1]-d,u=(o-d)/h;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ht:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new vt;for(let u=0;u<=e;u++){let _=u/e;s[u]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),m=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),m<=l&&(l=m,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Gt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,_))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Gt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],u*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},so=class extends si{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ht){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),h=c-this.aX,u=l-this.aY;c=h*d-u*m+this.aX,l=h*m+u*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ia=class extends so{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,m){let h=(o-r)/l-(a-r)/(l+d)+(a-o)/d,u=(a-o)/d-(c-o)/(d+m)+(c-a)/m;h*=d,u*=d,s(o,a,h,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Mu=new N,Eu=new N,bl=new hh,Tl=new hh,Al=new hh,gr=class extends si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(Eu.subVectors(s[0],s[1]).add(s[0]),l=Eu);let m=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(m),u),T=Math.pow(m.distanceToSquared(h),u),y=Math.pow(h.distanceToSquared(d),u);T<1e-4&&(T=1),_<1e-4&&(_=T),y<1e-4&&(y=T),bl.initNonuniformCatmullRom(l.x,m.x,h.x,d.x,_,T,y),Tl.initNonuniformCatmullRom(l.y,m.y,h.y,d.y,_,T,y),Al.initNonuniformCatmullRom(l.z,m.z,h.z,d.z,_,T,y)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(l.x,m.x,h.x,d.x,this.tension),Tl.initCatmullRom(l.y,m.y,h.y,d.y,this.tension),Al.initCatmullRom(l.z,m.z,h.z,d.z,this.tension));return n.set(bl.calc(c),Tl.calc(c),Al.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Su(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function e0(i,e){let t=1-i;return t*t*e}function t0(i,e){return 2*(1-i)*i*e}function n0(i,e){return i*i*e}function Wr(i,e,t,n){return e0(i,e)+t0(i,t)+n0(i,n)}function i0(i,e){let t=1-i;return t*t*t*e}function s0(i,e){let t=1-i;return 3*t*t*i*e}function r0(i,e){return 3*(1-i)*i*i*e}function o0(i,e){return i*i*i*e}function Xr(i,e,t,n,s){return i0(i,e)+s0(i,t)+r0(i,n)+o0(i,s)}var La=class extends si{constructor(e=new ht,t=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ht){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,s.x,r.x,o.x,a.x),Xr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xr=class extends si{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,s.x,r.x,o.x,a.x),Xr(e,s.y,r.y,o.y,a.y),Xr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends si{constructor(e=new ht,t=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ht){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ht){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends si{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends si{constructor(e=new ht,t=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ht){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ds=class extends si{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Wr(e,s.x,r.x,o.x),Wr(e,s.y,r.y,o.y),Wr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ht){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Su(a,c.x,l.x,d.x,m.x),Su(a,c.y,l.y,d.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ht().fromArray(s))}return this}},a0=Object.freeze({__proto__:null,ArcCurve:Ia,CatmullRomCurve3:gr,CubicBezierCurve:La,CubicBezierCurve3:xr,EllipseCurve:so,LineCurve:Da,LineCurve3:Na,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Ds,SplineCurve:Fa});var ro=class i extends Pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},oo=class i extends qt{constructor(e=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Gt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],d=1/t,m=new N,h=new ht,u=new N,_=new N,T=new N,y=0,g=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:y=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-y,u.z=g*0,T.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(T.x,T.y,T.z);break;default:y=e[M+1].x-e[M].x,g=e[M+1].y-e[M].y,u.x=g*1,u.y=-y,u.z=g*0,_.copy(u),u.x+=T.x,u.y+=T.y,u.z+=T.z,u.normalize(),c.push(u.x,u.y,u.z),T.copy(_)}for(let M=0;M<=t;M++){let I=n+M*d*s,w=Math.sin(I),b=Math.cos(I);for(let R=0;R<=e.length-1;R++){m.x=e[R].x*w,m.y=e[R].y,m.z=e[R].x*b,o.push(m.x,m.y,m.z),h.x=M/t,h.y=R/(e.length-1),a.push(h.x,h.y);let F=c[3*R+0]*w,E=c[3*R+1],O=c[3*R+0]*b;l.push(F,E,O)}}for(let M=0;M<t;M++)for(let I=0;I<e.length-1;I++){let w=I+M*e.length,b=w,R=w+e.length,F=w+e.length+1,E=w+1;r.push(b,R,E),r.push(F,E,R)}this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("uv",new Ct(a,2)),this.setAttribute("normal",new Ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var jt=class i extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,m=e/a,h=t/c,u=[],_=[],T=[],y=[];for(let g=0;g<d;g++){let M=g*h-o;for(let I=0;I<l;I++){let w=I*m-r;_.push(w,-M,0),T.push(0,0,1),y.push(I/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){let I=M+l*g,w=M+l*(g+1),b=M+1+l*(g+1),R=M+1+l*g;u.push(I,w,R),u.push(w,b,R)}this.setIndex(u),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(T,3)),this.setAttribute("uv",new Ct(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ao=class i extends qt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],d=[],m=e,h=(t-e)/s,u=new N,_=new ht;for(let T=0;T<=s;T++){for(let y=0;y<=n;y++){let g=r+y/n*o;u.x=m*Math.cos(g),u.y=m*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),_.x=(u.x/t+1)/2,_.y=(u.y/t+1)/2,d.push(_.x,_.y)}m+=h}for(let T=0;T<s;T++){let y=T*(n+1);for(let g=0;g<n;g++){let M=g+y,I=M,w=M+n+1,b=M+n+2,R=M+1;a.push(I,w,R),a.push(w,b,R)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Jt=class i extends qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],m=new N,h=new N,u=[],_=[],T=[],y=[];for(let g=0;g<=n;g++){let M=[],I=g/n,w=o+I*a,b=e*Math.cos(w),R=Math.sqrt(e*e-b*b),F=0;g===0&&o===0?F=.5/t:g===n&&c===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){let O=E/t,W=s+O*r;m.x=-R*Math.cos(W),m.y=b,m.z=R*Math.sin(W),_.push(m.x,m.y,m.z),h.copy(m).normalize(),T.push(h.x,h.y,h.z),y.push(O+F,1-I),M.push(l++)}d.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let I=d[g][M+1],w=d[g][M],b=d[g+1][M],R=d[g+1][M+1];(g!==0||o>0)&&u.push(I,w,R),(g!==n-1||c<Math.PI)&&u.push(w,b,R)}this.setIndex(u),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(T,3)),this.setAttribute("uv",new Ct(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gn=class i extends qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],d=[],m=[],h=new N,u=new N,_=new N;for(let T=0;T<=n;T++){let y=o+T/n*a;for(let g=0;g<=s;g++){let M=g/s*r;u.x=(e+t*Math.cos(y))*Math.cos(M),u.y=(e+t*Math.cos(y))*Math.sin(M),u.z=t*Math.sin(y),l.push(u.x,u.y,u.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),_.subVectors(u,h).normalize(),d.push(_.x,_.y,_.z),m.push(g/s),m.push(T/n)}}for(let T=1;T<=n;T++)for(let y=1;y<=s;y++){let g=(s+1)*T+y-1,M=(s+1)*(T-1)+y-1,I=(s+1)*(T-1)+y,w=(s+1)*T+y;c.push(g,M,w),c.push(M,I,w)}this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Gi=class i extends qt{constructor(e=new Ds(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new ht,d=new N,m=[],h=[],u=[],_=[];T(),this.setIndex(_),this.setAttribute("position",new Ct(m,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function T(){for(let I=0;I<t;I++)y(I);y(r===!1?t:0),M(),g()}function y(I){d=e.getPointAt(I/t,d);let w=o.normals[I],b=o.binormals[I];for(let R=0;R<=s;R++){let F=R/s*Math.PI*2,E=Math.sin(F),O=-Math.cos(F);c.x=O*w.x+E*b.x,c.y=O*w.y+E*b.y,c.z=O*w.z+E*b.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,m.push(a.x,a.y,a.z)}}function g(){for(let I=1;I<=t;I++)for(let w=1;w<=s;w++){let b=(s+1)*(I-1)+(w-1),R=(s+1)*I+(w-1),F=(s+1)*I+w,E=(s+1)*(I-1)+w;_.push(b,R,E),_.push(R,F,E)}}function M(){for(let I=0;I<=t;I++)for(let w=0;w<=s;w++)l.x=I/t,l.y=w/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new a0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wu(s))s.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function jn(i){let e={};for(let t=0;t<i.length;t++){let n=Os(i[t]);for(let s in n)e[s]=n[s]}return e}function wu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function c0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}var Co={clone:Os,merge:jn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new cn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new vt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oa=class extends tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},co=class extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ln=class extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ro,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ba=class extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},za=class extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function er(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ha=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=e,a=2*t-n;break;case Dl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:o=e,c=2*n-t;break;case Dl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,u=this._weightNext,_=(n-t)/(s-t),T=_*_,y=T*_,g=-h*y+2*h*T-h*_,M=(1+h)*y+(-1.5-2*h)*T+(-.5+h)*_+1,I=(-1-u)*y+(1.5+u)*T+.5*_,w=u*y-u*T;for(let b=0;b!==a;++b)r[b]=g*o[d+b]+M*o[l+b]+I*o[c+b]+w*o[m+b];return r}},ka=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(s-t),m=1-d;for(let h=0;h!==a;++h)r[h]=o[l+h]*m+o[c+h]*d;return r}},Ga=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Va=class extends gs{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,m=this.outTangents;if(!d||!m){let _=(n-t)/(s-t),T=1-_;for(let y=0;y!==a;++y)r[y]=o[l+y]*T+o[c+y]*_;return r}let h=a*2,u=e-1;for(let _=0;_!==a;++_){let T=o[l+_],y=o[c+_],g=u*h+_*2,M=m[g],I=m[g+1],w=e*h+_*2,b=d[w],R=d[w+1],F=d0(n,t,M,b,s);r[_]=gd(F,T,I,R,y)}return r}};function gd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function u0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function d0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=gd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=u0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var di=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Rl(e.settings)&&(n.settings={inTangents:er(e.settings.inTangents,Array),outTangents:er(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Va(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Ea:t=this.InterpolantFactoryMethodLinear;break;case da:t=this.InterpolantFactoryMethodSmooth;break;case Pl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return da;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Rl(this.settings)&&(bu(this.settings.inTangents,e),bu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(It("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){It("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){It("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&yf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){It("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(s)c=!0;else{let m=a*n,h=m-n,u=m+n;for(let _=0;_!==n;++_){let T=t[m+_];if(T!==t[h+_]||T!==t[u+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let m=a*n,h=o*n;for(let u=0;u!==n;++u)t[h+u]=t[m+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Ea;var xs=class extends di{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=qr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends di{constructor(e,t,n,s){super(e,t,n,s)}};Wa.prototype.ValueTypeName="color";var Xa=class extends di{constructor(e,t,n,s){super(e,t,n,s)}};Xa.prototype.ValueTypeName="number";var qa=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let d=l+a;l!==d;l+=4)Ut.slerpFlat(r,0,o,l-a,o,l,c);return r}},lo=class extends di{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qa(this.times,this.values,this.getValueSize(),e)}};lo.prototype.ValueTypeName="quaternion";lo.prototype.InterpolantFactoryMethodSmooth=void 0;var ys=class extends di{constructor(e,t,n){super(e,t,n)}};ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=qr;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends di{constructor(e,t,n,s){super(e,t,n,s)}};Ya.prototype.ValueTypeName="vector";var Za=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){let m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,h=l.length;m<h;m+=2){let u=l[m],_=l[m+1];if(u.global&&(u.lastIndex=0),u.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xd=new Za,Ja=class{constructor(e){this.manager=e!==void 0?e:xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cl=new vt,Tu=new N,Au=new N,yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ar||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ha=new N,ua=new Ut,Ni=new N,uo=class extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ua,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ha,ua,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ua,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ps=new N,Ru=new ht,Cu=new ht,Hn=class extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Cu),t.subVectors(Cu,Ru)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ul=class extends yr{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fo=class extends Ns{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ul}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fl=class extends yr{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0}},Vi=class extends Ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_s=class extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ol=class extends yr{constructor(){super(new _s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},po=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new Ol}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var mo=class extends qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var tr=-90,nr=1,$a=class extends In{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(tr,nr,e,t);s.layers=this.layers,this.add(s);let r=new Hn(tr,nr,e,t);r.layers=this.layers,this.add(r);let o=new Hn(tr,nr,e,t);o.layers=this.layers,this.add(o);let a=new Hn(tr,nr,e,t);a.layers=this.layers,this.add(a);let c=new Hn(tr,nr,e,t);c.layers=this.layers,this.add(c);let l=new Hn(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,h,u),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ka=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dh="\\[\\]\\.:\\/",f0=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",p0="[^"+dh.replace("\\.","")+"]",m0=/((?:WC+[\/:])*)/.source.replace("WC",fh),g0=/(WCOD+)?/.source.replace("WCOD",p0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),_0=new RegExp("^"+m0+g0+x0+y0+"$"),v0=["material","materials","bones","map"],Bl=class{constructor(e,t,n){let s=n||gn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f0,"")}static parseTrackName(e){let t=_0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;It("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Bl;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var Pu=new vt,go=class{constructor(e,t,n=0,s=1/0){this.ray=new Is(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):It("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(Iu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)zl(e[s],this,n,t);return n.sort(Iu),n}};function Iu(i,e){return i.distance-e.distance}function zl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],e,t,!0)}}var xo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var _h=class _h{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_h.prototype.isMatrix2=!0;var Hl=_h;function ph(i,e,t,n){let s=M0(n);switch(t){case ih:return i*e;case cc:return i*e/s.components*s.byteLength;case lc:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case sh:return i*e*3/s.components*s.byteLength;case Mi:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case Eo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case xc:case _c:case vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:case To:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ao:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M0(i){switch(i){case ri:case Ql:return{byteLength:1,components:1};case Mr:case eh:case pi:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Li:case rc:case vi:return{byteLength:4,components:1};case th:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window!="undefined"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function zd(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function E0(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,l){let d=c.array,m=c.updateRanges;if(i.bindBuffer(l,a),m.length===0)i.bufferSubData(l,0,d);else{m.sort((u,_)=>u.start-_.start);let h=0;for(let u=1;u<m.length;u++){let _=m[h],T=m[u];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++h,m[h]=T)}m.length=h+1;for(let u=0,_=m.length;u<_;u++){let T=m[u];i.bufferSubData(l,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,mp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Mp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wm=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,km=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Jm=`#define TOON
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
}`,$m=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Km=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,eg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,tg=`uniform float rotation;
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
}`,ng=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:S0,alphahash_pars_fragment:w0,alphamap_fragment:b0,alphamap_pars_fragment:T0,alphatest_fragment:A0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:I0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:N0,bsdfs:U0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:k0,color_fragment:G0,color_pars_fragment:V0,color_pars_vertex:W0,color_vertex:X0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:$0,emissivemap_fragment:K0,emissivemap_pars_fragment:j0,colorspace_fragment:Q0,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:mp,envmap_vertex:rp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:cp,fog_pars_fragment:lp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:up,lights_lambert_fragment:dp,lights_lambert_pars_fragment:fp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:xp,lights_phong_fragment:yp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:Mp,lights_fragment_begin:Ep,lights_fragment_maps:Sp,lights_fragment_end:wp,lightprobes_pars_fragment:bp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Up,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:zp,morphtarget_vertex:Hp,normal_fragment_begin:kp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:$p,opaque_fragment:Kp,packing:jp,premultiplied_alpha_fragment:Qp,project_vertex:em,dithering_fragment:tm,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:om,shadowmap_vertex:am,shadowmask_pars_fragment:cm,skinbase_vertex:lm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:xm,transmission_pars_fragment:ym,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:Mm,worldpos_vertex:Em,background_vert:Sm,background_frag:wm,backgroundCube_vert:bm,backgroundCube_frag:Tm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distance_vert:Im,distance_frag:Lm,equirect_vert:Dm,equirect_frag:Nm,linedashed_vert:Um,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:zm,meshlambert_frag:Hm,meshmatcap_vert:km,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:Zm,meshtoon_vert:Jm,meshtoon_frag:$m,points_vert:Km,points_frag:jm,shadow_vert:Qm,shadow_frag:eg,sprite_vert:tg,sprite_frag:ng},tt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Yi={basic:{uniforms:jn([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:jn([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:jn([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:jn([tt.common,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.roughnessmap,tt.metalnessmap,tt.fog,tt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:jn([tt.common,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.gradientmap,tt.fog,tt.lights,{emissive:{value:new ct(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:jn([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:jn([tt.points,tt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:jn([tt.common,tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:jn([tt.common,tt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:jn([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:jn([tt.sprite,tt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:jn([tt.common,tt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:jn([tt.lights,tt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Yi.physical={uniforms:jn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Wc={r:0,b:0,g:0},ig=new vt,Hd=new Lt;Hd.set(-1,0,0,0,1,0,0,0,1);function sg(i,e,t,n,s,r){let o=new ct(0),a=s===!0?0:1,c,l,d=null,m=0,h=null;function u(M){let I=M.isScene===!0?M.background:null;if(I&&I.isTexture){let w=M.backgroundBlurriness>0;I=e.get(I,w)}return I}function _(M){let I=!1,w=u(M);w===null?y(o,a):w&&w.isColor&&(y(w,1),I=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,I){let w=u(I);w&&(w.isCubeTexture||w.mapping===vo)?(l===void 0&&(l=new gt(new De(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Os(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Hd),l.material.toneMapped=Yt.getTransfer(w.colorSpace)!==sn,(d!==w||m!==w.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,m=w.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new gt(new jt(2,2),new tn({name:"BackgroundMaterial",uniforms:Os(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(w.colorSpace)!==sn,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||m!==w.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,m=w.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function y(M,I){M.getRGB(Wc,uh(i)),t.buffers.color.setClear(Wc.r,Wc.g,Wc.b,I,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,I=1){o.set(M),a=I,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,y(o,a)},render:_,addToRenderList:T,dispose:g}}function rg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(J,$,ee,z,Q){let re=!1,ie=m(J,z,ee,$);r!==ie&&(r=ie,l(r.object)),re=u(J,z,ee,Q),re&&_(J,z,ee,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,w(J,$,ee,z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(J){return i.bindVertexArray(J)}function d(J){return i.deleteVertexArray(J)}function m(J,$,ee,z){let Q=z.wireframe===!0,re=n[$.id];re===void 0&&(re={},n[$.id]=re);let ie=J.isInstancedMesh===!0?J.id:0,me=re[ie];me===void 0&&(me={},re[ie]=me);let he=me[ee.id];he===void 0&&(he={},me[ee.id]=he);let de=he[Q];return de===void 0&&(de=h(c()),he[Q]=de),de}function h(J){let $=[],ee=[],z=[];for(let Q=0;Q<t;Q++)$[Q]=0,ee[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:z,object:J,attributes:{},index:null}}function u(J,$,ee,z){let Q=r.attributes,re=$.attributes,ie=0,me=ee.getAttributes();for(let he in me)if(me[he].location>=0){let _e=Q[he],nt=re[he];if(nt===void 0&&(he==="instanceMatrix"&&J.instanceMatrix&&(nt=J.instanceMatrix),he==="instanceColor"&&J.instanceColor&&(nt=J.instanceColor)),_e===void 0||_e.attribute!==nt||nt&&_e.data!==nt.data)return!0;ie++}return r.attributesNum!==ie||r.index!==z}function _(J,$,ee,z){let Q={},re=$.attributes,ie=0,me=ee.getAttributes();for(let he in me)if(me[he].location>=0){let _e=re[he];_e===void 0&&(he==="instanceMatrix"&&J.instanceMatrix&&(_e=J.instanceMatrix),he==="instanceColor"&&J.instanceColor&&(_e=J.instanceColor));let nt={};nt.attribute=_e,_e&&_e.data&&(nt.data=_e.data),Q[he]=nt,ie++}r.attributes=Q,r.attributesNum=ie,r.index=z}function T(){let J=r.newAttributes;for(let $=0,ee=J.length;$<ee;$++)J[$]=0}function y(J){g(J,0)}function g(J,$){let ee=r.newAttributes,z=r.enabledAttributes,Q=r.attributeDivisors;ee[J]=1,z[J]===0&&(i.enableVertexAttribArray(J),z[J]=1),Q[J]!==$&&(i.vertexAttribDivisor(J,$),Q[J]=$)}function M(){let J=r.newAttributes,$=r.enabledAttributes;for(let ee=0,z=$.length;ee<z;ee++)$[ee]!==J[ee]&&(i.disableVertexAttribArray(ee),$[ee]=0)}function I(J,$,ee,z,Q,re,ie){ie===!0?i.vertexAttribIPointer(J,$,ee,Q,re):i.vertexAttribPointer(J,$,ee,z,Q,re)}function w(J,$,ee,z){T();let Q=z.attributes,re=ee.getAttributes(),ie=$.defaultAttributeValues;for(let me in re){let he=re[me];if(he.location>=0){let de=Q[me];if(de===void 0&&(me==="instanceMatrix"&&J.instanceMatrix&&(de=J.instanceMatrix),me==="instanceColor"&&J.instanceColor&&(de=J.instanceColor)),de!==void 0){let _e=de.normalized,nt=de.itemSize,Je=e.get(de);if(Je===void 0)continue;let Ht=Je.buffer,Ze=Je.type,xt=Je.bytesPerElement,ge=Ze===i.INT||Ze===i.UNSIGNED_INT||de.gpuType===rc;if(de.isInterleavedBufferAttribute){let xe=de.data,Ce=xe.stride,je=de.offset;if(xe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<he.locationSize;Ke++)g(he.location+Ke,xe.meshPerAttribute);J.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ke=0;Ke<he.locationSize;Ke++)y(he.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Ke=0;Ke<he.locationSize;Ke++)I(he.location+Ke,nt/he.locationSize,Ze,_e,Ce*xt,(je+nt/he.locationSize*Ke)*xt,ge)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<he.locationSize;xe++)g(he.location+xe,de.meshPerAttribute);J.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<he.locationSize;xe++)y(he.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let xe=0;xe<he.locationSize;xe++)I(he.location+xe,nt/he.locationSize,Ze,_e,nt*xt,nt/he.locationSize*xe*xt,ge)}}else if(ie!==void 0){let _e=ie[me];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(he.location,_e);break;case 3:i.vertexAttrib3fv(he.location,_e);break;case 4:i.vertexAttrib4fv(he.location,_e);break;default:i.vertexAttrib1fv(he.location,_e)}}}}M()}function b(){O();for(let J in n){let $=n[J];for(let ee in $){let z=$[ee];for(let Q in z){let re=z[Q];for(let ie in re)d(re[ie].object),delete re[ie];delete z[Q]}}delete n[J]}}function R(J){if(n[J.id]===void 0)return;let $=n[J.id];for(let ee in $){let z=$[ee];for(let Q in z){let re=z[Q];for(let ie in re)d(re[ie].object),delete re[ie];delete z[Q]}}delete n[J.id]}function F(J){for(let $ in n){let ee=n[$];for(let z in ee){let Q=ee[z];if(Q[J.id]===void 0)continue;let re=Q[J.id];for(let ie in re)d(re[ie].object),delete re[ie];delete Q[J.id]}}}function E(J){for(let $ in n){let ee=n[$],z=J.isInstancedMesh===!0?J.id:0,Q=ee[z];if(Q!==void 0){for(let re in Q){let ie=Q[re];for(let me in ie)d(ie[me].object),delete ie[me];delete Q[re]}delete ee[z],Object.keys(ee).length===0&&delete n[$]}}}function O(){W(),o=!0,r!==s&&(r=s,l(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:M}}function og(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let u=0;u<d;u++)h+=l[u];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ag(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==Mi&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let E=F===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ri&&F!==vi&&!E&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Tt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let m=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:M,maxVaryings:I,maxFragmentUniforms:w,maxSamples:b,samples:R}}function cg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ui,a=new Lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let u=m.length!==0||h||n!==0||s;return s=h,n=m.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){t=d(m,h,0)},this.setState=function(m,h,u){let _=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,g=i.get(m);if(!s||_===null||_.length===0||r&&!y)r?d(null):l();else{let M=r?0:n,I=M*4,w=g.clippingState||null;c.value=w,w=d(_,h,I,u);for(let b=0;b!==I;++b)w[b]=t[b];g.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,h,u,_){let T=m!==null?m.length:0,y=null;if(T!==0){if(y=c.value,_!==!0||y===null){let g=u+T*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(y===null||y.length<g)&&(y=new Float32Array(g));for(let I=0,w=u;I!==T;++I,w+=4)o.copy(m[I]).applyMatrix4(M,a),o.normal.toArray(y,w),y[w+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}var br=4,lg=6,hg=20,ug=256,Po=new _s,yd=new ct,vh=null,Mh=0,Eh=0,Sh=!1,dg=new N,Bs=new N,qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=dg}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,Mh,Eh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:pi,format:Mi,colorSpace:Yr,depthBuffer:!1},s=_d(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fg(r)),this._blurMaterial=mg(r,e,t),this._ggxMaterial=pg(r,e,t)}return s}_compileMaterial(e){let t=new gt(new qt,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,s,r){let c=new Hn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,u=m.toneMapping;m.getClearColor(yd),m.toneMapping=Ii,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new De,new Nn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,y=T.material,g=!1,M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,g=!0):(y.color.copy(yd),g=!0);for(let I=0;I<6;I++){let w=I%3;w===0?(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[I],r.y,r.z)):w===1?(c.up.set(0,0,l[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[I],r.z)):(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[I]));let b=this._cubeSize;wr(s,w*b,I>2?b:0,b,b),m.setRenderTarget(s),g&&m.render(T,c),m.render(e,c)}m.toneMapping=u,m.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vs||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Po)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-d*d),h=l*1.25,u=m*h,{_lodMax:_}=this,T=this._sizeLods[n],y=3*T*(n>_-br?n-_+br:0),g=4*(this._cubeSize-T);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=_-t,wr(r,y,g,3*T,2*T),s.setRenderTarget(r),s.render(a,Po),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,wr(e,y,g,3*T,2*T),s.setRenderTarget(e),s.render(a,Po)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-br?s-this._lodMax+br:0),h=4*(this._cubeSize-d);wr(t,m,h,3*d,2*d),o.setRenderTarget(t),o.render(c,Po)}};function fg(i){let e=[],t=[],n=i,s=i-br+1+lg;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,d=[c,c,l,c,l,l,c,c,l,l,c,l],m=6,h=6,u=3,_=new Float32Array(u*h*m),T=new Float32Array(u*h*m);for(let g=0;g<m;g++){let M=g%3*2/3-1,I=g>2?0:-1,w=[M,I,0,M+2/3,I,0,M+2/3,I+1,0,M,I,0,M+2/3,I+1,0,M,I+1,0];_.set(w,u*h*g);for(let b=0;b<h;b++){let R=d[b*2]*2-1,F=d[b*2+1]*2-1;g===0?Bs.set(1,F,R):g===1?Bs.set(-R,1,-F):g===2?Bs.set(-R,F,1):g===3?Bs.set(-1,F,-R):g===4?Bs.set(-R,-1,F):Bs.set(R,F,-1),Bs.toArray(T,(g*h+b)*u)}}let y=new qt;y.setAttribute("position",new en(_,u)),y.setAttribute("outputDirection",new en(T,u)),t.push(new gt(y,null)),n>br&&n--}return{lodMeshes:t,sizeLods:e}}function _d(i,e,t){let n=new Kn(i,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pg(i,e,t){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ug,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mg(i,e,t){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function vd(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Md(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yc=class extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Xi});r.uniforms.tEquirect.value=t;let o=new gt(s,r),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Xn),new $a(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function gg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===nc||u===ic)if(e.has(h)){let _=e.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let T=new Yc(_.height);return T.fromEquirectangularTexture(i,h),e.set(h,T),h.addEventListener("dispose",l),a(T.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let u=h.mapping,_=u===nc||u===ic,T=u===vs||u===Fs;if(_||T){let y=t.get(h),g=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new qc(i)),y=_?n.fromEquirectangular(h,y):n.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),y.texture;if(y!==void 0)return y.texture;{let M=h.image;return _&&M&&M.height>0||T&&M&&c(M)?(n===null&&(n=new qc(i)),y=_?n.fromEquirectangular(h):n.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),h.addEventListener("dispose",d),y.texture):null}}}return h}function a(h,u){return u===nc?h.mapping=vs:u===ic&&(h.mapping=Fs),h}function c(h){let u=0,_=6;for(let T=0;T<_;T++)h[T]!==void 0&&u++;return u===_}function l(h){let u=h.target;u.removeEventListener("dispose",l);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function xg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,e,t,n){let s={},r=new WeakMap;function o(m){let h=m.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let u=r.get(h);u&&(e.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(m,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(m){let h=m.attributes;for(let u in h)e.update(h[u],i.ARRAY_BUFFER)}function l(m){let h=[],u=m.index,_=m.attributes.position,T=0;if(_===void 0)return;if(u!==null){let M=u.array;T=u.version;for(let I=0,w=M.length;I<w;I+=3){let b=M[I+0],R=M[I+1],F=M[I+2];h.push(b,R,R,F,F,b)}}else{let M=_.array;T=_.version;for(let I=0,w=M.length/3-1;I<w;I+=3){let b=I+0,R=I+1,F=I+2;h.push(b,R,R,F,F,b)}}let y=new(_.count>=65535?Qr:jr)(h,1);y.version=T;let g=r.get(m);g&&e.remove(g),r.set(m,y)}function d(m){let h=r.get(m);if(h){let u=m.index;u!==null&&h.version<u.version&&l(m)}else l(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:d}}function _g(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,h){i.drawElements(n,h,r,m*o),t.update(h,n,1)}function l(m,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,m*o,u),t.update(h,n,u))}function d(m,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,u);let T=0;for(let y=0;y<u;y++)T+=h[y];t.update(T,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function vg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:It("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,e,t){let n=new WeakMap,s=new cn;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==m){let O=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],I=0;u===!0&&(I=1),_===!0&&(I=2),T===!0&&(I=3);let w=a.attributes.position.count*I,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let R=new Float32Array(w*b*4*m),F=new $r(R,w,b,m);F.type=vi,F.needsUpdate=!0;let E=I*4;for(let W=0;W<m;W++){let J=y[W],$=g[W],ee=M[W],z=w*b*4*W;for(let Q=0;Q<J.count;Q++){let re=Q*E;u===!0&&(s.fromBufferAttribute(J,Q),R[z+re+0]=s.x,R[z+re+1]=s.y,R[z+re+2]=s.z,R[z+re+3]=0),_===!0&&(s.fromBufferAttribute($,Q),R[z+re+4]=s.x,R[z+re+5]=s.y,R[z+re+6]=s.z,R[z+re+7]=0),T===!0&&(s.fromBufferAttribute(ee,Q),R[z+re+8]=s.x,R[z+re+9]=s.y,R[z+re+10]=s.z,R[z+re+11]=ee.itemSize===4?s.w:1)}}h={count:m,texture:F,size:new ht(w,b)},n.set(a,h),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let T=0;T<l.length;T++)u+=l[T];let _=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Eg(i,e,t,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,m=l.geometry,h=e.get(l,m);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Sg={[ql]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[_o]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function wg(i,e,t,n,s,r){let o=new Kn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new qt;l.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ct([0,2,0,0,2,0],2));let d=new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new gt(l,d),h=new _s(-1,1,1,-1,0,1),u=null,_=null,T=!1,y,g=null,M=[],I=!1;this.setSize=function(w,b){o.setSize(w,b),a!==null&&a.setSize(w,b),c!==null&&c.setSize(w,b);for(let R=0;R<M.length;R++){let F=M[R];F.setSize&&F.setSize(w,b)}},this.setEffects=function(w){M=w,I=M.length>0&&M[0].isRenderPass===!0;let b=o.width,R=o.height;M.length>0&&a===null&&(a=new Kn(b,R,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Kn(b,R,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<M.length;F++){let E=M[F];E.setSize&&E.setSize(b,R)}},this.begin=function(w,b){if(T||w.toneMapping===Ii&&M.length===0)return!1;if(g=b,b!==null){let R=b.width,F=b.height;(o.width!==R||o.height!==F)&&this.setSize(R,F)}return I===!1&&w.setRenderTarget(o),y=w.toneMapping,w.toneMapping=Ii,!0},this.hasRenderPass=function(){return I},this.end=function(w,b){w.toneMapping=y,T=!0;let R=o,F=a;for(let E=0;E<M.length;E++){let O=M[E];O.enabled!==!1&&(O.render(w,F,R,b),O.needsSwap!==!1&&(R=F,F=F===a?c:a))}if(u!==w.outputColorSpace||_!==w.toneMapping){u=w.outputColorSpace,_=w.toneMapping,d.defines={},Yt.getTransfer(u)===sn&&(d.defines.SRGB_TRANSFER="");let E=Sg[_];E&&(d.defines[E]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(g),w.render(m,h),g=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var kd=new ii,Th=new ki(1,1),Gd=new $r,Vd=new ba,Wd=new no,Ed=[],Sd=[],wd=new Float32Array(16),bd=new Float32Array(9),Td=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ed[s];if(r===void 0&&(r=new Float32Array(s),Ed[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Un(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $c(i,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;i.uniform2fv(this.addr,e),Fn(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;i.uniform3fv(this.addr,e),Fn(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;i.uniform4fv(this.addr,e),Fn(t,e)}}function Cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;Td.set(n),i.uniformMatrix2fv(this.addr,!1,Td),Fn(t,n)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),Fn(t,n)}}function Ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Un(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Fn(t,e)}else{if(Un(t,n))return;wd.set(n),i.uniformMatrix4fv(this.addr,!1,wd),Fn(t,n)}}function Lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;i.uniform2iv(this.addr,e),Fn(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;i.uniform3iv(this.addr,e),Fn(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;i.uniform4iv(this.addr,e),Fn(t,e)}}function Fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;i.uniform2uiv(this.addr,e),Fn(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;i.uniform3uiv(this.addr,e),Fn(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;i.uniform4uiv(this.addr,e),Fn(t,e)}}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=t.isReversedDepthBuffer()?Vc:Gc,r=Th):r=kd,t.setTexture2D(e||r,s)}function kg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vd,s)}function Gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wd,s)}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gd,s)}function Wg(i){switch(i){case 5126:return bg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Ig;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ug;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Xg(i,e){i.uniform1fv(this.addr,e)}function qg(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function Yg(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function Zg(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function Jg(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $g(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kg(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jg(i,e){i.uniform1iv(this.addr,e)}function Qg(i,e){i.uniform2iv(this.addr,e)}function ex(i,e){i.uniform3iv(this.addr,e)}function tx(i,e){i.uniform4iv(this.addr,e)}function nx(i,e){i.uniform1uiv(this.addr,e)}function ix(i,e){i.uniform2uiv(this.addr,e)}function sx(i,e){i.uniform3uiv(this.addr,e)}function rx(i,e){i.uniform4uiv(this.addr,e)}function ox(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);Un(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Th:o=kd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ax(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);Un(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vd,r[o])}function cx(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);Un(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wd,r[o])}function lx(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);Un(n,r)||(i.uniform1iv(this.addr,r),Fn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gd,r[o])}function hx(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return Jg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return lx}}var Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wg(t.type)}},Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}},Ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Ad(i,e){i.seq.push(e),i.map[e.id]=e}function ux(i,e,t){let n=i.name,s=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),o=wh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ad(t,l===void 0?new Ah(a,i,e):new Rh(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new Ch(a),Ad(t,m)),t=m}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);ux(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dx=37297,fx=0;function px(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Cd=new Lt;function mx(i){Yt._getMatrix(Cd,Yt.workingColorSpace,i);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case sn:return[e,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+px(i.getShaderSource(e),a)}else return r}function gx(i,e){let t=mx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var xx={[ql]:"Linear",[Yl]:"Reinhard",[Zl]:"Cineon",[_o]:"ACESFilmic",[$l]:"AgX",[Kl]:"Neutral",[Jl]:"Custom"};function yx(i,e){let t=xx[e];return t===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xc=new N;function _x(){Yt.getLuminanceCoefficients(Xc);let i=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ex(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lo(i){return i!==""}function Id(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ld(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace(Sx,bx)}var wx=new Map;function bx(i,e){let t=zt[e];if(t===void 0){let n=wx.get(e);if(n!==void 0)t=zt[n],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ph(t)}var Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(i){return i.replace(Tx,Ax)}function Ax(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Rx={[yo]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function Cx(i){return Rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Px={[vs]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function Ix(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Px[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lx={[Fs]:"ENVMAP_MODE_REFRACTION"};function Dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nx={[tc]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function Ux(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Nx[i.combine]||"ENVMAP_BLENDING_NONE"}function Fx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ox(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Cx(t),l=Ix(t),d=Dx(t),m=Ux(t),h=Fx(t),u=vx(t),_=Mx(r),T=s.createProgram(),y,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Lo).join(`
`),g.length>0&&(g+=`
`)):(y=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),g=[Nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?zt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,gx("linearToOutputTexel",t.outputColorSpace),_x(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Ph(o),o=Id(o,t),o=Ld(o,t),a=Ph(a),a=Id(a,t),a=Ld(a,t),o=Dd(o),a=Dd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let I=M+y+o,w=M+g+a,b=Rd(s,s.VERTEX_SHADER,I),R=Rd(s,s.FRAGMENT_SHADER,w);s.attachShader(T,b),s.attachShader(T,R),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function F(J){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(T)||"",ee=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(R)||"",Q=$.trim(),re=ee.trim(),ie=z.trim(),me=!0,he=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,b,R);else{let de=Pd(s,b,"vertex"),_e=Pd(s,R,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+Q+`
`+de+`
`+_e)}else Q!==""?Tt("WebGLProgram: Program Info Log:",Q):(re===""||ie==="")&&(he=!1);he&&(J.diagnostics={runnable:me,programLog:Q,vertexShader:{log:re,prefix:y},fragmentShader:{log:ie,prefix:g}})}s.deleteShader(b),s.deleteShader(R),E=new Tr(s,T),O=Ex(s,T)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(T,dx)),W},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=R,this}var Bx=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lh(e),t.set(e,n)),n}},Lh=class{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}};function zx(i){return i===Ss||i===To||i===Ao}function Hx(i,e,t,n,s,r){let o=new hr,a=new Ih,c=new Set,l=[],d=new Map,m=n.logarithmicDepthBuffer,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function T(E,O,W,J,$,ee){let z=J.fog,Q=$.geometry,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?J.environment:null,ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,me=e.get(E.envMap||re,ie),he=me&&me.mapping===vo?me.image.height:null,de=u[E.type];E.precision!==null&&(h=n.getMaxPrecision(E.precision),h!==E.precision&&Tt("WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));let _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,nt=_e!==void 0?_e.length:0,Je=0;Q.morphAttributes.position!==void 0&&(Je=1),Q.morphAttributes.normal!==void 0&&(Je=2),Q.morphAttributes.color!==void 0&&(Je=3);let Ht,Ze,xt,ge;if(de){let ut=Yi[de];Ht=ut.vertexShader,Ze=ut.fragmentShader}else{Ht=E.vertexShader,Ze=E.fragmentShader;let ut=a.getVertexShaderStage(E),Nt=a.getFragmentShaderStage(E);a.update(E,ut,Nt),xt=ut.id,ge=Nt.id}let xe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),je=$.isInstancedMesh===!0,Ke=$.isBatchedMesh===!0,Mt=!!E.map,Dt=!!E.matcap,_t=!!me,ze=!!E.aoMap,ce=!!E.lightMap,le=!!E.bumpMap&&E.wireframe===!1,Me=!!E.normalMap,Te=!!E.displacementMap,pe=!!E.emissiveMap,ve=!!E.metalnessMap,Pe=!!E.roughnessMap,V=E.anisotropy>0,it=E.clearcoat>0,Ee=E.dispersion>0,U=E.retroreflectivity>0,p=E.iridescence>0,X=E.sheen>0,K=E.transmission>0,j=V&&!!E.anisotropyMap,ae=it&&!!E.clearcoatMap,ue=it&&!!E.clearcoatNormalMap,te=it&&!!E.clearcoatRoughnessMap,q=p&&!!E.iridescenceMap,we=p&&!!E.iridescenceThicknessMap,Oe=X&&!!E.sheenColorMap,Ne=X&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Ge=!!E.specularColorMap,st=!!E.specularIntensityMap,be=K&&!!E.transmissionMap,Y=K&&!!E.thicknessMap,Ae=!!E.gradientMap,ye=!!E.alphaMap,Ve=E.alphaTest>0,Ye=!!E.alphaHash,Re=!!E.extensions,Xe=Ii;E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let lt={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:Ht,fragmentShader:Ze,defines:E.defines,customVertexShaderID:xt,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Ke,batchingColor:Ke&&$._colorsTexture!==null,instancing:je,instancingColor:je&&$.instanceColor!==null,instancingMorph:je&&$.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:Dt,envMap:_t,envMapMode:_t&&me.mapping,envMapCubeUVHeight:he,aoMap:ze,lightMap:ce,bumpMap:le,normalMap:Me,displacementMap:Te,emissiveMap:pe,normalMapObjectSpace:Me&&E.normalMapType===nd,normalMapTangentSpace:Me&&E.normalMapType===Ro,packedNormalMap:Me&&E.normalMapType===Ro&&zx(E.normalMap.format),metalnessMap:ve,roughnessMap:Pe,anisotropy:V,anisotropyMap:j,clearcoat:it,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:te,dispersion:Ee,retroreflection:U,iridescence:p,iridescenceMap:q,iridescenceThicknessMap:we,sheen:X,sheenColorMap:Oe,sheenRoughnessMap:Ne,specularMap:ke,specularColorMap:Ge,specularIntensityMap:st,transmission:K,transmissionMap:be,thicknessMap:Y,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===vr&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ve,alphaHash:Ye,combine:E.combine,mapUv:Mt&&_(E.map.channel),aoMapUv:ze&&_(E.aoMap.channel),lightMapUv:ce&&_(E.lightMap.channel),bumpMapUv:le&&_(E.bumpMap.channel),normalMapUv:Me&&_(E.normalMap.channel),displacementMapUv:Te&&_(E.displacementMap.channel),emissiveMapUv:pe&&_(E.emissiveMap.channel),metalnessMapUv:ve&&_(E.metalnessMap.channel),roughnessMapUv:Pe&&_(E.roughnessMap.channel),anisotropyMapUv:j&&_(E.anisotropyMap.channel),clearcoatMapUv:ae&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(E.sheenRoughnessMap.channel),specularMapUv:ke&&_(E.specularMap.channel),specularColorMapUv:Ge&&_(E.specularColorMap.channel),specularIntensityMapUv:st&&_(E.specularIntensityMap.channel),transmissionMapUv:be&&_(E.transmissionMap.channel),thicknessMapUv:Y&&_(E.thicknessMap.channel),alphaMapUv:ye&&_(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Me||V),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(Mt||ye),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&Me===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ce,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Je,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&Yt.getTransfer(E.map.colorSpace)===sn,decodeVideoTextureEmissive:pe&&E.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(E.emissiveMap.colorSpace)===sn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===Vn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||Ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function y(E){let O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(let W in E.defines)O.push(W),O.push(E.defines[W]);return E.isRawShaderMaterial===!1&&(g(O,E),M(O,E),O.push(i.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function g(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numSunLights),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numSunLightShadows),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function M(E,O){o.disableAll(),O.instancing&&o.enable(0),O.instancingColor&&o.enable(1),O.instancingMorph&&o.enable(2),O.matcap&&o.enable(3),O.envMap&&o.enable(4),O.normalMapObjectSpace&&o.enable(5),O.normalMapTangentSpace&&o.enable(6),O.clearcoat&&o.enable(7),O.iridescence&&o.enable(8),O.alphaTest&&o.enable(9),O.vertexColors&&o.enable(10),O.vertexAlphas&&o.enable(11),O.vertexUv1s&&o.enable(12),O.vertexUv2s&&o.enable(13),O.vertexUv3s&&o.enable(14),O.vertexTangents&&o.enable(15),O.anisotropy&&o.enable(16),O.alphaHash&&o.enable(17),O.batching&&o.enable(18),O.dispersion&&o.enable(19),O.retroreflection&&o.enable(24),O.batchingColor&&o.enable(20),O.gradientMap&&o.enable(21),O.packedNormalMap&&o.enable(22),O.vertexNormals&&o.enable(23),E.push(o.mask),o.disableAll(),O.fog&&o.enable(0),O.useFog&&o.enable(1),O.flatShading&&o.enable(2),O.logarithmicDepthBuffer&&o.enable(3),O.reversedDepthBuffer&&o.enable(4),O.skinning&&o.enable(5),O.morphTargets&&o.enable(6),O.morphNormals&&o.enable(7),O.morphColors&&o.enable(8),O.premultipliedAlpha&&o.enable(9),O.shadowMapEnabled&&o.enable(10),O.doubleSided&&o.enable(11),O.flipSided&&o.enable(12),O.useDepthPacking&&o.enable(13),O.dithering&&o.enable(14),O.transmission&&o.enable(15),O.sheen&&o.enable(16),O.opaque&&o.enable(17),O.pointsUvs&&o.enable(18),O.decodeVideoTexture&&o.enable(19),O.decodeVideoTextureEmissive&&o.enable(20),O.alphaToCoverage&&o.enable(21),O.numLightProbeGrids>0&&o.enable(22),O.hasPositionAttribute&&o.enable(23),E.push(o.mask)}function I(E){let O=u[E.type],W;if(O){let J=Yi[O];W=Co.clone(J.uniforms)}else W=E.uniforms;return W}function w(E,O){let W=d.get(O);return W!==void 0?++W.usedTimes:(W=new Ox(i,O,E,s),l.push(W),d.set(O,W)),W}function b(E){if(--E.usedTimes===0){let O=l.indexOf(E);l[O]=l[l.length-1],l.pop(),d.delete(E.cacheKey),E.destroy()}}function R(E){a.remove(E)}function F(){a.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:I,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:F}}function kx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ud(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,_,T,y,g){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:u,material:_,materialVariant:o(h),groupOrder:T,renderOrder:h.renderOrder,z:y,group:g},i[e]=M):(M.id=h.id,M.object=h,M.geometry=u,M.material=_,M.materialVariant=o(h),M.groupOrder=T,M.renderOrder=h.renderOrder,M.z=y,M.group=g),e++,M}function c(h,u,_,T,y,g,M){M.reversedDepth===!0&&(y=-y);let I=a(h,u,_,T,y,g);_.transmission>0?n.push(I):_.transparent===!0?s.push(I):t.push(I)}function l(h,u,_,T,y,g){let M=a(h,u,_,T,y,g);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function d(h,u){t.length>1&&t.sort(h||Gx),n.length>1&&n.sort(u||Ud),s.length>1&&s.sort(u||Ud)}function m(){for(let h=e,u=i.length;h<u;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:d}}function Vx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Fd,i.set(n,[o])):s>=r.length?(o=new Fd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new ct};break;case"SpotLight":t={position:new N,direction:new N,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qx=0;function Yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zx(i){let e=new Wx,t=Xx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new vt,o=new vt;function a(l){let d=0,m=0,h=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let u=0,_=0,T=0,y=0,g=0,M=0,I=0,w=0,b=0,R=0,F=0,E=0,O=0,W=0;l.sort(Yx);for(let $=0,ee=l.length;$<ee;$++){let z=l[$],Q=z.color,re=z.intensity,ie=z.distance,me=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ss?me=z.shadow.map.texture:me=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)d+=Q.r*re,m+=Q.g*re,h+=Q.b*re;else if(z.isLightProbe){for(let he=0;he<9;he++)n.probe[he].addScaledVector(z.sh.coefficients[he],re);W++}else if(z.isSunLight){let he=e.get(z);if(he.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let de=z.shadow,_e=t.get(z);_e.shadowIntensity=de.intensity,_e.shadowBias=de.bias,_e.shadowNormalBias=de.normalBias,_e.shadowRadius=de.radius,_e.shadowMapSize.copy(de.mapSize).multiply(de.getFrameExtents()),n.sunShadow[_]=_e,n.sunShadowMap[_]=me;let nt=de.getViewportCount();for(let Je=0;Je<nt;Je++)n.sunShadowMatrix[T+Je]=de.getMatrix(Je),n.sunShadowCascade[T+Je]=de._cascadeData[Je];T+=nt,_++}n.sun[u]=he,u++}else if(z.isDirectionalLight){let he=e.get(z);if(he.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let de=z.shadow,_e=t.get(z);_e.shadowIntensity=de.intensity,_e.shadowBias=de.bias,_e.shadowNormalBias=de.normalBias,_e.shadowRadius=de.radius,_e.shadowMapSize=de.mapSize,n.directionalShadow[y]=_e,n.directionalShadowMap[y]=me,n.directionalShadowMatrix[y]=z.shadow.matrix,b++}n.directional[y]=he,y++}else if(z.isSpotLight){let he=e.get(z);he.position.setFromMatrixPosition(z.matrixWorld),he.color.copy(Q).multiplyScalar(re),he.distance=ie,he.coneCos=Math.cos(z.angle),he.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),he.decay=z.decay,n.spot[M]=he;let de=z.shadow;if(z.map&&(n.spotLightMap[E]=z.map,E++,de.updateMatrices(z),z.castShadow&&O++),n.spotLightMatrix[M]=de.matrix,z.castShadow){let _e=t.get(z);_e.shadowIntensity=de.intensity,_e.shadowBias=de.bias,_e.shadowNormalBias=de.normalBias,_e.shadowRadius=de.radius,_e.shadowMapSize=de.mapSize,n.spotShadow[M]=_e,n.spotShadowMap[M]=me,F++}M++}else if(z.isRectAreaLight){let he=e.get(z);he.color.copy(Q).multiplyScalar(re),he.halfWidth.set(z.width*.5,0,0),he.halfHeight.set(0,z.height*.5,0),n.rectArea[I]=he,I++}else if(z.isPointLight){let he=e.get(z);if(he.color.copy(z.color).multiplyScalar(z.intensity),he.distance=z.distance,he.decay=z.decay,z.castShadow){let de=z.shadow,_e=t.get(z);_e.shadowIntensity=de.intensity,_e.shadowBias=de.bias,_e.shadowNormalBias=de.normalBias,_e.shadowRadius=de.radius,_e.shadowMapSize=de.mapSize,_e.shadowCameraNear=de.camera.near,_e.shadowCameraFar=de.camera.far,n.pointShadow[g]=_e,n.pointShadowMap[g]=me,n.pointShadowMatrix[g]=z.shadow.matrix,R++}n.point[g]=he,g++}else if(z.isHemisphereLight){let he=e.get(z);he.skyColor.copy(z.color).multiplyScalar(re),he.groundColor.copy(z.groundColor).multiplyScalar(re),n.hemi[w]=he,w++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=tt.LTC_FLOAT_1,n.rectAreaLTC2=tt.LTC_FLOAT_2):(n.rectAreaLTC1=tt.LTC_HALF_1,n.rectAreaLTC2=tt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;let J=n.hash;(J.sunLength!==u||J.directionalLength!==y||J.pointLength!==g||J.spotLength!==M||J.rectAreaLength!==I||J.hemiLength!==w||J.numSunShadows!==_||J.numDirectionalShadows!==b||J.numPointShadows!==R||J.numSpotShadows!==F||J.numSpotMaps!==E||J.numLightProbes!==W)&&(n.sun.length=u,n.directional.length=y,n.spot.length=M,n.rectArea.length=I,n.point.length=g,n.hemi.length=w,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+E-O,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=W,J.sunLength=u,J.directionalLength=y,J.pointLength=g,J.spotLength=M,J.rectAreaLength=I,J.hemiLength=w,J.numSunShadows=_,J.numDirectionalShadows=b,J.numPointShadows=R,J.numSpotShadows=F,J.numSpotMaps=E,J.numLightProbes=W,n.version=qx++)}function c(l,d){let m=0,h=0,u=0,_=0,T=0,y=0,g=d.matrixWorldInverse;for(let M=0,I=l.length;M<I;M++){let w=l[M];if(w.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(g),m++}else if(w.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(w.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),_++}else if(w.isRectAreaLight){let b=n.rectArea[T];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),T++}else if(w.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(g),u++}else if(w.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:n}}function Od(i){let e=new Zx(i),t=[],n=[],s=[];function r(h){m.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Jx(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Od(i),e.set(s,[a])):r>=o.length?(a=new Od(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jx=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Qx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Bd=new vt,Io=new N,bh=new N;function ey(i,e,t){let n=new fr,s=new ht,r=new ht,o=new cn,a=new Ba,c=new za,l={},d=t.maxTextureSize,m={[Wi]:Vn,[Vn]:Wi,[wn]:wn},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:$x,fragmentShader:Kx}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let _=new qt;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new gt(_,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let g=this.type;this.render=function(R,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;this.type===ec&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yo);let O=i.getRenderTarget(),W=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Xi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let ee=g!==this.type;ee&&F.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Q=>Q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Q=R.length;z<Q;z++){let re=R[z],ie=re.shadow;if(ie===void 0){Tt("WebGLShadowMap:",re,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let me=ie.getFrameExtents();s.multiply(me),r.copy(ie.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/me.x),s.x=r.x*me.x,ie.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/me.y),s.y=r.y*me.y,ie.mapSize.y=r.y));let he=i.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=he,ie.map===null||ee===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===_r){if(re.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new Kn(s.x,s.y,{format:Ss,type:pi,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),ie.map.texture.name=re.name+".shadowMap",ie.map.depthTexture=new ki(s.x,s.y,vi),ie.map.depthTexture.name=re.name+".shadowMapDepth",ie.map.depthTexture.format=Fi,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=kn,ie.map.depthTexture.magFilter=kn}else re.isPointLight?(ie.map=new Yc(s.x),ie.map.depthTexture=new Ca(s.x,Li)):(ie.map=new Kn(s.x,s.y),ie.map.depthTexture=new ki(s.x,s.y,Li)),ie.map.depthTexture.name=re.name+".shadowMap",ie.map.depthTexture.format=Fi,this.type===yo?(ie.map.depthTexture.compareFunction=he?Vc:Gc,ie.map.depthTexture.minFilter=Xn,ie.map.depthTexture.magFilter=Xn):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=kn,ie.map.depthTexture.magFilter=kn);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==s.x||ie.map.height!==s.y)&&ie.map.setSize(s.x,s.y);let de=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();re.isPointLight!==!0&&ie.updateMatrices(re,E);for(let _e=0;_e<de;_e++){let nt=ie.getCamera(_e);if(re.isPointLight){let Je=ie.camera,Ht=ie.matrix,Ze=re.distance||Je.far;Ze!==Je.far&&(Je.far=Ze,Je.updateProjectionMatrix()),Io.setFromMatrixPosition(re.matrixWorld),Je.position.copy(Io),bh.copy(Je.position),bh.add(jx[_e]),Je.up.copy(Qx[_e]),Je.lookAt(bh),Je.updateMatrixWorld(),Ht.makeTranslation(-Io.x,-Io.y,-Io.z),Bd.multiplyMatrices(Je.projectionMatrix,Je.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(Bd,Je.coordinateSystem,Je.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)i.setRenderTarget(ie.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(ie.map),i.clear());let Je=ie.getViewport(_e);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),$.viewport(o)}n=ie.getFrustum(_e),w(F,E,nt,re,this.type)}ie.isPointLightShadow!==!0&&this.type===_r&&M(ie,E),ie.needsUpdate=!1}g=this.type,y.needsUpdate=!1,i.setRenderTarget(O,W,J)};function M(R,F){let E=e.update(T);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new Kn(s.x,s.y,{format:Ss,type:pi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(F,null,E,h,T,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(F,null,E,u,T,null)}function I(R,F,E,O){let W=null,J=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(J!==void 0)W=J;else if(W=E.isPointLight===!0?c:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let $=W.uuid,ee=F.uuid,z=l[$];z===void 0&&(z={},l[$]=z);let Q=z[ee];Q===void 0&&(Q=W.clone(),z[ee]=Q,F.addEventListener("dispose",b)),W=Q}if(W.visible=F.visible,W.wireframe=F.wireframe,O===_r?W.side=F.shadowSide!==null?F.shadowSide:F.side:W.side=F.shadowSide!==null?F.shadowSide:m[F.side],W.alphaMap=F.alphaMap,W.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,W.map=F.map,W.clipShadows=F.clipShadows,W.clippingPlanes=F.clippingPlanes,W.clipIntersection=F.clipIntersection,W.displacementMap=F.displacementMap,W.displacementScale=F.displacementScale,W.displacementBias=F.displacementBias,W.wireframeLinewidth=F.wireframeLinewidth,W.linewidth=F.linewidth,E.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let $=i.properties.get(W);$.light=E}return W}function w(R,F,E,O,W){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&W===_r)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);let ee=e.update(R),z=R.material;if(Array.isArray(z)){let Q=ee.groups;for(let re=0,ie=Q.length;re<ie;re++){let me=Q[re],he=z[me.materialIndex];if(he&&he.visible){let de=I(R,he,O,W);R.onBeforeShadow(i,R,F,E,ee,de,me),i.renderBufferDirect(E,null,ee,de,R,me),R.onAfterShadow(i,R,F,E,ee,de,me)}}}else if(z.visible){let Q=I(R,z,O,W);R.onBeforeShadow(i,R,F,E,ee,Q,null),i.renderBufferDirect(E,null,ee,Q,R,null),R.onAfterShadow(i,R,F,E,ee,Q,null)}}let $=R.children;for(let ee=0,z=$.length;ee<z;ee++)w($[ee],F,E,O,W)}function b(R){R.target.removeEventListener("dispose",b);for(let E in l){let O=l[E],W=R.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function ty(i,e){function t(){let Y=!1,Ae=new cn,ye=null,Ve=new cn(0,0,0,0);return{setMask:function(Ye){ye!==Ye&&!Y&&(i.colorMask(Ye,Ye,Ye,Ye),ye=Ye)},setLocked:function(Ye){Y=Ye},setClear:function(Ye,Re,Xe,lt,ut){ut===!0&&(Ye*=lt,Re*=lt,Xe*=lt),Ae.set(Ye,Re,Xe,lt),Ve.equals(Ae)===!1&&(i.clearColor(Ye,Re,Xe,lt),Ve.copy(Ae))},reset:function(){Y=!1,ye=null,Ve.set(-1,0,0,0)}}}function n(){let Y=!1,Ae=!1,ye=null,Ve=null,Ye=null;return{setReversed:function(Re){if(Ae!==Re){let Xe=e.get("EXT_clip_control");Re?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=Re;let lt=Ye;Ye=null,this.setClear(lt)}},getReversed:function(){return Ae},setTest:function(Re){Re?xe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Re){ye!==Re&&!Y&&(i.depthMask(Re),ye=Re)},setFunc:function(Re){if(Ae&&(Re=pd[Re]),Ve!==Re){switch(Re){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ve=Re}},setLocked:function(Re){Y=Re},setClear:function(Re){Ye!==Re&&(Ye=Re,Ae&&(Re=1-Re),i.clearDepth(Re))},reset:function(){Y=!1,ye=null,Ve=null,Ye=null,Ae=!1}}}function s(){let Y=!1,Ae=null,ye=null,Ve=null,Ye=null,Re=null,Xe=null,lt=null,ut=null;return{setTest:function(Nt){Y||(Nt?xe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Nt){Ae!==Nt&&!Y&&(i.stencilMask(Nt),Ae=Nt)},setFunc:function(Nt,yn,se){(ye!==Nt||Ve!==yn||Ye!==se)&&(i.stencilFunc(Nt,yn,se),ye=Nt,Ve=yn,Ye=se)},setOp:function(Nt,yn,se){(Re!==Nt||Xe!==yn||lt!==se)&&(i.stencilOp(Nt,yn,se),Re=Nt,Xe=yn,lt=se)},setLocked:function(Nt){Y=Nt},setClear:function(Nt){ut!==Nt&&(i.clearStencil(Nt),ut=Nt)},reset:function(){Y=!1,Ae=null,ye=null,Ve=null,Ye=null,Re=null,Xe=null,lt=null,ut=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,d={},m={},h={},u=new WeakMap,_=[],T=null,y=!1,g=null,M=null,I=null,w=null,b=null,R=null,F=null,E=new ct(0,0,0),O=0,W=!1,J=null,$=null,ee=null,z=null,Q=null,re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,me=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(he)[1]),ie=me>=1):he.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),ie=me>=2);let de=null,_e={},nt=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),Ht=new cn().fromArray(nt),Ze=new cn().fromArray(Je);function xt(Y,Ae,ye,Ve){let Ye=new Uint8Array(4),Re=i.createTexture();i.bindTexture(Y,Re),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<ye;Xe++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Ve,0,i.RGBA,i.UNSIGNED_BYTE,Ye):i.texImage2D(Ae+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ye);return Re}let ge={};ge[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),o.setFunc(rr),le(!1),Me(kl),xe(i.CULL_FACE),ze(Xi);function xe(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function Ce(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function je(Y,Ae){return h[Y]!==Ae?(i.bindFramebuffer(Y,Ae),h[Y]=Ae,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ae),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ke(Y,Ae){let ye=_,Ve=!1;if(Y){ye=u.get(Ae),ye===void 0&&(ye=[],u.set(Ae,ye));let Ye=Y.textures;if(ye.length!==Ye.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Re=0,Xe=Ye.length;Re<Xe;Re++)ye[Re]=i.COLOR_ATTACHMENT0+Re;ye.length=Ye.length,Ve=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Ve=!0);Ve&&i.drawBuffers(ye)}function Mt(Y){return T!==Y?(i.useProgram(Y),T=Y,!0):!1}let Dt={[Us]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};Dt[Ou]=i.MIN,Dt[Bu]=i.MAX;let _t={[zu]:i.ZERO,[Hu]:i.ONE,[ku]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(Y,Ae,ye,Ve,Ye,Re,Xe,lt,ut,Nt){if(Y===Xi){y===!0&&(Ce(i.BLEND),y=!1);return}if(y===!1&&(xe(i.BLEND),y=!0),Y!==Nu){if(Y!==g||Nt!==W){if((M!==Us||b!==Us)&&(i.blendEquation(i.FUNC_ADD),M=Us,b=Us),Nt)switch(Y){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",Y);break}else switch(Y){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",Y);break}I=null,w=null,R=null,F=null,E.set(0,0,0),O=0,g=Y,W=Nt}return}Ye=Ye||Ae,Re=Re||ye,Xe=Xe||Ve,(Ae!==M||Ye!==b)&&(i.blendEquationSeparate(Dt[Ae],Dt[Ye]),M=Ae,b=Ye),(ye!==I||Ve!==w||Re!==R||Xe!==F)&&(i.blendFuncSeparate(_t[ye],_t[Ve],_t[Re],_t[Xe]),I=ye,w=Ve,R=Re,F=Xe),(lt.equals(E)===!1||ut!==O)&&(i.blendColor(lt.r,lt.g,lt.b,ut),E.copy(lt),O=ut),g=Y,W=!1}function ce(Y,Ae){Y.side===wn?Ce(i.CULL_FACE):xe(i.CULL_FACE);let ye=Y.side===Vn;Ae&&(ye=!ye),le(ye),Y.blending===vr&&Y.transparent===!1?ze(Xi):ze(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Ve=Y.stencilWrite;a.setTest(Ve),Ve&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),pe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(Y){J!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),J=Y)}function Me(Y){Y!==Lu?(xe(i.CULL_FACE),Y!==$&&(Y===kl?i.cullFace(i.BACK):Y===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),$=Y}function Te(Y){Y!==ee&&(ie&&i.lineWidth(Y),ee=Y)}function pe(Y,Ae,ye){Y?(xe(i.POLYGON_OFFSET_FILL),(z!==Ae||Q!==ye)&&(z=Ae,Q=ye,o.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,ye))):Ce(i.POLYGON_OFFSET_FILL)}function ve(Y){Y?xe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Pe(Y){Y===void 0&&(Y=i.TEXTURE0+re-1),de!==Y&&(i.activeTexture(Y),de=Y)}function V(Y,Ae,ye){ye===void 0&&(de===null?ye=i.TEXTURE0+re-1:ye=de);let Ve=_e[ye];Ve===void 0&&(Ve={type:void 0,texture:void 0},_e[ye]=Ve),(Ve.type!==Y||Ve.texture!==Ae)&&(de!==ye&&(i.activeTexture(ye),de=ye),i.bindTexture(Y,Ae||ge[Y]),Ve.type=Y,Ve.texture=Ae)}function it(){let Y=_e[de];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ee(){try{i.compressedTexImage2D(...arguments)}catch(Y){It("WebGLState:",Y)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(Y){It("WebGLState:",Y)}}function p(){try{i.texSubImage2D(...arguments)}catch(Y){It("WebGLState:",Y)}}function X(){try{i.texSubImage3D(...arguments)}catch(Y){It("WebGLState:",Y)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){It("WebGLState:",Y)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){It("WebGLState:",Y)}}function ae(){try{i.texStorage2D(...arguments)}catch(Y){It("WebGLState:",Y)}}function ue(){try{i.texStorage3D(...arguments)}catch(Y){It("WebGLState:",Y)}}function te(){try{i.texImage2D(...arguments)}catch(Y){It("WebGLState:",Y)}}function q(){try{i.texImage3D(...arguments)}catch(Y){It("WebGLState:",Y)}}function we(Y){return m[Y]!==void 0?m[Y]:i.getParameter(Y)}function Oe(Y,Ae){m[Y]!==Ae&&(i.pixelStorei(Y,Ae),m[Y]=Ae)}function Ne(Y){Ht.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ht.copy(Y))}function ke(Y){Ze.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Ze.copy(Y))}function Ge(Y,Ae){let ye=l.get(Ae);ye===void 0&&(ye=new WeakMap,l.set(Ae,ye));let Ve=ye.get(Y);Ve===void 0&&(Ve=i.getUniformBlockIndex(Ae,Y.name),ye.set(Y,Ve))}function st(Y,Ae){let Ve=l.get(Ae).get(Y);c.get(Ae)!==Ve&&(i.uniformBlockBinding(Ae,Ve,Y.__bindingPointIndex),c.set(Ae,Ve))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},de=null,_e={},h={},u=new WeakMap,_=[],T=null,y=!1,g=null,M=null,I=null,w=null,b=null,R=null,F=null,E=new ct(0,0,0),O=0,W=!1,J=null,$=null,ee=null,z=null,Q=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:Ce,bindFramebuffer:je,drawBuffers:Ke,useProgram:Mt,setBlending:ze,setMaterial:ce,setFlipSided:le,setCullFace:Me,setLineWidth:Te,setPolygonOffset:pe,setScissorTest:ve,activeTexture:Pe,bindTexture:V,unbindTexture:it,compressedTexImage2D:Ee,compressedTexImage3D:U,texImage2D:te,texImage3D:q,pixelStorei:Oe,getParameter:we,updateUBOMapping:Ge,uniformBlockBinding:st,texStorage2D:ae,texStorage3D:ue,texSubImage2D:p,texSubImage3D:X,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:Ne,viewport:ke,reset:be}}function ny(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,d=new WeakMap,m=new Set,h,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,p){return _?new OffscreenCanvas(U,p):Jr("canvas")}function y(U,p,X){let K=1,j=Ee(U);if((j.width>X||j.height>X)&&(K=X/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let ae=Math.floor(K*j.width),ue=Math.floor(K*j.height);h===void 0&&(h=T(ae,ue));let te=p?T(ae,ue):h;return te.width=ae,te.height=ue,te.getContext("2d").drawImage(U,0,0,ae,ue),Tt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ae+"x"+ue+")."),te}else return"data"in U&&Tt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),U;return U}function g(U){return U.generateMipmaps}function M(U){i.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(U,p,X,K,j,ae=!1){if(U!==null){if(i[U]!==void 0)return i[U];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=p;if(p===i.RED&&(X===i.FLOAT&&(te=i.R32F),X===i.HALF_FLOAT&&(te=i.R16F),X===i.UNSIGNED_BYTE&&(te=i.R8),X===i.UNSIGNED_SHORT&&ue&&(te=ue.R16_EXT),X===i.SHORT&&ue&&(te=ue.R16_SNORM_EXT)),p===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.R8UI),X===i.UNSIGNED_SHORT&&(te=i.R16UI),X===i.UNSIGNED_INT&&(te=i.R32UI),X===i.BYTE&&(te=i.R8I),X===i.SHORT&&(te=i.R16I),X===i.INT&&(te=i.R32I)),p===i.RG&&(X===i.FLOAT&&(te=i.RG32F),X===i.HALF_FLOAT&&(te=i.RG16F),X===i.UNSIGNED_BYTE&&(te=i.RG8),X===i.UNSIGNED_SHORT&&ue&&(te=ue.RG16_EXT),X===i.SHORT&&ue&&(te=ue.RG16_SNORM_EXT)),p===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RG8UI),X===i.UNSIGNED_SHORT&&(te=i.RG16UI),X===i.UNSIGNED_INT&&(te=i.RG32UI),X===i.BYTE&&(te=i.RG8I),X===i.SHORT&&(te=i.RG16I),X===i.INT&&(te=i.RG32I)),p===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGB8UI),X===i.UNSIGNED_SHORT&&(te=i.RGB16UI),X===i.UNSIGNED_INT&&(te=i.RGB32UI),X===i.BYTE&&(te=i.RGB8I),X===i.SHORT&&(te=i.RGB16I),X===i.INT&&(te=i.RGB32I)),p===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),X===i.UNSIGNED_INT&&(te=i.RGBA32UI),X===i.BYTE&&(te=i.RGBA8I),X===i.SHORT&&(te=i.RGBA16I),X===i.INT&&(te=i.RGBA32I)),p===i.RGB&&(X===i.UNSIGNED_SHORT&&ue&&(te=ue.RGB16_EXT),X===i.SHORT&&ue&&(te=ue.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),p===i.RGBA){let q=ae?Zr:Yt.getTransfer(j);X===i.FLOAT&&(te=i.RGBA32F),X===i.HALF_FLOAT&&(te=i.RGBA16F),X===i.UNSIGNED_BYTE&&(te=q===sn?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&ue&&(te=ue.RGBA16_EXT),X===i.SHORT&&ue&&(te=ue.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(U,p){let X;return U?p===null||p===Li||p===Er?X=i.DEPTH24_STENCIL8:p===vi?X=i.DEPTH32F_STENCIL8:p===Mr&&(X=i.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Li||p===Er?X=i.DEPTH_COMPONENT24:p===vi?X=i.DEPTH_COMPONENT32F:p===Mr&&(X=i.DEPTH_COMPONENT16),X}function R(U,p){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==kn&&U.minFilter!==Xn?Math.log2(Math.max(p.width,p.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?p.mipmaps.length:1}function F(U){let p=U.target;p.removeEventListener("dispose",F),O(p),p.isVideoTexture&&d.delete(p),p.isHTMLTexture&&m.delete(p)}function E(U){let p=U.target;p.removeEventListener("dispose",E),J(p)}function O(U){let p=n.get(U);if(p.__webglInit===void 0)return;let X=U.source,K=u.get(X);if(K){let j=K[p.__cacheKey];j.usedTimes--,j.usedTimes===0&&W(U),Object.keys(K).length===0&&u.delete(X)}n.remove(U)}function W(U){let p=n.get(U);i.deleteTexture(p.__webglTexture);let X=U.source,K=u.get(X);delete K[p.__cacheKey],o.memory.textures--}function J(U){let p=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(p.__webglFramebuffer[K]))for(let j=0;j<p.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(p.__webglFramebuffer[K][j]);else i.deleteFramebuffer(p.__webglFramebuffer[K]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[K])}else{if(Array.isArray(p.__webglFramebuffer))for(let K=0;K<p.__webglFramebuffer.length;K++)i.deleteFramebuffer(p.__webglFramebuffer[K]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let K=0;K<p.__webglColorRenderbuffer.length;K++)p.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[K]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let X=U.textures;for(let K=0,j=X.length;K<j;K++){let ae=n.get(X[K]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(X[K])}n.remove(U)}let $=0;function ee(){$=0}function z(){return $}function Q(U){$=U}function re(){let U=$;return U>=s.maxTextures&&Tt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,U}function ie(U){let p=[];return p.push(U.wrapS),p.push(U.wrapT),p.push(U.wrapR||0),p.push(U.magFilter),p.push(U.minFilter),p.push(U.anisotropy),p.push(U.internalFormat),p.push(U.format),p.push(U.type),p.push(U.generateMipmaps),p.push(U.premultiplyAlpha),p.push(U.flipY),p.push(U.unpackAlignment),p.push(U.colorSpace),p.join()}function me(U,p){let X=n.get(U);if(U.isVideoTexture&&V(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&X.__version!==U.version){let K=U.image;if(K===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(X,U,p);return}}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+p)}function he(U,p){let X=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){Ce(X,U,p);return}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+p)}function de(U,p){let X=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){Ce(X,U,p);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+p)}function _e(U,p){let X=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&X.__version!==U.version){je(X,U,p);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+p)}let nt={[or]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},Je={[kn]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[sc]:i.LINEAR_MIPMAP_NEAREST,[Ms]:i.LINEAR_MIPMAP_LINEAR},Ht={[sd]:i.NEVER,[ld]:i.ALWAYS,[rd]:i.LESS,[Gc]:i.LEQUAL,[od]:i.EQUAL,[Vc]:i.GEQUAL,[ad]:i.GREATER,[cd]:i.NOTEQUAL};function Ze(U,p){if(p.type===vi&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===Xn||p.magFilter===sc||p.magFilter===Mo||p.magFilter===Ms||p.minFilter===Xn||p.minFilter===sc||p.minFilter===Mo||p.minFilter===Ms)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,nt[p.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,nt[p.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,nt[p.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Je[p.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Je[p.minFilter]),p.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ht[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===kn||p.minFilter!==Mo&&p.minFilter!==Ms||p.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function xt(U,p){let X=!1;U.__webglInit===void 0&&(U.__webglInit=!0,p.addEventListener("dispose",F));let K=p.source,j=u.get(K);j===void 0&&(j={},u.set(K,j));let ae=ie(p);if(ae!==U.__cacheKey){j[ae]===void 0&&(j[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),j[ae].usedTimes++;let ue=j[U.__cacheKey];ue!==void 0&&(j[U.__cacheKey].usedTimes--,ue.usedTimes===0&&W(p)),U.__cacheKey=ae,U.__webglTexture=j[ae].texture}return X}function ge(U,p,X){return Math.floor(Math.floor(U/X)/p)}function xe(U,p,X,K){let ae=U.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,X,K,p.data);else{ae.sort((Oe,Ne)=>Oe.start-Ne.start);let ue=0;for(let Oe=1;Oe<ae.length;Oe++){let Ne=ae[ue],ke=ae[Oe],Ge=Ne.start+Ne.count,st=ge(ke.start,p.width,4),be=ge(Ne.start,p.width,4);ke.start<=Ge+1&&st===be&&ge(ke.start+ke.count-1,p.width,4)===st?Ne.count=Math.max(Ne.count,ke.start+ke.count-Ne.start):(++ue,ae[ue]=ke)}ae.length=ue+1;let te=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let Oe=0,Ne=ae.length;Oe<Ne;Oe++){let ke=ae[Oe],Ge=Math.floor(ke.start/4),st=Math.ceil(ke.count/4),be=Ge%p.width,Y=Math.floor(Ge/p.width),Ae=st,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(i.TEXTURE_2D,0,be,Y,Ae,ye,X,K,p.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Ce(U,p,X){let K=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(K=i.TEXTURE_3D);let j=xt(U,p),ae=p.source;t.bindTexture(K,U.__webglTexture,i.TEXTURE0+X);let ue=n.get(ae);if(ae.version!==ue.__version||j===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&p.image instanceof ImageBitmap)===!1){let ye=Yt.getPrimaries(Yt.workingColorSpace),Ve=p.colorSpace===is?null:Yt.getPrimaries(p.colorSpace),Ye=p.colorSpace===is||ye===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment);let q=y(p.image,!1,s.maxTextureSize);q=it(p,q);let we=r.convert(p.format,p.colorSpace),Oe=r.convert(p.type),Ne=w(p.internalFormat,we,Oe,p.normalized,p.colorSpace,p.isVideoTexture);Ze(K,p);let ke,Ge=p.mipmaps,st=p.isVideoTexture!==!0,be=ue.__version===void 0||j===!0,Y=ae.dataReady,Ae=R(p,q);if(p.isDepthTexture)Ne=b(p.format===Es,p.type),be&&(st?t.texStorage2D(i.TEXTURE_2D,1,Ne,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,Ne,q.width,q.height,0,we,Oe,null));else if(p.isDataTexture)if(Ge.length>0){st&&be&&t.texStorage2D(i.TEXTURE_2D,Ae,Ne,Ge[0].width,Ge[0].height);for(let ye=0,Ve=Ge.length;ye<Ve;ye++)ke=Ge[ye],st?Y&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ke.width,ke.height,we,Oe,ke.data):t.texImage2D(i.TEXTURE_2D,ye,Ne,ke.width,ke.height,0,we,Oe,ke.data);p.generateMipmaps=!1}else st?(be&&t.texStorage2D(i.TEXTURE_2D,Ae,Ne,q.width,q.height),Y&&xe(p,q,we,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ne,q.width,q.height,0,we,Oe,q.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){st&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ne,Ge[0].width,Ge[0].height,q.depth);for(let ye=0,Ve=Ge.length;ye<Ve;ye++)if(ke=Ge[ye],p.format!==Mi)if(we!==null)if(st){if(Y)if(p.layerUpdates.size>0){let Ye=ph(ke.width,ke.height,p.format,p.type);for(let Re of p.layerUpdates){let Xe=ke.data.subarray(Re*Ye/ke.data.BYTES_PER_ELEMENT,(Re+1)*Ye/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Re,ke.width,ke.height,1,we,Xe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,ke.width,ke.height,q.depth,we,ke.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ne,ke.width,ke.height,q.depth,0,ke.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Y&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,ke.width,ke.height,q.depth,we,Oe,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ne,ke.width,ke.height,q.depth,0,we,Oe,ke.data);p.layerUpdates.size>0&&p.clearLayerUpdates()}else{st&&be&&t.texStorage2D(i.TEXTURE_2D,Ae,Ne,Ge[0].width,Ge[0].height);for(let ye=0,Ve=Ge.length;ye<Ve;ye++)ke=Ge[ye],p.format!==Mi?we!==null?st?Y&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,ke.width,ke.height,we,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ne,ke.width,ke.height,0,ke.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Y&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ke.width,ke.height,we,Oe,ke.data):t.texImage2D(i.TEXTURE_2D,ye,Ne,ke.width,ke.height,0,we,Oe,ke.data)}else if(p.isDataArrayTexture)if(st){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ne,q.width,q.height,q.depth),Y)if(p.layerUpdates.size>0){let ye=ph(q.width,q.height,p.format,p.type);for(let Ve of p.layerUpdates){let Ye=q.data.subarray(Ve*ye/q.data.BYTES_PER_ELEMENT,(Ve+1)*ye/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,q.width,q.height,1,we,Oe,Ye)}p.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,we,Oe,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,q.width,q.height,q.depth,0,we,Oe,q.data);else if(p.isData3DTexture)st?(be&&t.texStorage3D(i.TEXTURE_3D,Ae,Ne,q.width,q.height,q.depth),Y&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,we,Oe,q.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,q.width,q.height,q.depth,0,we,Oe,q.data);else if(p.isFramebufferTexture){if(be)if(st)t.texStorage2D(i.TEXTURE_2D,Ae,Ne,q.width,q.height);else{let ye=q.width,Ve=q.height;for(let Ye=0;Ye<Ae;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,Ne,ye,Ve,0,we,Oe,null),ye>>=1,Ve>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),q.parentNode!==ye){ye.appendChild(q),m.add(p),ye.onpaint=Ve=>{let Ye=Ve.changedElements;for(let Re of m)Ye.includes(Re.image)&&(Re.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let Ye=i.RGBA,Re=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ye,Re,Xe,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(st&&be){let ye=Ee(Ge[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ne,ye.width,ye.height)}for(let ye=0,Ve=Ge.length;ye<Ve;ye++)ke=Ge[ye],st?Y&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we,Oe,ke):t.texImage2D(i.TEXTURE_2D,ye,Ne,we,Oe,ke);p.generateMipmaps=!1}else if(st){if(be){let ye=Ee(q);t.texStorage2D(i.TEXTURE_2D,Ae,Ne,ye.width,ye.height)}Y&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Oe,q)}else t.texImage2D(i.TEXTURE_2D,0,Ne,we,Oe,q);g(p)&&M(K),ue.__version=ae.version,p.onUpdate&&p.onUpdate(p)}U.__version=p.version}function je(U,p,X){if(p.image.length!==6)return;let K=xt(U,p),j=p.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+X);let ae=n.get(j);if(j.version!==ae.__version||K===!0){t.activeTexture(i.TEXTURE0+X);let ue=Yt.getPrimaries(Yt.workingColorSpace),te=p.colorSpace===is?null:Yt.getPrimaries(p.colorSpace),q=p.colorSpace===is||ue===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let we=p.isCompressedTexture||p.image[0].isCompressedTexture,Oe=p.image[0]&&p.image[0].isDataTexture,Ne=[];for(let Re=0;Re<6;Re++)!we&&!Oe?Ne[Re]=y(p.image[Re],!0,s.maxCubemapSize):Ne[Re]=Oe?p.image[Re].image:p.image[Re],Ne[Re]=it(p,Ne[Re]);let ke=Ne[0],Ge=r.convert(p.format,p.colorSpace),st=r.convert(p.type),be=w(p.internalFormat,Ge,st,p.normalized,p.colorSpace),Y=p.isVideoTexture!==!0,Ae=ae.__version===void 0||K===!0,ye=j.dataReady,Ve=R(p,ke);Ze(i.TEXTURE_CUBE_MAP,p);let Ye;if(we){Y&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,be,ke.width,ke.height);for(let Re=0;Re<6;Re++){Ye=Ne[Re].mipmaps;for(let Xe=0;Xe<Ye.length;Xe++){let lt=Ye[Xe];p.format!==Mi?Ge!==null?Y?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe,0,0,lt.width,lt.height,Ge,lt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe,be,lt.width,lt.height,0,lt.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe,0,0,lt.width,lt.height,Ge,st,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe,be,lt.width,lt.height,0,Ge,st,lt.data)}}}else{if(Ye=p.mipmaps,Y&&Ae){Ye.length>0&&Ve++;let Re=Ee(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,be,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Oe){Y?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ne[Re].width,Ne[Re].height,Ge,st,Ne[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,be,Ne[Re].width,Ne[Re].height,0,Ge,st,Ne[Re].data);for(let Xe=0;Xe<Ye.length;Xe++){let ut=Ye[Xe].image[Re].image;Y?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe+1,0,0,ut.width,ut.height,Ge,st,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe+1,be,ut.width,ut.height,0,Ge,st,ut.data)}}else{Y?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ge,st,Ne[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,be,Ge,st,Ne[Re]);for(let Xe=0;Xe<Ye.length;Xe++){let lt=Ye[Xe];Y?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe+1,0,0,Ge,st,lt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe+1,be,Ge,st,lt.image[Re])}}}g(p)&&M(i.TEXTURE_CUBE_MAP),ae.__version=j.version,p.onUpdate&&p.onUpdate(p)}U.__version=p.version}function Ke(U,p,X,K,j,ae){let ue=r.convert(X.format,X.colorSpace),te=r.convert(X.type),q=w(X.internalFormat,ue,te,X.normalized,X.colorSpace),we=n.get(p),Oe=n.get(X);if(Oe.__renderTarget=p,!we.__hasExternalTextures){let Ne=Math.max(1,p.width>>ae),ke=Math.max(1,p.height>>ae);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,ae,q,Ne,ke,p.depth,0,ue,te,null):t.texImage2D(j,ae,q,Ne,ke,0,ue,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Pe(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,Oe.__webglTexture,0,ve(p)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,Oe.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(U,p,X){if(i.bindRenderbuffer(i.RENDERBUFFER,U),p.depthBuffer){let K=p.depthTexture,j=K&&K.isDepthTexture?K.type:null,ae=b(p.stencilBuffer,j),ue=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(p),ae,p.width,p.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(p),ae,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,ae,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,U)}else{let K=p.textures;for(let j=0;j<K.length;j++){let ae=K[j],ue=r.convert(ae.format,ae.colorSpace),te=r.convert(ae.type),q=w(ae.internalFormat,ue,te,ae.normalized,ae.colorSpace);Pe(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(p),q,p.width,p.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(p),q,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,q,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(U,p,X){let K=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(p.depthTexture);if(j.__renderTarget=p,(!j.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,p.depthTexture.addEventListener("dispose",F)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,p.depthTexture);let we=r.convert(p.depthTexture.format),Oe=r.convert(p.depthTexture.type),Ne;p.depthTexture.format===Fi?Ne=i.DEPTH_COMPONENT24:p.depthTexture.format===Es&&(Ne=i.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ne,p.width,p.height,0,we,Oe,null)}}else me(p.depthTexture,0);let ae=j.__webglTexture,ue=ve(p),te=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,q=p.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(p.depthTexture.format===Fi)Pe(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,te,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,q,te,ae,0);else if(p.depthTexture.format===Es)Pe(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,te,ae,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,q,te,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(U){let p=n.get(U),X=U.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==U.depthTexture){let K=U.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),K){let j=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),p.__depthDisposeCallback=j}p.__boundDepthTexture=K}if(U.depthTexture&&!p.__autoAllocateDepthBuffer)if(X)for(let K=0;K<6;K++)Dt(p.__webglFramebuffer[K],U,K);else{let K=U.texture.mipmaps;K&&K.length>0?Dt(p.__webglFramebuffer[0],U,0):Dt(p.__webglFramebuffer,U,0)}else if(X){p.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[K]),p.__webglDepthbuffer[K]===void 0)p.__webglDepthbuffer[K]=i.createRenderbuffer(),Mt(p.__webglDepthbuffer[K],U,!1);else{let j=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=p.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}else{let K=U.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Mt(p.__webglDepthbuffer,U,!1);else{let j=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(U,p,X){let K=n.get(U);p!==void 0&&Ke(K.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&_t(U)}function ce(U){let p=U.texture,X=n.get(U),K=n.get(p);U.addEventListener("dispose",E);let j=U.textures,ae=U.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=p.version,o.memory.textures++),ae){X.__webglFramebuffer=[];for(let te=0;te<6;te++)if(p.mipmaps&&p.mipmaps.length>0){X.__webglFramebuffer[te]=[];for(let q=0;q<p.mipmaps.length;q++)X.__webglFramebuffer[te][q]=i.createFramebuffer()}else X.__webglFramebuffer[te]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){X.__webglFramebuffer=[];for(let te=0;te<p.mipmaps.length;te++)X.__webglFramebuffer[te]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ue)for(let te=0,q=j.length;te<q;te++){let we=n.get(j[te]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Pe(U)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let te=0;te<j.length;te++){let q=j[te];X.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[te]);let we=r.convert(q.format,q.colorSpace),Oe=r.convert(q.type),Ne=w(q.internalFormat,we,Oe,q.normalized,q.colorSpace,U.isXRRenderTarget===!0),ke=ve(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ne,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,X.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(X.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,p);for(let te=0;te<6;te++)if(p.mipmaps&&p.mipmaps.length>0)for(let q=0;q<p.mipmaps.length;q++)Ke(X.__webglFramebuffer[te][q],U,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,q);else Ke(X.__webglFramebuffer[te],U,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(p)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let te=0,q=j.length;te<q;te++){let we=j[te],Oe=n.get(we),Ne=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Oe.__webglTexture),Ze(Ne,we),Ke(X.__webglFramebuffer,U,we,i.COLOR_ATTACHMENT0+te,Ne,0),g(we)&&M(Ne)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(te=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,K.__webglTexture),Ze(te,p),p.mipmaps&&p.mipmaps.length>0)for(let q=0;q<p.mipmaps.length;q++)Ke(X.__webglFramebuffer[q],U,p,i.COLOR_ATTACHMENT0,te,q);else Ke(X.__webglFramebuffer,U,p,i.COLOR_ATTACHMENT0,te,0);g(p)&&M(te),t.unbindTexture()}U.depthBuffer&&_t(U)}function le(U){let p=U.textures;for(let X=0,K=p.length;X<K;X++){let j=p[X];if(g(j)){let ae=I(U),ue=n.get(j).__webglTexture;t.bindTexture(ae,ue),M(ae),t.unbindTexture()}}}let Me=[],Te=[];function pe(U){if(U.samples>0){if(Pe(U)===!1){let p=U.textures,X=U.width,K=U.height,j=i.COLOR_BUFFER_BIT,ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(U),te=p.length>1;if(te)for(let we=0;we<p.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let q=U.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let we=0;we<p.length;we++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);let Oe=n.get(p[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,X,K,0,0,X,K,j,i.NEAREST),c===!0&&(Me.length=0,Te.length=0,Me.push(i.COLOR_ATTACHMENT0+we),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Me.push(ae),Te.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let we=0;we<p.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ue.__webglColorRenderbuffer[we]);let Oe=n.get(p[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){let p=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function ve(U){return Math.min(s.maxSamples,U.samples)}function Pe(U){let p=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function V(U){let p=o.render.frame;d.get(U)!==p&&(d.set(U,p),U.update())}function it(U,p){let X=U.colorSpace,K=U.format,j=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||X!==Yr&&X!==is&&(Yt.getTransfer(X)===sn?(K!==Mi||j!==ri)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",X)),p}function Ee(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.getTextureUnits=z,this.setTextureUnits=Q,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=de,this.setTextureCube=_e,this.rebindTextures=ze,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iy(i,e){function t(n,s=is){let r,o=Yt.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===eh)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===pi)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===Mi)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===cc)return i.RED;if(n===lc)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===Eo||n===So||n===wo||n===bo)if(o===sn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===xc||n===yc||n===_c||n===vc||n===To||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===xc)return o===sn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_c)return r.COMPRESSED_R11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===To)return r.COMPRESSED_RG11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ec||n===Sc||n===wc||n===bc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ec)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Oc||n===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fc)return o===sn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===Hc||n===Ao||n===kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ry=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:sy,fragmentShader:ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends Oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,m=null,h=null,u=null,_=null,T=typeof XRWebGLBinding!="undefined",y=new Dh,g={},M=t.getContextAttributes(),I=null,w=null,b=[],R=[],F=new ht,E=null,O=null,W=new Hn;W.viewport=new cn;let J=new Hn;J.viewport=new cn;let $=[W,J],ee=new Ka,z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let xe=b[ge];return xe===void 0&&(xe=new ur,b[ge]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ge){let xe=b[ge];return xe===void 0&&(xe=new ur,b[ge]=xe),xe.getGripSpace()},this.getHand=function(ge){let xe=b[ge];return xe===void 0&&(xe=new ur,b[ge]=xe),xe.getHandSpace()};function re(ge){let xe=R.indexOf(ge.inputSource);if(xe===-1)return;let Ce=b[xe];Ce!==void 0&&(Ce.update(ge.inputSource,ge.frame,l||o),Ce.dispatchEvent({type:ge.type,data:ge.inputSource}))}function ie(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",me);for(let ge=0;ge<b.length;ge++){let xe=R[ge];xe!==null&&(R[ge]=null,b[ge].disconnect(xe))}z=null,Q=null,y.reset();for(let ge in g)delete g[ge];if(e.setRenderTarget(I),u=null,h=null,m=null,s=null,w=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),O!==null){let ge=O.camera;ge.fov=O.fov,ge.zoom=O.zoom,ge.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ge){r=ge,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){a=ge,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ge){l=ge},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ge){if(s=ge,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",me),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,je=null,Ke=null;M.depth&&(Ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=M.stencil?Es:Fi,je=M.stencil?Er:Li);let Mt={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Mt),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Kn(h.textureWidth,h.textureHeight,{format:Mi,type:ri,depthTexture:new ki(h.textureWidth,h.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new Kn(u.framebufferWidth,u.framebufferHeight,{format:Mi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function me(ge){for(let xe=0;xe<ge.removed.length;xe++){let Ce=ge.removed[xe],je=R.indexOf(Ce);je>=0&&(R[je]=null,b[je].disconnect(Ce))}for(let xe=0;xe<ge.added.length;xe++){let Ce=ge.added[xe],je=R.indexOf(Ce);if(je===-1){for(let Mt=0;Mt<b.length;Mt++)if(Mt>=R.length){R.push(Ce),je=Mt;break}else if(R[Mt]===null){R[Mt]=Ce,je=Mt;break}if(je===-1)break}let Ke=b[je];Ke&&Ke.connect(Ce)}}let he=new N,de=new N;function _e(ge,xe,Ce){he.setFromMatrixPosition(xe.matrixWorld),de.setFromMatrixPosition(Ce.matrixWorld);let je=he.distanceTo(de),Ke=xe.projectionMatrix.elements,Mt=Ce.projectionMatrix.elements,Dt=Ke[14]/(Ke[10]-1),_t=Ke[14]/(Ke[10]+1),ze=(Ke[9]+1)/Ke[5],ce=(Ke[9]-1)/Ke[5],le=(Ke[8]-1)/Ke[0],Me=(Mt[8]+1)/Mt[0],Te=Dt*le,pe=Dt*Me,ve=je/(-le+Me),Pe=ve*-le;if(xe.matrixWorld.decompose(ge.position,ge.quaternion,ge.scale),ge.translateX(Pe),ge.translateZ(ve),ge.matrixWorld.compose(ge.position,ge.quaternion,ge.scale),ge.matrixWorldInverse.copy(ge.matrixWorld).invert(),Ke[10]===-1)ge.projectionMatrix.copy(xe.projectionMatrix),ge.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{let V=Dt+ve,it=_t+ve,Ee=Te-Pe,U=pe+(je-Pe),p=ze*_t/it*V,X=ce*_t/it*V;ge.projectionMatrix.makePerspective(Ee,U,p,X,V,it),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert()}}function nt(ge,xe){xe===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(xe.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(s===null)return;let xe=ge.near,Ce=ge.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),ee.near=J.near=W.near=xe,ee.far=J.far=W.far=Ce,(z!==ee.near||Q!==ee.far)&&(s.updateRenderState({depthNear:ee.near,depthFar:ee.far}),z=ee.near,Q=ee.far),ee.layers.mask=ge.layers.mask|6,W.layers.mask=ee.layers.mask&-5,J.layers.mask=ee.layers.mask&-3;let je=ge.parent,Ke=ee.cameras;nt(ee,je);for(let Mt=0;Mt<Ke.length;Mt++)nt(Ke[Mt],je);Ke.length===2?_e(ee,W,J):ee.projectionMatrix.copy(W.projectionMatrix),O===null&&ge.isPerspectiveCamera&&(O={camera:ge,fov:ge.fov,zoom:ge.zoom}),Je(ge,ee,je)};function Je(ge,xe,Ce){Ce===null?ge.matrix.copy(xe.matrixWorld):(ge.matrix.copy(Ce.matrixWorld),ge.matrix.invert(),ge.matrix.multiply(xe.matrixWorld)),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.updateMatrixWorld(!0),ge.projectionMatrix.copy(xe.projectionMatrix),ge.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ge.isPerspectiveCamera&&(ge.fov=Ps*2*Math.atan(1/ge.projectionMatrix.elements[5]),ge.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(ge){c=ge,h!==null&&(h.fixedFoveation=ge),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ge)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(ge){return g[ge]};let Ht=null;function Ze(ge,xe){if(d=xe.getViewerPose(l||o),_=xe,d!==null){let Ce=d.views;u!==null&&(e.setRenderTargetFramebuffer(w,u.framebuffer),e.setRenderTarget(w));let je=!1;Ce.length!==ee.cameras.length&&(ee.cameras.length=0,je=!0);for(let _t=0;_t<Ce.length;_t++){let ze=Ce[_t],ce=null;if(u!==null)ce=u.getViewport(ze);else{let Me=m.getViewSubImage(h,ze);ce=Me.viewport,_t===0&&(e.setRenderTargetTextures(w,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(w))}let le=$[_t];le===void 0&&(le=new Hn,le.layers.enable(_t),le.viewport=new cn,$[_t]=le),le.matrix.fromArray(ze.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ze.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ce.x,ce.y,ce.width,ce.height),_t===0&&(ee.matrix.copy(le.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),je===!0&&ee.cameras.push(le)}let Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let _t=m.getDepthInformation(Ce[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,s.renderState)}if(Ke&&Ke.includes("camera-access")&&T){e.state.unbindTexture(),m=n.getBinding();for(let _t=0;_t<Ce.length;_t++){let ze=Ce[_t].camera;if(ze){let ce=g[ze];ce||(ce=new io,g[ze]=ce);let le=m.getCameraImage(ze);ce.sourceTexture=le}}}}for(let Ce=0;Ce<b.length;Ce++){let je=R[Ce],Ke=b[Ce];je!==null&&Ke!==void 0&&Ke.update(je,xe,l||o)}Ht&&Ht(ge,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),_=null}let xt=new zd;xt.setAnimationLoop(Ze),this.setAnimationLoop=function(ge){Ht=ge},this.dispose=function(){}}},oy=new vt,Xd=new Lt;Xd.set(-1,0,0,0,1,0,0,0,1);function ay(i,e){function t(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function n(y,g){g.color.getRGB(y.fogColor.value,uh(i)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function s(y,g,M,I,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(y,g):g.isMeshLambertMaterial?(r(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(y,g),m(y,g)):g.isMeshPhongMaterial?(r(y,g),d(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(y,g),h(y,g),g.isMeshPhysicalMaterial&&u(y,g,w)):g.isMeshMatcapMaterial?(r(y,g),_(y,g)):g.isMeshDepthMaterial?r(y,g):g.isMeshDistanceMaterial?(r(y,g),T(y,g)):g.isMeshNormalMaterial?r(y,g):g.isLineBasicMaterial?(o(y,g),g.isLineDashedMaterial&&a(y,g)):g.isPointsMaterial?c(y,g,M,I):g.isSpriteMaterial?l(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,t(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Vn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,t(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Vn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,t(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,t(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);let M=e.get(g),I=M.envMap,w=M.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Xd),y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,y.aoMapTransform))}function o(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform))}function a(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function c(y,g,M,I){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*M,y.scale.value=I*.5,g.map&&(y.map.value=g.map,t(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function l(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,t(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,t(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function m(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function h(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function u(y,g,M){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.retroreflectivity>0&&(y.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=M.texture,y.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,y.specularIntensityMapTransform))}function _(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){let M=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(M.matrixWorld),y.nearDistance.value=M.shadow.camera.near,y.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){let R=b.program;n.uniformBlockBinding(w,R)}function l(w,b){let R=s[w.id];R===void 0&&(y(w),R=d(w),s[w.id]=R,w.addEventListener("dispose",M));let F=b.program;n.updateUBOMapping(w,F);let E=e.render.frame;r[w.id]!==E&&(h(w),r[w.id]=E)}function d(w){let b=m();w.__bindingPointIndex=b;let R=i.createBuffer(),F=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,R),R}function m(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){let b=s[w.id],R=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,O=R.length;E<O;E++){let W=R[E];if(Array.isArray(W))for(let J=0,$=W.length;J<$;J++)u(W[J],E,J,F);else u(W,E,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(w,b,R,F){if(T(w,b,R,F)===!0){let E=w.__offset,O=w.value;if(Array.isArray(O)){let W=0;for(let J=0;J<O.length;J++){let $=O[J],ee=g($);_($,w.__data,W),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(O,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}function _(w,b,R){typeof w=="number"||typeof w=="boolean"?b[0]=w:w.isMatrix3?(b[0]=w.elements[0],b[1]=w.elements[1],b[2]=w.elements[2],b[3]=0,b[4]=w.elements[3],b[5]=w.elements[4],b[6]=w.elements[5],b[7]=0,b[8]=w.elements[6],b[9]=w.elements[7],b[10]=w.elements[8],b[11]=0):ArrayBuffer.isView(w)?b.set(new w.constructor(w.buffer,w.byteOffset,b.length)):w.toArray(b,R)}function T(w,b,R,F){let E=w.value,O=b+"_"+R;if(F[O]===void 0)return typeof E=="number"||typeof E=="boolean"?F[O]=E:ArrayBuffer.isView(E)?F[O]=E.slice():F[O]=E.clone(),!0;{let W=F[O];if(typeof E=="number"||typeof E=="boolean"){if(W!==E)return F[O]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(W.equals(E)===!1)return W.copy(E),!0}}return!1}function y(w){let b=w.uniforms,R=0,F=16;for(let O=0,W=b.length;O<W;O++){let J=Array.isArray(b[O])?b[O]:[b[O]];for(let $=0,ee=J.length;$<ee;$++){let z=J[$],Q=Array.isArray(z.value)?z.value:[z.value];for(let re=0,ie=Q.length;re<ie;re++){let me=Q[re],he=g(me),de=R%F,_e=de%he.boundary,nt=de+_e;R+=_e,nt!==0&&F-nt<he.storage&&(R+=F-nt),z.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=R,R+=he.storage}}}let E=R%F;return E>0&&(R+=F-E),w.__size=R,w.__cache={},this}function g(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(b.boundary=16,b.storage=w.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",w),b}function M(w){let b=w.target;b.removeEventListener("dispose",M);let R=o.indexOf(b.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function I(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:I}}var ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function hy(){return qi===null&&(qi=new eo(ly,16,16,Ss,pi),qi.name="DFG_LUT",qi.minFilter=Xn,qi.magFilter=Xn,qi.wrapS=Ui,qi.wrapT=Ui,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var Zc=class{constructor(e={}){let{canvas:t=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:u=ri}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let T=u,y=new Set([uc,hc,lc]),g=new Set([ri,Li,Mr,Er,oc,ac]),M=new Uint32Array(4),I=new Int32Array(4),w=new N,b=null,R=null,F=[],E=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,J=!1,$=null,ee=null,z=null,Q=null;this._outputColorSpace=zn;let re=0,ie=0,me=null,he=-1,de=null,_e=new cn,nt=new cn,Je=null,Ht=new ct(0),Ze=0,xt=t.width,ge=t.height,xe=1,Ce=null,je=null,Ke=new cn(0,0,xt,ge),Mt=new cn(0,0,xt,ge),Dt=!1,_t=new fr,ze=!1,ce=!1,le=new vt,Me=new N,Te=new cn,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function Pe(){return me===null?xe:1}let V=n;function it(x,S){return t.getContext(x,S)}let Ee,U,p,X,K,j,ae,ue,te,q,we,Oe,Ne,ke,Ge,st,be,Y,Ae,ye,Ve,Ye,Re;try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",yn,!1),V===null){let S="webgl2";if(V=it(S,x),V===null)throw it(S)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(x){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),It("WebGLRenderer: "+x.message),x}function Xe(){Ee=new xg(V),Ee.init(),Ve=new iy(V,Ee),U=new ag(V,Ee,e,Ve),p=new ty(V,Ee),U.reversedDepthBuffer&&h&&p.buffers.depth.setReversed(!0),ee=V.createFramebuffer(),z=V.createFramebuffer(),Q=V.createFramebuffer(),X=new vg(V),K=new kx,j=new ny(V,Ee,p,K,U,Ve,X),ae=new gg(W),ue=new E0(V),Ye=new rg(V,ue),te=new yg(V,ue,X,Ye),q=new Eg(V,te,ue,Ye,X),Y=new Mg(V,U,j),Ge=new cg(K),we=new Hx(W,ae,Ee,U,Ye,Ge),Oe=new ay(W,K),Ne=new Vx,ke=new Jx(Ee),be=new sg(W,ae,p,q,_,c),st=new ey(W,q,U),Re=new cy(V,X,U,p),Ae=new og(V,Ee,X),ye=new _g(V,Ee,X),X.programs=we.programs,W.capabilities=U,W.extensions=Ee,W.properties=K,W.renderLists=Ne,W.shadowMap=st,W.state=p,W.info=X}T!==ri&&(O=new wg(T,t.width,t.height,a,s,r));let lt=new Nh(W,V);this.xr=lt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let x=Ee.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ee.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(x){x!==void 0&&(xe=x,this.setSize(xt,ge,!1))},this.getSize=function(x){return x.set(xt,ge)},this.setSize=function(x,S,B=!0){if(lt.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=x,ge=S,t.width=Math.floor(x*xe),t.height=Math.floor(S*xe),B===!0&&(t.style.width=x+"px",t.style.height=S+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,x,S)},this.getDrawingBufferSize=function(x){return x.set(xt*xe,ge*xe).floor()},this.setDrawingBufferSize=function(x,S,B){xt=x,ge=S,xe=B,t.width=Math.floor(x*B),t.height=Math.floor(S*B),this.setViewport(0,0,x,S)},this.setEffects=function(x){if(T===ri){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let S=0;S<x.length;S++)if(x[S].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(_e)},this.getViewport=function(x){return x.copy(Ke)},this.setViewport=function(x,S,B,H){x.isVector4?Ke.set(x.x,x.y,x.z,x.w):Ke.set(x,S,B,H),p.viewport(_e.copy(Ke).multiplyScalar(xe).round())},this.getScissor=function(x){return x.copy(Mt)},this.setScissor=function(x,S,B,H){x.isVector4?Mt.set(x.x,x.y,x.z,x.w):Mt.set(x,S,B,H),p.scissor(nt.copy(Mt).multiplyScalar(xe).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(x){p.setScissorTest(Dt=x)},this.setOpaqueSort=function(x){Ce=x},this.setTransparentSort=function(x){je=x},this.getClearColor=function(x){return x.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(x=!0,S=!0,B=!0){let H=0;if(x){let G=!1;if(me!==null){let fe=me.texture.format;G=y.has(fe)}if(G){let fe=me.texture.type,Ie=g.has(fe),Se=be.getClearColor(),Ue=be.getClearAlpha(),He=Se.r,dt=Se.g,ft=Se.b;Ie?(M[0]=He,M[1]=dt,M[2]=ft,M[3]=Ue,V.clearBufferuiv(V.COLOR,0,M)):(I[0]=He,I[1]=dt,I[2]=ft,I[3]=Ue,V.clearBufferiv(V.COLOR,0,I))}else H|=V.COLOR_BUFFER_BIT}S&&(H|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(H|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&V.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),$=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),be.dispose(),Ne.dispose(),ke.dispose(),K.dispose(),ae.dispose(),q.dispose(),Ye.dispose(),Re.dispose(),we.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Yn),lt.removeEventListener("sessionend",Vt),rt.stop()};function ut(x){x.preventDefault(),ah("WebGLRenderer: Context Lost."),J=!0}function Nt(){ah("WebGLRenderer: Context Restored."),J=!1;let x=X.autoReset,S=st.enabled,B=st.autoUpdate,H=st.needsUpdate,G=st.type;Xe(),X.autoReset=x,st.enabled=S,st.autoUpdate=B,st.needsUpdate=H,st.type=G}function yn(x){It("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){let S=x.target;S.removeEventListener("dispose",se),Qt(S)}function Qt(x){$t(x),K.remove(x)}function $t(x){let S=K.get(x).programs;S!==void 0&&(S.forEach(function(B){we.releaseProgram(B)}),x.isShaderMaterial&&we.releaseShaderCache(x))}this.renderBufferDirect=function(x,S,B,H,G,fe){S===null&&(S=pe);let Ie=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=v(x,S,B,H,G);p.setMaterial(H,Ie);let Ue=B.index,He=1;if(H.wireframe===!0){if(Ue=te.getWireframeAttribute(B),Ue===void 0)return;He=2}let dt=B.drawRange,ft=B.attributes.position,Qe=dt.start*He,Et=(dt.start+dt.count)*He;fe!==null&&(Qe=Math.max(Qe,fe.start*He),Et=Math.min(Et,(fe.start+fe.count)*He)),Ue!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,Ue.count)):ft!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,ft.count));let et=Et-Qe;if(et<0||et===1/0)return;Ye.setup(G,H,Se,B,Ue);let Rt,pt=Ae;if(Ue!==null&&(Rt=ue.get(Ue),pt=ye,pt.setIndex(Rt)),G.isMesh)H.wireframe===!0?(p.setLineWidth(H.wireframeLinewidth*Pe()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(G.isLine){let un=H.linewidth;un===void 0&&(un=1),p.setLineWidth(un*Pe()),G.isLineSegments?pt.setMode(V.LINES):G.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else G.isPoints?pt.setMode(V.POINTS):G.isSprite&&pt.setMode(V.TRIANGLES);if(G.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let un=G._multiDrawStarts,at=G._multiDrawCounts,bn=G._multiDrawCount,Wt=Ue?ue.get(Ue).bytesPerElement:1,Wn=K.get(H).currentProgram.getUniforms();for(let Dn=0;Dn<bn;Dn++)Wn.setValue(V,"_gl_DrawID",Dn),pt.render(un[Dn]/Wt,at[Dn])}else if(G.isInstancedMesh)pt.renderInstances(Qe,et,G.count);else if(B.isInstancedBufferGeometry){let un=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,at=Math.min(B.instanceCount,un);pt.renderInstances(Qe,et,at)}else pt.render(Qe,et)};function oi(x,S,B,H){$!==null&&x.isNodeMaterial&&$.setObject(H,x),ze===!0&&Ge.setState(x,B,!1),x.transparent===!0&&x.side===wn&&x.forceSinglePass===!1?(x.side=Vn,x.needsUpdate=!0,Kt(x,S,H),x.side=Wi,x.needsUpdate=!0,Kt(x,S,H),x.side=wn):Kt(x,S,H)}this.compile=function(x,S,B=null){B===null&&(B=x),$!==null&&$.renderStart(x,S,B),R=ke.get(B),R.init(S),E.push(R),B.traverseVisible(function(G){G.isLight&&G.layers.test(S.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),x!==B&&x.traverseVisible(function(G){G.isLight&&G.layers.test(S.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),R.setupLights(),$!==null&&$.updateLights(R.state.lightsArray),ce=this.localClippingEnabled,ze=Ge.init(this.clippingPlanes,ce),ze===!0&&Ge.setGlobalState(this.clippingPlanes,S),$!==null&&st.render(R.state.shadowsArray,B,S);let H=new Set;return x.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let fe=G.material;if(fe)if(Array.isArray(fe))for(let Ie=0;Ie<fe.length;Ie++){let Se=fe[Ie];oi(Se,B,S,G),H.add(Se)}else oi(fe,B,S,G),H.add(fe)}),R=E.pop(),$!==null&&$.renderEnd(),H},this.compileAsync=function(x,S,B=null){let H=this.compile(x,S,B);return new Promise(G=>{function fe(){if(H.forEach(function(Ie){let Ue=K.get(Ie).currentProgram;(Ue===void 0||Ue.isReady())&&H.delete(Ie)}),H.size===0){G(x);return}setTimeout(fe,10)}Ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let _n=null;function ai(x){_n&&_n(x)}function Yn(){rt.stop()}function Vt(){rt.start()}let rt=new zd;rt.setAnimationLoop(ai),typeof self!="undefined"&&rt.setContext(self),this.setAnimationLoop=function(x){_n=x,lt.setAnimationLoop(x),x===null?rt.stop():rt.start()},lt.addEventListener("sessionstart",Yn),lt.addEventListener("sessionend",Vt),this.render=function(x,S){if(S!==void 0&&S.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;$!==null&&$.renderStart(x,S);let B=lt.enabled===!0&&lt.isPresenting===!0,H=O!==null&&(me===null||B)&&O.begin(W,me);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(S),S=lt.getCamera()),x.isScene===!0&&x.onBeforeRender(W,x,S,me),R=ke.get(x,E.length),R.init(S),R.state.textureUnits=j.getTextureUnits(),E.push(R),le.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),_t.setFromProjectionMatrix(le,Ri,S.reversedDepth),ce=this.localClippingEnabled,ze=Ge.init(this.clippingPlanes,ce),b=Ne.get(x,F.length),b.init(),F.push(b),lt.enabled===!0&&lt.isPresenting===!0){let Ie=W.xr.getDepthSensingMesh();Ie!==null&&vn(Ie,S,-1/0,W.sortObjects)}vn(x,S,0,W.sortObjects),b.finish(),$!==null&&$.updateLights(R.state.lightsArray),W.sortObjects===!0&&b.sort(Ce,je),ve=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ve&&be.addToRenderList(b,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&Ge.beginShadows();let G=R.state.shadowsArray;if(st.render(G,x,S),ze===!0&&Ge.endShadows(),(H&&O.hasRenderPass())===!1){let Ie=b.opaque,Se=b.transmissive;if(R.setupLights(),S.isArrayCamera){let Ue=S.cameras;if(Se.length>0)for(let He=0,dt=Ue.length;He<dt;He++){let ft=Ue[He];as(Ie,Se,x,ft)}ve&&be.render(x);for(let He=0,dt=Ue.length;He<dt;He++){let ft=Ue[He];mi(b,x,ft,ft.viewport)}}else Se.length>0&&as(Ie,Se,x,S),ve&&be.render(x),mi(b,x,S)}me!==null&&ie===0&&(j.updateMultisampleRenderTarget(me),j.updateRenderTargetMipmap(me)),H&&O.end(W),x.isScene===!0&&x.onAfterRender(W,x,S),Ye.resetDefaultState(),he=-1,de=null,E.pop(),E.length>0?(R=E[E.length-1],j.setTextureUnits(R.state.textureUnits),ze===!0&&Ge.setGlobalState(W.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?b=F[F.length-1]:b=null,$!==null&&$.renderEnd()};function vn(x,S,B,H){if(x.visible===!1)return;if(x.layers.test(S.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(S);else if(x.isLightProbeGrid)R.pushLightProbeGrid(x);else if(x.isLight)R.pushLight(x),x.castShadow&&R.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(_t)){H&&Te.setFromMatrixPosition(x.matrixWorld).applyMatrix4(le);let Ie=q.update(x),Se=x.material;Se.visible&&b.push(x,Ie,Se,B,Te.z,null,S)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(_t))){let Ie=q.update(x),Se=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Te.copy(x.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Te.copy(Ie.boundingSphere.center)),Te.applyMatrix4(x.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){let Ue=Ie.groups;for(let He=0,dt=Ue.length;He<dt;He++){let ft=Ue[He],Qe=Se[ft.materialIndex];Qe&&Qe.visible&&b.push(x,Ie,Qe,B,Te.z,ft,S)}}else Se.visible&&b.push(x,Ie,Se,B,Te.z,null,S)}}let fe=x.children;for(let Ie=0,Se=fe.length;Ie<Se;Ie++)vn(fe[Ie],S,B,H)}function mi(x,S,B,H){let{opaque:G,transmissive:fe,transparent:Ie}=x;R.setupLightsView(B),ze===!0&&Ge.setGlobalState(W.clippingPlanes,B),H&&p.viewport(_e.copy(H)),G.length>0&&Qn(G,S,B),fe.length>0&&Qn(fe,S,B),Ie.length>0&&Qn(Ie,S,B),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function as(x,S,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[H.id]===void 0){let Qe=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[H.id]=new Kn(1,1,{generateMipmaps:!0,type:Qe?pi:ri,minFilter:Ms,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let fe=R.state.transmissionRenderTarget[H.id],Ie=H.viewport||_e;fe.setSize(Ie.z*W.transmissionResolutionScale,Ie.w*W.transmissionResolutionScale);let Se=W.getRenderTarget(),Ue=W.getActiveCubeFace(),He=W.getActiveMipmapLevel();W.setRenderTarget(fe),W.getClearColor(Ht),Ze=W.getClearAlpha(),Ze<1&&W.setClearColor(16777215,.5),W.clear(),ve&&be.render(B);let dt=W.toneMapping;W.toneMapping=Ii;let ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),R.setupLightsView(H),ze===!0&&Ge.setGlobalState(W.clippingPlanes,H),Qn(x,B,H),j.updateMultisampleRenderTarget(fe),j.updateRenderTargetMipmap(fe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,et=S.length;Et<et;Et++){let Rt=S[Et],{object:pt,geometry:un,material:at,group:bn}=Rt;if(at.side===wn&&pt.layers.test(H.layers)){let Wt=at.side;at.side=Vn,at.needsUpdate=!0,cs(pt,B,H,un,at,bn),at.side=Wt,at.needsUpdate=!0,Qe=!0}}Qe===!0&&(j.updateMultisampleRenderTarget(fe),j.updateRenderTargetMipmap(fe))}W.setRenderTarget(Se,Ue,He),W.setClearColor(Ht,Ze),ft!==void 0&&(H.viewport=ft),W.toneMapping=dt}function Qn(x,S,B){let H=S.isScene===!0?S.overrideMaterial:null;for(let G=0,fe=x.length;G<fe;G++){let Ie=x[G],{object:Se,geometry:Ue,group:He}=Ie,dt=Ie.material;dt.allowOverride===!0&&H!==null&&(dt=H),Se.layers.test(B.layers)&&cs(Se,S,B,Ue,dt,He)}}function cs(x,S,B,H,G,fe){$!==null&&G.isNodeMaterial&&$.setObject(x,G),x.onBeforeRender(W,S,B,H,G,fe),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(W,S,B,H,x,fe),G.transparent===!0&&G.side===wn&&G.forceSinglePass===!1?(G.side=Vn,G.needsUpdate=!0,W.renderBufferDirect(B,S,H,G,x,fe),G.side=Wi,G.needsUpdate=!0,W.renderBufferDirect(B,S,H,G,x,fe),G.side=wn):W.renderBufferDirect(B,S,H,G,x,fe),x.onAfterRender(W,S,B,H,G,fe)}function Kt(x,S,B){S.isScene!==!0&&(S=pe);let H=K.get(x),G=R.state.lights,fe=R.state.shadowsArray,Ie=G.state.version,Se=we.getParameters(x,G.state,fe,S,B,R.state.lightProbeGridArray),Ue=we.getProgramCacheKey(Se),He=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?S.environment:null,H.fog=S.fog;let dt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ae.get(x.envMap||H.environment,dt),H.envMapRotation=H.environment!==null&&x.envMap===null?S.environmentRotation:x.envMapRotation,He===void 0&&(x.addEventListener("dispose",se),He=new Map,H.programs=He);let ft=He.get(Ue);if(ft!==void 0){if(H.currentProgram===ft&&H.lightsStateVersion===Ie)return k(x,Se),ft}else Se.uniforms=we.getUniforms(x),$!==null&&x.isNodeMaterial&&$.build(x,B,Se),x.onBeforeCompile(Se,W),ft=we.acquireProgram(Se,Ue),He.set(Ue,ft),H.uniforms=Se.uniforms;let Qe=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Qe.clippingPlanes=Ge.uniform),k(x,Se),H.needsLights=D(x),H.lightsStateVersion=Ie,H.needsLights&&(Qe.ambientLightColor.value=G.state.ambient,Qe.lightProbe.value=G.state.probe,Qe.sunLights.value=G.state.sun,Qe.sunLightShadows.value=G.state.sunShadow,Qe.directionalLights.value=G.state.directional,Qe.directionalLightShadows.value=G.state.directionalShadow,Qe.spotLights.value=G.state.spot,Qe.spotLightShadows.value=G.state.spotShadow,Qe.rectAreaLights.value=G.state.rectArea,Qe.ltc_1.value=G.state.rectAreaLTC1,Qe.ltc_2.value=G.state.rectAreaLTC2,Qe.pointLights.value=G.state.point,Qe.pointLightShadows.value=G.state.pointShadow,Qe.hemisphereLights.value=G.state.hemi,Qe.sunShadowMatrix.value=G.state.sunShadowMatrix,Qe.sunShadowCascade.value=G.state.sunShadowCascade,Qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Qe.spotLightMatrix.value=G.state.spotLightMatrix,Qe.spotLightMap.value=G.state.spotLightMap,Qe.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=R.state.lightProbeGridArray.length>0,H.currentProgram=ft,H.uniformsList=null,ft}function C(x){if(x.uniformsList===null){let S=x.currentProgram.getUniforms();x.uniformsList=Tr.seqWithValue(S.seq,x.uniforms)}return x.uniformsList}function k(x,S){let B=K.get(x);B.outputColorSpace=S.outputColorSpace,B.batching=S.batching,B.batchingColor=S.batchingColor,B.instancing=S.instancing,B.instancingColor=S.instancingColor,B.instancingMorph=S.instancingMorph,B.skinning=S.skinning,B.morphTargets=S.morphTargets,B.morphNormals=S.morphNormals,B.morphColors=S.morphColors,B.morphTargetsCount=S.morphTargetsCount,B.numClippingPlanes=S.numClippingPlanes,B.numIntersection=S.numClipIntersection,B.vertexAlphas=S.vertexAlphas,B.vertexTangents=S.vertexTangents,B.toneMapping=S.toneMapping}function f(x,S){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;w.setFromMatrixPosition(S.matrixWorld);for(let B=0,H=x.length;B<H;B++){let G=x[B];if(G.texture!==null&&G.boundingBox.containsPoint(w))return G}return null}function v(x,S,B,H,G){S.isScene!==!0&&(S=pe),j.resetTextureUnits();let fe=S.fog,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?S.environment:null,Se=me===null?W.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Yt.workingColorSpace,Ue=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,He=ae.get(H.envMap||Ie,Ue),dt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ft=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Qe=!!B.morphAttributes.position,Et=!!B.morphAttributes.normal,et=!!B.morphAttributes.color,Rt=Ii;H.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Rt=W.toneMapping);let pt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,un=pt!==void 0?pt.length:0,at=K.get(H),bn=R.state.lights;if(ze===!0&&(ce===!0||x!==de)){let rn=x===de&&H.id===he;Ge.setState(H,x,rn)}let Wt=!1;H.version===at.__version?(at.needsLights&&at.lightsStateVersion!==bn.state.version||at.outputColorSpace!==Se||G.isBatchedMesh&&at.batching===!1||!G.isBatchedMesh&&at.batching===!0||G.isBatchedMesh&&at.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&at.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&at.instancing===!1||!G.isInstancedMesh&&at.instancing===!0||G.isSkinnedMesh&&at.skinning===!1||!G.isSkinnedMesh&&at.skinning===!0||G.isInstancedMesh&&at.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&at.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&at.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&at.instancingMorph===!1&&G.morphTexture!==null||at.envMap!==He||H.fog===!0&&at.fog!==fe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Ge.numPlanes||at.numIntersection!==Ge.numIntersection)||at.vertexAlphas!==dt||at.vertexTangents!==ft||at.morphTargets!==Qe||at.morphNormals!==Et||at.morphColors!==et||at.toneMapping!==Rt||at.morphTargetsCount!==un||!!at.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Wt=!0):(Wt=!0,at.__version=H.version);let Wn=at.currentProgram;Wt===!0&&(Wn=Kt(H,S,G),$&&H.isNodeMaterial&&$.onUpdateProgram(H,Wn,at));let Dn=!1,ei=!1,ti=!1,Xt=Wn.getUniforms(),pn=at.uniforms;if(p.useProgram(Wn.program)&&(Dn=!0,ei=!0,ti=!0),H.id!==he&&(he=H.id,ei=!0),at.needsLights){let rn=f(R.state.lightProbeGridArray,G);at.lightProbeGrid!==rn&&(at.lightProbeGrid=rn,ei=!0)}if(Dn||de!==x){p.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Xt.setValue(V,"projectionMatrix",x.projectionMatrix),Xt.setValue(V,"viewMatrix",x.matrixWorldInverse);let wi=Xt.map.cameraPosition;wi!==void 0&&wi.setValue(V,Me.setFromMatrixPosition(x.matrixWorld)),U.logarithmicDepthBuffer&&Xt.setValue(V,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Xt.setValue(V,"isOrthographic",x.isOrthographicCamera===!0),de!==x&&(de=x,ei=!0,ti=!0)}if(at.needsLights&&(bn.state.sunShadowMap.length>0&&Xt.setValue(V,"sunShadowMap",bn.state.sunShadowMap,j),bn.state.directionalShadowMap.length>0&&Xt.setValue(V,"directionalShadowMap",bn.state.directionalShadowMap,j),bn.state.spotShadowMap.length>0&&Xt.setValue(V,"spotShadowMap",bn.state.spotShadowMap,j),bn.state.pointShadowMap.length>0&&Xt.setValue(V,"pointShadowMap",bn.state.pointShadowMap,j)),G.isSkinnedMesh){Xt.setOptional(V,G,"bindMatrix"),Xt.setOptional(V,G,"bindMatrixInverse");let rn=G.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Xt.setValue(V,"boneTexture",rn.boneTexture,j))}G.isBatchedMesh&&(Xt.setOptional(V,G,"batchingTexture"),Xt.setValue(V,"batchingTexture",G._matricesTexture,j),Xt.setOptional(V,G,"batchingIdTexture"),Xt.setValue(V,"batchingIdTexture",G._indirectTexture,j),Xt.setOptional(V,G,"batchingColorTexture"),G._colorsTexture!==null&&Xt.setValue(V,"batchingColorTexture",G._colorsTexture,j));let Si=B.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Y.update(G,B,Wn),(ei||at.receiveShadow!==G.receiveShadow)&&(at.receiveShadow=G.receiveShadow,Xt.setValue(V,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&S.environment!==null&&(pn.envMapIntensity.value=S.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=hy()),ei){if(Xt.setValue(V,"toneMappingExposure",W.toneMappingExposure),at.needsLights&&A(pn,ti),fe&&H.fog===!0&&Oe.refreshFogUniforms(pn,fe),Oe.refreshMaterialUniforms(pn,H,xe,ge,R.state.transmissionRenderTarget[x.id]),at.needsLights&&at.lightProbeGrid){let rn=at.lightProbeGrid;pn.probesSH.value=rn.texture,pn.probesMin.value.copy(rn.boundingBox.min),pn.probesMax.value.copy(rn.boundingBox.max),pn.probesResolution.value.copy(rn.resolution)}Tr.upload(V,C(at),pn,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tr.upload(V,C(at),pn,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Xt.setValue(V,"center",G.center),Xt.setValue(V,"modelViewMatrix",G.modelViewMatrix),Xt.setValue(V,"normalMatrix",G.normalMatrix),Xt.setValue(V,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let rn=H.uniformsGroups;for(let wi=0,Ji=rn.length;wi<Ji;wi++){let Cr=rn[wi];Re.update(Cr,Wn),Re.bind(Cr,Wn)}}return Wn}function A(x,S){x.ambientLightColor.needsUpdate=S,x.lightProbe.needsUpdate=S,x.sunLights.needsUpdate=S,x.sunLightShadows.needsUpdate=S,x.directionalLights.needsUpdate=S,x.directionalLightShadows.needsUpdate=S,x.pointLights.needsUpdate=S,x.pointLightShadows.needsUpdate=S,x.spotLights.needsUpdate=S,x.spotLightShadows.needsUpdate=S,x.rectAreaLights.needsUpdate=S,x.hemisphereLights.needsUpdate=S}function D(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(x,S,B){let H=K.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),K.get(x.texture).__webglTexture=S,K.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,S){let B=K.get(x);B.__webglFramebuffer=S,B.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(x,S=0,B=0){me=x,re=S,ie=B;let H=null,G=!1,fe=!1;if(x){let Se=K.get(x);if(Se.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(V.FRAMEBUFFER,Se.__webglFramebuffer),_e.copy(x.viewport),nt.copy(x.scissor),Je=x.scissorTest,p.viewport(_e),p.scissor(nt),p.setScissorTest(Je),he=-1;return}else if(Se.__webglFramebuffer===void 0)j.setupRenderTarget(x);else if(Se.__hasExternalTextures)j.rebindTextures(x,K.get(x.texture).__webglTexture,K.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let dt=x.depthTexture;if(Se.__boundDepthTexture!==dt){if(dt!==null&&K.has(dt)&&(x.width!==dt.image.width||x.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(x)}}let Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);let He=K.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(He[S])?H=He[S][B]:H=He[S],G=!0):x.samples>0&&j.useMultisampledRTT(x)===!1?H=K.get(x).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[B]:H=He,_e.copy(x.viewport),nt.copy(x.scissor),Je=x.scissorTest}else _e.copy(Ke).multiplyScalar(xe).floor(),nt.copy(Mt).multiplyScalar(xe).floor(),Je=Dt;if(B!==0&&(H=ee),p.bindFramebuffer(V.FRAMEBUFFER,H)&&p.drawBuffers(x,H),p.viewport(_e),p.scissor(nt),p.setScissorTest(Je),G){let Se=K.get(x.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+S,Se.__webglTexture,B)}else if(fe){let Se=S;for(let Ue=0;Ue<x.textures.length;Ue++){let He=K.get(x.textures[Ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ue,He.__webglTexture,B,Se)}}else if(x!==null&&B!==0){let Se=K.get(x.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Se.__webglTexture,B)}he=-1};function Z(x){let S=K.get(x);return(S.__readFormat!==x.format||S.__readType!==x.type)&&(S.__readFormat=x.format,S.__readType=x.type,S.__formatReadable=U.textureFormatReadable(x.format),S.__typeReadable=U.textureTypeReadable(x.type)),S}this.readRenderTargetPixels=function(x,S,B,H,G,fe,Ie,Se=0){if(!(x&&x.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=K.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue){p.bindFramebuffer(V.FRAMEBUFFER,Ue);try{let He=x.textures[Se],dt=He.format,ft=He.type;x.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Se);let Qe=Z(He);if(Qe.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=x.width-H&&B>=0&&B<=x.height-G&&V.readPixels(S,B,H,G,Ve.convert(dt),Ve.convert(ft),fe)}finally{let He=me!==null?K.get(me).__webglFramebuffer:null;p.bindFramebuffer(V.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(x,S,B,H,G,fe,Ie,Se=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=K.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ue=Ue[Ie]),Ue)if(S>=0&&S<=x.width-H&&B>=0&&B<=x.height-G){p.bindFramebuffer(V.FRAMEBUFFER,Ue);let He=x.textures[Se],dt=He.format,ft=He.type;x.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Se);let Qe=Z(He);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Et),V.bufferData(V.PIXEL_PACK_BUFFER,fe.byteLength,V.STREAM_READ),V.readPixels(S,B,H,G,Ve.convert(dt),Ve.convert(ft),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let et=me!==null?K.get(me).__webglFramebuffer:null;p.bindFramebuffer(V.FRAMEBUFFER,et);let Rt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await fd(V,Rt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,fe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Et),V.deleteSync(Rt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,S=null,B=0){let H=Math.pow(2,-B),G=Math.floor(x.image.width*H),fe=Math.floor(x.image.height*H),Ie=S!==null?S.x:0,Se=S!==null?S.y:0;j.setTexture2D(x,0),V.copyTexSubImage2D(V.TEXTURE_2D,B,0,0,Ie,Se,G,fe),p.unbindTexture()},this.copyTextureToTexture=function(x,S,B=null,H=null,G=0,fe=0){let Ie,Se,Ue,He,dt,ft,Qe,Et,et,Rt=x.isCompressedTexture?x.mipmaps[fe]:x.image;if(B!==null)Ie=B.max.x-B.min.x,Se=B.max.y-B.min.y,Ue=B.isBox3?B.max.z-B.min.z:1,He=B.min.x,dt=B.min.y,ft=B.isBox3?B.min.z:0;else{let pn=Math.pow(2,-G);Ie=Math.floor(Rt.width*pn),Se=Math.floor(Rt.height*pn),x.isDataArrayTexture?Ue=Rt.depth:x.isData3DTexture?Ue=Math.floor(Rt.depth*pn):Ue=1,He=0,dt=0,ft=0}H!==null?(Qe=H.x,Et=H.y,et=H.z):(Qe=0,Et=0,et=0);let pt=Ve.convert(S.format),un=Ve.convert(S.type),at;S.isData3DTexture?(j.setTexture3D(S,0),at=V.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(j.setTexture2DArray(S,0),at=V.TEXTURE_2D_ARRAY):(j.setTexture2D(S,0),at=V.TEXTURE_2D),p.activeTexture(V.TEXTURE0),p.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,S.flipY),p.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),p.pixelStorei(V.UNPACK_ALIGNMENT,S.unpackAlignment);let bn=p.getParameter(V.UNPACK_ROW_LENGTH),Wt=p.getParameter(V.UNPACK_IMAGE_HEIGHT),Wn=p.getParameter(V.UNPACK_SKIP_PIXELS),Dn=p.getParameter(V.UNPACK_SKIP_ROWS),ei=p.getParameter(V.UNPACK_SKIP_IMAGES);p.pixelStorei(V.UNPACK_ROW_LENGTH,Rt.width),p.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt.height),p.pixelStorei(V.UNPACK_SKIP_PIXELS,He),p.pixelStorei(V.UNPACK_SKIP_ROWS,dt),p.pixelStorei(V.UNPACK_SKIP_IMAGES,ft);let ti=x.isDataArrayTexture||x.isData3DTexture,Xt=S.isDataArrayTexture||S.isData3DTexture;if(x.isDepthTexture){let pn=K.get(x),Si=K.get(S),rn=K.get(pn.__renderTarget),wi=K.get(Si.__renderTarget);p.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),p.bindFramebuffer(V.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ji=0;Ji<Ue;Ji++)ti&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(x).__webglTexture,G,ft+Ji),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,K.get(S).__webglTexture,fe,et+Ji)),V.blitFramebuffer(He,dt,Ie,Se,Qe,Et,Ie,Se,V.DEPTH_BUFFER_BIT,V.NEAREST);p.bindFramebuffer(V.READ_FRAMEBUFFER,null),p.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(G!==0||x.isRenderTargetTexture||K.has(x)){let pn=K.get(x),Si=K.get(S);p.bindFramebuffer(V.READ_FRAMEBUFFER,z),p.bindFramebuffer(V.DRAW_FRAMEBUFFER,Q);for(let rn=0;rn<Ue;rn++)ti?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,G,ft+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,G),Xt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Si.__webglTexture,fe,et+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Si.__webglTexture,fe),G!==0?V.blitFramebuffer(He,dt,Ie,Se,Qe,Et,Ie,Se,V.COLOR_BUFFER_BIT,V.NEAREST):Xt?V.copyTexSubImage3D(at,fe,Qe,Et,et+rn,He,dt,Ie,Se):V.copyTexSubImage2D(at,fe,Qe,Et,He,dt,Ie,Se);p.bindFramebuffer(V.READ_FRAMEBUFFER,null),p.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Xt?x.isDataTexture||x.isData3DTexture?V.texSubImage3D(at,fe,Qe,Et,et,Ie,Se,Ue,pt,un,Rt.data):S.isCompressedArrayTexture?V.compressedTexSubImage3D(at,fe,Qe,Et,et,Ie,Se,Ue,pt,Rt.data):V.texSubImage3D(at,fe,Qe,Et,et,Ie,Se,Ue,pt,un,Rt):x.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,fe,Qe,Et,Ie,Se,pt,un,Rt.data):x.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,fe,Qe,Et,Rt.width,Rt.height,pt,Rt.data):V.texSubImage2D(V.TEXTURE_2D,fe,Qe,Et,Ie,Se,pt,un,Rt);p.pixelStorei(V.UNPACK_ROW_LENGTH,bn),p.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt),p.pixelStorei(V.UNPACK_SKIP_PIXELS,Wn),p.pixelStorei(V.UNPACK_SKIP_ROWS,Dn),p.pixelStorei(V.UNPACK_SKIP_IMAGES,ei),fe===0&&S.generateMipmaps&&V.generateMipmap(at),p.unbindTexture()},this.initRenderTarget=function(x){K.get(x).__webglFramebuffer===void 0&&j.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?j.setTextureCube(x,0):x.isData3DTexture?j.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?j.setTexture2DArray(x,0):j.setTexture2D(x,0),p.unbindTexture()},this.resetState=function(){re=0,ie=0,me=null,p.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}};var qd=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},ss=(i,e,t)=>{let n=Math.sin(i*127.1+e*269.5+t*311.7)*43758.5453;return n-Math.floor(n)},dn=(i,e,t)=>{let n=Math.floor(i),s=Math.floor(e),r=Math.floor(t),o=i-n,a=e-s,c=t-r,l=o*o*(3-2*o),d=a*a*(3-2*a),m=c*c*(3-2*c),h=(u,_,T)=>u+(_-u)*T;return h(h(h(ss(n,s,r),ss(n+1,s,r),l),h(ss(n,s+1,r),ss(n+1,s+1,r),l),d),h(h(ss(n,s,r+1),ss(n+1,s,r+1),l),h(ss(n,s+1,r+1),ss(n+1,s+1,r+1),l),d),m)},Rr={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},ln=(i,e)=>(e.kind=i,e),nn=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(e,{m:t=null,color:n=()=>[1,1,1],tip:s=()=>0,flat:r=!1,normal:o=null,flip:a=!1,mat:c=null}={}){var T;let l=e.index?e.toNonIndexed():e.clone();if(t&&l.applyMatrix4(t),(r||!l.attributes.normal)&&l.computeVertexNormals(),a){for(let g of["position","normal","uv"]){let M=l.attributes[g];if(!M)continue;let I=M.array,w=M.itemSize;for(let b=0;b<M.count;b+=3)for(let R=0;R<w;R++){let F=I[(b+1)*w+R];I[(b+1)*w+R]=I[(b+2)*w+R],I[(b+2)*w+R]=F}}let y=l.attributes.normal.array;for(let g=0;g<y.length;g++)y[g]=-y[g]}let d=l.attributes.position,m=l.attributes.normal,h=c;if(h===null){let y=n.kind||"plain";if(y==="wood"||y==="log"){l.computeBoundingBox();let g=new N;l.boundingBox.getSize(g);let M=g.x>=g.y&&g.x>=g.z?"X":g.z>=g.y?"Z":"Y";h=y==="log"?M==="Z"?Rr.logZ:Rr.logX:Rr["wood"+M]}else h=(T=Rr[y])!=null?T:0}let u=new N,_=new N;for(let y=0;y<d.count;y++){u.fromBufferAttribute(d,y),_.fromBufferAttribute(m,y),o&&o(u,_,y);let g=n(u,_,y);this.p.push(u.x,u.y,u.z),this.n.push(_.x,_.y,_.z),this.c.push(g[0],g[1],g[2]),this.t.push(s(u,_)),this.k.push(h)}return this}tris(e,t,n=()=>0,s=null){var r;for(let o=0;o<e.length;o+=3){let a=new N(...e[o]),c=new N(...e[o+1]),l=new N(...e[o+2]),d=s?s.clone():new N().subVectors(l,c).cross(new N().subVectors(a,c)).normalize(),m=(r=Rr[t.kind])!=null?r:t.kind==="wood"?Rr.woodY:0;[a,c,l].forEach(h=>{let u=t(h);this.p.push(h.x,h.y,h.z),this.n.push(d.x,d.y,d.z),this.c.push(u[0],u[1],u[2]),this.t.push(n(h)),this.k.push(m)})}return this}geometry(){let e=new qt;return e.setAttribute("position",new Ct(this.p,3)),e.setAttribute("normal",new Ct(this.n,3)),e.setAttribute("color",new Ct(this.c,3)),e.setAttribute("aTip",new Ct(this.t,1)),e.setAttribute("aMat",new Ct(this.k,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},Le=(i,e,t,n=.02,s=2)=>{let r=2*s+1,o=new De(1,1,1,r,r,r),a=[i/2,e/2,t/2],c=Math.min(n,i/2-1e-4,e/2-1e-4,t/2-1e-4),l=o.attributes.position,d=o.attributes.normal,m=[0,0,0],h=[0,0,0];for(let u=0;u<l.count;u++){for(let b=0;b<3;b++){let R=Math.round((l.getComponent(u,b)+.5)*r),F=a[b];m[b]=R<=s?-F+c*(R/s):R>=r-s?F-c*((r-R)/s):0,R>s&&R<r-s&&(m[b]=0),h[b]=Math.max(-(F-c),Math.min(F-c,m[b]))}let _=m[0]-h[0],T=m[1]-h[1],y=m[2]-h[2],g=d.getX(u),M=d.getY(u),I=d.getZ(u);Math.abs(g)>.5&&(_=Math.sign(g)*Math.max(Math.abs(_),1e-6)),Math.abs(M)>.5&&(T=Math.sign(M)*Math.max(Math.abs(T),1e-6)),Math.abs(I)>.5&&(y=Math.sign(I)*Math.max(Math.abs(y),1e-6));let w=Math.hypot(_,T,y)||1;l.setXYZ(u,h[0]+_/w*c,h[1]+T/w*c,h[2]+y/w*c),d.setXYZ(u,_/w,T/w,y/w)}return o},hn=(i,e=10)=>new oo(i.map(([t,n])=>new ht(Math.max(5e-4,t),n)),e),L=(i=0,e=0,t=0,n=0,s=0,r=0,o=1,a=o,c=o)=>new vt().compose(new N(i,e,t),new Ut().setFromEuler(new Sn(n,s,r,"YXZ")),new N(o,a,c)),qn=(i,e,{sway:t=0,side:n=Wi,color:s=16777215,snowBias:r=0,sink:o=0,softBack:a=!1,crisp:c=!1,snowMask:l=!1,grain:d=0,rich:m=!1,indoor:h=!1,tree:u=!1}={})=>{let _=new Ln({vertexColors:!0,side:n,color:s});if(_.onBeforeCompile=T=>{Object.assign(T.uniforms,i,{uShow:e}),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost;
        attribute float aTip; attribute float aMat;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj; varying float vMat; varying vec3 vObjN;
        ${u?"attribute float aHash; uniform float uBare; varying float vHash; varying float vLeaf;":""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vObj = position; vMat = aMat; vObjN = objectNormal;
        mat4 cIM = mat4(1.0);
        #ifdef USE_INSTANCING
          cIM = instanceMatrix;
        #endif
        vec4 cIP = modelMatrix * cIM * vec4(0.0, 0.0, 0.0, 1.0);
        vec4 cWP = modelMatrix * cIM * vec4(position, 1.0);
        mat3 cM3 = mat3(cIM);
        vec3 cWN = objectNormal / vec3(dot(cM3[0], cM3[0]), dot(cM3[1], cM3[1]), dot(cM3[2], cM3[2]));   // undo stretching
        cWN = normalize(mat3(modelMatrix) * (cM3 * cWN));
        float patchy = 0.75 + 0.25 * sin(cWP.x * 0.37 + sin(cWP.z * 0.23) * 2.0) * sin(cWP.z * 0.41);
        vSnowA = uSnowCover * smoothstep(${(.2-r).toFixed(3)}, ${(.7-r).toFixed(3)}, cWN.y) * patchy;
        ${l?"vSnowA *= aTip;":""}
        vMossA = uMoss * smoothstep(0.0, 0.8, cWN.y) * (0.6 + 0.4 * patchy)${l?" * aTip":""};
        vTipA = aTip * uFrost;
        ${t?`float sd = cIP.x * 0.071 + cIP.z * 0.053;
        float sw = (sin(uTime * 1.3 + sd) + 0.45 * sin(uTime * 3.1 + sd * 1.7)) * ${t.toFixed(4)} * position.y * position.y;
        transformed.x += sw; transformed.z += sw * 0.7;`:""}
        ${u?`vHash = aHash; vLeaf = step(12.5, aMat);
        // autumn: some trees drop all their needles (only trunk and branches stay)
        float bare = step(aHash, uBare) * vLeaf;
        transformed.xz *= 1.0 - bare * 0.985;`:""}
        ${o?`transformed.y -= (1.0 - uShow) * ${o.toFixed(1)};`:"transformed *= uShow;"}`),T.fragmentShader=T.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${m?uy:""}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0; float gBounce = 0.0;
        ${u?`uniform float uFall, uBloom, uLush; varying float vHash; varying float vLeaf;
        vec3 autumn(float h) {
          return h < 0.25 ? vec3(0.86, 0.42, 0.1) : h < 0.5 ? vec3(0.72, 0.16, 0.08) : h < 0.75 ? vec3(0.92, 0.7, 0.16) : vec3(0.55, 0.3, 0.12);
        }`:""}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${a?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${m?`{
          vec2 dHdxy = vec2(dFdx(gRichH), dFdy(gRichH)) * ${(d||.02).toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          normal = normalize(abs(fDet) * normal - vGrad);
        }`:d?`{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${d.toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          normal = normalize(abs(fDet) * normal - vGrad);
        }`:""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${u?`{
          // seasons on the needles: summer lush green, spring blossom, autumn colours
          float shade = clamp(dot(vColor.rgb, vec3(0.33)), 0.2, 1.6);
          vec3 c = diffuseColor.rgb;
          c = mix(c, c * vec3(0.78, 1.45, 0.62) * 1.25, uLush * vLeaf);
          vec3 blossom = mix(vec3(0.98, 0.72, 0.8), vec3(0.98, 0.95, 0.92), step(0.86, vHash));
          c = mix(c, c * vec3(0.95, 1.3, 0.8), uBloom * vLeaf * 0.6);
          c = mix(c, blossom * shade * 0.75, uBloom * vLeaf * step(0.7, vHash));
          c = mix(c, autumn(fract(vHash * 7.31)) * shade * 0.8, uFall * vLeaf);
          diffuseColor.rgb = c;
        }`:""}
        ${m?"gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);":d?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
        ${h?`{
          // soft shadow in the corners: near the floor, under the ceiling, along the walls
          // three rooms: the cabin, and the library below with its gallery (mezzanine)
          bool low = vObj.y < -0.2;
          bool under = vObj.z < -7.6 || vObj.x < -4.8 || vObj.x > 1.6;   // beneath the gallery
          bool main = vObj.y < -3.55 || !under;
          float fy = !low ? vObj.y - 0.12 : main ? vObj.y + 6.6 : vObj.y + 3.4;
          float cy = !low ? 2.62 - vObj.y : (main && under) ? -3.7 - vObj.y : -0.3 - vObj.y;
          vec2 ext = low ? vec2(6.5, 5.95) : vec2(3.03, 2.33);
          vec2 cen = low ? vec2(0.0, -3.55) : vec2(0.0, 0.0);
          vec2 dw = ext - abs(vObj.xz - cen);
          float inside = step(0.0, min(dw.x, dw.y)) * step(-0.05, fy) * step(-0.05, cy);
          float ao = mix(0.55, 1.0, smoothstep(0.0, 0.6, fy)) * mix(0.75, 1.0, smoothstep(0.0, 0.45, cy)) * mix(0.72, 1.0, smoothstep(0.0, 0.5, min(dw.x, dw.y)));
          gAO = mix(1.0, ao, inside);
          // light bouncing up off the floor reaches the undersides (gallery, ceiling) in the library
          gBounce = low ? smoothstep(-0.4, -0.95, vObjN.y) * inside : 0.0;
        }`:""}
        diffuseColor.rgb = mix(diffuseColor.rgb, uMossC * (0.7 + 0.3 * diffuseColor.g), clamp(vMossA, 0.0, 0.8));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC, clamp(vSnowA * 1.5 - 0.2, 0.0, 1.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${c?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},h){let T=_.onBeforeCompile;_.onBeforeCompile=y=>{T(y),y.fragmentShader=y.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.indirectDiffuse += diffuseColor.rgb * gBounce * 0.42;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return _},uy=`
  float fbm3(vec3 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * gN(p); p *= 2.03; a *= 0.5; } return s; }
  vec2 cellN(vec2 p) {
    vec2 i = floor(p), f = fract(p); float d1 = 8.0, d2 = 8.0, id = 0.0;
    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
      vec2 g = vec2(float(x), float(y));
      vec2 o = vec2(gH(vec3(i + g, 1.0)), gH(vec3(i + g, 7.0)));
      vec2 r = g + o - f; float d = dot(r, r);
      if (d < d1) { d2 = d1; d1 = d; id = gH(vec3(i + g, 3.0)); } else if (d < d2) d2 = d;
    }
    return vec2(sqrt(d2) - sqrt(d1), id);
  }
  vec2 planeUV(vec3 p, vec3 n) { vec3 a = abs(n); return a.y > a.x && a.y > a.z ? p.xz : a.x > a.z ? p.zy : p.xy; }
  // returns a small height value (for the bumps) and changes the colour
  float richSurface(int m, vec3 p, vec3 n, inout vec3 col) {
    if (m == 0) { col *= 0.88 + 0.22 * gN(p * 9.0); return gN(p * 9.0) * 0.4; }
    if (m == 1 || m == 2 || m == 3 || m == 9 || m == 10 || m == 12) {
      float along = (m == 1 || m == 9) ? p.x : (m == 2 || m == 10) ? p.z : p.y;
      vec2 cr = (m == 1 || m == 9) ? p.yz : (m == 2 || m == 10) ? p.xy : p.xz;
      float streak = fbm3(vec3(along * 1.4, cr * 34.0));
      float warp = fbm3(vec3(along * 0.35, cr * 2.5)) * 3.0;
      float ring = abs(fract((cr.x + cr.y) * 12.0 + warp) - 0.5);
      float lines = smoothstep(0.09, 0.0, ring);
      col *= 0.78 + 0.36 * streak - 0.13 * lines;
      // the odd knot
      float kn = gN(vec3(along * 1.1, cr * 5.0));
      col *= 1.0 - 0.38 * smoothstep(0.8, 0.93, kn);
      // warm and cool patches, the way old timber weathers
      col *= mix(vec3(1.06, 0.98, 0.88), vec3(0.9, 0.93, 0.98), gN(vec3(along * 0.25, cr * 0.8)));
      float h = streak * 0.7 + lines * 0.25;
      if (m == 9 || m == 10) {
        // round logs: long drying cracks and a rougher, weathered skin
        float crack = smoothstep(0.035, 0.0, abs(gN(vec3(along * 0.22, cr * 2.2)) - 0.5));
        col *= 1.0 - 0.4 * crack;
        col *= 0.92 + 0.12 * gN(p * 26.0);
        h -= crack * 1.2;
      }
      if (m == 12) {
        // shingles: rows of overlapping, slightly different tiles
        vec2 uv = vec2(along * 5.0, cr.x * 9.0 + cr.y * 9.0);
        float row = floor(uv.y), tile = floor(uv.x + gH(vec3(row, 2.0, 0.0)) * 4.0);
        col *= 0.8 + 0.35 * gH(vec3(row, tile, 1.0));
        float edge = smoothstep(0.0, 0.08, fract(uv.y)) * smoothstep(0.0, 0.05, abs(fract(uv.x + gH(vec3(row, 2.0, 0.0)) * 4.0) - 0.5) * 2.0);
        col *= 0.7 + 0.3 * edge; h = edge;
      }
      return h;
    }
    vec2 uv = planeUV(p, n);
    if (m == 4) {   // stone: separate stones with mortar between
      vec2 c = cellN(uv * 3.4);
      float edge = smoothstep(0.04, 0.16, c.x);
      vec3 tint = mix(vec3(1.0, 0.95, 0.88), vec3(0.88, 0.93, 1.0), gH(vec3(c.y * 13.0, 1.0, 2.0)));
      col *= mix(0.72, 1.18, c.y) * tint;
      col *= 0.86 + 0.24 * gN(p * 30.0);
      col = mix(col * 0.5 + vec3(0.06, 0.055, 0.05), col, edge);
      return edge * 0.9 + gN(p * 14.0) * 0.25;
    }
    if (m == 5) { col *= 0.9 + 0.14 * fbm3(p * 2.5) + 0.04 * gN(p * 40.0); return gN(p * 30.0) * 0.35; }
    if (m == 6) {   // cloth: a fine weave with a little fuzz
      // the weave fades out when it gets too fine to draw (no shimmering stripes)
      float fine = 1.0 - smoothstep(0.4, 1.2, max(fwidth(uv.x), fwidth(uv.y)) * 380.0 / 6.283);
      float w = sin(uv.x * 380.0) * sin(uv.y * 380.0) * fine;
      col *= 0.9 + 0.07 * w + 0.1 * gN(p * 45.0) * mix(0.5, 1.0, fine);
      return w * 0.12;
    }
    if (m == 7) {   // metal: brushed, with a touch of patina
      col *= 0.82 + 0.28 * gN(vec3(uv.x * 90.0, uv.y * 2.0, 0.0));
      col = mix(col, col * vec3(0.72, 0.9, 0.82), smoothstep(0.65, 0.85, fbm3(p * 7.0)) * 0.45);
      return 0.0;
    }
    if (m == 8) {   // leather: fine crackle and soft creases
      vec2 c = cellN(uv * 30.0);
      float e = smoothstep(0.0, 0.18, c.x);
      col *= 0.8 + 0.22 * e + 0.12 * gN(p * 4.0);
      return e * 0.5;
    }
    if (m == 11) { col *= 0.95 + 0.07 * gN(p * 50.0); return 0.0; }
    return 0.0;
  }
`;function Yd({scene:i,camera:e,heightAt:t,water:n}){let s=(ee,z,Q)=>window.MEOW_I18N?window.MEOW_I18N.t(ee,Q):z,r=(ee,...z)=>{let Q=window.MEOW_SOUND;Q&&Q[ee]&&Q[ee](...z)},o=(()=>{let ee=new nn,z=new Jt(1,18,12);return ee.add(z,{m:L(0,0,0,0,0,0,1,.36,.28),color:Q=>{let re=Q.y>.05?.55:.85,ie=Math.sin(Q.x*30)*Math.sin(Q.z*40)>.6&&Q.y>0?.8:1;return[re*.78*ie,re*.84*ie,re*.8*ie]}}),ee.add(new Mn(.3,.45,4),{m:L(-1.05,0,0,0,0,Math.PI/2,1,1,.25),color:()=>[.42,.46,.44]}),ee.add(new Mn(.16,.4,4),{m:L(.05,.38,0,0,0,-.4,1,1,.2),color:()=>[.42,.46,.44]}),[-1,1].forEach(Q=>{ee.add(new Jt(.07,8,6),{m:L(.72,.08,Q*.17),color:()=>[.95,.95,.92]}),ee.add(new Jt(.04,8,6),{m:L(.76,.085,Q*.21),color:()=>[.05,.05,.05]})}),ee.add(new Gn(.07,.025,6,12),{m:L(.99,-.02,0,0,Math.PI/2,0),color:()=>[.35,.22,.24]}),ee.geometry()})(),a=new Ln({vertexColors:!0}),c=5,l=1.6,d=Array.from({length:c},(ee,z)=>{let Q=new gt(o,a);Q.visible=!1,Q.scale.setScalar(l),i.add(Q);let re=new gt(new ao(.85,1,32).rotateX(-Math.PI/2),new Nn({color:15265520,transparent:!0,opacity:0,depthWrite:!1}));return re.visible=!1,i.add(re),{m:Q,ring:re,next:performance.now()+1500+z*1700,t0:0,x:0,z:0,yaw:0,on:!1}}),m=(ee,z,Q,re)=>{d.forEach(ie=>{if(!ie.on){if(ie.m.visible=!1,ee<.05||re||z<ie.next){ie.ring.visible=ie.ring.visible&&z-ie.t0<2600;return}for(let Ht=0;Ht<8;Ht++){let Ze=Math.random()*Math.PI*2,xt=16+Math.random()*60,ge=e.position.x+Math.cos(Ze)*xt,xe=e.position.z+Math.sin(Ze)*xt;if(t(ge,xe)<Q-1.5){ie.x=ge,ie.z=xe,ie.yaw=Math.random()*6.28,ie.on=!0,ie.t0=z;break}}ie.next=z+(2500+Math.random()*6e3)/Math.max(.2,ee),ie.on&&Math.hypot(ie.x-e.position.x,ie.z-e.position.z)<45&&setTimeout(()=>r("plop",.6),250)}if(!ie.on)return;let me=(z-ie.t0)/1e3,he=me<.35?me/.35:me<.9?1:Math.max(0,1-(me-.9)/.45),de=he*he*(3-2*he);ie.m.visible=!0,ie.m.position.set(ie.x,Q-1.2*l+de*1.45*l,ie.z),ie.m.rotation.set(0,ie.yaw,1.05-(me>.9?(me-.9)*1.6:0));let _e=me>.4&&me<.85?1+.12*Math.sin((me-.4)*40):1;ie.m.scale.set(l,l*_e,l),ie.ring.visible=!0,ie.ring.position.set(ie.x,Q+.05,ie.z);let nt=Math.max(0,me-.2),Je=.6+nt*2.4;ie.ring.scale.setScalar(Je),ie.ring.material.opacity=Math.max(0,.55-nt*.22),me>1.4&&(ie.on=!1,ie.m.visible=!1)})};i.add(e);let h=new Pn;{let ee=new Ln({color:7031342}),z=new Ln({color:2236962}),Q=new gt(new We(.012,.035,2.4,6).translate(0,1.2,0),ee),re=new gt(new We(.045,.045,.35,8).translate(0,.18,0),z),ie=new gt(new We(.08,.08,.06,12),z);ie.rotation.z=Math.PI/2,ie.position.set(.06,.42,0),h.add(Q,re,ie),h.position.set(.55,-.85,-.9),h.rotation.set(-.95,0,-.25),h.visible=!1,e.add(h)}let u=new N(0,2.4,0),_=new Pn;{let ee=new gt(new Jt(.16,10,8,0,Math.PI*2,0,Math.PI/2),new Ln({color:14173230,emissive:4198408})),z=new gt(new Jt(.16,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new Ln({color:15921386})),Q=new gt(new We(.015,.015,.3,5).translate(0,.22,0),new Ln({color:14173230}));_.add(ee,z,Q),_.scale.setScalar(2.2),_.visible=!1,i.add(_)}let T=16,y=new qt;y.setAttribute("position",new en(new Float32Array(T*3),3));let g=new mr(y,new pr({color:15263968,transparent:!0,opacity:.7}));g.frustumCulled=!1,g.visible=!1,i.add(g);let M=new gt(o,a);M.visible=!1,i.add(M);let I=document.createElement("div");I.className="fish-hint",document.body.appendChild(I);let w=(ee,z)=>{I.textContent=ee||"",I.classList.toggle("show",!!ee),I.classList.toggle("hot",!!z)},b={mode:"idle",t0:0,from:new N,to:new N,biteAt:0,aim:null,catchFrom:new N},R=0;try{R=+(localStorage.getItem("meow.fish")||0)}catch{}let F=new N,E=new N,O=new ui(new N(0,1,0),0),W=(ee,z)=>{O.constant=-z;let Q=ee.ray.intersectPlane(O,new N);if(!Q)return null;let re=Q.distanceTo(e.position);return re>70||re<6||t(Q.x,Q.z)>z-.6?null:Q},J=ee=>{let z=document.getElementById("toast");z&&(z.textContent=ee,z.classList.add("show"),clearTimeout(J.t),J.t=setTimeout(()=>z.classList.remove("show"),3200))},$=()=>{b.mode="idle",h.visible=!1,_.visible=!1,g.visible=!1};return{get busy(){return b.mode!=="idle"},reset(){$(),M.visible=!1,w("")},key(ee){return b.mode==="idle"?b.aim?(b.mode="cast",b.t0=ee,b.to.copy(b.aim),h.visible=!0,g.visible=!0,_.visible=!0,r("cast"),!0):!1:b.mode==="bite"?this.strike(ee):b.mode==="wait"||b.mode==="cast"?(r("reel"),$(),!0):!1},click(ee){return b.mode==="bite"?this.strike(ee):!1},strike(ee){b.mode="catch",b.t0=ee,b.catchFrom.copy(_.position),_.visible=!1,r("splash",!0);let z=s("fishNames","Trout|Perch|Carp|Pike|Bass|Catfish").split("|"),Q=z[Math.floor(Math.random()*z.length)],re=18+Math.floor(Math.random()*40);R++;try{localStorage.setItem("meow.fish",String(R))}catch{}return M.scale.setScalar(.6+(re-18)/60),setTimeout(()=>J("\u{1F41F} "+s("fishCaught","You caught a {name}! {cm} cm \xB7 {n} so far",{name:Q,cm:re,n:R})),700),!0},update(ee,z,{active:Q,ray:re,waterY:ie,amount:me,indoor:he}){if(m(me,ee,ie,he),b.aim=Q&&!he&&b.mode==="idle"&&re?W(re,ie):null,e.updateMatrixWorld(),F.copy(u).applyMatrix4(h.matrixWorld),b.mode==="cast"){let de=Math.min(1,(ee-b.t0)/800);_.position.lerpVectors(F,b.to,de),_.position.y+=Math.sin(Math.PI*de)*8,de>=1&&(b.mode="wait",b.biteAt=ee+3e3+Math.random()*7e3,r("plop",.8))}else if(b.mode==="wait")_.position.set(b.to.x,ie+Math.sin(z*2.2)*.06,b.to.z),ee>b.biteAt&&(b.mode="bite",b.t0=ee,r("splash",!1)),e.position.distanceTo(b.to)>80&&($(),J(s("fishSnap","The line snapped")));else if(b.mode==="bite"){let de=(ee-b.t0)/1e3;_.position.set(b.to.x+Math.sin(de*20)*.08,ie-.25-Math.abs(Math.sin(de*9))*.45,b.to.z),de>1.5&&(b.mode="wait",b.biteAt=ee+2500+Math.random()*6e3,J(s("fishAway","It got away\u2026")))}else if(b.mode==="catch"){let de=Math.min(1,(ee-b.t0)/1100);E.set(0,-.4,-3.2).applyQuaternion(e.quaternion).add(e.position),M.visible=!0,M.position.lerpVectors(b.catchFrom,E,de),M.position.y+=Math.sin(Math.PI*de)*6,M.rotation.set(Math.sin(z*18)*.4,z*4,Math.PI/2*(1-de)),de>=1&&(M.visible=!1,$())}if(g.visible){let de=y.attributes.position;for(let _e=0;_e<T;_e++){let nt=_e/(T-1);E.lerpVectors(F,_.visible?_.position:b.catchFrom,nt),E.y-=Math.sin(Math.PI*nt)*(b.mode==="bite"?.2:1.2),de.setXYZ(_e,E.x,E.y,E.z)}de.needsUpdate=!0,h.rotation.x=-.95+(b.mode==="bite"?Math.sin(z*30)*.05-.15:0)}Q?b.mode==="bite"?w(s("fishBite","A bite! Click now!"),!0):b.mode==="wait"||b.mode==="cast"?w(s("fishWait","Waiting for a bite\u2026 \xB7 R reel in")):b.aim?w(s("fishCast","R  cast the line")):w(""):w("")}}}function Zd({group:i,U:e,beams:t,halos:n,dust:s}){let o={uTime:e.uTime,uBeam:{value:0},uBeamC:{value:new ct(1,.9,.72)},uHalo:{value:1},uDust:{value:0}},a=(m,h,u,_=1.18)=>{let T=new N(...h).normalize().multiplyScalar(u),y=m.map(R=>new N(...R)),g=y.reduce((R,F)=>R.add(F),new N).multiplyScalar(.25),M=y.map(R=>R.clone().sub(g).multiplyScalar(_).add(g).add(T)),I=[],w=[];for(let R=0;R<4;R++){let F=(R+1)%4;[[y[R],0,0],[y[F],1,0],[M[F],1,1],[y[R],0,0],[M[F],1,1],[M[R],0,1]].forEach(([O,W,J])=>{I.push(O.x,O.y,O.z),w.push(R+W,J)})}let b=new qt;return b.setAttribute("position",new Ct(I,3)),b.setAttribute("uv",new Ct(w,2)),b.computeVertexNormals(),b},c=m=>new tn({uniforms:{...o,uK:{value:m}},transparent:!0,depthWrite:!1,side:wn,blending:fi,vertexShader:`
      varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        vUv = uv; vP = position;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime, uBeam, uK; uniform vec3 uBeamC;
      varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vP;
      void main() {
        // soft where you look along the side, fading out with length, gentle moving streaks
        float side = pow(abs(dot(vN, vV)), 1.4);
        float along = smoothstep(0.0, 0.08, vUv.y) * pow(1.0 - vUv.y, 1.6);
        float streak = 0.75 + 0.25 * sin(fract(vUv.x) * 23.0 + vP.y * 3.0 + uTime * 0.35) * sin(fract(vUv.x) * 9.0 - uTime * 0.21);
        float a = side * along * streak * uBeam * uK;
        gl_FragColor = vec4(uBeamC * a, 1.0);
      }`});t.forEach(m=>{let h=new gt(a(m.rect,m.dir,m.len,m.spread),c(m.k||1));h.renderOrder=3,h.frustumCulled=!1,i.add(h)});let l=(()=>{let m=new qt,h=n.length,u=new Float32Array(h*3),_=new Float32Array(h*3),T=new Float32Array(h),y=new Float32Array(h);n.forEach((M,I)=>{u.set(M.p,I*3),_.set(M.color||[1,.75,.45],I*3),T[I]=M.size,y[I]=M.flicker||0}),m.setAttribute("position",new en(u,3)),m.setAttribute("aCol",new en(_,3)),m.setAttribute("aSize",new en(T,1)),m.setAttribute("aFl",new en(y,1));let g=new _i(m,new tn({uniforms:o,transparent:!0,depthWrite:!1,blending:fi,vertexShader:`
        uniform float uTime, uHalo; attribute vec3 aCol; attribute float aSize, aFl; varying vec3 vC; varying float vA;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float f = 1.0 + aFl * (0.18 * sin(uTime * 9.0 + position.x * 31.0) + 0.1 * sin(uTime * 23.0 + position.z * 17.0));
          gl_PointSize = aSize * ${4.5.toFixed(1)} * f * projectionMatrix[1][1] * 420.0 / -mv.z;
          vC = aCol; vA = uHalo * f;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vC; varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = exp(-d * d * 5.0) * 0.55 + exp(-d * d * 40.0) * 0.45;
          gl_FragColor = vec4(vC * a * vA * smoothstep(1.0, 0.85, d), 1.0);
        }`}));return g.frustumCulled=!1,g.renderOrder=4,i.add(g),g})(),d=(()=>{let m=[],h=[];s.forEach(({box:[T,y,g,M,I,w],n:b})=>{for(let R=0;R<b;R++)m.push(T+Math.random()*(y-T),g+Math.random()*(M-g),I+Math.random()*(w-I)),h.push(Math.random())});let u=new qt;u.setAttribute("position",new Ct(m,3)),u.setAttribute("aSeed",new Ct(h,1));let _=new _i(u,new tn({uniforms:o,transparent:!0,depthWrite:!1,blending:fi,vertexShader:`
        uniform float uTime, uDust; attribute float aSeed; varying float vA;
        void main() {
          vec3 p = position;
          float t = uTime * (0.05 + aSeed * 0.05) + aSeed * 40.0;
          p += vec3(sin(t * 1.3) * 0.25, sin(t * 0.7 + aSeed * 9.0) * 0.18 - fract(t * 0.02) * 0.1, cos(t * 1.1) * 0.25);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (1.5 + aSeed * 2.5) * clamp(25.0 / -mv.z, 0.6, 2.5);
          vA = uDust * (0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * (0.6 + aSeed) + aSeed * 50.0), 3.0));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying float vA;
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(1.0, 0.88, 0.7) * smoothstep(1.0, 0.0, d) * vA * 0.5, 1.0); }`}));return _.frustumCulled=!1,_.renderOrder=4,i.add(_),_})();return{update({day:m,beamColor:h,on:u}){o.uBeam.value=u?.05+m*.32:0,h&&o.uBeamC.value.copy(h),o.uHalo.value=u?1:0,o.uDust.value=u?.5+m*.5:0,l.visible=d.visible=u}}}var En={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-6.6,mezz:-3.4,ceil:-.3},Pt={back:-7.6,left:-4.8,right:1.6,slab:.3},ot={x0:1.95,x1:3,top:2.2,bottom:-1.3},rs=i=>{let e=(ot.top-Math.min(ot.top,Math.max(ot.bottom,i)))/(ot.top-ot.bottom);return .12+(En.mezz-.12)*e},Zi={x:.55,z:-.4,r:1.05,turns:1.25},fn={x0:.55,x1:Pt.right,z0:-1.45,z1:-.4},Kc=En.mezz-En.floor,Ei=Math.PI*2,jd=(i,e)=>[(Math.atan2(e-Zi.z,i-Zi.x)%Ei+Ei)%Ei,Math.hypot(i-Zi.x,e-Zi.z)],Qd=i=>{let e=[];for(let t=0;t<2;t++){let n=(i+Ei*t)/(Ei*Zi.turns);n<=1&&e.push(En.mezz-n*Kc)}return e},os=(i,e,[t,n,s,r],o=0)=>i>t+o&&i<n-o&&e>s+o&&e<r-o,Ft=En,dy=[[Ft.x0,Ft.x1,Ft.z0,Pt.back],[Ft.x0,Pt.left,Ft.z0,Ft.z1],[Pt.right,Ft.x1,Ft.z0,Ft.z1],[fn.x0,fn.x1,fn.z0,fn.z1]],Hs=.45,Jd=[[Ft.x0+Hs,Ft.x1-Hs,Ft.z0+Hs,Pt.back],[Ft.x0+Hs,Pt.left,Ft.z0+Hs,Ft.z1],[Pt.right,Ft.x1-Hs,Ft.z0+Hs,Ft.z1],[fn.x0,Pt.right+.4,fn.z0,.1]],ef=[[Pt.left,Pt.back],[Pt.right,Pt.back],[Pt.left,-2.6],[Pt.right,-4.4]],fy=[[-.97,.97,-8.47,-7.53],[-.32,.32,-9.25,-8.5],[-2.95,-.65,-1.9,-.9],[-2.45,-1.15,-3.12,-2.38],[-4.5,-3.5,-3.4,-2.4],[-3.4,-3,-1.1,-.7],[4.15,4.65,1.35,1.85],[-6.5,-5.7,1.4,2.4],...ef.map(([i,e])=>[i-.14,i+.14,e-.14,e+.14])],py=[[3.15,4.05,-5.05,-4.15],[3.15,4.05,-3.35,-2.45],[3.35,4.05,-4.1,-3.4],[5.25,5.95,-9.1,-8.3]],xn=.42,$d=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function tf(i,e,t,n){if(!os(i,e,[Ft.x0,Ft.x1,Ft.z0,Ft.z1],t))return!0;let[s,r]=jd(i,e);if(r<Zi.r+.1){let o=Qd(s).find(c=>Math.abs(c-n)<.9),a=os(i,e,[fn.x0,fn.x1,fn.z0,fn.z1])&&n>Ft.mezz-.25;if(o!==void 0&&!a){if(r<.1+t*.6)return!0;if(r<Zi.r-.12)return!1;let c=(Ft.mezz-o)/Kc;return c<.1?!Jd.some(l=>os(i,e,l,t)):c>.9?Kd(i,e,t,!0,s,r):!0}}return n>Ft.mezz-.35?!Jd.some(o=>os(i,e,o,t))||i>ot.x0-t&&i<ot.x1+t&&e>ot.bottom-t&&e<ot.top+.3&&(rs(e)>n+.5||e>ot.bottom+.25&&(i<ot.x0+t||i>ot.x1-t))?!0:py.some(o=>os(i,e,o,-t)):Kd(i,e,t,!1,s,r)}function Kd(i,e,t,n,s,r){return!!(!os(i,e,[Ft.x0+.52,Ft.x1-.52,Ft.z0+.52,Ft.z1-.05],t)||fy.some(o=>os(i,e,o,-t))||r<.1+t||!n&&r<Zi.r+.1&&!(s>Math.PI/2-.1&&s<Math.PI+.3))}function nf(i,e){let t=[];if(!os(i,e,[Ft.x0,Ft.x1,Ft.z0,Ft.z1]))return t;t.push(Ft.floor),dy.some(r=>os(i,e,r,-.05))&&t.push(Ft.mezz);let[n,s]=jd(i,e);return s<Zi.r+.08&&s>.04&&t.push(...Qd(n)),t}function sf({group:i,mats:e,camera:t,U:n}){let{inn:s}=e,r=Ft.floor,o=Ft.mezz,a=Ft.ceil,c=Ft.x0,l=Ft.x1,d=Ft.z0,m=Ft.z1,h=o-Pt.slab,u=new nn,_=new nn,T=(f,v,A)=>dn(f,v,A),y=(f,v=0)=>ln("wood",A=>{let D=f*(.86+T(A.x*3,A.y*9,A.z*3)*.28),Z=T(A.x*.6,A.y*2,A.z*.6);return[D*(1.04+Z*.08+v),D*(.7+Z*.04),D*(.47-Z*.05-v*.5)]}),g=y(.25),M=y(.35),I=y(.47),w=y(.38,.12),b=(f,v,A,D)=>D?ln(D,()=>[f,v,A]):()=>[f,v,A],R=ln("stone",f=>{let v=.42+T(f.x*4,f.y*4,f.z*4)*.22;return[v,v*.96,v*.9]}),F=ln("plaster",f=>{let v=.7+T(f.x*2,f.y*2,f.z*2)*.07;return[v,v*.95,v*.86]}),E=b(.07,.07,.075,"metal"),O=b(.68,.53,.28,"metal"),W=ln("leather",f=>{let v=.15+T(f.x*9,f.y*9,f.z*9)*.03;return[v*1.15,v*.6,v*.4]}),J=b(1,.86,.62),$=new N(0,1,0),ee=(f,v,A,D=0)=>new vt().compose(new N(f,v,A),new Ut().setFromAxisAngle($,D),new N(1,1,1)),z=(f,v,A,D,Z=u)=>Z.add(v,{m:f.clone().multiply(A),color:D}),Q=(f,v,A)=>new De(f,v,A),re=([f,v,A,D],Z,x)=>{for(let S=f,B=0;S<v-.01;S+=.18,B++){let H=Math.min(.18,v-S),G=B*7%5*.55;for(let fe=A-G,Ie=0;fe<D;fe+=2.4,Ie++){let Se=Math.max(fe,A),Ue=Math.min(fe+2.4,D);if(Ue-Se<.05)continue;let He=x*(.9+(B*7+Ie*3)%5*.035);u.add(Q(H-.004,.04,Ue-Se-.004),{m:L(S+H/2,Z-.02,(Se+Ue)/2),color:ln("wood",dt=>{let ft=He*(.88+T(dt.x*3,0,dt.z*.8)*.24);return[ft*1.08,ft*.72,ft*.47]})})}}};re([c,l,d,m],r,.3),[[c,l,d,Pt.back],[c,Pt.left,Pt.back,m],[Pt.right,l,Pt.back,m],[fn.x0,fn.x1,fn.z0,fn.z1]].forEach(([f,v,A,D])=>{re([f,v,A,D],o,.36),u.add(Q(v-f,o-.04-h-.01,D-A),{m:L((f+v)/2,(o-.04+h+.01)/2,(A+D)/2),color:g}),u.add(new jt(v-f,D-A),{m:L((f+v)/2,h+.005,(A+D)/2,Math.PI/2,0,0),color:F})}),[[Pt.left,Pt.right,Pt.back,"x"],[Pt.back,m,Pt.left,"z"],[Pt.back,fn.z0,Pt.right,"z"],[fn.z1,m,Pt.right,"z"],[fn.x0,fn.x1,fn.z0,"x"]].forEach(([f,v,A,D])=>{let Z=v-f,x=(f+v)/2;[[o-.04,.06,.05],[o-.17,.035,.03],[h+.03,.06,.05]].forEach(([S,B,H])=>{u.add(Le(D==="x"?Z+.06:H*2,B,D==="x"?H*2:Z+.06,.012,1),{m:D==="x"?L(x,S,A):L(A,S,x),color:w})})});for(let f=c+.7;f<l;f+=1.3)u.add(Q(.1,.12,Pt.back-d),{m:L(f,h-.06,(d+Pt.back)/2),color:M});for(let f=Pt.back+.9;f<m;f+=1.3)u.add(Q(Pt.left-c,.12,.1),{m:L((c+Pt.left)/2,h-.06,f),color:M}),u.add(Q(l-Pt.right,.12,.1),{m:L((Pt.right+l)/2,h-.06,f),color:M});let he=(f,v)=>{_.add(new We(.075,.075,.01,16),{m:L(f,h-.003,v),color:b(1,.92,.76)}),u.add(new Gn(.088,.012,4,18),{m:L(f,h-.004,v,Math.PI/2,0,0),color:b(.8,.78,.72,"metal")})};[-5.35,-3,-.9,.9,3,5.35].forEach(f=>he(f,-8.55)),[-6,-3.4,-.8,1.6].forEach(f=>{he(-5.45,f),he(2.7,f),he(5,f)}),ef.forEach(([f,v])=>{u.add(Le(.2,h-r,.2,.025,1),{m:L(f,(h+r)/2,v),color:w}),u.add(Le(.28,.32,.28,.02,1),{m:L(f,r+.16,v),color:M}),u.add(Le(.3,.06,.3,.02,1),{m:L(f,r+.34,v),color:I}),u.add(Le(.3,.08,.3,.02,1),{m:L(f,h-.16,v),color:I}),u.add(Le(.26,.1,.26,.02,1),{m:L(f,h-.06,v),color:M})});let de=hn([[.026,0],[.026,.05],[.017,.07],[.015,.16],[.03,.3],[.033,.36],[.019,.44],[.014,.58],[.021,.68],[.026,.72],[.016,.76],[.023,.79],[.023,.81]],6),_e=(f,v,A)=>{u.add(Le(.11,.96,.11,.015,1),{m:L(f,A+.48,v),color:w}),u.add(Le(.15,.045,.15,.015,1),{m:L(f,A+.98,v),color:g}),u.add(new Jt(.05,10,7),{m:L(f,A+1.04,v),color:w})},nt=(f,v,A,D,Z)=>{let x=Math.hypot(A-f,D-v),S=Math.atan2(A-f,D-v),B=(f+A)/2,H=(v+D)/2;u.add(Le(.075,.06,x,.022,1),{m:L(B,Z+.93,H,0,S,0),color:w}),u.add(Q(.05,.05,x),{m:L(B,Z+.065,H,0,S,0),color:M});let G=Math.max(1,Math.round(x/.14));for(let fe=1;fe<G;fe++){let Ie=fe/G;u.add(de,{m:L(f+(A-f)*Ie,Z+.09,v+(D-v)*Ie),color:I})}_e(f,v,Z),_e(A,D,Z)},Je=.05;nt(Pt.left-Je,Pt.back-Je,Pt.right+Je,Pt.back-Je,o),nt(Pt.left-Je,Pt.back-Je,Pt.left-Je,m-.06,o),nt(Pt.right+Je,Pt.back-Je,Pt.right+Je,fn.z0,o),nt(Pt.right+Je,.12,Pt.right+Je,m-.06,o),nt(fn.x0+.04,fn.z0+.04,Pt.right+Je,fn.z0+.04,o),nt(fn.x0+.04,fn.z0+.04,fn.x0+.04,fn.z1-.12,o);{let f=Zi,v=16,A=Ei*f.turns/(v+1);for(let Z=0;Z<v;Z++){let x=(Z+1)/(v+1),S=o-x*Kc,B=x*Ei*f.turns,H=B-A*.5-.04,G=B+A*.5+.04;u.add(new We(f.r,f.r,.055,7,1,!1,Math.PI/2-G,G-H),{m:L(f.x,S-.028,f.z),color:w}),u.add(new We(f.r-.04,f.r-.04,.03,7,1,!1,Math.PI/2-G+.02,G-H-.04),{m:L(f.x,S-.07,f.z),color:g}),[B-A*.25,B+A*.25].forEach(fe=>u.add(de,{m:L(f.x+Math.cos(fe)*(f.r-.06),S,f.z+Math.sin(fe)*(f.r-.06),0,0,0,1,1.07,1),color:I}))}class D extends si{constructor(x,S){super(),this.r=x,this.dy=S}getPoint(x,S=new N){let B=x*Ei*f.turns;return S.set(f.x+Math.cos(B)*this.r,o-x*Kc+this.dy,f.z+Math.sin(B)*this.r)}}u.add(new Gi(new D(f.r-.06,.92),150,.03,6),{color:w}),u.add(new Gi(new D(f.r-.02,-.1),150,.045,6),{color:g}),u.add(new We(.07,.07,o+.9-r,12),{m:L(f.x,(o+.9+r)/2,f.z),color:w}),u.add(hn([[.15,0],[.15,.04],[.1,.07],[.08,.14],[.07,.16]],12),{m:L(f.x,r,f.z),color:g}),u.add(hn([[.07,0],[.09,.03],[.05,.08],[.06,.14],[.03,.2],[0,.23]],12),{m:L(f.x,o+.9,f.z),color:w})}{let v=(ot.top-ot.bottom)/12,A=(ot.x0+ot.x1)/2,D=ot.x1-ot.x0-.04;for(let S=0;S<12;S++){let B=ot.top-S*v,H=B-v,G=rs(B-v*.5);u.add(Le(D,.05,v+.04,.012,1),{m:L(A,G-.025,(H+B)/2),color:I}),u.add(Q(D,Math.abs(rs(B)-rs(H)),.03),{m:L(A,(rs(B)+G)/2,B-.01),color:g})}let Z=Math.hypot(ot.top-ot.bottom,.12-o),x=Math.atan2(.12-o,ot.top-ot.bottom);[ot.x0,ot.x1].forEach(S=>{u.add(Q(.05,.28,Z),{m:L(S,(.12+o)/2-.1,(ot.top+ot.bottom)/2,x,0,0),color:M}),u.add(Le(.06,.06,Z,.02,1),{m:L(S,(.12+o)/2+.85,(ot.top+ot.bottom)/2,x,0,0),color:w});for(let H=1;H<12;H+=1){let G=ot.top-H*v;u.add(de,{m:L(S,rs(G),G,0,0,0,1,1.03,1),color:I})}let B=[[S,o,ot.bottom+.3],[S,o,ot.top],[S,rs(ot.top)-.15,ot.top]];u.tris([...B,B[0],B[2],B[1]],M)})}let Ht=(f,v)=>f>ot.x0-.05&&f<ot.x1+.05&&v>ot.bottom-.05&&v<ot.top+.2;for(let f=c;f<l-.01;f+=.5)for(let v=d;v<m-.01;v+=.5)Ht(f+.25,v+.25)||u.add(new jt(.5,.5),{m:L(f+.25,a,v+.25,Math.PI/2,0,0),color:F});for(let f=d+1.2;f<m;f+=1.8)(f>ot.bottom-.1&&f<ot.top+.2?[[c,ot.x0-.05],[ot.x1+.05,l]]:[[c,l]]).forEach(([A,D])=>u.add(Le(D-A,.22,.2,.02,1),{m:L((A+D)/2,a-.11,f),color:g}));let Ze={x:-1.8,z:-2.75,y:-2.75};u.add(hn([[.42,0],[.4,-.03],[.3,-.05],[.18,-.07],[.08,-.1],[0,-.1]],24),{m:L(Ze.x,a,Ze.z),color:F});let xt=ln("wood",f=>{let v=.34+T(f.x*2,f.y*6,f.z*2)*.08;return[v*1.06,v*.74,v*.5]});[["z",d,c,l,1],["z",m,c,l,-1],["x",c,d,m,1],["x",l,d,m,-1]].forEach(([f,v,A,D,Z])=>{for(let B=A;B<D-.01;B+=.6){let H=Math.min(.6,D-B),G=B+H/2,fe=(Ie,Se,Ue)=>u.add(new jt(H,Se-Ie),{m:f==="z"?L(G,(Ie+Se)/2,v,0,Z>0?0:Math.PI,0):L(v,(Ie+Se)/2,G,0,Z>0?Math.PI/2:-Math.PI/2,0),color:Ue});fe(r,r+.9,R),fe(r+.9,a,xt)}let x=D-A,S=(A+D)/2;[[r+.9,.06,.05],[r+.06,.12,.03],[a-.07,.14,.09],[a-.17,.05,.05]].forEach(([B,H,G])=>{u.add(Le(f==="z"?x:G,H,f==="z"?G:x,.015,1),{m:f==="z"?L(S,B,v+Z*G/2):L(v+Z*G/2,B,S),color:M})})});for(let f=Pt.left+.15;f<Pt.right-.6;f+=1.07)u.add(Le(.9,.62,.035,.012,1),{m:L(f+.45,r+.48,m-.02),color:w}),u.add(Le(.7,.44,.02,.02,1),{m:L(f+.45,r+.48,m-.04),color:M}),u.add(Le(.9,2.4,.03,.012,1),{m:L(f+.45,h+1.6,m-.02),color:w}),u.add(Le(.72,2.2,.02,.02,1),{m:L(f+.45,h+1.6,m-.04),color:M});{let A=r+.55,D=r+2.62,Z=d+.02;_.add(new jt(.95- -.95,D-A,1,10),{m:L(0,(A+D)/2,Z+.01),color:S=>{let B=(S.y-A)/(D-A);return[1-B*.32,.98-B*.14,.94+B*.06]}});let x=(S,B,H,G,fe=.05)=>u.add(Le(S,B,fe,.008,1),{m:L(H,G,Z+.05),color:I});for(let S=1;S<3;S++)x(.035,D-A,-.95+S*(.95- -.95)/3,(A+D)/2);for(let S=1;S<5;S++)x(.95- -.95,.035,0,A+S*(D-A)/5);x(.06,D-A,0,(A+D)/2,.07),[-1,1].forEach(S=>u.add(Le(.14,D-A+.2,.1,.015,1),{m:L(S*(.95+.06),(A+D)/2,Z+.05),color:w})),u.add(Le(.95- -.95+.4,.16,.12,.015,1),{m:L(0,D+.08,Z+.06),color:w}),u.add(Le(.95- -.95+.5,.05,.18,.015,1),{m:L(0,D+.18,Z+.09),color:M}),u.add(Le(.95- -.95+.46,.05,.28,.02,1),{m:L(0,A-.02,Z+.14),color:I}),u.add(Le(.95- -.95+.3,.12,.05,.015,1),{m:L(0,A-.11,Z+.04),color:w}),[-1,1].forEach(S=>{let B=S*1.28;[[.36,.04,0,D-.02],[.36,.04,0,A+.02],[.04,D-A,-.16,(A+D)/2],[.04,D-A,.16,(A+D)/2],[.36,.04,0,(A+D)/2]].forEach(([H,G,fe,Ie])=>u.add(Le(H,G,.035,.008,1),{m:L(B+fe,Ie,Z+.03),color:I}));for(let H=A+.08;H<D-.06;H+=.075)Math.abs(H-(A+D)/2)>.05&&u.add(Q(.3,.05,.008),{m:L(B,H,Z+.03,-.6,0,0),color:M});[A+.3,D-.3].forEach(H=>u.add(Q(.03,.06,.02),{m:L(B-S*.18,H,Z+.05),color:E}))})}let ge=[],xe=(f,v,A,D)=>ge.push({x:f,z:v,ry:A,w:D,base:r,h:2.8,rows:4,rowY0:.86,rowH:.48,cab:.78,pref:[1,2,0,3]}),Ce=(f,v,A,D)=>ge.push({x:f,z:v,ry:A,w:D,base:o,h:2.88,rows:5,rowY0:.16,rowH:.5,cab:0,pref:[2,3,1,0,4]});[-2.25,-3.95,2.25,3.95,-5.65,5.65].forEach(f=>xe(f,d+xn/2,0,1.7)),[-8,-6,-4,-2,0].forEach(f=>xe(c+xn/2,f,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(f=>xe(l-xn/2,f,-Math.PI/2,2)),[-1,1,-3,3,-5,5].forEach(f=>Ce(f,d+xn/2,0,2)),[-8,-6,-4,-2,0].forEach(f=>Ce(c+xn/2,f,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(f=>Ce(l-xn/2,f,-Math.PI/2,2));let je=ge.map((f,v)=>v),Ke=f=>ee(f.x,f.base,f.z,f.ry),Mt=(f,v,A,D)=>new N(v,A,D).applyMatrix4(Ke(f));ge.forEach(f=>{let v=Ke(f),A=f.w/2,D=f.rowY0+f.rows*f.rowH,Z=(x,S,B)=>z(v,x,S,B);Z(Q(f.w,f.h-f.cab,.03),L(0,(f.h+f.cab)/2,-xn/2+.015),g),[-1,1].forEach(x=>Z(Le(.06,f.h,xn+.02,.012,1),L(x*(A-.03),f.h/2,.01),M));for(let x=0;x<=f.rows;x++)Z(Q(f.w-.1,.03,xn-.03),L(0,f.rowY0+x*f.rowH-.015,0),M);for(let x=0;x<f.rows;x++)Z(Le(f.w-.1,.04,.022,.008,1),L(0,f.rowY0+x*f.rowH+.005,xn/2-.006),I);if(Z(Q(f.w-.1,f.h-D-.06,.03),L(0,(D+f.h-.06)/2,xn/2-.03),w),Z(Le(f.w+.04,.06,xn+.05,.015,1),L(0,f.h-.03,.02),g),Z(Le(f.w+.1,.04,xn+.1,.015,1),L(0,f.h+.01,.04),M),f.cab){Z(Le(f.w,f.cab-.12,xn+.1,.01,1),L(0,.1+(f.cab-.12)/2,.05),M),Z(Q(f.w-.04,.1,xn+.06),L(0,.05,.03),g),Z(Le(f.w+.04,.045,xn+.16,.014,1),L(0,f.cab-.02,.06),I);let x=(f.w-.12)/2;[-1,1].forEach(S=>{let B=S*(x/2+.015);Z(Le(x-.02,f.cab-.26,.03,.006,1),L(B,.11+(f.cab-.2)/2,xn/2+.11),w),Z(Le(x-.16,f.cab-.42,.02,.02,1),L(B,.11+(f.cab-.2)/2,xn/2+.13),I),Z(new Jt(.018,8,6),L(S*.05,.11+(f.cab-.2)/2+.06,xn/2+.15),O)})}else Z(Le(f.w,f.rowY0-.02,xn+.04,.008,1),L(0,(f.rowY0-.02)/2,.02),g)}),u.add(new We(.015,.015,12.2,6),{m:L(0,o+2.55,d+xn+.05,0,0,Math.PI/2),color:O});{let A=d+xn+.55;[-.22,.22].forEach(D=>u.add(Le(.05,2.7,.06,.012,1),{m:L(5.6+D,o+1.33,A-.26,-.2,0,0),color:I}));for(let D=0;D<8;D++){let Z=.25+D*.31;u.add(new We(.018,.018,.44,6),{m:L(5.6,o+Z,A-Z*Math.tan(.2)*.98,0,0,Math.PI/2),color:I})}[-.22,.22].forEach(D=>u.add(new Gn(.03,.008,4,10),{m:L(5.6+D,o+2.58,d+xn+.08,0,Math.PI/2,0),color:O}))}{let f=ee(0,r,-8);z(f,Le(1.9,.06,.9,.022,2),L(0,.77,0),w),z(f,Q(1.2,.004,.55),L(0,.802,.02),ln("leather",()=>[.15,.24,.17])),[-1,1].forEach(v=>{z(f,Le(.5,.66,.82,.012,1),L(v*.65,.41,0),M),z(f,Le(.54,.08,.86,.015,1),L(v*.65,.04,0),g);for(let A=0;A<3;A++){let D=.2+A*.19;z(f,Le(.42,.16,.03,.008,1),L(v*.65,D,-.42),w),z(f,Le(.12,.018,.02,.008,1),L(v*.65,D+.02,-.445),O)}z(f,Le(.4,.5,.03,.01,1),L(v*.65,.42,.42),w),z(f,Le(.3,.38,.02,.015,1),L(v*.65,.42,.44),I)}),z(f,Le(.76,.11,.03,.008,1),L(0,.68,-.42),w),z(f,Le(.14,.018,.02,.008,1),L(0,.69,-.445),O),z(f,Q(.8,.55,.02),L(0,.45,.38),M),z(f,new We(.1,.12,.03,16),L(.6,.815,.1),O),z(f,new We(.012,.012,.3,6),L(.6,.97,.1),O),z(f,new Jt(1,16,8,0,Ei,0,Math.PI/2),L(.6,1.1,.02,0,0,0,.22,.09,.1),b(.12,.34,.2,"metal")),z(f,new We(.03,.03,.12,8),L(.6,1.08,.02,0,0,Math.PI/2),J,_),[[.16,.05,[.4,.14,.12]],[.2,.045,[.17,.25,.2]],[.18,.04,[.5,.4,.25]]].forEach(([v,A,D],Z)=>z(f,Le(v*1.4,A,v,.008,1),L(-.62,.8+.025+Z*.045,.12,0,Z*.2-.2,0),b(...D,"leather"))),z(f,hn([[.03,0],[.035,.02],[.03,.05],[.012,.06],[.012,.07]],10),L(-.25,.8,.22),b(.1,.12,.16,"metal")),z(f,new We(.004,.004,.16,5),L(-.1,.81,.05,0,.5,Math.PI/2),b(.1,.1,.1)),z(f,Q(.3,.003,.4),L(.05,.806,-.02,0,-.12,0),b(.9,.87,.78,"paper")),z(f,Q(.3,.003,.4),L(.12,.809,0,0,.1,0),b(.92,.9,.82,"paper"))}{let f=ee(0,r,-8.88),v=ln("fabric",D=>Math.sin(D.x*40)*Math.sin(D.y*40+D.z*30)>.35?[.74,.68,.5]:[.42,.48,.38]),A=hn([[.018,0],[.024,.04],[.018,.12],[.028,.24],[.022,.36],[.026,.42],[.026,.44]],8);[[-.21,.19],[.21,.19]].forEach(([D,Z])=>z(f,A,L(D,0,Z),g)),[[-.21,-.19],[.21,-.19]].forEach(([D,Z])=>z(f,Le(.045,.98,.045,.01,1),L(D,.49,Z-.02,-.08,0,0),g)),z(f,Le(.5,.06,.46,.015,1),L(0,.44,0),g),z(f,Le(.48,.1,.44,.04,2),L(0,.51,.01),v),z(f,Le(.4,.46,.06,.03,2),L(0,.82,-.2,-.08,0,0),v),z(f,Le(.46,.05,.05,.015,1),L(0,1.06,-.23,-.08,0,0),g)}{let f=ee(-1.8,r,-1.4,Math.PI);z(f,Le(2.2,.32,.86,.05,2),L(0,.28,0),W),[-1,0,1].forEach(v=>z(f,Le(.62,.14,.64,.05,2),L(v*.63,.5,.08),W)),z(f,Le(2.2,.5,.22,.07,2),L(0,.67,-.33),W);for(let v=0;v<3;v++)for(let A=-.9+v%2*.09;A<=.9;A+=.18)z(f,new Jt(.012,6,4),L(A,.6+v*.09,-.218),b(.12,.06,.04,"leather"));[-1,1].forEach(v=>{z(f,Le(.2,.36,.86,.04,2),L(v*1,.5,0),W),z(f,new We(.13,.13,.88,16),L(v*1.03,.68,0,Math.PI/2,0,0),W),[-1,1].forEach(A=>z(f,hn([[.04,0],[.05,.04],[.035,.09],[.045,.12]],10),L(v*.98,0,A*.36),g)),z(f,Le(.42,.4,.12,.07,2),L(v*.66,.74,-.15,-.3,v*.25,v*.1),v>0?ln("fabric",A=>Math.sin(A.x*50)>.6?[.72,.58,.3]:[.56,.42,.22]):b(.36,.42,.32,"fabric"))})}{let f=ee(-1.8,r,-2.75),v=hn([[.025,0],[.032,.03],[.022,.1],[.034,.2],[.026,.3],[.03,.38],[.03,.4]],8);z(f,Le(1.2,.05,.66,.02,2),L(0,.43,0),w),z(f,Le(1.08,.08,.54,.01,1),L(0,.37,0),M),z(f,Le(1,.025,.48,.01,1),L(0,.12,0),M),[[-.52,-.25],[.52,-.25],[-.52,.25],[.52,.25]].forEach(([A,D])=>z(f,v,L(A,0,D),g)),[-1,1].forEach(A=>{z(f,Le(.2,.012,.28,.004,1),L(A*.1+.1,.462,.05,0,.15,A*.08),b(.9,.87,.78,"paper")),z(f,Le(.21,.008,.29,.004,1),L(A*.1+.1,.455,.05,0,.15,A*.08),b(.42,.14,.12,"leather"))}),z(f,hn([[0,0],[.09,0],[.11,.025],[.1,.03]],16),L(-.32,.455,-.1),O),z(f,Le(.24,.05,.17,.008,1),L(-.2,.18,.05,0,.3,0),b(.3,.33,.4,"leather"))}{let f=ee(-4,r,-2.9,Math.PI/2);z(f,Le(.86,.36,.8,.05,2),L(0,.3,0),W),z(f,Le(.56,.14,.6,.05,2),L(0,.53,.08),W),z(f,Le(.86,.48,.2,.07,2),L(0,.7,-.3,-.1,0,0),W),[-1,1].forEach(v=>{z(f,Le(.17,.42,.8,.06,2),L(v*.36,.56,0),W),[-1,1].forEach(A=>z(f,hn([[.035,0],[.045,.04],[.03,.08],[.04,.12]],10),L(v*.36,0,A*.32),g))})}u.add(hn([[.16,0],[.16,.02],[.1,.05],[.04,.09],[.02,.12]],16),{m:L(-3.2,r,-.9),color:O}),u.add(new We(.014,.014,1.45,6),{m:L(-3.2,r+.82,-.9),color:O}),u.add(new We(.16,.25,.3,20,1,!0),{m:L(-3.2,r+1.6,-.9),color:ln("fabric",A=>{let D=.82+Math.sin(Math.atan2(A.z- -.9,A.x- -3.2)*20)*.04;return[D,D*.9,D*.72]})}),_.add(new Jt(.06,10,8),{m:L(-3.2,r+1.52,-.9),color:J});{let A=r+1;u.add(new Jt(.28,28,18),{m:L(4.4,A,1.6,.4,0,.2),color:D=>T(D.x*9+3,D.y*9,D.z*9)>.55?[.66,.56,.36]:[.24,.36,.42]}),u.add(new Gn(.31,.012,6,36),{m:L(4.4,A,1.6,0,Math.PI/2,.2),color:O}),u.add(new Gn(.33,.016,6,36),{m:L(4.4,A-.02,1.6,Math.PI/2,0,0),color:w}),u.add(hn([[.2,0],[.2,.03],[.07,.08],[.05,.3],[.08,.42],[.04,.55],[.06,.7],[.03,.72]],12),{m:L(4.4,r,1.6),color:w})}{let f=ee(-6.1,r,1.9,Math.PI/2);z(f,Le(.56,.32,.38,.02,1),L(0,.16,0),g),z(f,Le(.46,1.4,.3,.02,1),L(0,1,0),w),z(f,Le(.3,1,.02,.02,1),L(0,1,.155),M),z(f,Le(.56,.56,.36,.02,1),L(0,1.98,0),w),z(f,new We(.28,.28,.36,18,1,!1,-Math.PI/2,Math.PI),L(0,2.26,0,Math.PI/2,0,0,1,1,.5),g),z(f,new We(.19,.19,.02,28),L(0,1.98,.18,Math.PI/2,0,0),b(.9,.86,.76,"paper")),z(f,new Gn(.2,.012,6,28),L(0,1.98,.19),O),z(f,Q(.012,.13,.006),L(0,2.02,.195,0,0,.6),b(.08,.08,.08)),z(f,Q(.012,.16,.006),L(0,2.04,.197,0,0,-.3),b(.08,.08,.08)),z(f,new We(.06,.06,.012,16),L(0,.7,.13,Math.PI/2,0,0),O)}{for(let v=a-.12,A=0;v>Ze.y+.8;v-=.085,A++)u.add(new Gn(.03,.007,4,8),{m:L(Ze.x,v,Ze.z,0,A%2*Math.PI/2,0,1,1.4,1),color:E});u.add(hn([[0,-.28],[.035,-.22],[.05,-.12],[.03,-.02],[.07,.04],[.05,.12],[.022,.3],[.04,.45],[.02,.6],[.016,.8],[0,.82]],12),{m:L(Ze.x,Ze.y,Ze.z),color:E});let f=(v,A,D,Z)=>{u.add(new Gn(v,.02,6,48),{m:L(Ze.x,A,Ze.z,Math.PI/2,0,0),color:E});for(let x=0;x<D;x++){let S=x/D*Ei+(Z?0:.3),B=Ze.x+Math.cos(S)*v,H=Ze.z+Math.sin(S)*v,G=new xr(new N(Ze.x,A+.1,Ze.z),new N(Ze.x+Math.cos(S)*v*.3,A-.18,Ze.z+Math.sin(S)*v*.3),new N(Ze.x+Math.cos(S)*v*.8,A-.12,Ze.z+Math.sin(S)*v*.8),new N(B,A,H));u.add(new Gi(G,12,.012,5),{color:E}),u.add(hn([[0,0],[.03,0],[.045,.035],[.04,.05]],10),{m:L(B,A+.01,H),color:E}),u.add(new We(.017,.017,.12,8),{m:L(B,A+.11,H),color:b(.9,.86,.76,"paper")}),_.add(new Jt(.02,8,6),{m:L(B,A+.2,H,0,0,0,1,1.9,1),color:J})}};f(.82,Ze.y,8,!0),f(.42,Ze.y+.4,6,!1);for(let v=0;v<4;v++){let A=v/4*Ei+Math.PI/4,D=new Ds(new N(Ze.x+Math.cos(A)*.82,Ze.y,Ze.z+Math.sin(A)*.82),new N(Ze.x+Math.cos(A)*.7,Ze.y+.5,Ze.z+Math.sin(A)*.7),new N(Ze.x,Ze.y+.78,Ze.z));u.add(new Gi(D,12,.009,4),{color:E})}}{let f=ln("fabric",A=>{let D=.84+T(A.x*7,A.y*7,A.z*7)*.05;return[D,D*.97,D*.9]}),v=A=>{let D=ee(3.6,o,A,-Math.PI/2);z(D,Le(.8,.3,.78,.06,2),L(0,.3,0),f),z(D,Le(.56,.13,.6,.05,2),L(0,.5,.07),f),z(D,Le(.8,.62,.2,.08,2),L(0,.76,-.3,-.12,0,0),f),[-1,1].forEach(Z=>{z(D,Le(.14,.38,.76,.06,2),L(Z*.34,.54,0),f),[-1,1].forEach(x=>z(D,hn([[.02,0],[.03,.05],[.022,.1],[.03,.15]],8),L(Z*.33,0,x*.32),g))}),z(D,Le(.38,.36,.1,.06,2),L(0,.72,-.15,-.25,0,0),b(.34,.4,.5,"fabric"))};v(-4.6),v(-2.9),u.add(new We(.3,.3,.035,24),{m:L(3.7,o+.58,-3.75),color:w}),u.add(hn([[.17,0],[.17,.02],[.06,.06],[.035,.2],[.05,.35],[.03,.5],[.06,.56]],12),{m:L(3.7,o,-3.75),color:g}),u.add(hn([[0,0],[.05,0],[.07,.06],[.05,.16],[.02,.2],[.025,.24]],12),{m:L(3.75,o+.6,-3.65),color:b(.6,.66,.66)}),[[0,[.5,.2,.16]],[.04,[.2,.3,.34]]].forEach(([A,D],Z)=>u.add(Le(.22,.04,.16,.006,1),{m:L(3.6,o+.62+A,-3.88,0,Z*.4,0),color:b(...D,"leather")}))}let Dt=(f,v,A,D,Z,x=!1)=>{let S=document.createElement("canvas");S.width=f,S.height=v,A(S.getContext("2d"),f,v);let B=new Pi(S);B.colorSpace=zn,B.anisotropy=8;let H=new Ln({map:B,color:12103848,alphaTest:x?.5:0,side:wn}),G=new gt(D,H);return G.applyMatrix4(Z),G.receiveShadow=!0,i.add(G),G},_t=7,ze=()=>(_t=_t*16807%2147483647,_t/2147483647),ce=f=>(v,A,D)=>{let Z=Math.round(A*.035);v.clearRect(0,0,A,D);for(let et=2;et<D-2;et+=3)v.fillStyle=et%2?"#e9dfc8":"#d7cbb0",v.fillRect(0,et,Z+2,1.6),v.fillRect(A-Z-2,et,Z+2,1.6);let x=Z,S=A-2*Z,B=(et,Rt)=>{v.fillStyle=Rt,v.fillRect(x+et,et,S-et*2,D-et*2)};B(0,f.border),B(D*.035,f.cream),B(D*.045,f.border2),B(D*.115,f.cream),B(D*.125,f.field),v.fillStyle=f.accent;let H=D*.08,G=D*.06,fe=(et,Rt,pt)=>{v.beginPath(),v.moveTo(et,Rt-pt),v.lineTo(et+pt,Rt),v.lineTo(et,Rt+pt),v.lineTo(et-pt,Rt),v.closePath(),v.fill()};for(let et=x+H;et<x+S-H;et+=G)fe(et,H,G*.3),fe(et,D-H,G*.3);for(let et=H+G;et<D-H;et+=G)fe(x+H,et,G*.3),fe(x+S-H,et,G*.3);let Ie=x+D*.125,Se=D*.125,Ue=S-D*.25,He=D*.75;v.save(),v.beginPath(),v.rect(Ie,Se,Ue,He),v.clip();for(let et=Se+10,Rt=0;et<Se+He;et+=D*.055,Rt++)for(let pt=Ie+8+Rt%2*D*.04;pt<Ie+Ue;pt+=D*.08)v.fillStyle=f.motif,fe(pt,et,D*.012),v.fillStyle=f.accent,v.fillRect(pt-1,et-1,2,2);let dt=x+S/2,ft=D/2,Qe=(et,Rt,pt,un,at)=>{at.forEach((bn,Wt)=>{let Wn=pt*(1-Wt*.2);v.fillStyle=bn,v.beginPath();for(let Dn=0;Dn<=64;Dn++){let ei=Dn/64*Ei,ti=Wn*(1+.14*Math.cos(ei*8)),Xt=et+Math.cos(ei)*ti*un,pn=Rt+Math.sin(ei)*ti;Dn?v.lineTo(Xt,pn):v.moveTo(Xt,pn)}v.fill()})};[[Ie,Se],[Ie+Ue,Se],[Ie,Se+He],[Ie+Ue,Se+He]].forEach(([et,Rt])=>Qe(et,Rt,D*.2,1.3,[f.medal,f.cream,f.medal])),v.restore(),[-1,1].forEach(et=>{v.fillStyle=f.medal,fe(dt+et*D*.42,ft,D*.08),v.fillStyle=f.cream,fe(dt+et*D*.42,ft,D*.04)}),Qe(dt,ft,D*.3,1.45,[f.cream,f.medal,f.field,f.accent,f.medal]);for(let et=0;et<A*D*.05;et++){let Rt=x+ze()*S,pt=ze()*D;v.fillStyle=ze()<.5?"rgba(0,0,0,0.12)":"rgba(255,240,210,0.08)",v.fillRect(Rt,pt,1.5,1.5)}let Et=v.createRadialGradient(dt,ft,0,dt,ft,S*.4);Et.addColorStop(0,"rgba(255,240,220,0.1)"),Et.addColorStop(1,"rgba(255,240,220,0)"),v.fillStyle=Et,v.fillRect(x,0,S,D)},le=(f,v,A,D,Z,x,S=r)=>{let B=new jt(A*1.07,D);Dt(1024,Math.round(1024*D/(A*1.07)),ce(x),B,new vt().compose(new N(f,S+.006,v),new Ut().setFromEuler(new Sn(-Math.PI/2,Z,0,"YXZ")),new N(1,1,1)),!0)};le(0,-6.5,3.2,2,0,{border:"#2a2440",border2:"#6a1d1c",cream:"#d8c7a0",field:"#7a201c",accent:"#c58f42",motif:"#4a1612",medal:"#22305a"}),le(-1.9,-2.6,3.9,2.8,0,{border:"#6d1f1c",border2:"#1f2d4a",cream:"#d6c49a",field:"#1d2a46",accent:"#b07a3a",motif:"#2c3d5e",medal:"#7b2420"}),le(3.9,-3.75,2.2,3,Math.PI/2,{border:"#5c3a22",border2:"#8a2e22",cream:"#e0d2ae",field:"#9a3a26",accent:"#d6a24c",motif:"#6a2416",medal:"#2b3a52"},o);{let D=r+2.05,Z=m-.06;Dt(512,333,(S,B,H)=>{let G=S.createLinearGradient(0,0,0,H*.6);G.addColorStop(0,"#6f87a0"),G.addColorStop(1,"#e3c9a0"),S.fillStyle=G,S.fillRect(0,0,B,H);let fe=(Se,Ue,He,dt)=>{S.fillStyle=He,S.beginPath(),S.moveTo(0,H);for(let ft=0;ft<=B;ft+=4)S.lineTo(ft,Se+Math.sin(ft*dt+Se)*Ue+Math.sin(ft*dt*2.7)*Ue*.4);S.lineTo(B,H),S.fill()};fe(H*.5,14,"#56677a",.012),fe(H*.6,10,"#47584a",.02),S.fillStyle="#9fb2b8",S.fillRect(0,H*.7,B,H*.08),fe(H*.8,6,"#2f3a2a",.03);for(let Se=0;Se<26;Se++){let Ue=ze()*B,He=H*(.62+ze()*.2),dt=20+ze()*40;S.fillStyle="#1f2a1e",S.beginPath(),S.moveTo(Ue,He-dt),S.lineTo(Ue+dt*.25,He),S.lineTo(Ue-dt*.25,He),S.fill()}for(let Se=0;Se<6e3;Se++)S.fillStyle=`rgba(${ze()<.5?"0,0,0":"255,240,210"},0.05)`,S.fillRect(ze()*B,ze()*H,2,1);let Ie=S.createRadialGradient(B/2,H/2,H*.3,B/2,H/2,B*.7);Ie.addColorStop(0,"rgba(0,0,0,0)"),Ie.addColorStop(1,"rgba(40,20,0,0.35)"),S.fillStyle=Ie,S.fillRect(0,0,B,H)},new jt(2,1.3),L(-1.8,D,Z,0,Math.PI,0));let x=b(.72,.56,.26,"metal");[[2+.2,.12,0,1.3/2+.06],[2+.2,.12,0,-1.3/2-.06],[.12,1.3,-2/2-.06,0],[.12,1.3,2/2+.06,0]].forEach(([S,B,H,G])=>u.add(Le(S,B,.06,.025,2),{m:L(-1.8+H,D+G,Z+.01),color:x})),[-1,1].forEach(S=>{let B=-1.8+S*1.5,H=r+2.25;u.add(Le(.1,.22,.03,.02,1),{m:L(B,H,m-.02),color:O}),u.add(new We(.008,.008,.18,5),{m:L(B,H+.02,m-.1,Math.PI/2,0,0),color:O}),u.add(new We(.06,.09,.13,14,1,!0),{m:L(B,H+.16,m-.19),color:b(.9,.84,.7,"fabric")}),_.add(new Jt(.03,8,6),{m:L(B,H+.12,m-.19),color:J})})}let Me=new gt(u.geometry(),s);Me.receiveShadow=!0,Me.castShadow=!0,Me.layers.enable(5);let Te=new gt(_.geometry(),new Nn({vertexColors:!0,toneMapped:!1}));i.add(Me,Te);let pe=new Vi(16761466,0,90,1.2);pe.position.set(Ze.x,Ze.y-.45,Ze.z),i.add(pe),pe.castShadow=!0,pe.shadow.autoUpdate=!1,pe.shadow.mapSize.set(512,512),pe.shadow.camera.near=.5,pe.shadow.camera.far=90,pe.shadow.bias=-.003,pe.shadow.normalBias=.25,pe.shadow.camera.layers.set(5);let ve=new Vi(16766112,0,70,1.2);ve.position.set(-.8,r+2,-4.6),i.add(ve);let Pe={set intensity(f){pe.intensity=f*1.2,ve.intensity=f*.75},get intensity(){return pe.intensity/1.25}},V=(()=>{let f=new nn,v=A=>{let D=.9+T(A.x*40,A.y*40,A.z*40)*.2;return[D,D,D]};return[-1,1].forEach(A=>f.add(new De(.1,1,1),{m:L(A*.45,0,0),color:v,tip:()=>1})),f.add(new De(1,1,.08),{m:L(0,0,.47),color:v,tip:()=>1}),f.add(new De(.82,.94,.94),{m:L(0,0,-.04),color:A=>{let D=.86+Math.sin(A.x*140)*.04;return[D,D*.96,D*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(A=>f.add(new De(1.01,.025,.02),{m:L(0,A,.515),color:b(.78,.62,.3),tip:()=>0})),f.add(new De(.7,.16,.01),{m:L(0,.1,.516),color:b(.12,.1,.08),tip:()=>0}),f.geometry()})(),it=new Ln({vertexColors:!0});it.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let Ee=null,U=[],p=[],X="",K=new vt,j=new Ut,ae=new N,ue=new N,te=[],q=f=>{let v=2166136261;for(let A=0;A<f.length;A++)v=Math.imul(v^f.charCodeAt(A),16777619);return(v>>>0)%1e4/1e4},we=(f,v)=>window.MEOW_I18N?window.MEOW_I18N.t(f):v,Oe=f=>{let v=document.createElement("canvas");v.width=256,v.height=64;let A=v.getContext("2d"),D=A.createLinearGradient(0,0,0,64);D.addColorStop(0,"#d9b968"),D.addColorStop(1,"#8c6a2c"),A.fillStyle=D,A.fillRect(0,0,256,64),A.strokeStyle="rgba(60,40,10,.8)",A.lineWidth=4,A.strokeRect(4,4,248,56),A.fillStyle="#2a1c08",A.font='600 30px "Josefin Sans", system-ui, sans-serif',A.textAlign="center",A.textBaseline="middle";let Z=f;for(;A.measureText(Z).width>228&&Z.length>2;)Z=Z.slice(0,-2)+"\u2026";A.fillText(Z,128,34);let x=new Pi(v);return x.colorSpace=zn,x.anisotropy=4,x},Ne=new nn,ke=(f,v,A)=>{let D=Math.floor(A*5),Z=f.rowY0+v*f.rowH,x=(H,G,fe)=>Mt(f,H,G,fe),S=(H,G,fe,Ie,Se=1,Ue=1,He=1)=>{let dt=x(G,fe,.02);Ne.add(H,{m:new vt().compose(dt,new Ut().setFromAxisAngle(new N(0,1,0),f.ry),new N(Se,Ue,He)),color:Ie})},B=(A*1.3%1-.5)*1;D===0?(S(new We(.06,.09,.26,12),B,Z+.13,b(.55,.6,.58)),S(new Jt(.07,10,8),B+.3,Z+.07,b(.7,.55,.35))):D===1?(S(new De(.3,.16,.22),B,Z+.08,y(.5)),S(new De(.3,.02,.22),B,Z+.165,b(.62,.5,.28,"metal"))):D===2?(S(new Jt(.06,10,8),B,Z+.07,b(.25,.24,.24),1,1.2,.9),S(new Jt(.04,10,8),B,Z+.17,b(.25,.24,.24)),[-1,1].forEach(H=>S(new Mn(.015,.035,4),B+H*.022,Z+.215,b(.25,.24,.24)))):D===3?(S(new We(.05,.05,.02,12),B,Z+.01,b(.62,.5,.28,"metal")),S(new We(.02,.02,.14,8),B,Z+.09,b(.88,.84,.74,"paper"))):(S(new De(.02,.24,.18),B,Z+.12,y(.4)),S(new jt(.14,.18),B+.012,Z+.12,b(.75,.72,.62)))},Ge=null,st=()=>{Ee&&(i.remove(Ee),Ee.dispose()),U.forEach(S=>{i.remove(S),S.material.map.dispose(),S.material.dispose()}),Ge&&(i.remove(Ge),Ge.geometry.dispose()),U=[],te.length=0;let f=30,v=[],A=new Map;p.forEach(S=>{let B=(S.tag||"").trim();A.has(B)||(A.set(B,[]),v.push(B)),A.get(B).push(S)});let D=[];v.forEach(S=>{let B=A.get(S);for(let H=0;H<B.length;H+=f)D.push({tag:S,list:B.slice(H,H+f),first:H===0})});let Z=[];je.forEach(S=>ge[S].pref.forEach(B=>Z.push([ge[S],B])));let x=new Set;D.forEach((S,B)=>{let H=Z[B];if(!H)return;let[G,fe]=H;x.add(G.x+","+G.z+","+fe);let Ie=G.rowY0+fe*G.rowH,Se=S.list.map(Qe=>({t:.035+q(Qe.url)*.04,h:.24+q(Qe.url+"h")*.11,d:.17+q(Qe.title||"x")*.05})),Ue=Se.reduce((Qe,Et)=>Qe+Et.t+.004,0),He=G.w-.16,dt=Ue>He?He/Ue:1,ft=-G.w/2+.08;if(S.list.forEach((Qe,Et)=>{let et=Se[Et],Rt=et.t*dt,pt=Mt(G,ft+Rt/2,Ie+et.h/2+.002,-xn/2+.03+et.d/2),un=new Ut().setFromAxisAngle(new N(0,1,0),G.ry);te.push({link:Qe,tag:S.tag,home:{p:pt,q:un,s:new N(Rt,et.h,et.d)},cur:{p:pt.clone(),q:un.clone()},state:"shelf",from:null,t0:0,color:$d[Math.floor(q(Qe.url+"c")*$d.length)]}),ft+=Rt+.004}),S.first){let Qe=new Nn({map:Oe("#"+(S.tag||we("untagged","no tag"))),toneMapped:!1}),Et=new gt(new jt(.34,.085),Qe);Et.position.copy(Mt(G,0,Ie+.006,xn/2+.006)),Et.quaternion.setFromAxisAngle(new N(0,1,0),G.ry),Et.position.y-=.035,Et.userData.tag=S.tag,i.add(Et),U.push(Et)}}),Ne.clear(),Z.forEach(([S,B],H)=>{if(x.has(S.x+","+S.z+","+B))return;let G=q("o"+H);G<.55&&ke(S,B,G/.55)}),Ge=new gt(Ne.geometry(),s),i.add(Ge),Ee=new yi(V,it,Math.max(1,te.length)),Ee.count=te.length,Ee.frustumCulled=!1,te.forEach((S,B)=>{K.compose(S.home.p,S.home.q,S.home.s),Ee.setMatrixAt(B,K),Ee.setColorAt(B,new ct(S.color))}),Ee.instanceColor&&(Ee.instanceColor.needsUpdate=!0),i.add(Ee)},be={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},Y=document.createElement("div");Y.className="book-tip",document.body.appendChild(Y);let Ae=document.createElement("div");Ae.className="book-page",Ae.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(Ae);let ye=Ae.querySelector("img"),Ve=Ae.querySelector(".bp-wait"),Ye=f=>{try{return new URL(f).hostname.replace(/^www\./,"")}catch{return f}},Re=(f,v)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(f)+"?w=800&h=600"+(v?"&r="+v:""),Xe=0,lt=f=>{clearTimeout(Xe),ye.classList.remove("ready"),Ve.textContent=we("loadingPreview","\u2026");let v=0,A=()=>{ye.onload=()=>{ye.classList.add("ready"),Ve.textContent="",ye.naturalWidth<600&&v<3&&(v++,Xe=setTimeout(A,2500))},ye.onerror=()=>{Ve.textContent=we("noPreview","No preview")},ye.src=Re(f,v)};A()},ut=(()=>{let f=new Pn,v=new Ln({color:7220522}),A=new Nn({color:15722192}),D=new Pn,Z=new Pn,x=new De(1,1.32,.03).translate(-.5,0,0),S=new De(1,1.32,.03).translate(.5,0,0),B=new De(.96,1.26,.06).translate(-.49,0,.045),H=new De(.96,1.26,.06).translate(.49,0,.045);return D.add(new gt(x,v),new gt(B,A)),Z.add(new gt(S,v),new gt(H,A)),f.add(D,Z),f.visible=!1,i.parent.add(f),{g:f,left:D,right:Z,leather:v}})(),Nt=.16,yn=(f,v,A)=>{let D=te[f];v.copy(D.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(A).multiply(D.cur.q)},se=(f,v,A,D=0)=>{v.set(0,D,-f).applyQuaternion(t.quaternion).add(t.position),A.copy(t.quaternion)},Qt=f=>f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2,$t=(f,v)=>{be.open>=0&&oi(v),be.open=f,be.openT0=v,be.closing=!1;let A=te[f];A.state="out",ut.leather.color.set(A.color),Ae.querySelector(".bp-tag").textContent="#"+(A.tag||we("untagged","no tag")),Ae.querySelector(".bp-title").textContent=A.link.title,Ae.querySelector(".bp-host").textContent=Ye(A.link.url),Ae.querySelector(".bp-go").textContent=we("bookGo","Click the book to visit \u2197"),lt(A.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let D=new N,Z=new Ut;yn(f,D,Z),be.openFrom={p:D,q:Z}},oi=f=>{be.open<0||be.closing||(be.closing=!0,be.openT0=f,Ae.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},_n=(f,v)=>{if(be.ring===f){ai(v);return}be.ring!==null&&ai(v),be.ring=f,be.ringT0=v;let A=0;te.forEach((D,Z)=>{D.tag===f&&(D.ringI=A++,D.state!=="out"&&(D.state="toRing",D.fromSc=D.sc||1,D.from={p:D.cur.p.clone(),q:D.cur.q.clone()},D.t0=v+D.ringI*45))}),be.ringN=A,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},ai=f=>{be.ring!==null&&(te.forEach(v=>{v.tag===be.ring&&(v.state==="ring"||v.state==="toRing")&&(v.state="toShelf",v.fromSc=v.sc||1,v.from={p:v.cur.p.clone(),q:v.cur.q.clone()},v.t0=f+(v.ringI||0)*30)}),be.ring=null)},Yn=new Ut,Vt=new Ut,rt=new N,vn=new N,mi=(f,v,A,D)=>{let Z=Math.max(1,be.ringN),x=Math.max(15,Z*1.3),S=f.ringI/Z*Math.PI*2+v*.12;rt.set(t.position.x+Math.cos(S)*x,t.position.y-.4+Math.sin(v*1.3+f.ringI)*.25,t.position.z+Math.sin(S)*x);let B=Math.atan2(t.position.x-rt.x,t.position.z-rt.z);return Vt.setFromEuler(new Sn(0,B-Math.PI/2,Math.sin(v*.9+f.ringI)*.08)),vn.copy(rt),i.worldToLocal(vn),A.copy(vn),i.getWorldQuaternion(Yn).invert(),D.copy(Yn).multiply(Vt),A},as=2.2,Qn=(f,v)=>{if(!Ee)return;let A=!1,D=new N,Z=new Ut;if(te.forEach((x,S)=>{if(x.state==="shelf")return;let B=1;if(x.state==="out"){ue.set(0,0,0),K.compose(x.cur.p,x.cur.q,ue),Ee.setMatrixAt(S,K),A=!0;return}if(x.state==="ring")mi(x,f,x.cur.p,x.cur.q),B=as;else{let H=Math.max(0,Math.min(1,(v-x.t0)/900)),G=Qt(H),fe=x.state==="toRing"?mi(x,f,D,Z):x.home.p,Ie=x.state==="toRing"?Z:x.home.q;x.cur.p.copy(x.from.p).lerp(fe,G),x.cur.p.y+=Math.sin(Math.PI*G)*.4*(x.state==="toRing"?1:.6),x.cur.q.copy(x.from.q).slerp(Ie,G);let Se=x.fromSc||1;B=Se+((x.state==="toRing"?as:1)-Se)*G,H>=1&&(x.state==="toRing"?x.state="ring":(x.state="shelf",x.cur.p.copy(x.home.p),x.cur.q.copy(x.home.q),B=1))}ue.copy(x.home.s).multiplyScalar(B),K.compose(x.cur.p,x.cur.q,ue),Ee.setMatrixAt(S,K),A=!0,x.sc=B}),A&&(Ee.instanceMatrix.needsUpdate=!0,Ee.boundingSphere=null),be.open>=0){let x=te[be.open],S=Math.min(1,(v-be.openT0)/(be.closing?700:1100)),B=new N,H=new Ut;se(4.2,B,H,-.15);let G,fe;be.closing?(G=1-Qt(Math.max(0,(S-.35)/.65)),fe=1-Qt(Math.min(1,S/.45))):(G=Qt(Math.min(1,S/.6)),fe=Qt(Math.max(0,(S-.45)/.55)));let Ie=be.openFrom;ut.g.position.copy(Ie.p).lerp(B,G),ut.g.quaternion.copy(Ie.q).slerp(H,G);let Se=(x.sc||1)*cs,Ue=new N(x.home.s.z*Se,x.home.s.y*Se/1.32,x.home.s.z*Se),He=new N(1.6,1.6,1.6);ut.g.scale.copy(Ue).lerp(He,G),ut.left.rotation.y=Math.PI*(1-fe)*.999,ut.right.rotation.y=0,ut.g.visible=!0,!be.closing&&S>=1?(C(ut.g,Ae),Ae.classList.add("show")):be.closing||Ae.classList.remove("show"),be.closing&&S>=1&&(ut.g.visible=!1,x.state=be.ring===x.tag?"toRing":"toShelf",x.from={p:new N,q:new Ut},x.from.p.copy(ut.g.position),i.worldToLocal(x.from.p),i.getWorldQuaternion(Yn).invert(),x.from.q.copy(Yn).multiply(ut.g.quaternion),x.t0=v,x.fromSc=1,be.open=-1,be.closing=!1)}},cs=4.5,Kt=new N,C=(f,v)=>{let A=1e9,D=1e9,Z=-1e9,x=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([S,B])=>{Kt.set(S,B,.08).applyMatrix4(f.matrixWorld).project(t);let H=(Kt.x*.5+.5)*innerWidth,G=(-Kt.y*.5+.5)*innerHeight;A=Math.min(A,H),Z=Math.max(Z,H),D=Math.min(D,G),x=Math.max(x,G)}),v.style.left=A+"px",v.style.top=D+"px",v.style.width=Z-A+"px",v.style.height=x-D+"px"},k=f=>{if(!Ee)return null;if(be.open>=0&&ut.g.visible&&f.intersectObject(ut.g,!0)[0])return{type:"open"};let v=f.intersectObject(Ee,!1)[0],A=U.length?f.intersectObjects(U,!1)[0]:null;return A&&(!v||A.distance<v.distance)&&A.distance<40?{type:"label",tag:A.object.userData.tag}:v&&v.distance<45&&te[v.instanceId]&&te[v.instanceId].state!=="out"?{type:"book",i:v.instanceId}:null};return{sync(){let f=window.MEOW_LINKS_DATA||[],v=f.map(A=>A.url+"|"+A.tag+"|"+A.title).join(`
`);v!==X&&(X=v,p=f.slice(),be.open=-1,be.ring=null,ut.g.visible=!1,Ae.classList.remove("show"),st())},update:Qn,get busy(){return be.open>=0||be.ring!==null},hover(f,v){var Z,x;let A=v?k(f):null,D=A?A.type+((x=(Z=A.i)!=null?Z:A.tag)!=null?x:""):"";if(D===be.hoverKey)return!!A;if(be.hoverKey=D,!A||A.type==="open")return Y.classList.remove("show"),!!A;if(A.type==="book"){let S=te[A.i];Y.innerHTML="";let B=document.createElement("strong");B.textContent=S.link.title;let H=document.createElement("small");H.textContent="#"+(S.tag||we("untagged","no tag"))+" \xB7 "+Ye(S.link.url),Y.append(B,H)}else{let S=te.filter(G=>G.tag===A.tag).length;Y.innerHTML="";let B=document.createElement("strong");B.textContent="#"+(A.tag||we("untagged","no tag"))+"  \xB7  "+S;let H=document.createElement("small");H.textContent=be.ring===A.tag?we("tagBack","Click: put them back"):we("tagRing","Click: books fly around you"),Y.append(B,H)}return Y.classList.add("show"),!0},click(f,v){let A=k(f);if(be.open>=0&&!be.closing){if(A&&A.type==="open"){let D=te[be.open];return window.open(D.link.url,"_blank","noopener"),!0}if(oi(v),!A||A.type==="open")return!0}return A?A.type==="label"?(_n(A.tag,v),!0):A.type==="book"?($t(A.i,v),!0):!1:be.ring!==null?(ai(v),!0):!1},back(f){return be.open>=0&&!be.closing?(oi(f),!0):be.ring!==null?(ai(f),!0):!1},_open(f){$t(f,performance.now())},_ring(f){_n(f,performance.now())},get _n(){return te.length},shadowLight:pe,glowSpots:{CH:Ze,SLAB:h,F:r,MZ:o,Z0:d,Z1:m,C:a},reset(f){be.open>=0&&oi(f),be.ring!==null&&ai(f),Y.classList.remove("show"),be.hoverKey=""},lampLight:Pe}}var Bt={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function rf({scene:i,shared:e,U:t,camera:n}){let s=Bt.S,r=6.4,o=5,a=.17,c=.3145,l=8,d=2.62,m=1.9,h=-1.95,u=-.75,_=2.05,T=o/2+2.6,y=11,g={x:1.7,z:-2},M=new nn,I=new nn,w=new nn,b=new nn,R=(C,k,f)=>dn(C,k,f),F=(C,k=1)=>ln("wood",f=>{let v=C*(.88+R(f.x*3,f.y*9,f.z*3)*.24)*k,A=R(f.x*.7,f.y*2,f.z*.7);return[v*(1.02+A*.06),v*(.79+A*.03),v*(.56-A*.04)]}),E=C=>ln("log",(k,f)=>{if(C==="x"?Math.abs(f.x)>.9:Math.abs(f.z)>.9){let Z=C==="x"?Math.hypot(k.y%1,k.z):Math.hypot(k.y%1,k.x),x=.68+Math.sin(Z*90)*.04;return[x*1.02,x*.86,x*.66]}let A=.5+R(k.x*2.5,k.y*8,k.z*2.5)*.2+Math.sin((C==="x"?k.x:k.z)*23)*.015,D=R(Math.floor(k.y/.31)*3.7,C==="x"?1:2,.5);return D<.25?[A*.95,A*.82,A*.68]:D>.75?[A*1.08,A*.8,A*.52]:[A,A*.79,A*.58]}),O=ln("stone",C=>{let k=.45+R(C.x*5,C.y*5,C.z*5)*.25,f=R(C.x*2,C.y*2,C.z*2);return[k*(.96+f*.08),k*.95,k*(.9+(1-f)*.08)]}),W=(C,k,f,v)=>v?ln(v,()=>[C,k,f]):()=>[C,k,f],J=(C,k,f)=>ln("metal",()=>[C,k,f]),$=C=>ln("fabric",C),ee=(C,k,f)=>new De(C,k,f),z=Math.PI*2,Q=(C,k)=>f=>(C==="z"?(f.z-k)*Math.sign(k):(f.x-k)*Math.sign(k))>0?1:0,re={front:[[h,u,0,_],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},ie=(C,k,f,v)=>{let A=[[C,k]];return v.forEach(([D,Z,x,S])=>{if(!(x<f+a-.02&&S>f-a+.02))return;let B=[];A.forEach(([H,G])=>{Z<=H||D>=G?B.push([H,G]):(D>H&&B.push([H,D]),Z<G&&B.push([Z,G]))}),A=B}),A};for(let C=0;C<l;C++){let k=a+C*c,f=a+c/2+C*c;[["front",o/2],["back",-o/2]].forEach(([v,A])=>{ie(-r/2-.3,r/2+.3,k,re[v]).forEach(([D,Z])=>{M.add(new We(a,a*.97,Z-D,16,1),{m:L((D+Z)/2,k,A,0,0,Math.PI/2),color:E("x"),tip:Q("z",A)})})}),f+a<d+.12&&[["left",-r/2],["right",r/2]].forEach(([v,A])=>{ie(-o/2-.3,o/2+.3,f,re[v]).forEach(([D,Z])=>{M.add(new We(a,a*.97,Z-D,16,1),{m:L(A,f,(D+Z)/2,Math.PI/2,0,0),color:E("z"),tip:Q("x",A)})})})}for(let C=0;C<4;C++){let k=C<2?r:o,f=C<2?C?-o/2:o/2:C===2?-r/2:r/2;for(let v=-k/2-.2;v<k/2+.2;v+=.42){if(C===0&&v>h-.2&&v<u)continue;let A=.38+R(v,C,0)*.08,D=.16+R(v,C,3)*.08,Z=C<2?L(v+.2,-.02+D/2-.06,f,0,(R(v,C,5)-.5)*.2,0,A,D,.42):L(f,-.02+D/2-.06,v+.2,0,(R(v,C,5)-.5)*.2,0,.42,D,A);M.add(new De(1,1,1),{m:Z,color:O,tip:()=>1})}}M.add(new De(u-h+.1,.08,.42),{m:L((h+u)/2,.06,o/2),color:F(.5),tip:()=>0}),[-1,1].forEach(C=>{let k=C*o/2,f=[-r/2-.05,d,k],v=[r/2+.05,d,k],A=[0,d+m,k],D=ln("wood",Z=>{let x=.48+R(Z.x*9,0,C)*.1,S=Math.abs((Z.x+10)%.24-.12)<.012?.75:1;return[x*S,x*.8*S,x*.6*S]});M.tris(C>0?[f,v,A]:[v,f,A],D,()=>0),I.tris(C>0?[v,f,A]:[f,v,A],Z=>{let x=D(Z);return[x[0]*.85,x[1]*.85,x[2]*.85]})});let me=r/2+.6,he=m+.45,de=Math.atan2(he,me),_e=Math.hypot(me,he);[-1,1].forEach(C=>{M.add(new De(_e,.1,o+1.3,3,1,6),{m:L(C*me/2,d+m-he/2+.02,0,0,0,-C*de),color:F(.36),tip:(f,v)=>v.y>0?1:0});let k=9;for(let f=0;f<k;f++){let v=f/k,A=_e/k+.12,D=C*(me*(v+.5/k)),Z=d+m-he*(v+.5/k)+.1;M.add(new De(A,.045,o+1.3,1,1,10),{m:L(D,Z,0,0,0,-C*(de+.05)),color:ln("shingle",x=>{let S=Math.floor((x.z+5)*3.3),B=.3+R(S,f,C)*.12+f%2*.02;return[B*1.02,B*.9,B*.8]}),tip:()=>1})}M.add(new De(.05,.22,o+1.35),{m:L(C*(me+.02),d+m-he-.02,0),color:F(.45),tip:()=>0}),[-1,1].forEach(f=>M.add(new De(_e+.1,.22,.05),{m:L(C*me/2,d+m-he/2+.02,f*(o/2+.66),0,0,-C*de),color:F(.45),tip:()=>0}))}),M.add(new De(.34,.16,o+1.4),{m:L(0,d+m+.12,0,0,0,Math.PI/4),color:F(.32),tip:()=>1});for(let C=0;C<8;C++)M.add(new De(.86+C%2*.04,.3,.86+(C+1)%2*.04),{m:L(g.x,d+.15+C*.3,g.z,0,(R(C,1,1)-.5)*.08,0),color:O,tip:()=>1});M.add(new De(1.05,.08,1.05),{m:L(g.x,d+.15+8*.3-.06,g.z),color:O,tip:()=>1});let nt=new N(g.x,d+.2+8*.3,g.z),Je=(()=>{let C=new jt(.32,1.15,16,12),k=C.attributes.position;for(let f=0;f<k.count;f++){let v=k.getX(f),A=k.getY(f),D=Math.exp(-((A+.12)**2)*18);k.setXYZ(f,v*(1-D*.45)+D*.05,A,Math.sin((v+.16)*58)*(.02+D*.015)+.02)}return C.computeVertexNormals(),C})(),Ht=(C,k,f)=>{let v=f==="front"?0:Math.PI/2,A=(H,G,fe)=>f==="front"?[C+H,k+G,o/2+fe]:[r/2+fe,k+G,C-H],D=(H,G,fe,Ie,Se,Ue,He,dt,ft=0)=>{let[Qe,Et,et]=A(Se,Ue,He);H.add(new De(G,fe,Ie),{m:L(Qe,Et,et,0,v,0),color:dt,tip:()=>ft})},Z=F(.55);D(M,1.32,.09,.4,0,.53,0,Z),D(M,1.32,.09,.4,0,-.53,0,Z),D(M,.09,1.1,.4,-.62,0,0,Z),D(M,.09,1.1,.4,.62,0,0,Z),D(M,.05,1,.06,0,0,0,Z),D(M,1.2,.05,.06,0,0,0,Z),D(M,1.45,.06,.3,0,-.6,.2,Z,1),[-1,1].forEach(H=>D(M,.55,1.05,.04,H*.98,0,.27,G=>{let fe=.42+R(G.x*9,G.y*2,G.z*9)*.1,Ie=Math.abs((G.y+5)%.14-.07)<.012?.75:1;return[fe*.9*Ie,fe*.95*Ie,fe*.92*Ie]}));let[x,S,B]=A(0,0,0);b.add(new jt(1.2,1),{m:L(x,S,B,0,v,0),color:W(1,1,1)}),b.add(new jt(1.2,1),{m:L(x,S,B,0,v+Math.PI,0),color:W(1,1,1)}),[-1,1].forEach(H=>{let[G,fe,Ie]=A(H*.78,.02,-.24),Se=$(Ue=>{let He=.8+R(Ue.x*30,Ue.y*4,Ue.z*30)*.06;return[He,He*.95,He*.85]});[!1,!0].forEach(Ue=>I.add(Je,{m:L(G,fe,Ie,0,v+Math.PI,0),color:Se,flip:Ue}))}),D(I,1.9,.03,.03,0,.62,-.24,W(.3,.25,.2))};Ht(1.35,1.45,"front"),Ht(.3,1.45,"right"),[[h-.05,.08],[u+.05,.08]].forEach(([C,k])=>M.add(new De(k,_,.42),{m:L(C,_/2,o/2),color:F(.55),tip:()=>0})),M.add(new De(u-h+.3,.12,.44),{m:L((h+u)/2,_+.05,o/2),color:F(.55),tip:()=>1});for(let C=0;C<11;C++){let k=-3.25+C*.6+.3;M.add(new De(.57,.08,2.2),{m:L(k,.16,o/2+1.25,0,(R(C,2,2)-.5)*.01,0),color:F(.52+C%3*.04),tip:()=>1})}M.add(new De(6.65,.14,.08),{m:L(.05,.1,o/2+2.36),color:F(.45),tip:()=>0}),M.add(new De(1.4,.07,.3),{m:L((h+u)/2,.05,o/2+2.55),color:F(.5),tip:()=>1});let Ze=-3.4,xt=.6;M.add(new De(xt-Ze,.08,2.55,4,1,4),{m:L((Ze+xt)/2,2.32,o/2+1.3,-.12,0,0),color:(C,k)=>{let f=(k.y<0?.62:.32)+R(C.x*3,0,C.z*9)*.1;return k.y<0?[f,f*.8,f*.6]:[f,f*.93,f*.88]},tip:(C,k)=>k.y>0?1:0}),[Ze+.25,xt-.25].forEach(C=>{M.add(new De(.14,2.2,.14),{m:L(C,1.1,o/2+2.2),color:F(.5),tip:()=>0}),M.add(new De(.08,.7,.08),{m:L(C,1.95,o/2+1.95,.75,0,0),color:F(.5),tip:()=>0})}),M.add(new De(xt-Ze,.14,.14),{m:L((Ze+xt)/2,2.12,o/2+2.2),color:F(.45),tip:()=>1}),M.add(new De(1.4,.06,.4),{m:L(1.45,.47,o/2+.48),color:F(.55),tip:()=>1}),[[.85],[2.05]].forEach(([C])=>M.add(new De(.06,.3,.36),{m:L(C,.32,o/2+.48),color:F(.45),tip:()=>0})),M.add(new De(.04,.04,.3),{m:L(-.5,2,o/2+.3),color:J(.15,.15,.15),tip:()=>0}),M.add(new De(.2,.04,.2),{m:L(-.5,1.98,o/2+.42),color:J(.15,.15,.15),tip:()=>1}),w.add(new De(.15,.22,.15),{m:L(-.5,1.84,o/2+.42),color:W(1,1,1)}),M.add(new We(.32,.29,.85,14),{m:L(r/2+.55,.42,o/2-.45),color:C=>{let k=.45+Math.sin(Math.atan2(C.z,C.x)*14)*.03;return[k,k*.8,k*.6]},tip:(C,k)=>k.y>.5?1:0}),[.12,.72].forEach(C=>M.add(new We(.33,.33,.04,14,1,!0),{m:L(r/2+.55,C,o/2-.45),color:J(.2,.2,.21),tip:()=>0}));for(let C=0;C<4;C++)for(let k=0;k<9-C;k++){let f=-1.6+k*.19+C*.09,v=.11+C*.18;M.add(new We(.09+R(k,C,1)*.03,.1,.7,7),{m:L(-r/2-.58,v,f,0,0,Math.PI/2),color:(A,D)=>Math.abs(D.x)>.9?[.74,.6,.42]:F(.45)(A),tip:()=>1})}M.add(new We(.3,.34,.5,10),{m:L(-r/2-1.4,.25,1.4),color:(C,k)=>k.y>.5?[.7,.58,.42]:F(.45)(C),tip:(C,k)=>k.y>.5?1:0}),M.add(new We(.025,.03,.75,6),{m:L(-r/2-1.3,.75,1.4,0,0,-.55),color:F(.62),tip:()=>0}),M.add(new De(.2,.12,.03),{m:L(-r/2-1.48,.52,1.4,0,0,-.55),color:J(.35,.36,.38),tip:()=>0});for(let C=0;C<y/.5;C++)M.add(new De(1.8,.08,.44),{m:L(-1.3+(C*7%5-2)*.01,.2-C*.012,T+C*.5,0,(C*3%5-2)*.012,0),color:F(.5+C*11%9/60),tip:()=>1});for(let C=0;C<=y/2.2;C++)[-1,1].forEach(k=>{M.add(new We(.09,.09,2.6,6),{m:L(-1.3+k*.85,-1.1-C*.03,T+C*2.2),color:F(.36),tip:()=>0})});[-1,1].forEach(C=>{M.add(new We(.06,.06,1.3,6),{m:L(-1.3+C*.85,.85,T+y-.4),color:F(.36),tip:()=>0}),w.add(new De(.16,.2,.16),{m:L(-1.3+C*.85,1.6,T+y-.4),color:W(1,1,1)})});for(let C=0;C<l-1;C++){let k=a+C*c+c/2;[["front",o/2],["back",-o/2]].forEach(([f,v])=>ie(-r/2+.05,r/2-.05,k,re[f]).forEach(([A,D])=>{M.add(new De(D-A,.035,.02),{m:L((A+D)/2,k,v+Math.sign(v)*(a-.03)),color:Z=>{let x=.72+R(Z.x*9,Z.y*30,0)*.12;return[x,x*.95,x*.86]},tip:()=>1})})),[["left",-r/2],["right",r/2]].forEach(([f,v])=>ie(-o/2+.05,o/2-.05,k+c/2,re[f]).forEach(([A,D])=>{M.add(new De(.02,.035,D-A),{m:L(v+Math.sign(v)*(a-.03),k+c/2,(A+D)/2),color:Z=>{let x=.72+R(0,Z.y*30,Z.z*9)*.12;return[x,x*.95,x*.86]},tip:()=>1})}))}[-1,1].forEach(C=>M.add(new We(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:L(C*(me+.06),d+m-he-.14,0,Math.PI/2,0,C>0?Math.PI:0),color:J(.4,.4,.42),tip:()=>0})),M.add(new We(.035,.035,d+m-he-.2,8),{m:L(r/2+.6,(d+m-he)/2+.4,o/2-.45-.05),color:J(.4,.4,.42),tip:()=>0}),M.add(new We(.015,.02,.7,6),{m:L(0,d+m+.5,-1.4),color:J(.18,.18,.19),tip:()=>0}),M.add(new De(.02,.02,.5),{m:L(0,d+m+.62,-1.4),color:J(.18,.18,.19),tip:()=>0}),M.add(new Mn(.05,.1,4),{m:L(0,d+m+.62,-1.15,Math.PI/2,0,0),color:J(.18,.18,.19),tip:()=>0});{let C=(k,f,v,A,D=1,Z=1,x=1,S=0)=>M.add(k,{m:L(0,d+m+.88+v,-1.4+A,0,Math.PI/2,S,D,Z,x),color:J(.16,.16,.17),tip:()=>0});C(new De(.28,.13,.02),0,0,0),C(new De(.11,.1,.02),0,.11,-.13),[-1,1].forEach(k=>C(new Mn(.03,.06,3),0,.19,-.13+k*.035)),C(new De(.03,.2,.02),0,.12,.16,1,1,1,.4)}let ge=(C,k,f)=>{let v=new vt().compose(new N(C,.82,k),new Ut().setFromAxisAngle(new N(0,1,0),f),new N(1,1,1));M.add(new De(1.3,.2,.24),{m:v.clone().multiply(L(0,0,.12)),color:F(.45),tip:()=>0}),M.add(new De(1.24,.02,.2),{m:v.clone().multiply(L(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let A=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let D=0;D<9;D++){let Z=-.55+D*.14,x=.1+R(D,C,1)*.1;M.add(new We(.006,.006,x,4),{m:v.clone().multiply(L(Z,.1+x/2,.12+(D%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),M.add(new Jt(.03,6,5),{m:v.clone().multiply(L(Z,.1+x,.12+(D%2-.5)*.08)),color:()=>A[D%4],tip:()=>0})}};ge(1.35,o/2+.2,0),ge(r/2+.2,-.3,Math.PI/2),M.add(new De(1,.015,.6),{m:L((h+u)/2,.205,o/2+.55),color:$(C=>Math.floor((C.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),M.add(new We(.015,.015,1.2,6),{m:L(h-.3,.8,o/2+.25,.08,0,.12),color:F(.6),tip:()=>0}),M.add(new Mn(.12,.3,8),{m:L(h-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([C,k],f)=>{M.add(new De(.48,.32,.4),{m:L(C,.36+k,o/2+1.9,0,f*.3,0),color:v=>{let A=.55+(Math.abs((v.y+9)*9%1-.5)<.1?-.1:0)+R(v.x*9,v.y,v.z*9)*.08;return[A,A*.84,A*.62]},tip:(v,A)=>A.y>.5?1:0})}),M.add(new We(.05,.06,1.7,8),{m:L(xt+.6,.85,o/2+2.9),color:F(.4),tip:()=>0}),M.add(new De(.2,.05,.2),{m:L(xt+.6,1.72,o/2+2.9),color:J(.15,.15,.15),tip:()=>1}),w.add(new De(.15,.2,.15),{m:L(xt+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),M.add(new Mn(.15,.12,4),{m:L(xt+.6,2,o/2+2.9,0,Math.PI/4,0),color:J(.15,.15,.15),tip:()=>1});for(let C=0;C<6;C++){let k=(h+u)/2-1.6-C*.65+Math.sin(C*1.7)*.2,f=o/2+2.9+C*.35;M.add(new We(.28+R(C,3,3)*.1,.3,.06,9),{m:L(k,0,f,0,C,0,1,1,.8),color:O,tip:()=>1})}let xe=r/2-a,Ce=o/2-a;for(let C=-xe,k=0;C<xe-.01;C+=.2,k++){let f=ln("wood",D=>{let Z=(.5+k%4*.025)*(.92+R(D.x*4,0,D.z*1.2)*.16)*(Math.abs((D.z+9+k*.37)%1.6-.8)<.01?.7:1);return[Z,Z*.8,Z*.6]}),v=C+.1;(v>ot.x0&&v<ot.x1?[[-Ce-.05,ot.bottom],[ot.top,Ce+.05]]:[[-Ce-.05,Ce+.05]]).forEach(([D,Z])=>{Z-D>.02&&I.add(new De(.195,.06,Z-D),{m:L(v,.09,(D+Z)/2),color:f})})}for(let C=ot.bottom;C<=1.5;C+=.55)I.add(new De(.05,.9,.05),{m:L(ot.x0-.02,.57,C),color:F(.5)});I.add(new De(.07,.06,1.5-ot.bottom+.05),{m:L(ot.x0-.02,1.04,(ot.bottom+1.5)/2),color:F(.55)}),I.add(new De(ot.x1-ot.x0+.05,.06,.07),{m:L((ot.x0+ot.x1)/2,1.04,ot.bottom-.02),color:F(.55)}),[ot.x0+.5,ot.x1-.03].forEach(C=>I.add(new De(.05,.9,.05),{m:L(C,.57,ot.bottom-.02),color:F(.5)})),I.add(new De(.03,.16,.36),{m:L(ot.x0-.05,.86,1.5),color:F(.62)}),I.add(new We(.17,.17,.04,24),{m:L(-.4,1.8,Ce-.03,Math.PI/2,0,0),color:F(.45)}),I.add(new We(.14,.14,.01,24),{m:L(-.4,1.8,Ce-.055,Math.PI/2,0,0),color:ln("paper",()=>[.9,.87,.8])}),I.add(new De(.008,.1,.006),{m:L(-.4,1.83,Ce-.065,0,0,.5),color:()=>[.1,.1,.1]}),I.add(new De(.008,.12,.006),{m:L(-.4,1.84,Ce-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),I.add(new We(.015,.015,1.5,6),{m:L(g.x,1.62,-Ce+.62,0,0,Math.PI/2),color:J(.2,.2,.2)}),[-.5,-.1,.35].forEach((C,k)=>{I.add(new We(.1-k*.015,.08-k*.012,.13,12),{m:L(g.x+C,1.42,-Ce+.64),color:J(.62,.36,.22)}),I.add(new We(.008,.008,.14,4),{m:L(g.x+C,1.55,-Ce+.64),color:J(.2,.2,.2)})}),I.add(new Jt(.12,12,8),{m:L(g.x-.7,.31,-Ce+.75,0,0,0,1,.8,1),color:J(.2,.2,.22)}),I.add(new We(.015,.03,.12,6),{m:L(g.x-.58,.36,-Ce+.75,0,0,-.9),color:J(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([C,k])=>I.add(new We(.025,.025,k,8),{m:L(g.x+C,1.52+k/2,-Ce+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([C,k])=>I.add(new De(.05,.22,.16),{m:L(g.x+C,1.63,-Ce+.4),color:()=>k})),[-1.1,1.1].forEach(C=>I.add(new De(r-.2,.2,.2),{m:L(0,d-.02,C),color:F(.42)})),I.add(new De(.2,.22,o+.2),{m:L(0,d+m-.2,0),color:F(.42)}),[-1,1].forEach(C=>[-1.8,0,1.8].forEach(k=>I.add(new De(_e-.6,.14,.1),{m:L(C*(me-.3)/2,d+m-he*.47-.1,k,0,0,-C*de),color:F(.4)})));let je=g;I.add(new De(1.95,.12,1),{m:L(je.x,.17,-Ce+.5),color:O}),[-1,1].forEach(C=>I.add(new De(.36,1.25,.7),{m:L(je.x+C*.76,.85,-Ce+.35),color:O})),I.add(new De(1.2,1.25,.2),{m:L(je.x,.85,-Ce+.1),color:C=>{let k=O(C);return[k[0]*.45,k[1]*.42,k[2]*.4]}}),I.add(new De(2,.16,.42),{m:L(je.x,1.44,-Ce+.4),color:F(.42)});for(let C=0;C<4;C++)I.add(new De(1.3-C*.04,.3,.55),{m:L(je.x,1.67+C*.3,-Ce+.27),color:O});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([C,k])=>I.add(new We(.07,.08,.7,7),{m:L(je.x+C*.4,.3,-Ce+.42,0,k,Math.PI/2),color:(f,v)=>Math.abs(v.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),w.add(new De(.9,.05,.45),{m:L(je.x,.25,-Ce+.42),color:W(1,.62,.3)}),I.add(new We(.28,.24,.32,10,1,!0),{m:L(je.x-1.25,.28,-Ce+.35),color:F(.5)});for(let C=0;C<5;C++)I.add(new We(.05,.05,.55,6),{m:L(je.x-1.25+(C-2)*.08,.42+C%2*.04,-Ce+.35,.2*(C-2),0,Math.PI/2+.1),color:F(.5)});let Ke=[],Mt=11,Dt=()=>(Mt=Mt*16807%2147483647,Mt/2147483647),_t=(C,k,f,v,A,D=!1)=>{let Z=document.createElement("canvas");Z.width=C,Z.height=k,f(Z.getContext("2d"),C,k);let x=new Pi(Z);x.colorSpace=zn,x.anisotropy=8;let S=new gt(v,new Ln({map:x,color:12432296,alphaTest:D?.5:0}));return S.applyMatrix4(A),S.receiveShadow=!0,Ke.push(S),S},ze=(C,k,f,v=.05)=>{for(let A=0;A<k*f*v;A++)C.fillStyle=Dt()<.5?"rgba(0,0,0,0.12)":"rgba(255,245,225,0.09)",C.fillRect(Dt()*k,Dt()*f,1.5,1.5)},ce=C=>(k,f,v)=>{k.clearRect(0,0,f,v);let A=16,D=(v/2-2)/A;for(let Z=0;Z<A;Z++){let x=f/2-2-Z*D,S=v/2-2-Z*D;k.fillStyle=C[(Z*5+Z%3)%C.length],k.beginPath(),k.ellipse(f/2,v/2,Math.max(x,1),Math.max(S,1),0,0,z),k.fill(),k.strokeStyle="rgba(0,0,0,0.22)",k.lineWidth=1.2;let B=Math.PI*(x+S),H=Math.floor(B/7);for(let G=0;G<H;G++){let fe=G/H*z,Ie=f/2+Math.cos(fe)*(x-D/2),Se=v/2+Math.sin(fe)*(S-D/2),Ue=(Z%2?1:-1)*D*.35;k.beginPath(),k.moveTo(Ie-Math.sin(fe)*Ue-Math.cos(fe)*D*.4,Se+Math.cos(fe)*Ue-Math.sin(fe)*D*.4),k.lineTo(Ie+Math.sin(fe)*Ue+Math.cos(fe)*D*.4,Se-Math.cos(fe)*Ue+Math.sin(fe)*D*.4),k.stroke()}}k.globalCompositeOperation="source-atop",ze(k,f,v,.03),k.globalCompositeOperation="source-over"},le=(C,k,f)=>{C.clearRect(0,0,k,f);let v=14,A=["#7d3b2e","#c7b48c","#3e5363","#a5622f","#e0d4b6","#5b6b4b"];for(let D=2;D<f-2;D+=4)C.fillStyle="#ddd2b8",C.fillRect(0,D,v+1,2),C.fillRect(k-v-1,D,v+1,2);for(let D=v,Z=0;D<k-v;Z++){let x=6+Math.floor(Dt()*14);C.fillStyle=A[Z%A.length],C.fillRect(D,0,Math.min(x,k-v-D),f),D+=x}for(let D=0;D<f;D+=3)C.fillStyle="rgba(0,0,0,0.1)",C.fillRect(v,D,k-2*v,1);ze(C,k,f,.04)},Me=(C,k,f)=>{let v=["#8b2f2a","#c9b98e","#3f566a","#6d7f52","#b36a35","#e6dcc4","#5a3d52","#a44b3e"],Z=k/10,x=f/7;for(let S=0;S<10;S++)for(let B=0;B<7;B++)if(C.fillStyle=v[Math.floor(Dt()*v.length)],C.fillRect(S*Z,B*x,Z,x),Dt()<.5&&(C.fillStyle=v[Math.floor(Dt()*v.length)],C.beginPath(),C.moveTo(S*Z,B*x),C.lineTo(S*Z+Z,B*x+x),C.lineTo(S*Z,B*x+x),C.fill()),Dt()<.3){C.fillStyle="rgba(255,255,255,0.18)";for(let H=0;H<6;H++)C.fillRect(S*Z+Dt()*Z,B*x+Dt()*x,3,3)}C.strokeStyle="rgba(250,240,220,0.55)",C.setLineDash([4,4]),C.lineWidth=1.2;for(let S=0;S<=10;S++)C.beginPath(),C.moveTo(S*Z+3,0),C.lineTo(S*Z+3,f),C.stroke();for(let S=0;S<=7;S++)C.beginPath(),C.moveTo(0,S*x+3),C.lineTo(k,S*x+3),C.stroke();C.setLineDash([]),ze(C,k,f,.02)},Te=(C,k,f,v=0)=>new vt().compose(new N(C,k,f),new Ut().setFromEuler(new Sn(-Math.PI/2,v,0,"YXZ")),new N(1,1,1));_t(768,512,ce(["#7a3a2c","#b78d5c","#4a5a66","#d8c8a4","#8a5a3a","#5d6a4c","#9e4632"]),new jt(2.4,1.6),Te(.55,.124,.5),!0),_t(512,320,le,new jt(1,.62),Te(-1.95,.124,-.85),!0),_t(512,256,le,new jt(.9,.45),Te((h+u)/2,.124,Ce-.45),!0);let pe=-xe+.02,ve=pe+1.95,Pe=-Ce+.02,V=Pe+1,it=(pe+ve)/2,Ee=(Pe+V)/2,U=C=>hn([[.045,0],[.045,.1],[.032,.13],[.03,C*.4],[.048,C*.47],[.032,C*.55],[.028,C-.12],[.042,C-.08],[.02,C-.05],[.032,C-.02],[0,C]],10);[[pe+.05,Pe+.05,1.05],[pe+.05,V-.05,1.05],[ve-.05,Pe+.05,.72],[ve-.05,V-.05,.72]].forEach(([C,k,f])=>I.add(U(f),{m:L(C,.12,k),color:F(.45)})),[[pe+.05,.95,.3],[ve-.05,.68,.18]].forEach(([C,k,f])=>{I.add(Le(.06,.08,V-Pe-.1,.02,1),{m:L(C,k,Ee),color:F(.5)}),I.add(Le(.05,.06,V-Pe-.1,.015,1),{m:L(C,k-f,Ee),color:F(.5)});for(let v=Pe+.16;v<V-.1;v+=.11)I.add(new We(.012,.012,f,6),{m:L(C,k-f/2,v),color:F(.48)})}),[Pe+.05,V-.05].forEach(C=>I.add(Le(ve-pe-.1,.14,.05,.015,1),{m:L(it,.36,C),color:F(.45)})),I.add(ee(ve-pe-.1,.04,V-Pe-.1),{m:L(it,.33,Ee),color:F(.4)}),I.add(Le(ve-pe-.12,.17,V-Pe-.08,.06,2),{m:L(it,.48,Ee),color:W(.88,.86,.8,"fabric")}),_t(512,360,Me,Le(1.4,.035,V-Pe+.06,.015,1),L(ve-.75,.585,Ee+.02)),_t(512,120,Me,Le(1.4,.26,.025,.01,1),L(ve-.75,.46,V+.03)),I.add(Le(.4,.06,V-Pe-.06,.025,2),{m:L(ve-.24,.62,Ee),color:$(C=>Math.sin(C.z*60)>.5?[.32,.2,.18]:[.5,.24,.2])}),[[Ee-.22,.1],[Ee+.2,-.12]].forEach(([C,k])=>I.add(Le(.34,.12,.42,.06,2),{m:L(pe+.3,.63,C,0,k,.25),color:W(.93,.91,.87,"fabric")}));{let C=ve+.45,k=Pe+.25;I.add(Le(.7,.36,.42,.02,1),{m:L(C,.31,k),color:F(.5)}),I.add(new We(.21,.21,.7,16,1,!1,-Math.PI/2,Math.PI),{m:L(C,.49,k,0,0,Math.PI/2,1,1,.45),color:F(.52)}),[-.24,0,.24].forEach(f=>I.add(new We(.215,.215,.035,16,1,!0,-Math.PI/2,Math.PI),{m:L(C+f,.49,k,0,0,Math.PI/2,1,1,.46),color:J(.2,.2,.21)})),[-.24,0,.24].forEach(f=>I.add(ee(.035,.36,.43),{m:L(C+f,.31,k),color:J(.2,.2,.21)})),I.add(Le(.1,.12,.02,.01,1),{m:L(C,.44,k+.22),color:J(.55,.45,.25)}),[-1,1].forEach(f=>I.add(new Gn(.04,.008,4,10,Math.PI),{m:L(C+f*.36,.38,k,0,Math.PI/2,Math.PI),color:J(.2,.2,.21)}))}let p={x:.9,z:.6};I.add(Le(1.3,.055,.85,.02,2),{m:L(p.x,.885,p.z),color:F(.55)}),I.add(Le(1.12,.09,.68,.01,1),{m:L(p.x,.81,p.z),color:F(.46)});let X=hn([[.03,0],[.036,.04],[.026,.12],[.04,.3],[.03,.48],[.036,.56],[.034,.64],[.034,.7]],8);[[-.56,-.34],[.56,-.34],[-.56,.34],[.56,.34]].forEach(([C,k])=>I.add(X,{m:L(p.x+C,.12,p.z+k),color:F(.45)}));let K=hn([[.016,0],[.02,.05],[.015,.16],[.022,.28],[.018,.4],[.02,.44]],6);[-1,1].forEach(C=>{let k=new vt().compose(new N(p.x,.12,p.z+C*.68),new Ut().setFromAxisAngle(new N(0,1,0),C<0?0:Math.PI),new N(1,1,1)),f=(v,A,D)=>I.add(v,{m:k.clone().multiply(A),color:D});f(Le(.44,.045,.42,.02,2),L(0,.46,0),F(.52)),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(([v,A])=>f(K,L(v*1.08,0,A*1.08,A*.4,0,-v*.4),F(.45))),f(new We(.01,.01,.36,6),L(0,.16,0,0,0,Math.PI/2),F(.45));for(let v=-2;v<=2;v++){let A=v*.075,D=.31-Math.sqrt(.25-A*A);f(new We(.009,.011,.5,6),L(A,.73,D-.01,-.08,0,0),F(.5))}f(new Gn(.5,.022,6,16,.9),L(0,.98,.31-.02,-Math.PI/2,0,Math.PI/2-.45),F(.52))}),I.add(hn([[0,0],[.07,0],[.075,.02],[.05,.05],[.055,.09],[.03,.1]],12),{m:L(p.x+.35,.91,p.z-.15),color:J(.6,.47,.25)}),b.add(hn([[.03,0],[.06,.06],[.065,.12],[.035,.22],[.03,.28]],12),{m:L(p.x+.35,1.01,p.z-.15),color:W(1,1,1)}),w.add(new Jt(.018,8,6),{m:L(p.x+.35,1.07,p.z-.15,0,0,0,1,2,1),color:W(1,1,1)}),I.add(hn([[.04,0],[.045,.01],[.042,.1],[.046,.105]],12),{m:L(p.x-.3,.91,p.z+.2),color:W(.75,.73,.7,"paper")}),I.add(new Gn(.025,.007,5,10),{m:L(p.x-.25,.965,p.z+.2,0,0,Math.PI/2),color:W(.75,.73,.7,"paper")}),I.add(Le(.22,.04,.3,.008,1),{m:L(p.x-.25,.93,p.z-.2,0,.3,0),color:W(.3,.36,.42,"leather")}),I.add(hn([[0,0],[.08,0],[.14,.04],[.165,.075],[.155,.08]],16),{m:L(p.x+.05,.91,p.z+.15),color:F(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([C,k],f)=>I.add(new Jt(.055,10,7),{m:L(p.x+.05+C,.99+(f===3?.04:0),p.z+.15+k),color:W(.66,.66,.65)}));{let C=new vt().compose(new N(.05,.12,-1),new Ut().setFromAxisAngle(new N(0,1,0),2.12),new N(1,1,1)),k=(f,v,A)=>I.add(f,{m:C.clone().multiply(v),color:A});[-1,1].forEach(f=>{let v=[];for(let A=-.36;A<=.361;A+=.06)v.push(new N(f*.22,.03+.75-Math.sqrt(.5625-A*A),A));k(new Gi(new gr(v),16,.02,5),L(),F(.42)),k(new We(.018,.02,.4,6),L(f*.22,.2,.18),F(.45)),k(new We(.018,.02,.95,6),L(f*.22,.5,-.2,-.18,0,0),F(.45)),k(Le(.05,.03,.5,.012,1),L(f*.25,.62,0),F(.52))}),k(Le(.48,.045,.44,.02,2),L(0,.4,0),F(.5)),k(Le(.42,.05,.4,.025,2),L(0,.44,.01),$(()=>[.5,.24,.2]));for(let f=0;f<4;f++)k(Le(.4,.07,.015,.006,1),L(0,.58+f*.12,-.25-f*.02,-.18,0,0),F(.5));k(Le(.36,.34,.03,.015,1),L(.03,.82,-.3,-.18,0,.05),$(f=>Math.sin(f.y*90)>0?[.66,.6,.48]:[.58,.52,.4])),k(Le(.38,.05,.08,.02,1),L(.03,1,-.33,0,0,.05),$(()=>[.62,.56,.44]))}{let C=new vt().compose(new N(-xe,.12,-.45),new Ut().setFromAxisAngle(new N(0,1,0),Math.PI/2),new N(1,1,1)),k=(f,v,A,D=I)=>D.add(f,{m:C.clone().multiply(v),color:A});k(Le(1.5,.74,.52,.012,1),L(0,.45,.27),F(.46)),k(ee(1.46,.08,.46),L(0,.04,.24),F(.3)),[-.49,0,.49].forEach((f,v)=>{k(Le(.45,.6,.03,.008,1),L(f,.46,.54),F(.52)),k(Le(.31,.44,.02,.015,1),L(f,.46,.56),F(.44)),k(new Jt(.016,8,6),L(f+(v===1?0:f<0?.17:-.17),.62,.575),J(.2,.2,.21))}),k(Le(1.56,.06,.6,.015,2),L(0,.85,.3),ln("wood",f=>{let v=.58+(Math.abs(f.x*12.5%1)<.06?-.08:0)+R(f.x*9,f.y,f.z*3)*.08;return[v*1.04,v*.8,v*.56]})),k(hn([[0,-.13],[.12,-.12],[.19,-.06],[.21,0],[.225,.01]],18),L(-.35,.99,.3),W(.9,.9,.86,"metal")),k(new Gn(.222,.01,5,24),L(-.35,1,.3,Math.PI/2,0,0),W(.15,.2,.36,"metal")),k(new We(.045,.05,.42,10),L(-.35,1.08,.06),J(.16,.16,.17)),k(new We(.02,.025,.2,8),L(-.35,1.22,.16,Math.PI/2-.3,0,0),J(.16,.16,.17)),k(new We(.012,.012,.42,6),L(-.35,1.38,0,.9,0,0),J(.16,.16,.17)),k(Le(.42,.03,.28,.01,1),L(.35,.895,.32,0,.15,0),F(.62)),k(Le(.28,.12,.14,.06,2),L(.33,.97,.32,0,.1,0),ln("plain",f=>f.y>.99?[.62,.38,.18]:[.75,.55,.3])),k(Le(.2,.01,.03,.004,1),L(.55,.915,.42,0,-.3,0),J(.7,.7,.72)),k(Le(.9,.03,.16,.008,1),L(.1,1.52,.08),F(.48)),k(Le(.9,.025,.02,.006,1),L(.1,1.6,.15),F(.48)),[-.22,.02,.26].forEach((f,v)=>k(new We(.12,.12,.015,20),L(f,1.66,.06,Math.PI/2-.15,0,0),v===1?W(.82,.84,.86,"metal"):W(.86,.84,.78,"plaster"))),[.42,.52].forEach(f=>k(hn([[0,0],[.035,0],[.04,.09],[.042,.095]],10),L(f,1.535,.08),W(.3,.4,.5,"plaster"))),k(new We(.015,.015,1.4,6),L(0,2.05,.25,0,0,Math.PI/2),F(.4)),[-.55,-.3,-.05,.2,.45].forEach((f,v)=>{k(new We(.002,.002,.14,3),L(f,1.97,.25),W(.5,.45,.35)),k(new Mn(.06+v%2*.02,.26,7),L(f,1.78,.25,Math.PI,v,0),v%3===0?W(.42,.46,.28,"fabric"):v%3===1?W(.55,.5,.32,"fabric"):W(.5,.36,.42,"fabric"))})}[1.35,1.75].forEach(C=>{I.add(new De(.26,.04,1.3),{m:L(-xe+.14,C,.9),color:F(.5)}),I.add(new De(.04,.16,.04),{m:L(-xe+.04,C-.1,.35),color:F(.4)}),I.add(new De(.04,.16,.04),{m:L(-xe+.04,C-.1,1.45),color:F(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([C,k,f,v])=>{I.add(new We(k,k,f,10),{m:L(-xe+.14,1.37+f/2,C),color:W(...v)}),I.add(new We(k*.8,k*.8,.03,10),{m:L(-xe+.14,1.38+f,C),color:W(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([C,k,f],v)=>{I.add(new De(.18,k,.05),{m:L(-xe+.14,1.77+k/2,C,v===4?.25:0,0,0),color:W(...f)})}),I.add(new We(.015,.015,.12,5),{m:L(-2.6,1.7,Ce-.06,Math.PI/2,0,0),color:F(.4)}),I.add(new De(.42,.85,.12),{m:L(-2.6,1.25,Ce-.1),color:$(C=>{let k=.32+R(C.x*9,C.y*9,0)*.04;return[k*.85,k,k*.9]})}),[-2.7,-2.48].forEach(C=>{I.add(new De(.11,.26,.13),{m:L(C,.25,Ce-.2),color:W(.2,.16,.13)}),I.add(new De(.11,.07,.26),{m:L(C,.155,Ce-.26),color:W(.2,.16,.13)})}),I.add(new De(.5,.38,.03),{m:L(-.25,1.6,-Ce+.02),color:F(.4)}),I.add(new jt(.4,.28),{m:L(-.25,1.6,-Ce+.04),color:C=>C.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let j=new nn,ae=u-h-.04;for(let C=0;C<5;C++)j.add(new De(ae/5-.008,_-.04,.06),{m:L(.02+ae/10+C*ae/5,(_-.04)/2,0),color:F(.5+C%2*.04),tip:()=>0});[.35,_-.4].forEach(C=>j.add(new De(ae-.1,.12,.04),{m:L(.02+ae/2,C,-.05),color:F(.46),tip:()=>0})),j.add(new De(.1,Math.hypot(ae-.2,_-.95),.04),{m:L(.02+ae/2,_/2-.02,-.05,0,0,Math.atan2(ae-.2,_-.95)),color:F(.46),tip:()=>0}),[.06,-.08].forEach(C=>j.add(new We(.02,.02,.14,6),{m:L(ae-.1,1,C),color:J(.18,.18,.19),tip:()=>0})),[.3,_-.3].forEach(C=>j.add(new De(.4,.05,.075),{m:L(.22,C,0),color:J(.18,.18,.19),tip:()=>0}));let ue=new nn;ue.add(new Jt(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:L(0,0,0,0,0,0,1.25,.42,.5),color:C=>C.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),ue.add(new De(.16,.05,.9),{m:L(.1,-.08,0),color:W(.5,.4,.3),tip:()=>1}),ue.add(new De(.16,.05,.75),{m:L(-.6,-.08,0),color:W(.5,.4,.3),tip:()=>1}),ue.add(new We(.025,.025,2.2,5),{m:L(.2,0,.1,0,.3,1.45),color:W(.55,.45,.32),tip:()=>0});let te={value:1},q=qn({...e,uFrost:{value:0}},te,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),we=qn({...e,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},te,{color:14865600,grain:.018,rich:!0,indoor:!0}),Oe=qn({...e,uFrost:{value:0}},te,{color:13812656,snowMask:!0,side:wn,rich:!0,grain:.02}),Ne=new Nn({color:1315860}),ke=new Nn({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),Ge=new Pn;Ge.position.set(Bt.x,Bt.y,Bt.z),Ge.rotation.y=Bt.yaw,Ge.scale.setScalar(s);let st=new gt(M.geometry(),q);st.castShadow=!0,st.receiveShadow=!0;let be=new gt(I.geometry(),we);be.receiveShadow=!0,be.castShadow=!0;let Y=new gt(w.geometry(),Ne),Ae=new gt(b.geometry(),ke);Ae.renderOrder=2;let ye=new gt(j.geometry(),q);ye.castShadow=!0;let Ve=new Pn;Ve.position.set(h+.02,.1,o/2),Ve.add(ye);let Ye=new gt(ue.geometry(),Oe);Ye.castShadow=!0,Ye.position.set(.9,0,T+y-2.5),Ye.rotation.y=.12;let Re=new Nn({color:16752704,transparent:!0,opacity:.85,blending:fi,depthWrite:!1}),Xe=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([C,k])=>{let f=new gt(new Mn(.09,1,7,1,!0).translate(0,.5,0),Re);return f.position.set(g.x+C,.3,-Ce+.42),f.userData.h=k,Ge.add(f),f});Ge.add(st,be,Y,Ae,Ve,Ye),Ke.forEach(C=>Ge.add(C)),i.add(Ge),Ge.updateMatrixWorld(!0);let lt=sf({group:Ge,mats:{inn:we,glow:Ne},camera:n,U:t}),ut=new Vi(16752728,0,46,1.4);ut.position.copy(new N(g.x,.9,-Ce+1.1)).applyAxisAngle(new N(0,1,0),Bt.yaw).multiplyScalar(s).add(Ge.position),i.add(ut),ut.castShadow=!0,ut.shadow.autoUpdate=!1,ut.shadow.mapSize.set(512,512),ut.shadow.camera.near=.5,ut.shadow.camera.far=46,ut.shadow.bias=-.003,ut.shadow.normalBias=.2,ut.shadow.camera.layers.set(5),[st,be,ye].forEach(C=>C.layers.enable(5));let Nt=(()=>{let C=lt.glowSpots,k=Math.PI*2,f=[{p:[g.x,.45,-Ce+.45],size:1.7,color:[1,.5,.2],flicker:1},{p:[.9+.35,1.07,.6-.15],size:.5,color:[1,.7,.4],flicker:1}];for(let A=0;A<8;A++){let D=A/8*k;f.push({p:[C.CH.x+Math.cos(D)*.82,C.CH.y+.2,C.CH.z+Math.sin(D)*.82],size:.32,color:[1,.72,.4],flicker:1})}for(let A=0;A<6;A++){let D=A/6*k+.3;f.push({p:[C.CH.x+Math.cos(D)*.42,C.CH.y+.6,C.CH.z+Math.sin(D)*.42],size:.3,color:[1,.72,.4],flicker:1})}f.push({p:[-3.2,C.F+1.52,-.9],size:.9,color:[1,.78,.5]},{p:[.6,C.F+1.06,-7.98],size:.5,color:[.9,.95,.7]}),[-1,1].forEach(A=>f.push({p:[-1.8+A*1.5,C.F+2.37,C.Z1-.19],size:.6,color:[1,.75,.45]})),[-5.35,-3,-.9,.9,3,5.35].forEach(A=>f.push({p:[A,C.SLAB-.02,-8.55],size:.36,color:[1,.88,.7]})),[-6,-3.4,-.8,1.6].forEach(A=>[-5.45,2.7,5].forEach(D=>f.push({p:[D,C.SLAB-.02,A],size:.36,color:[1,.88,.7]})));let v=(A,D)=>[A,D];return Zd({group:Ge,U:t,beams:[{rect:[[-.95,C.F+2.62,C.Z0+.04],[.95,C.F+2.62,C.Z0+.04],[.95,C.F+.55,C.Z0+.04],[-.95,C.F+.55,C.Z0+.04]],dir:[.1,-.5,1],len:6.5,k:1.2},{rect:[[.75,1.95,o/2-.2],[1.95,1.95,o/2-.2],[1.95,.95,o/2-.2],[.75,.95,o/2-.2]],dir:[-.25,-.55,-1],len:3.2,k:1},{rect:[[r/2-.2,1.95,-.3],[r/2-.2,1.95,.9],[r/2-.2,.95,.9],[r/2-.2,.95,-.3]],dir:[-1,-.5,.15],len:3,k:.8}],halos:f,dust:[{box:[-4.6,1.4,C.F+.3,C.C-.5,-9.2,2.2],n:520},{box:[-2.9,2.9,.3,2.5,-2.2,2.2],n:170}]})})(),yn=ut.position.clone(),se=(()=>{let k=new qt,f=new Float32Array(90*3),v=new Float32Array(90);for(let Z=0;Z<90;Z++)v[Z]=Z/90;k.setAttribute("position",new en(f,3)),k.setAttribute("aSeed",new en(v,1));let A=new tn({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0},uColor:{value:new ct(13224393)},uSize:{value:70}},vertexShader:`
        uniform float uTime, uSize; attribute float aSeed; varying float vA;
        void main() {
          float t = fract(uTime * 0.045 + aSeed);
          vec3 p = vec3(sin(aSeed * 91.0) * (0.6 + t * 5.0) + t * t * 30.0 + sin(uTime * 0.3 + aSeed * 20.0) * 3.0 * t, t * 55.0, cos(aSeed * 47.0) * (0.6 + t * 5.0) + t * 8.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize * (0.35 + t * 2.2) * (60.0 / -mv.z);
          vA = smoothstep(0.0, 0.12, t) * (1.0 - t) * (1.0 - t) * 0.22;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(uColor, a * a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),D=new _i(k,A);return D.frustumCulled=!1,D.position.copy(Ge.localToWorld(nt.clone())),i.add(D),D})(),Qt=(C,k)=>{let f=(C-Bt.x)/s,v=(k-Bt.z)/s,A=Math.cos(Bt.yaw),D=Math.sin(Bt.yaw);return[f*A-v*D,f*D+v*A]},$t=(C,k)=>{let f=Math.cos(Bt.yaw),v=Math.sin(Bt.yaw);return[Bt.x+(C*f+k*v)*s,Bt.z+(-C*v+k*f)*s]},oi=[[-r/2-.3,r/2+.3,-o/2-a,-o/2+a],[-r/2-a,-r/2+a,-o/2-.3,o/2+.3],[r/2-a,r/2+a,-o/2-.3,o/2+.3],[-r/2-.3,h,o/2-a,o/2+a],[u,r/2+.3,o/2-a,o/2+a],[pe,ve,Pe,V],[ve+.08,ve+.82,Pe,Pe+.5],[p.x-.65,p.x+.65,p.z-.43,p.z+.43],[p.x-.25,p.x+.25,p.z-.95,p.z-.45],[p.x-.25,p.x+.25,p.z+.45,p.z+.95],[je.x-1,je.x+1,-Ce-.1,-Ce+1],[je.x-1.55,je.x-.95,-Ce,-Ce+.65],[-xe,-xe+.3,.25,1.55],[-xe,-xe+.62,-1.22,.32],[-.3,.4,-1.4,-.65],[.8,2.15,o/2+.26,o/2+.7],[-r/2-.95,-r/2-.2,-1.75,0],[r/2+.2,r/2+.9,o/2-.8,o/2-.1],[-r/2-1.75,-r/2-1.05,1.05,1.75],[Ze+.15,Ze+.35,o/2+2.1,o/2+2.3],[xt-.35,xt-.15,o/2+2.1,o/2+2.3]];oi.push([ot.x0-.07,ot.x0+.02,ot.bottom-.05,1.5],[ot.x0,ot.x1,ot.bottom-.09,ot.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[xt+.5,xt+.7,o/2+2.8,o/2+3]);let _n=[h,u,o/2-.1,o/2+.1],ai=[h-.06,h+.08,o/2-ae-.05,o/2],Yn=(C,k,[f,v,A,D],Z)=>C>f-Z&&C<v+Z&&k>A-Z&&k<D+Z,Vt={open:!1,a:0,from:0,t0:-1e9},rt=$t((h+u)/2,o/2),vn=C=>C.feet===void 0?1e9:(C.feet-Bt.y)/s,mi=C=>C>-.7?"ground":C<-3.2?"study":"stairs",as=(C,k)=>C>ot.x0&&C<ot.x1&&k>ot.bottom&&k<ot.top,Qn=(C,k)=>C>En.x0&&C<En.x1&&k>En.z0&&k<En.z1,cs=(C,k)=>C>-r/2+a-.05&&C<r/2-a+.05&&k>-o/2+a&&k<o/2+a+.05,Kt=(C,k,f,v)=>{let A=[$t(C,f),$t(k,f),$t(C,v),$t(k,v)];return[Math.min(...A.map(D=>D[0])),Math.max(...A.map(D=>D[0])),Math.min(...A.map(D=>D[1])),Math.max(...A.map(D=>D[1]))]};return{group:Ge,study:lt,feet:void 0,holeBox:Kt(-r/2+a,r/2-a,-o/2+a,o/2-a),studyBox:Kt(En.x0-.3,En.x1+.3,En.z0-.3,En.z1+.3),blocked(C,k,f=0){let[v,A]=Qt(C,k);if(Math.abs(v)>En.x1+3||A<En.z0-3||A>o/2+4)return!1;let D=.17+f/s,Z=mi(vn(this));if(Z==="stairs")return v<ot.x0+D||v>ot.x1-D||A>ot.top+.05;if(Z==="study")return tf(v,A,D,vn(this));if(Math.abs(v)>r/2+3||A<-o/2-3)return!1;for(let x of oi)if(Yn(v,A,x,D))return!0;return!!(Vt.a<.5?Yn(v,A,_n,D):Yn(v,A,ai,D*.6))},inside(C,k){let[f,v]=Qt(C,k);return Math.abs(f)<r/2&&Math.abs(v)<o/2||Qn(f,v)&&vn(this)<-1},floorAt(C,k){let[f,v]=Qt(C,k),A=S=>Bt.y+S*s,D=vn(this),Z=[];as(f,v)?Z.push([rs(v),!0]):cs(f,v)&&Z.push([.12,!0]);for(let S of nf(f,v))Z.push([S,!0]);if(f>-3.3&&f<3.4&&v>=o/2+a+.05&&v<o/2+2.4&&Z.push([.2,!1]),f>-2.25&&f<-.35&&v>T-.3&&v<T+y&&Z.push([.24-(v-T)*.024,!1]),!Z.length)return null;let x=null;for(let S of Z)S[0]<=D+.6&&(!x||S[0]>x[0])&&(x=S);return x||(x=Z.reduce((S,B)=>Math.abs(B[0]-D)<Math.abs(S[0]-D)?B:S)),{y:A(x[0]),under:x[1]}},door:{mesh:ye,near(C,k){return Math.hypot(C-rt[0],k-rt[1])<13},get open(){return Vt.open},canToggle(C,k){if(!Vt.open)return!0;let[f,v]=Qt(C,k);return!Yn(f,v,[h-.1,u+.1,o/2-ae-.1,o/2+.25],.17)},toggle(C){return Vt.open=!Vt.open,Vt.from=Vt.a,Vt.t0=C,Vt.open}},update(C,k,f,v){let A=C.pCabin,D=A>.01;if(D&&(this.syncT>f-1500||(this.syncT=f,lt.sync()),lt.update(k,f)),lt.lampLight.intensity=D?120*(.96+.04*Math.sin(k*3.1)):0,D&&this.feet!==void 0){let[H,G]=Qt(n.position.x,n.position.z),fe=vn(this);fe>-.7&&Math.abs(H)<r/2+1&&Math.abs(G)<o/2+1&&(this.shF=(this.shF||0)+1)%3===0&&(ut.shadow.needsUpdate=!0),fe<-3&&Qn(H,G)&&!(this.shL>f-2500)&&(this.shL=f,lt.shadowLight.shadow.needsUpdate=!0)}Nt.update({on:D,day:Math.max(0,Math.min(1,C.light||.6))*(1-Math.min(1,C.pGlow)*.85),beamColor:C.lightC}),Ge.visible=D,se.visible=D&&A>.5,Ge.scale.setScalar(s*Math.max(.001,A));let Z=Math.min(1,(f-Vt.t0)/900),x=Vt.open?1-Math.pow(1-Z,3)*Math.cos(Z*3.2):1-Math.pow(1-Z,4);Vt.a=Vt.from+((Vt.open?1:0)-Vt.from)*x,Ve.rotation.y=Vt.a*1.72;let S=Math.min(1,C.pGlow),B=.86+.08*Math.sin(k*9.1+Math.sin(k*2.7)*2)+.06*Math.sin(k*23.3);Ne.color.setRGB(.07,.07,.075).lerp(new ct(1.3,.8,.42),S*B),Xe.forEach((H,G)=>{let fe=H.userData.h*(.75+.35*Math.sin(k*(7+G*1.7)+G*2)*Math.sin(k*(3.1+G)));H.scale.set(1,Math.max(.05,fe*S),1),H.visible=S>.05}),Re.opacity=.75*S,ut.intensity=S*A*220*B,ut.position.set(yn.x+Math.sin(k*5.3)*.15,yn.y+Math.sin(k*7.1)*.1,yn.z),se.material.uniforms.uColor.value.copy(C.fog).multiplyScalar(1.1).addScalar(.05),se.material.uniforms.uOpacity.value=Math.min(A,.35+S*.5),Ye.position.y=(v+.9+Math.sin(k*.9)*.15-Bt.y)/s,Ye.rotation.z=Math.sin(k*.7)*.03}}}var of={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3],spring:[1,1,1,1,1,1,.3,0,0,0,0,0,.5],summer:[1,1,.8,1,.7,1,.2,0,0,0,0,0,.2],fall:[1,1,.6,.8,.9,1,.5,0,0,0,0,0,.4]},jc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function af({scene:i,heightAt:e,U:t,snowColor:n,clear:s=[],camera:r}){let o=qd(20260707),a=(ce,le)=>ce+o()*(le-ce),c={uTime:t.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new ct("#4f6a3c")}},l={};jc.forEach(ce=>{l[ce]={value:0}});let d=["leaves","flowers","hives","creek"];d.forEach(ce=>{l[ce]={value:0}});let m=[],h=[],u=[],_=(ce,le)=>Math.hypot(e(ce+2,le)-e(ce-2,le),e(ce,le+2)-e(ce,le-2))/(2*2),T=(ce,le,Me,Te=1)=>{let ve=e(ce-2,le)-e(ce+2,le),Pe=e(ce,le-2)-e(ce,le+2),V=new N(ve*Te,2*2,Pe*Te).normalize();return new Ut().setFromUnitVectors(new N(0,1,0),V).multiply(new Ut().setFromAxisAngle(new N(0,1,0),Me))},y=(ce,le)=>!s.some(Me=>Math.hypot(Me.x-ce,Me.z-le)<Me.r),g=(ce,le,{cast:Me=!1,receive:Te=!0}={})=>(ce.castShadow=Me,ce.receiveShadow=Te,i.add(ce),m.push([ce,le]),ce),M=160,I=(ce,le,Me,Te,pe)=>{let ve=new Map;Me.forEach(V=>{let it=Math.floor(V.p.x/M)+","+Math.floor(V.p.z/M);ve.has(it)||ve.set(it,[]),ve.get(it).push(V)});let Pe=new vt;ve.forEach(V=>{let it=new yi(ce,le,V.length);V.forEach((Ee,U)=>{Pe.compose(Ee.p,Ee.q,Ee.s),it.setMatrixAt(U,Pe)}),it.computeBoundingSphere(),g(it,Te,pe)})},w=(ce,le,Me,Te)=>{let pe=null,ve=1e9;for(let Pe=0;Pe<900;Pe++){let V=o()*Math.PI*2,it=Math.sqrt(o())*Me,Ee=ce+Math.cos(V)*it,U=le+Math.sin(V)*it;Te(Ee,U)&&it<ve&&(ve=it,pe={x:Ee,z:U})}return pe||{x:ce,z:le}},b={x:Bt.x,z:Bt.z};u.push({x:b.x,z:b.z,r:34});let R=w(-95,-258,50,(ce,le)=>{let Me=e(ce,le);return Me>9&&Me<32&&_(ce,le)<.16});u.push({x:R.x,z:R.z,r:30});let F=(ce,le)=>{let Me=new ro(1,le),Te=Me.attributes.position,pe=new N;for(let ve=0;ve<Te.count;ve++){pe.fromBufferAttribute(Te,ve);let Pe=1+(dn(pe.x*1.6+ce,pe.y*1.6,pe.z*1.6)-.5)*.55+(dn(pe.x*4+ce,pe.y*4,pe.z*4)-.5)*.14;pe.multiplyScalar(Pe),pe.y=pe.y<-.25?-.25+(pe.y+.25)*.2:pe.y,pe.y*=.72,pe.x*=1.12,Te.setXYZ(ve,pe.x,pe.y,pe.z)}return new nn().add(Me,{flat:!0,color:ve=>{let Pe=.5+dn(ve.x*3+ce,ve.y*3,ve.z*3)*.28+ve.y*.12;return[Pe,Pe*.99,Pe*.95]}}).geometry()},E=qn(c,l.pRocks,{color:9277328,snowBias:.05}),O=[[],[],[]],W=[],J=(ce,le,Me,Te,pe)=>{let ve=e(ce,le),Pe=new N(Me*a(.8,1.25),Me*a(.6,1.1),Me*a(.8,1.2));Te.push({p:new N(ce,ve-Me*.12,le),q:T(ce,le,o()*6.28,.6),s:Pe}),pe&&h.push({x:ce,z:le,r:Me*1.05+1.2,key:"pRocks",top:ve-Me*.12+Pe.y*.82,rt:Me*.75})};for(let ce=0,le=0;ce<260&&le<2e4;le++){let Me=a(-560,560),Te=a(-560,230),pe=e(Me,Te);if(pe<-1.5||pe>75)continue;let Pe=o()<.25?a(4,9):a(1.2,3.4);u.some(V=>Math.hypot(V.x-Me,V.z-Te)<V.r+Pe)||!y(Me,Te)||(J(Me,Te,Pe,O[ce%3],Pe>2.2),ce++)}for(let ce=0,le=0;ce<70&&le<9e3;le++){let Me=a(-260,260),Te=a(-260,160),pe=e(Me,Te);pe<-1.2||pe>1.5||u.some(ve=>Math.hypot(ve.x-Me,ve.z-Te)<ve.r)||!y(Me,Te)||(J(Me,Te,a(1.5,5),O[ce%3],!0),ce++)}for(let ce=0,le=0;ce<700&&le<2e4;le++){let Me=a(-480,480),Te=a(-480,200),pe=e(Me,Te);pe<-.6||pe>70||!y(Me,Te)||u.some(ve=>Math.hypot(ve.x-Me,ve.z-Te)<ve.r)||(J(Me,Te,a(.35,1),W,!1),ce++)}O.forEach((ce,le)=>I(F(le*17.3,2),E,ce,"pRocks",{cast:!0})),I(F(5.1,1),E,W,"pRocks");let $=ce=>{let le=.42+dn(ce.x*9,ce.y*2,ce.z*2)*.22+Math.sin(Math.atan2(ce.z,ce.y)*9)*.04;return[le*1,le*.82,le*.66]},ee=(()=>{let ce=new nn,le=new We(1,.9,1,12,5,!0),Me=le.attributes.position,Te=new N;for(let ve=0;ve<Me.count;ve++){Te.fromBufferAttribute(Me,ve);let Pe=1+(dn(Te.x*3,Te.y*6,Te.z*3)-.5)*.18;Me.setXYZ(ve,Te.x*Pe,Te.y,Te.z*Pe)}le.computeVertexNormals(),ce.add(le,{m:L(0,0,0,0,0,Math.PI/2),color:$});let pe=ve=>{let Pe=Math.hypot(ve.y,ve.z),V=.62+Math.sin(Pe*26)*.05-Pe*.12;return[V*1.05,V*.9,V*.72]};return ce.add(new Ls(.88,12),{m:L(.5,0,0,0,Math.PI/2,0),color:pe}),ce.add(new Ls(.98,12),{m:L(-.5,0,0,0,-Math.PI/2,0),color:pe}),ce.add(new We(.12,.2,.9,6,1),{m:L(.15,.55,.3,.5,0,-.5,1,1,1),color:$}),ce.geometry()})(),z=(()=>{let ce=new nn,le=new We(.85,1,1,12,3,!0),Me=le.attributes.position,Te=new N;for(let pe=0;pe<Me.count;pe++){Te.fromBufferAttribute(Me,pe);let ve=Math.atan2(Te.z,Te.x),Pe=Te.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(ve*5)),2):1,V=Te.y>.45?(dn(Te.x*4,0,Te.z*4)-.5)*.3:0;Me.setXYZ(pe,Te.x*Pe,Te.y+V,Te.z*Pe)}return le.computeVertexNormals(),ce.add(le,{m:L(0,.5,0),color:pe=>$(pe)}),ce.add(new Ls(.85,12),{m:L(0,.98,0,-Math.PI/2,0,0),color:pe=>{let ve=Math.hypot(pe.x,pe.z),Pe=.6+Math.sin(ve*22)*.05;return[Pe*1.05,Pe*.9,Pe*.7]}}),ce.geometry()})(),Q=qn(c,l.pLogs,{color:12036506}),re=rf({scene:i,shared:c,U:t,camera:r}),ie=(()=>{let ce=new nn,le=Pe=>{let V=new De(1,1,1,3,5,2),it=V.attributes.position,Ee=new N;for(let U=0;U<it.count;U++){Ee.fromBufferAttribute(it,U);let p=1-(Ee.y+.5)*.3,X=1+(dn(Ee.x*3+Pe,Ee.y*3,Ee.z*3)-.5)*.35,K=Ee.y>.35?1-(Ee.y-.35)*1.2*Math.hypot(Ee.x,Ee.z):1;it.setXYZ(U,Ee.x*p*X*K,Ee.y+(Ee.y>.4?(dn(Ee.x*5,Pe,Ee.z*5)-.5)*.15:0),Ee.z*p*X*K)}return V},Me=Pe=>V=>{let it=.5+dn(V.x*2+Pe,V.y*2,V.z*2)*.22;return[it*.97,it,it*.98]},Te=11,pe=15;for(let Pe=0;Pe<Te;Pe++){let V=Pe/Te*Math.PI*2+a(-.06,.06),it=Math.cos(V)*pe,Ee=Math.sin(V)*pe,U=a(5,9.5),p=Pe===4?.35:a(-.06,.06),X=e(R.x+it,R.z+Ee)-e(R.x,R.z);ce.add(le(Pe*3.7),{m:L(it,X+U/2-.6,Ee,p,-V+Math.PI/2,a(-.05,.05),a(2.2,3.2),U,a(1,1.5)),flat:!0,color:Me(Pe)}),h.push({x:R.x+it,z:R.z+Ee,r:3.6,key:"pStones"})}ce.add(le(40),{m:L(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:Me(40)}),ce.add(le(50),{m:L(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:Me(50)}),h.push({x:R.x+3,z:R.z-2,r:4.5,key:"pStones"},{x:R.x-2,z:R.z+2.5,r:4,key:"pStones"});let ve=new gt(ce.geometry(),qn(c,l.pStones,{color:10132636}));return ve.position.set(R.x,e(R.x,R.z),R.z),g(ve,"pStones",{cast:!0})})(),me=(ce,le)=>{let Me=new We(le?.85:.5,1.15,1,12,10,!1),Te=Me.attributes.position,pe=new N;for(let ve=0;ve<Te.count;ve++){pe.fromBufferAttribute(Te,ve);let Pe=pe.y+.5,V=1+(dn(pe.x*2+ce,pe.y*5,pe.z*2)-.5)*.6+Math.sin(pe.y*26+ce)*.04;!le&&Pe>.55&&(V*=1-(dn(ce,pe.y*3,1)-.3)*.5);let it=pe.y>.49&&!le?(dn(pe.x*3+ce,0,pe.z*3)-.5)*.25:0,Ee=le?0:Pe*Pe*.18*Math.sin(ce);Te.setXYZ(ve,pe.x*V+Ee,pe.y+it,pe.z*V)}return Me},he=new nn,de={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[de.x,de.z,30,22]].forEach(([ce,le,Me,Te],pe,ve)=>{let Pe=pe===ve.length-1,V=11+Te*.5-.1;he.add(me(pe*9.1,Pe),{m:L(ce,V-Te/2-8,le,0,pe,0,Me,Te+16,Me*a(.8,1.1)),flat:!0,color:it=>{let Ee=.42+dn(it.x*.2,it.y*.6,it.z*.2)*.24,U=it.y>V-1.5?.12:0;return[Ee-U*.4,Ee+U*.3,Ee*.95-U*.3]}}),h.push({x:ce,z:le,r:Me*1.2+1.5,key:"pStacks"})});{let le=new N(de.x,21.9,de.z),Me=new We(2.6,3.8,26,16,8,!1);he.add(Me,{m:L(le.x,le.y+13,le.z),color:Te=>Math.floor((Te.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),he.add(new We(4,4,.5,16),{m:L(le.x,le.y+26.2,le.z),color:()=>[.2,.2,.22]}),he.add(new We(2,2,.6,12),{m:L(le.x,le.y+26.7,le.z),color:()=>[.2,.2,.22]}),he.add(new Mn(2.6,2.6,12),{m:L(le.x,le.y+31.3,le.z),color:()=>[.25,.23,.24]}),he.add(new De(7,4,5),{m:L(le.x+7,le.y+2,le.z+3),color:()=>[.85,.84,.8]}),he.add(new Mn(5,2.6,4),{m:L(le.x+7,le.y+5.3,le.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}g(new gt(he.geometry(),qn(c,l.pStacks,{color:11051942,sink:140})),"pStacks");let _e=new N(de.x,11+22*.5-.1+28.5,de.z),nt=new gt(new We(1.8,1.8,3.2,12),new Nn({color:16769712,fog:!1}));nt.position.copy(_e),g(nt,"pStacks",{receive:!1});let Je=new Pn;Je.position.copy(_e);let Ht=new tn({transparent:!0,depthWrite:!1,blending:fi,side:wn,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(ce=>{let le=new gt(new Mn(1,1,20,1,!0).translate(0,-.5,0),Ht);le.rotation.set(Math.PI/2,0,0),le.scale.set(8,230,8);let Me=new Pn;Me.rotation.y=ce,Me.add(le),le.position.z=0,Je.add(Me)}),i.add(Je);let Ze=(ce,le,Me,Te,pe,ve)=>{let Pe=new nn,V=[];for(let Ee=0;Ee<ce;Ee++){let U=Ee/ce*Math.PI*2+o()*.7,p=a(le,Me),X=a(.15,.55),K=o()*Te,j=Math.cos(U)*K,ae=Math.sin(U)*K,ue=Math.cos(U)*X,te=Math.sin(U)*X,q=-Math.sin(U)*pe,we=Math.cos(U)*pe,Oe=[j+ue*p*.35,p*.55,ae+te*p*.35],Ne=[j+ue*p,p*.92,ae+te*p];V.push([j-q,0,ae-we],[j+q,0,ae+we],[Oe[0]+q*.6,Oe[1],Oe[2]+we*.6]),V.push([j-q,0,ae-we],[Oe[0]+q*.6,Oe[1],Oe[2]+we*.6],[Oe[0]-q*.6,Oe[1],Oe[2]-we*.6]),V.push([Oe[0]-q*.6,Oe[1],Oe[2]-we*.6],[Oe[0]+q*.6,Oe[1],Oe[2]+we*.6],Ne)}let it=Me;return Pe.tris(V,Ee=>{let U=Ee.y/it;return[ve[0]*(.55+.6*U),ve[1]*(.55+.6*U),ve[2]*(.55+.6*U)]},Ee=>Math.pow(Ee.y/it,1.5),new N(0,1,0)),Pe},xt=Ze(11,.9,1.8,.55,.07,[.48,.6,.3]).geometry(),ge=Ze(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([ce,le],Me)=>{let Te=4.6+Me*.5;ge.add(new We(.03,.03,Te,4),{m:L(ce,Te/2,le),color:()=>[.5,.52,.35],tip:()=>.3}),ge.add(new We(.11,.11,.7,6),{m:L(ce,Te+.2,le),color:()=>[.36,.26,.18],tip:()=>.6})});let xe=ge.geometry(),Ce=(()=>{let ce=new nn,le=[],Me=8;for(let Te=0;Te<Me;Te++){let pe=Te/Me*Math.PI*2+o()*.5,ve=a(1.6,2.3),Pe=a(.7,1.1),V=[Math.cos(pe),Math.sin(pe)],it=[-Math.sin(pe),Math.cos(pe)],Ee=p=>[V[0]*ve*p,Pe*Math.sin(p*Math.PI*.75)-.25*p*p,V[1]*ve*p],U=9;for(let p=0;p<U;p++){let X=p/U,K=(p+1)/U,j=(X+K)/2,ae=Ee(X),ue=Ee(K),te=Ee(j),q=.34*Math.sin(Math.PI*Math.min(1,j*1.1))*(1-j*.4)+.03,we=it[0]*q,Oe=it[1]*q;le.push(ae,ue,[te[0]+we,te[1]-.06,te[2]+Oe]),le.push(ae,[te[0]-we,te[1]-.06,te[2]-Oe],ue)}}return ce.tris(le,Te=>{let pe=Math.hypot(Te.x,Te.z)/2.3;return[.36+pe*.22,.52+pe*.26,.26+pe*.12]},Te=>Math.hypot(Te.x,Te.z)/2.3,new N(0,1,0)),ce.geometry()})(),je=(ce,le)=>qn(c,l[ce],{sway:le,side:wn,color:16777215,snowBias:-1,softBack:!0}),Ke=null,Mt=null,Dt=null,_t=(ce,le,Me)=>{let Te=(()=>{let p=new nn,X=new Jt(1,14,7,0,Math.PI*2,0,Math.PI/2),K=X.attributes.position,j=new N;for(let ue=0;ue<K.count;ue++){j.fromBufferAttribute(K,ue);let te=1+(dn(j.x*3,j.y*3,j.z*3)-.5)*.4;K.setXYZ(ue,j.x*te,j.y*.32*te,j.z*te)}X.computeVertexNormals();let ae=[[.86,.42,.1],[.72,.18,.08],[.92,.68,.16],[.55,.3,.12]];p.add(X,{color:ue=>{let te=ae[Math.floor(dn(ue.x*6,ue.y*6,ue.z*6)*3.99)],q=.7+dn(ue.x*20,0,ue.z*20)*.5;return[te[0]*q,te[1]*q,te[2]*q]}});for(let ue=0;ue<26;ue++){let te=o()*6.28,q=Math.sqrt(o())*1.15,we=ae[ue%4];p.add(new jt(.16,.1),{m:L(Math.cos(te)*q,.33*(1-q*q*.6)+.02,Math.sin(te)*q,-Math.PI/2+a(-.4,.4),o()*6,0),color:()=>we})}return p.geometry()})(),pe=[];for(let p=0;pe.length<320&&p<6e3;p++){let X=ce[Math.floor(o()*ce.length)];if(!X)break;let K=o()*6.28,j=a(2,9),ae=X.p.x+Math.cos(K)*j,ue=X.p.z+Math.sin(K)*j,te=e(ae,ue);if(te<1||te>70||le(ae,ue))continue;let q=a(1.4,3.2);pe.push({p:new N(ae,te-.1,ue),q:T(ae,ue,o()*6.28,.8),s:new N(q,q*a(.8,1.3),q*a(.7,1.1))})}I(Te,qn(c,l.leaves,{side:wn,softBack:!0,snowBias:-1}),pe,"leaves");let ve=(p,X)=>{let K=new nn;for(let j=0;j<6;j++){let ae=o()*6.28,ue=o()*.5,te=Math.cos(ae)*ue,q=Math.sin(ae)*ue,we=a(.35,.7);K.add(new We(.012,.016,we,4).translate(0,we/2,0),{m:L(te,0,q),color:()=>[.32,.5,.24],tip:()=>0});for(let Oe=0;Oe<5;Oe++){let Ne=Oe/5*6.28+ae;K.add(new Jt(.06,6,4),{m:L(te+Math.cos(Ne)*.06,we,q+Math.sin(Ne)*.06,0,-Ne,0,1.3,.3,.7),color:()=>p,tip:()=>1})}K.add(new Jt(.035,6,4),{m:L(te,we+.015,q),color:()=>X,tip:()=>1}),K.add(new jt(.14,.05),{m:L(te+.04,we*.4,q,0,ae,.5),color:()=>[.34,.55,.26],tip:()=>0})}return K.geometry()},Pe=qn(c,l.flowers,{sway:.08,side:wn,softBack:!0,snowBias:-1});[[[.92,.45,.62],[.95,.85,.3]],[[.96,.84,.25],[.7,.45,.15]],[[.72,.68,.95],[.98,.95,.6]],[[.98,.97,.95],[.95,.8,.25]]].forEach(([p,X],K)=>{let j=[];for(let ae=0;j.length<520&&ae<3e4;ae++){let ue=a(-420,420),te=a(-420,190),q=e(ue,te);if(q<1||q>55||le(ue,te)||!y(ue,te)||Me(ue,te,3)||dn(ue*.025+K*3,1,te*.025)<.5)continue;let we=a(1.6,2.6);j.push({p:new N(ue,q-.05,te),q:T(ue,te,o()*6.28,.5),s:new N(we,we,we)})}I(ve(p,X),Pe,j,"flowers")});let V=(()=>{let p=new nn,X=ln("wood",j=>{let ae=.5+dn(j.x*6,j.y*6,j.z*6)*.12;return[ae,ae*.8,ae*.58]});[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]].forEach(([j,ae])=>p.add(new De(.06,.4,.06),{m:L(j,.2,ae),color:X})),p.add(new De(.58,.06,.5),{m:L(0,.42,0),color:X});let K=[[.92,.9,.84],[.86,.82,.62],[.78,.86,.84]];for(let j=0;j<3;j++)p.add(new De(.5,.24,.44),{m:L(0,.57+j*.245,0),color:()=>K[j]});return p.add(new De(.56,.05,.5),{m:L(0,1.3,0),color:()=>[.6,.58,.55]}),[-1,1].forEach(j=>p.add(new De(.34,.03,.54),{m:L(j*.14,1.38,0,0,0,-j*.5),color:()=>[.45,.42,.4]})),p.add(new De(.22,.03,.02),{m:L(0,.49,.225),color:()=>[.08,.06,.05]}),p.add(new De(.3,.02,.1),{m:L(0,.46,.27,.25,0,0),color:X}),p.geometry()})(),it=[],Ee=[];[[-5.6,-.6],[-5.6,.9],[-5.6,2.4]].forEach(([p,X])=>{let K=Bt.x-X*Bt.S,j=Bt.z+p*Bt.S,ae=e(K,j);it.push({p:new N(K,ae,j),q:new Ut().setFromAxisAngle(new N(0,1,0),Math.PI+.1),s:new N(Bt.S,Bt.S,Bt.S)}),h.push({x:K,z:j,r:2.8,key:"hives"}),Ee.push(K,ae+4.5,j)}),I(V,qn(c,l.hives,{rich:!0,grain:.02}),it,"hives",{cast:!0});{let X=new qt,K=new Float32Array(60*3),j=new Float32Array(60);for(let ue=0;ue<60;ue++){let te=ue%3;K.set([Ee[te*3],Ee[te*3+1],Ee[te*3+2]],ue*3),j[ue]=o()}X.setAttribute("position",new en(K,3)),X.setAttribute("aSeed",new en(j,1));let ae=new tn({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0}},vertexShader:`uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`});Dt=new _i(X,ae),Dt.frustumCulled=!1,i.add(Dt)}let U=[];{let p=-275,X=-30,K=1,j=0;for(let ae=0;ae<260;ae++){let ue=e(p,X);if(U.push([p,X]),ue<-.6)break;let te=2,q=e(p+te,X)-e(p-te,X),we=e(p,X+te)-e(p,X-te),Oe=Math.hypot(-p,-20-X)||1,Ne=K*.7-q*.6+-p/Oe*.25+(dn(ae*.1,3,1)-.5)*.5,ke=j*.7-we*.6+(-20-X)/Oe*.25+(dn(ae*.1,7,2)-.5)*.5,Ge=Math.hypot(Ne,ke)||1;K=Ne/Ge,j=ke/Ge,p+=K*4,X+=j*4}}if(U.length>4){let p=[],X=[],K=[],j=0;U.forEach(([ue,te],q)=>{let[we,Oe]=U[Math.max(0,q-1)],[Ne,ke]=U[Math.min(U.length-1,q+1)],Ge=Ne-we,st=ke-Oe,be=Math.hypot(Ge,st)||1;Ge/=be,st/=be;let Y=3+3.6*Math.min(1,q/25)+Math.sin(q*.4)*.8,Ae=ue-st*Y,ye=te+Ge*Y,Ve=ue+st*Y,Ye=te-Ge*Y,Re=Math.max(e(Ae,ye),e(Ve,Ye),e(ue,te))+.32;if(q&&(j+=Math.hypot(ue-U[q-1][0],te-U[q-1][1])),p.push(Ae,Re,ye,Ve,Re,Ye),X.push(0,j/10,1,j/10),q){let Xe=(q-1)*2;K.push(Xe,Xe+1,Xe+2,Xe+1,Xe+3,Xe+2)}});let ae=new qt;ae.setAttribute("position",new Ct(p,3)),ae.setAttribute("uv",new Ct(X,2)),ae.setIndex(K),Mt=new tn({transparent:!0,depthWrite:!1,fog:!0,side:wn,uniforms:Co.merge([tt.fog,{uOpacity:{value:0},uColor:{value:new ct(6985126)}}]),vertexShader:["varying vec2 vUv;","#include <fog_pars_vertex>","void main() {","  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;","  #include <fog_vertex>","}"].join(`
`),fragmentShader:["uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;","#include <fog_pars_fragment>","float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }","void main() {","  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);","  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;","  float foam = smoothstep(0.8, 0.95, flow) * 0.45;","  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);","  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));","  #include <colorspace_fragment>","  #include <fog_fragment>","}"].join(`
`)}),Mt.uniforms.uTime=t.uTime,Ke=new gt(ae,Mt),Ke.renderOrder=1,g(Ke,"creek",{receive:!1}),ze=U}},ze=null;return{shared:c,show:l,groups:m,solids:h,zones:u,cabinAt:b,circleAt:R,cabin:re,blockedAt(ce,le,Me,Te,pe){for(let ve of h){if(Te[ve.key]<.5||ve.top!==void 0&&pe!==void 0&&pe>=ve.top-.7)continue;let Pe=ve.x-ce,V=ve.z-le,it=ve.r+Me;if(Pe*Pe+V*V<it*it)return!0}return Te.pCabin>.5&&re.blocked(ce,le,Me)},solidTop(ce,le,Me,Te){let pe=-1/0;for(let ve of h){if(ve.top===void 0||Te[ve.key]<.5||ve.top<=pe||Me<ve.top-1.2)continue;let Pe=ve.x-ce,V=ve.z-le;Pe*Pe+V*V<ve.rt*ve.rt&&(pe=ve.top)}return pe},floorAt(ce,le,Me){return Me.pCabin>.5?re.floorAt(ce,le):null},plant(ce,le=0){let Me=(Ee,U,p)=>ce.some(X=>{let K=X.p.x-Ee,j=X.p.z-U;return K*K+j*j<p*p}),Te=(Ee,U,p=0)=>u.some(X=>Math.hypot(X.x-Ee,X.z-U)<X.r+p),pe=[],ve=[];for(let Ee=0,U=0;Ee<70&&U<8e3;U++){let p=ce[Math.floor(o()*ce.length)];if(!p)break;let X=o()*6.28,K=a(7,20),j=p.p.x+Math.cos(X)*K,ae=p.p.z+Math.sin(X)*K,ue=e(j,ae);if(ue<1.5||ue>68||Te(j,ae,10))continue;let te=a(9,18),q=a(.8,1.4),we=o()*6.28,Oe=Math.cos(we)*te/2,Ne=-Math.sin(we)*te/2;if(Me(j,ae,6)||Me(j+Oe,ae+Ne,4)||Me(j-Oe,ae-Ne,4))continue;let ke=e(j+Oe,ae+Ne),Ge=e(j-Oe,ae-Ne),st=new Ut().setFromEuler(new Sn(o()*6.28,we,Math.atan2(ke-Ge,te),"YZX"));pe.push({p:new N(j,(ke+Ge)/2+q*.55,ae),q:st,s:new N(te,q,q)});for(let be=-.5;be<=.5;be+=.125)h.push({x:j+Oe*2*be,z:ae+Ne*2*be,r:q+1.6,key:"pLogs",top:(ke+Ge)/2+q*.55+(ke-Ge)*be+q,rt:q*1.1});Ee++}for(let Ee=0,U=0;Ee<90&&U<8e3;U++){let p=ce[Math.floor(o()*ce.length)];if(!p)break;let X=o()*6.28,K=a(6,16),j=p.p.x+Math.cos(X)*K,ae=p.p.z+Math.sin(X)*K,ue=e(j,ae);if(ue<1.5||ue>70||Me(j,ae,5)||Te(j,ae))continue;let te=a(.9,1.7),q=a(1.4,3.2);ve.push({p:new N(j,ue-.4,ae),q:T(j,ae,o()*6.28,.4),s:new N(te,q,te)}),h.push({x:j,z:ae,r:te+1.3,key:"pLogs",top:ue-.4+q,rt:te*.85}),Ee++}I(ee,Q,pe,"pLogs",{cast:!0}),I(z,Q,ve,"pLogs",{cast:!0});let Pe=[];for(let Ee=0;Pe.length<5200&&Ee<6e4;Ee++){let U=a(-470,470),p=a(-470,210),X=e(U,p);if(X<le+.6||X>66||!y(U,p)||Te(U,p)||dn(U*.03,0,p*.03)<.42)continue;let K=a(1.2,2.6);Pe.push({p:new N(U,X-.15,p),q:T(U,p,o()*6.28,.5),s:new N(K,K*a(.8,1.3),K)})}I(xt,je("pGrass",.05),Pe,"pGrass");let V=[];for(let Ee=0;V.length<1100&&Ee<2e4;Ee++){let U=ce[Math.floor(o()*ce.length)];if(!U)break;let p=o()*6.28,X=a(2.5,13),K=U.p.x+Math.cos(p)*X,j=U.p.z+Math.sin(p)*X,ae=e(K,j);if(ae<1||ae>70||Te(K,j))continue;let ue=a(1.6,3.4);V.push({p:new N(K,ae-.1,j),q:T(K,j,o()*6.28,.5),s:new N(ue,ue*a(.8,1.1),ue)})}I(Ce,je("pFerns",.03),V,"pFerns");let it=[];for(let Ee=0;it.length<700&&Ee<9e4;Ee++){let U=a(-280,280),p=a(-280,170),X=e(U,p);if(X<-1.4||X>1.2||!y(U,p)||Te(U,p,-6)||dn(U*.05,3,p*.05)<.4)continue;let K=a(1.1,1.9);it.push({p:new N(U,X-.2,p),q:new Ut().setFromAxisAngle(new N(0,1,0),o()*6.28),s:new N(K,K*a(.8,1.2),K)})}I(xe,je("pReeds",.012),it,"pReeds"),_t(ce,Te,Me)},update(ce,le,Me,Te){for(let pe of jc)l[pe].value=ce[pe];for(let pe of d)l[pe].value=ce[pe]||0;Ke&&(Mt.uniforms.uOpacity.value=Math.min(1,(ce.creek||0)*1.2),Mt.uniforms.uColor.value.copy(ce.waterC).lerp(new ct(.32,.52,.56),.5)),Dt&&(Dt.material.uniforms.uOpacity.value=ce.hives||0,Dt.visible=(ce.hives||0)>.05),c.uSnowCover.value=ce.pSnowCover,c.uMoss.value=ce.pMoss,c.uFrost.value=ce.pFrost;for(let[pe,ve]of m)pe.visible=ce[ve]>.01;re.update(ce,le,performance.now(),Te),nt.material.color.setRGB(1.6,1.4,1.05),nt.position.y=_e.y-(1-ce.pStacks)*140,Je.position.y=nt.position.y,Je.rotation.y=le*.45,Je.visible=ce.pStacks>.5,Ht.uniforms.uOpacity.value=Math.max(0,ce.pStacks-.5)*.5},blocked(ce,le){return u.some(Me=>Math.hypot(Me.x-ce,Me.z-le)<Me.r)}}}function cf(i,e){let n=new mo().copy(new jt(1,1).rotateX(-Math.PI/2)),s=new Float32Array(320*3);for(let a=0;a<320;a++)s[a*3]=Math.random()*120-60,s[a*3+1]=Math.random(),s[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new Hi(s,3)),n.instanceCount=320;let r=new tn({transparent:!0,depthWrite:!1,fog:!0,uniforms:Co.merge([tt.fog,{uOpacity:{value:0},uCam:{value:new N},uWater:{value:0}}]),vertexShader:`
      uniform float uTime, uOpacity, uWater; uniform vec3 uCam; attribute vec3 aOff; varying vec2 vUv; varying float vT;
      #include <fog_pars_vertex>
      void main() {
        float cyc = uTime * 0.85 + aOff.y;
        float t = fract(cyc), n = floor(cyc);
        vec2 jitter = vec2(fract(sin(n * 12.9 + aOff.x) * 437.5), fract(sin(n * 78.2 + aOff.z) * 951.3)) * 30.0 - 15.0;
        vec2 base = aOff.xz + jitter;
        vec2 xz = uCam.xz + mod(base - uCam.xz + 60.0, 120.0) - 60.0;
        float size = 0.3 + t * 1.7;
        vec3 p = vec3(xz.x + position.x * size, uWater + 0.06, xz.y + position.z * size);
        vUv = uv; vT = t;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform float uOpacity; varying vec2 vUv; varying float vT;
      #include <fog_pars_fragment>
      void main() {
        float d = length(vUv - 0.5) * 2.0;
        float ring = smoothstep(0.07, 0.0, abs(d - 0.85)) + 0.4 * smoothstep(0.06, 0.0, abs(d - 0.55)) * (1.0 - vT);
        gl_FragColor = vec4(vec3(0.9), ring * (1.0 - vT) * (1.0 - vT) * uOpacity * 0.22);
        #include <fog_fragment>
      }`});r.uniforms.uTime=e.uTime;let o=new gt(n,r);return o.frustumCulled=!1,i.add(o),{update(a,c,l){r.uniforms.uOpacity.value=a,r.uniforms.uCam.value.copy(c),r.uniforms.uWater.value=l,o.visible=a>.01}}}function lf(i,e){let n=new jt(1,1).rotateX(-Math.PI/2),s=new Hi(new Float32Array(90).fill(-1e5),1);s.setUsage(rh),n.setAttribute("aBorn",s);let r=new tn({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:e.uTime,uColor:{value:new ct(7240328)},uShow:{value:0}},vertexShader:`
      attribute float aBorn; varying vec2 vUv; varying float vAge;
      uniform float uTime;
      void main() {
        vUv = uv; vAge = uTime - aBorn;
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uShow; varying vec2 vUv; varying float vAge;
      void main() {
        vec2 p = (vUv - 0.5) * vec2(2.0, 2.0);
        // a boot print: sole and heel
        float sole = smoothstep(1.0, 0.75, length((p - vec2(0.0, 0.28)) * vec2(1.6, 1.25)));
        float heel = smoothstep(1.0, 0.75, length((p - vec2(0.0, -0.55)) * vec2(1.9, 2.6)));
        float a = max(sole, heel) * (1.0 - smoothstep(30.0, 60.0, vAge)) * smoothstep(0.0, 0.15, vAge);
        gl_FragColor = vec4(uColor, a * 0.38 * uShow);
        #include <colorspace_fragment>
      }`}),o=new yi(n,r,90);o.frustumCulled=!1;let a=new vt;a.makeScale(0,0,0);for(let u=0;u<90;u++)o.setMatrixAt(u,a);i.add(o);let c=0,l=1,d=new Ut,m=new N(1.15,1,2.3),h=new N;return{mesh:o,place(u,_,T,y,g){l=-l,h.set(u+Math.cos(y)*.9*l,_+.45,T-Math.sin(y)*.9*l),d.setFromUnitVectors(new N(0,1,0),g).multiply(new Ut().setFromAxisAngle(new N(0,1,0),y)),a.compose(h,d,m),o.setMatrixAt(c,a),o.instanceMatrix.needsUpdate=!0,s.array[c]=e.uTime.value,s.needsUpdate=!0,c=(c+1)%90},update(u){r.uniforms.uShow.value=u,o.visible=u>.01}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let e;try{e=new Zc({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{document.documentElement.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(ne){document.documentElement.setAttribute("data-scene",ne)},setMotion(){},start(){}};return}e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),e.toneMapping=_o,e.shadowMap.enabled=!0,e.shadowMap.type=ec,e.toneMappingExposure=1;let t=new dr,n=new Hn(50,1,.5,3e3),s=new xo,r=(P,ne)=>{let oe=Math.sin(P*127.1+ne*311.7)*43758.5453;return oe-Math.floor(oe)},o=(P,ne)=>{let oe=Math.floor(P),Be=Math.floor(ne),Fe=P-oe,qe=ne-Be,yt=Fe*Fe*(3-2*Fe),wt=qe*qe*(3-2*qe),At=r(oe,Be),mt=r(oe+1,Be),St=r(oe,Be+1),bt=r(oe+1,Be+1);return At+(mt-At)*yt+(St-At)*wt+(At-mt-St+bt)*yt*wt},a=(P,ne,oe=5)=>{let Be=0,Fe=.5,qe=1;for(let yt=0;yt<oe;yt++)Be+=Fe*o(P*qe,ne*qe),qe*=2.03,Fe*=.5;return Be},c=(P,ne)=>{let oe=0,Be=.5,Fe=1;for(let qe=0;qe<5;qe++)oe+=Be*(1-Math.abs(o(P*Fe,ne*Fe)*2-1)),Fe*=2.1,Be*=.5;return oe},l=(P,ne,oe)=>{let Be=Math.min(1,Math.max(0,(oe-P)/(ne-P)));return Be*Be*(3-2*Be)},d=(P,ne)=>P+Math.random()*(ne-P),m=(P,ne)=>{let oe=Math.hypot(P*.75,ne+20),Be=l(55,240,oe),Fe=(a(P*.006+3,ne*.006+7)-.45)*46*(.25+Be);Fe+=Math.pow(l(120,650,-ne),1.3)*c(P*.0028,ne*.0028)*260,Fe+=l(160,520,Math.abs(P))*a(P*.004,ne*.004+11)*130,Fe-=(1-Be)*9,Fe+=(a(P*.035+17,ne*.035+5,2)-.5)*3.2*(.3+Be);{let St=Math.min(1,Math.max(0,((P-205)*-113+(ne- -130)*14)/12965)),bt=Math.hypot(P-(205+-113*St),ne-(-130+14*St)),kt=l(34,12,bt)*l(1.04,.9,St),mn=4.6+(a(P*.05,ne*.05,2)-.5)*1.6-St*.6;kt>0&&(Fe=Fe+(Math.max(Fe,mn)-Fe)*kt)}let qe=Math.hypot(P-Bt.x,ne-Bt.z);qe<36&&(Fe+=(Bt.y-.12-Fe)*l(36,24,qe));{let yt=(ne-Bt.z)/Bt.S,wt=-(P-Bt.x)/Bt.S,At=Math.max(En.x0-yt,yt-En.x1,0),mt=Math.max(En.z0-wt,wt-En.z1,0),St=Math.hypot(At,mt)*Bt.S;St<16&&(Fe=Math.max(Fe,Fe+(Bt.y-.12-Fe)*l(16,5,St)))}return Fe},h={uTime:{value:0},uTop:{value:new ct},uHorizon:{value:new ct},uBottom:{value:new ct},uSunColor:{value:new ct},uSunDir:{value:new N(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new ct},uAur2:{value:new ct}},u=new gt(new Jt(1400,48,24),new tn({uniforms:h,side:Vn,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,fragmentShader:`
        uniform float uTime, uSunSize, uStars, uAurora;
        uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir, uAur1, uAur2;
        varying vec3 vDir;
        float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, clamp(-h / 0.25, 0.0, 1.0));
          // sun or moon: soft disc and a gentle halo
          float sd = dot(d, normalize(uSunDir));
          float on = step(0.00001, uSunSize);
          float disc = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd);
          float halo = pow(max(sd, 0.0), 90.0) * 0.55 + pow(max(sd, 0.0), 10.0) * 0.12;
          col += uSunColor * (disc + halo) * on;
          // stars (twinkle slowly)
          vec3 g = floor(d * 420.0);
          float s = hash(g);
          float star = step(0.9972, s) * smoothstep(0.02, 0.2, h);
          col += vec3(star * (0.55 + 0.45 * sin(uTime * 1.2 + s * 90.0))) * uStars;
          // aurora: curtains of light with a sharp lower edge, rays and slow folds
          if (uAurora > 0.001) {
            float az = atan(d.x, -d.z);
            vec3 acc = vec3(0.0);
            for (int i = 0; i < 3; i++) {
              float fi = float(i);
              float base = 0.13 + fi * 0.055 + 0.05 * sin(az * 1.6 + fi * 2.1 + uTime * 0.03) + 0.025 * sin(az * 4.1 - uTime * 0.05 + fi * 1.7);
              float above = h - base;
              float shape = smoothstep(-0.012, 0.012, above) * exp(-max(above, 0.0) * (6.0 + fi * 2.5));
              float rays = 0.55 + 0.45 * sin(az * 70.0 + sin(az * 6.0 + uTime * 0.15) * 4.0 + uTime * 0.35 + fi * 5.0);
              rays *= 0.65 + 0.35 * sin(az * 23.0 - uTime * 0.21 + fi);
              float folds = 0.45 + 0.55 * pow(0.5 + 0.5 * sin(az * 2.6 + uTime * 0.05 * (fi + 1.0) + fi * 1.3), 2.0);
              float a = shape * (0.3 + 0.7 * rays) * folds * (1.0 - fi * 0.2);
              acc += mix(uAur1, uAur2, smoothstep(0.0, 0.16, above)) * a;
            }
            col += acc * uAurora * 1.9 * smoothstep(-0.35, 0.4, -d.z) * smoothstep(0.03, 0.09, h);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));t.add(u);let _=new ho(16777215,4473924,1),T=new po(16777215,1);t.add(_,T,T.target),t.fog=new Kr(13421772,.004);let y={uLow:{value:new ct},uHigh:{value:new ct},uSnow:{value:new ct},uSnowLine:{value:100},uSand:{value:0},uHole:{value:new cn(1e9,1e9,1e9,1e9)}},g=new cn(1e9,1e9,1e9,1e9),M=new jt(2200,1800,300,245);M.rotateX(-Math.PI/2),M.translate(0,0,-400);{let P=M.attributes.position;for(let ne=0;ne<P.count;ne++)P.setY(ne,m(P.getX(ne),P.getZ(ne)));M.computeVertexNormals()}let I=new Ln({color:16777215});I.onBeforeCompile=P=>{Object.assign(P.uniforms,y),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <common>","#include <common>").replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uLow, uHigh, uSnow; uniform float uSnowLine, uSand; uniform vec4 uHole; varying float vH; varying float vSlope; varying vec2 vXZ;
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        // no ground inside the cabin (the floor is there; the cellar stairs go down through it)
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        // ground detail: grass patches, soil and small stones (shows up under the flashlight)
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
        land = mix(land, land * vec3(0.92, 0.88, 0.84), smoothstep(0.35, 0.75, vSlope));   // rocky on slopes
        // summer: a pale sandy beach where the land meets the water
        float beach = (1.0 - smoothstep(1.2, 3.5, vH)) * smoothstep(-3.0, -0.5, vH) * uSand;
        land = mix(land, vec3(0.93, 0.85, 0.66) * (0.9 + 0.12 * d3), beach);
        // snow: soft wind ripples and a faint cool tint in the hollows
        float drift = sin(vXZ.x * 0.55 + vXZ.y * 0.18 + d1 * 7.0) * 0.5 + 0.5;
        vec3 snowCol = uSnow * (0.93 + 0.05 * d2 + 0.04 * drift) * mix(vec3(0.94, 0.97, 1.0), vec3(1.0), d1);
        diffuseColor.rgb = mix(land, snowCol, snow);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          // small bumps of the ground (and drifts in the snow) catch the light up close
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float dist = length(wpos - cameraPosition);
          float near = smoothstep(260.0, 25.0, dist);
          if (near > 0.0) {
            float e = 0.3;
            #define BMP(p) (tn((p) * 0.35) * 0.9 + tn((p) * 1.6) * 0.3 + snowK * sin((p).x * 0.55 + (p).y * 0.18 + d1 * 7.0) * 0.35)
            float snowK = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH);
            float b0 = BMP(vXZ);
            float bx = BMP(vXZ + vec2(e, 0.0)) - b0;
            float bz = BMP(vXZ + vec2(0.0, e)) - b0;
            vec3 bw = vec3(-bx, 0.0, -bz) / e * 0.55 * near;
            normal = normalize(normal + (viewMatrix * vec4(bw, 0.0)).xyz);
          }
        }`).replace("#include <opaque_fragment>",`
        if (snow > 0.01) {
          // sparkle: tiny ice crystals glint in the light as you move
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float dist = length(wpos - cameraPosition);
          vec2 cell = floor(vXZ * 2.6);
          float pick = step(0.982, th(cell));
          float star = smoothstep(0.22, 0.0, length(fract(vXZ * 2.6) - 0.5));
          float glint = pow(max(0.0, sin(dot(normalize(cameraPosition - wpos), vec3(37.0, 11.0, 23.0)) * 3.0 + th(cell + 7.0) * 40.0)), 24.0);
          float lit = dot(reflectedLight.directDiffuse, vec3(0.33)) + 0.25 * dot(reflectedLight.indirectDiffuse, vec3(0.33));
          outgoingLight += vec3(pick * star * glint * snow * smoothstep(90.0, 6.0, dist) * lit * 5.0);
        }
        #include <opaque_fragment>`)};let w=new gt(M,I);w.receiveShadow=!0,t.add(w);let b=(()=>{let P=document.createElement("canvas");P.width=P.height=256;let ne=P.getContext("2d"),oe=ne.createImageData(256,256);for(let Fe=0;Fe<256;Fe++)for(let qe=0;qe<256;qe++){let yt=a(qe/22,Fe/7,4),wt=a(qe/22+.6,Fe/7,4),At=a(qe/22,Fe/7+.6,4),mt=(Fe*256+qe)*4;oe.data[mt]=128+(yt-wt)*300,oe.data[mt+1]=128+(yt-At)*300,oe.data[mt+2]=255,oe.data[mt+3]=255}ne.putImageData(oe,0,0);let Be=new Pi(P);return Be.wrapS=Be.wrapT=or,Be.repeat.set(60,60),Be})(),R=new co({color:7829367,roughness:.3,metalness:.35,normalMap:b,normalScale:new ht(.35,.35)}),F={uStudy:{value:new cn(1e9,1e9,1e9,1e9)}};R.onBeforeCompile=P=>{Object.assign(P.uniforms,F),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform vec4 uStudy;`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`)};let E=new gt(new jt(4e3,4e3).rotateX(-Math.PI/2),R);t.add(E);let O={uTree:{value:1},uTime:h.uTime},W=(()=>{let P=new nn,ne=new We(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let Fe=ne.attributes.position,qe=new N;for(let yt=0;yt<Fe.count;yt++){qe.fromBufferAttribute(Fe,yt);let wt=Math.atan2(qe.z,qe.x),At=qe.y<.4?1+(.4-qe.y)*2.6*(.55+.45*Math.max(0,Math.sin(wt*4+1))):1,mt=Math.sin(qe.y*1.7)*.03;Fe.setXYZ(yt,qe.x*At+mt,qe.y,qe.z*At)}}P.add(ne,{color:Fe=>{let qe=.42+.16*o(Fe.y*7,Math.atan2(Fe.z,Fe.x)*2.5);return[qe*1.35,qe*.98,qe*.72]},normal:(Fe,qe)=>qe.set(Fe.x,.12,Fe.z).normalize()});let oe=6,Be=0;for(let Fe=0;Fe<oe;Fe++){let qe=Fe/(oe-1),yt=1.1-qe*.8,wt=1.02-qe*.42,At=.5+qe*2.5,mt=5+Fe%3,St=Fe*1.93,bt=($e,Ot)=>{let on=$e.attributes.position,Zt=new N;for(let An=0;An<on.count;An++){Zt.fromBufferAttribute(on,An);let Tn=Math.hypot(Zt.x,Zt.z);if(Tn<.001)continue;let Rn=Math.atan2(Zt.z,Zt.x),On=Math.pow(.5+.5*Math.sin(Rn*mt+St),2),$i=.82+.32*On+.06*Math.sin(Rn*17+Fe*3)+.04*Math.sin(Rn*31+Fe),Dr=Tn/yt,No=(.1+.16*On)*yt*Dr*Dr;on.setXYZ(An,Zt.x*$i,Zt.y-No-(Ot?.02:0),Zt.z*$i)}},kt=new Mn(yt,wt,14,3,!0);bt(kt,!1),kt.translate(0,At+wt/2,0),P.add(kt,{mat:13,color:$e=>{let Ot=($e.y-At)/wt,Zt=.55+.5*Math.min(1,Math.hypot($e.x,$e.z)/yt)+.22*Ot+.08*(r($e.x*9.1,$e.z*7.3+$e.y)-.5)+Fe*.03;return[Zt*.98,Zt,Zt*.94]},normal:($e,Ot)=>{let on=Math.hypot($e.x,$e.z);Ot.set($e.x,on*.55+.32,$e.z).normalize()},tip:$e=>{let Ot=($e.y-At)/wt,on=Math.atan2($e.z,$e.x),Zt=.5+.5*Math.sin(on*mt+St);return Math.min(1,Math.max(0,(Ot-.08)*1.5)*(.45+.55*Zt)+.25*r($e.x*5.3,$e.z*4.1))}});let mn=new Mn(yt*.97,wt*.38,14,1,!0);bt(mn,!0),mn.translate(0,At+wt*.19-.02,0),P.add(mn,{mat:13,flip:!0,color:$e=>{let on=.42+.3*Math.min(1,Math.hypot($e.x,$e.z)/yt);return[on*.95,on,on*.9]},normal:($e,Ot)=>Ot.set($e.x*.3,-1,$e.z*.3).normalize()}),Be=At+wt}return P.add(new Mn(.05,.5,5,1,!0).translate(0,Be+.18,0),{mat:13,color:()=>[1,1.02,.95],tip:()=>.7}),P.geometry()})(),J=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([P,ne])=>({x:P,z:ne,r:42})),$=af({scene:t,heightAt:m,U:h,snowColor:y.uSnow,clear:J,camera:n}),ee={uFall:{value:0},uBloom:{value:0},uLush:{value:0},uBare:{value:0}},z=qn({...$.shared,...ee,uMoss:{value:0},uFrost:$.shared.uSnowCover},O.uTree,{sway:.022,color:3358771,snowBias:-.3,crisp:!0,tree:!0}),Q=1400,re=[],ie=new ct(1,1,1),me=new yi(W,z,Q);{let P=new vt,ne=new Ut,oe=new N,Be=new N,Fe=new ct,qe=0,yt=0;for(;qe<Q&&yt++<6e4;){let At=d(-650,650),mt=d(-700,260),St=m(At,mt);if(St<3||St>85||a(At*.02,mt*.02,3)<.42||$.blocked(At,mt))continue;let bt=d(2,4.6);Be.set(At,St-.4,mt),oe.set(bt*d(.8,.95),bt*d(1.5,2.1),bt*d(.8,.95)),ne.setFromAxisAngle(new N(0,1,0),d(0,Math.PI*2));let kt=d(.82,1.12);Fe.setRGB(kt,kt*d(.97,1.03),kt*d(.94,1)),re.push({p:Be.clone(),s:oe.clone(),q:ne.clone(),c:Fe.clone()}),P.compose(Be,ne,oe),me.setColorAt(qe,Fe),me.setMatrixAt(qe++,P)}me.count=qe;let wt=new Float32Array(Q);for(let At=0;At<Q;At++)wt[At]=r(At*1.37,9.1);W.setAttribute("aHash",new Hi(wt,1))}me.castShadow=!0,me.receiveShadow=!0,t.add(me),$.plant(re,0);let he=(()=>{let P=new nn,ne=(oe,Be)=>r(oe*3.17+Be,oe*1.91-Be*2.3);for(let oe=0;oe<14;oe++){let Be=oe%5,Fe=Be/5,qe=1.1-Fe*.8,yt=.5+Fe*2.5,wt=oe*2.39996+ne(oe,1)*.6,At=qe*(.62+.28*ne(oe,2)),mt=Math.cos(wt)*At,St=Math.sin(wt)*At,bt=.14+.16*ne(oe,3),kt=.11+.05*ne(oe,4),mn=yt-.2*qe*(At/qe)*(At/qe);P.add(new We(.006,.008,bt,4,1),{m:new vt().makeTranslation(mt,mn-bt/2,St),color:()=>[.35,.33,.3]});let $e=new Jt(kt,10,7),Ot=$e.attributes.position;for(let Zt=0;Zt<Ot.count;Zt++){let An=Ot.getY(Zt);Ot.setY(Zt,(An<0?An*1.25:An)*.5)}$e.computeVertexNormals();let on=.6+.18*ne(oe,5);P.add($e,{m:new vt().makeTranslation(mt,mn-bt-kt*.5,St),color:Zt=>{let An=.85+.25*Math.max(0,Zt.y-(mn-bt-kt*.5))/kt;return[on*An,on*An,on*An*.98]}})}return P.geometry()})(),de=qn({...$.shared,uMoss:{value:0},uFrost:{value:0}},O.uTree,{sway:.022,color:14211288}),_e=new yi(he,de,me.count),nt=re.map((P,ne)=>r(ne*.37,5.1)<.5);{let P=new vt,ne=new vt().makeScale(0,0,0);re.forEach((oe,Be)=>_e.setMatrixAt(Be,nt[Be]?P.compose(oe.p,oe.q,oe.s):ne)),_e.computeBoundingSphere()}_e.castShadow=!0,t.add(_e);let Je={uFruitCol:{value:0}};{let P=[13123630,14710826,14266416,10271290,12070954];re.forEach((oe,Be)=>_e.setColorAt(Be,new ct(P[Be%P.length]))),_e.instanceColor.needsUpdate=!0;let ne=de.onBeforeCompile;de.onBeforeCompile=oe=>{ne(oe),Object.assign(oe.uniforms,Je),oe.vertexShader=oe.vertexShader.replace("#include <common>",`#include <common>
uniform float uFruitCol;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`)}}let Ht=(()=>{let P=new nn,ne=(oe,Be,Fe,qe,yt)=>P.add(new We(yt*.35,yt,Fe,5).translate(0,Fe/2,0),{m:new vt().compose(new N(0,oe,0),new Ut().setFromEuler(new Sn(0,Be,qe,"YXZ")),new N(1,1,1)),color:()=>[.36,.28,.22]});for(let oe=0;oe<16;oe++){let Be=.55+oe*.17,Fe=(1-oe/18)*.9+.12;ne(Be,oe*2.4,Fe,1.1+oe%3*.12,.03),ne(Be+.05,oe*2.4+.9,Fe*.6,.8,.02)}return P.geometry()})(),Ze={value:0},xt=new yi(Ht,qn({...$.shared,uMoss:{value:0},uFrost:{value:0}},Ze,{sway:.018,color:12101784}),me.count);{let P=new vt().makeScale(0,0,0),ne=new vt;re.forEach((oe,Be)=>xt.setMatrixAt(Be,r(Be*1.37,9.1)<.45?ne.compose(oe.p,oe.q,oe.s):P)),xt.computeBoundingSphere()}xt.castShadow=!0,t.add(xt);let ge=cf(t,h),xe=Yd({scene:t,camera:n,heightAt:m,water:E}),Ce=lf(t,h),je=new fo(16772829,0,280,lh.degToRad(32),.7,1.35);je.castShadow=!1,je.shadow.mapSize.set(1024,1024),je.shadow.camera.near=.5,je.shadow.camera.far=280,je.shadow.bias=-.0012,je.shadow.normalBias=.06,t.add(je,je.target);let Ke=new Vi(16753498,0,120,1.25);t.add(Ke);let Mt=new tn({transparent:!0,depthWrite:!1,side:Vn,blending:fi,fog:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new ct(16773340)}},vertexShader:`
      varying vec3 vLocal; varying vec3 vN; varying vec3 vView;
      void main() {
        vLocal = position;
        vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime, uOpacity; uniform vec3 uColor;
      varying vec3 vLocal; varying vec3 vN; varying vec3 vView;
      float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      float noise(vec3 p) {
        vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      }
      void main() {
        float along = clamp(vLocal.z, 0.0, 1.0);
        // seen from behind the lamp a beam is a faint haze, a little stronger toward its edges
        float facing = abs(dot(normalize(vN), normalize(vView)));
        float edge = 0.18 + 0.82 * pow(1.0 - facing, 2.0);
        float fall = pow(1.0 - along, 1.8) * smoothstep(0.02, 0.3, along);     // invisible at the hand, fades with distance
        float dust = 0.75 + 0.5 * noise(vLocal * vec3(9.0, 9.0, 26.0) + vec3(0.0, uTime * 0.25, uTime * 0.1));
        gl_FragColor = vec4(uColor * edge * fall * dust * uOpacity, 1.0);
        #include <colorspace_fragment>
      }`}),Dt=new Mn(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),_t=new gt(Dt,Mt);_t.frustumCulled=!1,_t.renderOrder=5,t.add(_t);let ze={state:"off",torch:{on:!1,since:-1e9,level:0},lamp:{on:!1,since:-1e9,level:0},level:0,aim:new N(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0},ce=(()=>{let P=document.createElement("canvas");P.width=256,P.height=128;let ne=P.getContext("2d"),oe=ne.createRadialGradient(128,64,0,128,64,128);return oe.addColorStop(0,"rgba(255,255,255,0.9)"),oe.addColorStop(.5,"rgba(255,255,255,0.35)"),oe.addColorStop(1,"rgba(255,255,255,0)"),ne.fillStyle=oe,ne.fillRect(0,0,256,128),new Pi(P)})(),le=Array.from({length:9},(P,ne)=>{let oe=new Nn({map:ce,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),Be=new gt(new jt(d(380,620),d(70,120)),oe);return Be.position.set(d(-400,400),d(8,45),-60-ne*70),Be.userData.v=d(1.2,3.2)*(Math.random()<.5?-1:1),t.add(Be),Be}),Me=`
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);`,Te=2600,pe=new qt;{let P=new Float32Array(Te*6),ne=new Float32Array(Te*2);for(let oe=0;oe<Te;oe++){let Be=d(-90,90),Fe=d(0,70),qe=d(-140,40);P.set([Be,Fe,qe,Be,Fe,qe],oe*6),ne[oe*2+1]=1}pe.setAttribute("position",new en(P,3)),pe.setAttribute("aEnd",new en(ne,1))}let ve=new tn({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new ct(14672870)}},vertexShader:`
      uniform float uTime; attribute float aEnd; varying float vEnd;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * 34.0, 70.0) - 10.0;
        p.y -= aEnd * 2.2; p.x += aEnd * 0.35;
        vEnd = aEnd;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`
      uniform float uOpacity; uniform vec3 uColor; varying float vEnd;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity * 0.32 * (1.0 - vEnd * 0.7));
        #include <colorspace_fragment>
      }`}),Pe=new to(pe,ve);Pe.frustumCulled=!1,t.add(Pe);let V=(P,ne,oe,Be,Fe)=>{let qe=new qt,yt=new Float32Array(P*3),wt=new Float32Array(P);for(let St=0;St<P;St++)yt.set([d(-ne[0],ne[0]),d(ne[1],ne[2]),d(ne[3],ne[4])],St*3),wt[St]=Math.random();qe.setAttribute("position",new en(yt,3)),qe.setAttribute("aSeed",new en(wt,1));let At=new tn({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new ct(Be)},uSize:{value:Fe*e.getPixelRatio()}},vertexShader:oe,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          ${Me}
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),mt=new _i(qe,At);return mt.frustumCulled=!1,t.add(mt),mt},it=V(3200,[110,0,70,-160,40],`
    uniform float uTime, uSize; attribute float aSeed; varying float vA;
    void main() {
      vec3 p = position;
      p.y = mod(p.y - uTime * (1.4 + aSeed * 1.6), 70.0) - 10.0;
      p.x += sin(uTime * 0.4 + aSeed * 30.0) * 1.6;
      p.z += cos(uTime * 0.3 + aSeed * 20.0) * 1.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = uSize * (0.6 + aSeed) * (60.0 / -mv.z);
      vA = 0.8;
      gl_Position = projectionMatrix * mv;
    }`,16054008,3.2),Ee=V(900,[90,0,60,-120,40],`
    uniform float uTime, uSize; attribute float aSeed; varying float vA;
    void main() {
      vec3 p = position;
      p.y = mod(p.y - uTime * (1.2 + aSeed * 1.4), 60.0) - 8.0;
      p.x += sin(uTime * 0.7 + aSeed * 40.0) * 3.0 + uTime * 0.8;
      p.z += cos(uTime * 0.5 + aSeed * 23.0) * 2.0;
      p.x = mod(p.x + 90.0, 180.0) - 90.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = uSize * (0.6 + aSeed) * (60.0 / -mv.z) * (0.55 + 0.45 * abs(sin(uTime * 3.0 + aSeed * 30.0)));
      vA = 0.9;
      gl_Position = projectionMatrix * mv;
    }`,13793836,4.2),U=V(260,[160,1,14,-220,30],`
    uniform float uTime, uSize; attribute float aSeed; varying float vA;
    void main() {
      vec3 p = position;
      p.x += sin(uTime * 0.2 + aSeed * 40.0) * 4.0;
      p.y += sin(uTime * 0.35 + aSeed * 13.0) * 1.5;
      p.z += cos(uTime * 0.18 + aSeed * 22.0) * 4.0;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_PointSize = uSize * (70.0 / -mv.z);
      vA = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * (0.6 + aSeed) + aSeed * 50.0), 3.0);
      gl_Position = projectionMatrix * mv;
    }`,14275248,5),p=(P,ne,oe)=>new N(P,ne,oe),X={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:p(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:p(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,cam:p(0,13,105),look:p(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:p(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:p(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:p(0,34,140),look:p(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:p(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:p(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:p(-38,22,112),look:p(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:p(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:p(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:p(24,11,78),look:p(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:p(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:p(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,cam:p(0,10,92),look:p(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:p(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:p(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#4f8f80",aur2:"#6f6595",mist:.15,cam:p(30,15,102),look:p(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:p(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:p(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:p(0,7,125),look:p(0,9,0)}};Object.assign(X,{spring:{sat:.78,skyTop:"#86acd2",skyHorizon:"#e4eef1",skyBottom:"#c9d8de",fog:"#dbe6e8",fogDensity:.0031,low:"#6e8f55",high:"#8ea478",snowC:"#eef2f2",snowLine:150,water:0,waterC:"#6a95a6",waterRough:.18,sunC:"#fff2d6",sunDir:p(.4,.42,-1),sunSize:.0018,lightC:"#fff3df",light:1,lightDir:p(.4,.7,-.3),hemiSky:"#dde9f1",hemiGround:"#5a6c48",hemi:.9,treeC:"#4a7342",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.2,cam:p(-20,12,100),look:p(0,12,-20),bloom:1,flowers:1,hives:1,creek:1,fishy:.3},summer:{sat:.92,skyTop:"#3f86cf",skyHorizon:"#cde6f4",skyBottom:"#93c4d6",fog:"#cbe2ec",fogDensity:.0021,low:"#5a8e42",high:"#7ba158",snowC:"#f2f4f4",snowLine:210,water:0,waterC:"#21b2b4",waterRough:.05,sunC:"#fff5d8",sunDir:p(.2,.62,-1),sunSize:.0026,lightC:"#fff6e4",light:1.35,lightDir:p(.3,.85,-.3),hemiSky:"#cbe6ff",hemiGround:"#4a6a38",hemi:.95,treeC:"#3d8a38",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:0,cam:p(10,11,110),look:p(0,10,-10),lush:1,fruitCol:1,sand:1,creek:.7,flowers:.45,fishy:.4},fall:{sat:.82,skyTop:"#7a93ab",skyHorizon:"#ead7bd",skyBottom:"#b8a38c",fog:"#d8c6ad",fogDensity:.0036,low:"#7d6b44",high:"#92805b",snowC:"#efece6",snowLine:175,water:0,waterC:"#5c7380",waterRough:.2,sunC:"#ffd7a4",sunDir:p(-.5,.24,-1),sunSize:.002,lightC:"#ffdaa8",light:.95,lightDir:p(-.5,.5,-.4),hemiSky:"#e5d4bd",hemiGround:"#5a4a34",hemi:.85,treeC:"#4c5a3a",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.3,cam:p(-30,14,105),look:p(0,12,-30),fall:1,bare:.4,leaves:1,creek:.5}}),Object.assign(X.aurora,{aur1:"#57e0a4",aur2:"#a77de0",dof:.3}),Object.assign(X.night,{dof:.6}),X.rain.fishy=1;let K={fall:0,bare:0,bloom:0,lush:0,leaves:0,flowers:0,hives:0,creek:0,fishy:0,sand:0,fruitCol:0,dof:1};for(let P in X)X[P]={...K,...X[P]};for(let P in X)jc.forEach((ne,oe)=>{X[P][ne]=of[P][oe]});let j=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],ae=["sunDir","lightDir","cam","look"],ue=P=>{let ne={};for(let oe in P)j.includes(oe)?ne[oe]=new ct(P[oe]):ae.includes(oe)?ne[oe]=P[oe].clone():ne[oe]=P[oe];return ne},te=P=>ue(P),q=ue(X.rain),we=te(q),Oe=te(q),Ne=0,ke=1,Ge=0,st="rain",be="full",Y=!1,Ae=!1,ye=1,Ve=1,Ye=P=>P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2,Re=P=>{for(let ne in Oe)j.includes(ne)||ae.includes(ne)?q[ne].copy(we[ne]).lerp(Oe[ne],P):q[ne]=we[ne]+(Oe[ne]-we[ne])*P},Xe=0,lt=()=>{let P=q;h.uTop.value.copy(P.skyTop),h.uHorizon.value.copy(P.skyHorizon),h.uBottom.value.copy(P.skyBottom),h.uSunColor.value.copy(P.sunC),h.uSunDir.value.copy(P.sunDir).normalize(),h.uSunSize.value=P.sunSize,h.uStars.value=P.stars,h.uAurora.value=P.aurora,h.uAur1.value.copy(P.aur1),h.uAur2.value.copy(P.aur2),t.fog.color.copy(P.fog),t.fog.density=P.fogDensity*(1+Kt.focus*.35)*(1-.85*Xe),P.pCabin>.5?(y.uHole.value.set(...$.cabin.holeBox),F.uStudy.value.set(...$.cabin.studyBox)):(y.uHole.value.copy(g),F.uStudy.value.copy(g)),y.uLow.value.copy(P.low),y.uHigh.value.copy(P.high),y.uSnow.value.copy(P.snowC),y.uSnowLine.value=P.snowLine,E.position.y=P.water,R.color.copy(P.waterC),R.roughness=P.waterRough,T.color.copy(P.lightC),T.intensity=P.light*2.2,T.position.copy(P.lightDir).multiplyScalar(300),_.color.copy(P.hemiSky),_.groundColor.copy(P.hemiGround),_.intensity=P.hemi*1.6,z.color.copy(P.treeC),O.uTree.value=P.trees,me.visible=P.trees>.01,_e.visible=me.visible,ee.uFall.value=P.fall,ee.uBloom.value=P.bloom,ee.uLush.value=P.lush,ee.uBare.value=P.bare,Je.uFruitCol.value=P.fruitCol,y.uSand.value=P.sand,Ze.value=Math.min(1,P.bare*2.5)*P.trees,xt.visible=Ze.value>.01,Ee.material.uniforms.uOpacity.value=P.leaves*(1-Xe),Ee.visible=P.leaves*(1-Xe)>.01,ve.uniforms.uOpacity.value=P.rain*(1-Xe),Pe.visible=P.rain*(1-Xe)>.01,it.material.uniforms.uOpacity.value=P.snow*(1-Xe),it.visible=P.snow*(1-Xe)>.01,U.material.uniforms.uOpacity.value=P.fire,U.visible=P.fire>.01;let ne=P.pCabin>.5&&$.cabin.inside(n.position.x,n.position.z)?1:0;Xe+=(ne-Xe)*.12,le.forEach(oe=>{let Be=Math.hypot(oe.position.x-n.position.x,oe.position.z-n.position.z);oe.material.opacity=P.mist*.5*l(12,80,Be)*(1-Xe),oe.material.color.copy(P.fog),oe.visible=P.mist>.01&&Xe<.99}),gi.uSat.value=P.sat+(Math.max(P.sat,.8)-P.sat)*Xe},ut={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",P=>{ut.x=P.clientX/innerWidth*2-1,ut.y=P.clientY/innerHeight*2-1},{passive:!0});let Nt=7.5,yn=24,se={px:0,pz:0,vx:0,vz:0,homing:!1,yaw:0,yawTo:0,pitch:0,pitchTo:0,ground:0,on:!1},Qt=new Set,$t={phase:0,amp:0,run:0,lastStep:0},oi=70,_n={y:0,v:0,air:!1},ai=-1.1,Yn=.9,Vt={x:-1,y:-1,inside:!1},rt={on:!1,t0:0,dur:1,tx:0,tz:0,sy:0,ty:0,yaw0:0,yaw1:0,lift:10,y:0,roll:0},vn=1/60,mi=new N,as=new N,Qn=new N,cs=new N(0,1,0),Kt={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},C=new N,k=new N,f=P=>{let ne=be!=="full";ut.sx+=(ut.x-ut.sx)*.035,ut.sy+=(ut.y-ut.sy)*.035;let oe=(ne?0:1)*(1-l(0,35,Math.hypot(se.px,se.pz)));n.position.set(q.cam.x+Math.sin(P*.05)*3*oe+ut.sx*6*oe,q.cam.y+Ge+Math.sin(P*.07)*.8*oe-ut.sy*2.5*oe,q.cam.z),C.copy(q.look),C.x+=ut.sx*3*oe;let Be=Math.hypot(se.px,se.pz);if(Be>.01||Math.abs(se.yaw)>5e-4||Math.abs(se.pitch)>5e-4){mi.copy(q.look).sub(q.cam);let wt=mi.length();mi.normalize();let At=n.position.x+se.px,mt=n.position.z+se.pz,St=m(At,mt);for(let $e=0;$e<6.28;$e+=1.57)St=Math.max(St,m(At+Math.cos($e)*4,mt+Math.sin($e)*4));let bt=$.floorAt(At,mt,q);St=bt&&bt.under?bt.y:Math.max(St,E.position.y,bt?bt.y:-1e9),bt&&bt.under||(St=Math.max(St,$.solidTop(At,mt,se.ground-Nt+_n.y,q)));let kt=St+Nt;se.floorY=St,se.ground+=(kt-se.ground)*.12,se.ground=Math.max(se.ground,St+3);let mn=l(0,35,Be);n.position.set(At,Math.max(n.position.y*(1-mn)+se.ground*mn,mn>.5?St+3:-1e9),mt),rt.on&&(n.position.y=Math.max(rt.y,St+3),se.ground=n.position.y),n.position.y+=_n.y,Qn.copy(mi).applyAxisAngle(cs,se.yaw),Qn.y=Qn.y*(1-mn)-.04*mn+se.pitch,Qn.normalize(),C.copy(n.position).addScaledVector(Qn,wt)}else se.ground=n.position.y;let Fe=Kt.focus;(Fe>5e-4||Math.abs(Kt.pan)>5e-4)&&(k.copy(q.look).sub(q.cam).normalize(),n.position.addScaledVector(k,Fe*34),n.position.y-=Fe*4-Kt.pulse*2,n.position.x+=Kt.pan*10*Fe,C.x+=Kt.pan*38*Fe,C.y-=Fe*3);let qe=rt.on?rt.roll:0;if($t.amp>.001&&be==="full"){let wt=Math.sin($t.phase),At=Math.sin($t.phase*2),mt=$t.amp*(1+$t.run*.8),St=-Math.abs(wt)*.32*mt+.16*mt,bt=wt*.16*mt;n.position.y+=St,k.copy(C).sub(n.position),k.y=0,k.normalize(),n.position.x+=-k.z*bt,n.position.z+=k.x*bt,C.y+=St*.5,qe+=wt*.006*mt+At*.0015*mt}n.lookAt(C),qe&&n.rotateZ(qe);let yt=(innerWidth<700?62:50)-Fe*6+Kt.pulse*1.5;Math.abs(n.fov-yt)>.01&&(n.fov=yt,n.updateProjectionMatrix()),u.position.copy(n.position),Pe.position.set(n.position.x,n.position.y-20,n.position.z),it.position.set(n.position.x,n.position.y-20,n.position.z),Ee.position.set(n.position.x,n.position.y-20,n.position.z),U.position.set(q.look.x*.3,E.position.y,q.cam.z-90)},v=new N,A=new N,D=new N,Z=new N,x=(P,ne,oe)=>{if(oe<0)return 0;if(P==="torch")return ne?oe<.04?.55:oe<.08?.12:oe<.16?.12+(oe-.08)/.08*.88:1:Math.max(0,1-oe/.12);if(ne){if(oe<.12)return oe/.12*.35;if(oe<.24)return .35-(oe-.12)/.12*.2;if(oe<.7){let Be=(oe-.24)/.46;return .15+(1-Math.pow(1-Be,3))*.85}return 1}return Math.max(0,1-Math.pow(oe/.5,.8))},S=(P,ne)=>{n.updateMatrixWorld(),v.set(0,0,-1).applyQuaternion(n.quaternion),A.set(1,0,0).applyQuaternion(n.quaternion),D.set(0,1,0).applyQuaternion(n.quaternion);let oe=1-Math.pow(1-.16,vn*60),Be=Math.min(1.6,t.fog.density/.004),Fe=ve.uniforms.uOpacity.value,qe=(P-ze.torch.since)/1e3,yt=x("torch",ze.torch.on,qe)*(ze.torch.on&&qe>.16?.985+.015*Math.sin(ne*40)*Math.sin(ne*7):1);if(ze.torch.level=yt,yt>.001){let St=$t.amp*(be==="full"?1:0);je.position.copy(n.position).addScaledVector(A,.75).addScaledVector(D,-.6-Math.sin($t.phase)*.05*St).addScaledVector(v,.4),Z.copy(v),be==="full"&&(Z.addScaledVector(A,Math.sin(ne*1.7)*.004+Math.sin(ne*4.3)*.002+Math.sin($t.phase)*.01*St),Z.addScaledVector(D,Math.sin(ne*2.1+1)*.004+Math.sin($t.phase*2)*.008*St)),ze.aim.lerp(Z.normalize(),be==="full"?oe:1).normalize(),je.target.position.copy(je.position).addScaledVector(ze.aim,40);let bt=90,kt=Math.tan(je.angle)*bt;_t.position.copy(je.position),_t.lookAt(je.target.position),_t.scale.set(kt,kt,bt)}je.intensity=yt*520,je.castShadow=yt>.02,Mt.uniforms.uOpacity.value=yt*(.018+.03*Be+.035*Fe),_t.visible=yt>.01;let wt=(P-ze.lamp.since)/1e3,At=ze.lamp.on&&wt>.7?.88+.07*Math.sin(ne*9.3+Math.sin(ne*3.1)*2)+.04*Math.sin(ne*23.7)+.02*Math.sin(ne*41):1,mt=x("lamp",ze.lamp.on,wt)*At;if(ze.lamp.level=mt,be==="full"){let St=(se.vx-ze.lastVX)/Math.max(vn,.001),bt=(se.vz-ze.lastVZ)/Math.max(vn,.001),kt=-(St*v.z-bt*v.x)*.0012,mn=-(St*v.x+bt*v.z)*.0012,$e=vn;ze.swingV+=(-ze.swing*14-ze.swingV*1.8+kt)*$e,ze.swing+=ze.swingV*$e,ze.swingZV+=(-ze.swingZ*14-ze.swingZV*1.8+mn+Math.sin($t.phase*2)*.6*$t.amp)*$e,ze.swingZ+=ze.swingZV*$e}ze.lastVX=se.vx,ze.lastVZ=se.vz,Ke.position.copy(n.position).addScaledVector(A,1.1+Math.sin(ze.swing)*1.4).addScaledVector(D,-2.4+(1-Math.cos(ze.swing))*1.4).addScaledVector(v,2.2+Math.sin(ze.swingZ)*1),be==="full"&&ze.lamp.on&&(Ke.position.y+=Math.sin(ne*6.1)*.03),Ke.intensity=mt*900,ze.level=Math.max(yt,mt),Se.classList.toggle("light-on",ze.level>.05),Se.classList.toggle("lamp-on",mt>.05)},B=()=>{let P=performance.now(),ne=window.MEOW_SOUND;ze.state==="off"?(ze.state="torch",ze.torch.on=!0,ze.torch.since=P,ze.aim.copy(v.lengthSq()?v:ze.aim),ne&&ne.click&&ne.click(!0)):ze.state==="torch"?(ze.state="lamp",ze.torch.on=!1,ze.torch.since=P,ze.lamp.on=!0,ze.lamp.since=P+120,ne&&ne.click&&ne.click(!1),ne&&ne.ignite&&setTimeout(()=>ne.ignite(),120)):(ze.state="off",ze.lamp.on=!1,ze.lamp.since=P,ne&&ne.puff&&ne.puff()),ne&&ne.fire&&ne.fire(ze.state==="lamp"),!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di)),dispatchEvent(new CustomEvent("meow:light",{detail:{state:ze.state}}))},H=(P,ne,oe)=>{if(me.visible&&O.uTree.value>.5)for(let Be=0;Be<re.length;Be++){let Fe=re[Be],qe=Fe.p.x-P,yt=Fe.p.z-ne,wt=Fe.s.x*.75+1.2+oe;if(qe*qe+yt*yt<wt*wt)return!1}return!$.blockedAt(P,ne,oe,q)},G=()=>{let P=q.cam.x,ne=q.cam.z,oe=q.look.x-q.cam.x,Be=q.look.z-q.cam.z,Fe=Math.hypot(oe,Be)||1,qe=Math.atan2(Be/Fe,oe/Fe),yt=me.visible&&O.uTree.value>.5,wt=E.position.y,At=[];for(let bt=-.7;bt<=.701;bt+=.05)for(let kt=70;kt<=380;kt+=10){let mn=qe+bt,$e=P+Math.cos(mn)*kt,Ot=ne+Math.sin(mn)*kt,on=m($e,Ot);if(on<wt+1.5||on>oi-6)continue;let Zt=0;if(yt)for(let Tn=0;Tn<re.length;Tn++){let Rn=re[Tn].p.x-$e,On=re[Tn].p.z-Ot;Rn*Rn+On*On<1600&&Zt++}let An=(yt?Math.min(Zt,22)*2:30)-Math.abs(bt)*34-kt*.045;At.push({x:$e,z:Ot,a:bt,d:kt,score:An})}At.sort((bt,kt)=>kt.score-bt.score);let mt=null;for(let bt of At.slice(0,60)){if(!H(bt.x,bt.z,4))continue;let kt=!0,mn=(P-bt.x)/bt.d,$e=(ne-bt.z)/bt.d;for(let Ot=2;Ot<70&&kt;Ot+=2.5)kt=H(bt.x+mn*Ot,bt.z+$e*Ot,1.5);for(let Ot=3;Ot<30&&kt;Ot+=3)kt=H(bt.x-mn*Ot,bt.z-$e*Ot,1);if(kt){mt=bt;break}}mt||(mt={x:P+Math.cos(qe)*60,z:ne+Math.sin(qe)*60,a:0,d:60});let St=be==="full";rt.on=!0,rt.t0=performance.now(),rt.dur=St?2300+mt.d*5.2:700,rt.sx=se.px,rt.sz=se.pz,rt.tx=mt.x-P,rt.tz=mt.z-ne,rt.sy=n.position.y,rt.ty=Math.max(m(mt.x,mt.z),wt)+Nt,rt.yaw0=se.yaw,rt.yaw1=-mt.a,rt.lift=St?9+mt.d*.02:0,se.vx=se.vz=0,se.homing=!1,!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di))},fe=P=>(P=Math.min(1,Math.max(0,P)),P*P*P*(P*(P*6-15)+10)),Ie=P=>{let ne=Math.min(1,(P-rt.t0)/rt.dur),oe=fe(ne);se.px=rt.sx+(rt.tx-rt.sx)*oe,se.pz=rt.sz+(rt.tz-rt.sz)*oe,se.vx=se.vz=0;let Be=fe(ne/.55);se.yaw=se.yawTo=rt.yaw0+(rt.yaw1-rt.yaw0)*Be,se.pitch=se.pitchTo=-.07*Math.sin(Math.PI*ne)*(1-ne*.5);let Fe=q.cam.x+se.px,qe=q.cam.z+se.pz,yt=fe((ne-.3)/.7),wt=rt.sy+(rt.ty-rt.sy)*yt+rt.lift*Math.pow(Math.sin(Math.PI*Math.min(1,ne*1.15)),1.4);wt=Math.max(wt,Math.max(m(Fe,qe),E.position.y)+4),rt.y=wt,rt.roll=(rt.yaw1-rt.yaw0)*.22*Math.sin(Math.PI*Math.min(1,ne*1.3)),ne>=1&&(rt.on=!1,rt.roll=0,se.ground=rt.ty,rt.justLanded=!0)},Se=document.documentElement,Ue=(P,ne,oe)=>Math.max(ne,Math.min(oe,P)),He=()=>!Ae||Se.classList.contains("locked")||Kt.focusTo>0,dt=P=>P&&P.closest&&P.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),ft=()=>{Y||ls()},Qe=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"],Et=P=>P&&(/INPUT|TEXTAREA|SELECT/.test(P.tagName)||P.isContentEditable),et=!1;addEventListener("keydown",P=>{!Qe.includes(P.code)||Et(P.target)||He()||P.metaKey||P.ctrlKey||P.altKey||document.querySelector(".modal:not([hidden])")||(P.code.startsWith("Shift")||P.preventDefault(),Qt.add(P.code),se.homing=!1,!rt.on&&!P.code.startsWith("Shift")&&Math.hypot(se.px,se.pz)<3&&(G(),at()),!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di)))}),addEventListener("keyup",P=>Qt.delete(P.code)),addEventListener("keydown",P=>{P.code!=="KeyF"||P.repeat||Et(P.target)||!Ae||Se.classList.contains("locked")||document.querySelector(".modal:not([hidden])")||P.metaKey||P.ctrlKey||P.altKey||(P.preventDefault(),B())}),addEventListener("blur",()=>{Qt.clear(),Vt.inside=!1}),document.addEventListener("mouseleave",()=>{Vt.inside=!1}),addEventListener("keydown",P=>{P.code!=="KeyR"||P.repeat||Et(P.target)||He()||!se.on||rt.on||P.metaKey||P.ctrlKey||document.querySelector(".modal:not([hidden])")||xe.key(performance.now())&&(P.preventDefault(),!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di)))}),addEventListener("keydown",P=>{P.code!=="Space"||Et(P.target)||He()||!se.on||rt.on||document.querySelector(".modal:not([hidden])")||(P.preventDefault(),!(P.repeat||_n.air)&&(_n.v=15.5,_n.air=!0,!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di))))});let Rt=()=>[innerWidth/2,innerHeight/2],pt=()=>!!document.pointerLockElement,un=0,at=()=>{if(!(pt()||!i.requestPointerLock||un>0))try{let P=i.requestPointerLock();P&&P.catch&&P.catch(()=>{un++})}catch{un++}};document.addEventListener("pointerlockerror",()=>{un++});let bn=()=>{pt()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())},Wt=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),Wn=()=>{!se.on||He()||$.cabin.study.back(performance.now())||window.MEOW_BG&&window.MEOW_BG.home()},Dn=(P,ne)=>(Gs.set(P/innerWidth*2-1,-(ne/innerHeight)*2+1),ws.setFromCamera(Gs,n),ws),ei=document.createElement("div");ei.className="aim-dot",document.body.appendChild(ei),document.addEventListener("pointerlockchange",()=>{if(Se.classList.toggle("pl",pt()),!pt()){let P=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",P||setTimeout(()=>{document.hasFocus()&&!document.hidden&&Wn()},80)}pt()?(an.x=Rt()[0],an.y=Rt()[1]):an.id>=0&&Qc(-1)}),addEventListener("keydown",P=>{if(P.key!=="Escape"||!se.on||Et(P.target)||document.querySelector(".modal:not([hidden])"))return;let ne=document.getElementById("treeCard");ne&&!ne.hidden&&ne.classList.contains("show")||Wn()},!0);let ti={aimed:!1},Xt=document.createElement("div");Xt.className="act-hint",Xt.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(Xt);let pn=Xt.querySelector("span"),Si=(P,ne)=>window.MEOW_I18N?window.MEOW_I18N.t(P):ne,rn=!1,wi=0,Ji=(P,ne)=>{let oe=$.cabin.door;if(!se.on||rt.on||q.pCabin<.5||!oe.near(n.position.x,n.position.z))return!1;Gs.set(P/innerWidth*2-1,-(ne/innerHeight)*2+1),ws.setFromCamera(Gs,n);let Be=ws.intersectObject(oe.mesh,!1)[0];return!!Be&&Be.distance<26},Cr=()=>{let P=$.cabin.door;if(!P.canToggle(n.position.x,n.position.z))return!1;let ne=P.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(ne),!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di)),!0},hf=()=>{if(++wi%3)return;let[P,ne]=pt()?Rt():[an.x,an.y];ti.aimed=Ji(P,ne);let oe=$.cabin.study.hover(Dn(P,ne),se.on&&!rt.on&&q.pCabin>.5&&Xe>.5);Se.classList.toggle("on-book",oe),ti.aimed!==rn&&(rn=ti.aimed,Xt.classList.toggle("show",ti.aimed)),ti.aimed&&(pn.textContent=$.cabin.door.open?Si("doorClose","Click to close the door"):Si("doorOpen","Click to open the door"))};addEventListener("keydown",P=>{P.code!=="KeyE"||Et(P.target)||He()||!se.on||P.repeat||$.cabin.door.near(n.position.x,n.position.z)&&q.pCabin>.5&&Cr()});let ci=null,ks=null,an={x:0,y:0,pending:!1,id:-1};addEventListener("pointerdown",P=>{if(He()||dt(P.target)||rt.on)return;if(P.button===2||P.pointerType==="touch"&&P.button===0)ci={x:P.clientX,y:P.clientY,yaw:se.yawTo,pitch:se.pitchTo,moved:!1,touch:P.pointerType==="touch"},P.preventDefault();else if(P.button===0){if(se.on&&!pt()&&P.pointerType==="mouse"&&!un&&i.requestPointerLock){at(),ks=null,P.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}ks={x:P.clientX,y:P.clientY},P.preventDefault()}}),addEventListener("contextmenu",P=>{Ae&&!dt(P.target)&&!Se.classList.contains("locked")&&P.preventDefault()}),addEventListener("pointermove",P=>{if(ci){let ne=P.clientX-ci.x,oe=P.clientY-ci.y;Math.hypot(ne,oe)>5&&(ci.moved=!0),se.yawTo=ci.yaw-ne*.0035,se.pitchTo=Ue(ci.pitch-oe*.0025,ai,Yn),Se.classList.add("looking"),ft();return}if(pt()){if(se.on&&!rt.on&&!He()){let ne=Wt();se.yawTo-=P.movementX*.0024*ne,se.pitchTo=Ue(se.pitchTo-P.movementY*.002*ne,ai,Yn),ft()}return}if(Vt.x=P.clientX,Vt.y=P.clientY,Vt.inside=!0,Vt.ui=!!dt(P.target),He()||dt(P.target)){an.id>=0&&Qc(-1);return}if(se.on&&!rt.on&&P.pointerType!=="touch"&&(P.movementX||P.movementY)){let ne=Wt();se.yawTo-=P.movementX*.0028*ne,se.pitchTo=Ue(se.pitchTo-P.movementY*.0022*ne,ai,Yn),ft()}an.x=P.clientX,an.y=P.clientY,an.pending=!0},{passive:!0}),addEventListener("pointerup",P=>{let ne=!1;if(ci?(ne=ci.touch&&!ci.moved,ci=null,Se.classList.remove("looking")):ks&&P.button===0&&(ne=pt()||Math.hypot(P.clientX-ks.x,P.clientY-ks.y)<8),ks=null,ne){let[oe,Be]=pt()?Rt():[P.clientX,P.clientY];if(se.on&&xe.click(performance.now()))return;if(se.on&&q.pCabin>.5&&Xe>.5&&$.cabin.study.click(Dn(oe,Be),performance.now())){ft();return}if(Ji(oe,Be)){Cr();return}let Fe=an.id>=0?an.id:Uh(oe,Be);Fe>=0?(Pr.set(Fe,performance.now()),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Fe,x:oe,y:Be}})),ft()):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))}});let ws=new go;ws.far=900;let Gs=new ht,Uh=(P,ne)=>{if(!me.visible||O.uTree.value<.5)return-1;Gs.set(P/innerWidth*2-1,-(ne/innerHeight)*2+1),ws.setFromCamera(Gs,n);let oe=ws.intersectObjects([me,_e],!1)[0];return oe?oe.instanceId:-1},uf=new ct(2.6,2.6,2.4),Qc=P=>{P!==an.id&&(an.id>=0&&me.setColorAt(an.id,re[an.id]?re[an.id].c:ie),an.id=P,P>=0&&me.setColorAt(P,uf),me.instanceColor.needsUpdate=!0,Se.classList.toggle("on-tree",P>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:P>=0?{type:"hover",id:P,x:an.x,y:an.y}:{type:"leave"}})),ft())},Pr=new Map,Fh=new Ut,Oh=new Sn,el=new vt,df=P=>{Pr.size&&(Pr.forEach((ne,oe)=>{let Be=(P-ne)/1e3,Fe=re[oe];if(!Fe){Pr.delete(oe);return}let qe=Be>2.6?0:Math.sin(Be*15)*Math.exp(-Be*2.1)*.17;Oh.set(qe*.6,0,qe),Fh.setFromEuler(Oh).multiply(Fe.q),el.compose(Fe.p,Fh,Fe.s),me.setMatrixAt(oe,el),nt[oe]&&_e.setMatrixAt(oe,el),Be>2.6&&Pr.delete(oe)}),me.instanceMatrix.needsUpdate=!0,_e.instanceMatrix.needsUpdate=!0)},Ir=new Kn(4,4,{type:pi,depthBuffer:!0});Ir.depthTexture=new ki(4,4);let gi={tScene:{value:Ir.texture},uRes:{value:new ht(4,4)},uTime:h.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01},tDepth:{value:Ir.depthTexture},uNear:{value:.5},uFar:{value:3e3},uIndoor:{value:0},uBlurIn:{value:6}},Bh=new dr,ff=new _s(-1,1,1,-1,0,1);Bh.add(new gt(new jt(2,2),new tn({uniforms:gi,depthTest:!1,depthWrite:!1,vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      uniform sampler2D tScene, tDepth; uniform vec2 uRes; uniform float uNear, uFar, uIndoor, uBlurIn;
      float lin(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      uniform float uTime, uBlur, uBand, uFocusY, uPull, uAberr, uSat, uGrain, uVig, uFlicker;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        vec2 c = uv - 0.5;
        float r = length(c * vec2(uRes.x / uRes.y, 1.0));
        // how out-of-focus this pixel is (in pixels)
        float dy = abs(uv.y - uFocusY);
        float amt = smoothstep(uBand, uBand + 0.34, dy) * uBlur + smoothstep(0.5, 1.0, r) * uBlur * 0.55 + uPull;
        if (uIndoor > 0.01) {
          // real focus: sharp at the distance of what the centre dot is on, softer in front and behind
          float zf = 1e5;
          for (int i = 0; i < 5; i++) { float a = float(i) * 1.2566; zf = min(zf, lin(texture2D(tDepth, vec2(0.5) + (i == 0 ? vec2(0.0) : vec2(cos(a), sin(a)) * 0.015)).x)); }
          float z = lin(texture2D(tDepth, uv).x);
          float coc = clamp(abs(z - zf) / max(z, 1.0) * 1.6, 0.0, 1.0) * uBlurIn + smoothstep(0.55, 1.0, r) * uBlurIn * 0.35;
          amt = mix(amt, coc + uPull, uIndoor);
        }
        // 16-tap disc blur (golden-angle spiral) = soft round bokeh
        vec3 col = vec3(0.0);
        vec2 px = 1.0 / uRes;
        for (int i = 0; i < 16; i++) {
          float fi = float(i);
          float rr = sqrt((fi + 0.5) / 16.0);
          float a = fi * 2.39996323;
          col += texture2D(tScene, uv + vec2(cos(a), sin(a)) * rr * amt * px).rgb;
        }
        col /= 16.0;
        // lens colour fringing toward the edges
        vec2 ca = c * uAberr * (0.4 + r);
        col.r = mix(col.r, texture2D(tScene, uv + ca).r, 0.55);
        col.b = mix(col.b, texture2D(tScene, uv - ca).b, 0.55);
        // how much colour the picture keeps (0 = black & white)
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(l), col, uSat);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        // film: grain, vignette, faint projector flicker
        gl_FragColor.rgb += (hash(uv * uRes + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
        gl_FragColor.rgb *= 1.0 - uVig * smoothstep(0.32, 1.05, r);
        gl_FragColor.rgb *= 1.0 + uFlicker * sin(uTime * 37.0) * sin(uTime * 11.0);
      }`})));let zh=0,Lr=()=>{let P=innerWidth,ne=innerHeight;e.setSize(P,ne,!1);let oe=e.getDrawingBufferSize(new ht);Ir.setSize(oe.x,oe.y),gi.uRes.value.copy(oe),n.aspect=P/ne,n.fov=P<700?62:50,n.updateProjectionMatrix(),Y||ls()},Hh=0,kh=P=>{let ne=s.getElapsedTime();h.uTime.value=ne;let oe=Math.min(1,(P-Ne)/ke);Re(Ye(oe)),Ge=Math.sin(Math.PI*Ye(oe))*(be==="full"?9:0)*(oe<1?1:0),b.offset.x=ne*.004,b.offset.y=ne*.006,le.forEach($e=>{$e.position.x+=$e.userData.v*.016,$e.position.x>520&&($e.position.x=-520),$e.position.x<-520&&($e.position.x=520),$e.lookAt(n.position.x,$e.position.y,n.position.z)}),ye+=(Ve-ye)*.04;let Be=be==="full"?.035:1;Kt.focus+=(Kt.focusTo-Kt.focus)*Be,Kt.pan+=(Kt.panTo-Kt.pan)*(be==="full"?.05:1),Kt.pulse*=.94;let Fe=be==="full",qe=Math.min(.1,Math.max(.001,(P-(Hh||P))/1e3))*60,yt=$e=>Fe?1-Math.pow(1-$e,qe):1;{let $e=qe/60,Ot=q.look.x-q.cam.x,on=q.look.z-q.cam.z,Zt=Math.hypot(Ot,on)||1,An=Math.cos(se.yaw),Tn=Math.sin(se.yaw),Rn=Ot/Zt*An+on/Zt*Tn,On=-(Ot/Zt)*Tn+on/Zt*An,$i=rt.on?0:1,Dr=$i*((Qt.has("KeyW")||Qt.has("ArrowUp")?1:0)-(Qt.has("KeyS")||Qt.has("ArrowDown")?1:0)),No=$i*((Qt.has("KeyD")||Qt.has("ArrowRight")?1:0)-(Qt.has("KeyA")||Qt.has("ArrowLeft")?1:0)),Uo=Rn*Dr-On*No,Fo=On*Dr+Rn*No,Oo=Math.hypot(Uo,Fo),Xh=yn*(Qt.has("ShiftLeft")||Qt.has("ShiftRight")?2.4:1);Oo>0&&(Uo=Uo/Oo*Xh,Fo=Fo/Oo*Xh);let qh=1-Math.pow(1-(Oo>0?.08:.12),qe);se.vx+=(Uo-se.vx)*qh,se.vz+=(Fo-se.vz)*qh;let nl=(Ho,gf)=>{var Yh;let ko=q.cam.x+Ho,Nr=q.cam.z+gf;if(!(Math.abs(ko)<820&&Nr>-900&&Nr<420&&m(ko,Nr)<oi))return!1;if(me.visible&&O.uTree.value>.5)for(let il=0;il<re.length;il++){let sl=re[il],Zh=sl.p.x-ko,Jh=sl.p.z-Nr,$h=sl.s.x*.75+1.2;if(Zh*Zh+Jh*Jh<$h*$h)return!1}return!$.blockedAt(ko,Nr,0,q,(Yh=$.cabin.feet)!=null?Yh:se.ground-Nt+_n.y)},Bo=se.px+se.vx*$e,zo=se.pz+se.vz*$e;if(rt.on?Ie(P):nl(Bo,zo)?(se.px=Bo,se.pz=zo):nl(Bo,se.pz)?(se.px=Bo,se.vz*=.5):nl(se.px,zo)?(se.pz=zo,se.vx*=.5):(se.vx*=.3,se.vz*=.3),se.homing){let Ho=1-Math.pow(.94,qe);se.px-=se.px*Ho,se.pz-=se.pz*Ho,se.vx=se.vz=0,Math.hypot(se.px,se.pz)<.05&&(se.px=se.pz=0,se.homing=!1)}let mf=P-Math.max(ze.torch.since,ze.lamp.since)<1200;et&&!Qt.size&&Math.hypot(se.vx,se.vz)<.05&&!se.homing&&!mf&&!rt.on&&!_n.air&&(et=!1,Y=be==="full")}if(vn=qe/60,_n.air&&(_n.v-=44*vn,_n.y+=_n.v*vn,_n.y<=0&&(_n.y=0,_n.air=!1,$t.amp=Math.min(1.4,$t.amp+.5),window.MEOW_SOUND&&window.MEOW_SOUND.step))){let $e=n.position.x,Ot=n.position.z,on=m($e,Ot),Zt=($.floorAt($e,Ot,q)||{y:-1e9}).y>on+.2?"wood":on<E.position.y+.6?"water":st==="snow"||on>y.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Zt,1.5),setTimeout(()=>window.MEOW_SOUND.step(Zt,1.1),70)}if(pt()&&se.on&&!He()&&wi%3===1){let[$e,Ot]=Rt();an.x=$e,an.y=Ot,an.pending=!0}if(!pt()&&se.on&&!rt.on&&Vt.inside&&!Vt.ui&&!ci&&!He()&&be==="full"&&Vt.y>innerHeight*.15&&Vt.y<innerHeight*.85){let $e=Math.max(30,innerWidth*.04);Vt.x>innerWidth-$e?se.yawTo-=1.1*vn*(Vt.x-(innerWidth-$e))/$e:Vt.x>=0&&Vt.x<$e&&(se.yawTo+=1.1*vn*($e-Vt.x)/$e)}hf();{let[$e,Ot]=pt()?Rt():[an.x,an.y];xe.update(P,ne,{active:se.on&&!rt.on&&!He(),ray:se.on?Dn($e,Ot):null,waterY:E.position.y,amount:q.fishy,indoor:Xe>.5}),xe.busy&&!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di))}$.cabin.feet=se.on?(se.floorY!==void 0&&Math.abs(se.floorY-(se.ground-Nt))<14?se.floorY:se.ground-Nt)+_n.y:void 0,se.on&&!rt.on&&rt.justLanded&&(rt.justLanded=!1,at()),!se.on&&pt()&&bn();{let $e=Math.hypot(se.vx,se.vz),Ot=Qt.has("ShiftLeft")||Qt.has("ShiftRight")?1:0;$t.run+=(Ot-$t.run)*(1-Math.pow(.9,qe));let on=Math.min(1.2,$e/yn);$t.amp+=(on-$t.amp)*(1-Math.pow(.88,qe)),$t.phase+=Math.PI*2*(.95+.5*$t.run)*Math.min(1,$e/yn+.15)*vn*($e>.3?1:.4);let Zt=Math.floor($t.phase/Math.PI);if(Zt!==$t.lastStep){if($t.lastStep=Zt,$e>yn*.25&&window.MEOW_SOUND&&window.MEOW_SOUND.step){let Tn=n.position.x,Rn=n.position.z,On=m(Tn,Rn),$i=($.floorAt(Tn,Rn,q)||{y:-1e9}).y>On+.2?"wood":On<E.position.y+.6?"water":st==="snow"||On>y.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step($i,Math.min(1.5,$e/yn))}let An=m(n.position.x,n.position.z);if($e>yn*.25&&An>E.position.y+.6&&(st==="snow"||An>y.uSnowLine.value+4)){let Tn=n.position.x,Rn=n.position.z,On=1.5,$i=new N(m(Tn-On,Rn)-m(Tn+On,Rn),2*On,m(Tn,Rn-On)-m(Tn,Rn+On)).normalize();Xe<.5&&!(q.pCabin>.5&&$.cabin.inside(Tn,Rn))&&Ce.place(Tn,m(Tn,Rn),Rn,Math.atan2(-se.vx,-se.vz),$i)}}}let wt=Math.hypot(se.px,se.pz);if(!ci&&wt<2&&!rt.on){let $e=Math.pow(.96,qe);se.yawTo*=$e,se.pitchTo*=$e}se.yaw+=(se.yawTo-se.yaw)*yt(.12),se.pitch+=(se.pitchTo-se.pitch)*yt(.12);let At=wt>3;At!==se.on&&(se.on=At,Se.classList.toggle("exploring",At)),df(P),e.toneMappingExposure=ye,lt(),f(ne),$.update(q,ne,n.position,E.position.y),ge.update(q.pRipples*(1-Xe),n.position,E.position.y),Ce.update(Math.min(1,Math.max(0,(100-q.snowLine)/80))*(1-Xe)),S(P,ne),an.pending&&(an.pending=!1,Qc(Xe>.5?-1:Uh(an.x,an.y)));let mt=e.getPixelRatio(),St=be==="full",bt=oe<1?Math.sin(Math.PI*Ye(oe))*6:0,kt=St?Math.max(0,1-(P-zh)/3600):0,mn=l(0,60,Math.hypot(se.px,se.pz));gi.uBlur.value=2.6*mt*(1+Kt.focus*2.6)*(1-mn*.7)*q.dof,gi.uBand.value=.22-Kt.focus*.1+mn*.12,gi.uPull.value=(bt*(St?1:0)+Math.pow(kt,1.6)*18+Kt.pulse*3)*mt,gi.uFlicker.value=St?.012:0,gi.uIndoor.value=St?Xe:0,gi.uBlurIn.value=4.5*mt,gi.uNear.value=n.near,gi.uFar.value=n.far,gi.uVig.value=.32+Xe*.16,e.setRenderTarget(Ir),e.render(t,n),e.setRenderTarget(null),e.render(Bh,ff),Hh=P},Zn={last:0,sum:0,n:0,level:0,since:0},tl=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],pf=P=>{Zn.since||(Zn.since=P);let ne=P-(Zn.last||P);if(Zn.last=P,!(P-Zn.since<5e3||ne>250||document.hidden)&&(Zn.sum+=ne,Zn.n++,Zn.n>=90)){let oe=Zn.sum/Zn.n;Zn.sum=Zn.n=0,oe>30&&Zn.level<tl.length-1&&tl[Zn.level+1]<e.getPixelRatio()&&(Zn.level++,e.setPixelRatio(tl[Zn.level]),Lr())}},Di=P=>{Y&&(document.hidden||(kh(P),pf(P)),requestAnimationFrame(Di))},ls=()=>{Ae&&(Ne=-1e9,ye=Ve,kh(performance.now()))},Gh=()=>document.documentElement.getAttribute("data-theme")==="dark"?.62:1,Vh=(P,ne)=>{X[P]||(P="rain"),st=P,document.documentElement.setAttribute("data-scene",P),we=te(q),Oe=ue(X[P]),Ne=performance.now(),ke=be==="full"?ne:1,Ae&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:P,dur:ke}})),Y||ls()},Wh=()=>{Ae&&(be==="full"?Y||(Y=!0,requestAnimationFrame(Di)):(Y=!1,ls()))};window.MEOW_BG={scenes:Object.keys(X),setScene(P){if(!(P===st&&Ae)){if(!Ae){st=X[P]?P:"rain",document.documentElement.setAttribute("data-scene",st);return}Vh(P,3200)}},setMotion(P){be=P==="reduced"?"reduced":"full",Wh()},focus(P){Kt.focusTo=P?1:0,P&&(bn(),rt.on=!1,se.homing=!0,se.yawTo=se.pitchTo=0),Y||ls()},toggleLight(){B()},_standAt(P,ne,oe){se.px=P-q.cam.x,se.pz=ne-q.cam.z,se.vx=se.vz=0,$.cabin.feet=oe==="study"?Bt.y+En.floor*Bt.S:oe==="mezz"?Bt.y+En.mezz*Bt.S:void 0;let Be=$.floorAt(P,ne,q);se.ground=(Be&&Be.under?Be.y:Math.max(m(P,ne),E.position.y,Be?Be.y:-1e9))+Nt,se.floorY=se.ground-Nt,$.cabin.feet=se.floorY,Y||ls()},_look(P,ne,oe=0){let Be=q.look.x-q.cam.x,Fe=q.look.z-q.cam.z,qe=q.cam.x+se.px,yt=q.cam.z+se.pz,wt=Math.atan2(Fe,Be)-Math.atan2(ne-yt,P-qe);wt=Math.atan2(Math.sin(wt),Math.cos(wt)),se.yaw=se.yawTo=wt,se.pitch=se.pitchTo=oe,Y||ls()},_printAt(P,ne,oe){Ce.place(P,m(P,ne),ne,oe,new N(0,1,0))},_toggleDoor(){$.cabin.door.toggle(performance.now())},get _study(){return $.cabin.study},get _cabin(){return $.cabin},get _props(){return $},get _cur(){return q},_pos(){let P=new N;return n.getWorldDirection(P),{x:q.cam.x+se.px,z:q.cam.z+se.pz,fly:rt.on,pitch:se.pitch,lookY:P.y,yaw:se.yaw,yawTo:se.yawTo,dx:P.x,dz:P.z,cx:n.position.x,cy:n.position.y,cz:n.position.z,ground:se.ground,homing:se.homing}},_sites(){return{cabin:$.cabinAt,circle:$.circleAt}},_nearTree(P,ne=16){let oe=re[P%re.length];oe&&this._standAt(oe.p.x,oe.p.z+ne)},enter(){Ae&&!rt.on&&!He()&&Math.hypot(se.px,se.pz)<3&&(G(),at())},home(){bn(),$.cabin.study.reset(performance.now()),xe.reset();let P=Math.round(se.yaw/(Math.PI*2))*Math.PI*2;se.yaw-=P,se.yawTo-=P,rt.on=!1,se.homing=!0,se.yawTo=0,se.pitchTo=0,Qt.clear(),!Y&&Ae&&(Y=!0,et=!0,requestAnimationFrame(Di))},pan(P){Kt.panTo=Math.max(-1,Math.min(1,P||0))},pulse(){be==="full"&&(Kt.pulse=1)},start(){Ae||(Ae=!0,Ve=ye=Gh(),q=ue(X[st]),be==="full"&&(q.cam.add(new N(0,120,230)),q.look.add(new N(0,30,0))),Lr(),zh=performance.now(),Vh(st,4200),i.classList.add("on"),Wh())}};{let P=document.querySelector(".walk-hint");P&&P.addEventListener("click",()=>window.MEOW_BG.enter())}addEventListener("resize",()=>{clearTimeout(Lr.t),Lr.t=setTimeout(Lr,120)}),new MutationObserver(()=>{Ve=Gh(),Y||ls()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let Do=window.MEOW_STATE;Do&&(st=X[Do.scene]?Do.scene:"rain",be=Do.motion==="reduced"?"reduced":"full"),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
