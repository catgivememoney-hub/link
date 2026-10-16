(()=>{var xa="186";var Lh=0,nl=1,Nh=2;var pr=1,Dh=2,$r=3,Mi=0,dn=1,tn=2,Ei=0,Kr=1,Gn=2,il=3,rl=4,Uh=5;var mr=100,Fh=101,Bh=102,Oh=103,zh=104,Hh=200,kh=201,Gh=202,Vh=203,sl=204,ol=205,Wh=206,Xh=207,qh=208,Yh=209,Zh=210,Jh=211,$h=212,Kh=213,Qh=214,Lo=0,No=1,Do=2,Br=3,Uo=4,Fo=5,Bo=6,Oo=7,_a=0,jh=1,eu=2,ai=0,al=1,cl=2,ll=3,Vs=4,hl=5,ul=6,dl=7;var fl=300,Qi=301,gr=302,ya=303,va=304,Ws=306,Or=1e3,di=1001,zo=1002,vn=1003,tu=1004;var Xs=1005;var Sn=1006,Ma=1007;var ji=1008;var Bn=1009,pl=1010,ml=1011,Qr=1012,Ea=1013,ci=1014,$n=1015,Vn=1016,Sa=1017,wa=1018,jr=1020,gl=35902,xl=35899,_l=1021,yl=1022,Kn=1023,fi=1026,er=1027,ba=1028,Ta=1029,tr=1030,Aa=1031;var Ra=1033,qs=33776,Ys=33777,Zs=33778,Js=33779,Ca=35840,Pa=35841,Ia=35842,La=35843,Na=36196,Da=37492,Ua=37496,Fa=37488,Ba=37489,$s=37490,Oa=37491,za=37808,Ha=37809,ka=37810,Ga=37811,Va=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,Za=37817,Ja=37818,$a=37819,Ka=37820,Qa=37821,ja=36492,ec=36494,tc=36495,nc=36283,ic=36284,Ks=36285,rc=36286;var ys=2300,Ho=2301,Po=2302,Xc=2303,qc=2400,Yc=2401,Zc=2402;var nu=3200;var Qs=0,iu=1,Ui="",_n="srgb",vs="srgb-linear",Ms="linear",kt="srgb";var Io=7680;var ru=519,su=512,ou=513,au=514,sc=515,cu=516,lu=517,oc=518,hu=519,uu=35044,vl=35048;var Ml="300 es",si=2e3,zr=2001;function wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function du(){let i=Es("canvas");return i.style.display="block",i}var Kl={},Hr=null;function El(...i){let e="THREE."+i.shift();Hr?Hr("log",e,...i):console.log(e,...i)}function fu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ht(...i){i=fu(i);let e="THREE."+i.shift();if(Hr)Hr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=fu(i);let e="THREE."+i.shift();if(Hr)Hr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ar(...i){let e=i.join(" ");e in Kl||(Kl[e]=!0,ht(...i))}function pu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var mu={[Lo]:No,[Do]:Bo,[Uo]:Oo,[Br]:Fo,[No]:Lo,[Bo]:Do,[Oo]:Uo,[Fo]:Br},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ql=1234567,ms=Math.PI/180,cr=180/Math.PI;function es(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Sl(i,e){return(i%e+e)%e}function Td(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ad(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function Rd(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function Cd(i,e=1){return e-Math.abs(Sl(i,e*2)-e)}function Pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Id(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ld(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nd(i,e){return i+Math.random()*(e-i)}function Dd(i){return i*(.5-Math.random())}function Ud(i){i!==void 0&&(Ql=i);let e=Ql+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fd(i){return i*ms}function Bd(i){return i*cr}function Od(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kd(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),d=o((e+n)/2),f=s((e-n)/2),u=o((e-n)/2),h=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*d,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*d,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*d,a*l);break;case"XZX":i.set(a*d,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*d,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*d,a*l);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wl={DEG2RAD:ms,RAD2DEG:cr,generateUUID:es,clamp:Pt,euclideanModulo:Sl,mapLinear:Td,inverseLerp:Ad,lerp:gs,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Ld,randFloat:Nd,randFloatSpread:Dd,seededRandom:Ud,degToRad:Fd,radToDeg:Bd,isPowerOfTwo:Od,ceilPowerOfTwo:zd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:kd,normalize:Pn,denormalize:Ur},Pl=class Pl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pl.prototype.isVector2=!0;var $e=Pl,_t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],d=n[r+2],f=n[r+3],u=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(f!==v||c!==u||l!==h||d!==g){let x=c*u+l*h+d*g+f*v;x<0&&(u=-u,h=-h,g=-g,v=-v,x=-x);let p=1-a;if(x<.9995){let E=Math.acos(x),R=Math.sin(E);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R,c=c*p+u*a,l=l*p+h*a,d=d*p+g*a,f=f*p+v*a}else{c=c*p+u*a,l=l*p+h*a,d=d*p+g*a,f=f*p+v*a;let E=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=E,l*=E,d*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],d=n[r+3],f=s[o],u=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+d*f+c*h-l*u,e[t+1]=c*g+d*u+l*f-a*h,e[t+2]=l*g+d*h+a*u-c*f,e[t+3]=d*g-a*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(r/2),f=a(s/2),u=c(n/2),h=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"YXZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"ZXY":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"ZYX":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"YZX":this._x=u*d*f+l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f-u*h*g;break;case"XZY":this._x=u*d*f-l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f+u*h*g;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+a+f;if(u>0){let h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(n>a&&n>f){let h=2*Math.sqrt(1+n-a-f);this._w=(d-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){let h=2*Math.sqrt(1+a-n-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+d)/h}else{let h=2*Math.sqrt(1+f-n-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-n*l,this._z=s*d+o*l+n*c-r*a,this._w=o*d-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Il=class Il{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),d=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+c*l+o*f-a*d,this.y=n+c*d+a*l-s*f,this.z=r+c*f+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Il.prototype.isVector3=!0;var F=Il,vc=new F,jl=new _t,Ll=class Ll{constructor(e,t,n,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],g=n[8],v=r[0],x=r[3],p=r[6],E=r[1],R=r[4],w=r[7],S=r[2],T=r[5],D=r[8];return s[0]=o*v+a*E+c*S,s[3]=o*x+a*R+c*T,s[6]=o*p+a*w+c*D,s[1]=l*v+d*E+f*S,s[4]=l*x+d*R+f*T,s[7]=l*p+d*w+f*D,s[2]=u*v+h*E+g*S,s[5]=u*x+h*R+g*T,s[8]=u*p+h*w+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-n*s*d+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*s,h=l*s-o*c,g=t*f+n*u+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(r*l-d*n)*v,e[2]=(a*n-r*o)*v,e[3]=u*v,e[4]=(d*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ll.prototype.isMatrix3=!0;var Mt=Ll,Mc=new Mt,eh=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===kt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ui?Ms:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:e,whitePoint:n,transfer:Ms,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:eh,fromXYZ:th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}var Nt=Gd();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Mr,ko=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=Es("canvas")),Mr.width=e.width,Mr.height=e.height;let r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Di(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vd=0,kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ec(r[o].image)):s.push(Ec(r[o]))}else s=Ec(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var Wd=0,Sc=new F,In=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,r=di,s=Sn,o=ji,a=Kn,c=Bn,l=i.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=es(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=fl;In.DEFAULT_ANISOTROPY=1;var Nl=class Nl{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],g=c[9],v=c[2],x=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+x)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,w=(h+1)/2,S=(p+1)/2,T=(d+u)/4,D=(f+v)/4,M=(g+x)/4;return R>w&&R>S?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=T/n,s=D/n):w>S?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=T/r,s=M/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=D/s,r=M/s),this.set(n,r,s,t),this}let E=Math.sqrt((x-g)*(x-g)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(E)<.001&&(E=1),this.x=(x-g)/E,this.y=(f-v)/E,this.z=(u-d)/E,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;var Gt=Nl,Go=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new In(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ss=class extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vo=class extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ga=class ga{constructor(e,t,n,r,s,o,a,c,l,d,f,u,h,g,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,d,f,u,h,g,v,x)}set(e,t,n,r,s,o,a,c,l,d,f,u,h,g,v,x){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=g,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=o*d,h=o*f,g=a*d,v=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=g+h*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*d,h=c*f,g=l*d,v=l*f;t[0]=u+v*a,t[4]=g*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=h*a-g,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*d,h=c*f,g=l*d,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*d,h=o*f,g=a*d,v=a*f;t[0]=c*d,t[4]=g*l-h,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=h*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=v-u*f,t[8]=g*f+h,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=o*c,h=o*l,g=a*c,v=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+v,t[5]=o*d,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*d,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xd,e,qd)}lookAt(e,t,n){let r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Gi.crossVectors(n,On),Gi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Gi.crossVectors(n,On)),Gi.normalize(),so.crossVectors(On,Gi),r[0]=Gi.x,r[4]=so.x,r[8]=On.x,r[1]=Gi.y,r[5]=so.y,r[9]=On.y,r[2]=Gi.z,r[6]=so.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],g=n[2],v=n[6],x=n[10],p=n[14],E=n[3],R=n[7],w=n[11],S=n[15],T=r[0],D=r[4],M=r[8],L=r[12],O=r[1],H=r[5],G=r[9],X=r[13],U=r[2],V=r[6],ee=r[10],J=r[14],de=r[3],re=r[7],se=r[11],me=r[15];return s[0]=o*T+a*O+c*U+l*de,s[4]=o*D+a*H+c*V+l*re,s[8]=o*M+a*G+c*ee+l*se,s[12]=o*L+a*X+c*J+l*me,s[1]=d*T+f*O+u*U+h*de,s[5]=d*D+f*H+u*V+h*re,s[9]=d*M+f*G+u*ee+h*se,s[13]=d*L+f*X+u*J+h*me,s[2]=g*T+v*O+x*U+p*de,s[6]=g*D+v*H+x*V+p*re,s[10]=g*M+v*G+x*ee+p*se,s[14]=g*L+v*X+x*J+p*me,s[3]=E*T+R*O+w*U+S*de,s[7]=E*D+R*H+w*V+S*re,s[11]=E*M+R*G+w*ee+S*se,s[15]=E*L+R*X+w*J+S*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],g=e[3],v=e[7],x=e[11],p=e[15],E=c*h-l*u,R=a*h-l*f,w=a*u-c*f,S=o*h-l*d,T=o*u-c*d,D=o*f-a*d;return t*(v*E-x*R+p*w)-n*(g*E-x*S+p*T)+r*(g*R-v*S+p*D)-s*(g*w-v*T+x*D)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],d=e[10];return t*(o*d-a*l)-n*(s*d-a*c)+r*(s*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],g=e[12],v=e[13],x=e[14],p=e[15],E=t*a-n*o,R=t*c-r*o,w=t*l-s*o,S=n*c-r*a,T=n*l-s*a,D=r*l-s*c,M=d*v-f*g,L=d*x-u*g,O=d*p-h*g,H=f*x-u*v,G=f*p-h*v,X=u*p-h*x,U=E*X-R*G+w*H+S*O-T*L+D*M;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/U;return e[0]=(a*X-c*G+l*H)*V,e[1]=(r*G-n*X-s*H)*V,e[2]=(v*D-x*T+p*S)*V,e[3]=(u*T-f*D-h*S)*V,e[4]=(c*O-o*X-l*L)*V,e[5]=(t*X-r*O+s*L)*V,e[6]=(x*w-g*D-p*R)*V,e[7]=(d*D-u*w+h*R)*V,e[8]=(o*G-a*O+l*M)*V,e[9]=(n*O-t*G-s*M)*V,e[10]=(g*T-v*w+p*E)*V,e[11]=(f*w-d*T-h*E)*V,e[12]=(a*L-o*H-c*M)*V,e[13]=(t*H-n*L+r*M)*V,e[14]=(v*R-g*S-x*E)*V,e[15]=(d*S-f*R+u*E)*V,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+n,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,u=s*l,h=s*d,g=s*f,v=o*d,x=o*f,p=a*f,E=c*l,R=c*d,w=c*f,S=n.x,T=n.y,D=n.z;return r[0]=(1-(v+p))*S,r[1]=(h+w)*S,r[2]=(g-R)*S,r[3]=0,r[4]=(h-w)*T,r[5]=(1-(u+p))*T,r[6]=(x+E)*T,r[7]=0,r[8]=(g+R)*D,r[9]=(x-E)*D,r[10]=(1-(u+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Er.set(r[0],r[1],r[2]).length(),a=Er.set(r[4],r[5],r[6]).length(),c=Er.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ni.copy(this);let l=1/o,d=1/a,f=1/c;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,t.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,o,a=si,c=!1){let l=this.elements,d=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===si)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===zr)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=si,c=!1){let l=this.elements,d=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),h=-(n+r)/(n-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===si)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===zr)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ga.prototype.isMatrix4=!0;var at=ga,Er=new F,ni=new at,Xd=new F(0,0,0),qd=new F(1,1,1),Gi=new F,so=new F,On=new F,nh=new at,ih=new _t,jt=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yd=0,rh=new F,Sr=new _t,Ci=new at,oo=new F,cs=new F,Zd=new F,Jd=new _t,sh=new F(1,0,0),oh=new F(0,1,0),ah=new F(0,0,1),ch={type:"added"},$d={type:"removed"},wr={type:"childadded",child:null},wc={type:"childremoved",child:null},an=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new jt,n=new _t,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Mt}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return rh.copy(e).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(cs,oo,this.up):Ci.lookAt(oo,cs,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),wr.child=e,this.dispatchEvent(wr),wr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Jd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new F(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kd={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,n),p=this._getHandJoint(l,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=Sl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=bc(o,s,e+1/3),this.g=bc(o,s,e),this.b=bc(o,s,e-1/3)}return Nt.colorSpaceToWorking(this,r),this}setStyle(e,t=_n){function n(s){s!==void 0&&parseFloat(s)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let n=gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Nt.workingToColorSpace(Tn.copy(this),e),Math.round(Pt(Tn.r*255,0,255))*65536+Math.round(Pt(Tn.g*255,0,255))*256+Math.round(Pt(Tn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,d=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=_n){Nt.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,r=Tn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ao);let n=gs(Vi.h,ao.h,t),r=gs(Vi.s,ao.s,t),s=gs(Vi.l,ao.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new Ye;Ye.NAMES=gu;var ws=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var lr=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new F,Pi=new F,Tc=new F,Ii=new F,br=new F,Tr=new F,lh=new F,Ac=new F,Rc=new F,Cc=new F,Pc=new Gt,Ic=new Gt,Lc=new Gt,Yi=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ii.subVectors(e,t),r.cross(ii);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ii.subVectors(r,t),Pi.subVectors(n,t),Tc.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Pi),c=ii.dot(Tc),l=Pi.dot(Pi),d=Pi.dot(Tc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,h=(l*c-a*d)*u,g=(o*d-a*c)*u;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Pc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,n),Lc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pc,s.x),o.addScaledVector(Ic,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(e,t,n,r){return ii.subVectors(n,t),Pi.subVectors(e,t),ii.cross(Pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),ii.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;br.subVectors(r,n),Tr.subVectors(s,n),Ac.subVectors(e,n);let c=br.dot(Ac),l=Tr.dot(Ac);if(c<=0&&l<=0)return t.copy(n);Rc.subVectors(e,r);let d=br.dot(Rc),f=Tr.dot(Rc);if(d>=0&&f<=d)return t.copy(r);let u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(br,o);Cc.subVectors(e,s);let h=br.dot(Cc),g=Tr.dot(Cc);if(g>=0&&h<=g)return t.copy(s);let v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Tr,a);let x=d*g-h*f;if(x<=0&&f-d>=0&&h-g>=0)return lh.subVectors(s,r),a=(f-d)/(f-d+(h-g)),t.copy(r).addScaledVector(lh,a);let p=1/(x+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(br,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(s,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),lo.subVectors(this.max,ls),Ar.subVectors(e.a,ls),Rr.subVectors(e.b,ls),Cr.subVectors(e.c,ls),Wi.subVectors(Rr,Ar),Xi.subVectors(Cr,Rr),ir.subVectors(Ar,Cr);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ir.z,ir.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ir.z,0,-ir.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ir.y,ir.x,0];return!Nc(t,Ar,Rr,Cr,lo)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Ar,Rr,Cr,lo))?!1:(ho.crossVectors(Wi,Xi),t=[ho.x,ho.y,ho.z],Nc(t,Ar,Rr,Cr,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new F,new F,new F,new F,new F,new F,new F,new F],ri=new F,co=new mi,Ar=new F,Rr=new F,Cr=new F,Wi=new F,Xi=new F,ir=new F,ls=new F,lo=new F,ho=new F,rr=new F;function Nc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){rr.fromArray(i,s);let a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),c=e.dot(rr),l=t.dot(rr),d=n.dot(rr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}var sn=new F,uo=new $e,Qd=0,zt=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)uo.fromBufferAttribute(this,t),uo.applyMatrix3(e),this.setXY(t,uo.x,uo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ts=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jd=new mi,hs=new F,Dc=new F,gi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);let t=hs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(hs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Dc)),this.expandByPoint(hs.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ef=0,qn=new at,Uc=new an,Pr=new F,zn=new mi,us=new mi,xn=new F,Lt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Ts:bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Mt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(zn.min,us.min),zn.expandByPoint(xn),xn.addVectors(zn.max,us.max),zn.expandByPoint(xn)):(zn.expandByPoint(us.min),zn.expandByPoint(us.max))}zn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)xn.fromBufferAttribute(a,l),c&&(Pr.fromBufferAttribute(e,l),xn.add(Pr)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new F,c[M]=new F;let l=new F,d=new F,f=new F,u=new $e,h=new $e,g=new $e,v=new F,x=new F;function p(M,L,O){l.fromBufferAttribute(n,M),d.fromBufferAttribute(n,L),f.fromBufferAttribute(n,O),u.fromBufferAttribute(s,M),h.fromBufferAttribute(s,L),g.fromBufferAttribute(s,O),d.sub(l),f.sub(l),h.sub(u),g.sub(u);let H=1/(h.x*g.y-g.x*h.y);isFinite(H)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(H),x.copy(f).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(H),a[M].add(v),a[L].add(v),a[O].add(v),c[M].add(x),c[L].add(x),c[O].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let M=0,L=E.length;M<L;++M){let O=E[M],H=O.start,G=O.count;for(let X=H,U=H+G;X<U;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let R=new F,w=new F,S=new F,T=new F;function D(M){S.fromBufferAttribute(r,M),T.copy(S);let L=a[M];R.copy(L),R.sub(S.multiplyScalar(S.dot(L))).normalize(),w.crossVectors(T,L);let H=w.dot(c[M])<0?-1:1;o.setXYZW(M,R.x,R.y,R.z,H)}for(let M=0,L=E.length;M<L;++M){let O=E[M],H=O.start,G=O.count;for(let X=H,U=H+G;X<U;X+=3)D(e.getX(X+0)),D(e.getX(X+1)),D(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,d=new F,f=new F;if(e)for(let u=0,h=e.count;u<h;u+=3){let g=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,c){let l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d),h=0,g=0;for(let v=0,x=c.length;v<x;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*d;for(let p=0;p<d;p++)u[g++]=l[h++]}return new zt(u,d,f)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){let u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){let h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let d=r[l];this.setAttribute(l,d.clone(t))}let s=e.morphAttributes;for(let l in s){let d=[],f=s[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,d=o.length;l<d;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fc=new F,tf=new F,nf=new Mt,Hn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fc.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Fc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nf.getNormalMatrix(e),r=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rf=0,oi=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Kr,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Io,this.stencilZFail=Io,this.stencilZPass=Io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ni=new F,Bc=new F,fo=new F,po=new F,hr=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bc.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),po.copy(this.origin).sub(Bc);let s=e.distanceTo(t)*.5,o=-this.direction.dot(fo),a=po.dot(this.direction),c=-po.dot(fo),l=po.lengthSq(),d=Math.abs(1-o*o),f,u,h,g;if(d>0)if(f=o*c-a,u=o*a-c,g=s*d,f>=0)if(u>=-g)if(u<=g){let v=1/d;f*=v,u*=v,h=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bc).addScaledVector(fo,u),h}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,d=a.z,f=e.x-o.x,u=e.y-o.y,h=e.z-o.z,g=t.x-o.x,v=t.y-o.y,x=t.z-o.z,p=n.x-o.x,E=n.y-o.y,R=n.z-o.z,w=Math.abs(c),S=Math.abs(l),T=Math.abs(d),D,M,L,O,H,G,X,U,V,ee,J,de;if(w>=S&&w>=T?(L=c,G=f,V=g,de=p,c>=0?(D=l,M=d,O=u,H=h,X=v,U=x,ee=E,J=R):(D=d,M=l,O=h,H=u,X=x,U=v,ee=R,J=E)):S>=T?(L=l,G=u,V=v,de=E,l>=0?(D=d,M=c,O=h,H=f,X=x,U=g,ee=R,J=p):(D=c,M=d,O=f,H=h,X=g,U=x,ee=p,J=R)):(L=d,G=h,V=x,de=R,d>=0?(D=c,M=l,O=f,H=u,X=g,U=v,ee=p,J=E):(D=l,M=c,O=u,H=f,X=v,U=g,ee=E,J=p)),L===0)return null;let re=D/L,se=M/L,me=1/L,ze=O-re*G,Oe=H-se*G,pt=X-re*V,Se=U-se*V,Qe=ee-re*de,ue=J-se*de,he=Qe*Se-ue*pt,Me=ze*ue-Oe*Qe,Ke=pt*Oe-Se*ze;if(r){if(he<0||Me<0||Ke<0)return null}else if((he<0||Me<0||Ke<0)&&(he>0||Me>0||Ke>0))return null;let ke=he+Me+Ke;if(ke===0)return null;let je=me*(he*G+Me*V+Ke*de);return(ke>0?je<0:je>0)?null:this.at(je/ke,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hh=new at,sr=new hr,mo=new gi,uh=new F,go=new F,xo=new F,_o=new F,Oc=new F,yo=new F,dh=new F,vo=new F,rt=class extends an{constructor(e=new Lt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let d=a[c],f=s[c];d!==0&&(Oc.fromBufferAttribute(f,e),o?yo.addScaledVector(Oc,d):yo.addScaledVector(Oc.sub(t),d))}t.add(yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(mo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(mo,uh)===null||sr.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(s).invert(),sr.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let x=u[g],p=o[x.materialIndex],E=Math.max(x.start,h.start),R=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let w=E,S=R;w<S;w+=3){let T=a.getX(w),D=a.getX(w+1),M=a.getX(w+2);r=Mo(this,p,e,n,l,d,f,T,D,M),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let x=g,p=v;x<p;x+=3){let E=a.getX(x),R=a.getX(x+1),w=a.getX(x+2);r=Mo(this,o,e,n,l,d,f,E,R,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){let x=u[g],p=o[x.materialIndex],E=Math.max(x.start,h.start),R=Math.min(c.count,Math.min(x.start+x.count,h.start+h.count));for(let w=E,S=R;w<S;w+=3){let T=w,D=w+1,M=w+2;r=Mo(this,p,e,n,l,d,f,T,D,M),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let x=g,p=v;x<p;x+=3){let E=x,R=x+1,w=x+2;r=Mo(this,o,e,n,l,d,f,E,R,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function sf(i,e,t,n,r,s,o,a){let c;if(e.side===dn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Mi,a),c===null)return null;vo.copy(a),vo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vo);return l<t.near||l>t.far?null:{distance:l,point:vo.clone(),object:i}}function Mo(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,go),i.getVertexPosition(c,xo),i.getVertexPosition(l,_o);let d=sf(i,e,t,n,go,xo,_o,dh);if(d){let f=new F;Yi.getBarycoord(dh,go,xo,_o,f),r&&(d.uv=Yi.getInterpolatedAttribute(r,a,c,l,f,new $e)),s&&(d.uv1=Yi.getInterpolatedAttribute(s,a,c,l,f,new $e)),o&&(d.normal=Yi.getInterpolatedAttribute(o,a,c,l,f,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};Yi.getNormal(go,xo,_o,u.normal),d.face=u,d.barycoord=f}return d}var As=class extends In{constructor(e=null,t=1,n=1,r,s,o,a,c,l=vn,d=vn,f,u){super(null,o,a,c,l,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new at,fh=new at,Eo=[],ph=new mi,of=new at,ds=new rt,fs=new gi,Yn=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,of)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),ph.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(ph)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),fs.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ir),fh.multiplyMatrices(n,Ir),ds.matrixWorld=fh,ds.raycast(e,Eo);for(let o=0,a=Eo.length;o<a;o++){let c=Eo[o];c.instanceId=s,c.object=this,t.push(c)}Eo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(r*this.count),r,this.count,ba,$n));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},or=new gi,af=new $e(.5,.5),So=new F,Wr=class{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],h=s[7],g=s[8],v=s[9],x=s[10],p=s[11],E=s[12],R=s[13],w=s[14],S=s[15];if(r[0].setComponents(l-o,h-d,p-g,S-E).normalize(),r[1].setComponents(l+o,h+d,p+g,S+E).normalize(),r[2].setComponents(l+a,h+f,p+v,S+R).normalize(),r[3].setComponents(l-a,h-f,p-v,S-R).normalize(),n)r[4].setComponents(c,u,x,w).normalize(),r[5].setComponents(l-c,h-u,p-x,S-w).normalize();else if(r[4].setComponents(l-c,h-u,p-x,S-w).normalize(),t===si)r[5].setComponents(l+c,h+u,p+x,S+w).normalize();else if(t===zr)r[5].setComponents(c,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);let t=af.distanceTo(e.center);return or.radius=.7071067811865476+t,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(So.x=r.normal.x>0?e.max.x:e.min.x,So.y=r.normal.y>0?e.max.y:e.min.y,So.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xr=class extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wo=new F,Xo=new F,mh=new at,ps=new hr,wo=new gi,zc=new F,gh=new F,qr=class extends an{constructor(e=new Lt,t=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Wo.fromBufferAttribute(t,r-1),Xo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Wo.distanceTo(Xo);e.setAttribute("lineDistance",new ut(n,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;mh.copy(r).invert(),ps.copy(e.ray).applyMatrix4(mh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){let h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,x=g-1;v<x;v+=l){let p=d.getX(v),E=d.getX(v+1),R=bo(this,e,ps,c,p,E,v);R&&t.push(R)}if(this.isLineLoop){let v=d.getX(g-1),x=d.getX(h),p=bo(this,e,ps,c,v,x,g-1);p&&t.push(p)}}else{let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,x=g-1;v<x;v+=l){let p=bo(this,e,ps,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=bo(this,e,ps,c,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function bo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Wo.fromBufferAttribute(a,r),Xo.fromBufferAttribute(a,s),t.distanceSqToSegment(Wo,Xo,zc,gh)>n)return;zc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zc);if(!(l<e.near||l>e.far))return{distance:l,point:gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var xh=new F,_h=new F,Rs=class extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)xh.fromBufferAttribute(t,r),_h.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+xh.distanceTo(_h);e.setAttribute("lineDistance",new ut(n,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qo=class extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yh=new at,Jc=new hr,To=new gi,Ao=new F,Zn=class extends an{constructor(e=new Lt,t=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;yh.copy(r).invert(),Jc.copy(e.ray).applyMatrix4(yh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let g=u,v=h;g<v;g++){let x=l.getX(g);Ao.fromBufferAttribute(f,x),vh(Ao,x,c,r,e,t,this)}}else{let u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=u,v=h;g<v;g++)Ao.fromBufferAttribute(f,g),vh(Ao,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function vh(i,e,t,n,r,s,o){let a=Jc.distanceSqToPoint(i);if(a<t){let c=new F;Jc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Cs=class extends In{constructor(e=[],t=Qi,n,r,s,o,a,c,l,d){super(e,t,n,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jn=class extends In{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends In{constructor(e,t,n=ci,r,s,o,a=vn,c=vn,l,d=fi,f=1){if(d!==fi&&d!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,r,s,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Yo=class extends _i{constructor(e,t=ci,n=Qi,r,s,o=vn,a=vn,c,l=fi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ps=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ne=class i extends Lt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],d=[],f=[],u=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function g(v,x,p,E,R,w,S,T,D,M,L){let O=w/D,H=S/M,G=w/2,X=S/2,U=T/2,V=D+1,ee=M+1,J=0,de=0,re=new F;for(let se=0;se<ee;se++){let me=se*H-X;for(let ze=0;ze<V;ze++){let Oe=ze*O-G;re[v]=Oe*E,re[x]=me*R,re[p]=U,l.push(re.x,re.y,re.z),re[v]=0,re[x]=0,re[p]=T>0?1:-1,d.push(re.x,re.y,re.z),f.push(ze/D),f.push(1-se/M),J+=1}}for(let se=0;se<M;se++)for(let me=0;me<D;me++){let ze=u+me+V*se,Oe=u+me+V*(se+1),pt=u+(me+1)+V*(se+1),Se=u+(me+1)+V*se;c.push(ze,Oe,Se),c.push(Oe,pt,Se),de+=6}a.addGroup(h,de,L),h+=de,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ur=class i extends Lt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new F,d=new $e;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let h=n+f/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Be=class i extends Lt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let d=[],f=[],u=[],h=[],g=0,v=[],x=n/2,p=0;E(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(d),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function E(){let w=new F,S=new F,T=0,D=(t-e)/n;for(let M=0;M<=s;M++){let L=[],O=M/s,H=O*(t-e)+e;for(let G=0;G<=r;G++){let X=G/r,U=X*c+a,V=Math.sin(U),ee=Math.cos(U);S.x=H*V,S.y=-O*n+x,S.z=H*ee,f.push(S.x,S.y,S.z),w.set(V,D,ee).normalize(),u.push(w.x,w.y,w.z),h.push(X,1-O),L.push(g++)}v.push(L)}for(let M=0;M<r;M++)for(let L=0;L<s;L++){let O=v[L][M],H=v[L+1][M],G=v[L+1][M+1],X=v[L][M+1];(e>0||L!==0)&&(d.push(O,H,X),T+=3),(t>0||L!==s-1)&&(d.push(H,G,X),T+=3)}l.addGroup(p,T,0),p+=T}function R(w){let S=g,T=new $e,D=new F,M=0,L=w===!0?e:t,O=w===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,x*O,0),u.push(0,O,0),h.push(.5,.5),g++;let H=g;for(let G=0;G<=r;G++){let U=G/r*c+a,V=Math.cos(U),ee=Math.sin(U);D.x=L*ee,D.y=x*O,D.z=L*V,f.push(D.x,D.y,D.z),u.push(0,O,0),T.x=V*.5+.5,T.y=ee*.5*O+.5,h.push(T.x,T.y),g++}for(let G=0;G<r;G++){let X=S+G,U=H+G;w===!0?d.push(U,U+1,X):d.push(U+1,U,X),M+=3}l.addGroup(p,M,w===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$t=class i extends Be{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zo=class i extends Lt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),d(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let R=new F,w=new F,S=new F;for(let T=0;T<t.length;T+=3)h(t[T+0],R),h(t[T+1],w),h(t[T+2],S),c(R,w,S,E)}function c(E,R,w,S){let T=S+1,D=[];for(let M=0;M<=T;M++){D[M]=[];let L=E.clone().lerp(w,M/T),O=R.clone().lerp(w,M/T),H=T-M;for(let G=0;G<=H;G++)G===0&&M===T?D[M][G]=L:D[M][G]=L.clone().lerp(O,G/H)}for(let M=0;M<T;M++)for(let L=0;L<2*(T-M)-1;L++){let O=Math.floor(L/2);L%2===0?(u(D[M][O+1]),u(D[M+1][O]),u(D[M][O])):(u(D[M][O+1]),u(D[M+1][O+1]),u(D[M+1][O]))}}function l(E){let R=new F;for(let w=0;w<s.length;w+=3)R.x=s[w+0],R.y=s[w+1],R.z=s[w+2],R.normalize().multiplyScalar(E),s[w+0]=R.x,s[w+1]=R.y,s[w+2]=R.z}function d(){let E=new F;for(let R=0;R<s.length;R+=3){E.x=s[R+0],E.y=s[R+1],E.z=s[R+2];let w=x(E)/2/Math.PI+.5,S=p(E)/Math.PI+.5;o.push(w,1-S)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){let R=o[E+0],w=o[E+2],S=o[E+4],T=Math.max(R,w,S),D=Math.min(R,w,S);T>.9&&D<.1&&(R<.2&&(o[E+0]+=1),w<.2&&(o[E+2]+=1),S<.2&&(o[E+4]+=1))}}function u(E){s.push(E.x,E.y,E.z)}function h(E,R){let w=E*3;R.x=e[w+0],R.y=e[w+1],R.z=e[w+2]}function g(){let E=new F,R=new F,w=new F,S=new F,T=new $e,D=new $e,M=new $e;for(let L=0,O=0;L<s.length;L+=9,O+=6){E.set(s[L+0],s[L+1],s[L+2]),R.set(s[L+3],s[L+4],s[L+5]),w.set(s[L+6],s[L+7],s[L+8]),T.set(o[O+0],o[O+1]),D.set(o[O+2],o[O+3]),M.set(o[O+4],o[O+5]),S.copy(E).add(R).add(w).divideScalar(3);let H=x(S);v(T,O+0,E,H),v(D,O+2,R,H),v(M,O+4,w,H)}}function v(E,R,w,S){S<0&&E.x===1&&(o[R]=E.x-1),w.x===0&&w.z===0&&(o[R]=S/2/Math.PI+.5)}function x(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let d=n[r],u=n[r+1]-d,h=(o-d)/u;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new $e:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,r=[],s=[],o=[],a=new F,c=new at;for(let h=0;h<=e;h++){let g=h/e;r[h]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,d=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=l&&(l=d,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Pt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Is=class extends Fn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new $e){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*f+this.aX,l=u*f+h*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jo=class extends Is{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bl(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,f){let u=(o-s)/l-(a-s)/(l+d)+(a-o)/d,h=(a-o)/d-(c-o)/(d+f)+(c-a)/f;u*=d,h*=d,r(o,a,u,h)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var Mh=new F,Eh=new F,Hc=new bl,kc=new bl,Gc=new bl,Yr=class extends Fn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(Eh.subVectors(r[0],r[1]).add(r[0]),l=Eh);let f=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Mh.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Mh),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(d),h);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Hc.initNonuniformCatmullRom(l.x,f.x,u.x,d.x,g,v,x),kc.initNonuniformCatmullRom(l.y,f.y,u.y,d.y,g,v,x),Gc.initNonuniformCatmullRom(l.z,f.z,u.z,d.z,g,v,x)}else this.curveType==="catmullrom"&&(Hc.initCatmullRom(l.x,f.x,u.x,d.x,this.tension),kc.initCatmullRom(l.y,f.y,u.y,d.y,this.tension),Gc.initCatmullRom(l.z,f.z,u.z,d.z,this.tension));return n.set(Hc.calc(c),kc.calc(c),Gc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sh(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function cf(i,e){let t=1-i;return t*t*e}function lf(i,e){return 2*(1-i)*i*e}function hf(i,e){return i*i*e}function xs(i,e,t,n){return cf(i,e)+lf(i,t)+hf(i,n)}function uf(i,e){let t=1-i;return t*t*t*e}function df(i,e){let t=1-i;return 3*t*t*i*e}function ff(i,e){return 3*(1-i)*i*i*e}function pf(i,e){return i*i*i*e}function _s(i,e,t,n,r){return uf(i,e)+df(i,t)+ff(i,n)+pf(i,r)}var $o=class extends Fn{constructor(e=new $e,t=new $e,n=new $e,r=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new $e){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_s(e,r.x,s.x,o.x,a.x),_s(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zr=class extends Fn{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_s(e,r.x,s.x,o.x,a.x),_s(e,r.y,s.y,o.y,a.y),_s(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends Fn{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends Fn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jo=class extends Fn{constructor(e=new $e,t=new $e,n=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $e){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xs(e,r.x,s.x,o.x),xs(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dr=class extends Fn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xs(e,r.x,s.x,o.x),xs(e,r.y,s.y,o.y),xs(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Sh(a,c.x,l.x,d.x,f.x),Sh(a,c.y,l.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new $e().fromArray(r))}return this}},mf=Object.freeze({__proto__:null,ArcCurve:Jo,CatmullRomCurve3:Yr,CubicBezierCurve:$o,CubicBezierCurve3:Zr,EllipseCurve:Is,LineCurve:Ko,LineCurve3:Qo,QuadraticBezierCurve:jo,QuadraticBezierCurve3:dr,SplineCurve:ea});var Ls=class i extends Zo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ns=class i extends Lt{constructor(e=[new $e(0,-.5),new $e(.5,0),new $e(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Pt(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],d=1/t,f=new F,u=new $e,h=new F,g=new F,v=new F,x=0,p=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:x=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,h.x=p*1,h.y=-x,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:x=e[E+1].x-e[E].x,p=e[E+1].y-e[E].y,h.x=p*1,h.y=-x,h.z=p*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(g)}for(let E=0;E<=t;E++){let R=n+E*d*r,w=Math.sin(R),S=Math.cos(R);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*w,f.y=e[T].y,f.z=e[T].x*S,o.push(f.x,f.y,f.z),u.x=E/t,u.y=T/(e.length-1),a.push(u.x,u.y);let D=c[3*T+0]*w,M=c[3*T+1],L=c[3*T+0]*S;l.push(D,M,L)}}for(let E=0;E<t;E++)for(let R=0;R<e.length-1;R++){let w=R+E*e.length,S=w,T=w+e.length,D=w+e.length+1,M=w+1;s.push(S,T,M),s.push(D,M,T)}this.setIndex(s),this.setAttribute("position",new ut(o,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class i extends Lt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,d=c+1,f=e/a,u=t/c,h=[],g=[],v=[],x=[];for(let p=0;p<d;p++){let E=p*u-o;for(let R=0;R<l;R++){let w=R*f-s;g.push(w,-E,0),v.push(0,0,1),x.push(R/a),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let R=E+l*p,w=E+l*(p+1),S=E+1+l*(p+1),T=E+1+l*p;h.push(R,w,T),h.push(w,S,T)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class i extends Lt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],d=[],f=e,u=(t-e)/r,h=new F,g=new $e;for(let v=0;v<=r;v++){for(let x=0;x<=n;x++){let p=s+x/n*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,d.push(g.x,g.y)}f+=u}for(let v=0;v<r;v++){let x=v*(n+1);for(let p=0;p<n;p++){let E=p+x,R=E,w=E+n+1,S=E+n+2,T=E+1;a.push(R,w,T),a.push(w,S,T)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Dt=class i extends Lt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,d=[],f=new F,u=new F,h=[],g=[],v=[],x=[];for(let p=0;p<=n;p++){let E=[],R=p/n,w=o+R*a,S=e*Math.cos(w),T=Math.sqrt(e*e-S*S),D=0;p===0&&o===0?D=.5/t:p===n&&c===Math.PI&&(D=-.5/t);for(let M=0;M<=t;M++){let L=M/t,O=r+L*s;f.x=-T*Math.cos(O),f.y=S,f.z=T*Math.sin(O),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),x.push(L+D,1-R),E.push(l++)}d.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let R=d[p][E+1],w=d[p][E],S=d[p+1][E],T=d[p+1][E+1];(p!==0||o>0)&&h.push(R,w,T),(p!==n-1||c<Math.PI)&&h.push(w,S,T)}this.setIndex(h),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mn=class i extends Lt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],d=[],f=[],u=new F,h=new F,g=new F;for(let v=0;v<=n;v++){let x=o+v/n*a;for(let p=0;p<=r;p++){let E=p/r*s;h.x=(e+t*Math.cos(x))*Math.cos(E),h.y=(e+t*Math.cos(x))*Math.sin(E),h.z=t*Math.sin(x),l.push(h.x,h.y,h.z),u.x=e*Math.cos(E),u.y=e*Math.sin(E),g.subVectors(h,u).normalize(),d.push(g.x,g.y,g.z),f.push(p/r),f.push(v/n)}}for(let v=1;v<=n;v++)for(let x=1;x<=r;x++){let p=(r+1)*v+x-1,E=(r+1)*(v-1)+x-1,R=(r+1)*(v-1)+x,w=(r+1)*v+x;c.push(p,E,w),c.push(E,R,w)}this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var yi=class i extends Lt{constructor(e=new dr(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,c=new F,l=new $e,d=new F,f=[],u=[],h=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ut(f,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function v(){for(let R=0;R<t;R++)x(R);x(s===!1?t:0),E(),p()}function x(R){d=e.getPointAt(R/t,d);let w=o.normals[R],S=o.binormals[R];for(let T=0;T<=r;T++){let D=T/r*Math.PI*2,M=Math.sin(D),L=-Math.cos(D);c.x=L*w.x+M*S.x,c.y=L*w.y+M*S.y,c.z=L*w.z+M*S.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let R=1;R<=t;R++)for(let w=1;w<=r;w++){let S=(r+1)*(R-1)+(w-1),T=(r+1)*R+(w-1),D=(r+1)*R+w,M=(r+1)*(R-1)+w;g.push(S,T,M),g.push(T,D,M)}}function E(){for(let R=0;R<=t;R++)for(let w=0;w<=r;w++)l.x=R/t,l.y=w/r,h.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new mf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(wh(r))r.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(wh(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let r in n)e[r]=n[r]}return e}function wh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}var js={clone:xr,merge:Rn},xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[n].value=new F().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Mt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new at().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Us=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var cn=class extends oi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qs,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=_a,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},na=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ia=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Lr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ra=class extends Zi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yc:s=e,a=2*t-n;break;case Zc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yc:o=e,c=2*n-t;break;case Zc:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),v=g*g,x=v*g,p=-u*x+2*u*v-u*g,E=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*g+1,R=(-1-h)*x+(1.5+h)*v+.5*g,w=h*x-h*v;for(let S=0;S!==a;++S)s[S]=p*o[d+S]+E*o[l+S]+R*o[c+S]+w*o[f+S];return s}},sa=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=(n-t)/(r-t),f=1-d;for(let u=0;u!==a;++u)s[u]=o[l+u]*f+o[c+u]*d;return s}},oa=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},aa=class extends Zi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(n-t)/(r-t),v=1-g;for(let x=0;x!==a;++x)s[x]=o[l+x]*v+o[c+x]*g;return s}let u=a*2,h=e-1;for(let g=0;g!==a;++g){let v=o[l+g],x=o[c+g],p=h*u+g*2,E=f[p],R=f[p+1],w=e*u+g*2,S=d[w],T=d[w+1],D=vf(n,t,E,S,r);s[g]=xu(D,v,R,T,x)}return s}};function xu(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function yf(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function vf(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=xu(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let c=yf(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var kn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Vc(e.settings)&&(n.settings={inTangents:Lr(e.settings.inTangents,Array),outTangents:Lr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ho:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break;case Xc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ht("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Vc(this.settings)&&(bh(this.settings.inTangents,e),bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){ft("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){ft("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&bd(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){ft("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Po,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],d=e[a+1];if(l!==d&&(a!==1||l!==e[0]))if(r)c=!0;else{let f=a*n,u=f-n,h=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[h+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let h=0;h!==n;++h)t[u+h]=t[f+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Vc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function bh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ho;var Ji=class extends kn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ys;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}};ca.prototype.ValueTypeName="color";var la=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}};la.prototype.ValueTypeName="number";var ha=class extends Zi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let d=l+a;l!==d;l+=4)_t.slerpFlat(s,0,o,l-a,o,l,c);return s}},Fs=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends kn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ys;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends kn{constructor(e,t,n,r){super(e,t,n,r)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){let f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){let h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new da,fa=class{constructor(e){this.manager=e!==void 0?e:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bs=class extends fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wc=new at,Th=new F,Ah=new F,Jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Th.setFromMatrixPosition(e.matrixWorld),t.position.copy(Th),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===zr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Wc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ro=new F,Co=new _t,ui=new F,Os=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ro,Co,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ro,Co,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Co,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new F,Rh=new $e,Ch=new $e,yn=class extends Os{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Rh,Ch),t.subVectors(Ch,Rh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$c=class extends Jr{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},zs=class extends fr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Kc=class extends Jr{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},vi=class extends fr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ki=class extends Os{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qc=class extends Jr{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Qc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ks=class extends Lt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Nr=-90,Dr=1,pa=class extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yn(Nr,Dr,e,t);r.layers=this.layers,this.add(r);let s=new yn(Nr,Dr,e,t);s.layers=this.layers,this.add(s);let o=new yn(Nr,Dr,e,t);o.layers=this.layers,this.add(o);let a=new yn(Nr,Dr,e,t);a.layers=this.layers,this.add(a);let c=new yn(Nr,Dr,e,t);c.layers=this.layers,this.add(c);let l=new yn(Nr,Dr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ma=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Al="\\[\\]\\.:\\/",Mf=new RegExp("["+Al+"]","g"),Rl="[^"+Al+"]",Ef="[^"+Al.replace("\\.","")+"]",Sf=/((?:WC+[\/:])*)/.source.replace("WC",Rl),wf=/(WCOD+)?/.source.replace("WCOD",Ef),bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rl),Tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rl),Af=new RegExp("^"+Sf+wf+bf+Tf+"$"),Rf=["material","materials","bones","map"],jc=class{constructor(e,t,n){let r=n||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mf,"")}static parseTrackName(e){let t=Af.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Rf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=jc;Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray];Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);var Ph=new at,Gs=class{constructor(e,t,n=0,r=1/0){this.ray=new hr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)el(e[r],this,n,t);return n.sort(Ih),n}};function Ih(i,e){return i.distance-e.distance}function el(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)el(s[o],e,t,!0)}}var Dl=class Dl{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Dl.prototype.isMatrix2=!0;var tl=Dl;function Cl(i,e,t,n){let r=Cf(n);switch(t){case _l:return i*e;case ba:return i*e/r.components*r.byteLength;case Ta:return i*e/r.components*r.byteLength;case tr:return i*e*2/r.components*r.byteLength;case Aa:return i*e*2/r.components*r.byteLength;case yl:return i*e*3/r.components*r.byteLength;case Kn:return i*e*4/r.components*r.byteLength;case Ra:return i*e*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case La:return Math.max(i,16)*Math.max(e,8)/4;case Ca:case Ia:return Math.max(i,8)*Math.max(e,8)/2;case Na:case Da:case Fa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ua:case $s:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ja:case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ks:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cf(i){switch(i){case Bn:case pl:return{byteLength:1,components:1};case Qr:case ml:case Vn:return{byteLength:2,components:1};case Sa:case wa:return{byteLength:2,components:4};case ci:case Ea:case $n:return{byteLength:4,components:1};case gl:case xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window!="undefined"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);function Hu(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Pf(i){let e=new WeakMap;function t(a,c){let l=a.array,d=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let d=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){let g=f[u],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){let v=f[h];i.bufferSubData(l,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",c0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`uniform sampler2D dfgLUT;
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
}`,P0=`
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,zp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Jp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Kp=`#define NORMAL
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
}`,Qp=`#define NORMAL
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
}`,jp=`#define PHONG
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
}`,em=`#define PHONG
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
}`,tm=`#define STANDARD
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
}`,nm=`#define STANDARD
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
}`,im=`#define TOON
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
}`,rm=`#define TOON
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
}`,sm=`uniform float size;
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
}`,om=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,cm=`uniform vec3 color;
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
}`,lm=`uniform float rotation;
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
}`,hm=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:If,alphahash_pars_fragment:Lf,alphamap_fragment:Nf,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Ff,aomap_fragment:Bf,aomap_pars_fragment:Of,batching_pars_vertex:zf,batching_vertex:Hf,begin_vertex:kf,beginnormal_vertex:Gf,bsdfs:Vf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:$f,color_pars_fragment:Kf,color_pars_vertex:Qf,color_vertex:jf,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:c0,envmap_fragment:l0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:S0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:x0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:y0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:M0,lights_pars_begin:E0,lights_toon_fragment:w0,lights_toon_pars_fragment:b0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:I0,lights_fragment_end:L0,lightprobes_pars_fragment:N0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:B0,map_fragment:O0,map_pars_fragment:z0,map_particle_fragment:H0,map_particle_pars_fragment:k0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:V0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:$0,normal_pars_fragment:K0,normal_pars_vertex:Q0,normal_vertex:j0,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:rp,opaque_fragment:sp,packing:op,premultiplied_alpha_fragment:ap,project_vertex:cp,dithering_fragment:lp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:xp,skinning_pars_vertex:_p,skinning_vertex:yp,skinnormal_vertex:vp,specularmap_fragment:Mp,specularmap_pars_fragment:Ep,tonemapping_fragment:Sp,tonemapping_pars_fragment:wp,transmission_fragment:bp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Lp,backgroundCube_vert:Np,backgroundCube_frag:Dp,cube_vert:Up,cube_frag:Fp,depth_vert:Bp,depth_frag:Op,distance_vert:zp,distance_frag:Hp,equirect_vert:kp,equirect_frag:Gp,linedashed_vert:Vp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Zp,meshmatcap_vert:Jp,meshmatcap_frag:$p,meshnormal_vert:Kp,meshnormal_frag:Qp,meshphong_vert:jp,meshphong_frag:em,meshphysical_vert:tm,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:rm,points_vert:sm,points_frag:om,shadow_vert:am,shadow_frag:cm,sprite_vert:lm,sprite_frag:hm},qe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Rn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Rn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Rn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Rn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Rn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Rn([qe.points,qe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Rn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Rn([qe.common,qe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Rn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Rn([qe.sprite,qe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Rn([qe.common,qe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Rn([qe.lights,qe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};var ac={r:0,b:0,g:0},um=new at,ku=new Mt;ku.set(-1,0,0,0,1,0,0,0,1);function dm(i,e,t,n,r,s){let o=new Ye(0),a=r===!0?0:1,c,l,d=null,f=0,u=null;function h(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){let w=E.backgroundBlurriness>0;R=e.get(R,w)}return R}function g(E){let R=!1,w=h(E);w===null?x(o,a):w&&w.isColor&&(x(w,1),R=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(E,R){let w=h(R);w&&(w.isCubeTexture||w.mapping===Ws)?(l===void 0&&(l=new rt(new Ne(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:xr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(R.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ku),l.material.toneMapped=Nt.getTransfer(w.colorSpace)!==kt,(d!==w||f!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new rt(new Ft(2,2),new Bt({name:"BackgroundMaterial",uniforms:xr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Nt.getTransfer(w.colorSpace)!==kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function x(E,R){E.getRGB(ac,Tl(i)),t.buffers.color.setClear(ac.r,ac.g,ac.b,R,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,R=1){o.set(E),a=R,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,x(o,a)},render:g,addToRenderList:v,dispose:p}}function fm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(H,G,X,U,V){let ee=!1,J=f(H,U,X,G);s!==J&&(s=J,l(s.object)),ee=h(H,U,X,V),ee&&g(H,U,X,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,w(H,G,X,U),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(H){return i.bindVertexArray(H)}function d(H){return i.deleteVertexArray(H)}function f(H,G,X,U){let V=U.wireframe===!0,ee=n[G.id];ee===void 0&&(ee={},n[G.id]=ee);let J=H.isInstancedMesh===!0?H.id:0,de=ee[J];de===void 0&&(de={},ee[J]=de);let re=de[X.id];re===void 0&&(re={},de[X.id]=re);let se=re[V];return se===void 0&&(se=u(c()),re[V]=se),se}function u(H){let G=[],X=[],U=[];for(let V=0;V<t;V++)G[V]=0,X[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:X,attributeDivisors:U,object:H,attributes:{},index:null}}function h(H,G,X,U){let V=s.attributes,ee=G.attributes,J=0,de=X.getAttributes();for(let re in de)if(de[re].location>=0){let me=V[re],ze=ee[re];if(ze===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(ze=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(ze=H.instanceColor)),me===void 0||me.attribute!==ze||ze&&me.data!==ze.data)return!0;J++}return s.attributesNum!==J||s.index!==U}function g(H,G,X,U){let V={},ee=G.attributes,J=0,de=X.getAttributes();for(let re in de)if(de[re].location>=0){let me=ee[re];me===void 0&&(re==="instanceMatrix"&&H.instanceMatrix&&(me=H.instanceMatrix),re==="instanceColor"&&H.instanceColor&&(me=H.instanceColor));let ze={};ze.attribute=me,me&&me.data&&(ze.data=me.data),V[re]=ze,J++}s.attributes=V,s.attributesNum=J,s.index=U}function v(){let H=s.newAttributes;for(let G=0,X=H.length;G<X;G++)H[G]=0}function x(H){p(H,0)}function p(H,G){let X=s.newAttributes,U=s.enabledAttributes,V=s.attributeDivisors;X[H]=1,U[H]===0&&(i.enableVertexAttribArray(H),U[H]=1),V[H]!==G&&(i.vertexAttribDivisor(H,G),V[H]=G)}function E(){let H=s.newAttributes,G=s.enabledAttributes;for(let X=0,U=G.length;X<U;X++)G[X]!==H[X]&&(i.disableVertexAttribArray(X),G[X]=0)}function R(H,G,X,U,V,ee,J){J===!0?i.vertexAttribIPointer(H,G,X,V,ee):i.vertexAttribPointer(H,G,X,U,V,ee)}function w(H,G,X,U){v();let V=U.attributes,ee=X.getAttributes(),J=G.defaultAttributeValues;for(let de in ee){let re=ee[de];if(re.location>=0){let se=V[de];if(se===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){let me=se.normalized,ze=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;let pt=Oe.buffer,Se=Oe.type,Qe=Oe.bytesPerElement,ue=Se===i.INT||Se===i.UNSIGNED_INT||se.gpuType===Ea;if(se.isInterleavedBufferAttribute){let he=se.data,Me=he.stride,Ke=se.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<re.locationSize;ke++)p(re.location+ke,he.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<re.locationSize;ke++)x(re.location+ke);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let ke=0;ke<re.locationSize;ke++)R(re.location+ke,ze/re.locationSize,Se,me,Me*Qe,(Ke+ze/re.locationSize*ke)*Qe,ue)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<re.locationSize;he++)p(re.location+he,se.meshPerAttribute);H.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<re.locationSize;he++)x(re.location+he);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let he=0;he<re.locationSize;he++)R(re.location+he,ze/re.locationSize,Se,me,ze*Qe,ze/re.locationSize*he*Qe,ue)}}else if(J!==void 0){let me=J[de];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(re.location,me);break;case 3:i.vertexAttrib3fv(re.location,me);break;case 4:i.vertexAttrib4fv(re.location,me);break;default:i.vertexAttrib1fv(re.location,me)}}}}E()}function S(){L();for(let H in n){let G=n[H];for(let X in G){let U=G[X];for(let V in U){let ee=U[V];for(let J in ee)d(ee[J].object),delete ee[J];delete U[V]}}delete n[H]}}function T(H){if(n[H.id]===void 0)return;let G=n[H.id];for(let X in G){let U=G[X];for(let V in U){let ee=U[V];for(let J in ee)d(ee[J].object),delete ee[J];delete U[V]}}delete n[H.id]}function D(H){for(let G in n){let X=n[G];for(let U in X){let V=X[U];if(V[H.id]===void 0)continue;let ee=V[H.id];for(let J in ee)d(ee[J].object),delete ee[J];delete V[H.id]}}}function M(H){for(let G in n){let X=n[G],U=H.isInstancedMesh===!0?H.id:0,V=X[U];if(V!==void 0){for(let ee in V){let J=V[ee];for(let de in J)d(J[de].object),delete J[de];delete V[ee]}delete X[U],Object.keys(X).length===0&&delete n[G]}}}function L(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:x,disableUnusedAttributes:E}}function pm(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function a(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let u=0;for(let h=0;h<d;h++)u+=l[h];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function mm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Kn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let M=D===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Bn&&D!==$n&&!M&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(ht("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:w,maxSamples:S,samples:T}}function gm(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Hn,a=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let h=f.length!==0||u||n!==0||r;return r=u,n=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){let g=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!x)s?d(null):l();else{let E=s?0:n,R=E*4,w=p.clippingState||null;c.value=w,w=d(g,u,R,h);for(let S=0;S!==R;++S)w[S]=t[S];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,g){let v=f!==null?f.length:0,x=null;if(v!==0){if(x=c.value,g!==!0||x===null){let p=h+v*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(x===null||x.length<p)&&(x=new Float32Array(p));for(let R=0,w=h;R!==v;++R,w+=4)o.copy(f[R]).applyMatrix4(E,a),o.normal.toArray(x,w),x[w+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var ns=4,xm=6,_m=20,ym=256,eo=new Ki,yu=new Ye,Ul=null,Fl=0,Bl=0,Ol=!1,vm=new F,_r=new F,lc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=vm}=s;Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Fl,Bl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Bl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Vn,format:Kn,colorSpace:vs,depthBuffer:!1},r=vu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mm(s)),this._blurMaterial=Sm(s,e,t),this._ggxMaterial=Em(s,e,t)}return r}_compileMaterial(e){let t=new rt(new Lt,e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,r,s){let c=new yn(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(yu),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Ne,new un({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,x=v.material,p=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,p=!0):(x.color.copy(yu),p=!0);for(let R=0;R<6;R++){let w=R%3;w===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[R],s.y,s.z)):w===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[R]));let S=this._cubeSize;ts(r,w*S,R>2?S:0,S,S),f.setRenderTarget(r),p&&f.render(v,c),f.render(e,c)}f.toneMapping=h,f.autoClear=u,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Qi||e.mapping===gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,eo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-d*d),u=l*1.25,h=f*u,{_lodMax:g}=this,v=this._sizeLods[n],x=3*v*(n>g-ns?n-g+ns:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=g-t,ts(s,x,p,3*v,2*v),r.setRenderTarget(s),r.render(a,eo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,ts(e,x,p,3*v,2*v),r.setRenderTarget(e),r.render(a,eo)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[r],f=3*d*(r>this._lodMax-ns?r-this._lodMax+ns:0),u=4*(this._cubeSize-d);ts(t,f,u,3*d,2*d),o.setRenderTarget(t),o.render(c,eo)}};function Mm(i){let e=[],t=[],n=i,r=i-ns+1+xm;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,h=3,g=new Float32Array(h*u*f),v=new Float32Array(h*u*f);for(let p=0;p<f;p++){let E=p%3*2/3-1,R=p>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];g.set(w,h*u*p);for(let S=0;S<u;S++){let T=d[S*2]*2-1,D=d[S*2+1]*2-1;p===0?_r.set(1,D,T):p===1?_r.set(-T,1,-D):p===2?_r.set(-T,D,1):p===3?_r.set(-1,D,-T):p===4?_r.set(-T,-1,D):_r.set(T,D,-1),_r.toArray(v,(p*u+S)*h)}}let x=new Lt;x.setAttribute("position",new zt(g,h)),x.setAttribute("outputDirection",new zt(v,h)),t.push(new rt(x,null)),n>ns&&n--}return{lodMeshes:t,sizeLods:e}}function vu(i,e,t){let n=new An(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Em(i,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Sm(i,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:_m,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Mu(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Eu(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var hc=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cs(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ne(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Ei});s.uniforms.tEquirect.value=t;let o=new rt(r,s),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=Sn),new pa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function wm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,h=!1){return u==null?null:h?o(u):s(u)}function s(u){if(u&&u.isTexture){let h=u.mapping;if(h===ya||h===va)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new hc(g.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let h=u.mapping,g=h===ya||h===va,v=h===Qi||h===gr;if(g||v){let x=t.get(u),p=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new lc(i)),x=g?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{let E=u.image;return g&&E&&E.height>0||v&&E&&c(E)?(n===null&&(n=new lc(i)),x=g?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",d),x.texture):null}}}return u}function a(u,h){return h===ya?u.mapping=Qi:h===va&&(u.mapping=gr),u}function c(u){let h=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&h++;return h===g}function l(u){let h=u.target;h.removeEventListener("dispose",l);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function d(u){let h=u.target;h.removeEventListener("dispose",d);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function bm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ar("WebGLRenderer: "+n+" extension not supported."),r}}}function Tm(i,e,t,n){let r={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];let h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let h in u)e.update(u[h],i.ARRAY_BUFFER)}function l(f){let u=[],h=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(h!==null){let E=h.array;v=h.version;for(let R=0,w=E.length;R<w;R+=3){let S=E[R+0],T=E[R+1],D=E[R+2];u.push(S,T,T,D,D,S)}}else{let E=g.array;v=g.version;for(let R=0,w=E.length/3-1;R<w;R+=3){let S=R+0,T=R+1,D=R+2;u.push(S,T,T,D,D,S)}}let x=new(g.count>=65535?Ts:bs)(u,1);x.version=v;let p=s.get(f);p&&e.remove(p),s.set(f,x)}function d(f){let u=s.get(f);if(u){let h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function Am(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,s,f*o),t.update(u,n,1)}function l(f,u,h){h!==0&&(i.drawElementsInstanced(n,u,s,f*o,h),t.update(u,n,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x];t.update(v,n,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function Rm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cm(i,e,t){let n=new WeakMap,r=new Gt;function s(o,a,c){let l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,u=n.get(a);if(u===void 0||u.count!==f){let L=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],R=0;h===!0&&(R=1),g===!0&&(R=2),v===!0&&(R=3);let w=a.attributes.position.count*R,S=1;w>e.maxTextureSize&&(S=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*S*4*f),D=new Ss(T,w,S,f);D.type=$n,D.needsUpdate=!0;let M=R*4;for(let O=0;O<f;O++){let H=x[O],G=p[O],X=E[O],U=w*S*4*O;for(let V=0;V<H.count;V++){let ee=V*M;h===!0&&(r.fromBufferAttribute(H,V),T[U+ee+0]=r.x,T[U+ee+1]=r.y,T[U+ee+2]=r.z,T[U+ee+3]=0),g===!0&&(r.fromBufferAttribute(G,V),T[U+ee+4]=r.x,T[U+ee+5]=r.y,T[U+ee+6]=r.z,T[U+ee+7]=0),v===!0&&(r.fromBufferAttribute(X,V),T[U+ee+8]=r.x,T[U+ee+9]=r.y,T[U+ee+10]=r.z,T[U+ee+11]=X.itemSize===4?r.w:1)}}u={count:f,texture:D,size:new $e(w,S)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];let g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Pm(i,e,t,n,r){let s=new WeakMap;function o(l){let d=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function a(){s=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var Im={[al]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[ll]:"CINEON_TONE_MAPPING",[Vs]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[dl]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function Lm(i,e,t,n,r,s){let o=new An(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Lt;l.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ut([0,2,0,0,2,0],2));let d=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new rt(l,d),u=new Ki(-1,1,1,-1,0,1),h=null,g=null,v=!1,x,p=null,E=[],R=!1;this.setSize=function(w,S){o.setSize(w,S),a!==null&&a.setSize(w,S),c!==null&&c.setSize(w,S);for(let T=0;T<E.length;T++){let D=E[T];D.setSize&&D.setSize(w,S)}},this.setEffects=function(w){E=w,R=E.length>0&&E[0].isRenderPass===!0;let S=o.width,T=o.height;E.length>0&&a===null&&(a=new An(S,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new An(S,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<E.length;D++){let M=E[D];M.setSize&&M.setSize(S,T)}},this.begin=function(w,S){if(v||w.toneMapping===ai&&E.length===0)return!1;if(p=S,S!==null){let T=S.width,D=S.height;(o.width!==T||o.height!==D)&&this.setSize(T,D)}return R===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=ai,!0},this.hasRenderPass=function(){return R},this.end=function(w,S){w.toneMapping=x,v=!0;let T=o,D=a;for(let M=0;M<E.length;M++){let L=E[M];L.enabled!==!1&&(L.render(w,D,T,S),L.needsSwap!==!1&&(T=D,D=D===a?c:a))}if(h!==w.outputColorSpace||g!==w.toneMapping){h=w.outputColorSpace,g=w.toneMapping,d.defines={},Nt.getTransfer(h)===kt&&(d.defines.SRGB_TRANSFER="");let M=Im[g];M&&(d.defines[M]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(p),w.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var Gu=new In,kl=new _i(1,1),Vu=new Ss,Wu=new Vo,Xu=new Cs,Su=[],wu=[],bu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Su[r];if(s===void 0&&(s=new Float32Array(r),Su[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fc(i,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),pn(t,n)}}function Om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),pn(t,n)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(fn(t,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),pn(t,n)}}function Hm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function Vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function Wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function Zm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(kl.compareFunction=t.isReversedDepthBuffer()?oc:sc,s=kl):s=Gu,t.setTexture2D(e||s,r)}function Jm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wu,r)}function $m(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xu,r)}function Km(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vu,r)}function Qm(i){switch(i){case 5126:return Nm;case 35664:return Dm;case 35665:return Um;case 35666:return Fm;case 35674:return Bm;case 35675:return Om;case 35676:return zm;case 5124:case 35670:return Hm;case 35667:case 35671:return km;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}function jm(i,e){i.uniform1fv(this.addr,e)}function eg(i,e){let t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function tg(i,e){let t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function ng(i,e){let t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function ig(i,e){let t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rg(i,e){let t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sg(i,e){let t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function og(i,e){i.uniform1iv(this.addr,e)}function ag(i,e){i.uniform2iv(this.addr,e)}function cg(i,e){i.uniform3iv(this.addr,e)}function lg(i,e){i.uniform4iv(this.addr,e)}function hg(i,e){i.uniform1uiv(this.addr,e)}function ug(i,e){i.uniform2uiv(this.addr,e)}function dg(i,e){i.uniform3uiv(this.addr,e)}function fg(i,e){i.uniform4uiv(this.addr,e)}function pg(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=kl:o=Gu;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function mg(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wu,s[o])}function gg(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xu,s[o])}function xg(i,e,t){let n=this.cache,r=e.length,s=fc(t,r);fn(n,s)||(i.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vu,s[o])}function _g(i){switch(i){case 5126:return jm;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return rg;case 35676:return sg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}var Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}},Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_g(t.type)}},Wl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},zl=/(\w+)(\])?(\[|\.)?/g;function Ru(i,e){i.seq.push(e),i.map[e.id]=e}function yg(i,e,t){let n=i.name,r=n.length;for(zl.lastIndex=0;;){let s=zl.exec(n),o=zl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ru(t,l===void 0?new Gl(a,i,e):new Vl(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Wl(a),Ru(t,f)),t=f}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);yg(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Cu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vg=37297,Mg=0;function Eg(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Pu=new Mt;function Sg(i){Nt._getMatrix(Pu,Nt.workingColorSpace,i);let e=`mat3( ${Pu.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(i)){case Ms:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Iu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Eg(i.getShaderSource(e),a)}else return s}function wg(i,e){let t=Sg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var bg={[al]:"Linear",[cl]:"Reinhard",[ll]:"Cineon",[Vs]:"ACESFilmic",[ul]:"AgX",[dl]:"Neutral",[hl]:"Custom"};function Tg(i,e){let t=bg[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new F;function Ag(){Nt.getLuminanceCoefficients(cc);let i=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Cg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function no(i){return i!==""}function Lu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(Ig,Ng)}var Lg=new Map;function Ng(i,e){let t=At[e];if(t===void 0){let n=Lg.get(e);if(n!==void 0)t=At[n],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xl(t)}var Dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(Dg,Ug)}function Ug(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Fg={[pr]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function Bg(i){return Fg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Og={[Qi]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function zg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Og[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Hg={[gr]:"ENVMAP_MODE_REFRACTION"};function kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gg={[_a]:"ENVMAP_BLENDING_MULTIPLY",[jh]:"ENVMAP_BLENDING_MIX",[eu]:"ENVMAP_BLENDING_ADD"};function Vg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gg[i.combine]||"ENVMAP_BLENDING_NONE"}function Wg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Bg(t),l=zg(t),d=kg(t),f=Vg(t),u=Wg(t),h=Rg(t),g=Cg(s),v=r.createProgram(),x,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),p.length>0&&(p+=`
`)):(x=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),p=[Uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?At.tonemapping_pars_fragment:"",t.toneMapping!==ai?Tg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,wg("linearToOutputTexel",t.outputColorSpace),Ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),o=Xl(o),o=Lu(o,t),o=Nu(o,t),a=Xl(a),a=Lu(a,t),a=Nu(a,t),o=Du(o),a=Du(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=E+x+o,w=E+p+a,S=Cu(r,r.VERTEX_SHADER,R),T=Cu(r,r.FRAGMENT_SHADER,w);r.attachShader(v,S),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(H){if(i.debug.checkShaderErrors){let G=r.getProgramInfoLog(v)||"",X=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(T)||"",V=G.trim(),ee=X.trim(),J=U.trim(),de=!0,re=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,T);else{let se=Iu(r,S,"vertex"),me=Iu(r,T,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+V+`
`+se+`
`+me)}else V!==""?ht("WebGLProgram: Program Info Log:",V):(ee===""||J==="")&&(re=!1);re&&(H.diagnostics={runnable:de,programLog:V,vertexShader:{log:ee,prefix:x},fragmentShader:{log:J,prefix:p}})}r.deleteShader(S),r.deleteShader(T),M=new is(r,v),L=Pg(r,v)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(v,vg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var qg=0,ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yl(e),t.set(e,n)),n}},Yl=class{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}};function Yg(i){return i===tr||i===$s||i===Ks}function Zg(i,e,t,n,r,s){let o=new Gr,a=new ql,c=new Set,l=[],d=new Map,f=n.logarithmicDepthBuffer,u=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,L,O,H,G,X){let U=H.fog,V=G.geometry,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,J=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,de=e.get(M.envMap||ee,J),re=de&&de.mapping===Ws?de.image.height:null,se=h[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&ht("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ze=me!==void 0?me.length:0,Oe=0;V.morphAttributes.position!==void 0&&(Oe=1),V.morphAttributes.normal!==void 0&&(Oe=2),V.morphAttributes.color!==void 0&&(Oe=3);let pt,Se,Qe,ue;if(se){let it=wi[se];pt=it.vertexShader,Se=it.fragmentShader}else{pt=M.vertexShader,Se=M.fragmentShader;let it=a.getVertexShaderStage(M),wt=a.getFragmentShaderStage(M);a.update(M,it,wt),Qe=it.id,ue=wt.id}let he=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Ke=G.isInstancedMesh===!0,ke=G.isBatchedMesh===!0,je=!!M.map,Tt=!!M.matcap,lt=!!de,ct=!!M.aoMap,It=!!M.lightMap,gt=!!M.bumpMap&&M.wireframe===!1,xt=!!M.normalMap,ae=!!M.displacementMap,le=!!M.emissiveMap,xe=!!M.metalnessMap,ye=!!M.roughnessMap,z=M.anisotropy>0,Le=M.clearcoat>0,ve=M.dispersion>0,B=M.retroreflectivity>0,y=M.iridescence>0,Z=M.sheen>0,Q=M.transmission>0,j=z&&!!M.anisotropyMap,oe=Le&&!!M.clearcoatMap,ce=Le&&!!M.clearcoatNormalMap,K=Le&&!!M.clearcoatRoughnessMap,ie=y&&!!M.iridescenceMap,pe=y&&!!M.iridescenceThicknessMap,Ee=Z&&!!M.sheenColorMap,_e=Z&&!!M.sheenRoughnessMap,Te=!!M.specularMap,Ce=!!M.specularColorMap,Fe=!!M.specularIntensityMap,we=Q&&!!M.transmissionMap,te=Q&&!!M.thicknessMap,Pe=!!M.gradientMap,fe=!!M.alphaMap,Ue=M.alphaTest>0,He=!!M.alphaHash,Ae=!!M.extensions,nt=ai;M.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(nt=i.toneMapping);let Ze={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:Se,defines:M.defines,customVertexShaderID:Qe,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:ke,batchingColor:ke&&G._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,instancingMorph:Ke&&G.morphTexture!==null,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:Tt,envMap:lt,envMapMode:lt&&de.mapping,envMapCubeUVHeight:re,aoMap:ct,lightMap:It,bumpMap:gt,normalMap:xt,displacementMap:ae,emissiveMap:le,normalMapObjectSpace:xt&&M.normalMapType===iu,normalMapTangentSpace:xt&&M.normalMapType===Qs,packedNormalMap:xt&&M.normalMapType===Qs&&Yg(M.normalMap.format),metalnessMap:xe,roughnessMap:ye,anisotropy:z,anisotropyMap:j,clearcoat:Le,clearcoatMap:oe,clearcoatNormalMap:ce,clearcoatRoughnessMap:K,dispersion:ve,retroreflection:B,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:pe,sheen:Z,sheenColorMap:Ee,sheenRoughnessMap:_e,specularMap:Te,specularColorMap:Ce,specularIntensityMap:Fe,transmission:Q,transmissionMap:we,thicknessMap:te,gradientMap:Pe,opaque:M.transparent===!1&&M.blending===Kr&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ue,alphaHash:He,combine:M.combine,mapUv:je&&g(M.map.channel),aoMapUv:ct&&g(M.aoMap.channel),lightMapUv:It&&g(M.lightMap.channel),bumpMapUv:gt&&g(M.bumpMap.channel),normalMapUv:xt&&g(M.normalMap.channel),displacementMapUv:ae&&g(M.displacementMap.channel),emissiveMapUv:le&&g(M.emissiveMap.channel),metalnessMapUv:xe&&g(M.metalnessMap.channel),roughnessMapUv:ye&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:oe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(M.sheenRoughnessMap.channel),specularMapUv:Te&&g(M.specularMap.channel),specularColorMapUv:Ce&&g(M.specularColorMap.channel),specularIntensityMapUv:Fe&&g(M.specularIntensityMap.channel),transmissionMapUv:we&&g(M.transmissionMap.channel),thicknessMapUv:te&&g(M.thicknessMap.channel),alphaMapUv:fe&&g(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xt||z),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(je||fe),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&xt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:Oe,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&Nt.getTransfer(M.map.colorSpace)===kt,decodeVideoTextureEmissive:le&&M.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(M.emissiveMap.colorSpace)===kt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function x(M){let L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)L.push(O),L.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(p(L,M),E(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function p(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numSunLights),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numSunLightShadows),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function E(M,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function R(M){let L=h[M.type],O;if(L){let H=wi[L];O=js.clone(H.uniforms)}else O=M.uniforms;return O}function w(M,L){let O=d.get(L);return O!==void 0?++O.usedTimes:(O=new Xg(i,L,M,r),l.push(O),d.set(L,O)),O}function S(M){if(--M.usedTimes===0){let L=l.indexOf(M);l[L]=l[l.length-1],l.pop(),d.delete(M.cacheKey),M.destroy()}}function T(M){a.remove(M)}function D(){a.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:R,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:D}}function Jg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $g(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bu(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,g,v,x,p){let E=i[e];return E===void 0?(E={id:u.id,object:u,geometry:h,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:x,group:p},i[e]=E):(E.id=u.id,E.object=u,E.geometry=h,E.material=g,E.materialVariant=o(u),E.groupOrder=v,E.renderOrder=u.renderOrder,E.z=x,E.group=p),e++,E}function c(u,h,g,v,x,p,E){E.reversedDepth===!0&&(x=-x);let R=a(u,h,g,v,x,p);g.transmission>0?n.push(R):g.transparent===!0?r.push(R):t.push(R)}function l(u,h,g,v,x,p){let E=a(u,h,g,v,x,p);g.transmission>0?n.unshift(E):g.transparent===!0?r.unshift(E):t.unshift(E)}function d(u,h){t.length>1&&t.sort(u||$g),n.length>1&&n.sort(h||Fu),r.length>1&&r.sort(h||Fu)}function f(){for(let u=e,h=i.length;u<h;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:d}}function Kg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Bu,i.set(n,[o])):r>=s.length?(o=new Bu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ex=0;function tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nx(i){let e=new Qg,t=jg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let r=new F,s=new at,o=new at;function a(l){let d=0,f=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let h=0,g=0,v=0,x=0,p=0,E=0,R=0,w=0,S=0,T=0,D=0,M=0,L=0,O=0;l.sort(tx);for(let G=0,X=l.length;G<X;G++){let U=l[G],V=U.color,ee=U.intensity,J=U.distance,de=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===tr?de=U.shadow.map.texture:de=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=V.r*ee,f+=V.g*ee,u+=V.b*ee;else if(U.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(U.sh.coefficients[re],ee);O++}else if(U.isSunLight){let re=e.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let se=U.shadow,me=t.get(U);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[g]=me,n.sunShadowMap[g]=de;let ze=se.getViewportCount();for(let Oe=0;Oe<ze;Oe++)n.sunShadowMatrix[v+Oe]=se.getMatrix(Oe),n.sunShadowCascade[v+Oe]=se._cascadeData[Oe];v+=ze,g++}n.sun[h]=re,h++}else if(U.isDirectionalLight){let re=e.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let se=U.shadow,me=t.get(U);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,n.directionalShadow[x]=me,n.directionalShadowMap[x]=de,n.directionalShadowMatrix[x]=U.shadow.matrix,S++}n.directional[x]=re,x++}else if(U.isSpotLight){let re=e.get(U);re.position.setFromMatrixPosition(U.matrixWorld),re.color.copy(V).multiplyScalar(ee),re.distance=J,re.coneCos=Math.cos(U.angle),re.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),re.decay=U.decay,n.spot[E]=re;let se=U.shadow;if(U.map&&(n.spotLightMap[M]=U.map,M++,se.updateMatrices(U),U.castShadow&&L++),n.spotLightMatrix[E]=se.matrix,U.castShadow){let me=t.get(U);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,n.spotShadow[E]=me,n.spotShadowMap[E]=de,D++}E++}else if(U.isRectAreaLight){let re=e.get(U);re.color.copy(V).multiplyScalar(ee),re.halfWidth.set(U.width*.5,0,0),re.halfHeight.set(0,U.height*.5,0),n.rectArea[R]=re,R++}else if(U.isPointLight){let re=e.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity),re.distance=U.distance,re.decay=U.decay,U.castShadow){let se=U.shadow,me=t.get(U);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,me.shadowCameraNear=se.camera.near,me.shadowCameraFar=se.camera.far,n.pointShadow[p]=me,n.pointShadowMap[p]=de,n.pointShadowMatrix[p]=U.shadow.matrix,T++}n.point[p]=re,p++}else if(U.isHemisphereLight){let re=e.get(U);re.skyColor.copy(U.color).multiplyScalar(ee),re.groundColor.copy(U.groundColor).multiplyScalar(ee),n.hemi[w]=re,w++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;let H=n.hash;(H.sunLength!==h||H.directionalLength!==x||H.pointLength!==p||H.spotLength!==E||H.rectAreaLength!==R||H.hemiLength!==w||H.numSunShadows!==g||H.numDirectionalShadows!==S||H.numPointShadows!==T||H.numSpotShadows!==D||H.numSpotMaps!==M||H.numLightProbes!==O)&&(n.sun.length=h,n.directional.length=x,n.spot.length=E,n.rectArea.length=R,n.point.length=p,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=O,H.sunLength=h,H.directionalLength=x,H.pointLength=p,H.spotLength=E,H.rectAreaLength=R,H.hemiLength=w,H.numSunShadows=g,H.numDirectionalShadows=S,H.numPointShadows=T,H.numSpotShadows=D,H.numSpotMaps=M,H.numLightProbes=O,n.version=ex++)}function c(l,d){let f=0,u=0,h=0,g=0,v=0,x=0,p=d.matrixWorldInverse;for(let E=0,R=l.length;E<R;E++){let w=l[E];if(w.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),f++}else if(w.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),u++}else if(w.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),h++}else if(w.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Ou(i){let e=new nx(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function d(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ix(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Ou(i),e.set(r,[a])):s>=o.length?(a=new Ou(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`,ox=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ax=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],zu=new at,to=new F,Hl=new F;function cx(i,e,t){let n=new Wr,r=new $e,s=new $e,o=new Gt,a=new na,c=new ia,l={},d=t.maxTextureSize,f={[Mi]:dn,[dn]:Mi,[tn]:tn},u=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:rx,fragmentShader:sx}),h=u.clone();h.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new rt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let p=this.type;this.render=function(T,D,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Dh&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pr);let L=i.getRenderTarget(),O=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ei),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=p!==this.type;X&&D.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(V=>V.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,V=T.length;U<V;U++){let ee=T[U],J=ee.shadow;if(J===void 0){ht("WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);let de=J.getFrameExtents();r.multiply(de),s.copy(J.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/de.x),r.x=s.x*de.x,J.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/de.y),r.y=s.y*de.y,J.mapSize.y=s.y));let re=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=re,J.map===null||X===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===$r){if(ee.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new An(r.x,r.y,{format:tr,type:Vn,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),J.map.texture.name=ee.name+".shadowMap",J.map.depthTexture=new _i(r.x,r.y,$n),J.map.depthTexture.name=ee.name+".shadowMapDepth",J.map.depthTexture.format=fi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=vn,J.map.depthTexture.magFilter=vn}else ee.isPointLight?(J.map=new hc(r.x),J.map.depthTexture=new Yo(r.x,ci)):(J.map=new An(r.x,r.y),J.map.depthTexture=new _i(r.x,r.y,ci)),J.map.depthTexture.name=ee.name+".shadowMap",J.map.depthTexture.format=fi,this.type===pr?(J.map.depthTexture.compareFunction=re?oc:sc,J.map.depthTexture.minFilter=Sn,J.map.depthTexture.magFilter=Sn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=vn,J.map.depthTexture.magFilter=vn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==r.x||J.map.height!==r.y)&&J.map.setSize(r.x,r.y);let se=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();ee.isPointLight!==!0&&J.updateMatrices(ee,M);for(let me=0;me<se;me++){let ze=J.getCamera(me);if(ee.isPointLight){let Oe=J.camera,pt=J.matrix,Se=ee.distance||Oe.far;Se!==Oe.far&&(Oe.far=Se,Oe.updateProjectionMatrix()),to.setFromMatrixPosition(ee.matrixWorld),Oe.position.copy(to),Hl.copy(Oe.position),Hl.add(ox[me]),Oe.up.copy(ax[me]),Oe.lookAt(Hl),Oe.updateMatrixWorld(),pt.makeTranslation(-to.x,-to.y,-to.z),zu.multiplyMatrices(Oe.projectionMatrix,Oe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(zu,Oe.coordinateSystem,Oe.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,me),i.clear();else{me===0&&(i.setRenderTarget(J.map),i.clear());let Oe=J.getViewport(me);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),G.viewport(o)}n=J.getFrustum(me),w(D,M,ze,ee,this.type)}J.isPointLightShadow!==!0&&this.type===$r&&E(J,M),J.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(L,O,H)};function E(T,D){let M=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new An(r.x,r.y,{format:tr,type:Vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(D,null,M,u,v,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(D,null,M,h,v,null)}function R(T,D,M,L){let O=null,H=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)O=H;else if(O=M.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let G=O.uuid,X=D.uuid,U=l[G];U===void 0&&(U={},l[G]=U);let V=U[X];V===void 0&&(V=O.clone(),U[X]=V,D.addEventListener("dispose",S)),O=V}if(O.visible=D.visible,O.wireframe=D.wireframe,L===$r?O.side=D.shadowSide!==null?D.shadowSide:D.side:O.side=D.shadowSide!==null?D.shadowSide:f[D.side],O.alphaMap=D.alphaMap,O.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,O.map=D.map,O.clipShadows=D.clipShadows,O.clippingPlanes=D.clippingPlanes,O.clipIntersection=D.clipIntersection,O.displacementMap=D.displacementMap,O.displacementScale=D.displacementScale,O.displacementBias=D.displacementBias,O.wireframeLinewidth=D.wireframeLinewidth,O.linewidth=D.linewidth,M.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let G=i.properties.get(O);G.light=M}return O}function w(T,D,M,L,O){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===$r)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let X=e.update(T),U=T.material;if(Array.isArray(U)){let V=X.groups;for(let ee=0,J=V.length;ee<J;ee++){let de=V[ee],re=U[de.materialIndex];if(re&&re.visible){let se=R(T,re,L,O);T.onBeforeShadow(i,T,D,M,X,se,de),i.renderBufferDirect(M,null,X,se,T,de),T.onAfterShadow(i,T,D,M,X,se,de)}}}else if(U.visible){let V=R(T,U,L,O);T.onBeforeShadow(i,T,D,M,X,V,null),i.renderBufferDirect(M,null,X,V,T,null),T.onAfterShadow(i,T,D,M,X,V,null)}}let G=T.children;for(let X=0,U=G.length;X<U;X++)w(G[X],D,M,L,O)}function S(T){T.target.removeEventListener("dispose",S);for(let M in l){let L=l[M],O=T.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function lx(i,e){function t(){let te=!1,Pe=new Gt,fe=null,Ue=new Gt(0,0,0,0);return{setMask:function(He){fe!==He&&!te&&(i.colorMask(He,He,He,He),fe=He)},setLocked:function(He){te=He},setClear:function(He,Ae,nt,Ze,it){it===!0&&(He*=Ze,Ae*=Ze,nt*=Ze),Pe.set(He,Ae,nt,Ze),Ue.equals(Pe)===!1&&(i.clearColor(He,Ae,nt,Ze),Ue.copy(Pe))},reset:function(){te=!1,fe=null,Ue.set(-1,0,0,0)}}}function n(){let te=!1,Pe=!1,fe=null,Ue=null,He=null;return{setReversed:function(Ae){if(Pe!==Ae){let nt=e.get("EXT_clip_control");Ae?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Pe=Ae;let Ze=He;He=null,this.setClear(Ze)}},getReversed:function(){return Pe},setTest:function(Ae){Ae?he(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(Ae){fe!==Ae&&!te&&(i.depthMask(Ae),fe=Ae)},setFunc:function(Ae){if(Pe&&(Ae=mu[Ae]),Ue!==Ae){switch(Ae){case Lo:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case Br:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=Ae}},setLocked:function(Ae){te=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,Pe&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){te=!1,fe=null,Ue=null,He=null,Pe=!1}}}function r(){let te=!1,Pe=null,fe=null,Ue=null,He=null,Ae=null,nt=null,Ze=null,it=null;return{setTest:function(wt){te||(wt?he(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(wt){Pe!==wt&&!te&&(i.stencilMask(wt),Pe=wt)},setFunc:function(wt,ne,Ge){(fe!==wt||Ue!==ne||He!==Ge)&&(i.stencilFunc(wt,ne,Ge),fe=wt,Ue=ne,He=Ge)},setOp:function(wt,ne,Ge){(Ae!==wt||nt!==ne||Ze!==Ge)&&(i.stencilOp(wt,ne,Ge),Ae=wt,nt=ne,Ze=Ge)},setLocked:function(wt){te=wt},setClear:function(wt){it!==wt&&(i.clearStencil(wt),it=wt)},reset:function(){te=!1,Pe=null,fe=null,Ue=null,He=null,Ae=null,nt=null,Ze=null,it=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,d={},f={},u={},h=new WeakMap,g=[],v=null,x=!1,p=null,E=null,R=null,w=null,S=null,T=null,D=null,M=new Ye(0,0,0),L=0,O=!1,H=null,G=null,X=null,U=null,V=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,de=0,re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(re)[1]),J=de>=1):re.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),J=de>=2);let se=null,me={},ze=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),pt=new Gt().fromArray(ze),Se=new Gt().fromArray(Oe);function Qe(te,Pe,fe,Ue){let He=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(te,Ae),i.texParameteri(te,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(te,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<fe;nt++)te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,He):i.texImage2D(Pe+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,He);return Ae}let ue={};ue[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(Br),gt(!1),xt(nl),he(i.CULL_FACE),ct(Ei);function he(te){d[te]!==!0&&(i.enable(te),d[te]=!0)}function Me(te){d[te]!==!1&&(i.disable(te),d[te]=!1)}function Ke(te,Pe){return u[te]!==Pe?(i.bindFramebuffer(te,Pe),u[te]=Pe,te===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pe),te===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ke(te,Pe){let fe=g,Ue=!1;if(te){fe=h.get(Pe),fe===void 0&&(fe=[],h.set(Pe,fe));let He=te.textures;if(fe.length!==He.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,nt=He.length;Ae<nt;Ae++)fe[Ae]=i.COLOR_ATTACHMENT0+Ae;fe.length=He.length,Ue=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(fe)}function je(te){return v!==te?(i.useProgram(te),v=te,!0):!1}let Tt={[mr]:i.FUNC_ADD,[Fh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};Tt[Oh]=i.MIN,Tt[zh]=i.MAX;let lt={[Hh]:i.ZERO,[kh]:i.ONE,[Gh]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Zh]:i.SRC_ALPHA_SATURATE,[qh]:i.DST_COLOR,[Wh]:i.DST_ALPHA,[Vh]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[Yh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[Jh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[Qh]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(te,Pe,fe,Ue,He,Ae,nt,Ze,it,wt){if(te===Ei){x===!0&&(Me(i.BLEND),x=!1);return}if(x===!1&&(he(i.BLEND),x=!0),te!==Uh){if(te!==p||wt!==O){if((E!==mr||S!==mr)&&(i.blendEquation(i.FUNC_ADD),E=mr,S=mr),wt)switch(te){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",te);break}else switch(te){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",te);break}R=null,w=null,T=null,D=null,M.set(0,0,0),L=0,p=te,O=wt}return}He=He||Pe,Ae=Ae||fe,nt=nt||Ue,(Pe!==E||He!==S)&&(i.blendEquationSeparate(Tt[Pe],Tt[He]),E=Pe,S=He),(fe!==R||Ue!==w||Ae!==T||nt!==D)&&(i.blendFuncSeparate(lt[fe],lt[Ue],lt[Ae],lt[nt]),R=fe,w=Ue,T=Ae,D=nt),(Ze.equals(M)===!1||it!==L)&&(i.blendColor(Ze.r,Ze.g,Ze.b,it),M.copy(Ze),L=it),p=te,O=!1}function It(te,Pe){te.side===tn?Me(i.CULL_FACE):he(i.CULL_FACE);let fe=te.side===dn;Pe&&(fe=!fe),gt(fe),te.blending===Kr&&te.transparent===!1?ct(Ei):ct(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),o.setFunc(te.depthFunc),o.setTest(te.depthTest),o.setMask(te.depthWrite),s.setMask(te.colorWrite);let Ue=te.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(te.stencilWriteMask),a.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),a.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),le(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(te){H!==te&&(te?i.frontFace(i.CW):i.frontFace(i.CCW),H=te)}function xt(te){te!==Lh?(he(i.CULL_FACE),te!==G&&(te===nl?i.cullFace(i.BACK):te===Nh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),G=te}function ae(te){te!==X&&(J&&i.lineWidth(te),X=te)}function le(te,Pe,fe){te?(he(i.POLYGON_OFFSET_FILL),(U!==Pe||V!==fe)&&(U=Pe,V=fe,o.getReversed()&&(Pe=-Pe),i.polygonOffset(Pe,fe))):Me(i.POLYGON_OFFSET_FILL)}function xe(te){te?he(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ye(te){te===void 0&&(te=i.TEXTURE0+ee-1),se!==te&&(i.activeTexture(te),se=te)}function z(te,Pe,fe){fe===void 0&&(se===null?fe=i.TEXTURE0+ee-1:fe=se);let Ue=me[fe];Ue===void 0&&(Ue={type:void 0,texture:void 0},me[fe]=Ue),(Ue.type!==te||Ue.texture!==Pe)&&(se!==fe&&(i.activeTexture(fe),se=fe),i.bindTexture(te,Pe||ue[te]),Ue.type=te,Ue.texture=Pe)}function Le(){let te=me[se];te!==void 0&&te.type!==void 0&&(i.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(te){ft("WebGLState:",te)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(te){ft("WebGLState:",te)}}function y(){try{i.texSubImage2D(...arguments)}catch(te){ft("WebGLState:",te)}}function Z(){try{i.texSubImage3D(...arguments)}catch(te){ft("WebGLState:",te)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(te){ft("WebGLState:",te)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(te){ft("WebGLState:",te)}}function oe(){try{i.texStorage2D(...arguments)}catch(te){ft("WebGLState:",te)}}function ce(){try{i.texStorage3D(...arguments)}catch(te){ft("WebGLState:",te)}}function K(){try{i.texImage2D(...arguments)}catch(te){ft("WebGLState:",te)}}function ie(){try{i.texImage3D(...arguments)}catch(te){ft("WebGLState:",te)}}function pe(te){return f[te]!==void 0?f[te]:i.getParameter(te)}function Ee(te,Pe){f[te]!==Pe&&(i.pixelStorei(te,Pe),f[te]=Pe)}function _e(te){pt.equals(te)===!1&&(i.scissor(te.x,te.y,te.z,te.w),pt.copy(te))}function Te(te){Se.equals(te)===!1&&(i.viewport(te.x,te.y,te.z,te.w),Se.copy(te))}function Ce(te,Pe){let fe=l.get(Pe);fe===void 0&&(fe=new WeakMap,l.set(Pe,fe));let Ue=fe.get(te);Ue===void 0&&(Ue=i.getUniformBlockIndex(Pe,te.name),fe.set(te,Ue))}function Fe(te,Pe){let Ue=l.get(Pe).get(te);c.get(Pe)!==Ue&&(i.uniformBlockBinding(Pe,Ue,te.__bindingPointIndex),c.set(Pe,Ue))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},se=null,me={},u={},h=new WeakMap,g=[],v=null,x=!1,p=null,E=null,R=null,w=null,S=null,T=null,D=null,M=new Ye(0,0,0),L=0,O=!1,H=null,G=null,X=null,U=null,V=null,pt.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Me,bindFramebuffer:Ke,drawBuffers:ke,useProgram:je,setBlending:ct,setMaterial:It,setFlipSided:gt,setCullFace:xt,setLineWidth:ae,setPolygonOffset:le,setScissorTest:xe,activeTexture:ye,bindTexture:z,unbindTexture:Le,compressedTexImage2D:ve,compressedTexImage3D:B,texImage2D:K,texImage3D:ie,pixelStorei:Ee,getParameter:pe,updateUBOMapping:Ce,uniformBlockBinding:Fe,texStorage2D:oe,texStorage3D:ce,texSubImage2D:y,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:j,scissor:_e,viewport:Te,reset:we}}function hx(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,d=new WeakMap,f=new Set,u,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(B,y){return g?new OffscreenCanvas(B,y):Es("canvas")}function x(B,y,Z){let Q=1,j=ve(B);if((j.width>Z||j.height>Z)&&(Q=Z/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&B instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&B instanceof ImageBitmap||typeof VideoFrame!="undefined"&&B instanceof VideoFrame){let oe=Math.floor(Q*j.width),ce=Math.floor(Q*j.height);u===void 0&&(u=v(oe,ce));let K=y?v(oe,ce):u;return K.width=oe,K.height=ce,K.getContext("2d").drawImage(B,0,0,oe,ce),ht("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+oe+"x"+ce+")."),K}else return"data"in B&&ht("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),B;return B}function p(B){return B.generateMipmaps}function E(B){i.generateMipmap(B)}function R(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(B,y,Z,Q,j,oe=!1){if(B!==null){if(i[B]!==void 0)return i[B];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ce;Q&&(ce=e.get("EXT_texture_norm16"),ce||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(Z===i.FLOAT&&(K=i.R32F),Z===i.HALF_FLOAT&&(K=i.R16F),Z===i.UNSIGNED_BYTE&&(K=i.R8),Z===i.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),Z===i.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),y===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.R8UI),Z===i.UNSIGNED_SHORT&&(K=i.R16UI),Z===i.UNSIGNED_INT&&(K=i.R32UI),Z===i.BYTE&&(K=i.R8I),Z===i.SHORT&&(K=i.R16I),Z===i.INT&&(K=i.R32I)),y===i.RG&&(Z===i.FLOAT&&(K=i.RG32F),Z===i.HALF_FLOAT&&(K=i.RG16F),Z===i.UNSIGNED_BYTE&&(K=i.RG8),Z===i.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),Z===i.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.RG8UI),Z===i.UNSIGNED_SHORT&&(K=i.RG16UI),Z===i.UNSIGNED_INT&&(K=i.RG32UI),Z===i.BYTE&&(K=i.RG8I),Z===i.SHORT&&(K=i.RG16I),Z===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),Z===i.UNSIGNED_INT&&(K=i.RGB32UI),Z===i.BYTE&&(K=i.RGB8I),Z===i.SHORT&&(K=i.RGB16I),Z===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),Z===i.UNSIGNED_INT&&(K=i.RGBA32UI),Z===i.BYTE&&(K=i.RGBA8I),Z===i.SHORT&&(K=i.RGBA16I),Z===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(Z===i.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),Z===i.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){let ie=oe?Ms:Nt.getTransfer(j);Z===i.FLOAT&&(K=i.RGBA32F),Z===i.HALF_FLOAT&&(K=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(K=ie===kt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),Z===i.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(B,y){let Z;return B?y===null||y===ci||y===jr?Z=i.DEPTH24_STENCIL8:y===$n?Z=i.DEPTH32F_STENCIL8:y===Qr&&(Z=i.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ci||y===jr?Z=i.DEPTH_COMPONENT24:y===$n?Z=i.DEPTH_COMPONENT32F:y===Qr&&(Z=i.DEPTH_COMPONENT16),Z}function T(B,y){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==vn&&B.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?y.mipmaps.length:1}function D(B){let y=B.target;y.removeEventListener("dispose",D),L(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&f.delete(y)}function M(B){let y=B.target;y.removeEventListener("dispose",M),H(y)}function L(B){let y=n.get(B);if(y.__webglInit===void 0)return;let Z=B.source,Q=h.get(Z);if(Q){let j=Q[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&O(B),Object.keys(Q).length===0&&h.delete(Z)}n.remove(B)}function O(B){let y=n.get(B);i.deleteTexture(y.__webglTexture);let Z=B.source,Q=h.get(Z);delete Q[y.__cacheKey],o.memory.textures--}function H(B){let y=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let j=0;j<y.__webglFramebuffer[Q].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[Q][j]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let Z=B.textures;for(let Q=0,j=Z.length;Q<j;Q++){let oe=n.get(Z[Q]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(Z[Q])}n.remove(B)}let G=0;function X(){G=0}function U(){return G}function V(B){G=B}function ee(){let B=G;return B>=r.maxTextures&&ht("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,B}function J(B){let y=[];return y.push(B.wrapS),y.push(B.wrapT),y.push(B.wrapR||0),y.push(B.magFilter),y.push(B.minFilter),y.push(B.anisotropy),y.push(B.internalFormat),y.push(B.format),y.push(B.type),y.push(B.generateMipmaps),y.push(B.premultiplyAlpha),y.push(B.flipY),y.push(B.unpackAlignment),y.push(B.colorSpace),y.join()}function de(B,y){let Z=n.get(B);if(B.isVideoTexture&&z(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&Z.__version!==B.version){let Q=B.image;if(Q===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Z,B,y);return}}else B.isExternalTexture&&(Z.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+y)}function re(B,y){let Z=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Z.__version!==B.version){Me(Z,B,y);return}else B.isExternalTexture&&(Z.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+y)}function se(B,y){let Z=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&Z.__version!==B.version){Me(Z,B,y);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+y)}function me(B,y){let Z=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&Z.__version!==B.version){Ke(Z,B,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+y)}let ze={[Or]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[zo]:i.MIRRORED_REPEAT},Oe={[vn]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},pt={[su]:i.NEVER,[hu]:i.ALWAYS,[ou]:i.LESS,[sc]:i.LEQUAL,[au]:i.EQUAL,[oc]:i.GEQUAL,[cu]:i.GREATER,[lu]:i.NOTEQUAL};function Se(B,y){if(y.type===$n&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===Ma||y.magFilter===Xs||y.magFilter===ji||y.minFilter===Sn||y.minFilter===Ma||y.minFilter===Xs||y.minFilter===ji)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,ze[y.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,ze[y.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,ze[y.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,Oe[y.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,Oe[y.minFilter]),y.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==Xs&&y.minFilter!==ji||y.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(B,y){let Z=!1;B.__webglInit===void 0&&(B.__webglInit=!0,y.addEventListener("dispose",D));let Q=y.source,j=h.get(Q);j===void 0&&(j={},h.set(Q,j));let oe=J(y);if(oe!==B.__cacheKey){j[oe]===void 0&&(j[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),j[oe].usedTimes++;let ce=j[B.__cacheKey];ce!==void 0&&(j[B.__cacheKey].usedTimes--,ce.usedTimes===0&&O(y)),B.__cacheKey=oe,B.__webglTexture=j[oe].texture}return Z}function ue(B,y,Z){return Math.floor(Math.floor(B/Z)/y)}function he(B,y,Z,Q){let oe=B.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Z,Q,y.data);else{oe.sort((Ee,_e)=>Ee.start-_e.start);let ce=0;for(let Ee=1;Ee<oe.length;Ee++){let _e=oe[ce],Te=oe[Ee],Ce=_e.start+_e.count,Fe=ue(Te.start,y.width,4),we=ue(_e.start,y.width,4);Te.start<=Ce+1&&Fe===we&&ue(Te.start+Te.count-1,y.width,4)===Fe?_e.count=Math.max(_e.count,Te.start+Te.count-_e.start):(++ce,oe[ce]=Te)}oe.length=ce+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ee=0,_e=oe.length;Ee<_e;Ee++){let Te=oe[Ee],Ce=Math.floor(Te.start/4),Fe=Math.ceil(Te.count/4),we=Ce%y.width,te=Math.floor(Ce/y.width),Pe=Fe,fe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,te),t.texSubImage2D(i.TEXTURE_2D,0,we,te,Pe,fe,Z,Q,y.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function Me(B,y,Z){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let j=Qe(B,y),oe=y.source;t.bindTexture(Q,B.__webglTexture,i.TEXTURE0+Z);let ce=n.get(oe);if(oe.version!==ce.__version||j===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let fe=Nt.getPrimaries(Nt.workingColorSpace),Ue=y.colorSpace===Ui?null:Nt.getPrimaries(y.colorSpace),He=y.colorSpace===Ui||fe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=x(y.image,!1,r.maxTextureSize);ie=Le(y,ie);let pe=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type),_e=w(y.internalFormat,pe,Ee,y.normalized,y.colorSpace,y.isVideoTexture);Se(Q,y);let Te,Ce=y.mipmaps,Fe=y.isVideoTexture!==!0,we=ce.__version===void 0||j===!0,te=oe.dataReady,Pe=T(y,ie);if(y.isDepthTexture)_e=S(y.format===er,y.type),we&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,_e,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,_e,ie.width,ie.height,0,pe,Ee,null));else if(y.isDataTexture)if(Ce.length>0){Fe&&we&&t.texStorage2D(i.TEXTURE_2D,Pe,_e,Ce[0].width,Ce[0].height);for(let fe=0,Ue=Ce.length;fe<Ue;fe++)Te=Ce[fe],Fe?te&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Te.width,Te.height,pe,Ee,Te.data):t.texImage2D(i.TEXTURE_2D,fe,_e,Te.width,Te.height,0,pe,Ee,Te.data);y.generateMipmaps=!1}else Fe?(we&&t.texStorage2D(i.TEXTURE_2D,Pe,_e,ie.width,ie.height),te&&he(y,ie,pe,Ee)):t.texImage2D(i.TEXTURE_2D,0,_e,ie.width,ie.height,0,pe,Ee,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Fe&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,_e,Ce[0].width,Ce[0].height,ie.depth);for(let fe=0,Ue=Ce.length;fe<Ue;fe++)if(Te=Ce[fe],y.format!==Kn)if(pe!==null)if(Fe){if(te)if(y.layerUpdates.size>0){let He=Cl(Te.width,Te.height,y.format,y.type);for(let Ae of y.layerUpdates){let nt=Te.data.subarray(Ae*He/Te.data.BYTES_PER_ELEMENT,(Ae+1)*He/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Ae,Te.width,Te.height,1,pe,nt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,ie.depth,pe,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,_e,Te.width,Te.height,ie.depth,0,Te.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Te.width,Te.height,ie.depth,pe,Ee,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,_e,Te.width,Te.height,ie.depth,0,pe,Ee,Te.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Fe&&we&&t.texStorage2D(i.TEXTURE_2D,Pe,_e,Ce[0].width,Ce[0].height);for(let fe=0,Ue=Ce.length;fe<Ue;fe++)Te=Ce[fe],y.format!==Kn?pe!==null?Fe?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Te.width,Te.height,pe,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,_e,Te.width,Te.height,0,Te.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?te&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Te.width,Te.height,pe,Ee,Te.data):t.texImage2D(i.TEXTURE_2D,fe,_e,Te.width,Te.height,0,pe,Ee,Te.data)}else if(y.isDataArrayTexture)if(Fe){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,_e,ie.width,ie.height,ie.depth),te)if(y.layerUpdates.size>0){let fe=Cl(ie.width,ie.height,y.format,y.type);for(let Ue of y.layerUpdates){let He=ie.data.subarray(Ue*fe/ie.data.BYTES_PER_ELEMENT,(Ue+1)*fe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,ie.width,ie.height,1,pe,Ee,He)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ee,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,ie.width,ie.height,ie.depth,0,pe,Ee,ie.data);else if(y.isData3DTexture)Fe?(we&&t.texStorage3D(i.TEXTURE_3D,Pe,_e,ie.width,ie.height,ie.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ee,ie.data)):t.texImage3D(i.TEXTURE_3D,0,_e,ie.width,ie.height,ie.depth,0,pe,Ee,ie.data);else if(y.isFramebufferTexture){if(we)if(Fe)t.texStorage2D(i.TEXTURE_2D,Pe,_e,ie.width,ie.height);else{let fe=ie.width,Ue=ie.height;for(let He=0;He<Pe;He++)t.texImage2D(i.TEXTURE_2D,He,_e,fe,Ue,0,pe,Ee,null),fe>>=1,Ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let fe=i.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),ie.parentNode!==fe){fe.appendChild(ie),f.add(y),fe.onpaint=Ue=>{let He=Ue.changedElements;for(let Ae of f)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},fe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let He=i.RGBA,Ae=i.RGBA,nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,He,Ae,nt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Fe&&we){let fe=ve(Ce[0]);t.texStorage2D(i.TEXTURE_2D,Pe,_e,fe.width,fe.height)}for(let fe=0,Ue=Ce.length;fe<Ue;fe++)Te=Ce[fe],Fe?te&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,pe,Ee,Te):t.texImage2D(i.TEXTURE_2D,fe,_e,pe,Ee,Te);y.generateMipmaps=!1}else if(Fe){if(we){let fe=ve(ie);t.texStorage2D(i.TEXTURE_2D,Pe,_e,fe.width,fe.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ee,ie)}else t.texImage2D(i.TEXTURE_2D,0,_e,pe,Ee,ie);p(y)&&E(Q),ce.__version=oe.version,y.onUpdate&&y.onUpdate(y)}B.__version=y.version}function Ke(B,y,Z){if(y.image.length!==6)return;let Q=Qe(B,y),j=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+Z);let oe=n.get(j);if(j.version!==oe.__version||Q===!0){t.activeTexture(i.TEXTURE0+Z);let ce=Nt.getPrimaries(Nt.workingColorSpace),K=y.colorSpace===Ui?null:Nt.getPrimaries(y.colorSpace),ie=y.colorSpace===Ui||ce===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ee=y.image[0]&&y.image[0].isDataTexture,_e=[];for(let Ae=0;Ae<6;Ae++)!pe&&!Ee?_e[Ae]=x(y.image[Ae],!0,r.maxCubemapSize):_e[Ae]=Ee?y.image[Ae].image:y.image[Ae],_e[Ae]=Le(y,_e[Ae]);let Te=_e[0],Ce=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type),we=w(y.internalFormat,Ce,Fe,y.normalized,y.colorSpace),te=y.isVideoTexture!==!0,Pe=oe.__version===void 0||Q===!0,fe=j.dataReady,Ue=T(y,Te);Se(i.TEXTURE_CUBE_MAP,y);let He;if(pe){te&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,we,Te.width,Te.height);for(let Ae=0;Ae<6;Ae++){He=_e[Ae].mipmaps;for(let nt=0;nt<He.length;nt++){let Ze=He[nt];y.format!==Kn?Ce!==null?te?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,0,0,Ze.width,Ze.height,Ce,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,we,Ze.width,Ze.height,0,Ze.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,0,0,Ze.width,Ze.height,Ce,Fe,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt,we,Ze.width,Ze.height,0,Ce,Fe,Ze.data)}}}else{if(He=y.mipmaps,te&&Pe){He.length>0&&Ue++;let Ae=ve(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,we,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ee){te?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,_e[Ae].width,_e[Ae].height,Ce,Fe,_e[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,we,_e[Ae].width,_e[Ae].height,0,Ce,Fe,_e[Ae].data);for(let nt=0;nt<He.length;nt++){let it=He[nt].image[Ae].image;te?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,0,0,it.width,it.height,Ce,Fe,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,we,it.width,it.height,0,Ce,Fe,it.data)}}else{te?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ce,Fe,_e[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,we,Ce,Fe,_e[Ae]);for(let nt=0;nt<He.length;nt++){let Ze=He[nt];te?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,0,0,Ce,Fe,Ze.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,nt+1,we,Ce,Fe,Ze.image[Ae])}}}p(y)&&E(i.TEXTURE_CUBE_MAP),oe.__version=j.version,y.onUpdate&&y.onUpdate(y)}B.__version=y.version}function ke(B,y,Z,Q,j,oe){let ce=s.convert(Z.format,Z.colorSpace),K=s.convert(Z.type),ie=w(Z.internalFormat,ce,K,Z.normalized,Z.colorSpace),pe=n.get(y),Ee=n.get(Z);if(Ee.__renderTarget=y,!pe.__hasExternalTextures){let _e=Math.max(1,y.width>>oe),Te=Math.max(1,y.height>>oe);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,oe,ie,_e,Te,y.depth,0,ce,K,null):t.texImage2D(j,oe,ie,_e,Te,0,ce,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,Ee.__webglTexture,0,xe(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,Ee.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(B,y,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,B),y.depthBuffer){let Q=y.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,oe=S(y.stencilBuffer,j),ce=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(y),oe,y.width,y.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(y),oe,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,oe,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,B)}else{let Q=y.textures;for(let j=0;j<Q.length;j++){let oe=Q[j],ce=s.convert(oe.format,oe.colorSpace),K=s.convert(oe.type),ie=w(oe.internalFormat,ce,K,oe.normalized,oe.colorSpace);ye(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(y),ie,y.width,y.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(B,y,Z){let Q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);if(j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(j.__webglInit===void 0&&(j.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Se(i.TEXTURE_CUBE_MAP,y.depthTexture);let pe=s.convert(y.depthTexture.format),Ee=s.convert(y.depthTexture.type),_e;y.depthTexture.format===fi?_e=i.DEPTH_COMPONENT24:y.depthTexture.format===er&&(_e=i.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,_e,y.width,y.height,0,pe,Ee,null)}}else de(y.depthTexture,0);let oe=j.__webglTexture,ce=xe(y),K=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ie=y.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===fi)ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,oe,0);else if(y.depthTexture.format===er)ye(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,oe,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(B){let y=n.get(B),Z=B.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==B.depthTexture){let Q=B.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Q}if(B.depthTexture&&!y.__autoAllocateDepthBuffer)if(Z)for(let Q=0;Q<6;Q++)Tt(y.__webglFramebuffer[Q],B,Q);else{let Q=B.texture.mipmaps;Q&&Q.length>0?Tt(y.__webglFramebuffer[0],B,0):Tt(y.__webglFramebuffer,B,0)}else if(Z){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),je(y.__webglDepthbuffer[Q],B,!1);else{let j=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,oe)}}else{let Q=B.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),je(y.__webglDepthbuffer,B,!1);else{let j=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(B,y,Z){let Q=n.get(B);y!==void 0&&ke(Q.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&lt(B)}function It(B){let y=B.texture,Z=n.get(B),Q=n.get(y);B.addEventListener("dispose",M);let j=B.textures,oe=B.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),oe){Z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer[K]=[];for(let ie=0;ie<y.mipmaps.length;ie++)Z.__webglFramebuffer[K][ie]=i.createFramebuffer()}else Z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)Z.__webglFramebuffer[K]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ce)for(let K=0,ie=j.length;K<ie;K++){let pe=n.get(j[K]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&ye(B)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let ie=j[K];Z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[K]);let pe=s.convert(ie.format,ie.colorSpace),Ee=s.convert(ie.type),_e=w(ie.internalFormat,pe,Ee,ie.normalized,ie.colorSpace,B.isXRRenderTarget===!0),Te=xe(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,_e,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,Z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),je(Z.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Se(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)ke(Z.__webglFramebuffer[K][ie],B,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie);else ke(Z.__webglFramebuffer[K],B,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(y)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let K=0,ie=j.length;K<ie;K++){let pe=j[K],Ee=n.get(pe),_e=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(_e=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ee.__webglTexture),Se(_e,pe),ke(Z.__webglFramebuffer,B,pe,i.COLOR_ATTACHMENT0+K,_e,0),p(pe)&&E(_e)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(K=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,Q.__webglTexture),Se(K,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)ke(Z.__webglFramebuffer[ie],B,y,i.COLOR_ATTACHMENT0,K,ie);else ke(Z.__webglFramebuffer,B,y,i.COLOR_ATTACHMENT0,K,0);p(y)&&E(K),t.unbindTexture()}B.depthBuffer&&lt(B)}function gt(B){let y=B.textures;for(let Z=0,Q=y.length;Z<Q;Z++){let j=y[Z];if(p(j)){let oe=R(B),ce=n.get(j).__webglTexture;t.bindTexture(oe,ce),E(oe),t.unbindTexture()}}}let xt=[],ae=[];function le(B){if(B.samples>0){if(ye(B)===!1){let y=B.textures,Z=B.width,Q=B.height,j=i.COLOR_BUFFER_BIT,oe=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(B),K=y.length>1;if(K)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);let ie=B.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[pe]);let Ee=n.get(y[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,j,i.NEAREST),c===!0&&(xt.length=0,ae.length=0,xt.push(i.COLOR_ATTACHMENT0+pe),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(xt.push(oe),ae.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ce.__webglColorRenderbuffer[pe]);let Ee=n.get(y[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&c){let y=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function xe(B){return Math.min(r.maxSamples,B.samples)}function ye(B){let y=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function z(B){let y=o.render.frame;d.get(B)!==y&&(d.set(B,y),B.update())}function Le(B,y){let Z=B.colorSpace,Q=B.format,j=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||Z!==vs&&Z!==Ui&&(Nt.getTransfer(Z)===kt?(Q!==Kn||j!==Bn)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",Z)),y}function ve(B){return typeof HTMLImageElement!="undefined"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame!="undefined"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=X,this.getTextureUnits=U,this.setTextureUnits=V,this.setTexture2D=de,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=me,this.rebindTextures=ct,this.setupRenderTarget=It,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ux(i,e){function t(n,r=Ui){let s,o=Nt.getTransfer(r);if(n===Bn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===_l)return i.ALPHA;if(n===yl)return i.RGB;if(n===Kn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===ba)return i.RED;if(n===Ta)return i.RED_INTEGER;if(n===tr)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===Js)if(o===kt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===Ia||n===La)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Da||n===Ua||n===Fa||n===Ba||n===$s||n===Oa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Na||n===Da)return o===kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fa)return s.COMPRESSED_R11_EAC;if(n===Ba)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$s)return s.COMPRESSED_RG11_EAC;if(n===Oa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===Ha||n===ka||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===za)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ja)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ja||n===ec||n===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ja)return o===kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===Ks||n===rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fx=`
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

}`,Zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ps(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:dx,fragmentShader:fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jl=class extends pi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,g=null,v=typeof XRWebGLBinding!="undefined",x=new Zl,p={},E=t.getContextAttributes(),R=null,w=null,S=[],T=[],D=new $e,M=null,L=null,O=new yn;O.viewport=new Gt;let H=new yn;H.viewport=new Gt;let G=[O,H],X=new ma,U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let he=S[ue];return he===void 0&&(he=new Vr,S[ue]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ue){let he=S[ue];return he===void 0&&(he=new Vr,S[ue]=he),he.getGripSpace()},this.getHand=function(ue){let he=S[ue];return he===void 0&&(he=new Vr,S[ue]=he),he.getHandSpace()};function ee(ue){let he=T.indexOf(ue.inputSource);if(he===-1)return;let Me=S[he];Me!==void 0&&(Me.update(ue.inputSource,ue.frame,l||o),Me.dispatchEvent({type:ue.type,data:ue.inputSource}))}function J(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",de);for(let ue=0;ue<S.length;ue++){let he=T[ue];he!==null&&(T[ue]=null,S[ue].disconnect(he))}U=null,V=null,x.reset();for(let ue in p)delete p[ue];if(e.setRenderTarget(R),h=null,u=null,f=null,r=null,w=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(D.width,D.height,!1),L!==null){let ue=L.camera;ue.fov=L.fov,ue.zoom=L.zoom,ue.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){s=ue,n.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){a=ue,n.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ue){l=ue},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ue){if(r=ue,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",J),r.addEventListener("inputsourceschange",de),E.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ke=null,ke=null;E.depth&&(ke=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=E.stencil?er:fi,Ke=E.stencil?jr:ci);let je={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(je),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new An(u.textureWidth,u.textureHeight,{format:Kn,type:Bn,depthTexture:new _i(u.textureWidth,u.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new An(h.framebufferWidth,h.framebufferHeight,{format:Kn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function de(ue){for(let he=0;he<ue.removed.length;he++){let Me=ue.removed[he],Ke=T.indexOf(Me);Ke>=0&&(T[Ke]=null,S[Ke].disconnect(Me))}for(let he=0;he<ue.added.length;he++){let Me=ue.added[he],Ke=T.indexOf(Me);if(Ke===-1){for(let je=0;je<S.length;je++)if(je>=T.length){T.push(Me),Ke=je;break}else if(T[je]===null){T[je]=Me,Ke=je;break}if(Ke===-1)break}let ke=S[Ke];ke&&ke.connect(Me)}}let re=new F,se=new F;function me(ue,he,Me){re.setFromMatrixPosition(he.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);let Ke=re.distanceTo(se),ke=he.projectionMatrix.elements,je=Me.projectionMatrix.elements,Tt=ke[14]/(ke[10]-1),lt=ke[14]/(ke[10]+1),ct=(ke[9]+1)/ke[5],It=(ke[9]-1)/ke[5],gt=(ke[8]-1)/ke[0],xt=(je[8]+1)/je[0],ae=Tt*gt,le=Tt*xt,xe=Ke/(-gt+xt),ye=xe*-gt;if(he.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(ye),ue.translateZ(xe),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),ke[10]===-1)ue.projectionMatrix.copy(he.projectionMatrix),ue.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let z=Tt+xe,Le=lt+xe,ve=ae-ye,B=le+(Ke-ye),y=ct*lt/Le*z,Z=It*lt/Le*z;ue.projectionMatrix.makePerspective(ve,B,y,Z,z,Le),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function ze(ue,he){he===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(he.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(r===null)return;let he=ue.near,Me=ue.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),X.near=H.near=O.near=he,X.far=H.far=O.far=Me,(U!==X.near||V!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),U=X.near,V=X.far),X.layers.mask=ue.layers.mask|6,O.layers.mask=X.layers.mask&-5,H.layers.mask=X.layers.mask&-3;let Ke=ue.parent,ke=X.cameras;ze(X,Ke);for(let je=0;je<ke.length;je++)ze(ke[je],Ke);ke.length===2?me(X,O,H):X.projectionMatrix.copy(O.projectionMatrix),L===null&&ue.isPerspectiveCamera&&(L={camera:ue,fov:ue.fov,zoom:ue.zoom}),Oe(ue,X,Ke)};function Oe(ue,he,Me){Me===null?ue.matrix.copy(he.matrixWorld):(ue.matrix.copy(Me.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(he.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(he.projectionMatrix),ue.projectionMatrixInverse.copy(he.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=cr*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(ue){c=ue,u!==null&&(u.fixedFoveation=ue),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ue)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(X)},this.getCameraTexture=function(ue){return p[ue]};let pt=null;function Se(ue,he){if(d=he.getViewerPose(l||o),g=he,d!==null){let Me=d.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let Ke=!1;Me.length!==X.cameras.length&&(X.cameras.length=0,Ke=!0);for(let lt=0;lt<Me.length;lt++){let ct=Me[lt],It=null;if(h!==null)It=h.getViewport(ct);else{let xt=f.getViewSubImage(u,ct);It=xt.viewport,lt===0&&(e.setRenderTargetTextures(w,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(w))}let gt=G[lt];gt===void 0&&(gt=new yn,gt.layers.enable(lt),gt.viewport=new Gt,G[lt]=gt),gt.matrix.fromArray(ct.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ct.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(It.x,It.y,It.width,It.height),lt===0&&(X.matrix.copy(gt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ke===!0&&X.cameras.push(gt)}let ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let lt=f.getDepthInformation(Me[0]);lt&&lt.isValid&&lt.texture&&x.init(lt,r.renderState)}if(ke&&ke.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let lt=0;lt<Me.length;lt++){let ct=Me[lt].camera;if(ct){let It=p[ct];It||(It=new Ps,p[ct]=It);let gt=f.getCameraImage(ct);It.sourceTexture=gt}}}}for(let Me=0;Me<S.length;Me++){let Ke=T[Me],ke=S[Me];Ke!==null&&ke!==void 0&&ke.update(Ke,he,l||o)}pt&&pt(ue,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}let Qe=new Hu;Qe.setAnimationLoop(Se),this.setAnimationLoop=function(ue){pt=ue},this.dispose=function(){}}},px=new at,qu=new Mt;qu.set(-1,0,0,0,1,0,0,0,1);function mx(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Tl(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,E,R,w){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),f(x,p)):p.isMeshPhongMaterial?(s(x,p),d(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),u(x,p),p.isMeshPhysicalMaterial&&h(x,p,w)):p.isMeshMatcapMaterial?(s(x,p),g(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),v(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?c(x,p,E,R):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let E=e.get(p),R=E.envMap,w=E.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(px.makeRotationFromEuler(w)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(qu),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,E,R){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*E,x.scale.value=R*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function d(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function h(x,p,E){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){let E=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function gx(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let T=S.program;n.uniformBlockBinding(w,T)}function l(w,S){let T=r[w.id];T===void 0&&(x(w),T=d(w),r[w.id]=T,w.addEventListener("dispose",E));let D=S.program;n.updateUBOMapping(w,D);let M=e.render.frame;s[w.id]!==M&&(u(w),s[w.id]=M)}function d(w){let S=f();w.__bindingPointIndex=S;let T=i.createBuffer(),D=w.__size,M=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let S=r[w.id],T=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,L=T.length;M<L;M++){let O=T[M];if(Array.isArray(O))for(let H=0,G=O.length;H<G;H++)h(O[H],M,H,D);else h(O,M,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(w,S,T,D){if(v(w,S,T,D)===!0){let M=w.__offset,L=w.value;if(Array.isArray(L)){let O=0;for(let H=0;H<L.length;H++){let G=L[H],X=p(G);g(G,w.__data,O),typeof G!="number"&&typeof G!="boolean"&&!G.isMatrix3&&!ArrayBuffer.isView(G)&&(O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(L,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,w.__data)}}function g(w,S,T){typeof w=="number"||typeof w=="boolean"?S[0]=w:w.isMatrix3?(S[0]=w.elements[0],S[1]=w.elements[1],S[2]=w.elements[2],S[3]=0,S[4]=w.elements[3],S[5]=w.elements[4],S[6]=w.elements[5],S[7]=0,S[8]=w.elements[6],S[9]=w.elements[7],S[10]=w.elements[8],S[11]=0):ArrayBuffer.isView(w)?S.set(new w.constructor(w.buffer,w.byteOffset,S.length)):w.toArray(S,T)}function v(w,S,T,D){let M=w.value,L=S+"_"+T;if(D[L]===void 0)return typeof M=="number"||typeof M=="boolean"?D[L]=M:ArrayBuffer.isView(M)?D[L]=M.slice():D[L]=M.clone(),!0;{let O=D[L];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return D[L]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(O.equals(M)===!1)return O.copy(M),!0}}return!1}function x(w){let S=w.uniforms,T=0,D=16;for(let L=0,O=S.length;L<O;L++){let H=Array.isArray(S[L])?S[L]:[S[L]];for(let G=0,X=H.length;G<X;G++){let U=H[G],V=Array.isArray(U.value)?U.value:[U.value];for(let ee=0,J=V.length;ee<J;ee++){let de=V[ee],re=p(de),se=T%D,me=se%re.boundary,ze=se+me;T+=me,ze!==0&&D-ze<re.storage&&(T+=D-ze),U.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=re.storage}}}let M=T%D;return M>0&&(T+=D-M),w.__size=T,w.__cache={},this}function p(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(S.boundary=16,S.storage=w.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",w),S}function E(w){let S=w.target;S.removeEventListener("dispose",E);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function R(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:R}}var xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function _x(){return Si===null&&(Si=new As(xx,16,16,tr,Vn),Si.name="DFG_LUT",Si.minFilter=Sn,Si.magFilter=Sn,Si.wrapS=di,Si.wrapT=di,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var uc=class{constructor(e={}){let{canvas:t=du(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Bn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=h,x=new Set([Ra,Aa,Ta]),p=new Set([Bn,ci,Qr,jr,Sa,wa]),E=new Uint32Array(4),R=new Int32Array(4),w=new F,S=null,T=null,D=[],M=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,H=!1,G=null,X=null,U=null,V=null;this._outputColorSpace=_n;let ee=0,J=0,de=null,re=-1,se=null,me=new Gt,ze=new Gt,Oe=null,pt=new Ye(0),Se=0,Qe=t.width,ue=t.height,he=1,Me=null,Ke=null,ke=new Gt(0,0,Qe,ue),je=new Gt(0,0,Qe,ue),Tt=!1,lt=new Wr,ct=!1,It=!1,gt=new at,xt=new F,ae=new Gt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function ye(){return de===null?he:1}let z=n;function Le(_,A){return t.getContext(_,A)}let ve,B,y,Z,Q,j,oe,ce,K,ie,pe,Ee,_e,Te,Ce,Fe,we,te,Pe,fe,Ue,He,Ae;try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xa}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",ne,!1),z===null){let A="webgl2";if(z=Le(A,_),z===null)throw Le(A)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(_){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ft("WebGLRenderer: "+_.message),_}function nt(){ve=new bm(z),ve.init(),Ue=new ux(z,ve),B=new mm(z,ve,e,Ue),y=new lx(z,ve),B.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),X=z.createFramebuffer(),U=z.createFramebuffer(),V=z.createFramebuffer(),Z=new Rm(z),Q=new Jg,j=new hx(z,ve,y,Q,B,Ue,Z),oe=new wm(O),ce=new Pf(z),He=new fm(z,ce),K=new Tm(z,ce,Z,He),ie=new Pm(z,K,ce,He,Z),te=new Cm(z,B,j),Ce=new gm(Q),pe=new Zg(O,oe,ve,B,He,Ce),Ee=new mx(O,Q),_e=new Kg,Te=new ix(ve),we=new dm(O,oe,y,ie,g,c),Fe=new cx(O,ie,B),Ae=new gx(z,Z,B,y),Pe=new pm(z,ve,Z),fe=new Am(z,ve,Z),Z.programs=pe.programs,O.capabilities=B,O.extensions=ve,O.properties=Q,O.renderLists=_e,O.shadowMap=Fe,O.state=y,O.info=Z}v!==Bn&&(L=new Lm(v,t.width,t.height,a,r,s));let Ze=new Jl(O,z);this.xr=Ze,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let _=ve.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ve.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(_){_!==void 0&&(he=_,this.setSize(Qe,ue,!1))},this.getSize=function(_){return _.set(Qe,ue)},this.setSize=function(_,A,k=!0){if(Ze.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=_,ue=A,t.width=Math.floor(_*he),t.height=Math.floor(A*he),k===!0&&(t.style.width=_+"px",t.style.height=A+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,_,A)},this.getDrawingBufferSize=function(_){return _.set(Qe*he,ue*he).floor()},this.setDrawingBufferSize=function(_,A,k){Qe=_,ue=A,he=k,t.width=Math.floor(_*k),t.height=Math.floor(A*k),this.setViewport(0,0,_,A)},this.setEffects=function(_){if(v===Bn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let A=0;A<_.length;A++)if(_[A].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(me)},this.getViewport=function(_){return _.copy(ke)},this.setViewport=function(_,A,k,W){_.isVector4?ke.set(_.x,_.y,_.z,_.w):ke.set(_,A,k,W),y.viewport(me.copy(ke).multiplyScalar(he).round())},this.getScissor=function(_){return _.copy(je)},this.setScissor=function(_,A,k,W){_.isVector4?je.set(_.x,_.y,_.z,_.w):je.set(_,A,k,W),y.scissor(ze.copy(je).multiplyScalar(he).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(_){y.setScissorTest(Tt=_)},this.setOpaqueSort=function(_){Me=_},this.setTransparentSort=function(_){Ke=_},this.getClearColor=function(_){return _.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(_=!0,A=!0,k=!0){let W=0;if(_){let Y=!1;if(de!==null){let ge=de.texture.format;Y=x.has(ge)}if(Y){let ge=de.texture.type,Re=p.has(ge),be=we.getClearColor(),De=we.getClearAlpha(),Ve=be.r,st=be.g,ot=be.b;Re?(E[0]=Ve,E[1]=st,E[2]=ot,E[3]=De,z.clearBufferuiv(z.COLOR,0,E)):(R[0]=Ve,R[1]=st,R[2]=ot,R[3]=De,z.clearBufferiv(z.COLOR,0,R))}else W|=z.COLOR_BUFFER_BIT}A&&(W|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(W|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&z.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),G=_},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),we.dispose(),_e.dispose(),Te.dispose(),Q.dispose(),oe.dispose(),ie.dispose(),He.dispose(),Ae.dispose(),pe.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Ct),Ze.removeEventListener("sessionend",Zt),ln.stop()};function it(_){_.preventDefault(),El("WebGLRenderer: Context Lost."),H=!0}function wt(){El("WebGLRenderer: Context Restored."),H=!1;let _=Z.autoReset,A=Fe.enabled,k=Fe.autoUpdate,W=Fe.needsUpdate,Y=Fe.type;nt(),Z.autoReset=_,Fe.enabled=A,Fe.autoUpdate=k,Fe.needsUpdate=W,Fe.type=Y}function ne(_){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Ge(_){let A=_.target;A.removeEventListener("dispose",Ge),We(A)}function We(_){yt(_),Q.remove(_)}function yt(_){let A=Q.get(_).programs;A!==void 0&&(A.forEach(function(k){pe.releaseProgram(k)}),_.isShaderMaterial&&pe.releaseShaderCache(_))}this.renderBufferDirect=function(_,A,k,W,Y,ge){A===null&&(A=le);let Re=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,be=b(_,A,k,W,Y);y.setMaterial(W,Re);let De=k.index,Ve=1;if(W.wireframe===!0){if(De=K.getWireframeAttribute(k),De===void 0)return;Ve=2}let st=k.drawRange,ot=k.attributes.position,Xe=st.start*Ve,mt=(st.start+st.count)*Ve;ge!==null&&(Xe=Math.max(Xe,ge.start*Ve),mt=Math.min(mt,(ge.start+ge.count)*Ve)),De!==null?(Xe=Math.max(Xe,0),mt=Math.min(mt,De.count)):ot!=null&&(Xe=Math.max(Xe,0),mt=Math.min(mt,ot.count));let et=mt-Xe;if(et<0||et===1/0)return;He.setup(Y,W,be,k,De);let vt,Et=Pe;if(De!==null&&(vt=ce.get(De),Et=fe,Et.setIndex(vt)),Y.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*ye()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if(Y.isLine){let nn=W.linewidth;nn===void 0&&(nn=1),y.setLineWidth(nn*ye()),Y.isLineSegments?Et.setMode(z.LINES):Y.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else Y.isPoints?Et.setMode(z.POINTS):Y.isSprite&&Et.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let nn=Y._multiDrawStarts,tt=Y._multiDrawCounts,En=Y._multiDrawCount,Ut=De?ce.get(De).bytesPerElement:1,Un=Q.get(W).currentProgram.getUniforms();for(let Cn=0;Cn<En;Cn++)Un.setValue(z,"_gl_DrawID",Cn),Et.render(nn[Cn]/Ut,tt[Cn])}else if(Y.isInstancedMesh)Et.renderInstances(Xe,et,Y.count);else if(k.isInstancedBufferGeometry){let nn=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,tt=Math.min(k.instanceCount,nn);Et.renderInstances(Xe,et,tt)}else Et.render(Xe,et)};function gn(_,A,k,W){G!==null&&_.isNodeMaterial&&G.setObject(W,_),ct===!0&&Ce.setState(_,k,!1),_.transparent===!0&&_.side===tn&&_.forceSinglePass===!1?(_.side=dn,_.needsUpdate=!0,Dn(_,A,W),_.side=Mi,_.needsUpdate=!0,Dn(_,A,W),_.side=tn):Dn(_,A,W)}this.compile=function(_,A,k=null){k===null&&(k=_),G!==null&&G.renderStart(_,A,k),T=Te.get(k),T.init(A),M.push(T),k.traverseVisible(function(Y){Y.isLight&&Y.layers.test(A.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),_!==k&&_.traverseVisible(function(Y){Y.isLight&&Y.layers.test(A.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),It=this.localClippingEnabled,ct=Ce.init(this.clippingPlanes,It),ct===!0&&Ce.setGlobalState(this.clippingPlanes,A),G!==null&&Fe.render(T.state.shadowsArray,k,A);let W=new Set;return _.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ge=Y.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){let be=ge[Re];gn(be,k,A,Y),W.add(be)}else gn(ge,k,A,Y),W.add(ge)}),T=M.pop(),G!==null&&G.renderEnd(),W},this.compileAsync=function(_,A,k=null){let W=this.compile(_,A,k);return new Promise(Y=>{function ge(){if(W.forEach(function(Re){let De=Q.get(Re).currentProgram;(De===void 0||De.isReady())&&W.delete(Re)}),W.size===0){Y(_);return}setTimeout(ge,10)}ve.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Nn=null;function Wn(_){Nn&&Nn(_)}function Ct(){ln.stop()}function Zt(){ln.start()}let ln=new Hu;ln.setAnimationLoop(Wn),typeof self!="undefined"&&ln.setContext(self),this.setAnimationLoop=function(_){Nn=_,Ze.setAnimationLoop(_),_===null?ln.stop():ln.start()},Ze.addEventListener("sessionstart",Ct),Ze.addEventListener("sessionend",Zt),this.render=function(_,A){if(A!==void 0&&A.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;G!==null&&G.renderStart(_,A);let k=Ze.enabled===!0&&Ze.isPresenting===!0,W=L!==null&&(de===null||k)&&L.begin(O,de);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(A),A=Ze.getCamera()),_.isScene===!0&&_.onBeforeRender(O,_,A,de),T=Te.get(_,M.length),T.init(A),T.state.textureUnits=j.getTextureUnits(),M.push(T),gt.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),lt.setFromProjectionMatrix(gt,si,A.reversedDepth),It=this.localClippingEnabled,ct=Ce.init(this.clippingPlanes,It),S=_e.get(_,D.length),S.init(),D.push(S),Ze.enabled===!0&&Ze.isPresenting===!0){let Re=O.xr.getDepthSensingMesh();Re!==null&&rn(Re,A,-1/0,O.sortObjects)}rn(_,A,0,O.sortObjects),S.finish(),G!==null&&G.updateLights(T.state.lightsArray),O.sortObjects===!0&&S.sort(Me,Ke),xe=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,xe&&we.addToRenderList(S,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ce.beginShadows();let Y=T.state.shadowsArray;if(Fe.render(Y,_,A),ct===!0&&Ce.endShadows(),(W&&L.hasRenderPass())===!1){let Re=S.opaque,be=S.transmissive;if(T.setupLights(),A.isArrayCamera){let De=A.cameras;if(be.length>0)for(let Ve=0,st=De.length;Ve<st;Ve++){let ot=De[Ve];Ai(Re,be,_,ot)}xe&&we.render(_);for(let Ve=0,st=De.length;Ve<st;Ve++){let ot=De[Ve];ei(S,_,ot,ot.viewport)}}else be.length>0&&Ai(Re,be,_,A),xe&&we.render(_),ei(S,_,A)}de!==null&&J===0&&(j.updateMultisampleRenderTarget(de),j.updateRenderTargetMipmap(de)),W&&L.end(O),_.isScene===!0&&_.onAfterRender(O,_,A),He.resetDefaultState(),re=-1,se=null,M.pop(),M.length>0?(T=M[M.length-1],j.setTextureUnits(T.state.textureUnits),ct===!0&&Ce.setGlobalState(O.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?S=D[D.length-1]:S=null,G!==null&&G.renderEnd()};function rn(_,A,k,W){if(_.visible===!1)return;if(_.layers.test(A.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(A);else if(_.isLightProbeGrid)T.pushLightProbeGrid(_);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(lt)){W&&ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(gt);let Re=ie.update(_),be=_.material;be.visible&&S.push(_,Re,be,k,ae.z,null,A)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(lt))){let Re=ie.update(_),be=_.material;if(W&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ae.copy(_.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ae.copy(Re.boundingSphere.center)),ae.applyMatrix4(_.matrixWorld).applyMatrix4(gt)),Array.isArray(be)){let De=Re.groups;for(let Ve=0,st=De.length;Ve<st;Ve++){let ot=De[Ve],Xe=be[ot.materialIndex];Xe&&Xe.visible&&S.push(_,Re,Xe,k,ae.z,ot,A)}}else be.visible&&S.push(_,Re,be,k,ae.z,null,A)}}let ge=_.children;for(let Re=0,be=ge.length;Re<be;Re++)rn(ge[Re],A,k,W)}function ei(_,A,k,W){let{opaque:Y,transmissive:ge,transparent:Re}=_;T.setupLightsView(k),ct===!0&&Ce.setGlobalState(O.clippingPlanes,k),W&&y.viewport(me.copy(W)),Y.length>0&&ti(Y,A,k),ge.length>0&&ti(ge,A,k),Re.length>0&&ti(Re,A,k),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ai(_,A,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let Xe=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new An(1,1,{generateMipmaps:!0,type:Xe?Vn:Bn,minFilter:ji,samples:Math.max(4,B.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}let ge=T.state.transmissionRenderTarget[W.id],Re=W.viewport||me;ge.setSize(Re.z*O.transmissionResolutionScale,Re.w*O.transmissionResolutionScale);let be=O.getRenderTarget(),De=O.getActiveCubeFace(),Ve=O.getActiveMipmapLevel();O.setRenderTarget(ge),O.getClearColor(pt),Se=O.getClearAlpha(),Se<1&&O.setClearColor(16777215,.5),O.clear(),xe&&we.render(k);let st=O.toneMapping;O.toneMapping=ai;let ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),ct===!0&&Ce.setGlobalState(O.clippingPlanes,W),ti(_,k,W),j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let mt=0,et=A.length;mt<et;mt++){let vt=A[mt],{object:Et,geometry:nn,material:tt,group:En}=vt;if(tt.side===tn&&Et.layers.test(W.layers)){let Ut=tt.side;tt.side=dn,tt.needsUpdate=!0,hn(Et,k,W,nn,tt,En),tt.side=Ut,tt.needsUpdate=!0,Xe=!0}}Xe===!0&&(j.updateMultisampleRenderTarget(ge),j.updateRenderTargetMipmap(ge))}O.setRenderTarget(be,De,Ve),O.setClearColor(pt,Se),ot!==void 0&&(W.viewport=ot),O.toneMapping=st}function ti(_,A,k){let W=A.isScene===!0?A.overrideMaterial:null;for(let Y=0,ge=_.length;Y<ge;Y++){let Re=_[Y],{object:be,geometry:De,group:Ve}=Re,st=Re.material;st.allowOverride===!0&&W!==null&&(st=W),be.layers.test(k.layers)&&hn(be,A,k,De,st,Ve)}}function hn(_,A,k,W,Y,ge){G!==null&&Y.isNodeMaterial&&G.setObject(_,Y),_.onBeforeRender(O,A,k,W,Y,ge),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),Y.onBeforeRender(O,A,k,W,_,ge),Y.transparent===!0&&Y.side===tn&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,O.renderBufferDirect(k,A,W,Y,_,ge),Y.side=Mi,Y.needsUpdate=!0,O.renderBufferDirect(k,A,W,Y,_,ge),Y.side=tn):O.renderBufferDirect(k,A,W,Y,_,ge),_.onAfterRender(O,A,k,W,Y,ge)}function Dn(_,A,k){A.isScene!==!0&&(A=le);let W=Q.get(_),Y=T.state.lights,ge=T.state.shadowsArray,Re=Y.state.version,be=pe.getParameters(_,Y.state,ge,A,k,T.state.lightProbeGridArray),De=pe.getProgramCacheKey(be),Ve=W.programs;W.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,W.fog=A.fog;let st=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;W.envMap=oe.get(_.envMap||W.environment,st),W.envMapRotation=W.environment!==null&&_.envMap===null?A.environmentRotation:_.envMapRotation,Ve===void 0&&(_.addEventListener("dispose",Ge),Ve=new Map,W.programs=Ve);let ot=Ve.get(De);if(ot!==void 0){if(W.currentProgram===ot&&W.lightsStateVersion===Re)return q(_,be),ot}else be.uniforms=pe.getUniforms(_),G!==null&&_.isNodeMaterial&&G.build(_,k,be),_.onBeforeCompile(be,O),ot=pe.acquireProgram(be,De),Ve.set(De,ot),W.uniforms=be.uniforms;let Xe=W.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Xe.clippingPlanes=Ce.uniform),q(_,be),W.needsLights=N(_),W.lightsStateVersion=Re,W.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.sunLights.value=Y.state.sun,Xe.sunLightShadows.value=Y.state.sunShadow,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Xe.sunShadowCascade.value=Y.state.sunShadowCascade,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=ot,W.uniformsList=null,ot}function P(_){if(_.uniformsList===null){let A=_.currentProgram.getUniforms();_.uniformsList=is.seqWithValue(A.seq,_.uniforms)}return _.uniformsList}function q(_,A){let k=Q.get(_);k.outputColorSpace=A.outputColorSpace,k.batching=A.batching,k.batchingColor=A.batchingColor,k.instancing=A.instancing,k.instancingColor=A.instancingColor,k.instancingMorph=A.instancingMorph,k.skinning=A.skinning,k.morphTargets=A.morphTargets,k.morphNormals=A.morphNormals,k.morphColors=A.morphColors,k.morphTargetsCount=A.morphTargetsCount,k.numClippingPlanes=A.numClippingPlanes,k.numIntersection=A.numClipIntersection,k.vertexAlphas=A.vertexAlphas,k.vertexTangents=A.vertexTangents,k.toneMapping=A.toneMapping}function m(_,A){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;w.setFromMatrixPosition(A.matrixWorld);for(let k=0,W=_.length;k<W;k++){let Y=_[k];if(Y.texture!==null&&Y.boundingBox.containsPoint(w))return Y}return null}function b(_,A,k,W,Y){A.isScene!==!0&&(A=le),j.resetTextureUnits();let ge=A.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?A.environment:null,be=de===null?O.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Nt.workingColorSpace,De=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ve=oe.get(W.envMap||Re,De),st=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ot=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Xe=!!k.morphAttributes.position,mt=!!k.morphAttributes.normal,et=!!k.morphAttributes.color,vt=ai;W.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(vt=O.toneMapping);let Et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nn=Et!==void 0?Et.length:0,tt=Q.get(W),En=T.state.lights;if(ct===!0&&(It===!0||_!==se)){let Yt=_===se&&W.id===re;Ce.setState(W,_,Yt)}let Ut=!1;W.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==En.state.version||tt.outputColorSpace!==be||Y.isBatchedMesh&&tt.batching===!1||!Y.isBatchedMesh&&tt.batching===!0||Y.isBatchedMesh&&tt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&tt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&tt.instancing===!1||!Y.isInstancedMesh&&tt.instancing===!0||Y.isSkinnedMesh&&tt.skinning===!1||!Y.isSkinnedMesh&&tt.skinning===!0||Y.isInstancedMesh&&tt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&tt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&tt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&tt.instancingMorph===!1&&Y.morphTexture!==null||tt.envMap!==Ve||W.fog===!0&&tt.fog!==ge||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ce.numPlanes||tt.numIntersection!==Ce.numIntersection)||tt.vertexAlphas!==st||tt.vertexTangents!==ot||tt.morphTargets!==Xe||tt.morphNormals!==mt||tt.morphColors!==et||tt.toneMapping!==vt||tt.morphTargetsCount!==nn||!!tt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ut=!0):(Ut=!0,tt.__version=W.version);let Un=tt.currentProgram;Ut===!0&&(Un=Dn(W,A,Y),G&&W.isNodeMaterial&&G.onUpdateProgram(W,Un,tt));let Cn=!1,Xn=!1,Ri=!1,Ot=Un.getUniforms(),Qt=tt.uniforms;if(y.useProgram(Un.program)&&(Cn=!0,Xn=!0,Ri=!0),W.id!==re&&(re=W.id,Xn=!0),tt.needsLights){let Yt=m(T.state.lightProbeGridArray,Y);tt.lightProbeGrid!==Yt&&(tt.lightProbeGrid=Yt,Xn=!0)}if(Cn||se!==_){y.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Ot.setValue(z,"projectionMatrix",_.projectionMatrix),Ot.setValue(z,"viewMatrix",_.matrixWorldInverse);let ki=Ot.map.cameraPosition;ki!==void 0&&ki.setValue(z,xt.setFromMatrixPosition(_.matrixWorld)),B.logarithmicDepthBuffer&&Ot.setValue(z,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ot.setValue(z,"isOrthographic",_.isOrthographicCamera===!0),se!==_&&(se=_,Xn=!0,Ri=!0)}if(tt.needsLights&&(En.state.sunShadowMap.length>0&&Ot.setValue(z,"sunShadowMap",En.state.sunShadowMap,j),En.state.directionalShadowMap.length>0&&Ot.setValue(z,"directionalShadowMap",En.state.directionalShadowMap,j),En.state.spotShadowMap.length>0&&Ot.setValue(z,"spotShadowMap",En.state.spotShadowMap,j),En.state.pointShadowMap.length>0&&Ot.setValue(z,"pointShadowMap",En.state.pointShadowMap,j)),Y.isSkinnedMesh){Ot.setOptional(z,Y,"bindMatrix"),Ot.setOptional(z,Y,"bindMatrixInverse");let Yt=Y.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ot.setValue(z,"boneTexture",Yt.boneTexture,j))}Y.isBatchedMesh&&(Ot.setOptional(z,Y,"batchingTexture"),Ot.setValue(z,"batchingTexture",Y._matricesTexture,j),Ot.setOptional(z,Y,"batchingIdTexture"),Ot.setValue(z,"batchingIdTexture",Y._indirectTexture,j),Ot.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ot.setValue(z,"batchingColorTexture",Y._colorsTexture,j));let Hi=k.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&te.update(Y,k,Un),(Xn||tt.receiveShadow!==Y.receiveShadow)&&(tt.receiveShadow=Y.receiveShadow,Ot.setValue(z,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&A.environment!==null&&(Qt.envMapIntensity.value=A.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=_x()),Xn){if(Ot.setValue(z,"toneMappingExposure",O.toneMappingExposure),tt.needsLights&&C(Qt,Ri),ge&&W.fog===!0&&Ee.refreshFogUniforms(Qt,ge),Ee.refreshMaterialUniforms(Qt,W,he,ue,T.state.transmissionRenderTarget[_.id]),tt.needsLights&&tt.lightProbeGrid){let Yt=tt.lightProbeGrid;Qt.probesSH.value=Yt.texture,Qt.probesMin.value.copy(Yt.boundingBox.min),Qt.probesMax.value.copy(Yt.boundingBox.max),Qt.probesResolution.value.copy(Yt.resolution)}is.upload(z,P(tt),Qt,j)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(is.upload(z,P(tt),Qt,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ot.setValue(z,"center",Y.center),Ot.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ot.setValue(z,"normalMatrix",Y.normalMatrix),Ot.setValue(z,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let Yt=W.uniformsGroups;for(let ki=0,vr=Yt.length;ki<vr;ki++){let $l=Yt[ki];Ae.update($l,Un),Ae.bind($l,Un)}}return Un}function C(_,A){_.ambientLightColor.needsUpdate=A,_.lightProbe.needsUpdate=A,_.sunLights.needsUpdate=A,_.sunLightShadows.needsUpdate=A,_.directionalLights.needsUpdate=A,_.directionalLightShadows.needsUpdate=A,_.pointLights.needsUpdate=A,_.pointLightShadows.needsUpdate=A,_.spotLights.needsUpdate=A,_.spotLightShadows.needsUpdate=A,_.rectAreaLights.needsUpdate=A,_.hemisphereLights.needsUpdate=A}function N(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(_,A,k){let W=Q.get(_);W.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Q.get(_.texture).__webglTexture=A,Q.get(_.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:k,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,A){let k=Q.get(_);k.__webglFramebuffer=A,k.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(_,A=0,k=0){de=_,ee=A,J=k;let W=null,Y=!1,ge=!1;if(_){let be=Q.get(_);if(be.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),me.copy(_.viewport),ze.copy(_.scissor),Oe=_.scissorTest,y.viewport(me),y.scissor(ze),y.setScissorTest(Oe),re=-1;return}else if(be.__webglFramebuffer===void 0)j.setupRenderTarget(_);else if(be.__hasExternalTextures)j.rebindTextures(_,Q.get(_.texture).__webglTexture,Q.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let st=_.depthTexture;if(be.__boundDepthTexture!==st){if(st!==null&&Q.has(st)&&(_.width!==st.image.width||_.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(_)}}let De=_.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);let Ve=Q.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ve[A])?W=Ve[A][k]:W=Ve[A],Y=!0):_.samples>0&&j.useMultisampledRTT(_)===!1?W=Q.get(_).__webglMultisampledFramebuffer:Array.isArray(Ve)?W=Ve[k]:W=Ve,me.copy(_.viewport),ze.copy(_.scissor),Oe=_.scissorTest}else me.copy(ke).multiplyScalar(he).floor(),ze.copy(je).multiplyScalar(he).floor(),Oe=Tt;if(k!==0&&(W=X),y.bindFramebuffer(z.FRAMEBUFFER,W)&&y.drawBuffers(_,W),y.viewport(me),y.scissor(ze),y.setScissorTest(Oe),Y){let be=Q.get(_.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+A,be.__webglTexture,k)}else if(ge){let be=A;for(let De=0;De<_.textures.length;De++){let Ve=Q.get(_.textures[De]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+De,Ve.__webglTexture,k,be)}}else if(_!==null&&k!==0){let be=Q.get(_.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,k)}re=-1};function $(_){let A=Q.get(_);return(A.__readFormat!==_.format||A.__readType!==_.type)&&(A.__readFormat=_.format,A.__readType=_.type,A.__formatReadable=B.textureFormatReadable(_.format),A.__typeReadable=B.textureTypeReadable(_.type)),A}this.readRenderTargetPixels=function(_,A,k,W,Y,ge,Re,be=0){if(!(_&&_.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Q.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){y.bindFramebuffer(z.FRAMEBUFFER,De);try{let Ve=_.textures[be],st=Ve.format,ot=Ve.type;_.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let Xe=$(Ve);if(Xe.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=_.width-W&&k>=0&&k<=_.height-Y&&z.readPixels(A,k,W,Y,Ue.convert(st),Ue.convert(ot),ge)}finally{let Ve=de!==null?Q.get(de).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(_,A,k,W,Y,ge,Re,be=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Q.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De)if(A>=0&&A<=_.width-W&&k>=0&&k<=_.height-Y){y.bindFramebuffer(z.FRAMEBUFFER,De);let Ve=_.textures[be],st=Ve.format,ot=Ve.type;_.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);let Xe=$(Ve);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.bufferData(z.PIXEL_PACK_BUFFER,ge.byteLength,z.STREAM_READ),z.readPixels(A,k,W,Y,Ue.convert(st),Ue.convert(ot),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let et=de!==null?Q.get(de).__webglFramebuffer:null;y.bindFramebuffer(z.FRAMEBUFFER,et);let vt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await pu(z,vt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ge),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(mt),z.deleteSync(vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,A=null,k=0){let W=Math.pow(2,-k),Y=Math.floor(_.image.width*W),ge=Math.floor(_.image.height*W),Re=A!==null?A.x:0,be=A!==null?A.y:0;j.setTexture2D(_,0),z.copyTexSubImage2D(z.TEXTURE_2D,k,0,0,Re,be,Y,ge),y.unbindTexture()},this.copyTextureToTexture=function(_,A,k=null,W=null,Y=0,ge=0){let Re,be,De,Ve,st,ot,Xe,mt,et,vt=_.isCompressedTexture?_.mipmaps[ge]:_.image;if(k!==null)Re=k.max.x-k.min.x,be=k.max.y-k.min.y,De=k.isBox3?k.max.z-k.min.z:1,Ve=k.min.x,st=k.min.y,ot=k.isBox3?k.min.z:0;else{let Qt=Math.pow(2,-Y);Re=Math.floor(vt.width*Qt),be=Math.floor(vt.height*Qt),_.isDataArrayTexture?De=vt.depth:_.isData3DTexture?De=Math.floor(vt.depth*Qt):De=1,Ve=0,st=0,ot=0}W!==null?(Xe=W.x,mt=W.y,et=W.z):(Xe=0,mt=0,et=0);let Et=Ue.convert(A.format),nn=Ue.convert(A.type),tt;A.isData3DTexture?(j.setTexture3D(A,0),tt=z.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(j.setTexture2DArray(A,0),tt=z.TEXTURE_2D_ARRAY):(j.setTexture2D(A,0),tt=z.TEXTURE_2D),y.activeTexture(z.TEXTURE0),y.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,A.flipY),y.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),y.pixelStorei(z.UNPACK_ALIGNMENT,A.unpackAlignment);let En=y.getParameter(z.UNPACK_ROW_LENGTH),Ut=y.getParameter(z.UNPACK_IMAGE_HEIGHT),Un=y.getParameter(z.UNPACK_SKIP_PIXELS),Cn=y.getParameter(z.UNPACK_SKIP_ROWS),Xn=y.getParameter(z.UNPACK_SKIP_IMAGES);y.pixelStorei(z.UNPACK_ROW_LENGTH,vt.width),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt.height),y.pixelStorei(z.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(z.UNPACK_SKIP_ROWS,st),y.pixelStorei(z.UNPACK_SKIP_IMAGES,ot);let Ri=_.isDataArrayTexture||_.isData3DTexture,Ot=A.isDataArrayTexture||A.isData3DTexture;if(_.isDepthTexture){let Qt=Q.get(_),Hi=Q.get(A),Yt=Q.get(Qt.__renderTarget),ki=Q.get(Hi.__renderTarget);y.bindFramebuffer(z.READ_FRAMEBUFFER,Yt.__webglFramebuffer),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let vr=0;vr<De;vr++)Ri&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(_).__webglTexture,Y,ot+vr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,ge,et+vr)),z.blitFramebuffer(Ve,st,Re,be,Xe,mt,Re,be,z.DEPTH_BUFFER_BIT,z.NEAREST);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||_.isRenderTargetTexture||Q.has(_)){let Qt=Q.get(_),Hi=Q.get(A);y.bindFramebuffer(z.READ_FRAMEBUFFER,U),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,V);for(let Yt=0;Yt<De;Yt++)Ri?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qt.__webglTexture,Y,ot+Yt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qt.__webglTexture,Y),Ot?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Hi.__webglTexture,ge,et+Yt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Hi.__webglTexture,ge),Y!==0?z.blitFramebuffer(Ve,st,Re,be,Xe,mt,Re,be,z.COLOR_BUFFER_BIT,z.NEAREST):Ot?z.copyTexSubImage3D(tt,ge,Xe,mt,et+Yt,Ve,st,Re,be):z.copyTexSubImage2D(tt,ge,Xe,mt,Ve,st,Re,be);y.bindFramebuffer(z.READ_FRAMEBUFFER,null),y.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ot?_.isDataTexture||_.isData3DTexture?z.texSubImage3D(tt,ge,Xe,mt,et,Re,be,De,Et,nn,vt.data):A.isCompressedArrayTexture?z.compressedTexSubImage3D(tt,ge,Xe,mt,et,Re,be,De,Et,vt.data):z.texSubImage3D(tt,ge,Xe,mt,et,Re,be,De,Et,nn,vt):_.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ge,Xe,mt,Re,be,Et,nn,vt.data):_.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ge,Xe,mt,vt.width,vt.height,Et,vt.data):z.texSubImage2D(z.TEXTURE_2D,ge,Xe,mt,Re,be,Et,nn,vt);y.pixelStorei(z.UNPACK_ROW_LENGTH,En),y.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut),y.pixelStorei(z.UNPACK_SKIP_PIXELS,Un),y.pixelStorei(z.UNPACK_SKIP_ROWS,Cn),y.pixelStorei(z.UNPACK_SKIP_IMAGES,Xn),ge===0&&A.generateMipmaps&&z.generateMipmap(tt),y.unbindTexture()},this.initRenderTarget=function(_){Q.get(_).__webglFramebuffer===void 0&&j.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?j.setTextureCube(_,0):_.isData3DTexture?j.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?j.setTexture2DArray(_,0):j.setTexture2D(_,0),y.unbindTexture()},this.resetState=function(){ee=0,J=0,de=null,y.reset(),He.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}};var pc=i=>()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},nr=(i,e,t)=>{let n=Math.sin(i*127.1+e*269.5+t*311.7)*43758.5453;return n-Math.floor(n)},Xt=(i,e,t)=>{let n=Math.floor(i),r=Math.floor(e),s=Math.floor(t),o=i-n,a=e-r,c=t-s,l=o*o*(3-2*o),d=a*a*(3-2*a),f=c*c*(3-2*c),u=(h,g,v)=>h+(g-h)*v;return u(u(u(nr(n,r,s),nr(n+1,r,s),l),u(nr(n,r+1,s),nr(n+1,r+1,s),l),d),u(u(nr(n,r,s+1),nr(n+1,r,s+1),l),u(nr(n,r+1,s+1),nr(n+1,r+1,s+1),l),d),f)},ss={plain:0,woodX:1,woodZ:2,woodY:3,stone:4,plaster:5,fabric:6,metal:7,leather:8,logX:9,logZ:10,paper:11,shingle:12},Vt=(i,e)=>(e.kind=i,e),Ht=class{constructor(){this.p=[],this.n=[],this.c=[],this.t=[],this.k=[]}clear(){this.p.length=this.n.length=this.c.length=this.t.length=this.k.length=0}add(e,{m:t=null,color:n=()=>[1,1,1],tip:r=()=>0,flat:s=!1,normal:o=null,flip:a=!1,mat:c=null}={}){var v;let l=e.index?e.toNonIndexed():e.clone();if(t&&l.applyMatrix4(t),(s||!l.attributes.normal)&&l.computeVertexNormals(),a){for(let p of["position","normal","uv"]){let E=l.attributes[p];if(!E)continue;let R=E.array,w=E.itemSize;for(let S=0;S<E.count;S+=3)for(let T=0;T<w;T++){let D=R[(S+1)*w+T];R[(S+1)*w+T]=R[(S+2)*w+T],R[(S+2)*w+T]=D}}let x=l.attributes.normal.array;for(let p=0;p<x.length;p++)x[p]=-x[p]}let d=l.attributes.position,f=l.attributes.normal,u=c;if(u===null){let x=n.kind||"plain";if(x==="wood"||x==="log"){l.computeBoundingBox();let p=new F;l.boundingBox.getSize(p);let E=p.x>=p.y&&p.x>=p.z?"X":p.z>=p.y?"Z":"Y";u=x==="log"?E==="Z"?ss.logZ:ss.logX:ss["wood"+E]}else u=(v=ss[x])!=null?v:0}let h=new F,g=new F;for(let x=0;x<d.count;x++){h.fromBufferAttribute(d,x),g.fromBufferAttribute(f,x),o&&o(h,g,x);let p=n(h,g,x);this.p.push(h.x,h.y,h.z),this.n.push(g.x,g.y,g.z),this.c.push(p[0],p[1],p[2]),this.t.push(r(h,g)),this.k.push(u)}return this}tris(e,t,n=()=>0,r=null){var s;for(let o=0;o<e.length;o+=3){let a=new F(...e[o]),c=new F(...e[o+1]),l=new F(...e[o+2]),d=r?r.clone():new F().subVectors(l,c).cross(new F().subVectors(a,c)).normalize(),f=(s=ss[t.kind])!=null?s:t.kind==="wood"?ss.woodY:0;[a,c,l].forEach(u=>{let h=t(u);this.p.push(u.x,u.y,u.z),this.n.push(d.x,d.y,d.z),this.c.push(h[0],h[1],h[2]),this.t.push(n(u)),this.k.push(f)})}return this}geometry(){let e=new Lt;return e.setAttribute("position",new ut(this.p,3)),e.setAttribute("normal",new ut(this.n,3)),e.setAttribute("color",new ut(this.c,3)),e.setAttribute("aTip",new ut(this.t,1)),e.setAttribute("aMat",new ut(this.k,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}},Ie=(i,e,t,n=.02,r=2)=>{let s=2*r+1,o=new Ne(1,1,1,s,s,s),a=[i/2,e/2,t/2],c=Math.min(n,i/2-1e-4,e/2-1e-4,t/2-1e-4),l=o.attributes.position,d=o.attributes.normal,f=[0,0,0],u=[0,0,0];for(let h=0;h<l.count;h++){for(let S=0;S<3;S++){let T=Math.round((l.getComponent(h,S)+.5)*s),D=a[S];f[S]=T<=r?-D+c*(T/r):T>=s-r?D-c*((s-T)/r):0,T>r&&T<s-r&&(f[S]=0),u[S]=Math.max(-(D-c),Math.min(D-c,f[S]))}let g=f[0]-u[0],v=f[1]-u[1],x=f[2]-u[2],p=d.getX(h),E=d.getY(h),R=d.getZ(h);Math.abs(p)>.5&&(g=Math.sign(p)*Math.max(Math.abs(g),1e-6)),Math.abs(E)>.5&&(v=Math.sign(E)*Math.max(Math.abs(v),1e-6)),Math.abs(R)>.5&&(x=Math.sign(R)*Math.max(Math.abs(x),1e-6));let w=Math.hypot(g,v,x)||1;l.setXYZ(h,u[0]+g/w*c,u[1]+v/w*c,u[2]+x/w*c),d.setXYZ(h,g/w,v/w,x/w)}return o},Wt=(i,e=10)=>new Ns(i.map(([t,n])=>new $e(Math.max(5e-4,t),n)),e),I=(i=0,e=0,t=0,n=0,r=0,s=0,o=1,a=o,c=o)=>new at().compose(new F(i,e,t),new _t().setFromEuler(new jt(n,r,s,"YXZ")),new F(o,a,c)),wn=(i,e,{sway:t=0,side:n=Mi,color:r=16777215,snowBias:s=0,sink:o=0,softBack:a=!1,crisp:c=!1,snowMask:l=!1,grain:d=0,rich:f=!1,indoor:u=!1,tree:h=!1}={})=>{let g=new cn({vertexColors:!0,side:n,color:r});if(g.onBeforeCompile=v=>{Object.assign(v.uniforms,i,{uShow:e}),v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
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
        vSnowA = uSnowCover * smoothstep(${(.2-s).toFixed(3)}, ${(.7-s).toFixed(3)}, cWN.y) * patchy;
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
        ${o?`transformed.y -= (1.0 - uShow) * ${o.toFixed(1)};`:"transformed *= uShow;"}`),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uSnowC, uMossC; varying float vSnowA; varying float vMossA; varying float vTipA; varying vec3 vObj;
        // wood grain + fine speckle, so surfaces feel like real material up close
        float gH(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        float gN(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(gH(i), gH(i + vec3(1, 0, 0)), f.x), mix(gH(i + vec3(0, 1, 0)), gH(i + vec3(1, 1, 0)), f.x), f.y),
                     mix(mix(gH(i + vec3(0, 0, 1)), gH(i + vec3(1, 0, 1)), f.x), mix(gH(i + vec3(0, 1, 1)), gH(i + vec3(1, 1, 1)), f.x), f.y), f.z); }
        float grainH(vec3 p) { return gN(vec3(p.x * 1.3 + p.z * 0.4, p.y * 24.0, p.z * 1.3)) * 0.65 + gN(p * 11.0) * 0.35; }
        ${f?yx:""}
        varying float vMat; varying vec3 vObjN;
        float gRichH = 0.0; float gAO = 1.0; float gBounce = 0.0;
        ${h?`uniform float uFall, uBloom, uLush; varying float vHash; varying float vLeaf;
        vec3 autumn(float h) {
          return h < 0.25 ? vec3(0.86, 0.42, 0.1) : h < 0.5 ? vec3(0.72, 0.16, 0.08) : h < 0.75 ? vec3(0.92, 0.7, 0.16) : vec3(0.55, 0.3, 0.12);
        }`:""}`).replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
        ${a?`#ifdef DOUBLE_SIDED
 normal *= faceDirection;
 #endif`:""}
        ${f?`{
          vec2 dHdxy = vec2(dFdx(gRichH), dFdy(gRichH)) * ${(d||.02).toFixed(3)};
          vec3 vSigmaX = dFdx(-vViewPosition), vSigmaY = dFdy(-vViewPosition);
          vec3 R1 = cross(vSigmaY, normal), R2 = cross(normal, vSigmaX);
          float fDet = dot(vSigmaX, R1) * faceDirection;
          vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
          { vec3 nb = abs(fDet) * normal - vGrad; if (dot(nb, nb) > 1e-12) normal = normalize(nb); }   // (never NaN on a degenerate pixel)
        }`:d?`{
          float gh = grainH(vObj);
          vec2 dHdxy = vec2(dFdx(gh), dFdy(gh)) * ${d.toFixed(3)};
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
        ${f?"gRichH = richSurface(int(vMat + 0.5), vObj, vObjN, diffuseColor.rgb);":d?"diffuseColor.rgb *= 0.84 + 0.3 * grainH(vObj);":""}
        ${u?`{
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
        diffuseColor.rgb = mix(diffuseColor.rgb, uSnowC * 0.96, ${c?"smoothstep(0.42, 0.56, vTipA) * 0.95":"clamp(vTipA, 0.0, 0.9)"});`)},u){let v=g.onBeforeCompile;g.onBeforeCompile=x=>{v(x),x.fragmentShader=x.fragmentShader.replace("#include <aomap_fragment>",`#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= 0.62 * gAO;
        reflectedLight.indirectDiffuse += diffuseColor.rgb * gBounce * 0.42;
        reflectedLight.directDiffuse *= mix(1.0, gAO, 0.7);`)}}return g},yx=`
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
`;function Yu({group:i,U:e,beams:t,halos:n,dust:r}){let o={uTime:e.uTime,uBeam:{value:0},uBeamC:{value:new Ye(1,.9,.72)},uHalo:{value:1},uDust:{value:0}},a=(f,u,h,g=1.18)=>{let v=new F(...u).normalize().multiplyScalar(h),x=f.map(T=>new F(...T)),p=x.reduce((T,D)=>T.add(D),new F).multiplyScalar(.25),E=x.map(T=>T.clone().sub(p).multiplyScalar(g).add(p).add(v)),R=[],w=[];for(let T=0;T<4;T++){let D=(T+1)%4;[[x[T],0,0],[x[D],1,0],[E[D],1,1],[x[T],0,0],[E[D],1,1],[E[T],0,1]].forEach(([L,O,H])=>{R.push(L.x,L.y,L.z),w.push(T+O,H)})}let S=new Lt;return S.setAttribute("position",new ut(R,3)),S.setAttribute("uv",new ut(w,2)),S.computeVertexNormals(),S},c=f=>new Bt({uniforms:{...o,uK:{value:f}},transparent:!0,depthWrite:!1,side:tn,blending:Gn,vertexShader:`
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
      }`});t.forEach(f=>{let u=new rt(a(f.rect,f.dir,f.len,f.spread),c(f.k||1));u.renderOrder=3,u.frustumCulled=!1,i.add(u)});let l=(()=>{let f=new Lt,u=n.length,h=new Float32Array(u*3),g=new Float32Array(u*3),v=new Float32Array(u),x=new Float32Array(u);n.forEach((E,R)=>{h.set(E.p,R*3),g.set(E.color||[1,.75,.45],R*3),v[R]=E.size,x[R]=E.flicker||0}),f.setAttribute("position",new zt(h,3)),f.setAttribute("aCol",new zt(g,3)),f.setAttribute("aSize",new zt(v,1)),f.setAttribute("aFl",new zt(x,1));let p=new Zn(f,new Bt({uniforms:o,transparent:!0,depthWrite:!1,blending:Gn,vertexShader:`
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
        }`}));return p.frustumCulled=!1,p.renderOrder=4,i.add(p),p})(),d=(()=>{let f=[],u=[];r.forEach(({box:[v,x,p,E,R,w],n:S})=>{for(let T=0;T<S;T++)f.push(v+Math.random()*(x-v),p+Math.random()*(E-p),R+Math.random()*(w-R)),u.push(Math.random())});let h=new Lt;h.setAttribute("position",new ut(f,3)),h.setAttribute("aSeed",new ut(u,1));let g=new Zn(h,new Bt({uniforms:o,transparent:!0,depthWrite:!1,blending:Gn,vertexShader:`
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
        void main() { float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vec3(1.0, 0.88, 0.7) * smoothstep(1.0, 0.0, d) * vA * 0.5, 1.0); }`}));return g.frustumCulled=!1,g.renderOrder=4,i.add(g),g})();return{update({day:f,beamColor:u,on:h}){o.uBeam.value=h?.05+f*.32:0,u&&o.uBeamC.value.copy(u),o.uHalo.value=h?1:0,o.uDust.value=h?.5+f*.5:0,l.visible=d.visible=h}}}var en={x0:-6.5,x1:6.5,z0:-9.5,z1:2.4,floor:-6.6,mezz:-3.4,ceil:-.3},dt={back:-7.6,left:-4.8,right:1.6,slab:.3},Je={x0:1.95,x1:3,top:2.2,bottom:-1.3},Fi=i=>{let e=(Je.top-Math.min(Je.top,Math.max(Je.bottom,i)))/(Je.top-Je.bottom);return .12+(en.mezz-.12)*e},bi={x:.55,z:-.4,r:1.05,turns:1.25},qt={x0:.55,x1:dt.right,z0:-1.45,z1:-.4},mc=en.mezz-en.floor,Qn=Math.PI*2,Ku=(i,e)=>[(Math.atan2(e-bi.z,i-bi.x)%Qn+Qn)%Qn,Math.hypot(i-bi.x,e-bi.z)],Qu=i=>{let e=[];for(let t=0;t<2;t++){let n=(i+Qn*t)/(Qn*bi.turns);n<=1&&e.push(en.mezz-n*mc)}return e},Bi=(i,e,[t,n,r,s],o=0)=>i>t+o&&i<n-o&&e>r+o&&e<s-o,bt=en,vx=[[bt.x0,bt.x1,bt.z0,dt.back],[bt.x0,dt.left,bt.z0,bt.z1],[dt.right,bt.x1,bt.z0,bt.z1],[qt.x0,qt.x1,qt.z0,qt.z1]],yr=.45,Zu=[[bt.x0+yr,bt.x1-yr,bt.z0+yr,dt.back],[bt.x0+yr,dt.left,bt.z0+yr,bt.z1],[dt.right,bt.x1-yr,bt.z0+yr,bt.z1],[qt.x0,dt.right+.4,qt.z0,.1]],ju=[[dt.left,dt.back],[dt.right,dt.back],[dt.left,-2.6],[dt.right,-4.4]],Mx=[[-.97,.97,-8.47,-7.53],[-.32,.32,-9.25,-8.5],[-2.95,-.65,-1.9,-.9],[-2.45,-1.15,-3.12,-2.38],[-4.5,-3.5,-3.4,-2.4],[-3.4,-3,-1.1,-.7],[4.15,4.65,1.35,1.85],[-6.5,-5.7,1.4,2.4],...ju.map(([i,e])=>[i-.14,i+.14,e-.14,e+.14])],Ex=[[3.15,4.05,-5.05,-4.15],[3.15,4.05,-3.35,-2.45],[3.35,4.05,-4.1,-3.4],[5.25,5.95,-9.1,-8.3]],Kt=.42,Ju=["#6e2d2a","#2f4a3a","#2a3550","#5a3d26","#7a5a2a","#4a4a4e","#3d2e44","#5e5040","#283c3c","#704030"];function ed(i,e,t,n){if(!Bi(i,e,[bt.x0,bt.x1,bt.z0,bt.z1],t))return!0;let[r,s]=Ku(i,e);if(s<bi.r+.1){let o=Qu(r).find(c=>Math.abs(c-n)<.9),a=Bi(i,e,[qt.x0,qt.x1,qt.z0,qt.z1])&&n>bt.mezz-.25;if(o!==void 0&&!a){if(s<.1+t*.6)return!0;if(s<bi.r-.12)return!1;let c=(bt.mezz-o)/mc;return c<.1?!Zu.some(l=>Bi(i,e,l,t)):c>.9?$u(i,e,t,!0,r,s):!0}}return n>bt.mezz-.35?!Zu.some(o=>Bi(i,e,o,t))||i>Je.x0-t&&i<Je.x1+t&&e>Je.bottom-t&&e<Je.top+.3&&(Fi(e)>n+.5||e>Je.bottom+.25&&(i<Je.x0+t||i>Je.x1-t))?!0:Ex.some(o=>Bi(i,e,o,-t)):$u(i,e,t,!1,r,s)}function $u(i,e,t,n,r,s){return!!(!Bi(i,e,[bt.x0+.52,bt.x1-.52,bt.z0+.52,bt.z1-.05],t)||Mx.some(o=>Bi(i,e,o,-t))||s<.1+t||!n&&s<bi.r+.1&&!(r>Math.PI/2-.1&&r<Math.PI+.3))}function td(i,e){let t=[];if(!Bi(i,e,[bt.x0,bt.x1,bt.z0,bt.z1]))return t;t.push(bt.floor),vx.some(s=>Bi(i,e,s,-.05))&&t.push(bt.mezz);let[n,r]=Ku(i,e);return r<bi.r+.08&&r>.04&&t.push(...Qu(n)),t}function nd({group:i,mats:e,camera:t,U:n}){let{inn:r}=e,s=bt.floor,o=bt.mezz,a=bt.ceil,c=bt.x0,l=bt.x1,d=bt.z0,f=bt.z1,u=o-dt.slab,h=new Ht,g=new Ht,v=(m,b,C)=>Xt(m,b,C),x=(m,b=0)=>Vt("wood",C=>{let N=m*(.86+v(C.x*3,C.y*9,C.z*3)*.28),$=v(C.x*.6,C.y*2,C.z*.6);return[N*(1.04+$*.08+b),N*(.7+$*.04),N*(.47-$*.05-b*.5)]}),p=x(.25),E=x(.35),R=x(.47),w=x(.38,.12),S=(m,b,C,N)=>N?Vt(N,()=>[m,b,C]):()=>[m,b,C],T=Vt("stone",m=>{let b=.42+v(m.x*4,m.y*4,m.z*4)*.22;return[b,b*.96,b*.9]}),D=Vt("plaster",m=>{let b=.7+v(m.x*2,m.y*2,m.z*2)*.07;return[b,b*.95,b*.86]}),M=S(.07,.07,.075,"metal"),L=S(.68,.53,.28,"metal"),O=Vt("leather",m=>{let b=.15+v(m.x*9,m.y*9,m.z*9)*.03;return[b*1.15,b*.6,b*.4]}),H=S(1,.86,.62),G=new F(0,1,0),X=(m,b,C,N=0)=>new at().compose(new F(m,b,C),new _t().setFromAxisAngle(G,N),new F(1,1,1)),U=(m,b,C,N,$=h)=>$.add(b,{m:m.clone().multiply(C),color:N}),V=(m,b,C)=>new Ne(m,b,C),ee=([m,b,C,N],$,_)=>{for(let A=m,k=0;A<b-.01;A+=.18,k++){let W=Math.min(.18,b-A),Y=k*7%5*.55;for(let ge=C-Y,Re=0;ge<N;ge+=2.4,Re++){let be=Math.max(ge,C),De=Math.min(ge+2.4,N);if(De-be<.05)continue;let Ve=_*(.9+(k*7+Re*3)%5*.035);h.add(V(W-.004,.04,De-be-.004),{m:I(A+W/2,$-.02,(be+De)/2),color:Vt("wood",st=>{let ot=Ve*(.88+v(st.x*3,0,st.z*.8)*.24);return[ot*1.08,ot*.72,ot*.47]})})}}};ee([c,l,d,f],s,.3),[[c,l,d,dt.back],[c,dt.left,dt.back,f],[dt.right,l,dt.back,f],[qt.x0,qt.x1,qt.z0,qt.z1]].forEach(([m,b,C,N])=>{ee([m,b,C,N],o,.36),h.add(V(b-m,o-.04-u-.01,N-C),{m:I((m+b)/2,(o-.04+u+.01)/2,(C+N)/2),color:p}),h.add(new Ft(b-m,N-C),{m:I((m+b)/2,u+.005,(C+N)/2,Math.PI/2,0,0),color:D})}),[[dt.left,dt.right,dt.back,"x"],[dt.back,f,dt.left,"z"],[dt.back,qt.z0,dt.right,"z"],[qt.z1,f,dt.right,"z"],[qt.x0,qt.x1,qt.z0,"x"]].forEach(([m,b,C,N])=>{let $=b-m,_=(m+b)/2;[[o-.04,.06,.05],[o-.17,.035,.03],[u+.03,.06,.05]].forEach(([A,k,W])=>{h.add(Ie(N==="x"?$+.06:W*2,k,N==="x"?W*2:$+.06,.012,1),{m:N==="x"?I(_,A,C):I(C,A,_),color:w})})});for(let m=c+.7;m<l;m+=1.3)h.add(V(.1,.12,dt.back-d),{m:I(m,u-.06,(d+dt.back)/2),color:E});for(let m=dt.back+.9;m<f;m+=1.3)h.add(V(dt.left-c,.12,.1),{m:I((c+dt.left)/2,u-.06,m),color:E}),h.add(V(l-dt.right,.12,.1),{m:I((dt.right+l)/2,u-.06,m),color:E});let re=(m,b)=>{g.add(new Be(.075,.075,.01,16),{m:I(m,u-.003,b),color:S(1,.92,.76)}),h.add(new Mn(.088,.012,4,18),{m:I(m,u-.004,b,Math.PI/2,0,0),color:S(.8,.78,.72,"metal")})};[-5.35,-3,-.9,.9,3,5.35].forEach(m=>re(m,-8.55)),[-6,-3.4,-.8,1.6].forEach(m=>{re(-5.45,m),re(2.7,m),re(5,m)}),ju.forEach(([m,b])=>{h.add(Ie(.2,u-s,.2,.025,1),{m:I(m,(u+s)/2,b),color:w}),h.add(Ie(.28,.32,.28,.02,1),{m:I(m,s+.16,b),color:E}),h.add(Ie(.3,.06,.3,.02,1),{m:I(m,s+.34,b),color:R}),h.add(Ie(.3,.08,.3,.02,1),{m:I(m,u-.16,b),color:R}),h.add(Ie(.26,.1,.26,.02,1),{m:I(m,u-.06,b),color:E})});let se=Wt([[.026,0],[.026,.05],[.017,.07],[.015,.16],[.03,.3],[.033,.36],[.019,.44],[.014,.58],[.021,.68],[.026,.72],[.016,.76],[.023,.79],[.023,.81]],6),me=(m,b,C)=>{h.add(Ie(.11,.96,.11,.015,1),{m:I(m,C+.48,b),color:w}),h.add(Ie(.15,.045,.15,.015,1),{m:I(m,C+.98,b),color:p}),h.add(new Dt(.05,10,7),{m:I(m,C+1.04,b),color:w})},ze=(m,b,C,N,$)=>{let _=Math.hypot(C-m,N-b),A=Math.atan2(C-m,N-b),k=(m+C)/2,W=(b+N)/2;h.add(Ie(.075,.06,_,.022,1),{m:I(k,$+.93,W,0,A,0),color:w}),h.add(V(.05,.05,_),{m:I(k,$+.065,W,0,A,0),color:E});let Y=Math.max(1,Math.round(_/.14));for(let ge=1;ge<Y;ge++){let Re=ge/Y;h.add(se,{m:I(m+(C-m)*Re,$+.09,b+(N-b)*Re),color:R})}me(m,b,$),me(C,N,$)},Oe=.05;ze(dt.left-Oe,dt.back-Oe,dt.right+Oe,dt.back-Oe,o),ze(dt.left-Oe,dt.back-Oe,dt.left-Oe,f-.06,o),ze(dt.right+Oe,dt.back-Oe,dt.right+Oe,qt.z0,o),ze(dt.right+Oe,.12,dt.right+Oe,f-.06,o),ze(qt.x0+.04,qt.z0+.04,dt.right+Oe,qt.z0+.04,o),ze(qt.x0+.04,qt.z0+.04,qt.x0+.04,qt.z1-.12,o);{let m=bi,b=16,C=Qn*m.turns/(b+1);for(let $=0;$<b;$++){let _=($+1)/(b+1),A=o-_*mc,k=_*Qn*m.turns,W=k-C*.5-.04,Y=k+C*.5+.04;h.add(new Be(m.r,m.r,.055,7,1,!1,Math.PI/2-Y,Y-W),{m:I(m.x,A-.028,m.z),color:w}),h.add(new Be(m.r-.04,m.r-.04,.03,7,1,!1,Math.PI/2-Y+.02,Y-W-.04),{m:I(m.x,A-.07,m.z),color:p}),[k-C*.25,k+C*.25].forEach(ge=>h.add(se,{m:I(m.x+Math.cos(ge)*(m.r-.06),A,m.z+Math.sin(ge)*(m.r-.06),0,0,0,1,1.07,1),color:R}))}class N extends Fn{constructor(_,A){super(),this.r=_,this.dy=A}getPoint(_,A=new F){let k=_*Qn*m.turns;return A.set(m.x+Math.cos(k)*this.r,o-_*mc+this.dy,m.z+Math.sin(k)*this.r)}}h.add(new yi(new N(m.r-.06,.92),150,.03,6),{color:w}),h.add(new yi(new N(m.r-.02,-.1),150,.045,6),{color:p}),h.add(new Be(.07,.07,o+.9-s,12),{m:I(m.x,(o+.9+s)/2,m.z),color:w}),h.add(Wt([[.15,0],[.15,.04],[.1,.07],[.08,.14],[.07,.16]],12),{m:I(m.x,s,m.z),color:p}),h.add(Wt([[.07,0],[.09,.03],[.05,.08],[.06,.14],[.03,.2],[0,.23]],12),{m:I(m.x,o+.9,m.z),color:w})}{let b=(Je.top-Je.bottom)/12,C=(Je.x0+Je.x1)/2,N=Je.x1-Je.x0-.04;for(let A=0;A<12;A++){let k=Je.top-A*b,W=k-b,Y=Fi(k-b*.5);h.add(Ie(N,.05,b+.04,.012,1),{m:I(C,Y-.025,(W+k)/2),color:R}),h.add(V(N,Math.abs(Fi(k)-Fi(W)),.03),{m:I(C,(Fi(k)+Y)/2,k-.01),color:p})}let $=Math.hypot(Je.top-Je.bottom,.12-o),_=Math.atan2(.12-o,Je.top-Je.bottom);[Je.x0,Je.x1].forEach(A=>{h.add(V(.05,.28,$),{m:I(A,(.12+o)/2-.1,(Je.top+Je.bottom)/2,_,0,0),color:E}),h.add(Ie(.06,.06,$,.02,1),{m:I(A,(.12+o)/2+.85,(Je.top+Je.bottom)/2,_,0,0),color:w});for(let W=1;W<12;W+=1){let Y=Je.top-W*b;h.add(se,{m:I(A,Fi(Y),Y,0,0,0,1,1.03,1),color:R})}let k=[[A,o,Je.bottom+.3],[A,o,Je.top],[A,Fi(Je.top)-.15,Je.top]];h.tris([...k,k[0],k[2],k[1]],E)})}let pt=(m,b)=>m>Je.x0-.05&&m<Je.x1+.05&&b>Je.bottom-.05&&b<Je.top+.2;for(let m=c;m<l-.01;m+=.5)for(let b=d;b<f-.01;b+=.5)pt(m+.25,b+.25)||h.add(new Ft(.5,.5),{m:I(m+.25,a,b+.25,Math.PI/2,0,0),color:D});for(let m=d+1.2;m<f;m+=1.8)(m>Je.bottom-.1&&m<Je.top+.2?[[c,Je.x0-.05],[Je.x1+.05,l]]:[[c,l]]).forEach(([C,N])=>h.add(Ie(N-C,.22,.2,.02,1),{m:I((C+N)/2,a-.11,m),color:p}));let Se={x:-1.8,z:-2.75,y:-2.75};h.add(Wt([[.42,0],[.4,-.03],[.3,-.05],[.18,-.07],[.08,-.1],[0,-.1]],24),{m:I(Se.x,a,Se.z),color:D});let Qe=Vt("wood",m=>{let b=.34+v(m.x*2,m.y*6,m.z*2)*.08;return[b*1.06,b*.74,b*.5]});[["z",d,c,l,1],["z",f,c,l,-1],["x",c,d,f,1],["x",l,d,f,-1]].forEach(([m,b,C,N,$])=>{for(let k=C;k<N-.01;k+=.6){let W=Math.min(.6,N-k),Y=k+W/2,ge=(Re,be,De)=>h.add(new Ft(W,be-Re),{m:m==="z"?I(Y,(Re+be)/2,b,0,$>0?0:Math.PI,0):I(b,(Re+be)/2,Y,0,$>0?Math.PI/2:-Math.PI/2,0),color:De});ge(s,s+.9,T),ge(s+.9,a,Qe)}let _=N-C,A=(C+N)/2;[[s+.9,.06,.05],[s+.06,.12,.03],[a-.07,.14,.09],[a-.17,.05,.05]].forEach(([k,W,Y])=>{h.add(Ie(m==="z"?_:Y,W,m==="z"?Y:_,.015,1),{m:m==="z"?I(A,k,b+$*Y/2):I(b+$*Y/2,k,A),color:E})})});for(let m=dt.left+.15;m<dt.right-.6;m+=1.07)h.add(Ie(.9,.62,.035,.012,1),{m:I(m+.45,s+.48,f-.02),color:w}),h.add(Ie(.7,.44,.02,.02,1),{m:I(m+.45,s+.48,f-.04),color:E}),h.add(Ie(.9,2.4,.03,.012,1),{m:I(m+.45,u+1.6,f-.02),color:w}),h.add(Ie(.72,2.2,.02,.02,1),{m:I(m+.45,u+1.6,f-.04),color:E});{let C=s+.55,N=s+2.62,$=d+.02;g.add(new Ft(.95- -.95,N-C,1,10),{m:I(0,(C+N)/2,$+.01),color:A=>{let k=(A.y-C)/(N-C);return[1-k*.32,.98-k*.14,.94+k*.06]}});let _=(A,k,W,Y,ge=.05)=>h.add(Ie(A,k,ge,.008,1),{m:I(W,Y,$+.05),color:R});for(let A=1;A<3;A++)_(.035,N-C,-.95+A*(.95- -.95)/3,(C+N)/2);for(let A=1;A<5;A++)_(.95- -.95,.035,0,C+A*(N-C)/5);_(.06,N-C,0,(C+N)/2,.07),[-1,1].forEach(A=>h.add(Ie(.14,N-C+.2,.1,.015,1),{m:I(A*(.95+.06),(C+N)/2,$+.05),color:w})),h.add(Ie(.95- -.95+.4,.16,.12,.015,1),{m:I(0,N+.08,$+.06),color:w}),h.add(Ie(.95- -.95+.5,.05,.18,.015,1),{m:I(0,N+.18,$+.09),color:E}),h.add(Ie(.95- -.95+.46,.05,.28,.02,1),{m:I(0,C-.02,$+.14),color:R}),h.add(Ie(.95- -.95+.3,.12,.05,.015,1),{m:I(0,C-.11,$+.04),color:w}),[-1,1].forEach(A=>{let k=A*1.28;[[.36,.04,0,N-.02],[.36,.04,0,C+.02],[.04,N-C,-.16,(C+N)/2],[.04,N-C,.16,(C+N)/2],[.36,.04,0,(C+N)/2]].forEach(([W,Y,ge,Re])=>h.add(Ie(W,Y,.035,.008,1),{m:I(k+ge,Re,$+.03),color:R}));for(let W=C+.08;W<N-.06;W+=.075)Math.abs(W-(C+N)/2)>.05&&h.add(V(.3,.05,.008),{m:I(k,W,$+.03,-.6,0,0),color:E});[C+.3,N-.3].forEach(W=>h.add(V(.03,.06,.02),{m:I(k-A*.18,W,$+.05),color:M}))})}let ue=[],he=(m,b,C,N)=>ue.push({x:m,z:b,ry:C,w:N,base:s,h:2.8,rows:4,rowY0:.86,rowH:.48,cab:.78,pref:[1,2,0,3]}),Me=(m,b,C,N)=>ue.push({x:m,z:b,ry:C,w:N,base:o,h:2.88,rows:5,rowY0:.16,rowH:.5,cab:0,pref:[2,3,1,0,4]});[-2.25,-3.95,2.25,3.95,-5.65,5.65].forEach(m=>he(m,d+Kt/2,0,1.7)),[-8,-6,-4,-2,0].forEach(m=>he(c+Kt/2,m,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(m=>he(l-Kt/2,m,-Math.PI/2,2)),[-1,1,-3,3,-5,5].forEach(m=>Me(m,d+Kt/2,0,2)),[-8,-6,-4,-2,0].forEach(m=>Me(c+Kt/2,m,Math.PI/2,2)),[-8,-6,-4,-2,0].forEach(m=>Me(l-Kt/2,m,-Math.PI/2,2));let Ke=ue.map((m,b)=>b),ke=m=>X(m.x,m.base,m.z,m.ry),je=(m,b,C,N)=>new F(b,C,N).applyMatrix4(ke(m));ue.forEach(m=>{let b=ke(m),C=m.w/2,N=m.rowY0+m.rows*m.rowH,$=(_,A,k)=>U(b,_,A,k);$(V(m.w,m.h-m.cab,.03),I(0,(m.h+m.cab)/2,-Kt/2+.015),p),[-1,1].forEach(_=>$(Ie(.06,m.h,Kt+.02,.012,1),I(_*(C-.03),m.h/2,.01),E));for(let _=0;_<=m.rows;_++)$(V(m.w-.1,.03,Kt-.03),I(0,m.rowY0+_*m.rowH-.015,0),E);for(let _=0;_<m.rows;_++)$(Ie(m.w-.1,.04,.022,.008,1),I(0,m.rowY0+_*m.rowH+.005,Kt/2-.006),R);if($(V(m.w-.1,m.h-N-.06,.03),I(0,(N+m.h-.06)/2,Kt/2-.03),w),$(Ie(m.w+.04,.06,Kt+.05,.015,1),I(0,m.h-.03,.02),p),$(Ie(m.w+.1,.04,Kt+.1,.015,1),I(0,m.h+.01,.04),E),m.cab){$(Ie(m.w,m.cab-.12,Kt+.1,.01,1),I(0,.1+(m.cab-.12)/2,.05),E),$(V(m.w-.04,.1,Kt+.06),I(0,.05,.03),p),$(Ie(m.w+.04,.045,Kt+.16,.014,1),I(0,m.cab-.02,.06),R);let _=(m.w-.12)/2;[-1,1].forEach(A=>{let k=A*(_/2+.015);$(Ie(_-.02,m.cab-.26,.03,.006,1),I(k,.11+(m.cab-.2)/2,Kt/2+.11),w),$(Ie(_-.16,m.cab-.42,.02,.02,1),I(k,.11+(m.cab-.2)/2,Kt/2+.13),R),$(new Dt(.018,8,6),I(A*.05,.11+(m.cab-.2)/2+.06,Kt/2+.15),L)})}else $(Ie(m.w,m.rowY0-.02,Kt+.04,.008,1),I(0,(m.rowY0-.02)/2,.02),p)}),h.add(new Be(.015,.015,12.2,6),{m:I(0,o+2.55,d+Kt+.05,0,0,Math.PI/2),color:L});{let C=d+Kt+.55;[-.22,.22].forEach(N=>h.add(Ie(.05,2.7,.06,.012,1),{m:I(5.6+N,o+1.33,C-.26,-.2,0,0),color:R}));for(let N=0;N<8;N++){let $=.25+N*.31;h.add(new Be(.018,.018,.44,6),{m:I(5.6,o+$,C-$*Math.tan(.2)*.98,0,0,Math.PI/2),color:R})}[-.22,.22].forEach(N=>h.add(new Mn(.03,.008,4,10),{m:I(5.6+N,o+2.58,d+Kt+.08,0,Math.PI/2,0),color:L}))}{let m=X(0,s,-8);U(m,Ie(1.9,.06,.9,.022,2),I(0,.77,0),w),U(m,V(1.2,.004,.55),I(0,.802,.02),Vt("leather",()=>[.15,.24,.17])),[-1,1].forEach(b=>{U(m,Ie(.5,.66,.82,.012,1),I(b*.65,.41,0),E),U(m,Ie(.54,.08,.86,.015,1),I(b*.65,.04,0),p);for(let C=0;C<3;C++){let N=.2+C*.19;U(m,Ie(.42,.16,.03,.008,1),I(b*.65,N,-.42),w),U(m,Ie(.12,.018,.02,.008,1),I(b*.65,N+.02,-.445),L)}U(m,Ie(.4,.5,.03,.01,1),I(b*.65,.42,.42),w),U(m,Ie(.3,.38,.02,.015,1),I(b*.65,.42,.44),R)}),U(m,Ie(.76,.11,.03,.008,1),I(0,.68,-.42),w),U(m,Ie(.14,.018,.02,.008,1),I(0,.69,-.445),L),U(m,V(.8,.55,.02),I(0,.45,.38),E),U(m,new Be(.1,.12,.03,16),I(.6,.815,.1),L),U(m,new Be(.012,.012,.3,6),I(.6,.97,.1),L),U(m,new Dt(1,16,8,0,Qn,0,Math.PI/2),I(.6,1.1,.02,0,0,0,.22,.09,.1),S(.12,.34,.2,"metal")),U(m,new Be(.03,.03,.12,8),I(.6,1.08,.02,0,0,Math.PI/2),H,g),[[.16,.05,[.4,.14,.12]],[.2,.045,[.17,.25,.2]],[.18,.04,[.5,.4,.25]]].forEach(([b,C,N],$)=>U(m,Ie(b*1.4,C,b,.008,1),I(-.62,.8+.025+$*.045,.12,0,$*.2-.2,0),S(...N,"leather"))),U(m,Wt([[.03,0],[.035,.02],[.03,.05],[.012,.06],[.012,.07]],10),I(-.25,.8,.22),S(.1,.12,.16,"metal")),U(m,new Be(.004,.004,.16,5),I(-.1,.81,.05,0,.5,Math.PI/2),S(.1,.1,.1)),U(m,V(.3,.003,.4),I(.05,.806,-.02,0,-.12,0),S(.9,.87,.78,"paper")),U(m,V(.3,.003,.4),I(.12,.809,0,0,.1,0),S(.92,.9,.82,"paper"))}{let m=X(0,s,-8.88),b=Vt("fabric",N=>Math.sin(N.x*40)*Math.sin(N.y*40+N.z*30)>.35?[.74,.68,.5]:[.42,.48,.38]),C=Wt([[.018,0],[.024,.04],[.018,.12],[.028,.24],[.022,.36],[.026,.42],[.026,.44]],8);[[-.21,.19],[.21,.19]].forEach(([N,$])=>U(m,C,I(N,0,$),p)),[[-.21,-.19],[.21,-.19]].forEach(([N,$])=>U(m,Ie(.045,.98,.045,.01,1),I(N,.49,$-.02,-.08,0,0),p)),U(m,Ie(.5,.06,.46,.015,1),I(0,.44,0),p),U(m,Ie(.48,.1,.44,.04,2),I(0,.51,.01),b),U(m,Ie(.4,.46,.06,.03,2),I(0,.82,-.2,-.08,0,0),b),U(m,Ie(.46,.05,.05,.015,1),I(0,1.06,-.23,-.08,0,0),p)}{let m=X(-1.8,s,-1.4,Math.PI);U(m,Ie(2.2,.32,.86,.05,2),I(0,.28,0),O),[-1,0,1].forEach(b=>U(m,Ie(.62,.14,.64,.05,2),I(b*.63,.5,.08),O)),U(m,Ie(2.2,.5,.22,.07,2),I(0,.67,-.33),O);for(let b=0;b<3;b++)for(let C=-.9+b%2*.09;C<=.9;C+=.18)U(m,new Dt(.012,6,4),I(C,.6+b*.09,-.218),S(.12,.06,.04,"leather"));[-1,1].forEach(b=>{U(m,Ie(.2,.36,.86,.04,2),I(b*1,.5,0),O),U(m,new Be(.13,.13,.88,16),I(b*1.03,.68,0,Math.PI/2,0,0),O),[-1,1].forEach(C=>U(m,Wt([[.04,0],[.05,.04],[.035,.09],[.045,.12]],10),I(b*.98,0,C*.36),p)),U(m,Ie(.42,.4,.12,.07,2),I(b*.66,.74,-.15,-.3,b*.25,b*.1),b>0?Vt("fabric",C=>Math.sin(C.x*50)>.6?[.72,.58,.3]:[.56,.42,.22]):S(.36,.42,.32,"fabric"))})}{let m=X(-1.8,s,-2.75),b=Wt([[.025,0],[.032,.03],[.022,.1],[.034,.2],[.026,.3],[.03,.38],[.03,.4]],8);U(m,Ie(1.2,.05,.66,.02,2),I(0,.43,0),w),U(m,Ie(1.08,.08,.54,.01,1),I(0,.37,0),E),U(m,Ie(1,.025,.48,.01,1),I(0,.12,0),E),[[-.52,-.25],[.52,-.25],[-.52,.25],[.52,.25]].forEach(([C,N])=>U(m,b,I(C,0,N),p)),[-1,1].forEach(C=>{U(m,Ie(.2,.012,.28,.004,1),I(C*.1+.1,.462,.05,0,.15,C*.08),S(.9,.87,.78,"paper")),U(m,Ie(.21,.008,.29,.004,1),I(C*.1+.1,.455,.05,0,.15,C*.08),S(.42,.14,.12,"leather"))}),U(m,Wt([[0,0],[.09,0],[.11,.025],[.1,.03]],16),I(-.32,.455,-.1),L),U(m,Ie(.24,.05,.17,.008,1),I(-.2,.18,.05,0,.3,0),S(.3,.33,.4,"leather"))}{let m=X(-4,s,-2.9,Math.PI/2);U(m,Ie(.86,.36,.8,.05,2),I(0,.3,0),O),U(m,Ie(.56,.14,.6,.05,2),I(0,.53,.08),O),U(m,Ie(.86,.48,.2,.07,2),I(0,.7,-.3,-.1,0,0),O),[-1,1].forEach(b=>{U(m,Ie(.17,.42,.8,.06,2),I(b*.36,.56,0),O),[-1,1].forEach(C=>U(m,Wt([[.035,0],[.045,.04],[.03,.08],[.04,.12]],10),I(b*.36,0,C*.32),p))})}h.add(Wt([[.16,0],[.16,.02],[.1,.05],[.04,.09],[.02,.12]],16),{m:I(-3.2,s,-.9),color:L}),h.add(new Be(.014,.014,1.45,6),{m:I(-3.2,s+.82,-.9),color:L}),h.add(new Be(.16,.25,.3,20,1,!0),{m:I(-3.2,s+1.6,-.9),color:Vt("fabric",C=>{let N=.82+Math.sin(Math.atan2(C.z- -.9,C.x- -3.2)*20)*.04;return[N,N*.9,N*.72]})}),g.add(new Dt(.06,10,8),{m:I(-3.2,s+1.52,-.9),color:H});{let C=s+1;h.add(new Dt(.28,28,18),{m:I(4.4,C,1.6,.4,0,.2),color:N=>v(N.x*9+3,N.y*9,N.z*9)>.55?[.66,.56,.36]:[.24,.36,.42]}),h.add(new Mn(.31,.012,6,36),{m:I(4.4,C,1.6,0,Math.PI/2,.2),color:L}),h.add(new Mn(.33,.016,6,36),{m:I(4.4,C-.02,1.6,Math.PI/2,0,0),color:w}),h.add(Wt([[.2,0],[.2,.03],[.07,.08],[.05,.3],[.08,.42],[.04,.55],[.06,.7],[.03,.72]],12),{m:I(4.4,s,1.6),color:w})}{let m=X(-6.1,s,1.9,Math.PI/2);U(m,Ie(.56,.32,.38,.02,1),I(0,.16,0),p),U(m,Ie(.46,1.4,.3,.02,1),I(0,1,0),w),U(m,Ie(.3,1,.02,.02,1),I(0,1,.155),E),U(m,Ie(.56,.56,.36,.02,1),I(0,1.98,0),w),U(m,new Be(.28,.28,.36,18,1,!1,-Math.PI/2,Math.PI),I(0,2.26,0,Math.PI/2,0,0,1,1,.5),p),U(m,new Be(.19,.19,.02,28),I(0,1.98,.18,Math.PI/2,0,0),S(.9,.86,.76,"paper")),U(m,new Mn(.2,.012,6,28),I(0,1.98,.19),L),U(m,V(.012,.13,.006),I(0,2.02,.195,0,0,.6),S(.08,.08,.08)),U(m,V(.012,.16,.006),I(0,2.04,.197,0,0,-.3),S(.08,.08,.08)),U(m,new Be(.06,.06,.012,16),I(0,.7,.13,Math.PI/2,0,0),L)}{for(let b=a-.12,C=0;b>Se.y+.8;b-=.085,C++)h.add(new Mn(.03,.007,4,8),{m:I(Se.x,b,Se.z,0,C%2*Math.PI/2,0,1,1.4,1),color:M});h.add(Wt([[0,-.28],[.035,-.22],[.05,-.12],[.03,-.02],[.07,.04],[.05,.12],[.022,.3],[.04,.45],[.02,.6],[.016,.8],[0,.82]],12),{m:I(Se.x,Se.y,Se.z),color:M});let m=(b,C,N,$)=>{h.add(new Mn(b,.02,6,48),{m:I(Se.x,C,Se.z,Math.PI/2,0,0),color:M});for(let _=0;_<N;_++){let A=_/N*Qn+($?0:.3),k=Se.x+Math.cos(A)*b,W=Se.z+Math.sin(A)*b,Y=new Zr(new F(Se.x,C+.1,Se.z),new F(Se.x+Math.cos(A)*b*.3,C-.18,Se.z+Math.sin(A)*b*.3),new F(Se.x+Math.cos(A)*b*.8,C-.12,Se.z+Math.sin(A)*b*.8),new F(k,C,W));h.add(new yi(Y,12,.012,5),{color:M}),h.add(Wt([[0,0],[.03,0],[.045,.035],[.04,.05]],10),{m:I(k,C+.01,W),color:M}),h.add(new Be(.017,.017,.12,8),{m:I(k,C+.11,W),color:S(.9,.86,.76,"paper")}),g.add(new Dt(.02,8,6),{m:I(k,C+.2,W,0,0,0,1,1.9,1),color:H})}};m(.82,Se.y,8,!0),m(.42,Se.y+.4,6,!1);for(let b=0;b<4;b++){let C=b/4*Qn+Math.PI/4,N=new dr(new F(Se.x+Math.cos(C)*.82,Se.y,Se.z+Math.sin(C)*.82),new F(Se.x+Math.cos(C)*.7,Se.y+.5,Se.z+Math.sin(C)*.7),new F(Se.x,Se.y+.78,Se.z));h.add(new yi(N,12,.009,4),{color:M})}}{let m=Vt("fabric",C=>{let N=.84+v(C.x*7,C.y*7,C.z*7)*.05;return[N,N*.97,N*.9]}),b=C=>{let N=X(3.6,o,C,-Math.PI/2);U(N,Ie(.8,.3,.78,.06,2),I(0,.3,0),m),U(N,Ie(.56,.13,.6,.05,2),I(0,.5,.07),m),U(N,Ie(.8,.62,.2,.08,2),I(0,.76,-.3,-.12,0,0),m),[-1,1].forEach($=>{U(N,Ie(.14,.38,.76,.06,2),I($*.34,.54,0),m),[-1,1].forEach(_=>U(N,Wt([[.02,0],[.03,.05],[.022,.1],[.03,.15]],8),I($*.33,0,_*.32),p))}),U(N,Ie(.38,.36,.1,.06,2),I(0,.72,-.15,-.25,0,0),S(.34,.4,.5,"fabric"))};b(-4.6),b(-2.9),h.add(new Be(.3,.3,.035,24),{m:I(3.7,o+.58,-3.75),color:w}),h.add(Wt([[.17,0],[.17,.02],[.06,.06],[.035,.2],[.05,.35],[.03,.5],[.06,.56]],12),{m:I(3.7,o,-3.75),color:p}),h.add(Wt([[0,0],[.05,0],[.07,.06],[.05,.16],[.02,.2],[.025,.24]],12),{m:I(3.75,o+.6,-3.65),color:S(.6,.66,.66)}),[[0,[.5,.2,.16]],[.04,[.2,.3,.34]]].forEach(([C,N],$)=>h.add(Ie(.22,.04,.16,.006,1),{m:I(3.6,o+.62+C,-3.88,0,$*.4,0),color:S(...N,"leather")}))}let Tt=(m,b,C,N,$,_=!1)=>{let A=document.createElement("canvas");A.width=m,A.height=b,C(A.getContext("2d"),m,b);let k=new Jn(A);k.colorSpace=_n,k.anisotropy=8;let W=new cn({map:k,color:12103848,alphaTest:_?.5:0,side:tn}),Y=new rt(N,W);return Y.applyMatrix4($),Y.receiveShadow=!0,i.add(Y),Y},lt=7,ct=()=>(lt=lt*16807%2147483647,lt/2147483647),It=m=>(b,C,N)=>{let $=Math.round(C*.035);b.clearRect(0,0,C,N);for(let et=2;et<N-2;et+=3)b.fillStyle=et%2?"#e9dfc8":"#d7cbb0",b.fillRect(0,et,$+2,1.6),b.fillRect(C-$-2,et,$+2,1.6);let _=$,A=C-2*$,k=(et,vt)=>{b.fillStyle=vt,b.fillRect(_+et,et,A-et*2,N-et*2)};k(0,m.border),k(N*.035,m.cream),k(N*.045,m.border2),k(N*.115,m.cream),k(N*.125,m.field),b.fillStyle=m.accent;let W=N*.08,Y=N*.06,ge=(et,vt,Et)=>{b.beginPath(),b.moveTo(et,vt-Et),b.lineTo(et+Et,vt),b.lineTo(et,vt+Et),b.lineTo(et-Et,vt),b.closePath(),b.fill()};for(let et=_+W;et<_+A-W;et+=Y)ge(et,W,Y*.3),ge(et,N-W,Y*.3);for(let et=W+Y;et<N-W;et+=Y)ge(_+W,et,Y*.3),ge(_+A-W,et,Y*.3);let Re=_+N*.125,be=N*.125,De=A-N*.25,Ve=N*.75;b.save(),b.beginPath(),b.rect(Re,be,De,Ve),b.clip();for(let et=be+10,vt=0;et<be+Ve;et+=N*.055,vt++)for(let Et=Re+8+vt%2*N*.04;Et<Re+De;Et+=N*.08)b.fillStyle=m.motif,ge(Et,et,N*.012),b.fillStyle=m.accent,b.fillRect(Et-1,et-1,2,2);let st=_+A/2,ot=N/2,Xe=(et,vt,Et,nn,tt)=>{tt.forEach((En,Ut)=>{let Un=Et*(1-Ut*.2);b.fillStyle=En,b.beginPath();for(let Cn=0;Cn<=64;Cn++){let Xn=Cn/64*Qn,Ri=Un*(1+.14*Math.cos(Xn*8)),Ot=et+Math.cos(Xn)*Ri*nn,Qt=vt+Math.sin(Xn)*Ri;Cn?b.lineTo(Ot,Qt):b.moveTo(Ot,Qt)}b.fill()})};[[Re,be],[Re+De,be],[Re,be+Ve],[Re+De,be+Ve]].forEach(([et,vt])=>Xe(et,vt,N*.2,1.3,[m.medal,m.cream,m.medal])),b.restore(),[-1,1].forEach(et=>{b.fillStyle=m.medal,ge(st+et*N*.42,ot,N*.08),b.fillStyle=m.cream,ge(st+et*N*.42,ot,N*.04)}),Xe(st,ot,N*.3,1.45,[m.cream,m.medal,m.field,m.accent,m.medal]);for(let et=0;et<C*N*.05;et++){let vt=_+ct()*A,Et=ct()*N;b.fillStyle=ct()<.5?"rgba(0,0,0,0.12)":"rgba(255,240,210,0.08)",b.fillRect(vt,Et,1.5,1.5)}let mt=b.createRadialGradient(st,ot,0,st,ot,A*.4);mt.addColorStop(0,"rgba(255,240,220,0.1)"),mt.addColorStop(1,"rgba(255,240,220,0)"),b.fillStyle=mt,b.fillRect(_,0,A,N)},gt=(m,b,C,N,$,_,A=s)=>{let k=new Ft(C*1.07,N);Tt(1024,Math.round(1024*N/(C*1.07)),It(_),k,new at().compose(new F(m,A+.006,b),new _t().setFromEuler(new jt(-Math.PI/2,$,0,"YXZ")),new F(1,1,1)),!0)};gt(0,-6.5,3.2,2,0,{border:"#2a2440",border2:"#6a1d1c",cream:"#d8c7a0",field:"#7a201c",accent:"#c58f42",motif:"#4a1612",medal:"#22305a"}),gt(-1.9,-2.6,3.9,2.8,0,{border:"#6d1f1c",border2:"#1f2d4a",cream:"#d6c49a",field:"#1d2a46",accent:"#b07a3a",motif:"#2c3d5e",medal:"#7b2420"}),gt(3.9,-3.75,2.2,3,Math.PI/2,{border:"#5c3a22",border2:"#8a2e22",cream:"#e0d2ae",field:"#9a3a26",accent:"#d6a24c",motif:"#6a2416",medal:"#2b3a52"},o);{let N=s+2.05,$=f-.06;Tt(512,333,(A,k,W)=>{let Y=A.createLinearGradient(0,0,0,W*.6);Y.addColorStop(0,"#6f87a0"),Y.addColorStop(1,"#e3c9a0"),A.fillStyle=Y,A.fillRect(0,0,k,W);let ge=(be,De,Ve,st)=>{A.fillStyle=Ve,A.beginPath(),A.moveTo(0,W);for(let ot=0;ot<=k;ot+=4)A.lineTo(ot,be+Math.sin(ot*st+be)*De+Math.sin(ot*st*2.7)*De*.4);A.lineTo(k,W),A.fill()};ge(W*.5,14,"#56677a",.012),ge(W*.6,10,"#47584a",.02),A.fillStyle="#9fb2b8",A.fillRect(0,W*.7,k,W*.08),ge(W*.8,6,"#2f3a2a",.03);for(let be=0;be<26;be++){let De=ct()*k,Ve=W*(.62+ct()*.2),st=20+ct()*40;A.fillStyle="#1f2a1e",A.beginPath(),A.moveTo(De,Ve-st),A.lineTo(De+st*.25,Ve),A.lineTo(De-st*.25,Ve),A.fill()}for(let be=0;be<6e3;be++)A.fillStyle=`rgba(${ct()<.5?"0,0,0":"255,240,210"},0.05)`,A.fillRect(ct()*k,ct()*W,2,1);let Re=A.createRadialGradient(k/2,W/2,W*.3,k/2,W/2,k*.7);Re.addColorStop(0,"rgba(0,0,0,0)"),Re.addColorStop(1,"rgba(40,20,0,0.35)"),A.fillStyle=Re,A.fillRect(0,0,k,W)},new Ft(2,1.3),I(-1.8,N,$,0,Math.PI,0));let _=S(.72,.56,.26,"metal");[[2+.2,.12,0,1.3/2+.06],[2+.2,.12,0,-1.3/2-.06],[.12,1.3,-2/2-.06,0],[.12,1.3,2/2+.06,0]].forEach(([A,k,W,Y])=>h.add(Ie(A,k,.06,.025,2),{m:I(-1.8+W,N+Y,$+.01),color:_})),[-1,1].forEach(A=>{let k=-1.8+A*1.5,W=s+2.25;h.add(Ie(.1,.22,.03,.02,1),{m:I(k,W,f-.02),color:L}),h.add(new Be(.008,.008,.18,5),{m:I(k,W+.02,f-.1,Math.PI/2,0,0),color:L}),h.add(new Be(.06,.09,.13,14,1,!0),{m:I(k,W+.16,f-.19),color:S(.9,.84,.7,"fabric")}),g.add(new Dt(.03,8,6),{m:I(k,W+.12,f-.19),color:H})})}let xt=new rt(h.geometry(),r);xt.receiveShadow=!0,xt.castShadow=!0,xt.layers.enable(5);let ae=new rt(g.geometry(),new un({vertexColors:!0,toneMapped:!1}));i.add(xt,ae);let le=new vi(16761466,0,90,1.2);le.position.set(Se.x,Se.y-.45,Se.z),i.add(le),le.castShadow=!0,le.shadow.autoUpdate=!1,le.shadow.mapSize.set(512,512),le.shadow.camera.near=.5,le.shadow.camera.far=90,le.shadow.bias=-.003,le.shadow.normalBias=.25,le.shadow.camera.layers.set(5),le.shadow.needsUpdate=!0;let xe=new vi(16766112,0,70,1.2);xe.position.set(-.8,s+2,-4.6),i.add(xe);let ye={set intensity(m){le.intensity=m*1.2,xe.intensity=m*.75},get intensity(){return le.intensity/1.25}},z=(()=>{let m=new Ht,b=C=>{let N=.9+v(C.x*40,C.y*40,C.z*40)*.2;return[N,N,N]};return[-1,1].forEach(C=>m.add(new Ne(.1,1,1),{m:I(C*.45,0,0),color:b,tip:()=>1})),m.add(new Ne(1,1,.08),{m:I(0,0,.47),color:b,tip:()=>1}),m.add(new Ne(.82,.94,.94),{m:I(0,0,-.04),color:C=>{let N=.86+Math.sin(C.x*140)*.04;return[N,N*.96,N*.86]},tip:()=>0}),[.3,-.3,.36,-.36].forEach(C=>m.add(new Ne(1.01,.025,.02),{m:I(0,C,.515),color:S(.78,.62,.3),tip:()=>0})),m.add(new Ne(.7,.16,.01),{m:I(0,.1,.516),color:S(.12,.1,.08),tip:()=>0}),m.geometry()})(),Le=new cn({vertexColors:!0});Le.onBeforeCompile=m=>{m.vertexShader=m.vertexShader.replace("#include <common>",`#include <common>
attribute float aTip;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
        #ifdef USE_COLOR
          vColor.rgb *= color;
        #endif
        #ifdef USE_INSTANCING_COLOR
          vColor.rgb *= mix(vec3(1.0), instanceColor.rgb, aTip);
        #endif`)};let ve=null,B=[],y=[],Z="",Q=new at,j=new _t,oe=new F,ce=new F,K=[],ie=m=>{let b=2166136261;for(let C=0;C<m.length;C++)b=Math.imul(b^m.charCodeAt(C),16777619);return(b>>>0)%1e4/1e4},pe=(m,b)=>window.MEOW_I18N?window.MEOW_I18N.t(m):b,Ee=m=>{let b=document.createElement("canvas");b.width=256,b.height=64;let C=b.getContext("2d"),N=C.createLinearGradient(0,0,0,64);N.addColorStop(0,"#d9b968"),N.addColorStop(1,"#8c6a2c"),C.fillStyle=N,C.fillRect(0,0,256,64),C.strokeStyle="rgba(60,40,10,.8)",C.lineWidth=4,C.strokeRect(4,4,248,56),C.fillStyle="#2a1c08",C.font='600 30px "Josefin Sans", system-ui, sans-serif',C.textAlign="center",C.textBaseline="middle";let $=m;for(;C.measureText($).width>228&&$.length>2;)$=$.slice(0,-2)+"\u2026";C.fillText($,128,34);let _=new Jn(b);return _.colorSpace=_n,_.anisotropy=4,_},_e=new Ht,Te=(m,b,C)=>{let N=Math.floor(C*5),$=m.rowY0+b*m.rowH,_=(W,Y,ge)=>je(m,W,Y,ge),A=(W,Y,ge,Re,be=1,De=1,Ve=1)=>{let st=_(Y,ge,.02);_e.add(W,{m:new at().compose(st,new _t().setFromAxisAngle(new F(0,1,0),m.ry),new F(be,De,Ve)),color:Re})},k=(C*1.3%1-.5)*1;N===0?(A(new Be(.06,.09,.26,12),k,$+.13,S(.55,.6,.58)),A(new Dt(.07,10,8),k+.3,$+.07,S(.7,.55,.35))):N===1?(A(new Ne(.3,.16,.22),k,$+.08,x(.5)),A(new Ne(.3,.02,.22),k,$+.165,S(.62,.5,.28,"metal"))):N===2?(A(new Dt(.06,10,8),k,$+.07,S(.25,.24,.24),1,1.2,.9),A(new Dt(.04,10,8),k,$+.17,S(.25,.24,.24)),[-1,1].forEach(W=>A(new $t(.015,.035,4),k+W*.022,$+.215,S(.25,.24,.24)))):N===3?(A(new Be(.05,.05,.02,12),k,$+.01,S(.62,.5,.28,"metal")),A(new Be(.02,.02,.14,8),k,$+.09,S(.88,.84,.74,"paper"))):(A(new Ne(.02,.24,.18),k,$+.12,x(.4)),A(new Ft(.14,.18),k+.012,$+.12,S(.75,.72,.62)))},Ce=null,Fe=()=>{ve&&(i.remove(ve),ve.dispose()),B.forEach(A=>{i.remove(A),A.material.map.dispose(),A.material.dispose()}),Ce&&(i.remove(Ce),Ce.geometry.dispose()),B=[],K.length=0;let m=30,b=[],C=new Map;y.forEach(A=>{let k=(A.tag||"").trim();C.has(k)||(C.set(k,[]),b.push(k)),C.get(k).push(A)});let N=[];b.forEach(A=>{let k=C.get(A);for(let W=0;W<k.length;W+=m)N.push({tag:A,list:k.slice(W,W+m),first:W===0})});let $=[];Ke.forEach(A=>ue[A].pref.forEach(k=>$.push([ue[A],k])));let _=new Set;N.forEach((A,k)=>{let W=$[k];if(!W)return;let[Y,ge]=W;_.add(Y.x+","+Y.z+","+ge);let Re=Y.rowY0+ge*Y.rowH,be=A.list.map(Xe=>({t:.035+ie(Xe.url)*.04,h:.24+ie(Xe.url+"h")*.11,d:.17+ie(Xe.title||"x")*.05})),De=be.reduce((Xe,mt)=>Xe+mt.t+.004,0),Ve=Y.w-.16,st=De>Ve?Ve/De:1,ot=-Y.w/2+.08;if(A.list.forEach((Xe,mt)=>{let et=be[mt],vt=et.t*st,Et=je(Y,ot+vt/2,Re+et.h/2+.002,-Kt/2+.03+et.d/2),nn=new _t().setFromAxisAngle(new F(0,1,0),Y.ry);K.push({link:Xe,tag:A.tag,home:{p:Et,q:nn,s:new F(vt,et.h,et.d)},cur:{p:Et.clone(),q:nn.clone()},state:"shelf",from:null,t0:0,color:Ju[Math.floor(ie(Xe.url+"c")*Ju.length)]}),ot+=vt+.004}),A.first){let Xe=new un({map:Ee("#"+(A.tag||pe("untagged","no tag"))),toneMapped:!1}),mt=new rt(new Ft(.34,.085),Xe);mt.position.copy(je(Y,0,Re+.006,Kt/2+.006)),mt.quaternion.setFromAxisAngle(new F(0,1,0),Y.ry),mt.position.y-=.035,mt.userData.tag=A.tag,i.add(mt),B.push(mt)}}),_e.clear(),$.forEach(([A,k],W)=>{if(_.has(A.x+","+A.z+","+k))return;let Y=ie("o"+W);Y<.55&&Te(A,k,Y/.55)}),Ce=new rt(_e.geometry(),r),i.add(Ce),ve=new Yn(z,Le,Math.max(1,K.length)),ve.count=K.length,ve.frustumCulled=!1,K.forEach((A,k)=>{Q.compose(A.home.p,A.home.q,A.home.s),ve.setMatrixAt(k,Q),ve.setColorAt(k,new Ye(A.color))}),ve.instanceColor&&(ve.instanceColor.needsUpdate=!0),i.add(ve)},we={mode:"idle",open:-1,openT0:0,closing:!1,ring:null,ringT0:0,hover:null},te=document.createElement("div");te.className="book-tip",document.body.appendChild(te);let Pe=document.createElement("div");Pe.className="book-page",Pe.innerHTML='<div class="bp-left"><small class="bp-tag"></small><strong class="bp-title"></strong><span class="bp-host"></span><em class="bp-go"></em></div><div class="bp-right"><img alt=""><span class="bp-wait"></span></div>',document.body.appendChild(Pe);let fe=Pe.querySelector("img"),Ue=Pe.querySelector(".bp-wait"),He=m=>{try{return new URL(m).hostname.replace(/^www\./,"")}catch{return m}},Ae=(m,b)=>"https://s.wordpress.com/mshots/v1/"+encodeURIComponent(m)+"?w=800&h=600"+(b?"&r="+b:""),nt=0,Ze=m=>{clearTimeout(nt),fe.classList.remove("ready"),Ue.textContent=pe("loadingPreview","\u2026");let b=0,C=()=>{fe.onload=()=>{fe.classList.add("ready"),Ue.textContent="",fe.naturalWidth<600&&b<3&&(b++,nt=setTimeout(C,2500))},fe.onerror=()=>{Ue.textContent=pe("noPreview","No preview")},fe.src=Ae(m,b)};C()},it=(()=>{let m=new on,b=new cn({color:7220522}),C=new un({color:15722192}),N=new on,$=new on,_=new Ne(1,1.32,.03).translate(-.5,0,0),A=new Ne(1,1.32,.03).translate(.5,0,0),k=new Ne(.96,1.26,.06).translate(-.49,0,.045),W=new Ne(.96,1.26,.06).translate(.49,0,.045);return N.add(new rt(_,b),new rt(k,C)),$.add(new rt(A,b),new rt(W,C)),m.add(N,$),m.visible=!1,i.parent.add(m),{g:m,left:N,right:$,leather:b}})(),wt=.16,ne=(m,b,C)=>{let N=K[m];b.copy(N.cur.p).applyMatrix4(i.matrixWorld),i.getWorldQuaternion(C).multiply(N.cur.q)},Ge=(m,b,C,N=0)=>{b.set(0,N,-m).applyQuaternion(t.quaternion).add(t.position),C.copy(t.quaternion)},We=m=>m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2,yt=(m,b)=>{we.open>=0&&gn(b),we.open=m,we.openT0=b,we.closing=!1;let C=K[m];C.state="out",it.leather.color.set(C.color),Pe.querySelector(".bp-tag").textContent="#"+(C.tag||pe("untagged","no tag")),Pe.querySelector(".bp-title").textContent=C.link.title,Pe.querySelector(".bp-host").textContent=He(C.link.url),Pe.querySelector(".bp-go").textContent=pe("bookGo","Click the book to visit \u2197"),Ze(C.link.url),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!0);let N=new F,$=new _t;ne(m,N,$),we.openFrom={p:N,q:$}},gn=m=>{we.open<0||we.closing||(we.closing=!0,we.openT0=m,Pe.classList.remove("show"),window.MEOW_SOUND&&window.MEOW_SOUND.page&&window.MEOW_SOUND.page(!1))},Nn=(m,b)=>{if(we.ring===m){Wn(b);return}we.ring!==null&&Wn(b),we.ring=m,we.ringT0=b;let C=0;K.forEach((N,$)=>{N.tag===m&&(N.ringI=C++,N.state!=="out"&&(N.state="toRing",N.fromSc=N.sc||1,N.from={p:N.cur.p.clone(),q:N.cur.q.clone()},N.t0=b+N.ringI*45))}),we.ringN=C,window.MEOW_SOUND&&window.MEOW_SOUND.whoosh&&window.MEOW_SOUND.whoosh()},Wn=m=>{we.ring!==null&&(K.forEach(b=>{b.tag===we.ring&&(b.state==="ring"||b.state==="toRing")&&(b.state="toShelf",b.fromSc=b.sc||1,b.from={p:b.cur.p.clone(),q:b.cur.q.clone()},b.t0=m+(b.ringI||0)*30)}),we.ring=null)},Ct=new _t,Zt=new _t,ln=new F,rn=new F,ei=(m,b,C,N)=>{let $=Math.max(1,we.ringN),_=Math.max(15,$*1.3),A=m.ringI/$*Math.PI*2+b*.12;ln.set(t.position.x+Math.cos(A)*_,t.position.y-.4+Math.sin(b*1.3+m.ringI)*.25,t.position.z+Math.sin(A)*_);let k=Math.atan2(t.position.x-ln.x,t.position.z-ln.z);return Zt.setFromEuler(new jt(0,k-Math.PI/2,Math.sin(b*.9+m.ringI)*.08)),rn.copy(ln),i.worldToLocal(rn),C.copy(rn),i.getWorldQuaternion(Ct).invert(),N.copy(Ct).multiply(Zt),C},Ai=2.2,ti=(m,b)=>{if(!ve)return;let C=!1,N=new F,$=new _t;if(K.forEach((_,A)=>{if(_.state==="shelf")return;let k=1;if(_.state==="out"){ce.set(0,0,0),Q.compose(_.cur.p,_.cur.q,ce),ve.setMatrixAt(A,Q),C=!0;return}if(_.state==="ring")ei(_,m,_.cur.p,_.cur.q),k=Ai;else{let W=Math.max(0,Math.min(1,(b-_.t0)/900)),Y=We(W),ge=_.state==="toRing"?ei(_,m,N,$):_.home.p,Re=_.state==="toRing"?$:_.home.q;_.cur.p.copy(_.from.p).lerp(ge,Y),_.cur.p.y+=Math.sin(Math.PI*Y)*.4*(_.state==="toRing"?1:.6),_.cur.q.copy(_.from.q).slerp(Re,Y);let be=_.fromSc||1;k=be+((_.state==="toRing"?Ai:1)-be)*Y,W>=1&&(_.state==="toRing"?_.state="ring":(_.state="shelf",_.cur.p.copy(_.home.p),_.cur.q.copy(_.home.q),k=1))}ce.copy(_.home.s).multiplyScalar(k),Q.compose(_.cur.p,_.cur.q,ce),ve.setMatrixAt(A,Q),C=!0,_.sc=k}),C&&(ve.instanceMatrix.needsUpdate=!0,ve.boundingSphere=null),we.open>=0){let _=K[we.open],A=Math.min(1,(b-we.openT0)/(we.closing?700:1100)),k=new F,W=new _t;Ge(4.2,k,W,-.15);let Y,ge;we.closing?(Y=1-We(Math.max(0,(A-.35)/.65)),ge=1-We(Math.min(1,A/.45))):(Y=We(Math.min(1,A/.6)),ge=We(Math.max(0,(A-.45)/.55)));let Re=we.openFrom;it.g.position.copy(Re.p).lerp(k,Y),it.g.quaternion.copy(Re.q).slerp(W,Y);let be=(_.sc||1)*hn,De=new F(_.home.s.z*be,_.home.s.y*be/1.32,_.home.s.z*be),Ve=new F(1.6,1.6,1.6);it.g.scale.copy(De).lerp(Ve,Y),it.left.rotation.y=Math.PI*(1-ge)*.999,it.right.rotation.y=0,it.g.visible=!0,!we.closing&&A>=1?(P(it.g,Pe),Pe.classList.add("show")):we.closing||Pe.classList.remove("show"),we.closing&&A>=1&&(it.g.visible=!1,_.state=we.ring===_.tag?"toRing":"toShelf",_.from={p:new F,q:new _t},_.from.p.copy(it.g.position),i.worldToLocal(_.from.p),i.getWorldQuaternion(Ct).invert(),_.from.q.copy(Ct).multiply(it.g.quaternion),_.t0=b,_.fromSc=1,we.open=-1,we.closing=!1)}},hn=4.5,Dn=new F,P=(m,b)=>{let C=1e9,N=1e9,$=-1e9,_=-1e9;[[-.97,.63],[.97,.63],[-.97,-.63],[.97,-.63]].forEach(([A,k])=>{Dn.set(A,k,.08).applyMatrix4(m.matrixWorld).project(t);let W=(Dn.x*.5+.5)*innerWidth,Y=(-Dn.y*.5+.5)*innerHeight;C=Math.min(C,W),$=Math.max($,W),N=Math.min(N,Y),_=Math.max(_,Y)}),b.style.left=C+"px",b.style.top=N+"px",b.style.width=$-C+"px",b.style.height=_-N+"px"},q=m=>{if(!ve)return null;if(we.open>=0&&it.g.visible&&m.intersectObject(it.g,!0)[0])return{type:"open"};let b=m.intersectObject(ve,!1)[0],C=B.length?m.intersectObjects(B,!1)[0]:null;return C&&(!b||C.distance<b.distance)&&C.distance<40?{type:"label",tag:C.object.userData.tag}:b&&b.distance<45&&K[b.instanceId]&&K[b.instanceId].state!=="out"?{type:"book",i:b.instanceId}:null};return{sync(){let m=window.MEOW_LINKS_DATA||[],b=m.map(C=>C.url+"|"+C.tag+"|"+C.title).join(`
`);b!==Z&&(Z=b,y=m.slice(),we.open=-1,we.ring=null,it.g.visible=!1,Pe.classList.remove("show"),Fe())},update:ti,get busy(){return we.open>=0||we.ring!==null},hover(m,b){var $,_;let C=b?q(m):null,N=C?C.type+((_=($=C.i)!=null?$:C.tag)!=null?_:""):"";if(N===we.hoverKey)return!!C;if(we.hoverKey=N,!C||C.type==="open")return te.classList.remove("show"),!!C;if(C.type==="book"){let A=K[C.i];te.innerHTML="";let k=document.createElement("strong");k.textContent=A.link.title;let W=document.createElement("small");W.textContent="#"+(A.tag||pe("untagged","no tag"))+" \xB7 "+He(A.link.url),te.append(k,W)}else{let A=K.filter(Y=>Y.tag===C.tag).length;te.innerHTML="";let k=document.createElement("strong");k.textContent="#"+(C.tag||pe("untagged","no tag"))+"  \xB7  "+A;let W=document.createElement("small");W.textContent=we.ring===C.tag?pe("tagBack","Click: put them back"):pe("tagRing","Click: books fly around you"),te.append(k,W)}return te.classList.add("show"),!0},click(m,b){let C=q(m);if(we.open>=0&&!we.closing){if(C&&C.type==="open"){let N=K[we.open];return window.open(N.link.url,"_blank","noopener"),!0}if(gn(b),!C||C.type==="open")return!0}return C?C.type==="label"?(Nn(C.tag,b),!0):C.type==="book"?(yt(C.i,b),!0):!1:we.ring!==null?(Wn(b),!0):!1},back(m){return we.open>=0&&!we.closing?(gn(m),!0):we.ring!==null?(Wn(m),!0):!1},_open(m){yt(m,performance.now())},_ring(m){Nn(m,performance.now())},get _n(){return K.length},shadowLight:le,glowSpots:{CH:Se,SLAB:u,F:s,MZ:o,Z0:d,Z1:f,C:a},reset(m){we.open>=0&&gn(m),we.ring!==null&&Wn(m),te.classList.remove("show"),we.hoverKey=""},lampLight:ye}}var St={x:112,z:-119,y:4.5,yaw:-Math.PI/2,S:4.5};function id({scene:i,shared:e,U:t,camera:n}){let r=St.S,s=6.4,o=5,a=.17,c=.3145,l=8,d=2.62,f=1.9,u=-1.95,h=-.75,g=2.05,v=o/2+2.6,x=11,p={x:1.7,z:-2},E=new Ht,R=new Ht,w=new Ht,S=new Ht,T=(P,q,m)=>Xt(P,q,m),D=(P,q=1)=>Vt("wood",m=>{let b=P*(.88+T(m.x*3,m.y*9,m.z*3)*.24)*q,C=T(m.x*.7,m.y*2,m.z*.7);return[b*(1.02+C*.06),b*(.79+C*.03),b*(.56-C*.04)]}),M=P=>Vt("log",(q,m)=>{if(P==="x"?Math.abs(m.x)>.9:Math.abs(m.z)>.9){let $=P==="x"?Math.hypot(q.y%1,q.z):Math.hypot(q.y%1,q.x),_=.68+Math.sin($*90)*.04;return[_*1.02,_*.86,_*.66]}let C=.5+T(q.x*2.5,q.y*8,q.z*2.5)*.2+Math.sin((P==="x"?q.x:q.z)*23)*.015,N=T(Math.floor(q.y/.31)*3.7,P==="x"?1:2,.5);return N<.25?[C*.95,C*.82,C*.68]:N>.75?[C*1.08,C*.8,C*.52]:[C,C*.79,C*.58]}),L=Vt("stone",P=>{let q=.45+T(P.x*5,P.y*5,P.z*5)*.25,m=T(P.x*2,P.y*2,P.z*2);return[q*(.96+m*.08),q*.95,q*(.9+(1-m)*.08)]}),O=(P,q,m,b)=>b?Vt(b,()=>[P,q,m]):()=>[P,q,m],H=(P,q,m)=>Vt("metal",()=>[P,q,m]),G=P=>Vt("fabric",P),X=(P,q,m)=>new Ne(P,q,m),U=Math.PI*2,V=(P,q)=>m=>(P==="z"?(m.z-q)*Math.sign(q):(m.x-q)*Math.sign(q))>0?1:0,ee={front:[[u,h,0,g],[.75,1.95,.95,1.95]],back:[],left:[],right:[[-.3,.9,.95,1.95]]},J=(P,q,m,b)=>{let C=[[P,q]];return b.forEach(([N,$,_,A])=>{if(!(_<m+a-.02&&A>m-a+.02))return;let k=[];C.forEach(([W,Y])=>{$<=W||N>=Y?k.push([W,Y]):(N>W&&k.push([W,N]),$<Y&&k.push([$,Y]))}),C=k}),C};for(let P=0;P<l;P++){let q=a+P*c,m=a+c/2+P*c;[["front",o/2],["back",-o/2]].forEach(([b,C])=>{J(-s/2-.3,s/2+.3,q,ee[b]).forEach(([N,$])=>{E.add(new Be(a,a*.97,$-N,16,1),{m:I((N+$)/2,q,C,0,0,Math.PI/2),color:M("x"),tip:V("z",C)})})}),m+a<d+.12&&[["left",-s/2],["right",s/2]].forEach(([b,C])=>{J(-o/2-.3,o/2+.3,m,ee[b]).forEach(([N,$])=>{E.add(new Be(a,a*.97,$-N,16,1),{m:I(C,m,(N+$)/2,Math.PI/2,0,0),color:M("z"),tip:V("x",C)})})})}for(let P=0;P<4;P++){let q=P<2?s:o,m=P<2?P?-o/2:o/2:P===2?-s/2:s/2;for(let b=-q/2-.2;b<q/2+.2;b+=.42){if(P===0&&b>u-.2&&b<h)continue;let C=.38+T(b,P,0)*.08,N=.16+T(b,P,3)*.08,$=P<2?I(b+.2,-.02+N/2-.06,m,0,(T(b,P,5)-.5)*.2,0,C,N,.42):I(m,-.02+N/2-.06,b+.2,0,(T(b,P,5)-.5)*.2,0,.42,N,C);E.add(new Ne(1,1,1),{m:$,color:L,tip:()=>1})}}E.add(new Ne(h-u+.1,.08,.42),{m:I((u+h)/2,.06,o/2),color:D(.5),tip:()=>0}),[-1,1].forEach(P=>{let q=P*o/2,m=[-s/2-.05,d,q],b=[s/2+.05,d,q],C=[0,d+f,q],N=Vt("wood",$=>{let _=.48+T($.x*9,0,P)*.1,A=Math.abs(($.x+10)%.24-.12)<.012?.75:1;return[_*A,_*.8*A,_*.6*A]});E.tris(P>0?[m,b,C]:[b,m,C],N,()=>0),R.tris(P>0?[b,m,C]:[m,b,C],$=>{let _=N($);return[_[0]*.85,_[1]*.85,_[2]*.85]})});let de=s/2+.6,re=f+.45,se=Math.atan2(re,de),me=Math.hypot(de,re);[-1,1].forEach(P=>{E.add(new Ne(me,.1,o+1.3,3,1,6),{m:I(P*de/2,d+f-re/2+.02,0,0,0,-P*se),color:D(.36),tip:(m,b)=>b.y>0?1:0});let q=9;for(let m=0;m<q;m++){let b=m/q,C=me/q+.12,N=P*(de*(b+.5/q)),$=d+f-re*(b+.5/q)+.1;E.add(new Ne(C,.045,o+1.3,1,1,10),{m:I(N,$,0,0,0,-P*(se+.05)),color:Vt("shingle",_=>{let A=Math.floor((_.z+5)*3.3),k=.3+T(A,m,P)*.12+m%2*.02;return[k*1.02,k*.9,k*.8]}),tip:()=>1})}E.add(new Ne(.05,.22,o+1.35),{m:I(P*(de+.02),d+f-re-.02,0),color:D(.45),tip:()=>0}),[-1,1].forEach(m=>E.add(new Ne(me+.1,.22,.05),{m:I(P*de/2,d+f-re/2+.02,m*(o/2+.66),0,0,-P*se),color:D(.45),tip:()=>0}))}),E.add(new Ne(.34,.16,o+1.4),{m:I(0,d+f+.12,0,0,0,Math.PI/4),color:D(.32),tip:()=>1});for(let P=0;P<8;P++)E.add(new Ne(.86+P%2*.04,.3,.86+(P+1)%2*.04),{m:I(p.x,d+.15+P*.3,p.z,0,(T(P,1,1)-.5)*.08,0),color:L,tip:()=>1});E.add(new Ne(1.05,.08,1.05),{m:I(p.x,d+.15+8*.3-.06,p.z),color:L,tip:()=>1});let ze=new F(p.x,d+.2+8*.3,p.z),Oe=(()=>{let P=new Ft(.32,1.15,16,12),q=P.attributes.position;for(let m=0;m<q.count;m++){let b=q.getX(m),C=q.getY(m),N=Math.exp(-((C+.12)**2)*18);q.setXYZ(m,b*(1-N*.45)+N*.05,C,Math.sin((b+.16)*58)*(.02+N*.015)+.02)}return P.computeVertexNormals(),P})(),pt=(P,q,m)=>{let b=m==="front"?0:Math.PI/2,C=(W,Y,ge)=>m==="front"?[P+W,q+Y,o/2+ge]:[s/2+ge,q+Y,P-W],N=(W,Y,ge,Re,be,De,Ve,st,ot=0)=>{let[Xe,mt,et]=C(be,De,Ve);W.add(new Ne(Y,ge,Re),{m:I(Xe,mt,et,0,b,0),color:st,tip:()=>ot})},$=D(.55);N(E,1.32,.09,.4,0,.53,0,$),N(E,1.32,.09,.4,0,-.53,0,$),N(E,.09,1.1,.4,-.62,0,0,$),N(E,.09,1.1,.4,.62,0,0,$),N(E,.05,1,.06,0,0,0,$),N(E,1.2,.05,.06,0,0,0,$),N(E,1.45,.06,.3,0,-.6,.2,$,1),[-1,1].forEach(W=>N(E,.55,1.05,.04,W*.98,0,.27,Y=>{let ge=.42+T(Y.x*9,Y.y*2,Y.z*9)*.1,Re=Math.abs((Y.y+5)%.14-.07)<.012?.75:1;return[ge*.9*Re,ge*.95*Re,ge*.92*Re]}));let[_,A,k]=C(0,0,0);S.add(new Ft(1.2,1),{m:I(_,A,k,0,b,0),color:O(1,1,1)}),S.add(new Ft(1.2,1),{m:I(_,A,k,0,b+Math.PI,0),color:O(1,1,1)}),[-1,1].forEach(W=>{let[Y,ge,Re]=C(W*.78,.02,-.24),be=G(De=>{let Ve=.8+T(De.x*30,De.y*4,De.z*30)*.06;return[Ve,Ve*.95,Ve*.85]});[!1,!0].forEach(De=>R.add(Oe,{m:I(Y,ge,Re,0,b+Math.PI,0),color:be,flip:De}))}),N(R,1.9,.03,.03,0,.62,-.24,O(.3,.25,.2))};pt(1.35,1.45,"front"),pt(.3,1.45,"right"),[[u-.05,.08],[h+.05,.08]].forEach(([P,q])=>E.add(new Ne(q,g,.42),{m:I(P,g/2,o/2),color:D(.55),tip:()=>0})),E.add(new Ne(h-u+.3,.12,.44),{m:I((u+h)/2,g+.05,o/2),color:D(.55),tip:()=>1});for(let P=0;P<11;P++){let q=-3.25+P*.6+.3;E.add(new Ne(.57,.08,2.2),{m:I(q,.16,o/2+1.25,0,(T(P,2,2)-.5)*.01,0),color:D(.52+P%3*.04),tip:()=>1})}E.add(new Ne(6.65,.14,.08),{m:I(.05,.1,o/2+2.36),color:D(.45),tip:()=>0}),E.add(new Ne(1.4,.07,.3),{m:I((u+h)/2,.05,o/2+2.55),color:D(.5),tip:()=>1});let Se=-3.4,Qe=.6;E.add(new Ne(Qe-Se,.08,2.55,4,1,4),{m:I((Se+Qe)/2,2.32,o/2+1.3,-.12,0,0),color:(P,q)=>{let m=(q.y<0?.62:.32)+T(P.x*3,0,P.z*9)*.1;return q.y<0?[m,m*.8,m*.6]:[m,m*.93,m*.88]},tip:(P,q)=>q.y>0?1:0}),[Se+.25,Qe-.25].forEach(P=>{E.add(new Ne(.14,2.2,.14),{m:I(P,1.1,o/2+2.2),color:D(.5),tip:()=>0}),E.add(new Ne(.08,.7,.08),{m:I(P,1.95,o/2+1.95,.75,0,0),color:D(.5),tip:()=>0})}),E.add(new Ne(Qe-Se,.14,.14),{m:I((Se+Qe)/2,2.12,o/2+2.2),color:D(.45),tip:()=>1}),E.add(new Ne(1.4,.06,.4),{m:I(1.45,.47,o/2+.48),color:D(.55),tip:()=>1}),[[.85],[2.05]].forEach(([P])=>E.add(new Ne(.06,.3,.36),{m:I(P,.32,o/2+.48),color:D(.45),tip:()=>0})),E.add(new Ne(.04,.04,.3),{m:I(-.5,2,o/2+.3),color:H(.15,.15,.15),tip:()=>0}),E.add(new Ne(.2,.04,.2),{m:I(-.5,1.98,o/2+.42),color:H(.15,.15,.15),tip:()=>1}),w.add(new Ne(.15,.22,.15),{m:I(-.5,1.84,o/2+.42),color:O(1,1,1)}),E.add(new Be(.32,.29,.85,14),{m:I(s/2+.55,.42,o/2-.45),color:P=>{let q=.45+Math.sin(Math.atan2(P.z,P.x)*14)*.03;return[q,q*.8,q*.6]},tip:(P,q)=>q.y>.5?1:0}),[.12,.72].forEach(P=>E.add(new Be(.33,.33,.04,14,1,!0),{m:I(s/2+.55,P,o/2-.45),color:H(.2,.2,.21),tip:()=>0}));for(let P=0;P<4;P++)for(let q=0;q<9-P;q++){let m=-1.6+q*.19+P*.09,b=.11+P*.18;E.add(new Be(.09+T(q,P,1)*.03,.1,.7,7),{m:I(-s/2-.58,b,m,0,0,Math.PI/2),color:(C,N)=>Math.abs(N.x)>.9?[.74,.6,.42]:D(.45)(C),tip:()=>1})}E.add(new Be(.3,.34,.5,10),{m:I(-s/2-1.4,.25,1.4),color:(P,q)=>q.y>.5?[.7,.58,.42]:D(.45)(P),tip:(P,q)=>q.y>.5?1:0}),E.add(new Be(.025,.03,.75,6),{m:I(-s/2-1.3,.75,1.4,0,0,-.55),color:D(.62),tip:()=>0}),E.add(new Ne(.2,.12,.03),{m:I(-s/2-1.48,.52,1.4,0,0,-.55),color:H(.35,.36,.38),tip:()=>0});for(let P=0;P<x/.5;P++)E.add(new Ne(1.8,.08,.44),{m:I(-1.3+(P*7%5-2)*.01,.2-P*.012,v+P*.5,0,(P*3%5-2)*.012,0),color:D(.5+P*11%9/60),tip:()=>1});for(let P=0;P<=x/2.2;P++)[-1,1].forEach(q=>{E.add(new Be(.09,.09,2.6,6),{m:I(-1.3+q*.85,-1.1-P*.03,v+P*2.2),color:D(.36),tip:()=>0})});[-1,1].forEach(P=>{E.add(new Be(.06,.06,1.3,6),{m:I(-1.3+P*.85,.85,v+x-.4),color:D(.36),tip:()=>0}),w.add(new Ne(.16,.2,.16),{m:I(-1.3+P*.85,1.6,v+x-.4),color:O(1,1,1)})});for(let P=0;P<l-1;P++){let q=a+P*c+c/2;[["front",o/2],["back",-o/2]].forEach(([m,b])=>J(-s/2+.05,s/2-.05,q,ee[m]).forEach(([C,N])=>{E.add(new Ne(N-C,.035,.02),{m:I((C+N)/2,q,b+Math.sign(b)*(a-.03)),color:$=>{let _=.72+T($.x*9,$.y*30,0)*.12;return[_,_*.95,_*.86]},tip:()=>1})})),[["left",-s/2],["right",s/2]].forEach(([m,b])=>J(-o/2+.05,o/2-.05,q+c/2,ee[m]).forEach(([C,N])=>{E.add(new Ne(.02,.035,N-C),{m:I(b+Math.sign(b)*(a-.03),q+c/2,(C+N)/2),color:$=>{let _=.72+T(0,$.y*30,$.z*9)*.12;return[_,_*.95,_*.86]},tip:()=>1})}))}[-1,1].forEach(P=>E.add(new Be(.06,.06,o+1.3,8,1,!0,0,Math.PI),{m:I(P*(de+.06),d+f-re-.14,0,Math.PI/2,0,P>0?Math.PI:0),color:H(.4,.4,.42),tip:()=>0})),E.add(new Be(.035,.035,d+f-re-.2,8),{m:I(s/2+.6,(d+f-re)/2+.4,o/2-.45-.05),color:H(.4,.4,.42),tip:()=>0}),E.add(new Be(.015,.02,.7,6),{m:I(0,d+f+.5,-1.4),color:H(.18,.18,.19),tip:()=>0}),E.add(new Ne(.02,.02,.5),{m:I(0,d+f+.62,-1.4),color:H(.18,.18,.19),tip:()=>0}),E.add(new $t(.05,.1,4),{m:I(0,d+f+.62,-1.15,Math.PI/2,0,0),color:H(.18,.18,.19),tip:()=>0});{let P=(q,m,b,C,N=1,$=1,_=1,A=0)=>E.add(q,{m:I(0,d+f+.88+b,-1.4+C,0,Math.PI/2,A,N,$,_),color:H(.16,.16,.17),tip:()=>0});P(new Ne(.28,.13,.02),0,0,0),P(new Ne(.11,.1,.02),0,.11,-.13),[-1,1].forEach(q=>P(new $t(.03,.06,3),0,.19,-.13+q*.035)),P(new Ne(.03,.2,.02),0,.12,.16,1,1,1,.4)}let ue=(P,q,m)=>{let b=new at().compose(new F(P,.82,q),new _t().setFromAxisAngle(new F(0,1,0),m),new F(1,1,1));E.add(new Ne(1.3,.2,.24),{m:b.clone().multiply(I(0,0,.12)),color:D(.45),tip:()=>0}),E.add(new Ne(1.24,.02,.2),{m:b.clone().multiply(I(0,.09,.12)),color:()=>[.25,.18,.12],tip:()=>1});let C=[[.75,.3,.3],[.85,.7,.35],[.75,.62,.8],[.9,.88,.85]];for(let N=0;N<9;N++){let $=-.55+N*.14,_=.1+T(N,P,1)*.1;E.add(new Be(.006,.006,_,4),{m:b.clone().multiply(I($,.1+_/2,.12+(N%2-.5)*.08)),color:()=>[.3,.42,.24],tip:()=>0}),E.add(new Dt(.03,6,5),{m:b.clone().multiply(I($,.1+_,.12+(N%2-.5)*.08)),color:()=>C[N%4],tip:()=>0})}};ue(1.35,o/2+.2,0),ue(s/2+.2,-.3,Math.PI/2),E.add(new Ne(1,.015,.6),{m:I((u+h)/2,.205,o/2+.55),color:G(P=>Math.floor((P.x+9)*12)%2?[.42,.33,.22]:[.5,.4,.27]),tip:()=>1}),E.add(new Be(.015,.015,1.2,6),{m:I(u-.3,.8,o/2+.25,.08,0,.12),color:D(.6),tip:()=>0}),E.add(new $t(.12,.3,8),{m:I(u-.24,.32,o/2+.24),color:()=>[.68,.58,.36],tip:()=>0}),[[-2.9,0],[-2.75,.32]].forEach(([P,q],m)=>{E.add(new Ne(.48,.32,.4),{m:I(P,.36+q,o/2+1.9,0,m*.3,0),color:b=>{let C=.55+(Math.abs((b.y+9)*9%1-.5)<.1?-.1:0)+T(b.x*9,b.y,b.z*9)*.08;return[C,C*.84,C*.62]},tip:(b,C)=>C.y>.5?1:0})}),E.add(new Be(.05,.06,1.7,8),{m:I(Qe+.6,.85,o/2+2.9),color:D(.4),tip:()=>0}),E.add(new Ne(.2,.05,.2),{m:I(Qe+.6,1.72,o/2+2.9),color:H(.15,.15,.15),tip:()=>1}),w.add(new Ne(.15,.2,.15),{m:I(Qe+.6,1.84,o/2+2.9),color:()=>[1,1,1]}),E.add(new $t(.15,.12,4),{m:I(Qe+.6,2,o/2+2.9,0,Math.PI/4,0),color:H(.15,.15,.15),tip:()=>1});for(let P=0;P<6;P++){let q=(u+h)/2-1.6-P*.65+Math.sin(P*1.7)*.2,m=o/2+2.9+P*.35;E.add(new Be(.28+T(P,3,3)*.1,.3,.06,9),{m:I(q,0,m,0,P,0,1,1,.8),color:L,tip:()=>1})}let he=s/2-a,Me=o/2-a;for(let P=-he,q=0;P<he-.01;P+=.2,q++){let m=Vt("wood",N=>{let $=(.5+q%4*.025)*(.92+T(N.x*4,0,N.z*1.2)*.16)*(Math.abs((N.z+9+q*.37)%1.6-.8)<.01?.7:1);return[$,$*.8,$*.6]}),b=P+.1;(b>Je.x0&&b<Je.x1?[[-Me-.05,Je.bottom],[Je.top,Me+.05]]:[[-Me-.05,Me+.05]]).forEach(([N,$])=>{$-N>.02&&R.add(new Ne(.195,.06,$-N),{m:I(b,.09,(N+$)/2),color:m})})}for(let P=Je.bottom;P<=1.5;P+=.55)R.add(new Ne(.05,.9,.05),{m:I(Je.x0-.02,.57,P),color:D(.5)});R.add(new Ne(.07,.06,1.5-Je.bottom+.05),{m:I(Je.x0-.02,1.04,(Je.bottom+1.5)/2),color:D(.55)}),R.add(new Ne(Je.x1-Je.x0+.05,.06,.07),{m:I((Je.x0+Je.x1)/2,1.04,Je.bottom-.02),color:D(.55)}),[Je.x0+.5,Je.x1-.03].forEach(P=>R.add(new Ne(.05,.9,.05),{m:I(P,.57,Je.bottom-.02),color:D(.5)})),R.add(new Ne(.03,.16,.36),{m:I(Je.x0-.05,.86,1.5),color:D(.62)}),R.add(new Be(.17,.17,.04,24),{m:I(-.4,1.8,Me-.03,Math.PI/2,0,0),color:D(.45)}),R.add(new Be(.14,.14,.01,24),{m:I(-.4,1.8,Me-.055,Math.PI/2,0,0),color:Vt("paper",()=>[.9,.87,.8])}),R.add(new Ne(.008,.1,.006),{m:I(-.4,1.83,Me-.065,0,0,.5),color:()=>[.1,.1,.1]}),R.add(new Ne(.008,.12,.006),{m:I(-.4,1.84,Me-.066,0,0,-1.9),color:()=>[.1,.1,.1]}),R.add(new Be(.015,.015,1.5,6),{m:I(p.x,1.62,-Me+.62,0,0,Math.PI/2),color:H(.2,.2,.2)}),[-.5,-.1,.35].forEach((P,q)=>{R.add(new Be(.1-q*.015,.08-q*.012,.13,12),{m:I(p.x+P,1.42,-Me+.64),color:H(.62,.36,.22)}),R.add(new Be(.008,.008,.14,4),{m:I(p.x+P,1.55,-Me+.64),color:H(.2,.2,.2)})}),R.add(new Dt(.12,12,8),{m:I(p.x-.7,.31,-Me+.75,0,0,0,1,.8,1),color:H(.2,.2,.22)}),R.add(new Be(.015,.03,.12,6),{m:I(p.x-.58,.36,-Me+.75,0,0,-.9),color:H(.2,.2,.22)}),[[-.6,.14],[-.5,.2],[.55,.1]].forEach(([P,q])=>R.add(new Be(.025,.025,q,8),{m:I(p.x+P,1.52+q/2,-Me+.4),color:()=>[.9,.86,.76]})),[[.1,[.4,.2,.18]],[.16,[.24,.3,.36]],[.21,[.5,.45,.32]]].forEach(([P,q])=>R.add(new Ne(.05,.22,.16),{m:I(p.x+P,1.63,-Me+.4),color:()=>q})),[-1.1,1.1].forEach(P=>R.add(new Ne(s-.2,.2,.2),{m:I(0,d-.02,P),color:D(.42)})),R.add(new Ne(.2,.22,o+.2),{m:I(0,d+f-.2,0),color:D(.42)}),[-1,1].forEach(P=>[-1.8,0,1.8].forEach(q=>R.add(new Ne(me-.6,.14,.1),{m:I(P*(de-.3)/2,d+f-re*.47-.1,q,0,0,-P*se),color:D(.4)})));let Ke=p;R.add(new Ne(1.95,.12,1),{m:I(Ke.x,.17,-Me+.5),color:L}),[-1,1].forEach(P=>R.add(new Ne(.36,1.25,.7),{m:I(Ke.x+P*.76,.85,-Me+.35),color:L})),R.add(new Ne(1.2,1.25,.2),{m:I(Ke.x,.85,-Me+.1),color:P=>{let q=L(P);return[q[0]*.45,q[1]*.42,q[2]*.4]}}),R.add(new Ne(2,.16,.42),{m:I(Ke.x,1.44,-Me+.4),color:D(.42)});for(let P=0;P<4;P++)R.add(new Ne(1.3-P*.04,.3,.55),{m:I(Ke.x,1.67+P*.3,-Me+.27),color:L});[[-.2,.3],[.15,-.25],[0,.05]].forEach(([P,q])=>R.add(new Be(.07,.08,.7,7),{m:I(Ke.x+P*.4,.3,-Me+.42,0,q,Math.PI/2),color:(m,b)=>Math.abs(b.x)>.8?[.2,.15,.1]:[.18,.13,.1]})),w.add(new Ne(.9,.05,.45),{m:I(Ke.x,.25,-Me+.42),color:O(1,.62,.3)}),R.add(new Be(.28,.24,.32,10,1,!0),{m:I(Ke.x-1.25,.28,-Me+.35),color:D(.5)});for(let P=0;P<5;P++)R.add(new Be(.05,.05,.55,6),{m:I(Ke.x-1.25+(P-2)*.08,.42+P%2*.04,-Me+.35,.2*(P-2),0,Math.PI/2+.1),color:D(.5)});let ke=[],je=11,Tt=()=>(je=je*16807%2147483647,je/2147483647),lt=(P,q,m,b,C,N=!1)=>{let $=document.createElement("canvas");$.width=P,$.height=q,m($.getContext("2d"),P,q);let _=new Jn($);_.colorSpace=_n,_.anisotropy=8;let A=new rt(b,new cn({map:_,color:12432296,alphaTest:N?.5:0}));return A.applyMatrix4(C),A.receiveShadow=!0,ke.push(A),A},ct=(P,q,m,b=.05)=>{for(let C=0;C<q*m*b;C++)P.fillStyle=Tt()<.5?"rgba(0,0,0,0.12)":"rgba(255,245,225,0.09)",P.fillRect(Tt()*q,Tt()*m,1.5,1.5)},It=P=>(q,m,b)=>{q.clearRect(0,0,m,b);let C=16,N=(b/2-2)/C;for(let $=0;$<C;$++){let _=m/2-2-$*N,A=b/2-2-$*N;q.fillStyle=P[($*5+$%3)%P.length],q.beginPath(),q.ellipse(m/2,b/2,Math.max(_,1),Math.max(A,1),0,0,U),q.fill(),q.strokeStyle="rgba(0,0,0,0.22)",q.lineWidth=1.2;let k=Math.PI*(_+A),W=Math.floor(k/7);for(let Y=0;Y<W;Y++){let ge=Y/W*U,Re=m/2+Math.cos(ge)*(_-N/2),be=b/2+Math.sin(ge)*(A-N/2),De=($%2?1:-1)*N*.35;q.beginPath(),q.moveTo(Re-Math.sin(ge)*De-Math.cos(ge)*N*.4,be+Math.cos(ge)*De-Math.sin(ge)*N*.4),q.lineTo(Re+Math.sin(ge)*De+Math.cos(ge)*N*.4,be-Math.cos(ge)*De+Math.sin(ge)*N*.4),q.stroke()}}q.globalCompositeOperation="source-atop",ct(q,m,b,.03),q.globalCompositeOperation="source-over"},gt=(P,q,m)=>{P.clearRect(0,0,q,m);let b=14,C=["#7d3b2e","#c7b48c","#3e5363","#a5622f","#e0d4b6","#5b6b4b"];for(let N=2;N<m-2;N+=4)P.fillStyle="#ddd2b8",P.fillRect(0,N,b+1,2),P.fillRect(q-b-1,N,b+1,2);for(let N=b,$=0;N<q-b;$++){let _=6+Math.floor(Tt()*14);P.fillStyle=C[$%C.length],P.fillRect(N,0,Math.min(_,q-b-N),m),N+=_}for(let N=0;N<m;N+=3)P.fillStyle="rgba(0,0,0,0.1)",P.fillRect(b,N,q-2*b,1);ct(P,q,m,.04)},xt=(P,q,m)=>{let b=["#8b2f2a","#c9b98e","#3f566a","#6d7f52","#b36a35","#e6dcc4","#5a3d52","#a44b3e"],$=q/10,_=m/7;for(let A=0;A<10;A++)for(let k=0;k<7;k++)if(P.fillStyle=b[Math.floor(Tt()*b.length)],P.fillRect(A*$,k*_,$,_),Tt()<.5&&(P.fillStyle=b[Math.floor(Tt()*b.length)],P.beginPath(),P.moveTo(A*$,k*_),P.lineTo(A*$+$,k*_+_),P.lineTo(A*$,k*_+_),P.fill()),Tt()<.3){P.fillStyle="rgba(255,255,255,0.18)";for(let W=0;W<6;W++)P.fillRect(A*$+Tt()*$,k*_+Tt()*_,3,3)}P.strokeStyle="rgba(250,240,220,0.55)",P.setLineDash([4,4]),P.lineWidth=1.2;for(let A=0;A<=10;A++)P.beginPath(),P.moveTo(A*$+3,0),P.lineTo(A*$+3,m),P.stroke();for(let A=0;A<=7;A++)P.beginPath(),P.moveTo(0,A*_+3),P.lineTo(q,A*_+3),P.stroke();P.setLineDash([]),ct(P,q,m,.02)},ae=(P,q,m,b=0)=>new at().compose(new F(P,q,m),new _t().setFromEuler(new jt(-Math.PI/2,b,0,"YXZ")),new F(1,1,1));lt(768,512,It(["#7a3a2c","#b78d5c","#4a5a66","#d8c8a4","#8a5a3a","#5d6a4c","#9e4632"]),new Ft(2.4,1.6),ae(.55,.124,.5),!0),lt(512,320,gt,new Ft(1,.62),ae(-1.95,.124,-.85),!0),lt(512,256,gt,new Ft(.9,.45),ae((u+h)/2,.124,Me-.45),!0);let le=-he+.02,xe=le+1.95,ye=-Me+.02,z=ye+1,Le=(le+xe)/2,ve=(ye+z)/2,B=P=>Wt([[.045,0],[.045,.1],[.032,.13],[.03,P*.4],[.048,P*.47],[.032,P*.55],[.028,P-.12],[.042,P-.08],[.02,P-.05],[.032,P-.02],[0,P]],10);[[le+.05,ye+.05,1.05],[le+.05,z-.05,1.05],[xe-.05,ye+.05,.72],[xe-.05,z-.05,.72]].forEach(([P,q,m])=>R.add(B(m),{m:I(P,.12,q),color:D(.45)})),[[le+.05,.95,.3],[xe-.05,.68,.18]].forEach(([P,q,m])=>{R.add(Ie(.06,.08,z-ye-.1,.02,1),{m:I(P,q,ve),color:D(.5)}),R.add(Ie(.05,.06,z-ye-.1,.015,1),{m:I(P,q-m,ve),color:D(.5)});for(let b=ye+.16;b<z-.1;b+=.11)R.add(new Be(.012,.012,m,6),{m:I(P,q-m/2,b),color:D(.48)})}),[ye+.05,z-.05].forEach(P=>R.add(Ie(xe-le-.1,.14,.05,.015,1),{m:I(Le,.36,P),color:D(.45)})),R.add(X(xe-le-.1,.04,z-ye-.1),{m:I(Le,.33,ve),color:D(.4)}),R.add(Ie(xe-le-.12,.17,z-ye-.08,.06,2),{m:I(Le,.48,ve),color:O(.88,.86,.8,"fabric")}),lt(512,360,xt,Ie(1.4,.035,z-ye+.06,.015,1),I(xe-.75,.585,ve+.02)),lt(512,120,xt,Ie(1.4,.26,.025,.01,1),I(xe-.75,.46,z+.03)),R.add(Ie(.4,.06,z-ye-.06,.025,2),{m:I(xe-.24,.62,ve),color:G(P=>Math.sin(P.z*60)>.5?[.32,.2,.18]:[.5,.24,.2])}),[[ve-.22,.1],[ve+.2,-.12]].forEach(([P,q])=>R.add(Ie(.34,.12,.42,.06,2),{m:I(le+.3,.63,P,0,q,.25),color:O(.93,.91,.87,"fabric")}));{let P=xe+.45,q=ye+.25;R.add(Ie(.7,.36,.42,.02,1),{m:I(P,.31,q),color:D(.5)}),R.add(new Be(.21,.21,.7,16,1,!1,-Math.PI/2,Math.PI),{m:I(P,.49,q,0,0,Math.PI/2,1,1,.45),color:D(.52)}),[-.24,0,.24].forEach(m=>R.add(new Be(.215,.215,.035,16,1,!0,-Math.PI/2,Math.PI),{m:I(P+m,.49,q,0,0,Math.PI/2,1,1,.46),color:H(.2,.2,.21)})),[-.24,0,.24].forEach(m=>R.add(X(.035,.36,.43),{m:I(P+m,.31,q),color:H(.2,.2,.21)})),R.add(Ie(.1,.12,.02,.01,1),{m:I(P,.44,q+.22),color:H(.55,.45,.25)}),[-1,1].forEach(m=>R.add(new Mn(.04,.008,4,10,Math.PI),{m:I(P+m*.36,.38,q,0,Math.PI/2,Math.PI),color:H(.2,.2,.21)}))}let y={x:.9,z:.6};R.add(Ie(1.3,.055,.85,.02,2),{m:I(y.x,.885,y.z),color:D(.55)}),R.add(Ie(1.12,.09,.68,.01,1),{m:I(y.x,.81,y.z),color:D(.46)});let Z=Wt([[.03,0],[.036,.04],[.026,.12],[.04,.3],[.03,.48],[.036,.56],[.034,.64],[.034,.7]],8);[[-.56,-.34],[.56,-.34],[-.56,.34],[.56,.34]].forEach(([P,q])=>R.add(Z,{m:I(y.x+P,.12,y.z+q),color:D(.45)}));let Q=Wt([[.016,0],[.02,.05],[.015,.16],[.022,.28],[.018,.4],[.02,.44]],6);[-1,1].forEach(P=>{let q=new at().compose(new F(y.x,.12,y.z+P*.68),new _t().setFromAxisAngle(new F(0,1,0),P<0?0:Math.PI),new F(1,1,1)),m=(b,C,N)=>R.add(b,{m:q.clone().multiply(C),color:N});m(Ie(.44,.045,.42,.02,2),I(0,.46,0),D(.52)),[[-.17,-.15],[.17,-.15],[-.17,.15],[.17,.15]].forEach(([b,C])=>m(Q,I(b*1.08,0,C*1.08,C*.4,0,-b*.4),D(.45))),m(new Be(.01,.01,.36,6),I(0,.16,0,0,0,Math.PI/2),D(.45));for(let b=-2;b<=2;b++){let C=b*.075,N=.31-Math.sqrt(.25-C*C);m(new Be(.009,.011,.5,6),I(C,.73,N-.01,-.08,0,0),D(.5))}m(new Mn(.5,.022,6,16,.9),I(0,.98,.31-.02,-Math.PI/2,0,Math.PI/2-.45),D(.52))}),R.add(Wt([[0,0],[.07,0],[.075,.02],[.05,.05],[.055,.09],[.03,.1]],12),{m:I(y.x+.35,.91,y.z-.15),color:H(.6,.47,.25)}),S.add(Wt([[.03,0],[.06,.06],[.065,.12],[.035,.22],[.03,.28]],12),{m:I(y.x+.35,1.01,y.z-.15),color:O(1,1,1)}),w.add(new Dt(.018,8,6),{m:I(y.x+.35,1.07,y.z-.15,0,0,0,1,2,1),color:O(1,1,1)}),R.add(Wt([[.04,0],[.045,.01],[.042,.1],[.046,.105]],12),{m:I(y.x-.3,.91,y.z+.2),color:O(.75,.73,.7,"paper")}),R.add(new Mn(.025,.007,5,10),{m:I(y.x-.25,.965,y.z+.2,0,0,Math.PI/2),color:O(.75,.73,.7,"paper")}),R.add(Ie(.22,.04,.3,.008,1),{m:I(y.x-.25,.93,y.z-.2,0,.3,0),color:O(.3,.36,.42,"leather")}),R.add(Wt([[0,0],[.08,0],[.14,.04],[.165,.075],[.155,.08]],16),{m:I(y.x+.05,.91,y.z+.15),color:D(.5)}),[[0,0],[.07,.05],[-.06,.05],[0,-.07]].forEach(([P,q],m)=>R.add(new Dt(.055,10,7),{m:I(y.x+.05+P,.99+(m===3?.04:0),y.z+.15+q),color:O(.66,.66,.65)}));{let P=new at().compose(new F(.05,.12,-1),new _t().setFromAxisAngle(new F(0,1,0),2.12),new F(1,1,1)),q=(m,b,C)=>R.add(m,{m:P.clone().multiply(b),color:C});[-1,1].forEach(m=>{let b=[];for(let C=-.36;C<=.361;C+=.06)b.push(new F(m*.22,.03+.75-Math.sqrt(.5625-C*C),C));q(new yi(new Yr(b),16,.02,5),I(),D(.42)),q(new Be(.018,.02,.4,6),I(m*.22,.2,.18),D(.45)),q(new Be(.018,.02,.95,6),I(m*.22,.5,-.2,-.18,0,0),D(.45)),q(Ie(.05,.03,.5,.012,1),I(m*.25,.62,0),D(.52))}),q(Ie(.48,.045,.44,.02,2),I(0,.4,0),D(.5)),q(Ie(.42,.05,.4,.025,2),I(0,.44,.01),G(()=>[.5,.24,.2]));for(let m=0;m<4;m++)q(Ie(.4,.07,.015,.006,1),I(0,.58+m*.12,-.25-m*.02,-.18,0,0),D(.5));q(Ie(.36,.34,.03,.015,1),I(.03,.82,-.3,-.18,0,.05),G(m=>Math.sin(m.y*90)>0?[.66,.6,.48]:[.58,.52,.4])),q(Ie(.38,.05,.08,.02,1),I(.03,1,-.33,0,0,.05),G(()=>[.62,.56,.44]))}{let P=new at().compose(new F(-he,.12,-.45),new _t().setFromAxisAngle(new F(0,1,0),Math.PI/2),new F(1,1,1)),q=(m,b,C,N=R)=>N.add(m,{m:P.clone().multiply(b),color:C});q(Ie(1.5,.74,.52,.012,1),I(0,.45,.27),D(.46)),q(X(1.46,.08,.46),I(0,.04,.24),D(.3)),[-.49,0,.49].forEach((m,b)=>{q(Ie(.45,.6,.03,.008,1),I(m,.46,.54),D(.52)),q(Ie(.31,.44,.02,.015,1),I(m,.46,.56),D(.44)),q(new Dt(.016,8,6),I(m+(b===1?0:m<0?.17:-.17),.62,.575),H(.2,.2,.21))}),q(Ie(1.56,.06,.6,.015,2),I(0,.85,.3),Vt("wood",m=>{let b=.58+(Math.abs(m.x*12.5%1)<.06?-.08:0)+T(m.x*9,m.y,m.z*3)*.08;return[b*1.04,b*.8,b*.56]})),q(Wt([[0,-.13],[.12,-.12],[.19,-.06],[.21,0],[.225,.01]],18),I(-.35,.99,.3),O(.9,.9,.86,"metal")),q(new Mn(.222,.01,5,24),I(-.35,1,.3,Math.PI/2,0,0),O(.15,.2,.36,"metal")),q(new Be(.045,.05,.42,10),I(-.35,1.08,.06),H(.16,.16,.17)),q(new Be(.02,.025,.2,8),I(-.35,1.22,.16,Math.PI/2-.3,0,0),H(.16,.16,.17)),q(new Be(.012,.012,.42,6),I(-.35,1.38,0,.9,0,0),H(.16,.16,.17)),q(Ie(.42,.03,.28,.01,1),I(.35,.895,.32,0,.15,0),D(.62)),q(Ie(.28,.12,.14,.06,2),I(.33,.97,.32,0,.1,0),Vt("plain",m=>m.y>.99?[.62,.38,.18]:[.75,.55,.3])),q(Ie(.2,.01,.03,.004,1),I(.55,.915,.42,0,-.3,0),H(.7,.7,.72)),q(Ie(.9,.03,.16,.008,1),I(.1,1.52,.08),D(.48)),q(Ie(.9,.025,.02,.006,1),I(.1,1.6,.15),D(.48)),[-.22,.02,.26].forEach((m,b)=>q(new Be(.12,.12,.015,20),I(m,1.66,.06,Math.PI/2-.15,0,0),b===1?O(.82,.84,.86,"metal"):O(.86,.84,.78,"plaster"))),[.42,.52].forEach(m=>q(Wt([[0,0],[.035,0],[.04,.09],[.042,.095]],10),I(m,1.535,.08),O(.3,.4,.5,"plaster"))),q(new Be(.015,.015,1.4,6),I(0,2.05,.25,0,0,Math.PI/2),D(.4)),[-.55,-.3,-.05,.2,.45].forEach((m,b)=>{q(new Be(.002,.002,.14,3),I(m,1.97,.25),O(.5,.45,.35)),q(new $t(.06+b%2*.02,.26,7),I(m,1.78,.25,Math.PI,b,0),b%3===0?O(.42,.46,.28,"fabric"):b%3===1?O(.55,.5,.32,"fabric"):O(.5,.36,.42,"fabric"))})}[1.35,1.75].forEach(P=>{R.add(new Ne(.26,.04,1.3),{m:I(-he+.14,P,.9),color:D(.5)}),R.add(new Ne(.04,.16,.04),{m:I(-he+.04,P-.1,.35),color:D(.4)}),R.add(new Ne(.04,.16,.04),{m:I(-he+.04,P-.1,1.45),color:D(.4)})}),[[.4,.08,.16,[.62,.66,.66]],[.6,.06,.12,[.6,.58,.5]],[.78,.07,.2,[.55,.6,.62]]].forEach(([P,q,m,b])=>{R.add(new Be(q,q,m,10),{m:I(-he+.14,1.37+m/2,P),color:O(...b)}),R.add(new Be(q*.8,q*.8,.03,10),{m:I(-he+.14,1.38+m,P),color:O(.45,.35,.25)})}),[[1,.24,[.45,.22,.2]],[1.06,.2,[.25,.32,.36]],[1.12,.26,[.4,.38,.28]],[1.18,.22,[.6,.55,.45]],[1.26,.19,[.3,.3,.32]]].forEach(([P,q,m],b)=>{R.add(new Ne(.18,q,.05),{m:I(-he+.14,1.77+q/2,P,b===4?.25:0,0,0),color:O(...m)})}),R.add(new Be(.015,.015,.12,5),{m:I(-2.6,1.7,Me-.06,Math.PI/2,0,0),color:D(.4)}),R.add(new Ne(.42,.85,.12),{m:I(-2.6,1.25,Me-.1),color:G(P=>{let q=.32+T(P.x*9,P.y*9,0)*.04;return[q*.85,q,q*.9]})}),[-2.7,-2.48].forEach(P=>{R.add(new Ne(.11,.26,.13),{m:I(P,.25,Me-.2),color:O(.2,.16,.13)}),R.add(new Ne(.11,.07,.26),{m:I(P,.155,Me-.26),color:O(.2,.16,.13)})}),R.add(new Ne(.5,.38,.03),{m:I(-.25,1.6,-Me+.02),color:D(.4)}),R.add(new Ft(.4,.28),{m:I(-.25,1.6,-Me+.04),color:P=>P.y>1.6?[.7,.72,.74]:[.4,.45,.4]});let j=new Ht,oe=h-u-.04;for(let P=0;P<5;P++)j.add(new Ne(oe/5-.008,g-.04,.06),{m:I(.02+oe/10+P*oe/5,(g-.04)/2,0),color:D(.5+P%2*.04),tip:()=>0});[.35,g-.4].forEach(P=>j.add(new Ne(oe-.1,.12,.04),{m:I(.02+oe/2,P,-.05),color:D(.46),tip:()=>0})),j.add(new Ne(.1,Math.hypot(oe-.2,g-.95),.04),{m:I(.02+oe/2,g/2-.02,-.05,0,0,Math.atan2(oe-.2,g-.95)),color:D(.46),tip:()=>0}),[.06,-.08].forEach(P=>j.add(new Be(.02,.02,.14,6),{m:I(oe-.1,1,P),color:H(.18,.18,.19),tip:()=>0})),[.3,g-.3].forEach(P=>j.add(new Ne(.4,.05,.075),{m:I(.22,P,0),color:H(.18,.18,.19),tip:()=>0}));let ce=new Ht;ce.add(new Dt(1,14,6,0,Math.PI*2,Math.PI/2,Math.PI/2),{m:I(0,0,0,0,0,0,1.25,.42,.5),color:P=>P.y>-.05?[.55,.4,.28]:[.4,.3,.22],tip:()=>1}),ce.add(new Ne(.16,.05,.9),{m:I(.1,-.08,0),color:O(.5,.4,.3),tip:()=>1}),ce.add(new Ne(.16,.05,.75),{m:I(-.6,-.08,0),color:O(.5,.4,.3),tip:()=>1}),ce.add(new Be(.025,.025,2.2,5),{m:I(.2,0,.1,0,.3,1.45),color:O(.55,.45,.32),tip:()=>0});let K={value:1},ie=wn({...e,uFrost:{value:0}},K,{color:13812656,snowMask:!0,snowBias:.12,grain:.022,rich:!0}),pe=wn({...e,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0}},K,{color:14865600,grain:.018,rich:!0,indoor:!0}),Ee=wn({...e,uFrost:{value:0}},K,{color:13812656,snowMask:!0,side:tn,rich:!0,grain:.02}),_e=new un({color:1315860}),Te=new un({color:11122624,transparent:!0,opacity:.16,depthWrite:!1}),Ce=new on;Ce.position.set(St.x,St.y,St.z),Ce.rotation.y=St.yaw,Ce.scale.setScalar(r);let Fe=new rt(E.geometry(),ie);Fe.castShadow=!0,Fe.receiveShadow=!0;let we=new rt(R.geometry(),pe);we.receiveShadow=!0,we.castShadow=!0;let te=new rt(w.geometry(),_e),Pe=new rt(S.geometry(),Te);Pe.renderOrder=2;let fe=new rt(j.geometry(),ie);fe.castShadow=!0;let Ue=new on;Ue.position.set(u+.02,.1,o/2),Ue.add(fe);let He=new rt(ce.geometry(),Ee);He.castShadow=!0,He.position.set(.9,0,v+x-2.5),He.rotation.y=.12;let Ae=new un({color:16752704,transparent:!0,opacity:.85,blending:Gn,depthWrite:!1}),nt=[[-.18,.28],[.12,.34],[0,.42],[.25,.22]].map(([P,q])=>{let m=new rt(new $t(.09,1,7,1,!0).translate(0,.5,0),Ae);return m.position.set(p.x+P,.3,-Me+.42),m.userData.h=q,Ce.add(m),m});Ce.add(Fe,we,te,Pe,Ue,He),ke.forEach(P=>Ce.add(P)),i.add(Ce),Ce.updateMatrixWorld(!0);let Ze=nd({group:Ce,mats:{inn:pe,glow:_e},camera:n,U:t}),it=new vi(16752728,0,46,1.4);it.position.copy(new F(p.x,.9,-Me+1.1)).applyAxisAngle(new F(0,1,0),St.yaw).multiplyScalar(r).add(Ce.position),i.add(it),it.castShadow=!0,it.shadow.autoUpdate=!1,it.shadow.mapSize.set(512,512),it.shadow.camera.near=.5,it.shadow.camera.far=46,it.shadow.bias=-.003,it.shadow.normalBias=.2,it.shadow.camera.layers.set(5),it.shadow.needsUpdate=!0,[Fe,we,fe].forEach(P=>P.layers.enable(5));let wt=(()=>{let P=Ze.glowSpots,q=Math.PI*2,m=[{p:[p.x,.45,-Me+.45],size:1.7,color:[1,.5,.2],flicker:1},{p:[.9+.35,1.07,.6-.15],size:.5,color:[1,.7,.4],flicker:1}];for(let C=0;C<8;C++){let N=C/8*q;m.push({p:[P.CH.x+Math.cos(N)*.82,P.CH.y+.2,P.CH.z+Math.sin(N)*.82],size:.32,color:[1,.72,.4],flicker:1})}for(let C=0;C<6;C++){let N=C/6*q+.3;m.push({p:[P.CH.x+Math.cos(N)*.42,P.CH.y+.6,P.CH.z+Math.sin(N)*.42],size:.3,color:[1,.72,.4],flicker:1})}m.push({p:[-3.2,P.F+1.52,-.9],size:.9,color:[1,.78,.5]},{p:[.6,P.F+1.06,-7.98],size:.5,color:[.9,.95,.7]}),[-1,1].forEach(C=>m.push({p:[-1.8+C*1.5,P.F+2.37,P.Z1-.19],size:.6,color:[1,.75,.45]})),[-5.35,-3,-.9,.9,3,5.35].forEach(C=>m.push({p:[C,P.SLAB-.02,-8.55],size:.36,color:[1,.88,.7]})),[-6,-3.4,-.8,1.6].forEach(C=>[-5.45,2.7,5].forEach(N=>m.push({p:[N,P.SLAB-.02,C],size:.36,color:[1,.88,.7]})));let b=(C,N)=>[C,N];return Yu({group:Ce,U:t,beams:[{rect:[[-.95,P.F+2.62,P.Z0+.04],[.95,P.F+2.62,P.Z0+.04],[.95,P.F+.55,P.Z0+.04],[-.95,P.F+.55,P.Z0+.04]],dir:[.1,-.5,1],len:6.5,k:1.2},{rect:[[.75,1.95,o/2-.2],[1.95,1.95,o/2-.2],[1.95,.95,o/2-.2],[.75,.95,o/2-.2]],dir:[-.25,-.55,-1],len:3.2,k:1},{rect:[[s/2-.2,1.95,-.3],[s/2-.2,1.95,.9],[s/2-.2,.95,.9],[s/2-.2,.95,-.3]],dir:[-1,-.5,.15],len:3,k:.8}],halos:m,dust:[{box:[-4.6,1.4,P.F+.3,P.C-.5,-9.2,2.2],n:520},{box:[-2.9,2.9,.3,2.5,-2.2,2.2],n:170}]})})(),ne=it.position.clone(),Ge=(()=>{let q=new Lt,m=new Float32Array(90*3),b=new Float32Array(90);for(let $=0;$<90;$++)b[$]=$/90;q.setAttribute("position",new zt(m,3)),q.setAttribute("aSeed",new zt(b,1));let C=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0},uColor:{value:new Ye(13224393)},uSize:{value:70}},vertexShader:`
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
        }`}),N=new Zn(q,C);return N.frustumCulled=!1,N.position.copy(Ce.localToWorld(ze.clone())),i.add(N),N})(),We=(P,q)=>{let m=(P-St.x)/r,b=(q-St.z)/r,C=Math.cos(St.yaw),N=Math.sin(St.yaw);return[m*C-b*N,m*N+b*C]},yt=(P,q)=>{let m=Math.cos(St.yaw),b=Math.sin(St.yaw);return[St.x+(P*m+q*b)*r,St.z+(-P*b+q*m)*r]},gn=[[-s/2-.3,s/2+.3,-o/2-a,-o/2+a],[-s/2-a,-s/2+a,-o/2-.3,o/2+.3],[s/2-a,s/2+a,-o/2-.3,o/2+.3],[-s/2-.3,u,o/2-a,o/2+a],[h,s/2+.3,o/2-a,o/2+a],[le,xe,ye,z],[xe+.08,xe+.82,ye,ye+.5],[y.x-.65,y.x+.65,y.z-.43,y.z+.43],[y.x-.25,y.x+.25,y.z-.95,y.z-.45],[y.x-.25,y.x+.25,y.z+.45,y.z+.95],[Ke.x-1,Ke.x+1,-Me-.1,-Me+1],[Ke.x-1.55,Ke.x-.95,-Me,-Me+.65],[-he,-he+.3,.25,1.55],[-he,-he+.62,-1.22,.32],[-.3,.4,-1.4,-.65],[.8,2.15,o/2+.26,o/2+.7],[-s/2-.95,-s/2-.2,-1.75,0],[s/2+.2,s/2+.9,o/2-.8,o/2-.1],[-s/2-1.75,-s/2-1.05,1.05,1.75],[Se+.15,Se+.35,o/2+2.1,o/2+2.3],[Qe-.35,Qe-.15,o/2+2.1,o/2+2.3]];gn.push([Je.x0-.07,Je.x0+.02,Je.bottom-.05,1.5],[Je.x0,Je.x1,Je.bottom-.09,Je.bottom],[-3.2,-2.5,o/2+1.65,o/2+2.15],[Qe+.5,Qe+.7,o/2+2.8,o/2+3]);let Nn=[u,h,o/2-.1,o/2+.1],Wn=[u-.06,u+.08,o/2-oe-.05,o/2],Ct=(P,q,[m,b,C,N],$)=>P>m-$&&P<b+$&&q>C-$&&q<N+$,Zt={open:!1,a:0,from:0,t0:-1e9},ln=yt((u+h)/2,o/2),rn=P=>(P-St.y)/r,ei=P=>P>-.7?"ground":P<-3.2?"study":"stairs",Ai=(P,q)=>P>Je.x0&&P<Je.x1&&q>Je.bottom&&q<Je.top,ti=(P,q)=>P>en.x0&&P<en.x1&&q>en.z0&&q<en.z1,hn=(P,q)=>P>-s/2+a-.05&&P<s/2-a+.05&&q>-o/2+a&&q<o/2+a+.05,Dn=(P,q,m,b)=>{let C=[yt(P,m),yt(q,m),yt(P,b),yt(q,b)];return[Math.min(...C.map(N=>N[0])),Math.max(...C.map(N=>N[0])),Math.min(...C.map(N=>N[1])),Math.max(...C.map(N=>N[1]))]};return{group:Ce,study:Ze,holeBox:Dn(-s/2+a,s/2-a,-o/2+a,o/2-a),studyBox:Dn(en.x0-.3,en.x1+.3,en.z0-.3,en.z1+.3),blocked(P,q,m,b){let[C,N]=We(P,q);if(Math.abs(C)>en.x1+3||N<en.z0-3||N>o/2+4)return!1;let $=.17+m/r,_=rn(b),A=ei(_);if(A==="stairs")return C<Je.x0+$||C>Je.x1-$||N>Je.top+.05;if(A==="study")return ed(C,N,$,_);if(Math.abs(C)>s/2+3||N<-o/2-3)return!1;for(let k of gn)if(Ct(C,N,k,$))return!0;return!!(Zt.a<.5?Ct(C,N,Nn,$):Ct(C,N,Wn,$*.6))},inside(P,q,m){let[b,C]=We(P,q);return Math.abs(b)<s/2&&Math.abs(C)<o/2||ti(b,C)&&rn(m)<-1},floors(P,q,m){let[b,C]=We(P,q),N=$=>St.y+$*r;Ai(b,C)?m.push({y:N(Fi(C)),under:!0}):hn(b,C)&&m.push({y:N(.12),under:!0});for(let $ of td(b,C))m.push({y:N($),under:!0});return b>-3.3&&b<3.4&&C>=o/2+a+.05&&C<o/2+2.4&&m.push({y:N(.2),under:!1}),b>-2.25&&b<-.35&&C>v-.3&&C<v+x&&m.push({y:N(.24-(C-v)*.024),under:!1}),m},door:{mesh:fe,near(P,q){return Math.hypot(P-ln[0],q-ln[1])<13},get open(){return Zt.open},canToggle(P,q){if(!Zt.open)return!0;let[m,b]=We(P,q);return!Ct(m,b,[u-.1,h+.1,o/2-oe-.1,o/2+.25],.17)},toggle(P){return Zt.open=!Zt.open,Zt.from=Zt.a,Zt.t0=P,Zt.open}},update(P,q,m,b,C){let N=P.pCabin,$=N>.01;if($&&(this.syncT>m-1500||(this.syncT=m,Ze.sync()),Ze.update(q,m)),Ze.lampLight.intensity=$?120*(.96+.04*Math.sin(q*3.1)):0,$&&C!==void 0){let[Y,ge]=We(n.position.x,n.position.z),Re=rn(C);Re>-.7&&Math.abs(Y)<s/2+1&&Math.abs(ge)<o/2+1&&(this.shF=(this.shF||0)+1)%3===0&&(it.shadow.needsUpdate=!0),Re<-3&&ti(Y,ge)&&!(this.shL>m-2500)&&(this.shL=m,Ze.shadowLight.shadow.needsUpdate=!0)}wt.update({on:$,day:Math.max(0,Math.min(1,P.light||.6))*(1-Math.min(1,P.pGlow)*.85),beamColor:P.lightC}),Ce.visible=$,Ge.visible=$&&N>.5,Ce.scale.setScalar(r*Math.max(.001,N));let _=Math.min(1,(m-Zt.t0)/900),A=Zt.open?1-Math.pow(1-_,3)*Math.cos(_*3.2):1-Math.pow(1-_,4);Zt.a=Zt.from+((Zt.open?1:0)-Zt.from)*A,Ue.rotation.y=Zt.a*1.72;let k=Math.min(1,P.pGlow),W=.86+.08*Math.sin(q*9.1+Math.sin(q*2.7)*2)+.06*Math.sin(q*23.3);_e.color.setRGB(.07,.07,.075).lerp(new Ye(1.3,.8,.42),k*W),nt.forEach((Y,ge)=>{let Re=Y.userData.h*(.75+.35*Math.sin(q*(7+ge*1.7)+ge*2)*Math.sin(q*(3.1+ge)));Y.scale.set(1,Math.max(.05,Re*k),1),Y.visible=k>.05}),Ae.opacity=.75*k,it.intensity=k*N*220*W,it.position.set(ne.x+Math.sin(q*5.3)*.15,ne.y+Math.sin(q*7.1)*.1,ne.z),Ge.material.uniforms.uColor.value.copy(P.fog).multiplyScalar(1.1).addScalar(.05),Ge.material.uniforms.uOpacity.value=Math.min(N,.35+k*.5),He.position.y=(b+.9+Math.sin(q*.9)*.15-St.y)/r,He.rotation.z=Math.sin(q*.7)*.03}}}var li=(i,e)=>{let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)},gc=(i,e)=>{let t=Math.floor(i),n=Math.floor(e),r=i-t,s=e-n,o=r*r*(3-2*r),a=s*s*(3-2*s),c=li(t,n),l=li(t+1,n),d=li(t,n+1),f=li(t+1,n+1);return c+(l-c)*o+(d-c)*a+(c-l-d+f)*o*a},zi=(i,e,t=5)=>{let n=0,r=.5,s=1;for(let o=0;o<t;o++)n+=r*gc(i*s,e*s),s*=2.03,r*=.5;return n},Sx=(i,e)=>{let t=0,n=.5,r=1;for(let s=0;s<5;s++)t+=n*(1-Math.abs(gc(i*r,e*r)*2-1)),r*=2.1,n*=.5;return t},Oi=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},mn=(i,e)=>{let t=Math.hypot(i*.75,e+20),n=Oi(55,240,t),r=(zi(i*.006+3,e*.006+7)-.45)*46*(.25+n);r+=Math.pow(Oi(120,650,-e),1.3)*Sx(i*.0028,e*.0028)*260,r+=Oi(160,520,Math.abs(i))*zi(i*.004,e*.004+11)*130,r-=(1-n)*9,r+=(zi(i*.035+17,e*.035+5,2)-.5)*3.2*(.3+n);{let d=Math.min(1,Math.max(0,((i-205)*-113+(e- -130)*14)/12965)),f=Math.hypot(i-(205+-113*d),e-(-130+14*d)),u=Oi(34,12,f)*Oi(1.04,.9,d),h=4.6+(zi(i*.05,e*.05,2)-.5)*1.6-d*.6;u>0&&(r=r+(Math.max(r,h)-r)*u)}let s=Math.hypot(i-St.x,e-St.z);s<36&&(r+=(St.y-.12-r)*Oi(36,24,s));{let o=(e-St.z)/St.S,a=-(i-St.x)/St.S,c=Math.max(en.x0-o,o-en.x1,0),l=Math.max(en.z0-a,a-en.z1,0),d=Math.hypot(c,l)*St.S;d<16&&(r=Math.max(r,r+(St.y-.12-r)*Oi(16,5,d)))}return r};function rd(i){let e={uLow:{value:new Ye},uHigh:{value:new Ye},uSnow:{value:new Ye},uSnowLine:{value:100},uSand:{value:0},uHole:{value:new Gt(1e9,1e9,1e9,1e9)}},t=new Ft(2200,1800,300,245);t.rotateX(-Math.PI/2),t.translate(0,0,-400);let n=t.attributes.position;for(let o=0;o<n.count;o++)n.setY(o,mn(n.getX(o),n.getZ(o)));t.computeVertexNormals();let r=new cn({color:16777215});r.onBeforeCompile=o=>{Object.assign(o.uniforms,e),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying float vH; varying float vSlope; varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vH = position.y; vSlope = 1.0 - normal.y; vXZ = position.xz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uLow, uHigh, uSnow; uniform float uSnowLine, uSand; uniform vec4 uHole; varying float vH; varying float vSlope; varying vec2 vXZ;
        float th(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float tn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(th(i), th(i + vec2(1, 0)), f.x), mix(th(i + vec2(0, 1)), th(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        if (vXZ.x > uHole.x && vXZ.x < uHole.y && vXZ.y > uHole.z && vXZ.y < uHole.w) discard;
        vec3 land = mix(uLow, uHigh, smoothstep(-5.0, 120.0, vH));
        float snow = smoothstep(uSnowLine - 12.0, uSnowLine + 12.0, vH) * (1.0 - smoothstep(0.35, 0.7, vSlope));
        float d1 = tn(vXZ * 0.08), d2 = tn(vXZ * 0.45), d3 = tn(vXZ * 2.2);
        land *= 0.82 + 0.22 * d1 + 0.12 * d2 + 0.08 * d3;
        land = mix(land, land * vec3(0.92, 0.88, 0.84), smoothstep(0.35, 0.75, vSlope));
        float beach = (1.0 - smoothstep(1.2, 3.5, vH)) * smoothstep(-3.0, -0.5, vH) * uSand;
        land = mix(land, vec3(0.93, 0.85, 0.66) * (0.9 + 0.12 * d3), beach);
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
        #include <opaque_fragment>`)};let s=new rt(t,r);return s.receiveShadow=!0,i.add(s),{mesh:s,TU:e}}function sd(i){let e=(()=>{let s=document.createElement("canvas");s.width=s.height=256;let o=s.getContext("2d"),a=o.createImageData(256,256);for(let l=0;l<256;l++)for(let d=0;d<256;d++){let f=zi(d/22,l/7,4),u=zi(d/22+.6,l/7,4),h=zi(d/22,l/7+.6,4),g=(l*256+d)*4;a.data[g]=128+(f-u)*300,a.data[g+1]=128+(f-h)*300,a.data[g+2]=255,a.data[g+3]=255}o.putImageData(a,0,0);let c=new Jn(s);return c.wrapS=c.wrapT=Or,c.repeat.set(60,60),c})(),t=new Us({color:7829367,roughness:.3,metalness:.35,normalMap:e,normalScale:new $e(.35,.35)}),n={uStudy:{value:new Gt(1e9,1e9,1e9,1e9)}};t.onBeforeCompile=s=>{Object.assign(s.uniforms,n),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform vec4 uStudy;`).replace("#include <clipping_planes_fragment>",`if (vWXZ.x > uStudy.x && vWXZ.x < uStudy.y && vWXZ.y > uStudy.z && vWXZ.y < uStudy.w) discard;
#include <clipping_planes_fragment>`)};let r=new rt(new Ft(4e3,4e3).rotateX(-Math.PI/2),t);return i.add(r),{mesh:r,mat:t,tex:e,WU:n}}function od(i,e){Object.assign(e,{uTop:{value:new Ye},uHorizon:{value:new Ye},uBottom:{value:new Ye},uSunColor:{value:new Ye},uSunDir:{value:new F(0,.2,-1)},uSunSize:{value:0},uStars:{value:0},uAurora:{value:0},uAur1:{value:new Ye},uAur2:{value:new Ye}});let t=new rt(new Dt(1400,48,24),new Bt({uniforms:e,side:dn,depthWrite:!1,fog:!1,vertexShader:`
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
        }`}));return t.frustumCulled=!1,i.add(t),t}var hi=(i,e)=>i+Math.random()*(e-i);function ad(i,e,t){let r=new Lt;{let g=new Float32Array(15600),v=new Float32Array(2600*2);for(let x=0;x<2600;x++){let p=hi(-90,90),E=hi(0,70),R=hi(-140,40);g.set([p,E,R,p,E,R],x*6),v[x*2+1]=1}r.setAttribute("position",new zt(g,3)),r.setAttribute("aEnd",new zt(v,1))}let s=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new Ye(14672870)}},vertexShader:`
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
      }`}),o=new Rs(r,s);o.frustumCulled=!1,i.add(o);let a=(g,v,x,p,E)=>{let R=new Lt,w=new Float32Array(g*3),S=new Float32Array(g);for(let M=0;M<g;M++)w.set([hi(-v[0],v[0]),hi(v[1],v[2]),hi(v[3],v[4])],M*3),S[M]=Math.random();R.setAttribute("position",new zt(w,3)),R.setAttribute("aSeed",new zt(S,1));let T=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new Ye(p)},uSize:{value:E*t}},vertexShader:x,fragmentShader:`
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() {
          float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5));
          gl_FragColor = vec4(uColor, a * uOpacity * vA);
          #include <colorspace_fragment>
        }`}),D=new Zn(R,T);return D.frustumCulled=!1,i.add(D),D},c=a(3200,[110,0,70,-160,40],`
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
    }`,16054008,3.2),l=a(900,[90,0,60,-120,40],`
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
    }`,13793836,4.2),d=a(260,[160,1,14,-220,30],`
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
    }`,14275248,5),f=(()=>{let g=document.createElement("canvas");g.width=256,g.height=128;let v=g.getContext("2d"),x=v.createRadialGradient(128,64,0,128,64,128);return x.addColorStop(0,"rgba(255,255,255,0.9)"),x.addColorStop(.5,"rgba(255,255,255,0.35)"),x.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=x,v.fillRect(0,0,256,128),new Jn(g)})(),u=Array.from({length:9},(g,v)=>{let x=new un({map:f,transparent:!0,depthWrite:!1,fog:!1,opacity:0}),p=new rt(new Ft(hi(380,620),hi(70,120)),x);return p.position.set(hi(-400,400),hi(8,45),-60-v*70),p.userData.v=hi(1.2,3.2)*(Math.random()<.5?-1:1),i.add(p),p}),h=(g,v)=>{g.material.uniforms.uOpacity.value=v,g.visible=v>.01};return{get rainAmount(){return s.uniforms.uOpacity.value},update(g,v,x,p,E,R,w){h(o,g.rain*R),h(c,g.snow*R),h(l,g.leaves*R),h(d,g.fire),o.position.set(v.x,v.y-20,v.z),c.position.copy(o.position),l.position.copy(o.position),d.position.set(x.x*.3,E,p.z-90),u.forEach(S=>{S.position.x+=S.userData.v*w,S.position.x>520?S.position.x=-520:S.position.x<-520&&(S.position.x=520),S.lookAt(v.x,S.position.y,v.z);let T=Math.hypot(S.position.x-v.x,S.position.z-v.z);S.material.opacity=g.mist*.5*Oi(12,80,T)*R,S.material.color.copy(g.fog),S.visible=S.material.opacity>.003})}}}var cd={rain:[1,1,1,1,1,1,.65,0,0,1,0,0,.75],frost:[1,1,0,.85,.7,1,.25,1,0,0,1,.55,0],mist:[1,1,1,1,1,1,.35,0,0,0,0,0,1],snow:[1,1,0,.3,.45,1,.6,0,0,0,1,1,0],night:[1,1,.9,1,1,1,1,0,0,0,0,0,.5],aurora:[1,1,0,.6,.6,1,1,1,0,0,.8,.75,0],ocean:[1,0,0,.7,0,0,0,0,1,0,0,0,.3],spring:[1,1,1,1,1,1,.3,0,0,0,0,0,.5],summer:[1,1,.8,1,.7,1,.2,0,0,0,0,0,.2],fall:[1,1,.6,.8,.9,1,.5,0,0,0,0,0,.4]},xc=["pRocks","pLogs","pFerns","pGrass","pReeds","pCabin","pGlow","pStones","pStacks","pRipples","pFrost","pSnowCover","pMoss"];function ld({scene:i,heightAt:e,U:t,snowColor:n,clear:r=[]}){let s=pc(20260707),o=(ae,le)=>ae+s()*(le-ae),a={uTime:t.uTime,uSnowCover:{value:0},uMoss:{value:0},uFrost:{value:0},uSnowC:n,uMossC:{value:new Ye("#4f6a3c")}},c={};xc.forEach(ae=>{c[ae]={value:0}});let l=["leaves","flowers","hives","creek"];l.forEach(ae=>{c[ae]={value:0}});let d=[],f=[],u=[],h=(ae,le)=>Math.hypot(e(ae+2,le)-e(ae-2,le),e(ae,le+2)-e(ae,le-2))/(2*2),g=(ae,le,xe,ye=1)=>{let Le=e(ae-2,le)-e(ae+2,le),ve=e(ae,le-2)-e(ae,le+2),B=new F(Le*ye,2*2,ve*ye).normalize();return new _t().setFromUnitVectors(new F(0,1,0),B).multiply(new _t().setFromAxisAngle(new F(0,1,0),xe))},v=(ae,le)=>!r.some(xe=>Math.hypot(xe.x-ae,xe.z-le)<xe.r),x=(ae,le,{cast:xe=!1,receive:ye=!0}={})=>(ae.castShadow=xe,ae.receiveShadow=ye,i.add(ae),d.push([ae,le]),ae),p=160,E=(ae,le,xe,ye,z)=>{let Le=new Map;xe.forEach(B=>{let y=Math.floor(B.p.x/p)+","+Math.floor(B.p.z/p);Le.has(y)||Le.set(y,[]),Le.get(y).push(B)});let ve=new at;Le.forEach(B=>{let y=new Yn(ae,le,B.length);B.forEach((Z,Q)=>{ve.compose(Z.p,Z.q,Z.s),y.setMatrixAt(Q,ve)}),y.computeBoundingSphere(),x(y,ye,z)})},R=(ae,le,xe,ye)=>{let z=null,Le=1e9;for(let ve=0;ve<900;ve++){let B=s()*Math.PI*2,y=Math.sqrt(s())*xe,Z=ae+Math.cos(B)*y,Q=le+Math.sin(B)*y;ye(Z,Q)&&y<Le&&(Le=y,z={x:Z,z:Q})}return z||{x:ae,z:le}},w={x:St.x,z:St.z};u.push({x:w.x,z:w.z,r:34});let S=R(-95,-258,50,(ae,le)=>{let xe=e(ae,le);return xe>9&&xe<32&&h(ae,le)<.16});u.push({x:S.x,z:S.z,r:30});let T=(ae,le)=>{let xe=new Ls(1,le),ye=xe.attributes.position,z=new F;for(let Le=0;Le<ye.count;Le++){z.fromBufferAttribute(ye,Le);let ve=1+(Xt(z.x*1.6+ae,z.y*1.6,z.z*1.6)-.5)*.55+(Xt(z.x*4+ae,z.y*4,z.z*4)-.5)*.14;z.multiplyScalar(ve),z.y=z.y<-.25?-.25+(z.y+.25)*.2:z.y,z.y*=.72,z.x*=1.12,ye.setXYZ(Le,z.x,z.y,z.z)}return new Ht().add(xe,{flat:!0,color:Le=>{let ve=.5+Xt(Le.x*3+ae,Le.y*3,Le.z*3)*.28+Le.y*.12;return[ve,ve*.99,ve*.95]}}).geometry()},D=wn(a,c.pRocks,{color:9277328,snowBias:.05}),M=[[],[],[]],L=[],O=(ae,le,xe,ye,z)=>{let Le=e(ae,le),ve=new F(xe*o(.8,1.25),xe*o(.6,1.1),xe*o(.8,1.2));ye.push({p:new F(ae,Le-xe*.12,le),q:g(ae,le,s()*6.28,.6),s:ve}),z&&f.push({x:ae,z:le,r:xe*1.05+1.2,key:"pRocks",top:Le-xe*.12+ve.y*.82,rt:xe*.75})};for(let ae=0,le=0;ae<260&&le<2e4;le++){let xe=o(-560,560),ye=o(-560,230),z=e(xe,ye);if(z<-1.5||z>75)continue;let ve=s()<.25?o(4,9):o(1.2,3.4);u.some(B=>Math.hypot(B.x-xe,B.z-ye)<B.r+ve)||!v(xe,ye)||(O(xe,ye,ve,M[ae%3],ve>2.2),ae++)}for(let ae=0,le=0;ae<70&&le<9e3;le++){let xe=o(-260,260),ye=o(-260,160),z=e(xe,ye);z<-1.2||z>1.5||u.some(Le=>Math.hypot(Le.x-xe,Le.z-ye)<Le.r)||!v(xe,ye)||(O(xe,ye,o(1.5,5),M[ae%3],!0),ae++)}for(let ae=0,le=0;ae<700&&le<2e4;le++){let xe=o(-480,480),ye=o(-480,200),z=e(xe,ye);z<-.6||z>70||!v(xe,ye)||u.some(Le=>Math.hypot(Le.x-xe,Le.z-ye)<Le.r)||(O(xe,ye,o(.35,1),L,!1),ae++)}M.forEach((ae,le)=>E(T(le*17.3,2),D,ae,"pRocks",{cast:!0})),E(T(5.1,1),D,L,"pRocks");let H=ae=>{let le=.42+Xt(ae.x*9,ae.y*2,ae.z*2)*.22+Math.sin(Math.atan2(ae.z,ae.y)*9)*.04;return[le*1,le*.82,le*.66]},G=(()=>{let ae=new Ht,le=new Be(1,.9,1,12,5,!0),xe=le.attributes.position,ye=new F;for(let Le=0;Le<xe.count;Le++){ye.fromBufferAttribute(xe,Le);let ve=1+(Xt(ye.x*3,ye.y*6,ye.z*3)-.5)*.18;xe.setXYZ(Le,ye.x*ve,ye.y,ye.z*ve)}le.computeVertexNormals(),ae.add(le,{m:I(0,0,0,0,0,Math.PI/2),color:H});let z=Le=>{let ve=Math.hypot(Le.y,Le.z),B=.62+Math.sin(ve*26)*.05-ve*.12;return[B*1.05,B*.9,B*.72]};return ae.add(new ur(.88,12),{m:I(.5,0,0,0,Math.PI/2,0),color:z}),ae.add(new ur(.98,12),{m:I(-.5,0,0,0,-Math.PI/2,0),color:z}),ae.add(new Be(.12,.2,.9,6,1),{m:I(.15,.55,.3,.5,0,-.5,1,1,1),color:H}),ae.geometry()})(),X=(()=>{let ae=new Ht,le=new Be(.85,1,1,12,3,!0),xe=le.attributes.position,ye=new F;for(let z=0;z<xe.count;z++){ye.fromBufferAttribute(xe,z);let Le=Math.atan2(ye.z,ye.x),ve=ye.y<-.3?1+.35*Math.pow(Math.max(0,Math.sin(Le*5)),2):1,B=ye.y>.45?(Xt(ye.x*4,0,ye.z*4)-.5)*.3:0;xe.setXYZ(z,ye.x*ve,ye.y+B,ye.z*ve)}return le.computeVertexNormals(),ae.add(le,{m:I(0,.5,0),color:z=>H(z)}),ae.add(new ur(.85,12),{m:I(0,.98,0,-Math.PI/2,0,0),color:z=>{let Le=Math.hypot(z.x,z.z),ve=.6+Math.sin(Le*22)*.05;return[ve*1.05,ve*.9,ve*.7]}}),ae.geometry()})(),U=wn(a,c.pLogs,{color:12036506}),V=(()=>{let ae=new Ht,le=ve=>{let B=new Ne(1,1,1,3,5,2),y=B.attributes.position,Z=new F;for(let Q=0;Q<y.count;Q++){Z.fromBufferAttribute(y,Q);let j=1-(Z.y+.5)*.3,oe=1+(Xt(Z.x*3+ve,Z.y*3,Z.z*3)-.5)*.35,ce=Z.y>.35?1-(Z.y-.35)*1.2*Math.hypot(Z.x,Z.z):1;y.setXYZ(Q,Z.x*j*oe*ce,Z.y+(Z.y>.4?(Xt(Z.x*5,ve,Z.z*5)-.5)*.15:0),Z.z*j*oe*ce)}return B},xe=ve=>B=>{let y=.5+Xt(B.x*2+ve,B.y*2,B.z*2)*.22;return[y*.97,y,y*.98]},ye=11,z=15;for(let ve=0;ve<ye;ve++){let B=ve/ye*Math.PI*2+o(-.06,.06),y=Math.cos(B)*z,Z=Math.sin(B)*z,Q=o(5,9.5),j=ve===4?.35:o(-.06,.06),oe=e(S.x+y,S.z+Z)-e(S.x,S.z);ae.add(le(ve*3.7),{m:I(y,oe+Q/2-.6,Z,j,-B+Math.PI/2,o(-.05,.05),o(2.2,3.2),Q,o(1,1.5)),flat:!0,color:xe(ve)}),f.push({x:S.x+y,z:S.z+Z,r:3.6,key:"pStones"})}ae.add(le(40),{m:I(3,.4,-2,.1,.7,Math.PI/2-.05,2.6,7,1.4),flat:!0,color:xe(40)}),ae.add(le(50),{m:I(-2,.5,2.5,0,.3,0,4.5,1.5,2.6),flat:!0,color:xe(50)}),f.push({x:S.x+3,z:S.z-2,r:4.5,key:"pStones"},{x:S.x-2,z:S.z+2.5,r:4,key:"pStones"});let Le=new rt(ae.geometry(),wn(a,c.pStones,{color:10132636}));return Le.position.set(S.x,e(S.x,S.z),S.z),x(Le,"pStones",{cast:!0})})(),ee=(ae,le)=>{let xe=new Be(le?.85:.5,1.15,1,12,10,!1),ye=xe.attributes.position,z=new F;for(let Le=0;Le<ye.count;Le++){z.fromBufferAttribute(ye,Le);let ve=z.y+.5,B=1+(Xt(z.x*2+ae,z.y*5,z.z*2)-.5)*.6+Math.sin(z.y*26+ae)*.04;!le&&ve>.55&&(B*=1-(Xt(ae,z.y*3,1)-.3)*.5);let y=z.y>.49&&!le?(Xt(z.x*3+ae,0,z.z*3)-.5)*.25:0,Z=le?0:ve*ve*.18*Math.sin(ae);ye.setXYZ(Le,z.x*B+Z,z.y+y,z.z*B)}return xe},J=new Ht,de={x:132,z:-178};[[-125,-135,9,70],[-150,-95,5,36],[-170,-70,7,48],[-82,-215,8,95],[52,-255,10,58],[72,-240,4.5,30],[195,-105,6,40],[-30,-300,9,80],[de.x,de.z,30,22]].forEach(([ae,le,xe,ye],z,Le)=>{let ve=z===Le.length-1,B=11+ye*.5-.1;J.add(ee(z*9.1,ve),{m:I(ae,B-ye/2-8,le,0,z,0,xe,ye+16,xe*o(.8,1.1)),flat:!0,color:y=>{let Z=.42+Xt(y.x*.2,y.y*.6,y.z*.2)*.24,Q=y.y>B-1.5?.12:0;return[Z-Q*.4,Z+Q*.3,Z*.95-Q*.3]}}),f.push({x:ae,z:le,r:xe*1.2+1.5,key:"pStacks"})});{let le=new F(de.x,21.9,de.z),xe=new Be(2.6,3.8,26,16,8,!1);J.add(xe,{m:I(le.x,le.y+13,le.z),color:ye=>Math.floor((ye.y-21.9)/6.5)%2?[.55,.22,.2]:[.92,.91,.88]}),J.add(new Be(4,4,.5,16),{m:I(le.x,le.y+26.2,le.z),color:()=>[.2,.2,.22]}),J.add(new Be(2,2,.6,12),{m:I(le.x,le.y+26.7,le.z),color:()=>[.2,.2,.22]}),J.add(new $t(2.6,2.6,12),{m:I(le.x,le.y+31.3,le.z),color:()=>[.25,.23,.24]}),J.add(new Ne(7,4,5),{m:I(le.x+7,le.y+2,le.z+3),color:()=>[.85,.84,.8]}),J.add(new $t(5,2.6,4),{m:I(le.x+7,le.y+5.3,le.z+3,0,Math.PI/4,0,1,1,.75),color:()=>[.45,.25,.22]})}x(new rt(J.geometry(),wn(a,c.pStacks,{color:11051942,sink:140})),"pStacks");let re=new F(de.x,11+22*.5-.1+28.5,de.z),se=new rt(new Be(1.8,1.8,3.2,12),new un({color:16769712,fog:!1}));se.position.copy(re),x(se,"pStacks",{receive:!1});let me=new on;me.position.copy(re);let ze=new Bt({transparent:!0,depthWrite:!1,blending:Gn,side:tn,fog:!1,uniforms:{uOpacity:{value:0}},vertexShader:"varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position, 1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uOpacity; varying float vY; varying vec3 vN; varying vec3 vV; void main(){ float t = clamp(-vY, 0.0, 1.0); float facing = abs(dot(normalize(vN), normalize(vV))); float a = pow(1.0 - t, 2.2) * smoothstep(0.0, 0.03, t) * pow(facing, 1.6); gl_FragColor = vec4(vec3(1.0, 0.9, 0.72) * a * uOpacity, 1.0); }"});[0,Math.PI].forEach(ae=>{let le=new rt(new $t(1,1,20,1,!0).translate(0,-.5,0),ze);le.rotation.set(Math.PI/2,0,0),le.scale.set(8,230,8);let xe=new on;xe.rotation.y=ae,xe.add(le),le.position.z=0,me.add(xe)}),i.add(me);let Oe=(ae,le,xe,ye,z,Le)=>{let ve=new Ht,B=[];for(let Z=0;Z<ae;Z++){let Q=Z/ae*Math.PI*2+s()*.7,j=o(le,xe),oe=o(.15,.55),ce=s()*ye,K=Math.cos(Q)*ce,ie=Math.sin(Q)*ce,pe=Math.cos(Q)*oe,Ee=Math.sin(Q)*oe,_e=-Math.sin(Q)*z,Te=Math.cos(Q)*z,Ce=[K+pe*j*.35,j*.55,ie+Ee*j*.35],Fe=[K+pe*j,j*.92,ie+Ee*j];B.push([K-_e,0,ie-Te],[K+_e,0,ie+Te],[Ce[0]+_e*.6,Ce[1],Ce[2]+Te*.6]),B.push([K-_e,0,ie-Te],[Ce[0]+_e*.6,Ce[1],Ce[2]+Te*.6],[Ce[0]-_e*.6,Ce[1],Ce[2]-Te*.6]),B.push([Ce[0]-_e*.6,Ce[1],Ce[2]-Te*.6],[Ce[0]+_e*.6,Ce[1],Ce[2]+Te*.6],Fe)}let y=xe;return ve.tris(B,Z=>{let Q=Z.y/y;return[Le[0]*(.55+.6*Q),Le[1]*(.55+.6*Q),Le[2]*(.55+.6*Q)]},Z=>Math.pow(Z.y/y,1.5),new F(0,1,0)),ve},pt=Oe(11,.9,1.8,.55,.07,[.48,.6,.3]).geometry(),Se=Oe(9,3.2,5.5,.5,.06,[.6,.66,.42]);[[.15,.1],[-.2,.25],[.05,-.3]].forEach(([ae,le],xe)=>{let ye=4.6+xe*.5;Se.add(new Be(.03,.03,ye,4),{m:I(ae,ye/2,le),color:()=>[.5,.52,.35],tip:()=>.3}),Se.add(new Be(.11,.11,.7,6),{m:I(ae,ye+.2,le),color:()=>[.36,.26,.18],tip:()=>.6})});let Qe=Se.geometry(),ue=(()=>{let ae=new Ht,le=[],xe=8;for(let ye=0;ye<xe;ye++){let z=ye/xe*Math.PI*2+s()*.5,Le=o(1.6,2.3),ve=o(.7,1.1),B=[Math.cos(z),Math.sin(z)],y=[-Math.sin(z),Math.cos(z)],Z=j=>[B[0]*Le*j,ve*Math.sin(j*Math.PI*.75)-.25*j*j,B[1]*Le*j],Q=9;for(let j=0;j<Q;j++){let oe=j/Q,ce=(j+1)/Q,K=(oe+ce)/2,ie=Z(oe),pe=Z(ce),Ee=Z(K),_e=.34*Math.sin(Math.PI*Math.min(1,K*1.1))*(1-K*.4)+.03,Te=y[0]*_e,Ce=y[1]*_e;le.push(ie,pe,[Ee[0]+Te,Ee[1]-.06,Ee[2]+Ce]),le.push(ie,[Ee[0]-Te,Ee[1]-.06,Ee[2]-Ce],pe)}}return ae.tris(le,ye=>{let z=Math.hypot(ye.x,ye.z)/2.3;return[.36+z*.22,.52+z*.26,.26+z*.12]},ye=>Math.hypot(ye.x,ye.z)/2.3,new F(0,1,0)),ae.geometry()})(),he=[],Me=(ae,le)=>{let xe=wn(a,c[ae],{sway:le,side:tn,color:16777215,snowBias:-1,softBack:!0});return he.push(xe),xe},Ke=null,ke=null,je=null,Tt=(ae,le,xe)=>{let ye=(()=>{let j=new Ht,oe=new Dt(1,14,7,0,Math.PI*2,0,Math.PI/2),ce=oe.attributes.position,K=new F;for(let pe=0;pe<ce.count;pe++){K.fromBufferAttribute(ce,pe);let Ee=1+(Xt(K.x*3,K.y*3,K.z*3)-.5)*.4;ce.setXYZ(pe,K.x*Ee,K.y*.32*Ee,K.z*Ee)}oe.computeVertexNormals();let ie=[[.86,.42,.1],[.72,.18,.08],[.92,.68,.16],[.55,.3,.12]];j.add(oe,{color:pe=>{let Ee=ie[Math.floor(Xt(pe.x*6,pe.y*6,pe.z*6)*3.99)],_e=.7+Xt(pe.x*20,0,pe.z*20)*.5;return[Ee[0]*_e,Ee[1]*_e,Ee[2]*_e]}});for(let pe=0;pe<26;pe++){let Ee=s()*6.28,_e=Math.sqrt(s())*1.15,Te=ie[pe%4];j.add(new Ft(.16,.1),{m:I(Math.cos(Ee)*_e,.33*(1-_e*_e*.6)+.02,Math.sin(Ee)*_e,-Math.PI/2+o(-.4,.4),s()*6,0),color:()=>Te})}return j.geometry()})(),z=[];for(let j=0;z.length<320&&j<6e3;j++){let oe=ae[Math.floor(s()*ae.length)];if(!oe)break;let ce=s()*6.28,K=o(2,9),ie=oe.p.x+Math.cos(ce)*K,pe=oe.p.z+Math.sin(ce)*K,Ee=e(ie,pe);if(Ee<1||Ee>70||le(ie,pe))continue;let _e=o(1.4,3.2);z.push({p:new F(ie,Ee-.1,pe),q:g(ie,pe,s()*6.28,.8),s:new F(_e,_e*o(.8,1.3),_e*o(.7,1.1))})}E(ye,wn(a,c.leaves,{side:tn,softBack:!0,snowBias:-1}),z,"leaves");let Le=(j,oe)=>{let ce=new Ht;for(let K=0;K<6;K++){let ie=s()*6.28,pe=s()*.5,Ee=Math.cos(ie)*pe,_e=Math.sin(ie)*pe,Te=o(.35,.7);ce.add(new Be(.012,.016,Te,4).translate(0,Te/2,0),{m:I(Ee,0,_e),color:()=>[.32,.5,.24],tip:()=>0});for(let Ce=0;Ce<5;Ce++){let Fe=Ce/5*6.28+ie;ce.add(new Dt(.06,6,4),{m:I(Ee+Math.cos(Fe)*.06,Te,_e+Math.sin(Fe)*.06,0,-Fe,0,1.3,.3,.7),color:()=>j,tip:()=>1})}ce.add(new Dt(.035,6,4),{m:I(Ee,Te+.015,_e),color:()=>oe,tip:()=>1}),ce.add(new Ft(.14,.05),{m:I(Ee+.04,Te*.4,_e,0,ie,.5),color:()=>[.34,.55,.26],tip:()=>0})}return ce.geometry()},ve=wn(a,c.flowers,{sway:.08,side:tn,softBack:!0,snowBias:-1});[[[.92,.45,.62],[.95,.85,.3]],[[.96,.84,.25],[.7,.45,.15]],[[.72,.68,.95],[.98,.95,.6]],[[.98,.97,.95],[.95,.8,.25]]].forEach(([j,oe],ce)=>{let K=[];for(let ie=0;K.length<520&&ie<3e4;ie++){let pe=o(-420,420),Ee=o(-420,190),_e=e(pe,Ee);if(_e<1||_e>55||le(pe,Ee)||!v(pe,Ee)||xe(pe,Ee,3)||Xt(pe*.025+ce*3,1,Ee*.025)<.5)continue;let Te=o(1.6,2.6);K.push({p:new F(pe,_e-.05,Ee),q:g(pe,Ee,s()*6.28,.5),s:new F(Te,Te,Te)})}E(Le(j,oe),ve,K,"flowers")});let B=(()=>{let j=new Ht,oe=Vt("wood",K=>{let ie=.5+Xt(K.x*6,K.y*6,K.z*6)*.12;return[ie,ie*.8,ie*.58]});[[-.22,-.18],[.22,-.18],[-.22,.18],[.22,.18]].forEach(([K,ie])=>j.add(new Ne(.06,.4,.06),{m:I(K,.2,ie),color:oe})),j.add(new Ne(.58,.06,.5),{m:I(0,.42,0),color:oe});let ce=[[.92,.9,.84],[.86,.82,.62],[.78,.86,.84]];for(let K=0;K<3;K++)j.add(new Ne(.5,.24,.44),{m:I(0,.57+K*.245,0),color:()=>ce[K]});return j.add(new Ne(.56,.05,.5),{m:I(0,1.3,0),color:()=>[.6,.58,.55]}),[-1,1].forEach(K=>j.add(new Ne(.34,.03,.54),{m:I(K*.14,1.38,0,0,0,-K*.5),color:()=>[.45,.42,.4]})),j.add(new Ne(.22,.03,.02),{m:I(0,.49,.225),color:()=>[.08,.06,.05]}),j.add(new Ne(.3,.02,.1),{m:I(0,.46,.27,.25,0,0),color:oe}),j.geometry()})(),y=[],Z=[];[[-5.6,-.6],[-5.6,.9],[-5.6,2.4]].forEach(([j,oe])=>{let ce=St.x-oe*St.S,K=St.z+j*St.S,ie=e(ce,K);y.push({p:new F(ce,ie,K),q:new _t().setFromAxisAngle(new F(0,1,0),Math.PI+.1),s:new F(St.S,St.S,St.S)}),f.push({x:ce,z:K,r:2.8,key:"hives"}),Z.push(ce,ie+4.5,K)}),E(B,wn(a,c.hives,{rich:!0,grain:.02}),y,"hives",{cast:!0});{let oe=new Lt,ce=new Float32Array(60*3),K=new Float32Array(60);for(let pe=0;pe<60;pe++){let Ee=pe%3;ce.set([Z[Ee*3],Z[Ee*3+1],Z[Ee*3+2]],pe*3),K[pe]=s()}oe.setAttribute("position",new zt(ce,3)),oe.setAttribute("aSeed",new zt(K,1));let ie=new Bt({transparent:!0,depthWrite:!1,uniforms:{uTime:t.uTime,uOpacity:{value:0}},vertexShader:`uniform float uTime; attribute float aSeed; varying float vB;
          void main() {
            float t = uTime * (1.2 + aSeed) + aSeed * 40.0;
            vec3 p = position + vec3(sin(t * 1.3) * (1.5 + aSeed * 4.0), sin(t * 2.1) * 1.2 + cos(t * 0.7) * 1.5, cos(t * 1.1) * (1.5 + aSeed * 4.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_PointSize = 26.0 / -mv.z; vB = aSeed;
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`uniform float uOpacity; varying float vB;
          void main() { vec2 q = gl_PointCoord - 0.5; float d = length(q); if (d > 0.5) discard;
            vec3 c = mix(vec3(0.12, 0.1, 0.06), vec3(0.95, 0.75, 0.2), step(0.0, sin(q.x * 30.0)));
            gl_FragColor = vec4(c, uOpacity * smoothstep(0.5, 0.35, d)); }`});je=new Zn(oe,ie),je.frustumCulled=!1,i.add(je)}let Q=[];{let j=-275,oe=-30,ce=1,K=0;for(let ie=0;ie<260;ie++){let pe=e(j,oe);if(Q.push([j,oe]),pe<-.6)break;let Ee=2,_e=e(j+Ee,oe)-e(j-Ee,oe),Te=e(j,oe+Ee)-e(j,oe-Ee),Ce=Math.hypot(-j,-20-oe)||1,Fe=ce*.7-_e*.6+-j/Ce*.25+(Xt(ie*.1,3,1)-.5)*.5,we=K*.7-Te*.6+(-20-oe)/Ce*.25+(Xt(ie*.1,7,2)-.5)*.5,te=Math.hypot(Fe,we)||1;ce=Fe/te,K=we/te,j+=ce*4,oe+=K*4}}if(Q.length>4){let j=[],oe=[],ce=[],K=0;Q.forEach(([pe,Ee],_e)=>{let[Te,Ce]=Q[Math.max(0,_e-1)],[Fe,we]=Q[Math.min(Q.length-1,_e+1)],te=Fe-Te,Pe=we-Ce,fe=Math.hypot(te,Pe)||1;te/=fe,Pe/=fe;let Ue=3+3.6*Math.min(1,_e/25)+Math.sin(_e*.4)*.8,He=pe-Pe*Ue,Ae=Ee+te*Ue,nt=pe+Pe*Ue,Ze=Ee-te*Ue,it=Math.max(e(He,Ae),e(nt,Ze),e(pe,Ee))+.32;if(_e&&(K+=Math.hypot(pe-Q[_e-1][0],Ee-Q[_e-1][1])),j.push(He,it,Ae,nt,it,Ze),oe.push(0,K/10,1,K/10),_e){let wt=(_e-1)*2;ce.push(wt,wt+1,wt+2,wt+1,wt+3,wt+2)}});let ie=new Lt;ie.setAttribute("position",new ut(j,3)),ie.setAttribute("uv",new ut(oe,2)),ie.setIndex(ce),ke=new Bt({transparent:!0,depthWrite:!1,fog:!0,side:tn,uniforms:js.merge([qe.fog,{uOpacity:{value:0},uColor:{value:new Ye(6985126)}}]),vertexShader:["varying vec2 vUv;","#include <fog_pars_vertex>","void main() {","  vUv = uv; vec4 mvPosition = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mvPosition;","  #include <fog_vertex>","}"].join(`
`),fragmentShader:["uniform float uTime, uOpacity; uniform vec3 uColor; varying vec2 vUv;","#include <fog_pars_fragment>","float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }","void main() {","  float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);","  float flow = n(vec2(vUv.x * 5.0, vUv.y * 6.0 - uTime * 1.6)) * 0.6 + n(vec2(vUv.x * 11.0, vUv.y * 14.0 - uTime * 2.4)) * 0.4;","  float foam = smoothstep(0.8, 0.95, flow) * 0.45;","  vec3 col = mix(uColor * (0.55 + 0.25 * flow), vec3(0.85, 0.92, 0.93), foam) * mix(0.75, 1.0, edge);","  gl_FragColor = vec4(col, uOpacity * (0.35 + 0.55 * edge));","  #include <colorspace_fragment>","  #include <fog_fragment>","}"].join(`
`)}),ke.uniforms.uTime=t.uTime,Ke=new rt(ie,ke),Ke.renderOrder=1,x(Ke,"creek",{receive:!1}),lt=Q}},lt=null,ct=40,It=new Map,gt=()=>{It.clear(),f.forEach(ae=>{let le=ae.r+2;for(let xe=Math.floor((ae.x-le)/ct);xe<=Math.floor((ae.x+le)/ct);xe++)for(let ye=Math.floor((ae.z-le)/ct);ye<=Math.floor((ae.z+le)/ct);ye++){let z=xe+","+ye;It.has(z)||It.set(z,[]),It.get(z).push(ae)}})},xt=(ae,le)=>It.get(Math.floor(ae/ct)+","+Math.floor(le/ct))||[];return{shared:a,show:c,groups:d,solids:f,zones:u,cabinAt:w,circleAt:S,inClearing(ae,le){return u.some(xe=>Math.hypot(xe.x-ae,xe.z-le)<xe.r)},blocks(ae,le,xe,ye,z){for(let Le of xt(ae,le)){if(ye[Le.key]<.5||Le.top!==void 0&&z>=Le.top-.7)continue;let ve=Le.x-ae,B=Le.z-le,y=Le.r+xe;if(ve*ve+B*B<y*y)return!0}return!1},tops(ae,le,xe,ye){for(let z of xt(ae,le)){if(z.top===void 0||xe[z.key]<.5)continue;let Le=z.x-ae,ve=z.z-le;Le*Le+ve*ve<z.rt*z.rt&&ye.push(z.top)}return ye},plant(ae,le=0){let xe=(Z,Q,j)=>ae.some(oe=>{let ce=oe.p.x-Z,K=oe.p.z-Q;return ce*ce+K*K<j*j}),ye=(Z,Q,j=0)=>u.some(oe=>Math.hypot(oe.x-Z,oe.z-Q)<oe.r+j),z=[],Le=[];for(let Z=0,Q=0;Z<70&&Q<8e3;Q++){let j=ae[Math.floor(s()*ae.length)];if(!j)break;let oe=s()*6.28,ce=o(7,20),K=j.p.x+Math.cos(oe)*ce,ie=j.p.z+Math.sin(oe)*ce,pe=e(K,ie);if(pe<1.5||pe>68||ye(K,ie,10))continue;let Ee=o(9,18),_e=o(.8,1.4),Te=s()*6.28,Ce=Math.cos(Te)*Ee/2,Fe=-Math.sin(Te)*Ee/2;if(xe(K,ie,6)||xe(K+Ce,ie+Fe,4)||xe(K-Ce,ie-Fe,4))continue;let we=e(K+Ce,ie+Fe),te=e(K-Ce,ie-Fe),Pe=new _t().setFromEuler(new jt(s()*6.28,Te,Math.atan2(we-te,Ee),"YZX"));z.push({p:new F(K,(we+te)/2+_e*.55,ie),q:Pe,s:new F(Ee,_e,_e)});for(let fe=-.5;fe<=.5;fe+=.125)f.push({x:K+Ce*2*fe,z:ie+Fe*2*fe,r:_e+1.6,key:"pLogs",top:(we+te)/2+_e*.55+(we-te)*fe+_e,rt:_e*1.1});Z++}for(let Z=0,Q=0;Z<90&&Q<8e3;Q++){let j=ae[Math.floor(s()*ae.length)];if(!j)break;let oe=s()*6.28,ce=o(6,16),K=j.p.x+Math.cos(oe)*ce,ie=j.p.z+Math.sin(oe)*ce,pe=e(K,ie);if(pe<1.5||pe>70||xe(K,ie,5)||ye(K,ie))continue;let Ee=o(.9,1.7),_e=o(1.4,3.2);Le.push({p:new F(K,pe-.4,ie),q:g(K,ie,s()*6.28,.4),s:new F(Ee,_e,Ee)}),f.push({x:K,z:ie,r:Ee+1.3,key:"pLogs",top:pe-.4+_e,rt:Ee*.85}),Z++}E(G,U,z,"pLogs",{cast:!0}),E(X,U,Le,"pLogs",{cast:!0});let ve=[];for(let Z=0;ve.length<5200&&Z<6e4;Z++){let Q=o(-470,470),j=o(-470,210),oe=e(Q,j);if(oe<le+.6||oe>66||!v(Q,j)||ye(Q,j)||Xt(Q*.03,0,j*.03)<.42)continue;let ce=o(1.2,2.6);ve.push({p:new F(Q,oe-.15,j),q:g(Q,j,s()*6.28,.5),s:new F(ce,ce*o(.8,1.3),ce)})}E(pt,Me("pGrass",.05),ve,"pGrass");let B=[];for(let Z=0;B.length<1100&&Z<2e4;Z++){let Q=ae[Math.floor(s()*ae.length)];if(!Q)break;let j=s()*6.28,oe=o(2.5,13),ce=Q.p.x+Math.cos(j)*oe,K=Q.p.z+Math.sin(j)*oe,ie=e(ce,K);if(ie<1||ie>70||ye(ce,K))continue;let pe=o(1.6,3.4);B.push({p:new F(ce,ie-.1,K),q:g(ce,K,s()*6.28,.5),s:new F(pe,pe*o(.8,1.1),pe)})}E(ue,Me("pFerns",.03),B,"pFerns");let y=[];for(let Z=0;y.length<700&&Z<9e4;Z++){let Q=o(-280,280),j=o(-280,170),oe=e(Q,j);if(oe<-1.4||oe>1.2||!v(Q,j)||ye(Q,j,-6)||Xt(Q*.05,3,j*.05)<.4)continue;let ce=o(1.1,1.9);y.push({p:new F(Q,oe-.2,j),q:new _t().setFromAxisAngle(new F(0,1,0),s()*6.28),s:new F(ce,ce*o(.8,1.2),ce)})}E(Qe,Me("pReeds",.012),y,"pReeds"),Tt(ae,ye,xe),gt()},update(ae,le,xe,ye){for(let z of xc)c[z].value=ae[z];he.forEach(z=>{z.color.copy(ae.low).multiplyScalar(1.7),z.color.r=Math.min(1.1,z.color.r),z.color.g=Math.min(1.1,z.color.g),z.color.b=Math.min(1.1,z.color.b)});for(let z of l)c[z].value=ae[z]||0;Ke&&(ke.uniforms.uOpacity.value=Math.min(1,(ae.creek||0)*1.2),ke.uniforms.uColor.value.copy(ae.waterC).lerp(new Ye(.32,.52,.56),.5)),je&&(je.material.uniforms.uOpacity.value=ae.hives||0,je.visible=(ae.hives||0)>.05),a.uSnowCover.value=ae.pSnowCover,a.uMoss.value=ae.pMoss,a.uFrost.value=ae.pFrost;for(let[z,Le]of d)z.visible=ae[Le]>.01;se.material.color.setRGB(1.6,1.4,1.05),se.position.y=re.y-(1-ae.pStacks)*140,me.position.y=se.position.y,me.rotation.y=le*.45,me.visible=ae.pStacks>.5,ze.uniforms.uOpacity.value=Math.max(0,ae.pStacks-.5)*.5}}}function hd(i,e){let n=new ks().copy(new Ft(1,1).rotateX(-Math.PI/2)),r=new Float32Array(320*3);for(let a=0;a<320;a++)r[a*3]=Math.random()*120-60,r[a*3+1]=Math.random(),r[a*3+2]=Math.random()*120-60;n.setAttribute("aOff",new xi(r,3)),n.instanceCount=320;let s=new Bt({transparent:!0,depthWrite:!1,fog:!0,uniforms:js.merge([qe.fog,{uOpacity:{value:0},uCam:{value:new F},uWater:{value:0}}]),vertexShader:`
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
      }`});s.uniforms.uTime=e.uTime;let o=new rt(n,s);return o.frustumCulled=!1,i.add(o),{update(a,c,l){s.uniforms.uOpacity.value=a,s.uniforms.uCam.value.copy(c),s.uniforms.uWater.value=l,o.visible=a>.01}}}function ud(i,e){let n=new Ft(1,1).rotateX(-Math.PI/2),r=new xi(new Float32Array(90).fill(-1e5),1);r.setUsage(vl),n.setAttribute("aBorn",r);let s=new Bt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uTime:e.uTime,uColor:{value:new Ye(7240328)},uShow:{value:0}},vertexShader:`
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
      }`}),o=new Yn(n,s,90);o.frustumCulled=!1;let a=new at;a.makeScale(0,0,0);for(let h=0;h<90;h++)o.setMatrixAt(h,a);i.add(o);let c=0,l=1,d=new _t,f=new F(1.15,1,2.3),u=new F;return{mesh:o,place(h,g,v,x,p){l=-l,u.set(h+Math.cos(x)*.9*l,g+.45,v-Math.sin(x)*.9*l),d.setFromUnitVectors(new F(0,1,0),p).multiply(new _t().setFromAxisAngle(new F(0,1,0),x)),a.compose(u,d,f),o.setMatrixAt(c,a),o.instanceMatrix.needsUpdate=!0,r.array[c]=e.uTime.value,r.needsUpdate=!0,c=(c+1)%90},update(h){s.uniforms.uShow.value=h,o.visible=h>.01}}}var Rt=(i,e,t)=>new F(i,e,t),dd={rain:{sat:0,skyTop:"#8f959a",skyHorizon:"#c6c9cb",skyBottom:"#8a8f93",fog:"#b7bbbe",fogDensity:.0042,low:"#6c7175",high:"#878c90",snowC:"#c9cccf",snowLine:170,water:0,waterC:"#6d7378",waterRough:.18,sunC:"#000000",sunDir:Rt(0,.3,-1),sunSize:0,lightC:"#e8e8e8",light:.55,lightDir:Rt(.3,.6,.2),hemiSky:"#cfd2d4",hemiGround:"#55595c",hemi:.95,treeC:"#3f4447",trees:.75,rain:1,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.55,fishy:1,cam:Rt(0,13,105),look:Rt(0,9,0)},frost:{sat:0,skyTop:"#d7d9db",skyHorizon:"#eceded",skyBottom:"#cfd1d3",fog:"#e3e4e5",fogDensity:.0068,low:"#a9adb0",high:"#c3c6c8",snowC:"#eeeff0",snowLine:90,water:0,waterC:"#b4b8bb",waterRough:.4,sunC:"#000000",sunDir:Rt(0,.3,-1),sunSize:0,lightC:"#ffffff",light:.45,lightDir:Rt(-.3,.8,.3),hemiSky:"#f0f0f0",hemiGround:"#8d9093",hemi:1.1,treeC:"#6f7477",trees:.35,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Rt(0,34,140),look:Rt(0,16,-20)},mist:{sat:.55,skyTop:"#93a4b1",skyHorizon:"#d6dcdf",skyBottom:"#a9b5bd",fog:"#ccd4d8",fogDensity:.0047,low:"#56645c",high:"#77858d",snowC:"#e5e9eb",snowLine:95,water:0,waterC:"#7a8c95",waterRough:.22,sunC:"#efe7da",sunDir:Rt(.5,.35,-1),sunSize:.0016,lightC:"#f2ece2",light:.85,lightDir:Rt(.5,.6,-.4),hemiSky:"#d5dde2",hemiGround:"#4d5650",hemi:.8,treeC:"#34433b",trees:.95,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:1,cam:Rt(-38,22,112),look:Rt(0,20,-40)},snow:{sat:.6,skyTop:"#a3afba",skyHorizon:"#e1e5e8",skyBottom:"#c9d1d7",fog:"#dde2e6",fogDensity:.0045,low:"#e7ebee",high:"#f2f4f6",snowC:"#fbfcfd",snowLine:-20,water:.5,waterC:"#c3ccd2",waterRough:.75,sunC:"#e9e6e0",sunDir:Rt(-.4,.3,-1),sunSize:.0014,lightC:"#f4f1ec",light:.7,lightDir:Rt(-.4,.5,.3),hemiSky:"#eef2f5",hemiGround:"#8a96a0",hemi:.95,treeC:"#36443f",trees:1,rain:0,snow:1,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.45,cam:Rt(24,11,78),look:Rt(0,12,-10)},night:{sat:.45,skyTop:"#04060d",skyHorizon:"#1a2238",skyBottom:"#0a0e18",fog:"#111727",fogDensity:.0032,low:"#3a4352",high:"#4a5262",snowC:"#8a93a3",snowLine:160,water:0,waterC:"#0e1421",waterRough:.1,sunC:"#d8d4c6",sunDir:Rt(-.45,.32,-1),sunSize:.0022,lightC:"#93a0bf",light:.16,lightDir:Rt(-.45,.5,-.6),hemiSky:"#26304a",hemiGround:"#07090f",hemi:.16,treeC:"#2c3a33",trees:.85,rain:0,snow:0,fire:.85,stars:1,aurora:0,aur1:"#000000",aur2:"#000000",mist:.25,dof:.6,cam:Rt(0,10,92),look:Rt(0,16,-40)},aurora:{sat:.65,skyTop:"#03060a",skyHorizon:"#122029",skyBottom:"#070c10",fog:"#0d161b",fogDensity:.0034,low:"#3b464c",high:"#4c575e",snowC:"#a9b5bb",snowLine:55,water:0,waterC:"#0c1418",waterRough:.08,sunC:"#000000",sunDir:Rt(0,.3,-1),sunSize:0,lightC:"#8fb1aa",light:.14,lightDir:Rt(.2,.6,-.8),hemiSky:"#1f3a3a",hemiGround:"#05080a",hemi:.18,treeC:"#2a3833",trees:.6,rain:0,snow:.22,fire:0,stars:.75,aurora:1,aur1:"#57e0a4",aur2:"#a77de0",mist:.15,dof:.3,cam:Rt(30,15,102),look:Rt(0,34,-80)},ocean:{sat:.7,skyTop:"#4a4e68",skyHorizon:"#d4a28b",skyBottom:"#7c6670",fog:"#c29d90",fogDensity:.0026,low:"#4a4652",high:"#5d5765",snowC:"#a69aa3",snowLine:200,water:11,waterC:"#585d77",waterRough:.14,sunC:"#ecd0b2",sunDir:Rt(0,.17,-1),sunSize:.0045,lightC:"#efcfb4",light:.95,lightDir:Rt(0,.2,-1),hemiSky:"#c9a6a0",hemiGround:"#3c3a4a",hemi:.7,treeC:"#2f2c35",trees:0,rain:0,snow:0,fire:0,stars:.15,aurora:0,aur1:"#000000",aur2:"#000000",mist:.35,cam:Rt(0,7,125),look:Rt(0,9,0)},spring:{sat:.78,skyTop:"#86acd2",skyHorizon:"#e4eef1",skyBottom:"#c9d8de",fog:"#dbe6e8",fogDensity:.0031,low:"#6e8f55",high:"#8ea478",snowC:"#eef2f2",snowLine:150,water:0,waterC:"#6a95a6",waterRough:.18,sunC:"#fff2d6",sunDir:Rt(.4,.42,-1),sunSize:.0018,lightC:"#fff3df",light:1,lightDir:Rt(.4,.7,-.3),hemiSky:"#dde9f1",hemiGround:"#5a6c48",hemi:.9,treeC:"#4a7342",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.2,cam:Rt(-20,12,100),look:Rt(0,12,-20),bloom:1,flowers:1,hives:1,creek:1,fishy:.3},summer:{sat:.92,skyTop:"#3f86cf",skyHorizon:"#cde6f4",skyBottom:"#93c4d6",fog:"#cbe2ec",fogDensity:.0021,low:"#5a8e42",high:"#7ba158",snowC:"#f2f4f4",snowLine:210,water:0,waterC:"#21b2b4",waterRough:.05,sunC:"#fff5d8",sunDir:Rt(.2,.62,-1),sunSize:.0026,lightC:"#fff6e4",light:1.35,lightDir:Rt(.3,.85,-.3),hemiSky:"#cbe6ff",hemiGround:"#4a6a38",hemi:.95,treeC:"#3d8a38",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:0,cam:Rt(10,11,110),look:Rt(0,10,-10),lush:1,fruitCol:1,sand:1,creek:.7,flowers:.45,fishy:.4},fall:{sat:.82,skyTop:"#7a93ab",skyHorizon:"#ead7bd",skyBottom:"#b8a38c",fog:"#d8c6ad",fogDensity:.0036,low:"#7d6b44",high:"#92805b",snowC:"#efece6",snowLine:175,water:0,waterC:"#5c7380",waterRough:.2,sunC:"#ffd7a4",sunDir:Rt(-.5,.24,-1),sunSize:.002,lightC:"#ffdaa8",light:.95,lightDir:Rt(-.5,.5,-.4),hemiSky:"#e5d4bd",hemiGround:"#5a4a34",hemi:.85,treeC:"#4c5a3a",trees:1,rain:0,snow:0,fire:0,stars:0,aurora:0,aur1:"#000000",aur2:"#000000",mist:.3,cam:Rt(-30,14,105),look:Rt(0,12,-30),fall:1,bare:.4,leaves:1,creek:.5}},wx={fall:0,bare:0,bloom:0,lush:0,leaves:0,flowers:0,hives:0,creek:0,fishy:0,sand:0,fruitCol:0,dof:1},jn={};for(let i in dd)jn[i]={...wx,...dd[i]},xc.forEach((e,t)=>{jn[i][e]=cd[i][t]});var fd=Object.keys(jn),pd=["skyTop","skyHorizon","skyBottom","fog","low","high","snowC","waterC","sunC","lightC","hemiSky","hemiGround","treeC","aur1","aur2"],md=["sunDir","lightDir","cam","look"],os=i=>{let e={};for(let t in i)e[t]=pd.includes(t)?new Ye(i[t]):md.includes(t)?i[t].clone():i[t];return e},bx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function gd(i){let e=jn[i]?i:"rain",t=os(jn[e]),n=os(jn[e]),r=os(jn[e]),s=0,o=1;return{cur:t,get name(){return e},go(a,c,l){jn[a]||(a="rain"),e=a,n=os(t),r=os(jn[a]),s=l,o=Math.max(1,c)},offsetHome(a,c){t.cam.add(a),t.look.add(c),n=os(t)},step(a){let c=Math.min(1,(a-s)/o),l=bx(c);for(let d in r)pd.includes(d)||md.includes(d)?t[d].copy(n[d]).lerp(r[d],l):t[d]=n[d]+(r[d]-n[d])*l;return c}}}var Tx=pc(4071),Ti=(i,e)=>i+Tx()*(e-i),_c=40;function xd({scene:i,shared:e,isClearing:t}){let n=(()=>{let H=new Ht,G=new Be(.05,.16,2.9,8,5,!0).translate(0,1.45,0);{let V=G.attributes.position,ee=new F;for(let J=0;J<V.count;J++){ee.fromBufferAttribute(V,J);let de=Math.atan2(ee.z,ee.x),re=ee.y<.4?1+(.4-ee.y)*2.6*(.55+.45*Math.max(0,Math.sin(de*4+1))):1;V.setXYZ(J,ee.x*re+Math.sin(ee.y*1.7)*.03,ee.y,ee.z*re)}}H.add(G,{color:V=>{let ee=.42+.16*gc(V.y*7,Math.atan2(V.z,V.x)*2.5);return[ee*1.35,ee*.98,ee*.72]},normal:(V,ee)=>ee.set(V.x,.12,V.z).normalize()});let X=6,U=0;for(let V=0;V<X;V++){let ee=V/(X-1),J=1.1-ee*.8,de=1.02-ee*.42,re=.5+ee*2.5,se=5+V%3,me=V*1.93,ze=(Se,Qe)=>{let ue=Se.attributes.position,he=new F;for(let Me=0;Me<ue.count;Me++){he.fromBufferAttribute(ue,Me);let Ke=Math.hypot(he.x,he.z);if(Ke<.001)continue;let ke=Math.atan2(he.z,he.x),je=Math.pow(.5+.5*Math.sin(ke*se+me),2),Tt=.82+.32*je+.06*Math.sin(ke*17+V*3)+.04*Math.sin(ke*31+V),lt=Ke/J;ue.setXYZ(Me,he.x*Tt,he.y-(.1+.16*je)*J*lt*lt-(Qe?.02:0),he.z*Tt)}},Oe=new $t(J,de,14,3,!0);ze(Oe,!1),Oe.translate(0,re+de/2,0),H.add(Oe,{mat:13,color:Se=>{let Qe=(Se.y-re)/de,he=.55+.5*Math.min(1,Math.hypot(Se.x,Se.z)/J)+.22*Qe+.08*(li(Se.x*9.1,Se.z*7.3+Se.y)-.5)+V*.03;return[he*.98,he,he*.94]},normal:(Se,Qe)=>{let ue=Math.hypot(Se.x,Se.z);Qe.set(Se.x,ue*.55+.32,Se.z).normalize()},tip:Se=>{let Qe=(Se.y-re)/de,ue=Math.atan2(Se.z,Se.x),he=.5+.5*Math.sin(ue*se+me);return Math.min(1,Math.max(0,(Qe-.08)*1.5)*(.45+.55*he)+.25*li(Se.x*5.3,Se.z*4.1))}});let pt=new $t(J*.97,de*.38,14,1,!0);ze(pt,!0),pt.translate(0,re+de*.19-.02,0),H.add(pt,{mat:13,flip:!0,color:Se=>{let ue=.42+.3*Math.min(1,Math.hypot(Se.x,Se.z)/J);return[ue*.95,ue,ue*.9]},normal:(Se,Qe)=>Qe.set(Se.x*.3,-1,Se.z*.3).normalize()}),U=re+de}return H.add(new $t(.05,.5,5,1,!0).translate(0,U+.18,0),{mat:13,color:()=>[1,1.02,.95],tip:()=>.7}),H.geometry()})(),r={value:1},s={uFall:{value:0},uBloom:{value:0},uLush:{value:0},uBare:{value:0}},o=wn({...e,...s,uMoss:{value:0},uFrost:e.uSnowCover},r,{sway:.022,color:3358771,snowBias:-.3,crisp:!0,tree:!0}),a=1400,c=[],l=new Yn(n,o,a);{let H=new at,G=new _t,X=new F,U=new F,V=new Ye,ee=0,J=0;for(;ee<a&&J++<6e4;){let re=Ti(-650,650),se=Ti(-700,260),me=mn(re,se);if(me<3||me>85||zi(re*.02,se*.02,3)<.42||t(re,se))continue;let ze=Ti(2,4.6);U.set(re,me-.4,se),X.set(ze*Ti(.8,.95),ze*Ti(1.5,2.1),ze*Ti(.8,.95)),G.setFromAxisAngle(new F(0,1,0),Ti(0,Math.PI*2));let Oe=Ti(.82,1.12);V.setRGB(Oe,Oe*Ti(.97,1.03),Oe*Ti(.94,1)),c.push({p:U.clone(),s:X.clone(),q:G.clone(),c:V.clone()}),H.compose(U,G,X),l.setColorAt(ee,V),l.setMatrixAt(ee++,H)}l.count=ee;let de=new Float32Array(a);for(let re=0;re<a;re++)de[re]=li(re*1.37,9.1);n.setAttribute("aHash",new xi(de,1))}l.castShadow=!0,l.receiveShadow=!0,i.add(l);let d=new Map;c.forEach((H,G)=>{let X=Math.floor(H.p.x/_c)+","+Math.floor(H.p.z/_c);d.has(X)||d.set(X,[]),d.get(X).push(G)});let f=(H,G,X)=>{let U=Math.floor(H/_c),V=Math.floor(G/_c);for(let ee=-1;ee<=1;ee++)for(let J=-1;J<=1;J++){let de=d.get(U+ee+","+(V+J));if(de){for(let re of de)if(X(re))return!0}}return!1},u=(()=>{let H=new Ht,G=(X,U)=>li(X*3.17+U,X*1.91-U*2.3);for(let X=0;X<14;X++){let U=X%5,V=U/5,ee=1.1-V*.8,J=.5+V*2.5,de=X*2.39996+G(X,1)*.6,re=ee*(.62+.28*G(X,2)),se=Math.cos(de)*re,me=Math.sin(de)*re,ze=.14+.16*G(X,3),Oe=.11+.05*G(X,4),pt=J-.2*ee*(re/ee)*(re/ee);H.add(new Be(.006,.008,ze,4,1),{m:new at().makeTranslation(se,pt-ze/2,me),color:()=>[.35,.33,.3]});let Se=new Dt(Oe,10,7),Qe=Se.attributes.position;for(let he=0;he<Qe.count;he++){let Me=Qe.getY(he);Qe.setY(he,(Me<0?Me*1.25:Me)*.5)}Se.computeVertexNormals();let ue=.6+.18*G(X,5);H.add(Se,{m:new at().makeTranslation(se,pt-ze-Oe*.5,me),color:he=>{let Me=.85+.25*Math.max(0,he.y-(pt-ze-Oe*.5))/Oe;return[ue*Me,ue*Me,ue*Me*.98]}})}return H.geometry()})(),h={uFruitCol:{value:0}},g=wn({...e,uMoss:{value:0},uFrost:{value:0}},r,{sway:.022,color:14211288});{let H=g.onBeforeCompile;g.onBeforeCompile=G=>{H(G),Object.assign(G.uniforms,h),G.vertexShader=G.vertexShader.replace("#include <common>",`#include <common>
uniform float uFruitCol;`).replace("#include <color_vertex>",`vColor = vec4(1.0);
          #ifdef USE_COLOR
            vColor.rgb *= color;
          #endif
          #ifdef USE_INSTANCING_COLOR
            vColor.rgb *= mix(vec3(1.0), instanceColor.rgb * 1.5, uFruitCol);
          #endif`)}}let v=new Yn(u,g,l.count),x=c.map((H,G)=>li(G*.37,5.1)<.5);{let H=new at,G=new at().makeScale(0,0,0),X=[13123630,14710826,14266416,10271290,12070954];c.forEach((U,V)=>{v.setMatrixAt(V,x[V]?H.compose(U.p,U.q,U.s):G),v.setColorAt(V,new Ye(X[V%X.length]))}),v.computeBoundingSphere()}v.castShadow=!0,i.add(v);let p=(()=>{let H=new Ht,G=(X,U,V,ee,J)=>H.add(new Be(J*.35,J,V,5).translate(0,V/2,0),{m:new at().compose(new F(0,X,0),new _t().setFromEuler(new jt(0,U,ee,"YXZ")),new F(1,1,1)),color:()=>[.36,.28,.22]});for(let X=0;X<16;X++){let U=.55+X*.17,V=(1-X/18)*.9+.12;G(U,X*2.4,V,1.1+X%3*.12,.03),G(U+.05,X*2.4+.9,V*.6,.8,.02)}return H.geometry()})(),E={value:0},R=new Yn(p,wn({...e,uMoss:{value:0},uFrost:{value:0}},E,{sway:.018,color:12101784}),l.count);{let H=new at().makeScale(0,0,0),G=new at;c.forEach((X,U)=>R.setMatrixAt(U,li(U*1.37,9.1)<.45?G.compose(X.p,X.q,X.s):H)),R.computeBoundingSphere()}R.castShadow=!0,i.add(R);let w=new Ye(2.6,2.6,2.4),S=-1,T=new Map,D=new _t,M=new jt,L=new at,O=()=>l.visible&&r.value>.5;return{mesh:l,fruits:v,base:c,get solid(){return O()},blocks(H,G,X=0){return O()?f(H,G,U=>{let V=c[U],ee=V.p.x-H,J=V.p.z-G,de=V.s.x*.75+1.2+X;return ee*ee+J*J<de*de}):!1},countNear(H,G,X){let U=0;return O()?(f(H,G,V=>{let ee=c[V].p.x-H,J=c[V].p.z-G;return ee*ee+J*J<X*X&&U++,!1}),U):0},pick(H){if(!O())return-1;let G=H.intersectObjects([l,v],!1)[0];return G?G.instanceId:-1},hover(H){return H===S?!1:(S>=0&&c[S]&&l.setColorAt(S,c[S].c),S=H,H>=0&&l.setColorAt(H,w),l.instanceColor.needsUpdate=!0,!0)},get hovered(){return S},shake(H,G){T.set(H,G)},update(H,G){o.color.copy(H.treeC),r.value=H.trees,l.visible=v.visible=H.trees>.01,s.uFall.value=H.fall,s.uBloom.value=H.bloom,s.uLush.value=H.lush,s.uBare.value=H.bare,h.uFruitCol.value=H.fruitCol,E.value=Math.min(1,H.bare*2.5)*H.trees,R.visible=E.value>.01,T.size&&(T.forEach((X,U)=>{let V=(G-X)/1e3,ee=c[U];if(!ee){T.delete(U);return}let J=V>2.6?0:Math.sin(V*15)*Math.exp(-V*2.1)*.17;M.set(J*.6,0,J),D.setFromEuler(M).multiply(ee.q),L.compose(ee.p,D,ee.s),l.setMatrixAt(U,L),x[U]&&v.setMatrixAt(U,L),V>2.6&&T.delete(U)}),l.instanceMatrix.needsUpdate=!0,v.instanceMatrix.needsUpdate=!0)}}}var yc=.6*St.S,Ax=70;function _d({trees:i,props:e,cabin:t,scenes:n,water:r}){let s=[],o=[],a=(l,d)=>{let f=mn(l,d);for(let u=0;u<6.28;u+=1.57)f=Math.max(f,mn(l+Math.cos(u)*4,d+Math.sin(u)*4));return Math.max(f,r.position.y)},c=()=>n.cur.pCabin>.5;return{groundAt:a,floor(l,d,f){s.length=0,o.length=0,c()&&t.floors(l,d,o),o.some(x=>x.under)||(s.push(a(l,d)),e.tops(l,d,n.cur,s));let h=-1/0,g=!1,v=(x,p)=>{x<=f+yc&&x>h&&(h=x,g=p)};if(s.forEach(x=>v(x,!1)),o.forEach(x=>v(x.y,!0)),h===-1/0){let x=1/0;s.forEach(p=>{Math.abs(p-f)<x&&(x=Math.abs(p-f),h=p,g=!1)}),o.forEach(p=>{Math.abs(p.y-f)<x&&(x=Math.abs(p.y-f),h=p.y,g=!0)})}return{y:h,built:g}},blocked(l,d,f,u=0){return!(Math.abs(l)<820&&d>-900&&d<420)||c()&&t.blocked(l,d,u,f)?!0:c()&&t.inside(l,d,f)?!1:mn(l,d)>Ax||i.blocks(l,d,u)?!0:e.blocks(l,d,u,n.cur,f)},inside(l,d,f){return c()&&f!==void 0&&t.inside(l,d,f)}}}var as=7.5,io=24,Rx=2.4,Cx=44,Px=15.5,Ix=-1.1,Lx=.9,Nx=.35,ro=i=>(i=Math.min(1,Math.max(0,i)),i*i*i*(i*(i*6-15)+10));function yd({physics:i,trees:e}){let t={mode:"home",x:0,z:0,feet:0,vy:0,air:!1,vx:0,vz:0,yaw:0,pitch:0,yawTo:0,pitchTo:0,eyeY:0,roll:0,bob:{phase:0,amp:0,run:0,lastStep:0},tw:null},n=new jt(0,0,0,"YXZ"),r=(h,g,v=0)=>(n.set(g,h,v,"YXZ"),new _t().setFromEuler(n)),s=(h,g)=>Math.atan2(-h,-g),o=(h,...g)=>{let v=window.MEOW_SOUND;v&&v[h]&&v[h](...g)},a=(h,g)=>{let v=mn(t.x,t.z);return i.floor(t.x,t.z,t.feet).built?"wood":v<g.position.y+.6?"water":h.name==="snow"||v>h.cur.snowLine-6?"snow":"grass"},c=(h,g,v)=>!e.blocks(h,g,v+.001)&&!i.blocked(h,g,i.groundAt(h,g),v),l=(h,g,v,x)=>{let p=new F(0,0,-1).applyQuaternion(g);p.y=0,p.normalize();let E=Math.atan2(p.z,p.x),R=h.x,w=h.z,S=[];for(let H=-.7;H<=.701;H+=.05)for(let G=70;G<=380;G+=10){let X=E+H,U=R+Math.cos(X)*G,V=w+Math.sin(X)*G,ee=mn(U,V);if(ee<x+1.5||ee>64)continue;let J=(e.solid?Math.min(e.countNear(U,V,40),22)*2:30)-Math.abs(H)*34-G*.045;S.push({x:U,z:V,d:G,score:J})}S.sort((H,G)=>G.score-H.score);let T=null;for(let H of S.slice(0,120)){if(!c(H.x,H.z,4))continue;let G=(R-H.x)/H.d,X=(w-H.z)/H.d,U=!0;for(let V=2;V<70&&U;V+=2.5)U=c(H.x+G*V,H.z+X*V,1.5);for(let V=3;V<30&&U;V+=3)U=c(H.x-G*V,H.z-X*V,1);if(U){T=H;break}}T||(T=S.slice(0,200).find(H=>c(H.x,H.z,2))||null),T||(T={x:R+p.x*60,z:w+p.z*60,d:60});let D=i.floor(T.x,T.z,i.groundAt(T.x,T.z)).y,M=s(p.x,p.z),O=s(T.x-R,T.z-w)-M;O=Math.atan2(Math.sin(O),Math.cos(O)),t.tw={kind:"enter",t0:performance.now(),dur:v?2300+T.d*5.2:700,from:h.clone(),fromQ:g.clone(),to:new F(T.x,D+as,T.z),yaw0:M,yaw1:M+O,lift:v?9+T.d*.02:0},t.mode="enter",t.vx=t.vz=0},d=(h,g,v)=>{t.tw={kind:"leave",t0:performance.now(),dur:v?1800:1,from:h.clone(),fromQ:g.clone()},t.mode="leave",t.vx=t.vz=0,t.vy=0,t.air=!1},f=(h,g)=>{if(i.blocked(h,g,t.feet))return!1;t.x=h,t.z=g;let v=i.floor(t.x,t.z,t.feet).y;return t.air||(v>=t.feet-yc?t.feet=v:(t.air=!0,t.vy=0)),!0},u=(h,g,v,x,p)=>{let E=-Math.sin(t.yaw),R=-Math.cos(t.yaw),w=(g.has("KeyW")||g.has("ArrowUp")?1:0)-(g.has("KeyS")||g.has("ArrowDown")?1:0),S=(g.has("KeyD")||g.has("ArrowRight")?1:0)-(g.has("KeyA")||g.has("ArrowLeft")?1:0),T=g.has("ShiftLeft")||g.has("ShiftRight"),D=E*w-R*S,M=R*w+E*S,L=Math.hypot(D,M),O=io*(T?Rx:1);L>0&&(D=D/L*O,M=M/L*O);let H=1-Math.pow(1-(L>0?.08:.12),h*60);t.vx+=(D-t.vx)*H,t.vz+=(M-t.vz)*H;let G=Math.hypot(t.vx,t.vz)*h,X=Math.max(1,Math.ceil(G/Nx));for(let re=0;re<X;re++){let se=t.vx*h/X,me=t.vz*h/X;if(!f(t.x+se,t.z+me)){if(f(t.x+se,t.z)){t.vz*=.5;continue}if(f(t.x,t.z+me)){t.vx*=.5;continue}t.vx*=.3,t.vz*=.3;break}}if(t.air){t.vy-=Cx*h,t.feet+=t.vy*h;let re=i.floor(t.x,t.z,Math.max(t.feet,t.feet-t.vy*h)).y;if(t.feet<=re){if(t.feet=re,t.air=!1,t.vy<-8){t.bob.amp=Math.min(1.4,t.bob.amp+.5);let se=a(x,p);o("step",se,1.5),setTimeout(()=>o("step",se,1.1),70)}t.vy=0}}else{let re=i.floor(t.x,t.z,t.feet).y;re>t.feet-yc?t.feet=re:(t.air=!0,t.vy=0)}let U=t.feet+as;t.air?t.eyeY=U:(t.eyeY+=(U-t.eyeY)*(1-Math.exp(-h*16)),t.eyeY=Math.min(U+1.5,Math.max(U-1.5,t.eyeY)));let V=v?1-Math.pow(1-.12,h*60):1;t.yaw+=(t.yawTo-t.yaw)*V,t.pitch+=(t.pitchTo-t.pitch)*V;let ee=t.bob,J=Math.hypot(t.vx,t.vz);ee.run+=((T?1:0)-ee.run)*(1-Math.pow(.9,h*60)),ee.amp+=(Math.min(1.2,J/io)-ee.amp)*(1-Math.pow(.88,h*60)),ee.phase+=Math.PI*2*(.95+.5*ee.run)*Math.min(1,J/io+.15)*h*(J>.3?1:.4);let de=Math.floor(ee.phase/Math.PI);return de!==ee.lastStep&&(ee.lastStep=de,J>io*.25&&!t.air)?(o("step",a(x,p),Math.min(1.5,J/io)),!0):!1};return{state:t,get mode(){return t.mode},get walking(){return t.mode==="walk"},get out(){return t.mode!=="home"},get gliding(){return t.mode==="enter"||t.mode==="leave"},enter:l,leave:d,look(h,g,v){t.yawTo-=h*v,t.pitchTo=Math.max(Ix,Math.min(Lx,t.pitchTo-g*v*.8))},turn(h){t.yawTo+=h},jump(){return t.mode!=="walk"||t.air?!1:(t.vy=Px,t.air=!0,!0)},place(h,g,v){t.x=h,t.z=g,t.feet=v!==void 0?v:i.floor(h,g,i.groundAt(h,g)).y,t.feet=i.floor(h,g,t.feet).y,t.eyeY=t.feet+as,t.vx=t.vz=t.vy=0,t.air=!1,t.mode!=="walk"&&(t.mode="walk",t.tw=null)},face(h,g=0){t.yaw=t.yawTo=h,t.pitch=t.pitchTo=g},update(h,g,v,x,p,E,R,w){let S=!1;if(t.mode==="walk"&&(S=u(h,v,p,E,R)),t.mode==="home")return w.pos.copy(x.pos),w.q.copy(x.q),w.roll=0,S;if(t.mode==="enter"){let M=t.tw,L=Math.min(1,(g-M.t0)/M.dur),O=ro(L);w.pos.lerpVectors(M.from,M.to,O);let H=ro((L-.3)/.7);w.pos.y=M.from.y+(M.to.y-M.from.y)*H+M.lift*Math.pow(Math.sin(Math.PI*Math.min(1,L*1.15)),1.4),w.pos.y=Math.max(w.pos.y,Math.max(mn(w.pos.x,w.pos.z),R.position.y)+4);let G=ro(L/.55),X=M.yaw0+(M.yaw1-M.yaw0)*G,U=-.07*Math.sin(Math.PI*L)*(1-L*.5),V=r(X,U,(M.yaw1-M.yaw0)*.22*Math.sin(Math.PI*Math.min(1,L*1.3)));return w.q.copy(M.fromQ).slerp(V,ro(L/.35)),w.roll=0,L>=1&&(t.mode="walk",t.tw=null,t.x=M.to.x,t.z=M.to.z,t.feet=M.to.y-as,t.eyeY=M.to.y,t.air=!1,t.yaw=t.yawTo=M.yaw1,t.pitch=t.pitchTo=0,this.justLanded=!0),S}if(t.mode==="leave"){let M=t.tw,L=Math.min(1,(g-M.t0)/M.dur),O=ro(L);return w.pos.lerpVectors(M.from,x.pos,O),w.pos.y+=Math.sin(Math.PI*O)*6,w.q.copy(M.fromQ).slerp(x.q,O),w.roll=0,L>=1&&(t.mode="home",t.tw=null),S}w.pos.set(t.x,t.eyeY,t.z);let T=0,D=t.bob;if(D.amp>.001&&p){let M=Math.sin(D.phase),L=Math.sin(D.phase*2),O=D.amp*(1+D.run*.8);w.pos.y+=-Math.abs(M)*.32*O+.16*O;let H=M*.16*O;w.pos.x+=Math.cos(t.yaw)*H,w.pos.z-=Math.sin(t.yaw)*H,T=M*.006*O+L*.0015*O}return w.q.copy(r(t.yaw,t.pitch,T)),w.roll=T,S}}}function vd(i){let e=new An(4,4,{type:Vn,depthBuffer:!0});e.depthTexture=new _i(4,4);let t={tScene:{value:e.texture},tDepth:{value:e.depthTexture},uRes:{value:new $e(4,4)},uTime:i.uTime,uBlur:{value:3},uBand:{value:.22},uFocusY:{value:.47},uPull:{value:0},uAberr:{value:.006},uSat:{value:0},uGrain:{value:.022},uVig:{value:.32},uFlicker:{value:.01},uNear:{value:.5},uFar:{value:3e3},uIndoor:{value:0},uBlurIn:{value:4.5}},n=new lr,r=new Ki(-1,1,1,-1,0,1);return n.add(new rt(new Ft(2,2),new Bt({uniforms:t,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
      }`}))),{LU:t,resize(s,o){e.setSize(s,o),t.uRes.value.set(s,o)},render(s,o,a){t.uNear.value=a.near,t.uFar.value=a.far,s.setRenderTarget(e),s.render(o,a),s.setRenderTarget(null),s.render(n,r)}}}var Md=(i,e,t)=>{if(t<0)return 0;if(i==="torch")return e?t<.04?.55:t<.08?.12:t<.16?.12+(t-.08)/.08*.88:1:Math.max(0,1-t/.12);if(e){if(t<.12)return t/.12*.35;if(t<.24)return .35-(t-.12)/.12*.2;if(t<.7){let n=(t-.24)/.46;return .15+(1-Math.pow(1-n,3))*.85}return 1}return Math.max(0,1-Math.pow(t/.5,.8))};function Ed(i,e){let t=new zs(16772829,0,280,wl.degToRad(32),.7,1.35);t.castShadow=!0,t.shadow.autoUpdate=!1,t.shadow.needsUpdate=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.5,t.shadow.camera.far=280,t.shadow.bias=-.0012,t.shadow.normalBias=.06,i.add(t,t.target);let n=new vi(16753498,0,120,1.25);i.add(n);let r=new Bt({transparent:!0,depthWrite:!1,side:dn,blending:Gn,fog:!1,uniforms:{uTime:e.uTime,uOpacity:{value:0},uColor:{value:new Ye(16773340)}},vertexShader:`
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
      }`}),s=new rt(new $t(1,1,40,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),r);s.frustumCulled=!1,s.renderOrder=5,i.add(s);let o={state:"off",torch:{on:!1,since:-1e9},lamp:{on:!1,since:-1e9},aim:new F(0,0,-1),swing:0,swingV:0,swingZ:0,swingZV:0,lastVX:0,lastVZ:0,shadowTick:0},a=new F,c=new F,l=new F,d=new F,f=(u,...h)=>{let g=window.MEOW_SOUND;g&&g[u]&&g[u](...h)};return{get state(){return o.state},toggle(u){o.state==="off"?(o.state="torch",o.torch.on=!0,o.torch.since=u,f("click",!0)):o.state==="torch"?(o.state="lamp",o.torch.on=!1,o.torch.since=u,o.lamp.on=!0,o.lamp.since=u+120,f("click",!1),setTimeout(()=>f("ignite"),120)):(o.state="off",o.lamp.on=!1,o.lamp.since=u,f("puff")),f("fire",o.state==="lamp"),dispatchEvent(new CustomEvent("meow:light",{detail:{state:o.state}}))},off(u){o.state!=="off"&&(o.state="off",o.torch.on=o.lamp.on=!1,o.torch.since=o.lamp.since=u,f("fire",!1))},update(u,h,g,v,{fog:x,rain:p,bob:E,vx:R,vz:w,motionFull:S}){u.updateMatrixWorld(),a.set(0,0,-1).applyQuaternion(u.quaternion),c.set(1,0,0).applyQuaternion(u.quaternion),l.set(0,1,0).applyQuaternion(u.quaternion);let T=1-Math.pow(1-.16,v*60),D=(h-o.torch.since)/1e3,M=Md("torch",o.torch.on,D)*(o.torch.on&&D>.16?.985+.015*Math.sin(g*40)*Math.sin(g*7):1);if(M>.001){let U=S?E.amp:0;t.position.copy(u.position).addScaledVector(c,.75).addScaledVector(l,-.6-Math.sin(E.phase)*.05*U).addScaledVector(a,.4),d.copy(a),S&&(d.addScaledVector(c,Math.sin(g*1.7)*.004+Math.sin(g*4.3)*.002+Math.sin(E.phase)*.01*U),d.addScaledVector(l,Math.sin(g*2.1+1)*.004+Math.sin(E.phase*2)*.008*U)),o.aim.lerp(d.normalize(),S?T:1).normalize(),t.target.position.copy(t.position).addScaledVector(o.aim,40);let V=90,ee=Math.tan(t.angle)*V;s.position.copy(t.position),s.lookAt(t.target.position),s.scale.set(ee,ee,V),(o.shadowTick=(o.shadowTick+1)%2)===0&&(t.shadow.needsUpdate=!0)}else o.aim.copy(a);t.intensity=M*520,r.uniforms.uOpacity.value=M*(.018+.03*x+.035*p),s.visible=M>.01;let L=(h-o.lamp.since)/1e3,O=o.lamp.on&&L>.7?.88+.07*Math.sin(g*9.3+Math.sin(g*3.1)*2)+.04*Math.sin(g*23.7)+.02*Math.sin(g*41):1,H=Md("lamp",o.lamp.on,L)*O;if(S){let U=(R-o.lastVX)/Math.max(v,.001),V=(w-o.lastVZ)/Math.max(v,.001),ee=-(U*a.z-V*a.x)*.0012,J=-(U*a.x+V*a.z)*.0012;o.swingV+=(-o.swing*14-o.swingV*1.8+ee)*v,o.swing+=o.swingV*v,o.swingZV+=(-o.swingZ*14-o.swingZV*1.8+J+Math.sin(E.phase*2)*.6*E.amp)*v,o.swingZ+=o.swingZV*v}o.lastVX=R,o.lastVZ=w,n.position.copy(u.position).addScaledVector(c,1.1+Math.sin(o.swing)*1.4).addScaledVector(l,-2.4+(1-Math.cos(o.swing))*1.4).addScaledVector(a,2.2+Math.sin(o.swingZ)*1),S&&o.lamp.on&&(n.position.y+=Math.sin(g*6.1)*.03),n.intensity=H*900;let G=document.documentElement,X=Math.max(M,H);return G.classList.toggle("light-on",X>.05),G.classList.toggle("lamp-on",H>.05),X},busy(u){return u-Math.max(o.torch.since,o.lamp.since)<1200}}}function Sd({scene:i,camera:e,heightAt:t,water:n}){let r=(X,U,V)=>window.MEOW_I18N?window.MEOW_I18N.t(X,V):U,s=(X,...U)=>{let V=window.MEOW_SOUND;V&&V[X]&&V[X](...U)},o=(()=>{let X=new Ht,U=new Dt(1,18,12);return X.add(U,{m:I(0,0,0,0,0,0,1,.36,.28),color:V=>{let ee=V.y>.05?.55:.85,J=Math.sin(V.x*30)*Math.sin(V.z*40)>.6&&V.y>0?.8:1;return[ee*.78*J,ee*.84*J,ee*.8*J]}}),X.add(new $t(.3,.45,4),{m:I(-1.05,0,0,0,0,Math.PI/2,1,1,.25),color:()=>[.42,.46,.44]}),X.add(new $t(.16,.4,4),{m:I(.05,.38,0,0,0,-.4,1,1,.2),color:()=>[.42,.46,.44]}),[-1,1].forEach(V=>{X.add(new Dt(.07,8,6),{m:I(.72,.08,V*.17),color:()=>[.95,.95,.92]}),X.add(new Dt(.04,8,6),{m:I(.76,.085,V*.21),color:()=>[.05,.05,.05]})}),X.add(new Mn(.07,.025,6,12),{m:I(.99,-.02,0,0,Math.PI/2,0),color:()=>[.35,.22,.24]}),X.geometry()})(),a=new cn({vertexColors:!0}),c=5,l=1.6,d=Array.from({length:c},(X,U)=>{let V=new rt(o,a);V.visible=!1,V.scale.setScalar(l),i.add(V);let ee=new rt(new Ds(.85,1,32).rotateX(-Math.PI/2),new un({color:15265520,transparent:!0,opacity:0,depthWrite:!1}));return ee.visible=!1,i.add(ee),{m:V,ring:ee,next:performance.now()+1500+U*1700,t0:0,x:0,z:0,yaw:0,on:!1}}),f=(X,U,V,ee)=>{d.forEach(J=>{if(!J.on){if(J.m.visible=!1,X<.05||ee||U<J.next){J.ring.visible=J.ring.visible&&U-J.t0<2600;return}for(let pt=0;pt<8;pt++){let Se=Math.random()*Math.PI*2,Qe=16+Math.random()*60,ue=e.position.x+Math.cos(Se)*Qe,he=e.position.z+Math.sin(Se)*Qe;if(t(ue,he)<V-1.5){J.x=ue,J.z=he,J.yaw=Math.random()*6.28,J.on=!0,J.t0=U;break}}J.next=U+(2500+Math.random()*6e3)/Math.max(.2,X),J.on&&Math.hypot(J.x-e.position.x,J.z-e.position.z)<45&&setTimeout(()=>s("plop",.6),250)}if(!J.on)return;let de=(U-J.t0)/1e3,re=de<.35?de/.35:de<.9?1:Math.max(0,1-(de-.9)/.45),se=re*re*(3-2*re);J.m.visible=!0,J.m.position.set(J.x,V-1.2*l+se*1.45*l,J.z),J.m.rotation.set(0,J.yaw,1.05-(de>.9?(de-.9)*1.6:0));let me=de>.4&&de<.85?1+.12*Math.sin((de-.4)*40):1;J.m.scale.set(l,l*me,l),J.ring.visible=!0,J.ring.position.set(J.x,V+.05,J.z);let ze=Math.max(0,de-.2),Oe=.6+ze*2.4;J.ring.scale.setScalar(Oe),J.ring.material.opacity=Math.max(0,.55-ze*.22),de>1.4&&(J.on=!1,J.m.visible=!1)})};i.add(e);let u=new on;{let X=new cn({color:7031342}),U=new cn({color:2236962}),V=new rt(new Be(.012,.035,2.4,6).translate(0,1.2,0),X),ee=new rt(new Be(.045,.045,.35,8).translate(0,.18,0),U),J=new rt(new Be(.08,.08,.06,12),U);J.rotation.z=Math.PI/2,J.position.set(.06,.42,0),u.add(V,ee,J),u.position.set(.55,-.85,-.9),u.rotation.set(-.95,0,-.25),u.visible=!1,e.add(u)}let h=new F(0,2.4,0),g=new on;{let X=new rt(new Dt(.16,10,8,0,Math.PI*2,0,Math.PI/2),new cn({color:14173230,emissive:4198408})),U=new rt(new Dt(.16,10,8,0,Math.PI*2,Math.PI/2,Math.PI/2),new cn({color:15921386})),V=new rt(new Be(.015,.015,.3,5).translate(0,.22,0),new cn({color:14173230}));g.add(X,U,V),g.scale.setScalar(2.2),g.visible=!1,i.add(g)}let v=16,x=new Lt;x.setAttribute("position",new zt(new Float32Array(v*3),3));let p=new qr(x,new Xr({color:15263968,transparent:!0,opacity:.7}));p.frustumCulled=!1,p.visible=!1,i.add(p);let E=new rt(o,a);E.visible=!1,i.add(E);let R=document.createElement("div");R.className="fish-hint",document.body.appendChild(R);let w=(X,U)=>{R.textContent=X||"",R.classList.toggle("show",!!X),R.classList.toggle("hot",!!U)},S={mode:"idle",t0:0,from:new F,to:new F,biteAt:0,aim:null,catchFrom:new F},T=0;try{T=+(localStorage.getItem("meow.fish")||0)}catch{}let D=new F,M=new F,L=new Hn(new F(0,1,0),0),O=(X,U)=>{L.constant=-U;let V=X.ray.intersectPlane(L,new F);if(!V)return null;let ee=V.distanceTo(e.position);return ee>70||ee<6||t(V.x,V.z)>U-.6?null:V},H=X=>{let U=document.getElementById("toast");U&&(U.textContent=X,U.classList.add("show"),clearTimeout(H.t),H.t=setTimeout(()=>U.classList.remove("show"),3200))},G=()=>{S.mode="idle",u.visible=!1,g.visible=!1,p.visible=!1};return{get busy(){return S.mode!=="idle"},reset(){G(),E.visible=!1,w("")},key(X){return S.mode==="idle"?S.aim?(S.mode="cast",S.t0=X,S.to.copy(S.aim),u.visible=!0,p.visible=!0,g.visible=!0,s("cast"),!0):!1:S.mode==="bite"?this.strike(X):S.mode==="wait"||S.mode==="cast"?(s("reel"),G(),!0):!1},click(X){return S.mode==="bite"?this.strike(X):!1},strike(X){S.mode="catch",S.t0=X,S.catchFrom.copy(g.position),g.visible=!1,s("splash",!0);let U=r("fishNames","Trout|Perch|Carp|Pike|Bass|Catfish").split("|"),V=U[Math.floor(Math.random()*U.length)],ee=18+Math.floor(Math.random()*40);T++;try{localStorage.setItem("meow.fish",String(T))}catch{}return E.scale.setScalar(.6+(ee-18)/60),setTimeout(()=>H("\u{1F41F} "+r("fishCaught","You caught a {name}! {cm} cm \xB7 {n} so far",{name:V,cm:ee,n:T})),700),!0},update(X,U,{active:V,ray:ee,waterY:J,amount:de,indoor:re}){if(f(de,X,J,re),S.aim=V&&!re&&S.mode==="idle"&&ee?O(ee,J):null,e.updateMatrixWorld(),D.copy(h).applyMatrix4(u.matrixWorld),S.mode==="cast"){let se=Math.min(1,(X-S.t0)/800);g.position.lerpVectors(D,S.to,se),g.position.y+=Math.sin(Math.PI*se)*8,se>=1&&(S.mode="wait",S.biteAt=X+3e3+Math.random()*7e3,s("plop",.8))}else if(S.mode==="wait")g.position.set(S.to.x,J+Math.sin(U*2.2)*.06,S.to.z),X>S.biteAt&&(S.mode="bite",S.t0=X,s("splash",!1)),e.position.distanceTo(S.to)>80&&(G(),H(r("fishSnap","The line snapped")));else if(S.mode==="bite"){let se=(X-S.t0)/1e3;g.position.set(S.to.x+Math.sin(se*20)*.08,J-.25-Math.abs(Math.sin(se*9))*.45,S.to.z),se>1.5&&(S.mode="wait",S.biteAt=X+2500+Math.random()*6e3,H(r("fishAway","It got away\u2026")))}else if(S.mode==="catch"){let se=Math.min(1,(X-S.t0)/1100);M.set(0,-.4,-3.2).applyQuaternion(e.quaternion).add(e.position),E.visible=!0,E.position.lerpVectors(S.catchFrom,M,se),E.position.y+=Math.sin(Math.PI*se)*6,E.rotation.set(Math.sin(U*18)*.4,U*4,Math.PI/2*(1-se)),se>=1&&(E.visible=!1,G())}if(p.visible){let se=x.attributes.position;for(let me=0;me<v;me++){let ze=me/(v-1);M.lerpVectors(D,g.visible?g.position:S.catchFrom,ze),M.y-=Math.sin(Math.PI*ze)*(S.mode==="bite"?.2:1.2),se.setXYZ(me,M.x,M.y,M.z)}se.needsUpdate=!0,u.rotation.x=-.95+(S.mode==="bite"?Math.sin(U*30)*.05-.15:0)}V?S.mode==="bite"?w(r("fishBite","A bite! Click now!"),!0):S.mode==="wait"||S.mode==="cast"?w(r("fishWait","Waiting for a bite\u2026 \xB7 R reel in")):S.aim?w(r("fishCast","R  cast the line")):w(""):w("")}}}(()=>{"use strict";let i=document.getElementById("bg");if(!i)return;let e=document.documentElement,t;try{t=new uc({canvas:i,antialias:!0,powerPreference:"low-power"})}catch{e.classList.add("no-webgl"),window.MEOW_BG={scenes:[],setScene(Ge){e.setAttribute("data-scene",Ge)},setMotion(){},start(){},home(){},enter(){},focus(){},pan(){},pulse(){},toggleLight(){}};return}t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),t.toneMapping=Vs,t.shadowMap.enabled=!0,t.shadowMap.type=pr;let n=new lr,r=new yn(50,1,.5,3e3);n.add(r);let s={uTime:{value:0}},o=performance.now(),a=od(n,s),c=new Bs(16777215,4473924,1),l=new Hs(16777215,1);n.add(c,l,l.target),n.fog=new ws(13421772,.004);let d=rd(n),f=sd(n),u=[[0,105],[0,140],[-38,112],[24,78],[0,92],[30,102],[0,125]].map(([ne,Ge])=>({x:ne,z:Ge,r:42})),h=ld({scene:n,heightAt:mn,U:s,snowColor:d.TU.uSnow,clear:u}),g=xd({scene:n,shared:h.shared,isClearing:(ne,Ge)=>h.inClearing(ne,Ge)});h.plant(g.base,0);let v=id({scene:n,shared:h.shared,U:s,camera:r}),x=v.study,p=hd(n,s),E=ud(n,s),R=ad(n,s,t.getPixelRatio()),w=Sd({scene:n,camera:r,heightAt:mn,water:f.mesh}),S=Ed(n,s),T=vd(s),D=window.MEOW_STATE,M=D&&D.motion==="reduced"?"reduced":"full",L=()=>M==="full",O=gd(D&&jn[D.scene]?D.scene:"rain"),H=_d({trees:g,props:h,cabin:v,scenes:O,water:f.mesh}),G=yd({physics:H,trees:g}),X=!1,U=0,V=1,ee=1,J=0,de=0,re=0,se={focus:0,focusTo:0,pan:0,panTo:0,pulse:0},me={x:0,y:0,sx:0,sy:0},ze=new Set,Oe=new Gt(1e9,1e9,1e9,1e9),pt={pos:new F,q:new _t,roll:0},Se={pos:new F,q:new _t},Qe=new at,ue=new F(0,1,0),he=new F,Me=new F,Ke=(ne,Ge)=>window.MEOW_I18N?window.MEOW_I18N.t(ne):Ge,ke=()=>Math.max(.2,Math.min(2.5,window.MEOW_STATE&&Number(window.MEOW_STATE.sens)||1)),je=()=>!X||e.classList.contains("locked")||se.focusTo>0,Tt=()=>!!document.querySelector(".modal:not([hidden])"),lt=ne=>ne&&(/INPUT|TEXTAREA|SELECT/.test(ne.tagName)||ne.isContentEditable),ct=ne=>ne&&ne.closest&&ne.closest(".sidebar, .modal, .gallery, .top, .composer, .tools, .tree-card, .home-btn, .backdrop, .walk-hint, input, button, a, label"),It=ne=>{let Ge=O.cur,We=L()?1:0;me.sx+=(me.x-me.sx)*.035,me.sy+=(me.y-me.sy)*.035,Se.pos.set(Ge.cam.x+(Math.sin(ne*.05)*3+me.sx*6)*We,Ge.cam.y+re+(Math.sin(ne*.07)*.8-me.sy*2.5)*We,Ge.cam.z),he.copy(Ge.look),he.x+=me.sx*3*We;let yt=se.focus;(yt>5e-4||Math.abs(se.pan)>5e-4)&&(Me.copy(Ge.look).sub(Ge.cam).normalize(),Se.pos.addScaledVector(Me,yt*34),Se.pos.y-=yt*4-se.pulse*2,Se.pos.x+=se.pan*10*yt,he.x+=se.pan*38*yt,he.y-=yt*3),Qe.lookAt(Se.pos,he,ue),Se.q.setFromRotationMatrix(Qe)},gt=(ne,Ge)=>{let We=O.cur;s.uTop.value.copy(We.skyTop),s.uHorizon.value.copy(We.skyHorizon),s.uBottom.value.copy(We.skyBottom),s.uSunColor.value.copy(We.sunC),s.uSunDir.value.copy(We.sunDir).normalize(),s.uSunSize.value=We.sunSize,s.uStars.value=We.stars,s.uAurora.value=We.aurora,s.uAur1.value.copy(We.aur1),s.uAur2.value.copy(We.aur2),n.fog.color.copy(We.fog),n.fog.density=We.fogDensity*(1+se.focus*.35)*(1-.85*J),We.pCabin>.5?(d.TU.uHole.value.set(...v.holeBox),f.WU.uStudy.value.set(...v.studyBox)):(d.TU.uHole.value.copy(Oe),f.WU.uStudy.value.copy(Oe)),d.TU.uLow.value.copy(We.low),d.TU.uHigh.value.copy(We.high),d.TU.uSnow.value.copy(We.snowC),d.TU.uSnowLine.value=We.snowLine,d.TU.uSand.value=We.sand,f.mesh.position.y=We.water,f.mat.color.copy(We.waterC),f.mat.roughness=We.waterRough,f.tex.offset.set(ne*.004,ne*.006),l.color.copy(We.lightC),l.intensity=We.light*2.2,l.position.copy(We.lightDir).multiplyScalar(300),c.color.copy(We.hemiSky),c.groundColor.copy(We.hemiGround),c.intensity=We.hemi*1.6,g.update(We,Ge),h.update(We,ne),v.update(We,ne,Ge,We.water,G.walking?G.state.feet:void 0)},xt=()=>!!document.pointerLockElement,ae=0,le=()=>{if(!(xt()||!i.requestPointerLock||ae>0))try{let ne=i.requestPointerLock();ne&&ne.catch&&ne.catch(()=>{ae++})}catch{ae++}},xe=()=>{xt()&&document.exitPointerLock&&(window.MEOW_UNLOCK_REASON="self",document.exitPointerLock())};document.addEventListener("pointerlockerror",()=>{ae++});let ye=document.createElement("div");ye.className="aim-dot",document.body.appendChild(ye);let z=()=>[innerWidth/2,innerHeight/2],Le=ne=>{e.classList.contains("exploring")!==ne&&e.classList.toggle("exploring",ne)},ve=()=>{!X||je()||G.mode!=="home"||(G.enter(r.position,r.quaternion,L(),f.mesh.position.y),Le(!0))},B=()=>{xe(),x.reset(performance.now()),w.reset(),ze.clear(),(G.mode==="walk"||G.mode==="enter")&&G.leave(r.position,r.quaternion,L()),g.hover(-1),e.classList.remove("on-tree","on-book"),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"leave"}}))},y=()=>{!G.out||je()||x.back(performance.now())||B()};document.addEventListener("pointerlockchange",()=>{if(e.classList.toggle("pl",xt()),!xt()){let ne=window.MEOW_UNLOCK_REASON;window.MEOW_UNLOCK_REASON="",ne||setTimeout(()=>{document.hasFocus()&&!document.hidden&&y()},80),ce.pending=!0}});let Z=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"];addEventListener("keydown",ne=>{if(lt(ne.target)||ne.metaKey||ne.ctrlKey||ne.altKey||Tt())return;let Ge=performance.now();if(Z.includes(ne.code)){if(je())return;ne.code.startsWith("Shift")||ne.preventDefault(),ze.add(ne.code),G.mode==="home"&&!ne.code.startsWith("Shift")&&ve();return}if(ne.code==="KeyF"&&!ne.repeat&&X&&!e.classList.contains("locked")){ne.preventDefault(),S.toggle(Ge);return}if(!(je()||!G.walking)){if(ne.code==="Space"){ne.preventDefault(),ne.repeat||G.jump();return}if(ne.code==="KeyR"&&!ne.repeat){w.key(Ge)&&ne.preventDefault();return}ne.code==="KeyE"&&!ne.repeat&&O.cur.pCabin>.5&&v.door.near(r.position.x,r.position.z)&&Ee()}}),addEventListener("keyup",ne=>ze.delete(ne.code)),addEventListener("blur",()=>{ze.clear(),Fe.inside=!1}),addEventListener("keydown",ne=>{if(ne.key!=="Escape"||!G.out||lt(ne.target)||Tt())return;let Ge=document.getElementById("treeCard");Ge&&!Ge.hidden&&Ge.classList.contains("show")||y()},!0);let Q=new Gs;Q.far=900;let j=new $e,oe=(ne,Ge)=>(j.set(ne/innerWidth*2-1,-(Ge/innerHeight)*2+1),Q.setFromCamera(j,r),Q),ce={x:0,y:0,pending:!1,tick:0},K=()=>xt()?z():[ce.x,ce.y],ie=document.createElement("div");ie.className="act-hint",ie.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 3v6" stroke="currentColor" stroke-width="1.6"/><path d="M6.5 9h5.5V3.4A6 6 0 0 0 6.5 9z" fill="currentColor"/></svg><span></span>',document.body.appendChild(ie);let pe=(ne,Ge)=>{if(!G.walking||O.cur.pCabin<.5||!v.door.near(r.position.x,r.position.z))return!1;let We=oe(ne,Ge).intersectObject(v.door.mesh,!1)[0];return!!We&&We.distance<26},Ee=()=>{if(!v.door.canToggle(r.position.x,r.position.z))return!1;let ne=v.door.toggle(performance.now());return window.MEOW_SOUND&&window.MEOW_SOUND.door&&window.MEOW_SOUND.door(ne),!0},_e=ne=>{g.hover(ne)&&(e.classList.toggle("on-tree",ne>=0),dispatchEvent(new CustomEvent("meow:tree",{detail:ne>=0?{type:"hover",id:ne,x:ce.x,y:ce.y}:{type:"leave"}})))},Te=!1,Ce=()=>{if(++ce.tick%3&&!ce.pending)return;ce.pending=!1;let[ne,Ge]=K(),We=G.walking&&!je(),yt=We&&pe(ne,Ge);yt!==Te&&(Te=yt,ie.classList.toggle("show",yt)),yt&&(ie.querySelector("span").textContent=v.door.open?Ke("doorClose","Click to close the door"):Ke("doorOpen","Click to open the door")),e.classList.toggle("on-book",x.hover(oe(ne,Ge),We&&O.cur.pCabin>.5&&J>.5));let gn=!je()&&J<.5&&!G.gliding&&(G.walking||Fe.inside&&!Fe.ui);xt()&&(ce.x=ne,ce.y=Ge),_e(gn?g.pick(oe(ne,Ge)):-1)},Fe={x:-1,y:-1,inside:!1,ui:!1},we=null,te=null;addEventListener("pointerdown",ne=>{if(je()||ct(ne.target)||G.gliding)return;if(ne.button===2||ne.pointerType==="touch"&&ne.button===0)we={x:ne.clientX,y:ne.clientY,lx:ne.clientX,ly:ne.clientY,moved:!1,touch:ne.pointerType==="touch"},ne.preventDefault();else if(ne.button===0){if(G.walking&&!xt()&&ne.pointerType==="mouse"&&!ae&&i.requestPointerLock){le(),te=null,ne.preventDefault(),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}));return}te={x:ne.clientX,y:ne.clientY},ne.preventDefault()}}),addEventListener("contextmenu",ne=>{X&&!ct(ne.target)&&!e.classList.contains("locked")&&ne.preventDefault()}),addEventListener("pointermove",ne=>{if(me.x=ne.clientX/innerWidth*2-1,me.y=ne.clientY/innerHeight*2-1,we){Math.hypot(ne.clientX-we.x,ne.clientY-we.y)>5&&(we.moved=!0),G.walking&&G.look(ne.clientX-we.lx,ne.clientY-we.ly,.0035),we.lx=ne.clientX,we.ly=ne.clientY,e.classList.add("looking");return}if(xt()){G.walking&&!je()&&G.look(ne.movementX,ne.movementY,.0024*ke());return}Fe.x=ne.clientX,Fe.y=ne.clientY,Fe.inside=!0,Fe.ui=!!ct(ne.target),G.walking&&!je()&&!Fe.ui&&ne.pointerType!=="touch"&&(ne.movementX||ne.movementY)&&G.look(ne.movementX,ne.movementY,.0028*ke()),ce.x=ne.clientX,ce.y=ne.clientY,ce.pending=!0},{passive:!0}),document.addEventListener("mouseleave",()=>{Fe.inside=!1,ce.pending=!0}),addEventListener("pointerup",ne=>{let Ge=!1;if(we?(Ge=we.touch&&!we.moved,we=null,e.classList.remove("looking")):te&&ne.button===0&&(Ge=xt()||Math.hypot(ne.clientX-te.x,ne.clientY-te.y)<8),te=null,!Ge)return;let[We,yt]=xt()?z():[ne.clientX,ne.clientY],gn=performance.now();if(G.walking&&w.click(gn)||G.walking&&O.cur.pCabin>.5&&J>.5&&x.click(oe(We,yt),gn))return;if(pe(We,yt)){Ee();return}let Nn=g.hovered>=0?g.hovered:J<.5?g.pick(oe(We,yt)):-1;Nn>=0?(g.shake(Nn,gn),dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"click",id:Nn,x:We,y:yt}}))):dispatchEvent(new CustomEvent("meow:tree",{detail:{type:"miss"}}))});let Pe=()=>{let ne=innerWidth,Ge=innerHeight;t.setSize(ne,Ge,!1);let We=t.getDrawingBufferSize(new $e);T.resize(We.x,We.y),r.aspect=ne/Ge,r.updateProjectionMatrix()};addEventListener("resize",()=>{clearTimeout(Pe.t),Pe.t=setTimeout(Pe,120)});let fe={last:0,sum:0,n:0,level:0,since:0},Ue=[Math.min(window.devicePixelRatio||1,1.5),1.1,.85,.7],He=ne=>{fe.since||(fe.since=ne);let Ge=ne-(fe.last||ne);if(fe.last=ne,!(ne-fe.since<5e3||Ge>250||document.hidden)&&(fe.sum+=Ge,fe.n++,fe.n>=90)){let We=fe.sum/fe.n;fe.sum=fe.n=0,We>30&&fe.level<Ue.length-1&&Ue[fe.level+1]<t.getPixelRatio()&&(fe.level++,t.setPixelRatio(Ue[fe.level]),Pe())}},Ae=0,nt=ne=>{let Ge=Math.min(.1,Math.max(.001,(ne-(Ae||ne))/1e3));Ae=ne;let We=(ne-o)/1e3;s.uTime.value=We;let yt=O.step(ne);re=L()&&yt<1?Math.sin(Math.PI*yt)*9:0;let gn=L()?1-Math.pow(1-.035,Ge*60):1;se.focus+=(se.focusTo-se.focus)*gn,se.pan+=(se.panTo-se.pan)*(L()?1-Math.pow(.95,Ge*60):1),se.pulse*=Math.pow(.94,Ge*60),V+=(ee-V)*.04,It(We);let Nn=G.update(Ge,ne,ze,Se,L(),O,f.mesh,pt);G.justLanded&&(G.justLanded=!1,le()),G.mode==="home"&&Le(!1),r.position.copy(pt.pos),r.quaternion.copy(pt.q);let Wn=(innerWidth<700?62:50)-(G.mode==="home"?se.focus*6-se.pulse*1.5:0);if(Math.abs(r.fov-Wn)>.01&&(r.fov=Wn,r.updateProjectionMatrix()),a.position.copy(r.position),!xt()&&G.walking&&Fe.inside&&!Fe.ui&&!we&&!je()&&L()&&Fe.y>innerHeight*.15&&Fe.y<innerHeight*.85){let hn=Math.max(30,innerWidth*.04);Fe.x>innerWidth-hn?G.turn(-1.1*Ge*(Fe.x-(innerWidth-hn))/hn):Fe.x>=0&&Fe.x<hn&&G.turn(1.1*Ge*(hn-Fe.x)/hn)}let Ct=G.state,Zt=G.walking&&H.inside(Ct.x,Ct.z,Ct.feet);J+=((Zt?1:0)-J)*(1-Math.pow(.88,Ge*60)),de+=((G.out?1:0)-de)*(1-Math.pow(.97,Ge*60)),G.walking&&O.cur.pCabin<.6&&v.inside(Ct.x,Ct.z,Ct.feet)&&B(),gt(We,ne);let ln=1-J;if(R.update(O.cur,r.position,O.cur.look,O.cur.cam,f.mesh.position.y,ln,Ge),p.update(O.cur.pRipples*ln,r.position,f.mesh.position.y),E.update(Math.min(1,Math.max(0,(100-O.cur.snowLine)/80))*ln),Nn&&!Zt){let hn=mn(Ct.x,Ct.z);if(hn>f.mesh.position.y+.6&&(O.name==="snow"||hn>O.cur.snowLine+4)&&!H.floor(Ct.x,Ct.z,Ct.feet).built){let P=new F(mn(Ct.x-1.5,Ct.z)-mn(Ct.x+1.5,Ct.z),3,mn(Ct.x,Ct.z-1.5)-mn(Ct.x,Ct.z+1.5)).normalize();E.place(Ct.x,hn,Ct.z,Math.atan2(-Ct.vx,-Ct.vz),P)}}S.update(r,ne,We,Ge,{fog:Math.min(1.6,n.fog.density/.004),rain:R.rainAmount,bob:Ct.bob,vx:Ct.vx,vz:Ct.vz,motionFull:L()});{let[hn,Dn]=K();w.update(ne,We,{active:G.walking&&!je(),ray:G.walking?oe(hn,Dn):null,waterY:f.mesh.position.y,amount:O.cur.fishy,indoor:J>.5})}Ce();let rn=T.LU,ei=t.getPixelRatio(),Ai=L()&&yt<1?Math.sin(Math.PI*(yt<.5?4*yt*yt*yt:1-Math.pow(-2*yt+2,3)/2))*6:0,ti=L()?Math.max(0,1-(ne-U)/3600):0;rn.uBlur.value=2.6*ei*(1+se.focus*2.6)*(1-de*.7)*O.cur.dof,rn.uBand.value=.22-se.focus*.1+de*.12,rn.uPull.value=(Ai+Math.pow(ti,1.6)*18+se.pulse*3)*ei,rn.uFlicker.value=L()?.012:0,rn.uIndoor.value=L()?J:0,rn.uBlurIn.value=4.5*ei,rn.uVig.value=.32+J*.16,rn.uSat.value=O.cur.sat+(Math.max(O.cur.sat,.8)-O.cur.sat)*J,t.toneMappingExposure=V,T.render(t,n,r)},Ze=ne=>{requestAnimationFrame(Ze),!(!X||document.hidden)&&(nt(ne),He(ne))},it=()=>e.getAttribute("data-theme")==="dark"?.62:1;new MutationObserver(()=>{ee=it()}).observe(e,{attributes:!0,attributeFilter:["data-theme"]});let wt=(ne,Ge)=>{O.go(ne,L()?Ge:1,performance.now()),e.setAttribute("data-scene",O.name),X&&dispatchEvent(new CustomEvent("meow:shot",{detail:{name:O.name,dur:L()?Ge:1}}))};e.setAttribute("data-scene",O.name),window.MEOW_BG={scenes:fd,setScene(ne){if(jn[ne]||(ne="rain"),!(ne===O.name&&X)){if(!X){O.go(ne,1,performance.now()),e.setAttribute("data-scene",ne);return}wt(ne,3200)}},setMotion(ne){M=ne==="reduced"?"reduced":"full"},focus(ne){se.focusTo=ne?1:0,ne&&G.out&&B()},pan(ne){se.panTo=Math.max(-1,Math.min(1,ne||0))},pulse(){L()&&(se.pulse=1)},toggleLight(){S.toggle(performance.now())},enter(){ve()},home(){B()},start(){if(X)return;X=!0,ee=V=it(),Pe();let ne=O.name;O.go(ne,1,-1e9),O.step(performance.now()),L()&&O.offsetHome(new F(0,120,230),new F(0,30,0)),U=performance.now(),wt(ne,4200),i.classList.add("on")},_standAt(ne,Ge,We){let yt=We==="study"?St.y+en.floor*St.S:We==="mezz"?St.y+en.mezz*St.S:1e5;G.place(ne,Ge,H.floor(ne,Ge,yt).y),Le(!0)},_look(ne,Ge,We=0){let yt=G.state;G.face(Math.atan2(-(ne-yt.x),-(Ge-yt.z)),We)},_pos(){let ne=G.state;return{x:ne.x,z:ne.z,feet:ne.feet,mode:G.mode,cx:r.position.x,cy:r.position.y,cz:r.position.z,yaw:ne.yaw,pitch:ne.pitch,indoor:J}},_toggleDoor(){v.door.toggle(performance.now())},_aimDoor(ne,Ge){let yt=oe(ne,Ge).intersectObject(v.door.mesh,!1)[0];return{hit:!!yt,d:yt?yt.distance:-1,walking:G.walking,busy:je(),hover:[ce.x,ce.y],ok:pe(ne,Ge)}},get _trees(){return g},get _keys(){return[...ze]},get _study(){return x},get _cabin(){return v},get _physics(){return H},get _player(){return G},get _cur(){return O.cur},_nearTree(ne,Ge=16){let We=g.base[ne%g.base.length];We&&this._standAt(We.p.x,We.p.z+Ge)}};{let ne=document.querySelector(".walk-hint");ne&&ne.addEventListener("click",()=>ve())}requestAnimationFrame(Ze),window.MEOW_READY&&window.MEOW_STATE&&window.MEOW_READY.then(()=>window.MEOW_BG.start())})();})();
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
