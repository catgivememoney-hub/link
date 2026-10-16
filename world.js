(()=>{var Qa="186";var Iu=0,kl=1,Lu=2;var xo=1,ja=2,yr=3,Hi=0,Wn=1,Ln=2,ki=0,_r=1,es=2,Gl=3,Vl=4,Du=5;var Us=100,Nu=101,Uu=102,Fu=103,Ou=104,Bu=200,zu=201,Hu=202,ku=203,Wl=204,Xl=205,Gu=206,Vu=207,Wu=208,Xu=209,qu=210,Yu=211,Zu=212,Ju=213,$u=214,fa=0,pa=1,ma=2,sr=3,ga=4,xa=5,ya=6,_a=7,tc=0,Ku=1,Qu=2,Ri=0,ql=1,Yl=2,Zl=3,yo=4,Jl=5,$l=6,Kl=7;var Ql=300,_s=301,Fs=302,ec=303,nc=304,_o=306,rr=1e3,Li=1001,va=1002,Gn=1003,ju=1004;var vo=1005;var qn=1006,ic=1007;var vs=1008;var oi=1009,jl=1010,th=1011,vr=1012,sc=1013,Ci=1014,xi=1015,di=1016,rc=1017,oc=1018,Mr=1020,eh=35902,nh=35899,ih=1021,sh=1022,yi=1023,Di=1026,Ms=1027,ac=1028,cc=1029,Es=1030,lc=1031;var hc=1033,Mo=33776,Eo=33777,So=33778,wo=33779,uc=35840,dc=35841,fc=35842,pc=35843,mc=36196,gc=37492,xc=37496,yc=37488,_c=37489,bo=37490,vc=37491,Mc=37808,Ec=37809,Sc=37810,wc=37811,bc=37812,Tc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Ic=37818,Lc=37819,Dc=37820,Nc=37821,Uc=36492,Fc=36494,Oc=36495,Bc=36283,zc=36284,To=36285,Hc=36286;var Xr=2300,Ma=2301,ua=2302,Pl=2303,Il=2400,Ll=2401,Dl=2402;var td=3200;var Ao=0,ed=1,ns="",Hn="srgb",qr="srgb-linear",Yr="linear",tn="srgb";var da=7680;var nd=519,id=512,sd=513,rd=514,kc=515,od=516,ad=517,Gc=518,cd=519,ld=35044,rh=35048;var oh="300 es",bi=2e3,or=2001;function mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){let i=Zr("canvas");return i.style.display="block",i}var $h={},ar=null;function ah(...i){let t="THREE."+i.shift();ar?ar("log",t,...i):console.log(t,...i)}function ud(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=ud(i);let t="THREE."+i.shift();if(ar)ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ie(...i){i=ud(i);let t="THREE."+i.shift();if(ar)ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in $h||($h[t]=!0,Te(...i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var fd={[fa]:pa,[ma]:ya,[ga]:_a,[sr]:xa,[pa]:fa,[ya]:ma,[_a]:ga,[xa]:sr},Ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},$n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,kr=Math.PI/180,Ps=180/Math.PI;function Er(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($n[i&255]+$n[i>>8&255]+$n[i>>16&255]+$n[i>>24&255]+"-"+$n[t&255]+$n[t>>8&255]+"-"+$n[t>>16&15|64]+$n[t>>24&255]+"-"+$n[e&63|128]+$n[e>>8&255]+"-"+$n[e>>16&255]+$n[e>>24&255]+$n[n&255]+$n[n>>8&255]+$n[n>>16&255]+$n[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function ch(i,t){return(i%t+t)%t}function xf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yf(i,t,e){return i!==t?(e-i)/(t-i):0}function Gr(i,t,e){return(1-e)*i+e*t}function _f(i,t,e,n){return Gr(i,t,1-Math.exp(-e*n))}function vf(i,t=1){return t-Math.abs(ch(i,t*2)-t)}function Mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ef(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wf(i,t){return i+Math.random()*(t-i)}function bf(i){return i*(.5-Math.random())}function Tf(i){i!==void 0&&(Kh=i);let t=Kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Af(i){return i*kr}function Rf(i){return i*Ps}function Cf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function If(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),d=o((t+n)/2),m=r((t-n)/2),h=o((t-n)/2),u=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*d,c*m,c*h,a*l);break;case"YZY":i.set(c*h,a*d,c*m,a*l);break;case"ZXZ":i.set(c*m,c*h,a*d,a*l);break;case"XZX":i.set(a*d,c*_,c*u,a*l);break;case"YXY":i.set(c*u,a*d,c*_,a*l);break;case"ZYZ":i.set(c*_,c*u,a*d,a*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lh={DEG2RAD:kr,RAD2DEG:Ps,generateUUID:Er,clamp:Ve,euclideanModulo:ch,mapLinear:xf,inverseLerp:yf,lerp:Gr,damp:_f,pingpong:vf,smoothstep:Mf,smootherstep:Ef,randInt:Sf,randFloat:wf,randFloatSpread:bf,seededRandom:Tf,degToRad:Af,radToDeg:Rf,isPowerOfTwo:Cf,ceilPowerOfTwo:Pf,floorPowerOfTwo:If,setQuaternionFromProperEuler:Lf,normalize:ni,denormalize:nr},mh=class mh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ve(this.x,t.x,e.x),this.y=Ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ve(this.x,t,e),this.y=Ve(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mh.prototype.isVector2=!0;var le=mh,Fe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],m=n[s+3],h=r[o+0],u=r[o+1],_=r[o+2],T=r[o+3];if(m!==T||c!==h||l!==u||d!==_){let y=c*h+l*u+d*_+m*T;y<0&&(h=-h,u=-u,_=-_,T=-T,y=-y);let p=1-a;if(y<.9995){let M=Math.acos(y),L=Math.sin(M);p=Math.sin(p*M)/L,a=Math.sin(a*M)/L,c=c*p+h*a,l=l*p+u*a,d=d*p+_*a,m=m*p+T*a}else{c=c*p+h*a,l=l*p+u*a,d=d*p+_*a,m=m*p+T*a;let M=1/Math.sqrt(c*c+l*l+d*d+m*m);c*=M,l*=M,d*=M,m*=M}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],m=r[o],h=r[o+1],u=r[o+2],_=r[o+3];return t[e]=a*_+d*m+c*u-l*h,t[e+1]=c*_+d*h+l*m-a*u,t[e+2]=l*_+d*u+a*h-c*m,t[e+3]=d*_-a*m-c*h-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),m=a(r/2),h=c(n/2),u=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*d*m+l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m-h*u*_;break;case"YXZ":this._x=h*d*m+l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m+h*u*_;break;case"ZXY":this._x=h*d*m-l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m-h*u*_;break;case"ZYX":this._x=h*d*m-l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m+h*u*_;break;case"YZX":this._x=h*d*m+l*u*_,this._y=l*u*m+h*d*_,this._z=l*d*_-h*u*m,this._w=l*d*m-h*u*_;break;case"XZY":this._x=h*d*m-l*u*_,this._y=l*u*m-h*d*_,this._z=l*d*_+h*u*m,this._w=l*d*m+h*u*_;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],m=e[10],h=n+a+m;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>m){let u=2*Math.sqrt(1+n-a-m);this._w=(d-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>m){let u=2*Math.sqrt(1+a-n-m);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+d)/u}else{let u=2*Math.sqrt(1+m-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gh=class gh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),m=2*(r*n-o*e);return this.x=e+c*l+o*m-a*d,this.y=n+c*d+a*l-r*m,this.z=s+c*m+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ve(this.x,t.x,e.x),this.y=Ve(this.y,t.y,e.y),this.z=Ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ve(this.x,t,e),this.y=Ve(this.y,t,e),this.z=Ve(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gh.prototype.isVector3=!0;var N=gh,rl=new N,Qh=new Fe,xh=class xh{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],m=n[7],h=n[2],u=n[5],_=n[8],T=s[0],y=s[3],p=s[6],M=s[1],L=s[4],E=s[7],S=s[2],C=s[5],U=s[8];return r[0]=o*T+a*M+c*S,r[3]=o*y+a*L+c*C,r[6]=o*p+a*E+c*U,r[1]=l*T+d*M+m*S,r[4]=l*y+d*L+m*C,r[7]=l*p+d*E+m*U,r[2]=h*T+u*M+_*S,r[5]=h*y+u*L+_*C,r[8]=h*p+u*E+_*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],m=d*o-a*l,h=a*c-d*r,u=l*r-o*c,_=e*m+n*h+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return t[0]=m*T,t[1]=(s*l-d*n)*T,t[2]=(a*n-s*o)*T,t[3]=h*T,t[4]=(d*e-s*c)*T,t[5]=(s*r-a*e)*T,t[6]=u*T,t[7]=(n*c-l*e)*T,t[8]=(o*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;var De=xh,ol=new De,jh=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){let i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tn&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tn&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ns?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:jh,fromXYZ:tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:t,whitePoint:n,transfer:tn,toXYZ:jh,fromXYZ:tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),i}var qe=Df();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,Ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gs===void 0&&(Gs=Zr("canvas")),Gs.width=t.width,Gs.height=t.height;let s=Gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nf=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Uf=0,cl=new N,ii=class i extends Ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Li,s=Li,r=qn,o=vs,a=yi,c=oi,l=i.DEFAULT_ANISOTROPY,d=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Er(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Te(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Ql;ii.DEFAULT_ANISOTROPY=1;var yh=class yh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],d=c[4],m=c[8],h=c[1],u=c[5],_=c[9],T=c[2],y=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-T)<.01&&Math.abs(_-y)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+T)<.1&&Math.abs(_+y)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(l+1)/2,E=(u+1)/2,S=(p+1)/2,C=(d+h)/4,U=(m+T)/4,v=(_+y)/4;return L>E&&L>S?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=C/n,r=U/n):E>S?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=U/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((y-_)*(y-_)+(m-T)*(m-T)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(y-_)/M,this.y=(m-T)/M,this.z=(h-d)/M,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ve(this.x,t.x,e.x),this.y=Ve(this.y,t.y,e.y),this.z=Ve(this.z,t.z,e.z),this.w=Ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ve(this.x,t,e),this.y=Ve(this.y,t,e),this.z=Ve(this.z,t,e),this.w=Ve(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;var on=yh,Sa=class extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ii(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wa=class extends ii{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ka=class Ka{constructor(t,e,n,s,r,o,a,c,l,d,m,h,u,_,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,d,m,h,u,_,T,y)}set(t,e,n,s,r,o,a,c,l,d,m,h,u,_,T,y){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=m,p[14]=h,p[3]=u,p[7]=_,p[11]=T,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ka().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),o=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let h=o*d,u=o*m,_=a*d,T=a*m;e[0]=c*d,e[4]=-c*m,e[8]=l,e[1]=u+_*l,e[5]=h-T*l,e[9]=-a*c,e[2]=T-h*l,e[6]=_+u*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*d,u=c*m,_=l*d,T=l*m;e[0]=h+T*a,e[4]=_*a-u,e[8]=o*l,e[1]=o*m,e[5]=o*d,e[9]=-a,e[2]=u*a-_,e[6]=T+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*d,u=c*m,_=l*d,T=l*m;e[0]=h-T*a,e[4]=-o*m,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*d,e[9]=T-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*d,u=o*m,_=a*d,T=a*m;e[0]=c*d,e[4]=_*l-u,e[8]=h*l+T,e[1]=c*m,e[5]=T*l+h,e[9]=u*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,u=o*l,_=a*c,T=a*l;e[0]=c*d,e[4]=T-h*m,e[8]=_*m+u,e[1]=m,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=u*m+_,e[10]=h-T*m}else if(t.order==="XZY"){let h=o*c,u=o*l,_=a*c,T=a*l;e[0]=c*d,e[4]=-m,e[8]=l*d,e[1]=h*m+T,e[5]=o*d,e[9]=u*m-_,e[2]=_*m-u,e[6]=a*d,e[10]=T*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ff,t,Of)}lookAt(t,e,n){let s=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),cs.crossVectors(n,ci),cs.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),cs.crossVectors(n,ci)),cs.normalize(),ko.crossVectors(ci,cs),s[0]=cs.x,s[4]=ko.x,s[8]=ci.x,s[1]=cs.y,s[5]=ko.y,s[9]=ci.y,s[2]=cs.z,s[6]=ko.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],m=n[5],h=n[9],u=n[13],_=n[2],T=n[6],y=n[10],p=n[14],M=n[3],L=n[7],E=n[11],S=n[15],C=s[0],U=s[4],v=s[8],F=s[12],W=s[1],Z=s[5],J=s[9],j=s[13],z=s[2],Q=s[6],rt=s[10],st=s[14],pt=s[3],ut=s[7],ft=s[11],vt=s[15];return r[0]=o*C+a*W+c*z+l*pt,r[4]=o*U+a*Z+c*Q+l*ut,r[8]=o*v+a*J+c*rt+l*ft,r[12]=o*F+a*j+c*st+l*vt,r[1]=d*C+m*W+h*z+u*pt,r[5]=d*U+m*Z+h*Q+u*ut,r[9]=d*v+m*J+h*rt+u*ft,r[13]=d*F+m*j+h*st+u*vt,r[2]=_*C+T*W+y*z+p*pt,r[6]=_*U+T*Z+y*Q+p*ut,r[10]=_*v+T*J+y*rt+p*ft,r[14]=_*F+T*j+y*st+p*vt,r[3]=M*C+L*W+E*z+S*pt,r[7]=M*U+L*Z+E*Q+S*ut,r[11]=M*v+L*J+E*rt+S*ft,r[15]=M*F+L*j+E*st+S*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],m=t[6],h=t[10],u=t[14],_=t[3],T=t[7],y=t[11],p=t[15],M=c*u-l*h,L=a*u-l*m,E=a*h-c*m,S=o*u-l*d,C=o*h-c*d,U=o*m-a*d;return e*(T*M-y*L+p*E)-n*(_*M-y*S+p*C)+s*(_*L-T*S+p*U)-r*(_*E-T*C+y*U)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],d=t[10];return e*(o*d-a*l)-n*(r*d-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],m=t[9],h=t[10],u=t[11],_=t[12],T=t[13],y=t[14],p=t[15],M=e*a-n*o,L=e*c-s*o,E=e*l-r*o,S=n*c-s*a,C=n*l-r*a,U=s*l-r*c,v=d*T-m*_,F=d*y-h*_,W=d*p-u*_,Z=m*y-h*T,J=m*p-u*T,j=h*p-u*y,z=M*j-L*J+E*Z+S*W-C*F+U*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/z;return t[0]=(a*j-c*J+l*Z)*Q,t[1]=(s*J-n*j-r*Z)*Q,t[2]=(T*U-y*C+p*S)*Q,t[3]=(h*C-m*U-u*S)*Q,t[4]=(c*W-o*j-l*F)*Q,t[5]=(e*j-s*W+r*F)*Q,t[6]=(y*E-_*U-p*L)*Q,t[7]=(d*U-h*E+u*L)*Q,t[8]=(o*J-a*W+l*v)*Q,t[9]=(n*W-e*J-r*v)*Q,t[10]=(_*C-T*E+p*M)*Q,t[11]=(m*E-d*C-u*M)*Q,t[12]=(a*F-o*Z-c*v)*Q,t[13]=(e*Z-n*F+s*v)*Q,t[14]=(T*L-_*S-y*M)*Q,t[15]=(d*S-m*L+h*M)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,m=a+a,h=r*l,u=r*d,_=r*m,T=o*d,y=o*m,p=a*m,M=c*l,L=c*d,E=c*m,S=n.x,C=n.y,U=n.z;return s[0]=(1-(T+p))*S,s[1]=(u+E)*S,s[2]=(_-L)*S,s[3]=0,s[4]=(u-E)*C,s[5]=(1-(h+p))*C,s[6]=(y+M)*C,s[7]=0,s[8]=(_+L)*U,s[9]=(y-M)*U,s[10]=(1-(h+T))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Vs.set(s[0],s[1],s[2]).length(),a=Vs.set(s[4],s[5],s[6]).length(),c=Vs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ei.copy(this);let l=1/o,d=1/a,m=1/c;return Ei.elements[0]*=l,Ei.elements[1]*=l,Ei.elements[2]*=l,Ei.elements[4]*=d,Ei.elements[5]*=d,Ei.elements[6]*=d,Ei.elements[8]*=m,Ei.elements[9]*=m,Ei.elements[10]*=m,e.setFromRotationMatrix(Ei),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=bi,c=!1){let l=this.elements,d=2*r/(e-t),m=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),_,T;if(c)_=r/(o-r),T=o*r/(o-r);else if(a===bi)_=-(o+r)/(o-r),T=-2*o*r/(o-r);else if(a===or)_=-o/(o-r),T=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=m,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bi,c=!1){let l=this.elements,d=2/(e-t),m=2/(n-s),h=-(e+t)/(e-t),u=-(n+s)/(n-s),_,T;if(c)_=1/(o-r),T=o/(o-r);else if(a===bi)_=-2/(o-r),T=-(o+r)/(o-r);else if(a===or)_=-1/(o-r),T=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=m,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ka.prototype.isMatrix4=!0;var Me=Ka,Vs=new N,Ei=new Me,Ff=new N(0,0,0),Of=new N(1,1,1),cs=new N,ko=new N,ci=new N,eu=new Me,nu=new Fe,Sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],m=s[2],h=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bf=0,iu=new N,Ws=new Fe,Zi=new Me,Go=new N,Nr=new N,zf=new N,Hf=new Fe,su=new N(1,0,0),ru=new N(0,1,0),ou=new N(0,0,1),au={type:"added"},kf={type:"removed"},Xs={type:"childadded",child:null},ll={type:"childremoved",child:null},Pn=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Sn,n=new Fe,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new De}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(t,e){return Ws.setFromAxisAngle(t,e),this.quaternion.premultiply(Ws),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Go.copy(t):Go.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Nr,Go,this.up):Zi.lookAt(Go,Nr,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(Zi),this.quaternion.premultiply(Ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(au),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf),ll.child=t,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(au),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),m=o(t.shapes),h=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pn.DEFAULT_UP=new N(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gf={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let T of t.hand.values()){let y=e.getJointPose(T,n),p=this._getHandJoint(l,T);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}let d=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],h=d.position.distanceTo(m.position),u=.02,_=.005;l.inputState.pinching&&h>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var he=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qe.workingColorSpace){if(t=ch(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=hl(o,r,t+1/3),this.g=hl(o,r,t),this.b=hl(o,r,t-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(t,e=Hn){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Te("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){let n=pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return qe.workingToColorSpace(Kn.copy(this),t),Math.round(Ve(Kn.r*255,0,255))*65536+Math.round(Ve(Kn.g*255,0,255))*256+Math.round(Ve(Kn.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.workingToColorSpace(Kn.copy(this),e);let n=Kn.r,s=Kn.g,r=Kn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let m=o-a;switch(l=d<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=qe.workingColorSpace){return qe.workingToColorSpace(Kn.copy(this),e),t.r=Kn.r,t.g=Kn.g,t.b=Kn.b,t}getStyle(t=Hn){qe.workingToColorSpace(Kn.copy(this),t);let e=Kn.r,n=Kn.g,s=Kn.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(Vo);let n=Gr(ls.h,Vo.h,e),s=Gr(ls.s,Vo.s,e),r=Gr(ls.l,Vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kn=new he;he.NAMES=pd;var $r=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ur=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Si=new N,Ji=new N,ul=new N,$i=new N,qs=new N,Ys=new N,cu=new N,dl=new N,fl=new N,pl=new N,ml=new on,gl=new on,xl=new on,fs=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Si.subVectors(t,e),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Si.subVectors(s,e),Ji.subVectors(n,e),ul.subVectors(t,e);let o=Si.dot(Si),a=Si.dot(Ji),c=Si.dot(ul),l=Ji.dot(Ji),d=Ji.dot(ul),m=o*l-a*a;if(m===0)return r.set(0,0,0),null;let h=1/m,u=(l*c-a*d)*h,_=(o*d-a*c)*h;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$i.x),c.addScaledVector(o,$i.y),c.addScaledVector(a,$i.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ml.setScalar(0),gl.setScalar(0),xl.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),xl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(t,e,n,s){return Si.subVectors(n,e),Ji.subVectors(t,e),Si.cross(Ji).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,n),Ys.subVectors(r,n),dl.subVectors(t,n);let c=qs.dot(dl),l=Ys.dot(dl);if(c<=0&&l<=0)return e.copy(n);fl.subVectors(t,s);let d=qs.dot(fl),m=Ys.dot(fl);if(d>=0&&m<=d)return e.copy(s);let h=c*m-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(qs,o);pl.subVectors(t,r);let u=qs.dot(pl),_=Ys.dot(pl);if(_>=0&&u<=_)return e.copy(r);let T=u*l-c*_;if(T<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ys,a);let y=d*_-u*m;if(y<=0&&m-d>=0&&u-_>=0)return cu.subVectors(r,s),a=(m-d)/(m-d+(u-_)),e.copy(s).addScaledVector(cu,a);let p=1/(y+T+h);return o=T*p,a=h*p,e.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ui=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wi):wi.fromBufferAttribute(r,o),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ur),Xo.subVectors(this.max,Ur),Zs.subVectors(t.a,Ur),Js.subVectors(t.b,Ur),$s.subVectors(t.c,Ur),hs.subVectors(Js,Zs),us.subVectors($s,Js),bs.subVectors(Zs,$s);let e=[0,-hs.z,hs.y,0,-us.z,us.y,0,-bs.z,bs.y,hs.z,0,-hs.x,us.z,0,-us.x,bs.z,0,-bs.x,-hs.y,hs.x,0,-us.y,us.x,0,-bs.y,bs.x,0];return!yl(e,Zs,Js,$s,Xo)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,Zs,Js,$s,Xo))?!1:(qo.crossVectors(hs,us),e=[qo.x,qo.y,qo.z],yl(e,Zs,Js,$s,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new N,new N,new N,new N,new N,new N,new N,new N],wi=new N,Wo=new Ui,Zs=new N,Js=new N,$s=new N,hs=new N,us=new N,bs=new N,Ur=new N,Xo=new N,qo=new N,Ts=new N;function yl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),c=t.dot(Ts),l=e.dot(Ts),d=n.dot(Ts);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var Rn=new N,Yo=new le,Vf=0,mn=class extends Ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ld,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix3(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=nr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array),s=ni(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),n=ni(n,this.array),s=ni(s,this.array),r=ni(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wf=new Ui,Fr=new N,_l=new N,Fi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);let e=Fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(_l)),this.expandByPoint(Fr.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xf=0,mi=new Me,vl=new Pn,Ks=new N,li=new Ui,Or=new Ui,zn=new N,Je=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?Qr:Kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,n){return mi.makeTranslation(t,e,n),this.applyMatrix4(mi),this}scale(t,e,n){return mi.makeScale(t,e,n),this.applyMatrix4(mi),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(zn.addVectors(li.min,Or.min),li.expandByPoint(zn),zn.addVectors(li.max,Or.max),li.expandByPoint(zn)):(li.expandByPoint(Or.min),li.expandByPoint(Or.max))}li.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)zn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(zn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)zn.fromBufferAttribute(a,l),c&&(Ks.fromBufferAttribute(t,l),zn.add(Ks)),s=Math.max(s,n.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new N,c[v]=new N;let l=new N,d=new N,m=new N,h=new le,u=new le,_=new le,T=new N,y=new N;function p(v,F,W){l.fromBufferAttribute(n,v),d.fromBufferAttribute(n,F),m.fromBufferAttribute(n,W),h.fromBufferAttribute(r,v),u.fromBufferAttribute(r,F),_.fromBufferAttribute(r,W),d.sub(l),m.sub(l),u.sub(h),_.sub(h);let Z=1/(u.x*_.y-_.x*u.y);isFinite(Z)&&(T.copy(d).multiplyScalar(_.y).addScaledVector(m,-u.y).multiplyScalar(Z),y.copy(m).multiplyScalar(u.x).addScaledVector(d,-_.x).multiplyScalar(Z),a[v].add(T),a[F].add(T),a[W].add(T),c[v].add(y),c[F].add(y),c[W].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,F=M.length;v<F;++v){let W=M[v],Z=W.start,J=W.count;for(let j=Z,z=Z+J;j<z;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let L=new N,E=new N,S=new N,C=new N;function U(v){S.fromBufferAttribute(s,v),C.copy(S);let F=a[v];L.copy(F),L.sub(S.multiplyScalar(S.dot(F))).normalize(),E.crossVectors(C,F);let Z=E.dot(c[v])<0?-1:1;o.setXYZW(v,L.x,L.y,L.z,Z)}for(let v=0,F=M.length;v<F;++v){let W=M[v],Z=W.start,J=W.count;for(let j=Z,z=Z+J;j<z;j+=3)U(t.getX(j+0)),U(t.getX(j+1)),U(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,d=new N,m=new N;if(t)for(let h=0,u=t.count;h<u;h+=3){let _=t.getX(h+0),T=t.getX(h+1),y=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,T),o.fromBufferAttribute(e,y),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,y),a.add(d),c.add(d),l.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let h=0,u=e.count;h<u;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),d.subVectors(o,r),m.subVectors(s,r),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)zn.fromBufferAttribute(t,e),zn.normalize(),t.setXYZ(e,zn.x,zn.y,zn.z)}toNonIndexed(){function t(a,c){let l=a.array,d=a.itemSize,m=a.normalized,h=new l.constructor(c.length*d),u=0,_=0;for(let T=0,y=c.length;T<y;T++){a.isInterleavedBufferAttribute?u=c[T]*a.data.stride+a.offset:u=c[T]*d;for(let p=0;p<d;p++)h[_++]=l[u++]}return new mn(h,d,m)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let d=0,m=l.length;d<m;d++){let h=l[d],u=t(h,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let m=0,h=l.length;m<h;m++){let u=l[m];d.push(u.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],m=r[l];for(let h=0,u=m.length;h<u;h++)d.push(m[h].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,d=o.length;l<d;l++){let m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new N,qf=new N,Yf=new De,hi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zf=0,Ti=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=_r,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Te(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new he().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Qi=new N,El=new N,Zo=new N,Jo=new N,Is=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),Zo.copy(e).sub(t).normalize(),Jo.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zo),a=Jo.dot(this.direction),c=-Jo.dot(Zo),l=Jo.lengthSq(),d=Math.abs(1-o*o),m,h,u,_;if(d>0)if(m=o*c-a,h=o*a-c,_=r*d,m>=0)if(h>=-_)if(h<=_){let T=1/d;m*=T,h*=T,u=m*(m+o*h+2*a)+h*(o*m+h+2*c)+l}else h=r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*c)+l;else h=-r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*c)+l;else h<=-_?(m=Math.max(0,-(-o*r+a)),h=m>0?-r:Math.min(Math.max(-r,-c),r),u=-m*m+h*(h+2*c)+l):h<=_?(m=0,h=Math.min(Math.max(-r,-c),r),u=h*(h+2*c)+l):(m=Math.max(0,-(o*r+a)),h=m>0?r:Math.min(Math.max(-r,-c),r),u=-m*m+h*(h+2*c)+l);else h=o>0?-r:r,m=Math.max(0,-(o*h+a)),u=-m*m+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(El).addScaledVector(Zo,h),u}intersectSphere(t,e){if(t.radius<0)return null;Qi.subVectors(t.center,this.origin);let n=Qi.dot(this.direction),s=Qi.dot(Qi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),d>=0?(r=(t.min.y-h.y)*d,o=(t.max.y-h.y)*d):(r=(t.max.y-h.y)*d,o=(t.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-h.z)*m,c=(t.max.z-h.z)*m):(a=(t.max.z-h.z)*m,c=(t.min.z-h.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,m=t.x-o.x,h=t.y-o.y,u=t.z-o.z,_=e.x-o.x,T=e.y-o.y,y=e.z-o.z,p=n.x-o.x,M=n.y-o.y,L=n.z-o.z,E=Math.abs(c),S=Math.abs(l),C=Math.abs(d),U,v,F,W,Z,J,j,z,Q,rt,st,pt;if(E>=S&&E>=C?(F=c,J=m,Q=_,pt=p,c>=0?(U=l,v=d,W=h,Z=u,j=T,z=y,rt=M,st=L):(U=d,v=l,W=u,Z=h,j=y,z=T,rt=L,st=M)):S>=C?(F=l,J=h,Q=T,pt=M,l>=0?(U=d,v=c,W=u,Z=m,j=y,z=_,rt=L,st=p):(U=c,v=d,W=m,Z=u,j=_,z=y,rt=p,st=L)):(F=d,J=u,Q=y,pt=L,d>=0?(U=c,v=l,W=m,Z=h,j=_,z=T,rt=p,st=M):(U=l,v=c,W=h,Z=m,j=T,z=_,rt=M,st=p)),F===0)return null;let ut=U/F,ft=v/F,vt=1/F,se=W-ut*J,$t=Z-ft*J,ke=j-ut*Q,Jt=z-ft*Q,ge=rt-ut*pt,mt=st-ft*pt,gt=ge*Jt-mt*ke,Pt=se*mt-$t*ge,jt=ke*$t-Jt*se;if(s){if(gt<0||Pt<0||jt<0)return null}else if((gt<0||Pt<0||jt<0)&&(gt>0||Pt>0||jt>0))return null;let Qt=gt+Pt+jt;if(Qt===0)return null;let Ee=vt*(gt*J+Pt*Q+jt*pt);return(Qt>0?Ee<0:Ee>0)?null:this.at(Ee/Qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Un=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lu=new Me,As=new Is,$o=new Fi,hu=new N,Ko=new N,Qo=new N,jo=new N,Sl=new N,ta=new N,uu=new N,ea=new N,ve=class extends Pn{constructor(t=new Je,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=a[c],m=r[c];d!==0&&(Sl.fromBufferAttribute(m,t),o?ta.addScaledVector(Sl,d):ta.addScaledVector(Sl.sub(e),d))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),As.copy(t.ray).recast(t.near),!($o.containsPoint(As.origin)===!1&&(As.intersectSphere($o,hu)===null||As.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),As.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,T=h.length;_<T;_++){let y=h[_],p=o[y.materialIndex],M=Math.max(y.start,u.start),L=Math.min(a.count,Math.min(y.start+y.count,u.start+u.count));for(let E=M,S=L;E<S;E+=3){let C=a.getX(E),U=a.getX(E+1),v=a.getX(E+2);s=na(this,p,t,n,l,d,m,C,U,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),T=Math.min(a.count,u.start+u.count);for(let y=_,p=T;y<p;y+=3){let M=a.getX(y),L=a.getX(y+1),E=a.getX(y+2);s=na(this,o,t,n,l,d,m,M,L,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,T=h.length;_<T;_++){let y=h[_],p=o[y.materialIndex],M=Math.max(y.start,u.start),L=Math.min(c.count,Math.min(y.start+y.count,u.start+u.count));for(let E=M,S=L;E<S;E+=3){let C=E,U=E+1,v=E+2;s=na(this,p,t,n,l,d,m,C,U,v),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),T=Math.min(c.count,u.start+u.count);for(let y=_,p=T;y<p;y+=3){let M=y,L=y+1,E=y+2;s=na(this,o,t,n,l,d,m,M,L,E),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Jf(i,t,e,n,s,r,o,a){let c;if(t.side===Wn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hi,a),c===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ea);return l<e.near||l>e.far?null:{distance:l,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ko),i.getVertexPosition(c,Qo),i.getVertexPosition(l,jo);let d=Jf(i,t,e,n,Ko,Qo,jo,uu);if(d){let m=new N;fs.getBarycoord(uu,Ko,Qo,jo,m),s&&(d.uv=fs.getInterpolatedAttribute(s,a,c,l,m,new le)),r&&(d.uv1=fs.getInterpolatedAttribute(r,a,c,l,m,new le)),o&&(d.normal=fs.getInterpolatedAttribute(o,a,c,l,m,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new N,materialIndex:0};fs.getNormal(Ko,Qo,jo,h.normal),d.face=h,d.barycoord=m}return d}var jr=class extends ii{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Gn,d=Gn,m,h){super(null,o,a,c,l,d,s,r,m,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oi=class extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qs=new Me,du=new Me,ia=[],fu=new Ui,$f=new Me,Br=new ve,zr=new Fi,gi=class extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$f)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),fu.copy(t.boundingBox).applyMatrix4(Qs),this.boundingBox.union(fu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qs),zr.copy(t.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),t.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),du.multiplyMatrices(n,Qs),Br.matrixWorld=du,Br.raycast(t,ia);for(let o=0,a=ia.length;o<a;o++){let c=ia[o];c.instanceId=r,c.object=this,e.push(c)}ia.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,ac,xi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rs=new Fi,Kf=new le(.5,.5),sa=new N,dr=class{constructor(t=new hi,e=new hi,n=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],m=r[5],h=r[6],u=r[7],_=r[8],T=r[9],y=r[10],p=r[11],M=r[12],L=r[13],E=r[14],S=r[15];if(s[0].setComponents(l-o,u-d,p-_,S-M).normalize(),s[1].setComponents(l+o,u+d,p+_,S+M).normalize(),s[2].setComponents(l+a,u+m,p+T,S+L).normalize(),s[3].setComponents(l-a,u-m,p-T,S-L).normalize(),n)s[4].setComponents(c,h,y,E).normalize(),s[5].setComponents(l-c,u-h,p-y,S-E).normalize();else if(s[4].setComponents(l-c,u-h,p-y,S-E).normalize(),e===bi)s[5].setComponents(l+c,u+h,p+y,S+E).normalize();else if(e===or)s[5].setComponents(c,h,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);let e=Kf.distanceTo(t.center);return Rs.radius=.7071067811865476+e,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fr=class extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ba=new N,Ta=new N,pu=new Me,Hr=new Is,ra=new Fi,wl=new N,mu=new N,pr=class extends Pn{constructor(t=new Je,e=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),Ta.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ba.distanceTo(Ta);t.setAttribute("lineDistance",new Le(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;pu.copy(s).invert(),Hr.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){let u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let T=u,y=_-1;T<y;T+=l){let p=d.getX(T),M=d.getX(T+1),L=oa(this,t,Hr,c,p,M,T);L&&e.push(L)}if(this.isLineLoop){let T=d.getX(_-1),y=d.getX(u),p=oa(this,t,Hr,c,T,y,_-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let T=u,y=_-1;T<y;T+=l){let p=oa(this,t,Hr,c,T,T+1,T);p&&e.push(p)}if(this.isLineLoop){let T=oa(this,t,Hr,c,_-1,u,_-1);T&&e.push(T)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),Ta.fromBufferAttribute(a,r),e.distanceSqToSegment(ba,Ta,wl,mu)>n)return;wl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(wl);if(!(l<t.near||l>t.far))return{distance:l,point:mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new N,xu=new N,to=class extends pr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gu.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(xu);t.setAttribute("lineDistance",new Le(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Aa=class extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yu=new Me,Nl=new Is,aa=new Fi,ca=new N,ts=class extends Pn{constructor(t=new Je,e=new Aa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;yu.copy(s).invert(),Nl.copy(t.ray).applyMatrix4(yu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,m=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),u=Math.min(l.count,o.start+o.count);for(let _=h,T=u;_<T;_++){let y=l.getX(_);ca.fromBufferAttribute(m,y),_u(ca,y,c,s,t,e,this)}}else{let h=Math.max(0,o.start),u=Math.min(m.count,o.start+o.count);for(let _=h,T=u;_<T;_++)ca.fromBufferAttribute(m,_),_u(ca,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _u(i,t,e,n,s,r,o){let a=Nl.distanceSqToPoint(i);if(a<e){let c=new N;Nl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var eo=class extends ii{constructor(t=[],e=_s,n,s,r,o,a,c,l,d){super(t,e,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ai=class extends ii{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends ii{constructor(t,e,n=Ci,s,r,o,a=Gn,c=Gn,l,d=Di,m=1){if(d!==Di&&d!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:m};super(h,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ra=class extends ps{constructor(t,e=Ci,n=_s,s,r,o=Gn,a=Gn,c,l=Di){let d={width:t,height:t,depth:1},m=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},no=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nt=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],d=[],m=[],h=0,u=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(m,2));function _(T,y,p,M,L,E,S,C,U,v,F){let W=E/U,Z=S/v,J=E/2,j=S/2,z=C/2,Q=U+1,rt=v+1,st=0,pt=0,ut=new N;for(let ft=0;ft<rt;ft++){let vt=ft*Z-j;for(let se=0;se<Q;se++){let $t=se*W-J;ut[T]=$t*M,ut[y]=vt*L,ut[p]=z,l.push(ut.x,ut.y,ut.z),ut[T]=0,ut[y]=0,ut[p]=C>0?1:-1,d.push(ut.x,ut.y,ut.z),m.push(se/U),m.push(1-ft/v),st+=1}}for(let ft=0;ft<v;ft++)for(let vt=0;vt<U;vt++){let se=h+vt+Q*ft,$t=h+vt+Q*(ft+1),ke=h+(vt+1)+Q*(ft+1),Jt=h+(vt+1)+Q*ft;c.push(se,$t,Jt),c.push($t,ke,Jt),pt+=6}a.addGroup(u,pt,F),u+=pt,h+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ls=class i extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,d=new le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let m=0,h=3;m<=e;m++,h+=3){let u=n+m/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/t+1)/2,d.y=(o[h+1]/t+1)/2,c.push(d.x,d.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xt=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],m=[],h=[],u=[],_=0,T=[],y=n/2,p=0;M(),o===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(d),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2));function M(){let E=new N,S=new N,C=0,U=(e-t)/n;for(let v=0;v<=r;v++){let F=[],W=v/r,Z=W*(e-t)+t;for(let J=0;J<=s;J++){let j=J/s,z=j*c+a,Q=Math.sin(z),rt=Math.cos(z);S.x=Z*Q,S.y=-W*n+y,S.z=Z*rt,m.push(S.x,S.y,S.z),E.set(Q,U,rt).normalize(),h.push(E.x,E.y,E.z),u.push(j,1-W),F.push(_++)}T.push(F)}for(let v=0;v<s;v++)for(let F=0;F<r;F++){let W=T[F][v],Z=T[F+1][v],J=T[F+1][v+1],j=T[F][v+1];(t>0||F!==0)&&(d.push(W,Z,j),C+=3),(e>0||F!==r-1)&&(d.push(Z,J,j),C+=3)}l.addGroup(p,C,0),p+=C}function L(E){let S=_,C=new le,U=new N,v=0,F=E===!0?t:e,W=E===!0?1:-1;for(let J=1;J<=s;J++)m.push(0,y*W,0),h.push(0,W,0),u.push(.5,.5),_++;let Z=_;for(let J=0;J<=s;J++){let z=J/s*c+a,Q=Math.cos(z),rt=Math.sin(z);U.x=F*rt,U.y=y*W,U.z=F*Q,m.push(U.x,U.y,U.z),h.push(0,W,0),C.x=Q*.5+.5,C.y=rt*.5*W+.5,u.push(C.x,C.y),_++}for(let J=0;J<s;J++){let j=S+J,z=Z+J;E===!0?d.push(z,z+1,j):d.push(z+1,z,j),v+=3}l.addGroup(p,v,E===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vn=class i extends Xt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ca=class i extends Je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),d(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let L=new N,E=new N,S=new N;for(let C=0;C<e.length;C+=3)u(e[C+0],L),u(e[C+1],E),u(e[C+2],S),c(L,E,S,M)}function c(M,L,E,S){let C=S+1,U=[];for(let v=0;v<=C;v++){U[v]=[];let F=M.clone().lerp(E,v/C),W=L.clone().lerp(E,v/C),Z=C-v;for(let J=0;J<=Z;J++)J===0&&v===C?U[v][J]=F:U[v][J]=F.clone().lerp(W,J/Z)}for(let v=0;v<C;v++)for(let F=0;F<2*(C-v)-1;F++){let W=Math.floor(F/2);F%2===0?(h(U[v][W+1]),h(U[v+1][W]),h(U[v][W])):(h(U[v][W+1]),h(U[v+1][W+1]),h(U[v+1][W]))}}function l(M){let L=new N;for(let E=0;E<r.length;E+=3)L.x=r[E+0],L.y=r[E+1],L.z=r[E+2],L.normalize().multiplyScalar(M),r[E+0]=L.x,r[E+1]=L.y,r[E+2]=L.z}function d(){let M=new N;for(let L=0;L<r.length;L+=3){M.x=r[L+0],M.y=r[L+1],M.z=r[L+2];let E=y(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(E,1-S)}_(),m()}function m(){for(let M=0;M<o.length;M+=6){let L=o[M+0],E=o[M+2],S=o[M+4],C=Math.max(L,E,S),U=Math.min(L,E,S);C>.9&&U<.1&&(L<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function u(M,L){let E=M*3;L.x=t[E+0],L.y=t[E+1],L.z=t[E+2]}function _(){let M=new N,L=new N,E=new N,S=new N,C=new le,U=new le,v=new le;for(let F=0,W=0;F<r.length;F+=9,W+=6){M.set(r[F+0],r[F+1],r[F+2]),L.set(r[F+3],r[F+4],r[F+5]),E.set(r[F+6],r[F+7],r[F+8]),C.set(o[W+0],o[W+1]),U.set(o[W+2],o[W+3]),v.set(o[W+4],o[W+5]),S.copy(M).add(L).add(E).divideScalar(3);let Z=y(S);T(C,W+0,M,Z),T(U,W+2,L,Z),T(v,W+4,E,Z)}}function T(M,L,E,S){S<0&&M.x===1&&(o[L]=M.x-1),E.x===0&&E.z===0&&(o[L]=S/2/Math.PI+.5)}function y(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let d=n[s],h=n[s+1]-d,u=(o-d)/h;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new le:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new Me;for(let u=0;u<=t;u++){let _=u/t;s[u]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,d=Math.abs(s[0].x),m=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=l&&(l=d,n.set(1,0,0)),m<=l&&(l=m,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Ve(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,_))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ve(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],u*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},io=class extends ri{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new le){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),h=c-this.aX,u=l-this.aY;c=h*d-u*m+this.aX,l=h*m+u*d+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pa=class extends io{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,d,m){let h=(o-r)/l-(a-r)/(l+d)+(a-o)/d,u=(a-o)/d-(c-o)/(d+m)+(c-a)/m;h*=d,u*=d,s(o,a,h,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var vu=new N,Mu=new N,bl=new hh,Tl=new hh,Al=new hh,mr=class extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,d;this.closed||a>0?l=s[(a-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),l=Mu);let m=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(vu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=vu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(m),u),T=Math.pow(m.distanceToSquared(h),u),y=Math.pow(h.distanceToSquared(d),u);T<1e-4&&(T=1),_<1e-4&&(_=T),y<1e-4&&(y=T),bl.initNonuniformCatmullRom(l.x,m.x,h.x,d.x,_,T,y),Tl.initNonuniformCatmullRom(l.y,m.y,h.y,d.y,_,T,y),Al.initNonuniformCatmullRom(l.z,m.z,h.z,d.z,_,T,y)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(l.x,m.x,h.x,d.x,this.tension),Tl.initCatmullRom(l.y,m.y,h.y,d.y,this.tension),Al.initCatmullRom(l.z,m.z,h.z,d.z,this.tension));return n.set(bl.calc(c),Tl.calc(c),Al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Qf(i,t){let e=1-i;return e*e*t}function jf(i,t){return 2*(1-i)*i*t}function t0(i,t){return i*i*t}function Vr(i,t,e,n){return Qf(i,t)+jf(i,e)+t0(i,n)}function e0(i,t){let e=1-i;return e*e*e*t}function n0(i,t){let e=1-i;return 3*e*e*i*t}function i0(i,t){return 3*(1-i)*i*i*t}function s0(i,t){return i*i*i*t}function Wr(i,t,e,n,s){return e0(i,t)+n0(i,e)+i0(i,n)+s0(i,s)}var Ia=class extends ri{constructor(t=new le,e=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new le){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},gr=class extends ri{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y),Wr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends ri{constructor(t=new le,e=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new le){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new le){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends ri{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends ri{constructor(t=new le,e=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new le){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ds=class extends ri{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new le){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],d=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Eu(a,c.x,l.x,d.x,m.x),Eu(a,c.y,l.y,d.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new le().fromArray(s))}return this}},r0=Object.freeze({__proto__:null,ArcCurve:Pa,CatmullRomCurve3:mr,CubicBezierCurve:Ia,CubicBezierCurve3:gr,EllipseCurve:io,LineCurve:La,LineCurve3:Da,QuadraticBezierCurve:Na,QuadraticBezierCurve3:Ds,SplineCurve:Ua});var so=class i extends Ca{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ro=class i extends Je{constructor(t=[new le(0,-.5),new le(.5,0),new le(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],d=1/e,m=new N,h=new le,u=new N,_=new N,T=new N,y=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:y=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,u.x=p*1,u.y=-y,u.z=p*0,T.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:c.push(T.x,T.y,T.z);break;default:y=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,u.x=p*1,u.y=-y,u.z=p*0,_.copy(u),u.x+=T.x,u.y+=T.y,u.z+=T.z,u.normalize(),c.push(u.x,u.y,u.z),T.copy(_)}for(let M=0;M<=e;M++){let L=n+M*d*s,E=Math.sin(L),S=Math.cos(L);for(let C=0;C<=t.length-1;C++){m.x=t[C].x*E,m.y=t[C].y,m.z=t[C].x*S,o.push(m.x,m.y,m.z),h.x=M/e,h.y=C/(t.length-1),a.push(h.x,h.y);let U=c[3*C+0]*E,v=c[3*C+1],F=c[3*C+0]*S;l.push(U,v,F)}}for(let M=0;M<e;M++)for(let L=0;L<t.length-1;L++){let E=L+M*t.length,S=E,C=E+t.length,U=E+t.length+1,v=E+1;r.push(S,C,v),r.push(U,v,C)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var $e=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,m=t/a,h=e/c,u=[],_=[],T=[],y=[];for(let p=0;p<d;p++){let M=p*h-o;for(let L=0;L<l;L++){let E=L*m-r;_.push(E,-M,0),T.push(0,0,1),y.push(L/a),y.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let L=M+l*p,E=M+l*(p+1),S=M+1+l*(p+1),C=M+1+l*p;u.push(L,E,C),u.push(E,S,C)}this.setIndex(u),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(T,3)),this.setAttribute("uv",new Le(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},oo=class i extends Je{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],d=[],m=t,h=(e-t)/s,u=new N,_=new le;for(let T=0;T<=s;T++){for(let y=0;y<=n;y++){let p=r+y/n*o;u.x=m*Math.cos(p),u.y=m*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),_.x=(u.x/e+1)/2,_.y=(u.y/e+1)/2,d.push(_.x,_.y)}m+=h}for(let T=0;T<s;T++){let y=T*(n+1);for(let p=0;p<n;p++){let M=p+y,L=M,E=M+n+1,S=M+n+2,C=M+1;a.push(L,E,C),a.push(E,S,C)}}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ze=class i extends Je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],m=new N,h=new N,u=[],_=[],T=[],y=[];for(let p=0;p<=n;p++){let M=[],L=p/n,E=o+L*a,S=t*Math.cos(E),C=Math.sqrt(t*t-S*S),U=0;p===0&&o===0?U=.5/e:p===n&&c===Math.PI&&(U=-.5/e);for(let v=0;v<=e;v++){let F=v/e,W=s+F*r;m.x=-C*Math.cos(W),m.y=S,m.z=C*Math.sin(W),_.push(m.x,m.y,m.z),h.copy(m).normalize(),T.push(h.x,h.y,h.z),y.push(F+U,1-L),M.push(l++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let L=d[p][M+1],E=d[p][M],S=d[p+1][M],C=d[p+1][M+1];(p!==0||o>0)&&u.push(L,E,C),(p!==n-1||c<Math.PI)&&u.push(E,S,C)}this.setIndex(u),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(T,3)),this.setAttribute("uv",new Le(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vn=class i extends Je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],d=[],m=[],h=new N,u=new N,_=new N;for(let T=0;T<=n;T++){let y=o+T/n*a;for(let p=0;p<=s;p++){let M=p/s*r;u.x=(t+e*Math.cos(y))*Math.cos(M),u.y=(t+e*Math.cos(y))*Math.sin(M),u.z=e*Math.sin(y),l.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),_.subVectors(u,h).normalize(),d.push(_.x,_.y,_.z),m.push(p/s),m.push(T/n)}}for(let T=1;T<=n;T++)for(let y=1;y<=s;y++){let p=(s+1)*T+y-1,M=(s+1)*(T-1)+y-1,L=(s+1)*(T-1)+y,E=(s+1)*T+y;c.push(p,M,E),c.push(M,L,E)}this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Bi=class i extends Je{constructor(t=new Ds(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new le,d=new N,m=[],h=[],u=[],_=[];T(),this.setIndex(_),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2));function T(){for(let L=0;L<e;L++)y(L);y(r===!1?e:0),M(),p()}function y(L){d=t.getPointAt(L/e,d);let E=o.normals[L],S=o.binormals[L];for(let C=0;C<=s;C++){let U=C/s*Math.PI*2,v=Math.sin(U),F=-Math.cos(U);c.x=F*E.x+v*S.x,c.y=F*E.y+v*S.y,c.z=F*E.z+v*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,m.push(a.x,a.y,a.z)}}function p(){for(let L=1;L<=e;L++)for(let E=1;E<=s;E++){let S=(s+1)*(L-1)+(E-1),C=(s+1)*L+(E-1),U=(s+1)*L+E,v=(s+1)*(L-1)+E;_.push(S,C,v),_.push(C,U,v)}}function M(){for(let L=0;L<=e;L++)for(let E=0;E<=s;E++)l.x=L/e,l.y=E/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new r0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Su(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Su(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function jn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function o0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}var Ro={clone:Os,merge:jn},a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=o0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fa=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ao=class extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var In=class extends Ti{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oa=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ba=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function js(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},za=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,a=2*e-n;break;case Dl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:o=t,c=2*n-e;break;case Dl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this._offsetPrev,m=this._offsetNext,h=this._weightPrev,u=this._weightNext,_=(n-e)/(s-e),T=_*_,y=T*_,p=-h*y+2*h*T-h*_,M=(1+h)*y+(-1.5-2*h)*T+(-.5+h)*_+1,L=(-1-u)*y+(1.5+u)*T+.5*_,E=u*y-u*T;for(let S=0;S!==a;++S)r[S]=p*o[d+S]+M*o[l+S]+L*o[c+S]+E*o[m+S];return r}},Ha=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=(n-e)/(s-e),m=1-d;for(let h=0;h!==a;++h)r[h]=o[l+h]*m+o[c+h]*d;return r}},ka=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ga=class extends ms{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,d=this.inTangents,m=this.outTangents;if(!d||!m){let _=(n-e)/(s-e),T=1-_;for(let y=0;y!==a;++y)r[y]=o[l+y]*T+o[c+y]*_;return r}let h=a*2,u=t-1;for(let _=0;_!==a;++_){let T=o[l+_],y=o[c+_],p=u*h+_*2,M=m[p],L=m[p+1],E=t*h+_*2,S=d[E],C=d[E+1],U=h0(n,e,M,S,s);r[_]=md(U,T,L,C,y)}return r}};function md(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function l0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function h0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=md(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=l0(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var ui=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Rl(t.settings)&&(n.settings={inTangents:js(t.settings.inTangents,Array),outTangents:js(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break;case Pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Rl(this.settings)&&(wu(this.settings.inTangents,t),wu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ie("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&gf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],d=t[a+1];if(l!==d&&(a!==1||l!==t[0]))if(s)c=!0;else{let m=a*n,h=m-n,u=m+n;for(let _=0;_!==n;++_){let T=e[m+_];if(T!==e[h+_]||T!==e[u+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let m=a*n,h=o*n;for(let u=0;u!==n;++u)e[h+u]=e[m+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Ma;var gs=class extends ui{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Xr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="color";var Wa=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};Wa.prototype.ValueTypeName="number";var Xa=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let d=l+a;l!==d;l+=4)Fe.slerpFlat(r,0,o,l-a,o,l,c);return r}},co=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ui{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Xr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends ui{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="vector";var Ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,m){return l.push(d,m),this},this.removeHandler=function(d){let m=l.indexOf(d);return m!==-1&&l.splice(m,2),this},this.getHandler=function(d){for(let m=0,h=l.length;m<h;m+=2){let u=l[m],_=l[m+1];if(u.global&&(u.lastIndex=0),u.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gd=new Ya,Za=class{constructor(t){this.manager=t!==void 0?t:gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Za.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ns=class extends Pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},lo=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Cl=new Me,bu=new N,Tu=new N,xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},la=new N,ha=new Fe,Ii=new N,ho=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(la,ha,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ha,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(la,ha,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ha,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new N,Au=new le,Ru=new le,kn=class extends ho{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,e){return this.getViewBounds(t,Au,Ru),e.subVectors(Ru,Au)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ul=class extends xr{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ps*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},uo=class extends Ns{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ul}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Fl=class extends xr{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}},zi=class extends Ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ys=class extends ho{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ol=class extends xr{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fo=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Ol}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var po=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var tr=-90,er=1,Ja=class extends Pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(tr,er,t,e);s.layers=this.layers,this.add(s);let r=new kn(tr,er,t,e);r.layers=this.layers,this.add(r);let o=new kn(tr,er,t,e);o.layers=this.layers,this.add(o);let a=new kn(tr,er,t,e);a.layers=this.layers,this.add(a);let c=new kn(tr,er,t,e);c.layers=this.layers,this.add(c);let l=new kn(tr,er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,d]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(m,h,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},$a=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dh="\\[\\]\\.:\\/",u0=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",d0="[^"+dh.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",fh),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),x0=new RegExp("^"+f0+p0+m0+g0+"$"),y0=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(t){let e=x0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);y0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Bl;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fy=new Float32Array(1);var Cu=new Me,mo=class{constructor(t,e,n=0,s=1/0){this.ray=new Is(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(Pu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(Pu),n}};function Pu(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],t,e,!0)}}var go=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Te("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var _h=class _h{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};_h.prototype.isMatrix2=!0;var Hl=_h;function ph(i,t,e,n){let s=_0(n);switch(e){case ih:return i*t;case ac:return i*t/s.components*s.byteLength;case cc:return i*t/s.components*s.byteLength;case Es:return i*t*2/s.components*s.byteLength;case lc:return i*t*2/s.components*s.byteLength;case sh:return i*t*3/s.components*s.byteLength;case yi:return i*t*4/s.components*s.byteLength;case hc:return i*t*4/s.components*s.byteLength;case Mo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:case pc:return Math.max(i,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(i,8)*Math.max(t,8)/2;case mc:case gc:case yc:case _c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xc:case bo:case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Uc:case Fc:case Oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _0(i){switch(i){case oi:case jl:return{byteLength:1,components:1};case vr:case th:case di:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case Ci:case sc:case xi:return{byteLength:4,components:1};case eh:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window!="undefined"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);function Bd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function v0(i){let t=new WeakMap;function e(a,c){let l=a.array,d=a.usage,m=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,l){let d=c.array,m=c.updateRanges;if(i.bindBuffer(l,a),m.length===0)i.bufferSubData(l,0,d);else{m.sort((u,_)=>u.start-_.start);let h=0;for(let u=1;u<m.length;u++){let _=m[h],T=m[u];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++h,m[h]=T)}m.length=h+1;for(let u=0,_=m.length;u<_;u++){let T=m[u];i.bufferSubData(l,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A0=`#ifdef USE_AOMAP
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
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,P0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,U0=`#ifdef USE_BUMPMAP
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W0=`#define PI 3.141592653589793
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
} // validated`,X0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
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
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
#endif`,_p=`uniform sampler2D dfgLUT;
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
}`,vp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ip=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
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
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Rm=`#if DEPTH_PACKING == 3200
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,Hm=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define TOON
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
}`,Zm=`#define TOON
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
}`,Jm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:M0,alphahash_pars_fragment:E0,alphamap_fragment:S0,alphamap_pars_fragment:w0,alphatest_fragment:b0,alphatest_pars_fragment:T0,aomap_fragment:A0,aomap_pars_fragment:R0,batching_pars_vertex:C0,batching_vertex:P0,begin_vertex:I0,beginnormal_vertex:L0,bsdfs:D0,iridescence_fragment:N0,bumpmap_pars_fragment:U0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:O0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:k0,color_pars_vertex:G0,color_vertex:V0,common:W0,cube_uv_reflection_fragment:X0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:Z0,emissivemap_fragment:J0,emissivemap_pars_fragment:$0,colorspace_fragment:K0,colorspace_pars_fragment:Q0,envmap_fragment:j0,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:op,fog_pars_fragment:ap,gradientmap_pars_fragment:cp,lightmap_pars_fragment:lp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:yp,lights_physical_pars_fragment:_p,lights_fragment_begin:vp,lights_fragment_maps:Mp,lights_fragment_end:Ep,lightprobes_pars_fragment:Sp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Np,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Op,morphtarget_vertex:Bp,normal_fragment_begin:zp,normal_fragment_maps:Hp,normal_pars_fragment:kp,normal_pars_vertex:Gp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:Zp,opaque_fragment:Jp,packing:$p,premultiplied_alpha_fragment:Kp,project_vertex:Qp,dithering_fragment:jp,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:cm,skinning_vertex:lm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:_m,worldpos_vertex:vm,background_vert:Mm,background_frag:Em,backgroundCube_vert:Sm,backgroundCube_frag:wm,cube_vert:bm,cube_frag:Tm,depth_vert:Am,depth_frag:Rm,distance_vert:Cm,distance_frag:Pm,equirect_vert:Im,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Nm,meshbasic_vert:Um,meshbasic_frag:Fm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:zm,meshmatcap_frag:Hm,meshnormal_vert:km,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:qm,meshtoon_vert:Ym,meshtoon_frag:Zm,points_vert:Jm,points_frag:$m,shadow_vert:Km,shadow_frag:Qm,sprite_vert:jm,sprite_frag:tg},ie={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Vi={basic:{uniforms:jn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:jn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:jn([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:jn([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:jn([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new he(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:jn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:jn([ie.points,ie.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:jn([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:jn([ie.common,ie.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:jn([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:jn([ie.sprite,ie.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:jn([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:jn([ie.lights,ie.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Vi.physical={uniforms:jn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Vc={r:0,b:0,g:0},eg=new Me,zd=new De;zd.set(-1,0,0,0,1,0,0,0,1);function ng(i,t,e,n,s,r){let o=new he(0),a=s===!0?0:1,c,l,d=null,m=0,h=null;function u(M){let L=M.isScene===!0?M.background:null;if(L&&L.isTexture){let E=M.backgroundBlurriness>0;L=t.get(L,E)}return L}function _(M){let L=!1,E=u(M);E===null?y(o,a):E&&E.isColor&&(y(E,1),L=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,L){let E=u(L);E&&(E.isCubeTexture||E.mapping===_o)?(l===void 0&&(l=new ve(new Nt(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Os(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(L.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zd),l.material.toneMapped=qe.getTransfer(E.colorSpace)!==tn,(d!==E||m!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,m=E.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ve(new $e(2,2),new hn({name:"BackgroundMaterial",uniforms:Os(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==tn,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||m!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,m=E.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function y(M,L){M.getRGB(Vc,uh(i)),e.buffers.color.setClear(Vc.r,Vc.g,Vc.b,L,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,L=1){o.set(M),a=L,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,y(o,a)},render:_,addToRenderList:T,dispose:p}}function ig(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(Z,J,j,z,Q){let rt=!1,st=m(Z,z,j,J);r!==st&&(r=st,l(r.object)),rt=u(Z,z,j,Q),rt&&_(Z,z,j,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,E(Z,J,j,z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function l(Z){return i.bindVertexArray(Z)}function d(Z){return i.deleteVertexArray(Z)}function m(Z,J,j,z){let Q=z.wireframe===!0,rt=n[J.id];rt===void 0&&(rt={},n[J.id]=rt);let st=Z.isInstancedMesh===!0?Z.id:0,pt=rt[st];pt===void 0&&(pt={},rt[st]=pt);let ut=pt[j.id];ut===void 0&&(ut={},pt[j.id]=ut);let ft=ut[Q];return ft===void 0&&(ft=h(c()),ut[Q]=ft),ft}function h(Z){let J=[],j=[],z=[];for(let Q=0;Q<e;Q++)J[Q]=0,j[Q]=0,z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:z,object:Z,attributes:{},index:null}}function u(Z,J,j,z){let Q=r.attributes,rt=J.attributes,st=0,pt=j.getAttributes();for(let ut in pt)if(pt[ut].location>=0){let vt=Q[ut],se=rt[ut];if(se===void 0&&(ut==="instanceMatrix"&&Z.instanceMatrix&&(se=Z.instanceMatrix),ut==="instanceColor"&&Z.instanceColor&&(se=Z.instanceColor)),vt===void 0||vt.attribute!==se||se&&vt.data!==se.data)return!0;st++}return r.attributesNum!==st||r.index!==z}function _(Z,J,j,z){let Q={},rt=J.attributes,st=0,pt=j.getAttributes();for(let ut in pt)if(pt[ut].location>=0){let vt=rt[ut];vt===void 0&&(ut==="instanceMatrix"&&Z.instanceMatrix&&(vt=Z.instanceMatrix),ut==="instanceColor"&&Z.instanceColor&&(vt=Z.instanceColor));let se={};se.attribute=vt,vt&&vt.data&&(se.data=vt.data),Q[ut]=se,st++}r.attributes=Q,r.attributesNum=st,r.index=z}function T(){let Z=r.newAttributes;for(let J=0,j=Z.length;J<j;J++)Z[J]=0}function y(Z){p(Z,0)}function p(Z,J){let j=r.newAttributes,z=r.enabledAttributes,Q=r.attributeDivisors;j[Z]=1,z[Z]===0&&(i.enableVertexAttribArray(Z),z[Z]=1),Q[Z]!==J&&(i.vertexAttribDivisor(Z,J),Q[Z]=J)}function M(){let Z=r.newAttributes,J=r.enabledAttributes;for(let j=0,z=J.length;j<z;j++)J[j]!==Z[j]&&(i.disableVertexAttribArray(j),J[j]=0)}function L(Z,J,j,z,Q,rt,st){st===!0?i.vertexAttribIPointer(Z,J,j,Q,rt):i.vertexAttribPointer(Z,J,j,z,Q,rt)}function E(Z,J,j,z){T();let Q=z.attributes,rt=j.getAttributes(),st=J.defaultAttributeValues;for(let pt in rt){let ut=rt[pt];if(ut.location>=0){let ft=Q[pt];if(ft===void 0&&(pt==="instanceMatrix"&&Z.instanceMatrix&&(ft=Z.instanceMatrix),pt==="instanceColor"&&Z.instanceColor&&(ft=Z.instanceColor)),ft!==void 0){let vt=ft.normalized,se=ft.itemSize,$t=t.get(ft);if($t===void 0)continue;let ke=$t.buffer,Jt=$t.type,ge=$t.bytesPerElement,mt=Jt===i.INT||Jt===i.UNSIGNED_INT||ft.gpuType===sc;if(ft.isInterleavedBufferAttribute){let gt=ft.data,Pt=gt.stride,jt=ft.offset;if(gt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<ut.locationSize;Qt++)p(ut.location+Qt,gt.meshPerAttribute);Z.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Qt=0;Qt<ut.locationSize;Qt++)y(ut.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Qt=0;Qt<ut.locationSize;Qt++)L(ut.location+Qt,se/ut.locationSize,Jt,vt,Pt*ge,(jt+se/ut.locationSize*Qt)*ge,mt)}else{if(ft.isInstancedBufferAttribute){for(let gt=0;gt<ut.locationSize;gt++)p(ut.location+gt,ft.meshPerAttribute);Z.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let gt=0;gt<ut.locationSize;gt++)y(ut.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let gt=0;gt<ut.locationSize;gt++)L(ut.location+gt,se/ut.locationSize,Jt,vt,se*ge,se/ut.locationSize*gt*ge,mt)}}else if(st!==void 0){let vt=st[pt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(ut.location,vt);break;case 3:i.vertexAttrib3fv(ut.location,vt);break;case 4:i.vertexAttrib4fv(ut.location,vt);break;default:i.vertexAttrib1fv(ut.location,vt)}}}}M()}function S(){F();for(let Z in n){let J=n[Z];for(let j in J){let z=J[j];for(let Q in z){let rt=z[Q];for(let st in rt)d(rt[st].object),delete rt[st];delete z[Q]}}delete n[Z]}}function C(Z){if(n[Z.id]===void 0)return;let J=n[Z.id];for(let j in J){let z=J[j];for(let Q in z){let rt=z[Q];for(let st in rt)d(rt[st].object),delete rt[st];delete z[Q]}}delete n[Z.id]}function U(Z){for(let J in n){let j=n[J];for(let z in j){let Q=j[z];if(Q[Z.id]===void 0)continue;let rt=Q[Z.id];for(let st in rt)d(rt[st].object),delete rt[st];delete Q[Z.id]}}}function v(Z){for(let J in n){let j=n[J],z=Z.isInstancedMesh===!0?Z.id:0,Q=j[z];if(Q!==void 0){for(let rt in Q){let st=Q[rt];for(let pt in st)d(st[pt].object),delete st[pt];delete Q[rt]}delete j[z],Object.keys(j).length===0&&delete n[J]}}}function F(){W(),o=!0,r!==s&&(r=s,l(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfObject:v,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:y,disableUnusedAttributes:M}}function sg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),e.update(l,n,d))}function a(c,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let u=0;u<d;u++)h+=l[u];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==yi&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let v=U===di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==oi&&U!==xi&&!v&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=c(l);d!==l&&(Te("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let m=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:M,maxVaryings:L,maxFragmentUniforms:E,maxSamples:S,samples:C}}function og(i){let t=this,e=null,n=0,s=!1,r=!1,o=new hi,a=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){let u=m.length!==0||h||n!==0||s;return s=h,n=m.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,h){e=d(m,h,0)},this.setState=function(m,h,u){let _=m.clippingPlanes,T=m.clipIntersection,y=m.clipShadows,p=i.get(m);if(!s||_===null||_.length===0||r&&!y)r?d(null):l();else{let M=r?0:n,L=M*4,E=p.clippingState||null;c.value=E,E=d(_,h,L,u);for(let S=0;S!==L;++S)E[S]=e[S];p.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,h,u,_){let T=m!==null?m.length:0,y=null;if(T!==0){if(y=c.value,_!==!0||y===null){let p=u+T*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(y===null||y.length<p)&&(y=new Float32Array(p));for(let L=0,E=u;L!==T;++L,E+=4)o.copy(m[L]).applyMatrix4(M,a),o.normal.toArray(y,E),y[E+3]=o.constant}c.value=y,c.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,y}}var wr=4,ag=6,cg=20,lg=256,Co=new ys,xd=new he,vh=null,Mh=0,Eh=0,Sh=!1,hg=new N,Bs=new N,Xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=hg}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,Mh,Eh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:di,format:yi,colorSpace:qr,depthBuffer:!1},s=yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ug(r)),this._blurMaterial=fg(r,t,e),this._ggxMaterial=dg(r,t,e)}return s}_compileMaterial(t){let e=new ve(new Je,t);this._renderer.compile(e,Co)}_sceneToCubeUV(t,e,n,s,r){let c=new kn(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,h=m.autoClear,u=m.toneMapping;m.getClearColor(xd),m.toneMapping=Ri,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Nt,new Un({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,y=T.material,p=!1,M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,p=!0):(y.color.copy(xd),p=!0);for(let L=0;L<6;L++){let E=L%3;E===0?(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[L],r.y,r.z)):E===1?(c.up.set(0,0,l[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[L],r.z)):(c.up.set(0,l[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[L]));let S=this._cubeSize;Sr(s,E*S,L>2?S:0,S,S),m.setRenderTarget(s),p&&m.render(T,c),m.render(t,c)}m.toneMapping=u,m.autoClear=h,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_s||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(l*l-d*d),h=l*1.25,u=m*h,{_lodMax:_}=this,T=this._sizeLods[n],y=3*T*(n>_-wr?n-_+wr:0),p=4*(this._cubeSize-T);c.envMap.value=t.texture,c.roughness.value=u,c.mipInt.value=_-e,Sr(r,y,p,3*T,2*T),s.setRenderTarget(r),s.render(a,Co),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Sr(t,y,p,3*T,2*T),s.setRenderTarget(t),s.render(a,Co)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-wr?s-this._lodMax+wr:0),h=4*(this._cubeSize-d);Sr(e,m,h,3*d,2*d),o.setRenderTarget(e),o.render(c,Co)}};function ug(i){let t=[],e=[],n=i,s=i-wr+1+ag;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,d=[c,c,l,c,l,l,c,c,l,l,c,l],m=6,h=6,u=3,_=new Float32Array(u*h*m),T=new Float32Array(u*h*m);for(let p=0;p<m;p++){let M=p%3*2/3-1,L=p>2?0:-1,E=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];_.set(E,u*h*p);for(let S=0;S<h;S++){let C=d[S*2]*2-1,U=d[S*2+1]*2-1;p===0?Bs.set(1,U,C):p===1?Bs.set(-C,1,-U):p===2?Bs.set(-C,U,1):p===3?Bs.set(-1,U,-C):p===4?Bs.set(-C,-1,U):Bs.set(C,U,-1),Bs.toArray(T,(p*h+S)*u)}}let y=new Je;y.setAttribute("position",new mn(_,u)),y.setAttribute("outputDirection",new mn(T,u)),e.push(new ve(y,null)),n>wr&&n--}return{lodMeshes:e,sizeLods:t}}function yd(i,t,e){let n=new Qn(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dg(i,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function fg(i,t,e){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:cg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _d(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qc=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new eo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nt(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:ki});r.uniforms.tEquirect.value=e;let o=new ve(s,r),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=qn),new Ja(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function pg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===ec||u===nc)if(t.has(h)){let _=t.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let T=new qc(_.height);return T.fromEquirectangularTexture(i,h),t.set(h,T),h.addEventListener("dispose",l),a(T.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let u=h.mapping,_=u===ec||u===nc,T=u===_s||u===Fs;if(_||T){let y=e.get(h),p=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Xc(i)),y=_?n.fromEquirectangular(h,y):n.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{let M=h.image;return _&&M&&M.height>0||T&&M&&c(M)?(n===null&&(n=new Xc(i)),y=_?n.fromEquirectangular(h):n.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",d),y.texture):null}}}return h}function a(h,u){return u===ec?h.mapping=_s:u===nc&&(h.mapping=Fs),h}function c(h){let u=0,_=6;for(let T=0;T<_;T++)h[T]!==void 0&&u++;return u===_}function l(h){let u=h.target;u.removeEventListener("dispose",l);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,t,e,n){let s={},r=new WeakMap;function o(m){let h=m.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];let u=r.get(h);u&&(t.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(m,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(m){let h=m.attributes;for(let u in h)t.update(h[u],i.ARRAY_BUFFER)}function l(m){let h=[],u=m.index,_=m.attributes.position,T=0;if(_===void 0)return;if(u!==null){let M=u.array;T=u.version;for(let L=0,E=M.length;L<E;L+=3){let S=M[L+0],C=M[L+1],U=M[L+2];h.push(S,C,C,U,U,S)}}else{let M=_.array;T=_.version;for(let L=0,E=M.length/3-1;L<E;L+=3){let S=L+0,C=L+1,U=L+2;h.push(S,C,C,U,U,S)}}let y=new(_.count>=65535?Qr:Kr)(h,1);y.version=T;let p=r.get(m);p&&t.remove(p),r.set(m,y)}function d(m){let h=r.get(m);if(h){let u=m.index;u!==null&&h.version<u.version&&l(m)}else l(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:d}}function xg(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,h){i.drawElements(n,h,r,m*o),e.update(h,n,1)}function l(m,h,u){u!==0&&(i.drawElementsInstanced(n,h,r,m*o,u),e.update(h,n,u))}function d(m,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,m,0,u);let T=0;for(let y=0;y<u;y++)T+=h[y];e.update(T,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ie("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){let n=new WeakMap,s=new on;function r(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==m){let F=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],L=0;u===!0&&(L=1),_===!0&&(L=2),T===!0&&(L=3);let E=a.attributes.position.count*L,S=1;E>t.maxTextureSize&&(S=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*S*4*m),U=new Jr(C,E,S,m);U.type=xi,U.needsUpdate=!0;let v=L*4;for(let W=0;W<m;W++){let Z=y[W],J=p[W],j=M[W],z=E*S*4*W;for(let Q=0;Q<Z.count;Q++){let rt=Q*v;u===!0&&(s.fromBufferAttribute(Z,Q),C[z+rt+0]=s.x,C[z+rt+1]=s.y,C[z+rt+2]=s.z,C[z+rt+3]=0),_===!0&&(s.fromBufferAttribute(J,Q),C[z+rt+4]=s.x,C[z+rt+5]=s.y,C[z+rt+6]=s.z,C[z+rt+7]=0),T===!0&&(s.fromBufferAttribute(j,Q),C[z+rt+8]=s.x,C[z+rt+9]=s.y,C[z+rt+10]=s.z,C[z+rt+11]=j.itemSize===4?s.w:1)}}h={count:m,texture:U,size:new le(E,S)},n.set(a,h),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let T=0;T<l.length;T++)u+=l[T];let _=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vg(i,t,e,n,s){let r=new WeakMap;function o(l){let d=s.render.frame,m=l.geometry,h=t.get(l,m);if(r.get(h)!==d&&(t.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function a(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var Mg={[ql]:"LINEAR_TONE_MAPPING",[Yl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Jl]:"CUSTOM_TONE_MAPPING"};function Eg(i,t,e,n,s,r){let o=new Qn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Je;l.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Le([0,2,0,0,2,0],2));let d=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ve(l,d),h=new ys(-1,1,1,-1,0,1),u=null,_=null,T=!1,y,p=null,M=[],L=!1;this.setSize=function(E,S){o.setSize(E,S),a!==null&&a.setSize(E,S),c!==null&&c.setSize(E,S);for(let C=0;C<M.length;C++){let U=M[C];U.setSize&&U.setSize(E,S)}},this.setEffects=function(E){M=E,L=M.length>0&&M[0].isRenderPass===!0;let S=o.width,C=o.height;M.length>0&&a===null&&(a=new Qn(S,C,{type:di,depthBuffer:!1,stencilBuffer:!1}),c=new Qn(S,C,{type:di,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<M.length;U++){let v=M[U];v.setSize&&v.setSize(S,C)}},this.begin=function(E,S){if(T||E.toneMapping===Ri&&M.length===0)return!1;if(p=S,S!==null){let C=S.width,U=S.height;(o.width!==C||o.height!==U)&&this.setSize(C,U)}return L===!1&&E.setRenderTarget(o),y=E.toneMapping,E.toneMapping=Ri,!0},this.hasRenderPass=function(){return L},this.end=function(E,S){E.toneMapping=y,T=!0;let C=o,U=a;for(let v=0;v<M.length;v++){let F=M[v];F.enabled!==!1&&(F.render(E,U,C,S),F.needsSwap!==!1&&(C=U,U=U===a?c:a))}if(u!==E.outputColorSpace||_!==E.toneMapping){u=E.outputColorSpace,_=E.toneMapping,d.defines={},qe.getTransfer(u)===tn&&(d.defines.SRGB_TRANSFER="");let v=Mg[_];v&&(d.defines[v]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,E.setRenderTarget(p),E.render(m,h),p=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var Hd=new ii,Th=new ps(1,1),kd=new Jr,Gd=new wa,Vd=new eo,Md=[],Ed=[],Sd=new Float32Array(16),wd=new Float32Array(9),bd=new Float32Array(4);function Tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Md[s];if(r===void 0&&(r=new Float32Array(s),Md[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function On(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jc(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fn(e,t))return;i.uniform2fv(this.addr,t),On(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fn(e,t))return;i.uniform3fv(this.addr,t),On(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fn(e,t))return;i.uniform4fv(this.addr,t),On(e,t)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),On(e,t)}else{if(Fn(e,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),On(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),On(e,t)}else{if(Fn(e,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),On(e,n)}}function Cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),On(e,t)}else{if(Fn(e,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),On(e,n)}}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fn(e,t))return;i.uniform2iv(this.addr,t),On(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fn(e,t))return;i.uniform3iv(this.addr,t),On(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fn(e,t))return;i.uniform4iv(this.addr,t),On(e,t)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fn(e,t))return;i.uniform2uiv(this.addr,t),On(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fn(e,t))return;i.uniform3uiv(this.addr,t),On(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fn(e,t))return;i.uniform4uiv(this.addr,t),On(e,t)}}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Th.compareFunction=e.isReversedDepthBuffer()?Gc:kc,r=Th):r=Hd,e.setTexture2D(t||r,s)}function zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gd,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vd,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kd,s)}function Gg(i){switch(i){case 5126:return Sg;case 35664:return wg;case 35665:return bg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ng;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(i,t){i.uniform1fv(this.addr,t)}function Wg(i,t){let e=Tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Xg(i,t){let e=Tr(t,this.size,3);i.uniform3fv(this.addr,e)}function qg(i,t){let e=Tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Yg(i,t){let e=Tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zg(i,t){let e=Tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jg(i,t){let e=Tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function Kg(i,t){i.uniform2iv(this.addr,t)}function Qg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function tx(i,t){i.uniform1uiv(this.addr,t)}function ex(i,t){i.uniform2uiv(this.addr,t)}function nx(i,t){i.uniform3uiv(this.addr,t)}function ix(i,t){i.uniform4uiv(this.addr,t)}function sx(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Th:o=Hd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function rx(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gd,r[o])}function ox(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vd,r[o])}function ax(i,t,e){let n=this.cache,s=t.length,r=Jc(e,s);Fn(n,r)||(i.uniform1iv(this.addr,r),On(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kd,r[o])}function cx(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return Qg;case 35669:case 35673:return jg;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}var Ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}},Rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cx(e.type)}},Ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},wh=/(\w+)(\])?(\[|\.)?/g;function Td(i,t){i.seq.push(t),i.map[t.id]=t}function lx(i,t,e){let n=i.name,s=n.length;for(wh.lastIndex=0;;){let r=wh.exec(n),o=wh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Td(e,l===void 0?new Ah(a,i,t):new Rh(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new Ch(a),Td(e,m)),e=m}}}var br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);lx(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ad(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hx=37297,ux=0;function dx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Rd=new De;function fx(i){qe._getMatrix(Rd,qe.workingColorSpace,i);let t=`mat3( ${Rd.elements.map(e=>e.toFixed(4))} )`;switch(qe.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case tn:return[t,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dx(i.getShaderSource(t),a)}else return r}function px(i,t){let e=fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var mx={[ql]:"Linear",[Yl]:"Reinhard",[Zl]:"Cineon",[yo]:"ACESFilmic",[$l]:"AgX",[Kl]:"Neutral",[Jl]:"Custom"};function gx(i,t){let e=mx[t];return e===void 0?(Te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wc=new N;function xx(){qe.getLuminanceCoefficients(Wc);let i=Wc.x.toFixed(4),t=Wc.y.toFixed(4),e=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function _x(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Io(i){return i!==""}function Pd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(i){return i.replace(Mx,Sx)}var Ex=new Map;function Sx(i,t){let e=He[t];if(e===void 0){let n=Ex.get(t);if(n!==void 0)e=He[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ph(e)}var wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(wx,bx)}function bx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dd(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Tx={[xo]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function Ax(i){return Tx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rx={[_s]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE_UV"};function Cx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Rx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Px={[Fs]:"ENVMAP_MODE_REFRACTION"};function Ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Px[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lx={[tc]:"ENVMAP_BLENDING_MULTIPLY",[Ku]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function Dx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lx[i.combine]||"ENVMAP_BLENDING_NONE"}function Nx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ux(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Ax(e),l=Cx(e),d=Ix(e),m=Dx(e),h=Nx(e),u=yx(e),_=_x(r),T=s.createProgram(),y,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Io).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(y=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[Dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?He.tonemapping_pars_fragment:"",e.toneMapping!==Ri?gx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,px("linearToOutputTexel",e.outputColorSpace),xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=Ph(o),o=Pd(o,e),o=Id(o,e),a=Ph(a),a=Pd(a,e),a=Id(a,e),o=Ld(o),a=Ld(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let L=M+y+o,E=M+p+a,S=Ad(s,s.VERTEX_SHADER,L),C=Ad(s,s.FRAGMENT_SHADER,E);s.attachShader(T,S),s.attachShader(T,C),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(Z){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(T)||"",j=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(C)||"",Q=J.trim(),rt=j.trim(),st=z.trim(),pt=!0,ut=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,S,C);else{let ft=Cd(s,S,"vertex"),vt=Cd(s,C,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+Q+`
`+ft+`
`+vt)}else Q!==""?Te("WebGLProgram: Program Info Log:",Q):(rt===""||st==="")&&(ut=!1);ut&&(Z.diagnostics={runnable:pt,programLog:Q,vertexShader:{log:rt,prefix:y},fragmentShader:{log:st,prefix:p}})}s.deleteShader(S),s.deleteShader(C),v=new br(s,T),F=vx(s,T)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let F;this.getAttributes=function(){return F===void 0&&U(this),F};let W=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(T,hx)),W},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ux++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=S,this.fragmentShader=C,this}var Fx=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lh(t),e.set(t,n)),n}},Lh=class{constructor(t){this.id=Fx++,this.code=t,this.usedTimes=0}};function Ox(i){return i===Es||i===bo||i===To}function Bx(i,t,e,n,s,r){let o=new lr,a=new Ih,c=new Set,l=[],d=new Map,m=n.logarithmicDepthBuffer,h=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function T(v,F,W,Z,J,j){let z=Z.fog,Q=J.geometry,rt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?Z.environment:null,st=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,pt=t.get(v.envMap||rt,st),ut=pt&&pt.mapping===_o?pt.image.height:null,ft=u[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Te("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,se=vt!==void 0?vt.length:0,$t=0;Q.morphAttributes.position!==void 0&&($t=1),Q.morphAttributes.normal!==void 0&&($t=2),Q.morphAttributes.color!==void 0&&($t=3);let ke,Jt,ge,mt;if(ft){let pe=Vi[ft];ke=pe.vertexShader,Jt=pe.fragmentShader}else{ke=v.vertexShader,Jt=v.fragmentShader;let pe=a.getVertexShaderStage(v),Ne=a.getFragmentShaderStage(v);a.update(v,pe,Ne),ge=pe.id,mt=Ne.id}let gt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),jt=J.isInstancedMesh===!0,Qt=J.isBatchedMesh===!0,Ee=!!v.map,Ue=!!v.matcap,_e=!!pt,zt=!!v.aoMap,lt=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,wt=!!v.normalMap,At=!!v.displacementMap,yt=!!v.emissiveMap,Mt=!!v.metalnessMap,It=!!v.roughnessMap,G=v.anisotropy>0,re=v.clearcoat>0,St=v.dispersion>0,D=v.retroreflectivity>0,f=v.iridescence>0,X=v.sheen>0,$=v.transmission>0,K=G&&!!v.anisotropyMap,ct=re&&!!v.clearcoatMap,dt=re&&!!v.clearcoatNormalMap,et=re&&!!v.clearcoatRoughnessMap,q=f&&!!v.iridescenceMap,bt=f&&!!v.iridescenceThicknessMap,Ot=X&&!!v.sheenColorMap,Ut=X&&!!v.sheenRoughnessMap,kt=!!v.specularMap,Gt=!!v.specularColorMap,oe=!!v.specularIntensityMap,Tt=$&&!!v.transmissionMap,Y=$&&!!v.thicknessMap,Rt=!!v.gradientMap,xt=!!v.alphaMap,Vt=v.alphaTest>0,Yt=!!v.alphaHash,Ct=!!v.extensions,Zt=Ri;v.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let ue={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:Jt,defines:v.defines,customVertexShaderID:ge,customFragmentShaderID:mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Qt,batchingColor:Qt&&J._colorsTexture!==null,instancing:jt,instancingColor:jt&&J.instanceColor!==null,instancingMorph:jt&&J.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Ue,envMap:_e,envMapMode:_e&&pt.mapping,envMapCubeUVHeight:ut,aoMap:zt,lightMap:lt,bumpMap:ht,normalMap:wt,displacementMap:At,emissiveMap:yt,normalMapObjectSpace:wt&&v.normalMapType===ed,normalMapTangentSpace:wt&&v.normalMapType===Ao,packedNormalMap:wt&&v.normalMapType===Ao&&Ox(v.normalMap.format),metalnessMap:Mt,roughnessMap:It,anisotropy:G,anisotropyMap:K,clearcoat:re,clearcoatMap:ct,clearcoatNormalMap:dt,clearcoatRoughnessMap:et,dispersion:St,retroreflection:D,iridescence:f,iridescenceMap:q,iridescenceThicknessMap:bt,sheen:X,sheenColorMap:Ot,sheenRoughnessMap:Ut,specularMap:kt,specularColorMap:Gt,specularIntensityMap:oe,transmission:$,transmissionMap:Tt,thicknessMap:Y,gradientMap:Rt,opaque:v.transparent===!1&&v.blending===_r&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:Vt,alphaHash:Yt,combine:v.combine,mapUv:Ee&&_(v.map.channel),aoMapUv:zt&&_(v.aoMap.channel),lightMapUv:lt&&_(v.lightMap.channel),bumpMapUv:ht&&_(v.bumpMap.channel),normalMapUv:wt&&_(v.normalMap.channel),displacementMapUv:At&&_(v.displacementMap.channel),emissiveMapUv:yt&&_(v.emissiveMap.channel),metalnessMapUv:Mt&&_(v.metalnessMap.channel),roughnessMapUv:It&&_(v.roughnessMap.channel),anisotropyMapUv:K&&_(v.anisotropyMap.channel),clearcoatMapUv:ct&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(v.sheenRoughnessMap.channel),specularMapUv:kt&&_(v.specularMap.channel),specularColorMapUv:Gt&&_(v.specularColorMap.channel),specularIntensityMapUv:oe&&_(v.specularIntensityMap.channel),transmissionMapUv:Tt&&_(v.transmissionMap.channel),thicknessMapUv:Y&&_(v.thicknessMap.channel),alphaMapUv:xt&&_(v.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(wt||G),vertexNormals:!!Q.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Q.attributes.uv&&(Ee||xt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Q.attributes.normal===void 0&&wt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Pt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:$t,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===tn,decodeVideoTextureEmissive:yt&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)===tn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===Wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ct&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&v.extensions.multiDraw===!0||Qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function y(v){let F=[];if(v.shaderID?F.push(v.shaderID):(F.push(v.customVertexShaderID),F.push(v.customFragmentShaderID)),v.defines!==void 0)for(let W in v.defines)F.push(W),F.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(p(F,v),M(F,v),F.push(i.outputColorSpace)),F.push(v.customProgramCacheKey),F.join()}function p(v,F){v.push(F.precision),v.push(F.outputColorSpace),v.push(F.envMapMode),v.push(F.envMapCubeUVHeight),v.push(F.mapUv),v.push(F.alphaMapUv),v.push(F.lightMapUv),v.push(F.aoMapUv),v.push(F.bumpMapUv),v.push(F.normalMapUv),v.push(F.displacementMapUv),v.push(F.emissiveMapUv),v.push(F.metalnessMapUv),v.push(F.roughnessMapUv),v.push(F.anisotropyMapUv),v.push(F.clearcoatMapUv),v.push(F.clearcoatNormalMapUv),v.push(F.clearcoatRoughnessMapUv),v.push(F.iridescenceMapUv),v.push(F.iridescenceThicknessMapUv),v.push(F.sheenColorMapUv),v.push(F.sheenRoughnessMapUv),v.push(F.specularMapUv),v.push(F.specularColorMapUv),v.push(F.specularIntensityMapUv),v.push(F.transmissionMapUv),v.push(F.thicknessMapUv),v.push(F.combine),v.push(F.fogExp2),v.push(F.sizeAttenuation),v.push(F.morphTargetsCount),v.push(F.morphAttributeCount),v.push(F.numSunLights),v.push(F.numDirLights),v.push(F.numPointLights),v.push(F.numSpotLights),v.push(F.numSpotLightMaps),v.push(F.numHemiLights),v.push(F.numRectAreaLights),v.push(F.numSunLightShadows),v.push(F.numDirLightShadows),v.push(F.numPointLightShadows),v.push(F.numSpotLightShadows),v.push(F.numSpotLightShadowsWithMaps),v.push(F.numLightProbes),v.push(F.shadowMapType),v.push(F.toneMapping),v.push(F.numClippingPlanes),v.push(F.numClipIntersection),v.push(F.depthPacking)}function M(v,F){o.disableAll(),F.instancing&&o.enable(0),F.instancingColor&&o.enable(1),F.instancingMorph&&o.enable(2),F.matcap&&o.enable(3),F.envMap&&o.enable(4),F.normalMapObjectSpace&&o.enable(5),F.normalMapTangentSpace&&o.enable(6),F.clearcoat&&o.enable(7),F.iridescence&&o.enable(8),F.alphaTest&&o.enable(9),F.vertexColors&&o.enable(10),F.vertexAlphas&&o.enable(11),F.vertexUv1s&&o.enable(12),F.vertexUv2s&&o.enable(13),F.vertexUv3s&&o.enable(14),F.vertexTangents&&o.enable(15),F.anisotropy&&o.enable(16),F.alphaHash&&o.enable(17),F.batching&&o.enable(18),F.dispersion&&o.enable(19),F.retroreflection&&o.enable(24),F.batchingColor&&o.enable(20),F.gradientMap&&o.enable(21),F.packedNormalMap&&o.enable(22),F.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),F.fog&&o.enable(0),F.useFog&&o.enable(1),F.flatShading&&o.enable(2),F.logarithmicDepthBuffer&&o.enable(3),F.reversedDepthBuffer&&o.enable(4),F.skinning&&o.enable(5),F.morphTargets&&o.enable(6),F.morphNormals&&o.enable(7),F.morphColors&&o.enable(8),F.premultipliedAlpha&&o.enable(9),F.shadowMapEnabled&&o.enable(10),F.doubleSided&&o.enable(11),F.flipSided&&o.enable(12),F.useDepthPacking&&o.enable(13),F.dithering&&o.enable(14),F.transmission&&o.enable(15),F.sheen&&o.enable(16),F.opaque&&o.enable(17),F.pointsUvs&&o.enable(18),F.decodeVideoTexture&&o.enable(19),F.decodeVideoTextureEmissive&&o.enable(20),F.alphaToCoverage&&o.enable(21),F.numLightProbeGrids>0&&o.enable(22),F.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function L(v){let F=u[v.type],W;if(F){let Z=Vi[F];W=Ro.clone(Z.uniforms)}else W=v.uniforms;return W}function E(v,F){let W=d.get(F);return W!==void 0?++W.usedTimes:(W=new Ux(i,F,v,s),l.push(W),d.set(F,W)),W}function S(v){if(--v.usedTimes===0){let F=l.indexOf(v);l[F]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function C(v){a.remove(v)}function U(){a.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:L,acquireProgram:E,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:U}}function zx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ud(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,_,T,y,p){let M=i[t];return M===void 0?(M={id:h.id,object:h,geometry:u,material:_,materialVariant:o(h),groupOrder:T,renderOrder:h.renderOrder,z:y,group:p},i[t]=M):(M.id=h.id,M.object=h,M.geometry=u,M.material=_,M.materialVariant=o(h),M.groupOrder=T,M.renderOrder=h.renderOrder,M.z=y,M.group=p),t++,M}function c(h,u,_,T,y,p,M){M.reversedDepth===!0&&(y=-y);let L=a(h,u,_,T,y,p);_.transmission>0?n.push(L):_.transparent===!0?s.push(L):e.push(L)}function l(h,u,_,T,y,p){let M=a(h,u,_,T,y,p);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function d(h,u){e.length>1&&e.sort(h||Hx),n.length>1&&n.sort(u||Nd),s.length>1&&s.sort(u||Nd)}function m(){for(let h=t,u=i.length;h<u;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:m,sort:d}}function kx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ud,i.set(n,[o])):s>=r.length?(o=new Ud,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new he};break;case"SpotLight":e={position:new N,direction:new N,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wx=0;function Xx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qx(i){let t=new Gx,e=Vx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new Me,o=new Me;function a(l){let d=0,m=0,h=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let u=0,_=0,T=0,y=0,p=0,M=0,L=0,E=0,S=0,C=0,U=0,v=0,F=0,W=0;l.sort(Xx);for(let J=0,j=l.length;J<j;J++){let z=l[J],Q=z.color,rt=z.intensity,st=z.distance,pt=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Es?pt=z.shadow.map.texture:pt=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)d+=Q.r*rt,m+=Q.g*rt,h+=Q.b*rt;else if(z.isLightProbe){for(let ut=0;ut<9;ut++)n.probe[ut].addScaledVector(z.sh.coefficients[ut],rt);W++}else if(z.isSunLight){let ut=t.get(z);if(ut.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ft=z.shadow,vt=e.get(z);vt.shadowIntensity=ft.intensity,vt.shadowBias=ft.bias,vt.shadowNormalBias=ft.normalBias,vt.shadowRadius=ft.radius,vt.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),n.sunShadow[_]=vt,n.sunShadowMap[_]=pt;let se=ft.getViewportCount();for(let $t=0;$t<se;$t++)n.sunShadowMatrix[T+$t]=ft.getMatrix($t),n.sunShadowCascade[T+$t]=ft._cascadeData[$t];T+=se,_++}n.sun[u]=ut,u++}else if(z.isDirectionalLight){let ut=t.get(z);if(ut.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let ft=z.shadow,vt=e.get(z);vt.shadowIntensity=ft.intensity,vt.shadowBias=ft.bias,vt.shadowNormalBias=ft.normalBias,vt.shadowRadius=ft.radius,vt.shadowMapSize=ft.mapSize,n.directionalShadow[y]=vt,n.directionalShadowMap[y]=pt,n.directionalShadowMatrix[y]=z.shadow.matrix,S++}n.directional[y]=ut,y++}else if(z.isSpotLight){let ut=t.get(z);ut.position.setFromMatrixPosition(z.matrixWorld),ut.color.copy(Q).multiplyScalar(rt),ut.distance=st,ut.coneCos=Math.cos(z.angle),ut.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ut.decay=z.decay,n.spot[M]=ut;let ft=z.shadow;if(z.map&&(n.spotLightMap[v]=z.map,v++,ft.updateMatrices(z),z.castShadow&&F++),n.spotLightMatrix[M]=ft.matrix,z.castShadow){let vt=e.get(z);vt.shadowIntensity=ft.intensity,vt.shadowBias=ft.bias,vt.shadowNormalBias=ft.normalBias,vt.shadowRadius=ft.radius,vt.shadowMapSize=ft.mapSize,n.spotShadow[M]=vt,n.spotShadowMap[M]=pt,U++}M++}else if(z.isRectAreaLight){let ut=t.get(z);ut.color.copy(Q).multiplyScalar(rt),ut.halfWidth.set(z.width*.5,0,0),ut.halfHeight.set(0,z.height*.5,0),n.rectArea[L]=ut,L++}else if(z.isPointLight){let ut=t.get(z);if(ut.color.copy(z.color).multiplyScalar(z.intensity),ut.distance=z.distance,ut.decay=z.decay,z.castShadow){let ft=z.shadow,vt=e.get(z);vt.shadowIntensity=ft.intensity,vt.shadowBias=ft.bias,vt.shadowNormalBias=ft.normalBias,vt.shadowRadius=ft.radius,vt.shadowMapSize=ft.mapSize,vt.shadowCameraNear=ft.camera.near,vt.shadowCameraFar=ft.camera.far,n.pointShadow[p]=vt,n.pointShadowMap[p]=pt,n.pointShadowMatrix[p]=z.shadow.matrix,C++}n.point[p]=ut,p++}else if(z.isHemisphereLight){let ut=t.get(z);ut.skyColor.copy(z.color).multiplyScalar(rt),ut.groundColor.copy(z.groundColor).multiplyScalar(rt),n.hemi[E]=ut,E++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;let Z=n.hash;(Z.sunLength!==u||Z.directionalLength!==y||Z.pointLength!==p||Z.spotLength!==M||Z.rectAreaLength!==L||Z.hemiLength!==E||Z.numSunShadows!==_||Z.numDirectionalShadows!==S||Z.numPointShadows!==C||Z.numSpotShadows!==U||Z.numSpotMaps!==v||Z.numLightProbes!==W)&&(n.sun.length=u,n.directional.length=y,n.spot.length=M,n.rectArea.length=L,n.point.length=p,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=U,n.spotShadowMap.length=U,n.spotLightMatrix.length=U+v-F,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=W,Z.sunLength=u,Z.directionalLength=y,Z.pointLength=p,Z.spotLength=M,Z.rectAreaLength=L,Z.hemiLength=E,Z.numSunShadows=_,Z.numDirectionalShadows=S,Z.numPointShadows=C,Z.numSpotShadows=U,Z.numSpotMaps=v,Z.numLightProbes=W,n.version=Wx++)}function c(l,d){let m=0,h=0,u=0,_=0,T=0,y=0,p=d.matrixWorldInverse;for(let M=0,L=l.length;M<L;M++){let E=l[M];if(E.isSunLight){let S=n.sun[m];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),m++}else if(E.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(E.isSpotLight){let S=n.spot[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),_++}else if(E.isRectAreaLight){let S=n.rectArea[T];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),T++}else if(E.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),u++}else if(E.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:a,setupView:c,state:n}}function Fd(i){let t=new qx(i),e=[],n=[],s=[];function r(h){m.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function d(h){t.setupView(e,h)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Yx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Fd(i),t.set(s,[a])):r>=o.length?(a=new Fd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`,$x=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Kx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Od=new Me,Po=new N,bh=new N;function Qx(i,t,e){let n=new dr,s=new le,r=new le,o=new on,a=new Oa,c=new Ba,l={},d=e.maxTextureSize,m={[Hi]:Wn,[Wn]:Hi,[Ln]:Ln},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Zx,fragmentShader:Jx}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let _=new Je;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new ve(_,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let p=this.type;this.render=function(C,U,v){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===ja&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xo);let F=i.getRenderTarget(),W=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),J=i.state;J.setBlending(ki),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=p!==this.type;j&&U.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(Q=>Q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,Q=C.length;z<Q;z++){let rt=C[z],st=rt.shadow;if(st===void 0){Te("WebGLShadowMap:",rt,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;s.copy(st.mapSize);let pt=st.getFrameExtents();s.multiply(pt),r.copy(st.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/pt.x),s.x=r.x*pt.x,st.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/pt.y),s.y=r.y*pt.y,st.mapSize.y=r.y));let ut=i.state.buffers.depth.getReversed();if(st.camera._reversedDepth=ut,st.map===null||j===!0){if(st.map!==null&&(st.map.depthTexture!==null&&(st.map.depthTexture.dispose(),st.map.depthTexture=null),st.map.dispose()),this.type===yr){if(rt.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}st.map=new Qn(s.x,s.y,{format:Es,type:di,minFilter:qn,magFilter:qn,generateMipmaps:!1}),st.map.texture.name=rt.name+".shadowMap",st.map.depthTexture=new ps(s.x,s.y,xi),st.map.depthTexture.name=rt.name+".shadowMapDepth",st.map.depthTexture.format=Di,st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=Gn,st.map.depthTexture.magFilter=Gn}else rt.isPointLight?(st.map=new qc(s.x),st.map.depthTexture=new Ra(s.x,Ci)):(st.map=new Qn(s.x,s.y),st.map.depthTexture=new ps(s.x,s.y,Ci)),st.map.depthTexture.name=rt.name+".shadowMap",st.map.depthTexture.format=Di,this.type===xo?(st.map.depthTexture.compareFunction=ut?Gc:kc,st.map.depthTexture.minFilter=qn,st.map.depthTexture.magFilter=qn):(st.map.depthTexture.compareFunction=null,st.map.depthTexture.minFilter=Gn,st.map.depthTexture.magFilter=Gn);st.camera.updateProjectionMatrix()}st.map.isWebGLCubeRenderTarget!==!0&&(st.map.width!==s.x||st.map.height!==s.y)&&st.map.setSize(s.x,s.y);let ft=st.map.isWebGLCubeRenderTarget?6:st.getViewportCount();rt.isPointLight!==!0&&st.updateMatrices(rt,v);for(let vt=0;vt<ft;vt++){let se=st.getCamera(vt);if(rt.isPointLight){let $t=st.camera,ke=st.matrix,Jt=rt.distance||$t.far;Jt!==$t.far&&($t.far=Jt,$t.updateProjectionMatrix()),Po.setFromMatrixPosition(rt.matrixWorld),$t.position.copy(Po),bh.copy($t.position),bh.add($x[vt]),$t.up.copy(Kx[vt]),$t.lookAt(bh),$t.updateMatrixWorld(),ke.makeTranslation(-Po.x,-Po.y,-Po.z),Od.multiplyMatrices($t.projectionMatrix,$t.matrixWorldInverse),st._frustum.setFromProjectionMatrix(Od,$t.coordinateSystem,$t.reversedDepth)}if(st.map.isWebGLCubeRenderTarget)i.setRenderTarget(st.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(st.map),i.clear());let $t=st.getViewport(vt);o.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),J.viewport(o)}n=st.getFrustum(vt),E(U,v,se,rt,this.type)}st.isPointLightShadow!==!0&&this.type===yr&&M(st,v),st.needsUpdate=!1}p=this.type,y.needsUpdate=!1,i.setRenderTarget(F,W,Z)};function M(C,U){let v=t.update(T);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null?C.mapPass=new Qn(s.x,s.y,{format:Es,type:di}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value.set(C.map.width,C.map.height),h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(U,null,v,h,T,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(U,null,v,u,T,null)}function L(C,U,v,F){let W=null,Z=v.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Z!==void 0)W=Z;else if(W=v.isPointLight===!0?c:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let J=W.uuid,j=U.uuid,z=l[J];z===void 0&&(z={},l[J]=z);let Q=z[j];Q===void 0&&(Q=W.clone(),z[j]=Q,U.addEventListener("dispose",S)),W=Q}if(W.visible=U.visible,W.wireframe=U.wireframe,F===yr?W.side=U.shadowSide!==null?U.shadowSide:U.side:W.side=U.shadowSide!==null?U.shadowSide:m[U.side],W.alphaMap=U.alphaMap,W.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,W.map=U.map,W.clipShadows=U.clipShadows,W.clippingPlanes=U.clippingPlanes,W.clipIntersection=U.clipIntersection,W.displacementMap=U.displacementMap,W.displacementScale=U.displacementScale,W.displacementBias=U.displacementBias,W.wireframeLinewidth=U.wireframeLinewidth,W.linewidth=U.linewidth,v.isPointLight===!0&&W.isMeshDistanceMaterial===!0){let J=i.properties.get(W);J.light=v}return W}function E(C,U,v,F,W){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&W===yr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,C.matrixWorld);let j=t.update(C),z=C.material;if(Array.isArray(z)){let Q=j.groups;for(let rt=0,st=Q.length;rt<st;rt++){let pt=Q[rt],ut=z[pt.materialIndex];if(ut&&ut.visible){let ft=L(C,ut,F,W);C.onBeforeShadow(i,C,U,v,j,ft,pt),i.renderBufferDirect(v,null,j,ft,C,pt),C.onAfterShadow(i,C,U,v,j,ft,pt)}}}else if(z.visible){let Q=L(C,z,F,W);C.onBeforeShadow(i,C,U,v,j,Q,null),i.renderBufferDirect(v,null,j,Q,C,null),C.onAfterShadow(i,C,U,v,j,Q,null)}}let J=C.children;for(let j=0,z=J.length;j<z;j++)E(J[j],U,v,F,W)}function S(C){C.target.removeEventListener("dispose",S);for(let v in l){let F=l[v],W=C.target.uuid;W in F&&(F[W].dispose(),delete F[W])}}}function jx(i,t){function e(){let Y=!1,Rt=new on,xt=null,Vt=new on(0,0,0,0);return{setMask:function(Yt){xt!==Yt&&!Y&&(i.colorMask(Yt,Yt,Yt,Yt),xt=Yt)},setLocked:function(Yt){Y=Yt},setClear:function(Yt,Ct,Zt,ue,pe){pe===!0&&(Yt*=ue,Ct*=ue,Zt*=ue),Rt.set(Yt,Ct,Zt,ue),Vt.equals(Rt)===!1&&(i.clearColor(Yt,Ct,Zt,ue),Vt.copy(Rt))},reset:function(){Y=!1,xt=null,Vt.set(-1,0,0,0)}}}function n(){let Y=!1,Rt=!1,xt=null,Vt=null,Yt=null;return{setReversed:function(Ct){if(Rt!==Ct){let Zt=t.get("EXT_clip_control");Ct?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Ct;let ue=Yt;Yt=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(Ct){Ct?gt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Ct){xt!==Ct&&!Y&&(i.depthMask(Ct),xt=Ct)},setFunc:function(Ct){if(Rt&&(Ct=fd[Ct]),Vt!==Ct){switch(Ct){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Vt=Ct}},setLocked:function(Ct){Y=Ct},setClear:function(Ct){Yt!==Ct&&(Yt=Ct,Rt&&(Ct=1-Ct),i.clearDepth(Ct))},reset:function(){Y=!1,xt=null,Vt=null,Yt=null,Rt=!1}}}function s(){let Y=!1,Rt=null,xt=null,Vt=null,Yt=null,Ct=null,Zt=null,ue=null,pe=null;return{setTest:function(Ne){Y||(Ne?gt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Ne){Rt!==Ne&&!Y&&(i.stencilMask(Ne),Rt=Ne)},setFunc:function(Ne,yn,at){(xt!==Ne||Vt!==yn||Yt!==at)&&(i.stencilFunc(Ne,yn,at),xt=Ne,Vt=yn,Yt=at)},setOp:function(Ne,yn,at){(Ct!==Ne||Zt!==yn||ue!==at)&&(i.stencilOp(Ne,yn,at),Ct=Ne,Zt=yn,ue=at)},setLocked:function(Ne){Y=Ne},setClear:function(Ne){pe!==Ne&&(i.clearStencil(Ne),pe=Ne)},reset:function(){Y=!1,Rt=null,xt=null,Vt=null,Yt=null,Ct=null,Zt=null,ue=null,pe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,d={},m={},h={},u=new WeakMap,_=[],T=null,y=!1,p=null,M=null,L=null,E=null,S=null,C=null,U=null,v=new he(0,0,0),F=0,W=!1,Z=null,J=null,j=null,z=null,Q=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),st=!1,pt=0,ut=i.getParameter(i.VERSION);ut.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(ut)[1]),st=pt>=1):ut.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),st=pt>=2);let ft=null,vt={},se=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),ke=new on().fromArray(se),Jt=new on().fromArray($t);function ge(Y,Rt,xt,Vt){let Yt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(Y,Ct),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<xt;Zt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,Vt,0,i.RGBA,i.UNSIGNED_BYTE,Yt):i.texImage2D(Rt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Yt);return Ct}let mt={};mt[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(i.DEPTH_TEST),o.setFunc(sr),ht(!1),wt(kl),gt(i.CULL_FACE),zt(ki);function gt(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function Pt(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function jt(Y,Rt){return h[Y]!==Rt?(i.bindFramebuffer(Y,Rt),h[Y]=Rt,Y===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Rt),Y===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(Y,Rt){let xt=_,Vt=!1;if(Y){xt=u.get(Rt),xt===void 0&&(xt=[],u.set(Rt,xt));let Yt=Y.textures;if(xt.length!==Yt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,Zt=Yt.length;Ct<Zt;Ct++)xt[Ct]=i.COLOR_ATTACHMENT0+Ct;xt.length=Yt.length,Vt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Vt=!0);Vt&&i.drawBuffers(xt)}function Ee(Y){return T!==Y?(i.useProgram(Y),T=Y,!0):!1}let Ue={[Us]:i.FUNC_ADD,[Nu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};Ue[Fu]=i.MIN,Ue[Ou]=i.MAX;let _e={[Bu]:i.ZERO,[zu]:i.ONE,[Hu]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ju]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(Y,Rt,xt,Vt,Yt,Ct,Zt,ue,pe,Ne){if(Y===ki){y===!0&&(Pt(i.BLEND),y=!1);return}if(y===!1&&(gt(i.BLEND),y=!0),Y!==Du){if(Y!==p||Ne!==W){if((M!==Us||S!==Us)&&(i.blendEquation(i.FUNC_ADD),M=Us,S=Us),Ne)switch(Y){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",Y);break}else switch(Y){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",Y);break}L=null,E=null,C=null,U=null,v.set(0,0,0),F=0,p=Y,W=Ne}return}Yt=Yt||Rt,Ct=Ct||xt,Zt=Zt||Vt,(Rt!==M||Yt!==S)&&(i.blendEquationSeparate(Ue[Rt],Ue[Yt]),M=Rt,S=Yt),(xt!==L||Vt!==E||Ct!==C||Zt!==U)&&(i.blendFuncSeparate(_e[xt],_e[Vt],_e[Ct],_e[Zt]),L=xt,E=Vt,C=Ct,U=Zt),(ue.equals(v)===!1||pe!==F)&&(i.blendColor(ue.r,ue.g,ue.b,pe),v.copy(ue),F=pe),p=Y,W=!1}function lt(Y,Rt){Y.side===Ln?Pt(i.CULL_FACE):gt(i.CULL_FACE);let xt=Y.side===Wn;Rt&&(xt=!xt),ht(xt),Y.blending===_r&&Y.transparent===!1?zt(ki):zt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Vt=Y.stencilWrite;a.setTest(Vt),Vt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),yt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(Y){Z!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),Z=Y)}function wt(Y){Y!==Iu?(gt(i.CULL_FACE),Y!==J&&(Y===kl?i.cullFace(i.BACK):Y===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),J=Y}function At(Y){Y!==j&&(st&&i.lineWidth(Y),j=Y)}function yt(Y,Rt,xt){Y?(gt(i.POLYGON_OFFSET_FILL),(z!==Rt||Q!==xt)&&(z=Rt,Q=xt,o.getReversed()&&(Rt=-Rt),i.polygonOffset(Rt,xt))):Pt(i.POLYGON_OFFSET_FILL)}function Mt(Y){Y?gt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function It(Y){Y===void 0&&(Y=i.TEXTURE0+rt-1),ft!==Y&&(i.activeTexture(Y),ft=Y)}function G(Y,Rt,xt){xt===void 0&&(ft===null?xt=i.TEXTURE0+rt-1:xt=ft);let Vt=vt[xt];Vt===void 0&&(Vt={type:void 0,texture:void 0},vt[xt]=Vt),(Vt.type!==Y||Vt.texture!==Rt)&&(ft!==xt&&(i.activeTexture(xt),ft=xt),i.bindTexture(Y,Rt||mt[Y]),Vt.type=Y,Vt.texture=Rt)}function re(){let Y=vt[ft];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function f(){try{i.texSubImage2D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function X(){try{i.texSubImage3D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function ct(){try{i.texStorage2D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function dt(){try{i.texStorage3D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function et(){try{i.texImage2D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function q(){try{i.texImage3D(...arguments)}catch(Y){Ie("WebGLState:",Y)}}function bt(Y){return m[Y]!==void 0?m[Y]:i.getParameter(Y)}function Ot(Y,Rt){m[Y]!==Rt&&(i.pixelStorei(Y,Rt),m[Y]=Rt)}function Ut(Y){ke.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ke.copy(Y))}function kt(Y){Jt.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Jt.copy(Y))}function Gt(Y,Rt){let xt=l.get(Rt);xt===void 0&&(xt=new WeakMap,l.set(Rt,xt));let Vt=xt.get(Y);Vt===void 0&&(Vt=i.getUniformBlockIndex(Rt,Y.name),xt.set(Y,Vt))}function oe(Y,Rt){let Vt=l.get(Rt).get(Y);c.get(Rt)!==Vt&&(i.uniformBlockBinding(Rt,Vt,Y.__bindingPointIndex),c.set(Rt,Vt))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},ft=null,vt={},h={},u=new WeakMap,_=[],T=null,y=!1,p=null,M=null,L=null,E=null,S=null,C=null,U=null,v=new he(0,0,0),F=0,W=!1,Z=null,J=null,j=null,z=null,Q=null,ke.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Pt,bindFramebuffer:jt,drawBuffers:Qt,useProgram:Ee,setBlending:zt,setMaterial:lt,setFlipSided:ht,setCullFace:wt,setLineWidth:At,setPolygonOffset:yt,setScissorTest:Mt,activeTexture:It,bindTexture:G,unbindTexture:re,compressedTexImage2D:St,compressedTexImage3D:D,texImage2D:et,texImage3D:q,pixelStorei:Ot,getParameter:bt,updateUBOMapping:Gt,uniformBlockBinding:oe,texStorage2D:ct,texStorage3D:dt,texSubImage2D:f,texSubImage3D:X,compressedTexSubImage2D:$,compressedTexSubImage3D:K,scissor:Ut,viewport:kt,reset:Tt}}function ty(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,d=new WeakMap,m=new Set,h,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,f){return _?new OffscreenCanvas(D,f):Zr("canvas")}function y(D,f,X){let $=1,K=St(D);if((K.width>X||K.height>X)&&($=X/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let ct=Math.floor($*K.width),dt=Math.floor($*K.height);h===void 0&&(h=T(ct,dt));let et=f?T(ct,dt):h;return et.width=ct,et.height=dt,et.getContext("2d").drawImage(D,0,0,ct,dt),Te("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ct+"x"+dt+")."),et}else return"data"in D&&Te("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function p(D){return D.generateMipmaps}function M(D){i.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,f,X,$,K,ct=!1){if(D!==null){if(i[D]!==void 0)return i[D];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt;$&&(dt=t.get("EXT_texture_norm16"),dt||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=f;if(f===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8),X===i.UNSIGNED_SHORT&&dt&&(et=dt.R16_EXT),X===i.SHORT&&dt&&(et=dt.R16_SNORM_EXT)),f===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),f===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8),X===i.UNSIGNED_SHORT&&dt&&(et=dt.RG16_EXT),X===i.SHORT&&dt&&(et=dt.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),f===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),f===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),f===i.RGB&&(X===i.UNSIGNED_SHORT&&dt&&(et=dt.RGB16_EXT),X===i.SHORT&&dt&&(et=dt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),f===i.RGBA){let q=ct?Yr:qe.getTransfer(K);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=q===tn?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&dt&&(et=dt.RGBA16_EXT),X===i.SHORT&&dt&&(et=dt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(D,f){let X;return D?f===null||f===Ci||f===Mr?X=i.DEPTH24_STENCIL8:f===xi?X=i.DEPTH32F_STENCIL8:f===vr&&(X=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===Ci||f===Mr?X=i.DEPTH_COMPONENT24:f===xi?X=i.DEPTH_COMPONENT32F:f===vr&&(X=i.DEPTH_COMPONENT16),X}function C(D,f){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Gn&&D.minFilter!==qn?Math.log2(Math.max(f.width,f.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?f.mipmaps.length:1}function U(D){let f=D.target;f.removeEventListener("dispose",U),F(f),f.isVideoTexture&&d.delete(f),f.isHTMLTexture&&m.delete(f)}function v(D){let f=D.target;f.removeEventListener("dispose",v),Z(f)}function F(D){let f=n.get(D);if(f.__webglInit===void 0)return;let X=D.source,$=u.get(X);if($){let K=$[f.__cacheKey];K.usedTimes--,K.usedTimes===0&&W(D),Object.keys($).length===0&&u.delete(X)}n.remove(D)}function W(D){let f=n.get(D);i.deleteTexture(f.__webglTexture);let X=D.source,$=u.get(X);delete $[f.__cacheKey],o.memory.textures--}function Z(D){let f=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(f.__webglFramebuffer[$]))for(let K=0;K<f.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(f.__webglFramebuffer[$][K]);else i.deleteFramebuffer(f.__webglFramebuffer[$]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[$])}else{if(Array.isArray(f.__webglFramebuffer))for(let $=0;$<f.__webglFramebuffer.length;$++)i.deleteFramebuffer(f.__webglFramebuffer[$]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let $=0;$<f.__webglColorRenderbuffer.length;$++)f.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[$]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}let X=D.textures;for(let $=0,K=X.length;$<K;$++){let ct=n.get(X[$]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),o.memory.textures--),n.remove(X[$])}n.remove(D)}let J=0;function j(){J=0}function z(){return J}function Q(D){J=D}function rt(){let D=J;return D>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,D}function st(D){let f=[];return f.push(D.wrapS),f.push(D.wrapT),f.push(D.wrapR||0),f.push(D.magFilter),f.push(D.minFilter),f.push(D.anisotropy),f.push(D.internalFormat),f.push(D.format),f.push(D.type),f.push(D.generateMipmaps),f.push(D.premultiplyAlpha),f.push(D.flipY),f.push(D.unpackAlignment),f.push(D.colorSpace),f.join()}function pt(D,f){let X=n.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let $=D.image;if($===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(X,D,f);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+f)}function ut(D,f){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Pt(X,D,f);return}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+f)}function ft(D,f){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Pt(X,D,f);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+f)}function vt(D,f){let X=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&X.__version!==D.version){jt(X,D,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+f)}let se={[rr]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},$t={[Gn]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},ke={[id]:i.NEVER,[cd]:i.ALWAYS,[sd]:i.LESS,[kc]:i.LEQUAL,[rd]:i.EQUAL,[Gc]:i.GEQUAL,[od]:i.GREATER,[ad]:i.NOTEQUAL};function Jt(D,f){if(f.type===xi&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===qn||f.magFilter===ic||f.magFilter===vo||f.magFilter===vs||f.minFilter===qn||f.minFilter===ic||f.minFilter===vo||f.minFilter===vs)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,se[f.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,se[f.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,se[f.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,$t[f.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,$t[f.minFilter]),f.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ke[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Gn||f.minFilter!==vo&&f.minFilter!==vs||f.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function ge(D,f){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,f.addEventListener("dispose",U));let $=f.source,K=u.get($);K===void 0&&(K={},u.set($,K));let ct=st(f);if(ct!==D.__cacheKey){K[ct]===void 0&&(K[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),K[ct].usedTimes++;let dt=K[D.__cacheKey];dt!==void 0&&(K[D.__cacheKey].usedTimes--,dt.usedTimes===0&&W(f)),D.__cacheKey=ct,D.__webglTexture=K[ct].texture}return X}function mt(D,f,X){return Math.floor(Math.floor(D/X)/f)}function gt(D,f,X,$){let ct=D.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,X,$,f.data);else{ct.sort((Ot,Ut)=>Ot.start-Ut.start);let dt=0;for(let Ot=1;Ot<ct.length;Ot++){let Ut=ct[dt],kt=ct[Ot],Gt=Ut.start+Ut.count,oe=mt(kt.start,f.width,4),Tt=mt(Ut.start,f.width,4);kt.start<=Gt+1&&oe===Tt&&mt(kt.start+kt.count-1,f.width,4)===oe?Ut.count=Math.max(Ut.count,kt.start+kt.count-Ut.start):(++dt,ct[dt]=kt)}ct.length=dt+1;let et=e.getParameter(i.UNPACK_ROW_LENGTH),q=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let Ot=0,Ut=ct.length;Ot<Ut;Ot++){let kt=ct[Ot],Gt=Math.floor(kt.start/4),oe=Math.ceil(kt.count/4),Tt=Gt%f.width,Y=Math.floor(Gt/f.width),Rt=oe,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,Tt,Y,Rt,xt,X,$,f.data)}D.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,q),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function Pt(D,f,X){let $=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&($=i.TEXTURE_3D);let K=ge(D,f),ct=f.source;e.bindTexture($,D.__webglTexture,i.TEXTURE0+X);let dt=n.get(ct);if(ct.version!==dt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap!="undefined"&&f.image instanceof ImageBitmap)===!1){let xt=qe.getPrimaries(qe.workingColorSpace),Vt=f.colorSpace===ns?null:qe.getPrimaries(f.colorSpace),Yt=f.colorSpace===ns||xt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let q=y(f.image,!1,s.maxTextureSize);q=re(f,q);let bt=r.convert(f.format,f.colorSpace),Ot=r.convert(f.type),Ut=E(f.internalFormat,bt,Ot,f.normalized,f.colorSpace,f.isVideoTexture);Jt($,f);let kt,Gt=f.mipmaps,oe=f.isVideoTexture!==!0,Tt=dt.__version===void 0||K===!0,Y=ct.dataReady,Rt=C(f,q);if(f.isDepthTexture)Ut=S(f.format===Ms,f.type),Tt&&(oe?e.texStorage2D(i.TEXTURE_2D,1,Ut,q.width,q.height):e.texImage2D(i.TEXTURE_2D,0,Ut,q.width,q.height,0,bt,Ot,null));else if(f.isDataTexture)if(Gt.length>0){oe&&Tt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ut,Gt[0].width,Gt[0].height);for(let xt=0,Vt=Gt.length;xt<Vt;xt++)kt=Gt[xt],oe?Y&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt.width,kt.height,bt,Ot,kt.data):e.texImage2D(i.TEXTURE_2D,xt,Ut,kt.width,kt.height,0,bt,Ot,kt.data);f.generateMipmaps=!1}else oe?(Tt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ut,q.width,q.height),Y&&gt(f,q,bt,Ot)):e.texImage2D(i.TEXTURE_2D,0,Ut,q.width,q.height,0,bt,Ot,q.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){oe&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ut,Gt[0].width,Gt[0].height,q.depth);for(let xt=0,Vt=Gt.length;xt<Vt;xt++)if(kt=Gt[xt],f.format!==yi)if(bt!==null)if(oe){if(Y)if(f.layerUpdates.size>0){let Yt=ph(kt.width,kt.height,f.format,f.type);for(let Ct of f.layerUpdates){let Zt=kt.data.subarray(Ct*Yt/kt.data.BYTES_PER_ELEMENT,(Ct+1)*Yt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Ct,kt.width,kt.height,1,bt,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,kt.width,kt.height,q.depth,bt,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Ut,kt.width,kt.height,q.depth,0,kt.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,kt.width,kt.height,q.depth,bt,Ot,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Ut,kt.width,kt.height,q.depth,0,bt,Ot,kt.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{oe&&Tt&&e.texStorage2D(i.TEXTURE_2D,Rt,Ut,Gt[0].width,Gt[0].height);for(let xt=0,Vt=Gt.length;xt<Vt;xt++)kt=Gt[xt],f.format!==yi?bt!==null?oe?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,kt.width,kt.height,bt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Ut,kt.width,kt.height,0,kt.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Y&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt.width,kt.height,bt,Ot,kt.data):e.texImage2D(i.TEXTURE_2D,xt,Ut,kt.width,kt.height,0,bt,Ot,kt.data)}else if(f.isDataArrayTexture)if(oe){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,Ut,q.width,q.height,q.depth),Y)if(f.layerUpdates.size>0){let xt=ph(q.width,q.height,f.format,f.type);for(let Vt of f.layerUpdates){let Yt=q.data.subarray(Vt*xt/q.data.BYTES_PER_ELEMENT,(Vt+1)*xt/q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Vt,q.width,q.height,1,bt,Ot,Yt)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,bt,Ot,q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,q.width,q.height,q.depth,0,bt,Ot,q.data);else if(f.isData3DTexture)oe?(Tt&&e.texStorage3D(i.TEXTURE_3D,Rt,Ut,q.width,q.height,q.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,bt,Ot,q.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,q.width,q.height,q.depth,0,bt,Ot,q.data);else if(f.isFramebufferTexture){if(Tt)if(oe)e.texStorage2D(i.TEXTURE_2D,Rt,Ut,q.width,q.height);else{let xt=q.width,Vt=q.height;for(let Yt=0;Yt<Rt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,Ut,xt,Vt,0,bt,Ot,null),xt>>=1,Vt>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),q.parentNode!==xt){xt.appendChild(q),m.add(f),xt.onpaint=Vt=>{let Yt=Vt.changedElements;for(let Ct of m)Yt.includes(Ct.image)&&(Ct.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let Yt=i.RGBA,Ct=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,Ct,Zt,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(oe&&Tt){let xt=St(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,Ut,xt.width,xt.height)}for(let xt=0,Vt=Gt.length;xt<Vt;xt++)kt=Gt[xt],oe?Y&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,bt,Ot,kt):e.texImage2D(i.TEXTURE_2D,xt,Ut,bt,Ot,kt);f.generateMipmaps=!1}else if(oe){if(Tt){let xt=St(q);e.texStorage2D(i.TEXTURE_2D,Rt,Ut,xt.width,xt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Ot,q)}else e.texImage2D(i.TEXTURE_2D,0,Ut,bt,Ot,q);p(f)&&M($),dt.__version=ct.version,f.onUpdate&&f.onUpdate(f)}D.__version=f.version}function jt(D,f,X){if(f.image.length!==6)return;let $=ge(D,f),K=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);let ct=n.get(K);if(K.version!==ct.__version||$===!0){e.activeTexture(i.TEXTURE0+X);let dt=qe.getPrimaries(qe.workingColorSpace),et=f.colorSpace===ns?null:qe.getPrimaries(f.colorSpace),q=f.colorSpace===ns||dt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let bt=f.isCompressedTexture||f.image[0].isCompressedTexture,Ot=f.image[0]&&f.image[0].isDataTexture,Ut=[];for(let Ct=0;Ct<6;Ct++)!bt&&!Ot?Ut[Ct]=y(f.image[Ct],!0,s.maxCubemapSize):Ut[Ct]=Ot?f.image[Ct].image:f.image[Ct],Ut[Ct]=re(f,Ut[Ct]);let kt=Ut[0],Gt=r.convert(f.format,f.colorSpace),oe=r.convert(f.type),Tt=E(f.internalFormat,Gt,oe,f.normalized,f.colorSpace),Y=f.isVideoTexture!==!0,Rt=ct.__version===void 0||$===!0,xt=K.dataReady,Vt=C(f,kt);Jt(i.TEXTURE_CUBE_MAP,f);let Yt;if(bt){Y&&Rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Tt,kt.width,kt.height);for(let Ct=0;Ct<6;Ct++){Yt=Ut[Ct].mipmaps;for(let Zt=0;Zt<Yt.length;Zt++){let ue=Yt[Zt];f.format!==yi?Gt!==null?Y?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt,0,0,ue.width,ue.height,Gt,ue.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt,Tt,ue.width,ue.height,0,ue.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt,0,0,ue.width,ue.height,Gt,oe,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt,Tt,ue.width,ue.height,0,Gt,oe,ue.data)}}}else{if(Yt=f.mipmaps,Y&&Rt){Yt.length>0&&Vt++;let Ct=St(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Tt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(Ot){Y?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Ut[Ct].width,Ut[Ct].height,Gt,oe,Ut[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Tt,Ut[Ct].width,Ut[Ct].height,0,Gt,oe,Ut[Ct].data);for(let Zt=0;Zt<Yt.length;Zt++){let pe=Yt[Zt].image[Ct].image;Y?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt+1,0,0,pe.width,pe.height,Gt,oe,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt+1,Tt,pe.width,pe.height,0,Gt,oe,pe.data)}}else{Y?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Gt,oe,Ut[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Tt,Gt,oe,Ut[Ct]);for(let Zt=0;Zt<Yt.length;Zt++){let ue=Yt[Zt];Y?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt+1,0,0,Gt,oe,ue.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt+1,Tt,Gt,oe,ue.image[Ct])}}}p(f)&&M(i.TEXTURE_CUBE_MAP),ct.__version=K.version,f.onUpdate&&f.onUpdate(f)}D.__version=f.version}function Qt(D,f,X,$,K,ct){let dt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),q=E(X.internalFormat,dt,et,X.normalized,X.colorSpace),bt=n.get(f),Ot=n.get(X);if(Ot.__renderTarget=f,!bt.__hasExternalTextures){let Ut=Math.max(1,f.width>>ct),kt=Math.max(1,f.height>>ct);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ct,q,Ut,kt,f.depth,0,dt,et,null):e.texImage2D(K,ct,q,Ut,kt,0,dt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),It(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,Ot.__webglTexture,0,Mt(f)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,Ot.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(D,f,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),f.depthBuffer){let $=f.depthTexture,K=$&&$.isDepthTexture?$.type:null,ct=S(f.stencilBuffer,K),dt=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(f),ct,f.width,f.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(f),ct,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,ct,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,D)}else{let $=f.textures;for(let K=0;K<$.length;K++){let ct=$[K],dt=r.convert(ct.format,ct.colorSpace),et=r.convert(ct.type),q=E(ct.internalFormat,dt,et,ct.normalized,ct.colorSpace);It(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(f),q,f.width,f.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(f),q,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,q,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(D,f,X){let $=f.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(f.depthTexture);if(K.__renderTarget=f,(!K.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,f.depthTexture.addEventListener("dispose",U)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,f.depthTexture);let bt=r.convert(f.depthTexture.format),Ot=r.convert(f.depthTexture.type),Ut;f.depthTexture.format===Di?Ut=i.DEPTH_COMPONENT24:f.depthTexture.format===Ms&&(Ut=i.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,Ut,f.width,f.height,0,bt,Ot,null)}}else pt(f.depthTexture,0);let ct=K.__webglTexture,dt=Mt(f),et=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,q=f.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===Di)It(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,et,ct,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,q,et,ct,0);else if(f.depthTexture.format===Ms)It(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,et,ct,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,q,et,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _e(D){let f=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==D.depthTexture){let $=D.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),$){let K=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),f.__depthDisposeCallback=K}f.__boundDepthTexture=$}if(D.depthTexture&&!f.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)Ue(f.__webglFramebuffer[$],D,$);else{let $=D.texture.mipmaps;$&&$.length>0?Ue(f.__webglFramebuffer[0],D,0):Ue(f.__webglFramebuffer,D,0)}else if(X){f.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[$]),f.__webglDepthbuffer[$]===void 0)f.__webglDepthbuffer[$]=i.createRenderbuffer(),Ee(f.__webglDepthbuffer[$],D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=f.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}}else{let $=D.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Ee(f.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(D,f,X){let $=n.get(D);f!==void 0&&Qt($.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&_e(D)}function lt(D){let f=D.texture,X=n.get(D),$=n.get(f);D.addEventListener("dispose",v);let K=D.textures,ct=D.isWebGLCubeRenderTarget===!0,dt=K.length>1;if(dt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=f.version,o.memory.textures++),ct){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(f.mipmaps&&f.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let q=0;q<f.mipmaps.length;q++)X.__webglFramebuffer[et][q]=i.createFramebuffer()}else X.__webglFramebuffer[et]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<f.mipmaps.length;et++)X.__webglFramebuffer[et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(dt)for(let et=0,q=K.length;et<q;et++){let bt=n.get(K[et]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&It(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<K.length;et++){let q=K[et];X.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let bt=r.convert(q.format,q.colorSpace),Ot=r.convert(q.type),Ut=E(q.internalFormat,bt,Ot,q.normalized,q.colorSpace,D.isXRRenderTarget===!0),kt=Mt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Ut,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,X.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,f);for(let et=0;et<6;et++)if(f.mipmaps&&f.mipmaps.length>0)for(let q=0;q<f.mipmaps.length;q++)Qt(X.__webglFramebuffer[et][q],D,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,q);else Qt(X.__webglFramebuffer[et],D,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(f)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let et=0,q=K.length;et<q;et++){let bt=K[et],Ot=n.get(bt),Ut=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ut,Ot.__webglTexture),Jt(Ut,bt),Qt(X.__webglFramebuffer,D,bt,i.COLOR_ATTACHMENT0+et,Ut,0),p(bt)&&M(Ut)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(et=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,$.__webglTexture),Jt(et,f),f.mipmaps&&f.mipmaps.length>0)for(let q=0;q<f.mipmaps.length;q++)Qt(X.__webglFramebuffer[q],D,f,i.COLOR_ATTACHMENT0,et,q);else Qt(X.__webglFramebuffer,D,f,i.COLOR_ATTACHMENT0,et,0);p(f)&&M(et),e.unbindTexture()}D.depthBuffer&&_e(D)}function ht(D){let f=D.textures;for(let X=0,$=f.length;X<$;X++){let K=f[X];if(p(K)){let ct=L(D),dt=n.get(K).__webglTexture;e.bindTexture(ct,dt),M(ct),e.unbindTexture()}}}let wt=[],At=[];function yt(D){if(D.samples>0){if(It(D)===!1){let f=D.textures,X=D.width,$=D.height,K=i.COLOR_BUFFER_BIT,ct=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(D),et=f.length>1;if(et)for(let bt=0;bt<f.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let q=D.texture.mipmaps;q&&q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let bt=0;bt<f.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]);let Ot=n.get(f[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ot,0)}i.blitFramebuffer(0,0,X,$,0,0,X,$,K,i.NEAREST),c===!0&&(wt.length=0,At.length=0,wt.push(i.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(wt.push(ct),At.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let bt=0;bt<f.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[bt]);let Ot=n.get(f[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let f=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function Mt(D){return Math.min(s.maxSamples,D.samples)}function It(D){let f=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function G(D){let f=o.render.frame;d.get(D)!==f&&(d.set(D,f),D.update())}function re(D,f){let X=D.colorSpace,$=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==qr&&X!==ns&&(qe.getTransfer(X)===tn?($!==yi||K!==oi)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",X)),f}function St(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=rt,this.resetTextureUnits=j,this.getTextureUnits=z,this.setTextureUnits=Q,this.setTexture2D=pt,this.setTexture2DArray=ut,this.setTexture3D=ft,this.setTextureCube=vt,this.rebindTextures=zt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ey(i,t){function e(n,s=ns){let r,o=qe.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return i.BYTE;if(n===th)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===sc)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===di)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===yi)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===Mo||n===Eo||n===So||n===wo)if(o===tn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uc||n===dc||n===fc||n===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mc||n===gc||n===xc||n===yc||n===_c||n===bo||n===vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mc||n===gc)return o===tn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yc)return r.COMPRESSED_R11_EAC;if(n===_c)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bo)return r.COMPRESSED_RG11_EAC;if(n===vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mc||n===Ec||n===Sc||n===wc||n===bc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return o===tn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Fc||n===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uc)return o===tn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===zc||n===To||n===Hc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new no(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends Ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,m=null,h=null,u=null,_=null,T=typeof XRWebGLBinding!="undefined",y=new Dh,p={},M=e.getContextAttributes(),L=null,E=null,S=[],C=[],U=new le,v=null,F=null,W=new kn;W.viewport=new on;let Z=new kn;Z.viewport=new on;let J=[W,Z],j=new $a,z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let gt=S[mt];return gt===void 0&&(gt=new hr,S[mt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(mt){let gt=S[mt];return gt===void 0&&(gt=new hr,S[mt]=gt),gt.getGripSpace()},this.getHand=function(mt){let gt=S[mt];return gt===void 0&&(gt=new hr,S[mt]=gt),gt.getHandSpace()};function rt(mt){let gt=C.indexOf(mt.inputSource);if(gt===-1)return;let Pt=S[gt];Pt!==void 0&&(Pt.update(mt.inputSource,mt.frame,l||o),Pt.dispatchEvent({type:mt.type,data:mt.inputSource}))}function st(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",pt);for(let mt=0;mt<S.length;mt++){let gt=C[mt];gt!==null&&(C[mt]=null,S[mt].disconnect(gt))}z=null,Q=null,y.reset();for(let mt in p)delete p[mt];if(t.setRenderTarget(L),u=null,h=null,m=null,s=null,E=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(U.width,U.height,!1),F!==null){let mt=F.camera;mt.fov=F.fov,mt.zoom=F.zoom,mt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){r=mt,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){a=mt,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(mt){l=mt},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(mt){if(s=mt,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",st),s.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,jt=null,Qt=null;M.depth&&(Qt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=M.stencil?Ms:Di,jt=M.stencil?Mr:Ci);let Ee={colorFormat:e.RGBA8,depthFormat:Qt,scaleFactor:r};m=this.getBinding(),h=m.createProjectionLayer(Ee),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Qn(h.textureWidth,h.textureHeight,{format:yi,type:oi,depthTexture:new ps(h.textureWidth,h.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new Qn(u.framebufferWidth,u.framebufferHeight,{format:yi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function pt(mt){for(let gt=0;gt<mt.removed.length;gt++){let Pt=mt.removed[gt],jt=C.indexOf(Pt);jt>=0&&(C[jt]=null,S[jt].disconnect(Pt))}for(let gt=0;gt<mt.added.length;gt++){let Pt=mt.added[gt],jt=C.indexOf(Pt);if(jt===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=C.length){C.push(Pt),jt=Ee;break}else if(C[Ee]===null){C[Ee]=Pt,jt=Ee;break}if(jt===-1)break}let Qt=S[jt];Qt&&Qt.connect(Pt)}}let ut=new N,ft=new N;function vt(mt,gt,Pt){ut.setFromMatrixPosition(gt.matrixWorld),ft.setFromMatrixPosition(Pt.matrixWorld);let jt=ut.distanceTo(ft),Qt=gt.projectionMatrix.elements,Ee=Pt.projectionMatrix.elements,Ue=Qt[14]/(Qt[10]-1),_e=Qt[14]/(Qt[10]+1),zt=(Qt[9]+1)/Qt[5],lt=(Qt[9]-1)/Qt[5],ht=(Qt[8]-1)/Qt[0],wt=(Ee[8]+1)/Ee[0],At=Ue*ht,yt=Ue*wt,Mt=jt/(-ht+wt),It=Mt*-ht;if(gt.matrixWorld.decompose(mt.position,mt.quaternion,mt.scale),mt.translateX(It),mt.translateZ(Mt),mt.matrixWorld.compose(mt.position,mt.quaternion,mt.scale),mt.matrixWorldInverse.copy(mt.matrixWorld).invert(),Qt[10]===-1)mt.projectionMatrix.copy(gt.projectionMatrix),mt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let G=Ue+Mt,re=_e+Mt,St=At-It,D=yt+(jt-It),f=zt*_e/re*G,X=lt*_e/re*G;mt.projectionMatrix.makePerspective(St,D,f,X,G,re),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert()}}function se(mt,gt){gt===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(gt.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(s===null)return;let gt=mt.near,Pt=mt.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(Pt=y.depthFar)),j.near=Z.near=W.near=gt,j.far=Z.far=W.far=Pt,(z!==j.near||Q!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),z=j.near,Q=j.far),j.layers.mask=mt.layers.mask|6,W.layers.mask=j.layers.mask&-5,Z.layers.mask=j.layers.mask&-3;let jt=mt.parent,Qt=j.cameras;se(j,jt);for(let Ee=0;Ee<Qt.length;Ee++)se(Qt[Ee],jt);Qt.length===2?vt(j,W,Z):j.projectionMatrix.copy(W.projectionMatrix),F===null&&mt.isPerspectiveCamera&&(F={camera:mt,fov:mt.fov,zoom:mt.zoom}),$t(mt,j,jt)};function $t(mt,gt,Pt){Pt===null?mt.matrix.copy(gt.matrixWorld):(mt.matrix.copy(Pt.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(gt.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(gt.projectionMatrix),mt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=Ps*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(mt){c=mt,h!==null&&(h.fixedFoveation=mt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=mt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(mt){return p[mt]};let ke=null;function Jt(mt,gt){if(d=gt.getViewerPose(l||o),_=gt,d!==null){let Pt=d.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let jt=!1;Pt.length!==j.cameras.length&&(j.cameras.length=0,jt=!0);for(let _e=0;_e<Pt.length;_e++){let zt=Pt[_e],lt=null;if(u!==null)lt=u.getViewport(zt);else{let wt=m.getViewSubImage(h,zt);lt=wt.viewport,_e===0&&(t.setRenderTargetTextures(E,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(E))}let ht=J[_e];ht===void 0&&(ht=new kn,ht.layers.enable(_e),ht.viewport=new on,J[_e]=ht),ht.matrix.fromArray(zt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(zt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),_e===0&&(j.matrix.copy(ht.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),jt===!0&&j.cameras.push(ht)}let Qt=s.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){m=n.getBinding();let _e=m.getDepthInformation(Pt[0]);_e&&_e.isValid&&_e.texture&&y.init(_e,s.renderState)}if(Qt&&Qt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let _e=0;_e<Pt.length;_e++){let zt=Pt[_e].camera;if(zt){let lt=p[zt];lt||(lt=new no,p[zt]=lt);let ht=m.getCameraImage(zt);lt.sourceTexture=ht}}}}for(let Pt=0;Pt<S.length;Pt++){let jt=C[Pt],Qt=S[Pt];jt!==null&&Qt!==void 0&&Qt.update(jt,gt,l||o)}ke&&ke(mt,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),_=null}let ge=new Bd;ge.setAnimationLoop(Jt),this.setAnimationLoop=function(mt){ke=mt},this.dispose=function(){}}},sy=new Me,Wd=new De;Wd.set(-1,0,0,0,1,0,0,0,1);function ry(i,t){function e(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function n(y,p){p.color.getRGB(y.fogColor.value,uh(i)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function s(y,p,M,L,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(y,p):p.isMeshLambertMaterial?(r(y,p),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(y,p),m(y,p)):p.isMeshPhongMaterial?(r(y,p),d(y,p),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(y,p),h(y,p),p.isMeshPhysicalMaterial&&u(y,p,E)):p.isMeshMatcapMaterial?(r(y,p),_(y,p)):p.isMeshDepthMaterial?r(y,p):p.isMeshDistanceMaterial?(r(y,p),T(y,p)):p.isMeshNormalMaterial?r(y,p):p.isLineBasicMaterial?(o(y,p),p.isLineDashedMaterial&&a(y,p)):p.isPointsMaterial?c(y,p,M,L):p.isSpriteMaterial?l(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,e(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===Wn&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,e(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===Wn&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,e(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,e(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);let M=t.get(p),L=M.envMap,E=M.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(E)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Wd),y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,y.aoMapTransform))}function o(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform))}function a(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function c(y,p,M,L){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*M,y.scale.value=L*.5,p.map&&(y.map.value=p.map,e(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function l(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function d(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function m(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function h(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function u(y,p,M){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wn&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.retroreflectivity>0&&(y.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=M.texture,y.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,y.specularIntensityMapTransform))}function _(y,p){p.matcap&&(y.matcap.value=p.matcap)}function T(y,p){let M=t.get(p).light;y.referencePosition.value.setFromMatrixPosition(M.matrixWorld),y.nearDistance.value=M.shadow.camera.near,y.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){let C=S.program;n.uniformBlockBinding(E,C)}function l(E,S){let C=s[E.id];C===void 0&&(y(E),C=d(E),s[E.id]=C,E.addEventListener("dispose",M));let U=S.program;n.updateUBOMapping(E,U);let v=t.render.frame;r[E.id]!==v&&(h(E),r[E.id]=v)}function d(E){let S=m();E.__bindingPointIndex=S;let C=i.createBuffer(),U=E.__size,v=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,U,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,C),C}function m(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){let S=s[E.id],C=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,F=C.length;v<F;v++){let W=C[v];if(Array.isArray(W))for(let Z=0,J=W.length;Z<J;Z++)u(W[Z],v,Z,U);else u(W,v,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,S,C,U){if(T(E,S,C,U)===!0){let v=E.__offset,F=E.value;if(Array.isArray(F)){let W=0;for(let Z=0;Z<F.length;Z++){let J=F[Z],j=p(J);_(J,E.__data,W),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(F,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,E.__data)}}function _(E,S,C){typeof E=="number"||typeof E=="boolean"?S[0]=E:E.isMatrix3?(S[0]=E.elements[0],S[1]=E.elements[1],S[2]=E.elements[2],S[3]=0,S[4]=E.elements[3],S[5]=E.elements[4],S[6]=E.elements[5],S[7]=0,S[8]=E.elements[6],S[9]=E.elements[7],S[10]=E.elements[8],S[11]=0):ArrayBuffer.isView(E)?S.set(new E.constructor(E.buffer,E.byteOffset,S.length)):E.toArray(S,C)}function T(E,S,C,U){let v=E.value,F=S+"_"+C;if(U[F]===void 0)return typeof v=="number"||typeof v=="boolean"?U[F]=v:ArrayBuffer.isView(v)?U[F]=v.slice():U[F]=v.clone(),!0;{let W=U[F];if(typeof v=="number"||typeof v=="boolean"){if(W!==v)return U[F]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(W.equals(v)===!1)return W.copy(v),!0}}return!1}function y(E){let S=E.uniforms,C=0,U=16;for(let F=0,W=S.length;F<W;F++){let Z=Array.isArray(S[F])?S[F]:[S[F]];for(let J=0,j=Z.length;J<j;J++){let z=Z[J],Q=Array.isArray(z.value)?z.value:[z.value];for(let rt=0,st=Q.length;rt<st;rt++){let pt=Q[rt],ut=p(pt),ft=C%U,vt=ft%ut.boundary,se=ft+vt;C+=vt,se!==0&&U-se<ut.storage&&(C+=U-se),z.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=C,C+=ut.storage}}}let v=C%U;return v>0&&(C+=U-v),E.__size=C,E.__cache={},this}function p(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",E),S}function M(E){let S=E.target;S.removeEventListener("dispose",M);let C=o.indexOf(S.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function L(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:L}}var ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function cy(){return Gi===null&&(Gi=new jr(ay,16,16,Es,di),Gi.name="DFG_LUT",Gi.minFilter=qn,Gi.magFilter=qn,Gi.wrapS=Li,Gi.wrapT=Li,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Yc=class{constructor(t={}){let{canvas:e=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:u=oi}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let T=u,y=new Set([hc,lc,cc]),p=new Set([oi,Ci,vr,Mr,rc,oc]),M=new Uint32Array(4),L=new Int32Array(4),E=new N,S=null,C=null,U=[],v=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let W=this,Z=!1,J=null,j=null,z=null,Q=null;this._outputColorSpace=Hn;let rt=0,st=0,pt=null,ut=-1,ft=null,vt=new on,se=new on,$t=null,ke=new he(0),Jt=0,ge=e.width,mt=e.height,gt=1,Pt=null,jt=null,Qt=new on(0,0,ge,mt),Ee=new on(0,0,ge,mt),Ue=!1,_e=new dr,zt=!1,lt=!1,ht=new Me,wt=new N,At=new on,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function It(){return pt===null?gt:1}let G=n;function re(x,b){return e.getContext(x,b)}let St,D,f,X,$,K,ct,dt,et,q,bt,Ot,Ut,kt,Gt,oe,Tt,Y,Rt,xt,Vt,Yt,Ct;try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",yn,!1),G===null){let b="webgl2";if(G=re(b,x),G===null)throw re(b)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(x){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Ie("WebGLRenderer: "+x.message),x}function Zt(){St=new mg(G),St.init(),Vt=new ey(G,St),D=new rg(G,St,t,Vt),f=new jx(G,St),D.reversedDepthBuffer&&h&&f.buffers.depth.setReversed(!0),j=G.createFramebuffer(),z=G.createFramebuffer(),Q=G.createFramebuffer(),X=new yg(G),$=new zx,K=new ty(G,St,f,$,D,Vt,X),ct=new pg(W),dt=new v0(G),Yt=new ig(G,dt),et=new gg(G,dt,X,Yt),q=new vg(G,et,dt,Yt,X),Y=new _g(G,D,K),Gt=new og($),bt=new Bx(W,ct,St,D,Yt,Gt),Ot=new ry(W,$),Ut=new kx,kt=new Yx(St),Tt=new ng(W,ct,f,q,_,c),oe=new Qx(W,q,D),Ct=new oy(G,X,D,f),Rt=new sg(G,St,X),xt=new xg(G,St,X),X.programs=bt.programs,W.capabilities=D,W.extensions=St,W.properties=$,W.renderLists=Ut,W.shadowMap=oe,W.state=f,W.info=X}T!==oi&&(F=new Eg(T,e.width,e.height,a,s,r));let ue=new Nh(W,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let x=St.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=St.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(x){x!==void 0&&(gt=x,this.setSize(ge,mt,!1))},this.getSize=function(x){return x.set(ge,mt)},this.setSize=function(x,b,B=!0){if(ue.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=x,mt=b,e.width=Math.floor(x*gt),e.height=Math.floor(b*gt),B===!0&&(e.style.width=x+"px",e.style.height=b+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,x,b)},this.getDrawingBufferSize=function(x){return x.set(ge*gt,mt*gt).floor()},this.setDrawingBufferSize=function(x,b,B){ge=x,mt=b,gt=B,e.width=Math.floor(x*B),e.height=Math.floor(b*B),this.setViewport(0,0,x,b)},this.setEffects=function(x){if(T===oi){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let b=0;b<x.length;b++)if(x[b].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(vt)},this.getViewport=function(x){return x.copy(Qt)},this.setViewport=function(x,b,B,H){x.isVector4?Qt.set(x.x,x.y,x.z,x.w):Qt.set(x,b,B,H),f.viewport(vt.copy(Qt).multiplyScalar(gt).round())},this.getScissor=function(x){return x.copy(Ee)},this.setScissor=function(x,b,B,H){x.isVector4?Ee.set(x.x,x.y,x.z,x.w):Ee.set(x,b,B,H),f.scissor(se.copy(Ee).multiplyScalar(gt).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(x){f.setScissorTest(Ue=x)},this.setOpaqueSort=function(x){Pt=x},this.setTransparentSort=function(x){jt=x},this.getClearColor=function(x){return x.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(x=!0,b=!0,B=!0){let H=0;if(x){let V=!1;if(pt!==null){let Et=pt.texture.format;V=y.has(Et)}if(V){let Et=pt.texture.type,Lt=p.has(Et),_t=Tt.getClearColor(),Ht=Tt.getClearAlpha(),Wt=_t.r,de=_t.g,fe=_t.b;Lt?(M[0]=Wt,M[1]=de,M[2]=fe,M[3]=Ht,G.clearBufferuiv(G.COLOR,0,M)):(L[0]=Wt,L[1]=de,L[2]=fe,L[3]=Ht,G.clearBufferiv(G.COLOR,0,L))}else H|=G.COLOR_BUFFER_BIT}b&&(H|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),B&&(H|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&G.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),J=x},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),Tt.dispose(),Ut.dispose(),kt.dispose(),$.dispose(),ct.dispose(),q.dispose(),Yt.dispose(),Ct.dispose(),bt.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",sn),ue.removeEventListener("sessionend",_n),ee.stop()};function pe(x){x.preventDefault(),ah("WebGLRenderer: Context Lost."),Z=!0}function Ne(){ah("WebGLRenderer: Context Restored."),Z=!1;let x=X.autoReset,b=oe.enabled,B=oe.autoUpdate,H=oe.needsUpdate,V=oe.type;Zt(),X.autoReset=x,oe.enabled=b,oe.autoUpdate=B,oe.needsUpdate=H,oe.type=V}function yn(x){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function at(x){let b=x.target;b.removeEventListener("dispose",at),Ke(b)}function Ke(x){je(x),$.remove(x)}function je(x){let b=$.get(x).programs;b!==void 0&&(b.forEach(function(B){bt.releaseProgram(B)}),x.isShaderMaterial&&bt.releaseShaderCache(x))}this.renderBufferDirect=function(x,b,B,H,V,Et){b===null&&(b=yt);let Lt=V.isMesh&&V.matrixWorld.determinantAffine()<0,_t=w(x,b,B,H,V);f.setMaterial(H,Lt);let Ht=B.index,Wt=1;if(H.wireframe===!0){if(Ht=et.getWireframeAttribute(B),Ht===void 0)return;Wt=2}let de=B.drawRange,fe=B.attributes.position,te=de.start*Wt,Se=(de.start+de.count)*Wt;Et!==null&&(te=Math.max(te,Et.start*Wt),Se=Math.min(Se,(Et.start+Et.count)*Wt)),Ht!==null?(te=Math.max(te,0),Se=Math.min(Se,Ht.count)):fe!=null&&(te=Math.max(te,0),Se=Math.min(Se,fe.count));let ne=Se-te;if(ne<0||ne===1/0)return;Yt.setup(V,H,_t,B,Ht);let Ce,me=Rt;if(Ht!==null&&(Ce=dt.get(Ht),me=xt,me.setIndex(Ce)),V.isMesh)H.wireframe===!0?(f.setLineWidth(H.wireframeLinewidth*It()),me.setMode(G.LINES)):me.setMode(G.TRIANGLES);else if(V.isLine){let ln=H.linewidth;ln===void 0&&(ln=1),f.setLineWidth(ln*It()),V.isLineSegments?me.setMode(G.LINES):V.isLineLoop?me.setMode(G.LINE_LOOP):me.setMode(G.LINE_STRIP)}else V.isPoints?me.setMode(G.POINTS):V.isSprite&&me.setMode(G.TRIANGLES);if(V.isBatchedMesh)if(St.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ln=V._multiDrawStarts,ae=V._multiDrawCounts,wn=V._multiDrawCount,We=Ht?dt.get(Ht).bytesPerElement:1,Xn=$.get(H).currentProgram.getUniforms();for(let Dn=0;Dn<wn;Dn++)Xn.setValue(G,"_gl_DrawID",Dn),me.render(ln[Dn]/We,ae[Dn])}else if(V.isInstancedMesh)me.renderInstances(te,ne,V.count);else if(B.isInstancedBufferGeometry){let ln=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ae=Math.min(B.instanceCount,ln);me.renderInstances(te,ne,ae)}else me.render(te,ne)};function fi(x,b,B,H){J!==null&&x.isNodeMaterial&&J.setObject(H,x),zt===!0&&Gt.setState(x,B,!1),x.transparent===!0&&x.side===Ln&&x.forceSinglePass===!1?(x.side=Wn,x.needsUpdate=!0,P(x,b,H),x.side=Hi,x.needsUpdate=!0,P(x,b,H),x.side=Ln):P(x,b,H)}this.compile=function(x,b,B=null){B===null&&(B=x),J!==null&&J.renderStart(x,b,B),C=kt.get(B),C.init(b),v.push(C),B.traverseVisible(function(V){V.isLight&&V.layers.test(b.layers)&&(C.pushLight(V),V.castShadow&&C.pushShadow(V))}),x!==B&&x.traverseVisible(function(V){V.isLight&&V.layers.test(b.layers)&&(C.pushLight(V),V.castShadow&&C.pushShadow(V))}),C.setupLights(),J!==null&&J.updateLights(C.state.lightsArray),lt=this.localClippingEnabled,zt=Gt.init(this.clippingPlanes,lt),zt===!0&&Gt.setGlobalState(this.clippingPlanes,b),J!==null&&oe.render(C.state.shadowsArray,B,b);let H=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Et=V.material;if(Et)if(Array.isArray(Et))for(let Lt=0;Lt<Et.length;Lt++){let _t=Et[Lt];fi(_t,B,b,V),H.add(_t)}else fi(Et,B,b,V),H.add(Et)}),C=v.pop(),J!==null&&J.renderEnd(),H},this.compileAsync=function(x,b,B=null){let H=this.compile(x,b,B);return new Promise(V=>{function Et(){if(H.forEach(function(Lt){let Ht=$.get(Lt).currentProgram;(Ht===void 0||Ht.isReady())&&H.delete(Lt)}),H.size===0){V(x);return}setTimeout(Et,10)}St.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let En=null;function Zn(x){En&&En(x)}function sn(){ee.stop()}function _n(){ee.start()}let ee=new Bd;ee.setAnimationLoop(Zn),typeof self!="undefined"&&ee.setContext(self),this.setAnimationLoop=function(x){En=x,ue.setAnimationLoop(x),x===null?ee.stop():ee.start()},ue.addEventListener("sessionstart",sn),ue.addEventListener("sessionend",_n),this.render=function(x,b){if(b!==void 0&&b.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;J!==null&&J.renderStart(x,b);let B=ue.enabled===!0&&ue.isPresenting===!0,H=F!==null&&(pt===null||B)&&F.begin(W,pt);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(b),b=ue.getCamera()),x.isScene===!0&&x.onBeforeRender(W,x,b,pt),C=kt.get(x,v.length),C.init(b),C.state.textureUnits=K.getTextureUnits(),v.push(C),ht.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),_e.setFromProjectionMatrix(ht,bi,b.reversedDepth),lt=this.localClippingEnabled,zt=Gt.init(this.clippingPlanes,lt),S=Ut.get(x,U.length),S.init(),U.push(S),ue.enabled===!0&&ue.isPresenting===!0){let Lt=W.xr.getDepthSensingMesh();Lt!==null&&bn(Lt,b,-1/0,W.sortObjects)}bn(x,b,0,W.sortObjects),S.finish(),J!==null&&J.updateLights(C.state.lightsArray),W.sortObjects===!0&&S.sort(Pt,jt),Mt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Mt&&Tt.addToRenderList(S,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Gt.beginShadows();let V=C.state.shadowsArray;if(oe.render(V,x,b),zt===!0&&Gt.endShadows(),(H&&F.hasRenderPass())===!1){let Lt=S.opaque,_t=S.transmissive;if(C.setupLights(),b.isArrayCamera){let Ht=b.cameras;if(_t.length>0)for(let Wt=0,de=Ht.length;Wt<de;Wt++){let fe=Ht[Wt];os(Lt,_t,x,fe)}Mt&&Tt.render(x);for(let Wt=0,de=Ht.length;Wt<de;Wt++){let fe=Ht[Wt];pi(S,x,fe,fe.viewport)}}else _t.length>0&&os(Lt,_t,x,b),Mt&&Tt.render(x),pi(S,x,b)}pt!==null&&st===0&&(K.updateMultisampleRenderTarget(pt),K.updateRenderTargetMipmap(pt)),H&&F.end(W),x.isScene===!0&&x.onAfterRender(W,x,b),Yt.resetDefaultState(),ut=-1,ft=null,v.pop(),v.length>0?(C=v[v.length-1],K.setTextureUnits(C.state.textureUnits),zt===!0&&Gt.setGlobalState(W.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?S=U[U.length-1]:S=null,J!==null&&J.renderEnd()};function bn(x,b,B,H){if(x.visible===!1)return;if(x.layers.test(b.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(b);else if(x.isLightProbeGrid)C.pushLightProbeGrid(x);else if(x.isLight)C.pushLight(x),x.castShadow&&C.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(_e)){H&&At.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ht);let Lt=q.update(x),_t=x.material;_t.visible&&S.push(x,Lt,_t,B,At.z,null,b)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(_e))){let Lt=q.update(x),_t=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),At.copy(x.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),At.copy(Lt.boundingSphere.center)),At.applyMatrix4(x.matrixWorld).applyMatrix4(ht)),Array.isArray(_t)){let Ht=Lt.groups;for(let Wt=0,de=Ht.length;Wt<de;Wt++){let fe=Ht[Wt],te=_t[fe.materialIndex];te&&te.visible&&S.push(x,Lt,te,B,At.z,fe,b)}}else _t.visible&&S.push(x,Lt,_t,B,At.z,null,b)}}let Et=x.children;for(let Lt=0,_t=Et.length;Lt<_t;Lt++)bn(Et[Lt],b,B,H)}function pi(x,b,B,H){let{opaque:V,transmissive:Et,transparent:Lt}=x;C.setupLightsView(B),zt===!0&&Gt.setGlobalState(W.clippingPlanes,B),H&&f.viewport(vt.copy(H)),V.length>0&&si(V,b,B),Et.length>0&&si(Et,b,B),Lt.length>0&&si(Lt,b,B),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function os(x,b,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[H.id]===void 0){let te=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[H.id]=new Qn(1,1,{generateMipmaps:!0,type:te?di:oi,minFilter:vs,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let Et=C.state.transmissionRenderTarget[H.id],Lt=H.viewport||vt;Et.setSize(Lt.z*W.transmissionResolutionScale,Lt.w*W.transmissionResolutionScale);let _t=W.getRenderTarget(),Ht=W.getActiveCubeFace(),Wt=W.getActiveMipmapLevel();W.setRenderTarget(Et),W.getClearColor(ke),Jt=W.getClearAlpha(),Jt<1&&W.setClearColor(16777215,.5),W.clear(),Mt&&Tt.render(B);let de=W.toneMapping;W.toneMapping=Ri;let fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),C.setupLightsView(H),zt===!0&&Gt.setGlobalState(W.clippingPlanes,H),si(x,B,H),K.updateMultisampleRenderTarget(Et),K.updateRenderTargetMipmap(Et),St.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Se=0,ne=b.length;Se<ne;Se++){let Ce=b[Se],{object:me,geometry:ln,material:ae,group:wn}=Ce;if(ae.side===Ln&&me.layers.test(H.layers)){let We=ae.side;ae.side=Wn,ae.needsUpdate=!0,Xi(me,B,H,ln,ae,wn),ae.side=We,ae.needsUpdate=!0,te=!0}}te===!0&&(K.updateMultisampleRenderTarget(Et),K.updateRenderTargetMipmap(Et))}W.setRenderTarget(_t,Ht,Wt),W.setClearColor(ke,Jt),fe!==void 0&&(H.viewport=fe),W.toneMapping=de}function si(x,b,B){let H=b.isScene===!0?b.overrideMaterial:null;for(let V=0,Et=x.length;V<Et;V++){let Lt=x[V],{object:_t,geometry:Ht,group:Wt}=Lt,de=Lt.material;de.allowOverride===!0&&H!==null&&(de=H),_t.layers.test(B.layers)&&Xi(_t,b,B,Ht,de,Wt)}}function Xi(x,b,B,H,V,Et){J!==null&&V.isNodeMaterial&&J.setObject(x,V),x.onBeforeRender(W,b,B,H,V,Et),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(W,b,B,H,x,Et),V.transparent===!0&&V.side===Ln&&V.forceSinglePass===!1?(V.side=Wn,V.needsUpdate=!0,W.renderBufferDirect(B,b,H,V,x,Et),V.side=Hi,V.needsUpdate=!0,W.renderBufferDirect(B,b,H,V,x,Et),V.side=Ln):W.renderBufferDirect(B,b,H,V,x,Et),x.onAfterRender(W,b,B,H,V,Et)}function P(x,b,B){b.isScene!==!0&&(b=yt);let H=$.get(x),V=C.state.lights,Et=C.state.shadowsArray,Lt=V.state.version,_t=bt.getParameters(x,V.state,Et,b,B,C.state.lightProbeGridArray),Ht=bt.getProgramCacheKey(_t),Wt=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,H.fog=b.fog;let de=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ct.get(x.envMap||H.environment,de),H.envMapRotation=H.environment!==null&&x.envMap===null?b.environmentRotation:x.envMapRotation,Wt===void 0&&(x.addEventListener("dispose",at),Wt=new Map,H.programs=Wt);let fe=Wt.get(Ht);if(fe!==void 0){if(H.currentProgram===fe&&H.lightsStateVersion===Lt)return tt(x,_t),fe}else _t.uniforms=bt.getUniforms(x),J!==null&&x.isNodeMaterial&&J.build(x,B,_t),x.onBeforeCompile(_t,W),fe=bt.acquireProgram(_t,Ht),Wt.set(Ht,fe),H.uniforms=_t.uniforms;let te=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(te.clippingPlanes=Gt.uniform),tt(x,_t),H.needsLights=O(x),H.lightsStateVersion=Lt,H.needsLights&&(te.ambientLightColor.value=V.state.ambient,te.lightProbe.value=V.state.probe,te.sunLights.value=V.state.sun,te.sunLightShadows.value=V.state.sunShadow,te.directionalLights.value=V.state.directional,te.directionalLightShadows.value=V.state.directionalShadow,te.spotLights.value=V.state.spot,te.spotLightShadows.value=V.state.spotShadow,te.rectAreaLights.value=V.state.rectArea,te.ltc_1.value=V.state.rectAreaLTC1,te.ltc_2.value=V.state.rectAreaLTC2,te.pointLights.value=V.state.point,te.pointLightShadows.value=V.state.pointShadow,te.hemisphereLights.value=V.state.hemi,te.sunShadowMatrix.value=V.state.sunShadowMatrix,te.sunShadowCascade.value=V.state.sunShadowCascade,te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,te.spotLightMatrix.value=V.state.spotLightMatrix,te.spotLightMap.value=V.state.spotLightMap,te.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=C.state.lightProbeGridArray.length>0,H.currentProgram=fe,H.uniformsList=null,fe}function k(x){if(x.uniformsList===null){let b=x.currentProgram.getUniforms();x.uniformsList=br.seqWithValue(b.seq,x.uniforms)}return x.uniformsList}function tt(x,b){let B=$.get(x);B.outputColorSpace=b.outputColorSpace,B.batching=b.batching,B.batchingColor=b.batchingColor,B.instancing=b.instancing,B.instancingColor=b.instancingColor,B.instancingMorph=b.instancingMorph,B.skinning=b.skinning,B.morphTargets=b.morphTargets,B.morphNormals=b.morphNormals,B.morphColors=b.morphColors,B.morphTargetsCount=b.morphTargetsCount,B.numClippingPlanes=b.numClippingPlanes,B.numIntersection=b.numClipIntersection,B.vertexAlphas=b.vertexAlphas,B.vertexTangents=b.vertexTangents,B.toneMapping=b.toneMapping}function g(x,b){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;E.setFromMatrixPosition(b.matrixWorld);for(let B=0,H=x.length;B<H;B++){let V=x[B];if(V.texture!==null&&V.boundingBox.containsPoint(E))return V}return null}function w(x,b,B,H,V){b.isScene!==!0&&(b=yt),K.resetTextureUnits();let Et=b.fog,Lt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?b.environment:null,_t=pt===null?W.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:qe.workingColorSpace,Ht=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Wt=ct.get(H.envMap||Lt,Ht),de=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,fe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),te=!!B.morphAttributes.position,Se=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color,Ce=Ri;H.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Ce=W.toneMapping);let me=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ln=me!==void 0?me.length:0,ae=$.get(H),wn=C.state.lights;if(zt===!0&&(lt===!0||x!==ft)){let en=x===ft&&H.id===ut;Gt.setState(H,x,en)}let We=!1;H.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==wn.state.version||ae.outputColorSpace!==_t||V.isBatchedMesh&&ae.batching===!1||!V.isBatchedMesh&&ae.batching===!0||V.isBatchedMesh&&ae.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ae.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ae.instancing===!1||!V.isInstancedMesh&&ae.instancing===!0||V.isSkinnedMesh&&ae.skinning===!1||!V.isSkinnedMesh&&ae.skinning===!0||V.isInstancedMesh&&ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ae.instancingMorph===!1&&V.morphTexture!==null||ae.envMap!==Wt||H.fog===!0&&ae.fog!==Et||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Gt.numPlanes||ae.numIntersection!==Gt.numIntersection)||ae.vertexAlphas!==de||ae.vertexTangents!==fe||ae.morphTargets!==te||ae.morphNormals!==Se||ae.morphColors!==ne||ae.toneMapping!==Ce||ae.morphTargetsCount!==ln||!!ae.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(We=!0):(We=!0,ae.__version=H.version);let Xn=ae.currentProgram;We===!0&&(Xn=P(H,b,V),J&&H.isNodeMaterial&&J.onUpdateProgram(H,Xn,ae));let Dn=!1,ti=!1,ei=!1,Xe=Xn.getUniforms(),fn=ae.uniforms;if(f.useProgram(Xn.program)&&(Dn=!0,ti=!0,ei=!0),H.id!==ut&&(ut=H.id,ti=!0),ae.needsLights){let en=g(C.state.lightProbeGridArray,V);ae.lightProbeGrid!==en&&(ae.lightProbeGrid=en,ti=!0)}if(Dn||ft!==x){f.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Xe.setValue(G,"projectionMatrix",x.projectionMatrix),Xe.setValue(G,"viewMatrix",x.matrixWorldInverse);let Mi=Xe.map.cameraPosition;Mi!==void 0&&Mi.setValue(G,wt.setFromMatrixPosition(x.matrixWorld)),D.logarithmicDepthBuffer&&Xe.setValue(G,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Xe.setValue(G,"isOrthographic",x.isOrthographicCamera===!0),ft!==x&&(ft=x,ti=!0,ei=!0)}if(ae.needsLights&&(wn.state.sunShadowMap.length>0&&Xe.setValue(G,"sunShadowMap",wn.state.sunShadowMap,K),wn.state.directionalShadowMap.length>0&&Xe.setValue(G,"directionalShadowMap",wn.state.directionalShadowMap,K),wn.state.spotShadowMap.length>0&&Xe.setValue(G,"spotShadowMap",wn.state.spotShadowMap,K),wn.state.pointShadowMap.length>0&&Xe.setValue(G,"pointShadowMap",wn.state.pointShadowMap,K)),V.isSkinnedMesh){Xe.setOptional(G,V,"bindMatrix"),Xe.setOptional(G,V,"bindMatrixInverse");let en=V.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Xe.setValue(G,"boneTexture",en.boneTexture,K))}V.isBatchedMesh&&(Xe.setOptional(G,V,"batchingTexture"),Xe.setValue(G,"batchingTexture",V._matricesTexture,K),Xe.setOptional(G,V,"batchingIdTexture"),Xe.setValue(G,"batchingIdTexture",V._indirectTexture,K),Xe.setOptional(G,V,"batchingColorTexture"),V._colorsTexture!==null&&Xe.setValue(G,"batchingColorTexture",V._colorsTexture,K));let vi=B.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Y.update(V,B,Xn),(ti||ae.receiveShadow!==V.receiveShadow)&&(ae.receiveShadow=V.receiveShadow,Xe.setValue(G,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&b.environment!==null&&(fn.envMapIntensity.value=b.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=cy()),ti){if(Xe.setValue(G,"toneMappingExposure",W.toneMappingExposure),ae.needsLights&&A(fn,ei),Et&&H.fog===!0&&Ot.refreshFogUniforms(fn,Et),Ot.refreshMaterialUniforms(fn,H,gt,mt,C.state.transmissionRenderTarget[x.id]),ae.needsLights&&ae.lightProbeGrid){let en=ae.lightProbeGrid;fn.probesSH.value=en.texture,fn.probesMin.value.copy(en.boundingBox.min),fn.probesMax.value.copy(en.boundingBox.max),fn.probesResolution.value.copy(en.resolution)}br.upload(G,k(ae),fn,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(br.upload(G,k(ae),fn,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Xe.setValue(G,"center",V.center),Xe.setValue(G,"modelViewMatrix",V.modelViewMatrix),Xe.setValue(G,"normalMatrix",V.normalMatrix),Xe.setValue(G,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let en=H.uniformsGroups;for(let Mi=0,qi=en.length;Mi<qi;Mi++){let Cr=en[Mi];Ct.update(Cr,Xn),Ct.bind(Cr,Xn)}}return Xn}function A(x,b){x.ambientLightColor.needsUpdate=b,x.lightProbe.needsUpdate=b,x.sunLights.needsUpdate=b,x.sunLightShadows.needsUpdate=b,x.directionalLights.needsUpdate=b,x.directionalLightShadows.needsUpdate=b,x.pointLights.needsUpdate=b,x.pointLightShadows.needsUpdate=b,x.spotLights.needsUpdate=b,x.spotLightShadows.needsUpdate=b,x.rectAreaLights.needsUpdate=b,x.hemisphereLights.needsUpdate=b}function O(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return st},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(x,b,B){let H=$.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),$.get(x.texture).__webglTexture=b,$.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,b){let B=$.get(x);B.__webglFramebuffer=b,B.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(x,b=0,B=0){pt=x,rt=b,st=B;let H=null,V=!1,Et=!1;if(x){let _t=$.get(x);if(_t.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(G.FRAMEBUFFER,_t.__webglFramebuffer),vt.copy(x.viewport),se.copy(x.scissor),$t=x.scissorTest,f.viewport(vt),f.scissor(se),f.setScissorTest($t),ut=-1;return}else if(_t.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(_t.__hasExternalTextures)K.rebindTextures(x,$.get(x.texture).__webglTexture,$.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let de=x.depthTexture;if(_t.__boundDepthTexture!==de){if(de!==null&&$.has(de)&&(x.width!==de.image.width||x.height!==de.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}let Ht=x.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);let Wt=$.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Wt[b])?H=Wt[b][B]:H=Wt[b],V=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?H=$.get(x).__webglMultisampledFramebuffer:Array.isArray(Wt)?H=Wt[B]:H=Wt,vt.copy(x.viewport),se.copy(x.scissor),$t=x.scissorTest}else vt.copy(Qt).multiplyScalar(gt).floor(),se.copy(Ee).multiplyScalar(gt).floor(),$t=Ue;if(B!==0&&(H=j),f.bindFramebuffer(G.FRAMEBUFFER,H)&&f.drawBuffers(x,H),f.viewport(vt),f.scissor(se),f.setScissorTest($t),V){let _t=$.get(x.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+b,_t.__webglTexture,B)}else if(Et){let _t=b;for(let Ht=0;Ht<x.textures.length;Ht++){let Wt=$.get(x.textures[Ht]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,B,_t)}}else if(x!==null&&B!==0){let _t=$.get(x.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_t.__webglTexture,B)}ut=-1};function it(x){let b=$.get(x);return(b.__readFormat!==x.format||b.__readType!==x.type)&&(b.__readFormat=x.format,b.__readType=x.type,b.__formatReadable=D.textureFormatReadable(x.format),b.__typeReadable=D.textureTypeReadable(x.type)),b}this.readRenderTargetPixels=function(x,b,B,H,V,Et,Lt,_t=0){if(!(x&&x.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=$.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){f.bindFramebuffer(G.FRAMEBUFFER,Ht);try{let Wt=x.textures[_t],de=Wt.format,fe=Wt.type;x.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_t);let te=it(Wt);if(te.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=x.width-H&&B>=0&&B<=x.height-V&&G.readPixels(b,B,H,V,Vt.convert(de),Vt.convert(fe),Et)}finally{let Wt=pt!==null?$.get(pt).__webglFramebuffer:null;f.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(x,b,B,H,V,Et,Lt,_t=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=$.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht)if(b>=0&&b<=x.width-H&&B>=0&&B<=x.height-V){f.bindFramebuffer(G.FRAMEBUFFER,Ht);let Wt=x.textures[_t],de=Wt.format,fe=Wt.type;x.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_t);let te=it(Wt);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.bufferData(G.PIXEL_PACK_BUFFER,Et.byteLength,G.STREAM_READ),G.readPixels(b,B,H,V,Vt.convert(de),Vt.convert(fe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let ne=pt!==null?$.get(pt).__webglFramebuffer:null;f.bindFramebuffer(G.FRAMEBUFFER,ne);let Ce=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await dd(G,Ce,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Et),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Se),G.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,b=null,B=0){let H=Math.pow(2,-B),V=Math.floor(x.image.width*H),Et=Math.floor(x.image.height*H),Lt=b!==null?b.x:0,_t=b!==null?b.y:0;K.setTexture2D(x,0),G.copyTexSubImage2D(G.TEXTURE_2D,B,0,0,Lt,_t,V,Et),f.unbindTexture()},this.copyTextureToTexture=function(x,b,B=null,H=null,V=0,Et=0){let Lt,_t,Ht,Wt,de,fe,te,Se,ne,Ce=x.isCompressedTexture?x.mipmaps[Et]:x.image;if(B!==null)Lt=B.max.x-B.min.x,_t=B.max.y-B.min.y,Ht=B.isBox3?B.max.z-B.min.z:1,Wt=B.min.x,de=B.min.y,fe=B.isBox3?B.min.z:0;else{let fn=Math.pow(2,-V);Lt=Math.floor(Ce.width*fn),_t=Math.floor(Ce.height*fn),x.isDataArrayTexture?Ht=Ce.depth:x.isData3DTexture?Ht=Math.floor(Ce.depth*fn):Ht=1,Wt=0,de=0,fe=0}H!==null?(te=H.x,Se=H.y,ne=H.z):(te=0,Se=0,ne=0);let me=Vt.convert(b.format),ln=Vt.convert(b.type),ae;b.isData3DTexture?(K.setTexture3D(b,0),ae=G.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(K.setTexture2DArray(b,0),ae=G.TEXTURE_2D_ARRAY):(K.setTexture2D(b,0),ae=G.TEXTURE_2D),f.activeTexture(G.TEXTURE0),f.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,b.flipY),f.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),f.pixelStorei(G.UNPACK_ALIGNMENT,b.unpackAlignment);let wn=f.getParameter(G.UNPACK_ROW_LENGTH),We=f.getParameter(G.UNPACK_IMAGE_HEIGHT),Xn=f.getParameter(G.UNPACK_SKIP_PIXELS),Dn=f.getParameter(G.UNPACK_SKIP_ROWS),ti=f.getParameter(G.UNPACK_SKIP_IMAGES);f.pixelStorei(G.UNPACK_ROW_LENGTH,Ce.width),f.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ce.height),f.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),f.pixelStorei(G.UNPACK_SKIP_ROWS,de),f.pixelStorei(G.UNPACK_SKIP_IMAGES,fe);let ei=x.isDataArrayTexture||x.isData3DTexture,Xe=b.isDataArrayTexture||b.isData3DTexture;if(x.isDepthTexture){let fn=$.get(x),vi=$.get(b),en=$.get(fn.__renderTarget),Mi=$.get(vi.__renderTarget);f.bindFramebuffer(G.READ_FRAMEBUFFER,en.__webglFramebuffer),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let qi=0;qi<Ht;qi++)ei&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(x).__webglTexture,V,fe+qi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(b).__webglTexture,Et,ne+qi)),G.blitFramebuffer(Wt,de,Lt,_t,te,Se,Lt,_t,G.DEPTH_BUFFER_BIT,G.NEAREST);f.bindFramebuffer(G.READ_FRAMEBUFFER,null),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||$.has(x)){let fn=$.get(x),vi=$.get(b);f.bindFramebuffer(G.READ_FRAMEBUFFER,z),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,Q);for(let en=0;en<Ht;en++)ei?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,V,fe+en):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,V),Xe?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,vi.__webglTexture,Et,ne+en):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,vi.__webglTexture,Et),V!==0?G.blitFramebuffer(Wt,de,Lt,_t,te,Se,Lt,_t,G.COLOR_BUFFER_BIT,G.NEAREST):Xe?G.copyTexSubImage3D(ae,Et,te,Se,ne+en,Wt,de,Lt,_t):G.copyTexSubImage2D(ae,Et,te,Se,Wt,de,Lt,_t);f.bindFramebuffer(G.READ_FRAMEBUFFER,null),f.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Xe?x.isDataTexture||x.isData3DTexture?G.texSubImage3D(ae,Et,te,Se,ne,Lt,_t,Ht,me,ln,Ce.data):b.isCompressedArrayTexture?G.compressedTexSubImage3D(ae,Et,te,Se,ne,Lt,_t,Ht,me,Ce.data):G.texSubImage3D(ae,Et,te,Se,ne,Lt,_t,Ht,me,ln,Ce):x.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Et,te,Se,Lt,_t,me,ln,Ce.data):x.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Et,te,Se,Ce.width,Ce.height,me,Ce.data):G.texSubImage2D(G.TEXTURE_2D,Et,te,Se,Lt,_t,me,ln,Ce);f.pixelStorei(G.UNPACK_ROW_LENGTH,wn),f.pixelStorei(G.UNPACK_IMAGE_HEIGHT,We),f.pixelStorei(G.UNPACK_SKIP_PIXELS,Xn),f.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),f.pixelStorei(G.UNPACK_SKIP_IMAGES,ti),Et===0&&b.generateMipmaps&&G.generateMipmap(ae),f.unbindTexture()},this.initRenderTarget=function(x){$.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),f.unbindTexture()},this.resetState=function(){rt=0,st=0,pt=null,f.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=qe._getUnpackColorSpace()}};var Xd=i=>()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},is=(i,t,e)=>{let n=Math.sin(i*127.1+t*269.5+e*311.7)*43758.5453;return n-Math.floor(n)},un=(i,t,e)=>{let n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=i-n,a=t-s,c=e-r,l=o*o*(3-2*o),d=a*a*(3-2*a),m=c*c*(3-2*c),h=(u,_,T)=>u+(_-u)*T;return h(h(h(is(n,s,r),is(n+1,s,r),l),h(is(n,s+1,r),is(n+1,s+1,r),l),d),h(h(is(n,s,r+1),is(n+1,s,r+1),l),h(is(n,s+1,r+1),is(n+1,s+1,r+1),l),d),m)},Rr={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},an=(i,t)=>(t.kind=i,t),Qe=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(t,{m:e=null,color:n=()=>[1,1,1],tip:s=()=>0,flat:r=!1,normal:o=null,flip:a=!1,mat:c=null}={}){var T;let l=t.index?t.toNonIndexed():t.clone();if(e&&l.applyMatrix4(e),(r||!l.attributes.normal)&&l.computeVertexNormals(),a){for(let p of["position","normal","uv"]){let M=l.attributes[p];if(!M)continue;let L=M.array,E=M.itemSize;for(let S=0;S<M.count;S+=3)for(let C=0;C<E;C++){let U=L[(S+1)*E+C];L[(S+1)*E+C]=L[(S+2)*E+C],L[(S+2)*E+C]=U}}let y=l.attributes.normal.array;for(let p=0;p<y.length;p++)y[p]=-y[p]}let d=l.attributes.position,m=l.attributes.normal,h=c;if(h===null){let y=n.kind||"plain";if(y==="wood"||y==="log"){l.computeBoundingBox();let p=new N;l.boundingBox.getSize(p);let M=p.x>=p.y&&p.x>=p.z?"X":p.z>=p.y?"Z":"Y";h=y==="log"?M==="Z"?Rr.logZ:Rr.logX:Rr["wood"+M]}else h=(T=Rr[y])!=null?T:0}let u=new N,_=new N;for(let y=0;y<d.count;y++){u.fromBufferAttribute(d,y),_.fromBufferAttribute(m,y),o&&o(u,_,y);let p=n(u,_,y);this.p.push(u.x,u.y,u.z),this.n.push(_.x,_.y,_.z),this.c.push(p[0],p[1],p[2]),this.t.push(s(u,_)),this.k.push(h)}return this}tris(t,e,n=()=>0,s=null){var r;for(let o=0;o<t.length;o+=3){let a=new N(...t[o]),c=new N(...t[o+1]),l=new N(...t[o+2]),d=s?s.clone():new N().subVectors(l,c).cross(new N().subVectors(a,c)).normalize(),m=(r=Rr[e.kind])!=null?r:e.kind==="wood"?Rr.woodY:0;[a,c,l].forEach(h=>{let u=e(h);this.p.push(h.x,h.y,h.z),this.n.push(d.x,d.y,d.z),this.c.push(u[0],u[1],u[2]),this.t.push(n(h)),this.k.push(m)})}return this}geometry(){let t=new Je;return t.setAttribute("position",new Le(this.p,3)),t.setAttribute("normal",new Le(this.n,3)),t.setAttribute("color",new Le(this.c,3)),t.setAttribute("aTip",new Le(this.t,1)),t.setAttribute("aMat",new Le(this.k,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}},Dt=(i,t,e,n=.02,s=2)=>{let r=2*s+1,o=new Nt(1,1,1,r,r,r),a=[i/2,t/2,e/2],c=Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4),l=o.attributes.position,d=o.attributes.normal,m=[0,0,0],h=[0,0,0];for(let u=0;u<l.count;u++){for(let S=0;S<3;S++){let C=Math.round((l.getComponent(u,S)+.5)*r),U=a[S];m[S]=C<=s?-U+c*(C/s):C>=r-s?U-c*((r-C)/s):0,C>s&&C<r-s&&(m[S]=0),h[S]=Math.max(-(U-c),Math.min(U-c,m[S]))}let _=m[0]-h[0],T=m[1]-h[1],y=m[2]-h[2],p=d.getX(u),M=d.getY(u),L=d.getZ(u);Math.abs(p)>.5&&(_=Math.sign(p)*Math.max(Math.abs(_),1e-6)),Math.abs(M)>.5&&(T=Math.sign(M)*Math.max(Math.abs(T),1e-6)),Math.abs(L)>.5&&(y=Math.sign(L)*Math.max(Math.abs(y),1e-6));let E=Math.hypot(_,T,y)||1;l.setXYZ(u,h[0]+_/E*c,h[1]+T/E*c,h[2]+y/E*c),d.setXYZ(u,_/E,T/E,y/E)}return o},cn=(i,t=10)=>new ro(i.map(([e,n])=>new le(Math.max(5e-4,e),n)),t),I=(i=0,t=0,e=0,n=0,s=0,r=0,o=1,a=o,c=o)=>new Me().compose(new N(i,t,e),new Fe().setFromEuler(new Sn(n,s,r,"YXZ")),new N(o,a,c)),Yn=(i,t,{sway:e=0,side:n=Hi,color:s=16777215,snowBias:r=0,sink:o=0,softBack:a=!1,crisp:c=!1,snowMask:l=!1,grain:d=0,rich:m=!1,indoor:h=!1,tree:u=!1}={})=>{let _=new In({vertexColors:!0,side:n,color:s});if(_.onBeforeCompile=T=>{Object.assign(T.uniforms,i,{uShow:t}),T.vertexShader=T.vertexShader.replace("#include <common>",`#include <common>
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
        ${e?`float sd = cIP.x * 0.071 + cIP.z * 0.053;
        float sw = (sin(uTime * 1.3 + sd) + 0.45 * sin(uTime * 3.1 + sd * 1.7)) * ${e.toFixed(4)} * position.y * position.y;
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
        ${m?ly:""}
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
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return _},ly=`
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
`;function qd({scene:i,camera:t,heightAt:e,water:n}){let s=(j,z,Q)=>window.MEOW_I18N?window.MEOW_I18N.t(j,Q):z,r=(j,...z)=>{let Q=window.MEOW_SOUND;Q&&Q[j]&&Q[j](...z)},o=(()=>{let j=new Qe,z=new Ze(1,18,12);return j.add(z,{m:I(0,0,0,0,0,0,1,.36,.28),color:Q=>{let rt=Q.y>.05?.55:.85,st=Math.sin(Q.x*30)*Math.sin(Q.z*40)>.6&&Q.y>0?.8:1;return[rt*.78*st,rt*.84*st,rt*.8*st]}}),j.add(new vn(.3,.45,4),{m:I(-1.05,0,0,0,0,Math.PI/2,1,1,.25),color:()=>[.42,.46,.44]}),j.add(new vn(.16,.4,4),{m:I(.05,.38,0,0,0,-.4,1,1,.2),color:()=>[.42,.46,.44]}),[-1,1].forEach(Q=>{j.add(new Ze(.07,8,6),{m:I(.72,.08,Q*.17),color:()=>[.95,.95,.92]}),j.add(new Ze(.04,8,6),{m:I(.76,.085,Q*.21),color:()=>[.05,.05,.05]})}),j.add(new Vn(.07,.025,6,12),{m:I(.99,-.02,0,0,Math.PI/2,0),color:()=>[.35,.22,.24]}),j.geometry()})(),a=new In({vertexColors:!0}),c=5,l=1.6,d=Array.from({length:c},(j,z)=>{let Q=new ve(o,a);Q.visible=!1,Q.scale.setScalar(l),i.add(Q);let rt=new ve(new oo(.85,1,32).rotateX(-Math.PI/2),new Un({color:15265520,transparent:!0,opacity:0,depthWrite:!1}));return rt.visible=!1,i.add(rt),{m:Q,ring:rt,next:performance.now()+1500+z*1700,t0:0,x:0,z:0,yaw:0,on:!1}}),m=(j,z,Q,rt)=>{d.forEach(st=>{if(!st.on){if(st.m.visible=!1,j<.05||rt||z<st.next){st.ring.visible=st.ring.visible&&z-st.t0<2600;return}for(let ke=0;ke<8;ke++){let Jt=Math.random()*Math.PI*2,ge=16+Math.random()*60,mt=t.position.x+Math.cos(Jt)*ge,gt=t.position.z+Math.sin(Jt)*ge;if(e(mt,gt)<Q-1.5){st.x=mt,st.z=gt,st.yaw=Math.random()*6.28,st.on=!0,st.t0=z;break}}st.next=z+(2500+Math.random()*6e3)/Math.max(.2,j),st.on&&Math.hypot(st.x-t.position.x,st.z-t.position.z)<45&&setTimeout(()=>r("plop",.6),250)}if(!st.on)return;let pt=(z-st.t0)/1e3,ut=pt<.35?pt/.35:pt<.9?1:Math.max(0,1-(pt-.9)/.45),ft=ut*ut*(3-2*ut);st.m.visible=!0,st.m.position.set(st.x,Q-1.2*l+ft*1.45*l,st.z),st.m.rotation.set(0,st.yaw,1.05-(pt>.9?(pt-.9)*1.6:0));let vt=pt>.4&&pt<.85?1+.12*Math.sin((pt-.4)*40):1;st.m.scale.set(l,l*vt,l),st.ring.visible=!0,st.ring.position.set(st.x,Q+.05,st.z);let se=Math.max(0,pt-.2),$t=.6+se*2.4;st.ring.scale.setScalar($t),st.ring.material.opacity=Math.max(0,.55-se*.22),pt>1.4&&(st.on=!1,st.m.visible=!1)})};i.add(t);let h=new Cn;{let j=new In({color:7031342}),z=new In({color:2236962}),Q=new ve(new Xt(.012,.035,2.4,6).translate(0,1.2,0),j),rt=new ve(new Xt(.045,.045,.35,8).translate(0,.18,0),z),st=new ve(new Xt(.08,.08,.06,12),z);st.rotation.z=Math.PI/2,st.position.set(.06,.42,0),h.add(Q,rt,st),h.position.set(.55,-.85,-.9),h.rotation.set(-.95,0,-.25),h.visible=!1,t.add(h)}let u=new N(0,2.4,0),_=new Cn;{let j=new ve(new Ze(.16,10,8,0,Math.PI*2,0,Math.PI/2),new In({color:14173230,emissive:4198408})),z=new ve(new Ze(.16,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new In({color:15921386})),Q=new ve(new Xt(.015,.015,.3,5).translate(0,.22,0),new In({color:14173230}));_.add(j,z,Q),_.scale.setScalar(2.2),_.visible=!1,i.add(_)}let T=16,y=new Je;y.setAttribute("position",new mn(new Float32Array(T*3),3));let p=new pr(y,new fr({color:15263968,transparent:!0,opacity:.7}));p.frustumCulled=!1,p.visible=!1,i.add(p);let M=new ve(o,a);M.visible=!1,i.add(M);let L=document.createElement("div");L.className="fish-hint",document.body.appendChild(L);let E=(j,z)=>{L.textContent=j||"",L.classList.toggle("show",!!j),L.classList.toggle("hot",!!z)},S={mode:"idle",t0:0,from:new N,to:new N,biteAt:0,aim:null,catchFrom:new N},C=0;try{C=+(localStorage.getItem("meow.fish")||0)}catch{}let U=new N,v=new N,F=new hi(new N(0,1,0),0),W=(j,z)=>{F.constant=-z;let Q=j.ray.intersectPlane(F,new N);if(!Q)return null;let rt=Q.distanceTo(t.position);return rt>70||rt<6||e(Q.x,Q.z)>z-.6?null:Q},Z=j=>{let z=document.getElementById("toast");z&&(z.textContent=j,z.classList.add("show"),clearTimeout(Z.t),Z.t=setTimeout(()=>z.classList.remove("show"),3200))},J=()=>{S.mode="idle",h.visible=!1,_.visible=!1,p.visible=!1};return{get busy(){return S.mode!=="idle"},reset(){J(),M.visible=!1,E("")},key(j){return S.mode==="idle"?S.aim?(S.mode="cast",S.t0=j,S.to.copy(S.aim),h.visible=!0,p.visible=!0,_.visible=!0,r("cast"),!0):!1:S.mode==="bite"?this.strike(j):S.mode==="wait"||S.mode==="cast"?(r("reel"),J(),!0):!1},click(j){return S.mode==="bite"?this.strike(j):!1},strike(j){S.mode="catch",S.t0=j,S.catchFrom.copy(_.position),_.visible=!1,r("splash",!0);let z=s("fishNames","Trout|Perch|Carp|Pike|Bass|Catfish").split("|"),Q=z[Math.floor(Math.random()*z.length)],rt=18+Math.floor(Math.random()*40);C++;try{localStorage.setItem("meow.fish",String(C))}catch{}return M.scale.setScalar(.6+(rt-18)/60),setTimeout(()=>Z("\u{1F41F} "+s("fishCaught","You caught a {name}! {cm} cm \xB7 {n} so far",{name:Q,cm:rt,n:C})),700),!0},update(j,z,{active:Q,ray:rt,waterY:st,amount:pt,indoor:ut}){if(m(pt,j,st,ut),S.aim=Q&&!ut&&S.mode==="idle"&&rt?W(rt,st):null,t.updateMatrixWorld(),U.copy(u).applyMatrix4(h.matrixWorld),S.mode==="cast"){let ft=Math.min(1,(j-S.t0)/800);_.position.lerpVectors(U,S.to,ft),_.position.y+=Math.sin(Math.PI*ft)*8,ft>=1&&(S.mode="wait",S.biteAt=j+3e3+Math.random()*7e3,r("plop",.8))}else if(S.mode==="wait")_.position.set(S.to.x,st+Math.sin(z*2.2)*.06,S.to.z),j>S.biteAt&&(S.mode="bite",S.t0=j,r("splash",!1)),t.position.distanceTo(S.to)>80&&(J(),Z(s("fishSnap","The line snapped")));else if(S.mode==="bite"){let ft=(j-S.t0)/1e3;_.position.set(S.to.x+Math.sin(ft*20)*.08,st-.25-Math.abs(Math.sin(ft*9))*.45,S.to.z),ft>1.5&&(S.mode="wait",S.biteAt=j+2500+Math.random()*6e3,Z(s("fishAway","It got away\u2026")))}else if(S.mode==="catch"){let ft=Math.min(1,(j-S.t0)/1100);v.set(0,-.4,-3.2).applyQuaternion(t.quaternion).add(t.position),M.visible=!0,M.position.lerpVectors(S.catchFrom,v,ft),M.position.y+=Math.sin(Math.PI*ft)*6,M.rotation.set(Math.sin(z*18)*.4,z*4,Math.PI/2*(1-ft)),ft>=1&&(M.visible=!1,J())}if(p.visible){let ft=y.attributes.position;for(let vt=0;vt<T;vt++){let se=vt/(T-1);v.lerpVectors(U,_.visible?_.position:S.catchFrom,se),v.y-=Math.sin(Math.PI*se)*(S.mode==="bite"?.2:1.2),ft.setXYZ(vt,v.x,v.y,v.z)}ft.needsUpdate=!0,h.rotation.x=-.95+(S.mode==="bite"?Math.sin(z*30)*.05-.15:0)}Q?S.mode==="bite"?E(s("fishBite","A bite! Click now!"),!0):S.mode==="wait"||S.mode==="cast"?E(s("fishWait","Waiting for a bite\u2026 \xB7 R reel in")):S.aim?E(s("fishCast","R  cast the line")):E(""):E("")}}}var Mn={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-6.6,mezz:-3.4,ceil:-.3},Pe={back:-7.6,left:-4.8,right:1.6,slab:.3},ce={x0:1.95,x1:3,top:2.2,bottom:-1.3},ss=i=>{let t=(ce.top-Math.min(ce.top,Math.max(ce.bottom,i)))/(ce.top-ce.bottom);return .12+(Mn.mezz-.12)*t},Wi={x:.55,z:-.4,r:1.05,turns:1.25},dn={x0:.55,x1:Pe.right,z0:-1.45,z1:-.4},$c=Mn.mezz-Mn.floor,_i=Math.PI*2,$d=(i,t)=>[(Math.atan2(t-Wi.z,i-Wi.x)%_i+_i)%_i,Math.hypot(i-Wi.x,t-Wi.z)],Kd=i=>{let t=[];for(let e=0;e<2;e++){let n=(i+_i*e)/(_i*Wi.turns);n<=1&&t.push(Mn.mezz-n*$c)}return t},rs=(i,t,[e,n,s,r],o=0)=>i>e+o&&i<n-o&&t>s+o&&t<r-o,Oe=Mn,hy=[[Oe.x0,Oe.x1,Oe.z0,Pe.back],[Oe.x0,Pe.left,Oe.z0,Oe.z1],[Pe.right,Oe.x1,Oe.z0,Oe.z1],[dn.x0,dn.x1,dn.z0,dn.z1]],zs=.45,Yd=[[Oe.x0+zs,Oe.x1-zs,Oe.z0+zs,Pe.back],[Oe.x0+zs,Pe.left,Oe.z0+zs,Oe.z1],[Pe.right,Oe.x1-zs,Oe.z0+zs,Oe.z1],[dn.x0,Pe.right+.4,dn.z0,.1]],Qd=[[Pe.left,Pe.back],[Pe.right,Pe.back],[Pe.left,-2.6],[Pe.right,-4.4]],uy=[[-.97,.97,-8.47,-7.53],[-.32,.32,-9.25,-8.5],[-2.95,-.65,-1.9,-.9],[-2.45,-1.15,-3.12,-2.38],[-4.5,-3.5,-3.4,-2.4],[-3.4,-3,-1.1,-.7],[4.15,4.65,1.35,1.85],[-6.5,-5.7,1.4,2.4],...Qd.map(([i,t])=>[i-.14,i+.14,t-.14,t+.14])],dy=[[3.15,4.05,-5.05,-4.15],[3.15,4.05,-3.35,-2.45],[3.35,4.05,-4.1,-3.4],[5.25,5.95,-9.1,-8.3]],xn=.42,Zd=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function jd(i,t,e,n){if(!rs(i,t,[Oe.x0,Oe.x1,Oe.z0,Oe.z1],e))return!0;let[s,r]=$d(i,t);if(r<Wi.r+.1){let o=Kd(s).find(c=>Math.abs(c-n)<.9),a=rs(i,t,[dn.x0,dn.x1,dn.z0,dn.z1])&&n>Oe.mezz-.25;if(o!==void 0&&!a){if(r<.1+e*.6)return!0;if(r<Wi.r-.12)return!1;let c=(Oe.mezz-o)/$c;return c<.1?!Yd.some(l=>rs(i,t,l,e)):c>.9?Jd(i,t,e,!0,s,r):!0}}return n>Oe.mezz-.35?!Yd.some(o=>rs(i,t,o,e))||i>ce.x0-e&&i<ce.x1+e&&t>ce.bottom-e&&t<ce.top+.3&&ss(t)>n+.5?!0:dy.some(o=>rs(i,t,o,-e)):Jd(i,t,e,!1,s,r)}function Jd(i,t,e,n,s,r){return!!(!rs(i,t,[Oe.x0+.52,Oe.x1-.52,Oe.z0+.52,Oe.z1-.05],e)||uy.some(o=>rs(i,t,o,-e))||r<.1+e||!n&&r<Wi.r+.1&&!(s>Math.PI/2-.1&&s<Math.PI+.3))}function tf(i,t){let e=[];if(!rs(i,t,[Oe.x0,Oe.x1,Oe.z0,Oe.z1]))return e;e.push(Oe.floor),hy.some(r=>rs(i,t,r,-.05))&&e.push(Oe.mezz);let[n,s]=$d(i,t);return s<Wi.r+.08&&s>.04&&e.push(...Kd(n)),e}function ef({group:i,mats:t,camera:e,U:n}){let{inn:s}=t,r=Oe.floor,o=Oe.mezz,a=Oe.ceil,c=Oe.x0,l=Oe.x1,d=Oe.z0,m=Oe.z1,h=o-Pe.slab,u=new Qe,_=new Qe,T=(g,w,A)=>un(g,w,A),y=(g,w=0)=>an("wood",A=>{let O=g*(.86+T(A.x*3,A.y*9,A.z*3)*.28),it=T(A.x*.6,A.y*2,A.z*.6);return[O*(1.04+it*.08+w),O*(.7+it*.04),O*(.47-it*.05-w*.5)]}),p=y(.25),M=y(.35),L=y(.47),E=y(.38,.12),S=(g,w,A,O)=>O?an(O,()=>[g,w,A]):()=>[g,w,A],C=an("stone",g=>{let w=.42+T(g.x*4,g.y*4,g.z*4)*.22;return[w,w*.96,w*.9]}),U=an("plaster",g=>{let w=.7+T(g.x*2,g.y*2,g.z*2)*.07;return[w,w*.95,w*.86]}),v=S(.07,.07,.075,"metal"),F=S(.68,.53,.28,"metal"),W=an("leather",g=>{let w=.15+T(g.x*9,g.y*9,g.z*9)*.03;return[w*1.15,w*.6,w*.4]}),Z=S(1,.86,.62),J=new N(0,1,0),j=(g,w,A,O=0)=>new Me().compose(new N(g,w,A),new Fe().setFromAxisAngle(J,O),new N(1,1,1)),z=(g,w,A,O,it=u)=>it.add(w,{m:g.clone().multiply(A),color:O}),Q=(g,w,A)=>new Nt(g,w,A),rt=([g,w,A,O],it,x)=>{for(let b=g,B=0;b<w-.01;b+=.18,B++){let H=Math.min(.18,w-b),V=B*7%5*.55;for(let Et=A-V,Lt=0;Et<O;Et+=2.4,Lt++){let _t=Math.max(Et,A),Ht=Math.min(Et+2.4,O);if(Ht-_t<.05)continue;let Wt=x*(.9+(B*7+Lt*3)%5*.035);u.add(Q(H-.004,.04,Ht-_t-.004),{m:I(b+H/2,it-.02,(_t+Ht)/2),color:an("wood",de=>{let fe=Wt*(.88+T(de.x*3,0,de.z*.8)*.24);return[fe*1.08,fe*.72,fe*.47]})})}}};rt([c,l,d,m],r,.3),[[c,l,d,Pe.back],[c,Pe.left,Pe.back,m],[Pe.right,l,Pe.back,m],[dn.x0,dn.x1,dn.z0,dn.z1]].forEach(([g,w,A,O])=>{rt([g,w,A,O],o,.36),u.add(Q(w-g,o-.04-h-.01,O-A),{m:I((g+w)/2,(o-.04+h+.01)/2,(A+O)/2),color:p}),u.add(new $e(w-g,O-A),{m:I((g+w)/2,h+.005,(A+O)/2,Math.PI/2,0,0),color:U})}),[[Pe.left,Pe.right,Pe.back,"x"],[Pe.back,m,Pe.left,"z"],[Pe.back,dn.z0,Pe.right,"z"],[dn.z1,m,Pe.right,"z"],[dn.x0,dn.x1,dn.z0,"x"]].forEach(([g,w,A,O])=>{let it=w-g,x=(g+w)/2;[[o-.04,.06,.05],[o-.17,.035,.03],[h+.03,.06,.05]].forEach(([b,B,H])=>{u.add(Dt(O==="x"?it+.06:H*2,B,O==="x"?H*2:it+.06,.012,1),{m:O==="x"?I(x,b,A):I(A,b,x),color:E})})});for(let g=c+.7;g<l;g+=1.3)u.add(Q(.1,.12,Pe.back-d),{m:I(g,h-.06,(d+Pe.back)/2),color:M});for(let g=Pe.back+.9;g<m;g+=1.3)u.add(Q(Pe.left-c,.12,.1),{m:I((c+Pe.left)/2,h-.06,g),color:M}),u.add(Q(l-Pe.right,.12,.1),{m:I((Pe.right+l)/2,h-.06,g),color:M});let ut=(g,w)=>{_.add(new Xt(.075,.075,.01,16),{m:I(g,h-.003,w),color:S(1,.92,.76)}),u.add(new Vn(.088,.012,4,18),{m:I(g,h-.004,w,Math.PI/2,0,0),color:S(.8,.78,.72,"metal")})};[-5.35,-3,-.9,.9,3,5.35].forEach(g=>ut(g,-8.55)),[-6,-3.4,-.8,1.6].forEach(g=>{ut(-5.45,g),ut(2.7,g),ut(5,g)}),Qd.forEach(([g,w])=>{u.add(Dt(.2,h-r,.2,.025,1),{m:I(g,(h+r)/2,w),color:E}),u.add(Dt(.28,.32,.28,.02,1),{m:I(g,r+.16,w),color:M}),u.add(Dt(.3,.06,.3,.02,1),{m:I(g,r+.34,w),color:L}),u.add(Dt(.3,.08,.3,.02,1),{m:I(g,h-.16,w),color:L}),u.add(Dt(.26,.1,.26,.02,1),{m:I(g,h-.06,w),color:M})});let ft=cn([[.026,0],[.026,.05],[.017,.07],[.015,.16],[.03,.3],[.033,.36],[.019,.44],[.014,.58],[.021,.68],[.026,.72],[.016,.76],[.023,.79],[.023,.81]],6),vt=(g,w,A)=>{u.add(Dt(.11,.96,.11,.015,1),{m:I(g,A+.48,w),color:E}),u.add(Dt(.15,.045,.15,.015,1),{m:I(g,A+.98,w),color:p}),u.add(new Ze(.05,10,7),{m:I(g,A+1.04,w),color:E})},se=(g,w,A,O,it)=>{let x=Math.hypot(A-g,O-w),b=Math.atan2(A-g,O-w),B=(g+A)/2,H=(w+O)/2;u.add(Dt(.075,.06,x,.022,1),{m:I(B,it+.93,H,0,b,0),color:E}),u.add(Q(.05,.05,x),{m:I(B,it+.065,H,0,b,0),color:M});let V=Math.max(1,Math.round(x/.14));for(let Et=1;Et<V;Et++){let Lt=Et/V;u.add(ft,{m:I(g+(A-g)*Lt,it+.09,w+(O-w)*Lt),color:L})}vt(g,w,it),vt(A,O,it)},$t=.05;se(Pe.left-$t,Pe.back-$t,Pe.right+$t,Pe.back-$t,o),se(Pe.left-$t,Pe.back-$t,Pe.left-$t,m-.06,o),se(Pe.right+$t,Pe.back-$t,Pe.right+$t,dn.z0,o),se(Pe.right+$t,.12,Pe.right+$t,m-.06,o),se(dn.x0+.04,dn.z0+.04,Pe.right+$t,dn.z0+.04,o),se(dn.x0+.04,dn.z0+.04,dn.x0+.04,dn.z1-.12,o);{let g=Wi,w=16,A=_i*g.turns/(w+1);for(let it=0;it<w;it++){let x=(it+1)/(w+1),b=o-x*$c,B=x*_i*g.turns,H=B-A*.5-.04,V=B+A*.5+.04;u.add(new Xt(g.r,g.r,.055,7,1,!1,Math.PI/2-V,V-H),{m:I(g.x,b-.028,g.z),color:E}),u.add(new Xt(g.r-.04,g.r-.04,.03,7,1,!1,Math.PI/2-V+.02,V-H-.04),{m:I(g.x,b-.07,g.z),color:p}),[B-A*.25,B+A*.25].forEach(Et=>u.add(ft,{m:I(g.x+Math.cos(Et)*(g.r-.06),b,g.z+Math.sin(Et)*(g.r-.06),0,0,0,1,1.07,1),color:L}))}class O extends ri{constructor(x,b){super(),this.r=x,this.dy=b}getPoint(x,b=new N){let B=x*_i*g.turns;return b.set(g.x+Math.cos(B)*this.r,o-x*$c+this.dy,g.z+Math.sin(B)*this.r)}}u.add(new Bi(new O(g.r-.06,.92),150,.03,6),{color:E}),u.add(new Bi(new O(g.r-.02,-.1),150,.045,6),{color:p}),u.add(new Xt(.07,.07,o+.9-r,12),{m:I(g.x,(o+.9+r)/2,g.z),color:E}),u.add(cn([[.15,0],[.15,.04],[.1,.07],[.08,.14],[.07,.16]],12),{m:I(g.x,r,g.z),color:p}),u.add(cn([[.07,0],[.09,.03],[.05,.08],[.06,.14],[.03,.2],[0,.23]],12),{m:I(g.x,o+.9,g.z),color:E})}{let w=(ce.top-ce.bottom)/12,A=(ce.x0+ce.x1)/2,O=ce.x1-ce.x0-.04;for(let b=0;b<12;b++){let B=ce.top-b*w,H=B-w,V=ss(B-w*.5);u.add(Dt(O,.05,w+.04,.012,1),{m:I(A,V-.025,(H+B)/2),color:L}),u.add(Q(O,Math.abs(ss(B)-ss(H)),.03),{m:I(A,(ss(B)+V)/2,B-.01),color:p})}let it=Math.hypot(ce.top-ce.bottom,.12-o),x=Math.atan2(.12-o,ce.top-ce.bottom);[ce.x0,ce.x1].forEach(b=>{u.add(Q(.05,.28,it),{m:I(b,(.12+o)/2-.1,(ce.top+ce.bottom)/2,x,0,0),color:M}),u.add(Dt(.06,.06,it,.02,1),{m:I(b,(.12+o)/2+.85,(ce.top+ce.bottom)/2,x,0,0),color:E});for(let H=1;H<12;H+=1){let V=ce.top-H*w;u.add(ft,{m:I(b,ss(V),V,0,0,0,1,1.03,1),color:L})}let B=[[b,o,ce.bottom+.3],[b,o,ce.top],[b,ss(ce.top)-.15,ce.top]];u.tris([...B,B[0],B[2],B[1]],M)})}let ke=(g,w)=>g>ce.x0-.05&&g<ce.x1+.05&&w>ce.bottom-.05&&w<ce.top+.2;for(let g=c;g<l-.01;g+=.5)for(let w=d;w<m-.01;w+=.5)ke(g+.25,w+.25)||u.add(new $e(.5,.5),{m:I(g+.25,a,w+.25,Math.PI/2,0,0),color:U});for(let g=d+1.2;g<m;g+=1.8)(g>ce.bottom-.1&&g<ce.top+.2?[[c,ce.x0-.05],[ce.x1+.05,l]]:[[c,l]]).forEach(([A,O])=>u.add(Dt(O-A,.22,.2,.02,1),{m:I((A+O)/2,a-.11,g),color:p}));let Jt={x:-1.8,z:-2.75,y:-2.75};u.add(cn([[.42,0],[.4,-.03],[.3,-.05],[.18,-.07],[.08,-.1],[0,-.1]],24),{m:I(Jt.x,a,Jt.z),color:U});let ge=an("wood",g=>{let w=.34+T(g.x*2,g.y*6,g.z*2)*.08;return[w*1.06,w*.74,w*.5]});[["z",d,c,l,1],["z",m,c,l,-1],["x",c,d,m,1],["x",l,d,m,-1]].forEach(([g,w,A,O,it])=>{for(let B=A;B<O-.01;B+=.6){let H=Math.min(.6,O-B),V=B+H/2,Et=(Lt,_t,Ht)=>u.add(new $e(H,_t-Lt),{m:g==="z"?I(V,(Lt+_t)/2,w,0,it>0?0:Math.PI,0):I(w,(Lt+_t)/2,V,0,it>0?Math.PI/2:-Math.PI/2,0),color:Ht});Et(r,r+.9,C),Et(r+.9,a,ge)}let x=O-A,b=(A+O)/2;[[r+.9,.06,.05],[r+.06,.12,.03],[a-.07,.14,.09],[a-.17,.05,.05]].forEach(([B,H,V])=>{u.add(Dt(g==="z"?x:V,H,g==="z"?V:x,.015,1),{m:g==="z"?I(b,B,w+it*V/2):I(w+it*V/2,B,b),color:M})})});for(let g=Pe.left+.15;g<Pe.right-.6;g+=1.07)u.add(Dt(.9,.62,.035,.012,1),{m:I(g+.45,r+.48,m-.02),color:E}),u.add(Dt(.7,.44,.02,.02,1),{m:I(g+.45,r+.48,m-.04),color:M}),u.add(Dt(.9,2.4,.03,.012,1),{m:I(g+.45,h+1.6,m-.02),color:E}),u.add(Dt(.72,2.2,.02,.02,1),{m:I(g+.45,h+1.6,m-.04),color:M});{let A=r+.55,O=r+2.62,it=d+.02;_.add(new $e(.95- -.95,O-A,1,10),{m:I(0,(A+O)/2,it+.01),color:b=>{let B=(b.y-A)/(O-A);return[1-B*.32,.98-B*.14,.94+B*.06]}});let x=(b,B,H,V,Et=.05)=>u.add(Dt(b,B,Et,.008,1),{m:I(H,V,it+.05),color:L});for(let b=1;b<3;b++)x(.035,O-A,-.95+b*(.95- -.95)/3,(A+O)/2);for(let b=1;b<5;b++)x(.95- -.95,.035,0,A+b*(O-A)/5);x(.06,O-A,0,(A+O)/2,.07),[-1,1].forEach(b=>u.add(Dt(.14,O-A+.2,.1,.015,1),{m:I(b*(.95+.06),(A+O)/2,it+.05),color:E})),u.add(Dt(.95- -.95+.4,.16,.12,.015,1),{m:I(0,O+.08,it+.06),color:E}),u.add(Dt(.95- -.95+.5,.05,.18,.015,1),{m:I(0,O+.18,it+.09),color:M}),u.add(Dt(.95- -.95+.46,.05,.28,.02,1),{m:I(0,A-.02,it+.14),color:L}),u.add(Dt(.95- -.95+.3,.12,.05,.015,1),{m:I(0,A-.11,it+.04),color:E}),[-1,1].forEach(b=>{let B=b*1.28;[[.36,.04,0,O-.02],[.36,.04,0,A+.02],[.04,O-A,-.16,(A+O)/2],[.04,O-A,.16,(A+O)/2],[.36,.04,0,(A+O)/2]].forEach(([H,V,Et,Lt])=>u.add(Dt(H,V,.035,.008,1),{m:I(B+Et,Lt,it+.03),color:L}));for(let H=A+.08;H<O-.06;H+=.075)Math.abs(H-(A+O)/2)>.05&&u.add(Q(.3,.05,.008),{m:I(B,H,it+.03,-.6,0,0),color:M});[A+.3,O-.3].forEach(H=>u.add(Q(.03,.06,.02),{m:I(B-b*.18,H,it+.05),color:v}))})}let mt=[],gt=(g,w,A,O)=>mt.push({x:g,z:w,ry:A,w:O,base:r,h:2.8,rows:4,rowY0:.86,rowH:.48,cab:.78,pref:[1,2,0,3]}),Pt=(g,w,A,O)=>mt.push({x:g,z:w,ry:A,w:O,base:o,h:2.88,rows:5,rowY0:.16,rowH:.5,cab:0,pref:[2,3,1,0,4]});[-2.25,-3.95,2.25,3.95,-5.65,5.65].forEach(g=>gt(g,d+xn/2,0,1.7)),[-8,-6,-4,-2,0].forEach(g=>gt(c+xn/2,g,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(g=>gt(l-xn/2,g,-Math.PI/2,2)),[-1,1,-3,3,-5,5].forEach(g=>Pt(g,d+xn/2,0,2)),[-8,-6,-4,-2,0].forEach(g=>Pt(c+xn/2,g,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(g=>Pt(l-xn/2,g,-Math.PI/2,2));let jt=mt.map((g,w)=>w),Qt=g=>j(g.x,g.base,g.z,g.ry),Ee=(g,w,A,O)=>new N(w,A,O).applyMatrix4(Qt(g));mt.forEach(g=>{let w=Qt(g),A=g.w/2,O=g.rowY0+g.rows*g.rowH,it=(x,b,B)=>z(w,x,b,B);it(Q(g.w,g.h-g.cab,.03),I(0,(g.h+g.cab)/2,-xn/2+.015),p),[-1,1].forEach(x=>it(Dt(.06,g.h,xn+.02,.012,1),I(x*(A-.03),g.h/2,.01),M));for(let x=0;x<=g.rows;x++)it(Q(g.w-.1,.03,xn-.03),I(0,g.rowY0+x*g.rowH-.015,0),M);for(let x=0;x<g.rows;x++)it(Dt(g.w-.1,.04,.022,.008,1),I(0,g.rowY0+x*g.rowH+.005,xn/2-.006),L);if(it(Q(g.w-.1,g.h-O-.06,.03),I(0,(O+g.h-.06)/2,xn/2-.03),E),it(Dt(g.w+.04,.06,xn+.05,.015,1),I(0,g.h-.03,.02),p),it(Dt(g.w+.1,.04,xn+.1,.015,1),I(0,g.h+.01,.04),M),g.cab){it(Dt(g.w,g.cab-.12,xn+.1,.01,1),I(0,.1+(g.cab-.12)/2,.05),M),it(Q(g.w-.04,.1,xn+.06),I(0,.05,.03),p),it(Dt(g.w+.04,.045,xn+.16,.014,1),I(0,g.cab-.02,.06),L);let x=(g.w-.12)/2;[-1,1].forEach(b=>{let B=b*(x/2+.015);it(Dt(x-.02,g.cab-.26,.03,.006,1),I(B,.11+(g.cab-.2)/2,xn/2+.11),E),it(Dt(x-.16,g.cab-.42,.02,.02,1),I(B,.11+(g.cab-.2)/2,xn/2+.13),L),it(new Ze(.018,8,6),I(b*.05,.11+(g.cab-.2)/2+.06,xn/2+.15),F)})}else it(Dt(g.w,g.rowY0-.02,xn+.04,.008,1),I(0,(g.rowY0-.02)/2,.02),p)}),u.add(new Xt(.015,.015,12.2,6),{m:I(0,o+2.55,d+xn+.05,0,0,Math.PI/2),color:F});{let A=d+xn+.55;[-.22,.22].forEach(O=>u.add(Dt(.05,2.7,.06,.012,1),{m:I(5.6+O,o+1.33,A-.26,-.2,0,0),color:L}));for(let O=0;O<8;O++){let it=.25+O*.31;u.add(new Xt(.018,.018,.44,6),{m:I(5.6,o+it,A-it*Math.tan(.2)*.98,0,0,Math.PI/2),color:L})}[-.22,.22].forEach(O=>u.add(new Vn(.03,.008,4,10),{m:I(5.6+O,o+2.58,d+xn+.08,0,Math.PI/2,0),color:F}))}{let g=j(0,r,-8);z(g,Dt(1.9,.06,.9,.022,2),I(0,.77,0),E),z(g,Q(1.2,.004,.55),I(0,.802,.02),an("leather",()=>[.15,.24,.17])),[-1,1].forEach(w=>{z(g,Dt(.5,.66,.82,.012,1),I(w*.65,.41,0),M),z(g,Dt(.54,.08,.86,.015,1),I(w*.65,.04,0),p);for(let A=0;A<3;A++){let O=.2+A*.19;z(g,Dt(.42,.16,.03,.008,1),I(w*.65,O,-.42),E),z(g,Dt(.12,.018,.02,.008,1),I(w*.65,O+.02,-.445),F)}z(g,Dt(.4,.5,.03,.01,1),I(w*.65,.42,.42),E),z(g,Dt(.3,.38,.02,.015,1),I(w*.65,.42,.44),L)}),z(g,Dt(.76,.11,.03,.008,1),I(0,.68,-.42),E),z(g,Dt(.14,.018,.02,.008,1),I(0,.69,-.445),F),z(g,Q(.8,.55,.02),I(0,.45,.38),M),z(g,new Xt(.1,.12,.03,16),I(.6,.815,.1),F),z(g,new Xt(.012,.012,.3,6),I(.6,.97,.1),F),z(g,new Ze(1,16,8,0,_i,0,Math.PI/2),I(.6,1.1,.02,0,0,0,.22,.09,.1),S(.12,.34,.2,"metal")),z(g,new Xt(.03,.03,.12,8),I(.6,1.08,.02,0,0,Math.PI/2),Z,_),[[.16,.05,[.4,.14,.12]],[.2,.045,[.17,.25,.2]],[.18,.04,[.5,.4,.25]]].forEach(([w,A,O],it)=>z(g,Dt(w*1.4,A,w,.008,1),I(-.62,.8+.025+it*.045,.12,0,it*.2-.2,0),S(...O,"leather"))),z(g,cn([[.03,0],[.035,.02],[.03,.05],[.012,.06],[.012,.07]],10),I(-.25,.8,.22),S(.1,.12,.16,"metal")),z(g,new Xt(.004,.004,.16,5),I(-.1,.81,.05,0,.5,Math.PI/2),S(.1,.1,.1)),z(g,Q(.3,.003,.4),I(.05,.806,-.02,0,-.12,0),S(.9,.87,.78,"paper")),z(g,Q(.3,.003,.4),I(.12,.809,0,0,.1,0),S(.92,.9,.82,"paper"))}{let g=j(0,r,-8.88),w=an("fabric",O=>Math.sin(O.x*40)*Math.sin(O.y*40+O.z*30)>.35?[.74,.68,.5]:[.42,.48,.38]),A=cn([[.018,0],[.024,.04],[.018,.12],[.028,.24],[.022,.36],[.026,.42],[.026,.44]],8);[[-.21,.19],[.21,.19]].forEach(([O,it])=>z(g,A,I(O,0,it),p)),[[-.21,-.19],[.21,-.19]].forEach(([O,it])=>z(g,Dt(.045,.98,.045,.01,1),I(O,.49,it-.02,-.08,0,0),p)),z(g,Dt(.5,.06,.46,.015,1),I(0,.44,0),p),z(g,Dt(.48,.1,.44,.04,2),I(0,.51,.01),w),z(g,Dt(.4,.46,.06,.03,2),I(0,.82,-.2,-.08,0,0),w),z(g,Dt(.46,.05,.05,.015,1),I(0,1.06,-.23,-.08,0,0),p)}{let g=j(-1.8,r,-1.4,Math.PI);z(g,Dt(2.2,.32,.86,.05,2),I(0,.28,0),W),[-1,0,1].forEach(w=>z(g,Dt(.62,.14,.64,.05,2),I(w*.63,.5,.08),W)),z(g,Dt(2.2,.5,.22,.07,2),I(0,.67,-.33),W);for(let w=0;w<3;w++)for(let A=-.9+w%2*.09;A<=.9;A+=.18)z(g,new Ze(.012,6,4),I(A,.6+w*.09,-.218),S(.12,.06,.04,"leather"));[-1,1].forEach(w=>{z(g,Dt(.2,.36,.86,.04,2),I(w*1,.5,0),W),z(g,new Xt(.13,.13,.88,16),I(w*1.03,.68,0,Math.PI/2,0,0),W),[-1,1].forEach(A=>z(g,cn([[.04,0],[.05,.04],[.035,.09],[.045,.12]],10),I(w*.98,0,A*.36),p)),z(g,Dt(.42,.4,.12,.07,2),I(w*.66,.74,-.15,-.3,w*.25,w*.1),w>0?an("fabric",A=>Math.sin(A.x*50)>.6?[.72,.58,.3]:[.56,.42,.22]):S(.36,.42,.32,"fabric"))})}{let g=j(-1.8,r,-2.75),w=cn([[.025,0],[.032,.03],[.022,.1],[.034,.2],[.026,.3],[.03,.38],[.03,.4]],8);z(g,Dt(1.2,.05,.66,.02,2),I(0,.43,0),E),z(g,Dt(1.08,.08,.54,.01,1),I(0,.37,0),M),z(g,Dt(1,.025,.48,.01,1),I(0,.12,0),M),[[-.52,-.25],[.52,-.25],[-.52,.25],[.52,.25]].forEach(([A,O])=>z(g,w,I(A,0,O),p)),[-1,1].forEach(A=>{z(g,Dt(.2,.012,.28,.004,1),I(A*.1+.1,.462,.05,0,.15,A*.08),S(.9,.87,.78,"paper")),z(g,Dt(.21,.008,.29,.004,1),I(A*.1+.1,.455,.05,0,.15,A*.08),S(.42,.14,.12,"leather"))}),z(g,cn([[0,0],[.09,0],[.11,.025],[.1,.03]],16),I(-.32,.455,-.1),F),z(g,Dt(.24,.05,.17,.008,1),I(-.2,.18,.05,0,.3,0),S(.3,.33,.4,"leather"))}{let g=j(-4,r,-2.9,Math.PI/2);z(g,Dt(.86,.36,.8,.05,2),I(0,.3,0),W),z(g,Dt(.56,.14,.6,.05,2),I(0,.53,.08),W),z(g,Dt(.86,.48,.2,.07,2),I(0,.7,-.3,-.1,0,0),W),[-1,1].forEach(w=>{z(g,Dt(.17,.42,.8,.06,2),I(w*.36,.56,0),W),[-1,1].forEach(A=>z(g,cn([[.035,0],[.045,.04],[.03,.08],[.04,.12]],10),I(w*.36,0,A*.32),p))})}u.add(cn([[.16,0],[.16,.02],[.1,.05],[.04,.09],[.02,.12]],16),{m:I(-3.2,r,-.9),color:F}),u.add(new Xt(.014,.014,1.45,6),{m:I(-3.2,r+.82,-.9),color:F}),u.add(new Xt(.16,.25,.3,20,1,!0),{m:I(-3.2,r+1.6,-.9),color:an("fabric",A=>{let O=.82+Math.sin(Math.atan2(A.z- -.9,A.x- -3.2)*20)*.04;return[O,O*.9,O*.72]})}),_.add(new Ze(.06,10,8),{m:I(-3.2,r+1.52,-.9),color:Z});{let A=r+1;u.add(new Ze(.28,28,18),{m:I(4.4,A,1.6,.4,0,.2),color:O=>T(O.x*9+3,O.y*9,O.z*9)>.55?[.66,.56,.36]:[.24,.36,.42]}),u.add(new Vn(.31,.012,6,36),{m:I(4.4,A,1.6,0,Math.PI/2,.2),color:F}),u.add(new Vn(.33,.016,6,36),{m:I(4.4,A-.02,1.6,Math.PI/2,0,0),color:E}),u.add(cn([[.2,0],[.2,.03],[.07,.08],[.05,.3],[.08,.42],[.04,.55],[.06,.7],[.03,.72]],12),{m:I(4.4,r,1.6),color:E})}{let g=j(-6.1,r,1.9,Math.PI/2);z(g,Dt(.56,.32,.38,.02,1),I(0,.16,0),p),z(g,Dt(.46,1.4,.3,.02,1),I(0,1,0),E),z(g,Dt(.3,1,.02,.02,1),I(0,1,.155),M),z(g,Dt(.56,.56,.36,.02,1),I(0,1.98,0),E),z(g,new Xt(.28,.28,.36,18,1,!1,-Math.PI/2,Math.PI),I(0,2.26,0,Math.PI/2,0,0,1,1,.5),p),z(g,new Xt(.19,.19,.02,28),I(0,1.98,.18,Math.PI/2,0,0),S(.9,.86,.76,"paper")),z(g,new Vn(.2,.012,6,28),I(0,1.98,.19),F),z(g,Q(.012,.13,.006),I(0,2.02,.195,0,0,.6),S(.08,.08,.08)),z(g,Q(.012,.16,.006),I(0,2.04,.197,0,0,-.3),S(.08,.08,.08)),z(g,new Xt(.06,.06,.012,16),I(0,.7,.13,Math.PI/2,0,0),F)}{for(let w=a-.12,A=0;w>Jt.y+.8;w-=.085,A++)u.add(new Vn(.03,.007,4,8),{m:I(Jt.x,w,Jt.z,0,A%2*Math.PI/2,0,1,1.4,1),color:v});u.add(cn([[0,-.28],[.035,-.22],[.05,-.12],[.03,-.02],[.07,.04],[.05,.12],[.022,.3],[.04,.45],[.02,.6],[.016,.8],[0,.82]],12),{m:I(Jt.x,Jt.y,Jt.z),color:v});let g=(w,A,O,it)=>{u.add(new Vn(w,.02,6,48),{m:I(Jt.x,A,Jt.z,Math.PI/2,0,0),color:v});for(let x=0;x<O;x++){let b=x/O*_i+(it?0:.3),B=Jt.x+Math.cos(b)*w,H=Jt.z+Math.sin(b)*w,V=new gr(new N(Jt.x,A+.1,Jt.z),new N(Jt.x+Math.cos(b)*w*.3,A-.18,Jt.z+Math.sin(b)*w*.3),new N(Jt.x+Math.cos(b)*w*.8,A-.12,Jt.z+Math.sin(b)*w*.8),new N(B,A,H));u.add(new Bi(V,12,.012,5),{color:v}),u.add(cn([[0,0],[.03,0],[.045,.035],[.04,.05]],10),{m:I(B,A+.01,H),color:v}),u.add(new Xt(.017,.017,.12,8),{m:I(B,A+.11,H),color:S(.9,.86,.76,"paper")}),_.add(new Ze(.02,8,6),{m:I(B,A+.2,H,0,0,0,1,1.9,1),color:Z})}};g(.82,Jt.y,8,!0),g(.42,Jt.y+.4,6,!1);for(let w=0;w<4;w++){let A=w/4*_i+Math.PI/4,O=new Ds(new N(Jt.x+Math.cos(A)*.82,Jt.y,Jt.z+Math.sin(A)*.82),new N(Jt.x+Math.cos(A)*.7,Jt.y+.5,Jt.z+Math.sin(A)*.7),new N(Jt.x,Jt.y+.78,Jt.z));u.add(new Bi(O,12,.009,4),{color:v})}}{let g=an("fabric",A=>{let O=.84+T(A.x*7,A.y*7,A.z*7)*.05;return[O,O*.97,O*.9]}),w=A=>{let O=j(3.6,o,A,-Math.PI/2);z(O,Dt(.8,.3,.78,.06,2),I(0,.3,0),g),z(O,Dt(.56,.13,.6,.05,2),I(0,.5,.07),g),z(O,Dt(.8,.62,.2,.08,2),I(0,.76,-.3,-.12,0,0),g),[-1,1].forEach(it=>{z(O,Dt(.14,.38,.76,.06,2),I(it*.34,.54,0),g),[-1,1].forEach(x=>z(O,cn([[.02,0],[.03,.05],[.022,.1],[.03,.15]],8),I(it*.33,0,x*.32),p))}),z(O,Dt(.38,.36,.1,.06,2),I(0,.72,-.15,-.25,0,0),S(.34,.4,.5,"fabric"))};w(-4.6),w(-2.9),u.add(new Xt(.3,.3,.035,24),{m:I(3.7,o+.58,-3.75),color:E}),u.add(cn([[.17,0],[.17,.02],[.06,.06],[.035,.2],[.05,.35],[.03,.5],[.06,.56]],12),{m:I(3.7,o,-3.75),color:p}),u.add(cn([[0,0],[.05,0],[.07,.06],[.05,.16],[.02,.2],[.025,.24]],12),{m:I(3.75,o+.6,-3.65),color:S(.6,.66,.66)}),[[0,[.5,.2,.16]],[.04,[.2,.3,.34]]].forEach(([A,O],it)=>u.add(Dt(.22,.04,.16,.006,1),{m:I(3.6,o+.62+A,-3.88,0,it*.4,0),color:S(...O,"leather")}))}let Ue=(g,w,A,O,it,x=!1)=>{let b=document.createElement("canvas");b.width=g,b.height=w,A(b.getContext("2d"),g,w);let B=new Ai(b);B.colorSpace=Hn,B.anisotropy=8;let H=new In({map:B,color:12103848,alphaTest:x?.5:0,side:Ln}),V=new ve(O,H);return V.applyMatrix4(it),V.receiveShadow=!0,i.add(V),V},_e=7,zt=()=>(_e=_e*16807%2147483647,_e/2147483647),lt=g=>(w,A,O)=>{let it=Math.round(A*.035);w.clearRect(0,0,A,O);for(let ne=2;ne<O-2;ne+=3)w.fillStyle=ne%2?"#e9dfc8":"#d7cbb0",w.fillRect(0,ne,it+2,1.6),w.fillRect(A-it-2,ne,it+2,1.6);let x=it,b=A-2*it,B=(ne,Ce)=>{w.fillStyle=Ce,w.fillRect(x+ne,ne,b-ne*2,O-ne*2)};B(0,g.border),B(O*.035,g.cream),B(O*.045,g.border2),B(O*.115,g.cream),B(O*.125,g.field),w.fillStyle=g.accent;let H=O*.08,V=O*.06,Et=(ne,Ce,me)=>{w.beginPath(),w.moveTo(ne,Ce-me),w.lineTo(ne+me,Ce),w.lineTo(ne,Ce+me),w.lineTo(ne-me,Ce),w.closePath(),w.fill()};for(let ne=x+H;ne<x+b-H;ne+=V)Et(ne,H,V*.3),Et(ne,O-H,V*.3);for(let ne=H+V;ne<O-H;ne+=V)Et(x+H,ne,V*.3),Et(x+b-H,ne,V*.3);let Lt=x+O*.125,_t=O*.125,Ht=b-O*.25,Wt=O*.75;w.save(),w.beginPath(),w.rect(Lt,_t,Ht,Wt),w.clip();for(let ne=_t+10,Ce=0;ne<_t+Wt;ne+=O*.055,Ce++)for(let me=Lt+8+Ce%2*O*.04;me<Lt+Ht;me+=O*.08)w.fillStyle=g.motif,Et(me,ne,O*.012),w.fillStyle=g.accent,w.fillRect(me-1,ne-1,2,2);let de=x+b/2,fe=O/2,te=(ne,Ce,me,ln,ae)=>{ae.forEach((wn,We)=>{let Xn=me*(1-We*.2);w.fillStyle=wn,w.beginPath();for(let Dn=0;Dn<=64;Dn++){let ti=Dn/64*_i,ei=Xn*(1+.14*Math.cos(ti*8)),Xe=ne+Math.cos(ti)*ei*ln,fn=Ce+Math.sin(ti)*ei;Dn?w.lineTo(Xe,fn):w.moveTo(Xe,fn)}w.fill()})};[[Lt,_t],[Lt+Ht,_t],[Lt,_t+Wt],[Lt+Ht,_t+Wt]].forEach(([ne,Ce])=>te(ne,Ce,O*.2,1.3,[g.medal,g.cream,g.medal])),w.restore(),[-1,1].forEach(ne=>{w.fillStyle=g.medal,Et(de+ne*O*.42,fe,O*.08),w.fillStyle=g.cream,Et(de+ne*O*.42,fe,O*.04)}),te(de,fe,O*.3,1.45,[g.cream,g.medal,g.field,g.accent,g.medal]);for(let ne=0;ne<A*O*.05;ne++){let Ce=x+zt()*b,me=zt()*O;w.fillStyle=zt()<.5?"rgba(0,0,0,0.12)":"rgba(255,240,210,0.08)",w.fillRect(Ce,me,1.5,1.5)}let Se=w.createRadialGradient(de,fe,0,de,fe,b*.4);Se.addColorStop(0,"rgba(255,240,220,0.1)"),Se.addColorStop(1,"rgba(255,240,220,0)"),w.fillStyle=Se,w.fillRect(x,0,b,O)},ht=(g,w,A,O,it,x,b=r)=>{let B=new $e(A*1.07,O);Ue(1024,Math.round(1024*O/(A*1.07)),lt(x),B,new Me().compose(new N(g,b+.006,w),new Fe().setFromEuler(new Sn(-Math.PI/2,it,0,"YXZ")),new N(1,1,1)),!0)};ht(0,-6.5,3.2,2,0,{border:"#2a2440",border2:"#6a1d1c",cream:"#d8c7a0",field:"#7a201c",accent:"#c58f42",motif:"#4a1612",medal:"#22305a"}),ht(-1.9,-2.6,3.9,2.8,0,{border:"#6d1f1c",border2:"#1f2d4a",cream:"#d6c49a",field:"#1d2a46",accent:"#b07a3a",motif:"#2c3d5e",medal:"#7b2420"}),ht(3.9,-3.75,2.2,3,Math.PI/2,{border:"#5c3a22",border2:"#8a2e22",cream:"#e0d2ae",field:"#9a3a26",accent:"#d6a24c",motif:"#6a2416",medal:"#2b3a52"},o);{let O=r+2.05,it=m-.06;Ue(512,333,(b,B,H)=>{let V=b.createLinearGradient(0,0,0,H*.6);V.addColorStop(0,"#6f87a0"),V.addColorStop(1,"#e3c9a0"),b.fillStyle=V,b.fillRect(0,0,B,H);let Et=(_t,Ht,Wt,de)=>{b.fillStyle=Wt,b.beginPath(),b.moveTo(0,H);for(let fe=0;fe<=B;fe+=4)b.lineTo(fe,_t+Math.sin(fe*de+_t)*Ht+Math.sin(fe*de*2.7)*Ht*.4);b.lineTo(B,H),b.fill()};Et(H*.5,14,"#56677a",.012),Et(H*.6,10,"#47584a",.02),b.fillStyle="#9fb2b8",b.fillRect(0,H*.7,B,H*.08),Et(H*.8,6,"#2f3a2a",.03);for(let _t=0;_t<26;_t++){let Ht=zt()*B,Wt=H*(.62+zt()*.2),de=20+zt()*40;b.fillStyle="#1f2a1e",b.beginPath(),b.moveTo(Ht,Wt-de),b.lineTo(Ht+de*.25,Wt),b.lineTo(Ht-de*.25,Wt),b.fill()}for(let _t=0;_t<6e3;_t++)b.fillStyle=`rgba(${zt()<.5?"0,0,0":"255,240,210"},0.05)`,b.fillRect(zt()*B,zt()*H,2,1);let Lt=b.createRadialGradient(B/2,H/2,H*.3,B/2,H/2,B*.7);Lt.addColorStop(0,"rgba(0,0,0,0)"),Lt.addColorStop(1,"rgba(40,20,0,0.35)"),b.fillStyle=Lt,b.fillRect(0,0,B,H)},new $e(2,1.3),I(-1.8,O,it,0,Math.PI,0));let x=S(.72,.56,.26,"metal");[[2+.2,.12,0,1.3/2+.06],[2+.2,.12,0,-1.3/2-.06],[.12,1.3,-2/2-.06,0],[.12,1.3,2/2+.06,0]].forEach(([b,B,H,V])=>u.add(Dt(b,B,.06,.025,2),{m:I(-1.8+H,O+V,it+.01),color:x})),[-1,1].forEach(b=>{let B=-1.8+b*1.5,H=r+2.25;u.add(Dt(.1,.22,.03,.02,1),{m:I(B,H,m-.02),color:F}),u.add(new Xt(.008,.008,.18,5),{m:I(B,H+.02,m-.1,Math.PI/2,0,0),color:F}),u.add(new Xt(.06,.09,.13,14,1,!0),{m:I(B,H+.16,m-.19),color:S(.9,.84,.7,"fabric")}),_.add(new Ze(.03,8,6),{m:I(B,H+.12,m-.19),color:Z})})}let wt=new ve(u.geometry(),s);wt.receiveShadow=!0;let At=new ve(_.geometry(),new Un({vertexColors:!0,toneMapped:!1}));i.add(wt,At);let yt=new zi(16761466,0,90,1.2);yt.position.set(Jt.x,Jt.y-.1,Jt.z),i.add(yt);let Mt=new zi(16766112,0,70,1.2);Mt.position.set(-.8,r+2,-4.6),i.add(Mt);let It={set intensity(g){yt.intensity=g*1.2,Mt.intensity=g*.75},get intensity(){return yt.intensity/1.25}},G=(()=>{let g=new Qe,w=A=>{let O=.9+T(A.x*40,A.y*40,A.z*40)*.2;return[O,O,O]};return[-1,1].forEach(A=>g.add(new Nt(.1,1,1),{m:I(A*.45,0,0),color:w,tip:()=>1})),g.add(new Nt(1,1,.08),{m:I(0,0,.47),color:w,tip:()=>1}),g.add(new Nt(.82,.94,.94),{m:I(0,0,-.04),color:A=>{let O=.86+Math.sin(A.x*140)*.04;return[O,O*.96,O*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(A=>g.add(new Nt(1.01,.025,.02),{m:I(0,A,.515),color:S(.78,.62,.3),tip:()=>0})),g.add(new Nt(.7,.16,.01),{m:I(0,.1,.516),color:S(.12,.1,.08),tip:()=>0}),g.geometry()})(),re=new In({vertexColors:!0});re.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let St=null,D=[],f=[],X="",$=new Me,K=new Fe,ct=new N,dt=new N,et=[],q=g=>{let w=2166136261;for(let A=0;A<g.length;A++)w=Math.imul(w^g.charCodeAt(A),16777619);return(w>>>0)%1e4/1e4},bt=(g,w)=>window.MEOW_I18N?window.MEOW_I18N.t(g):w,Ot=g=>{let w=document.createElement("canvas");w.width=256,w.height=64;let A=w.getContext("2d"),O=A.createLinearGradient(0,0,0,64);O.addColorStop(0,"#d9b968"),O.addColorStop(1,"#8c6a2c"),A.fillStyle=O,A.fillRect(0,0,256,64),A.strokeStyle="rgba(60,40,10,.8)",A.lineWidth=4,A.strokeRect(4,4,248,56),A.fillStyle="#2a1c08",A.font='600 30px "Josefin Sans", system-ui, sans-serif',A.textAlign="center",A.textBaseline="middle";let it=g;for(;A.measureText(it).width>228&&it.length>2;)it=it.slice(0,-2)+"\u2026";A.fillText(it,128,34);let x=new Ai(w);return x.colorSpace=Hn,x.anisotropy=4,x},Ut=new Qe,kt=(g,w,A)=>{let O=Math.floor(A*5),it=g.rowY0+w*g.rowH,x=(H,V,Et)=>Ee(g,H,V,Et),b=(H,V,Et,Lt,_t=1,Ht=1,Wt=1)=>{let de=x(V,Et,.02);Ut.add(H,{m:new Me().compose(de,new Fe().setFromAxisAngle(new N(0,1,0),g.ry),new N(_t,Ht,Wt)),color:Lt})},B=(A*1.3%1-.5)*1;O===0?(b(new Xt(.06,.09,.26,12),B,it+.13,S(.55,.6,.58)),b(new Ze(.07,10,8),B+.3,it+.07,S(.7,.55,.35))):O===1?(b(new Nt(.3,.16,.22),B,it+.08,y(.5)),b(new Nt(.3,.02,.22),B,it+.165,S(.62,.5,.28,"metal"))):O===2?(b(new Ze(.06,10,8),B,it+.07,S(.25,.24,.24),1,1.2,.9),b(new Ze(.04,10,8),B,it+.17,S(.25,.24,.24)),[-1,1].forEach(H=>b(new vn(.015,.035,4),B+H*.022,it+.215,S(.25,.24,.24)))):O===3?(b(new Xt(.05,.05,.02,12),B,it+.01,S(.62,.5,.28,"metal")),b(new Xt(.02,.02,.14,8),B,it+.09,S(.88,.84,.74,"paper"))):(b(new Nt(.02,.24,.18),B,it+.12,y(.4)),b(new $e(.14,.18),B+.012,it+.12,S(.75,.72,.62)))},Gt=null,oe=()=>{St&&(i.remove(St),St.dispose()),D.forEach(b=>{i.remove(b),b.material.map.dispose(),b.material.dispose()}),Gt&&(i.remove(Gt),Gt.geometry.dispose()),D=[],et.length=0;let g=30,w=[],A=new Map;f.forEach(b=>{let B=(b.tag||"").trim();A.has(B)||(A.set(B,[]),w.push(B)),A.get(B).push(b)});let O=[];w.forEach(b=>{let B=A.get(b);for(let H=0;H<B.length;H+=g)O.push({tag:b,list:B.slice(H,H+g),first:H===0})});let it=[];jt.forEach(b=>mt[b].pref.forEach(B=>it.push([mt[b],B])));let x=new Set;O.forEach((b,B)=>{let H=it[B];if(!H)return;let[V,Et]=H;x.add(V.x+","+V.z+","+Et);let Lt=V.rowY0+Et*V.rowH,_t=b.list.map(te=>({t:.035+q(te.url)*.04,h:.24+q(te.url+"h")*.11,d:.17+q(te.title||"x")*.05})),Ht=_t.reduce((te,Se)=>te+Se.t+.004,0),Wt=V.w-.16,de=Ht>Wt?Wt/Ht:1,fe=-V.w/2+.08;if(b.list.forEach((te,Se)=>{let ne=_t[Se],Ce=ne.t*de,me=Ee(V,fe+Ce/2,Lt+ne.h/2+.002,-xn/2+.03+ne.d/2),ln=new Fe().setFromAxisAngle(new N(0,1,0),V.ry);et.push({link:te,tag:b.tag,home:{p:me,q:ln,s:new N(Ce,ne.h,ne.d)},cur:{p:me.clone(),q:ln.clone()},state:"shelf",from:null,t0:0,color:Zd[Math.floor(q(te.url+"c")*Zd.length)]}),fe+=Ce+.004}),b.first){let te=new Un({map:Ot("#"+(b.tag||bt("untagged","no tag"))),toneMapped:!1}),Se=new ve(new $e(.34,.085),te);Se.position.copy(Ee(V,0,Lt+.006,xn/2+.006)),Se.quaternion.setFromAxisAngle(new N(0,1,0),V.ry),Se.position.y-=.035,Se.userData.tag=b.tag,i.add(Se),D.push(Se)}}),Ut.clear(),it.forEach(([b,B],H)=>{if(x.has(b.x+","+b.z+","+B))return;let V=q("o"+H);V<.55&&kt(b,B,V/.55)}),Gt=new ve(Ut.geometry(),s),i.add(Gt),St=new gi(G,re,Math.max(1,et.length)),St.count=et.length,St.frustumCulled=!1,et.forEach((b,B)=>{$.compose(b.home.p,b.home.q,b.home.s),St.setMatrixAt(B,$),St.setColorAt(B,new he(b.color))}),St.instanceColor&&(St.instanceColor.needsUpdate=!0),i.add(St)},Tt={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},Y=document.createElement("div");Y.className="book-tip",document.body.appendChild(Y);let Rt=document.createElement("div");Rt.className="book-page",Rt.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(Rt);let xt=Rt.querySelector("img"),Vt=Rt.querySelector(".bp-wait"),Yt=g=>{try{return new URL(g).hostname.replace(/^www\./,"")}catch{return g}},Ct=(g,w)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(g)+"?w=800&h=600"+(w?"&r="+w:""),Zt=0,ue=g=>{clearTimeout(Zt),xt.classList.remove("ready"),Vt.textContent=bt("loadingPreview","\u2026");let w=0,A=()=>{xt.onload=()=>{xt.classList.add("ready"),Vt.textContent="",xt.naturalWidth<600&&w<3&&(w++,Zt=setTimeout(A,2500))},xt.onerror=()=>{Vt.textContent=bt("noPreview","No preview")},xt.src=Ct(g,w)};A()},pe=(()=>{let g=new Cn,w=new In({color:7220522}),A=new Un({color:15722192}),O=new Cn,it=new Cn,x=new Nt(1,1.32,.03).translate(-.5,0,0),b=new Nt(1,1.32,.03).translate(.5,0,0),B=new Nt(.96,1.26,.06).translate(-.49,0,.045),H=new Nt(.96,1.26,.06).translate(.49,0,.045);return O.add(new ve(x,w),new ve(B,A)),it.add(new ve(b,w),new ve(H,A)),g.add(O,it),g.visible=!1,i.parent.add(g),{g,left:O,right:it,leather:w}})(),Ne=.16,yn=(g,w,A)=>{let O=et[g];w.copy(O.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(A).multiply(O.cur.q)},at=(g,w,A,O=0)=>{w.set(0,O,-g).applyQuaternion(e.quaternion).add(e.position),A.copy(e.quaternion)},Ke=g=>g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2,je=(g,w)=>{Tt.open>=0&&fi(w),Tt.open=g,Tt.openT0=w,Tt.closing=!1;let A=et[g];A.state="out",pe.leather.color.set(A.color),Rt.querySelector(".bp-tag").textContent="#"+(A.tag||bt("untagged","no tag")),Rt.querySelector(".bp-title").textContent=A.link.title,Rt.querySelector(".bp-host").textContent=Yt(A.link.url),Rt.querySelector(".bp-go").textContent=bt("bookGo","Click the book to visit \u2197"),ue(A.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let O=new N,it=new Fe;yn(g,O,it),Tt.openFrom={p:O,q:it}},fi=g=>{Tt.open<0||Tt.closing||(Tt.closing=!0,Tt.openT0=g,Rt.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},En=(g,w)=>{if(Tt.ring===g){Zn(w);return}Tt.ring!==null&&Zn(w),Tt.ring=g,Tt.ringT0=w;let A=0;et.forEach((O,it)=>{O.tag===g&&(O.ringI=A++,O.state!=="out"&&(O.state="toRing",O.fromSc=O.sc||1,O.from={p:O.cur.p.clone(),q:O.cur.q.clone()},O.t0=w+O.ringI*45))}),Tt.ringN=A,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},Zn=g=>{Tt.ring!==null&&(et.forEach(w=>{w.tag===Tt.ring&&(w.state==="ring"||w.state==="toRing")&&(w.state="toShelf",w.fromSc=w.sc||1,w.from={p:w.cur.p.clone(),q:w.cur.q.clone()},w.t0=g+(w.ringI||0)*30)}),Tt.ring=null)},sn=new Fe,_n=new Fe,ee=new N,bn=new N,pi=(g,w,A,O)=>{let it=Math.max(1,Tt.ringN),x=Math.max(15,it*1.3),b=g.ringI/it*Math.PI*2+w*.12;ee.set(e.position.x+Math.cos(b)*x,e.position.y-.4+Math.sin(w*1.3+g.ringI)*.25,e.position.z+Math.sin(b)*x);let B=Math.atan2(e.position.x-ee.x,e.position.z-ee.z);return _n.setFromEuler(new Sn(0,B-Math.PI/2,Math.sin(w*.9+g.ringI)*.08)),bn.copy(ee),i.worldToLocal(bn),A.copy(bn),i.getWorldQuaternion(sn).invert(),O.copy(sn).multiply(_n),A},os=2.2,si=(g,w)=>{if(!St)return;let A=!1,O=new N,it=new Fe;if(et.forEach((x,b)=>{if(x.state==="shelf")return;let B=1;if(x.state==="out"){dt.set(0,0,0),$.compose(x.cur.p,x.cur.q,dt),St.setMatrixAt(b,$),A=!0;return}if(x.state==="ring")pi(x,g,x.cur.p,x.cur.q),B=os;else{let H=Math.max(0,Math.min(1,(w-x.t0)/900)),V=Ke(H),Et=x.state==="toRing"?pi(x,g,O,it):x.home.p,Lt=x.state==="toRing"?it:x.home.q;x.cur.p.copy(x.from.p).lerp(Et,V),x.cur.p.y+=Math.sin(Math.PI*V)*.4*(x.state==="toRing"?1:.6),x.cur.q.copy(x.from.q).slerp(Lt,V);let _t=x.fromSc||1;B=_t+((x.state==="toRing"?os:1)-_t)*V,H>=1&&(x.state==="toRing"?x.state="ring":(x.state="shelf",x.cur.p.copy(x.home.p),x.cur.q.copy(x.home.q),B=1))}dt.copy(x.home.s).multiplyScalar(B),$.compose(x.cur.p,x.cur.q,dt),St.setMatrixAt(b,$),A=!0,x.sc=B}),A&&(St.instanceMatrix.needsUpdate=!0,St.boundingSphere=null),Tt.open>=0){let x=et[Tt.open],b=Math.min(1,(w-Tt.openT0)/(Tt.closing?700:1100)),B=new N,H=new Fe;at(4.2,B,H,-.15);let V,Et;Tt.closing?(V=1-Ke(Math.max(0,(b-.35)/.65)),Et=1-Ke(Math.min(1,b/.45))):(V=Ke(Math.min(1,b/.6)),Et=Ke(Math.max(0,(b-.45)/.55)));let Lt=Tt.openFrom;pe.g.position.copy(Lt.p).lerp(B,V),pe.g.quaternion.copy(Lt.q).slerp(H,V);let _t=(x.sc||1)*Xi,Ht=new N(x.home.s.z*_t,x.home.s.y*_t/1.32,x.home.s.z*_t),Wt=new N(1.6,1.6,1.6);pe.g.scale.copy(Ht).lerp(Wt,V),pe.left.rotation.y=Math.PI*(1-Et)*.999,pe.right.rotation.y=0,pe.g.visible=!0,!Tt.closing&&b>=1?(k(pe.g,Rt),Rt.classList.add("show")):Tt.closing||Rt.classList.remove("show"),Tt.closing&&b>=1&&(pe.g.visible=!1,x.state=Tt.ring===x.tag?"toRing":"toShelf",x.from={p:new N,q:new Fe},x.from.p.copy(pe.g.position),i.worldToLocal(x.from.p),i.getWorldQuaternion(sn).invert(),x.from.q.copy(sn).multiply(pe.g.quaternion),x.t0=w,x.fromSc=1,Tt.open=-1,Tt.closing=!1)}},Xi=4.5,P=new N,k=(g,w)=>{let A=1e9,O=1e9,it=-1e9,x=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([b,B])=>{P.set(b,B,.08).applyMatrix4(g.matrixWorld).project(e);let H=(P.x*.5+.5)*innerWidth,V=(-P.y*.5+.5)*innerHeight;A=Math.min(A,H),it=Math.max(it,H),O=Math.min(O,V),x=Math.max(x,V)}),w.style.left=A+"px",w.style.top=O+"px",w.style.width=it-A+"px",w.style.height=x-O+"px"},tt=g=>{if(!St)return null;if(Tt.open>=0&&pe.g.visible&&g.intersectObject(pe.g,!0)[0])return{type:"open"};let w=g.intersectObject(St,!1)[0],A=D.length?g.intersectObjects(D,!1)[0]:null;return A&&(!w||A.distance<w.distance)&&A.distance<40?{type:"label",tag:A.object.userData.tag}:w&&w.distance<45&&et[w.instanceId]&&et[w.instanceId].state!=="out"?{type:"book",i:w.instanceId}:null};return{sync(){let g=window.MEOW_LINKS_DATA||[],w=g.map(A=>A.url+"|"+A.tag+"|"+A.title).join(`
`);w!==X&&(X=w,f=g.slice(),Tt.open=-1,Tt.ring=null,pe.g.visible=!1,Rt.classList.remove("show"),oe())},update:si,get busy(){return Tt.open>=0||Tt.ring!==null},hover(g,w){var it,x;let A=w?tt(g):null,O=A?A.type+((x=(it=A.i)!=null?it:A.tag)!=null?x:""):"";if(O===Tt.hoverKey)return!!A;if(Tt.hoverKey=O,!A||A.type==="open")return Y.classList.remove("show"),!!A;if(A.type==="book"){let b=et[A.i];Y.innerHTML="";let B=document.createElement("strong");B.textContent=b.link.title;let H=document.createElement("small");H.textContent="#"+(b.tag||bt("untagged","no tag"))+" \xB7 "+Yt(b.link.url),Y.append(B,H)}else{let b=et.filter(V=>V.tag===A.tag).length;Y.innerHTML="";let B=document.createElement("strong");B.textContent="#"+(A.tag||bt("untagged","no tag"))+"  \xB7  "+b;let H=document.createElement("small");H.textContent=Tt.ring===A.tag?bt("tagBack","Click: put them back"):bt("tagRing","Click: books fly around you"),Y.append(B,H)}return Y.classList.add("show"),!0},click(g,w){let A=tt(g);if(Tt.open>=0&&!Tt.closing){if(A&&A.type==="open"){let O=et[Tt.open];return window.open(O.link.url,"_blank","noopener"),!0}if(fi(w),!A||A.type==="open")return!0}return A?A.type==="label"?(En(A.tag,w),!0):A.type==="book"?(je(A.i,w),!0):!1:Tt.ring!==null?(Zn(w),!0):!1},back(g){return Tt.open>=0&&!Tt.closing?(fi(g),!0):Tt.ring!==null?(Zn(g),!0):!1},_open(g){je(g,performance.now())},_ring(g){En(g,performance.now())},get _n(){return et.length},reset(g){Tt.open>=0&&fi(g),Tt.ring!==null&&Zn(g),Y.classList.remove("show"),Tt.hoverKey=""},lampLight:It}}var ze={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function nf({scene:i,shared:t,U:e,camera:n}){let s=ze.S,r=6.4,o=5,a=.17,c=.3145,l=8,d=2.62,m=1.9,h=-1.95,u=-.75,_=2.05,T=o/2+2.6,y=11,p={x:1.7,z:-2},M=new Qe,L=new Qe,E=new Qe,S=new Qe,C=(P,k,tt)=>un(P,k,tt),U=(P,k=1)=>an("wood",tt=>{let g=P*(.88+C(tt.x*3,tt.y*9,tt.z*3)*.24)*k,w=C(tt.x*.7,tt.y*2,tt.z*.7);return[g*(1.02+w*.06),g*(.79+w*.03),g*(.56-w*.04)]}),v=P=>an("log",(k,tt)=>{if(P==="x"?Math.abs(tt.x)>.9:Math.abs(tt.z)>.9){let O=P==="x"?Math.hypot(k.y%1,k.z):Math.hypot(k.y%1,k.x),it=.68+Math.sin(O*90)*.04;return[it*1.02,it*.86,it*.66]}let w=.5+C(k.x*2.5,k.y*8,k.z*2.5)*.2+Math.sin((P==="x"?k.x:k.z)*23)*.015,A=C(Math.floor(k.y/.31)*3.7,P==="x"?1:2,.5);return A<.25?[w*.95,w*.82,w*.68]:A>.75?[w*1.08,w*.8,w*.52]:[w,w*.79,w*.58]}),F=an("stone",P=>{let k=.45+C(P.x*5,P.y*5,P.z*5)*.25,tt=C(P.x*2,P.y*2,P.z*2);return[k*(.96+tt*.08),k*.95,k*(.9+(1-tt)*.08)]}),W=(P,k,tt,g)=>g?an(g,()=>[P,k,tt]):()=>[P,k,tt],Z=(P,k,tt)=>an("metal",()=>[P,k,tt]),J=P=>an("fabric",P),j=(P,k,tt)=>new Nt(P,k,tt),z=Math.PI*2,Q=(P,k)=>tt=>(P==="z"?(tt.z-k)*Math.sign(k):(tt.x-k)*Math.sign(k))>0?1:0,rt={front:[[h,u,0,_],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},st=(P,k,tt,g)=>{let w=[[P,k]];return g.forEach(([A,O,it,x])=>{if(!(it<tt+a-.02&&x>tt-a+.02))return;let b=[];w.forEach(([B,H])=>{O<=B||A>=H?b.push([B,H]):(A>B&&b.push([B,A]),O<H&&b.push([O,H]))}),w=b}),w};for(let P=0;P<l;P++){let k=a+P*c,tt=a+c/2+P*c;[["front",o/2],["back",-o/2]].forEach(([g,w])=>{st(-r/2-.3,r/2+.3,k,rt[g]).forEach(([A,O])=>{M.add(new Xt(a,a*.97,O-A,16,1),{m:I((A+O)/2,k,w,0,0,Math.PI/2),color:v("x"),tip:Q("z",w)})})}),tt+a<d+.12&&[["left",-r/2],["right",r/2]].forEach(([g,w])=>{st(-o/2-.3,o/2+.3,tt,rt[g]).forEach(([A,O])=>{M.add(new Xt(a,a*.97,O-A,16,1),{m:I(w,tt,(A+O)/2,Math.PI/2,0,0),color:v("z"),tip:Q("x",w)})})})}for(let P=0;P<4;P++){let k=P<2?r:o,tt=P<2?P?-o/2:o/2:P===2?-r/2:r/2;for(let g=-k/2-.2;g<k/2+.2;g+=.42){if(P===0&&g>h-.2&&g<u)continue;let w=.38+C(g,P,0)*.08,A=.16+C(g,P,3)*.08,O=P<2?I(g+.2,-.02+A/2-.06,tt,0,(C(g,P,5)-.5)*.2,0,w,A,.42):I(tt,-.02+A/2-.06,g+.2,0,(C(g,P,5)-.5)*.2,0,.42,A,w);M.add(new Nt(1,1,1),{m:O,color:F,tip:()=>1})}}M.add(new Nt(u-h+.1,.08,.42),{m:I((h+u)/2,.06,o/2),color:U(.5),tip:()=>0}),[-1,1].forEach(P=>{let k=P*o/2,tt=[-r/2-.05,d,k],g=[r/2+.05,d,k],w=[0,d+m,k],A=an("wood",O=>{let it=.48+C(O.x*9,0,P)*.1,x=Math.abs((O.x+10)%.24-.12)<.012?.75:1;return[it*x,it*.8*x,it*.6*x]});M.tris(P>0?[tt,g,w]:[g,tt,w],A,()=>0),L.tris(P>0?[g,tt,w]:[tt,g,w],O=>{let it=A(O);return[it[0]*.85,it[1]*.85,it[2]*.85]})});let pt=r/2+.6,ut=m+.45,ft=Math.atan2(ut,pt),vt=Math.hypot(pt,ut);[-1,1].forEach(P=>{M.add(new Nt(vt,.1,o+1.3,3,1,6),{m:I(P*pt/2,d+m-ut/2+.02,0,0,0,-P*ft),color:U(.36),tip:(tt,g)=>g.y>0?1:0});let k=9;for(let tt=0;tt<k;tt++){let g=tt/k,w=vt/k+.12,A=P*(pt*(g+.5/k)),O=d+m-ut*(g+.5/k)+.1;M.add(new Nt(w,.045,o+1.3,1,1,10),{m:I(A,O,0,0,0,-P*(ft+.05)),color:an("shingle",it=>{let x=Math.floor((it.z+5)*3.3),b=.3+C(x,tt,P)*.12+tt%2*.02;return[b*1.02,b*.9,b*.8]}),tip:()=>1})}M.add(new Nt(.05,.22,o+1.35),{m:I(P*(pt+.02),d+m-ut-.02,0),color:U(.45),tip:()=>0}),[-1,1].forEach(tt=>M.add(new Nt(vt+.1,.22,.05),{m:I(P*pt/2,d+m-ut/2+.02,tt*(o/2+.66),0,0,-P*ft),color:U(.45),tip:()=>0}))}),M.add(new Nt(.34,.16,o+1.4),{m:I(0,d+m+.12,0,0,0,Math.PI/4),color:U(.32),tip:()=>1});for(let P=0;P<8;P++)M.add(new Nt(.86+P%2*.04,.3,.86+(P+1)%2*.04),{m:I(p.x,d+.15+P*.3,p.z,0,(C(P,1,1)-.5)*.08,0),color:F,tip:()=>1});M.add(new Nt(1.05,.08,1.05),{m:I(p.x,d+.15+8*.3-.06,p.z),color:F,tip:()=>1});let se=new N(p.x,d+.2+8*.3,p.z),$t=(()=>{let P=new $e(.32,1.15,16,12),k=P.attributes.position;for(let tt=0;tt<k.count;tt++){let g=k.getX(tt),w=k.getY(tt),A=Math.exp(-((w+.12)**2)*18);k.setXYZ(tt,g*(1-A*.45)+A*.05,w,Math.sin((g+.16)*58)*(.02+A*.015)+.02)}return P.computeVertexNormals(),P})(),ke=(P,k,tt)=>{let g=tt==="front"?0:Math.PI/2,w=(B,H,V)=>tt==="front"?[P+B,k+H,o/2+V]:[r/2+V,k+H,P-B],A=(B,H,V,Et,Lt,_t,Ht,Wt,de=0)=>{let[fe,te,Se]=w(Lt,_t,Ht);B.add(new Nt(H,V,Et),{m:I(fe,te,Se,0,g,0),color:Wt,tip:()=>de})},O=U(.55);A(M,1.32,.09,.4,0,.53,0,O),A(M,1.32,.09,.4,0,-.53,0,O),A(M,.09,1.1,.4,-.62,0,0,O),A(M,.09,1.1,.4,.62,0,0,O),A(M,.05,1,.06,0,0,0,O),A(M,1.2,.05,.06,0,0,0,O),A(M,1.45,.06,.3,0,-.6,.2,O,1),[-1,1].forEach(B=>A(M,.55,1.05,.04,B*.98,0,.27,H=>{let V=.42+C(H.x*9,H.y*2,H.z*9)*.1,Et=Math.abs((H.y+5)%.14-.07)<.012?.75:1;return[V*.9*Et,V*.95*Et,V*.92*Et]}));let[it,x,b]=w(0,0,0);S.add(new $e(1.2,1),{m:I(it,x,b,0,g,0),color:W(1,1,1)}),S.add(new $e(1.2,1),{m:I(it,x,b,0,g+Math.PI,0),color:W(1,1,1)}),[-1,1].forEach(B=>{let[H,V,Et]=w(B*.78,.02,-.24),Lt=J(_t=>{let Ht=.8+C(_t.x*30,_t.y*4,_t.z*30)*.06;return[Ht,Ht*.95,Ht*.85]});[!1,!0].forEach(_t=>L.add($t,{m:I(H,V,Et,0,g+Math.PI,0),color:Lt,flip:_t}))}),A(L,1.9,.03,.03,0,.62,-.24,W(.3,.25,.2))};ke(1.35,1.45,"front"),ke(.3,1.45,"right"),[[h-.05,.08],[u+.05,.08]].forEach(([P,k])=>M.add(new Nt(k,_,.42),{m:I(P,_/2,o/2),color:U(.55),tip:()=>0})),M.add(new Nt(u-h+.3,.12,.44),{m:I((h+u)/2,_+.05,o/2),color:U(.55),tip:()=>1});for(let P=0;P<11;P++){let k=-3.25+P*.6+.3;M.add(new Nt(.57,.08,2.2),{m:I(k,.16,o/2+1.25,0,(C(P,2,2)-.5)*.01,0),color:U(.52+P%3*.04),tip:()=>1})}M.add(new Nt(6.65,.14,.08),{m:I(.05,.1,o/2+2.36),color:U(.45),tip:()=>0}),M.add(new Nt(1.4,.07,.3),{m:I((h+u)/2,.05,o/2+2.55),color:U(.5),tip:()=>1});let Jt=-3.4,ge=.6;M.add(new Nt(ge-Jt,.08,2.55,4,1,4),{m:I((Jt+ge)/2,2.32,o/2+1.3,-.12,0,0),color:(P,k)=>{let tt=(k.y<0?.62:.32)+C(P.x*3,0,P.z*9)*.1;return k.y<0?[tt,tt*.8,tt*.6]:[tt,tt*.93,tt*.88]},tip:(P,k)=>k.y>0?1:0}),[Jt+.25,ge-.25].forEach(P=>{M.add(new Nt(.14,2.2,.14),{m:I(P,1.1,o/2+2.2),color:U(.5),tip:()=>0}),M.add(new Nt(.08,.7,.08),{m:I(P,1.95,o/2+1.95,.75,0,0),color:U(.5),tip:()=>0})}),M.add(new Nt(ge-Jt,.14,.14),{m:I((Jt+ge)/2,2.12,o/2+2.2),color:U(.45),tip:()=>1}),M.add(new Nt(1.4,.06,.4),{m:I(1.45,.47,o/2+.48),color:U(.55),tip:()=>1}),[[.85],[2.05]].forEach(([P])=>M.add(new Nt(.06,.3,.36),{m:I(P,.32,o/2+.48),color:U(.45),tip:()=>0})),M.add(new Nt(.04,.04,.3),{m:I(-.5,2,o/2+.3),color:Z(.15,.15,.15),tip:()=>0}),M.add(new Nt(.2,.04,.2),{m:I(-.5,1.98,o/2+.42),color:Z(.15,.15,.15),tip:()=>1}),E.add(new Nt(.15,.22,.15),{m:I(-.5,1.84,o/2+.42),color:W(1,1,1)}),M.add(new Xt(.32,.29,.85,14),{m:I(r/2+.55,.42,o/2-.45),color:P=>{let k=.45+Math.sin(Math.atan2(P.z,P.x)*14)*.03;return[k,k*.8,k*.6]},tip:(P,k)=>k.y>.5?1:0}),[.12,.72].forEach(P=>M.add(new Xt(.33,.33,.04,14,1,!0),{m:I(r/2+.55,P,o/2-.45),color:Z(.2,.2,.21),tip:()=>0}));for(let P=0;P<4;P++)for(let k=0;k<9-P;k++){let tt=-1.6+k*.19+P*.09,g=.11+P*.18;M.add(new Xt(.09+C(k,P,1)*.03,.1,.7,7),{m:I(-r/2-.58,g,tt,0,0,Math.PI/2),color:(w,A)=>Math.abs(A.x)>.9?[.74,.6,.42]:U(.45)(w),tip:()=>1})}M.add(new Xt(.3,.34,.5,10),{m:I(-r/2-1.4,.25,1.4),color:(P,k)=>k.y>.5?[.7,.58,.42]:U(.45)(P),tip:(P,k)=>k.y>.5?1:0}),M.add(new Xt(.025,.03,.75,6),{m:I(-r/2-1.3,.75,1.4,0,0,-.55),color:U(.62),tip:()=>0}),M.add(new Nt(.2,.12,.03),{m:I(-r/2-1.48,.52,1.4,0,0,-.55),color:Z(.35,.36,.38),tip:()=>0});for(let P=0;P<y/.5;P++)M.add(new Nt(1.8,.08,.44),{m:I(-1.3+(P*7%5-2)*.01,.2-P*.012,T+P*.5,0,(P*3%5-2)*.012,0),color:U(.5+P*11%9/60),tip:()=>1});for(let P=0;P<=y/2.2;P++)[-1,1].forEach(k=>{M.add(new Xt(.09,.09,2.6,6),{m:I(-1.3+k*.85,-1.1-P*.03,T+P*2.2),color:U(.36),tip:()=>0})});[-1,1].forEach(P=>{M.add(new Xt(.06,.06,1.3,6),{m:I(-1.3+P*.85,.85,T+y-.4),color:U(.36),tip:()=>0}),E.add(new Nt(.16,.2,.16),{m:I(-1.3+P*.85,1.6,T+y-.4),color:W(1,1,1)})});for(let P=0;P<l-1;P++){let k=a+P*c+c/2;[["front",o/2],["back",-o/2]].forEach(([tt,g])=>st(-r/2+.05,r/2-.05,k,rt[tt]).forEach(([w,A])=>{M.add(new Nt(A-w,.035,.02),{m:I((w+A)/2,k,g+Math.sign(g)*(a-.03)),color:O=>{let it=.72+C(O.x*9,O.y*30,0)*.12;return[it,it*.95,it*.86]},tip:()=>1})})),[["left",-r/2],["right",r/2]].forEach(([tt,g])=>st(-o/2+.05,o/2-.05,k+c/2,rt[tt]).forEach(([w,A])=>{M.add(new Nt(.02,.035,A-w),{m:I(g+Math.sign(g)*(a-.03),k+c/2,(w+A)/2),color:O=>{let it=.72+C(0,O.y*30,O.z*9)*.12;return[it,it*.95,it*.86]},tip:()=>1})}))}[-1,1].forEach(P=>M.add(new Xt(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:I(P*(pt+.06),d+m-ut-.14,0,Math.PI/2,0,P>0?Math.PI:0),color:Z(.4,.4,.42),tip:()=>0})),M.add(new Xt(.035,.035,d+m-ut-.2,8),{m:I(r/2+.6,(d+m-ut)/2+.4,o/2-.45-.05),color:Z(.4,.4,.42),tip:()=>0}),M.add(new Xt(.015,.02,.7,6),{m:I(0,d+m+.5,-1.4),color:Z(.18,.18,.19),tip:()=>0}),M.add(new Nt(.02,.02,.5),{m:I(0,d+m+.62,-1.4),color:Z(.18,.18,.19),tip:()=>0}),M.add(new vn(.05,.1,4),{m:I(0,d+m+.62,-1.15,Math.PI/2,0,0),color:Z(.18,.18,.19),tip:()=>0});{let P=(k,tt,g,w,A=1,O=1,it=1,x=0)=>M.add(k,{m:I(0,d+m+.88+g,-1.4+w,0,Math.PI/2,x,A,O,it),color:Z(.16,.16,.17),tip:()=>0});P(new Nt(.28,.13,.02),0,0,0),P(new Nt(.11,.1,.02),0,.11,-.13),[-1,1].forEach(k=>P(new vn(.03,.06,3),0,.19,-.13+k*.035)),P(new Nt(.03,.2,.02),0,.12,.16,1,1,1,.4)}let mt=(P,k,tt)=>{let g=new Me().compose(new N(P,.82,k),new Fe().setFromAxisAngle(new N(0,1,0),tt),new N(1,1,1));M.add(new Nt(1.3,.2,.24),{m:g.clone().multiply(I(0,0,.12)),color:U(.45),tip:()=>0}),M.add(new Nt(1.24,.02,.2),{m:g.clone().multiply(I(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let w=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let A=0;A<9;A++){let O=-.55+A*.14,it=.1+C(A,P,1)*.1;M.add(new Xt(.006,.006,it,4),{m:g.clone().multiply(I(O,.1+it/2,.12+(A%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),M.add(new Ze(.03,6,5),{m:g.clone().multiply(I(O,.1+it,.12+(A%2-.5)*.08)),color:()=>w[A%4],tip:()=>0})}};mt(1.35,o/2+.2,0),mt(r/2+.2,-.3,Math.PI/2),M.add(new Nt(1,.015,.6),{m:I((h+u)/2,.205,o/2+.55),color:J(P=>Math.floor((P.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),M.add(new Xt(.015,.015,1.2,6),{m:I(h-.3,.8,o/2+.25,.08,0,.12),color:U(.6),tip:()=>0}),M.add(new vn(.12,.3,8),{m:I(h-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([P,k],tt)=>{M.add(new Nt(.48,.32,.4),{m:I(P,.36+k,o/2+1.9,0,tt*.3,0),color:g=>{let w=.55+(Math.abs((g.y+9)*9%1-.5)<.1?-.1:0)+C(g.x*9,g.y,g.z*9)*.08;return[w,w*.84,w*.62]},tip:(g,w)=>w.y>.5?1:0})}),M.add(new Xt(.05,.06,1.7,8),{m:I(ge+.6,.85,o/2+2.9),color:U(.4),tip:()=>0}),M.add(new Nt(.2,.05,.2),{m:I(ge+.6,1.72,o/2+2.9),color:Z(.15,.15,.15),tip:()=>1}),E.add(new Nt(.15,.2,.15),{m:I(ge+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),M.add(new vn(.15,.12,4),{m:I(ge+.6,2,o/2+2.9,0,Math.PI/4,0),color:Z(.15,.15,.15),tip:()=>1});for(let P=0;P<6;P++){let k=(h+u)/2-1.6-P*.65+Math.sin(P*1.7)*.2,tt=o/2+2.9+P*.35;M.add(new Xt(.28+C(P,3,3)*.1,.3,.06,9),{m:I(k,0,tt,0,P,0,1,1,.8),color:F,tip:()=>1})}let gt=r/2-a,Pt=o/2-a;for(let P=-gt,k=0;P<gt-.01;P+=.2,k++){let tt=an("wood",A=>{let O=(.5+k%4*.025)*(.92+C(A.x*4,0,A.z*1.2)*.16)*(Math.abs((A.z+9+k*.37)%1.6-.8)<.01?.7:1);return[O,O*.8,O*.6]}),g=P+.1;(g>ce.x0&&g<ce.x1?[[-Pt-.05,ce.bottom],[ce.top,Pt+.05]]:[[-Pt-.05,Pt+.05]]).forEach(([A,O])=>{O-A>.02&&L.add(new Nt(.195,.06,O-A),{m:I(g,.09,(A+O)/2),color:tt})})}for(let P=ce.bottom;P<=1.5;P+=.55)L.add(new Nt(.05,.9,.05),{m:I(ce.x0-.02,.57,P),color:U(.5)});L.add(new Nt(.07,.06,1.5-ce.bottom+.05),{m:I(ce.x0-.02,1.04,(ce.bottom+1.5)/2),color:U(.55)}),L.add(new Nt(ce.x1-ce.x0+.05,.06,.07),{m:I((ce.x0+ce.x1)/2,1.04,ce.bottom-.02),color:U(.55)}),[ce.x0+.5,ce.x1-.03].forEach(P=>L.add(new Nt(.05,.9,.05),{m:I(P,.57,ce.bottom-.02),color:U(.5)})),L.add(new Nt(.03,.16,.36),{m:I(ce.x0-.05,.86,1.5),color:U(.62)}),L.add(new Xt(.17,.17,.04,24),{m:I(-.4,1.8,Pt-.03,Math.PI/2,0,0),color:U(.45)}),L.add(new Xt(.14,.14,.01,24),{m:I(-.4,1.8,Pt-.055,Math.PI/2,0,0),color:an("paper",()=>[.9,.87,.8])}),L.add(new Nt(.008,.1,.006),{m:I(-.4,1.83,Pt-.065,0,0,.5),color:()=>[.1,.1,.1]}),L.add(new Nt(.008,.12,.006),{m:I(-.4,1.84,Pt-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),L.add(new Xt(.015,.015,1.5,6),{m:I(p.x,1.62,-Pt+.62,0,0,Math.PI/2),color:Z(.2,.2,.2)}),[-.5,-.1,.35].forEach((P,k)=>{L.add(new Xt(.1-k*.015,.08-k*.012,.13,12),{m:I(p.x+P,1.42,-Pt+.64),color:Z(.62,.36,.22)}),L.add(new Xt(.008,.008,.14,4),{m:I(p.x+P,1.55,-Pt+.64),color:Z(.2,.2,.2)})}),L.add(new Ze(.12,12,8),{m:I(p.x-.7,.31,-Pt+.75,0,0,0,1,.8,1),color:Z(.2,.2,.22)}),L.add(new Xt(.015,.03,.12,6),{m:I(p.x-.58,.36,-Pt+.75,0,0,-.9),color:Z(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([P,k])=>L.add(new Xt(.025,.025,k,8),{m:I(p.x+P,1.52+k/2,-Pt+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([P,k])=>L.add(new Nt(.05,.22,.16),{m:I(p.x+P,1.63,-Pt+.4),color:()=>k})),[-1.1,1.1].forEach(P=>L.add(new Nt(r-.2,.2,.2),{m:I(0,d-.02,P),color:U(.42)})),L.add(new Nt(.2,.22,o+.2),{m:I(0,d+m-.2,0),color:U(.42)}),[-1,1].forEach(P=>[-1.8,0,1.8].forEach(k=>L.add(new Nt(vt-.6,.14,.1),{m:I(P*(pt-.3)/2,d+m-ut*.47-.1,k,0,0,-P*ft),color:U(.4)})));let jt=p;L.add(new Nt(1.95,.12,1),{m:I(jt.x,.17,-Pt+.5),color:F}),[-1,1].forEach(P=>L.add(new Nt(.36,1.25,.7),{m:I(jt.x+P*.76,.85,-Pt+.35),color:F})),L.add(new Nt(1.2,1.25,.2),{m:I(jt.x,.85,-Pt+.1),color:P=>{let k=F(P);return[k[0]*.45,k[1]*.42,k[2]*.4]}}),L.add(new Nt(2,.16,.42),{m:I(jt.x,1.44,-Pt+.4),color:U(.42)});for(let P=0;P<4;P++)L.add(new Nt(1.3-P*.04,.3,.55),{m:I(jt.x,1.67+P*.3,-Pt+.27),color:F});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([P,k])=>L.add(new Xt(.07,.08,.7,7),{m:I(jt.x+P*.4,.3,-Pt+.42,0,k,Math.PI/2),color:(tt,g)=>Math.abs(g.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),E.add(new Nt(.9,.05,.45),{m:I(jt.x,.25,-Pt+.42),color:W(1,.62,.3)}),L.add(new Xt(.28,.24,.32,10,1,!0),{m:I(jt.x-1.25,.28,-Pt+.35),color:U(.5)});for(let P=0;P<5;P++)L.add(new Xt(.05,.05,.55,6),{m:I(jt.x-1.25+(P-2)*.08,.42+P%2*.04,-Pt+.35,.2*(P-2),0,Math.PI/2+.1),color:U(.5)});let Qt=[],Ee=11,Ue=()=>(Ee=Ee*16807%2147483647,Ee/2147483647),_e=(P,k,tt,g,w,A=!1)=>{let O=document.createElement("canvas");O.width=P,O.height=k,tt(O.getContext("2d"),P,k);let it=new Ai(O);it.colorSpace=Hn,it.anisotropy=8;let x=new ve(g,new In({map:it,color:12432296,alphaTest:A?.5:0}));return x.applyMatrix4(w),x.receiveShadow=!0,Qt.push(x),x},zt=(P,k,tt,g=.05)=>{for(let w=0;w<k*tt*g;w++)P.fillStyle=Ue()<.5?"rgba(0,0,0,0.12)":"rgba(255,245,225,0.09)",P.fillRect(Ue()*k,Ue()*tt,1.5,1.5)},lt=P=>(k,tt,g)=>{k.clearRect(0,0,tt,g);let w=16,A=(g/2-2)/w;for(let O=0;O<w;O++){let it=tt/2-2-O*A,x=g/2-2-O*A;k.fillStyle=P[(O*5+O%3)%P.length],k.beginPath(),k.ellipse(tt/2,g/2,Math.max(it,1),Math.max(x,1),0,0,z),k.fill(),k.strokeStyle="rgba(0,0,0,0.22)",k.lineWidth=1.2;let b=Math.PI*(it+x),B=Math.floor(b/7);for(let H=0;H<B;H++){let V=H/B*z,Et=tt/2+Math.cos(V)*(it-A/2),Lt=g/2+Math.sin(V)*(x-A/2),_t=(O%2?1:-1)*A*.35;k.beginPath(),k.moveTo(Et-Math.sin(V)*_t-Math.cos(V)*A*.4,Lt+Math.cos(V)*_t-Math.sin(V)*A*.4),k.lineTo(Et+Math.sin(V)*_t+Math.cos(V)*A*.4,Lt-Math.cos(V)*_t+Math.sin(V)*A*.4),k.stroke()}}k.globalCompositeOperation="source-atop",zt(k,tt,g,.03),k.globalCompositeOperation="source-over"},ht=(P,k,tt)=>{P.clearRect(0,0,k,tt);let g=14,w=["#7d3b2e","#c7b48c","#3e5363","#a5622f","#e0d4b6","#5b6b4b"];for(let A=2;A<tt-2;A+=4)P.fillStyle="#ddd2b8",P.fillRect(0,A,g+1,2),P.fillRect(k-g-1,A,g+1,2);for(let A=g,O=0;A<k-g;O++){let it=6+Math.floor(Ue()*14);P.fillStyle=w[O%w.length],P.fillRect(A,0,Math.min(it,k-g-A),tt),A+=it}for(let A=0;A<tt;A+=3)P.fillStyle="rgba(0,0,0,0.1)",P.fillRect(g,A,k-2*g,1);zt(P,k,tt,.04)},wt=(P,k,tt)=>{let g=["#8b2f2a","#c9b98e","#3f566a","#6d7f52","#b36a35","#e6dcc4","#5a3d52","#a44b3e"],O=k/10,it=tt/7;for(let x=0;x<10;x++)for(let b=0;b<7;b++)if(P.fillStyle=g[Math.floor(Ue()*g.length)],P.fillRect(x*O,b*it,O,it),Ue()<.5&&(P.fillStyle=g[Math.floor(Ue()*g.length)],P.beginPath(),P.moveTo(x*O,b*it),P.lineTo(x*O+O,b*it+it),P.lineTo(x*O,b*it+it),P.fill()),Ue()<.3){P.fillStyle="rgba(255,255,255,0.18)";for(let B=0;B<6;B++)P.fillRect(x*O+Ue()*O,b*it+Ue()*it,3,3)}P.strokeStyle="rgba(250,240,220,0.55)",P.setLineDash([4,4]),P.lineWidth=1.2;for(let x=0;x<=10;x++)P.beginPath(),P.moveTo(x*O+3,0),P.lineTo(x*O+3,tt),P.stroke();for(let x=0;x<=7;x++)P.beginPath(),P.moveTo(0,x*it+3),P.lineTo(k,x*it+3),P.stroke();P.setLineDash([]),zt(P,k,tt,.02)},At=(P,k,tt,g=0)=>new Me().compose(new N(P,k,tt),new Fe().setFromEuler(new Sn(-Math.PI/2,g,0,"YXZ")),new N(1,1,1));_e(768,512,lt(["#7a3a2c","#b78d5c","#4a5a66","#d8c8a4","#8a5a3a","#5d6a4c","#9e4632"]),new $e(2.4,1.6),At(.55,.124,.5),!0),_e(512,320,ht,new $e(1,.62),At(-1.95,.124,-.85),!0),_e(512,256,ht,new $e(.9,.45),At((h+u)/2,.124,Pt-.45),!0);let yt=-gt+.02,Mt=yt+1.95,It=-Pt+.02,G=It+1,re=(yt+Mt)/2,St=(It+G)/2,D=P=>cn([[.045,0],[.045,.1],[.032,.13],[.03,P*.4],[.048,P*.47],[.032,P*.55],[.028,P-.12],[.042,P-.08],[.02,P-.05],[.032,P-.02],[0,P]],10);[[yt+.05,It+.05,1.05],[yt+.05,G-.05,1.05],[Mt-.05,It+.05,.72],[Mt-.05,G-.05,.72]].forEach(([P,k,tt])=>L.add(D(tt),{m:I(P,.12,k),color:U(.45)})),[[yt+.05,.95,.3],[Mt-.05,.68,.18]].forEach(([P,k,tt])=>{L.add(Dt(.06,.08,G-It-.1,.02,1),{m:I(P,k,St),color:U(.5)}),L.add(Dt(.05,.06,G-It-.1,.015,1),{m:I(P,k-tt,St),color:U(.5)});for(let g=It+.16;g<G-.1;g+=.11)L.add(new Xt(.012,.012,tt,6),{m:I(P,k-tt/2,g),color:U(.48)})}),[It+.05,G-.05].forEach(P=>L.add(Dt(Mt-yt-.1,.14,.05,.015,1),{m:I(re,.36,P),color:U(.45)})),L.add(j(Mt-yt-.1,.04,G-It-.1),{m:I(re,.33,St),color:U(.4)}),L.add(Dt(Mt-yt-.12,.17,G-It-.08,.06,2),{m:I(re,.48,St),color:W(.88,.86,.8,"fabric")}),_e(512,360,wt,Dt(1.4,.035,G-It+.06,.015,1),I(Mt-.75,.585,St+.02)),_e(512,120,wt,Dt(1.4,.26,.025,.01,1),I(Mt-.75,.46,G+.03)),L.add(Dt(.4,.06,G-It-.06,.025,2),{m:I(Mt-.24,.62,St),color:J(P=>Math.sin(P.z*60)>.5?[.32,.2,.18]:[.5,.24,.2])}),[[St-.22,.1],[St+.2,-.12]].forEach(([P,k])=>L.add(Dt(.34,.12,.42,.06,2),{m:I(yt+.3,.63,P,0,k,.25),color:W(.93,.91,.87,"fabric")}));{let P=Mt+.45,k=It+.25;L.add(Dt(.7,.36,.42,.02,1),{m:I(P,.31,k),color:U(.5)}),L.add(new Xt(.21,.21,.7,16,1,!1,-Math.PI/2,Math.PI),{m:I(P,.49,k,0,0,Math.PI/2,1,1,.45),color:U(.52)}),[-.24,0,.24].forEach(tt=>L.add(new Xt(.215,.215,.035,16,1,!0,-Math.PI/2,Math.PI),{m:I(P+tt,.49,k,0,0,Math.PI/2,1,1,.46),color:Z(.2,.2,.21)})),[-.24,0,.24].forEach(tt=>L.add(j(.035,.36,.43),{m:I(P+tt,.31,k),color:Z(.2,.2,.21)})),L.add(Dt(.1,.12,.02,.01,1),{m:I(P,.44,k+.22),color:Z(.55,.45,.25)}),[-1,1].forEach(tt=>L.add(new Vn(.04,.008,4,10,Math.PI),{m:I(P+tt*.36,.38,k,0,Math.PI/2,Math.PI),color:Z(.2,.2,.21)}))}let f={x:.9,z:.6};L.add(Dt(1.3,.055,.85,.02,2),{m:I(f.x,.885,f.z),color:U(.55)}),L.add(Dt(1.12,.09,.68,.01,1),{m:I(f.x,.81,f.z),color:U(.46)});let X=cn([[.03,0],[.036,.04],[.026,.12],[.04,.3],[.03,.48],[.036,.56],[.034,.64],[.034,.7]],8);[[-.56,-.34],[.56,-.34],[-.56,.34],[.56,.34]].forEach(([P,k])=>L.add(X,{m:I(f.x+P,.12,f.z+k),color:U(.45)}));let $=cn([[.016,0],[.02,.05],[.015,.16],[.022,.28],[.018,.4],[.02,.44]],6);[-1,1].forEach(P=>{let k=new Me().compose(new N(f.x,.12,f.z+P*.68),new Fe().setFromAxisAngle(new N(0,1,0),P<0?0:Math.PI),new N(1,1,1)),tt=(g,w,A)=>L.add(g,{m:k.clone().multiply(w),color:A});tt(Dt(.44,.045,.42,.02,2),I(0,.46,0),U(.52)),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(([g,w])=>tt($,I(g*1.08,0,w*1.08,w*.4,0,-g*.4),U(.45))),tt(new Xt(.01,.01,.36,6),I(0,.16,0,0,0,Math.PI/2),U(.45));for(let g=-2;g<=2;g++){let w=g*.075,A=.31-Math.sqrt(.25-w*w);tt(new Xt(.009,.011,.5,6),I(w,.73,A-.01,-.08,0,0),U(.5))}tt(new Vn(.5,.022,6,16,.9),I(0,.98,.31-.02,-Math.PI/2,0,Math.PI/2-.45),U(.52))}),L.add(cn([[0,0],[.07,0],[.075,.02],[.05,.05],[.055,.09],[.03,.1]],12),{m:I(f.x+.35,.91,f.z-.15),color:Z(.6,.47,.25)}),S.add(cn([[.03,0],[.06,.06],[.065,.12],[.035,.22],[.03,.28]],12),{m:I(f.x+.35,1.01,f.z-.15),color:W(1,1,1)}),E.add(new Ze(.018,8,6),{m:I(f.x+.35,1.07,f.z-.15,0,0,0,1,2,1),color:W(1,1,1)}),L.add(cn([[.04,0],[.045,.01],[.042,.1],[.046,.105]],12),{m:I(f.x-.3,.91,f.z+.2),color:W(.75,.73,.7,"paper")}),L.add(new Vn(.025,.007,5,10),{m:I(f.x-.25,.965,f.z+.2,0,0,Math.PI/2),color:W(.75,.73,.7,"paper")}),L.add(Dt(.22,.04,.3,.008,1),{m:I(f.x-.25,.93,f.z-.2,0,.3,0),color:W(.3,.36,.42,"leather")}),L.add(cn([[0,0],[.08,0],[.14,.04],[.165,.075],[.155,.08]],16),{m:I(f.x+.05,.91,f.z+.15),color:U(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([P,k],tt)=>L.add(new Ze(.055,10,7),{m:I(f.x+.05+P,.99+(tt===3?.04:0),f.z+.15+k),color:W(.66,.66,.65)}));{let P=new Me().compose(new N(.05,.12,-1),new Fe().setFromAxisAngle(new N(0,1,0),2.12),new N(1,1,1)),k=(tt,g,w)=>L.add(tt,{m:P.clone().multiply(g),color:w});[-1,1].forEach(tt=>{let g=[];for(let w=-.36;w<=.361;w+=.06)g.push(new N(tt*.22,.03+.75-Math.sqrt(.5625-w*w),w));k(new Bi(new mr(g),16,.02,5),I(),U(.42)),k(new Xt(.018,.02,.4,6),I(tt*.22,.2,.18),U(.45)),k(new Xt(.018,.02,.95,6),I(tt*.22,.5,-.2,-.18,0,0),U(.45)),k(Dt(.05,.03,.5,.012,1),I(tt*.25,.62,0),U(.52))}),k(Dt(.48,.045,.44,.02,2),I(0,.4,0),U(.5)),k(Dt(.42,.05,.4,.025,2),I(0,.44,.01),J(()=>[.5,.24,.2]));for(let tt=0;tt<4;tt++)k(Dt(.4,.07,.015,.006,1),I(0,.58+tt*.12,-.25-tt*.02,-.18,0,0),U(.5));k(Dt(.36,.34,.03,.015,1),I(.03,.82,-.3,-.18,0,.05),J(tt=>Math.sin(tt.y*90)>0?[.66,.6,.48]:[.58,.52,.4])),k(Dt(.38,.05,.08,.02,1),I(.03,1,-.33,0,0,.05),J(()=>[.62,.56,.44]))}{let P=new Me().compose(new N(-gt,.12,-.45),new Fe().setFromAxisAngle(new N(0,1,0),Math.PI/2),new N(1,1,1)),k=(tt,g,w,A=L)=>A.add(tt,{m:P.clone().multiply(g),color:w});k(Dt(1.5,.74,.52,.012,1),I(0,.45,.27),U(.46)),k(j(1.46,.08,.46),I(0,.04,.24),U(.3)),[-.49,0,.49].forEach((tt,g)=>{k(Dt(.45,.6,.03,.008,1),I(tt,.46,.54),U(.52)),k(Dt(.31,.44,.02,.015,1),I(tt,.46,.56),U(.44)),k(new Ze(.016,8,6),I(tt+(g===1?0:tt<0?.17:-.17),.62,.575),Z(.2,.2,.21))}),k(Dt(1.56,.06,.6,.015,2),I(0,.85,.3),an("wood",tt=>{let g=.58+(Math.abs(tt.x*12.5%1)<.06?-.08:0)+C(tt.x*9,tt.y,tt.z*3)*.08;return[g*1.04,g*.8,g*.56]})),k(cn([[0,-.13],[.12,-.12],[.19,-.06],[.21,0],[.225,.01]],18),I(-.35,.99,.3),W(.9,.9,.86,"metal")),k(new Vn(.222,.01,5,24),I(-.35,1,.3,Math.PI/2,0,0),W(.15,.2,.36,"metal")),k(new Xt(.045,.05,.42,10),I(-.35,1.08,.06),Z(.16,.16,.17)),k(new Xt(.02,.025,.2,8),I(-.35,1.22,.16,Math.PI/2-.3,0,0),Z(.16,.16,.17)),k(new Xt(.012,.012,.42,6),I(-.35,1.38,0,.9,0,0),Z(.16,.16,.17)),k(Dt(.42,.03,.28,.01,1),I(.35,.895,.32,0,.15,0),U(.62)),k(Dt(.28,.12,.14,.06,2),I(.33,.97,.32,0,.1,0),an("plain",tt=>tt.y>.99?[.62,.38,.18]:[.75,.55,.3])),k(Dt(.2,.01,.03,.004,1),I(.55,.915,.42,0,-.3,0),Z(.7,.7,.72)),k(Dt(.9,.03,.16,.008,1),I(.1,1.52,.08),U(.48)),k(Dt(.9,.025,.02,.006,1),I(.1,1.6,.15),U(.48)),[-.22,.02,.26].forEach((tt,g)=>k(new Xt(.12,.12,.015,20),I(tt,1.66,.06,Math.PI/2-.15,0,0),g===1?W(.82,.84,.86,"metal"):W(.86,.84,.78,"plaster"))),[.42,.52].forEach(tt=>k(cn([[0,0],[.035,0],[.04,.09],[.042,.095]],10),I(tt,1.535,.08),W(.3,.4,.5,"plaster"))),k(new Xt(.015,.015,1.4,6),I(0,2.05,.25,0,0,Math.PI/2),U(.4)),[-.55,-.3,-.05,.2,.45].forEach((tt,g)=>{k(new Xt(.002,.002,.14,3),I(tt,1.97,.25),W(.5,.45,.35)),k(new vn(.06+g%2*.02,.26,7),I(tt,1.78,.25,Math.PI,g,0),g%3===0?W(.42,.46,.28,"fabric"):g%3===1?W(.55,.5,.32,"fabric"):W(.5,.36,.42,"fabric"))})}[1.35,1.75].forEach(P=>{L.add(new Nt(.26,.04,1.3),{m:I(-gt+.14,P,.9),color:U(.5)}),L.add(new Nt(.04,.16,.04),{m:I(-gt+.04,P-.1,.35),color:U(.4)}),L.add(new Nt(.04,.16,.04),{m:I(-gt+.04,P-.1,1.45),color:U(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([P,k,tt,g])=>{L.add(new Xt(k,k,tt,10),{m:I(-gt+.14,1.37+tt/2,P),color:W(...g)}),L.add(new Xt(k*.8,k*.8,.03,10),{m:I(-gt+.14,1.38+tt,P),color:W(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([P,k,tt],g)=>{L.add(new Nt(.18,k,.05),{m:I(-gt+.14,1.77+k/2,P,g===4?.25:0,0,0),color:W(...tt)})}),L.add(new Xt(.015,.015,.12,5),{m:I(-2.6,1.7,Pt-.06,Math.PI/2,0,0),color:U(.4)}),L.add(new Nt(.42,.85,.12),{m:I(-2.6,1.25,Pt-.1),color:J(P=>{let k=.32+C(P.x*9,P.y*9,0)*.04;return[k*.85,k,k*.9]})}),[-2.7,-2.48].forEach(P=>{L.add(new Nt(.11,.26,.13),{m:I(P,.25,Pt-.2),color:W(.2,.16,.13)}),L.add(new Nt(.11,.07,.26),{m:I(P,.155,Pt-.26),color:W(.2,.16,.13)})}),L.add(new Nt(.5,.38,.03),{m:I(-.25,1.6,-Pt+.02),color:U(.4)}),L.add(new $e(.4,.28),{m:I(-.25,1.6,-Pt+.04),color:P=>P.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let K=new Qe,ct=u-h-.04;for(let P=0;P<5;P++)K.add(new Nt(ct/5-.008,_-.04,.06),{m:I(.02+ct/10+P*ct/5,(_-.04)/2,0),color:U(.5+P%2*.04),tip:()=>0});[.35,_-.4].forEach(P=>K.add(new Nt(ct-.1,.12,.04),{m:I(.02+ct/2,P,-.05),color:U(.46),tip:()=>0})),K.add(new Nt(.1,Math.hypot(ct-.2,_-.95),.04),{m:I(.02+ct/2,_/2-.02,-.05,0,0,Math.atan2(ct-.2,_-.95)),color:U(.46),tip:()=>0}),[.06,-.08].forEach(P=>K.add(new Xt(.02,.02,.14,6),{m:I(ct-.1,1,P),color:Z(.18,.18,.19),tip:()=>0})),[.3,_-.3].forEach(P=>K.add(new Nt(.4,.05,.075),{m:I(.22,P,0),color:Z(.18,.18,.19),tip:()=>0}));let dt=new Qe;dt.add(new Ze(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:I(0,0,0,0,0,0,1.25,.42,.5),color:P=>P.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),dt.add(new Nt(.16,.05,.9),{m:I(.1,-.08,0),color:W(.5,.4,.3),tip:()=>1}),dt.add(new Nt(.16,.05,.75),{m:I(-.6,-.08,0),color:W(.5,.4,.3),tip:()=>1}),dt.add(new Xt(.025,.025,2.2,5),{m:I(.2,0,.1,0,.3,1.45),color:W(.55,.45,.32),tip:()=>0});let et={value:1},q=Yn({...t,uFrost:{value:0}},et,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),bt=Yn({...t,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},et,{color:14865600,grain:.018,rich:!0,indoor:!0}),Ot=Yn({...t,uFrost:{value:0}},et,{color:13812656,snowMask:!0,side:Ln,rich:!0,grain:.02}),Ut=new Un({color:1315860}),kt=new Un({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),Gt=new Cn;Gt.position.set(ze.x,ze.y,ze.z),Gt.rotation.y=ze.yaw,Gt.scale.setScalar(s);let oe=new ve(M.geometry(),q);oe.castShadow=!0,oe.receiveShadow=!0;let Tt=new ve(L.geometry(),bt);Tt.receiveShadow=!0;let Y=new ve(E.geometry(),Ut),Rt=new ve(S.geometry(),kt);Rt.renderOrder=2;let xt=new ve(K.geometry(),q);xt.castShadow=!0;let Vt=new Cn;Vt.position.set(h+.02,.1,o/2),Vt.add(xt);let Yt=new ve(dt.geometry(),Ot);Yt.castShadow=!0,Yt.position.set(.9,0,T+y-2.5),Yt.rotation.y=.12;let Ct=new Un({color:16752704,transparent:!0,opacity:.85,blending:es,depthWrite:!1}),Zt=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([P,k])=>{let tt=new ve(new vn(.09,1,7,1,!0).translate(0,.5,0),Ct);return tt.position.set(p.x+P,.3,-Pt+.42),tt.userData.h=k,Gt.add(tt),tt});Gt.add(oe,Tt,Y,Rt,Vt,Yt),Qt.forEach(P=>Gt.add(P)),i.add(Gt),Gt.updateMatrixWorld(!0);let ue=ef({group:Gt,mats:{inn:bt,glow:Ut},camera:n,U:e}),pe=new zi(16752728,0,46,1.4);pe.position.copy(new N(p.x,.9,-Pt+1.1)).applyAxisAngle(new N(0,1,0),ze.yaw).multiplyScalar(s).add(Gt.position),i.add(pe);let Ne=pe.position.clone(),yn=(()=>{let k=new Je,tt=new Float32Array(90*3),g=new Float32Array(90);for(let O=0;O<90;O++)g[O]=O/90;k.setAttribute("position",new mn(tt,3)),k.setAttribute("aSeed",new mn(g,1));let w=new hn({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new he(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),A=new ts(k,w);return A.frustumCulled=!1,A.position.copy(Gt.localToWorld(se.clone())),i.add(A),A})(),at=(P,k)=>{let tt=(P-ze.x)/s,g=(k-ze.z)/s,w=Math.cos(ze.yaw),A=Math.sin(ze.yaw);return[tt*w-g*A,tt*A+g*w]},Ke=(P,k)=>{let tt=Math.cos(ze.yaw),g=Math.sin(ze.yaw);return[ze.x+(P*tt+k*g)*s,ze.z+(-P*g+k*tt)*s]},je=[[-r/2-.3,r/2+.3,-o/2-a,-o/2+a],[-r/2-a,-r/2+a,-o/2-.3,o/2+.3],[r/2-a,r/2+a,-o/2-.3,o/2+.3],[-r/2-.3,h,o/2-a,o/2+a],[u,r/2+.3,o/2-a,o/2+a],[yt,Mt,It,G],[Mt+.08,Mt+.82,It,It+.5],[f.x-.65,f.x+.65,f.z-.43,f.z+.43],[f.x-.25,f.x+.25,f.z-.95,f.z-.45],[f.x-.25,f.x+.25,f.z+.45,f.z+.95],[jt.x-1,jt.x+1,-Pt-.1,-Pt+1],[jt.x-1.55,jt.x-.95,-Pt,-Pt+.65],[-gt,-gt+.3,.25,1.55],[-gt,-gt+.62,-1.22,.32],[-.3,.4,-1.4,-.65],[.8,2.15,o/2+.26,o/2+.7],[-r/2-.95,-r/2-.2,-1.75,0],[r/2+.2,r/2+.9,o/2-.8,o/2-.1],[-r/2-1.75,-r/2-1.05,1.05,1.75],[Jt+.15,Jt+.35,o/2+2.1,o/2+2.3],[ge-.35,ge-.15,o/2+2.1,o/2+2.3]];je.push([ce.x0-.07,ce.x0+.02,ce.bottom-.05,1.5],[ce.x0,ce.x1,ce.bottom-.09,ce.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[ge+.5,ge+.7,o/2+2.8,o/2+3]);let fi=[h,u,o/2-.1,o/2+.1],En=[h-.06,h+.08,o/2-ct-.05,o/2],Zn=(P,k,[tt,g,w,A],O)=>P>tt-O&&P<g+O&&k>w-O&&k<A+O,sn={open:!1,a:0,from:0,t0:-1e9},_n=Ke((h+u)/2,o/2),ee=P=>P.feet===void 0?1e9:(P.feet-ze.y)/s,bn=P=>P>-.7?"ground":P<-3.2?"study":"stairs",pi=(P,k)=>P>ce.x0&&P<ce.x1&&k>ce.bottom&&k<ce.top,os=(P,k)=>P>Mn.x0&&P<Mn.x1&&k>Mn.z0&&k<Mn.z1,si=(P,k)=>P>-r/2+a-.05&&P<r/2-a+.05&&k>-o/2+a&&k<o/2+a+.05,Xi=(P,k,tt,g)=>{let w=[Ke(P,tt),Ke(k,tt),Ke(P,g),Ke(k,g)];return[Math.min(...w.map(A=>A[0])),Math.max(...w.map(A=>A[0])),Math.min(...w.map(A=>A[1])),Math.max(...w.map(A=>A[1]))]};return{group:Gt,study:ue,feet:void 0,holeBox:Xi(-r/2+a,r/2-a,-o/2+a,o/2-a),studyBox:Xi(Mn.x0-.3,Mn.x1+.3,Mn.z0-.3,Mn.z1+.3),blocked(P,k,tt=0){let[g,w]=at(P,k);if(Math.abs(g)>Mn.x1+3||w<Mn.z0-3||w>o/2+4)return!1;let A=.17+tt/s,O=bn(ee(this));if(O==="stairs")return g<ce.x0+A||g>ce.x1-A||w>ce.top+.05;if(O==="study")return jd(g,w,A,ee(this));if(Math.abs(g)>r/2+3||w<-o/2-3)return!1;for(let it of je)if(Zn(g,w,it,A))return!0;return!!(sn.a<.5?Zn(g,w,fi,A):Zn(g,w,En,A*.6))},inside(P,k){let[tt,g]=at(P,k);return Math.abs(tt)<r/2&&Math.abs(g)<o/2||os(tt,g)&&ee(this)<-1},floorAt(P,k){let[tt,g]=at(P,k),w=x=>ze.y+x*s,A=ee(this),O=[];pi(tt,g)?O.push([ss(g),!0]):si(tt,g)&&O.push([.12,!0]);for(let x of tf(tt,g))O.push([x,!0]);if(tt>-3.3&&tt<3.4&&g>=o/2+a+.05&&g<o/2+2.4&&O.push([.2,!1]),tt>-2.25&&tt<-.35&&g>T-.3&&g<T+y&&O.push([.24-(g-T)*.024,!1]),!O.length)return null;let it=null;for(let x of O)x[0]<=A+.6&&(!it||x[0]>it[0])&&(it=x);return it||(it=O.reduce((x,b)=>b[0]<x[0]?b:x)),{y:w(it[0]),under:it[1]}},door:{mesh:xt,near(P,k){return Math.hypot(P-_n[0],k-_n[1])<13},get open(){return sn.open},canToggle(P,k){if(!sn.open)return!0;let[tt,g]=at(P,k);return!Zn(tt,g,[h-.1,u+.1,o/2-ct-.1,o/2+.25],.17)},toggle(P){return sn.open=!sn.open,sn.from=sn.a,sn.t0=P,sn.open}},update(P,k,tt,g){let w=P.pCabin,A=w>.01;A&&(this.syncT>tt-1500||(this.syncT=tt,ue.sync()),ue.update(k,tt)),ue.lampLight.intensity=A?120*(.96+.04*Math.sin(k*3.1)):0,Gt.visible=A,yn.visible=A&&w>.5,Gt.scale.setScalar(s*Math.max(.001,w));let O=Math.min(1,(tt-sn.t0)/900),it=sn.open?1-Math.pow(1-O,3)*Math.cos(O*3.2):1-Math.pow(1-O,4);sn.a=sn.from+((sn.open?1:0)-sn.from)*it,Vt.rotation.y=sn.a*1.72;let x=Math.min(1,P.pGlow),b=.86+.08*Math.sin(k*9.1+Math.sin(k*2.7)*2)+.06*Math.sin(k*23.3);Ut.color.setRGB(.07,.07,.075).lerp(new he(1.3,.8,.42),x*b),Zt.forEach((B,H)=>{let V=B.userData.h*(.75+.35*Math.sin(k*(7+H*1.7)+H*2)*Math.sin(k*(3.1+H)));B.scale.set(1,Math.max(.05,V*x),1),B.visible=x>.05}),Ct.opacity=.75*x,pe.intensity=x*w*220*b,pe.position.set(Ne.x+Math.sin(k*5.3)*.15,Ne.y+Math.sin(k*7.1)*.1,Ne.z),yn.material.uniforms.uColor.value.copy(P.fog).multiplyScalar(1.1).addScalar(.05),yn.material.uniforms.uOpacity.value=Math.min(w,.35+x*.5),Yt.position.y=(g+.9+Math.sin(k*.9)*.15-ze.y)/s,Yt.rotation.z=Math.sin(k*.7)*.03}}}var sf={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3],spring:[1,1,1,1,1,1,.3,0,0,0,0,0,.5],summer:[1,1,.8,1,.7,1,.2,0,0,0,0,0,.2],fall:[1,1,.6,.8,.9,1,.5,0,0,0,0,0,.4]},Kc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function rf({scene:i,heightAt:t,U:e,snowColor:n,clear:s=[],camera:r}){let o=Xd(20260707),a=(lt,ht)=>lt+o()*(ht-lt),c={uTime:e.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new he("#4f6a3c")}},l={};Kc.forEach(lt=>{l[lt]={value:0}});let d=["leaves","flowers","hives","creek"];d.forEach(lt=>{l[lt]={value:0}});let m=[],h=[],u=[],_=(lt,ht)=>Math.hypot(t(lt+2,ht)-t(lt-2,ht),t(lt,ht+2)-t(lt,ht-2))/(2*2),T=(lt,ht,wt,At=1)=>{let Mt=t(lt-2,ht)-t(lt+2,ht),It=t(lt,ht-2)-t(lt,ht+2),G=new N(Mt*At,2*2,It*At).normalize();return new Fe().setFromUnitVectors(new N(0,1,0),G).multiply(new Fe().setFromAxisAngle(new N(0,1,0),wt))},y=(lt,ht)=>!s.some(wt=>Math.hypot(wt.x-lt,wt.z-ht)<wt.r),p=(lt,ht,{cast:wt=!1,receive:At=!0}={})=>(lt.castShadow=wt,lt.receiveShadow=At,i.add(lt),m.push([lt,ht]),lt),M=160,L=(lt,ht,wt,At,yt)=>{let Mt=new Map;wt.forEach(G=>{let re=Math.floor(G.p.x/M)+","+Math.floor(G.p.z/M);Mt.has(re)||Mt.set(re,[]),Mt.get(re).push(G)});let It=new Me;Mt.forEach(G=>{let re=new gi(lt,ht,G.length);G.forEach((St,D)=>{It.compose(St.p,St.q,St.s),re.setMatrixAt(D,It)}),re.computeBoundingSphere(),p(re,At,yt)})},E=(lt,ht,wt,At)=>{let yt=null,Mt=1e9;for(let It=0;It<900;It++){let G=o()*Math.PI*2,re=Math.sqrt(o())*wt,St=lt+Math.cos(G)*re,D=ht+Math.sin(G)*re;At(St,D)&&re<Mt&&(Mt=re,yt={x:St,z:D})}return yt||{x:lt,z:ht}},S={x:ze.x,z:ze.z};u.push({x:S.x,z:S.z,r:34});let C=E(-95,-258,50,(lt,ht)=>{let wt=t(lt,ht);return wt>9&&wt<32&&_(lt,ht)<.16});u.push({x:C.x,z:C.z,r:30});let U=(lt,ht)=>{let wt=new so(1,ht),At=wt.attributes.position,yt=new N;for(let Mt=0;Mt<At.count;Mt++){yt.fromBufferAttribute(At,Mt);let It=1+(un(yt.x*1.6+lt,yt.y*1.6,yt.z*1.6)-.5)*.55+(un(yt.x*4+lt,yt.y*4,yt.z*4)-.5)*.14;yt.multiplyScalar(It),yt.y=yt.y<-.25?-.25+(yt.y+.25)*.2:yt.y,yt.y*=.72,yt.x*=1.12,At.setXYZ(Mt,yt.x,yt.y,yt.z)}return new Qe().add(wt,{flat:!0,color:Mt=>{let It=.5+un(Mt.x*3+lt,Mt.y*3,Mt.z*3)*.28+Mt.y*.12;return[It,It*.99,It*.95]}}).geometry()},v=Yn(c,l.pRocks,{color:9277328,snowBias:.05}),F=[[],[],[]],W=[],Z=(lt,ht,wt,At,yt)=>{let Mt=t(lt,ht),It=new N(wt*a(.8,1.25),wt*a(.6,1.1),wt*a(.8,1.2));At.push({p:new N(lt,Mt-wt*.12,ht),q:T(lt,ht,o()*6.28,.6),s:It}),yt&&h.push({x:lt,z:ht,r:wt*1.05+1.2,key:"pRocks",top:Mt-wt*.12+It.y*.82,rt:wt*.75})};for(let lt=0,ht=0;lt<260&&ht<2e4;ht++){let wt=a(-560,560),At=a(-560,230),yt=t(wt,At);if(yt<-1.5||yt>75)continue;let It=o()<.25?a(4,9):a(1.2,3.4);u.some(G=>Math.hypot(G.x-wt,G.z-At)<G.r+It)||!y(wt,At)||(Z(wt,At,It,F[lt%3],It>2.2),lt++)}for(let lt=0,ht=0;lt<70&&ht<9e3;ht++){let wt=a(-260,260),At=a(-260,160),yt=t(wt,At);yt<-1.2||yt>1.5||u.some(Mt=>Math.hypot(Mt.x-wt,Mt.z-At)<Mt.r)||!y(wt,At)||(Z(wt,At,a(1.5,5),F[lt%3],!0),lt++)}for(let lt=0,ht=0;lt<700&&ht<2e4;ht++){let wt=a(-480,480),At=a(-480,200),yt=t(wt,At);yt<-.6||yt>70||!y(wt,At)||u.some(Mt=>Math.hypot(Mt.x-wt,Mt.z-At)<Mt.r)||(Z(wt,At,a(.35,1),W,!1),lt++)}F.forEach((lt,ht)=>L(U(ht*17.3,2),v,lt,"pRocks",{cast:!0})),L(U(5.1,1),v,W,"pRocks");let J=lt=>{let ht=.42+un(lt.x*9,lt.y*2,lt.z*2)*.22+Math.sin(Math.atan2(lt.z,lt.y)*9)*.04;return[ht*1,ht*.82,ht*.66]},j=(()=>{let lt=new Qe,ht=new Xt(1,.9,1,12,5,!0),wt=ht.attributes.position,At=new N;for(let Mt=0;Mt<wt.count;Mt++){At.fromBufferAttribute(wt,Mt);let It=1+(un(At.x*3,At.y*6,At.z*3)-.5)*.18;wt.setXYZ(Mt,At.x*It,At.y,At.z*It)}ht.computeVertexNormals(),lt.add(ht,{m:I(0,0,0,0,0,Math.PI/2),color:J});let yt=Mt=>{let It=Math.hypot(Mt.y,Mt.z),G=.62+Math.sin(It*26)*.05-It*.12;return[G*1.05,G*.9,G*.72]};return lt.add(new Ls(.88,12),{m:I(.5,0,0,0,Math.PI/2,0),color:yt}),lt.add(new Ls(.98,12),{m:I(-.5,0,0,0,-Math.PI/2,0),color:yt}),lt.add(new Xt(.12,.2,.9,6,1),{m:I(.15,.55,.3,.5,0,-.5,1,1,1),color:J}),lt.geometry()})(),z=(()=>{let lt=new Qe,ht=new Xt(.85,1,1,12,3,!0),wt=ht.attributes.position,At=new N;for(let yt=0;yt<wt.count;yt++){At.fromBufferAttribute(wt,yt);let Mt=Math.atan2(At.z,At.x),It=At.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(Mt*5)),2):1,G=At.y>.45?(un(At.x*4,0,At.z*4)-.5)*.3:0;wt.setXYZ(yt,At.x*It,At.y+G,At.z*It)}return ht.computeVertexNormals(),lt.add(ht,{m:I(0,.5,0),color:yt=>J(yt)}),lt.add(new Ls(.85,12),{m:I(0,.98,0,-Math.PI/2,0,0),color:yt=>{let Mt=Math.hypot(yt.x,yt.z),It=.6+Math.sin(Mt*22)*.05;return[It*1.05,It*.9,It*.7]}}),lt.geometry()})(),Q=Yn(c,l.pLogs,{color:12036506}),rt=nf({scene:i,shared:c,U:e,camera:r}),st=(()=>{let lt=new Qe,ht=It=>{let G=new Nt(1,1,1,3,5,2),re=G.attributes.position,St=new N;for(let D=0;D<re.count;D++){St.fromBufferAttribute(re,D);let f=1-(St.y+.5)*.3,X=1+(un(St.x*3+It,St.y*3,St.z*3)-.5)*.35,$=St.y>.35?1-(St.y-.35)*1.2*Math.hypot(St.x,St.z):1;re.setXYZ(D,St.x*f*X*$,St.y+(St.y>.4?(un(St.x*5,It,St.z*5)-.5)*.15:0),St.z*f*X*$)}return G},wt=It=>G=>{let re=.5+un(G.x*2+It,G.y*2,G.z*2)*.22;return[re*.97,re,re*.98]},At=11,yt=15;for(let It=0;It<At;It++){let G=It/At*Math.PI*2+a(-.06,.06),re=Math.cos(G)*yt,St=Math.sin(G)*yt,D=a(5,9.5),f=It===4?.35:a(-.06,.06),X=t(C.x+re,C.z+St)-t(C.x,C.z);lt.add(ht(It*3.7),{m:I(re,X+D/2-.6,St,f,-G+Math.PI/2,a(-.05,.05),a(2.2,3.2),D,a(1,1.5)),flat:!0,color:wt(It)}),h.push({x:C.x+re,z:C.z+St,r:3.6,key:"pStones"})}lt.add(ht(40),{m:I(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:wt(40)}),lt.add(ht(50),{m:I(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:wt(50)}),h.push({x:C.x+3,z:C.z-2,r:4.5,key:"pStones"},{x:C.x-2,z:C.z+2.5,r:4,key:"pStones"});let Mt=new ve(lt.geometry(),Yn(c,l.pStones,{color:10132636}));return Mt.position.set(C.x,t(C.x,C.z),C.z),p(Mt,"pStones",{cast:!0})})(),pt=(lt,ht)=>{let wt=new Xt(ht?.85:.5,1.15,1,12,10,!1),At=wt.attributes.position,yt=new N;for(let Mt=0;Mt<At.count;Mt++){yt.fromBufferAttribute(At,Mt);let It=yt.y+.5,G=1+(un(yt.x*2+lt,yt.y*5,yt.z*2)-.5)*.6+Math.sin(yt.y*26+lt)*.04;!ht&&It>.55&&(G*=1-(un(lt,yt.y*3,1)-.3)*.5);let re=yt.y>.49&&!ht?(un(yt.x*3+lt,0,yt.z*3)-.5)*.25:0,St=ht?0:It*It*.18*Math.sin(lt);At.setXYZ(Mt,yt.x*G+St,yt.y+re,yt.z*G)}return wt},ut=new Qe,ft={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[ft.x,ft.z,30,22]].forEach(([lt,ht,wt,At],yt,Mt)=>{let It=yt===Mt.length-1,G=11+At*.5-.1;ut.add(pt(yt*9.1,It),{m:I(lt,G-At/2-8,ht,0,yt,0,wt,At+16,wt*a(.8,1.1)),flat:!0,color:re=>{let St=.42+un(re.x*.2,re.y*.6,re.z*.2)*.24,D=re.y>G-1.5?.12:0;return[St-D*.4,St+D*.3,St*.95-D*.3]}}),h.push({x:lt,z:ht,r:wt*1.2+1.5,key:"pStacks"})});{let ht=new N(ft.x,21.9,ft.z),wt=new Xt(2.6,3.8,26,16,8,!1);ut.add(wt,{m:I(ht.x,ht.y+13,ht.z),color:At=>Math.floor((At.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),ut.add(new Xt(4,4,.5,16),{m:I(ht.x,ht.y+26.2,ht.z),color:()=>[.2,.2,.22]}),ut.add(new Xt(2,2,.6,12),{m:I(ht.x,ht.y+26.7,ht.z),color:()=>[.2,.2,.22]}),ut.add(new vn(2.6,2.6,12),{m:I(ht.x,ht.y+31.3,ht.z),color:()=>[.25,.23,.24]}),ut.add(new Nt(7,4,5),{m:I(ht.x+7,ht.y+2,ht.z+3),color:()=>[.85,.84,.8]}),ut.add(new vn(5,2.6,4),{m:I(ht.x+7,ht.y+5.3,ht.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}p(new ve(ut.geometry(),Yn(c,l.pStacks,{color:11051942,sink:140})),"pStacks");let vt=new N(ft.x,11+22*.5-.1+28.5,ft.z),se=new ve(new Xt(1.8,1.8,3.2,12),new Un({color:16769712,fog:!1}));se.position.copy(vt),p(se,"pStacks",{receive:!1});let $t=new Cn;$t.position.copy(vt);let ke=new hn({transparent:!0,depthWrite:!1,blending:es,side:Ln,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(lt=>{let ht=new ve(new vn(1,1,20,1,!0).translate(0,-.5,0),ke);ht.rotation.set(Math.PI/2,0,0),ht.scale.set(8,230,8);let wt=new Cn;wt.rotation.y=lt,wt.add(ht),ht.position.z=0,$t.add(wt)}),i.add($t);let Jt=(lt,ht,wt,At,yt,Mt)=>{let It=new Qe,G=[];for(let St=0;St<lt;St++){let D=St/lt*Math.PI*2+o()*.7,f=a(ht,wt),X=a(.15,.55),$=o()*At,K=Math.cos(D)*$,ct=Math.sin(D)*$,dt=Math.cos(D)*X,et=Math.sin(D)*X,q=-Math.sin(D)*yt,bt=Math.cos(D)*yt,Ot=[K+dt*f*.35,f*.55,ct+et*f*.35],Ut=[K+dt*f,f*.92,ct+et*f];G.push([K-q,0,ct-bt],[K+q,0,ct+bt],[Ot[0]+q*.6,Ot[1],Ot[2]+bt*.6]),G.push([K-q,0,ct-bt],[Ot[0]+q*.6,Ot[1],Ot[2]+bt*.6],[Ot[0]-q*.6,Ot[1],Ot[2]-bt*.6]),G.push([Ot[0]-q*.6,Ot[1],Ot[2]-bt*.6],[Ot[0]+q*.6,Ot[1],Ot[2]+bt*.6],Ut)}let re=wt;return It.tris(G,St=>{let D=St.y/re;return[Mt[0]*(.55+.6*D),Mt[1]*(.55+.6*D),Mt[2]*(.55+.6*D)]},St=>Math.pow(St.y/re,1.5),new N(0,1,0)),It},ge=Jt(11,.9,1.8,.55,.07,[.48,.6,.3]).geometry(),mt=Jt(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([lt,ht],wt)=>{let At=4.6+wt*.5;mt.add(new Xt(.03,.03,At,4),{m:I(lt,At/2,ht),color:()=>[.5,.52,.35],tip:()=>.3}),mt.add(new Xt(.11,.11,.7,6),{m:I(lt,At+.2,ht),color:()=>[.36,.26,.18],tip:()=>.6})});let gt=mt.geometry(),Pt=(()=>{let lt=new Qe,ht=[],wt=8;for(let At=0;At<wt;At++){let yt=At/wt*Math.PI*2+o()*.5,Mt=a(1.6,2.3),It=a(.7,1.1),G=[Math.cos(yt),Math.sin(yt)],re=[-Math.sin(yt),Math.cos(yt)],St=f=>[G[0]*Mt*f,It*Math.sin(f*Math.PI*.75)-.25*f*f,G[1]*Mt*f],D=9;for(let f=0;f<D;f++){let X=f/D,$=(f+1)/D,K=(X+$)/2,ct=St(X),dt=St($),et=St(K),q=.34*Math.sin(Math.PI*Math.min(1,K*1.1))*(1-K*.4)+.03,bt=re[0]*q,Ot=re[1]*q;ht.push(ct,dt,[et[0]+bt,et[1]-.06,et[2]+Ot]),ht.push(ct,[et[0]-bt,et[1]-.06,et[2]-Ot],dt)}}return lt.tris(ht,At=>{let yt=Math.hypot(At.x,At.z)/2.3;return[.36+yt*.22,.52+yt*.26,.26+yt*.12]},At=>Math.hypot(At.x,At.z)/2.3,new N(0,1,0)),lt.geometry()})(),jt=(lt,ht)=>Yn(c,l[lt],{sway:ht,side:Ln,color:16777215,snowBias:-1,softBack:!0}),Qt=null,Ee=null,Ue=null,_e=(lt,ht,wt)=>{let At=(()=>{let f=new Qe,X=new Ze(1,14,7,0,Math.PI*2,0,Math.PI/2),$=X.attributes.position,K=new N;for(let dt=0;dt<$.count;dt++){K.fromBufferAttribute($,dt);let et=1+(un(K.x*3,K.y*3,K.z*3)-.5)*.4;$.setXYZ(dt,K.x*et,K.y*.32*et,K.z*et)}X.computeVertexNormals();let ct=[[.86,.42,.1],[.72,.18,.08],[.92,.68,.16],[.55,.3,.12]];f.add(X,{color:dt=>{let et=ct[Math.floor(un(dt.x*6,dt.y*6,dt.z*6)*3.99)],q=.7+un(dt.x*20,0,dt.z*20)*.5;return[et[0]*q,et[1]*q,et[2]*q]}});for(let dt=0;dt<26;dt++){let et=o()*6.28,q=Math.sqrt(o())*1.15,bt=ct[dt%4];f.add(new $e(.16,.1),{m:I(Math.cos(et)*q,.33*(1-q*q*.6)+.02,Math.sin(et)*q,-Math.PI/2+a(-.4,.4),o()*6,0),color:()=>bt})}return f.geometry()})(),yt=[];for(let f=0;yt.length<320&&f<6e3;f++){let X=lt[Math.floor(o()*lt.length)];if(!X)break;let $=o()*6.28,K=a(2,9),ct=X.p.x+Math.cos($)*K,dt=X.p.z+Math.sin($)*K,et=t(ct,dt);if(et<1||et>70||ht(ct,dt))continue;let q=a(1.4,3.2);yt.push({p:new N(ct,et-.1,dt),q:T(ct,dt,o()*6.28,.8),s:new N(q,q*a(.8,1.3),q*a(.7,1.1))})}L(At,Yn(c,l.leaves,{side:Ln,softBack:!0,snowBias:-1}),yt,"leaves");let Mt=(f,X)=>{let $=new Qe;for(let K=0;K<6;K++){let ct=o()*6.28,dt=o()*.5,et=Math.cos(ct)*dt,q=Math.sin(ct)*dt,bt=a(.35,.7);$.add(new Xt(.012,.016,bt,4).translate(0,bt/2,0),{m:I(et,0,q),color:()=>[.32,.5,.24],tip:()=>0});for(let Ot=0;Ot<5;Ot++){let Ut=Ot/5*6.28+ct;$.add(new Ze(.06,6,4),{m:I(et+Math.cos(Ut)*.06,bt,q+Math.sin(Ut)*.06,0,-Ut,0,1.3,.3,.7),color:()=>f,tip:()=>1})}$.add(new Ze(.035,6,4),{m:I(et,bt+.015,q),color:()=>X,tip:()=>1}),$.add(new $e(.14,.05),{m:I(et+.04,bt*.4,q,0,ct,.5),color:()=>[.34,.55,.26],tip:()=>0})}return $.geometry()},It=Yn(c,l.flowers,{sway:.08,side:Ln,softBack:!0,snowBias:-1});[[[.92,.45,.62],[.95,.85,.3]],[[.96,.84,.25],[.7,.45,.15]],[[.72,.68,.95],[.98,.95,.6]],[[.98,.97,.95],[.95,.8,.25]]].forEach(([f,X],$)=>{let K=[];for(let ct=0;K.length<520&&ct<3e4;ct++){let dt=a(-420,420),et=a(-420,190),q=t(dt,et);if(q<1||q>55||ht(dt,et)||!y(dt,et)||wt(dt,et,3)||un(dt*.025+$*3,1,et*.025)<.5)continue;let bt=a(1.6,2.6);K.push({p:new N(dt,q-.05,et),q:T(dt,et,o()*6.28,.5),s:new N(bt,bt,bt)})}L(Mt(f,X),It,K,"flowers")});let G=(()=>{let f=new Qe,X=an("wood",K=>{let ct=.5+un(K.x*6,K.y*6,K.z*6)*.12;return[ct,ct*.8,ct*.58]});[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]].forEach(([K,ct])=>f.add(new Nt(.06,.4,.06),{m:I(K,.2,ct),color:X})),f.add(new Nt(.58,.06,.5),{m:I(0,.42,0),color:X});let $=[[.92,.9,.84],[.86,.82,.62],[.78,.86,.84]];for(let K=0;K<3;K++)f.add(new Nt(.5,.24,.44),{m:I(0,.57+K*.245,0),color:()=>$[K]});return f.add(new Nt(.56,.05,.5),{m:I(0,1.3,0),color:()=>[.6,.58,.55]}),[-1,1].forEach(K=>f.add(new Nt(.34,.03,.54),{m:I(K*.14,1.38,0,0,0,-K*.5),color:()=>[.45,.42,.4]})),f.add(new Nt(.22,.03,.02),{m:I(0,.49,.225),color:()=>[.08,.06,.05]}),f.add(new Nt(.3,.02,.1),{m:I(0,.46,.27,.25,0,0),color:X}),f.geometry()})(),re=[],St=[];[[-5.6,-.6],[-5.6,.9],[-5.6,2.4]].forEach(([f,X])=>{let $=ze.x-X*ze.S,K=ze.z+f*ze.S,ct=t($,K);re.push({p:new N($,ct,K),q:new Fe().setFromAxisAngle(new N(0,1,0),Math.PI+.1),s:new N(ze.S,ze.S,ze.S)}),h.push({x:$,z:K,r:2.8,key:"hives"}),St.push($,ct+4.5,K)}),L(G,Yn(c,l.hives,{rich:!0,grain:.02}),re,"hives",{cast:!0});{let X=new Je,$=new Float32Array(60*3),K=new Float32Array(60);for(let dt=0;dt<60;dt++){let et=dt%3;$.set([St[et*3],St[et*3+1],St[et*3+2]],dt*3),K[dt]=o()}X.setAttribute("position",new mn($,3)),X.setAttribute("aSeed",new mn(K,1));let ct=new hn({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0}},vertexShader:`uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`});Ue=new ts(X,ct),Ue.frustumCulled=!1,i.add(Ue)}let D=[];{let f=-275,X=-30,$=1,K=0;for(let ct=0;ct<260;ct++){let dt=t(f,X);if(D.push([f,X]),dt<-.6)break;let et=2,q=t(f+et,X)-t(f-et,X),bt=t(f,X+et)-t(f,X-et),Ot=Math.hypot(-f,-20-X)||1,Ut=$*.7-q*.6+-f/Ot*.25+(un(ct*.1,3,1)-.5)*.5,kt=K*.7-bt*.6+(-20-X)/Ot*.25+(un(ct*.1,7,2)-.5)*.5,Gt=Math.hypot(Ut,kt)||1;$=Ut/Gt,K=kt/Gt,f+=$*4,X+=K*4}}if(D.length>4){let f=[],X=[],$=[],K=0;D.forEach(([dt,et],q)=>{let[bt,Ot]=D[Math.max(0,q-1)],[Ut,kt]=D[Math.min(D.length-1,q+1)],Gt=Ut-bt,oe=kt-Ot,Tt=Math.hypot(Gt,oe)||1;Gt/=Tt,oe/=Tt;let Y=3+3.6*Math.min(1,q/25)+Math.sin(q*.4)*.8,Rt=dt-oe*Y,xt=et+Gt*Y,Vt=dt+oe*Y,Yt=et-Gt*Y,Ct=Math.max(t(Rt,xt),t(Vt,Yt),t(dt,et))+.32;if(q&&(K+=Math.hypot(dt-D[q-1][0],et-D[q-1][1])),f.push(Rt,Ct,xt,Vt,Ct,Yt),X.push(0,K/10,1,K/10),q){let Zt=(q-1)*2;$.push(Zt,Zt+1,Zt+2,Zt+1,Zt+3,Zt+2)}});let ct=new Je;ct.setAttribute("position",new Le(f,3)),ct.setAttribute("uv",new Le(X,2)),ct.setIndex($),Ee=new hn({transparent:!0,depthWrite:!1,fog:!0,side:Ln,uniforms:Ro.merge([ie.fog,{uOpacity:{value:0},uColor:{value:new he(6985126)}}]),vertexShader:["varying vec2 vUv;","#include <fog_pars_vertex>","void main() {","  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;","  #include <fog_vertex>","}"].join(`
`),fragmentShader:["uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;","#include <fog_pars_fragment>","float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }","void main() {","  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);","  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;","  float foam = smoothstep(0.8, 0.95, flow) * 0.45;","  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);","  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));","  #include <colorspace_fragment>","  #include <fog_fragment>","}"].join(`
`)}),Ee.uniforms.uTime=e.uTime,Qt=new ve(ct,Ee),Qt.renderOrder=1,p(Qt,"creek",{receive:!1}),zt=D}},zt=null;return{shared:c,show:l,groups:m,solids:h,zones:u,cabinAt:S,circleAt:C,cabin:rt,blockedAt(lt,ht,wt,At,yt){for(let Mt of h){if(At[Mt.key]<.5||Mt.top!==void 0&&yt!==void 0&&yt>=Mt.top-.7)continue;let It=Mt.x-lt,G=Mt.z-ht,re=Mt.r+wt;if(It*It+G*G<re*re)return!0}return At.pCabin>.5&&rt.blocked(lt,ht,wt)},solidTop(lt,ht,wt,At){let yt=-1/0;for(let Mt of h){if(Mt.top===void 0||At[Mt.key]<.5||Mt.top<=yt||wt<Mt.top-1.2)continue;let It=Mt.x-lt,G=Mt.z-ht;It*It+G*G<Mt.rt*Mt.rt&&(yt=Mt.top)}return yt},floorAt(lt,ht,wt){return wt.pCabin>.5?rt.floorAt(lt,ht):null},plant(lt,ht=0){let wt=(St,D,f)=>lt.some(X=>{let $=X.p.x-St,K=X.p.z-D;return $*$+K*K<f*f}),At=(St,D,f=0)=>u.some(X=>Math.hypot(X.x-St,X.z-D)<X.r+f),yt=[],Mt=[];for(let St=0,D=0;St<70&&D<8e3;D++){let f=lt[Math.floor(o()*lt.length)];if(!f)break;let X=o()*6.28,$=a(7,20),K=f.p.x+Math.cos(X)*$,ct=f.p.z+Math.sin(X)*$,dt=t(K,ct);if(dt<1.5||dt>68||At(K,ct,10))continue;let et=a(9,18),q=a(.8,1.4),bt=o()*6.28,Ot=Math.cos(bt)*et/2,Ut=-Math.sin(bt)*et/2;if(wt(K,ct,6)||wt(K+Ot,ct+Ut,4)||wt(K-Ot,ct-Ut,4))continue;let kt=t(K+Ot,ct+Ut),Gt=t(K-Ot,ct-Ut),oe=new Fe().setFromEuler(new Sn(o()*6.28,bt,Math.atan2(kt-Gt,et),"YZX"));yt.push({p:new N(K,(kt+Gt)/2+q*.55,ct),q:oe,s:new N(et,q,q)});for(let Tt=-.5;Tt<=.5;Tt+=.125)h.push({x:K+Ot*2*Tt,z:ct+Ut*2*Tt,r:q+1.6,key:"pLogs",top:(kt+Gt)/2+q*.55+(kt-Gt)*Tt+q,rt:q*1.1});St++}for(let St=0,D=0;St<90&&D<8e3;D++){let f=lt[Math.floor(o()*lt.length)];if(!f)break;let X=o()*6.28,$=a(6,16),K=f.p.x+Math.cos(X)*$,ct=f.p.z+Math.sin(X)*$,dt=t(K,ct);if(dt<1.5||dt>70||wt(K,ct,5)||At(K,ct))continue;let et=a(.9,1.7),q=a(1.4,3.2);Mt.push({p:new N(K,dt-.4,ct),q:T(K,ct,o()*6.28,.4),s:new N(et,q,et)}),h.push({x:K,z:ct,r:et+1.3,key:"pLogs",top:dt-.4+q,rt:et*.85}),St++}L(j,Q,yt,"pLogs",{cast:!0}),L(z,Q,Mt,"pLogs",{cast:!0});let It=[];for(let St=0;It.length<5200&&St<6e4;St++){let D=a(-470,470),f=a(-470,210),X=t(D,f);if(X<ht+.6||X>66||!y(D,f)||At(D,f)||un(D*.03,0,f*.03)<.42)continue;let $=a(1.2,2.6);It.push({p:new N(D,X-.15,f),q:T(D,f,o()*6.28,.5),s:new N($,$*a(.8,1.3),$)})}L(ge,jt("pGrass",.05),It,"pGrass");let G=[];for(let St=0;G.length<1100&&St<2e4;St++){let D=lt[Math.floor(o()*lt.length)];if(!D)break;let f=o()*6.28,X=a(2.5,13),$=D.p.x+Math.cos(f)*X,K=D.p.z+Math.sin(f)*X,ct=t($,K);if(ct<1||ct>70||At($,K))continue;let dt=a(1.6,3.4);G.push({p:new N($,ct-.1,K),q:T($,K,o()*6.28,.5),s:new N(dt,dt*a(.8,1.1),dt)})}L(Pt,jt("pFerns",.03),G,"pFerns");let re=[];for(let St=0;re.length<700&&St<9e4;St++){let D=a(-280,280),f=a(-280,170),X=t(D,f);if(X<-1.4||X>1.2||!y(D,f)||At(D,f,-6)||un(D*.05,3,f*.05)<.4)continue;let $=a(1.1,1.9);re.push({p:new N(D,X-.2,f),q:new Fe().setFromAxisAngle(new N(0,1,0),o()*6.28),s:new N($,$*a(.8,1.2),$)})}L(gt,jt("pReeds",.012),re,"pReeds"),_e(lt,At,wt)},update(lt,ht,wt,At){for(let yt of Kc)l[yt].value=lt[yt];for(let yt of d)l[yt].value=lt[yt]||0;Qt&&(Ee.uniforms.uOpacity.value=Math.min(1,(lt.creek||0)*1.2),Ee.uniforms.uColor.value.copy(lt.waterC).lerp(new he(.32,.52,.56),.5)),Ue&&(Ue.material.uniforms.uOpacity.value=lt.hives||0,Ue.visible=(lt.hives||0)>.05),c.uSnowCover.value=lt.pSnowCover,c.uMoss.value=lt.pMoss,c.uFrost.value=lt.pFrost;for(let[yt,Mt]of m)yt.visible=lt[Mt]>.01;rt.update(lt,ht,performance.now(),At),se.material.color.setRGB(1.6,1.4,1.05),se.position.y=vt.y-(1-lt.pStacks)*140,$t.position.y=se.position.y,$t.rotation.y=ht*.45,$t.visible=lt.pStacks>.5,ke.uniforms.uOpacity.value=Math.max(0,lt.pStacks-.5)*.5},blocked(lt,ht){return u.some(wt=>Math.hypot(wt.x-lt,wt.z-ht)<wt.r)}}}function of(i,t){let n=new po().copy(new $e(1,1).rotateX(-Math.PI/2)),s=new Float32Array(320*3);for(let a=0;a<320;a++)s[a*3]=Math.random()*120-60,s[a*3+1]=Math.random(),s[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new Oi(s,3)),n.instanceCount=320;let r=new hn({transparent:!0,depthWrite:!1,fog:!0,uniforms:Ro.merge([ie.fog,{uOpacity:{value:0},uCam:{value:new N},uWater:{value:0}}]),vertexShader:`
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
      }`});r.uniforms.uTime=t.uTime;let o=new ve(n,r);return o.frustumCulled=!1,i.add(o),{update(a,c,l){r.uniforms.uOpacity.value=a,r.uniforms.uCam.value.copy(c),r.uniforms.uWater.value=l,o.visible=a>.01}}}function af(i,t){let n=new $e(1,1).rotateX(-Math.PI/2),s=new Oi(new Float32Array(90).fill(-1e5),1);s.setUsage(rh),n.setAttribute("aBorn",s);let r=new hn({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:t.uTime,uColor:{value:new he(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),o=new gi(n,r,90);o.frustumCulled=!1;let a=new Me;a.makeScale(0,0,0);for(let u=0;u<90;u++)o.setMatrixAt(u,a);i.add(o);let c=0,l=1,d=new Fe,m=new N(1.15,1,2.3),h=new N;return{mesh:o,place(u,_,T,y,p){l=-l,h.set(u+Math.cos(y)*.9*l,_+.45,T-Math.sin(y)*.9*l),d.setFromUnitVectors(new N(0,1,0),p).multiply(new Fe().setFromAxisAngle(new N(0,1,0),y)),a.compose(h,d,m),o.setMatrixAt(c,a),o.instanceMatrix.needsUpdate=!0,s.array[c]=t.uTime.value,s.needsUpdate=!0,c=(c+1)%90},update(u){r.uniforms.uShow.value=u,o.visible=u>.01}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let t;try{t=new Yc({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{document.documentElement.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(nt){document.documentElement.setAttribute("data-scene",nt)},setMotion(){},start(){}};return}t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=yo,t.shadowMap.enabled=!0,t.shadowMap.type=ja,t.toneMappingExposure=1;let e=new ur,n=new kn(50,1,.5,3e3),s=new go,r=(R,nt)=>{let ot=Math.sin(R*127.1+nt*311.7)*43758.5453;return ot-Math.floor(ot)},o=(R,nt)=>{let ot=Math.floor(R),Bt=Math.floor(nt),Ft=R-ot,qt=nt-Bt,xe=Ft*Ft*(3-2*Ft),we=qt*qt*(3-2*qt),Ae=r(ot,Bt),ye=r(ot+1,Bt),Re=r(ot,Bt+1),be=r(ot+1,Bt+1);return Ae+(ye-Ae)*xe+(Re-Ae)*we+(Ae-ye-Re+be)*xe*we},a=(R,nt,ot=5)=>{let Bt=0,Ft=.5,qt=1;for(let xe=0;xe<ot;xe++)Bt+=Ft*o(R*qt,nt*qt),qt*=2.03,Ft*=.5;return Bt},c=(R,nt)=>{let ot=0,Bt=.5,Ft=1;for(let qt=0;qt<5;qt++)ot+=Bt*(1-Math.abs(o(R*Ft,nt*Ft)*2-1)),Ft*=2.1,Bt*=.5;return ot},l=(R,nt,ot)=>{let Bt=Math.min(1,Math.max(0,(ot-R)/(nt-R)));return Bt*Bt*(3-2*Bt)},d=(R,nt)=>R+Math.random()*(nt-R),m=(R,nt)=>{let ot=Math.hypot(R*.75,nt+20),Bt=l(55,240,ot),Ft=(a(R*.006+3,nt*.006+7)-.45)*46*(.25+Bt);Ft+=Math.pow(l(120,650,-nt),1.3)*c(R*.0028,nt*.0028)*260,Ft+=l(160,520,Math.abs(R))*a(R*.004,nt*.004+11)*130,Ft-=(1-Bt)*9,Ft+=(a(R*.035+17,nt*.035+5,2)-.5)*3.2*(.3+Bt);{let Re=Math.min(1,Math.max(0,((R-205)*-113+(nt- -130)*14)/12965)),be=Math.hypot(R-(205+-113*Re),nt-(-130+14*Re)),Ge=l(34,12,be)*l(1.04,.9,Re),pn=4.6+(a(R*.05,nt*.05,2)-.5)*1.6-Re*.6;Ge>0&&(Ft=Ft+(Math.max(Ft,pn)-Ft)*Ge)}let qt=Math.hypot(R-ze.x,nt-ze.z);qt<36&&(Ft+=(ze.y-.12-Ft)*l(36,24,qt));{let xe=(nt-ze.z)/ze.S,we=-(R-ze.x)/ze.S,Ae=Math.max(Mn.x0-xe,xe-Mn.x1,0),ye=Math.max(Mn.z0-we,we-Mn.z1,0),Re=Math.hypot(Ae,ye)*ze.S;Re<16&&(Ft=Math.max(Ft,Ft+(ze.y-.12-Ft)*l(16,5,Re)))}return Ft},h={uTime:{value:0},uTop:{value:new he},uHorizon:{value:new he},uBottom:{value:new he},uSunColor:{value:new he},uSunDir:{value:new N(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new he},uAur2:{value:new he}},u=new ve(new Ze(1400,48,24),new hn({uniforms:h,side:Wn,depthWrite:!1,fog:!1,vertexShader:`
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
        }`}));e.add(u);let _=new lo(16777215,4473924,1),T=new fo(16777215,1);e.add(_,T,T.target),e.fog=new $r(13421772,.004);let y={uLow:{value:new he},uHigh:{value:new he},uSnow:{value:new he},uSnowLine:{value:100},uSand:{value:0},uHole:{value:new on(1e9,1e9,1e9,1e9)}},p=new on(1e9,1e9,1e9,1e9),M=new $e(2200,1800,300,245);M.rotateX(-Math.PI/2),M.translate(0,0,-400);{let R=M.attributes.position;for(let nt=0;nt<R.count;nt++)R.setY(nt,m(R.getX(nt),R.getZ(nt)));M.computeVertexNormals()}let L=new In({color:16777215});L.onBeforeCompile=R=>{Object.assign(R.uniforms,y),R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <common>","#include <common>").replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)};let E=new ve(M,L);E.receiveShadow=!0,e.add(E);let S=(()=>{let R=document.createElement("canvas");R.width=R.height=256;let nt=R.getContext("2d"),ot=nt.createImageData(256,256);for(let Ft=0;Ft<256;Ft++)for(let qt=0;qt<256;qt++){let xe=a(qt/22,Ft/7,4),we=a(qt/22+.6,Ft/7,4),Ae=a(qt/22,Ft/7+.6,4),ye=(Ft*256+qt)*4;ot.data[ye]=128+(xe-we)*300,ot.data[ye+1]=128+(xe-Ae)*300,ot.data[ye+2]=255,ot.data[ye+3]=255}nt.putImageData(ot,0,0);let Bt=new Ai(R);return Bt.wrapS=Bt.wrapT=rr,Bt.repeat.set(60,60),Bt})(),C=new ao({color:7829367,roughness:.3,metalness:.35,normalMap:S,normalScale:new le(.35,.35)}),U={uStudy:{value:new on(1e9,1e9,1e9,1e9)}};C.onBeforeCompile=R=>{Object.assign(R.uniforms,U),R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform vec4 uStudy;`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`)};let v=new ve(new $e(4e3,4e3).rotateX(-Math.PI/2),C);e.add(v);let F={uTree:{value:1},uTime:h.uTime},W=(()=>{let R=new Qe,nt=new Xt(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let Ft=nt.attributes.position,qt=new N;for(let xe=0;xe<Ft.count;xe++){qt.fromBufferAttribute(Ft,xe);let we=Math.atan2(qt.z,qt.x),Ae=qt.y<.4?1+(.4-qt.y)*2.6*(.55+.45*Math.max(0,Math.sin(we*4+1))):1,ye=Math.sin(qt.y*1.7)*.03;Ft.setXYZ(xe,qt.x*Ae+ye,qt.y,qt.z*Ae)}}R.add(nt,{color:Ft=>{let qt=.42+.16*o(Ft.y*7,Math.atan2(Ft.z,Ft.x)*2.5);return[qt*1.35,qt*.98,qt*.72]},normal:(Ft,qt)=>qt.set(Ft.x,.12,Ft.z).normalize()});let ot=6,Bt=0;for(let Ft=0;Ft<ot;Ft++){let qt=Ft/(ot-1),xe=1.1-qt*.8,we=1.02-qt*.42,Ae=.5+qt*2.5,ye=5+Ft%3,Re=Ft*1.93,be=(Kt,Be)=>{let nn=Kt.attributes.position,Ye=new N;for(let Tn=0;Tn<nn.count;Tn++){Ye.fromBufferAttribute(nn,Tn);let An=Math.hypot(Ye.x,Ye.z);if(An<.001)continue;let Nn=Math.atan2(Ye.z,Ye.x),Bn=Math.pow(.5+.5*Math.sin(Nn*ye+Re),2),Yi=.82+.32*Bn+.06*Math.sin(Nn*17+Ft*3)+.04*Math.sin(Nn*31+Ft),Lr=An/xe,Do=(.1+.16*Bn)*xe*Lr*Lr;nn.setXYZ(Tn,Ye.x*Yi,Ye.y-Do-(Be?.02:0),Ye.z*Yi)}},Ge=new vn(xe,we,14,3,!0);be(Ge,!1),Ge.translate(0,Ae+we/2,0),R.add(Ge,{mat:13,color:Kt=>{let Be=(Kt.y-Ae)/we,Ye=.55+.5*Math.min(1,Math.hypot(Kt.x,Kt.z)/xe)+.22*Be+.08*(r(Kt.x*9.1,Kt.z*7.3+Kt.y)-.5)+Ft*.03;return[Ye*.98,Ye,Ye*.94]},normal:(Kt,Be)=>{let nn=Math.hypot(Kt.x,Kt.z);Be.set(Kt.x,nn*.55+.32,Kt.z).normalize()},tip:Kt=>{let Be=(Kt.y-Ae)/we,nn=Math.atan2(Kt.z,Kt.x),Ye=.5+.5*Math.sin(nn*ye+Re);return Math.min(1,Math.max(0,(Be-.08)*1.5)*(.45+.55*Ye)+.25*r(Kt.x*5.3,Kt.z*4.1))}});let pn=new vn(xe*.97,we*.38,14,1,!0);be(pn,!0),pn.translate(0,Ae+we*.19-.02,0),R.add(pn,{mat:13,flip:!0,color:Kt=>{let nn=.42+.3*Math.min(1,Math.hypot(Kt.x,Kt.z)/xe);return[nn*.95,nn,nn*.9]},normal:(Kt,Be)=>Be.set(Kt.x*.3,-1,Kt.z*.3).normalize()}),Bt=Ae+we}return R.add(new vn(.05,.5,5,1,!0).translate(0,Bt+.18,0),{mat:13,color:()=>[1,1.02,.95],tip:()=>.7}),R.geometry()})(),Z=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([R,nt])=>({x:R,z:nt,r:42})),J=rf({scene:e,heightAt:m,U:h,snowColor:y.uSnow,clear:Z,camera:n}),j={uFall:{value:0},uBloom:{value:0},uLush:{value:0},uBare:{value:0}},z=Yn({...J.shared,...j,uMoss:{value:0},uFrost:J.shared.uSnowCover},F.uTree,{sway:.022,color:3358771,snowBias:-.3,crisp:!0,tree:!0}),Q=1400,rt=[],st=new he(1,1,1),pt=new gi(W,z,Q);{let R=new Me,nt=new Fe,ot=new N,Bt=new N,Ft=new he,qt=0,xe=0;for(;qt<Q&&xe++<6e4;){let Ae=d(-650,650),ye=d(-700,260),Re=m(Ae,ye);if(Re<3||Re>85||a(Ae*.02,ye*.02,3)<.42||J.blocked(Ae,ye))continue;let be=d(2,4.6);Bt.set(Ae,Re-.4,ye),ot.set(be*d(.8,.95),be*d(1.5,2.1),be*d(.8,.95)),nt.setFromAxisAngle(new N(0,1,0),d(0,Math.PI*2));let Ge=d(.82,1.12);Ft.setRGB(Ge,Ge*d(.97,1.03),Ge*d(.94,1)),rt.push({p:Bt.clone(),s:ot.clone(),q:nt.clone(),c:Ft.clone()}),R.compose(Bt,nt,ot),pt.setColorAt(qt,Ft),pt.setMatrixAt(qt++,R)}pt.count=qt;let we=new Float32Array(Q);for(let Ae=0;Ae<Q;Ae++)we[Ae]=r(Ae*1.37,9.1);W.setAttribute("aHash",new Oi(we,1))}pt.castShadow=!0,pt.receiveShadow=!0,e.add(pt),J.plant(rt,0);let ut=(()=>{let R=new Qe,nt=(ot,Bt)=>r(ot*3.17+Bt,ot*1.91-Bt*2.3);for(let ot=0;ot<14;ot++){let Bt=ot%5,Ft=Bt/5,qt=1.1-Ft*.8,xe=.5+Ft*2.5,we=ot*2.39996+nt(ot,1)*.6,Ae=qt*(.62+.28*nt(ot,2)),ye=Math.cos(we)*Ae,Re=Math.sin(we)*Ae,be=.14+.16*nt(ot,3),Ge=.11+.05*nt(ot,4),pn=xe-.2*qt*(Ae/qt)*(Ae/qt);R.add(new Xt(.006,.008,be,4,1),{m:new Me().makeTranslation(ye,pn-be/2,Re),color:()=>[.35,.33,.3]});let Kt=new Ze(Ge,10,7),Be=Kt.attributes.position;for(let Ye=0;Ye<Be.count;Ye++){let Tn=Be.getY(Ye);Be.setY(Ye,(Tn<0?Tn*1.25:Tn)*.5)}Kt.computeVertexNormals();let nn=.6+.18*nt(ot,5);R.add(Kt,{m:new Me().makeTranslation(ye,pn-be-Ge*.5,Re),color:Ye=>{let Tn=.85+.25*Math.max(0,Ye.y-(pn-be-Ge*.5))/Ge;return[nn*Tn,nn*Tn,nn*Tn*.98]}})}return R.geometry()})(),ft=Yn({...J.shared,uMoss:{value:0},uFrost:{value:0}},F.uTree,{sway:.022,color:14211288}),vt=new gi(ut,ft,pt.count),se=rt.map((R,nt)=>r(nt*.37,5.1)<.5);{let R=new Me,nt=new Me().makeScale(0,0,0);rt.forEach((ot,Bt)=>vt.setMatrixAt(Bt,se[Bt]?R.compose(ot.p,ot.q,ot.s):nt)),vt.computeBoundingSphere()}vt.castShadow=!0,e.add(vt);let $t={uFruitCol:{value:0}};{let R=[13123630,14710826,14266416,10271290,12070954];rt.forEach((ot,Bt)=>vt.setColorAt(Bt,new he(R[Bt%R.length]))),vt.instanceColor.needsUpdate=!0;let nt=ft.onBeforeCompile;ft.onBeforeCompile=ot=>{nt(ot),Object.assign(ot.uniforms,$t),ot.vertexShader=ot.vertexShader.replace("#include <common>",`#include <common>
uniform float uFruitCol;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`)}}let ke=(()=>{let R=new Qe,nt=(ot,Bt,Ft,qt,xe)=>R.add(new Xt(xe*.35,xe,Ft,5).translate(0,Ft/2,0),{m:new Me().compose(new N(0,ot,0),new Fe().setFromEuler(new Sn(0,Bt,qt,"YXZ")),new N(1,1,1)),color:()=>[.36,.28,.22]});for(let ot=0;ot<16;ot++){let Bt=.55+ot*.17,Ft=(1-ot/18)*.9+.12;nt(Bt,ot*2.4,Ft,1.1+ot%3*.12,.03),nt(Bt+.05,ot*2.4+.9,Ft*.6,.8,.02)}return R.geometry()})(),Jt={value:0},ge=new gi(ke,Yn({...J.shared,uMoss:{value:0},uFrost:{value:0}},Jt,{sway:.018,color:12101784}),pt.count);{let R=new Me().makeScale(0,0,0),nt=new Me;rt.forEach((ot,Bt)=>ge.setMatrixAt(Bt,r(Bt*1.37,9.1)<.45?nt.compose(ot.p,ot.q,ot.s):R)),ge.computeBoundingSphere()}ge.castShadow=!0,e.add(ge);let mt=of(e,h),gt=qd({scene:e,camera:n,heightAt:m,water:v}),Pt=af(e,h),jt=new uo(16772829,0,280,lh.degToRad(32),.7,1.35);jt.castShadow=!1,jt.shadow.mapSize.set(1024,1024),jt.shadow.camera.near=.5,jt.shadow.camera.far=280,jt.shadow.bias=-.0012,jt.shadow.normalBias=.06,e.add(jt,jt.target);let Qt=new zi(16753498,0,120,1.25);e.add(Qt);let Ee=new hn({transparent:!0,depthWrite:!1,side:Wn,blending:es,fog:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new he(16773340)}},vertexShader:`
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
      }`}),Ue=new vn(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),_e=new ve(Ue,Ee);_e.frustumCulled=!1,_e.renderOrder=5,e.add(_e);let zt={state:"off",torch:{on:!1,since:-1e9,level:0},lamp:{on:!1,since:-1e9,level:0},level:0,aim:new N(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0},lt=(()=>{let R=document.createElement("canvas");R.width=256,R.height=128;let nt=R.getContext("2d"),ot=nt.createRadialGradient(128,64,0,128,64,128);return ot.addColorStop(0,"rgba(255,255,255,0.9)"),ot.addColorStop(.5,"rgba(255,255,255,0.35)"),ot.addColorStop(1,"rgba(255,255,255,0)"),nt.fillStyle=ot,nt.fillRect(0,0,256,128),new Ai(R)})(),ht=Array.from({length:9},(R,nt)=>{let ot=new Un({map:lt,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),Bt=new ve(new $e(d(380,620),d(70,120)),ot);return Bt.position.set(d(-400,400),d(8,45),-60-nt*70),Bt.userData.v=d(1.2,3.2)*(Math.random()<.5?-1:1),e.add(Bt),Bt}),wt=`
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);`,At=2600,yt=new Je;{let R=new Float32Array(At*6),nt=new Float32Array(At*2);for(let ot=0;ot<At;ot++){let Bt=d(-90,90),Ft=d(0,70),qt=d(-140,40);R.set([Bt,Ft,qt,Bt,Ft,qt],ot*6),nt[ot*2+1]=1}yt.setAttribute("position",new mn(R,3)),yt.setAttribute("aEnd",new mn(nt,1))}let Mt=new hn({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new he(14672870)}},vertexShader:`
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
      }`}),It=new to(yt,Mt);It.frustumCulled=!1,e.add(It);let G=(R,nt,ot,Bt,Ft)=>{let qt=new Je,xe=new Float32Array(R*3),we=new Float32Array(R);for(let Re=0;Re<R;Re++)xe.set([d(-nt[0],nt[0]),d(nt[1],nt[2]),d(nt[3],nt[4])],Re*3),we[Re]=Math.random();qt.setAttribute("position",new mn(xe,3)),qt.setAttribute("aSeed",new mn(we,1));let Ae=new hn({transparent:!0,depthWrite:!1,uniforms:{uTime:h.uTime,uOpacity:{value:0},uColor:{value:new he(Bt)},uSize:{value:Ft*t.getPixelRatio()}},vertexShader:ot,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          ${wt}
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),ye=new ts(qt,Ae);return ye.frustumCulled=!1,e.add(ye),ye},re=G(3200,[110,0,70,-160,40],`
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
    }`,16054008,3.2),St=G(900,[90,0,60,-120,40],`
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
    }`,13793836,4.2),D=G(260,[160,1,14,-220,30],`
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
    }`,14275248,5),f=(R,nt,ot)=>new N(R,nt,ot),X={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:f(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:f(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,cam:f(0,13,105),look:f(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:f(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:f(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:f(0,34,140),look:f(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:f(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:f(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:f(-38,22,112),look:f(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:f(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:f(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:f(24,11,78),look:f(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:f(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:f(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,cam:f(0,10,92),look:f(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:f(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:f(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#4f8f80",aur2:"#6f6595",mist:.15,cam:f(30,15,102),look:f(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:f(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:f(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:f(0,7,125),look:f(0,9,0)}};Object.assign(X,{spring:{sat:.78,skyTop:"#86acd2",skyHorizon:"#e4eef1",skyBottom:"#c9d8de",fog:"#dbe6e8",fogDensity:.0031,low:"#6e8f55",high:"#8ea478",snowC:"#eef2f2",snowLine:150,water:0,waterC:"#6a95a6",waterRough:.18,sunC:"#fff2d6",sunDir:f(.4,.42,-1),sunSize:.0018,lightC:"#fff3df",light:1,lightDir:f(.4,.7,-.3),hemiSky:"#dde9f1",hemiGround:"#5a6c48",hemi:.9,treeC:"#4a7342",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.2,cam:f(-20,12,100),look:f(0,12,-20),bloom:1,flowers:1,hives:1,creek:1,fishy:.3},summer:{sat:.92,skyTop:"#3f86cf",skyHorizon:"#cde6f4",skyBottom:"#93c4d6",fog:"#cbe2ec",fogDensity:.0021,low:"#5a8e42",high:"#7ba158",snowC:"#f2f4f4",snowLine:210,water:0,waterC:"#21b2b4",waterRough:.05,sunC:"#fff5d8",sunDir:f(.2,.62,-1),sunSize:.0026,lightC:"#fff6e4",light:1.35,lightDir:f(.3,.85,-.3),hemiSky:"#cbe6ff",hemiGround:"#4a6a38",hemi:.95,treeC:"#3d8a38",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:0,cam:f(10,11,110),look:f(0,10,-10),lush:1,fruitCol:1,sand:1,creek:.7,flowers:.45,fishy:.4},fall:{sat:.82,skyTop:"#7a93ab",skyHorizon:"#ead7bd",skyBottom:"#b8a38c",fog:"#d8c6ad",fogDensity:.0036,low:"#7d6b44",high:"#92805b",snowC:"#efece6",snowLine:175,water:0,waterC:"#5c7380",waterRough:.2,sunC:"#ffd7a4",sunDir:f(-.5,.24,-1),sunSize:.002,lightC:"#ffdaa8",light:.95,lightDir:f(-.5,.5,-.4),hemiSky:"#e5d4bd",hemiGround:"#5a4a34",hemi:.85,treeC:"#4c5a3a",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.3,cam:f(-30,14,105),look:f(0,12,-30),fall:1,bare:.4,leaves:1,creek:.5}}),Object.assign(X.aurora,{aur1:"#57e0a4",aur2:"#a77de0",dof:.3}),Object.assign(X.night,{dof:.6}),X.rain.fishy=1;let $={fall:0,bare:0,bloom:0,lush:0,leaves:0,flowers:0,hives:0,creek:0,fishy:0,sand:0,fruitCol:0,dof:1};for(let R in X)X[R]={...$,...X[R]};for(let R in X)Kc.forEach((nt,ot)=>{X[R][nt]=sf[R][ot]});let K=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],ct=["sunDir","lightDir","cam","look"],dt=R=>{let nt={};for(let ot in R)K.includes(ot)?nt[ot]=new he(R[ot]):ct.includes(ot)?nt[ot]=R[ot].clone():nt[ot]=R[ot];return nt},et=R=>dt(R),q=dt(X.rain),bt=et(q),Ot=et(q),Ut=0,kt=1,Gt=0,oe="rain",Tt="full",Y=!1,Rt=!1,xt=1,Vt=1,Yt=R=>R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2,Ct=R=>{for(let nt in Ot)K.includes(nt)||ct.includes(nt)?q[nt].copy(bt[nt]).lerp(Ot[nt],R):q[nt]=bt[nt]+(Ot[nt]-bt[nt])*R},Zt=0,ue=()=>{let R=q;h.uTop.value.copy(R.skyTop),h.uHorizon.value.copy(R.skyHorizon),h.uBottom.value.copy(R.skyBottom),h.uSunColor.value.copy(R.sunC),h.uSunDir.value.copy(R.sunDir).normalize(),h.uSunSize.value=R.sunSize,h.uStars.value=R.stars,h.uAurora.value=R.aurora,h.uAur1.value.copy(R.aur1),h.uAur2.value.copy(R.aur2),e.fog.color.copy(R.fog),e.fog.density=R.fogDensity*(1+P.focus*.35)*(1-.85*Zt),R.pCabin>.5?(y.uHole.value.set(...J.cabin.holeBox),U.uStudy.value.set(...J.cabin.studyBox)):(y.uHole.value.copy(p),U.uStudy.value.copy(p)),y.uLow.value.copy(R.low),y.uHigh.value.copy(R.high),y.uSnow.value.copy(R.snowC),y.uSnowLine.value=R.snowLine,v.position.y=R.water,C.color.copy(R.waterC),C.roughness=R.waterRough,T.color.copy(R.lightC),T.intensity=R.light*2.2,T.position.copy(R.lightDir).multiplyScalar(300),_.color.copy(R.hemiSky),_.groundColor.copy(R.hemiGround),_.intensity=R.hemi*1.6,z.color.copy(R.treeC),F.uTree.value=R.trees,pt.visible=R.trees>.01,vt.visible=pt.visible,j.uFall.value=R.fall,j.uBloom.value=R.bloom,j.uLush.value=R.lush,j.uBare.value=R.bare,$t.uFruitCol.value=R.fruitCol,y.uSand.value=R.sand,Jt.value=Math.min(1,R.bare*2.5)*R.trees,ge.visible=Jt.value>.01,St.material.uniforms.uOpacity.value=R.leaves*(1-Zt),St.visible=R.leaves*(1-Zt)>.01,Mt.uniforms.uOpacity.value=R.rain*(1-Zt),It.visible=R.rain*(1-Zt)>.01,re.material.uniforms.uOpacity.value=R.snow*(1-Zt),re.visible=R.snow*(1-Zt)>.01,D.material.uniforms.uOpacity.value=R.fire,D.visible=R.fire>.01;let nt=R.pCabin>.5&&J.cabin.inside(n.position.x,n.position.z)?1:0;Zt+=(nt-Zt)*.12,ht.forEach(ot=>{let Bt=Math.hypot(ot.position.x-n.position.x,ot.position.z-n.position.z);ot.material.opacity=R.mist*.5*l(12,80,Bt)*(1-Zt),ot.material.color.copy(R.fog),ot.visible=R.mist>.01&&Zt<.99}),ws.uSat.value=R.sat+(Math.max(R.sat,.8)-R.sat)*Zt},pe={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",R=>{pe.x=R.clientX/innerWidth*2-1,pe.y=R.clientY/innerHeight*2-1},{passive:!0});let Ne=7.5,yn=24,at={px:0,pz:0,vx:0,vz:0,homing:!1,yaw:0,yawTo:0,pitch:0,pitchTo:0,ground:0,on:!1},Ke=new Set,je={phase:0,amp:0,run:0,lastStep:0},fi=70,En={y:0,v:0,air:!1},Zn=-1.1,sn=.9,_n={x:-1,y:-1,inside:!1},ee={on:!1,t0:0,dur:1,tx:0,tz:0,sy:0,ty:0,yaw0:0,yaw1:0,lift:10,y:0,roll:0},bn=1/60,pi=new N,os=new N,si=new N,Xi=new N(0,1,0),P={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},k=new N,tt=new N,g=R=>{let nt=Tt!=="full";pe.sx+=(pe.x-pe.sx)*.035,pe.sy+=(pe.y-pe.sy)*.035;let ot=(nt?0:1)*(1-l(0,35,Math.hypot(at.px,at.pz)));n.position.set(q.cam.x+Math.sin(R*.05)*3*ot+pe.sx*6*ot,q.cam.y+Gt+Math.sin(R*.07)*.8*ot-pe.sy*2.5*ot,q.cam.z),k.copy(q.look),k.x+=pe.sx*3*ot;let Bt=Math.hypot(at.px,at.pz);if(Bt>.01||Math.abs(at.yaw)>5e-4||Math.abs(at.pitch)>5e-4){pi.copy(q.look).sub(q.cam);let we=pi.length();pi.normalize();let Ae=n.position.x+at.px,ye=n.position.z+at.pz,Re=m(Ae,ye);for(let Kt=0;Kt<6.28;Kt+=1.57)Re=Math.max(Re,m(Ae+Math.cos(Kt)*4,ye+Math.sin(Kt)*4));let be=J.floorAt(Ae,ye,q);Re=be&&be.under?be.y:Math.max(Re,v.position.y,be?be.y:-1e9),be&&be.under||(Re=Math.max(Re,J.solidTop(Ae,ye,at.ground-Ne+En.y,q)));let Ge=Re+Ne;at.ground+=(Ge-at.ground)*.12,at.ground=Math.max(at.ground,Re+3);let pn=l(0,35,Bt);n.position.set(Ae,Math.max(n.position.y*(1-pn)+at.ground*pn,pn>.5?Re+3:-1e9),ye),ee.on&&(n.position.y=Math.max(ee.y,Re+3),at.ground=n.position.y),n.position.y+=En.y,si.copy(pi).applyAxisAngle(Xi,at.yaw),si.y=si.y*(1-pn)-.04*pn+at.pitch,si.normalize(),k.copy(n.position).addScaledVector(si,we)}else at.ground=n.position.y;let Ft=P.focus;(Ft>5e-4||Math.abs(P.pan)>5e-4)&&(tt.copy(q.look).sub(q.cam).normalize(),n.position.addScaledVector(tt,Ft*34),n.position.y-=Ft*4-P.pulse*2,n.position.x+=P.pan*10*Ft,k.x+=P.pan*38*Ft,k.y-=Ft*3);let qt=ee.on?ee.roll:0;if(je.amp>.001&&Tt==="full"){let we=Math.sin(je.phase),Ae=Math.sin(je.phase*2),ye=je.amp*(1+je.run*.8),Re=-Math.abs(we)*.32*ye+.16*ye,be=we*.16*ye;n.position.y+=Re,tt.copy(k).sub(n.position),tt.y=0,tt.normalize(),n.position.x+=-tt.z*be,n.position.z+=tt.x*be,k.y+=Re*.5,qt+=we*.006*ye+Ae*.0015*ye}n.lookAt(k),qt&&n.rotateZ(qt);let xe=(innerWidth<700?62:50)-Ft*6+P.pulse*1.5;Math.abs(n.fov-xe)>.01&&(n.fov=xe,n.updateProjectionMatrix()),u.position.copy(n.position),It.position.set(n.position.x,n.position.y-20,n.position.z),re.position.set(n.position.x,n.position.y-20,n.position.z),St.position.set(n.position.x,n.position.y-20,n.position.z),D.position.set(q.look.x*.3,v.position.y,q.cam.z-90)},w=new N,A=new N,O=new N,it=new N,x=(R,nt,ot)=>{if(ot<0)return 0;if(R==="torch")return nt?ot<.04?.55:ot<.08?.12:ot<.16?.12+(ot-.08)/.08*.88:1:Math.max(0,1-ot/.12);if(nt){if(ot<.12)return ot/.12*.35;if(ot<.24)return .35-(ot-.12)/.12*.2;if(ot<.7){let Bt=(ot-.24)/.46;return .15+(1-Math.pow(1-Bt,3))*.85}return 1}return Math.max(0,1-Math.pow(ot/.5,.8))},b=(R,nt)=>{n.updateMatrixWorld(),w.set(0,0,-1).applyQuaternion(n.quaternion),A.set(1,0,0).applyQuaternion(n.quaternion),O.set(0,1,0).applyQuaternion(n.quaternion);let ot=1-Math.pow(1-.16,bn*60),Bt=Math.min(1.6,e.fog.density/.004),Ft=Mt.uniforms.uOpacity.value,qt=(R-zt.torch.since)/1e3,xe=x("torch",zt.torch.on,qt)*(zt.torch.on&&qt>.16?.985+.015*Math.sin(nt*40)*Math.sin(nt*7):1);if(zt.torch.level=xe,xe>.001){let Re=je.amp*(Tt==="full"?1:0);jt.position.copy(n.position).addScaledVector(A,.75).addScaledVector(O,-.6-Math.sin(je.phase)*.05*Re).addScaledVector(w,.4),it.copy(w),Tt==="full"&&(it.addScaledVector(A,Math.sin(nt*1.7)*.004+Math.sin(nt*4.3)*.002+Math.sin(je.phase)*.01*Re),it.addScaledVector(O,Math.sin(nt*2.1+1)*.004+Math.sin(je.phase*2)*.008*Re)),zt.aim.lerp(it.normalize(),Tt==="full"?ot:1).normalize(),jt.target.position.copy(jt.position).addScaledVector(zt.aim,40);let be=90,Ge=Math.tan(jt.angle)*be;_e.position.copy(jt.position),_e.lookAt(jt.target.position),_e.scale.set(Ge,Ge,be)}jt.intensity=xe*520,jt.castShadow=xe>.02,Ee.uniforms.uOpacity.value=xe*(.018+.03*Bt+.035*Ft),_e.visible=xe>.01;let we=(R-zt.lamp.since)/1e3,Ae=zt.lamp.on&&we>.7?.88+.07*Math.sin(nt*9.3+Math.sin(nt*3.1)*2)+.04*Math.sin(nt*23.7)+.02*Math.sin(nt*41):1,ye=x("lamp",zt.lamp.on,we)*Ae;if(zt.lamp.level=ye,Tt==="full"){let Re=(at.vx-zt.lastVX)/Math.max(bn,.001),be=(at.vz-zt.lastVZ)/Math.max(bn,.001),Ge=-(Re*w.z-be*w.x)*.0012,pn=-(Re*w.x+be*w.z)*.0012,Kt=bn;zt.swingV+=(-zt.swing*14-zt.swingV*1.8+Ge)*Kt,zt.swing+=zt.swingV*Kt,zt.swingZV+=(-zt.swingZ*14-zt.swingZV*1.8+pn+Math.sin(je.phase*2)*.6*je.amp)*Kt,zt.swingZ+=zt.swingZV*Kt}zt.lastVX=at.vx,zt.lastVZ=at.vz,Qt.position.copy(n.position).addScaledVector(A,1.1+Math.sin(zt.swing)*1.4).addScaledVector(O,-2.4+(1-Math.cos(zt.swing))*1.4).addScaledVector(w,2.2+Math.sin(zt.swingZ)*1),Tt==="full"&&zt.lamp.on&&(Qt.position.y+=Math.sin(nt*6.1)*.03),Qt.intensity=ye*900,zt.level=Math.max(xe,ye),_t.classList.toggle("light-on",zt.level>.05),_t.classList.toggle("lamp-on",ye>.05)},B=()=>{let R=performance.now(),nt=window.MEOW_SOUND;zt.state==="off"?(zt.state="torch",zt.torch.on=!0,zt.torch.since=R,zt.aim.copy(w.lengthSq()?w:zt.aim),nt&&nt.click&&nt.click(!0)):zt.state==="torch"?(zt.state="lamp",zt.torch.on=!1,zt.torch.since=R,zt.lamp.on=!0,zt.lamp.since=R+120,nt&&nt.click&&nt.click(!1),nt&&nt.ignite&&setTimeout(()=>nt.ignite(),120)):(zt.state="off",zt.lamp.on=!1,zt.lamp.since=R,nt&&nt.puff&&nt.puff()),nt&&nt.fire&&nt.fire(zt.state==="lamp"),!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi)),dispatchEvent(new CustomEvent("meow:light",{detail:{state:zt.state}}))},H=(R,nt,ot)=>{if(pt.visible&&F.uTree.value>.5)for(let Bt=0;Bt<rt.length;Bt++){let Ft=rt[Bt],qt=Ft.p.x-R,xe=Ft.p.z-nt,we=Ft.s.x*.75+1.2+ot;if(qt*qt+xe*xe<we*we)return!1}return!J.blockedAt(R,nt,ot,q)},V=()=>{let R=q.cam.x,nt=q.cam.z,ot=q.look.x-q.cam.x,Bt=q.look.z-q.cam.z,Ft=Math.hypot(ot,Bt)||1,qt=Math.atan2(Bt/Ft,ot/Ft),xe=pt.visible&&F.uTree.value>.5,we=v.position.y,Ae=[];for(let be=-.7;be<=.701;be+=.05)for(let Ge=70;Ge<=380;Ge+=10){let pn=qt+be,Kt=R+Math.cos(pn)*Ge,Be=nt+Math.sin(pn)*Ge,nn=m(Kt,Be);if(nn<we+1.5||nn>fi-6)continue;let Ye=0;if(xe)for(let An=0;An<rt.length;An++){let Nn=rt[An].p.x-Kt,Bn=rt[An].p.z-Be;Nn*Nn+Bn*Bn<1600&&Ye++}let Tn=(xe?Math.min(Ye,22)*2:30)-Math.abs(be)*34-Ge*.045;Ae.push({x:Kt,z:Be,a:be,d:Ge,score:Tn})}Ae.sort((be,Ge)=>Ge.score-be.score);let ye=null;for(let be of Ae.slice(0,60)){if(!H(be.x,be.z,4))continue;let Ge=!0,pn=(R-be.x)/be.d,Kt=(nt-be.z)/be.d;for(let Be=2;Be<70&&Ge;Be+=2.5)Ge=H(be.x+pn*Be,be.z+Kt*Be,1.5);for(let Be=3;Be<30&&Ge;Be+=3)Ge=H(be.x-pn*Be,be.z-Kt*Be,1);if(Ge){ye=be;break}}ye||(ye={x:R+Math.cos(qt)*60,z:nt+Math.sin(qt)*60,a:0,d:60});let Re=Tt==="full";ee.on=!0,ee.t0=performance.now(),ee.dur=Re?2300+ye.d*5.2:700,ee.sx=at.px,ee.sz=at.pz,ee.tx=ye.x-R,ee.tz=ye.z-nt,ee.sy=n.position.y,ee.ty=Math.max(m(ye.x,ye.z),we)+Ne,ee.yaw0=at.yaw,ee.yaw1=-ye.a,ee.lift=Re?9+ye.d*.02:0,at.vx=at.vz=0,at.homing=!1,!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi))},Et=R=>(R=Math.min(1,Math.max(0,R)),R*R*R*(R*(R*6-15)+10)),Lt=R=>{let nt=Math.min(1,(R-ee.t0)/ee.dur),ot=Et(nt);at.px=ee.sx+(ee.tx-ee.sx)*ot,at.pz=ee.sz+(ee.tz-ee.sz)*ot,at.vx=at.vz=0;let Bt=Et(nt/.55);at.yaw=at.yawTo=ee.yaw0+(ee.yaw1-ee.yaw0)*Bt,at.pitch=at.pitchTo=-.07*Math.sin(Math.PI*nt)*(1-nt*.5);let Ft=q.cam.x+at.px,qt=q.cam.z+at.pz,xe=Et((nt-.3)/.7),we=ee.sy+(ee.ty-ee.sy)*xe+ee.lift*Math.pow(Math.sin(Math.PI*Math.min(1,nt*1.15)),1.4);we=Math.max(we,Math.max(m(Ft,qt),v.position.y)+4),ee.y=we,ee.roll=(ee.yaw1-ee.yaw0)*.22*Math.sin(Math.PI*Math.min(1,nt*1.3)),nt>=1&&(ee.on=!1,ee.roll=0,at.ground=ee.ty,ee.justLanded=!0)},_t=document.documentElement,Ht=(R,nt,ot)=>Math.max(nt,Math.min(ot,R)),Wt=()=>!Rt||_t.classList.contains("locked")||P.focusTo>0,de=R=>R&&R.closest&&R.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),fe=()=>{Y||as()},te=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"],Se=R=>R&&(/INPUT|TEXTAREA|SELECT/.test(R.tagName)||R.isContentEditable),ne=!1;addEventListener("keydown",R=>{!te.includes(R.code)||Se(R.target)||Wt()||R.metaKey||R.ctrlKey||R.altKey||document.querySelector(".modal:not([hidden])")||(R.code.startsWith("Shift")||R.preventDefault(),Ke.add(R.code),at.homing=!1,!ee.on&&!R.code.startsWith("Shift")&&Math.hypot(at.px,at.pz)<3&&(V(),ae()),!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi)))}),addEventListener("keyup",R=>Ke.delete(R.code)),addEventListener("keydown",R=>{R.code!=="KeyF"||R.repeat||Se(R.target)||!Rt||_t.classList.contains("locked")||document.querySelector(".modal:not([hidden])")||R.metaKey||R.ctrlKey||R.altKey||(R.preventDefault(),B())}),addEventListener("blur",()=>{Ke.clear(),_n.inside=!1}),document.addEventListener("mouseleave",()=>{_n.inside=!1}),addEventListener("keydown",R=>{R.code!=="KeyR"||R.repeat||Se(R.target)||Wt()||!at.on||ee.on||R.metaKey||R.ctrlKey||document.querySelector(".modal:not([hidden])")||gt.key(performance.now())&&(R.preventDefault(),!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi)))}),addEventListener("keydown",R=>{R.code!=="Space"||Se(R.target)||Wt()||!at.on||ee.on||document.querySelector(".modal:not([hidden])")||(R.preventDefault(),!(R.repeat||En.air)&&(En.v=15.5,En.air=!0,!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi))))});let Ce=()=>[innerWidth/2,innerHeight/2],me=()=>!!document.pointerLockElement,ln=0,ae=()=>{if(!(me()||!i.requestPointerLock||ln>0))try{let R=i.requestPointerLock();R&&R.catch&&R.catch(()=>{ln++})}catch{ln++}};document.addEventListener("pointerlockerror",()=>{ln++});let wn=()=>{me()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())},We=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),Xn=()=>{!at.on||Wt()||J.cabin.study.back(performance.now())||window.MEOW_BG&&window.MEOW_BG.home()},Dn=(R,nt)=>(ks.set(R/innerWidth*2-1,-(nt/innerHeight)*2+1),Ss.setFromCamera(ks,n),Ss),ti=document.createElement("div");ti.className="aim-dot",document.body.appendChild(ti),document.addEventListener("pointerlockchange",()=>{if(_t.classList.toggle("pl",me()),!me()){let R=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",R||setTimeout(()=>{document.hasFocus()&&!document.hidden&&Xn()},80)}me()?(rn.x=Ce()[0],rn.y=Ce()[1]):rn.id>=0&&Qc(-1)}),addEventListener("keydown",R=>{if(R.key!=="Escape"||!at.on||Se(R.target)||document.querySelector(".modal:not([hidden])"))return;let nt=document.getElementById("treeCard");nt&&!nt.hidden&&nt.classList.contains("show")||Xn()},!0);let ei={aimed:!1},Xe=document.createElement("div");Xe.className="act-hint",Xe.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(Xe);let fn=Xe.querySelector("span"),vi=(R,nt)=>window.MEOW_I18N?window.MEOW_I18N.t(R):nt,en=!1,Mi=0,qi=(R,nt)=>{let ot=J.cabin.door;if(!at.on||ee.on||q.pCabin<.5||!ot.near(n.position.x,n.position.z))return!1;ks.set(R/innerWidth*2-1,-(nt/innerHeight)*2+1),Ss.setFromCamera(ks,n);let Bt=Ss.intersectObject(ot.mesh,!1)[0];return!!Bt&&Bt.distance<26},Cr=()=>{let R=J.cabin.door;if(!R.canToggle(n.position.x,n.position.z))return!1;let nt=R.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(nt),!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi)),!0},cf=()=>{if(++Mi%3)return;let[R,nt]=me()?Ce():[rn.x,rn.y];ei.aimed=qi(R,nt);let ot=J.cabin.study.hover(Dn(R,nt),at.on&&!ee.on&&q.pCabin>.5&&Zt>.5);_t.classList.toggle("on-book",ot),ei.aimed!==en&&(en=ei.aimed,Xe.classList.toggle("show",ei.aimed)),ei.aimed&&(fn.textContent=J.cabin.door.open?vi("doorClose","Click to close the door"):vi("doorOpen","Click to open the door"))};addEventListener("keydown",R=>{R.code!=="KeyE"||Se(R.target)||Wt()||!at.on||R.repeat||J.cabin.door.near(n.position.x,n.position.z)&&q.pCabin>.5&&Cr()});let ai=null,Hs=null,rn={x:0,y:0,pending:!1,id:-1};addEventListener("pointerdown",R=>{if(Wt()||de(R.target)||ee.on)return;if(R.button===2||R.pointerType==="touch"&&R.button===0)ai={x:R.clientX,y:R.clientY,yaw:at.yawTo,pitch:at.pitchTo,moved:!1,touch:R.pointerType==="touch"},R.preventDefault();else if(R.button===0){if(at.on&&!me()&&R.pointerType==="mouse"&&!ln&&i.requestPointerLock){ae(),Hs=null,R.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}Hs={x:R.clientX,y:R.clientY},R.preventDefault()}}),addEventListener("contextmenu",R=>{Rt&&!de(R.target)&&!_t.classList.contains("locked")&&R.preventDefault()}),addEventListener("pointermove",R=>{if(ai){let nt=R.clientX-ai.x,ot=R.clientY-ai.y;Math.hypot(nt,ot)>5&&(ai.moved=!0),at.yawTo=ai.yaw-nt*.0035,at.pitchTo=Ht(ai.pitch-ot*.0025,Zn,sn),_t.classList.add("looking"),fe();return}if(me()){if(at.on&&!ee.on&&!Wt()){let nt=We();at.yawTo-=R.movementX*.0024*nt,at.pitchTo=Ht(at.pitchTo-R.movementY*.002*nt,Zn,sn),fe()}return}if(_n.x=R.clientX,_n.y=R.clientY,_n.inside=!0,_n.ui=!!de(R.target),Wt()||de(R.target)){rn.id>=0&&Qc(-1);return}if(at.on&&!ee.on&&R.pointerType!=="touch"&&(R.movementX||R.movementY)){let nt=We();at.yawTo-=R.movementX*.0028*nt,at.pitchTo=Ht(at.pitchTo-R.movementY*.0022*nt,Zn,sn),fe()}rn.x=R.clientX,rn.y=R.clientY,rn.pending=!0},{passive:!0}),addEventListener("pointerup",R=>{let nt=!1;if(ai?(nt=ai.touch&&!ai.moved,ai=null,_t.classList.remove("looking")):Hs&&R.button===0&&(nt=me()||Math.hypot(R.clientX-Hs.x,R.clientY-Hs.y)<8),Hs=null,nt){let[ot,Bt]=me()?Ce():[R.clientX,R.clientY];if(at.on&&gt.click(performance.now()))return;if(at.on&&q.pCabin>.5&&Zt>.5&&J.cabin.study.click(Dn(ot,Bt),performance.now())){fe();return}if(qi(ot,Bt)){Cr();return}let Ft=rn.id>=0?rn.id:Uh(ot,Bt);Ft>=0?(Pr.set(Ft,performance.now()),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Ft,x:ot,y:Bt}})),fe()):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))}});let Ss=new mo;Ss.far=900;let ks=new le,Uh=(R,nt)=>{if(!pt.visible||F.uTree.value<.5)return-1;ks.set(R/innerWidth*2-1,-(nt/innerHeight)*2+1),Ss.setFromCamera(ks,n);let ot=Ss.intersectObjects([pt,vt],!1)[0];return ot?ot.instanceId:-1},lf=new he(2.6,2.6,2.4),Qc=R=>{R!==rn.id&&(rn.id>=0&&pt.setColorAt(rn.id,rt[rn.id]?rt[rn.id].c:st),rn.id=R,R>=0&&pt.setColorAt(R,lf),pt.instanceColor.needsUpdate=!0,_t.classList.toggle("on-tree",R>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:R>=0?{type:"hover",id:R,x:rn.x,y:rn.y}:{type:"leave"}})),fe())},Pr=new Map,Fh=new Fe,Oh=new Sn,jc=new Me,hf=R=>{Pr.size&&(Pr.forEach((nt,ot)=>{let Bt=(R-nt)/1e3,Ft=rt[ot];if(!Ft){Pr.delete(ot);return}let qt=Bt>2.6?0:Math.sin(Bt*15)*Math.exp(-Bt*2.1)*.17;Oh.set(qt*.6,0,qt),Fh.setFromEuler(Oh).multiply(Ft.q),jc.compose(Ft.p,Fh,Ft.s),pt.setMatrixAt(ot,jc),se[ot]&&vt.setMatrixAt(ot,jc),Bt>2.6&&Pr.delete(ot)}),pt.instanceMatrix.needsUpdate=!0,vt.instanceMatrix.needsUpdate=!0)},tl=new Qn(4,4,{type:di,depthBuffer:!0}),ws={tScene:{value:tl.texture},uRes:{value:new le(4,4)},uTime:h.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01}},Bh=new ur,uf=new ys(-1,1,1,-1,0,1);Bh.add(new ve(new $e(2,2),new hn({uniforms:ws,depthTest:!1,depthWrite:!1,vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      uniform sampler2D tScene; uniform vec2 uRes;
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
      }`})));let zh=0,Ir=()=>{let R=innerWidth,nt=innerHeight;t.setSize(R,nt,!1);let ot=t.getDrawingBufferSize(new le);tl.setSize(ot.x,ot.y),ws.uRes.value.copy(ot),n.aspect=R/nt,n.fov=R<700?62:50,n.updateProjectionMatrix(),Y||as()},Hh=0,kh=R=>{let nt=s.getElapsedTime();h.uTime.value=nt;let ot=Math.min(1,(R-Ut)/kt);Ct(Yt(ot)),Gt=Math.sin(Math.PI*Yt(ot))*(Tt==="full"?9:0)*(ot<1?1:0),S.offset.x=nt*.004,S.offset.y=nt*.006,ht.forEach(Kt=>{Kt.position.x+=Kt.userData.v*.016,Kt.position.x>520&&(Kt.position.x=-520),Kt.position.x<-520&&(Kt.position.x=520),Kt.lookAt(n.position.x,Kt.position.y,n.position.z)}),xt+=(Vt-xt)*.04;let Bt=Tt==="full"?.035:1;P.focus+=(P.focusTo-P.focus)*Bt,P.pan+=(P.panTo-P.pan)*(Tt==="full"?.05:1),P.pulse*=.94;let Ft=Tt==="full",qt=Math.min(.1,Math.max(.001,(R-(Hh||R))/1e3))*60,xe=Kt=>Ft?1-Math.pow(1-Kt,qt):1;{let Kt=qt/60,Be=q.look.x-q.cam.x,nn=q.look.z-q.cam.z,Ye=Math.hypot(Be,nn)||1,Tn=Math.cos(at.yaw),An=Math.sin(at.yaw),Nn=Be/Ye*Tn+nn/Ye*An,Bn=-(Be/Ye)*An+nn/Ye*Tn,Yi=ee.on?0:1,Lr=Yi*((Ke.has("KeyW")||Ke.has("ArrowUp")?1:0)-(Ke.has("KeyS")||Ke.has("ArrowDown")?1:0)),Do=Yi*((Ke.has("KeyD")||Ke.has("ArrowRight")?1:0)-(Ke.has("KeyA")||Ke.has("ArrowLeft")?1:0)),No=Nn*Lr-Bn*Do,Uo=Bn*Lr+Nn*Do,Fo=Math.hypot(No,Uo),Xh=yn*(Ke.has("ShiftLeft")||Ke.has("ShiftRight")?2.4:1);Fo>0&&(No=No/Fo*Xh,Uo=Uo/Fo*Xh);let qh=1-Math.pow(1-(Fo>0?.08:.12),qt);at.vx+=(No-at.vx)*qh,at.vz+=(Uo-at.vz)*qh;let nl=(zo,pf)=>{let Ho=q.cam.x+zo,Dr=q.cam.z+pf;if(!(Math.abs(Ho)<820&&Dr>-900&&Dr<420&&m(Ho,Dr)<fi))return!1;if(pt.visible&&F.uTree.value>.5)for(let il=0;il<rt.length;il++){let sl=rt[il],Yh=sl.p.x-Ho,Zh=sl.p.z-Dr,Jh=sl.s.x*.75+1.2;if(Yh*Yh+Zh*Zh<Jh*Jh)return!1}return!J.blockedAt(Ho,Dr,0,q,at.ground-Ne+En.y)},Oo=at.px+at.vx*Kt,Bo=at.pz+at.vz*Kt;if(ee.on?Lt(R):nl(Oo,Bo)?(at.px=Oo,at.pz=Bo):nl(Oo,at.pz)?(at.px=Oo,at.vz*=.5):nl(at.px,Bo)?(at.pz=Bo,at.vx*=.5):(at.vx*=.3,at.vz*=.3),at.homing){let zo=1-Math.pow(.94,qt);at.px-=at.px*zo,at.pz-=at.pz*zo,at.vx=at.vz=0,Math.hypot(at.px,at.pz)<.05&&(at.px=at.pz=0,at.homing=!1)}let ff=R-Math.max(zt.torch.since,zt.lamp.since)<1200;ne&&!Ke.size&&Math.hypot(at.vx,at.vz)<.05&&!at.homing&&!ff&&!ee.on&&!En.air&&(ne=!1,Y=Tt==="full")}if(bn=qt/60,En.air&&(En.v-=44*bn,En.y+=En.v*bn,En.y<=0&&(En.y=0,En.air=!1,je.amp=Math.min(1.4,je.amp+.5),window.MEOW_SOUND&&window.MEOW_SOUND.step))){let Kt=n.position.x,Be=n.position.z,nn=m(Kt,Be),Ye=(J.floorAt(Kt,Be,q)||{y:-1e9}).y>nn+.2?"wood":nn<v.position.y+.6?"water":oe==="snow"||nn>y.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Ye,1.5),setTimeout(()=>window.MEOW_SOUND.step(Ye,1.1),70)}if(me()&&at.on&&!Wt()&&Mi%3===1){let[Kt,Be]=Ce();rn.x=Kt,rn.y=Be,rn.pending=!0}if(!me()&&at.on&&!ee.on&&_n.inside&&!_n.ui&&!ai&&!Wt()&&Tt==="full"&&_n.y>innerHeight*.15&&_n.y<innerHeight*.85){let Kt=Math.max(30,innerWidth*.04);_n.x>innerWidth-Kt?at.yawTo-=1.1*bn*(_n.x-(innerWidth-Kt))/Kt:_n.x>=0&&_n.x<Kt&&(at.yawTo+=1.1*bn*(Kt-_n.x)/Kt)}cf();{let[Kt,Be]=me()?Ce():[rn.x,rn.y];gt.update(R,nt,{active:at.on&&!ee.on&&!Wt(),ray:at.on?Dn(Kt,Be):null,waterY:v.position.y,amount:q.fishy,indoor:Zt>.5}),gt.busy&&!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi))}J.cabin.feet=at.on?at.ground-Ne:void 0,at.on&&!ee.on&&ee.justLanded&&(ee.justLanded=!1,ae()),!at.on&&me()&&wn();{let Kt=Math.hypot(at.vx,at.vz),Be=Ke.has("ShiftLeft")||Ke.has("ShiftRight")?1:0;je.run+=(Be-je.run)*(1-Math.pow(.9,qt));let nn=Math.min(1.2,Kt/yn);je.amp+=(nn-je.amp)*(1-Math.pow(.88,qt)),je.phase+=Math.PI*2*(.95+.5*je.run)*Math.min(1,Kt/yn+.15)*bn*(Kt>.3?1:.4);let Ye=Math.floor(je.phase/Math.PI);if(Ye!==je.lastStep){if(je.lastStep=Ye,Kt>yn*.25&&window.MEOW_SOUND&&window.MEOW_SOUND.step){let An=n.position.x,Nn=n.position.z,Bn=m(An,Nn),Yi=(J.floorAt(An,Nn,q)||{y:-1e9}).y>Bn+.2?"wood":Bn<v.position.y+.6?"water":oe==="snow"||Bn>y.uSnowLine.value-6?"snow":"grass";window.MEOW_SOUND.step(Yi,Math.min(1.5,Kt/yn))}let Tn=m(n.position.x,n.position.z);if(Kt>yn*.25&&Tn>v.position.y+.6&&(oe==="snow"||Tn>y.uSnowLine.value+4)){let An=n.position.x,Nn=n.position.z,Bn=1.5,Yi=new N(m(An-Bn,Nn)-m(An+Bn,Nn),2*Bn,m(An,Nn-Bn)-m(An,Nn+Bn)).normalize();Zt<.5&&Pt.place(An,m(An,Nn),Nn,Math.atan2(-at.vx,-at.vz),Yi)}}}let we=Math.hypot(at.px,at.pz);if(!ai&&we<2&&!ee.on){let Kt=Math.pow(.96,qt);at.yawTo*=Kt,at.pitchTo*=Kt}at.yaw+=(at.yawTo-at.yaw)*xe(.12),at.pitch+=(at.pitchTo-at.pitch)*xe(.12);let Ae=we>3;Ae!==at.on&&(at.on=Ae,_t.classList.toggle("exploring",Ae)),hf(R),t.toneMappingExposure=xt,ue(),g(nt),J.update(q,nt,n.position,v.position.y),mt.update(q.pRipples*(1-Zt),n.position,v.position.y),Pt.update(Math.min(1,Math.max(0,(100-q.snowLine)/80))),b(R,nt),rn.pending&&(rn.pending=!1,Qc(Zt>.5?-1:Uh(rn.x,rn.y)));let ye=t.getPixelRatio(),Re=Tt==="full",be=ot<1?Math.sin(Math.PI*Yt(ot))*6:0,Ge=Re?Math.max(0,1-(R-zh)/3600):0,pn=l(0,60,Math.hypot(at.px,at.pz));ws.uBlur.value=2.6*ye*(1+P.focus*2.6)*(1-pn*.7)*q.dof,ws.uBand.value=.22-P.focus*.1+pn*.12,ws.uPull.value=(be*(Re?1:0)+Math.pow(Ge,1.6)*18+P.pulse*3)*ye,ws.uFlicker.value=Re?.012:0,t.setRenderTarget(tl),t.render(e,n),t.setRenderTarget(null),t.render(Bh,uf),Hh=R},Jn={last:0,sum:0,n:0,level:0,since:0},el=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],df=R=>{Jn.since||(Jn.since=R);let nt=R-(Jn.last||R);if(Jn.last=R,!(R-Jn.since<5e3||nt>250||document.hidden)&&(Jn.sum+=nt,Jn.n++,Jn.n>=90)){let ot=Jn.sum/Jn.n;Jn.sum=Jn.n=0,ot>30&&Jn.level<el.length-1&&el[Jn.level+1]<t.getPixelRatio()&&(Jn.level++,t.setPixelRatio(el[Jn.level]),Ir())}},Pi=R=>{Y&&(document.hidden||(kh(R),df(R)),requestAnimationFrame(Pi))},as=()=>{Rt&&(Ut=-1e9,xt=Vt,kh(performance.now()))},Gh=()=>document.documentElement.getAttribute("data-theme")==="dark"?.62:1,Vh=(R,nt)=>{X[R]||(R="rain"),oe=R,document.documentElement.setAttribute("data-scene",R),bt=et(q),Ot=dt(X[R]),Ut=performance.now(),kt=Tt==="full"?nt:1,Rt&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:R,dur:kt}})),Y||as()},Wh=()=>{Rt&&(Tt==="full"?Y||(Y=!0,requestAnimationFrame(Pi)):(Y=!1,as()))};window.MEOW_BG={scenes:Object.keys(X),setScene(R){if(!(R===oe&&Rt)){if(!Rt){oe=X[R]?R:"rain",document.documentElement.setAttribute("data-scene",oe);return}Vh(R,3200)}},setMotion(R){Tt=R==="reduced"?"reduced":"full",Wh()},focus(R){P.focusTo=R?1:0,R&&(wn(),ee.on=!1,at.homing=!0,at.yawTo=at.pitchTo=0),Y||as()},toggleLight(){B()},_standAt(R,nt,ot){at.px=R-q.cam.x,at.pz=nt-q.cam.z,at.vx=at.vz=0,J.cabin.feet=ot==="study"?ze.y+Mn.floor*ze.S:ot==="mezz"?ze.y+Mn.mezz*ze.S:void 0;let Bt=J.floorAt(R,nt,q);at.ground=(Bt&&Bt.under?Bt.y:Math.max(m(R,nt),v.position.y,Bt?Bt.y:-1e9))+Ne,J.cabin.feet=at.ground-Ne,Y||as()},_look(R,nt,ot=0){let Bt=q.look.x-q.cam.x,Ft=q.look.z-q.cam.z,qt=q.cam.x+at.px,xe=q.cam.z+at.pz,we=Math.atan2(Ft,Bt)-Math.atan2(nt-xe,R-qt);we=Math.atan2(Math.sin(we),Math.cos(we)),at.yaw=at.yawTo=we,at.pitch=at.pitchTo=ot,Y||as()},_printAt(R,nt,ot){Pt.place(R,m(R,nt),nt,ot,new N(0,1,0))},_toggleDoor(){J.cabin.door.toggle(performance.now())},get _study(){return J.cabin.study},get _cabin(){return J.cabin},get _props(){return J},get _cur(){return q},_pos(){let R=new N;return n.getWorldDirection(R),{x:q.cam.x+at.px,z:q.cam.z+at.pz,fly:ee.on,pitch:at.pitch,lookY:R.y,yaw:at.yaw,yawTo:at.yawTo,dx:R.x,dz:R.z,cx:n.position.x,cy:n.position.y,cz:n.position.z,ground:at.ground,homing:at.homing}},_sites(){return{cabin:J.cabinAt,circle:J.circleAt}},_nearTree(R,nt=16){let ot=rt[R%rt.length];ot&&this._standAt(ot.p.x,ot.p.z+nt)},enter(){Rt&&!ee.on&&!Wt()&&Math.hypot(at.px,at.pz)<3&&(V(),ae())},home(){wn(),J.cabin.study.reset(performance.now()),gt.reset();let R=Math.round(at.yaw/(Math.PI*2))*Math.PI*2;at.yaw-=R,at.yawTo-=R,ee.on=!1,at.homing=!0,at.yawTo=0,at.pitchTo=0,Ke.clear(),!Y&&Rt&&(Y=!0,ne=!0,requestAnimationFrame(Pi))},pan(R){P.panTo=Math.max(-1,Math.min(1,R||0))},pulse(){Tt==="full"&&(P.pulse=1)},start(){Rt||(Rt=!0,Vt=xt=Gh(),q=dt(X[oe]),Tt==="full"&&(q.cam.add(new N(0,120,230)),q.look.add(new N(0,30,0))),Ir(),zh=performance.now(),Vh(oe,4200),i.classList.add("on"),Wh())}};{let R=document.querySelector(".walk-hint");R&&R.addEventListener("click",()=>window.MEOW_BG.enter())}addEventListener("resize",()=>{clearTimeout(Ir.t),Ir.t=setTimeout(Ir,120)}),new MutationObserver(()=>{Vt=Gh(),Y||as()}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let Lo=window.MEOW_STATE;Lo&&(oe=X[Lo.scene]?Lo.scene:"rain",Tt=Lo.motion==="reduced"?"reduced":"full"),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
