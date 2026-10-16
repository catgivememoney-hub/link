(()=>{var sc="186";var od=0,Yl=1,cd=2;var qs=1,ld=2,Lr=3,hi=0,En=1,an=2,zi=0,Dr=1,ni=2,Kl=3,Jl=4,hd=5;var Xs=100,ud=101,dd=102,fd=103,pd=104,md=200,gd=201,xd=202,bd=203,Zl=204,$l=205,vd=206,yd=207,_d=208,Md=209,Ed=210,Sd=211,wd=212,Td=213,Ad=214,wo=0,To=1,Ao=2,mr=3,Ro=4,Co=5,Po=6,Io=7,rc=0,Rd=1,Cd=2,Mi=0,Ql=1,eh=2,th=3,Ia=4,nh=5,ih=6,sh=7,Fl="attached",Pd="detached",rh=300,ws=301,js=302,ac=303,oc=304,La=306,Ii=1e3,ci=1001,gr=1002,mn=1003,cc=1004;var Ys=1005;var fn=1006,Nr=1007;var Ei=1008;var Jn=1009,ah=1010,oh=1011,Fr=1012,lc=1013,Si=1014,ii=1015,kn=1016,hc=1017,uc=1018,Ur=1020,ch=35902,lh=35899,hh=1021,uh=1022,si=1023,Li=1026,Ts=1027,Or=1028,dc=1029,As=1030,fc=1031;var pc=1033,Da=33776,Na=33777,Fa=33778,Ua=33779,mc=35840,gc=35841,xc=35842,bc=35843,vc=36196,yc=37492,_c=37496,Mc=37488,Ec=37489,Oa=37490,Sc=37491,wc=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Dc=37816,Nc=37817,Fc=37818,Uc=37819,Oc=37820,Bc=37821,zc=36492,kc=36494,Hc=36495,Gc=36283,Vc=36284,Ba=36285,Wc=36286;var Fs=2300,Us=2301,Mo=2302,Ul=2303,Ol=2400,Bl=2401,zl=2402,Id=2500;var dh=0,za=1,Br=2,Ld=3200;var ka=0,Dd=1,as="",hn="srgb",Bn="srgb-linear",ca="linear",Kt="srgb";var Eo=7680;var Nd=519,Fd=512,Ud=513,Od=514,qc=515,Bd=516,zd=517,Xc=518,kd=519,fh=35044,ph=35048;var mh="300 es",yi=2e3,xr=2001;function h0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function u0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hd(){let s=br("canvas");return s.style.display="block",s}var vu={},vr=null;function la(...s){let e="THREE."+s.shift();vr?vr("log",e,...s):console.log(e,...s)}function Gd(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function rt(...s){s=Gd(s);let e="THREE."+s.shift();if(vr)vr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function gt(...s){s=Gd(s);let e="THREE."+s.shift();if(vr)vr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ns(...s){let e=s.join(" ");e in vu||(vu[e]=!0,rt(...s))}function Vd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wd={[wo]:To,[Ao]:Po,[Ro]:Io,[mr]:Co,[To]:wo,[Po]:Ao,[Io]:Ro,[Co]:mr},Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=1234567,sa=Math.PI/180,Os=180/Math.PI;function _i(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function gh(s,e){return(s%e+e)%e}function d0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function f0(s,e,t){return s!==e?(t-s)/(e-s):0}function ra(s,e,t){return(1-t)*s+t*e}function p0(s,e,t,n){return ra(s,e,1-Math.exp(-t*n))}function m0(s,e=1){return e-Math.abs(gh(s,e*2)-e)}function g0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function x0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function b0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function v0(s,e){return s+Math.random()*(e-s)}function y0(s){return s*(.5-Math.random())}function _0(s){s!==void 0&&(yu=s);let e=yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(s){return s*sa}function E0(s){return s*Os}function S0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function w0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function T0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function A0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),h=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*d,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*d,o*l);break;case"ZXZ":s.set(c*d,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*h,o*l);break;case"YXY":s.set(c*h,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*h,o*u,o*l);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ha={DEG2RAD:sa,RAD2DEG:Os,generateUUID:_i,clamp:At,euclideanModulo:gh,mapLinear:d0,inverseLerp:f0,lerp:ra,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:x0,randInt:b0,randFloat:v0,randFloatSpread:y0,seededRandom:_0,degToRad:M0,radToDeg:E0,isPowerOfTwo:S0,ceilPowerOfTwo:w0,floorPowerOfTwo:T0,setQuaternionFromProperEuler:A0,normalize:Zt,denormalize:vi},Mh=class Mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;var je=Mh,ot=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],f=r[a+0],h=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||c!==f||l!==h||u!==g){let x=c*f+l*h+u*g+d*M;x<0&&(f=-f,h=-h,g=-g,M=-M,x=-x);let p=1-o;if(x<.9995){let b=Math.acos(x),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,c=c*p+f*o,l=l*p+h*o,u=u*p+g*o,d=d*p+M*o}else{c=c*p+f*o,l=l*p+h*o,u=u*p+g*o,d=d*p+M*o;let b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*h-l*f,e[t+1]=c*g+u*f+l*d-o*h,e[t+2]=l*g+u*h+o*f-c*d,e[t+3]=u*g-o*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(r/2),f=c(n/2),h=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-i)*h}else if(n>o&&n>d){let h=2*Math.sqrt(1+n-o-d);this._w=(u-c)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(r+l)/h}else if(o>d){let h=2*Math.sqrt(1+o-n-d);this._w=(r-l)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=i+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var D=Eh,cl=new D,_u=new ot,Sh=class Sh{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],M=i[0],x=i[3],p=i[6],b=i[1],w=i[4],y=i[7],S=i[2],A=i[5],R=i[8];return r[0]=a*M+o*b+c*S,r[3]=a*x+o*w+c*A,r[6]=a*p+o*y+c*R,r[1]=l*M+u*b+d*S,r[4]=l*x+u*w+d*A,r[7]=l*p+u*y+d*R,r[2]=f*M+h*b+g*S,r[5]=f*x+h*w+g*A,r[8]=f*p+h*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,h=l*r-a*c,g=t*d+n*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=d*M,e[1]=(i*l-u*n)*M,e[2]=(o*n-i*a)*M,e[3]=f*M,e[4]=(u*t-i*c)*M,e[5]=(i*r-o*t)*M,e[6]=h*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;var vt=Sh,ll=new vt,Mu=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){let s={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===as?ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bn]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:Mu,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Kt,toXYZ:Mu,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}var It=R0();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var er,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=br("canvas")),er.width=e.width,er.height=e.height;let i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},C0=0,yr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(hl(i[a].image)):r.push(hl(i[a]))}else r=hl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function hl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var P0=0,ul=new D,gn=class s extends Di{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ci,i=ci,r=fn,a=Ei,o=si,c=Jn,l=s.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=_i(),this.name="",this.source=new yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=rh;gn.DEFAULT_ANISOTROPY=1;var wh=class wh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],M=c[2],x=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(g+x)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,y=(h+1)/2,S=(p+1)/2,A=(u+f)/4,R=(d+M)/4,E=(g+x)/4;return w>y&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=R/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=E/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=R/r,i=E/r),this.set(n,i,r,t),this}let b=Math.sqrt((x-g)*(x-g)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(x-g)/b,this.y=(d-M)/b,this.z=(f-u)/b,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(At(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wh.prototype.isVector4=!0;var Gt=wh,Do=class extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new gn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new yr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ha=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mn,this.minFilter=mn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ic=class ic{constructor(e,t,n,i,r,a,o,c,l,u,d,f,h,g,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,d,f,h,g,M,x)}set(e,t,n,i,r,a,o,c,l,u,d,f,h,g,M,x){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=M,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*d,g=o*u,M=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=f-M*l,t[9]=-o*c,t[2]=M-f*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,g=l*u,M=l*d;t[0]=f+M*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=M+f*o,t[10]=a*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,g=l*u,M=l*d;t[0]=f-M*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=M-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let f=a*u,h=a*d,g=o*u,M=o*d;t[0]=c*u,t[4]=g*l-h,t[8]=f*l+M,t[1]=c*d,t[5]=M*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let f=a*c,h=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=M-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*d+g,t[10]=f-M*d}else if(e.order==="XZY"){let f=a*c,h=a*l,g=o*c,M=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+M,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,L0)}lookAt(e,t,n){let i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),fs.crossVectors(n,Qn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),fs.crossVectors(n,Qn)),fs.normalize(),Ja.crossVectors(Qn,fs),i[0]=fs.x,i[4]=Ja.x,i[8]=Qn.x,i[1]=fs.y,i[5]=Ja.y,i[9]=Qn.y,i[2]=fs.z,i[6]=Ja.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],M=n[6],x=n[10],p=n[14],b=n[3],w=n[7],y=n[11],S=n[15],A=i[0],R=i[4],E=i[8],N=i[12],V=i[1],O=i[5],W=i[9],G=i[13],F=i[2],H=i[6],q=i[10],Y=i[14],de=i[3],Q=i[7],te=i[11],xe=i[15];return r[0]=a*A+o*V+c*F+l*de,r[4]=a*R+o*O+c*H+l*Q,r[8]=a*E+o*W+c*q+l*te,r[12]=a*N+o*G+c*Y+l*xe,r[1]=u*A+d*V+f*F+h*de,r[5]=u*R+d*O+f*H+h*Q,r[9]=u*E+d*W+f*q+h*te,r[13]=u*N+d*G+f*Y+h*xe,r[2]=g*A+M*V+x*F+p*de,r[6]=g*R+M*O+x*H+p*Q,r[10]=g*E+M*W+x*q+p*te,r[14]=g*N+M*G+x*Y+p*xe,r[3]=b*A+w*V+y*F+S*de,r[7]=b*R+w*O+y*H+S*Q,r[11]=b*E+w*W+y*q+S*te,r[15]=b*N+w*G+y*Y+S*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],M=e[7],x=e[11],p=e[15],b=c*h-l*f,w=o*h-l*d,y=o*f-c*d,S=a*h-l*u,A=a*f-c*u,R=a*d-o*u;return t*(M*b-x*w+p*y)-n*(g*b-x*S+p*A)+i*(g*w-M*S+p*R)-r*(g*y-M*A+x*R)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],M=e[13],x=e[14],p=e[15],b=t*o-n*a,w=t*c-i*a,y=t*l-r*a,S=n*c-i*o,A=n*l-r*o,R=i*l-r*c,E=u*M-d*g,N=u*x-f*g,V=u*p-h*g,O=d*x-f*M,W=d*p-h*M,G=f*p-h*x,F=b*G-w*W+y*O+S*V-A*N+R*E;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/F;return e[0]=(o*G-c*W+l*O)*H,e[1]=(i*W-n*G-r*O)*H,e[2]=(M*R-x*A+p*S)*H,e[3]=(f*A-d*R-h*S)*H,e[4]=(c*V-a*G-l*N)*H,e[5]=(t*G-i*V+r*N)*H,e[6]=(x*y-g*R-p*w)*H,e[7]=(u*R-f*y+h*w)*H,e[8]=(a*W-o*V+l*E)*H,e[9]=(n*V-t*W-r*E)*H,e[10]=(g*A-M*y+p*b)*H,e[11]=(d*y-u*A-h*b)*H,e[12]=(o*N-a*O-c*E)*H,e[13]=(t*O-n*N+i*E)*H,e[14]=(M*w-g*S-x*b)*H,e[15]=(u*S-d*w+f*b)*H,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,h=r*u,g=r*d,M=a*u,x=a*d,p=o*d,b=c*l,w=c*u,y=c*d,S=n.x,A=n.y,R=n.z;return i[0]=(1-(M+p))*S,i[1]=(h+y)*S,i[2]=(g-w)*S,i[3]=0,i[4]=(h-y)*A,i[5]=(1-(f+p))*A,i[6]=(x+b)*A,i[7]=0,i[8]=(g+w)*R,i[9]=(x-b)*R,i[10]=(1-(f+M))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=tr.set(i[0],i[1],i[2]).length(),o=tr.set(i[4],i[5],i[6]).length(),c=tr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),gi.copy(this);let l=1/a,u=1/o,d=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,t.setFromRotationMatrix(gi),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=yi,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===yi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===xr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yi,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i),g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===yi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===xr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ic.prototype.isMatrix4=!0;var Ye=ic,tr=new D,gi=new Ye,I0=new D(0,0,0),L0=new D(1,1,1),fs=new D,Ja=new D,Qn=new D,Su=new Ye,wu=new ot,un=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},D0=0,Tu=new D,nr=new ot,qi=new Ye,Za=new D,Jr=new D,N0=new D,F0=new ot,Au=new D(1,0,0),Ru=new D(0,1,0),Cu=new D(0,0,1),Pu={type:"added"},U0={type:"removed"},ir={type:"childadded",child:null},dl={type:"childremoved",child:null},dn=class s extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new un,n=new ot,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new vt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Au,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Tu.copy(e).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Au,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Jr,Za,this.up):qi.lookAt(Za,Jr,this.up),this.quaternion.setFromRotationMatrix(qi),i&&(qi.extractRotation(i.matrixWorld),nr.setFromRotationMatrix(qi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),ir.child=e,this.dispatchEvent(ir),ir.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),dl.child=e,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,F0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new D(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},O0={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,n),p=this._getHandJoint(l,M);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},$a={h:0,s:0,l:0};function fl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=gh(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=fl(a,r,e+1/3),this.g=fl(a,r,e),this.b=fl(a,r,e-1/3)}return It.colorSpaceToWorking(this,i),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){let n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return It.workingToColorSpace(In.copy(this),e),Math.round(At(In.r*255,0,255))*65536+Math.round(At(In.g*255,0,255))*256+Math.round(At(In.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(In.copy(this),t);let n=In.r,i=In.g,r=In.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=hn){It.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,i=In.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL($a);let n=ra(ps.h,$a.h,t),i=ra(ps.s,$a.s,t),r=ra(ps.l,$a.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new Oe;Oe.NAMES=qd;var ua=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ys=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new D,Xi=new D,pl=new D,ji=new D,sr=new D,rr=new D,Iu=new D,ml=new D,gl=new D,xl=new D,bl=new Gt,vl=new Gt,yl=new Gt,vs=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xi.subVectors(i,t),Xi.subVectors(n,t),pl.subVectors(e,t);let a=xi.dot(xi),o=xi.dot(Xi),c=xi.dot(pl),l=Xi.dot(Xi),u=Xi.dot(pl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ji.x),c.addScaledVector(a,ji.y),c.addScaledVector(o,ji.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return bl.setScalar(0),vl.setScalar(0),yl.setScalar(0),bl.fromBufferAttribute(e,t),vl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bl,r.x),a.addScaledVector(vl,r.y),a.addScaledVector(yl,r.z),a}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Xi.subVectors(e,t),xi.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),xi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;sr.subVectors(i,n),rr.subVectors(r,n),ml.subVectors(e,n);let c=sr.dot(ml),l=rr.dot(ml);if(c<=0&&l<=0)return t.copy(n);gl.subVectors(e,i);let u=sr.dot(gl),d=rr.dot(gl);if(u>=0&&d<=u)return t.copy(i);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(sr,a);xl.subVectors(e,r);let h=sr.dot(xl),g=rr.dot(xl);if(g>=0&&h<=g)return t.copy(r);let M=h*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(rr,o);let x=u*g-h*d;if(x<=0&&d-u>=0&&h-g>=0)return Iu.subVectors(r,i),o=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(Iu,o);let p=1/(x+M+f);return a=M*p,o=f*p,t.copy(n).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),eo.subVectors(this.max,Zr),ar.subVectors(e.a,Zr),or.subVectors(e.b,Zr),cr.subVectors(e.c,Zr),ms.subVectors(or,ar),gs.subVectors(cr,or),Ps.subVectors(ar,cr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ps.z,Ps.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ps.z,0,-Ps.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ps.y,Ps.x,0];return!_l(t,ar,or,cr,eo)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,ar,or,cr,eo))?!1:(to.crossVectors(ms,gs),t=[to.x,to.y,to.z],_l(t,ar,or,cr,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new D,new D,new D,new D,new D,new D,new D,new D],bi=new D,Qa=new Dn,ar=new D,or=new D,cr=new D,ms=new D,gs=new D,Ps=new D,Zr=new D,eo=new D,to=new D,Is=new D;function _l(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Is.fromArray(s,r);let o=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),c=e.dot(Is),l=t.dot(Is),u=n.dot(Is);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Zi=B0();function B0(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function z0(s){Math.abs(s)>65504&&rt("DataUtils.toHalfFloat(): Value out of range."),s=At(s,-65504,65504),Zi.floatView[0]=s;let e=Zi.uint32View[0],t=e>>23&511;return Zi.baseTable[t]+((e&8388607)>>Zi.shiftTable[t])}function k0(s){let e=s>>10;return Zi.uint32View[0]=Zi.mantissaTable[Zi.offsetTable[e]+(s&1023)]+Zi.exponentTable[e],Zi.floatView[0]}var da=class{static toHalfFloat(e){return z0(e)}static fromHalfFloat(e){return k0(e)}},vn=new D,no=new je,H0=0,Ut=class extends Di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},G0=new Dn,$r=new D,Ml=new D,Vn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):G0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Ml)),this.expandByPoint($r.copy(e.center).sub(Ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},V0=0,oi=new Ye,El=new dn,lr=new D,ei=new Dn,Qr=new Dn,Tn=new D,Rt=class s extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(ei.min,Qr.min),ei.expandByPoint(Tn),Tn.addVectors(ei.max,Qr.max),ei.expandByPoint(Tn)):(ei.expandByPoint(Qr.min),ei.expandByPoint(Qr.max))}ei.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Tn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Tn.fromBufferAttribute(o,l),c&&(lr.fromBufferAttribute(e,l),Tn.add(lr)),i=Math.max(i,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new D,c[E]=new D;let l=new D,u=new D,d=new D,f=new je,h=new je,g=new je,M=new D,x=new D;function p(E,N,V){l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,V),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,N),g.fromBufferAttribute(r,V),u.sub(l),d.sub(l),h.sub(f),g.sub(f);let O=1/(h.x*g.y-g.x*h.y);isFinite(O)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(O),x.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(O),o[E].add(M),o[N].add(M),o[V].add(M),c[E].add(x),c[N].add(x),c[V].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,N=b.length;E<N;++E){let V=b[E],O=V.start,W=V.count;for(let G=O,F=O+W;G<F;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let w=new D,y=new D,S=new D,A=new D;function R(E){S.fromBufferAttribute(i,E),A.copy(S);let N=o[E];w.copy(N),w.sub(S.multiplyScalar(S.dot(N))).normalize(),y.crossVectors(A,N);let O=y.dot(c[E])<0?-1:1;a.setXYZW(E,w.x,w.y,w.z,O)}for(let E=0,N=b.length;E<N;++E){let V=b[E],O=V.start,W=V.count;for(let G=O,F=O+W;G<F;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),M=e.getX(f+1),x=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,x),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u),h=0,g=0;for(let M=0,x=c.length;M<x;M++){o.isInterleavedBufferAttribute?h=c[M]*o.data.stride+o.offset:h=c[M]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Ut(f,u,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Er=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new D,Sr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sl=new D,W0=new D,q0=new vt,ti=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Sl.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||q0.getNormalMatrix(e),i=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},X0=0,zn=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Dr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=$l,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ki=new D,wl=new D,io=new D,so=new D,_s=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wl.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),so.copy(this.origin).sub(wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=so.dot(this.direction),c=-so.dot(io),l=so.lengthSq(),u=Math.abs(1-a*a),d,f,h,g;if(u>0)if(d=a*c-o,f=a*o-c,g=r*u,d>=0)if(f>=-g)if(f<=g){let M=1/u;d*=M,f*=M,h=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(wl).addScaledVector(io,f),h}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=t.x-a.x,M=t.y-a.y,x=t.z-a.z,p=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(c),S=Math.abs(l),A=Math.abs(u),R,E,N,V,O,W,G,F,H,q,Y,de;if(y>=S&&y>=A?(N=c,W=d,H=g,de=p,c>=0?(R=l,E=u,V=f,O=h,G=M,F=x,q=b,Y=w):(R=u,E=l,V=h,O=f,G=x,F=M,q=w,Y=b)):S>=A?(N=l,W=f,H=M,de=b,l>=0?(R=u,E=c,V=h,O=d,G=x,F=g,q=w,Y=p):(R=c,E=u,V=d,O=h,G=g,F=x,q=p,Y=w)):(N=u,W=h,H=x,de=w,u>=0?(R=c,E=l,V=d,O=f,G=g,F=M,q=p,Y=b):(R=l,E=c,V=f,O=d,G=M,F=g,q=b,Y=p)),N===0)return null;let Q=R/N,te=E/N,xe=1/N,Me=V-Q*W,Ne=O-te*W,tt=G-Q*H,Re=F-te*H,Ze=q-Q*de,re=Y-te*de,pe=Ze*Re-re*tt,Ee=Me*re-Ne*Ze,ze=tt*Ne-Re*Me;if(i){if(pe<0||Ee<0||ze<0)return null}else if((pe<0||Ee<0||ze<0)&&(pe>0||Ee>0||ze>0))return null;let Be=pe+Ee+ze;if(Be===0)return null;let at=xe*(pe*W+Ee*H+ze*de);return(Be>0?at<0:at>0)?null:this.at(at/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Lu=new Ye,Ls=new _s,ro=new Vn,Du=new D,ao=new D,oo=new D,co=new D,Tl=new D,lo=new D,Nu=new D,ho=new D,$e=class extends dn{constructor(e=new Rt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Tl.fromBufferAttribute(d,e),a?lo.addScaledVector(Tl,u):lo.addScaledVector(Tl.sub(t),u))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(ro.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(ro,Du)===null||Ls.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Lu.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){let x=f[g],p=a[x.materialIndex],b=Math.max(x.start,h.start),w=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let y=b,S=w;y<S;y+=3){let A=o.getX(y),R=o.getX(y+1),E=o.getX(y+2);i=uo(this,p,e,n,l,u,d,A,R,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let x=g,p=M;x<p;x+=3){let b=o.getX(x),w=o.getX(x+1),y=o.getX(x+2);i=uo(this,a,e,n,l,u,d,b,w,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){let x=f[g],p=a[x.materialIndex],b=Math.max(x.start,h.start),w=Math.min(c.count,Math.min(x.start+x.count,h.start+h.count));for(let y=b,S=w;y<S;y+=3){let A=y,R=y+1,E=y+2;i=uo(this,p,e,n,l,u,d,A,R,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let g=Math.max(0,h.start),M=Math.min(c.count,h.start+h.count);for(let x=g,p=M;x<p;x+=3){let b=x,w=x+1,y=x+2;i=uo(this,a,e,n,l,u,d,b,w,y),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};function j0(s,e,t,n,i,r,a,o){let c;if(e.side===En?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===hi,o),c===null)return null;ho.copy(o),ho.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ho);return l<t.near||l>t.far?null:{distance:l,point:ho.clone(),object:s}}function uo(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ao),s.getVertexPosition(c,oo),s.getVertexPosition(l,co);let u=j0(s,e,t,n,ao,oo,co,Nu);if(u){let d=new D;vs.getBarycoord(Nu,ao,oo,co,d),i&&(u.uv=vs.getInterpolatedAttribute(i,o,c,l,d,new je)),r&&(u.uv1=vs.getInterpolatedAttribute(r,o,c,l,d,new je)),a&&(u.normal=vs.getInterpolatedAttribute(a,o,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new D,materialIndex:0};vs.getNormal(ao,oo,co,f.normal),u.face=f,u.barycoord=d}return u}var ea=new Gt,Fu=new Gt,Uu=new Gt,Y0=new Gt,Ou=new Ye,fo=new D,Al=new Vn,Bu=new Ye,Rl=new _s,ma=class extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fl,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(i),e.ray.intersectsSphere(Al)!==!1&&(Bu.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(Bu),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Fu.fromBufferAttribute(i.attributes.skinIndex,e),Uu.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ea.copy(t),t.set(0,0,0,0)):(ea.set(...t,1),t.set(0,0,0)),ea.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Uu.getComponent(r);if(a!==0){let o=Fu.getComponent(r);Ou.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Y0.copy(ea).applyMatrix4(Ou),a)}}return t.isVector4&&(t.w=ea.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends dn{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ms=class extends gn{constructor(e=null,t=1,n=1,i,r,a,o,c,l=mn,u=mn,d,f){super(null,a,o,c,l,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zu=new Ye,K0=new Ye,ga=class s{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:K0;zu.multiplyMatrices(o,t[r]),zu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ms(t,e,e,si,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(rt("Skeleton: No bone found with UUID:",r),a=new wr),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Wn=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Ye,ku=new Ye,po=[],Hu=new Dn,J0=new Ye,ta=new $e,na=new Vn,Mn=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,J0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),Hu.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hr),na.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(n),e.ray.intersectsSphere(na)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hr),ku.multiplyMatrices(n,hr),ta.matrixWorld=ku,ta.raycast(e,po);for(let a=0,o=po.length;a<o;a++){let c=po[a];c.instanceId=r,c.object=this,t.push(c)}po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Wn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ms(new Float32Array(i*this.count),i,this.count,Or,ii));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ds=new Vn,Z0=new je(.5,.5),mo=new D,Tr=class{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],M=r[9],x=r[10],p=r[11],b=r[12],w=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-a,h-u,p-g,S-b).normalize(),i[1].setComponents(l+a,h+u,p+g,S+b).normalize(),i[2].setComponents(l+o,h+d,p+M,S+w).normalize(),i[3].setComponents(l-o,h-d,p-M,S-w).normalize(),n)i[4].setComponents(c,f,x,y).normalize(),i[5].setComponents(l-c,h-f,p-x,S-y).normalize();else if(i[4].setComponents(l-c,h-f,p-x,S-y).normalize(),t===yi)i[5].setComponents(l+c,h+f,p+x,S+y).normalize();else if(t===xr)i[5].setComponents(c,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=Z0.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(mo.x=i.normal.x>0?e.max.x:e.min.x,mo.y=i.normal.y>0?e.max.y:e.min.y,mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Es=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fo=new D,Uo=new D,Gu=new Ye,ia=new _s,go=new Vn,Cl=new D,Vu=new D,Qi=class extends dn{constructor(e=new Rt,t=new Es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fo.fromBufferAttribute(t,i-1),Uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fo.distanceTo(Uo);e.setAttribute("lineDistance",new ut(n,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Gu.copy(i).invert(),ia.copy(e.ray).applyMatrix4(Gu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=h,x=g-1;M<x;M+=l){let p=u.getX(M),b=u.getX(M+1),w=xo(this,e,ia,c,p,b,M);w&&t.push(w)}if(this.isLineLoop){let M=u.getX(g-1),x=u.getX(h),p=xo(this,e,ia,c,M,x,g-1);p&&t.push(p)}}else{let h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let M=h,x=g-1;M<x;M+=l){let p=xo(this,e,ia,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){let M=xo(this,e,ia,c,g-1,h,g-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Fo.fromBufferAttribute(o,i),Uo.fromBufferAttribute(o,r),t.distanceSqToSegment(Fo,Uo,Cl,Vu)>n)return;Cl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Cl);if(!(l<e.near||l>e.far))return{distance:l,point:Vu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Wu=new D,qu=new D,Bs=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wu.fromBufferAttribute(t,i),qu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wu.distanceTo(qu);e.setAttribute("lineDistance",new ut(n,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xa=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ar=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xu=new Ye,kl=new _s,bo=new Vn,vo=new D,qn=class extends dn{constructor(e=new Rt,t=new Ar){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(i),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;Xu.copy(i).invert(),kl.copy(e.ray).applyMatrix4(Xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=f,M=h;g<M;g++){let x=l.getX(g);vo.fromBufferAttribute(d,x),ju(vo,x,c,i,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=f,M=h;g<M;g++)vo.fromBufferAttribute(d,g),ju(vo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ju(s,e,t,n,i,r,a){let o=kl.distanceSqToPoint(s);if(o<t){let c=new D;kl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ba=class extends gn{constructor(e=[],t=ws,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},li=class extends gn{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends gn{constructor(e,t,n=Si,i,r,a,o=mn,c=mn,l,u=Li,d=1){if(u!==Li&&u!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oo=class extends Ni{constructor(e,t=Si,n=ws,i,r,a=mn,o=mn,c,l=Li){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},va=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ie=class s extends Rt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(d,2));function g(M,x,p,b,w,y,S,A,R,E,N){let V=y/R,O=S/E,W=y/2,G=S/2,F=A/2,H=R+1,q=E+1,Y=0,de=0,Q=new D;for(let te=0;te<q;te++){let xe=te*O-G;for(let Me=0;Me<H;Me++){let Ne=Me*V-W;Q[M]=Ne*b,Q[x]=xe*w,Q[p]=F,l.push(Q.x,Q.y,Q.z),Q[M]=0,Q[x]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(Me/R),d.push(1-te/E),Y+=1}}for(let te=0;te<E;te++)for(let xe=0;xe<R;xe++){let Me=f+xe+H*te,Ne=f+xe+H*(te+1),tt=f+(xe+1)+H*(te+1),Re=f+(xe+1)+H*te;c.push(Me,Ne,Re),c.push(Ne,tt,Re),de+=6}o.addGroup(h,de,N),h+=de,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var zs=class s extends Rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new D,u=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let h=n+d/t*i;l.x=e*Math.cos(h),l.y=e*Math.sin(h),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ue=class s extends Rt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],f=[],h=[],g=0,M=[],x=n/2,p=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(h,2));function b(){let y=new D,S=new D,A=0,R=(t-e)/n;for(let E=0;E<=r;E++){let N=[],V=E/r,O=V*(t-e)+e;for(let W=0;W<=i;W++){let G=W/i,F=G*c+o,H=Math.sin(F),q=Math.cos(F);S.x=O*H,S.y=-V*n+x,S.z=O*q,d.push(S.x,S.y,S.z),y.set(H,R,q).normalize(),f.push(y.x,y.y,y.z),h.push(G,1-V),N.push(g++)}M.push(N)}for(let E=0;E<i;E++)for(let N=0;N<r;N++){let V=M[N][E],O=M[N+1][E],W=M[N+1][E+1],G=M[N][E+1];(e>0||N!==0)&&(u.push(V,O,G),A+=3),(t>0||N!==r-1)&&(u.push(O,W,G),A+=3)}l.addGroup(p,A,0),p+=A}function w(y){let S=g,A=new je,R=new D,E=0,N=y===!0?e:t,V=y===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,x*V,0),f.push(0,V,0),h.push(.5,.5),g++;let O=g;for(let W=0;W<=i;W++){let F=W/i*c+o,H=Math.cos(F),q=Math.sin(F);R.x=N*q,R.y=x*V,R.z=N*H,d.push(R.x,R.y,R.z),f.push(0,V,0),A.x=H*.5+.5,A.y=q*.5*V+.5,h.push(A.x,A.y),g++}for(let W=0;W<i;W++){let G=S+W,F=O+W;y===!0?u.push(F,F+1,G):u.push(F+1,F,G),E+=3}l.addGroup(p,E,y===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cn=class s extends Ue{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bo=class s extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new D,y=new D,S=new D;for(let A=0;A<t.length;A+=3)h(t[A+0],w),h(t[A+1],y),h(t[A+2],S),c(w,y,S,b)}function c(b,w,y,S){let A=S+1,R=[];for(let E=0;E<=A;E++){R[E]=[];let N=b.clone().lerp(y,E/A),V=w.clone().lerp(y,E/A),O=A-E;for(let W=0;W<=O;W++)W===0&&E===A?R[E][W]=N:R[E][W]=N.clone().lerp(V,W/O)}for(let E=0;E<A;E++)for(let N=0;N<2*(A-E)-1;N++){let V=Math.floor(N/2);N%2===0?(f(R[E][V+1]),f(R[E+1][V]),f(R[E][V])):(f(R[E][V+1]),f(R[E+1][V+1]),f(R[E+1][V]))}}function l(b){let w=new D;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(b),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function u(){let b=new D;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let y=x(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;a.push(y,1-S)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let w=a[b+0],y=a[b+2],S=a[b+4],A=Math.max(w,y,S),R=Math.min(w,y,S);A>.9&&R<.1&&(w<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),S<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function h(b,w){let y=b*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){let b=new D,w=new D,y=new D,S=new D,A=new je,R=new je,E=new je;for(let N=0,V=0;N<r.length;N+=9,V+=6){b.set(r[N+0],r[N+1],r[N+2]),w.set(r[N+3],r[N+4],r[N+5]),y.set(r[N+6],r[N+7],r[N+8]),A.set(a[V+0],a[V+1]),R.set(a[V+2],a[V+3]),E.set(a[V+4],a[V+5]),S.copy(b).add(w).add(y).divideScalar(3);let O=x(S);M(A,V+0,b,O),M(R,V+2,w,O),M(E,V+4,y,O)}}function M(b,w,y,S){S<0&&b.x===1&&(a[w]=b.x-1),y.x===0&&y.z===0&&(a[w]=S/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],f=n[i+1]-u,h=(a-u)/f;return(i+h)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new je:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],a=[],o=new D,c=new Ye;for(let h=0;h<=e;h++){let g=h/e;i[h]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(At(i[h-1].dot(i[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(o,g))}a[h].crossVectors(i[h],r[h])}if(t===!0){let h=Math.acos(At(r[0].dot(r[e]),-1,1));h/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],h*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ya=class extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new je){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zo=class extends ya{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,h=(o-a)/u-(c-a)/(u+d)+(c-o)/d;f*=u,h*=u,i(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Yu=new D,Ku=new D,Pl=new xh,Il=new xh,Ll=new xh,Rr=class extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Ku.subVectors(i[0],i[1]).add(i[0]),l=Ku);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Yu.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Yu),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),h),M=Math.pow(d.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(u),h);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),Pl.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,M,x),Il.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,M,x),Ll.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,M,x)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Il.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Ll.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Pl.calc(c),Il.calc(c),Ll.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ju(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function $0(s,e){let t=1-s;return t*t*e}function Q0(s,e){return 2*(1-s)*s*e}function ep(s,e){return s*s*e}function aa(s,e,t,n){return $0(s,e)+Q0(s,t)+ep(s,n)}function tp(s,e){let t=1-s;return t*t*t*e}function np(s,e){let t=1-s;return 3*t*t*s*e}function ip(s,e){return 3*(1-s)*s*s*e}function sp(s,e){return s*s*s*e}function oa(s,e,t,n,i){return tp(s,e)+np(s,t)+ip(s,n)+sp(s,i)}var ko=class extends Xn{constructor(e=new je,t=new je,n=new je,i=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new je){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(oa(e,i.x,r.x,a.x,o.x),oa(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cr=class extends Xn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(oa(e,i.x,r.x,a.x,o.x),oa(e,i.y,r.y,a.y,o.y),oa(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ho=class extends Xn{constructor(e=new je,t=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new je){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends Xn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends Xn{constructor(e=new je,t=new je,n=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new je){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(aa(e,i.x,r.x,a.x),aa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ks=class extends Xn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(aa(e,i.x,r.x,a.x),aa(e,i.y,r.y,a.y),aa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new je){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ju(o,c.x,l.x,u.x,d.x),Ju(o,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new je().fromArray(i))}return this}},rp=Object.freeze({__proto__:null,ArcCurve:zo,CatmullRomCurve3:Rr,CubicBezierCurve:ko,CubicBezierCurve3:Cr,EllipseCurve:ya,LineCurve:Ho,LineCurve3:Go,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:ks,SplineCurve:Wo});var Hs=class s extends Bo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},_a=class s extends Rt{constructor(e=[new je(0,-.5),new je(.5,0),new je(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=At(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,d=new D,f=new je,h=new D,g=new D,M=new D,x=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:x=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,h.x=p*1,h.y=-x,h.z=p*0,M.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(M.x,M.y,M.z);break;default:x=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,h.x=p*1,h.y=-x,h.z=p*0,g.copy(h),h.x+=M.x,h.y+=M.y,h.z+=M.z,h.normalize(),c.push(h.x,h.y,h.z),M.copy(g)}for(let b=0;b<=t;b++){let w=n+b*u*i,y=Math.sin(w),S=Math.cos(w);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*y,d.y=e[A].y,d.z=e[A].x*S,a.push(d.x,d.y,d.z),f.x=b/t,f.y=A/(e.length-1),o.push(f.x,f.y);let R=c[3*A+0]*y,E=c[3*A+1],N=c[3*A+0]*S;l.push(R,E,N)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let y=w+b*e.length,S=y,A=y+e.length,R=y+e.length+1,E=y+1;r.push(S,A,E),r.push(R,E,A)}this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("uv",new ut(o,2)),this.setAttribute("normal",new ut(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var bt=class s extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=e/o,f=t/c,h=[],g=[],M=[],x=[];for(let p=0;p<u;p++){let b=p*f-a;for(let w=0;w<l;w++){let y=w*d-r;g.push(y,-b,0),M.push(0,0,1),x.push(w/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let w=b+l*p,y=b+l*(p+1),S=b+1+l*(p+1),A=b+1+l*p;h.push(w,y,A),h.push(y,S,A)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(M,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ma=class s extends Rt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],d=e,f=(t-e)/i,h=new D,g=new je;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){let p=r+x/n*a;h.x=d*Math.cos(p),h.y=d*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}d+=f}for(let M=0;M<i;M++){let x=M*(n+1);for(let p=0;p<n;p++){let b=p+x,w=b,y=b+n+1,S=b+n+2,A=b+1;o.push(w,y,A),o.push(y,S,A)}}this.setIndex(o),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ot=class s extends Rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new D,f=new D,h=[],g=[],M=[],x=[];for(let p=0;p<=n;p++){let b=[],w=p/n,y=a+w*o,S=e*Math.cos(y),A=Math.sqrt(e*e-S*S),R=0;p===0&&a===0?R=.5/t:p===n&&c===Math.PI&&(R=-.5/t);for(let E=0;E<=t;E++){let N=E/t,V=i+N*r;d.x=-A*Math.cos(V),d.y=S,d.z=A*Math.sin(V),g.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),x.push(N+R,1-w),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let w=u[p][b+1],y=u[p][b],S=u[p+1][b],A=u[p+1][b+1];(p!==0||a>0)&&h.push(w,y,A),(p!==n-1||c<Math.PI)&&h.push(y,S,A)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(M,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var An=class s extends Rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],d=[],f=new D,h=new D,g=new D;for(let M=0;M<=n;M++){let x=a+M/n*o;for(let p=0;p<=i;p++){let b=p/i*r;h.x=(e+t*Math.cos(x))*Math.cos(b),h.y=(e+t*Math.cos(x))*Math.sin(b),h.z=t*Math.sin(x),l.push(h.x,h.y,h.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(p/i),d.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=i;x++){let p=(i+1)*M+x-1,b=(i+1)*(M-1)+x-1,w=(i+1)*(M-1)+x,y=(i+1)*M+x;c.push(p,b,y),c.push(b,w,y)}this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Fi=class s extends Rt{constructor(e=new ks(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new je,u=new D,d=[],f=[],h=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(h,2));function M(){for(let w=0;w<t;w++)x(w);x(r===!1?t:0),b(),p()}function x(w){u=e.getPointAt(w/t,u);let y=a.normals[w],S=a.binormals[w];for(let A=0;A<=i;A++){let R=A/i*Math.PI*2,E=Math.sin(R),N=-Math.cos(R);c.x=N*y.x+E*S.x,c.y=N*y.y+E*S.y,c.z=N*y.z+E*S.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=t;w++)for(let y=1;y<=i;y++){let S=(i+1)*(w-1)+(y-1),A=(i+1)*w+(y-1),R=(i+1)*w+y,E=(i+1)*(w-1)+y;g.push(S,A,E),g.push(A,R,E)}}function b(){for(let w=0;w<=t;w++)for(let y=0;y<=i;y++)l.x=w/t,l.y=y/i,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new rp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ks(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Zu(i))i.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Zu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Nn(s){let e={};for(let t=0;t<s.length;t++){let n=Ks(s[t]);for(let i in n)e[i]=n[i]}return e}function Zu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ap(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var Ga={clone:Ks,merge:Nn},op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=op,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qo=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},es=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jn=class extends es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _n=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=rc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xo=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function So(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function lp(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $u(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function hp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Ui=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends Ui{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bl:r=e,o=2*t-n;break;case zl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bl:a=e,c=2*n-t;break;case zl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),M=g*g,x=M*g,p=-f*x+2*f*M-f*g,b=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*g+1,w=(-1-h)*x+(1.5+h)*M+.5*g,y=h*x-h*M;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+b*a[l+S]+w*a[c+S]+y*a[d+S];return r}},Ko=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*u;return r}},Jo=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zo=class extends Ui{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(i-t),M=1-g;for(let x=0;x!==o;++x)r[x]=a[l+x]*M+a[c+x]*g;return r}let f=o*2,h=e-1;for(let g=0;g!==o;++g){let M=a[l+g],x=a[c+g],p=h*f+g*2,b=d[p],w=d[p+1],y=e*f+g*2,S=u[y],A=u[y+1],R=dp(n,t,b,S,i);r[g]=Xd(R,M,w,A,x)}return r}};function Xd(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function up(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function dp(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Xd(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=up(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),So(e.settings)&&(n.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fs:t=this.InterpolantFactoryMethodDiscrete;break;case Us:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case Ul:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return rt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fs;case this.InterpolantFactoryMethodLinear:return Us;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;So(this.settings)&&(Qu(this.settings.inTangents,e),Qu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){gt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){gt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&u0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){gt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,f=d-n,h=d+n;for(let g=0;g!==n;++g){let M=t[d+g];if(M!==t[f+g]||M!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,So(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Qu(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Us;var ts=class extends Yn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Fs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}};Ea.prototype.ValueTypeName="color";var ns=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}};ns.prototype.ValueTypeName="number";var $o=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)ot.slerpFlat(r,0,a,l-o,a,l,c);return r}},is=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Yn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Fs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Yn{constructor(e,t,n,i){super(e,t,n,i)}};Ss.prototype.ValueTypeName="vector";var Sa=class{constructor(e="",t=-1,n=[],i=Id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_i(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(pp(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=lp(c);c=$u(c,1,u),l=$u(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ns(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let d=u[1],f=i[d];f||(i[d]=f=[]),f.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function fp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Ea;case"quaternion":return is;case"bool":case"boolean":return ts;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fp(s.type);if(s.times===void 0){let n=[],i=[];hp(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),So(s.settings)&&(t.settings={inTangents:bs(s.settings.inTangents,Float32Array),outTangents:bs(s.settings.outTangents,Float32Array)}),t}var Pi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ed(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ed(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ed(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new Qo,Oi=class{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},Hl=class extends Error{constructor(e,t){super(e),this.response=t}},Pr=class extends Oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:i});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let u=Ji[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0,M=0,x=new ReadableStream({start(p){b();function b(){d.read().then(({done:w,value:y})=>{if(w)p.close();else{M+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:h});for(let A=0,R=u.length;A<R;A++){let E=u[A];E.onProgress&&E.onProgress(S)}p.enqueue(y),b()}},w=>{p.error(w)})}}});return new Response(x)}else throw new Hl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{Pi.add(`file:${e}`,l);let u=Ji[e];delete Ji[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=Ji[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ji[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,ec=class extends Oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Pi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ur.get(a);d===void 0&&(d=[],ur.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=br("img");function c(){u(),t&&t(this);let d=ur.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),Pi.remove(`image:${e}`);let f=ur.get(this)||[];for(let h=0;h<f.length;h++){let g=f[h];g.onError&&g.onError(d)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var wa=class extends Oi{constructor(e){super(e)}load(e,t,n,i){let r=new gn,a=new ec(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Gs=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ta=class extends Gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Dl=new Ye,td=new D,nd=new D,Ir=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yo=new D,_o=new ot,Ci=new D,Aa=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,_o,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,_o,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,_o,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,_o,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new D,id=new je,sd=new je,yn=class extends Aa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gl=class extends Ir{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Vs=class extends Gs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Vl=class extends Ir{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},Kn=class extends Gs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends Aa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wl=class extends Ir{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Wl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ra=class extends Rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Nl=new WeakMap,Ca=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&rt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&rt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Pi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Nl.has(a)===!0?(i&&i(Nl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Nl.set(c,l),Pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=-90,fr=1,tc=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yn(dr,fr,e,t);i.layers=this.layers,this.add(i);let r=new yn(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new yn(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new yn(dr,fr,e,t);o.layers=this.layers,this.add(o);let c=new yn(dr,fr,e,t);c.layers=this.layers,this.add(c);let l=new yn(dr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},nc=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vh="\\[\\]\\.:\\/",mp=new RegExp("["+vh+"]","g"),yh="[^"+vh+"]",gp="[^"+vh.replace("\\.","")+"]",xp=/((?:WC+[\/:])*)/.source.replace("WC",yh),bp=/(WCOD+)?/.source.replace("WCOD",gp),vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yh),yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yh),_p=new RegExp("^"+xp+bp+vp+yp+"$"),Mp=["material","materials","bones","map"],ql=class{constructor(e,t,n){let i=n||nn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mp,"")}static parseTrackName(e){let t=_p.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Mp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=ql;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zv=new Float32Array(1);var rd=new Ye,Pa=class{constructor(e,t,n=0,i=1/0){this.ray=new _s(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rd),this}intersectObject(e,t=!0,n=[]){return Xl(e,this,n,t),n.sort(ad),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xl(e[i],this,n,t);return n.sort(ad),n}};function ad(s,e){return s.distance-e.distance}function Xl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Xl(r[a],e,t,!0)}}var Th=class Th{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Th.prototype.isMatrix2=!0;var jl=Th;function _h(s,e,t,n){let i=Ep(n);switch(t){case hh:return s*e;case Or:return s*e/i.components*i.byteLength;case dc:return s*e/i.components*i.byteLength;case As:return s*e*2/i.components*i.byteLength;case fc:return s*e*2/i.components*i.byteLength;case uh:return s*e*3/i.components*i.byteLength;case si:return s*e*4/i.components*i.byteLength;case pc:return s*e*4/i.components*i.byteLength;case Da:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fa:case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gc:case bc:return Math.max(s,16)*Math.max(e,8)/4;case mc:case xc:return Math.max(s,8)*Math.max(e,8)/2;case vc:case yc:case Mc:case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _c:case Oa:case Sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zc:case kc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gc:case Vc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ba:case Wc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ep(s){switch(s){case Jn:case ah:return{byteLength:1,components:1};case Fr:case oh:case kn:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Si:case lc:case ii:return{byteLength:4,components:1};case ch:case lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window!="undefined"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);function gf(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sp(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)h=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=s.SHORT;else if(l instanceof Uint32Array)h=s.UNSIGNED_INT;else if(l instanceof Int32Array)h=s.INT;else if(l instanceof Int8Array)h=s.BYTE;else if(l instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],M=d[h];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,d[f]=M)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let M=d[h];s.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mm=`PhysicalMaterial material;
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
#endif`,Em=`uniform sampler2D dfgLUT;
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
}`,Sm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,Jg=`#define STANDARD
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
}`,Zg=`#define TOON
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
}`,Qg=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 color;
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
}`,ix=`uniform float rotation;
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
}`,sx=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:wp,alphahash_pars_fragment:Tp,alphamap_fragment:Ap,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Vp,color_fragment:Wp,color_pars_fragment:qp,color_pars_vertex:Xp,color_vertex:jp,common:Yp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Zp,displacementmap_vertex:$p,emissivemap_fragment:Qp,emissivemap_pars_fragment:em,colorspace_fragment:tm,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:xm,envmap_vertex:om,fog_vertex:cm,fog_pars_vertex:lm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:bm,lights_toon_pars_fragment:vm,lights_phong_fragment:ym,lights_phong_pars_fragment:_m,lights_physical_fragment:Mm,lights_physical_pars_fragment:Em,lights_fragment_begin:Sm,lights_fragment_maps:wm,lights_fragment_end:Tm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:qm,normal_pars_vertex:Xm,normal_vertex:jm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:$m,opaque_fragment:Qm,packing:eg,premultiplied_alpha_fragment:tg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:cg,shadowmap_vertex:lg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:dg,skinning_vertex:fg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:bg,transmission_fragment:vg,transmission_pars_fragment:yg,uv_pars_fragment:_g,uv_pars_vertex:Mg,uv_vertex:Eg,worldpos_vertex:Sg,background_vert:wg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Pg,depth_vert:Ig,depth_frag:Lg,distance_vert:Dg,distance_frag:Ng,equirect_vert:Fg,equirect_frag:Ug,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:kg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:Vg,meshmatcap_frag:Wg,meshnormal_vert:qg,meshnormal_frag:Xg,meshphong_vert:jg,meshphong_frag:Yg,meshphysical_vert:Kg,meshphysical_frag:Jg,meshtoon_vert:Zg,meshtoon_frag:$g,points_vert:Qg,points_frag:ex,shadow_vert:tx,shadow_frag:nx,sprite_vert:ix,sprite_frag:sx},Xe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Hi={basic:{uniforms:Nn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Nn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Nn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Nn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Nn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Nn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Nn([Xe.points,Xe.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Nn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Nn([Xe.common,Xe.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Nn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Nn([Xe.sprite,Xe.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Nn([Xe.common,Xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Nn([Xe.lights,Xe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Hi.physical={uniforms:Nn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var jc={r:0,b:0,g:0},rx=new Ye,xf=new vt;xf.set(-1,0,0,0,1,0,0,0,1);function ax(s,e,t,n,i,r){let a=new Oe(0),o=i===!0?0:1,c,l,u=null,d=0,f=null;function h(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let y=b.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(b){let w=!1,y=h(b);y===null?x(a,o):y&&y.isColor&&(x(y,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(b,w){let y=h(w);y&&(y.isCubeTexture||y.mapping===La)?(l===void 0&&(l=new $e(new Ie(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Ks(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xf),l.material.toneMapped=It.getTransfer(y.colorSpace)!==Kt,(u!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $e(new bt(2,2),new Bt({name:"BackgroundMaterial",uniforms:Ks(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=It.getTransfer(y.colorSpace)!==Kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function x(b,w){b.getRGB(jc,bh(s)),t.buffers.color.setClear(jc.r,jc.g,jc.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,x(a,o)},render:g,addToRenderList:M,dispose:p}}function ox(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(O,W,G,F,H){let q=!1,Y=d(O,F,G,W);r!==Y&&(r=Y,l(r.object)),q=h(O,F,G,H),q&&g(O,F,G,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(O,W,G,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return s.createVertexArray()}function l(O){return s.bindVertexArray(O)}function u(O){return s.deleteVertexArray(O)}function d(O,W,G,F){let H=F.wireframe===!0,q=n[W.id];q===void 0&&(q={},n[W.id]=q);let Y=O.isInstancedMesh===!0?O.id:0,de=q[Y];de===void 0&&(de={},q[Y]=de);let Q=de[G.id];Q===void 0&&(Q={},de[G.id]=Q);let te=Q[H];return te===void 0&&(te=f(c()),Q[H]=te),te}function f(O){let W=[],G=[],F=[];for(let H=0;H<t;H++)W[H]=0,G[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:G,attributeDivisors:F,object:O,attributes:{},index:null}}function h(O,W,G,F){let H=r.attributes,q=W.attributes,Y=0,de=G.getAttributes();for(let Q in de)if(de[Q].location>=0){let xe=H[Q],Me=q[Q];if(Me===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function g(O,W,G,F){let H={},q=W.attributes,Y=0,de=G.getAttributes();for(let Q in de)if(de[Q].location>=0){let xe=q[Q];xe===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(xe=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(xe=O.instanceColor));let Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),H[Q]=Me,Y++}r.attributes=H,r.attributesNum=Y,r.index=F}function M(){let O=r.newAttributes;for(let W=0,G=O.length;W<G;W++)O[W]=0}function x(O){p(O,0)}function p(O,W){let G=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;G[O]=1,F[O]===0&&(s.enableVertexAttribArray(O),F[O]=1),H[O]!==W&&(s.vertexAttribDivisor(O,W),H[O]=W)}function b(){let O=r.newAttributes,W=r.enabledAttributes;for(let G=0,F=W.length;G<F;G++)W[G]!==O[G]&&(s.disableVertexAttribArray(G),W[G]=0)}function w(O,W,G,F,H,q,Y){Y===!0?s.vertexAttribIPointer(O,W,G,H,q):s.vertexAttribPointer(O,W,G,F,H,q)}function y(O,W,G,F){M();let H=F.attributes,q=G.getAttributes(),Y=W.defaultAttributeValues;for(let de in q){let Q=q[de];if(Q.location>=0){let te=H[de];if(te===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){let xe=te.normalized,Me=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;let tt=Ne.buffer,Re=Ne.type,Ze=Ne.bytesPerElement,re=Re===s.INT||Re===s.UNSIGNED_INT||te.gpuType===lc;if(te.isInterleavedBufferAttribute){let pe=te.data,Ee=pe.stride,ze=te.offset;if(pe.isInstancedInterleavedBuffer){for(let Be=0;Be<Q.locationSize;Be++)p(Q.location+Be,pe.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Be=0;Be<Q.locationSize;Be++)x(Q.location+Be);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Be=0;Be<Q.locationSize;Be++)w(Q.location+Be,Me/Q.locationSize,Re,xe,Ee*Ze,(ze+Me/Q.locationSize*Be)*Ze,re)}else{if(te.isInstancedBufferAttribute){for(let pe=0;pe<Q.locationSize;pe++)p(Q.location+pe,te.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let pe=0;pe<Q.locationSize;pe++)x(Q.location+pe);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let pe=0;pe<Q.locationSize;pe++)w(Q.location+pe,Me/Q.locationSize,Re,xe,Me*Ze,Me/Q.locationSize*pe*Ze,re)}}else if(Y!==void 0){let xe=Y[de];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(Q.location,xe);break;case 3:s.vertexAttrib3fv(Q.location,xe);break;case 4:s.vertexAttrib4fv(Q.location,xe);break;default:s.vertexAttrib1fv(Q.location,xe)}}}}b()}function S(){N();for(let O in n){let W=n[O];for(let G in W){let F=W[G];for(let H in F){let q=F[H];for(let Y in q)u(q[Y].object),delete q[Y];delete F[H]}}delete n[O]}}function A(O){if(n[O.id]===void 0)return;let W=n[O.id];for(let G in W){let F=W[G];for(let H in F){let q=F[H];for(let Y in q)u(q[Y].object),delete q[Y];delete F[H]}}delete n[O.id]}function R(O){for(let W in n){let G=n[W];for(let F in G){let H=G[F];if(H[O.id]===void 0)continue;let q=H[O.id];for(let Y in q)u(q[Y].object),delete q[Y];delete H[O.id]}}}function E(O){for(let W in n){let G=n[W],F=O.isInstancedMesh===!0?O.id:0,H=G[F];if(H!==void 0){for(let q in H){let Y=H[q];for(let de in Y)u(Y[de].object),delete Y[de];delete H[q]}delete G[F],Object.keys(G).length===0&&delete n[W]}}}function N(){V(),a=!0,r!==i&&(r=i,l(r.object))}function V(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:V,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function cx(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==si&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let E=R===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&R!==ii&&!E&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(rt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:A}}function hx(s){let e=this,t=null,n=0,i=!1,r=!1,a=new ti,o=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!x)r?u(null):l();else{let b=r?0:n,w=b*4,y=p.clippingState||null;c.value=y,y=u(g,f,w,h);for(let S=0;S!==w;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=c.value,g!==!0||x===null){let p=h+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(x===null||x.length<p)&&(x=new Float32Array(p));for(let w=0,y=h;w!==M;++w,y+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(x,y),x[y+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var kr=4,ux=6,dx=20,fx=256,Va=new Bi,Yd=new Oe,Ah=null,Rh=0,Ch=0,Ph=!1,px=new D,Js=new D,Gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=px}=r;Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ah,Rh,Ch),this._renderer.xr.enabled=Ph,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ah=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ch=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:kn,format:si,colorSpace:Bn,depthBuffer:!1},i=Kd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mx(r)),this._blurMaterial=xx(r,e,t),this._ggxMaterial=gx(r,e,t)}return i}_compileMaterial(e){let t=new $e(new Rt,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i,r){let c=new yn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Yd),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Ie,new $t({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,x=M.material,p=!1,b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,p=!0):(x.color.copy(Yd),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));let S=this._cubeSize;zr(i,y*S,w>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(M,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ws||e.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=l*1.25,h=d*f,{_lodMax:g}=this,M=this._sizeLods[n],x=3*M*(n>g-kr?n-g+kr:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,zr(r,x,p,3*M,2*M),i.setRenderTarget(r),i.render(o,Va),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,zr(e,x,p,3*M,2*M),i.setRenderTarget(e),i.render(o,Va)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],d=3*u*(i>this._lodMax-kr?i-this._lodMax+kr:0),f=4*(this._cubeSize-u);zr(t,d,f,3*u,2*u),a.setRenderTarget(t),a.render(c,Va)}};function mx(s){let e=[],t=[],n=s,i=s-kr+1+ux;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,f=6,h=3,g=new Float32Array(h*f*d),M=new Float32Array(h*f*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(y,h*f*p);for(let S=0;S<f;S++){let A=u[S*2]*2-1,R=u[S*2+1]*2-1;p===0?Js.set(1,R,A):p===1?Js.set(-A,1,-R):p===2?Js.set(-A,R,1):p===3?Js.set(-1,R,-A):p===4?Js.set(-A,-1,R):Js.set(A,R,-1),Js.toArray(M,(p*f+S)*h)}}let x=new Rt;x.setAttribute("position",new Ut(g,h)),x.setAttribute("outputDirection",new Ut(M,h)),t.push(new $e(x,null)),n>kr&&n--}return{lodMeshes:t,sizeLods:e}}function Kd(s,e,t){let n=new Ln(s,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function gx(s,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function xx(s,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:dx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Jd(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Zd(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kc=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ba(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ie(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:zi});r.uniforms.tEquirect.value=t;let a=new $e(i,r),o=t.minFilter;return t.minFilter===Ei&&(t.minFilter=fn),new tc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function bx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===ac||h===oc)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let M=new Kc(g.height);return M.fromEquirectangularTexture(s,f),e.set(f,M),f.addEventListener("dispose",l),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let h=f.mapping,g=h===ac||h===oc,M=h===ws||h===js;if(g||M){let x=t.get(f),p=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Gr(s)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let b=f.image;return g&&b&&b.height>0||M&&b&&c(b)?(n===null&&(n=new Gr(s)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",u),x.texture):null}}}return f}function o(f,h){return h===ac?f.mapping=ws:h===oc&&(f.mapping=js),f}function c(f){let h=0,g=6;for(let M=0;M<g;M++)f[M]!==void 0&&h++;return h===g}function l(f){let h=f.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function vx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ns("WebGLRenderer: "+n+" extension not supported."),i}}}function yx(s,e,t,n){let i={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],s.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(h!==null){let b=h.array;M=h.version;for(let w=0,y=b.length;w<y;w+=3){let S=b[w+0],A=b[w+1],R=b[w+2];f.push(S,A,A,R,R,S)}}else{let b=g.array;M=g.version;for(let w=0,y=b.length/3-1;w<y;w+=3){let S=w+0,A=w+1,R=w+2;f.push(S,A,A,R,R,S)}}let x=new(g.count>=65535?pa:fa)(f,1);x.version=M;let p=r.get(d);p&&e.remove(p),r.set(d,x)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function _x(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,h){h!==0&&(s.drawElementsInstanced(n,f,r,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let M=0;for(let x=0;x<h;x++)M+=f[x];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Mx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:gt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ex(s,e,t){let n=new WeakMap,i=new Gt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let N=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;h===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let y=o.attributes.position.count*w,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*S*4*d),R=new ha(A,y,S,d);R.type=ii,R.needsUpdate=!0;let E=w*4;for(let V=0;V<d;V++){let O=x[V],W=p[V],G=b[V],F=y*S*4*V;for(let H=0;H<O.count;H++){let q=H*E;h===!0&&(i.fromBufferAttribute(O,H),A[F+q+0]=i.x,A[F+q+1]=i.y,A[F+q+2]=i.z,A[F+q+3]=0),g===!0&&(i.fromBufferAttribute(W,H),A[F+q+4]=i.x,A[F+q+5]=i.y,A[F+q+6]=i.z,A[F+q+7]=0),M===!0&&(i.fromBufferAttribute(G,H),A[F+q+8]=i.x,A[F+q+9]=i.y,A[F+q+10]=i.z,A[F+q+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:R,size:new je(y,S)},n.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let h=0;for(let M=0;M<l.length;M++)h+=l[M];let g=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Sx(s,e,t,n,i){let r=new WeakMap;function a(l){let u=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var wx={[Ql]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[Ia]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function Tx(s,e,t,n,i,r){let a=new Ln(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Rt;l.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new qo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new $e(l,u),f=new Bi(-1,1,1,-1,0,1),h=null,g=null,M=!1,x,p=null,b=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),c!==null&&c.setSize(y,S);for(let A=0;A<b.length;A++){let R=b[A];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){b=y,w=b.length>0&&b[0].isRenderPass===!0;let S=a.width,A=a.height;b.length>0&&o===null&&(o=new Ln(S,A,{type:kn,depthBuffer:!1,stencilBuffer:!1}),c=new Ln(S,A,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let E=b[R];E.setSize&&E.setSize(S,A)}},this.begin=function(y,S){if(M||y.toneMapping===Mi&&b.length===0)return!1;if(p=S,S!==null){let A=S.width,R=S.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return w===!1&&y.setRenderTarget(a),x=y.toneMapping,y.toneMapping=Mi,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=x,M=!0;let A=a,R=o;for(let E=0;E<b.length;E++){let N=b[E];N.enabled!==!1&&(N.render(y,R,A,S),N.needsSwap!==!1&&(A=R,R=R===o?c:o))}if(h!==y.outputColorSpace||g!==y.toneMapping){h=y.outputColorSpace,g=y.toneMapping,u.defines={},It.getTransfer(h)===Kt&&(u.defines.SRGB_TRANSFER="");let E=wx[g];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(d,f),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bf=new gn,Dh=new Ni(1,1),vf=new ha,yf=new No,_f=new ba,$d=[],Qd=[],ef=new Float32Array(16),tf=new Float32Array(9),nf=new Float32Array(4);function Vr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=$d[i];if(r===void 0&&(r=new Float32Array(i),$d[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $c(s,e){let t=Qd[e];t===void 0&&(t=new Int32Array(e),Qd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ax(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function Cx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function Px(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function Ix(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;nf.set(n),s.uniformMatrix2fv(this.addr,!1,nf),wn(t,n)}}function Lx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;tf.set(n),s.uniformMatrix3fv(this.addr,!1,tf),wn(t,n)}}function Dx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Sn(t,n))return;ef.set(n),s.uniformMatrix4fv(this.addr,!1,ef),wn(t,n)}}function Nx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function Bx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function Hx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function Gx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dh.compareFunction=t.isReversedDepthBuffer()?Xc:qc,r=Dh):r=bf,t.setTexture2D(e||r,i)}function Vx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yf,i)}function Wx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_f,i)}function qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vf,i)}function Xx(s){switch(s){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return kx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return qx}}function jx(s,e){s.uniform1fv(this.addr,e)}function Yx(s,e){let t=Vr(e,this.size,2);s.uniform2fv(this.addr,t)}function Kx(s,e){let t=Vr(e,this.size,3);s.uniform3fv(this.addr,t)}function Jx(s,e){let t=Vr(e,this.size,4);s.uniform4fv(this.addr,t)}function Zx(s,e){let t=Vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $x(s,e){let t=Vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Qx(s,e){let t=Vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function eb(s,e){s.uniform1iv(this.addr,e)}function tb(s,e){s.uniform2iv(this.addr,e)}function nb(s,e){s.uniform3iv(this.addr,e)}function ib(s,e){s.uniform4iv(this.addr,e)}function sb(s,e){s.uniform1uiv(this.addr,e)}function rb(s,e){s.uniform2uiv(this.addr,e)}function ab(s,e){s.uniform3uiv(this.addr,e)}function ob(s,e){s.uniform4uiv(this.addr,e)}function cb(s,e,t){let n=this.cache,i=e.length,r=$c(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Dh:a=bf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function lb(s,e,t){let n=this.cache,i=e.length,r=$c(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yf,r[a])}function hb(s,e,t){let n=this.cache,i=e.length,r=$c(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||_f,r[a])}function ub(s,e,t){let n=this.cache,i=e.length,r=$c(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vf,r[a])}function db(s){switch(s){case 5126:return jx;case 35664:return Yx;case 35665:return Kx;case 35666:return Jx;case 35674:return Zx;case 35675:return $x;case 35676:return Qx;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return sb;case 36294:return rb;case 36295:return ab;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return ub}}var Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xx(t.type)}},Fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=db(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function sf(s,e){s.seq.push(e),s.map[e.id]=e}function fb(s,e,t){let n=s.name,i=n.length;for(Ih.lastIndex=0;;){let r=Ih.exec(n),a=Ih.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){sf(t,l===void 0?new Nh(o,s,e):new Fh(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Uh(o),sf(t,d)),t=d}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);fb(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function rf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var pb=37297,mb=0;function gb(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var af=new vt;function xb(s){It._getMatrix(af,It.workingColorSpace,s);let e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case ca:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function of(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+gb(s.getShaderSource(e),o)}else return r}function bb(s,e){let t=xb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vb={[Ql]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[Ia]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function yb(s,e){let t=vb[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yc=new D;function _b(){It.getLuminanceCoefficients(Yc);let s=Yc.x.toFixed(4),e=Yc.y.toFixed(4),t=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function Eb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sb(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function qa(s){return s!==""}function cf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(wb,Ab)}var Tb=new Map;function Ab(s,e){let t=Ct[e];if(t===void 0){let n=Tb.get(e);if(n!==void 0)t=Ct[n],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Oh(t)}var Rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(s){return s.replace(Rb,Cb)}function Cb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Pb={[qs]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function Ib(s){return Pb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lb={[ws]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE_UV"};function Db(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Lb[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Nb={[js]:"ENVMAP_MODE_REFRACTION"};function Fb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Nb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ub={[rc]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function Ob(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ub[s.combine]||"ENVMAP_BLENDING_NONE"}function Bb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ib(t),l=Db(t),u=Fb(t),d=Ob(t),f=Bb(t),h=Mb(t),g=Eb(r),M=i.createProgram(),x,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),p.length>0&&(p+=`
`)):(x=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Mi?yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,bb("linearToOutputTexel",t.outputColorSpace),_b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=Oh(a),a=cf(a,t),a=lf(a,t),o=Oh(o),o=cf(o,t),o=lf(o,t),a=hf(a),o=hf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+x+a,y=b+p+o,S=rf(i,i.VERTEX_SHADER,w),A=rf(i,i.FRAGMENT_SHADER,y);i.attachShader(M,S),i.attachShader(M,A),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function R(O){if(s.debug.checkShaderErrors){let W=i.getProgramInfoLog(M)||"",G=i.getShaderInfoLog(S)||"",F=i.getShaderInfoLog(A)||"",H=W.trim(),q=G.trim(),Y=F.trim(),de=!0,Q=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,S,A);else{let te=of(i,S,"vertex"),xe=of(i,A,"fragment");gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+te+`
`+xe)}else H!==""?rt("WebGLProgram: Program Info Log:",H):(q===""||Y==="")&&(Q=!1);Q&&(O.diagnostics={runnable:de,programLog:H,vertexShader:{log:q,prefix:x},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(S),i.deleteShader(A),E=new Hr(i,M),N=Sb(i,M)}let E;this.getUniforms=function(){return E===void 0&&R(this),E};let N;this.getAttributes=function(){return N===void 0&&R(this),N};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=i.getProgramParameter(M,pb)),V},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=A,this}var kb=0,Bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zh(e),t.set(e,n)),n}},zh=class{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}};function Hb(s){return s===As||s===Oa||s===Ba}function Gb(s,e,t,n,i,r){let a=new _r,o=new Bh,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function M(E,N,V,O,W,G){let F=O.fog,H=W.geometry,q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,Y=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,de=e.get(E.envMap||q,Y),Q=de&&de.mapping===La?de.image.height:null,te=h[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&rt("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Me=xe!==void 0?xe.length:0,Ne=0;H.morphAttributes.position!==void 0&&(Ne=1),H.morphAttributes.normal!==void 0&&(Ne=2),H.morphAttributes.color!==void 0&&(Ne=3);let tt,Re,Ze,re;if(te){let nt=Hi[te];tt=nt.vertexShader,Re=nt.fragmentShader}else{tt=E.vertexShader,Re=E.fragmentShader;let nt=o.getVertexShaderStage(E),ht=o.getFragmentShaderStage(E);o.update(E,nt,ht),Ze=nt.id,re=ht.id}let pe=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,Be=W.isBatchedMesh===!0,at=!!E.map,yt=!!E.matcap,st=!!de,ct=!!E.aoMap,Ft=!!E.lightMap,lt=!!E.bumpMap&&E.wireframe===!1,Mt=!!E.normalMap,kt=!!E.displacementMap,Ht=!!E.emissiveMap,xt=!!E.metalnessMap,ie=!!E.roughnessMap,U=E.anisotropy>0,Se=E.clearcoat>0,ye=E.dispersion>0,I=E.retroreflectivity>0,v=E.iridescence>0,j=E.sheen>0,Z=E.transmission>0,oe=U&&!!E.anisotropyMap,he=Se&&!!E.clearcoatMap,me=Se&&!!E.clearcoatNormalMap,$=Se&&!!E.clearcoatRoughnessMap,ae=v&&!!E.iridescenceMap,ve=v&&!!E.iridescenceThicknessMap,fe=j&&!!E.sheenColorMap,ge=j&&!!E.sheenRoughnessMap,be=!!E.specularMap,_e=!!E.specularColorMap,Ae=!!E.specularIntensityMap,He=Z&&!!E.transmissionMap,K=Z&&!!E.thicknessMap,Fe=!!E.gradientMap,ce=!!E.alphaMap,Pe=E.alphaTest>0,De=!!E.alphaHash,we=!!E.extensions,et=Mi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(et=s.toneMapping);let Ke={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:Re,defines:E.defines,customVertexShaderID:Ze,customFragmentShaderID:re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Be,batchingColor:Be&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:yt,envMap:st,envMapMode:st&&de.mapping,envMapCubeUVHeight:Q,aoMap:ct,lightMap:Ft,bumpMap:lt,normalMap:Mt,displacementMap:kt,emissiveMap:Ht,normalMapObjectSpace:Mt&&E.normalMapType===Dd,normalMapTangentSpace:Mt&&E.normalMapType===ka,packedNormalMap:Mt&&E.normalMapType===ka&&Hb(E.normalMap.format),metalnessMap:xt,roughnessMap:ie,anisotropy:U,anisotropyMap:oe,clearcoat:Se,clearcoatMap:he,clearcoatNormalMap:me,clearcoatRoughnessMap:$,dispersion:ye,retroreflection:I,iridescence:v,iridescenceMap:ae,iridescenceThicknessMap:ve,sheen:j,sheenColorMap:fe,sheenRoughnessMap:ge,specularMap:be,specularColorMap:_e,specularIntensityMap:Ae,transmission:Z,transmissionMap:He,thicknessMap:K,gradientMap:Fe,opaque:E.transparent===!1&&E.blending===Dr&&E.alphaToCoverage===!1,alphaMap:ce,alphaTest:Pe,alphaHash:De,combine:E.combine,mapUv:at&&g(E.map.channel),aoMapUv:ct&&g(E.aoMap.channel),lightMapUv:Ft&&g(E.lightMap.channel),bumpMapUv:lt&&g(E.bumpMap.channel),normalMapUv:Mt&&g(E.normalMap.channel),displacementMapUv:kt&&g(E.displacementMap.channel),emissiveMapUv:Ht&&g(E.emissiveMap.channel),metalnessMapUv:xt&&g(E.metalnessMap.channel),roughnessMapUv:ie&&g(E.roughnessMap.channel),anisotropyMapUv:oe&&g(E.anisotropyMap.channel),clearcoatMapUv:he&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(E.sheenRoughnessMap.channel),specularMapUv:be&&g(E.specularMap.channel),specularColorMapUv:_e&&g(E.specularColorMap.channel),specularIntensityMapUv:Ae&&g(E.specularIntensityMap.channel),transmissionMapUv:He&&g(E.transmissionMap.channel),thicknessMapUv:K&&g(E.thicknessMap.channel),alphaMapUv:ce&&g(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Mt||U),vertexNormals:!!H.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(at||ce),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||H.attributes.normal===void 0&&Mt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ne,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&It.getTransfer(E.map.colorSpace)===Kt,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&It.getTransfer(E.emissiveMap.colorSpace)===Kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===En,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:we&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&E.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function x(E){let N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(let V in E.defines)N.push(V),N.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(p(N,E),b(N,E),N.push(s.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function p(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function b(E,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),E.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),E.push(a.mask)}function w(E){let N=h[E.type],V;if(N){let O=Hi[N];V=Ga.clone(O.uniforms)}else V=E.uniforms;return V}function y(E,N){let V=u.get(N);return V!==void 0?++V.usedTimes:(V=new zb(s,N,E,i),l.push(V),u.set(N,V)),V}function S(E){if(--E.usedTimes===0){let N=l.indexOf(E);l[N]=l[l.length-1],l.pop(),u.delete(E.cacheKey),E.destroy()}}function A(E){o.remove(E)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:R}}function Vb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Wb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function df(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ff(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,M,x,p){let b=s[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:x,group:p},s[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=g,b.materialVariant=a(f),b.groupOrder=M,b.renderOrder=f.renderOrder,b.z=x,b.group=p),e++,b}function c(f,h,g,M,x,p,b){b.reversedDepth===!0&&(x=-x);let w=o(f,h,g,M,x,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function l(f,h,g,M,x,p){let b=o(f,h,g,M,x,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):t.unshift(b)}function u(f,h){t.length>1&&t.sort(f||Wb),n.length>1&&n.sort(h||df),i.length>1&&i.sort(h||df)}function d(){for(let f=e,h=s.length;f<h;f++){let g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:u}}function qb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new ff,s.set(n,[a])):i>=r.length?(a=new ff,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Xb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function jb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Yb=0;function Kb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Jb(s){let e=new Xb,t=jb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new Ye,a=new Ye;function o(l){let u=0,d=0,f=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let h=0,g=0,M=0,x=0,p=0,b=0,w=0,y=0,S=0,A=0,R=0,E=0,N=0,V=0;l.sort(Kb);for(let W=0,G=l.length;W<G;W++){let F=l[W],H=F.color,q=F.intensity,Y=F.distance,de=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===As?de=F.shadow.map.texture:de=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=H.r*q,d+=H.g*q,f+=H.b*q;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(F.sh.coefficients[Q],q);V++}else if(F.isSunLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let te=F.shadow,xe=t.get(F);xe.shadowIntensity=te.intensity,xe.shadowBias=te.bias,xe.shadowNormalBias=te.normalBias,xe.shadowRadius=te.radius,xe.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=xe,n.sunShadowMap[g]=de;let Me=te.getViewportCount();for(let Ne=0;Ne<Me;Ne++)n.sunShadowMatrix[M+Ne]=te.getMatrix(Ne),n.sunShadowCascade[M+Ne]=te._cascadeData[Ne];M+=Me,g++}n.sun[h]=Q,h++}else if(F.isDirectionalLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let te=F.shadow,xe=t.get(F);xe.shadowIntensity=te.intensity,xe.shadowBias=te.bias,xe.shadowNormalBias=te.normalBias,xe.shadowRadius=te.radius,xe.shadowMapSize=te.mapSize,n.directionalShadow[x]=xe,n.directionalShadowMap[x]=de,n.directionalShadowMatrix[x]=F.shadow.matrix,S++}n.directional[x]=Q,x++}else if(F.isSpotLight){let Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(H).multiplyScalar(q),Q.distance=Y,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,n.spot[b]=Q;let te=F.shadow;if(F.map&&(n.spotLightMap[E]=F.map,E++,te.updateMatrices(F),F.castShadow&&N++),n.spotLightMatrix[b]=te.matrix,F.castShadow){let xe=t.get(F);xe.shadowIntensity=te.intensity,xe.shadowBias=te.bias,xe.shadowNormalBias=te.normalBias,xe.shadowRadius=te.radius,xe.shadowMapSize=te.mapSize,n.spotShadow[b]=xe,n.spotShadowMap[b]=de,R++}b++}else if(F.isRectAreaLight){let Q=e.get(F);Q.color.copy(H).multiplyScalar(q),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),n.rectArea[w]=Q,w++}else if(F.isPointLight){let Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){let te=F.shadow,xe=t.get(F);xe.shadowIntensity=te.intensity,xe.shadowBias=te.bias,xe.shadowNormalBias=te.normalBias,xe.shadowRadius=te.radius,xe.shadowMapSize=te.mapSize,xe.shadowCameraNear=te.camera.near,xe.shadowCameraFar=te.camera.far,n.pointShadow[p]=xe,n.pointShadowMap[p]=de,n.pointShadowMatrix[p]=F.shadow.matrix,A++}n.point[p]=Q,p++}else if(F.isHemisphereLight){let Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar(q),Q.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[y]=Q,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let O=n.hash;(O.sunLength!==h||O.directionalLength!==x||O.pointLength!==p||O.spotLength!==b||O.rectAreaLength!==w||O.hemiLength!==y||O.numSunShadows!==g||O.numDirectionalShadows!==S||O.numPointShadows!==A||O.numSpotShadows!==R||O.numSpotMaps!==E||O.numLightProbes!==V)&&(n.sun.length=h,n.directional.length=x,n.spot.length=b,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+E-N,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=V,O.sunLength=h,O.directionalLength=x,O.pointLength=p,O.spotLength=b,O.rectAreaLength=w,O.hemiLength=y,O.numSunShadows=g,O.numDirectionalShadows=S,O.numPointShadows=A,O.numSpotShadows=R,O.numSpotMaps=E,O.numLightProbes=V,n.version=Yb++)}function c(l,u){let d=0,f=0,h=0,g=0,M=0,x=0,p=u.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){let y=l[b];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function pf(s){let e=new Jb(s),t=[],n=[],i=[];function r(f){d.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function c(f){i.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Zb(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new pf(s),e.set(i,[o])):r>=a.length?(o=new pf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qb=`uniform sampler2D shadow_pass;
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
}`,ev=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],tv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],mf=new Ye,Wa=new D,Lh=new D;function nv(s,e,t){let n=new Tr,i=new je,r=new je,a=new Gt,o=new Xo,c=new jo,l={},u=t.maxTextureSize,d={[hi]:En,[En]:hi,[an]:an},f=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:$b,fragmentShader:Qb}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(A,R,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===ld&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);let N=s.getRenderTarget(),V=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),W=s.state;W.setBlending(zi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=A.length;F<H;F++){let q=A[F],Y=q.shadow;if(Y===void 0){rt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let de=Y.getFrameExtents();i.multiply(de),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/de.x),i.x=r.x*de.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/de.y),i.y=r.y*de.y,Y.mapSize.y=r.y));let Q=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Q,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Lr){if(q.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Ln(i.x,i.y,{format:As,type:kn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Ni(i.x,i.y,ii),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Li,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=mn,Y.map.depthTexture.magFilter=mn}else q.isPointLight?(Y.map=new Kc(i.x),Y.map.depthTexture=new Oo(i.x,Si)):(Y.map=new Ln(i.x,i.y),Y.map.depthTexture=new Ni(i.x,i.y,Si)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Li,this.type===qs?(Y.map.depthTexture.compareFunction=Q?Xc:qc,Y.map.depthTexture.minFilter=fn,Y.map.depthTexture.magFilter=fn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=mn,Y.map.depthTexture.magFilter=mn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let te=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,E);for(let xe=0;xe<te;xe++){let Me=Y.getCamera(xe);if(q.isPointLight){let Ne=Y.camera,tt=Y.matrix,Re=q.distance||Ne.far;Re!==Ne.far&&(Ne.far=Re,Ne.updateProjectionMatrix()),Wa.setFromMatrixPosition(q.matrixWorld),Ne.position.copy(Wa),Lh.copy(Ne.position),Lh.add(ev[xe]),Ne.up.copy(tv[xe]),Ne.lookAt(Lh),Ne.updateMatrixWorld(),tt.makeTranslation(-Wa.x,-Wa.y,-Wa.z),mf.multiplyMatrices(Ne.projectionMatrix,Ne.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(mf,Ne.coordinateSystem,Ne.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,xe),s.clear();else{xe===0&&(s.setRenderTarget(Y.map),s.clear());let Ne=Y.getViewport(xe);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),W.viewport(a)}n=Y.getFrustum(xe),y(R,E,Me,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Lr&&b(Y,E),Y.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(N,V,O)};function b(A,R){let E=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ln(i.x,i.y,{format:As,type:kn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,E,f,M,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,E,h,M,null)}function w(A,R,E,N){let V=null,O=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)V=O;else if(V=E.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let W=V.uuid,G=R.uuid,F=l[W];F===void 0&&(F={},l[W]=F);let H=F[G];H===void 0&&(H=V.clone(),F[G]=H,R.addEventListener("dispose",S)),V=H}if(V.visible=R.visible,V.wireframe=R.wireframe,N===Lr?V.side=R.shadowSide!==null?R.shadowSide:R.side:V.side=R.shadowSide!==null?R.shadowSide:d[R.side],V.alphaMap=R.alphaMap,V.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,V.map=R.map,V.clipShadows=R.clipShadows,V.clippingPlanes=R.clippingPlanes,V.clipIntersection=R.clipIntersection,V.displacementMap=R.displacementMap,V.displacementScale=R.displacementScale,V.displacementBias=R.displacementBias,V.wireframeLinewidth=R.wireframeLinewidth,V.linewidth=R.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let W=s.properties.get(V);W.light=E}return V}function y(A,R,E,N,V){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&V===Lr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let G=e.update(A),F=A.material;if(Array.isArray(F)){let H=G.groups;for(let q=0,Y=H.length;q<Y;q++){let de=H[q],Q=F[de.materialIndex];if(Q&&Q.visible){let te=w(A,Q,N,V);A.onBeforeShadow(s,A,R,E,G,te,de),s.renderBufferDirect(E,null,G,te,A,de),A.onAfterShadow(s,A,R,E,G,te,de)}}}else if(F.visible){let H=w(A,F,N,V);A.onBeforeShadow(s,A,R,E,G,H,null),s.renderBufferDirect(E,null,G,H,A,null),A.onAfterShadow(s,A,R,E,G,H,null)}}let W=A.children;for(let G=0,F=W.length;G<F;G++)y(W[G],R,E,N,V)}function S(A){A.target.removeEventListener("dispose",S);for(let E in l){let N=l[E],V=A.target.uuid;V in N&&(N[V].dispose(),delete N[V])}}}function iv(s,e){function t(){let K=!1,Fe=new Gt,ce=null,Pe=new Gt(0,0,0,0);return{setMask:function(De){ce!==De&&!K&&(s.colorMask(De,De,De,De),ce=De)},setLocked:function(De){K=De},setClear:function(De,we,et,Ke,nt){nt===!0&&(De*=Ke,we*=Ke,et*=Ke),Fe.set(De,we,et,Ke),Pe.equals(Fe)===!1&&(s.clearColor(De,we,et,Ke),Pe.copy(Fe))},reset:function(){K=!1,ce=null,Pe.set(-1,0,0,0)}}}function n(){let K=!1,Fe=!1,ce=null,Pe=null,De=null;return{setReversed:function(we){if(Fe!==we){let et=e.get("EXT_clip_control");we?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Fe=we;let Ke=De;De=null,this.setClear(Ke)}},getReversed:function(){return Fe},setTest:function(we){we?pe(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(we){ce!==we&&!K&&(s.depthMask(we),ce=we)},setFunc:function(we){if(Fe&&(we=Wd[we]),Pe!==we){switch(we){case wo:s.depthFunc(s.NEVER);break;case To:s.depthFunc(s.ALWAYS);break;case Ao:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case Ro:s.depthFunc(s.EQUAL);break;case Co:s.depthFunc(s.GEQUAL);break;case Po:s.depthFunc(s.GREATER);break;case Io:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=we}},setLocked:function(we){K=we},setClear:function(we){De!==we&&(De=we,Fe&&(we=1-we),s.clearDepth(we))},reset:function(){K=!1,ce=null,Pe=null,De=null,Fe=!1}}}function i(){let K=!1,Fe=null,ce=null,Pe=null,De=null,we=null,et=null,Ke=null,nt=null;return{setTest:function(ht){K||(ht?pe(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(ht){Fe!==ht&&!K&&(s.stencilMask(ht),Fe=ht)},setFunc:function(ht,tn,Lt){(ce!==ht||Pe!==tn||De!==Lt)&&(s.stencilFunc(ht,tn,Lt),ce=ht,Pe=tn,De=Lt)},setOp:function(ht,tn,Lt){(we!==ht||et!==tn||Ke!==Lt)&&(s.stencilOp(ht,tn,Lt),we=ht,et=tn,Ke=Lt)},setLocked:function(ht){K=ht},setClear:function(ht){nt!==ht&&(s.clearStencil(ht),nt=ht)},reset:function(){K=!1,Fe=null,ce=null,Pe=null,De=null,we=null,et=null,Ke=null,nt=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},h=new WeakMap,g=[],M=null,x=!1,p=null,b=null,w=null,y=null,S=null,A=null,R=null,E=new Oe(0,0,0),N=0,V=!1,O=null,W=null,G=null,F=null,H=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,de=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=de>=1):Q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=de>=2);let te=null,xe={},Me=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),tt=new Gt().fromArray(Me),Re=new Gt().fromArray(Ne);function Ze(K,Fe,ce,Pe){let De=new Uint8Array(4),we=s.createTexture();s.bindTexture(K,we),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ce;et++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(Fe,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Fe+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return we}let re={};re[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(s.DEPTH_TEST),a.setFunc(mr),lt(!1),Mt(Yl),pe(s.CULL_FACE),ct(zi);function pe(K){u[K]!==!0&&(s.enable(K),u[K]=!0)}function Ee(K){u[K]!==!1&&(s.disable(K),u[K]=!1)}function ze(K,Fe){return f[K]!==Fe?(s.bindFramebuffer(K,Fe),f[K]=Fe,K===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Fe),K===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Be(K,Fe){let ce=g,Pe=!1;if(K){ce=h.get(Fe),ce===void 0&&(ce=[],h.set(Fe,ce));let De=K.textures;if(ce.length!==De.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let we=0,et=De.length;we<et;we++)ce[we]=s.COLOR_ATTACHMENT0+we;ce.length=De.length,Pe=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(ce)}function at(K){return M!==K?(s.useProgram(K),M=K,!0):!1}let yt={[Xs]:s.FUNC_ADD,[ud]:s.FUNC_SUBTRACT,[dd]:s.FUNC_REVERSE_SUBTRACT};yt[fd]=s.MIN,yt[pd]=s.MAX;let st={[md]:s.ZERO,[gd]:s.ONE,[xd]:s.SRC_COLOR,[Zl]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[_d]:s.DST_COLOR,[vd]:s.DST_ALPHA,[bd]:s.ONE_MINUS_SRC_COLOR,[$l]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[yd]:s.ONE_MINUS_DST_ALPHA,[Sd]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[Td]:s.CONSTANT_ALPHA,[Ad]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(K,Fe,ce,Pe,De,we,et,Ke,nt,ht){if(K===zi){x===!0&&(Ee(s.BLEND),x=!1);return}if(x===!1&&(pe(s.BLEND),x=!0),K!==hd){if(K!==p||ht!==V){if((b!==Xs||S!==Xs)&&(s.blendEquation(s.FUNC_ADD),b=Xs,S=Xs),ht)switch(K){case Dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFunc(s.ONE,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:gt("WebGLState: Invalid blending: ",K);break}else switch(K){case Dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kl:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",K);break}w=null,y=null,A=null,R=null,E.set(0,0,0),N=0,p=K,V=ht}return}De=De||Fe,we=we||ce,et=et||Pe,(Fe!==b||De!==S)&&(s.blendEquationSeparate(yt[Fe],yt[De]),b=Fe,S=De),(ce!==w||Pe!==y||we!==A||et!==R)&&(s.blendFuncSeparate(st[ce],st[Pe],st[we],st[et]),w=ce,y=Pe,A=we,R=et),(Ke.equals(E)===!1||nt!==N)&&(s.blendColor(Ke.r,Ke.g,Ke.b,nt),E.copy(Ke),N=nt),p=K,V=!1}function Ft(K,Fe){K.side===an?Ee(s.CULL_FACE):pe(s.CULL_FACE);let ce=K.side===En;Fe&&(ce=!ce),lt(ce),K.blending===Dr&&K.transparent===!1?ct(zi):ct(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let Pe=K.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ht(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(K){O!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),O=K)}function Mt(K){K!==od?(pe(s.CULL_FACE),K!==W&&(K===Yl?s.cullFace(s.BACK):K===cd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),W=K}function kt(K){K!==G&&(Y&&s.lineWidth(K),G=K)}function Ht(K,Fe,ce){K?(pe(s.POLYGON_OFFSET_FILL),(F!==Fe||H!==ce)&&(F=Fe,H=ce,a.getReversed()&&(Fe=-Fe),s.polygonOffset(Fe,ce))):Ee(s.POLYGON_OFFSET_FILL)}function xt(K){K?pe(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function ie(K){K===void 0&&(K=s.TEXTURE0+q-1),te!==K&&(s.activeTexture(K),te=K)}function U(K,Fe,ce){ce===void 0&&(te===null?ce=s.TEXTURE0+q-1:ce=te);let Pe=xe[ce];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[ce]=Pe),(Pe.type!==K||Pe.texture!==Fe)&&(te!==ce&&(s.activeTexture(ce),te=ce),s.bindTexture(K,Fe||re[K]),Pe.type=K,Pe.texture=Fe)}function Se(){let K=xe[te];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ye(){try{s.compressedTexImage2D(...arguments)}catch(K){gt("WebGLState:",K)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(K){gt("WebGLState:",K)}}function v(){try{s.texSubImage2D(...arguments)}catch(K){gt("WebGLState:",K)}}function j(){try{s.texSubImage3D(...arguments)}catch(K){gt("WebGLState:",K)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(K){gt("WebGLState:",K)}}function oe(){try{s.compressedTexSubImage3D(...arguments)}catch(K){gt("WebGLState:",K)}}function he(){try{s.texStorage2D(...arguments)}catch(K){gt("WebGLState:",K)}}function me(){try{s.texStorage3D(...arguments)}catch(K){gt("WebGLState:",K)}}function $(){try{s.texImage2D(...arguments)}catch(K){gt("WebGLState:",K)}}function ae(){try{s.texImage3D(...arguments)}catch(K){gt("WebGLState:",K)}}function ve(K){return d[K]!==void 0?d[K]:s.getParameter(K)}function fe(K,Fe){d[K]!==Fe&&(s.pixelStorei(K,Fe),d[K]=Fe)}function ge(K){tt.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),tt.copy(K))}function be(K){Re.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Re.copy(K))}function _e(K,Fe){let ce=l.get(Fe);ce===void 0&&(ce=new WeakMap,l.set(Fe,ce));let Pe=ce.get(K);Pe===void 0&&(Pe=s.getUniformBlockIndex(Fe,K.name),ce.set(K,Pe))}function Ae(K,Fe){let Pe=l.get(Fe).get(K);c.get(Fe)!==Pe&&(s.uniformBlockBinding(Fe,Pe,K.__bindingPointIndex),c.set(Fe,Pe))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,xe={},f={},h=new WeakMap,g=[],M=null,x=!1,p=null,b=null,w=null,y=null,S=null,A=null,R=null,E=new Oe(0,0,0),N=0,V=!1,O=null,W=null,G=null,F=null,H=null,tt.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Ee,bindFramebuffer:ze,drawBuffers:Be,useProgram:at,setBlending:ct,setMaterial:Ft,setFlipSided:lt,setCullFace:Mt,setLineWidth:kt,setPolygonOffset:Ht,setScissorTest:xt,activeTexture:ie,bindTexture:U,unbindTexture:Se,compressedTexImage2D:ye,compressedTexImage3D:I,texImage2D:$,texImage3D:ae,pixelStorei:fe,getParameter:ve,updateUBOMapping:_e,uniformBlockBinding:Ae,texStorage2D:he,texStorage3D:me,texSubImage2D:v,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:oe,scissor:ge,viewport:be,reset:He}}function sv(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,u=new WeakMap,d=new Set,f,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,v){return g?new OffscreenCanvas(I,v):br("canvas")}function x(I,v,j){let Z=1,oe=ye(I);if((oe.width>j||oe.height>j)&&(Z=j/Math.max(oe.width,oe.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let he=Math.floor(Z*oe.width),me=Math.floor(Z*oe.height);f===void 0&&(f=M(he,me));let $=v?M(he,me):f;return $.width=he,$.height=me,$.getContext("2d").drawImage(I,0,0,he,me),rt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+he+"x"+me+")."),$}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),I;return I}function p(I){return I.generateMipmaps}function b(I){s.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,v,j,Z,oe,he=!1){if(I!==null){if(s[I]!==void 0)return s[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me;Z&&(me=e.get("EXT_texture_norm16"),me||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===s.RED&&(j===s.FLOAT&&($=s.R32F),j===s.HALF_FLOAT&&($=s.R16F),j===s.UNSIGNED_BYTE&&($=s.R8),j===s.UNSIGNED_SHORT&&me&&($=me.R16_EXT),j===s.SHORT&&me&&($=me.R16_SNORM_EXT)),v===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&($=s.R8UI),j===s.UNSIGNED_SHORT&&($=s.R16UI),j===s.UNSIGNED_INT&&($=s.R32UI),j===s.BYTE&&($=s.R8I),j===s.SHORT&&($=s.R16I),j===s.INT&&($=s.R32I)),v===s.RG&&(j===s.FLOAT&&($=s.RG32F),j===s.HALF_FLOAT&&($=s.RG16F),j===s.UNSIGNED_BYTE&&($=s.RG8),j===s.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),j===s.SHORT&&me&&($=me.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&($=s.RG8UI),j===s.UNSIGNED_SHORT&&($=s.RG16UI),j===s.UNSIGNED_INT&&($=s.RG32UI),j===s.BYTE&&($=s.RG8I),j===s.SHORT&&($=s.RG16I),j===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&($=s.RGB8UI),j===s.UNSIGNED_SHORT&&($=s.RGB16UI),j===s.UNSIGNED_INT&&($=s.RGB32UI),j===s.BYTE&&($=s.RGB8I),j===s.SHORT&&($=s.RGB16I),j===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&($=s.RGBA8UI),j===s.UNSIGNED_SHORT&&($=s.RGBA16UI),j===s.UNSIGNED_INT&&($=s.RGBA32UI),j===s.BYTE&&($=s.RGBA8I),j===s.SHORT&&($=s.RGBA16I),j===s.INT&&($=s.RGBA32I)),v===s.RGB&&(j===s.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),j===s.SHORT&&me&&($=me.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),v===s.RGBA){let ae=he?ca:It.getTransfer(oe);j===s.FLOAT&&($=s.RGBA32F),j===s.HALF_FLOAT&&($=s.RGBA16F),j===s.UNSIGNED_BYTE&&($=ae===Kt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),j===s.SHORT&&me&&($=me.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(I,v){let j;return I?v===null||v===Si||v===Ur?j=s.DEPTH24_STENCIL8:v===ii?j=s.DEPTH32F_STENCIL8:v===Fr&&(j=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===Ur?j=s.DEPTH_COMPONENT24:v===ii?j=s.DEPTH_COMPONENT32F:v===Fr&&(j=s.DEPTH_COMPONENT16),j}function A(I,v){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==mn&&I.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function R(I){let v=I.target;v.removeEventListener("dispose",R),N(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function E(I){let v=I.target;v.removeEventListener("dispose",E),O(v)}function N(I){let v=n.get(I);if(v.__webglInit===void 0)return;let j=I.source,Z=h.get(j);if(Z){let oe=Z[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&V(I),Object.keys(Z).length===0&&h.delete(j)}n.remove(I)}function V(I){let v=n.get(I);s.deleteTexture(v.__webglTexture);let j=I.source,Z=h.get(j);delete Z[v.__cacheKey],a.memory.textures--}function O(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let oe=0;oe<v.__webglFramebuffer[Z].length;oe++)s.deleteFramebuffer(v.__webglFramebuffer[Z][oe]);else s.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[Z]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let j=I.textures;for(let Z=0,oe=j.length;Z<oe;Z++){let he=n.get(j[Z]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(j[Z])}n.remove(I)}let W=0;function G(){W=0}function F(){return W}function H(I){W=I}function q(){let I=W;return I>=i.maxTextures&&rt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,I}function Y(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function de(I,v){let j=n.get(I);if(I.isVideoTexture&&U(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){let Z=I.image;if(Z===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(j,I,v);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+v)}function Q(I,v){let j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){Ee(j,I,v);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+v)}function te(I,v){let j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){Ee(j,I,v);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+v)}function xe(I,v){let j=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){ze(j,I,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+v)}let Me={[Ii]:s.REPEAT,[ci]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},Ne={[mn]:s.NEAREST,[cc]:s.NEAREST_MIPMAP_NEAREST,[Ys]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Nr]:s.LINEAR_MIPMAP_NEAREST,[Ei]:s.LINEAR_MIPMAP_LINEAR},tt={[Fd]:s.NEVER,[kd]:s.ALWAYS,[Ud]:s.LESS,[qc]:s.LEQUAL,[Od]:s.EQUAL,[Xc]:s.GEQUAL,[Bd]:s.GREATER,[zd]:s.NOTEQUAL};function Re(I,v){if(v.type===ii&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===Nr||v.magFilter===Ys||v.magFilter===Ei||v.minFilter===fn||v.minFilter===Nr||v.minFilter===Ys||v.minFilter===Ei)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Me[v.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Me[v.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Me[v.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Ne[v.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Ne[v.minFilter]),v.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,tt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===mn||v.minFilter!==Ys&&v.minFilter!==Ei||v.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(I,v){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",R));let Z=v.source,oe=h.get(Z);oe===void 0&&(oe={},h.set(Z,oe));let he=Y(v);if(he!==I.__cacheKey){oe[he]===void 0&&(oe[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),oe[he].usedTimes++;let me=oe[I.__cacheKey];me!==void 0&&(oe[I.__cacheKey].usedTimes--,me.usedTimes===0&&V(v)),I.__cacheKey=he,I.__webglTexture=oe[he].texture}return j}function re(I,v,j){return Math.floor(Math.floor(I/j)/v)}function pe(I,v,j,Z){let he=I.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,j,Z,v.data);else{he.sort((fe,ge)=>fe.start-ge.start);let me=0;for(let fe=1;fe<he.length;fe++){let ge=he[me],be=he[fe],_e=ge.start+ge.count,Ae=re(be.start,v.width,4),He=re(ge.start,v.width,4);be.start<=_e+1&&Ae===He&&re(be.start+be.count-1,v.width,4)===Ae?ge.count=Math.max(ge.count,be.start+be.count-ge.start):(++me,he[me]=be)}he.length=me+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),ae=t.getParameter(s.UNPACK_SKIP_PIXELS),ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let fe=0,ge=he.length;fe<ge;fe++){let be=he[fe],_e=Math.floor(be.start/4),Ae=Math.ceil(be.count/4),He=_e%v.width,K=Math.floor(_e/v.width),Fe=Ae,ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,He),t.pixelStorei(s.UNPACK_SKIP_ROWS,K),t.texSubImage2D(s.TEXTURE_2D,0,He,K,Fe,ce,j,Z,v.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Ee(I,v,j){let Z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=s.TEXTURE_3D);let oe=Ze(I,v),he=v.source;t.bindTexture(Z,I.__webglTexture,s.TEXTURE0+j);let me=n.get(he);if(he.version!==me.__version||oe===!0){if(t.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let ce=It.getPrimaries(It.workingColorSpace),Pe=v.colorSpace===as?null:It.getPrimaries(v.colorSpace),De=v.colorSpace===as||ce===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let ae=x(v.image,!1,i.maxTextureSize);ae=Se(v,ae);let ve=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),ge=y(v.internalFormat,ve,fe,v.normalized,v.colorSpace,v.isVideoTexture);Re(Z,v);let be,_e=v.mipmaps,Ae=v.isVideoTexture!==!0,He=me.__version===void 0||oe===!0,K=he.dataReady,Fe=A(v,ae);if(v.isDepthTexture)ge=S(v.format===Ts,v.type),He&&(Ae?t.texStorage2D(s.TEXTURE_2D,1,ge,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,ge,ae.width,ae.height,0,ve,fe,null));else if(v.isDataTexture)if(_e.length>0){Ae&&He&&t.texStorage2D(s.TEXTURE_2D,Fe,ge,_e[0].width,_e[0].height);for(let ce=0,Pe=_e.length;ce<Pe;ce++)be=_e[ce],Ae?K&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,be.width,be.height,ve,fe,be.data):t.texImage2D(s.TEXTURE_2D,ce,ge,be.width,be.height,0,ve,fe,be.data);v.generateMipmaps=!1}else Ae?(He&&t.texStorage2D(s.TEXTURE_2D,Fe,ge,ae.width,ae.height),K&&pe(v,ae,ve,fe)):t.texImage2D(s.TEXTURE_2D,0,ge,ae.width,ae.height,0,ve,fe,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ae&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ge,_e[0].width,_e[0].height,ae.depth);for(let ce=0,Pe=_e.length;ce<Pe;ce++)if(be=_e[ce],v.format!==si)if(ve!==null)if(Ae){if(K)if(v.layerUpdates.size>0){let De=_h(be.width,be.height,v.format,v.type);for(let we of v.layerUpdates){let et=be.data.subarray(we*De/be.data.BYTES_PER_ELEMENT,(we+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,we,be.width,be.height,1,ve,et)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ae.depth,ve,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,ge,be.width,be.height,ae.depth,0,be.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,be.width,be.height,ae.depth,ve,fe,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,ge,be.width,be.height,ae.depth,0,ve,fe,be.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ae&&He&&t.texStorage2D(s.TEXTURE_2D,Fe,ge,_e[0].width,_e[0].height);for(let ce=0,Pe=_e.length;ce<Pe;ce++)be=_e[ce],v.format!==si?ve!==null?Ae?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,ge,be.width,be.height,0,be.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?K&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,be.width,be.height,ve,fe,be.data):t.texImage2D(s.TEXTURE_2D,ce,ge,be.width,be.height,0,ve,fe,be.data)}else if(v.isDataArrayTexture)if(Ae){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,ge,ae.width,ae.height,ae.depth),K)if(v.layerUpdates.size>0){let ce=_h(ae.width,ae.height,v.format,v.type);for(let Pe of v.layerUpdates){let De=ae.data.subarray(Pe*ce/ae.data.BYTES_PER_ELEMENT,(Pe+1)*ce/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,ae.width,ae.height,1,ve,fe,De)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,fe,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,ae.width,ae.height,ae.depth,0,ve,fe,ae.data);else if(v.isData3DTexture)Ae?(He&&t.texStorage3D(s.TEXTURE_3D,Fe,ge,ae.width,ae.height,ae.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,fe,ae.data)):t.texImage3D(s.TEXTURE_3D,0,ge,ae.width,ae.height,ae.depth,0,ve,fe,ae.data);else if(v.isFramebufferTexture){if(He)if(Ae)t.texStorage2D(s.TEXTURE_2D,Fe,ge,ae.width,ae.height);else{let ce=ae.width,Pe=ae.height;for(let De=0;De<Fe;De++)t.texImage2D(s.TEXTURE_2D,De,ge,ce,Pe,0,ve,fe,null),ce>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let ce=s.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ae.parentNode!==ce){ce.appendChild(ae),d.add(v),ce.onpaint=Pe=>{let De=Pe.changedElements;for(let we of d)De.includes(we.image)&&(we.needsUpdate=!0)},ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ae);else{let De=s.RGBA,we=s.RGBA,et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,we,et,ae)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(_e.length>0){if(Ae&&He){let ce=ye(_e[0]);t.texStorage2D(s.TEXTURE_2D,Fe,ge,ce.width,ce.height)}for(let ce=0,Pe=_e.length;ce<Pe;ce++)be=_e[ce],Ae?K&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,ve,fe,be):t.texImage2D(s.TEXTURE_2D,ce,ge,ve,fe,be);v.generateMipmaps=!1}else if(Ae){if(He){let ce=ye(ae);t.texStorage2D(s.TEXTURE_2D,Fe,ge,ce.width,ce.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,fe,ae)}else t.texImage2D(s.TEXTURE_2D,0,ge,ve,fe,ae);p(v)&&b(Z),me.__version=he.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function ze(I,v,j){if(v.image.length!==6)return;let Z=Ze(I,v),oe=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+j);let he=n.get(oe);if(oe.version!==he.__version||Z===!0){t.activeTexture(s.TEXTURE0+j);let me=It.getPrimaries(It.workingColorSpace),$=v.colorSpace===as?null:It.getPrimaries(v.colorSpace),ae=v.colorSpace===as||me===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let we=0;we<6;we++)!ve&&!fe?ge[we]=x(v.image[we],!0,i.maxCubemapSize):ge[we]=fe?v.image[we].image:v.image[we],ge[we]=Se(v,ge[we]);let be=ge[0],_e=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),He=y(v.internalFormat,_e,Ae,v.normalized,v.colorSpace),K=v.isVideoTexture!==!0,Fe=he.__version===void 0||Z===!0,ce=oe.dataReady,Pe=A(v,be);Re(s.TEXTURE_CUBE_MAP,v);let De;if(ve){K&&Fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,He,be.width,be.height);for(let we=0;we<6;we++){De=ge[we].mipmaps;for(let et=0;et<De.length;et++){let Ke=De[et];v.format!==si?_e!==null?K?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,0,0,Ke.width,Ke.height,_e,Ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,He,Ke.width,Ke.height,0,Ke.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,0,0,Ke.width,Ke.height,_e,Ae,Ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,He,Ke.width,Ke.height,0,_e,Ae,Ke.data)}}}else{if(De=v.mipmaps,K&&Fe){De.length>0&&Pe++;let we=ye(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,He,we.width,we.height)}for(let we=0;we<6;we++)if(fe){K?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ge[we].width,ge[we].height,_e,Ae,ge[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,He,ge[we].width,ge[we].height,0,_e,Ae,ge[we].data);for(let et=0;et<De.length;et++){let nt=De[et].image[we].image;K?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,0,0,nt.width,nt.height,_e,Ae,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,He,nt.width,nt.height,0,_e,Ae,nt.data)}}else{K?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,_e,Ae,ge[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,He,_e,Ae,ge[we]);for(let et=0;et<De.length;et++){let Ke=De[et];K?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,0,0,_e,Ae,Ke.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,He,_e,Ae,Ke.image[we])}}}p(v)&&b(s.TEXTURE_CUBE_MAP),he.__version=oe.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Be(I,v,j,Z,oe,he){let me=r.convert(j.format,j.colorSpace),$=r.convert(j.type),ae=y(j.internalFormat,me,$,j.normalized,j.colorSpace),ve=n.get(v),fe=n.get(j);if(fe.__renderTarget=v,!ve.__hasExternalTextures){let ge=Math.max(1,v.width>>he),be=Math.max(1,v.height>>he);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,he,ae,ge,be,v.depth,0,me,$,null):t.texImage2D(oe,he,ae,ge,be,0,me,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ie(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,oe,fe.__webglTexture,0,xt(v)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,oe,fe.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(I,v,j){if(s.bindRenderbuffer(s.RENDERBUFFER,I),v.depthBuffer){let Z=v.depthTexture,oe=Z&&Z.isDepthTexture?Z.type:null,he=S(v.stencilBuffer,oe),me=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ie(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(v),he,v.width,v.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(v),he,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,he,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,I)}else{let Z=v.textures;for(let oe=0;oe<Z.length;oe++){let he=Z[oe],me=r.convert(he.format,he.colorSpace),$=r.convert(he.type),ae=y(he.internalFormat,me,$,he.normalized,he.colorSpace);ie(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(v),ae,v.width,v.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(v),ae,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ae,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function yt(I,v,j){let Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let oe=n.get(v.depthTexture);if(oe.__renderTarget=v,(!oe.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),oe.__webglTexture===void 0){oe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Re(s.TEXTURE_CUBE_MAP,v.depthTexture);let ve=r.convert(v.depthTexture.format),fe=r.convert(v.depthTexture.type),ge;v.depthTexture.format===Li?ge=s.DEPTH_COMPONENT24:v.depthTexture.format===Ts&&(ge=s.DEPTH24_STENCIL8);for(let be=0;be<6;be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ge,v.width,v.height,0,ve,fe,null)}}else de(v.depthTexture,0);let he=oe.__webglTexture,me=xt(v),$=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,ae=v.depthTexture.format===Ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Li)ie(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,$,he,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ae,$,he,0);else if(v.depthTexture.format===Ts)ie(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,$,he,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ae,$,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){let v=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",oe)};Z.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=Z}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(j)for(let Z=0;Z<6;Z++)yt(v.__webglFramebuffer[Z],I,Z);else{let Z=I.texture.mipmaps;Z&&Z.length>0?yt(v.__webglFramebuffer[0],I,0):yt(v.__webglFramebuffer,I,0)}else if(j){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=s.createRenderbuffer(),at(v.__webglDepthbuffer[Z],I,!1);else{let oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,he)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,I,!1);else{let oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,he)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(I,v,j){let Z=n.get(I);v!==void 0&&Be(Z.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&st(I)}function Ft(I){let v=I.texture,j=n.get(I),Z=n.get(v);I.addEventListener("dispose",E);let oe=I.textures,he=I.isWebGLCubeRenderTarget===!0,me=oe.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=v.version,a.memory.textures++),he){j.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){j.__webglFramebuffer[$]=[];for(let ae=0;ae<v.mipmaps.length;ae++)j.__webglFramebuffer[$][ae]=s.createFramebuffer()}else j.__webglFramebuffer[$]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){j.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)j.__webglFramebuffer[$]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(me)for(let $=0,ae=oe.length;$<ae;$++){let ve=n.get(oe[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&ie(I)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let $=0;$<oe.length;$++){let ae=oe[$];j.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[$]);let ve=r.convert(ae.format,ae.colorSpace),fe=r.convert(ae.type),ge=y(ae.internalFormat,ve,fe,ae.normalized,ae.colorSpace,I.isXRRenderTarget===!0),be=xt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,ge,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,j.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),at(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(s.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Be(j.__webglFramebuffer[$][ae],I,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ae);else Be(j.__webglFramebuffer[$],I,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(v)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let $=0,ae=oe.length;$<ae;$++){let ve=oe[$],fe=n.get(ve),ge=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,fe.__webglTexture),Re(ge,ve),Be(j.__webglFramebuffer,I,ve,s.COLOR_ATTACHMENT0+$,ge,0),p(ve)&&b(ge)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,Z.__webglTexture),Re($,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Be(j.__webglFramebuffer[ae],I,v,s.COLOR_ATTACHMENT0,$,ae);else Be(j.__webglFramebuffer,I,v,s.COLOR_ATTACHMENT0,$,0);p(v)&&b($),t.unbindTexture()}I.depthBuffer&&st(I)}function lt(I){let v=I.textures;for(let j=0,Z=v.length;j<Z;j++){let oe=v[j];if(p(oe)){let he=w(I),me=n.get(oe).__webglTexture;t.bindTexture(he,me),b(he),t.unbindTexture()}}}let Mt=[],kt=[];function Ht(I){if(I.samples>0){if(ie(I)===!1){let v=I.textures,j=I.width,Z=I.height,oe=s.COLOR_BUFFER_BIT,he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),$=v.length>1;if($)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ae=I.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let fe=n.get(v[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,j,Z,0,0,j,Z,oe,s.NEAREST),c===!0&&(Mt.length=0,kt.length=0,Mt.push(s.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Mt.push(he),kt.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let fe=n.get(v[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let v=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function xt(I){return Math.min(i.maxSamples,I.samples)}function ie(I){let v=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(I){let v=a.render.frame;u.get(I)!==v&&(u.set(I,v),I.update())}function Se(I,v){let j=I.colorSpace,Z=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Bn&&j!==as&&(It.getTransfer(j)===Kt?(Z!==si||oe!==Jn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",j)),v}function ye(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=F,this.setTextureUnits=H,this.setTexture2D=de,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=xe,this.rebindTextures=ct,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rv(s,e){function t(n,i=as){let r,a=It.getTransfer(i);if(n===Jn)return s.UNSIGNED_BYTE;if(n===hc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return s.BYTE;if(n===oh)return s.SHORT;if(n===Fr)return s.UNSIGNED_SHORT;if(n===lc)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===ii)return s.FLOAT;if(n===kn)return s.HALF_FLOAT;if(n===hh)return s.ALPHA;if(n===uh)return s.RGB;if(n===si)return s.RGBA;if(n===Li)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===Or)return s.RED;if(n===dc)return s.RED_INTEGER;if(n===As)return s.RG;if(n===fc)return s.RG_INTEGER;if(n===pc)return s.RGBA_INTEGER;if(n===Da||n===Na||n===Fa||n===Ua)if(a===Kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===yc||n===_c||n===Mc||n===Ec||n===Oa||n===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===yc)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_c)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mc)return r.COMPRESSED_R11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wc||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Fc||n===Uc||n===Oc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===kc||n===Hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zc)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Vc||n===Ba||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ov=`
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

}`,kh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:av,fragmentShader:ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends Di{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null,M=typeof XRWebGLBinding!="undefined",x=new kh,p={},b=t.getContextAttributes(),w=null,y=null,S=[],A=[],R=new je,E=null,N=null,V=new yn;V.viewport=new Gt;let O=new yn;O.viewport=new Gt;let W=[V,O],G=new nc,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=S[re];return pe===void 0&&(pe=new Mr,S[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=S[re];return pe===void 0&&(pe=new Mr,S[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=S[re];return pe===void 0&&(pe=new Mr,S[re]=pe),pe.getHandSpace()};function q(re){let pe=A.indexOf(re.inputSource);if(pe===-1)return;let Ee=S[pe];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,l||a),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function Y(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",de);for(let re=0;re<S.length;re++){let pe=A[re];pe!==null&&(A[re]=null,S[re].disconnect(pe))}F=null,H=null,x.reset();for(let re in p)delete p[re];if(e.setRenderTarget(w),h=null,f=null,d=null,i=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),N!==null){let re=N.camera;re.fov=N.fov,re.zoom=N.zoom,re.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,n.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(re){if(i=re,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",de),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,Be=null;b.depth&&(Be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=b.stencil?Ts:Li,ze=b.stencil?Ur:Si);let at={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(at),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ln(f.textureWidth,f.textureHeight,{format:si,type:Jn,depthTexture:new Ni(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Ln(h.framebufferWidth,h.framebufferHeight,{format:si,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function de(re){for(let pe=0;pe<re.removed.length;pe++){let Ee=re.removed[pe],ze=A.indexOf(Ee);ze>=0&&(A[ze]=null,S[ze].disconnect(Ee))}for(let pe=0;pe<re.added.length;pe++){let Ee=re.added[pe],ze=A.indexOf(Ee);if(ze===-1){for(let at=0;at<S.length;at++)if(at>=A.length){A.push(Ee),ze=at;break}else if(A[at]===null){A[at]=Ee,ze=at;break}if(ze===-1)break}let Be=S[ze];Be&&Be.connect(Ee)}}let Q=new D,te=new D;function xe(re,pe,Ee){Q.setFromMatrixPosition(pe.matrixWorld),te.setFromMatrixPosition(Ee.matrixWorld);let ze=Q.distanceTo(te),Be=pe.projectionMatrix.elements,at=Ee.projectionMatrix.elements,yt=Be[14]/(Be[10]-1),st=Be[14]/(Be[10]+1),ct=(Be[9]+1)/Be[5],Ft=(Be[9]-1)/Be[5],lt=(Be[8]-1)/Be[0],Mt=(at[8]+1)/at[0],kt=yt*lt,Ht=yt*Mt,xt=ze/(-lt+Mt),ie=xt*-lt;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ie),re.translateZ(xt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Be[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let U=yt+xt,Se=st+xt,ye=kt-ie,I=Ht+(ze-ie),v=ct*st/Se*U,j=Ft*st/Se*U;re.projectionMatrix.makePerspective(ye,I,v,j,U,Se),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Me(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(i===null)return;let pe=re.near,Ee=re.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),G.near=O.near=V.near=pe,G.far=O.far=V.far=Ee,(F!==G.near||H!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),F=G.near,H=G.far),G.layers.mask=re.layers.mask|6,V.layers.mask=G.layers.mask&-5,O.layers.mask=G.layers.mask&-3;let ze=re.parent,Be=G.cameras;Me(G,ze);for(let at=0;at<Be.length;at++)Me(Be[at],ze);Be.length===2?xe(G,V,O):G.projectionMatrix.copy(V.projectionMatrix),N===null&&re.isPerspectiveCamera&&(N={camera:re,fov:re.fov,zoom:re.zoom}),Ne(re,G,ze)};function Ne(re,pe,Ee){Ee===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Os*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(G)},this.getCameraTexture=function(re){return p[re]};let tt=null;function Re(re,pe){if(u=pe.getViewerPose(l||a),g=pe,u!==null){let Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ze=!1;Ee.length!==G.cameras.length&&(G.cameras.length=0,ze=!0);for(let st=0;st<Ee.length;st++){let ct=Ee[st],Ft=null;if(h!==null)Ft=h.getViewport(ct);else{let Mt=d.getViewSubImage(f,ct);Ft=Mt.viewport,st===0&&(e.setRenderTargetTextures(y,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(y))}let lt=W[st];lt===void 0&&(lt=new yn,lt.layers.enable(st),lt.viewport=new Gt,W[st]=lt),lt.matrix.fromArray(ct.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ct.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),st===0&&(G.matrix.copy(lt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ze===!0&&G.cameras.push(lt)}let Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let st=d.getDepthInformation(Ee[0]);st&&st.isValid&&st.texture&&x.init(st,i.renderState)}if(Be&&Be.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let st=0;st<Ee.length;st++){let ct=Ee[st].camera;if(ct){let Ft=p[ct];Ft||(Ft=new va,p[ct]=Ft);let lt=d.getCameraImage(ct);Ft.sourceTexture=lt}}}}for(let Ee=0;Ee<S.length;Ee++){let ze=A[Ee],Be=S[Ee];ze!==null&&Be!==void 0&&Be.update(ze,pe,l||a)}tt&&tt(re,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let Ze=new gf;Ze.setAnimationLoop(Re),this.setAnimationLoop=function(re){tt=re},this.dispose=function(){}}},cv=new Ye,Mf=new vt;Mf.set(-1,0,0,0,1,0,0,0,1);function lv(s,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,bh(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,b,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),d(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&h(x,p,y)):p.isMeshMatcapMaterial?(r(x,p),g(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),M(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,b,w):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===En&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===En&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let b=e.get(p),w=b.envMap,y=b.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Mf),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,b,w){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*b,x.scale.value=w*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function d(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function h(x,p,b){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function M(x,p){let b=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hv(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let A=S.program;n.uniformBlockBinding(y,A)}function l(y,S){let A=i[y.id];A===void 0&&(x(y),A=u(y),i[y.id]=A,y.addEventListener("dispose",b));let R=S.program;n.updateUBOMapping(y,R);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){let S=d();y.__bindingPointIndex=S;let A=s.createBuffer(),R=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,A),A}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let S=i[y.id],A=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,N=A.length;E<N;E++){let V=A[E];if(Array.isArray(V))for(let O=0,W=V.length;O<W;O++)h(V[O],E,O,R);else h(V,E,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,S,A,R){if(M(y,S,A,R)===!0){let E=y.__offset,N=y.value;if(Array.isArray(N)){let V=0;for(let O=0;O<N.length;O++){let W=N[O],G=p(W);g(W,y.__data,V),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(V+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(N,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,y.__data)}}function g(y,S,A){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,A)}function M(y,S,A,R){let E=y.value,N=S+"_"+A;if(R[N]===void 0)return typeof E=="number"||typeof E=="boolean"?R[N]=E:ArrayBuffer.isView(E)?R[N]=E.slice():R[N]=E.clone(),!0;{let V=R[N];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return R[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function x(y){let S=y.uniforms,A=0,R=16;for(let N=0,V=S.length;N<V;N++){let O=Array.isArray(S[N])?S[N]:[S[N]];for(let W=0,G=O.length;W<G;W++){let F=O[W],H=Array.isArray(F.value)?F.value:[F.value];for(let q=0,Y=H.length;q<Y;q++){let de=H[q],Q=p(de),te=A%R,xe=te%Q.boundary,Me=te+xe;A+=xe,Me!==0&&R-Me<Q.storage&&(A+=R-Me),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=Q.storage}}}let E=A%R;return E>0&&(A+=R-E),y.__size=A,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let A=a.indexOf(S.__bindingPointIndex);a.splice(A,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:w}}var uv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function dv(){return ki===null&&(ki=new Ms(uv,16,16,As,kn),ki.name="DFG_LUT",ki.minFilter=fn,ki.magFilter=fn,ki.wrapS=ci,ki.wrapT=ci,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var Jc=class{constructor(e={}){let{canvas:t=Hd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Jn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=h,x=new Set([pc,fc,dc]),p=new Set([Jn,Si,Fr,Ur,hc,uc]),b=new Uint32Array(4),w=new Int32Array(4),y=new D,S=null,A=null,R=[],E=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,O=!1,W=null,G=null,F=null,H=null;this._outputColorSpace=hn;let q=0,Y=0,de=null,Q=-1,te=null,xe=new Gt,Me=new Gt,Ne=null,tt=new Oe(0),Re=0,Ze=t.width,re=t.height,pe=1,Ee=null,ze=null,Be=new Gt(0,0,Ze,re),at=new Gt(0,0,Ze,re),yt=!1,st=new Tr,ct=!1,Ft=!1,lt=new Ye,Mt=new D,kt=new Gt,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function ie(){return de===null?pe:1}let U=n;function Se(m,T){return t.getContext(m,T)}let ye,I,v,j,Z,oe,he,me,$,ae,ve,fe,ge,be,_e,Ae,He,K,Fe,ce,Pe,De,we;try{let m={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",tn,!1),U===null){let T="webgl2";if(U=Se(T,m),U===null)throw Se(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(m){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),gt("WebGLRenderer: "+m.message),m}function et(){ye=new vx(U),ye.init(),Pe=new rv(U,ye),I=new lx(U,ye,e,Pe),v=new iv(U,ye),I.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),G=U.createFramebuffer(),F=U.createFramebuffer(),H=U.createFramebuffer(),j=new Mx(U),Z=new Vb,oe=new sv(U,ye,v,Z,I,Pe,j),he=new bx(V),me=new Sp(U),De=new ox(U,me),$=new yx(U,me,j,De),ae=new Sx(U,$,me,De,j),K=new Ex(U,I,oe),_e=new hx(Z),ve=new Gb(V,he,ye,I,De,_e),fe=new lv(V,Z),ge=new qb,be=new Zb(ye),He=new ax(V,he,v,ae,g,c),Ae=new nv(V,ae,I),we=new hv(U,j,I,v),Fe=new cx(U,ye,j),ce=new _x(U,ye,j),j.programs=ve.programs,V.capabilities=I,V.extensions=ye,V.properties=Z,V.renderLists=ge,V.shadowMap=Ae,V.state=v,V.info=j}M!==Jn&&(N=new Tx(M,t.width,t.height,o,i,r));let Ke=new Hh(V,U);this.xr=Ke,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let m=ye.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){let m=ye.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(m){m!==void 0&&(pe=m,this.setSize(Ze,re,!1))},this.getSize=function(m){return m.set(Ze,re)},this.setSize=function(m,T,k=!0){if(Ke.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=m,re=T,t.width=Math.floor(m*pe),t.height=Math.floor(T*pe),k===!0&&(t.style.width=m+"px",t.style.height=T+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,m,T)},this.getDrawingBufferSize=function(m){return m.set(Ze*pe,re*pe).floor()},this.setDrawingBufferSize=function(m,T,k){Ze=m,re=T,pe=k,t.width=Math.floor(m*k),t.height=Math.floor(T*k),this.setViewport(0,0,m,T)},this.setEffects=function(m){if(M===Jn){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(m){for(let T=0;T<m.length;T++)if(m[T].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(m||[])},this.getCurrentViewport=function(m){return m.copy(xe)},this.getViewport=function(m){return m.copy(Be)},this.setViewport=function(m,T,k,z){m.isVector4?Be.set(m.x,m.y,m.z,m.w):Be.set(m,T,k,z),v.viewport(xe.copy(Be).multiplyScalar(pe).round())},this.getScissor=function(m){return m.copy(at)},this.setScissor=function(m,T,k,z){m.isVector4?at.set(m.x,m.y,m.z,m.w):at.set(m,T,k,z),v.scissor(Me.copy(at).multiplyScalar(pe).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(m){v.setScissorTest(yt=m)},this.setOpaqueSort=function(m){Ee=m},this.setTransparentSort=function(m){ze=m},this.getClearColor=function(m){return m.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(m=!0,T=!0,k=!0){let z=0;if(m){let B=!1;if(de!==null){let J=de.texture.format;B=x.has(J)}if(B){let J=de.texture.type,ne=p.has(J),ue=He.getClearColor(),Te=He.getClearAlpha(),Ce=ue.r,ke=ue.g,Qe=ue.b;ne?(b[0]=Ce,b[1]=ke,b[2]=Qe,b[3]=Te,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=Ce,w[1]=ke,w[2]=Qe,w[3]=Te,U.clearBufferiv(U.COLOR,0,w))}else z|=U.COLOR_BUFFER_BIT}T&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(m){m.setRenderer(this),W=m},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",tn,!1),He.dispose(),ge.dispose(),be.dispose(),Z.dispose(),he.dispose(),ae.dispose(),De.dispose(),we.dispose(),ve.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",ri),Ke.removeEventListener("sessionend",$n),Wt.stop()};function nt(m){m.preventDefault(),la("WebGLRenderer: Context Lost."),O=!0}function ht(){la("WebGLRenderer: Context Restored."),O=!1;let m=j.autoReset,T=Ae.enabled,k=Ae.autoUpdate,z=Ae.needsUpdate,B=Ae.type;et(),j.autoReset=m,Ae.enabled=T,Ae.autoUpdate=k,Ae.needsUpdate=z,Ae.type=B}function tn(m){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function Lt(m){let T=m.target;T.removeEventListener("dispose",Lt),jt(T)}function jt(m){Zn(m),Z.remove(m)}function Zn(m){let T=Z.get(m).programs;T!==void 0&&(T.forEach(function(k){ve.releaseProgram(k)}),m.isShaderMaterial&&ve.releaseShaderCache(m))}this.renderBufferDirect=function(m,T,k,z,B,J){T===null&&(T=Ht);let ne=B.isMesh&&B.matrixWorld.determinantAffine()<0,ue=ee(m,T,k,z,B);v.setMaterial(z,ne);let Te=k.index,Ce=1;if(z.wireframe===!0){if(Te=$.getWireframeAttribute(k),Te===void 0)return;Ce=2}let ke=k.drawRange,Qe=k.attributes.position,Ge=ke.start*Ce,dt=(ke.start+ke.count)*Ce;J!==null&&(Ge=Math.max(Ge,J.start*Ce),dt=Math.min(dt,(J.start+J.count)*Ce)),Te!==null?(Ge=Math.max(Ge,0),dt=Math.min(dt,Te.count)):Qe!=null&&(Ge=Math.max(Ge,0),dt=Math.min(dt,Qe.count));let wt=dt-Ge;if(wt<0||wt===1/0)return;De.setup(B,z,ue,k,Te);let Tt,_t=Fe;if(Te!==null&&(Tt=me.get(Te),_t=ce,_t.setIndex(Tt)),B.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*ie()),_t.setMode(U.LINES)):_t.setMode(U.TRIANGLES);else if(B.isLine){let it=z.linewidth;it===void 0&&(it=1),v.setLineWidth(it*ie()),B.isLineSegments?_t.setMode(U.LINES):B.isLineLoop?_t.setMode(U.LINE_LOOP):_t.setMode(U.LINE_STRIP)}else B.isPoints?_t.setMode(U.POINTS):B.isSprite&&_t.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))_t.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let it=B._multiDrawStarts,We=B._multiDrawCounts,Yt=B._multiDrawCount,Dt=Te?me.get(Te).bytesPerElement:1,Gn=Z.get(z).currentProgram.getUniforms();for(let ai=0;ai<Yt;ai++)Gn.setValue(U,"_gl_DrawID",ai),_t.render(it[ai]/Dt,We[ai])}else if(B.isInstancedMesh)_t.renderInstances(Ge,wt,B.count);else if(k.isInstancedBufferGeometry){let it=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,We=Math.min(k.instanceCount,it);_t.renderInstances(Ge,wt,We)}else _t.render(Ge,wt)};function Hn(m,T,k,z){W!==null&&m.isNodeMaterial&&W.setObject(z,m),ct===!0&&_e.setState(m,k,!1),m.transparent===!0&&m.side===an&&m.forceSinglePass===!1?(m.side=En,m.needsUpdate=!0,Un(m,T,z),m.side=hi,m.needsUpdate=!0,Un(m,T,z),m.side=an):Un(m,T,z)}this.compile=function(m,T,k=null){k===null&&(k=m),W!==null&&W.renderStart(m,T,k),A=be.get(k),A.init(T),E.push(A),k.traverseVisible(function(B){B.isLight&&B.layers.test(T.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),m!==k&&m.traverseVisible(function(B){B.isLight&&B.layers.test(T.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights(),W!==null&&W.updateLights(A.state.lightsArray),Ft=this.localClippingEnabled,ct=_e.init(this.clippingPlanes,Ft),ct===!0&&_e.setGlobalState(this.clippingPlanes,T),W!==null&&Ae.render(A.state.shadowsArray,k,T);let z=new Set;return m.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let J=B.material;if(J)if(Array.isArray(J))for(let ne=0;ne<J.length;ne++){let ue=J[ne];Hn(ue,k,T,B),z.add(ue)}else Hn(J,k,T,B),z.add(J)}),A=E.pop(),W!==null&&W.renderEnd(),z},this.compileAsync=function(m,T,k=null){let z=this.compile(m,T,k);return new Promise(B=>{function J(){if(z.forEach(function(ne){let Te=Z.get(ne).currentProgram;(Te===void 0||Te.isReady())&&z.delete(ne)}),z.size===0){B(m);return}setTimeout(J,10)}ye.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Fn=null;function us(m){Fn&&Fn(m)}function ri(){Wt.stop()}function $n(){Wt.start()}let Wt=new gf;Wt.setAnimationLoop(us),typeof self!="undefined"&&Wt.setContext(self),this.setAnimationLoop=function(m){Fn=m,Ke.setAnimationLoop(m),m===null?Wt.stop():Wt.start()},Ke.addEventListener("sessionstart",ri),Ke.addEventListener("sessionend",$n),this.render=function(m,T){if(T!==void 0&&T.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;W!==null&&W.renderStart(m,T);let k=Ke.enabled===!0&&Ke.isPresenting===!0,z=N!==null&&(de===null||k)&&N.begin(V,de);if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(T),T=Ke.getCamera()),m.isScene===!0&&m.onBeforeRender(V,m,T,de),A=be.get(m,E.length),A.init(T),A.state.textureUnits=oe.getTextureUnits(),E.push(A),lt.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),st.setFromProjectionMatrix(lt,yi,T.reversedDepth),Ft=this.localClippingEnabled,ct=_e.init(this.clippingPlanes,Ft),S=ge.get(m,R.length),S.init(),R.push(S),Ke.enabled===!0&&Ke.isPresenting===!0){let ne=V.xr.getDepthSensingMesh();ne!==null&&se(ne,T,-1/0,V.sortObjects)}se(m,T,0,V.sortObjects),S.finish(),W!==null&&W.updateLights(A.state.lightsArray),V.sortObjects===!0&&S.sort(Ee,ze),xt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,xt&&He.addToRenderList(S,m),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&_e.beginShadows();let B=A.state.shadowsArray;if(Ae.render(B,m,T),ct===!0&&_e.endShadows(),(z&&N.hasRenderPass())===!1){let ne=S.opaque,ue=S.transmissive;if(A.setupLights(),T.isArrayCamera){let Te=T.cameras;if(ue.length>0)for(let Ce=0,ke=Te.length;Ce<ke;Ce++){let Qe=Te[Ce];Ve(ne,ue,m,Qe)}xt&&He.render(m);for(let Ce=0,ke=Te.length;Ce<ke;Ce++){let Qe=Te[Ce];qe(S,m,Qe,Qe.viewport)}}else ue.length>0&&Ve(ne,ue,m,T),xt&&He.render(m),qe(S,m,T)}de!==null&&Y===0&&(oe.updateMultisampleRenderTarget(de),oe.updateRenderTargetMipmap(de)),z&&N.end(V),m.isScene===!0&&m.onAfterRender(V,m,T),De.resetDefaultState(),Q=-1,te=null,E.pop(),E.length>0?(A=E[E.length-1],oe.setTextureUnits(A.state.textureUnits),ct===!0&&_e.setGlobalState(V.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,W!==null&&W.renderEnd()};function se(m,T,k,z){if(m.visible===!1)return;if(m.layers.test(T.layers)){if(m.isGroup)k=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(T);else if(m.isLightProbeGrid)A.pushLightProbeGrid(m);else if(m.isLight)A.pushLight(m),m.castShadow&&A.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||m.intersectsFrustum(st)){z&&kt.setFromMatrixPosition(m.matrixWorld).applyMatrix4(lt);let ne=ae.update(m),ue=m.material;ue.visible&&S.push(m,ne,ue,k,kt.z,null,T)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||m.intersectsFrustum(st))){let ne=ae.update(m),ue=m.material;if(z&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),kt.copy(m.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),kt.copy(ne.boundingSphere.center)),kt.applyMatrix4(m.matrixWorld).applyMatrix4(lt)),Array.isArray(ue)){let Te=ne.groups;for(let Ce=0,ke=Te.length;Ce<ke;Ce++){let Qe=Te[Ce],Ge=ue[Qe.materialIndex];Ge&&Ge.visible&&S.push(m,ne,Ge,k,kt.z,Qe,T)}}else ue.visible&&S.push(m,ne,ue,k,kt.z,null,T)}}let J=m.children;for(let ne=0,ue=J.length;ne<ue;ne++)se(J[ne],T,k,z)}function qe(m,T,k,z){let{opaque:B,transmissive:J,transparent:ne}=m;A.setupLightsView(k),ct===!0&&_e.setGlobalState(V.clippingPlanes,k),z&&v.viewport(xe.copy(z)),B.length>0&&pt(B,T,k),J.length>0&&pt(J,T,k),ne.length>0&&pt(ne,T,k),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ve(m,T,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[z.id]===void 0){let Ge=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[z.id]=new Ln(1,1,{generateMipmaps:!0,type:Ge?kn:Jn,minFilter:Ei,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}let J=A.state.transmissionRenderTarget[z.id],ne=z.viewport||xe;J.setSize(ne.z*V.transmissionResolutionScale,ne.w*V.transmissionResolutionScale);let ue=V.getRenderTarget(),Te=V.getActiveCubeFace(),Ce=V.getActiveMipmapLevel();V.setRenderTarget(J),V.getClearColor(tt),Re=V.getClearAlpha(),Re<1&&V.setClearColor(16777215,.5),V.clear(),xt&&He.render(k);let ke=V.toneMapping;V.toneMapping=Mi;let Qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),A.setupLightsView(z),ct===!0&&_e.setGlobalState(V.clippingPlanes,z),pt(m,k,z),oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let dt=0,wt=T.length;dt<wt;dt++){let Tt=T[dt],{object:_t,geometry:it,material:We,group:Yt}=Tt;if(We.side===an&&_t.layers.test(z.layers)){let Dt=We.side;We.side=En,We.needsUpdate=!0,Cn(_t,k,z,it,We,Yt),We.side=Dt,We.needsUpdate=!0,Ge=!0}}Ge===!0&&(oe.updateMultisampleRenderTarget(J),oe.updateRenderTargetMipmap(J))}V.setRenderTarget(ue,Te,Ce),V.setClearColor(tt,Re),Qe!==void 0&&(z.viewport=Qe),V.toneMapping=ke}function pt(m,T,k){let z=T.isScene===!0?T.overrideMaterial:null;for(let B=0,J=m.length;B<J;B++){let ne=m[B],{object:ue,geometry:Te,group:Ce}=ne,ke=ne.material;ke.allowOverride===!0&&z!==null&&(ke=z),ue.layers.test(k.layers)&&Cn(ue,T,k,Te,ke,Ce)}}function Cn(m,T,k,z,B,J){W!==null&&B.isNodeMaterial&&W.setObject(m,B),m.onBeforeRender(V,T,k,z,B,J),m.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),B.onBeforeRender(V,T,k,z,m,J),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=En,B.needsUpdate=!0,V.renderBufferDirect(k,T,z,B,m,J),B.side=hi,B.needsUpdate=!0,V.renderBufferDirect(k,T,z,B,m,J),B.side=an):V.renderBufferDirect(k,T,z,B,m,J),m.onAfterRender(V,T,k,z,B,J)}function Un(m,T,k){T.isScene!==!0&&(T=Ht);let z=Z.get(m),B=A.state.lights,J=A.state.shadowsArray,ne=B.state.version,ue=ve.getParameters(m,B.state,J,T,k,A.state.lightProbeGridArray),Te=ve.getProgramCacheKey(ue),Ce=z.programs;z.environment=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?T.environment:null,z.fog=T.fog;let ke=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap;z.envMap=he.get(m.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&m.envMap===null?T.environmentRotation:m.envMapRotation,Ce===void 0&&(m.addEventListener("dispose",Lt),Ce=new Map,z.programs=Ce);let Qe=Ce.get(Te);if(Qe!==void 0){if(z.currentProgram===Qe&&z.lightsStateVersion===ne)return P(m,ue),Qe}else ue.uniforms=ve.getUniforms(m),W!==null&&m.isNodeMaterial&&W.build(m,k,ue),m.onBeforeCompile(ue,V),Qe=ve.acquireProgram(ue,Te),Ce.set(Te,Qe),z.uniforms=ue.uniforms;let Ge=z.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(Ge.clippingPlanes=_e.uniform),P(m,ue),z.needsLights=_(m),z.lightsStateVersion=ne,z.needsLights&&(Ge.ambientLightColor.value=B.state.ambient,Ge.lightProbe.value=B.state.probe,Ge.sunLights.value=B.state.sun,Ge.sunLightShadows.value=B.state.sunShadow,Ge.directionalLights.value=B.state.directional,Ge.directionalLightShadows.value=B.state.directionalShadow,Ge.spotLights.value=B.state.spot,Ge.spotLightShadows.value=B.state.spotShadow,Ge.rectAreaLights.value=B.state.rectArea,Ge.ltc_1.value=B.state.rectAreaLTC1,Ge.ltc_2.value=B.state.rectAreaLTC2,Ge.pointLights.value=B.state.point,Ge.pointLightShadows.value=B.state.pointShadow,Ge.hemisphereLights.value=B.state.hemi,Ge.sunShadowMatrix.value=B.state.sunShadowMatrix,Ge.sunShadowCascade.value=B.state.sunShadowCascade,Ge.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ge.spotLightMatrix.value=B.state.spotLightMatrix,Ge.spotLightMap.value=B.state.spotLightMap,Ge.pointShadowMatrix.value=B.state.pointShadowMatrix),z.lightProbeGrid=A.state.lightProbeGridArray.length>0,z.currentProgram=Qe,z.uniformsList=null,Qe}function Ai(m){if(m.uniformsList===null){let T=m.currentProgram.getUniforms();m.uniformsList=Hr.seqWithValue(T.seq,m.uniforms)}return m.uniformsList}function P(m,T){let k=Z.get(m);k.outputColorSpace=T.outputColorSpace,k.batching=T.batching,k.batchingColor=T.batchingColor,k.instancing=T.instancing,k.instancingColor=T.instancingColor,k.instancingMorph=T.instancingMorph,k.skinning=T.skinning,k.morphTargets=T.morphTargets,k.morphNormals=T.morphNormals,k.morphColors=T.morphColors,k.morphTargetsCount=T.morphTargetsCount,k.numClippingPlanes=T.numClippingPlanes,k.numIntersection=T.numClipIntersection,k.vertexAlphas=T.vertexAlphas,k.vertexTangents=T.vertexTangents,k.toneMapping=T.toneMapping}function X(m,T){if(m.length===0)return null;if(m.length===1)return m[0].texture!==null?m[0]:null;y.setFromMatrixPosition(T.matrixWorld);for(let k=0,z=m.length;k<z;k++){let B=m[k];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function ee(m,T,k,z,B){T.isScene!==!0&&(T=Ht),oe.resetTextureUnits();let J=T.fog,ne=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?T.environment:null,ue=de===null?V.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:It.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ce=he.get(z.envMap||ne,Te),ke=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Qe=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ge=!!k.morphAttributes.position,dt=!!k.morphAttributes.normal,wt=!!k.morphAttributes.color,Tt=Mi;z.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Tt=V.toneMapping);let _t=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=_t!==void 0?_t.length:0,We=Z.get(z),Yt=A.state.lights;if(ct===!0&&(Ft===!0||m!==te)){let Jt=m===te&&z.id===Q;_e.setState(z,m,Jt)}let Dt=!1;z.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Yt.state.version||We.outputColorSpace!==ue||B.isBatchedMesh&&We.batching===!1||!B.isBatchedMesh&&We.batching===!0||B.isBatchedMesh&&We.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&We.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&We.instancing===!1||!B.isInstancedMesh&&We.instancing===!0||B.isSkinnedMesh&&We.skinning===!1||!B.isSkinnedMesh&&We.skinning===!0||B.isInstancedMesh&&We.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&We.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&We.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&We.instancingMorph===!1&&B.morphTexture!==null||We.envMap!==Ce||z.fog===!0&&We.fog!==J||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_e.numPlanes||We.numIntersection!==_e.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==Qe||We.morphTargets!==Ge||We.morphNormals!==dt||We.morphColors!==wt||We.toneMapping!==Tt||We.morphTargetsCount!==it||!!We.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Dt=!0):(Dt=!0,We.__version=z.version);let Gn=We.currentProgram;Dt===!0&&(Gn=Un(z,T,B),W&&z.isNodeMaterial&&W.onUpdateProgram(z,Gn,We));let ai=!1,Ri=!1,ds=!1,qt=Gn.getUniforms(),on=We.uniforms;if(v.useProgram(Gn.program)&&(ai=!0,Ri=!0,ds=!0),z.id!==Q&&(Q=z.id,Ri=!0),We.needsLights){let Jt=X(A.state.lightProbeGridArray,B);We.lightProbeGrid!==Jt&&(We.lightProbeGrid=Jt,Ri=!0)}if(ai||te!==m){v.buffers.depth.getReversed()&&m.reversedDepth!==!0&&(m._reversedDepth=!0,m.updateProjectionMatrix()),qt.setValue(U,"projectionMatrix",m.projectionMatrix),qt.setValue(U,"viewMatrix",m.matrixWorldInverse);let mi=qt.map.cameraPosition;mi!==void 0&&mi.setValue(U,Mt.setFromMatrixPosition(m.matrixWorld)),I.logarithmicDepthBuffer&&qt.setValue(U,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&qt.setValue(U,"isOrthographic",m.isOrthographicCamera===!0),te!==m&&(te=m,Ri=!0,ds=!0)}if(We.needsLights&&(Yt.state.sunShadowMap.length>0&&qt.setValue(U,"sunShadowMap",Yt.state.sunShadowMap,oe),Yt.state.directionalShadowMap.length>0&&qt.setValue(U,"directionalShadowMap",Yt.state.directionalShadowMap,oe),Yt.state.spotShadowMap.length>0&&qt.setValue(U,"spotShadowMap",Yt.state.spotShadowMap,oe),Yt.state.pointShadowMap.length>0&&qt.setValue(U,"pointShadowMap",Yt.state.pointShadowMap,oe)),B.isSkinnedMesh){qt.setOptional(U,B,"bindMatrix"),qt.setOptional(U,B,"bindMatrixInverse");let Jt=B.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),qt.setValue(U,"boneTexture",Jt.boneTexture,oe))}B.isBatchedMesh&&(qt.setOptional(U,B,"batchingTexture"),qt.setValue(U,"batchingTexture",B._matricesTexture,oe),qt.setOptional(U,B,"batchingIdTexture"),qt.setValue(U,"batchingIdTexture",B._indirectTexture,oe),qt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&qt.setValue(U,"batchingColorTexture",B._colorsTexture,oe));let pi=k.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&K.update(B,k,Gn),(Ri||We.receiveShadow!==B.receiveShadow)&&(We.receiveShadow=B.receiveShadow,qt.setValue(U,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&T.environment!==null&&(on.envMapIntensity.value=T.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=dv()),Ri){if(qt.setValue(U,"toneMappingExposure",V.toneMappingExposure),We.needsLights&&le(on,ds),J&&z.fog===!0&&fe.refreshFogUniforms(on,J),fe.refreshMaterialUniforms(on,z,pe,re,A.state.transmissionRenderTarget[m.id]),We.needsLights&&We.lightProbeGrid){let Jt=We.lightProbeGrid;on.probesSH.value=Jt.texture,on.probesMin.value.copy(Jt.boundingBox.min),on.probesMax.value.copy(Jt.boundingBox.max),on.probesResolution.value.copy(Jt.resolution)}Hr.upload(U,Ai(We),on,oe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hr.upload(U,Ai(We),on,oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&qt.setValue(U,"center",B.center),qt.setValue(U,"modelViewMatrix",B.modelViewMatrix),qt.setValue(U,"normalMatrix",B.normalMatrix),qt.setValue(U,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){let Jt=z.uniformsGroups;for(let mi=0,Qs=Jt.length;mi<Qs;mi++){let bu=Jt[mi];we.update(bu,Gn),we.bind(bu,Gn)}}return Gn}function le(m,T){m.ambientLightColor.needsUpdate=T,m.lightProbe.needsUpdate=T,m.sunLights.needsUpdate=T,m.sunLightShadows.needsUpdate=T,m.directionalLights.needsUpdate=T,m.directionalLightShadows.needsUpdate=T,m.pointLights.needsUpdate=T,m.pointLightShadows.needsUpdate=T,m.spotLights.needsUpdate=T,m.spotLightShadows.needsUpdate=T,m.rectAreaLights.needsUpdate=T,m.hemisphereLights.needsUpdate=T}function _(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(m,T,k){let z=Z.get(m);z.__autoAllocateDepthBuffer=m.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Z.get(m.texture).__webglTexture=T,Z.get(m.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(m,T){let k=Z.get(m);k.__webglFramebuffer=T,k.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(m,T=0,k=0){de=m,q=T,Y=k;let z=null,B=!1,J=!1;if(m){let ue=Z.get(m);if(ue.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ue.__webglFramebuffer),xe.copy(m.viewport),Me.copy(m.scissor),Ne=m.scissorTest,v.viewport(xe),v.scissor(Me),v.setScissorTest(Ne),Q=-1;return}else if(ue.__webglFramebuffer===void 0)oe.setupRenderTarget(m);else if(ue.__hasExternalTextures)oe.rebindTextures(m,Z.get(m.texture).__webglTexture,Z.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){let ke=m.depthTexture;if(ue.__boundDepthTexture!==ke){if(ke!==null&&Z.has(ke)&&(m.width!==ke.image.width||m.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(m)}}let Te=m.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(J=!0);let Ce=Z.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(Ce[T])?z=Ce[T][k]:z=Ce[T],B=!0):m.samples>0&&oe.useMultisampledRTT(m)===!1?z=Z.get(m).__webglMultisampledFramebuffer:Array.isArray(Ce)?z=Ce[k]:z=Ce,xe.copy(m.viewport),Me.copy(m.scissor),Ne=m.scissorTest}else xe.copy(Be).multiplyScalar(pe).floor(),Me.copy(at).multiplyScalar(pe).floor(),Ne=yt;if(k!==0&&(z=G),v.bindFramebuffer(U.FRAMEBUFFER,z)&&v.drawBuffers(m,z),v.viewport(xe),v.scissor(Me),v.setScissorTest(Ne),B){let ue=Z.get(m.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+T,ue.__webglTexture,k)}else if(J){let ue=T;for(let Te=0;Te<m.textures.length;Te++){let Ce=Z.get(m.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,k,ue)}}else if(m!==null&&k!==0){let ue=Z.get(m.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ue.__webglTexture,k)}Q=-1};function C(m){let T=Z.get(m);return(T.__readFormat!==m.format||T.__readType!==m.type)&&(T.__readFormat=m.format,T.__readType=m.type,T.__formatReadable=I.textureFormatReadable(m.format),T.__typeReadable=I.textureTypeReadable(m.type)),T}this.readRenderTargetPixels=function(m,T,k,z,B,J,ne,ue=0){if(!(m&&m.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Z.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ne!==void 0&&(Te=Te[ne]),Te){v.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ce=m.textures[ue],ke=Ce.format,Qe=Ce.type;m.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);let Ge=C(Ce);if(Ge.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=m.width-z&&k>=0&&k<=m.height-B&&U.readPixels(T,k,z,B,Pe.convert(ke),Pe.convert(Qe),J)}finally{let Ce=de!==null?Z.get(de).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(m,T,k,z,B,J,ne,ue=0){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Z.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&ne!==void 0&&(Te=Te[ne]),Te)if(T>=0&&T<=m.width-z&&k>=0&&k<=m.height-B){v.bindFramebuffer(U.FRAMEBUFFER,Te);let Ce=m.textures[ue],ke=Ce.format,Qe=Ce.type;m.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ue);let Ge=C(Ce);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.bufferData(U.PIXEL_PACK_BUFFER,J.byteLength,U.STREAM_READ),U.readPixels(T,k,z,B,Pe.convert(ke),Pe.convert(Qe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let wt=de!==null?Z.get(de).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,wt);let Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Vd(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,J),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(dt),U.deleteSync(Tt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(m,T=null,k=0){let z=Math.pow(2,-k),B=Math.floor(m.image.width*z),J=Math.floor(m.image.height*z),ne=T!==null?T.x:0,ue=T!==null?T.y:0;oe.setTexture2D(m,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,ne,ue,B,J),v.unbindTexture()},this.copyTextureToTexture=function(m,T,k=null,z=null,B=0,J=0){let ne,ue,Te,Ce,ke,Qe,Ge,dt,wt,Tt=m.isCompressedTexture?m.mipmaps[J]:m.image;if(k!==null)ne=k.max.x-k.min.x,ue=k.max.y-k.min.y,Te=k.isBox3?k.max.z-k.min.z:1,Ce=k.min.x,ke=k.min.y,Qe=k.isBox3?k.min.z:0;else{let on=Math.pow(2,-B);ne=Math.floor(Tt.width*on),ue=Math.floor(Tt.height*on),m.isDataArrayTexture?Te=Tt.depth:m.isData3DTexture?Te=Math.floor(Tt.depth*on):Te=1,Ce=0,ke=0,Qe=0}z!==null?(Ge=z.x,dt=z.y,wt=z.z):(Ge=0,dt=0,wt=0);let _t=Pe.convert(T.format),it=Pe.convert(T.type),We;T.isData3DTexture?(oe.setTexture3D(T,0),We=U.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(oe.setTexture2DArray(T,0),We=U.TEXTURE_2D_ARRAY):(oe.setTexture2D(T,0),We=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,T.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,T.unpackAlignment);let Yt=v.getParameter(U.UNPACK_ROW_LENGTH),Dt=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Gn=v.getParameter(U.UNPACK_SKIP_PIXELS),ai=v.getParameter(U.UNPACK_SKIP_ROWS),Ri=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Tt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Tt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),v.pixelStorei(U.UNPACK_SKIP_ROWS,ke),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Qe);let ds=m.isDataArrayTexture||m.isData3DTexture,qt=T.isDataArrayTexture||T.isData3DTexture;if(m.isDepthTexture){let on=Z.get(m),pi=Z.get(T),Jt=Z.get(on.__renderTarget),mi=Z.get(pi.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,Jt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Qs=0;Qs<Te;Qs++)ds&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(m).__webglTexture,B,Qe+Qs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,J,wt+Qs)),U.blitFramebuffer(Ce,ke,ne,ue,Ge,dt,ne,ue,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||m.isRenderTargetTexture||Z.has(m)){let on=Z.get(m),pi=Z.get(T);v.bindFramebuffer(U.READ_FRAMEBUFFER,F),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Jt=0;Jt<Te;Jt++)ds?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,B,Qe+Jt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,B),qt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pi.__webglTexture,J,wt+Jt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pi.__webglTexture,J),B!==0?U.blitFramebuffer(Ce,ke,ne,ue,Ge,dt,ne,ue,U.COLOR_BUFFER_BIT,U.NEAREST):qt?U.copyTexSubImage3D(We,J,Ge,dt,wt+Jt,Ce,ke,ne,ue):U.copyTexSubImage2D(We,J,Ge,dt,Ce,ke,ne,ue);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else qt?m.isDataTexture||m.isData3DTexture?U.texSubImage3D(We,J,Ge,dt,wt,ne,ue,Te,_t,it,Tt.data):T.isCompressedArrayTexture?U.compressedTexSubImage3D(We,J,Ge,dt,wt,ne,ue,Te,_t,Tt.data):U.texSubImage3D(We,J,Ge,dt,wt,ne,ue,Te,_t,it,Tt):m.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,J,Ge,dt,ne,ue,_t,it,Tt.data):m.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,J,Ge,dt,Tt.width,Tt.height,_t,Tt.data):U.texSubImage2D(U.TEXTURE_2D,J,Ge,dt,ne,ue,_t,it,Tt);v.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Gn),v.pixelStorei(U.UNPACK_SKIP_ROWS,ai),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Ri),J===0&&T.generateMipmaps&&U.generateMipmap(We),v.unbindTexture()},this.initRenderTarget=function(m){Z.get(m).__webglFramebuffer===void 0&&oe.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?oe.setTextureCube(m,0):m.isData3DTexture?oe.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?oe.setTexture2DArray(m,0):oe.setTexture2D(m,0),v.unbindTexture()},this.resetState=function(){q=0,Y=0,de=null,v.reset(),De.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}};var qr=s=>()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},Rs=(s,e,t)=>{let n=Math.sin(s*127.1+e*269.5+t*311.7)*43758.5453;return n-Math.floor(n)},Vt=(s,e,t)=>{let n=Math.floor(s),i=Math.floor(e),r=Math.floor(t),a=s-n,o=e-i,c=t-r,l=a*a*(3-2*a),u=o*o*(3-2*o),d=c*c*(3-2*c),f=(h,g,M)=>h+(g-h)*M;return f(f(f(Rs(n,i,r),Rs(n+1,i,r),l),f(Rs(n,i+1,r),Rs(n+1,i+1,r),l),u),f(f(Rs(n,i,r+1),Rs(n+1,i,r+1),l),f(Rs(n,i+1,r+1),Rs(n+1,i+1,r+1),l),u),d)},Wr={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},Qt=(s,e)=>(e.kind=s,e),zt=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(e,{m:t=null,color:n=()=>[1,1,1],tip:i=()=>0,flat:r=!1,normal:a=null,flip:o=!1,mat:c=null}={}){var M;let l=e.index?e.toNonIndexed():e.clone();if(t&&l.applyMatrix4(t),(r||!l.attributes.normal)&&l.computeVertexNormals(),o){for(let p of["position","normal","uv"]){let b=l.attributes[p];if(!b)continue;let w=b.array,y=b.itemSize;for(let S=0;S<b.count;S+=3)for(let A=0;A<y;A++){let R=w[(S+1)*y+A];w[(S+1)*y+A]=w[(S+2)*y+A],w[(S+2)*y+A]=R}}let x=l.attributes.normal.array;for(let p=0;p<x.length;p++)x[p]=-x[p]}let u=l.attributes.position,d=l.attributes.normal,f=c;if(f===null){let x=n.kind||"plain";if(x==="wood"||x==="log"){l.computeBoundingBox();let p=new D;l.boundingBox.getSize(p);let b=p.x>=p.y&&p.x>=p.z?"X":p.z>=p.y?"Z":"Y";f=x==="log"?b==="Z"?Wr.logZ:Wr.logX:Wr["wood"+b]}else f=(M=Wr[x])!=null?M:0}let h=new D,g=new D;for(let x=0;x<u.count;x++){h.fromBufferAttribute(u,x),g.fromBufferAttribute(d,x),a&&a(h,g,x);let p=n(h,g,x);this.p.push(h.x,h.y,h.z),this.n.push(g.x,g.y,g.z),this.c.push(p[0],p[1],p[2]),this.t.push(i(h,g)),this.k.push(f)}return this}tris(e,t,n=()=>0,i=null){var r;for(let a=0;a<e.length;a+=3){let o=new D(...e[a]),c=new D(...e[a+1]),l=new D(...e[a+2]),u=i?i.clone():new D().subVectors(l,c).cross(new D().subVectors(o,c)).normalize(),d=(r=Wr[t.kind])!=null?r:t.kind==="wood"?Wr.woodY:0;[o,c,l].forEach(f=>{let h=t(f);this.p.push(f.x,f.y,f.z),this.n.push(u.x,u.y,u.z),this.c.push(h[0],h[1],h[2]),this.t.push(n(f)),this.k.push(d)})}return this}geometry(){let e=new Rt;return e.setAttribute("position",new ut(this.p,3)),e.setAttribute("normal",new ut(this.n,3)),e.setAttribute("color",new ut(this.c,3)),e.setAttribute("aTip",new ut(this.t,1)),e.setAttribute("aMat",new ut(this.k,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},Le=(s,e,t,n=.02,i=2)=>{let r=2*i+1,a=new Ie(1,1,1,r,r,r),o=[s/2,e/2,t/2],c=Math.min(n,s/2-1e-4,e/2-1e-4,t/2-1e-4),l=a.attributes.position,u=a.attributes.normal,d=[0,0,0],f=[0,0,0];for(let h=0;h<l.count;h++){for(let S=0;S<3;S++){let A=Math.round((l.getComponent(h,S)+.5)*r),R=o[S];d[S]=A<=i?-R+c*(A/i):A>=r-i?R-c*((r-A)/i):0,A>i&&A<r-i&&(d[S]=0),f[S]=Math.max(-(R-c),Math.min(R-c,d[S]))}let g=d[0]-f[0],M=d[1]-f[1],x=d[2]-f[2],p=u.getX(h),b=u.getY(h),w=u.getZ(h);Math.abs(p)>.5&&(g=Math.sign(p)*Math.max(Math.abs(g),1e-6)),Math.abs(b)>.5&&(M=Math.sign(b)*Math.max(Math.abs(M),1e-6)),Math.abs(w)>.5&&(x=Math.sign(w)*Math.max(Math.abs(x),1e-6));let y=Math.hypot(g,M,x)||1;l.setXYZ(h,f[0]+g/y*c,f[1]+M/y*c,f[2]+x/y*c),u.setXYZ(h,g/y,M/y,x/y)}return a},en=(s,e=10)=>new _a(s.map(([t,n])=>new je(Math.max(5e-4,t),n)),e),L=(s=0,e=0,t=0,n=0,i=0,r=0,a=1,o=a,c=a)=>new Ye().compose(new D(s,e,t),new ot().setFromEuler(new un(n,i,r,"YXZ")),new D(a,o,c)),xn=(s,e,{sway:t=0,side:n=hi,color:i=16777215,snowBias:r=0,sink:a=0,softBack:o=!1,crisp:c=!1,snowMask:l=!1,grain:u=0,rich:d=!1,indoor:f=!1,tree:h=!1}={})=>{let g=new _n({vertexColors:!0,side:n,color:i});if(g.onBeforeCompile=M=>{Object.assign(M.uniforms,s,{uShow:e}),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
        uniform float uShow, uTime, uSnowCover, uMoss, uFrost;
        attribute float aTip; attribute float aMat;
        varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj; varying float vMat; varying vec3 vObjN;
        ${h?"attribute float aHash; uniform float uBare; varying float vHash; varying float vLeaf;":""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
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
        ${h?`vHash = aHash; vLeaf = step(12.5, aMat);
        // autumn: some trees drop all their needles (only trunk and branches stay)
        float bare = step(aHash, uBare) * vLeaf;
        transformed.xz *= 1.0 - bare * 0.985;`:""}
        ${a?`transformed.y -= (1.0 - uShow) * ${a.toFixed(1)};`:"transformed *= uShow;"}`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${d?fv:""}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0; float gBounce = 0.0;
        ${h?`uniform float uFall, uBloom, uLush; varying float vHash; varying float vLeaf;
        vec3 autumn(float h) {
          return h < 0.25 ? vec3(0.86, 0.42, 0.1) : h < 0.5 ? vec3(0.72, 0.16, 0.08) : h < 0.75 ? vec3(0.92, 0.7, 0.16) : vec3(0.55, 0.3, 0.12);
        }`:""}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${o?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${d?`{
          vec2 dHdxy = vec2(dFdx(gRichH), dFdy(gRichH)) * ${(u||.02).toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          { vec3 nb = abs(fDet) * normal - vGrad; if (dot(nb, nb) > 1e-12) normal = normalize(nb); }   // (never NaN on a degenerate pixel)
        }`:u?`{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${u.toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          { vec3 nb = abs(fDet) * normal - vGrad; if (dot(nb, nb) > 1e-12) normal = normalize(nb); }   // (never NaN on a degenerate pixel)
        }`:""}`).replace("#include <color_fragment>",`#include <color_fragment>
        ${h?`{
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
        ${d?"gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);":u?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
        ${f?`{
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
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${c?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},f){let M=g.onBeforeCompile;g.onBeforeCompile=x=>{M(x),x.fragmentShader=x.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.indirectDiffuse += diffuseColor.rgb * gBounce * 0.42;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return g},fv=`
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
`;function Ef({group:s,U:e,beams:t,halos:n,dust:i}){let a={uTime:e.uTime,uBeam:{value:0},uBeamC:{value:new Oe(1,.9,.72)},uHalo:{value:1},uDust:{value:0}},o=(d,f,h,g=1.18)=>{let M=new D(...f).normalize().multiplyScalar(h),x=d.map(A=>new D(...A)),p=x.reduce((A,R)=>A.add(R),new D).multiplyScalar(.25),b=x.map(A=>A.clone().sub(p).multiplyScalar(g).add(p).add(M)),w=[],y=[];for(let A=0;A<4;A++){let R=(A+1)%4;[[x[A],0,0],[x[R],1,0],[b[R],1,1],[x[A],0,0],[b[R],1,1],[b[A],0,1]].forEach(([N,V,O])=>{w.push(N.x,N.y,N.z),y.push(A+V,O)})}let S=new Rt;return S.setAttribute("position",new ut(w,3)),S.setAttribute("uv",new ut(y,2)),S.computeVertexNormals(),S},c=d=>new Bt({uniforms:{...a,uK:{value:d}},transparent:!0,depthWrite:!1,side:an,blending:ni,vertexShader:`
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
      }`});t.forEach(d=>{let f=new $e(o(d.rect,d.dir,d.len,d.spread),c(d.k||1));f.renderOrder=3,f.frustumCulled=!1,s.add(f)});let l=(()=>{let d=new Rt,f=n.length,h=new Float32Array(f*3),g=new Float32Array(f*3),M=new Float32Array(f),x=new Float32Array(f);n.forEach((b,w)=>{h.set(b.p,w*3),g.set(b.color||[1,.75,.45],w*3),M[w]=b.size,x[w]=b.flicker||0}),d.setAttribute("position",new Ut(h,3)),d.setAttribute("aCol",new Ut(g,3)),d.setAttribute("aSize",new Ut(M,1)),d.setAttribute("aFl",new Ut(x,1));let p=new qn(d,new Bt({uniforms:a,transparent:!0,depthWrite:!1,blending:ni,vertexShader:`
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
        }`}));return p.frustumCulled=!1,p.renderOrder=4,s.add(p),p})(),u=(()=>{let d=[],f=[];i.forEach(({box:[M,x,p,b,w,y],n:S})=>{for(let A=0;A<S;A++)d.push(M+Math.random()*(x-M),p+Math.random()*(b-p),w+Math.random()*(y-w)),f.push(Math.random())});let h=new Rt;h.setAttribute("position",new ut(d,3)),h.setAttribute("aSeed",new ut(f,1));let g=new qn(h,new Bt({uniforms:a,transparent:!0,depthWrite:!1,blending:ni,vertexShader:`
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
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(1.0, 0.88, 0.7) * smoothstep(1.0, 0.0, d) * vA * 0.5, 1.0); }`}));return g.frustumCulled=!1,g.renderOrder=4,s.add(g),g})();return{update({day:d,beamColor:f,on:h}){a.uBeam.value=h?.05+d*.32:0,f&&a.uBeamC.value.copy(f),a.uHalo.value=h?1:0,a.uDust.value=h?.5+d*.5:0,l.visible=u.visible=h}}}var Xt={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-6.6,mezz:-3.4,ceil:-.3},mt={back:-7.6,left:-4.8,right:1.6,slab:.3},Je={x0:1.95,x1:3,top:2.2,bottom:-1.3},os=s=>{let e=(Je.top-Math.min(Je.top,Math.max(Je.bottom,s)))/(Je.top-Je.bottom);return .12+(Xt.mezz-.12)*e},Gi={x:.55,z:-.4,r:1.05,turns:1.25},sn={x0:.55,x1:mt.right,z0:-1.45,z1:-.4},cs={x0:-.95,x1:.95,y0:Xt.floor+.55,y1:Xt.floor+2.62,depth:.42},St={x0:-10,x1:10,z0:Xt.z0-11,z1:Xt.z0-cs.depth,y0:Xt.floor-.6,y1:-.55},Qc=Xt.mezz-Xt.floor,ui=Math.PI*2,Af=(s,e)=>[(Math.atan2(e-Gi.z,s-Gi.x)%ui+ui)%ui,Math.hypot(s-Gi.x,e-Gi.z)],Rf=s=>{let e=[];for(let t=0;t<2;t++){let n=(s+ui*t)/(ui*Gi.turns);n<=1&&e.push(Xt.mezz-n*Qc)}return e},ls=(s,e,[t,n,i,r],a=0)=>s>t+a&&s<n-a&&e>i+a&&e<r-a,Et=Xt,pv=[[Et.x0,Et.x1,Et.z0,mt.back],[Et.x0,mt.left,Et.z0,Et.z1],[mt.right,Et.x1,Et.z0,Et.z1],[sn.x0,sn.x1,sn.z0,sn.z1]],Zs=.45,Sf=[[Et.x0+Zs,Et.x1-Zs,Et.z0+Zs,mt.back],[Et.x0+Zs,mt.left,Et.z0+Zs,Et.z1],[mt.right,Et.x1-Zs,Et.z0+Zs,Et.z1],[sn.x0,mt.right+.4,sn.z0,.1]],Cf=[[mt.left,mt.back],[mt.right,mt.back],[mt.left,-2.6],[mt.right,-4.4]],mv=[[-.97,.97,-8.47,-7.53],[-.5,.5,-9.28,-8.5],[-2.95,-.65,-1.9,-.9],[-2.45,-1.15,-3.12,-2.38],[-4.5,-3.5,-3.4,-2.4],[-3.4,-3,-1.1,-.7],[4.15,4.65,1.35,1.85],[-6.5,-5.7,1.4,2.4],[4.95,5.75,-.75,.15],...Cf.map(([s,e])=>[s-.14,s+.14,e-.14,e+.14])],gv=[[3.15,4.05,-5.05,-4.15],[3.15,4.05,-3.35,-2.45],[3.35,4.05,-4.1,-3.4],[5.25,5.95,-9.1,-8.3]],ln=.42,wf=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function Pf(s,e,t,n){if(!ls(s,e,[Et.x0,Et.x1,Et.z0,Et.z1],t))return!0;let[i,r]=Af(s,e);if(r<Gi.r+.1){let a=Rf(i).find(c=>Math.abs(c-n)<.9),o=ls(s,e,[sn.x0,sn.x1,sn.z0,sn.z1])&&n>Et.mezz-.25;if(a!==void 0&&!o){if(r<.1+t*.6)return!0;if(r<Gi.r-.12)return!1;let c=(Et.mezz-a)/Qc;return c<.1?!Sf.some(l=>ls(s,e,l,t)):c>.9?Tf(s,e,t,!0,i,r):!0}}return n>Et.mezz-.35?!Sf.some(a=>ls(s,e,a,t))||s>Je.x0-t&&s<Je.x1+t&&e>Je.bottom-t&&e<Je.top+.3&&(os(e)>n+.5||e>Je.bottom+.25&&(s<Je.x0+t||s>Je.x1-t))?!0:gv.some(a=>ls(s,e,a,-t)):Tf(s,e,t,!1,i,r)}function Tf(s,e,t,n,i,r){return!!(!ls(s,e,[Et.x0+.52,Et.x1-.52,Et.z0+.52,Et.z1-.05],t)||mv.some(a=>ls(s,e,a,-t))||r<.1+t||!n&&r<Gi.r+.1&&!(i>Math.PI/2-.1&&i<Math.PI+.3))}function If(s,e){let t=[];if(!ls(s,e,[Et.x0,Et.x1,Et.z0,Et.z1]))return t;t.push(Et.floor),pv.some(r=>ls(s,e,r,-.05))&&t.push(Et.mezz);let[n,i]=Af(s,e);return i<Gi.r+.08&&i>.04&&t.push(...Rf(n)),t}function Lf({group:s,mats:e,camera:t,U:n}){let{inn:i}=e,r=Et.floor,a=Et.mezz,o=Et.ceil,c=Et.x0,l=Et.x1,u=Et.z0,d=Et.z1,f=a-mt.slab,h=new zt,g=new zt,M=new zt,x=h,p=(_,C,m)=>Vt(_,C,m),b=(_,C=0)=>Qt("wood",m=>{let T=_*(.86+p(m.x*3,m.y*9,m.z*3)*.28),k=p(m.x*.6,m.y*2,m.z*.6);return[T*(1.04+k*.08+C),T*(.7+k*.04),T*(.47-k*.05-C*.5)]}),w=b(.25),y=b(.35),S=b(.47),A=b(.38,.12),R=(_,C,m,T)=>T?Qt(T,()=>[_,C,m]):()=>[_,C,m],E=Qt("stone",_=>{let C=.42+p(_.x*4,_.y*4,_.z*4)*.22;return[C,C*.96,C*.9]}),N=Qt("plaster",_=>{let C=.7+p(_.x*2,_.y*2,_.z*2)*.07;return[C,C*.95,C*.86]}),V=R(.07,.07,.075,"metal"),O=R(.68,.53,.28,"metal"),W=Qt("leather",_=>{let C=.15+p(_.x*9,_.y*9,_.z*9)*.03;return[C*1.15,C*.6,C*.4]}),G=R(1,.86,.62),F=new D(0,1,0),H=(_,C,m,T=0)=>new Ye().compose(new D(_,C,m),new ot().setFromAxisAngle(F,T),new D(1,1,1)),q=(_,C,m,T,k=x)=>k.add(C,{m:_.clone().multiply(m),color:T}),Y=(_,C,m)=>new Ie(_,C,m),de=([_,C,m,T],k,z)=>{for(let B=_,J=0;B<C-.01;B+=.18,J++){let ne=Math.min(.18,C-B),ue=J*7%5*.55;for(let Te=m-ue,Ce=0;Te<T;Te+=2.4,Ce++){let ke=Math.max(Te,m),Qe=Math.min(Te+2.4,T);if(Qe-ke<.05)continue;let Ge=z*(.9+(J*7+Ce*3)%5*.035);h.add(Y(ne-.004,.04,Qe-ke-.004),{m:L(B+ne/2,k-.02,(ke+Qe)/2),color:Qt("wood",dt=>{let wt=Ge*(.88+p(dt.x*3,0,dt.z*.8)*.24);return[wt*1.08,wt*.72,wt*.47]})})}}};de([c,l,u,d],r,.3),[[c,l,u,mt.back],[c,mt.left,mt.back,d],[mt.right,l,mt.back,d],[sn.x0,sn.x1,sn.z0,sn.z1]].forEach(([_,C,m,T])=>{de([_,C,m,T],a,.36),h.add(Y(C-_,a-.04-f-.01,T-m),{m:L((_+C)/2,(a-.04+f+.01)/2,(m+T)/2),color:w}),h.add(new bt(C-_,T-m),{m:L((_+C)/2,f+.005,(m+T)/2,Math.PI/2,0,0),color:N})}),[[mt.left,mt.right,mt.back,"x"],[mt.back,d,mt.left,"z"],[mt.back,sn.z0,mt.right,"z"],[sn.z1,d,mt.right,"z"],[sn.x0,sn.x1,sn.z0,"x"]].forEach(([_,C,m,T])=>{let k=C-_,z=(_+C)/2;[[a-.04,.06,.05],[a-.17,.035,.03],[f+.03,.06,.05]].forEach(([B,J,ne])=>{h.add(Le(T==="x"?k+.06:ne*2,J,T==="x"?ne*2:k+.06,.012,1),{m:T==="x"?L(z,B,m):L(m,B,z),color:A})})});for(let _=c+.7;_<l;_+=1.3)h.add(Y(.1,.12,mt.back-u),{m:L(_,f-.06,(u+mt.back)/2),color:y});for(let _=mt.back+.9;_<d;_+=1.3)h.add(Y(mt.left-c,.12,.1),{m:L((c+mt.left)/2,f-.06,_),color:y}),h.add(Y(l-mt.right,.12,.1),{m:L((mt.right+l)/2,f-.06,_),color:y});let xe=(_,C)=>{g.add(new Ue(.075,.075,.01,16),{m:L(_,f-.003,C),color:R(1,.92,.76)}),h.add(new An(.088,.012,4,18),{m:L(_,f-.004,C,Math.PI/2,0,0),color:R(.8,.78,.72,"metal")})};[-5.35,-3,-.9,.9,3,5.35].forEach(_=>xe(_,-8.55)),[-6,-3.4,-.8,1.6].forEach(_=>{xe(-5.45,_),xe(2.7,_),xe(5,_)}),Cf.forEach(([_,C])=>{h.add(Le(.2,f-r,.2,.025,1),{m:L(_,(f+r)/2,C),color:A}),h.add(Le(.28,.32,.28,.02,1),{m:L(_,r+.16,C),color:y}),h.add(Le(.3,.06,.3,.02,1),{m:L(_,r+.34,C),color:S}),h.add(Le(.3,.08,.3,.02,1),{m:L(_,f-.16,C),color:S}),h.add(Le(.26,.1,.26,.02,1),{m:L(_,f-.06,C),color:y})});let Me=en([[.026,0],[.026,.05],[.017,.07],[.015,.16],[.03,.3],[.033,.36],[.019,.44],[.014,.58],[.021,.68],[.026,.72],[.016,.76],[.023,.79],[.023,.81]],6),Ne=(_,C,m)=>{h.add(Le(.11,.96,.11,.015,1),{m:L(_,m+.48,C),color:A}),h.add(Le(.15,.045,.15,.015,1),{m:L(_,m+.98,C),color:w}),h.add(new Ot(.05,10,7),{m:L(_,m+1.04,C),color:A})},tt=(_,C,m,T,k)=>{let z=Math.hypot(m-_,T-C),B=Math.atan2(m-_,T-C),J=(_+m)/2,ne=(C+T)/2;h.add(Le(.075,.06,z,.022,1),{m:L(J,k+.93,ne,0,B,0),color:A}),h.add(Y(.05,.05,z),{m:L(J,k+.065,ne,0,B,0),color:y});let ue=Math.max(1,Math.round(z/.14));for(let Te=1;Te<ue;Te++){let Ce=Te/ue;h.add(Me,{m:L(_+(m-_)*Ce,k+.09,C+(T-C)*Ce),color:S})}Ne(_,C,k),Ne(m,T,k)},Re=.05;tt(mt.left-Re,mt.back-Re,mt.right+Re,mt.back-Re,a),tt(mt.left-Re,mt.back-Re,mt.left-Re,d-.06,a),tt(mt.right+Re,mt.back-Re,mt.right+Re,sn.z0,a),tt(mt.right+Re,.12,mt.right+Re,d-.06,a),tt(sn.x0+.04,sn.z0+.04,mt.right+Re,sn.z0+.04,a),tt(sn.x0+.04,sn.z0+.04,sn.x0+.04,sn.z1-.12,a);{let _=Gi,C=16,m=ui*_.turns/(C+1);for(let k=0;k<C;k++){let z=(k+1)/(C+1),B=a-z*Qc,J=z*ui*_.turns,ne=J-m*.5-.04,ue=J+m*.5+.04;h.add(new Ue(_.r,_.r,.055,7,1,!1,Math.PI/2-ue,ue-ne),{m:L(_.x,B-.028,_.z),color:A}),h.add(new Ue(_.r-.04,_.r-.04,.03,7,1,!1,Math.PI/2-ue+.02,ue-ne-.04),{m:L(_.x,B-.07,_.z),color:w}),[J-m*.25,J+m*.25].forEach(Te=>h.add(Me,{m:L(_.x+Math.cos(Te)*(_.r-.06),B,_.z+Math.sin(Te)*(_.r-.06),0,0,0,1,1.07,1),color:S}))}class T extends Xn{constructor(z,B){super(),this.r=z,this.dy=B}getPoint(z,B=new D){let J=z*ui*_.turns;return B.set(_.x+Math.cos(J)*this.r,a-z*Qc+this.dy,_.z+Math.sin(J)*this.r)}}h.add(new Fi(new T(_.r-.06,.92),150,.03,6),{color:A}),h.add(new Fi(new T(_.r-.02,-.1),150,.045,6),{color:w}),h.add(new Ue(.07,.07,a+.9-r,12),{m:L(_.x,(a+.9+r)/2,_.z),color:A}),h.add(en([[.15,0],[.15,.04],[.1,.07],[.08,.14],[.07,.16]],12),{m:L(_.x,r,_.z),color:w}),h.add(en([[.07,0],[.09,.03],[.05,.08],[.06,.14],[.03,.2],[0,.23]],12),{m:L(_.x,a+.9,_.z),color:A})}{let C=(Je.top-Je.bottom)/12,m=(Je.x0+Je.x1)/2,T=Je.x1-Je.x0-.04;for(let B=0;B<12;B++){let J=Je.top-B*C,ne=J-C,ue=os(J-C*.5);h.add(Le(T,.05,C+.04,.012,1),{m:L(m,ue-.025,(ne+J)/2),color:S}),h.add(Y(T,Math.abs(os(J)-os(ne)),.03),{m:L(m,(os(J)+ue)/2,J-.01),color:w})}let k=Math.hypot(Je.top-Je.bottom,.12-a),z=Math.atan2(.12-a,Je.top-Je.bottom);[Je.x0,Je.x1].forEach(B=>{h.add(Y(.05,.28,k),{m:L(B,(.12+a)/2-.1,(Je.top+Je.bottom)/2,z,0,0),color:y}),h.add(Le(.06,.06,k,.02,1),{m:L(B,(.12+a)/2+.85,(Je.top+Je.bottom)/2,z,0,0),color:A});for(let ne=1;ne<12;ne+=1){let ue=Je.top-ne*C;h.add(Me,{m:L(B,os(ue),ue,0,0,0,1,1.03,1),color:S})}let J=[[B,a,Je.bottom+.3],[B,a,Je.top],[B,os(Je.top)-.15,Je.top]];h.tris([...J,J[0],J[2],J[1]],y)})}let Ze=(_,C)=>_>Je.x0-.05&&_<Je.x1+.05&&C>Je.bottom-.05&&C<Je.top+.2;for(let _=c;_<l-.01;_+=.5)for(let C=u;C<d-.01;C+=.5)Ze(_+.25,C+.25)||h.add(new bt(.5,.5),{m:L(_+.25,o,C+.25,Math.PI/2,0,0),color:N});for(let _=u+1.2;_<d;_+=1.8)(_>Je.bottom-.1&&_<Je.top+.2?[[c,Je.x0-.05],[Je.x1+.05,l]]:[[c,l]]).forEach(([m,T])=>h.add(Le(T-m,.22,.2,.02,1),{m:L((m+T)/2,o-.11,_),color:w}));let re={x:-1.8,z:-2.75,y:-2.75};h.add(en([[.42,0],[.4,-.03],[.3,-.05],[.18,-.07],[.08,-.1],[0,-.1]],24),{m:L(re.x,o,re.z),color:N});let pe=Qt("wood",_=>{let C=.34+p(_.x*2,_.y*6,_.z*2)*.08;return[C*1.06,C*.74,C*.5]});[["z",u,c,l,1],["z",d,c,l,-1],["x",c,u,d,1],["x",l,u,d,-1]].forEach(([_,C,m,T,k])=>{let z=_==="z"&&C===u?cs:null,B=[];for(let J=m;J<T-.01;J+=.6)B.push(J);B.push(T),z&&(B.push(z.x0,z.x1),B.sort((J,ne)=>J-ne));for(let J=0;J<B.length-1;J++){let ne=B[J],ue=B[J+1]-ne;if(ue<.005)continue;let Te=ne+ue/2,Ce=(ke,Qe,Ge)=>h.add(new bt(ue,Qe-ke),{m:_==="z"?L(Te,(ke+Qe)/2,C,0,k>0?0:Math.PI,0):L(C,(ke+Qe)/2,Te,0,k>0?Math.PI/2:-Math.PI/2,0),color:Ge});z&&Te>z.x0&&Te<z.x1?(Ce(r,z.y0,E),Ce(z.y1,o,pe)):(Ce(r,r+.9,E),Ce(r+.9,o,pe))}[[r+.9,.06,.05],[r+.06,.12,.03],[o-.07,.14,.09],[o-.17,.05,.05]].forEach(([J,ne,ue])=>{(z&&J>z.y0&&J<z.y1?[[m,z.x0-.2],[z.x1+.2,T]]:[[m,T]]).forEach(([Ce,ke])=>{let Qe=ke-Ce,Ge=(Ce+ke)/2;h.add(Le(_==="z"?Qe:ue,ne,_==="z"?ue:Qe,.015,1),{m:_==="z"?L(Ge,J,C+k*ue/2):L(C+k*ue/2,J,Ge),color:y})})})});for(let _=mt.left+.15;_<mt.right-.6;_+=1.07)h.add(Le(.9,.62,.035,.012,1),{m:L(_+.45,r+.48,d-.02),color:A}),h.add(Le(.7,.44,.02,.02,1),{m:L(_+.45,r+.48,d-.04),color:y}),h.add(Le(.9,2.4,.03,.012,1),{m:L(_+.45,f+1.6,d-.02),color:A}),h.add(Le(.72,2.2,.02,.02,1),{m:L(_+.45,f+1.6,d-.04),color:y});{let _=cs.x0,C=cs.x1,m=cs.y0,T=cs.y1,k=u+.02,z=cs.depth;h.add(new bt(z,T-m),{m:L(_,(m+T)/2,u-z/2,0,Math.PI/2,0),color:E}),h.add(new bt(z,T-m),{m:L(C,(m+T)/2,u-z/2,0,-Math.PI/2,0),color:E}),h.add(new bt(C-_,z),{m:L(0,T,u-z/2,Math.PI/2,0,0),color:E}),h.add(new bt(C-_,z),{m:L(0,m,u-z/2,-Math.PI/2,0,0),color:E});let B=new $e(new bt(C-_,T-m),new $t({color:13623530,transparent:!0,opacity:.07,depthWrite:!1}));B.position.set(0,(m+T)/2,k+.03),B.renderOrder=2,s.add(B);let J=(ne,ue,Te,Ce,ke=.05)=>h.add(Le(ne,ue,ke,.008,1),{m:L(Te,Ce,k+.05),color:S});for(let ne=1;ne<3;ne++)J(.035,T-m,_+ne*(C-_)/3,(m+T)/2);for(let ne=1;ne<5;ne++)J(C-_,.035,0,m+ne*(T-m)/5);J(.06,T-m,0,(m+T)/2,.07),[-1,1].forEach(ne=>h.add(Le(.14,T-m+.2,.1,.015,1),{m:L(ne*(C+.06),(m+T)/2,k+.05),color:A})),h.add(Le(C-_+.4,.16,.12,.015,1),{m:L(0,T+.08,k+.06),color:A}),h.add(Le(C-_+.5,.05,.18,.015,1),{m:L(0,T+.18,k+.09),color:y}),h.add(Le(C-_+.46,.05,.28,.02,1),{m:L(0,m-.02,k+.14),color:S}),h.add(Le(C-_+.3,.12,.05,.015,1),{m:L(0,m-.11,k+.04),color:A}),[-1,1].forEach(ne=>{let ue=ne*(C+.33);[[.36,.04,0,T-.02],[.36,.04,0,m+.02],[.04,T-m,-.16,(m+T)/2],[.04,T-m,.16,(m+T)/2],[.36,.04,0,(m+T)/2]].forEach(([Te,Ce,ke,Qe])=>h.add(Le(Te,Ce,.035,.008,1),{m:L(ue+ke,Qe,k+.03),color:S}));for(let Te=m+.08;Te<T-.06;Te+=.075)Math.abs(Te-(m+T)/2)>.05&&h.add(Y(.3,.05,.008),{m:L(ue,Te,k+.03,-.6,0,0),color:y});[m+.3,T-.3].forEach(Te=>h.add(Y(.03,.06,.02),{m:L(ue-ne*.18,Te,k+.05),color:V}))})}let Ee=[],ze=(_,C,m,T)=>Ee.push({x:_,z:C,ry:m,w:T,base:r,h:2.8,rows:4,rowY0:.86,rowH:.48,cab:.78,pref:[1,2,0,3]}),Be=(_,C,m,T)=>Ee.push({x:_,z:C,ry:m,w:T,base:a,h:2.88,rows:5,rowY0:.16,rowH:.5,cab:0,pref:[2,3,1,0,4]});[-2.25,-3.95,2.25,3.95,-5.65,5.65].forEach(_=>ze(_,u+ln/2,0,1.7)),[-8,-6,-4,-2,0].forEach(_=>ze(c+ln/2,_,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(_=>ze(l-ln/2,_,-Math.PI/2,2)),[-1,1,-3,3,-5,5].forEach(_=>Be(_,u+ln/2,0,2)),[-8,-6,-4,-2,0].forEach(_=>Be(c+ln/2,_,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(_=>Be(l-ln/2,_,-Math.PI/2,2));let at=Ee.map((_,C)=>C),yt=_=>H(_.x,_.base,_.z,_.ry),st=(_,C,m,T)=>new D(C,m,T).applyMatrix4(yt(_));Ee.forEach(_=>{let C=yt(_),m=_.w/2,T=_.rowY0+_.rows*_.rowH,k=(z,B,J)=>q(C,z,B,J);k(Y(_.w,_.h-_.cab,.03),L(0,(_.h+_.cab)/2,-ln/2+.015),w),[-1,1].forEach(z=>k(Le(.06,_.h,ln+.02,.012,1),L(z*(m-.03),_.h/2,.01),y));for(let z=0;z<=_.rows;z++)k(Y(_.w-.1,.03,ln-.03),L(0,_.rowY0+z*_.rowH-.015,0),y);for(let z=0;z<_.rows;z++)k(Le(_.w-.1,.04,.022,.008,1),L(0,_.rowY0+z*_.rowH+.005,ln/2-.006),S);if(k(Y(_.w-.1,_.h-T-.06,.03),L(0,(T+_.h-.06)/2,ln/2-.03),A),k(Le(_.w+.04,.06,ln+.05,.015,1),L(0,_.h-.03,.02),w),k(Le(_.w+.1,.04,ln+.1,.015,1),L(0,_.h+.01,.04),y),_.cab){k(Le(_.w,_.cab-.12,ln+.1,.01,1),L(0,.1+(_.cab-.12)/2,.05),y),k(Y(_.w-.04,.1,ln+.06),L(0,.05,.03),w),k(Le(_.w+.04,.045,ln+.16,.014,1),L(0,_.cab-.02,.06),S);let z=(_.w-.12)/2;[-1,1].forEach(B=>{let J=B*(z/2+.015);k(Le(z-.02,_.cab-.26,.03,.006,1),L(J,.11+(_.cab-.2)/2,ln/2+.11),A),k(Le(z-.16,_.cab-.42,.02,.02,1),L(J,.11+(_.cab-.2)/2,ln/2+.13),S),k(new Ot(.018,8,6),L(B*.05,.11+(_.cab-.2)/2+.06,ln/2+.15),O)})}else k(Le(_.w,_.rowY0-.02,ln+.04,.008,1),L(0,(_.rowY0-.02)/2,.02),w)}),h.add(new Ue(.015,.015,12.2,6),{m:L(0,a+2.55,u+ln+.05,0,0,Math.PI/2),color:O});{let m=u+ln+.55;[-.22,.22].forEach(T=>h.add(Le(.05,2.7,.06,.012,1),{m:L(5.6+T,a+1.33,m-.26,-.2,0,0),color:S}));for(let T=0;T<8;T++){let k=.25+T*.31;h.add(new Ue(.018,.018,.44,6),{m:L(5.6,a+k,m-k*Math.tan(.2)*.98,0,0,Math.PI/2),color:S})}[-.22,.22].forEach(T=>h.add(new An(.03,.008,4,10),{m:L(5.6+T,a+2.58,u+ln+.08,0,Math.PI/2,0),color:O}))}{let _=H(0,r,-8);q(_,Le(1.9,.06,.9,.022,2),L(0,.77,0),A),q(_,Y(1.2,.004,.55),L(0,.802,.02),Qt("leather",()=>[.15,.24,.17])),[-1,1].forEach(C=>{q(_,Le(.5,.66,.82,.012,1),L(C*.65,.41,0),y),q(_,Le(.54,.08,.86,.015,1),L(C*.65,.04,0),w);for(let m=0;m<3;m++){let T=.2+m*.19;q(_,Le(.42,.16,.03,.008,1),L(C*.65,T,-.42),A),q(_,Le(.12,.018,.02,.008,1),L(C*.65,T+.02,-.445),O)}q(_,Le(.4,.5,.03,.01,1),L(C*.65,.42,.42),A),q(_,Le(.3,.38,.02,.015,1),L(C*.65,.42,.44),S)}),q(_,Le(.76,.11,.03,.008,1),L(0,.68,-.42),A),q(_,Le(.14,.018,.02,.008,1),L(0,.69,-.445),O),q(_,Y(.8,.55,.02),L(0,.45,.38),y),q(_,new Ue(.1,.12,.03,16),L(.6,.815,.1),O),q(_,new Ue(.012,.012,.3,6),L(.6,.97,.1),O),q(_,new Ot(1,16,8,0,ui,0,Math.PI/2),L(.6,1.1,.02,0,0,0,.22,.09,.1),R(.12,.34,.2,"metal")),q(_,new Ue(.03,.03,.12,8),L(.6,1.08,.02,0,0,Math.PI/2),G,g),[[.16,.05,[.4,.14,.12]],[.2,.045,[.17,.25,.2]],[.18,.04,[.5,.4,.25]]].forEach(([C,m,T],k)=>q(_,Le(C*1.4,m,C,.008,1),L(-.62,.8+.025+k*.045,.12,0,k*.2-.2,0),R(...T,"leather"))),q(_,en([[.03,0],[.035,.02],[.03,.05],[.012,.06],[.012,.07]],10),L(-.25,.8,.22),R(.1,.12,.16,"metal")),q(_,new Ue(.004,.004,.16,5),L(-.1,.81,.05,0,.5,Math.PI/2),R(.1,.1,.1)),q(_,Y(.3,.003,.4),L(.05,.806,-.02,0,-.12,0),R(.9,.87,.78,"paper")),q(_,Y(.3,.003,.4),L(.12,.809,0,0,.1,0),R(.92,.9,.82,"paper"))}x=M;{let _=H(0,r,-8.88),C=Qt("fabric",T=>Math.sin(T.x*40)*Math.sin(T.y*40+T.z*30)>.35?[.74,.68,.5]:[.42,.48,.38]),m=en([[.018,0],[.024,.04],[.018,.12],[.028,.24],[.022,.36],[.026,.42],[.026,.44]],8);[[-.21,.19],[.21,.19]].forEach(([T,k])=>q(_,m,L(T,0,k),w)),[[-.21,-.19],[.21,-.19]].forEach(([T,k])=>q(_,Le(.045,.98,.045,.01,1),L(T,.49,k-.02,-.08,0,0),w)),q(_,Le(.5,.06,.46,.015,1),L(0,.44,0),w),q(_,Le(.48,.1,.44,.04,2),L(0,.51,.01),C),q(_,Le(.4,.46,.06,.03,2),L(0,.82,-.2,-.08,0,0),C),q(_,Le(.46,.05,.05,.015,1),L(0,1.06,-.23,-.08,0,0),w)}x=h,x=M;{let _=H(-1.8,r,-1.4,Math.PI);q(_,Le(2.2,.32,.86,.05,2),L(0,.28,0),W),[-1,0,1].forEach(C=>q(_,Le(.62,.14,.64,.05,2),L(C*.63,.5,.08),W)),q(_,Le(2.2,.5,.22,.07,2),L(0,.67,-.33),W);for(let C=0;C<3;C++)for(let m=-.9+C%2*.09;m<=.9;m+=.18)q(_,new Ot(.012,6,4),L(m,.6+C*.09,-.218),R(.12,.06,.04,"leather"));[-1,1].forEach(C=>{q(_,Le(.2,.36,.86,.04,2),L(C*1,.5,0),W),q(_,new Ue(.13,.13,.88,16),L(C*1.03,.68,0,Math.PI/2,0,0),W),[-1,1].forEach(m=>q(_,en([[.04,0],[.05,.04],[.035,.09],[.045,.12]],10),L(C*.98,0,m*.36),w)),q(_,Le(.42,.4,.12,.07,2),L(C*.66,.74,-.15,-.3,C*.25,C*.1),C>0?Qt("fabric",m=>Math.sin(m.x*50)>.6?[.72,.58,.3]:[.56,.42,.22]):R(.36,.42,.32,"fabric"))})}x=h;{let _=H(-1.8,r,-2.75),C=en([[.025,0],[.032,.03],[.022,.1],[.034,.2],[.026,.3],[.03,.38],[.03,.4]],8);q(_,Le(1.2,.05,.66,.02,2),L(0,.43,0),A),q(_,Le(1.08,.08,.54,.01,1),L(0,.37,0),y),q(_,Le(1,.025,.48,.01,1),L(0,.12,0),y),[[-.52,-.25],[.52,-.25],[-.52,.25],[.52,.25]].forEach(([m,T])=>q(_,C,L(m,0,T),w)),[-1,1].forEach(m=>{q(_,Le(.2,.012,.28,.004,1),L(m*.1+.1,.462,.05,0,.15,m*.08),R(.9,.87,.78,"paper")),q(_,Le(.21,.008,.29,.004,1),L(m*.1+.1,.455,.05,0,.15,m*.08),R(.42,.14,.12,"leather"))}),q(_,en([[0,0],[.09,0],[.11,.025],[.1,.03]],16),L(-.32,.455,-.1),O),q(_,Le(.24,.05,.17,.008,1),L(-.2,.18,.05,0,.3,0),R(.3,.33,.4,"leather"))}{let _=H(-4,r,-2.9,Math.PI/2);q(_,Le(.86,.36,.8,.05,2),L(0,.3,0),W),q(_,Le(.56,.14,.6,.05,2),L(0,.53,.08),W),q(_,Le(.86,.48,.2,.07,2),L(0,.7,-.3,-.1,0,0),W),[-1,1].forEach(C=>{q(_,Le(.17,.42,.8,.06,2),L(C*.36,.56,0),W),[-1,1].forEach(m=>q(_,en([[.035,0],[.045,.04],[.03,.08],[.04,.12]],10),L(C*.36,0,m*.32),w))})}h.add(en([[.16,0],[.16,.02],[.1,.05],[.04,.09],[.02,.12]],16),{m:L(-3.2,r,-.9),color:O}),h.add(new Ue(.014,.014,1.45,6),{m:L(-3.2,r+.82,-.9),color:O}),h.add(new Ue(.16,.25,.3,20,1,!0),{m:L(-3.2,r+1.6,-.9),color:Qt("fabric",m=>{let T=.82+Math.sin(Math.atan2(m.z- -.9,m.x- -3.2)*20)*.04;return[T,T*.9,T*.72]})}),g.add(new Ot(.06,10,8),{m:L(-3.2,r+1.52,-.9),color:G});{let m=r+1;h.add(new Ot(.28,28,18),{m:L(4.4,m,1.6,.4,0,.2),color:T=>p(T.x*9+3,T.y*9,T.z*9)>.55?[.66,.56,.36]:[.24,.36,.42]}),h.add(new An(.31,.012,6,36),{m:L(4.4,m,1.6,0,Math.PI/2,.2),color:O}),h.add(new An(.33,.016,6,36),{m:L(4.4,m-.02,1.6,Math.PI/2,0,0),color:A}),h.add(en([[.2,0],[.2,.03],[.07,.08],[.05,.3],[.08,.42],[.04,.55],[.06,.7],[.03,.72]],12),{m:L(4.4,r,1.6),color:A})}{let _=H(-6.1,r,1.9,Math.PI/2);q(_,Le(.56,.32,.38,.02,1),L(0,.16,0),w),q(_,Le(.46,1.4,.3,.02,1),L(0,1,0),A),q(_,Le(.3,1,.02,.02,1),L(0,1,.155),y),q(_,Le(.56,.56,.36,.02,1),L(0,1.98,0),A),q(_,new Ue(.28,.28,.36,18,1,!1,-Math.PI/2,Math.PI),L(0,2.26,0,Math.PI/2,0,0,1,1,.5),w),q(_,new Ue(.19,.19,.02,28),L(0,1.98,.18,Math.PI/2,0,0),R(.9,.86,.76,"paper")),q(_,new An(.2,.012,6,28),L(0,1.98,.19),O),q(_,Y(.012,.13,.006),L(0,2.02,.195,0,0,.6),R(.08,.08,.08)),q(_,Y(.012,.16,.006),L(0,2.04,.197,0,0,-.3),R(.08,.08,.08)),q(_,new Ue(.06,.06,.012,16),L(0,.7,.13,Math.PI/2,0,0),O)}{for(let C=o-.12,m=0;C>re.y+.8;C-=.085,m++)h.add(new An(.03,.007,4,8),{m:L(re.x,C,re.z,0,m%2*Math.PI/2,0,1,1.4,1),color:V});h.add(en([[0,-.28],[.035,-.22],[.05,-.12],[.03,-.02],[.07,.04],[.05,.12],[.022,.3],[.04,.45],[.02,.6],[.016,.8],[0,.82]],12),{m:L(re.x,re.y,re.z),color:V});let _=(C,m,T,k)=>{h.add(new An(C,.02,6,48),{m:L(re.x,m,re.z,Math.PI/2,0,0),color:V});for(let z=0;z<T;z++){let B=z/T*ui+(k?0:.3),J=re.x+Math.cos(B)*C,ne=re.z+Math.sin(B)*C,ue=new Cr(new D(re.x,m+.1,re.z),new D(re.x+Math.cos(B)*C*.3,m-.18,re.z+Math.sin(B)*C*.3),new D(re.x+Math.cos(B)*C*.8,m-.12,re.z+Math.sin(B)*C*.8),new D(J,m,ne));h.add(new Fi(ue,12,.012,5),{color:V}),h.add(en([[0,0],[.03,0],[.045,.035],[.04,.05]],10),{m:L(J,m+.01,ne),color:V}),h.add(new Ue(.017,.017,.12,8),{m:L(J,m+.11,ne),color:R(.9,.86,.76,"paper")}),g.add(new Ot(.02,8,6),{m:L(J,m+.2,ne,0,0,0,1,1.9,1),color:G})}};_(.82,re.y,8,!0),_(.42,re.y+.4,6,!1);for(let C=0;C<4;C++){let m=C/4*ui+Math.PI/4,T=new ks(new D(re.x+Math.cos(m)*.82,re.y,re.z+Math.sin(m)*.82),new D(re.x+Math.cos(m)*.7,re.y+.5,re.z+Math.sin(m)*.7),new D(re.x,re.y+.78,re.z));h.add(new Fi(T,12,.009,4),{color:V})}}{let _=Qt("fabric",m=>{let T=.84+p(m.x*7,m.y*7,m.z*7)*.05;return[T,T*.97,T*.9]});x=M;let C=m=>{let T=H(3.6,a,m,-Math.PI/2);q(T,Le(.8,.3,.78,.06,2),L(0,.3,0),_),q(T,Le(.56,.13,.6,.05,2),L(0,.5,.07),_),q(T,Le(.8,.62,.2,.08,2),L(0,.76,-.3,-.12,0,0),_),[-1,1].forEach(k=>{q(T,Le(.14,.38,.76,.06,2),L(k*.34,.54,0),_),[-1,1].forEach(z=>q(T,en([[.02,0],[.03,.05],[.022,.1],[.03,.15]],8),L(k*.33,0,z*.32),w))}),q(T,Le(.38,.36,.1,.06,2),L(0,.72,-.15,-.25,0,0),R(.34,.4,.5,"fabric"))};C(-4.6),C(-2.9),x=h,h.add(new Ue(.3,.3,.035,24),{m:L(3.7,a+.58,-3.75),color:A}),h.add(en([[.17,0],[.17,.02],[.06,.06],[.035,.2],[.05,.35],[.03,.5],[.06,.56]],12),{m:L(3.7,a,-3.75),color:w}),h.add(en([[0,0],[.05,0],[.07,.06],[.05,.16],[.02,.2],[.025,.24]],12),{m:L(3.75,a+.6,-3.65),color:R(.6,.66,.66)}),[[0,[.5,.2,.16]],[.04,[.2,.3,.34]]].forEach(([m,T],k)=>h.add(Le(.22,.04,.16,.006,1),{m:L(3.6,a+.62+m,-3.88,0,k*.4,0),color:R(...T,"leather")}))}let ct=(_,C,m,T,k,z=!1)=>{let B=document.createElement("canvas");B.width=_,B.height=C,m(B.getContext("2d"),_,C);let J=new li(B);J.colorSpace=hn,J.anisotropy=8;let ne=new _n({map:J,color:12103848,alphaTest:z?.5:0,side:an}),ue=new $e(T,ne);return ue.applyMatrix4(k),ue.receiveShadow=!0,s.add(ue),ue},Ft=7,lt=()=>(Ft=Ft*16807%2147483647,Ft/2147483647),Mt=_=>(C,m,T)=>{let k=Math.round(m*.035);C.clearRect(0,0,m,T);for(let it=2;it<T-2;it+=3)C.fillStyle=it%2?"#e9dfc8":"#d7cbb0",C.fillRect(0,it,k+2,1.6),C.fillRect(m-k-2,it,k+2,1.6);let z=k,B=m-2*k,J=(it,We)=>{C.fillStyle=We,C.fillRect(z+it,it,B-it*2,T-it*2)};J(0,_.border),J(T*.035,_.cream),J(T*.045,_.border2),J(T*.115,_.cream),J(T*.125,_.field),C.fillStyle=_.accent;let ne=T*.08,ue=T*.06,Te=(it,We,Yt)=>{C.beginPath(),C.moveTo(it,We-Yt),C.lineTo(it+Yt,We),C.lineTo(it,We+Yt),C.lineTo(it-Yt,We),C.closePath(),C.fill()};for(let it=z+ne;it<z+B-ne;it+=ue)Te(it,ne,ue*.3),Te(it,T-ne,ue*.3);for(let it=ne+ue;it<T-ne;it+=ue)Te(z+ne,it,ue*.3),Te(z+B-ne,it,ue*.3);let Ce=z+T*.125,ke=T*.125,Qe=B-T*.25,Ge=T*.75;C.save(),C.beginPath(),C.rect(Ce,ke,Qe,Ge),C.clip();for(let it=ke+10,We=0;it<ke+Ge;it+=T*.055,We++)for(let Yt=Ce+8+We%2*T*.04;Yt<Ce+Qe;Yt+=T*.08)C.fillStyle=_.motif,Te(Yt,it,T*.012),C.fillStyle=_.accent,C.fillRect(Yt-1,it-1,2,2);let dt=z+B/2,wt=T/2,Tt=(it,We,Yt,Dt,Gn)=>{Gn.forEach((ai,Ri)=>{let ds=Yt*(1-Ri*.2);C.fillStyle=ai,C.beginPath();for(let qt=0;qt<=64;qt++){let on=qt/64*ui,pi=ds*(1+.14*Math.cos(on*8)),Jt=it+Math.cos(on)*pi*Dt,mi=We+Math.sin(on)*pi;qt?C.lineTo(Jt,mi):C.moveTo(Jt,mi)}C.fill()})};[[Ce,ke],[Ce+Qe,ke],[Ce,ke+Ge],[Ce+Qe,ke+Ge]].forEach(([it,We])=>Tt(it,We,T*.2,1.3,[_.medal,_.cream,_.medal])),C.restore(),[-1,1].forEach(it=>{C.fillStyle=_.medal,Te(dt+it*T*.42,wt,T*.08),C.fillStyle=_.cream,Te(dt+it*T*.42,wt,T*.04)}),Tt(dt,wt,T*.3,1.45,[_.cream,_.medal,_.field,_.accent,_.medal]);for(let it=0;it<m*T*.05;it++){let We=z+lt()*B,Yt=lt()*T;C.fillStyle=lt()<.5?"rgba(0,0,0,0.12)":"rgba(255,240,210,0.08)",C.fillRect(We,Yt,1.5,1.5)}let _t=C.createRadialGradient(dt,wt,0,dt,wt,B*.4);_t.addColorStop(0,"rgba(255,240,220,0.1)"),_t.addColorStop(1,"rgba(255,240,220,0)"),C.fillStyle=_t,C.fillRect(z,0,B,T)},kt=(_,C,m,T,k,z,B=r)=>{let J=new bt(m*1.07,T);ct(1024,Math.round(1024*T/(m*1.07)),Mt(z),J,new Ye().compose(new D(_,B+.006,C),new ot().setFromEuler(new un(-Math.PI/2,k,0,"YXZ")),new D(1,1,1)),!0)};kt(0,-6.5,3.2,2,0,{border:"#2a2440",border2:"#6a1d1c",cream:"#d8c7a0",field:"#7a201c",accent:"#c58f42",motif:"#4a1612",medal:"#22305a"}),kt(-1.9,-2.6,3.9,2.8,0,{border:"#6d1f1c",border2:"#1f2d4a",cream:"#d6c49a",field:"#1d2a46",accent:"#b07a3a",motif:"#2c3d5e",medal:"#7b2420"}),kt(3.9,-3.75,2.2,3,Math.PI/2,{border:"#5c3a22",border2:"#8a2e22",cream:"#e0d2ae",field:"#9a3a26",accent:"#d6a24c",motif:"#6a2416",medal:"#2b3a52"},a);{let T=r+2.05,k=d-.06;ct(512,333,(B,J,ne)=>{let ue=B.createLinearGradient(0,0,0,ne*.6);ue.addColorStop(0,"#6f87a0"),ue.addColorStop(1,"#e3c9a0"),B.fillStyle=ue,B.fillRect(0,0,J,ne);let Te=(ke,Qe,Ge,dt)=>{B.fillStyle=Ge,B.beginPath(),B.moveTo(0,ne);for(let wt=0;wt<=J;wt+=4)B.lineTo(wt,ke+Math.sin(wt*dt+ke)*Qe+Math.sin(wt*dt*2.7)*Qe*.4);B.lineTo(J,ne),B.fill()};Te(ne*.5,14,"#56677a",.012),Te(ne*.6,10,"#47584a",.02),B.fillStyle="#9fb2b8",B.fillRect(0,ne*.7,J,ne*.08),Te(ne*.8,6,"#2f3a2a",.03);for(let ke=0;ke<26;ke++){let Qe=lt()*J,Ge=ne*(.62+lt()*.2),dt=20+lt()*40;B.fillStyle="#1f2a1e",B.beginPath(),B.moveTo(Qe,Ge-dt),B.lineTo(Qe+dt*.25,Ge),B.lineTo(Qe-dt*.25,Ge),B.fill()}for(let ke=0;ke<6e3;ke++)B.fillStyle=`rgba(${lt()<.5?"0,0,0":"255,240,210"},0.05)`,B.fillRect(lt()*J,lt()*ne,2,1);let Ce=B.createRadialGradient(J/2,ne/2,ne*.3,J/2,ne/2,J*.7);Ce.addColorStop(0,"rgba(0,0,0,0)"),Ce.addColorStop(1,"rgba(40,20,0,0.35)"),B.fillStyle=Ce,B.fillRect(0,0,J,ne)},new bt(2,1.3),L(-1.8,T,k,0,Math.PI,0));let z=R(.72,.56,.26,"metal");[[2+.2,.12,0,1.3/2+.06],[2+.2,.12,0,-1.3/2-.06],[.12,1.3,-2/2-.06,0],[.12,1.3,2/2+.06,0]].forEach(([B,J,ne,ue])=>h.add(Le(B,J,.06,.025,2),{m:L(-1.8+ne,T+ue,k+.01),color:z})),[-1,1].forEach(B=>{let J=-1.8+B*1.5,ne=r+2.25;h.add(Le(.1,.22,.03,.02,1),{m:L(J,ne,d-.02),color:O}),h.add(new Ue(.008,.008,.18,5),{m:L(J,ne+.02,d-.1,Math.PI/2,0,0),color:O}),h.add(new Ue(.06,.09,.13,14,1,!0),{m:L(J,ne+.16,d-.19),color:R(.9,.84,.7,"fabric")}),g.add(new Ot(.03,8,6),{m:L(J,ne+.12,d-.19),color:G})})}let Ht=new $e(h.geometry(),i);Ht.receiveShadow=!0,Ht.castShadow=!0,Ht.layers.enable(5);let xt=new $e(g.geometry(),new $t({vertexColors:!0,toneMapped:!1}));s.add(Ht,xt);let ie=new $e(M.geometry(),i);ie.receiveShadow=ie.castShadow=!0,ie.layers.enable(5),s.add(ie);let U=new Kn(16761466,0,90,1.2);U.position.set(re.x,re.y-.45,re.z),s.add(U),U.castShadow=!0,U.shadow.autoUpdate=!1,U.shadow.mapSize.set(512,512),U.shadow.camera.near=.5,U.shadow.camera.far=90,U.shadow.bias=-.003,U.shadow.normalBias=.25,U.shadow.camera.layers.set(5),U.shadow.needsUpdate=!0;let Se=new Kn(16766112,0,70,1.2);Se.position.set(-.8,r+2,-4.6),s.add(Se);let ye={set intensity(_){U.intensity=_*1.2,Se.intensity=_*.75},get intensity(){return U.intensity/1.25}},I=(()=>{let _=new zt,C=m=>{let T=.9+p(m.x*40,m.y*40,m.z*40)*.2;return[T,T,T]};return[-1,1].forEach(m=>_.add(new Ie(.1,1,1),{m:L(m*.45,0,0),color:C,tip:()=>1})),_.add(new Ie(1,1,.08),{m:L(0,0,.47),color:C,tip:()=>1}),_.add(new Ie(.82,.94,.94),{m:L(0,0,-.04),color:m=>{let T=.86+Math.sin(m.x*140)*.04;return[T,T*.96,T*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(m=>_.add(new Ie(1.01,.025,.02),{m:L(0,m,.515),color:R(.78,.62,.3),tip:()=>0})),_.add(new Ie(.7,.16,.01),{m:L(0,.1,.516),color:R(.12,.1,.08),tip:()=>0}),_.geometry()})(),v=new _n({vertexColors:!0});v.onBeforeCompile=_=>{_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let j=null,Z=[],oe=[],he="",me=new Ye,$=new ot,ae=new D,ve=new D,fe=[],ge=_=>{let C=2166136261;for(let m=0;m<_.length;m++)C=Math.imul(C^_.charCodeAt(m),16777619);return(C>>>0)%1e4/1e4},be=(_,C)=>window.MEOW_I18N?window.MEOW_I18N.t(_):C,_e=_=>{let C=document.createElement("canvas");C.width=256,C.height=64;let m=C.getContext("2d"),T=m.createLinearGradient(0,0,0,64);T.addColorStop(0,"#d9b968"),T.addColorStop(1,"#8c6a2c"),m.fillStyle=T,m.fillRect(0,0,256,64),m.strokeStyle="rgba(60,40,10,.8)",m.lineWidth=4,m.strokeRect(4,4,248,56),m.fillStyle="#2a1c08",m.font='600 30px "Josefin Sans", system-ui, sans-serif',m.textAlign="center",m.textBaseline="middle";let k=_;for(;m.measureText(k).width>228&&k.length>2;)k=k.slice(0,-2)+"\u2026";m.fillText(k,128,34);let z=new li(C);return z.colorSpace=hn,z.anisotropy=4,z},Ae=new zt,He=(_,C,m)=>{let T=Math.floor(m*5),k=_.rowY0+C*_.rowH,z=(ne,ue,Te)=>st(_,ne,ue,Te),B=(ne,ue,Te,Ce,ke=1,Qe=1,Ge=1)=>{let dt=z(ue,Te,.02);Ae.add(ne,{m:new Ye().compose(dt,new ot().setFromAxisAngle(new D(0,1,0),_.ry),new D(ke,Qe,Ge)),color:Ce})},J=(m*1.3%1-.5)*1;T===0?(B(new Ue(.06,.09,.26,12),J,k+.13,R(.55,.6,.58)),B(new Ot(.07,10,8),J+.3,k+.07,R(.7,.55,.35))):T===1?(B(new Ie(.3,.16,.22),J,k+.08,b(.5)),B(new Ie(.3,.02,.22),J,k+.165,R(.62,.5,.28,"metal"))):T===2?(B(new Ot(.06,10,8),J,k+.07,R(.25,.24,.24),1,1.2,.9),B(new Ot(.04,10,8),J,k+.17,R(.25,.24,.24)),[-1,1].forEach(ne=>B(new cn(.015,.035,4),J+ne*.022,k+.215,R(.25,.24,.24)))):T===3?(B(new Ue(.05,.05,.02,12),J,k+.01,R(.62,.5,.28,"metal")),B(new Ue(.02,.02,.14,8),J,k+.09,R(.88,.84,.74,"paper"))):(B(new Ie(.02,.24,.18),J,k+.12,b(.4)),B(new bt(.14,.18),J+.012,k+.12,R(.75,.72,.62)))},K=null,Fe=()=>{j&&(s.remove(j),j.dispose()),Z.forEach(B=>{s.remove(B),B.material.map.dispose(),B.material.dispose()}),K&&(s.remove(K),K.geometry.dispose()),Z=[],fe.length=0;let _=30,C=[],m=new Map;oe.forEach(B=>{let J=(B.tag||"").trim();m.has(J)||(m.set(J,[]),C.push(J)),m.get(J).push(B)});let T=[];C.forEach(B=>{let J=m.get(B);for(let ne=0;ne<J.length;ne+=_)T.push({tag:B,list:J.slice(ne,ne+_),first:ne===0})});let k=[];at.forEach(B=>Ee[B].pref.forEach(J=>k.push([Ee[B],J])));let z=new Set;T.forEach((B,J)=>{let ne=k[J];if(!ne)return;let[ue,Te]=ne;z.add(ue.x+","+ue.z+","+Te);let Ce=ue.rowY0+Te*ue.rowH,ke=B.list.map(Tt=>({t:.035+ge(Tt.url)*.04,h:.24+ge(Tt.url+"h")*.11,d:.17+ge(Tt.title||"x")*.05})),Qe=ke.reduce((Tt,_t)=>Tt+_t.t+.004,0),Ge=ue.w-.16,dt=Qe>Ge?Ge/Qe:1,wt=-ue.w/2+.08;if(B.list.forEach((Tt,_t)=>{let it=ke[_t],We=it.t*dt,Yt=st(ue,wt+We/2,Ce+it.h/2+.002,-ln/2+.03+it.d/2),Dt=new ot().setFromAxisAngle(new D(0,1,0),ue.ry);fe.push({link:Tt,tag:B.tag,home:{p:Yt,q:Dt,s:new D(We,it.h,it.d)},cur:{p:Yt.clone(),q:Dt.clone()},state:"shelf",from:null,t0:0,color:wf[Math.floor(ge(Tt.url+"c")*wf.length)]}),wt+=We+.004}),B.first){let Tt=new $t({map:_e("#"+(B.tag||be("untagged","no tag"))),toneMapped:!1}),_t=new $e(new bt(.34,.085),Tt);_t.position.copy(st(ue,0,Ce+.006,ln/2+.006)),_t.quaternion.setFromAxisAngle(new D(0,1,0),ue.ry),_t.position.y-=.035,_t.userData.tag=B.tag,s.add(_t),Z.push(_t)}}),Ae.clear(),k.forEach(([B,J],ne)=>{if(z.has(B.x+","+B.z+","+J))return;let ue=ge("o"+ne);ue<.55&&He(B,J,ue/.55)}),K=new $e(Ae.geometry(),i),s.add(K),j=new Mn(I,v,Math.max(1,fe.length)),j.count=fe.length,j.frustumCulled=!1,fe.forEach((B,J)=>{me.compose(B.home.p,B.home.q,B.home.s),j.setMatrixAt(J,me),j.setColorAt(J,new Oe(B.color))}),j.instanceColor&&(j.instanceColor.needsUpdate=!0),s.add(j)},ce={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},Pe=document.createElement("div");Pe.className="book-tip",document.body.appendChild(Pe);let De=document.createElement("div");De.className="book-page",De.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(De);let we=De.querySelector("img"),et=De.querySelector(".bp-wait"),Ke=_=>{try{return new URL(_).hostname.replace(/^www\./,"")}catch{return _}},nt=(_,C)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(_)+"?w=800&h=600"+(C?"&r="+C:""),ht=0,tn=_=>{clearTimeout(ht),we.classList.remove("ready"),et.textContent=be("loadingPreview","\u2026");let C=0,m=()=>{we.onload=()=>{we.classList.add("ready"),et.textContent="",we.naturalWidth<600&&C<3&&(C++,ht=setTimeout(m,2500))},we.onerror=()=>{et.textContent=be("noPreview","No preview")},we.src=nt(_,C)};m()},Lt=(()=>{let _=new rn,C=new _n({color:7220522}),m=new $t({color:15722192}),T=new rn,k=new rn,z=new Ie(1,1.32,.03).translate(-.5,0,0),B=new Ie(1,1.32,.03).translate(.5,0,0),J=new Ie(.96,1.26,.06).translate(-.49,0,.045),ne=new Ie(.96,1.26,.06).translate(.49,0,.045);return T.add(new $e(z,C),new $e(J,m)),k.add(new $e(B,C),new $e(ne,m)),_.add(T,k),_.visible=!1,s.parent.add(_),{g:_,left:T,right:k,leather:C}})(),jt=.16,Zn=(_,C,m)=>{let T=fe[_];C.copy(T.cur.p).applyMatrix4(s.matrixWorld),s.getWorldQuaternion(m).multiply(T.cur.q)},Hn=(_,C,m,T=0)=>{C.set(0,T,-_).applyQuaternion(t.quaternion).add(t.position),m.copy(t.quaternion)},Fn=_=>_<.5?4*_*_*_:1-Math.pow(-2*_+2,3)/2,us=(_,C)=>{ce.open>=0&&ri(C),ce.open=_,ce.openT0=C,ce.closing=!1;let m=fe[_];m.state="out",Lt.leather.color.set(m.color),De.querySelector(".bp-tag").textContent="#"+(m.tag||be("untagged","no tag")),De.querySelector(".bp-title").textContent=m.link.title,De.querySelector(".bp-host").textContent=Ke(m.link.url),De.querySelector(".bp-go").textContent=be("bookGo","Click the book to visit \u2197"),tn(m.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let T=new D,k=new ot;Zn(_,T,k),ce.openFrom={p:T,q:k}},ri=_=>{ce.open<0||ce.closing||(ce.closing=!0,ce.openT0=_,De.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},$n=(_,C)=>{if(ce.ring===_){Wt(C);return}ce.ring!==null&&Wt(C),ce.ring=_,ce.ringT0=C;let m=0;fe.forEach((T,k)=>{T.tag===_&&(T.ringI=m++,T.state!=="out"&&(T.state="toRing",T.fromSc=T.sc||1,T.from={p:T.cur.p.clone(),q:T.cur.q.clone()},T.t0=C+T.ringI*45))}),ce.ringN=m,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},Wt=_=>{ce.ring!==null&&(fe.forEach(C=>{C.tag===ce.ring&&(C.state==="ring"||C.state==="toRing")&&(C.state="toShelf",C.fromSc=C.sc||1,C.from={p:C.cur.p.clone(),q:C.cur.q.clone()},C.t0=_+(C.ringI||0)*30)}),ce.ring=null)},se=new ot,qe=new ot,Ve=new D,pt=new D,Cn=(_,C,m,T)=>{let k=Math.max(1,ce.ringN),z=Math.max(15,k*1.3),B=_.ringI/k*Math.PI*2+C*.12;Ve.set(t.position.x+Math.cos(B)*z,t.position.y-.4+Math.sin(C*1.3+_.ringI)*.25,t.position.z+Math.sin(B)*z);let J=Math.atan2(t.position.x-Ve.x,t.position.z-Ve.z);return qe.setFromEuler(new un(0,J-Math.PI/2,Math.sin(C*.9+_.ringI)*.08)),pt.copy(Ve),s.worldToLocal(pt),m.copy(pt),s.getWorldQuaternion(se).invert(),T.copy(se).multiply(qe),m},Un=2.2,Ai=(_,C)=>{if(!j)return;let m=!1,T=new D,k=new ot;if(fe.forEach((z,B)=>{if(z.state==="shelf")return;let J=1;if(z.state==="out"){ve.set(0,0,0),me.compose(z.cur.p,z.cur.q,ve),j.setMatrixAt(B,me),m=!0;return}if(z.state==="ring")Cn(z,_,z.cur.p,z.cur.q),J=Un;else{let ne=Math.max(0,Math.min(1,(C-z.t0)/900)),ue=Fn(ne),Te=z.state==="toRing"?Cn(z,_,T,k):z.home.p,Ce=z.state==="toRing"?k:z.home.q;z.cur.p.copy(z.from.p).lerp(Te,ue),z.cur.p.y+=Math.sin(Math.PI*ue)*.4*(z.state==="toRing"?1:.6),z.cur.q.copy(z.from.q).slerp(Ce,ue);let ke=z.fromSc||1;J=ke+((z.state==="toRing"?Un:1)-ke)*ue,ne>=1&&(z.state==="toRing"?z.state="ring":(z.state="shelf",z.cur.p.copy(z.home.p),z.cur.q.copy(z.home.q),J=1))}ve.copy(z.home.s).multiplyScalar(J),me.compose(z.cur.p,z.cur.q,ve),j.setMatrixAt(B,me),m=!0,z.sc=J}),m&&(j.instanceMatrix.needsUpdate=!0,j.boundingSphere=null),ce.open>=0){let z=fe[ce.open],B=Math.min(1,(C-ce.openT0)/(ce.closing?700:1100)),J=new D,ne=new ot;Hn(4.2,J,ne,-.15);let ue,Te;ce.closing?(ue=1-Fn(Math.max(0,(B-.35)/.65)),Te=1-Fn(Math.min(1,B/.45))):(ue=Fn(Math.min(1,B/.6)),Te=Fn(Math.max(0,(B-.45)/.55)));let Ce=ce.openFrom;Lt.g.position.copy(Ce.p).lerp(J,ue),Lt.g.quaternion.copy(Ce.q).slerp(ne,ue);let ke=(z.sc||1)*P,Qe=new D(z.home.s.z*ke,z.home.s.y*ke/1.32,z.home.s.z*ke),Ge=new D(1.6,1.6,1.6);Lt.g.scale.copy(Qe).lerp(Ge,ue),Lt.left.rotation.y=Math.PI*(1-Te)*.999,Lt.right.rotation.y=0,Lt.g.visible=!0,!ce.closing&&B>=1?(ee(Lt.g,De),De.classList.add("show")):ce.closing||De.classList.remove("show"),ce.closing&&B>=1&&(Lt.g.visible=!1,z.state=ce.ring===z.tag?"toRing":"toShelf",z.from={p:new D,q:new ot},z.from.p.copy(Lt.g.position),s.worldToLocal(z.from.p),s.getWorldQuaternion(se).invert(),z.from.q.copy(se).multiply(Lt.g.quaternion),z.t0=C,z.fromSc=1,ce.open=-1,ce.closing=!1)}},P=4.5,X=new D,ee=(_,C)=>{let m=1e9,T=1e9,k=-1e9,z=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([B,J])=>{X.set(B,J,.08).applyMatrix4(_.matrixWorld).project(t);let ne=(X.x*.5+.5)*innerWidth,ue=(-X.y*.5+.5)*innerHeight;m=Math.min(m,ne),k=Math.max(k,ne),T=Math.min(T,ue),z=Math.max(z,ue)}),C.style.left=m+"px",C.style.top=T+"px",C.style.width=k-m+"px",C.style.height=z-T+"px"},le=_=>{if(!j)return null;if(ce.open>=0&&Lt.g.visible&&_.intersectObject(Lt.g,!0)[0])return{type:"open"};let C=_.intersectObject(j,!1)[0],m=Z.length?_.intersectObjects(Z,!1)[0]:null;return m&&(!C||m.distance<C.distance)&&m.distance<40?{type:"label",tag:m.object.userData.tag}:C&&C.distance<45&&fe[C.instanceId]&&fe[C.instanceId].state!=="out"?{type:"book",i:C.instanceId}:null};return{swap:ie,sync(){let _=window.MEOW_LINKS_DATA||[],C=_.map(m=>m.url+"|"+m.tag+"|"+m.title).join(`
`);C!==he&&(he=C,oe=_.slice(),ce.open=-1,ce.ring=null,Lt.g.visible=!1,De.classList.remove("show"),Fe())},update:Ai,get busy(){return ce.open>=0||ce.ring!==null},hover(_,C){var k,z;let m=C?le(_):null,T=m?m.type+((z=(k=m.i)!=null?k:m.tag)!=null?z:""):"";if(T===ce.hoverKey)return!!m;if(ce.hoverKey=T,!m||m.type==="open")return Pe.classList.remove("show"),!!m;if(m.type==="book"){let B=fe[m.i];Pe.innerHTML="";let J=document.createElement("strong");J.textContent=B.link.title;let ne=document.createElement("small");ne.textContent="#"+(B.tag||be("untagged","no tag"))+" \xB7 "+Ke(B.link.url),Pe.append(J,ne)}else{let B=fe.filter(ue=>ue.tag===m.tag).length;Pe.innerHTML="";let J=document.createElement("strong");J.textContent="#"+(m.tag||be("untagged","no tag"))+"  \xB7  "+B;let ne=document.createElement("small");ne.textContent=ce.ring===m.tag?be("tagBack","Click: put them back"):be("tagRing","Click: books fly around you"),Pe.append(J,ne)}return Pe.classList.add("show"),!0},click(_,C){let m=le(_);if(ce.open>=0&&!ce.closing){if(m&&m.type==="open"){let T=fe[ce.open];return window.open(T.link.url,"_blank","noopener"),!0}if(ri(C),!m||m.type==="open")return!0}return m?m.type==="label"?($n(m.tag,C),!0):m.type==="book"?(us(m.i,C),!0):!1:ce.ring!==null?(Wt(C),!0):!1},back(_){return ce.open>=0&&!ce.closing?(ri(_),!0):ce.ring!==null?(Wt(_),!0):!1},_open(_){us(_,performance.now())},_ring(_){$n(_,performance.now())},get _n(){return fe.length},shadowLight:U,glowSpots:{CH:re,SLAB:f,F:r,MZ:a,Z0:u,Z1:d,C:o},reset(_){ce.open>=0&&ri(_),ce.ring!==null&&Wt(_),Pe.classList.remove("show"),ce.hoverKey=""},lampLight:ye}}var ft={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function Df({scene:s,shared:e,U:t,camera:n}){let i=ft.S,r=6.4,a=5,o=.17,c=.3145,l=8,u=2.62,d=1.9,f=-1.95,h=-.75,g=2.05,M=a/2+2.6,x=11,p={x:1.7,z:-2},b=new zt,w=new zt,y=new zt,S=new zt,A=(P,X,ee)=>Vt(P,X,ee),R=(P,X=1)=>Qt("wood",ee=>{let le=P*(.88+A(ee.x*3,ee.y*9,ee.z*3)*.24)*X,_=A(ee.x*.7,ee.y*2,ee.z*.7);return[le*(1.02+_*.06),le*(.79+_*.03),le*(.56-_*.04)]}),E=P=>Qt("log",(X,ee)=>{if(P==="x"?Math.abs(ee.x)>.9:Math.abs(ee.z)>.9){let m=P==="x"?Math.hypot(X.y%1,X.z):Math.hypot(X.y%1,X.x),T=.68+Math.sin(m*90)*.04;return[T*1.02,T*.86,T*.66]}let _=.5+A(X.x*2.5,X.y*8,X.z*2.5)*.2+Math.sin((P==="x"?X.x:X.z)*23)*.015,C=A(Math.floor(X.y/.31)*3.7,P==="x"?1:2,.5);return C<.25?[_*.95,_*.82,_*.68]:C>.75?[_*1.08,_*.8,_*.52]:[_,_*.79,_*.58]}),N=Qt("stone",P=>{let X=.45+A(P.x*5,P.y*5,P.z*5)*.25,ee=A(P.x*2,P.y*2,P.z*2);return[X*(.96+ee*.08),X*.95,X*(.9+(1-ee)*.08)]}),V=(P,X,ee,le)=>le?Qt(le,()=>[P,X,ee]):()=>[P,X,ee],O=(P,X,ee)=>Qt("metal",()=>[P,X,ee]),W=P=>Qt("fabric",P),G=(P,X,ee)=>new Ie(P,X,ee),F=Math.PI*2,H=(P,X)=>ee=>(P==="z"?(ee.z-X)*Math.sign(X):(ee.x-X)*Math.sign(X))>0?1:0,q={front:[[f,h,0,g],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},Y=(P,X,ee,le)=>{let _=[[P,X]];return le.forEach(([C,m,T,k])=>{if(!(T<ee+o-.02&&k>ee-o+.02))return;let z=[];_.forEach(([B,J])=>{m<=B||C>=J?z.push([B,J]):(C>B&&z.push([B,C]),m<J&&z.push([m,J]))}),_=z}),_};for(let P=0;P<l;P++){let X=o+P*c,ee=o+c/2+P*c;[["front",a/2],["back",-a/2]].forEach(([le,_])=>{Y(-r/2-.3,r/2+.3,X,q[le]).forEach(([C,m])=>{b.add(new Ue(o,o*.97,m-C,16,1),{m:L((C+m)/2,X,_,0,0,Math.PI/2),color:E("x"),tip:H("z",_)})})}),ee+o<u+.12&&[["left",-r/2],["right",r/2]].forEach(([le,_])=>{Y(-a/2-.3,a/2+.3,ee,q[le]).forEach(([C,m])=>{b.add(new Ue(o,o*.97,m-C,16,1),{m:L(_,ee,(C+m)/2,Math.PI/2,0,0),color:E("z"),tip:H("x",_)})})})}for(let P=0;P<4;P++){let X=P<2?r:a,ee=P<2?P?-a/2:a/2:P===2?-r/2:r/2;for(let le=-X/2-.2;le<X/2+.2;le+=.42){if(P===0&&le>f-.2&&le<h)continue;let _=.38+A(le,P,0)*.08,C=.16+A(le,P,3)*.08,m=P<2?L(le+.2,-.02+C/2-.06,ee,0,(A(le,P,5)-.5)*.2,0,_,C,.42):L(ee,-.02+C/2-.06,le+.2,0,(A(le,P,5)-.5)*.2,0,.42,C,_);b.add(new Ie(1,1,1),{m,color:N,tip:()=>1})}}b.add(new Ie(h-f+.1,.08,.42),{m:L((f+h)/2,.06,a/2),color:R(.5),tip:()=>0}),[-1,1].forEach(P=>{let X=P*a/2,ee=[-r/2-.05,u,X],le=[r/2+.05,u,X],_=[0,u+d,X],C=Qt("wood",m=>{let T=.48+A(m.x*9,0,P)*.1,k=Math.abs((m.x+10)%.24-.12)<.012?.75:1;return[T*k,T*.8*k,T*.6*k]});b.tris(P>0?[ee,le,_]:[le,ee,_],C,()=>0),w.tris(P>0?[le,ee,_]:[ee,le,_],m=>{let T=C(m);return[T[0]*.85,T[1]*.85,T[2]*.85]})});let de=r/2+.6,Q=d+.45,te=Math.atan2(Q,de),xe=Math.hypot(de,Q);[-1,1].forEach(P=>{b.add(new Ie(xe,.1,a+1.3,3,1,6),{m:L(P*de/2,u+d-Q/2+.02,0,0,0,-P*te),color:R(.36),tip:(ee,le)=>le.y>0?1:0});let X=9;for(let ee=0;ee<X;ee++){let le=ee/X,_=xe/X+.12,C=P*(de*(le+.5/X)),m=u+d-Q*(le+.5/X)+.1;b.add(new Ie(_,.045,a+1.3,1,1,10),{m:L(C,m,0,0,0,-P*(te+.05)),color:Qt("shingle",T=>{let k=Math.floor((T.z+5)*3.3),z=.3+A(k,ee,P)*.12+ee%2*.02;return[z*1.02,z*.9,z*.8]}),tip:()=>1})}b.add(new Ie(.05,.22,a+1.35),{m:L(P*(de+.02),u+d-Q-.02,0),color:R(.45),tip:()=>0}),[-1,1].forEach(ee=>b.add(new Ie(xe+.1,.22,.05),{m:L(P*de/2,u+d-Q/2+.02,ee*(a/2+.66),0,0,-P*te),color:R(.45),tip:()=>0}))}),b.add(new Ie(.34,.16,a+1.4),{m:L(0,u+d+.12,0,0,0,Math.PI/4),color:R(.32),tip:()=>1});for(let P=0;P<8;P++)b.add(new Ie(.86+P%2*.04,.3,.86+(P+1)%2*.04),{m:L(p.x,u+.15+P*.3,p.z,0,(A(P,1,1)-.5)*.08,0),color:N,tip:()=>1});b.add(new Ie(1.05,.08,1.05),{m:L(p.x,u+.15+8*.3-.06,p.z),color:N,tip:()=>1});let Me=new D(p.x,u+.2+8*.3,p.z),Ne=(()=>{let P=new bt(.32,1.15,16,12),X=P.attributes.position;for(let ee=0;ee<X.count;ee++){let le=X.getX(ee),_=X.getY(ee),C=Math.exp(-((_+.12)**2)*18);X.setXYZ(ee,le*(1-C*.45)+C*.05,_,Math.sin((le+.16)*58)*(.02+C*.015)+.02)}return P.computeVertexNormals(),P})(),tt=(P,X,ee)=>{let le=ee==="front"?0:Math.PI/2,_=(B,J,ne)=>ee==="front"?[P+B,X+J,a/2+ne]:[r/2+ne,X+J,P-B],C=(B,J,ne,ue,Te,Ce,ke,Qe,Ge=0)=>{let[dt,wt,Tt]=_(Te,Ce,ke);B.add(new Ie(J,ne,ue),{m:L(dt,wt,Tt,0,le,0),color:Qe,tip:()=>Ge})},m=R(.55);C(b,1.32,.09,.4,0,.53,0,m),C(b,1.32,.09,.4,0,-.53,0,m),C(b,.09,1.1,.4,-.62,0,0,m),C(b,.09,1.1,.4,.62,0,0,m),C(b,.05,1,.06,0,0,0,m),C(b,1.2,.05,.06,0,0,0,m),C(b,1.45,.06,.3,0,-.6,.2,m,1),[-1,1].forEach(B=>C(b,.55,1.05,.04,B*.98,0,.27,J=>{let ne=.42+A(J.x*9,J.y*2,J.z*9)*.1,ue=Math.abs((J.y+5)%.14-.07)<.012?.75:1;return[ne*.9*ue,ne*.95*ue,ne*.92*ue]}));let[T,k,z]=_(0,0,0);S.add(new bt(1.2,1),{m:L(T,k,z,0,le,0),color:V(1,1,1)}),S.add(new bt(1.2,1),{m:L(T,k,z,0,le+Math.PI,0),color:V(1,1,1)}),[-1,1].forEach(B=>{let[J,ne,ue]=_(B*.78,.02,-.24),Te=W(Ce=>{let ke=.8+A(Ce.x*30,Ce.y*4,Ce.z*30)*.06;return[ke,ke*.95,ke*.85]});[!1,!0].forEach(Ce=>w.add(Ne,{m:L(J,ne,ue,0,le+Math.PI,0),color:Te,flip:Ce}))}),C(w,1.9,.03,.03,0,.62,-.24,V(.3,.25,.2))};tt(1.35,1.45,"front"),tt(.3,1.45,"right"),[[f-.05,.08],[h+.05,.08]].forEach(([P,X])=>b.add(new Ie(X,g,.42),{m:L(P,g/2,a/2),color:R(.55),tip:()=>0})),b.add(new Ie(h-f+.3,.12,.44),{m:L((f+h)/2,g+.05,a/2),color:R(.55),tip:()=>1});for(let P=0;P<11;P++){let X=-3.25+P*.6+.3;b.add(new Ie(.57,.08,2.2),{m:L(X,.16,a/2+1.25,0,(A(P,2,2)-.5)*.01,0),color:R(.52+P%3*.04),tip:()=>1})}b.add(new Ie(6.65,.14,.08),{m:L(.05,.1,a/2+2.36),color:R(.45),tip:()=>0});for(let P=-3.28;P<3.38;P+=.12)b.add(new Ie(.1,1.3,.03),{m:L(P+.05,-.55,a/2+2.38),color:R(.36+P*37%3*.01),tip:()=>0});[-3.3,3.4].forEach(P=>{for(let X=a/2+.2;X<a/2+2.38;X+=.12)b.add(new Ie(.03,1.3,.1),{m:L(P,-.55,X+.05),color:R(.36),tip:()=>0})}),b.add(new Ie(1.4,.07,.3),{m:L((f+h)/2,.05,a/2+2.55),color:R(.5),tip:()=>1});let Re=-3.4,Ze=.6;b.add(new Ie(Ze-Re,.08,2.55,4,1,4),{m:L((Re+Ze)/2,2.32,a/2+1.3,-.12,0,0),color:(P,X)=>{let ee=(X.y<0?.62:.32)+A(P.x*3,0,P.z*9)*.1;return X.y<0?[ee,ee*.8,ee*.6]:[ee,ee*.93,ee*.88]},tip:(P,X)=>X.y>0?1:0}),[Re+.25,Ze-.25].forEach(P=>{b.add(new Ie(.14,2.2,.14),{m:L(P,1.1,a/2+2.2),color:R(.5),tip:()=>0}),b.add(new Ie(.08,.7,.08),{m:L(P,1.95,a/2+1.95,.75,0,0),color:R(.5),tip:()=>0})}),b.add(new Ie(Ze-Re,.14,.14),{m:L((Re+Ze)/2,2.12,a/2+2.2),color:R(.45),tip:()=>1}),b.add(new Ie(1.4,.06,.4),{m:L(1.45,.47,a/2+.48),color:R(.55),tip:()=>1}),[[.85],[2.05]].forEach(([P])=>b.add(new Ie(.06,.3,.36),{m:L(P,.32,a/2+.48),color:R(.45),tip:()=>0})),b.add(new Ie(.04,.04,.3),{m:L(-.5,2,a/2+.3),color:O(.15,.15,.15),tip:()=>0}),b.add(new Ie(.2,.04,.2),{m:L(-.5,1.98,a/2+.42),color:O(.15,.15,.15),tip:()=>1}),y.add(new Ie(.15,.22,.15),{m:L(-.5,1.84,a/2+.42),color:V(1,1,1)}),b.add(new Ue(.32,.29,.85,14),{m:L(r/2+.55,.42,a/2-.45),color:P=>{let X=.45+Math.sin(Math.atan2(P.z,P.x)*14)*.03;return[X,X*.8,X*.6]},tip:(P,X)=>X.y>.5?1:0}),[.12,.72].forEach(P=>b.add(new Ue(.33,.33,.04,14,1,!0),{m:L(r/2+.55,P,a/2-.45),color:O(.2,.2,.21),tip:()=>0}));for(let P=0;P<4;P++)for(let X=0;X<9-P;X++){let ee=-1.6+X*.19+P*.09,le=.11+P*.18;b.add(new Ue(.09+A(X,P,1)*.03,.1,.7,7),{m:L(-r/2-.58,le,ee,0,0,Math.PI/2),color:(_,C)=>Math.abs(C.x)>.9?[.74,.6,.42]:R(.45)(_),tip:()=>1})}b.add(new Ue(.3,.34,.5,10),{m:L(-r/2-1.4,.25,1.4),color:(P,X)=>X.y>.5?[.7,.58,.42]:R(.45)(P),tip:(P,X)=>X.y>.5?1:0}),b.add(new Ue(.025,.03,.75,6),{m:L(-r/2-1.3,.75,1.4,0,0,-.55),color:R(.62),tip:()=>0}),b.add(new Ie(.2,.12,.03),{m:L(-r/2-1.48,.52,1.4,0,0,-.55),color:O(.35,.36,.38),tip:()=>0});for(let P=0;P<x/.5;P++)b.add(new Ie(1.8,.08,.44),{m:L(-1.3+(P*7%5-2)*.01,.2-P*.012,M+P*.5,0,(P*3%5-2)*.012,0),color:R(.5+P*11%9/60),tip:()=>1});for(let P=0;P<=x/2.2;P++)[-1,1].forEach(X=>{b.add(new Ue(.09,.09,2.6,6),{m:L(-1.3+X*.85,-1.1-P*.03,M+P*2.2),color:R(.36),tip:()=>0})});[-1,1].forEach(P=>{b.add(new Ue(.06,.06,1.3,6),{m:L(-1.3+P*.85,.85,M+x-.4),color:R(.36),tip:()=>0}),y.add(new Ie(.16,.2,.16),{m:L(-1.3+P*.85,1.6,M+x-.4),color:V(1,1,1)})});for(let P=0;P<l-1;P++){let X=o+P*c+c/2;[["front",a/2],["back",-a/2]].forEach(([ee,le])=>Y(-r/2+.05,r/2-.05,X,q[ee]).forEach(([_,C])=>{b.add(new Ie(C-_,.035,.02),{m:L((_+C)/2,X,le+Math.sign(le)*(o-.03)),color:m=>{let T=.72+A(m.x*9,m.y*30,0)*.12;return[T,T*.95,T*.86]},tip:()=>1})})),[["left",-r/2],["right",r/2]].forEach(([ee,le])=>Y(-a/2+.05,a/2-.05,X+c/2,q[ee]).forEach(([_,C])=>{b.add(new Ie(.02,.035,C-_),{m:L(le+Math.sign(le)*(o-.03),X+c/2,(_+C)/2),color:m=>{let T=.72+A(0,m.y*30,m.z*9)*.12;return[T,T*.95,T*.86]},tip:()=>1})}))}[-1,1].forEach(P=>b.add(new Ue(.06,.06,a+1.3,8,1,!0,0,Math.PI),{m:L(P*(de+.06),u+d-Q-.14,0,Math.PI/2,0,P>0?Math.PI:0),color:O(.4,.4,.42),tip:()=>0})),b.add(new Ue(.035,.035,u+d-Q-.2,8),{m:L(r/2+.6,(u+d-Q)/2+.4,a/2-.45-.05),color:O(.4,.4,.42),tip:()=>0}),b.add(new Ue(.015,.02,.7,6),{m:L(0,u+d+.5,-1.4),color:O(.18,.18,.19),tip:()=>0}),b.add(new Ie(.02,.02,.5),{m:L(0,u+d+.62,-1.4),color:O(.18,.18,.19),tip:()=>0}),b.add(new cn(.05,.1,4),{m:L(0,u+d+.62,-1.15,Math.PI/2,0,0),color:O(.18,.18,.19),tip:()=>0});{let P=(X,ee,le,_,C=1,m=1,T=1,k=0)=>b.add(X,{m:L(0,u+d+.88+le,-1.4+_,0,Math.PI/2,k,C,m,T),color:O(.16,.16,.17),tip:()=>0});P(new Ie(.28,.13,.02),0,0,0),P(new Ie(.11,.1,.02),0,.11,-.13),[-1,1].forEach(X=>P(new cn(.03,.06,3),0,.19,-.13+X*.035)),P(new Ie(.03,.2,.02),0,.12,.16,1,1,1,.4)}let re=(P,X,ee)=>{let le=new Ye().compose(new D(P,.82,X),new ot().setFromAxisAngle(new D(0,1,0),ee),new D(1,1,1));b.add(new Ie(1.3,.2,.24),{m:le.clone().multiply(L(0,0,.12)),color:R(.45),tip:()=>0}),b.add(new Ie(1.24,.02,.2),{m:le.clone().multiply(L(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let _=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let C=0;C<9;C++){let m=-.55+C*.14,T=.1+A(C,P,1)*.1;b.add(new Ue(.006,.006,T,4),{m:le.clone().multiply(L(m,.1+T/2,.12+(C%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),b.add(new Ot(.03,6,5),{m:le.clone().multiply(L(m,.1+T,.12+(C%2-.5)*.08)),color:()=>_[C%4],tip:()=>0})}};re(1.35,a/2+.2,0),re(r/2+.2,-.3,Math.PI/2),b.add(new Ie(1,.015,.6),{m:L((f+h)/2,.205,a/2+.55),color:W(P=>Math.floor((P.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),b.add(new Ue(.015,.015,1.2,6),{m:L(f-.3,.8,a/2+.25,.08,0,.12),color:R(.6),tip:()=>0}),b.add(new cn(.12,.3,8),{m:L(f-.24,.32,a/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([P,X],ee)=>{b.add(new Ie(.48,.32,.4),{m:L(P,.36+X,a/2+1.9,0,ee*.3,0),color:le=>{let _=.55+(Math.abs((le.y+9)*9%1-.5)<.1?-.1:0)+A(le.x*9,le.y,le.z*9)*.08;return[_,_*.84,_*.62]},tip:(le,_)=>_.y>.5?1:0})}),b.add(new Ue(.05,.06,1.7,8),{m:L(Ze+.6,.85,a/2+2.9),color:R(.4),tip:()=>0}),b.add(new Ie(.2,.05,.2),{m:L(Ze+.6,1.72,a/2+2.9),color:O(.15,.15,.15),tip:()=>1}),y.add(new Ie(.15,.2,.15),{m:L(Ze+.6,1.84,a/2+2.9),color:()=>[1,1,1]}),b.add(new cn(.15,.12,4),{m:L(Ze+.6,2,a/2+2.9,0,Math.PI/4,0),color:O(.15,.15,.15),tip:()=>1});for(let P=0;P<6;P++){let X=(f+h)/2-1.6-P*.65+Math.sin(P*1.7)*.2,ee=a/2+2.9+P*.35;b.add(new Ue(.28+A(P,3,3)*.1,.3,.06,9),{m:L(X,0,ee,0,P,0,1,1,.8),color:N,tip:()=>1})}let pe=r/2-o,Ee=a/2-o;for(let P=-pe,X=0;P<pe-.01;P+=.2,X++){let ee=Qt("wood",C=>{let m=(.5+X%4*.025)*(.92+A(C.x*4,0,C.z*1.2)*.16)*(Math.abs((C.z+9+X*.37)%1.6-.8)<.01?.7:1);return[m,m*.8,m*.6]}),le=P+.1;(le>Je.x0&&le<Je.x1?[[-Ee-.05,Je.bottom],[Je.top,Ee+.05]]:[[-Ee-.05,Ee+.05]]).forEach(([C,m])=>{m-C>.02&&w.add(new Ie(.195,.06,m-C),{m:L(le,.09,(C+m)/2),color:ee})})}for(let P=Je.bottom;P<=1.5;P+=.55)w.add(new Ie(.05,.9,.05),{m:L(Je.x0-.02,.57,P),color:R(.5)});w.add(new Ie(.07,.06,1.5-Je.bottom+.05),{m:L(Je.x0-.02,1.04,(Je.bottom+1.5)/2),color:R(.55)}),w.add(new Ie(Je.x1-Je.x0+.05,.06,.07),{m:L((Je.x0+Je.x1)/2,1.04,Je.bottom-.02),color:R(.55)}),[Je.x0+.5,Je.x1-.03].forEach(P=>w.add(new Ie(.05,.9,.05),{m:L(P,.57,Je.bottom-.02),color:R(.5)})),w.add(new Ie(.03,.16,.36),{m:L(Je.x0-.05,.86,1.5),color:R(.62)}),w.add(new Ue(.17,.17,.04,24),{m:L(-.4,1.8,Ee-.03,Math.PI/2,0,0),color:R(.45)}),w.add(new Ue(.14,.14,.01,24),{m:L(-.4,1.8,Ee-.055,Math.PI/2,0,0),color:Qt("paper",()=>[.9,.87,.8])}),w.add(new Ie(.008,.1,.006),{m:L(-.4,1.83,Ee-.065,0,0,.5),color:()=>[.1,.1,.1]}),w.add(new Ie(.008,.12,.006),{m:L(-.4,1.84,Ee-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),w.add(new Ue(.015,.015,1.5,6),{m:L(p.x,1.62,-Ee+.62,0,0,Math.PI/2),color:O(.2,.2,.2)}),[-.5,-.1,.35].forEach((P,X)=>{w.add(new Ue(.1-X*.015,.08-X*.012,.13,12),{m:L(p.x+P,1.42,-Ee+.64),color:O(.62,.36,.22)}),w.add(new Ue(.008,.008,.14,4),{m:L(p.x+P,1.55,-Ee+.64),color:O(.2,.2,.2)})}),w.add(new Ot(.12,12,8),{m:L(p.x-.7,.31,-Ee+.75,0,0,0,1,.8,1),color:O(.2,.2,.22)}),w.add(new Ue(.015,.03,.12,6),{m:L(p.x-.58,.36,-Ee+.75,0,0,-.9),color:O(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([P,X])=>w.add(new Ue(.025,.025,X,8),{m:L(p.x+P,1.52+X/2,-Ee+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([P,X])=>w.add(new Ie(.05,.22,.16),{m:L(p.x+P,1.63,-Ee+.4),color:()=>X})),[-1.1,1.1].forEach(P=>w.add(new Ie(r-.2,.2,.2),{m:L(0,u-.02,P),color:R(.42)})),w.add(new Ie(.2,.22,a+.2),{m:L(0,u+d-.2,0),color:R(.42)}),[-1,1].forEach(P=>[-1.8,0,1.8].forEach(X=>w.add(new Ie(xe-.6,.14,.1),{m:L(P*(de-.3)/2,u+d-Q*.47-.1,X,0,0,-P*te),color:R(.4)})));let ze=p;w.add(new Ie(1.95,.12,1),{m:L(ze.x,.17,-Ee+.5),color:N}),[-1,1].forEach(P=>w.add(new Ie(.36,1.25,.7),{m:L(ze.x+P*.76,.85,-Ee+.35),color:N})),w.add(new Ie(1.2,1.25,.2),{m:L(ze.x,.85,-Ee+.1),color:P=>{let X=N(P);return[X[0]*.45,X[1]*.42,X[2]*.4]}}),w.add(new Ie(2,.16,.42),{m:L(ze.x,1.44,-Ee+.4),color:R(.42)});for(let P=0;P<4;P++)w.add(new Ie(1.3-P*.04,.3,.55),{m:L(ze.x,1.67+P*.3,-Ee+.27),color:N});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([P,X])=>w.add(new Ue(.07,.08,.7,7),{m:L(ze.x+P*.4,.3,-Ee+.42,0,X,Math.PI/2),color:(ee,le)=>Math.abs(le.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),y.add(new Ie(.9,.05,.45),{m:L(ze.x,.25,-Ee+.42),color:V(1,.62,.3)}),w.add(new Ue(.28,.24,.32,10,1,!0),{m:L(ze.x-1.25,.28,-Ee+.35),color:R(.5)});for(let P=0;P<5;P++)w.add(new Ue(.05,.05,.55,6),{m:L(ze.x-1.25+(P-2)*.08,.42+P%2*.04,-Ee+.35,.2*(P-2),0,Math.PI/2+.1),color:R(.5)});let Be=[],at=11,yt=()=>(at=at*16807%2147483647,at/2147483647),st=(P,X,ee,le,_,C=!1)=>{let m=document.createElement("canvas");m.width=P,m.height=X,ee(m.getContext("2d"),P,X);let T=new li(m);T.colorSpace=hn,T.anisotropy=8;let k=new $e(le,new _n({map:T,color:12432296,alphaTest:C?.5:0}));return k.applyMatrix4(_),k.receiveShadow=!0,Be.push(k),k},ct=(P,X,ee,le=.05)=>{for(let _=0;_<X*ee*le;_++)P.fillStyle=yt()<.5?"rgba(0,0,0,0.12)":"rgba(255,245,225,0.09)",P.fillRect(yt()*X,yt()*ee,1.5,1.5)},Ft=P=>(X,ee,le)=>{X.clearRect(0,0,ee,le);let _=16,C=(le/2-2)/_;for(let m=0;m<_;m++){let T=ee/2-2-m*C,k=le/2-2-m*C;X.fillStyle=P[(m*5+m%3)%P.length],X.beginPath(),X.ellipse(ee/2,le/2,Math.max(T,1),Math.max(k,1),0,0,F),X.fill(),X.strokeStyle="rgba(0,0,0,0.22)",X.lineWidth=1.2;let z=Math.PI*(T+k),B=Math.floor(z/7);for(let J=0;J<B;J++){let ne=J/B*F,ue=ee/2+Math.cos(ne)*(T-C/2),Te=le/2+Math.sin(ne)*(k-C/2),Ce=(m%2?1:-1)*C*.35;X.beginPath(),X.moveTo(ue-Math.sin(ne)*Ce-Math.cos(ne)*C*.4,Te+Math.cos(ne)*Ce-Math.sin(ne)*C*.4),X.lineTo(ue+Math.sin(ne)*Ce+Math.cos(ne)*C*.4,Te-Math.cos(ne)*Ce+Math.sin(ne)*C*.4),X.stroke()}}X.globalCompositeOperation="source-atop",ct(X,ee,le,.03),X.globalCompositeOperation="source-over"},lt=(P,X,ee)=>{P.clearRect(0,0,X,ee);let le=14,_=["#7d3b2e","#c7b48c","#3e5363","#a5622f","#e0d4b6","#5b6b4b"];for(let C=2;C<ee-2;C+=4)P.fillStyle="#ddd2b8",P.fillRect(0,C,le+1,2),P.fillRect(X-le-1,C,le+1,2);for(let C=le,m=0;C<X-le;m++){let T=6+Math.floor(yt()*14);P.fillStyle=_[m%_.length],P.fillRect(C,0,Math.min(T,X-le-C),ee),C+=T}for(let C=0;C<ee;C+=3)P.fillStyle="rgba(0,0,0,0.1)",P.fillRect(le,C,X-2*le,1);ct(P,X,ee,.04)},Mt=(P,X,ee)=>{let le=["#8b2f2a","#c9b98e","#3f566a","#6d7f52","#b36a35","#e6dcc4","#5a3d52","#a44b3e"],m=X/10,T=ee/7;for(let k=0;k<10;k++)for(let z=0;z<7;z++)if(P.fillStyle=le[Math.floor(yt()*le.length)],P.fillRect(k*m,z*T,m,T),yt()<.5&&(P.fillStyle=le[Math.floor(yt()*le.length)],P.beginPath(),P.moveTo(k*m,z*T),P.lineTo(k*m+m,z*T+T),P.lineTo(k*m,z*T+T),P.fill()),yt()<.3){P.fillStyle="rgba(255,255,255,0.18)";for(let B=0;B<6;B++)P.fillRect(k*m+yt()*m,z*T+yt()*T,3,3)}P.strokeStyle="rgba(250,240,220,0.55)",P.setLineDash([4,4]),P.lineWidth=1.2;for(let k=0;k<=10;k++)P.beginPath(),P.moveTo(k*m+3,0),P.lineTo(k*m+3,ee),P.stroke();for(let k=0;k<=7;k++)P.beginPath(),P.moveTo(0,k*T+3),P.lineTo(X,k*T+3),P.stroke();P.setLineDash([]),ct(P,X,ee,.02)},kt=(P,X,ee,le=0)=>new Ye().compose(new D(P,X,ee),new ot().setFromEuler(new un(-Math.PI/2,le,0,"YXZ")),new D(1,1,1));st(768,512,Ft(["#7a3a2c","#b78d5c","#4a5a66","#d8c8a4","#8a5a3a","#5d6a4c","#9e4632"]),new bt(2.4,1.6),kt(.55,.124,.5),!0),st(512,320,lt,new bt(1,.62),kt(-1.95,.124,-.85),!0),st(512,256,lt,new bt(.9,.45),kt((f+h)/2,.124,Ee-.45),!0);let Ht=-pe+.02,xt=Ht+1.95,ie=-Ee+.02,U=ie+1,Se=(Ht+xt)/2,ye=(ie+U)/2,I=P=>en([[.045,0],[.045,.1],[.032,.13],[.03,P*.4],[.048,P*.47],[.032,P*.55],[.028,P-.12],[.042,P-.08],[.02,P-.05],[.032,P-.02],[0,P]],10);[[Ht+.05,ie+.05,1.05],[Ht+.05,U-.05,1.05],[xt-.05,ie+.05,.72],[xt-.05,U-.05,.72]].forEach(([P,X,ee])=>w.add(I(ee),{m:L(P,.12,X),color:R(.45)})),[[Ht+.05,.95,.3],[xt-.05,.68,.18]].forEach(([P,X,ee])=>{w.add(Le(.06,.08,U-ie-.1,.02,1),{m:L(P,X,ye),color:R(.5)}),w.add(Le(.05,.06,U-ie-.1,.015,1),{m:L(P,X-ee,ye),color:R(.5)});for(let le=ie+.16;le<U-.1;le+=.11)w.add(new Ue(.012,.012,ee,6),{m:L(P,X-ee/2,le),color:R(.48)})}),[ie+.05,U-.05].forEach(P=>w.add(Le(xt-Ht-.1,.14,.05,.015,1),{m:L(Se,.36,P),color:R(.45)})),w.add(G(xt-Ht-.1,.04,U-ie-.1),{m:L(Se,.33,ye),color:R(.4)}),w.add(Le(xt-Ht-.12,.17,U-ie-.08,.06,2),{m:L(Se,.48,ye),color:V(.88,.86,.8,"fabric")}),st(512,360,Mt,Le(1.4,.035,U-ie+.06,.015,1),L(xt-.75,.585,ye+.02)),st(512,120,Mt,Le(1.4,.26,.025,.01,1),L(xt-.75,.46,U+.03)),w.add(Le(.4,.06,U-ie-.06,.025,2),{m:L(xt-.24,.62,ye),color:W(P=>Math.sin(P.z*60)>.5?[.32,.2,.18]:[.5,.24,.2])}),[[ye-.22,.1],[ye+.2,-.12]].forEach(([P,X])=>w.add(Le(.34,.12,.42,.06,2),{m:L(Ht+.3,.63,P,0,X,.25),color:V(.93,.91,.87,"fabric")}));{let P=xt+.45,X=ie+.25;w.add(Le(.7,.36,.42,.02,1),{m:L(P,.31,X),color:R(.5)}),w.add(new Ue(.21,.21,.7,16,1,!1,-Math.PI/2,Math.PI),{m:L(P,.49,X,0,0,Math.PI/2,1,1,.45),color:R(.52)}),[-.24,0,.24].forEach(ee=>w.add(new Ue(.215,.215,.035,16,1,!0,-Math.PI/2,Math.PI),{m:L(P+ee,.49,X,0,0,Math.PI/2,1,1,.46),color:O(.2,.2,.21)})),[-.24,0,.24].forEach(ee=>w.add(G(.035,.36,.43),{m:L(P+ee,.31,X),color:O(.2,.2,.21)})),w.add(Le(.1,.12,.02,.01,1),{m:L(P,.44,X+.22),color:O(.55,.45,.25)}),[-1,1].forEach(ee=>w.add(new An(.04,.008,4,10,Math.PI),{m:L(P+ee*.36,.38,X,0,Math.PI/2,Math.PI),color:O(.2,.2,.21)}))}let v={x:.9,z:.6};w.add(Le(1.3,.055,.85,.02,2),{m:L(v.x,.885,v.z),color:R(.55)}),w.add(Le(1.12,.09,.68,.01,1),{m:L(v.x,.81,v.z),color:R(.46)});let j=en([[.03,0],[.036,.04],[.026,.12],[.04,.3],[.03,.48],[.036,.56],[.034,.64],[.034,.7]],8);[[-.56,-.34],[.56,-.34],[-.56,.34],[.56,.34]].forEach(([P,X])=>w.add(j,{m:L(v.x+P,.12,v.z+X),color:R(.45)}));let Z=en([[.016,0],[.02,.05],[.015,.16],[.022,.28],[.018,.4],[.02,.44]],6);[-1,1].forEach(P=>{let X=new Ye().compose(new D(v.x,.12,v.z+P*.68),new ot().setFromAxisAngle(new D(0,1,0),P<0?0:Math.PI),new D(1,1,1)),ee=(le,_,C)=>w.add(le,{m:X.clone().multiply(_),color:C});ee(Le(.44,.045,.42,.02,2),L(0,.46,0),R(.52)),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(([le,_])=>ee(Z,L(le*1.08,0,_*1.08,_*.4,0,-le*.4),R(.45))),ee(new Ue(.01,.01,.36,6),L(0,.16,0,0,0,Math.PI/2),R(.45));for(let le=-2;le<=2;le++){let _=le*.075,C=.31-Math.sqrt(.25-_*_);ee(new Ue(.009,.011,.5,6),L(_,.73,C-.01,-.08,0,0),R(.5))}ee(new An(.5,.022,6,16,.9),L(0,.98,.31-.02,-Math.PI/2,0,Math.PI/2-.45),R(.52))}),w.add(en([[0,0],[.07,0],[.075,.02],[.05,.05],[.055,.09],[.03,.1]],12),{m:L(v.x+.35,.91,v.z-.15),color:O(.6,.47,.25)}),S.add(en([[.03,0],[.06,.06],[.065,.12],[.035,.22],[.03,.28]],12),{m:L(v.x+.35,1.01,v.z-.15),color:V(1,1,1)}),y.add(new Ot(.018,8,6),{m:L(v.x+.35,1.07,v.z-.15,0,0,0,1,2,1),color:V(1,1,1)}),w.add(en([[.04,0],[.045,.01],[.042,.1],[.046,.105]],12),{m:L(v.x-.3,.91,v.z+.2),color:V(.75,.73,.7,"paper")}),w.add(new An(.025,.007,5,10),{m:L(v.x-.25,.965,v.z+.2,0,0,Math.PI/2),color:V(.75,.73,.7,"paper")}),w.add(Le(.22,.04,.3,.008,1),{m:L(v.x-.25,.93,v.z-.2,0,.3,0),color:V(.3,.36,.42,"leather")}),w.add(en([[0,0],[.08,0],[.14,.04],[.165,.075],[.155,.08]],16),{m:L(v.x+.05,.91,v.z+.15),color:R(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([P,X],ee)=>w.add(new Ot(.055,10,7),{m:L(v.x+.05+P,.99+(ee===3?.04:0),v.z+.15+X),color:V(.66,.66,.65)}));{let P=new Ye().compose(new D(.05,.12,-1),new ot().setFromAxisAngle(new D(0,1,0),2.12),new D(1,1,1)),X=(ee,le,_)=>w.add(ee,{m:P.clone().multiply(le),color:_});[-1,1].forEach(ee=>{let le=[];for(let _=-.36;_<=.361;_+=.06)le.push(new D(ee*.22,.03+.75-Math.sqrt(.5625-_*_),_));X(new Fi(new Rr(le),16,.02,5),L(),R(.42)),X(new Ue(.018,.02,.4,6),L(ee*.22,.2,.18),R(.45)),X(new Ue(.018,.02,.95,6),L(ee*.22,.5,-.2,-.18,0,0),R(.45)),X(Le(.05,.03,.5,.012,1),L(ee*.25,.62,0),R(.52))}),X(Le(.48,.045,.44,.02,2),L(0,.4,0),R(.5)),X(Le(.42,.05,.4,.025,2),L(0,.44,.01),W(()=>[.5,.24,.2]));for(let ee=0;ee<4;ee++)X(Le(.4,.07,.015,.006,1),L(0,.58+ee*.12,-.25-ee*.02,-.18,0,0),R(.5));X(Le(.36,.34,.03,.015,1),L(.03,.82,-.3,-.18,0,.05),W(ee=>Math.sin(ee.y*90)>0?[.66,.6,.48]:[.58,.52,.4])),X(Le(.38,.05,.08,.02,1),L(.03,1,-.33,0,0,.05),W(()=>[.62,.56,.44]))}{let P=new Ye().compose(new D(-pe,.12,-.45),new ot().setFromAxisAngle(new D(0,1,0),Math.PI/2),new D(1,1,1)),X=(ee,le,_,C=w)=>C.add(ee,{m:P.clone().multiply(le),color:_});X(Le(1.5,.74,.52,.012,1),L(0,.45,.27),R(.46)),X(G(1.46,.08,.46),L(0,.04,.24),R(.3)),[-.49,0,.49].forEach((ee,le)=>{X(Le(.45,.6,.03,.008,1),L(ee,.46,.54),R(.52)),X(Le(.31,.44,.02,.015,1),L(ee,.46,.56),R(.44)),X(new Ot(.016,8,6),L(ee+(le===1?0:ee<0?.17:-.17),.62,.575),O(.2,.2,.21))}),X(Le(1.56,.06,.6,.015,2),L(0,.85,.3),Qt("wood",ee=>{let le=.58+(Math.abs(ee.x*12.5%1)<.06?-.08:0)+A(ee.x*9,ee.y,ee.z*3)*.08;return[le*1.04,le*.8,le*.56]})),X(en([[0,-.13],[.12,-.12],[.19,-.06],[.21,0],[.225,.01]],18),L(-.35,.99,.3),V(.9,.9,.86,"metal")),X(new An(.222,.01,5,24),L(-.35,1,.3,Math.PI/2,0,0),V(.15,.2,.36,"metal")),X(new Ue(.045,.05,.42,10),L(-.35,1.08,.06),O(.16,.16,.17)),X(new Ue(.02,.025,.2,8),L(-.35,1.22,.16,Math.PI/2-.3,0,0),O(.16,.16,.17)),X(new Ue(.012,.012,.42,6),L(-.35,1.38,0,.9,0,0),O(.16,.16,.17)),X(Le(.42,.03,.28,.01,1),L(.35,.895,.32,0,.15,0),R(.62)),X(Le(.28,.12,.14,.06,2),L(.33,.97,.32,0,.1,0),Qt("plain",ee=>ee.y>.99?[.62,.38,.18]:[.75,.55,.3])),X(Le(.2,.01,.03,.004,1),L(.55,.915,.42,0,-.3,0),O(.7,.7,.72)),X(Le(.9,.03,.16,.008,1),L(.1,1.52,.08),R(.48)),X(Le(.9,.025,.02,.006,1),L(.1,1.6,.15),R(.48)),[-.22,.02,.26].forEach((ee,le)=>X(new Ue(.12,.12,.015,20),L(ee,1.66,.06,Math.PI/2-.15,0,0),le===1?V(.82,.84,.86,"metal"):V(.86,.84,.78,"plaster"))),[.42,.52].forEach(ee=>X(en([[0,0],[.035,0],[.04,.09],[.042,.095]],10),L(ee,1.535,.08),V(.3,.4,.5,"plaster"))),X(new Ue(.015,.015,1.4,6),L(0,2.05,.25,0,0,Math.PI/2),R(.4)),[-.55,-.3,-.05,.2,.45].forEach((ee,le)=>{X(new Ue(.002,.002,.14,3),L(ee,1.97,.25),V(.5,.45,.35)),X(new cn(.06+le%2*.02,.26,7),L(ee,1.78,.25,Math.PI,le,0),le%3===0?V(.42,.46,.28,"fabric"):le%3===1?V(.55,.5,.32,"fabric"):V(.5,.36,.42,"fabric"))})}[1.35,1.75].forEach(P=>{w.add(new Ie(.26,.04,1.3),{m:L(-pe+.14,P,.9),color:R(.5)}),w.add(new Ie(.04,.16,.04),{m:L(-pe+.04,P-.1,.35),color:R(.4)}),w.add(new Ie(.04,.16,.04),{m:L(-pe+.04,P-.1,1.45),color:R(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([P,X,ee,le])=>{w.add(new Ue(X,X,ee,10),{m:L(-pe+.14,1.37+ee/2,P),color:V(...le)}),w.add(new Ue(X*.8,X*.8,.03,10),{m:L(-pe+.14,1.38+ee,P),color:V(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([P,X,ee],le)=>{w.add(new Ie(.18,X,.05),{m:L(-pe+.14,1.77+X/2,P,le===4?.25:0,0,0),color:V(...ee)})}),w.add(new Ue(.015,.015,.12,5),{m:L(-2.6,1.7,Ee-.06,Math.PI/2,0,0),color:R(.4)}),w.add(new Ie(.42,.85,.12),{m:L(-2.6,1.25,Ee-.1),color:W(P=>{let X=.32+A(P.x*9,P.y*9,0)*.04;return[X*.85,X,X*.9]})}),[-2.7,-2.48].forEach(P=>{w.add(new Ie(.11,.26,.13),{m:L(P,.25,Ee-.2),color:V(.2,.16,.13)}),w.add(new Ie(.11,.07,.26),{m:L(P,.155,Ee-.26),color:V(.2,.16,.13)})}),w.add(new Ie(.5,.38,.03),{m:L(-.25,1.6,-Ee+.02),color:R(.4)}),w.add(new bt(.4,.28),{m:L(-.25,1.6,-Ee+.04),color:P=>P.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let oe=new zt,he=h-f-.04;for(let P=0;P<5;P++)oe.add(new Ie(he/5-.008,g-.04,.06),{m:L(.02+he/10+P*he/5,(g-.04)/2,0),color:R(.5+P%2*.04),tip:()=>0});[.35,g-.4].forEach(P=>oe.add(new Ie(he-.1,.12,.04),{m:L(.02+he/2,P,-.05),color:R(.46),tip:()=>0})),oe.add(new Ie(.1,Math.hypot(he-.2,g-.95),.04),{m:L(.02+he/2,g/2-.02,-.05,0,0,Math.atan2(he-.2,g-.95)),color:R(.46),tip:()=>0}),[.06,-.08].forEach(P=>oe.add(new Ue(.02,.02,.14,6),{m:L(he-.1,1,P),color:O(.18,.18,.19),tip:()=>0})),[.3,g-.3].forEach(P=>oe.add(new Ie(.4,.05,.075),{m:L(.22,P,0),color:O(.18,.18,.19),tip:()=>0}));let me=new zt;me.add(new Ot(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:L(0,0,0,0,0,0,1.25,.42,.5),color:P=>P.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),me.add(new Ie(.16,.05,.9),{m:L(.1,-.08,0),color:V(.5,.4,.3),tip:()=>1}),me.add(new Ie(.16,.05,.75),{m:L(-.6,-.08,0),color:V(.5,.4,.3),tip:()=>1}),me.add(new Ue(.025,.025,2.2,5),{m:L(.2,0,.1,0,.3,1.45),color:V(.55,.45,.32),tip:()=>0});let $={value:1},ae=xn({...e,uFrost:{value:0}},$,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),ve=xn({...e,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},$,{color:14865600,grain:.018,rich:!0,indoor:!0}),fe=xn({...e,uFrost:{value:0}},$,{color:13812656,snowMask:!0,side:an,rich:!0,grain:.02}),ge=new $t({color:1315860}),be=new $t({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),_e=new rn;_e.position.set(ft.x,ft.y,ft.z),_e.rotation.y=ft.yaw,_e.scale.setScalar(i);let Ae=new $e(b.geometry(),ae);Ae.castShadow=!0,Ae.receiveShadow=!0;let He=new $e(w.geometry(),ve);He.receiveShadow=!0,He.castShadow=!0;let K=new $e(y.geometry(),ge),Fe=new $e(S.geometry(),be);Fe.renderOrder=2;let ce=new $e(oe.geometry(),ae);ce.castShadow=!0;let Pe=new rn;Pe.position.set(f+.02,.1,a/2),Pe.add(ce);let De=new $e(me.geometry(),fe);De.castShadow=!0,De.position.set(.9,0,M+x-2.5),De.rotation.y=.12;let we=new $t({color:16752704,transparent:!0,opacity:.85,blending:ni,depthWrite:!1}),et=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([P,X])=>{let ee=new $e(new cn(.09,1,7,1,!0).translate(0,.5,0),we);return ee.position.set(p.x+P,.3,-Ee+.42),ee.userData.h=X,_e.add(ee),ee});_e.add(Ae,He,K,Fe,Pe,De),Be.forEach(P=>_e.add(P)),s.add(_e),_e.updateMatrixWorld(!0);let Ke=Lf({group:_e,mats:{inn:ve,glow:ge},camera:n,U:t}),nt=new Kn(16752728,0,46,1.4);nt.position.copy(new D(p.x,.9,-Ee+1.1)).applyAxisAngle(new D(0,1,0),ft.yaw).multiplyScalar(i).add(_e.position),s.add(nt),nt.castShadow=!0,nt.shadow.autoUpdate=!1,nt.shadow.mapSize.set(512,512),nt.shadow.camera.near=.5,nt.shadow.camera.far=46,nt.shadow.bias=-.003,nt.shadow.normalBias=.2,nt.shadow.camera.layers.set(5),nt.shadow.needsUpdate=!0,[Ae,He,ce].forEach(P=>P.layers.enable(5));let ht=(()=>{let P=Ke.glowSpots,X=Math.PI*2,ee=[{p:[p.x,.45,-Ee+.45],size:1.7,color:[1,.5,.2],flicker:1},{p:[.9+.35,1.07,.6-.15],size:.5,color:[1,.7,.4],flicker:1}];for(let _=0;_<8;_++){let C=_/8*X;ee.push({p:[P.CH.x+Math.cos(C)*.82,P.CH.y+.2,P.CH.z+Math.sin(C)*.82],size:.32,color:[1,.72,.4],flicker:1})}for(let _=0;_<6;_++){let C=_/6*X+.3;ee.push({p:[P.CH.x+Math.cos(C)*.42,P.CH.y+.6,P.CH.z+Math.sin(C)*.42],size:.3,color:[1,.72,.4],flicker:1})}ee.push({p:[-3.2,P.F+1.52,-.9],size:.9,color:[1,.78,.5]},{p:[.6,P.F+1.06,-7.98],size:.5,color:[.9,.95,.7]}),[-1,1].forEach(_=>ee.push({p:[-1.8+_*1.5,P.F+2.37,P.Z1-.19],size:.6,color:[1,.75,.45]})),[-5.35,-3,-.9,.9,3,5.35].forEach(_=>ee.push({p:[_,P.SLAB-.02,-8.55],size:.36,color:[1,.88,.7]})),[-6,-3.4,-.8,1.6].forEach(_=>[-5.45,2.7,5].forEach(C=>ee.push({p:[C,P.SLAB-.02,_],size:.36,color:[1,.88,.7]})));let le=(_,C)=>[_,C];return Ef({group:_e,U:t,beams:[{rect:[[-.95,P.F+2.62,P.Z0+.04],[.95,P.F+2.62,P.Z0+.04],[.95,P.F+.55,P.Z0+.04],[-.95,P.F+.55,P.Z0+.04]],dir:[.1,-.5,1],len:6.5,k:1.2},{rect:[[.75,1.95,a/2-.2],[1.95,1.95,a/2-.2],[1.95,.95,a/2-.2],[.75,.95,a/2-.2]],dir:[-.25,-.55,-1],len:3.2,k:1},{rect:[[r/2-.2,1.95,-.3],[r/2-.2,1.95,.9],[r/2-.2,.95,.9],[r/2-.2,.95,-.3]],dir:[-1,-.5,.15],len:3,k:.8}],halos:ee,dust:[{box:[-4.6,1.4,P.F+.3,P.C-.5,-9.2,2.2],n:520},{box:[-2.9,2.9,.3,2.5,-2.2,2.2],n:170}]})})(),tn=nt.position.clone(),Lt=(()=>{let X=new Rt,ee=new Float32Array(90*3),le=new Float32Array(90);for(let m=0;m<90;m++)le[m]=m/90;X.setAttribute("position",new Ut(ee,3)),X.setAttribute("aSeed",new Ut(le,1));let _=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0},uColor:{value:new Oe(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),C=new qn(X,_);return C.frustumCulled=!1,C.position.copy(_e.localToWorld(Me.clone())),s.add(C),C})(),jt=(P,X)=>{let ee=(P-ft.x)/i,le=(X-ft.z)/i,_=Math.cos(ft.yaw),C=Math.sin(ft.yaw);return[ee*_-le*C,ee*C+le*_]},Zn=(P,X)=>{let ee=Math.cos(ft.yaw),le=Math.sin(ft.yaw);return[ft.x+(P*ee+X*le)*i,ft.z+(-P*le+X*ee)*i]},Hn={x:-.48,z:M+x-1.6};Hn.y=.24-(Hn.z-M)*.024;let Fn=[[-r/2-.3,r/2+.3,-a/2-o,-a/2+o],[-r/2-o,-r/2+o,-a/2-.3,a/2+.3],[r/2-o,r/2+o,-a/2-.3,a/2+.3],[-r/2-.3,f,a/2-o,a/2+o],[h,r/2+.3,a/2-o,a/2+o],[Ht,xt,ie,U],[xt+.08,xt+.82,ie,ie+.5],[v.x-.65,v.x+.65,v.z-.43,v.z+.43],[v.x-.25,v.x+.25,v.z-.95,v.z-.45],[v.x-.25,v.x+.25,v.z+.45,v.z+.95],[ze.x-1,ze.x+1,-Ee-.1,-Ee+1],[ze.x-1.55,ze.x-.95,-Ee,-Ee+.65],[-pe,-pe+.3,.25,1.55],[-pe,-pe+.62,-1.22,.32],[-.3,.4,-1.4,-.65],[.8,2.15,a/2+.26,a/2+.7],[-r/2-.95,-r/2-.2,-1.75,0],[r/2+.2,r/2+.9,a/2-.8,a/2-.1],[-r/2-1.75,-r/2-1.05,1.05,1.75],[Re+.15,Re+.35,a/2+2.1,a/2+2.3],[Ze-.35,Ze-.15,a/2+2.1,a/2+2.3]];Fn.push([Je.x0-.07,Je.x0+.02,Je.bottom-.05,1.5],[Je.x0,Je.x1,Je.bottom-.09,Je.bottom],[-3.2,-2.5,a/2+1.65,a/2+2.15],[Ze+.5,Ze+.7,a/2+2.8,a/2+3],[Hn.x-.12,Hn.x+.12,Hn.z-.12,Hn.z+.12]);let us=[f,h,a/2-.1,a/2+.1],ri=[f-.06,f+.08,a/2-he-.05,a/2],$n=(P,X,[ee,le,_,C],m)=>P>ee-m&&P<le+m&&X>_-m&&X<C+m,Wt={open:!1,a:0,from:0,t0:-1e9},se=Zn((f+h)/2,a/2),qe=P=>(P-ft.y)/i,Ve=P=>P>-.7?"ground":P<-3.2?"study":"stairs",pt=(P,X)=>P>Je.x0&&P<Je.x1&&X>Je.bottom&&X<Je.top,Cn=(P,X)=>P>Xt.x0&&P<Xt.x1&&X>Xt.z0&&X<Xt.z1,Un=(P,X)=>P>-r/2+o-.05&&P<r/2-o+.05&&X>-a/2+o&&X<a/2+o+.05,Ai=(P,X,ee,le)=>{let _=[Zn(P,ee),Zn(X,ee),Zn(P,le),Zn(X,le)];return[Math.min(..._.map(C=>C[0])),Math.max(..._.map(C=>C[0])),Math.min(..._.map(C=>C[1])),Math.max(..._.map(C=>C[1]))]};return{group:_e,study:Ke,LANT:Hn,holeBox:Ai(-r/2+o,r/2-o,-a/2+o,a/2-o),studyBox:Ai(Xt.x0-.3,Xt.x1+.3,Xt.z0-.3,Xt.z1+.3),blocked(P,X,ee,le){let[_,C]=jt(P,X);if(Math.abs(_)>Xt.x1+3||C<Xt.z0-3||C>a/2+4)return!1;let m=.17+ee/i,T=qe(le),k=Ve(T);if(k==="stairs")return _<Je.x0+m||_>Je.x1-m||C>Je.top+.05;if(k==="study")return Pf(_,C,m,T);if(Math.abs(_)>r/2+3||C<-a/2-3)return!1;for(let z of Fn)if($n(_,C,z,m))return!0;return!!(Wt.a<.5?$n(_,C,us,m):$n(_,C,ri,m*.6))},inside(P,X,ee){let[le,_]=jt(P,X);return Math.abs(le)<r/2&&Math.abs(_)<a/2||Cn(le,_)&&qe(ee)<-1},floors(P,X,ee){let[le,_]=jt(P,X),C=m=>ft.y+m*i;pt(le,_)?ee.push({y:C(os(_)),under:!0}):Un(le,_)&&ee.push({y:C(.12),under:!0});for(let m of If(le,_))ee.push({y:C(m),under:!0});return le>-3.3&&le<3.4&&_>=a/2+o+.05&&_<a/2+2.4&&ee.push({y:C(.2),under:!1}),le>-2.25&&le<-.35&&_>M-.3&&_<M+x&&ee.push({y:C(.24-(_-M)*.024),under:!1}),ee},door:{mesh:ce,near(P,X){return Math.hypot(P-se[0],X-se[1])<13},get open(){return Wt.open},canToggle(P,X){if(!Wt.open)return!0;let[ee,le]=jt(P,X);return!$n(ee,le,[f-.1,h+.1,a/2-he-.1,a/2+.25],.17)},toggle(P){return Wt.open=!Wt.open,Wt.from=Wt.a,Wt.t0=P,Wt.open}},update(P,X,ee,le,_){let C=P.pCabin,m=C>.01;if(m&&(this.syncT>ee-1500||(this.syncT=ee,Ke.sync()),Ke.update(X,ee)),Ke.lampLight.intensity=m?120*(.96+.04*Math.sin(X*3.1)):0,m&&_!==void 0){let[J,ne]=jt(n.position.x,n.position.z),ue=qe(_);ue>-.7&&Math.abs(J)<r/2+1&&Math.abs(ne)<a/2+1&&(this.shF=(this.shF||0)+1)%3===0&&(nt.shadow.needsUpdate=!0),ue<-3&&Cn(J,ne)&&!(this.shL>ee-2500)&&(this.shL=ee,Ke.shadowLight.shadow.needsUpdate=!0)}ht.update({on:m,day:Math.max(0,Math.min(1,P.light||.6))*(1-Math.min(1,P.pGlow)*.85),beamColor:P.lightC}),_e.visible=m,Lt.visible=m&&C>.5,_e.scale.setScalar(i*Math.max(.001,C));let T=Math.min(1,(ee-Wt.t0)/900),k=Wt.open?1-Math.pow(1-T,3)*Math.cos(T*3.2):1-Math.pow(1-T,4);Wt.a=Wt.from+((Wt.open?1:0)-Wt.from)*k,Pe.rotation.y=Wt.a*1.72;let z=Math.min(1,P.pGlow),B=.86+.08*Math.sin(X*9.1+Math.sin(X*2.7)*2)+.06*Math.sin(X*23.3);ge.color.setRGB(.07,.07,.075).lerp(new Oe(1.3,.8,.42),z*B),et.forEach((J,ne)=>{let ue=J.userData.h*(.75+.35*Math.sin(X*(7+ne*1.7)+ne*2)*Math.sin(X*(3.1+ne)));J.scale.set(1,Math.max(.05,ue*z),1),J.visible=z>.05}),we.opacity=.75*z,nt.intensity=z*C*220*B,nt.position.set(tn.x+Math.sin(X*5.3)*.15,tn.y+Math.sin(X*7.1)*.1,tn.z),Lt.material.uniforms.uColor.value.copy(P.fog).multiplyScalar(1.1).addScalar(.05),Lt.material.uniforms.uOpacity.value=Math.min(C,.35+z*.5),De.position.y=(le+.9+Math.sin(X*.9)*.15-ft.y)/i,De.rotation.z=Math.sin(X*.7)*.03}}}var wi=(s,e)=>{let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},el=(s,e)=>{let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),c=wi(t,n),l=wi(t+1,n),u=wi(t,n+1),d=wi(t+1,n+1);return c+(l-c)*a+(u-c)*o+(c-l-u+d)*a*o},Xr=(s,e,t=5)=>{let n=0,i=.5,r=1;for(let a=0;a<t;a++)n+=i*el(s*r,e*r),r*=2.03,i*=.5;return n},xv=(s,e)=>{let t=0,n=.5,i=1;for(let r=0;r<5;r++)t+=n*(1-Math.abs(el(s*i,e*i)*2-1)),i*=2.1,n*=.5;return t},hs=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},pn=(s,e)=>{let t=Math.hypot(s*.75,e+20),n=hs(55,240,t),i=(Xr(s*.006+3,e*.006+7)-.45)*46*(.25+n);i+=Math.pow(hs(120,650,-e),1.3)*xv(s*.0028,e*.0028)*260,i+=hs(160,520,Math.abs(s))*Xr(s*.004,e*.004+11)*130,i-=(1-n)*9,i+=(Xr(s*.035+17,e*.035+5,2)-.5)*3.2*(.3+n);{let u=Math.min(1,Math.max(0,((s-205)*-113+(e- -130)*14)/12965)),d=Math.hypot(s-(205+-113*u),e-(-130+14*u)),f=hs(48,12,d)*hs(1.04,.9,u),h=4.6+(Xr(s*.05,e*.05,2)-.5)*1.6-u*.6;f>0&&(i=i+(Math.max(i,h)-i)*f)}let r=Math.hypot(s-ft.x,e-ft.z);r<44&&(i+=(ft.y-.12-i)*hs(44,22,r));{let a=(e-ft.z)/ft.S,o=-(s-ft.x)/ft.S,c=Math.max(Math.min(Xt.x0,St.x0)-a,a-Math.max(Xt.x1,St.x1),0),l=Math.max(St.z0-o,o-Xt.z1,0),u=Math.hypot(c,l)*ft.S;u<16&&(i=Math.max(i,i+(ft.y-.12-i)*hs(16,5,u)))}return i};function Gh(s,e,t=!0){let n=document.createElement("canvas");n.width=n.height=2;let i=n.getContext("2d");i.fillStyle=`rgb(${e.join(",")})`,i.fillRect(0,0,2,2);let r=new gn(n);r.needsUpdate=!0,t&&(r.wrapS=r.wrapT=Ii);let a=new Image;return a.onload=()=>{r.image=a,r.anisotropy=4,r.needsUpdate=!0},a.src=s,r}function Nf(s){let e={uLow:{value:new Oe},uHigh:{value:new Oe},uSnow:{value:new Oe},uSnowLine:{value:100},uSand:{value:0},uHole:{value:new Gt(1e9,1e9,1e9,1e9)},uWaterY:{value:0},uWaterC:{value:new Oe(7172984)},tDetail:{value:Gh("assets/textures/grass-detail.jpg",[97,97,97])}},t=new bt(2200,1800,300,245);t.rotateX(-Math.PI/2),t.translate(0,0,-400);let n=t.attributes.position;for(let a=0;a<n.count;a++)n.setY(a,pn(n.getX(a),n.getZ(a)));t.computeVertexNormals();let i=new _n({color:16777215});i.onBeforeCompile=a=>{Object.assign(a.uniforms,e),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uLow, uHigh, uSnow, uWaterC; uniform float uSnowLine, uSand, uWaterY; uniform vec4 uHole; uniform sampler2D tDetail; varying float vH; varying float vSlope; varying vec2 vXZ;
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
        {
          // real grass detail, only near you (it would shimmer far away)
          float dnear = smoothstep(170.0, 18.0, length(vec3(vXZ.x, vH, vXZ.y) - cameraPosition));
          if (dnear > 0.0) {
            float dl = dot(texture2D(tDetail, vXZ * 0.09).rgb, vec3(0.3, 0.59, 0.11)) * 0.6 + dot(texture2D(tDetail, vXZ * 0.023 + 0.37).rgb, vec3(0.3, 0.59, 0.11)) * 0.4;
            land *= 1.0 + (dl - 0.38) * 3.2 * dnear * (1.0 - smoothstep(0.4, 0.8, vSlope) * 0.5);
          }
        }
        land = mix(land, land * vec3(0.92, 0.88, 0.84), smoothstep(0.35, 0.75, vSlope));
        float beach = (1.0 - smoothstep(uWaterY + 1.2, uWaterY + 3.5, vH)) * smoothstep(uWaterY - 3.0, uWaterY - 0.5, vH) * uSand;
        land = mix(land, vec3(0.93, 0.85, 0.66) * (0.9 + 0.12 * d3), beach);
        // where land meets water: a wet, darker band, then the lake bed tinted by the water
        float wet = smoothstep(uWaterY + 2.2, uWaterY + 0.1, vH) * (0.75 + 0.25 * d2);
        land *= mix(1.0, 0.7, wet);
        float under = smoothstep(uWaterY + 0.1, uWaterY - 4.5, vH);
        land = mix(land, uWaterC * (0.55 + 0.2 * d1), under * 0.85);
        snow *= 1.0 - smoothstep(uWaterY + 0.6, uWaterY - 0.4, vH);
        float drift = sin(vXZ.x * 0.55 + vXZ.y * 0.18 + d1 * 7.0) * 0.5 + 0.5;
        vec3 snowCol = uSnow * (0.93 + 0.05 * d2 + 0.04 * drift) * mix(vec3(0.94, 0.97, 1.0), vec3(1.0), d1);
        diffuseColor.rgb = mix(land, snowCol, snow);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float near = smoothstep(260.0, 25.0, length(wpos - cameraPosition));
          if (near > 0.0) {
            float e = 0.3;
            float snowK = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH);
            #define BMP(p) (tn((p) * 0.35) * 0.9 + tn((p) * 1.6) * 0.3 + snowK * sin((p).x * 0.55 + (p).y * 0.18 + d1 * 7.0) * 0.35)
            float b0 = BMP(vXZ);
            vec3 bw = vec3(-(BMP(vXZ + vec2(e, 0.0)) - b0), 0.0, -(BMP(vXZ + vec2(0.0, e)) - b0)) / e * 0.55 * near;
            normal = normalize(normal + (viewMatrix * vec4(bw, 0.0)).xyz);
          }
        }`).replace("#include <opaque_fragment>",`
        if (snow > 0.01) {
          // tiny ice crystals glint as you move
          vec3 wpos = vec3(vXZ.x, vH, vXZ.y);
          float dist = length(wpos - cameraPosition);
          vec2 cell = floor(vXZ * 2.6);
          float pick = step(0.982, th(cell));
          float star = smoothstep(0.22, 0.0, length(fract(vXZ * 2.6) - 0.5));
          float glint = pow(max(0.0, sin(dot(normalize(cameraPosition - wpos), vec3(37.0, 11.0, 23.0)) * 3.0 + th(cell + 7.0) * 40.0)), 24.0);
          float lit = dot(reflectedLight.directDiffuse, vec3(0.33)) + 0.25 * dot(reflectedLight.indirectDiffuse, vec3(0.33));
          outgoingLight += vec3(pick * star * glint * snow * smoothstep(90.0, 6.0, dist) * lit * 5.0);
        }
        #include <opaque_fragment>`)};let r=new $e(t,i);return r.receiveShadow=!0,s.add(r),{mesh:r,TU:e}}function Ff(s,e){let t={x0:-700,z0:-800,w:1400,d:1300},n=448,i=416,r=(()=>{let d=new Uint16Array(n*i);for(let h=0;h<i;h++)for(let g=0;g<n;g++)d[h*n+g]=da.toHalfFloat(pn(t.x0+(g+.5)/n*t.w,t.z0+(h+.5)/i*t.d));let f=new Ms(d,n,i,Or,kn);return f.minFilter=f.magFilter=fn,f.needsUpdate=!0,f})(),a=Gh("assets/textures/water-normal-1.jpg",[128,128,255]);a.repeat.set(70,70);let o=Gh("assets/textures/water-normal-2.jpg",[128,128,255]),c=new es({color:7829367,roughness:.3,metalness:.35,normalMap:a,normalScale:new je(.35,.35),transparent:!0,envMapIntensity:.6}),l={uStudy:{value:new Gt(1e9,1e9,1e9,1e9)},tShore:{value:r},uShore:{value:new Gt(t.x0,t.z0,t.w,t.d)},uLevel:{value:0},uTime:e.uTime,tN2:{value:o}};c.onBeforeCompile=d=>{Object.assign(d.uniforms,l),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vWXZ; uniform vec4 uStudy, uShore; uniform sampler2D tShore, tN2; uniform float uLevel, uTime;
        float wh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float wn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(wh(i), wh(i + vec2(1, 0)), f.x), mix(wh(i + vec2(0, 1)), wh(i + vec2(1, 1)), f.x), f.y); }`).replace("vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;",`vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
        {
          vec3 m2 = texture2D(tN2, vWXZ * 0.021 + uTime * vec2(-0.0021, 0.0014)).xyz * 2.0 - 1.0;
          vec3 m3 = texture2D(tN2, vWXZ * 0.0047 + uTime * vec2(0.0009, 0.0011)).xyz * 2.0 - 1.0;
          float far = smoothstep(60.0, 600.0, length(vec3(vWXZ.x, 0.0, vWXZ.y) - vec3(cameraPosition.x, 0.0, cameraPosition.z)));
          mapN = vec3((mapN.xy + m2.xy) * (1.0 - far * 0.7) + m3.xy * 0.7, mapN.z * m2.z);
        }`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec2 suv = (vWXZ - uShore.xy) / uShore.zw;
          float bed = (suv.x > 0.0 && suv.x < 1.0 && suv.y > 0.0 && suv.y < 1.0) ? texture2D(tShore, suv).r : -100.0;
          float depth = uLevel - bed;
          // shallow water is clearer and lighter, deep water keeps its colour
          float shallow = 1.0 - smoothstep(0.0, 7.0, depth);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.3 + vec3(0.05, 0.07, 0.06), shallow * 0.55);
          // a thin line of foam that breathes along the shore
          float n = wn(vWXZ * 0.3 + vec2(uTime * 0.05, 0.0)) + 0.5 * wn(vWXZ * 1.1 - vec2(0.0, uTime * 0.08));
          float foam = smoothstep(2.6, 0.3, depth) * smoothstep(0.35, 1.0, 0.5 + 0.5 * sin(depth * 3.0 - uTime * 1.1 + n * 6.0)) * smoothstep(0.35, 0.95, n) * 0.55;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.93), clamp(foam, 0.0, 0.4));
          // and the water fades out softly where it meets the land (no hard line)
          diffuseColor.a *= smoothstep(-0.1, 3.2, depth) * (1.0 - 0.3 * shallow) + clamp(foam, 0.0, 0.4) * smoothstep(0.0, 1.2, depth) * 0.5;
        }`)};let u=new $e(new bt(4e3,4e3).rotateX(-Math.PI/2),c);return s.add(u),u.renderOrder=1,{mesh:u,mat:c,tex:a,WU:l}}function Uf(s,e){Object.assign(e,{uTop:{value:new Oe},uHorizon:{value:new Oe},uBottom:{value:new Oe},uSunColor:{value:new Oe},uSunDir:{value:new D(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new Oe},uAur2:{value:new Oe}});let t=new $e(new Ot(1400,48,24),new Bt({uniforms:e,side:En,depthWrite:!1,fog:!1,vertexShader:`
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
          // sun or moon: soft disc and halo
          float sd = dot(d, normalize(uSunDir));
          float on = step(0.00001, uSunSize);
          float disc = smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd);
          float halo = pow(max(sd, 0.0), 90.0) * 0.55 + pow(max(sd, 0.0), 10.0) * 0.12;
          col += uSunColor * (disc + halo) * on;
          // stars, twinkling slowly
          vec3 g = floor(d * 420.0);
          float s = hash(g);
          float star = step(0.9972, s) * smoothstep(0.02, 0.2, h);
          col += vec3(star * (0.55 + 0.45 * sin(uTime * 1.2 + s * 90.0))) * uStars;
          // aurora: curtains with a sharp lower edge, rays and slow folds
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
              acc += mix(uAur1, uAur2, smoothstep(0.0, 0.16, above)) * shape * (0.3 + 0.7 * rays) * folds * (1.0 - fi * 0.2);
            }
            col += acc * uAurora * 1.9 * smoothstep(-0.35, 0.4, -d.z) * smoothstep(0.03, 0.09, h);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}));return t.frustumCulled=!1,s.add(t),t}var Ti=(s,e)=>s+Math.random()*(e-s);function Of(s,e,t){let i=new Rt;{let g=new Float32Array(15600),M=new Float32Array(2600*2);for(let x=0;x<2600;x++){let p=Ti(-90,90),b=Ti(0,70),w=Ti(-140,40);g.set([p,b,w,p,b,w],x*6),M[x*2+1]=1}i.setAttribute("position",new Ut(g,3)),i.setAttribute("aEnd",new Ut(M,1))}let r=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new Oe(14672870)}},vertexShader:`
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
      }`}),a=new Bs(i,r);a.frustumCulled=!1,s.add(a);let o=(g,M,x,p,b)=>{let w=new Rt,y=new Float32Array(g*3),S=new Float32Array(g);for(let E=0;E<g;E++)y.set([Ti(-M[0],M[0]),Ti(M[1],M[2]),Ti(M[3],M[4])],E*3),S[E]=Math.random();w.setAttribute("position",new Ut(y,3)),w.setAttribute("aSeed",new Ut(S,1));let A=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new Oe(p)},uSize:{value:b*t}},vertexShader:x,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),R=new qn(w,A);return R.frustumCulled=!1,s.add(R),R},c=o(3200,[110,0,70,-160,40],`
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
    }`,16054008,3.2),l=o(900,[90,0,60,-120,40],`
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
    }`,13793836,4.2),u=o(260,[160,1,14,-220,30],`
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
    }`,14275248,5),d=(()=>{let g=document.createElement("canvas");g.width=256,g.height=128;let M=g.getContext("2d"),x=M.createRadialGradient(128,64,0,128,64,128);return x.addColorStop(0,"rgba(255,255,255,0.9)"),x.addColorStop(.5,"rgba(255,255,255,0.35)"),x.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=x,M.fillRect(0,0,256,128),new li(g)})(),f=Array.from({length:9},(g,M)=>{let x=new $t({map:d,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),p=new $e(new bt(Ti(380,620),Ti(70,120)),x);return p.position.set(Ti(-400,400),Ti(8,45),-60-M*70),p.userData.v=Ti(1.2,3.2)*(Math.random()<.5?-1:1),s.add(p),p}),h=(g,M)=>{g.material.uniforms.uOpacity.value=M,g.visible=M>.01};return{get rainAmount(){return r.uniforms.uOpacity.value},update(g,M,x,p,b,w,y){h(a,g.rain*w),h(c,g.snow*w),h(l,g.leaves*w),h(u,g.fire),a.position.set(M.x,M.y-20,M.z),c.position.copy(a.position),l.position.copy(a.position),u.position.set(x.x*.3,b,p.z-90),f.forEach(S=>{S.position.x+=S.userData.v*y,S.position.x>520?S.position.x=-520:S.position.x<-520&&(S.position.x=520),S.lookAt(M.x,S.position.y,M.z);let A=Math.hypot(S.position.x-M.x,S.position.z-M.z);S.material.opacity=g.mist*.5*hs(12,80,A)*w,S.material.color.copy(g.fog),S.visible=S.material.opacity>.003})}}}var tl=null,bv=()=>{if(tl)return tl;let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.75)"),t.addColorStop(.7,"rgba(255,255,255,0.25)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),tl=new li(s),tl};function Xa(s,e,t,n=.45){let i=new bt(1,1).rotateX(-Math.PI/2),r=new $t({color:0,alphaMap:bv(),transparent:!0,depthWrite:!1,opacity:n,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),a=new Mn(i,r,Math.max(1,t.length)),o=new Ye,c=new ot,l=new ot,u=new D(0,1,0),d=new D,f=new D,h=new D;return t.forEach((g,M)=>{let p=e(g.x,g.z);d.set(e(g.x-2,g.z)-e(g.x+2,g.z),2*2,e(g.x,g.z-2)-e(g.x,g.z+2)).normalize(),c.setFromUnitVectors(u,d).multiply(l.setFromAxisAngle(u,g.yaw||0)),f.set(g.x,p+.12,g.z),h.set(g.sx,1,g.sz),a.setMatrixAt(M,o.compose(f,c,h))}),a.count=t.length,a.computeBoundingSphere(),a.renderOrder=0,s.add(a),{mesh:a,set(g){r.opacity=n*g,a.visible=g>.01}}}var Bf={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3],spring:[1,1,1,1,1,1,.3,0,0,0,0,0,.5],summer:[1,1,.8,1,.7,1,.2,0,0,0,0,0,.2],fall:[1,1,.6,.8,.9,1,.5,0,0,0,0,0,.4]},nl=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function zf({scene:s,heightAt:e,U:t,snowColor:n,clear:i=[]}){let r=qr(20260707),a=(ie,U)=>ie+r()*(U-ie),o={uTime:t.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new Oe("#4f6a3c")}},c={};nl.forEach(ie=>{c[ie]={value:0}});let l=["leaves","flowers","hives","creek"];l.forEach(ie=>{c[ie]={value:0}});let u=[],d=[],f=[],h=(ie,U)=>Math.hypot(e(ie+2,U)-e(ie-2,U),e(ie,U+2)-e(ie,U-2))/(2*2),g=(ie,U,Se,ye=1)=>{let v=e(ie-2,U)-e(ie+2,U),j=e(ie,U-2)-e(ie,U+2),Z=new D(v*ye,2*2,j*ye).normalize();return new ot().setFromUnitVectors(new D(0,1,0),Z).multiply(new ot().setFromAxisAngle(new D(0,1,0),Se))},M=(ie,U)=>!i.some(Se=>Math.hypot(Se.x-ie,Se.z-U)<Se.r),x=(ie,U,{cast:Se=!1,receive:ye=!0}={})=>(ie.castShadow=Se,ie.receiveShadow=ye,s.add(ie),u.push([ie,U]),ie),p=160,b=[],w=ie=>{let U=new D(1,0,0).applyQuaternion(ie);return Math.atan2(-U.z,U.x)},y=(ie,U,Se,ye)=>{let I=ie.map(v=>{let[j,Z]=Se(v.s);return{x:v.p.x,z:v.p.z,sx:j,sz:Z,yaw:w(v.q)}});b.push({key:U,b:Xa(s,e,I,ye)})},S=(ie,U,Se,ye,I)=>{let v=new Map;Se.forEach(Z=>{let oe=Math.floor(Z.p.x/p)+","+Math.floor(Z.p.z/p);v.has(oe)||v.set(oe,[]),v.get(oe).push(Z)});let j=new Ye;v.forEach(Z=>{let oe=new Mn(ie,U,Z.length);Z.forEach((he,me)=>{j.compose(he.p,he.q,he.s),oe.setMatrixAt(me,j)}),oe.computeBoundingSphere(),x(oe,ye,I)})},A=(ie,U,Se,ye)=>{let I=null,v=1e9;for(let j=0;j<900;j++){let Z=r()*Math.PI*2,oe=Math.sqrt(r())*Se,he=ie+Math.cos(Z)*oe,me=U+Math.sin(Z)*oe;ye(he,me)&&oe<v&&(v=oe,I={x:he,z:me})}return I||{x:ie,z:U}},R={x:ft.x,z:ft.z};f.push({x:R.x,z:R.z,r:34});let E=A(-95,-258,50,(ie,U)=>{let Se=e(ie,U);return Se>9&&Se<32&&h(ie,U)<.16});f.push({x:E.x,z:E.z,r:30});let N=(ie,U)=>{let Se=new Hs(1,U),ye=Se.attributes.position,I=new D;for(let v=0;v<ye.count;v++){I.fromBufferAttribute(ye,v);let j=1+(Vt(I.x*1.6+ie,I.y*1.6,I.z*1.6)-.5)*.55+(Vt(I.x*4+ie,I.y*4,I.z*4)-.5)*.14;I.multiplyScalar(j),I.y=I.y<-.25?-.25+(I.y+.25)*.2:I.y,I.y*=.72,I.x*=1.12,ye.setXYZ(v,I.x,I.y,I.z)}return new zt().add(Se,{flat:!0,color:v=>{let j=.5+Vt(v.x*3+ie,v.y*3,v.z*3)*.28+v.y*.12;return[j,j*.99,j*.95]}}).geometry()},V=xn(o,c.pRocks,{color:9277328,snowBias:.05}),O=[[],[],[]],W=[],G=(ie,U,Se,ye,I)=>{let v=e(ie,U),j=new D(Se*a(.8,1.25),Se*a(.6,1.1),Se*a(.8,1.2));ye.push({p:new D(ie,v-Se*.12,U),q:g(ie,U,r()*6.28,.6),s:j}),I&&d.push({x:ie,z:U,r:Se*1.05+1.2,key:"pRocks",top:v-Se*.12+j.y*.82,rt:Se*.75})};for(let ie=0,U=0;ie<260&&U<2e4;U++){let Se=a(-560,560),ye=a(-560,230),I=e(Se,ye);if(I<-1.5||I>75)continue;let j=r()<.25?a(4,9):a(1.2,3.4);f.some(Z=>Math.hypot(Z.x-Se,Z.z-ye)<Z.r+j)||!M(Se,ye)||(G(Se,ye,j,O[ie%3],j>2.2),ie++)}for(let ie=0,U=0;ie<70&&U<9e3;U++){let Se=a(-260,260),ye=a(-260,160),I=e(Se,ye);I<-1.2||I>1.5||f.some(v=>Math.hypot(v.x-Se,v.z-ye)<v.r)||!M(Se,ye)||(G(Se,ye,a(1.5,5),O[ie%3],!0),ie++)}for(let ie=0,U=0;ie<700&&U<2e4;U++){let Se=a(-480,480),ye=a(-480,200),I=e(Se,ye);I<-.6||I>70||!M(Se,ye)||f.some(v=>Math.hypot(v.x-Se,v.z-ye)<v.r)||(G(Se,ye,a(.35,1),W,!1),ie++)}O.forEach((ie,U)=>S(N(U*17.3,2),V,ie,"pRocks",{cast:!0})),y(O.flat(),"pRocks",ie=>[ie.x*3,ie.z*3],.5),S(N(5.1,1),V,W,"pRocks");let F=ie=>{let U=.42+Vt(ie.x*9,ie.y*2,ie.z*2)*.22+Math.sin(Math.atan2(ie.z,ie.y)*9)*.04;return[U*1,U*.82,U*.66]},H=(()=>{let ie=new zt,U=new Ue(1,.9,1,12,5,!0),Se=U.attributes.position,ye=new D;for(let v=0;v<Se.count;v++){ye.fromBufferAttribute(Se,v);let j=1+(Vt(ye.x*3,ye.y*6,ye.z*3)-.5)*.18;Se.setXYZ(v,ye.x*j,ye.y,ye.z*j)}U.computeVertexNormals(),ie.add(U,{m:L(0,0,0,0,0,Math.PI/2),color:F});let I=v=>{let j=Math.hypot(v.y,v.z),Z=.62+Math.sin(j*26)*.05-j*.12;return[Z*1.05,Z*.9,Z*.72]};return ie.add(new zs(.88,12),{m:L(.5,0,0,0,Math.PI/2,0),color:I}),ie.add(new zs(.98,12),{m:L(-.5,0,0,0,-Math.PI/2,0),color:I}),ie.add(new Ue(.12,.2,.9,6,1),{m:L(.15,.55,.3,.5,0,-.5,1,1,1),color:F}),ie.geometry()})(),q=(()=>{let ie=new zt,U=new Ue(.85,1,1,12,3,!0),Se=U.attributes.position,ye=new D;for(let I=0;I<Se.count;I++){ye.fromBufferAttribute(Se,I);let v=Math.atan2(ye.z,ye.x),j=ye.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(v*5)),2):1,Z=ye.y>.45?(Vt(ye.x*4,0,ye.z*4)-.5)*.3:0;Se.setXYZ(I,ye.x*j,ye.y+Z,ye.z*j)}return U.computeVertexNormals(),ie.add(U,{m:L(0,.5,0),color:I=>F(I)}),ie.add(new zs(.85,12),{m:L(0,.98,0,-Math.PI/2,0,0),color:I=>{let v=Math.hypot(I.x,I.z),j=.6+Math.sin(v*22)*.05;return[j*1.05,j*.9,j*.7]}}),ie.geometry()})(),Y=xn(o,c.pLogs,{color:12036506}),de=(()=>{let ie=new zt,U=j=>{let Z=new Ie(1,1,1,3,5,2),oe=Z.attributes.position,he=new D;for(let me=0;me<oe.count;me++){he.fromBufferAttribute(oe,me);let $=1-(he.y+.5)*.3,ae=1+(Vt(he.x*3+j,he.y*3,he.z*3)-.5)*.35,ve=he.y>.35?1-(he.y-.35)*1.2*Math.hypot(he.x,he.z):1;oe.setXYZ(me,he.x*$*ae*ve,he.y+(he.y>.4?(Vt(he.x*5,j,he.z*5)-.5)*.15:0),he.z*$*ae*ve)}return Z},Se=j=>Z=>{let oe=.5+Vt(Z.x*2+j,Z.y*2,Z.z*2)*.22;return[oe*.97,oe,oe*.98]},ye=11,I=15;for(let j=0;j<ye;j++){let Z=j/ye*Math.PI*2+a(-.06,.06),oe=Math.cos(Z)*I,he=Math.sin(Z)*I,me=a(5,9.5),$=j===4?.35:a(-.06,.06),ae=e(E.x+oe,E.z+he)-e(E.x,E.z);ie.add(U(j*3.7),{m:L(oe,ae+me/2-.6,he,$,-Z+Math.PI/2,a(-.05,.05),a(2.2,3.2),me,a(1,1.5)),flat:!0,color:Se(j)}),d.push({x:E.x+oe,z:E.z+he,r:3.6,key:"pStones"})}ie.add(U(40),{m:L(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:Se(40)}),ie.add(U(50),{m:L(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:Se(50)}),d.push({x:E.x+3,z:E.z-2,r:4.5,key:"pStones"},{x:E.x-2,z:E.z+2.5,r:4,key:"pStones"});let v=new $e(ie.geometry(),xn(o,c.pStones,{color:10132636}));return v.position.set(E.x,e(E.x,E.z),E.z),x(v,"pStones",{cast:!0})})(),Q=(ie,U)=>{let Se=new Ue(U?.85:.5,1.15,1,12,10,!1),ye=Se.attributes.position,I=new D;for(let v=0;v<ye.count;v++){I.fromBufferAttribute(ye,v);let j=I.y+.5,Z=1+(Vt(I.x*2+ie,I.y*5,I.z*2)-.5)*.6+Math.sin(I.y*26+ie)*.04;!U&&j>.55&&(Z*=1-(Vt(ie,I.y*3,1)-.3)*.5);let oe=I.y>.49&&!U?(Vt(I.x*3+ie,0,I.z*3)-.5)*.25:0,he=U?0:j*j*.18*Math.sin(ie);ye.setXYZ(v,I.x*Z+he,I.y+oe,I.z*Z)}return Se},te=new zt,xe={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[xe.x,xe.z,30,22]].forEach(([ie,U,Se,ye],I,v)=>{let j=I===v.length-1,Z=11+ye*.5-.1;te.add(Q(I*9.1,j),{m:L(ie,Z-ye/2-8,U,0,I,0,Se,ye+16,Se*a(.8,1.1)),flat:!0,color:oe=>{let he=.42+Vt(oe.x*.2,oe.y*.6,oe.z*.2)*.24,me=oe.y>Z-1.5?.12:0;return[he-me*.4,he+me*.3,he*.95-me*.3]}}),d.push({x:ie,z:U,r:Se*1.2+1.5,key:"pStacks"})});{let U=new D(xe.x,21.9,xe.z),Se=new Ue(2.6,3.8,26,16,8,!1);te.add(Se,{m:L(U.x,U.y+13,U.z),color:ye=>Math.floor((ye.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),te.add(new Ue(4,4,.5,16),{m:L(U.x,U.y+26.2,U.z),color:()=>[.2,.2,.22]}),te.add(new Ue(2,2,.6,12),{m:L(U.x,U.y+26.7,U.z),color:()=>[.2,.2,.22]}),te.add(new cn(2.6,2.6,12),{m:L(U.x,U.y+31.3,U.z),color:()=>[.25,.23,.24]}),te.add(new Ie(7,4,5),{m:L(U.x+7,U.y+2,U.z+3),color:()=>[.85,.84,.8]}),te.add(new cn(5,2.6,4),{m:L(U.x+7,U.y+5.3,U.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}x(new $e(te.geometry(),xn(o,c.pStacks,{color:11051942,sink:140})),"pStacks");let Me=new D(xe.x,11+22*.5-.1+28.5,xe.z),Ne=new $e(new Ue(1.8,1.8,3.2,12),new $t({color:16769712,fog:!1}));Ne.position.copy(Me),x(Ne,"pStacks",{receive:!1});let tt=new rn;tt.position.copy(Me);let Re=new Bt({transparent:!0,depthWrite:!1,blending:ni,side:an,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(ie=>{let U=new $e(new cn(1,1,20,1,!0).translate(0,-.5,0),Re);U.rotation.set(Math.PI/2,0,0),U.scale.set(8,230,8);let Se=new rn;Se.rotation.y=ie,Se.add(U),U.position.z=0,tt.add(Se)}),s.add(tt);let Ze=(ie,U,Se,ye,I,v)=>{let j=new zt,Z=[];for(let he=0;he<ie;he++){let me=he/ie*Math.PI*2+r()*.7,$=a(U,Se),ae=a(.15,.55),ve=r()*ye,fe=Math.cos(me)*ve,ge=Math.sin(me)*ve,be=Math.cos(me)*ae,_e=Math.sin(me)*ae,Ae=-Math.sin(me)*I,He=Math.cos(me)*I,K=[fe+be*$*.35,$*.55,ge+_e*$*.35],Fe=[fe+be*$,$*.92,ge+_e*$];Z.push([fe-Ae,0,ge-He],[fe+Ae,0,ge+He],[K[0]+Ae*.6,K[1],K[2]+He*.6]),Z.push([fe-Ae,0,ge-He],[K[0]+Ae*.6,K[1],K[2]+He*.6],[K[0]-Ae*.6,K[1],K[2]-He*.6]),Z.push([K[0]-Ae*.6,K[1],K[2]-He*.6],[K[0]+Ae*.6,K[1],K[2]+He*.6],Fe)}let oe=Se;return j.tris(Z,he=>{let me=he.y/oe;return[v[0]*(.55+.6*me),v[1]*(.55+.6*me),v[2]*(.55+.6*me)]},he=>Math.pow(he.y/oe,1.5),new D(0,1,0)),j},re=Ze(11,.9,1.8,.55,.07,[.48,.6,.3]).geometry(),pe=Ze(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([ie,U],Se)=>{let ye=4.6+Se*.5;pe.add(new Ue(.03,.03,ye,4),{m:L(ie,ye/2,U),color:()=>[.5,.52,.35],tip:()=>.3}),pe.add(new Ue(.11,.11,.7,6),{m:L(ie,ye+.2,U),color:()=>[.36,.26,.18],tip:()=>.6})});let Ee=pe.geometry(),ze=(()=>{let ie=new zt,U=[],Se=8;for(let ye=0;ye<Se;ye++){let I=ye/Se*Math.PI*2+r()*.5,v=a(1.6,2.3),j=a(.7,1.1),Z=[Math.cos(I),Math.sin(I)],oe=[-Math.sin(I),Math.cos(I)],he=$=>[Z[0]*v*$,j*Math.sin($*Math.PI*.75)-.25*$*$,Z[1]*v*$],me=9;for(let $=0;$<me;$++){let ae=$/me,ve=($+1)/me,fe=(ae+ve)/2,ge=he(ae),be=he(ve),_e=he(fe),Ae=.34*Math.sin(Math.PI*Math.min(1,fe*1.1))*(1-fe*.4)+.03,He=oe[0]*Ae,K=oe[1]*Ae;U.push(ge,be,[_e[0]+He,_e[1]-.06,_e[2]+K]),U.push(ge,[_e[0]-He,_e[1]-.06,_e[2]-K],be)}}return ie.tris(U,ye=>{let I=Math.hypot(ye.x,ye.z)/2.3;return[.36+I*.22,.52+I*.26,.26+I*.12]},ye=>Math.hypot(ye.x,ye.z)/2.3,new D(0,1,0)),ie.geometry()})(),Be=[],at=(ie,U)=>{let Se=xn(o,c[ie],{sway:U,side:an,color:16777215,snowBias:-1,softBack:!0});return Be.push(Se),Se},yt=null,st=null,ct=null,Ft=(ie,U,Se)=>{let ye=(()=>{let $=new zt,ae=new Ot(1,14,7,0,Math.PI*2,0,Math.PI/2),ve=ae.attributes.position,fe=new D;for(let be=0;be<ve.count;be++){fe.fromBufferAttribute(ve,be);let _e=1+(Vt(fe.x*3,fe.y*3,fe.z*3)-.5)*.4;ve.setXYZ(be,fe.x*_e,fe.y*.32*_e,fe.z*_e)}ae.computeVertexNormals();let ge=[[.86,.42,.1],[.72,.18,.08],[.92,.68,.16],[.55,.3,.12]];$.add(ae,{color:be=>{let _e=ge[Math.floor(Vt(be.x*6,be.y*6,be.z*6)*3.99)],Ae=.7+Vt(be.x*20,0,be.z*20)*.5;return[_e[0]*Ae,_e[1]*Ae,_e[2]*Ae]}});for(let be=0;be<26;be++){let _e=r()*6.28,Ae=Math.sqrt(r())*1.15,He=ge[be%4];$.add(new bt(.16,.1),{m:L(Math.cos(_e)*Ae,.33*(1-Ae*Ae*.6)+.02,Math.sin(_e)*Ae,-Math.PI/2+a(-.4,.4),r()*6,0),color:()=>He})}return $.geometry()})(),I=[];for(let $=0;I.length<320&&$<6e3;$++){let ae=ie[Math.floor(r()*ie.length)];if(!ae)break;let ve=r()*6.28,fe=a(2,9),ge=ae.p.x+Math.cos(ve)*fe,be=ae.p.z+Math.sin(ve)*fe,_e=e(ge,be);if(_e<1||_e>70||U(ge,be))continue;let Ae=a(1.4,3.2);I.push({p:new D(ge,_e-.1,be),q:g(ge,be,r()*6.28,.8),s:new D(Ae,Ae*a(.8,1.3),Ae*a(.7,1.1))})}S(ye,xn(o,c.leaves,{side:an,softBack:!0,snowBias:-1}),I,"leaves");let v=($,ae)=>{let ve=new zt;for(let fe=0;fe<6;fe++){let ge=r()*6.28,be=r()*.5,_e=Math.cos(ge)*be,Ae=Math.sin(ge)*be,He=a(.35,.7);ve.add(new Ue(.012,.016,He,4).translate(0,He/2,0),{m:L(_e,0,Ae),color:()=>[.32,.5,.24],tip:()=>0});for(let K=0;K<5;K++){let Fe=K/5*6.28+ge;ve.add(new Ot(.06,6,4),{m:L(_e+Math.cos(Fe)*.06,He,Ae+Math.sin(Fe)*.06,0,-Fe,0,1.3,.3,.7),color:()=>$,tip:()=>1})}ve.add(new Ot(.035,6,4),{m:L(_e,He+.015,Ae),color:()=>ae,tip:()=>1}),ve.add(new bt(.14,.05),{m:L(_e+.04,He*.4,Ae,0,ge,.5),color:()=>[.34,.55,.26],tip:()=>0})}return ve.geometry()},j=xn(o,c.flowers,{sway:.08,side:an,softBack:!0,snowBias:-1});[[[.92,.45,.62],[.95,.85,.3]],[[.96,.84,.25],[.7,.45,.15]],[[.72,.68,.95],[.98,.95,.6]],[[.98,.97,.95],[.95,.8,.25]]].forEach(([$,ae],ve)=>{let fe=[];for(let ge=0;fe.length<520&&ge<3e4;ge++){let be=a(-420,420),_e=a(-420,190),Ae=e(be,_e);if(Ae<1||Ae>55||U(be,_e)||!M(be,_e)||Se(be,_e,3)||Vt(be*.025+ve*3,1,_e*.025)<.5)continue;let He=a(1.6,2.6);fe.push({p:new D(be,Ae-.05,_e),q:g(be,_e,r()*6.28,.5),s:new D(He,He,He)})}S(v($,ae),j,fe,"flowers")});let Z=(()=>{let $=new zt,ae=Qt("wood",fe=>{let ge=.5+Vt(fe.x*6,fe.y*6,fe.z*6)*.12;return[ge,ge*.8,ge*.58]});[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]].forEach(([fe,ge])=>$.add(new Ie(.06,.4,.06),{m:L(fe,.2,ge),color:ae})),$.add(new Ie(.58,.06,.5),{m:L(0,.42,0),color:ae});let ve=[[.92,.9,.84],[.86,.82,.62],[.78,.86,.84]];for(let fe=0;fe<3;fe++)$.add(new Ie(.5,.24,.44),{m:L(0,.57+fe*.245,0),color:()=>ve[fe]});return $.add(new Ie(.56,.05,.5),{m:L(0,1.3,0),color:()=>[.6,.58,.55]}),[-1,1].forEach(fe=>$.add(new Ie(.34,.03,.54),{m:L(fe*.14,1.38,0,0,0,-fe*.5),color:()=>[.45,.42,.4]})),$.add(new Ie(.22,.03,.02),{m:L(0,.49,.225),color:()=>[.08,.06,.05]}),$.add(new Ie(.3,.02,.1),{m:L(0,.46,.27,.25,0,0),color:ae}),$.geometry()})(),oe=[],he=[];[[-5.6,-.6],[-5.6,.9],[-5.6,2.4]].forEach(([$,ae])=>{let ve=ft.x-ae*ft.S,fe=ft.z+$*ft.S,ge=e(ve,fe);oe.push({p:new D(ve,ge,fe),q:new ot().setFromAxisAngle(new D(0,1,0),Math.PI+.1),s:new D(ft.S,ft.S,ft.S)}),d.push({x:ve,z:fe,r:2.8,key:"hives"}),he.push(ve,ge+4.5,fe)}),S(Z,xn(o,c.hives,{rich:!0,grain:.02}),oe,"hives",{cast:!0}),y(oe,"hives",()=>[ft.S*1.2,ft.S*1.1],.4);{let ae=new Rt,ve=new Float32Array(60*3),fe=new Float32Array(60);for(let be=0;be<60;be++){let _e=be%3;ve.set([he[_e*3],he[_e*3+1],he[_e*3+2]],be*3),fe[be]=r()}ae.setAttribute("position",new Ut(ve,3)),ae.setAttribute("aSeed",new Ut(fe,1));let ge=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0}},vertexShader:`uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`});ct=new qn(ae,ge),ct.frustumCulled=!1,s.add(ct)}let me=[];{let $=-275,ae=-30,ve=1,fe=0;for(let ge=0;ge<260;ge++){let be=e($,ae);if(me.push([$,ae]),be<-.6)break;let _e=2,Ae=e($+_e,ae)-e($-_e,ae),He=e($,ae+_e)-e($,ae-_e),K=Math.hypot(-$,-20-ae)||1,Fe=ve*.7-Ae*.6+-$/K*.25+(Vt(ge*.1,3,1)-.5)*.5,ce=fe*.7-He*.6+(-20-ae)/K*.25+(Vt(ge*.1,7,2)-.5)*.5,Pe=Math.hypot(Fe,ce)||1;ve=Fe/Pe,fe=ce/Pe,$+=ve*4,ae+=fe*4}}if(me.length>4){let $=[],ae=[],ve=[],fe=0;me.forEach(([be,_e],Ae)=>{let[He,K]=me[Math.max(0,Ae-1)],[Fe,ce]=me[Math.min(me.length-1,Ae+1)],Pe=Fe-He,De=ce-K,we=Math.hypot(Pe,De)||1;Pe/=we,De/=we;let et=3+3.6*Math.min(1,Ae/25)+Math.sin(Ae*.4)*.8,Ke=be-De*et,nt=_e+Pe*et,ht=be+De*et,tn=_e-Pe*et,Lt=Math.max(e(Ke,nt),e(ht,tn),e(be,_e))+.32;if(Ae&&(fe+=Math.hypot(be-me[Ae-1][0],_e-me[Ae-1][1])),$.push(Ke,Lt,nt,ht,Lt,tn),ae.push(0,fe/10,1,fe/10),Ae){let jt=(Ae-1)*2;ve.push(jt,jt+1,jt+2,jt+1,jt+3,jt+2)}});let ge=new Rt;ge.setAttribute("position",new ut($,3)),ge.setAttribute("uv",new ut(ae,2)),ge.setIndex(ve),st=new Bt({transparent:!0,depthWrite:!1,fog:!0,side:an,uniforms:Ga.merge([Xe.fog,{uOpacity:{value:0},uColor:{value:new Oe(6985126)}}]),vertexShader:["varying vec2 vUv;","#include <fog_pars_vertex>","void main() {","  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;","  #include <fog_vertex>","}"].join(`
`),fragmentShader:["uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;","#include <fog_pars_fragment>","float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }","void main() {","  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);","  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;","  float foam = smoothstep(0.8, 0.95, flow) * 0.45;","  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);","  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));","  #include <colorspace_fragment>","  #include <fog_fragment>","}"].join(`
`)}),st.uniforms.uTime=t.uTime,yt=new $e(ge,st),yt.renderOrder=1,x(yt,"creek",{receive:!1}),lt=me}},lt=null,Mt=40,kt=new Map,Ht=()=>{kt.clear(),d.forEach(ie=>{let U=ie.r+2;for(let Se=Math.floor((ie.x-U)/Mt);Se<=Math.floor((ie.x+U)/Mt);Se++)for(let ye=Math.floor((ie.z-U)/Mt);ye<=Math.floor((ie.z+U)/Mt);ye++){let I=Se+","+ye;kt.has(I)||kt.set(I,[]),kt.get(I).push(ie)}})},xt=(ie,U)=>kt.get(Math.floor(ie/Mt)+","+Math.floor(U/Mt))||[];return{shared:o,show:c,groups:u,solids:d,zones:f,cabinAt:R,circleAt:E,inClearing(ie,U){return f.some(Se=>Math.hypot(Se.x-ie,Se.z-U)<Se.r)},blocks(ie,U,Se,ye,I){for(let v of xt(ie,U)){if(ye[v.key]<.5||v.top!==void 0&&I>=v.top-.7)continue;let j=v.x-ie,Z=v.z-U,oe=v.r+Se;if(j*j+Z*Z<oe*oe)return!0}return!1},tops(ie,U,Se,ye){for(let I of xt(ie,U)){if(I.top===void 0||Se[I.key]<.5)continue;let v=I.x-ie,j=I.z-U;v*v+j*j<I.rt*I.rt&&ye.push(I.top)}return ye},plant(ie,U=0){let Se=(he,me,$)=>ie.some(ae=>{let ve=ae.p.x-he,fe=ae.p.z-me;return ve*ve+fe*fe<$*$}),ye=(he,me,$=0)=>f.some(ae=>Math.hypot(ae.x-he,ae.z-me)<ae.r+$),I=[],v=[];for(let he=0,me=0;he<70&&me<8e3;me++){let $=ie[Math.floor(r()*ie.length)];if(!$)break;let ae=r()*6.28,ve=a(7,20),fe=$.p.x+Math.cos(ae)*ve,ge=$.p.z+Math.sin(ae)*ve,be=e(fe,ge);if(be<1.5||be>68||ye(fe,ge,10))continue;let _e=a(9,18),Ae=a(.8,1.4),He=r()*6.28,K=Math.cos(He)*_e/2,Fe=-Math.sin(He)*_e/2;if(Se(fe,ge,6)||Se(fe+K,ge+Fe,4)||Se(fe-K,ge-Fe,4))continue;let ce=e(fe+K,ge+Fe),Pe=e(fe-K,ge-Fe),De=new ot().setFromEuler(new un(r()*6.28,He,Math.atan2(ce-Pe,_e),"YZX"));I.push({p:new D(fe,(ce+Pe)/2+Ae*.55,ge),q:De,s:new D(_e,Ae,Ae)});for(let we=-.5;we<=.5;we+=.125)d.push({x:fe+K*2*we,z:ge+Fe*2*we,r:Ae+1.6,key:"pLogs",top:(ce+Pe)/2+Ae*.55+(ce-Pe)*we+Ae,rt:Ae*1.1});he++}for(let he=0,me=0;he<90&&me<8e3;me++){let $=ie[Math.floor(r()*ie.length)];if(!$)break;let ae=r()*6.28,ve=a(6,16),fe=$.p.x+Math.cos(ae)*ve,ge=$.p.z+Math.sin(ae)*ve,be=e(fe,ge);if(be<1.5||be>70||Se(fe,ge,5)||ye(fe,ge))continue;let _e=a(.9,1.7),Ae=a(1.4,3.2);v.push({p:new D(fe,be-.4,ge),q:g(fe,ge,r()*6.28,.4),s:new D(_e,Ae,_e)}),d.push({x:fe,z:ge,r:_e+1.3,key:"pLogs",top:be-.4+Ae,rt:_e*.85}),he++}S(H,Y,I,"pLogs",{cast:!0}),S(q,Y,v,"pLogs",{cast:!0}),y(I,"pLogs",he=>[he.x*1.2,he.y*3.4],.45),y(v,"pLogs",he=>[he.x*3.2,he.z*3.2],.45);let j=[];for(let he=0;j.length<5200&&he<6e4;he++){let me=a(-470,470),$=a(-470,210),ae=e(me,$);if(ae<U+.6||ae>66||!M(me,$)||ye(me,$)||Vt(me*.03,0,$*.03)<.42)continue;let ve=a(1.2,2.6);j.push({p:new D(me,ae-.15,$),q:g(me,$,r()*6.28,.5),s:new D(ve,ve*a(.8,1.3),ve)})}S(re,at("pGrass",.05),j,"pGrass");let Z=[];for(let he=0;Z.length<1100&&he<2e4;he++){let me=ie[Math.floor(r()*ie.length)];if(!me)break;let $=r()*6.28,ae=a(2.5,13),ve=me.p.x+Math.cos($)*ae,fe=me.p.z+Math.sin($)*ae,ge=e(ve,fe);if(ge<1||ge>70||ye(ve,fe))continue;let be=a(1.6,3.4);Z.push({p:new D(ve,ge-.1,fe),q:g(ve,fe,r()*6.28,.5),s:new D(be,be*a(.8,1.1),be)})}S(ze,at("pFerns",.03),Z,"pFerns");let oe=[];for(let he=0;oe.length<700&&he<9e4;he++){let me=a(-280,280),$=a(-280,170),ae=e(me,$);if(ae<-1.4||ae>1.2||!M(me,$)||ye(me,$,-6)||Vt(me*.05,3,$*.05)<.4)continue;let ve=a(1.1,1.9);oe.push({p:new D(me,ae-.2,$),q:new ot().setFromAxisAngle(new D(0,1,0),r()*6.28),s:new D(ve,ve*a(.8,1.2),ve)})}S(Ee,at("pReeds",.012),oe,"pReeds"),Ft(ie,ye,Se),Ht()},update(ie,U,Se,ye){for(let I of nl)c[I].value=ie[I];b.forEach(({key:I,b:v})=>v.set(ie[I]||0)),Be.forEach(I=>{I.color.copy(ie.low).multiplyScalar(1.7),I.color.r=Math.min(1.1,I.color.r),I.color.g=Math.min(1.1,I.color.g),I.color.b=Math.min(1.1,I.color.b)});for(let I of l)c[I].value=ie[I]||0;yt&&(st.uniforms.uOpacity.value=Math.min(1,(ie.creek||0)*1.2),st.uniforms.uColor.value.copy(ie.waterC).lerp(new Oe(.32,.52,.56),.5)),ct&&(ct.material.uniforms.uOpacity.value=ie.hives||0,ct.visible=(ie.hives||0)>.05),o.uSnowCover.value=ie.pSnowCover,o.uMoss.value=ie.pMoss,o.uFrost.value=ie.pFrost;for(let[I,v]of u)I.visible=ie[v]>.01;Ne.material.color.setRGB(1.6,1.4,1.05),Ne.position.y=Me.y-(1-ie.pStacks)*140,tt.position.y=Ne.position.y,tt.rotation.y=U*.45,tt.visible=ie.pStacks>.5,Re.uniforms.uOpacity.value=Math.max(0,ie.pStacks-.5)*.5}}}function kf(s,e){let n=new Ra().copy(new bt(1,1).rotateX(-Math.PI/2)),i=new Float32Array(320*3);for(let o=0;o<320;o++)i[o*3]=Math.random()*120-60,i[o*3+1]=Math.random(),i[o*3+2]=Math.random()*120-60;n.setAttribute("aOff",new Wn(i,3)),n.instanceCount=320;let r=new Bt({transparent:!0,depthWrite:!1,fog:!0,uniforms:Ga.merge([Xe.fog,{uOpacity:{value:0},uCam:{value:new D},uWater:{value:0}}]),vertexShader:`
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
      }`});r.uniforms.uTime=e.uTime;let a=new $e(n,r);return a.frustumCulled=!1,s.add(a),{update(o,c,l){r.uniforms.uOpacity.value=o,r.uniforms.uCam.value.copy(c),r.uniforms.uWater.value=l,a.visible=o>.01}}}function Hf(s,e){let n=new bt(1,1).rotateX(-Math.PI/2),i=new Wn(new Float32Array(90).fill(-1e5),1);i.setUsage(ph),n.setAttribute("aBorn",i);let r=new Bt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:e.uTime,uColor:{value:new Oe(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),a=new Mn(n,r,90);a.frustumCulled=!1;let o=new Ye;o.makeScale(0,0,0);for(let h=0;h<90;h++)a.setMatrixAt(h,o);s.add(a);let c=0,l=1,u=new ot,d=new D(1.15,1,2.3),f=new D;return{mesh:a,place(h,g,M,x,p){l=-l,f.set(h+Math.cos(x)*.9*l,g+.45,M-Math.sin(x)*.9*l),u.setFromUnitVectors(new D(0,1,0),p).multiply(new ot().setFromAxisAngle(new D(0,1,0),x)),o.compose(f,u,d),a.setMatrixAt(c,o),a.instanceMatrix.needsUpdate=!0,i.array[c]=e.uTime.value,i.needsUpdate=!0,c=(c+1)%90},update(h){r.uniforms.uShow.value=h,a.visible=h>.01}}}var Pt=(s,e,t)=>new D(s,e,t),Gf={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:Pt(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:Pt(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,fishy:1,cam:Pt(0,13,105),look:Pt(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:Pt(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:Pt(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Pt(0,34,140),look:Pt(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:Pt(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:Pt(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Pt(-38,22,112),look:Pt(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:Pt(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:Pt(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:Pt(24,11,78),look:Pt(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:Pt(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:Pt(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,dof:.6,cam:Pt(0,10,92),look:Pt(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:Pt(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:Pt(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#57e0a4",aur2:"#a77de0",mist:.15,dof:.3,cam:Pt(30,15,102),look:Pt(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:Pt(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:Pt(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:Pt(0,7,125),look:Pt(0,9,0)},spring:{sat:.78,skyTop:"#86acd2",skyHorizon:"#e4eef1",skyBottom:"#c9d8de",fog:"#dbe6e8",fogDensity:.0031,low:"#6e8f55",high:"#8ea478",snowC:"#eef2f2",snowLine:150,water:0,waterC:"#6a95a6",waterRough:.18,sunC:"#fff2d6",sunDir:Pt(.4,.42,-1),sunSize:.0018,lightC:"#fff3df",light:1,lightDir:Pt(.4,.7,-.3),hemiSky:"#dde9f1",hemiGround:"#5a6c48",hemi:.9,treeC:"#4a7342",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.2,cam:Pt(-20,12,100),look:Pt(0,12,-20),bloom:1,flowers:1,hives:1,creek:1,fishy:.3},summer:{sat:.92,skyTop:"#3f86cf",skyHorizon:"#cde6f4",skyBottom:"#93c4d6",fog:"#cbe2ec",fogDensity:.0021,low:"#5a8e42",high:"#7ba158",snowC:"#f2f4f4",snowLine:210,water:0,waterC:"#21b2b4",waterRough:.05,sunC:"#fff5d8",sunDir:Pt(.2,.62,-1),sunSize:.0026,lightC:"#fff6e4",light:1.35,lightDir:Pt(.3,.85,-.3),hemiSky:"#cbe6ff",hemiGround:"#4a6a38",hemi:.95,treeC:"#3d8a38",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:0,cam:Pt(10,11,110),look:Pt(0,10,-10),lush:1,fruitCol:1,sand:1,creek:.7,flowers:.45,fishy:.4},fall:{sat:.82,skyTop:"#7a93ab",skyHorizon:"#ead7bd",skyBottom:"#b8a38c",fog:"#d8c6ad",fogDensity:.0036,low:"#7d6b44",high:"#92805b",snowC:"#efece6",snowLine:175,water:0,waterC:"#5c7380",waterRough:.2,sunC:"#ffd7a4",sunDir:Pt(-.5,.24,-1),sunSize:.002,lightC:"#ffdaa8",light:.95,lightDir:Pt(-.5,.5,-.4),hemiSky:"#e5d4bd",hemiGround:"#5a4a34",hemi:.85,treeC:"#4c5a3a",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.3,cam:Pt(-30,14,105),look:Pt(0,12,-30),fall:1,bare:.4,leaves:1,creek:.5}},vv={fall:0,bare:0,bloom:0,lush:0,leaves:0,flowers:0,hives:0,creek:0,fishy:0,sand:0,fruitCol:0,dof:1},di={};for(let s in Gf)di[s]={...vv,...Gf[s]},nl.forEach((e,t)=>{di[s][e]=Bf[s][t]});var Vf=Object.keys(di),Wf=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],qf=["sunDir","lightDir","cam","look"],jr=s=>{let e={};for(let t in s)e[t]=Wf.includes(t)?new Oe(s[t]):qf.includes(t)?s[t].clone():s[t];return e},yv=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function Xf(s){let e=di[s]?s:"rain",t=jr(di[e]),n=jr(di[e]),i=jr(di[e]),r=0,a=1;return{cur:t,get name(){return e},go(o,c,l){di[o]||(o="rain"),e=o,n=jr(t),i=jr(di[o]),r=l,a=Math.max(1,c)},offsetHome(o,c){t.cam.add(o),t.look.add(c),n=jr(t)},step(o){let c=Math.min(1,(o-r)/a),l=yv(c);for(let u in i)Wf.includes(u)||qf.includes(u)?t[u].copy(n[u]).lerp(i[u],l):t[u]=n[u]+(i[u]-n[u])*l;return c}}}var _v=qr(4071),Vi=(s,e)=>s+_v()*(e-s),il=40;function jf({scene:s,shared:e,isClearing:t}){let n=(()=>{let O=new zt,W=new Ue(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let H=W.attributes.position,q=new D;for(let Y=0;Y<H.count;Y++){q.fromBufferAttribute(H,Y);let de=Math.atan2(q.z,q.x),Q=q.y<.4?1+(.4-q.y)*2.6*(.55+.45*Math.max(0,Math.sin(de*4+1))):1;H.setXYZ(Y,q.x*Q+Math.sin(q.y*1.7)*.03,q.y,q.z*Q)}}O.add(W,{color:H=>{let q=.42+.16*el(H.y*7,Math.atan2(H.z,H.x)*2.5);return[q*1.35,q*.98,q*.72]},normal:(H,q)=>q.set(H.x,.12,H.z).normalize()});let G=6,F=0;for(let H=0;H<G;H++){let q=H/(G-1),Y=1.1-q*.8,de=1.02-q*.42,Q=.5+q*2.5,te=5+H%3,xe=H*1.93,Me=(Re,Ze)=>{let re=Re.attributes.position,pe=new D;for(let Ee=0;Ee<re.count;Ee++){pe.fromBufferAttribute(re,Ee);let ze=Math.hypot(pe.x,pe.z);if(ze<.001)continue;let Be=Math.atan2(pe.z,pe.x),at=Math.pow(.5+.5*Math.sin(Be*te+xe),2),yt=.82+.32*at+.06*Math.sin(Be*17+H*3)+.04*Math.sin(Be*31+H),st=ze/Y;re.setXYZ(Ee,pe.x*yt,pe.y-(.1+.16*at)*Y*st*st-(Ze?.02:0),pe.z*yt)}},Ne=new cn(Y,de,14,3,!0);Me(Ne,!1),Ne.translate(0,Q+de/2,0),O.add(Ne,{mat:13,color:Re=>{let Ze=(Re.y-Q)/de,pe=.55+.5*Math.min(1,Math.hypot(Re.x,Re.z)/Y)+.22*Ze+.08*(wi(Re.x*9.1,Re.z*7.3+Re.y)-.5)+H*.03;return[pe*.98,pe,pe*.94]},normal:(Re,Ze)=>{let re=Math.hypot(Re.x,Re.z);Ze.set(Re.x,re*.55+.32,Re.z).normalize()},tip:Re=>{let Ze=(Re.y-Q)/de,re=Math.atan2(Re.z,Re.x),pe=.5+.5*Math.sin(re*te+xe);return Math.min(1,Math.max(0,(Ze-.08)*1.5)*(.45+.55*pe)+.25*wi(Re.x*5.3,Re.z*4.1))}});let tt=new cn(Y*.97,de*.38,14,1,!0);Me(tt,!0),tt.translate(0,Q+de*.19-.02,0),O.add(tt,{mat:13,flip:!0,color:Re=>{let re=.42+.3*Math.min(1,Math.hypot(Re.x,Re.z)/Y);return[re*.95,re,re*.9]},normal:(Re,Ze)=>Ze.set(Re.x*.3,-1,Re.z*.3).normalize()}),F=Q+de}return O.add(new cn(.05,.5,5,1,!0).translate(0,F+.18,0),{mat:13,color:()=>[1,1.02,.95],tip:()=>.7}),O.geometry()})(),i={value:1},r={uFall:{value:0},uBloom:{value:0},uLush:{value:0},uBare:{value:0}},a=xn({...e,...r,uMoss:{value:0},uFrost:e.uSnowCover},i,{sway:.022,color:3358771,snowBias:-.3,crisp:!0,tree:!0}),o=1400,c=[],l=new Mn(n,a,o);{let O=new Ye,W=new ot,G=new D,F=new D,H=new Oe,q=0,Y=0;for(;q<o&&Y++<6e4;){let Q=Vi(-650,650),te=Vi(-700,260),xe=pn(Q,te);if(xe<3||xe>85||Xr(Q*.02,te*.02,3)<.42||t(Q,te))continue;let Me=Vi(2,4.6);F.set(Q,xe-.4,te),G.set(Me*Vi(.8,.95),Me*Vi(1.5,2.1),Me*Vi(.8,.95)),W.setFromAxisAngle(new D(0,1,0),Vi(0,Math.PI*2));let Ne=Vi(.82,1.12);H.setRGB(Ne,Ne*Vi(.97,1.03),Ne*Vi(.94,1)),c.push({p:F.clone(),s:G.clone(),q:W.clone(),c:H.clone()}),O.compose(F,W,G),l.setColorAt(q,H),l.setMatrixAt(q++,O)}l.count=q;let de=new Float32Array(o);for(let Q=0;Q<o;Q++)de[Q]=wi(Q*1.37,9.1);n.setAttribute("aHash",new Wn(de,1))}l.castShadow=!0,l.receiveShadow=!0,s.add(l);let u=new Map;c.forEach((O,W)=>{let G=Math.floor(O.p.x/il)+","+Math.floor(O.p.z/il);u.has(G)||u.set(G,[]),u.get(G).push(W)});let d=(O,W,G)=>{let F=Math.floor(O/il),H=Math.floor(W/il);for(let q=-1;q<=1;q++)for(let Y=-1;Y<=1;Y++){let de=u.get(F+q+","+(H+Y));if(de){for(let Q of de)if(G(Q))return!0}}return!1},f=(()=>{let O=new zt,W=(G,F)=>wi(G*3.17+F,G*1.91-F*2.3);for(let G=0;G<14;G++){let F=G%5,H=F/5,q=1.1-H*.8,Y=.5+H*2.5,de=G*2.39996+W(G,1)*.6,Q=q*(.62+.28*W(G,2)),te=Math.cos(de)*Q,xe=Math.sin(de)*Q,Me=.14+.16*W(G,3),Ne=.11+.05*W(G,4),tt=Y-.2*q*(Q/q)*(Q/q);O.add(new Ue(.006,.008,Me,4,1),{m:new Ye().makeTranslation(te,tt-Me/2,xe),color:()=>[.35,.33,.3]});let Re=new Ot(Ne,10,7),Ze=Re.attributes.position;for(let pe=0;pe<Ze.count;pe++){let Ee=Ze.getY(pe);Ze.setY(pe,(Ee<0?Ee*1.25:Ee)*.5)}Re.computeVertexNormals();let re=.6+.18*W(G,5);O.add(Re,{m:new Ye().makeTranslation(te,tt-Me-Ne*.5,xe),color:pe=>{let Ee=.85+.25*Math.max(0,pe.y-(tt-Me-Ne*.5))/Ne;return[re*Ee,re*Ee,re*Ee*.98]}})}return O.geometry()})(),h={uFruitCol:{value:0}},g=xn({...e,uMoss:{value:0},uFrost:{value:0}},i,{sway:.022,color:14211288});{let O=g.onBeforeCompile;g.onBeforeCompile=W=>{O(W),Object.assign(W.uniforms,h),W.vertexShader=W.vertexShader.replace("#include <common>",`#include <common>
uniform float uFruitCol;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`)}}let M=new Mn(f,g,l.count),x=c.map((O,W)=>wi(W*.37,5.1)<.5);{let O=new Ye,W=new Ye().makeScale(0,0,0),G=[13123630,14710826,14266416,10271290,12070954];c.forEach((F,H)=>{M.setMatrixAt(H,x[H]?O.compose(F.p,F.q,F.s):W),M.setColorAt(H,new Oe(G[H%G.length]))}),M.computeBoundingSphere()}M.castShadow=!0,s.add(M);let p=(()=>{let O=new zt,W=(G,F,H,q,Y)=>O.add(new Ue(Y*.35,Y,H,5).translate(0,H/2,0),{m:new Ye().compose(new D(0,G,0),new ot().setFromEuler(new un(0,F,q,"YXZ")),new D(1,1,1)),color:()=>[.36,.28,.22]});for(let G=0;G<16;G++){let F=.55+G*.17,H=(1-G/18)*.9+.12;W(F,G*2.4,H,1.1+G%3*.12,.03),W(F+.05,G*2.4+.9,H*.6,.8,.02)}return O.geometry()})(),b={value:0},w=new Mn(p,xn({...e,uMoss:{value:0},uFrost:{value:0}},b,{sway:.018,color:12101784}),l.count);{let O=new Ye().makeScale(0,0,0),W=new Ye;c.forEach((G,F)=>w.setMatrixAt(F,wi(F*1.37,9.1)<.45?W.compose(G.p,G.q,G.s):O)),w.computeBoundingSphere()}w.castShadow=!0,s.add(w);let y=new Oe(2.6,2.6,2.4),S=-1,A=new Map,R=new ot,E=new un,N=new Ye,V=()=>l.visible&&i.value>.5;return{mesh:l,fruits:M,base:c,geo:n,mat:a,get solid(){return V()},blocks(O,W,G=0){return V()?d(O,W,F=>{let H=c[F],q=H.p.x-O,Y=H.p.z-W,de=H.s.x*.75+1.2+G;return q*q+Y*Y<de*de}):!1},countNear(O,W,G){let F=0;return V()?(d(O,W,H=>{let q=c[H].p.x-O,Y=c[H].p.z-W;return q*q+Y*Y<G*G&&F++,!1}),F):0},pick(O){if(!V())return-1;let W=O.intersectObjects([l,M],!1)[0];return W?W.instanceId:-1},hover(O){return O===S?!1:(S>=0&&c[S]&&l.setColorAt(S,c[S].c),S=O,O>=0&&l.setColorAt(O,y),l.instanceColor.needsUpdate=!0,!0)},get hovered(){return S},shake(O,W){A.set(O,W)},update(O,W){a.color.copy(O.treeC),i.value=O.trees,l.visible=M.visible=O.trees>.01,r.uFall.value=O.fall,r.uBloom.value=O.bloom,r.uLush.value=O.lush,r.uBare.value=O.bare,h.uFruitCol.value=O.fruitCol,b.value=Math.min(1,O.bare*2.5)*O.trees,w.visible=b.value>.01,A.size&&(A.forEach((G,F)=>{let H=(W-G)/1e3,q=c[F];if(!q){A.delete(F);return}let Y=H>2.6?0:Math.sin(H*15)*Math.exp(-H*2.1)*.17;E.set(Y*.6,0,Y),R.setFromEuler(E).multiply(q.q),N.compose(q.p,R,q.s),l.setMatrixAt(F,N),x[F]&&M.setMatrixAt(F,N),H>2.6&&A.delete(F)}),l.instanceMatrix.needsUpdate=!0,M.instanceMatrix.needsUpdate=!0)}}}var sl=.6*ft.S,Mv=70;function Yf({trees:s,props:e,cabin:t,scenes:n,water:i}){let r=[],a=[],o=(l,u)=>{let d=pn(l,u);for(let f=0;f<6.28;f+=1.57)d=Math.max(d,pn(l+Math.cos(f)*4,u+Math.sin(f)*4));return Math.max(d,i.position.y)},c=()=>n.cur.pCabin>.5;return{groundAt:o,floor(l,u,d){r.length=0,a.length=0,c()&&t.floors(l,u,a),a.some(x=>x.under)||(r.push(o(l,u)),e.tops(l,u,n.cur,r));let h=-1/0,g=!1,M=(x,p)=>{x<=d+sl&&x>h&&(h=x,g=p)};if(r.forEach(x=>M(x,!1)),a.forEach(x=>M(x.y,!0)),h===-1/0){let x=1/0;r.forEach(p=>{Math.abs(p-d)<x&&(x=Math.abs(p-d),h=p,g=!1)}),a.forEach(p=>{Math.abs(p.y-d)<x&&(x=Math.abs(p.y-d),h=p.y,g=!0)})}return{y:h,built:g}},blocked(l,u,d,f=0){return!(Math.abs(l)<820&&u>-900&&u<420)||c()&&t.blocked(l,u,f,d)?!0:c()&&t.inside(l,u,d)?!1:pn(l,u)>Mv||s.blocks(l,u,f)?!0:e.blocks(l,u,f,n.cur,d)},inside(l,u,d){return c()&&d!==void 0&&t.inside(l,u,d)}}}var Yr=7.5,ja=24,Ev=2.4,Sv=44,wv=15.5,Tv=-1.1,Av=.9,Rv=.35,Ya=s=>(s=Math.min(1,Math.max(0,s)),s*s*s*(s*(s*6-15)+10));function Kf({physics:s,trees:e}){let t={mode:"home",x:0,z:0,feet:0,vy:0,air:!1,vx:0,vz:0,yaw:0,pitch:0,yawTo:0,pitchTo:0,eyeY:0,roll:0,bob:{phase:0,amp:0,run:0,lastStep:0},tw:null},n=new un(0,0,0,"YXZ"),i=(h,g,M=0)=>(n.set(g,h,M,"YXZ"),new ot().setFromEuler(n)),r=(h,g)=>Math.atan2(-h,-g),a=(h,...g)=>{let M=window.MEOW_SOUND;M&&M[h]&&M[h](...g)},o=(h,g)=>{let M=pn(t.x,t.z);return s.floor(t.x,t.z,t.feet).built?"wood":M<g.position.y+.6?"water":h.name==="snow"||M>h.cur.snowLine-6?"snow":"grass"},c=(h,g,M)=>!e.blocks(h,g,M+.001)&&!s.blocked(h,g,s.groundAt(h,g),M),l=(h,g,M,x)=>{let p=new D(0,0,-1).applyQuaternion(g);p.y=0,p.normalize();let b=Math.atan2(p.z,p.x),w=h.x,y=h.z,S=[];for(let O=-.7;O<=.701;O+=.05)for(let W=70;W<=380;W+=10){let G=b+O,F=w+Math.cos(G)*W,H=y+Math.sin(G)*W,q=pn(F,H);if(q<x+1.5||q>64)continue;let Y=(e.solid?Math.min(e.countNear(F,H,40),22)*2:30)-Math.abs(O)*34-W*.045;S.push({x:F,z:H,d:W,score:Y})}S.sort((O,W)=>W.score-O.score);let A=null;for(let O of S.slice(0,120)){if(!c(O.x,O.z,4))continue;let W=(w-O.x)/O.d,G=(y-O.z)/O.d,F=!0;for(let H=2;H<70&&F;H+=2.5)F=c(O.x+W*H,O.z+G*H,1.5);for(let H=3;H<30&&F;H+=3)F=c(O.x-W*H,O.z-G*H,1);if(F){A=O;break}}A||(A=S.slice(0,200).find(O=>c(O.x,O.z,2))||null),A||(A={x:w+p.x*60,z:y+p.z*60,d:60});let R=s.floor(A.x,A.z,s.groundAt(A.x,A.z)).y,E=r(p.x,p.z),V=r(A.x-w,A.z-y)-E;V=Math.atan2(Math.sin(V),Math.cos(V)),t.tw={kind:"enter",t0:performance.now(),dur:M?2300+A.d*5.2:700,from:h.clone(),fromQ:g.clone(),to:new D(A.x,R+Yr,A.z),yaw0:E,yaw1:E+V,lift:M?9+A.d*.02:0},t.mode="enter",t.vx=t.vz=0},u=(h,g,M)=>{t.tw={kind:"leave",t0:performance.now(),dur:M?1800:1,from:h.clone(),fromQ:g.clone()},t.mode="leave",t.vx=t.vz=0,t.vy=0,t.air=!1},d=(h,g)=>{if(s.blocked(h,g,t.feet))return!1;t.x=h,t.z=g;let M=s.floor(t.x,t.z,t.feet).y;return t.air||(M>=t.feet-sl?t.feet=M:(t.air=!0,t.vy=0)),!0},f=(h,g,M,x,p)=>{let b=-Math.sin(t.yaw),w=-Math.cos(t.yaw),y=(g.has("KeyW")||g.has("ArrowUp")?1:0)-(g.has("KeyS")||g.has("ArrowDown")?1:0),S=(g.has("KeyD")||g.has("ArrowRight")?1:0)-(g.has("KeyA")||g.has("ArrowLeft")?1:0),A=g.has("ShiftLeft")||g.has("ShiftRight"),R=b*y-w*S,E=w*y+b*S,N=Math.hypot(R,E),V=ja*(A?Ev:1);N>0&&(R=R/N*V,E=E/N*V);let O=1-Math.pow(1-(N>0?.08:.12),h*60);t.vx+=(R-t.vx)*O,t.vz+=(E-t.vz)*O;let W=Math.hypot(t.vx,t.vz)*h,G=Math.max(1,Math.ceil(W/Rv));for(let Q=0;Q<G;Q++){let te=t.vx*h/G,xe=t.vz*h/G;if(!d(t.x+te,t.z+xe)){if(d(t.x+te,t.z)){t.vz*=.5;continue}if(d(t.x,t.z+xe)){t.vx*=.5;continue}t.vx*=.3,t.vz*=.3;break}}if(t.air){t.vy-=Sv*h,t.feet+=t.vy*h;let Q=s.floor(t.x,t.z,Math.max(t.feet,t.feet-t.vy*h)).y;if(t.feet<=Q){if(t.feet=Q,t.air=!1,t.vy<-8){t.bob.amp=Math.min(1.4,t.bob.amp+.5);let te=o(x,p);a("step",te,1.5),setTimeout(()=>a("step",te,1.1),70)}t.vy=0}}else{let Q=s.floor(t.x,t.z,t.feet).y;Q>t.feet-sl?t.feet=Q:(t.air=!0,t.vy=0)}let F=t.feet+Yr;t.air?t.eyeY=F:(t.eyeY+=(F-t.eyeY)*(1-Math.exp(-h*16)),t.eyeY=Math.min(F+1.5,Math.max(F-1.5,t.eyeY)));let H=M?1-Math.pow(1-.12,h*60):1;t.yaw+=(t.yawTo-t.yaw)*H,t.pitch+=(t.pitchTo-t.pitch)*H;let q=t.bob,Y=Math.hypot(t.vx,t.vz);q.run+=((A?1:0)-q.run)*(1-Math.pow(.9,h*60)),q.amp+=(Math.min(1.2,Y/ja)-q.amp)*(1-Math.pow(.88,h*60)),q.phase+=Math.PI*2*(.95+.5*q.run)*Math.min(1,Y/ja+.15)*h*(Y>.3?1:.4);let de=Math.floor(q.phase/Math.PI);return de!==q.lastStep&&(q.lastStep=de,Y>ja*.25&&!t.air)?(a("step",o(x,p),Math.min(1.5,Y/ja)),!0):!1};return{state:t,get mode(){return t.mode},get walking(){return t.mode==="walk"},get out(){return t.mode!=="home"},get gliding(){return t.mode==="enter"||t.mode==="leave"},enter:l,leave:u,look(h,g,M){t.yawTo-=h*M,t.pitchTo=Math.max(Tv,Math.min(Av,t.pitchTo-g*M*.8))},turn(h){t.yawTo+=h},jump(){return t.mode!=="walk"||t.air?!1:(t.vy=wv,t.air=!0,!0)},place(h,g,M){t.x=h,t.z=g,t.feet=M!==void 0?M:s.floor(h,g,s.groundAt(h,g)).y,t.feet=s.floor(h,g,t.feet).y,t.eyeY=t.feet+Yr,t.vx=t.vz=t.vy=0,t.air=!1,t.mode!=="walk"&&(t.mode="walk",t.tw=null)},face(h,g=0){t.yaw=t.yawTo=h,t.pitch=t.pitchTo=g},update(h,g,M,x,p,b,w,y){let S=!1;if(t.mode==="walk"&&(S=f(h,M,p,b,w)),t.mode==="home")return y.pos.copy(x.pos),y.q.copy(x.q),y.roll=0,S;if(t.mode==="enter"){let E=t.tw,N=Math.min(1,(g-E.t0)/E.dur),V=Ya(N);y.pos.lerpVectors(E.from,E.to,V);let O=Ya((N-.3)/.7);y.pos.y=E.from.y+(E.to.y-E.from.y)*O+E.lift*Math.pow(Math.sin(Math.PI*Math.min(1,N*1.15)),1.4),y.pos.y=Math.max(y.pos.y,Math.max(pn(y.pos.x,y.pos.z),w.position.y)+4);let W=Ya(N/.55),G=E.yaw0+(E.yaw1-E.yaw0)*W,F=-.07*Math.sin(Math.PI*N)*(1-N*.5),H=i(G,F,(E.yaw1-E.yaw0)*.22*Math.sin(Math.PI*Math.min(1,N*1.3)));return y.q.copy(E.fromQ).slerp(H,Ya(N/.35)),y.roll=0,N>=1&&(t.mode="walk",t.tw=null,t.x=E.to.x,t.z=E.to.z,t.feet=E.to.y-Yr,t.eyeY=E.to.y,t.air=!1,t.yaw=t.yawTo=E.yaw1,t.pitch=t.pitchTo=0,this.justLanded=!0),S}if(t.mode==="leave"){let E=t.tw,N=Math.min(1,(g-E.t0)/E.dur),V=Ya(N);return y.pos.lerpVectors(E.from,x.pos,V),y.pos.y+=Math.sin(Math.PI*V)*6,y.q.copy(E.fromQ).slerp(x.q,V),y.roll=0,N>=1&&(t.mode="home",t.tw=null),S}y.pos.set(t.x,t.eyeY,t.z);let A=0,R=t.bob;if(R.amp>.001&&p){let E=Math.sin(R.phase),N=Math.sin(R.phase*2),V=R.amp*(1+R.run*.8);y.pos.y+=-Math.abs(E)*.32*V+.16*V;let O=E*.16*V;y.pos.x+=Math.cos(t.yaw)*O,y.pos.z-=Math.sin(t.yaw)*O,A=E*.006*V+N*.0015*V}return y.q.copy(i(t.yaw,t.pitch,A)),y.roll=A,S}}}function Jf(s){let e=new Ln(4,4,{type:kn,depthBuffer:!0});e.depthTexture=new Ni(4,4);let t={tScene:{value:e.texture},tDepth:{value:e.depthTexture},uRes:{value:new je(4,4)},uTime:s.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01},uNear:{value:.5},uFar:{value:3e3},uIndoor:{value:0},uBlurIn:{value:4.5}},n=new ys,i=new Bi(-1,1,1,-1,0,1);return n.add(new $e(new bt(2,2),new Bt({uniforms:t,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      uniform sampler2D tScene, tDepth; uniform vec2 uRes;
      uniform float uTime, uBlur, uBand, uFocusY, uPull, uAberr, uSat, uGrain, uVig, uFlicker, uNear, uFar, uIndoor, uBlurIn;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float lin(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      void main() {
        vec2 uv = vUv, c = uv - 0.5;
        float r = length(c * vec2(uRes.x / uRes.y, 1.0));
        float amt = smoothstep(uBand, uBand + 0.34, abs(uv.y - uFocusY)) * uBlur + smoothstep(0.5, 1.0, r) * uBlur * 0.55 + uPull;
        if (uIndoor > 0.01) {
          float zf = 1e5;
          for (int i = 0; i < 5; i++) { float a = float(i) * 1.2566; zf = min(zf, lin(texture2D(tDepth, vec2(0.5) + (i == 0 ? vec2(0.0) : vec2(cos(a), sin(a)) * 0.015)).x)); }
          float z = lin(texture2D(tDepth, uv).x);
          float coc = clamp(abs(z - zf) / max(z, 1.0) * 1.6, 0.0, 1.0) * uBlurIn + smoothstep(0.55, 1.0, r) * uBlurIn * 0.35;
          amt = mix(amt, coc + uPull, uIndoor);
        }
        // 16-tap disc blur on a golden-angle spiral = soft round bokeh
        vec3 col = vec3(0.0);
        float wsum = 0.0;
        vec2 px = 1.0 / uRes;
        for (int i = 0; i < 16; i++) {
          float fi = float(i), rr = sqrt((fi + 0.5) / 16.0), a = fi * 2.39996323;
          vec3 smp = texture2D(tScene, uv + vec2(cos(a), sin(a)) * rr * amt * px).rgb;
          // a broken (NaN / infinite) pixel must never smear into a dark blot
          if (smp.r >= 0.0 && smp.g >= 0.0 && smp.b >= 0.0) { col += min(smp, vec3(64.0)); wsum += 1.0; }
        }
        col /= max(wsum, 1.0);
        vec2 ca = c * uAberr * (0.4 + r);
        col.r = mix(col.r, texture2D(tScene, uv + ca).r, 0.55);
        col.b = mix(col.b, texture2D(tScene, uv - ca).b, 0.55);
        col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, uSat);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        gl_FragColor.rgb += (hash(uv * uRes + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
        gl_FragColor.rgb *= 1.0 - uVig * smoothstep(0.32, 1.05, r);
        gl_FragColor.rgb *= 1.0 + uFlicker * sin(uTime * 37.0) * sin(uTime * 11.0);
      }`}))),{LU:t,resize(r,a){e.setSize(r,a),t.uRes.value.set(r,a)},render(r,a,o){t.uNear.value=o.near,t.uFar.value=o.far,r.setRenderTarget(e),r.render(a,o),r.setRenderTarget(null),r.render(n,i)}}}var Zf=(s,e,t)=>{if(t<0)return 0;if(s==="torch")return e?t<.04?.55:t<.08?.12:t<.16?.12+(t-.08)/.08*.88:1:Math.max(0,1-t/.12);if(e){if(t<.12)return t/.12*.35;if(t<.24)return .35-(t-.12)/.12*.2;if(t<.7){let n=(t-.24)/.46;return .15+(1-Math.pow(1-n,3))*.85}return 1}return Math.max(0,1-Math.pow(t/.5,.8))};function $f(s,e){let t=new Vs(16772829,0,280,Ha.degToRad(32),.7,1.35);t.castShadow=!0,t.shadow.autoUpdate=!1,t.shadow.needsUpdate=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=280,t.shadow.bias=-.0012,t.shadow.normalBias=.06,s.add(t,t.target);let n=new Kn(16753498,0,120,1.25);s.add(n);let i=new Bt({transparent:!0,depthWrite:!1,side:En,blending:ni,fog:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new Oe(16773340)}},vertexShader:`
      varying vec3 vLocal; varying vec3 vN; varying vec3 vView;
      void main() {
        vLocal = position; vN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0); vView = normalize(-mv.xyz);
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
        float facing = abs(dot(normalize(vN), normalize(vView)));
        float edge = 0.18 + 0.82 * pow(1.0 - facing, 2.0);
        float fall = pow(1.0 - along, 1.8) * smoothstep(0.02, 0.3, along);
        float dust = 0.75 + 0.5 * noise(vLocal * vec3(9.0, 9.0, 26.0) + vec3(0.0, uTime * 0.25, uTime * 0.1));
        gl_FragColor = vec4(uColor * edge * fall * dust * uOpacity, 1.0);
        #include <colorspace_fragment>
      }`}),r=new $e(new cn(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),i);r.frustumCulled=!1,r.renderOrder=5,s.add(r);let a={state:"off",torch:{on:!1,since:-1e9},lamp:{on:!1,since:-1e9},aim:new D(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0,shadowTick:0},o=new D,c=new D,l=new D,u=new D,d=(f,...h)=>{let g=window.MEOW_SOUND;g&&g[f]&&g[f](...h)};return{get state(){return a.state},toggle(f){a.state==="off"?(a.state="torch",a.torch.on=!0,a.torch.since=f,d("click",!0)):a.state==="torch"?(a.state="lamp",a.torch.on=!1,a.torch.since=f,a.lamp.on=!0,a.lamp.since=f+120,d("click",!1),setTimeout(()=>d("ignite"),120)):(a.state="off",a.lamp.on=!1,a.lamp.since=f,d("puff")),d("fire",a.state==="lamp"),dispatchEvent(new CustomEvent("meow:light",{detail:{state:a.state}}))},off(f){a.state!=="off"&&(a.state="off",a.torch.on=a.lamp.on=!1,a.torch.since=a.lamp.since=f,d("fire",!1))},update(f,h,g,M,{fog:x,rain:p,bob:b,vx:w,vz:y,motionFull:S}){f.updateMatrixWorld(),o.set(0,0,-1).applyQuaternion(f.quaternion),c.set(1,0,0).applyQuaternion(f.quaternion),l.set(0,1,0).applyQuaternion(f.quaternion);let A=1-Math.pow(1-.16,M*60),R=(h-a.torch.since)/1e3,E=Zf("torch",a.torch.on,R)*(a.torch.on&&R>.16?.985+.015*Math.sin(g*40)*Math.sin(g*7):1);if(E>.001){let F=S?b.amp:0;t.position.copy(f.position).addScaledVector(c,.75).addScaledVector(l,-.6-Math.sin(b.phase)*.05*F).addScaledVector(o,.4),u.copy(o),S&&(u.addScaledVector(c,Math.sin(g*1.7)*.004+Math.sin(g*4.3)*.002+Math.sin(b.phase)*.01*F),u.addScaledVector(l,Math.sin(g*2.1+1)*.004+Math.sin(b.phase*2)*.008*F)),a.aim.lerp(u.normalize(),S?A:1).normalize(),t.target.position.copy(t.position).addScaledVector(a.aim,40);let H=90,q=Math.tan(t.angle)*H;r.position.copy(t.position),r.lookAt(t.target.position),r.scale.set(q,q,H),(a.shadowTick=(a.shadowTick+1)%2)===0&&(t.shadow.needsUpdate=!0)}else a.aim.copy(o);t.intensity=E*520,i.uniforms.uOpacity.value=E*(.018+.03*x+.035*p),r.visible=E>.01;let N=(h-a.lamp.since)/1e3,V=a.lamp.on&&N>.7?.88+.07*Math.sin(g*9.3+Math.sin(g*3.1)*2)+.04*Math.sin(g*23.7)+.02*Math.sin(g*41):1,O=Zf("lamp",a.lamp.on,N)*V;if(S){let F=(w-a.lastVX)/Math.max(M,.001),H=(y-a.lastVZ)/Math.max(M,.001),q=-(F*o.z-H*o.x)*.0012,Y=-(F*o.x+H*o.z)*.0012;a.swingV+=(-a.swing*14-a.swingV*1.8+q)*M,a.swing+=a.swingV*M,a.swingZV+=(-a.swingZ*14-a.swingZV*1.8+Y+Math.sin(b.phase*2)*.6*b.amp)*M,a.swingZ+=a.swingZV*M}a.lastVX=w,a.lastVZ=y,n.position.copy(f.position).addScaledVector(c,1.1+Math.sin(a.swing)*1.4).addScaledVector(l,-2.4+(1-Math.cos(a.swing))*1.4).addScaledVector(o,2.2+Math.sin(a.swingZ)*1),S&&a.lamp.on&&(n.position.y+=Math.sin(g*6.1)*.03),n.intensity=O*900;let W=document.documentElement,G=Math.max(E,O);return W.classList.toggle("light-on",G>.05),W.classList.toggle("lamp-on",O>.05),G},busy(f){return f-Math.max(a.torch.since,a.lamp.since)<1200}}}function Qf({scene:s,camera:e,heightAt:t,water:n}){let i=(G,F,H)=>window.MEOW_I18N?window.MEOW_I18N.t(G,H):F,r=(G,...F)=>{let H=window.MEOW_SOUND;H&&H[G]&&H[G](...F)},a=(()=>{let G=new zt,F=new Ot(1,18,12);return G.add(F,{m:L(0,0,0,0,0,0,1,.36,.28),color:H=>{let q=H.y>.05?.55:.85,Y=Math.sin(H.x*30)*Math.sin(H.z*40)>.6&&H.y>0?.8:1;return[q*.78*Y,q*.84*Y,q*.8*Y]}}),G.add(new cn(.3,.45,4),{m:L(-1.05,0,0,0,0,Math.PI/2,1,1,.25),color:()=>[.42,.46,.44]}),G.add(new cn(.16,.4,4),{m:L(.05,.38,0,0,0,-.4,1,1,.2),color:()=>[.42,.46,.44]}),[-1,1].forEach(H=>{G.add(new Ot(.07,8,6),{m:L(.72,.08,H*.17),color:()=>[.95,.95,.92]}),G.add(new Ot(.04,8,6),{m:L(.76,.085,H*.21),color:()=>[.05,.05,.05]})}),G.add(new An(.07,.025,6,12),{m:L(.99,-.02,0,0,Math.PI/2,0),color:()=>[.35,.22,.24]}),G.geometry()})(),o=new _n({vertexColors:!0}),c=5,l=1.6,u=Array.from({length:c},(G,F)=>{let H=new $e(a,o);H.visible=!1,H.scale.setScalar(l),s.add(H);let q=new $e(new Ma(.85,1,32).rotateX(-Math.PI/2),new $t({color:15265520,transparent:!0,opacity:0,depthWrite:!1}));return q.visible=!1,s.add(q),{m:H,ring:q,next:performance.now()+1500+F*1700,t0:0,x:0,z:0,yaw:0,on:!1}}),d=(G,F,H,q)=>{u.forEach(Y=>{if(!Y.on){if(Y.m.visible=!1,G<.05||q||F<Y.next){Y.ring.visible=Y.ring.visible&&F-Y.t0<2600;return}for(let tt=0;tt<8;tt++){let Re=Math.random()*Math.PI*2,Ze=16+Math.random()*60,re=e.position.x+Math.cos(Re)*Ze,pe=e.position.z+Math.sin(Re)*Ze;if(t(re,pe)<H-1.5){Y.x=re,Y.z=pe,Y.yaw=Math.random()*6.28,Y.on=!0,Y.t0=F;break}}Y.next=F+(2500+Math.random()*6e3)/Math.max(.2,G),Y.on&&Math.hypot(Y.x-e.position.x,Y.z-e.position.z)<45&&setTimeout(()=>r("plop",.6),250)}if(!Y.on)return;let de=(F-Y.t0)/1e3,Q=de<.35?de/.35:de<.9?1:Math.max(0,1-(de-.9)/.45),te=Q*Q*(3-2*Q);Y.m.visible=!0,Y.m.position.set(Y.x,H-1.2*l+te*1.45*l,Y.z),Y.m.rotation.set(0,Y.yaw,1.05-(de>.9?(de-.9)*1.6:0));let xe=de>.4&&de<.85?1+.12*Math.sin((de-.4)*40):1;Y.m.scale.set(l,l*xe,l),Y.ring.visible=!0,Y.ring.position.set(Y.x,H+.05,Y.z);let Me=Math.max(0,de-.2),Ne=.6+Me*2.4;Y.ring.scale.setScalar(Ne),Y.ring.material.opacity=Math.max(0,.55-Me*.22),de>1.4&&(Y.on=!1,Y.m.visible=!1)})};s.add(e);let f=new rn;{let G=new _n({color:7031342}),F=new _n({color:2236962}),H=new $e(new Ue(.012,.035,2.4,6).translate(0,1.2,0),G),q=new $e(new Ue(.045,.045,.35,8).translate(0,.18,0),F),Y=new $e(new Ue(.08,.08,.06,12),F);Y.rotation.z=Math.PI/2,Y.position.set(.06,.42,0),f.add(H,q,Y),f.position.set(.55,-.85,-.9),f.rotation.set(-.95,0,-.25),f.visible=!1,e.add(f)}let h=new D(0,2.4,0),g=new rn;{let G=new $e(new Ot(.16,10,8,0,Math.PI*2,0,Math.PI/2),new _n({color:14173230,emissive:4198408})),F=new $e(new Ot(.16,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new _n({color:15921386})),H=new $e(new Ue(.015,.015,.3,5).translate(0,.22,0),new _n({color:14173230}));g.add(G,F,H),g.scale.setScalar(2.2),g.visible=!1,s.add(g)}let M=16,x=new Rt;x.setAttribute("position",new Ut(new Float32Array(M*3),3));let p=new Qi(x,new Es({color:15263968,transparent:!0,opacity:.7}));p.frustumCulled=!1,p.visible=!1,s.add(p);let b=new $e(a,o);b.visible=!1,s.add(b);let w=document.createElement("div");w.className="fish-hint",document.body.appendChild(w);let y=(G,F)=>{w.textContent=G||"",w.classList.toggle("show",!!G),w.classList.toggle("hot",!!F)},S={mode:"idle",t0:0,from:new D,to:new D,biteAt:0,aim:null,catchFrom:new D},A=0;try{A=+(localStorage.getItem("meow.fish")||0)}catch{}let R=new D,E=new D,N=new ti(new D(0,1,0),0),V=(G,F)=>{N.constant=-F;let H=G.ray.intersectPlane(N,new D);if(!H)return null;let q=H.distanceTo(e.position);return q>70||q<6||t(H.x,H.z)>F-.6?null:H},O=G=>{let F=document.getElementById("toast");F&&(F.textContent=G,F.classList.add("show"),clearTimeout(O.t),O.t=setTimeout(()=>F.classList.remove("show"),3200))},W=()=>{S.mode="idle",f.visible=!1,g.visible=!1,p.visible=!1};return{setModel(G,F){u.forEach(H=>{H.m.geometry=G,H.m.material=F}),b.geometry=G,b.material=F},get busy(){return S.mode!=="idle"},reset(){W(),b.visible=!1,y("")},key(G){return S.mode==="idle"?S.aim?(S.mode="cast",S.t0=G,S.to.copy(S.aim),f.visible=!0,p.visible=!0,g.visible=!0,r("cast"),!0):!1:S.mode==="bite"?this.strike(G):S.mode==="wait"||S.mode==="cast"?(r("reel"),W(),!0):!1},click(G){return S.mode==="bite"?this.strike(G):!1},strike(G){S.mode="catch",S.t0=G,S.catchFrom.copy(g.position),g.visible=!1,r("splash",!0);let F=i("fishNames","Trout|Perch|Carp|Pike|Bass|Catfish").split("|"),H=F[Math.floor(Math.random()*F.length)],q=18+Math.floor(Math.random()*40);A++;try{localStorage.setItem("meow.fish",String(A))}catch{}return b.scale.setScalar(.6+(q-18)/60),setTimeout(()=>O("\u{1F41F} "+i("fishCaught","You caught a {name}! {cm} cm \xB7 {n} so far",{name:H,cm:q,n:A})),700),!0},update(G,F,{active:H,ray:q,waterY:Y,amount:de,indoor:Q}){if(d(de,G,Y,Q),S.aim=H&&!Q&&S.mode==="idle"&&q?V(q,Y):null,e.updateMatrixWorld(),R.copy(h).applyMatrix4(f.matrixWorld),S.mode==="cast"){let te=Math.min(1,(G-S.t0)/800);g.position.lerpVectors(R,S.to,te),g.position.y+=Math.sin(Math.PI*te)*8,te>=1&&(S.mode="wait",S.biteAt=G+3e3+Math.random()*7e3,r("plop",.8))}else if(S.mode==="wait")g.position.set(S.to.x,Y+Math.sin(F*2.2)*.06,S.to.z),G>S.biteAt&&(S.mode="bite",S.t0=G,r("splash",!1)),e.position.distanceTo(S.to)>80&&(W(),O(i("fishSnap","The line snapped")));else if(S.mode==="bite"){let te=(G-S.t0)/1e3;g.position.set(S.to.x+Math.sin(te*20)*.08,Y-.25-Math.abs(Math.sin(te*9))*.45,S.to.z),te>1.5&&(S.mode="wait",S.biteAt=G+2500+Math.random()*6e3,O(i("fishAway","It got away\u2026")))}else if(S.mode==="catch"){let te=Math.min(1,(G-S.t0)/1100);E.set(0,-.4,-3.2).applyQuaternion(e.quaternion).add(e.position),b.visible=!0,b.position.lerpVectors(S.catchFrom,E,te),b.position.y+=Math.sin(Math.PI*te)*6,b.rotation.set(Math.sin(F*18)*.4,F*4,Math.PI/2*(1-te)),te>=1&&(b.visible=!1,W())}if(p.visible){let te=x.attributes.position;for(let xe=0;xe<M;xe++){let Me=xe/(M-1);E.lerpVectors(R,g.visible?g.position:S.catchFrom,Me),E.y-=Math.sin(Math.PI*Me)*(S.mode==="bite"?.2:1.2),te.setXYZ(xe,E.x,E.y,E.z)}te.needsUpdate=!0,f.rotation.x=-.95+(S.mode==="bite"?Math.sin(F*30)*.05-.15:0)}H?S.mode==="bite"?y(i("fishBite","A bite! Click now!"),!0):S.mode==="wait"||S.mode==="cast"?y(i("fishWait","Waiting for a bite\u2026 \xB7 R reel in")):S.aim?y(i("fishCast","R  cast the line")):y(""):y("")}}}function e0({group:s,U:e,trees:t,shared:n}){let i=qr(7177),r=(W,G)=>W+i()*(G-W),a=Xt.floor,o={value:1},c=St.z1-St.z0,l=(W,G)=>{let F=Math.min(1,Math.max(0,(St.z1-G)/c));return a+.12+F*F*1.5+(Vt(W*.55,1.3,G*.55)-.5)*.45*(.3+F)+Math.min(1.2,Math.abs(W)*.08)*F},u=(()=>{let W=new bt(St.x1-St.x0,c+.4,70,40).rotateX(-Math.PI/2);W.translate((St.x0+St.x1)/2,0,(St.z0+St.z1)/2+.2);let G=W.attributes.position;for(let F=0;F<G.count;F++)G.setY(F,l(G.getX(F),G.getZ(F)));return W.computeVertexNormals(),new zt().add(W,{color:F=>{let H=.82+Vt(F.x*2.2,0,F.z*2.2)*.25+Vt(F.x*9,3,F.z*9)*.08;return[H*.95,H,H*.88]},tip:()=>1}).geometry()})(),d=xn({...n,uFrost:{value:0}},o,{color:16777215,snowBias:-.2}),f=new $e(u,d);f.receiveShadow=!0,s.add(f);let h=[];for(let W=0,G=0;W<18&&G<400;G++){let F=r(St.x0+.8,St.x1-.8),H=r(St.z0+.8,St.z1-2.2);if(St.z1-H<4.5&&Math.abs(F)<2.2||h.some(te=>Math.hypot(te.x-F,te.z-H)<1.6))continue;let Y=l(F,H)-.15,de=(St.y1-.25-Y)/(3.75*1.8),Q=Math.min(de,r(.42,.78));Q<.25||(h.push({x:F,z:H,base:Y,k:Q}),W++)}let g=new Mn(t.geo,t.mat,h.length);{let W=new Ye,G=new ot,F=new D(0,1,0);h.forEach((H,q)=>{g.setMatrixAt(q,W.compose(new D(H.x,H.base,H.z),G.setFromAxisAngle(F,i()*6.28),new D(H.k*r(.8,.95),H.k*r(1.6,1.9),H.k*r(.8,.95))));let Y=r(.85,1.1);g.setColorAt(q,new Oe(Y,Y*r(.97,1.03),Y*r(.94,1)))})}s.add(g);let M=(()=>{let W=[];for(let G=0;G<9;G++){let F=G/9*Math.PI*2+i()*.7,H=r(.18,.42),q=r(.1,.4),Y=i()*.08,de=.016,Q=Math.cos(F)*Y,te=Math.sin(F)*Y,xe=Math.cos(F)*q,Me=Math.sin(F)*q,Ne=-Math.sin(F)*de,tt=Math.cos(F)*de,Re=[Q+xe*H*.35,H*.55,te+Me*H*.35],Ze=[Q+xe*H,H*.92,te+Me*H];W.push([Q-Ne,0,te-tt],[Q+Ne,0,te+tt],[Re[0]+Ne*.6,Re[1],Re[2]+tt*.6]),W.push([Q-Ne,0,te-tt],[Re[0]+Ne*.6,Re[1],Re[2]+tt*.6],[Re[0]-Ne*.6,Re[1],Re[2]-tt*.6]),W.push([Re[0]-Ne*.6,Re[1],Re[2]-tt*.6],[Re[0]+Ne*.6,Re[1],Re[2]+tt*.6],Ze)}return new zt().tris(W,G=>{let F=G.y/.42;return[.48*(.55+.6*F),.6*(.55+.6*F),.3*(.55+.6*F)]},G=>Math.pow(G.y/.42,1.5),new D(0,1,0)).geometry()})(),x=xn(n,o,{sway:.4,side:an,color:16777215,snowBias:-1,softBack:!0}),p=[];for(let W=0;W<160;W++){let G=r(St.x0+.3,St.x1-.3),F=r(St.z0+.3,St.z1-.1);Vt(G*.8,7,F*.8)<.38||p.push([G,l(G,F)-.02,F,r(.7,1.5)])}let b=new Mn(M,x,p.length);{let W=new Ye,G=new ot,F=new D(0,1,0);p.forEach(([H,q,Y,de],Q)=>b.setMatrixAt(Q,W.compose(new D(H,q,Y),G.setFromAxisAngle(F,i()*6.28),new D(de,de*r(.8,1.3),de))))}s.add(b);let w=new zt;for(let W=0;W<6;W++){let G=new Hs(1,1),F=G.attributes.position,H=new D,q=W*3.1;for(let te=0;te<F.count;te++)H.fromBufferAttribute(F,te),H.multiplyScalar(1+(Vt(H.x*1.6+q,H.y*1.6,H.z*1.6)-.5)*.5),H.y=Math.max(-.3,H.y)*.7,F.setXYZ(te,H.x,H.y,H.z);let Y=r(St.x0+1,St.x1-1),de=r(St.z0+1,St.z1-1.5),Q=r(.18,.45);w.add(G,{m:L(Y,l(Y,de)+Q*.05,de,0,i()*6,0,Q*1.2,Q,Q),flat:!0,color:te=>{let xe=.5+Vt(te.x*4+q,te.y*4,te.z*4)*.25;return[xe,xe*.99,xe*.95]}})}s.add(new $e(w.geometry(),xn({...n,uFrost:{value:0}},o,{color:9277328,snowBias:.05})));let y={uHill:{value:new Oe},uHaze:{value:new Oe}},S=new Bt({uniforms:{...e,...y},fog:!1,vertexShader:`
      varying vec3 vW;
      void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform float uTime, uSunSize, uStars, uAurora;
      uniform vec3 uTop, uHorizon, uBottom, uSunColor, uSunDir, uAur1, uAur2, uHill, uHaze;
      varying vec3 vW;
      float hh(float x) { return fract(sin(x * 127.1) * 43758.5453); }
      float n1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(hh(i), hh(i + 1.0), f); }
      float hash3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      void main() {
        vec3 d = normalize(vW - cameraPosition);
        float h = d.y;
        vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uBottom, clamp(-h / 0.25, 0.0, 1.0));
        float sd = dot(d, normalize(uSunDir));
        col += uSunColor * (smoothstep(1.0 - uSunSize, 1.0 - uSunSize * 0.6, sd) + pow(max(sd, 0.0), 90.0) * 0.55 + pow(max(sd, 0.0), 10.0) * 0.12) * step(0.00001, uSunSize);
        float star = step(0.9972, hash3(floor(d * 420.0))) * smoothstep(0.02, 0.2, h);
        col += vec3(star) * uStars;
        float az = atan(d.x, -d.z);
        if (uAurora > 0.001) col += mix(uAur1, uAur2, smoothstep(0.12, 0.35, h)) * smoothstep(0.1, 0.16, h) * exp(-max(h - 0.16, 0.0) * 7.0) * (0.6 + 0.4 * sin(az * 40.0 + uTime * 0.3)) * uAurora * 0.9;
        // three ranges of hills, the near one with a ragged line of pines on top
        for (int i = 0; i < 3; i++) {
          float fi = float(i);
          float ridge = 0.035 + fi * -0.012 + 0.07 * (n1(az * (2.0 + fi * 1.7) + fi * 9.0) * 0.7 + n1(az * (7.0 + fi * 3.0) + fi * 3.0) * 0.3) * (1.0 - fi * 0.25);
          if (i == 2) {
            float tri = 1.0 - abs(fract(az * 55.0) * 2.0 - 1.0);
            ridge += 0.03 * tri * step(0.35, n1(az * 16.0)) * (0.6 + 0.4 * n1(az * 90.0));
          }
          float haze = (2.0 - fi) / 2.0 * 0.75;
          vec3 hill = mix(uHill * (0.75 + 0.1 * fi), uHaze, haze);
          col = mix(col, hill, smoothstep(0.004, -0.004, h - ridge));
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),A=St.x1-St.x0,R=St.y1-St.y0,E=(St.x0+St.x1)/2,N=(St.y0+St.y1)/2,V=(St.z0+St.z1)/2;[[new bt(A,R),L(E,N,St.z0)],[new bt(c,R),L(St.x0,N,V,0,Math.PI/2,0)],[new bt(c,R),L(St.x1,N,V,0,-Math.PI/2,0)],[new bt(A,c),L(E,St.y1,V,Math.PI/2,0,0)]].forEach(([W,G])=>{let F=new $e(W,S);F.applyMatrix4(G),s.add(F)});let O=new Oe;return{update(W){O.copy(W.low).multiplyScalar(1.45),d.color.copy(O),x.color.copy(W.low).multiplyScalar(1.7),y.uHill.value.copy(W.snowLine<60?W.snowC:W.low).multiplyScalar(.85),y.uHaze.value.copy(W.fog),g.visible=W.trees>.01}}}function Vh(s,e){if(e===dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Br||e===za){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Br)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function t0(s){let e=new Map,t=new Map,n=s.clone();return n0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function n0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)n0(s.children[n],e.children[n],t)}var rl=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new al(t,Nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new al(t,Nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new lu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=rs.extractUrlBase(e);a=rs.resolveURL(l,this.path)}else a=rs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Pr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===o0){try{a[Nt.KHR_BINARY_GLTF]=new hu(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new xu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case Nt.KHR_MATERIALS_UNLIT:a[d]=new Yh;break;case Nt.KHR_DRACO_MESH_COMPRESSION:a[d]=new uu(r,this.dracoLoader);break;case Nt.KHR_TEXTURE_TRANSFORM:a[d]=new du;break;case Nt.KHR_MESH_QUANTIZATION:a[d]=new fu;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Cv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function bn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jh=class{constructor(e){this.parser=e,this.name=Nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Bn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ws(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kn(u),l.distance=d;break;case"spot":l=new Vs(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Yh=class{constructor(){this.name=Nt.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,hn))}return Promise.all(i)}},Kh=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new je(r,r)}return Promise.all(i)}},Zh=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Qh=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Bn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,hn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},eu=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},tu=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(r[0],r[1],r[2],Bn),Promise.all(i)}},nu=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_IOR}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},iu=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(r[0],r[1],r[2],Bn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,hn)),Promise.all(i)}},su=class{constructor(e){this.parser=e,this.name=Nt.EXT_MATERIALS_BUMP}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},ru=class{constructor(e){this.parser=e,this.name=Nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return bn(this.parser,e,this.name)!==null?jn:null}extendMaterialParams(e,t){let n=bn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},au=class{constructor(e){this.parser=e,this.name=Nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ou=class{constructor(e){this.parser=e,this.name=Nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},cu=class{constructor(e){this.parser=e,this.name=Nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},al=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(h){return h.buffer}):a.ready.then(function(){let h=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(h),u,d,f,i.mode,i.filter),h})})}else return null}},lu=class{constructor(e){this.name=Nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==fi.TRIANGLES&&l.mode!==fi.TRIANGLE_STRIP&&l.mode!==fi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,h=[];for(let g of d){let M=new Ye,x=new D,p=new ot,b=new D(1,1,1),w=new Mn(g.geometry,g.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&b.fromBufferAttribute(c.SCALE,S),w.setMatrixAt(S,M.compose(x,p,b));let y=null;for(let S in c)if(S==="_COLOR_0"){let A=c[S];w.instanceColor=new Wn(A.array,A.itemSize,A.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){let R=w.geometry;y=new Rt,y.name=R.name;for(let E in R.attributes)y.setAttribute(E,R.attributes[E]);for(let E in R.morphAttributes)y.morphAttributes[E]=R.morphAttributes[E];R.index!==null&&y.setIndex(R.index),y.morphTargetsRelative=R.morphTargetsRelative;for(let E of R.groups)y.addGroup(E.start,E.count,E.materialIndex);R.boundingBox!==null&&(y.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(y.boundingSphere=R.boundingSphere.clone()),y.drawRange.start=R.drawRange.start,y.drawRange.count=R.drawRange.count,y.userData=Object.assign({},R.userData),w.geometry=y}let A=c[S];y.setAttribute(S,new Wn(A.array,A.itemSize,A.normalized))}dn.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),h.push(w)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}},o0="glTF",Ka=12,i0={JSON:1313821514,BIN:5130562},hu=class{constructor(e){this.name=Nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ka,r=new DataView(e,Ka),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===i0.JSON){let l=new Uint8Array(e,Ka+a,o);this.content=n.decode(l)}else if(c===i0.BIN){let l=Ka+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let d=mu[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=mu[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],h=Kr[f.componentType];l[d]=h.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(h){for(let g in h.attributes){let M=h.attributes[g],x=c[g];x!==void 0&&(M.normalized=x)}d(h)},o,l,Bn,f)})})}},du=class{constructor(){this.name=Nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},fu=class{constructor(){this.name=Nt.KHR_MESH_QUANTIZATION}},ol=class extends Ui{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,d=(n-t)/u,f=d*d,h=f*d,g=e*l,M=g-l,x=-2*h+3*f,p=h-f,b=1-x,w=p-f+d;for(let y=0;y!==o;y++){let S=a[M+y+o],A=a[M+y+c]*u,R=a[g+y+o],E=a[g+y]*u;r[y]=b*S+w*A+x*R+p*E}return r}},Pv=new ot,pu=class extends ol{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Pv.fromArray(r).normalize().toArray(r),r}},fi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},s0={9728:mn,9729:fn,9984:cc,9985:Nr,9986:Ys,9987:Ei},r0={33071:ci,33648:gr,10497:Ii},Wh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iv={CUBICSPLINE:void 0,LINEAR:Us,STEP:Fs},qh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Lv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),s.DefaultMaterial}function $s(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Nv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fv(s){let e,t=s.extensions&&s.extensions[Nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xh(t.attributes):e=s.indices+":"+Xh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Xh(s.targets[n]);return e}function Xh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function gu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Uv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ov=new Ye,xu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&i<17||r&&a<98?this.textureLoader=new wa(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return $s(r,o,i),Wi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Nt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(rs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Wh[i.type],o=Kr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ut(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Wh[i.type],l=Kr[i.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,M,x;if(h&&h!==d){let p=Math.floor(f/h),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=t.cache.get(b);w||(M=new l(o,p*h,i.count*h/u),w=new Er(M,h/u),t.cache.add(b,w)),x=new Sr(w,c,f%h/u,g)}else o===null?M=new l(i.count*c):M=new l(o,f,i.count*c),x=new Ut(M,c,g);if(i.sparse!==void 0){let p=Wh.SCALAR,b=Kr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new b(a[1],w,i.sparse.count*p),A=new l(a[2],y,i.sparse.count*c);o!==null&&(x=new Ut(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let R=0,E=S.length;R<E;R++){let N=S[R];if(x.setX(N,A[R*c]),c>=2&&x.setY(N,A[R*c+1]),c>=3&&x.setZ(N,A[R*c+2]),c>=4&&x.setW(N,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=s0[f.magFilter]||fn,u.minFilter=s0[f.minFilter]||Ei,u.wrapS=r0[f.wrapS]||Ii,u.wrapT=r0[f.wrapT]||Ii,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==mn&&u.minFilter!==fn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(M){let x=new gn(M);x.needsUpdate=!0,f(x)}),t.load(rs.resolveURL(d,r.path),g,void 0,h)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Wi(d,a),d.userData.mimeType=a.mimeType||Uv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Nt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ar,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Es,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return es}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Nt.KHR_MATERIALS_UNLIT]){let d=i[Nt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bn),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,hn)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let u=r.alphaMode||qh.OPAQUE;if(u===qh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===qh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==$t){let d=r.emissiveFactor;o.emissive=new Oe().setRGB(d[0],d[1],d[2],Bn)}return r.emissiveTexture!==void 0&&a!==$t&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,hn)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Wi(d,r),t.associations.set(d,{materials:e}),r.extensions&&$s(i,d,r),d})}createUniqueName(e){let t=nn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return a0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Fv(l),d=i[u];if(d)a.push(d.promise);else{let f;l.extensions&&l.extensions[Nt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=a0(new Rt,l,t),l.mode===fi.TRIANGLE_STRIP?f=f.then(h=>Vh(h,za)):l.mode===fi.TRIANGLE_FAN&&(f=f.then(h=>Vh(h,Br))),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Lv(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let h=0,g=u.length;h<g;h++){let M=u[h],x=a[h],p,b=l[h];if(x.mode===fi.TRIANGLES||x.mode===fi.TRIANGLE_STRIP||x.mode===fi.TRIANGLE_FAN||x.mode===void 0){let w=r.isSkinnedMesh===!0,y=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");w&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&y?new ma(M,b):new $e(M,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(x.mode===fi.LINES)p=new Bs(M,b);else if(x.mode===fi.LINE_STRIP)p=new Qi(M,b);else if(x.mode===fi.LINE_LOOP)p=new xa(M,b);else if(x.mode===fi.POINTS)p=new qn(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Wi(p,r),x.extensions&&$s(i,p,x),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&$s(i,d[0],r),d[0];let f=new rn;r.extensions&&$s(i,f,r),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(Ha.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let d=a[l];if(d){o.push(d);let f=new Ye;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ga(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){let h=i.channels[d],g=i.samplers[h.sampler],M=h.target,x=M.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;M.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),u.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let f=d[0],h=d[1],g=d[2],M=d[3],x=d[4],p=[];for(let w=0,y=f.length;w<y;w++){let S=f[w],A=h[w],R=g[w],E=M[w],N=x[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let V=n._createAnimationTracks(S,A,R,E,N);if(V)for(let O=0;O<V.length;O++)p.push(V[O])}let b=new Sa(r,void 0,p);return Wi(b,i),b})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],d=l[1],f=l[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,Ov)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);if(u.userData.pivot!==void 0&&d.length>0){let h=u.userData.pivot,g=d[0];u.pivot=new D().fromArray(h),u.position.x-=h[0],u.position.y-=h[1],u.position.z-=h[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new wr:l.length>1?u=new rn:l.length===1?u=l[0]:u=new dn,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Wi(u,r),r.extensions&&$s(n,u,r),r.matrix!==void 0){let d=new Ye;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new rn;n.name&&(r.name=i.createUniqueName(n.name)),Wi(r,n),n.extensions&&$s(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++){let f=c[u];f.parent!==null?r.add(t0(f)):r.add(f)}let l=u=>{let d=new Map;for(let[f,h]of i.associations)(f instanceof zn||f instanceof gn)&&d.set(f,h);return u.traverse(f=>{let h=i.associations.get(f);h!=null&&d.set(f,h)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}Cs[r.path]===Cs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(Cs[r.path]){case Cs.weights:u=ns;break;case Cs.rotation:u=is;break;case Cs.translation:case Cs.scale:u=Ss;break;default:switch(n.itemSize){case 1:u=ns;break;case 2:case 3:default:u=Ss;break}break}let d=i.interpolation!==void 0?Iv[i.interpolation]:Us,f=this._getArrayFromAccessor(n);for(let h=0,g=c.length;h<g;h++){let M=new u(c[h]+"."+Cs[r.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof is?pu:ol;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Bv(s,e,t){let n=e.attributes,i=new Dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=gu(Kr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,u=r.length;l<u;l++){let d=r[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){let M=gu(Kr[f.componentType]);c.multiplyScalar(M)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Vn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function a0(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=mu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return It.workingColorSpace!==Bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),Wi(s,e),Bv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dv(s,e.targets,t):s})}var c0=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),w=0;w<p.length;++w){var y=p.charCodeAt(w);b[w]=y>96?y-97:y>64?y-39:y+4}for(var S=0,w=0;w<p.length;++w)b[S++]=b[w]<60?n[b[w]]:(b[w]-60)*64+b[++w];return b.buffer.slice(0,S)}function c(p,b,w,y,S,A,R){var E=p.exports.sbrk,N=y+3&-4,V=E(N*S),O=E(A.length),W=new Uint8Array(p.exports.memory.buffer);W.set(A,O);var G=b(V,y,S,O,A.length);if(G==0&&R&&R(V,N,S),w.set(W.subarray(V,V+y*S)),E(V-E(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function h(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(w){var y=w.data;b.pending-=y.count,b.requests[y.id][y.action](y.value),delete b.requests[y.id]},b}function g(p){for(var b="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+x.name+";"+c.toString()+x.toString(),w=new Blob([b],{type:"text/javascript"}),y=URL.createObjectURL(w),S=d.length;S<p;++S)d[S]=h(y);for(var S=p;S<d.length;++S)d[S].object.postMessage({});d.length=p,URL.revokeObjectURL(y)}function M(p,b,w,y,S){for(var A=d[0],R=1;R<d.length;++R)d[R].pending<A.pending&&(A=d[R]);return new Promise(function(E,N){var V=new Uint8Array(w),O=++f;A.pending+=p,A.requests[O]={resolve:E,reject:N},A.object.postMessage({id:O,count:p,size:b,source:V,mode:y,filter:S},[V.buffer])})}function x(p){var b=p.data;self.ready.then(function(w){if(!b.id)return self.close();try{var y=new Uint8Array(b.count*b.size);c(w,w.exports[b.mode],y,b.count,b.size,b.source,w.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:y},[y.buffer])}catch(S){self.postMessage({id:b.id,count:b.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,b,w,y,S){c(r,r.exports.meshopt_decodeVertexBuffer,p,b,w,y,r.exports[l[S]])},decodeIndexBuffer:function(p,b,w,y){c(r,r.exports.meshopt_decodeIndexBuffer,p,b,w,y)},decodeIndexSequence:function(p,b,w,y){c(r,r.exports.meshopt_decodeIndexSequence,p,b,w,y)},decodeGltfBuffer:function(p,b,w,y,S,A){c(r,r.exports[u[S]],p,b,w,y,r.exports[l[A]])},decodeGltfBufferAsync:function(p,b,w,y,S){return d.length>0?M(p,b,w,u[y],l[S]):a.then(function(){var A=new Uint8Array(p*b);return c(r,r.exports[u[y]],A,p,b,w,r.exports[l[S]]),A})}}}();function l0({cabin:s,fishing:e}){let t=new rl().setMeshoptDecoder(c0),n={},i=M=>n[M]=n[M]||new Promise((x,p)=>t.load(`assets/models/${M}.glb`,b=>x(b.scene),void 0,p)),r=Xt.floor,a=Xt.mezz,o=s.group,c=s.study,l={glass:[],light:null,ready:0},u=(M,{h:x,w:p,s:b})=>{let w=M.clone(!0),y=new Dn().setFromObject(w),S=y.getSize(new D);w.scale.multiplyScalar(b||(x?x/S.y:p/S.x)),y.setFromObject(w);let A=y.getCenter(new D);w.position.set(-A.x,-y.min.y,-A.z);let R=new rn;return R.add(w),R},d=(M,x)=>(M.traverse(p=>{p.isMesh&&(p.castShadow=p.receiveShadow=!0,p.layers.enable(5),(Array.isArray(p.material)?p.material:[p.material]).forEach(b=>{b.envMapIntensity=x}))}),M),f=(M,x,p,b,w=0)=>(M.position.set(x,p,b),M.rotation.y=w,o.add(M),M),h=()=>{l.ready++,c.shadowLight&&(c.shadowLight.shadow.needsUpdate=!0)},g=M=>x=>console.warn("[MEOW] model not loaded:",M,x&&x.message);return Promise.all([i("SheenWoodLeatherSofa"),i("ChairDamaskPurplegold"),i("SheenChair")]).then(([M,x,p])=>{f(d(u(M,{w:2.3}),.3),-1.8,r,-1.4,Math.PI),f(d(u(x,{s:1.15}),.3),0,r,-8.9,0),[-4.6,-2.9].forEach(b=>f(d(u(p,{s:1.15}),.3),3.6,a,b,-Math.PI/2)),c.swap.visible=!1,h()}).catch(g("library furniture")),i("AntiqueCamera").then(M=>{f(d(u(M,{h:1.55}),.35),5.35,r,-.3,-Math.PI*.75),h()}).catch(g("AntiqueCamera")),i("Lantern").then(M=>{let x=s.LANT,p=d(u(M,{h:2.35}),.8);p.traverse(w=>{if(!w.isMesh)return;let y=w.material;y.emissive&&(y.emissiveMap||y.emissive.getHex()!==0)&&(y.userData.e0=y.emissiveIntensity,l.glass.push(y))}),f(p,x.x,x.y,x.z,Math.PI);let b=new Dn().setFromObject(p.children[0]);l.light=new Kn(16756848,0,36,1.4),l.light.position.set(b.max.x-(b.max.x-b.min.x)*.12,b.max.y*.55,0),p.add(l.light),h()}).catch(g("Lantern")),i("BarramundiFish").then(M=>{let x=null;if(M.updateMatrixWorld(!0),M.traverse(y=>{y.isMesh&&!x&&(x=y)}),!x)return;let p=x.geometry.clone().applyMatrix4(x.matrixWorld);p.rotateY(-Math.PI/2),p.computeBoundingBox();let b=p.boundingBox,w=b.getCenter(new D);p.translate(-w.x,-w.y,-w.z),p.scale(2.05/(b.max.x-b.min.x),2.05/(b.max.x-b.min.x),2.05/(b.max.x-b.min.x)),e.setModel(p,x.material),l.ready++}).catch(g("BarramundiFish")),{get ready(){return l.ready},update(M,x){let p=Math.min(1,M.pGlow||0),b=.9+.06*Math.sin(x*8.3+Math.sin(x*2.9)*2)+.04*Math.sin(x*21.7);l.light&&(l.light.intensity=p*55*b*Math.min(1,M.pCabin||0)),l.glass.forEach(w=>{w.emissiveIntensity=(w.userData.e0||1)*(.15+p*2.2*b)})}}}(()=>{"use strict";let s=document.getElementById("bg");if(!s)return;let e=document.documentElement,t;try{t=new Jc({canvas:s,antialias:!0,powerPreference:"low-power"})}catch{e.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(qe){e.setAttribute("data-scene",qe)},setMotion(){},start(){},home(){},enter(){},focus(){},pan(){},pulse(){},toggleLight(){}};return}t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=Ia,t.shadowMap.enabled=!0,t.shadowMap.type=qs;let n=new ys,i=new yn(50,1,.5,3e3);n.add(i);let r={uTime:{value:0}},a=performance.now(),o=Uf(n,r),c=new Ta(16777215,4473924,1),l=new Ws(16777215,1);n.add(c,l,l.target),n.fog=new ua(13421772,.004);let u=Nf(n),d=Ff(n,r),f=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([se,qe])=>({x:se,z:qe,r:42})),h=zf({scene:n,heightAt:pn,U:r,snowColor:u.TU.uSnow,clear:f}),g=jf({scene:n,shared:h.shared,isClearing:(se,qe)=>h.inClearing(se,qe)});h.plant(g.base,0);let M=Xa(n,pn,g.base.map(se=>({x:se.p.x,z:se.p.z,sx:se.s.x*3.4,sz:se.s.z*3.4})),.32),x=Xa(n,pn,[{x:ft.x,z:ft.z,sx:8.6*ft.S,sz:7.4*ft.S,yaw:ft.yaw}],.4),p=Df({scene:n,shared:h.shared,U:r,camera:i}),b=p.study,w=e0({group:p.group,U:r,trees:g,shared:h.shared}),y=kf(n,r),S=Hf(n,r),A=Of(n,r,t.getPixelRatio()),R=Qf({scene:n,camera:i,heightAt:pn,water:d.mesh}),E=l0({cabin:p,fishing:R}),N=new Gr(t),V=new ys;{let se=new $e(o.geometry,o.material);se.frustumCulled=!1,V.add(se)}let O=null,W=-1e9,G="",F=se=>{if(se-W<1500)return;let qe=[r.uTop.value,r.uHorizon.value,r.uBottom.value,r.uSunColor.value].map(pt=>pt.getHexString()).join("")+r.uSunDir.value.toArray().map(pt=>pt.toFixed(2)).join()+r.uAurora.value.toFixed(2)+r.uSunSize.value.toFixed(3);if(qe===G)return;G=qe,W=se;let Ve=N.fromScene(V,0,.1,3e3,{size:128});O&&O.dispose(),O=Ve,n.environment=Ve.texture},H=$f(n,r),q=Jf(r),Y=window.MEOW_STATE,de=Y&&Y.motion==="reduced"?"reduced":"full",Q=()=>de==="full",te=Xf(Y&&di[Y.scene]?Y.scene:"rain"),xe=Yf({trees:g,props:h,cabin:p,scenes:te,water:d.mesh}),Me=Kf({physics:xe,trees:g}),Ne=!1,tt=0,Re=1,Ze=1,re=0,pe=0,Ee=0,ze={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},Be={x:0,y:0,sx:0,sy:0},at=new Set,yt=new Gt(1e9,1e9,1e9,1e9),st={pos:new D,q:new ot,roll:0},ct={pos:new D,q:new ot},Ft=new Ye,lt=new D(0,1,0),Mt=new D,kt=new D,Ht=(se,qe)=>window.MEOW_I18N?window.MEOW_I18N.t(se):qe,xt=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),ie=()=>!Ne||e.classList.contains("locked")||ze.focusTo>0,U=()=>!!document.querySelector(".modal:not([hidden])"),Se=se=>se&&(/INPUT|TEXTAREA|SELECT/.test(se.tagName)||se.isContentEditable),ye=se=>se&&se.closest&&se.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),I=se=>{let qe=te.cur,Ve=Q()?1:0;Be.sx+=(Be.x-Be.sx)*.035,Be.sy+=(Be.y-Be.sy)*.035,ct.pos.set(qe.cam.x+(Math.sin(se*.05)*3+Be.sx*6)*Ve,qe.cam.y+Ee+(Math.sin(se*.07)*.8-Be.sy*2.5)*Ve,qe.cam.z),Mt.copy(qe.look),Mt.x+=Be.sx*3*Ve;let pt=ze.focus;(pt>5e-4||Math.abs(ze.pan)>5e-4)&&(kt.copy(qe.look).sub(qe.cam).normalize(),ct.pos.addScaledVector(kt,pt*34),ct.pos.y-=pt*4-ze.pulse*2,ct.pos.x+=ze.pan*10*pt,Mt.x+=ze.pan*38*pt,Mt.y-=pt*3),Ft.lookAt(ct.pos,Mt,lt),ct.q.setFromRotationMatrix(Ft)},v=(se,qe)=>{let Ve=te.cur;r.uTop.value.copy(Ve.skyTop),r.uHorizon.value.copy(Ve.skyHorizon),r.uBottom.value.copy(Ve.skyBottom),r.uSunColor.value.copy(Ve.sunC),r.uSunDir.value.copy(Ve.sunDir).normalize(),r.uSunSize.value=Ve.sunSize,r.uStars.value=Ve.stars,r.uAurora.value=Ve.aurora,r.uAur1.value.copy(Ve.aur1),r.uAur2.value.copy(Ve.aur2),n.fog.color.copy(Ve.fog),n.fog.density=Ve.fogDensity*(1+ze.focus*.35)*(1-.85*re),Ve.pCabin>.5?(u.TU.uHole.value.set(...p.holeBox),d.WU.uStudy.value.set(...p.studyBox)):(u.TU.uHole.value.copy(yt),d.WU.uStudy.value.copy(yt)),u.TU.uLow.value.copy(Ve.low),u.TU.uHigh.value.copy(Ve.high),u.TU.uSnow.value.copy(Ve.snowC),u.TU.uSnowLine.value=Ve.snowLine,u.TU.uSand.value=Ve.sand,d.mesh.position.y=Ve.water,d.mat.color.copy(Ve.waterC),d.mat.roughness=Ve.waterRough,d.WU.uLevel.value=Ve.water,u.TU.uWaterY.value=Ve.water,u.TU.uWaterC.value.copy(Ve.waterC),d.tex.offset.set(se*.004,se*.006),l.color.copy(Ve.lightC),l.intensity=Ve.light*2.2,l.position.copy(Ve.lightDir).multiplyScalar(300),c.color.copy(Ve.hemiSky),c.groundColor.copy(Ve.hemiGround),c.intensity=Ve.hemi*1.6,g.update(Ve,qe),M.set(Ve.trees),x.set(Ve.pCabin),w.update(Ve),h.update(Ve,se),p.update(Ve,se,qe,Ve.water,Me.walking?Me.state.feet:void 0),E.update(Ve,se),F(qe)},j=()=>!!document.pointerLockElement,Z=0,oe=()=>{if(!(j()||!s.requestPointerLock||Z>0))try{let se=s.requestPointerLock();se&&se.catch&&se.catch(()=>{Z++})}catch{Z++}},he=()=>{j()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())};document.addEventListener("pointerlockerror",()=>{Z++});let me=document.createElement("div");me.className="aim-dot",document.body.appendChild(me);let $=()=>[innerWidth/2,innerHeight/2],ae=se=>{e.classList.contains("exploring")!==se&&e.classList.toggle("exploring",se)},ve=()=>{!Ne||ie()||Me.mode!=="home"||(Me.enter(i.position,i.quaternion,Q(),d.mesh.position.y),ae(!0))},fe=()=>{he(),b.reset(performance.now()),R.reset(),at.clear(),(Me.mode==="walk"||Me.mode==="enter")&&Me.leave(i.position,i.quaternion,Q()),g.hover(-1),e.classList.remove("on-tree","on-book"),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"leave"}}))},ge=()=>{!Me.out||ie()||b.back(performance.now())||fe()};document.addEventListener("pointerlockchange",()=>{if(e.classList.toggle("pl",j()),!j()){let se=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",se||setTimeout(()=>{document.hasFocus()&&!document.hidden&&ge()},80),K.pending=!0}});let be=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"];addEventListener("keydown",se=>{if(Se(se.target)||se.metaKey||se.ctrlKey||se.altKey||U())return;let qe=performance.now();if(be.includes(se.code)){if(ie())return;se.code.startsWith("Shift")||se.preventDefault(),at.add(se.code),Me.mode==="home"&&!se.code.startsWith("Shift")&&ve();return}if(se.code==="KeyF"&&!se.repeat&&Ne&&!e.classList.contains("locked")){se.preventDefault(),H.toggle(qe);return}if(!(ie()||!Me.walking)){if(se.code==="Space"){se.preventDefault(),se.repeat||Me.jump();return}if(se.code==="KeyR"&&!se.repeat){R.key(qe)&&se.preventDefault();return}se.code==="KeyE"&&!se.repeat&&te.cur.pCabin>.5&&p.door.near(i.position.x,i.position.z)&&De()}}),addEventListener("keyup",se=>at.delete(se.code)),addEventListener("blur",()=>{at.clear(),nt.inside=!1}),addEventListener("keydown",se=>{if(se.key!=="Escape"||!Me.out||Se(se.target)||U())return;let qe=document.getElementById("treeCard");qe&&!qe.hidden&&qe.classList.contains("show")||ge()},!0);let _e=new Pa;_e.far=900;let Ae=new je,He=(se,qe)=>(Ae.set(se/innerWidth*2-1,-(qe/innerHeight)*2+1),_e.setFromCamera(Ae,i),_e),K={x:0,y:0,pending:!1,tick:0},Fe=()=>j()?$():[K.x,K.y],ce=document.createElement("div");ce.className="act-hint",ce.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(ce);let Pe=(se,qe)=>{if(!Me.walking||te.cur.pCabin<.5||!p.door.near(i.position.x,i.position.z))return!1;let Ve=He(se,qe).intersectObject(p.door.mesh,!1)[0];return!!Ve&&Ve.distance<26},De=()=>{if(!p.door.canToggle(i.position.x,i.position.z))return!1;let se=p.door.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(se),!0},we=se=>{g.hover(se)&&(e.classList.toggle("on-tree",se>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:se>=0?{type:"hover",id:se,x:K.x,y:K.y}:{type:"leave"}})))},et=!1,Ke=()=>{if(++K.tick%3&&!K.pending)return;K.pending=!1;let[se,qe]=Fe(),Ve=Me.walking&&!ie(),pt=Ve&&Pe(se,qe);pt!==et&&(et=pt,ce.classList.toggle("show",pt)),pt&&(ce.querySelector("span").textContent=p.door.open?Ht("doorClose","Click to close the door"):Ht("doorOpen","Click to open the door")),e.classList.toggle("on-book",b.hover(He(se,qe),Ve&&te.cur.pCabin>.5&&re>.5));let Cn=!ie()&&re<.5&&!Me.gliding&&(Me.walking||nt.inside&&!nt.ui);j()&&(K.x=se,K.y=qe),we(Cn?g.pick(He(se,qe)):-1)},nt={x:-1,y:-1,inside:!1,ui:!1},ht=null,tn=null;addEventListener("pointerdown",se=>{if(ie()||ye(se.target)||Me.gliding)return;if(se.button===2||se.pointerType==="touch"&&se.button===0)ht={x:se.clientX,y:se.clientY,lx:se.clientX,ly:se.clientY,moved:!1,touch:se.pointerType==="touch"},se.preventDefault();else if(se.button===0){if(Me.walking&&!j()&&se.pointerType==="mouse"&&!Z&&s.requestPointerLock){oe(),tn=null,se.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}tn={x:se.clientX,y:se.clientY},se.preventDefault()}}),addEventListener("contextmenu",se=>{Ne&&!ye(se.target)&&!e.classList.contains("locked")&&se.preventDefault()}),addEventListener("pointermove",se=>{if(Be.x=se.clientX/innerWidth*2-1,Be.y=se.clientY/innerHeight*2-1,ht){Math.hypot(se.clientX-ht.x,se.clientY-ht.y)>5&&(ht.moved=!0),Me.walking&&Me.look(se.clientX-ht.lx,se.clientY-ht.ly,.0035),ht.lx=se.clientX,ht.ly=se.clientY,e.classList.add("looking");return}if(j()){Me.walking&&!ie()&&Me.look(se.movementX,se.movementY,.0024*xt());return}nt.x=se.clientX,nt.y=se.clientY,nt.inside=!0,nt.ui=!!ye(se.target),Me.walking&&!ie()&&!nt.ui&&se.pointerType!=="touch"&&(se.movementX||se.movementY)&&Me.look(se.movementX,se.movementY,.0028*xt()),K.x=se.clientX,K.y=se.clientY,K.pending=!0},{passive:!0}),document.addEventListener("mouseleave",()=>{nt.inside=!1,K.pending=!0}),addEventListener("pointerup",se=>{let qe=!1;if(ht?(qe=ht.touch&&!ht.moved,ht=null,e.classList.remove("looking")):tn&&se.button===0&&(qe=j()||Math.hypot(se.clientX-tn.x,se.clientY-tn.y)<8),tn=null,!qe)return;let[Ve,pt]=j()?$():[se.clientX,se.clientY],Cn=performance.now();if(Me.walking&&R.click(Cn)||Me.walking&&te.cur.pCabin>.5&&re>.5&&b.click(He(Ve,pt),Cn))return;if(Pe(Ve,pt)){De();return}let Un=g.hovered>=0?g.hovered:re<.5?g.pick(He(Ve,pt)):-1;Un>=0?(g.shake(Un,Cn),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Un,x:Ve,y:pt}}))):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))});let Lt=()=>{let se=innerWidth,qe=innerHeight;t.setSize(se,qe,!1);let Ve=t.getDrawingBufferSize(new je);q.resize(Ve.x,Ve.y),i.aspect=se/qe,i.updateProjectionMatrix()};addEventListener("resize",()=>{clearTimeout(Lt.t),Lt.t=setTimeout(Lt,120)});let jt={last:0,sum:0,n:0,level:0,since:0},Zn=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],Hn=se=>{jt.since||(jt.since=se);let qe=se-(jt.last||se);if(jt.last=se,!(se-jt.since<5e3||qe>250||document.hidden)&&(jt.sum+=qe,jt.n++,jt.n>=90)){let Ve=jt.sum/jt.n;jt.sum=jt.n=0,Ve>30&&jt.level<Zn.length-1&&Zn[jt.level+1]<t.getPixelRatio()&&(jt.level++,t.setPixelRatio(Zn[jt.level]),Lt())}},Fn=0,us=se=>{let qe=Math.min(.1,Math.max(.001,(se-(Fn||se))/1e3));Fn=se;let Ve=(se-a)/1e3;r.uTime.value=Ve;let pt=te.step(se);Ee=Q()&&pt<1?Math.sin(Math.PI*pt)*9:0;let Cn=Q()?1-Math.pow(1-.035,qe*60):1;ze.focus+=(ze.focusTo-ze.focus)*Cn,ze.pan+=(ze.panTo-ze.pan)*(Q()?1-Math.pow(.95,qe*60):1),ze.pulse*=Math.pow(.94,qe*60),Re+=(Ze-Re)*.04,I(Ve);let Un=Me.update(qe,se,at,ct,Q(),te,d.mesh,st);Me.justLanded&&(Me.justLanded=!1,oe()),Me.mode==="home"&&ae(!1),i.position.copy(st.pos),i.quaternion.copy(st.q);let Ai=(innerWidth<700?62:50)-(Me.mode==="home"?ze.focus*6-ze.pulse*1.5:0);if(Math.abs(i.fov-Ai)>.01&&(i.fov=Ai,i.updateProjectionMatrix()),o.position.copy(i.position),!j()&&Me.walking&&nt.inside&&!nt.ui&&!ht&&!ie()&&Q()&&nt.y>innerHeight*.15&&nt.y<innerHeight*.85){let T=Math.max(30,innerWidth*.04);nt.x>innerWidth-T?Me.turn(-1.1*qe*(nt.x-(innerWidth-T))/T):nt.x>=0&&nt.x<T&&Me.turn(1.1*qe*(T-nt.x)/T)}let P=Me.state,X=Me.walking&&xe.inside(P.x,P.z,P.feet);re+=((X?1:0)-re)*(1-Math.pow(.88,qe*60)),pe+=((Me.out?1:0)-pe)*(1-Math.pow(.97,qe*60)),Me.walking&&te.cur.pCabin<.6&&p.inside(P.x,P.z,P.feet)&&fe(),v(Ve,se);let ee=1-re;if(A.update(te.cur,i.position,te.cur.look,te.cur.cam,d.mesh.position.y,ee,qe),y.update(te.cur.pRipples*ee,i.position,d.mesh.position.y),S.update(Math.min(1,Math.max(0,(100-te.cur.snowLine)/80))*ee),Un&&!X){let T=pn(P.x,P.z);if(T>d.mesh.position.y+.6&&(te.name==="snow"||T>te.cur.snowLine+4)&&!xe.floor(P.x,P.z,P.feet).built){let z=new D(pn(P.x-1.5,P.z)-pn(P.x+1.5,P.z),3,pn(P.x,P.z-1.5)-pn(P.x,P.z+1.5)).normalize();S.place(P.x,T,P.z,Math.atan2(-P.vx,-P.vz),z)}}H.update(i,se,Ve,qe,{fog:Math.min(1.6,n.fog.density/.004),rain:A.rainAmount,bob:P.bob,vx:P.vx,vz:P.vz,motionFull:Q()});{let[T,k]=Fe();R.update(se,Ve,{active:Me.walking&&!ie(),ray:Me.walking?He(T,k):null,waterY:d.mesh.position.y,amount:te.cur.fishy,indoor:re>.5})}Ke();let le=q.LU,_=t.getPixelRatio(),C=Q()&&pt<1?Math.sin(Math.PI*(pt<.5?4*pt*pt*pt:1-Math.pow(-2*pt+2,3)/2))*6:0,m=Q()?Math.max(0,1-(se-tt)/3600):0;le.uBlur.value=2.6*_*(1+ze.focus*2.6)*(1-pe*.7)*te.cur.dof,le.uBand.value=.22-ze.focus*.1+pe*.12,le.uPull.value=(C+Math.pow(m,1.6)*18+ze.pulse*3)*_,le.uFlicker.value=Q()?.012:0,le.uIndoor.value=Q()?re:0,le.uBlurIn.value=4.5*_,le.uVig.value=.32+re*.16,le.uSat.value=te.cur.sat+(Math.max(te.cur.sat,.8)-te.cur.sat)*re,t.toneMappingExposure=Re,q.render(t,n,i)},ri=se=>{requestAnimationFrame(ri),!(!Ne||document.hidden)&&(us(se),Hn(se))},$n=()=>e.getAttribute("data-theme")==="dark"?.62:1;new MutationObserver(()=>{Ze=$n()}).observe(e,{attributes:!0,attributeFilter:["data-theme"]});let Wt=(se,qe)=>{te.go(se,Q()?qe:1,performance.now()),e.setAttribute("data-scene",te.name),Ne&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:te.name,dur:Q()?qe:1}}))};e.setAttribute("data-scene",te.name),window.MEOW_BG={scenes:Vf,setScene(se){if(di[se]||(se="rain"),!(se===te.name&&Ne)){if(!Ne){te.go(se,1,performance.now()),e.setAttribute("data-scene",se);return}Wt(se,3200)}},setMotion(se){de=se==="reduced"?"reduced":"full"},focus(se){ze.focusTo=se?1:0,se&&Me.out&&fe()},pan(se){ze.panTo=Math.max(-1,Math.min(1,se||0))},pulse(){Q()&&(ze.pulse=1)},toggleLight(){H.toggle(performance.now())},enter(){ve()},home(){fe()},start(){if(Ne)return;Ne=!0,Ze=Re=$n(),Lt();let se=te.name;te.go(se,1,-1e9),te.step(performance.now()),Q()&&te.offsetHome(new D(0,120,230),new D(0,30,0)),tt=performance.now(),Wt(se,4200),s.classList.add("on")},_standAt(se,qe,Ve){let pt=Ve==="study"?ft.y+Xt.floor*ft.S:Ve==="mezz"?ft.y+Xt.mezz*ft.S:1e5;Me.place(se,qe,xe.floor(se,qe,pt).y),ae(!0)},_look(se,qe,Ve=0){let pt=Me.state;Me.face(Math.atan2(-(se-pt.x),-(qe-pt.z)),Ve)},_pos(){let se=Me.state;return{x:se.x,z:se.z,feet:se.feet,mode:Me.mode,cx:i.position.x,cy:i.position.y,cz:i.position.z,yaw:se.yaw,pitch:se.pitch,indoor:re}},_toggleDoor(){p.door.toggle(performance.now())},_aimDoor(se,qe){let pt=He(se,qe).intersectObject(p.door.mesh,!1)[0];return{hit:!!pt,d:pt?pt.distance:-1,walking:Me.walking,busy:ie(),hover:[K.x,K.y],ok:Pe(se,qe)}},get _trees(){return g},get _keys(){return[...at]},get _study(){return b},get _cabin(){return p},get _assets(){return E},get _physics(){return xe},get _player(){return Me},get _cur(){return te.cur},_nearTree(se,qe=16){let Ve=g.base[se%g.base.length];Ve&&this._standAt(Ve.p.x,Ve.p.z+qe)}};{let se=document.querySelector(".walk-hint");se&&se.addEventListener("click",()=>ve())}requestAnimationFrame(ri),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
